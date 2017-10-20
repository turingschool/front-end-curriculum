---
title: Introduction to Service Workers
layout: presentation
tags: service workers, PWAs, offline
module: 4
---

<section>
  <h2>Intro to Service Workers</h2>
</section>

<section>
  <h3>Goals:</h3>
  <ol>
    <li>Understand when and why to use service workers</li>
    <li>Be able to implement service workers for making application assets available offline</li>
  </ol>
</section>

<section>
  <section>
    <h3>What is a Service Worker?</h3>
  </section>
  <section>
    <p>a new API that allows you to run a script in <i>background</i> of your application and facilitates creating <br /><i>Progressive Web Apps</i></p>
  </section>
</section>

<section>
  <h3>What can Service Workers do?</h3>
  <ul>
    <li>offline your application</li>
    <li>implement background sync*</li>
    <li>enable push notifications*</li>
  </ul>
</section>

<section>
  <section>
    <h3>Characteristics of a Service Worker</h3>
  </section>
  <section>
    <h4><b>Runs in the background</b></h4>
    <ul>
      <li><b>web workers</b> are single JavaScript files, run on own thread</li>
      <li>don't block execution of other client-side code</li>
      <li>handle time-intensive operations without locking UI</li>
      <li><b>service workers</b> are a type of web worker</li>
      <li>service workers allow background processing that specifically relates to handling <b>network requests</b></li>
    </ul>
  </section>
  <section>
    <h4><b>Cannot interact with DOM</b></h4>
    <ul>
      <li>can't access the DOM tree to do any manipulations</li>
      <li>must communicate through sending messages back and forth</li>
    </ul>
  </section>
  <section>
    <h4><b>Event-based</b></h4>
    <ul>
      <li>service worker can 'go to sleep' at any time</li>
      <li>is only woken up and utilized during events</li>
    </ul>
    <img src="https://mdn.mozillademos.org/files/12632/sw-events.png" />
  </section>
  <section>
    <p><b>Read:</b> <a href="https://aarontgrogg.com/blog/2015/07/20/the-difference-between-service-workers-web-workers-and-websockets/">What's the Difference Between Service Workers, Web Workers, and Web Sockets?</a></p>
  </section>
</section>

<section>
  <section>
    <h4>Let's Practice</h4>
    <p><b>Familiarize Yourself with DevTools:</b></p>
    <p>1. Check out the 'Application' tab in dev tools</p>
    <p>2. Click on the 'Service Workers' tab and check the 'Show All' box</p>
  </section>
  <section>
    <p><a href="https://github.com/turingschool-examples/offline-news">Clone this repo</a></p>
    <p><pre><code>`npm install`</code></pre></p>
    <p><pre><code>`npm start`</code></pre></p>
    <p><pre><code>`http://localhost:3000`</code></pre></p>
  </section>
</section>

<section>
  <section>
    <h3>Service Worker Lifecycle</h3>
  </section>
  <section>
    <p><b>1. Registration:</b> browser is aware that we have a service worker that needs to be recognized, and will kick off the installation step upon a successful registration</p>
  </section>
  <section>
    <p><b>2. Installation:</b> the service worker is installed, but doesn’t actually control anything on the page just yet. This is a good phase to cache assets for offline use.</p>
  </section>
  <section>
    <p><b>3. Activation:</b> the service worker has been installed and is activated. This is a good place for us to manage old cached assets and update the service worker.</p>
  </section>
  <section>
    <p><b>4. Full Page Control:</b> the service worker has been activated and now has full control over any pages that fall under its scope</p>
  </section>
</section>