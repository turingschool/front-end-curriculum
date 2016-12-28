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

Follow along by cloning the [markdown-previewer](https://github.com/turingschool-examples/markdown-previewer) application. We already have some basic HTML and CSS ready for us, and we also have a `markdown-it.min.js` file in our `lib` directory that will handle our markdown to HTML transformation.


## Serving Assets Offline

The first thing we want to do is make sure all of our assets necessary for rendering the page are available offline. This requires a couple of steps.

### Registering a Service Worker

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
If we actually boot up our application, (an easy way to do this is with `python -m SimpleHTTPServer`), we can see in the console that our registration was successful, but we never actually reach our 'Service Worker Installed!' message. This is because the service worker script is run in the background, on its own thread, separate from our application.

In order to inspect a service worker, we can go to [chrome://serviceworker-internals](chrome://serviceworker-internals). Here you'll see details listed for any service workers that have been registered while you were browsing. In our case, we can see that our service worker is activated and running. If we click the 'inspect' button, we will actually see that our installation message *was* logged to the console - just a separate one :) 