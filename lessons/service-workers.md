---
title: Intro to Service Workers
length: 90 mins
tags: javascript, service workers, offline, cachestorage, web APIs
---

# Intro to Service Workers

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

Follow along by cloning the [markdown-previewer](https://github.com/turingschool-examples/markdown-previewer) application.


## Registering a Service Worker

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
```