---
title: Background Sync & Push with Service Workers
length: 90 mins
tags: javascript, service workers, offline, push notifications, web APIs, sync
---

## Goals

By the end of this lesson, you will:

* Know how to implement background sync with service workers
* Understand how to handle interactions when a user has an intermittent connection

## Background Sync: Enhancing the Offline Experience
Creating better offline experiences for web apps has been a big focus for spec writers in recent years. The Service Worker spec allows us to cache assets for offline use, and gives us an interface to work with data storage through IndexedDB. These two features already give us a much better offline experience than we've had in the past. Despite how much we can provide our users through caching and local data storage, there will still be times where it's unavoidable to make a network request. For example, say you're using a messaging application and trying to post a new message to the conversation. In order for anyone else to receive it, it has to be sent to a server.

This is where [Background Sync](https://developers.google.com/web/updates/2015/12/background-sync) comes in handy. The concept behind background sync is to handle scenarios where a user might have intermittent or an interrupted network connection. Using a service worker to handle background sync allows us to defer an action we want to take until a user regains their connection. In our original example, we could use background sync to queue up a `submitMessage` action that sends a `POST` request to the server with our message. When the user regains connection, it will automatically execute that fetch request and submit our message. No having to hit the submit button a thousand times and no risk of sending the same message more than once.

## Follow Along
Clone the [markdown-previewer](https://github.com/turingschool-examples/markdown-previewer/tree/master) repo and checkout the [sync-begin](https://github.com/turingschool-examples/markdown-previewer/tree/sync-begin) branch to follow along. The finished example can be found on the [sync](https://github.com/turingschool-examples/markdown-previewer/tree/sync) branch. Several refactoring changes have been made in these branches to support background sync.

Run `npm install` and `npm run start` to spin up the application. You can access it at `localhost:5000`.

### Registering a Sync Event
When we attempt to register a service worker, we want to be checking if 'serviceWorker' exists in our navigator object, because it's a relatively new API and we need to start with some feature detection.

The background sync API requires a similar check. When we register our service worker, we also want to check for 'SyncManager' in our `window` object.  In your `app.js` file, register your service worker with the following checks in place:

```javascript
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => navigator.serviceWorker.ready)
      .catch(err => {
        console.log(`ServiceWorker registration failed: ${err}`);
      });
  });
}
```

Once we have a successful registration, we want to wait for our service worker to finish installing and activating. We can check this by firing off `navigator.serviceWorker.ready`. This is important for our next steps: we want to request permission from the user to display Push notifications, so we can alert them when a sync event has occurred, and we want to register a sync event for our service worker to listen to.

The `navigator.serviceWorker.ready` method returns another promise, that allows us to easily chain on our next steps with `.then()`:

```javascript
navigator.serviceWorker.register('./service-worker.js')
  .then(registration => navigator.serviceWorker.ready)
  .then(registration => {
    Notification.requestPermission();
    $('#submit-markdown').on('click', () => {
      saveMarkdownLocally().then(() => {
        registration.sync.register('persistToDatabase');
      }).catch(err => console.log("Error submitting markdown: ", err));
    });
  })
  .catch(err => {
    console.log(`ServiceWorker registration failed: ${err}`);
  });
```

The `Notification.requestPermission()` line will now give our users a prompt to allow push notifications. Assuming they comply, we will be able to notify our user's when they submit a new markdown file that it has been saved to the server.

To accomplish this, we are also adding a click event to our submit button that will first save the markdown file to indexedDB through a custom function that has already been written for you (`saveMarkdownLocally`). This function returns a promise that then allows us to register a sync event called `persistToDatabase`.

We can use the service worker registration object to call `sync.register()` for a new sync event. This method takes a single parameter -- the name of the sync event -- so that we can easily identify and react to it from within our service worker. This allows us to have multiple sync events that can each do different things.

## Responding to a sync event
From within our service worker, we now want to handle this event whenever it is fired. In the same event-based fashion, we can add an event listener for `sync` to the service worker instance. In the `service-worker.js` file, add the following:

```javascript
self.addEventListener('sync', event => {
  if (event.tag === 'persistToDatabase') {
    event.waitUntil(persistLocalChanges()
      .then(() => {
        self.registration.showNotification("Markdowns synced to server");
      })
      .catch(() => {
        console.log("Error syncing markdowns to server");
      })
    );
  }
});
```

Our handler function here is doing a couple of things. First, we're checking if the sync event has a tag property that matches the one we specified in our submit handler (`persistToDatabase`). Event sync event has a tag that uniquely identifies it. If we had multiple sync events with different tag names, we could write a `switch` statement here to alter the behavior of each event.

The next line, `event.waitUntil()` is the key to the magic in background sync. This method takes a single parameter, a function that should return a promise. In our case, we are calling a function `persistLocalChanges()`. Let's add this function to the top of our service worker file. We want it to take any of our local markdowns in IndexedDB, and `POST` them to our server:

```javascript
function persistLocalChanges() {
  return getLocalRecords().then(records => {
    return fetch('/markdowns', {
      method: 'POST',
      body: JSON.stringify({ 
        markdowns: records
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
}
```

In this function, we are calling `getLocalRecords()`, a function that has been pre-written for you to gather any records that exist in IndexedDB. We're then making a fetch request to `POST` these markdowns to our API endpoint `/markdowns`. 

Remember that all `fetch` requests return a promise. If a user is not connected to the internet, our call to `persistLocalChanges()` will fail. The beauty of background sync is that's ok! Our sync event will queue this function and wait until it succeeds. When a user regains their connection, the fetch request will succeed, and our success handler for our sync event will be fired. Let's take a look back at how we're handling the sync event:

```javascript
event.waitUntil(persistLocalChanges()
  .then(() => {
    self.registration.showNotification("Markdowns synced to server");
  })
  .catch(() => {
    console.log("Error syncing markdowns to server");
  })
);
```

Once `persistLocalChanges()` succeeds, our `.then()` will be fired off. In our case, we are displaying a simple push notification to the user with `self.registration.showNotification()` to inform them that their markdowns have been saved. If it fails for any reason, we'll just log a message to the console for now.

## Testing It Out
Now if we spin up our application we should see a couple of things:

1. We are immediately prompted with a request to permit Push Notifications
2. If we are connected to wifi, we can submit a new markdown and it will be saved to IndexedDB **and** our server.
3. We will get a push notification that the markdown has been synced to our server. If you do this with the network tab of devtools opened, you'll see a successful network `POST` request with a response that returns all of the markdowns from the back-end.

Now let's disconnect from wifi. You may have noticed in the service workers panel of dev tools that you can 'mimic' being offline by toggling a checkbox. With background sync, this will not work. We actually have to turn wifi off on our computers:

1. Turn wifi connection off.
2. Submit a new markdown. You should see it updates the count of markdowns in IndexedDB, and now appears in the drop down menu. It was successfully saved locally.
3. You will **not** see the push notification saying that the markdown was synced to the server, because you are offline. This network request is now effectively 'queued up' to fire the next time our internet returns.
4. Turn wifi back on.
5. You'll see a successful network request in the network panel of dev tools, and you'll get the push notification saying your changes have been synced.

## Coming Soon: Periodic Sync
Another important thing you might want to do with background sync is periodically fetch data from a server to make sure your users are viewing the most recent information. A `periodicSync` API is currently in progress for this use-case, but not yet available. (The [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/periodicSync) is pretty much completely empty still.) While we wait for this spec to be finalized, the old-fashioned solution to this problem would be to continuously fire off a fetch event that polls your server for the latest data. It's not ideal, as this code cannot be run in the background as it would be with a service worker, but it gives us a solution for the time being.

## Resources
[Using Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)