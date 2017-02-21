---
title: Introduction to Service Workers
length: 90 mins
tags: javascript, service workers, offline, cachestorage, web APIs
---

## Goals

By the end of this lesson, you will:

* Understand the relationship between web workers and service workers
* Understand when and why to use service workers
* Be able to implement service workers for making an application available offline


## The Offline Problem
Web developers have long been thinking about how to create offline applications that behavr more like native apps. The initial solution to this problem was [AppCache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache), but it had significant pain points and was recently scrapped in favor of [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

## What are Service Workers?
The service worker is a relatively new API that allows developers to run a script in the background of their application. With a service worker script being run in the background, we can add new features to our applications that help create better offline experiences for users. For example, a service worker could implement push notifications or background data synchronization - features that were once previously limited to native apps. A service worker script also gives us the ability to intercept network requests and determine how to handle them. This is useful for when we want to serve assets from a cache when a user is offline.

## Web Workers
Recall that client-side JavaScript is, by default, single-threaded. Multiple scripts cannot run simultaneously, unless we leverage a [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). Web workers are a way to provide concurrency in JavaScript by allowing a worker script to run in its own thread, separate from the rest of the code associated with the application.

When we mentioned earlier that a service worker script runs in the 'background' of our application, what we really mean is that **a service worker is a type of web worker**. This is the key to many of the offline capabilities we can provide when using a service worker.

While this aspect of service workers provides us with great flexibility, it also requires us to change the way we think about how a script communicates with our application. A worker script cannot directly interact with the DOM like we are used to. Instead, service workers can communicate with the pages it controls by responding to events and messages.

## Practice
We'll create simple Markdown Previewer application that allows users to type markdown into a textarea, transforming it to HTML on the fly. We'll use a web worker for the transformation, and a service worker for loading up our assets when a user is offline.

Follow along by cloning the [markdown-previewer](https://github.com/turingschool-examples/markdown-previewer) application. We already have some basic HTML and CSS ready for us, and we also have a `markdown-it.min.js` file in our `lib` directory that will handle our markdown to HTML transformation.

## Registering a Service Worker
The first thing we want to do is make sure all of our assets necessary for rendering the page are available offline. This requires a couple of steps.

Add the following code in a new JavaScript file and add the file to your `index.html`:

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        // Registration was successful
        console.log('ServiceWorker registration successful');
      }).catch(err => {
        // registration failed :(
        console.log(`ServiceWorker registration failed: ${err}`);
      });
  });
}
```

Our registration code starts with some feature detection, by checking if `serviceWorker` actually exists in `navigator`. Assuming we're using a modern browser that supports service workers, we should then be able to register our worker on page load with `navigator.serviceWorker.register()`. This method takes a single parameter - the path to a javascript file that represents your service worker (we will create this file in a moment), and returns a promise.

Now let's create that service worker script that we referenced in our registration code. Create a `service-worker.js` file in the root of your application. For now, let's just add a service worker that will log to the console once it's been installed:

```javascript
self.addEventListener('install', function(event) {
  console.log('Service Worker Installed!');
});
```

Notice the `self` object in our service worker script. This is how you reference the instance of the service worker itself. You can think of it as being similar to your `this` context. Using our `self` object, we are adding a listener for the `install` event of our service worker. This is one of the phases of a service worker's lifecycle. It's important to understand the lifecycle of a service worker so you can better predict its behavior in different circumstances.

### Lifecycle of a Service Worker

1. Registration - browser is aware that we have a service worker that needs to be recognized, and will kick off the installation step upon a successful registration
2. Installation - the service worker is installed, but doesn't actually control anything on the page just yet. This is a good phase to cache assets for offline use.
3. Activation - the service worker has been installed and is activated. This is a good place for us to manage old cached assets and update the service worker.
4. Full Page Control - the service worker has been activated and now has full control over any pages that fall under its scope

## Inspecting a Service Worker
If we actually boot up our application:

```bash
python -m SimpleHTTPServer 3000
```

_Note: [what does this command do?](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)_

we see the HTML and CSS at `localhost:3000`. We can check up on our service worker by clicking on the 'Application' tab of dev tools, and selecting 'Service Workers' in the left panel:

![Dev Tools Service Workers][devtools-service-workers]

This panel gives us a lot of handy tools for debugging our service worker. Most importantly, we can simulate being offline by selecting the 'offline' checkbox. If we select this and refresh our application, we'll see we get an error that we're offline and nothing will load.

![No Internet][no-internet]

This is because we haven't actually told our service worker that we want to cache assets for offline use. Let's update our service worker to do that now.


## Serving Assets Offline
Before we add some assets to serve offline, shut down your local server and refresh your application. You should notice that nothing loads. We get an error that nothing exists at our localhost endpoint. We can solve this by adjusting the code in our service worker file. Remember we said the installation phase of the worker's lifecycle was a good time to add assets to our cache. Update your service worker with the following:

```javascript
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('assets-v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/css/app.css',
        '/lib/markdown-it.min.js'
      ])
    })
  );
});
```

With these changes, we're telling our service worker that upon installation, we want to create a new cache of assets. Service workers use the CacheStorage API as its underlying method for storage, which you'll learn about more in an upcoming lesson. For now, just know that we have access to a `caches` variable that allows us to `open` a new cache. This cache will have a name (in our case, `assets-v1`), and upon opening, we can specify a list of files we'd like to add to this cache. Here, we are adding our index page, css and markdown library to make them available offline.

Next, we have to tell our service worker to intercept any network requests to these files so that it can serve them through the cache we just created, rather than trying to find them online:

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

You'll often hear that service workers are **event-based web workers**. This means our service worker is going to respond and communicate explicity through events. In this code, we are adding a listener for any `fetch` events, and checking to see if they exist in our cache with `caches.match()`. If it finds a match, it will return the asset right away. If it doesn't, it will go ahead and fetch it from the server. You can think of a service worker as a proxy for network requests.

Now if you refresh your application and reselect the 'offline' box, you'll see that our app loads and works even when we're offline. You can also completely shut down your python server in the command line and you'll still be able to see and use your app. In the 'Application' panel of dev tools, you'll see an option for 'CacheStorage' in the left sidebar. If you navigate to this tab, you'll see all of the assets you just stored for offline use. This is where your service worker is pulling the files from, rather than making additional network requests:


![Assets Cache][assets-cache]

## Communication with Service Workers
Because service workers run in the background, they do not have direct access to the DOM like we're used to with other JavaScript files. They are completely detached from the window they control. If we want our service worker to be aware of DOM-related content or interactions, we must communicate with them through messaging events.

When a service worker receives a message, we can handle it from our service worker file like so:

```javascript
self.addEventListener('message', event => {
  let eventData = event.data // any data you pass into the message
  console.log('Event Data: ', eventData);
});
```

Let's add a submit button that will mimic saving our current markdown. We will eventually store our saved markdown to IndexedDB, but that will be covered in a future lesson.

```javascript
$('#submit-markdown').on('click', function() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      mdContent: $('#live-markdown').val();
    });
  }
});
```

In our click event, we first want to check if there is actually a service worker controlling the page. Remember service workers must first be registered, installed and activated before they actually take over a page. We can check if a service worker has control by accessing `navigator.serviceWorker.controller`.

Assuming we have a service worker running, we can then post a message to our controller with `navigator.serviceWorker.controller.postMessage()`. This method can take in an object of data that we'll now have access to in our service worker script. Here we are simply sending over the value of the current markdown.

Refresh your application, type in some markdown and click your submit button. If we go to the service workers devtools panel again, we can click on 'inspect' for our service worker and we'll get a brand new dev tools window, specific to our service worker. If you click on the 'Console' tab in this new window, you'll notice the `console.log()` we added to our service worker script has been logged. The service workers debug window gives you all the functionality you need to troubleshoot your code.

Sending a message back to the application is a little more complex, as we have to target the page that our service worker is controlling. We can do this from our service worker script by updating our event listener on the `message` event:

```javascript
self.addEventListener('message', event => {
  self.clients.matchAll().then(clients => {
    clients[0].postMessage({
      message: 'Message being sent from the service worker!'
    });
  });
});
```

We can access our controlled application through `self.clients.matchAll()` from our service worker. Because our worker might control multiple pages, this method is going to give us back an array of clients (e.g. windows or application pages). Posting a message to our current window requires us to target the first item in that array, `clients[0]`.

### Setting up Push Notifications

Push notifications are one of the most exciting features that service workers make possible. It mimics the behavior of native applications, and can be used to alert users to updates or messages.

In order to set up push notifications, we first must request permission from the user. Within our service worker registration:

```javascript
navigator.serviceWorker.register('./service-worker.js')
  .then(registration => {
    console.log('ServiceWorker registration successful');
    Notification.requestPermission();
  })
