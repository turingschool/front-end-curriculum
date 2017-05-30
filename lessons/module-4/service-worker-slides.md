---
title: Introduction to Service Workers
layout: presentation
tags: css, sass
module: 2
---

<section>
  <h2>Intro to Service Workers</h2>
</section>

<section>
  <h3>Goals:</h3>
  <ol>
    <li>Understand when and why to use service workers</li>
    <li>Be able to implement service workers for making an application available offline</li>
  </ol>
</section>

<section>
  <section>
  <h3>
    What is a Service Worker?
  </h3>
  </section>
  <section>
  <p>a new API that allows you to run a script in <i>background</i> of your application and facilitates creating <br /><i>Progressive Web Apps</i></p>
  </section>
</section>

<section>
  <section>
  <h3>What is a Progressive Web App?</h3>
  </section>
  <section>
  <p>a web application intended to look, feel and behave like a native application</p>
  </section>
  <section>

  <p><i>Take a look at the apps on your phone - think about how you use them and how they behave.</i></p>

  <p><i>How are they similar to web apps? How are they different? <br />(10-15 mins)</i></p>
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
      <li>web workers are single JavaScript files, run on own thread</li>
      <li>don't block execution of any other client-side JavaScript</li>
      <li>handle time-intensive operations without locking UI</li>
      <li>service workers are a type of web worker</li>
      <li>service workers allow background processing that specifically relates to handling network requests</li>
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
      <li><img src="https://mdn.mozillademos.org/files/12632/sw-events.png" /></li>
    </ul>
  </section>
  <section>
    <p><b>Read:</b> <a href="https://aarontgrogg.com/blog/2015/07/20/the-difference-between-service-workers-web-workers-and-websockets/">What's the Difference Between Service Workers, Web Workers, and Web Sockets?</a></p>
  </section>
</section>

<section>
  <h4>Let's Practice</h4>
  <p><a href="https://github.com/turingschool-examples/offline-news" />Clone this repo</a></p>
  <p><pre><code>`npm install simplehttpserver -g`</code></pre></p>
  <p><pre><code>`cd public && simplehttpserver`</code></pre></p>
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