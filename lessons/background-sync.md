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

## Coming Soon: Periodic Sync
Another important thing you might want to do with background sync is periodically fetch data from a server to make sure your users are viewing the most recent information. A `periodicSync` API is currently in progress for this use-case, but not yet available. (The [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/periodicSync) is pretty much completely empty still.) While we wait for this spec to be finalized, the old-fashioned solution to this problem would be to continuously fire off a fetch event that polls your server for the latest data. It's not ideal, as this code cannot be run in the background as it would be with a service worker, but it gives us a solution for the time being.

## Resources
[Using Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)