```

We can call `Notification.requestPermission()` which will display a prompt for users to enable notifications:

![Notification Permissions][notification-permissions]

Then, from within our service worker script, let's update our message handler to display a notification:

```javascript
self.addEventListener('message', event => {
  self.registration.showNotification('New Markdown Saved!');
});
```

The `showNotification()` method takes two parameters. The first is a title message for the notification, and the second is an object of additional options. This lets you create more advanced messages where users can actually interact with the notification.

If we refresh our application and give it access to send push notifications, we should now see a web notification when we click our submit button:

![Notification][notification]

## What Good is all of this?

So far, the functionality we've implemented with our service worker is pretty minimal. We've successfully offlined our application, and learned how to send messages back and forth between our worker and our app. The communication logic is a bit contrived at this point -- we could have done all of this from within our original JavaScript thread on our app. Where this set up will come in handy is when we start actually saving our markdowns to IndexedDB, and when we have multiple people adding new files. In the next lessons, we'll learn how service workers interface with IndexedDB to persist data, and display notifications when other users add new markdowns.

## Resources

[Service Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
[Push Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)

[assets-cache]: /assets/images/lessons/service-workers/assets-cache.png
[notification]: /assets/images/lessons/service-workers/notification.png
[notification-permissions]: /assets/images/lessons/service-workers/notification-permissions.png
[devtools-service-workers]: /assets/images/lessons/service-workers/devtools-service-workers.png
[no-internet]: /assets/images/lessons/service-workers/no-internet.png
