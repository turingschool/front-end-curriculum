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
Creating better offline experiences for web apps has been a big focus for spec writers in recent years. The Service Worker spec allows us to cache assets for offline use, and gives us an interface to work with data storage through IndexedDB. These two features already gives us a much better offline experience than we've had in the past. Despite how much we can provide our users through caching and local data storage, there will still be times where it's unavoidable to make a network request. For example, say you're playing a game online. We can store the current progress in IndexedDB with a service worker, but if we want the users to be able to pick up where they left off on a different device, we'd need to sync that progress to a server somewhere.

This is where [Background Sync]() comes in handy. The concept behind background sync is to handle scenarios where a user might have intermittent or an interrupted network connection. Using a service worker to handle background sync allows us to defer an action we want to take until a user regains their connection. For example, think about when you write an email and it autosaves periodically. If you're offline, you could potentially save a draft to local storage, and only when the internet connection returns, persist a draft to a more stable database.