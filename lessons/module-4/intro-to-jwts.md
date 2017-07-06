---
title: Introduction to JSON Web Tokens
layout: presentation
tags: authentication, security, JWTs
module: 4
---

<section>
  <h2>Intro to JSON Web Tokens</h2>
  <p><b>Goals:</b></p>
  <ol>
    <li>Understand what a JSON Web Token is and how it's used</li>
    <li>Be able to protect a server-side endpoint with a JWT</li>
    <li>Understand similarities/differences between JWTs and other authentication methods</li>
  </ol>
</section>

<section>
  <section>
    <h3>What if...</h3>
    <p><i>"someone discovers a server-side endpoint used for sharing private photographs"</i></p>
  </section>
  <section>
    <p>We can <b>protect</b> access to this endpoint by requiring <b>authentication</b> through the use of a <b>JWT</b></p>
  </section>
</section>

<section>
  <p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.<br />eyJ1c2VybmFtZSI6ImJyaXR0YW55IiwicGFzc3dvcmQiOiJoZWxsbyIsImlhdCI6MTQ5OTM0MjA5OSwiZXhwIjoxNDk5NTE0ODk5fQ.<br />PkWZL0OkYeNT1s5C2FUbB1XRpdo409A6ySa_d81dVgM</p>
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
    </ul>
    <img src="https://mdn.mozillademos.org/files/12632/sw-events.png" />
  </section>
  <section>
    <p><b>Read:</b> <a href="https://aarontgrogg.com/blog/2015/07/20/the-difference-between-service-workers-web-workers-and-websockets/">What's the Difference Between Service Workers, Web Workers, and Web Sockets?</a></p>
  </section>
</section>

<section>
  <h4>Let's Practice</h4>
  <p><a href="https://github.com/turingschool-examples/offline-news">Clone this repo</a></p>
  <p><pre><code>`npm install simplehttpserver -g`</code></pre></p>
  <p><pre><code>`cd public`</code></pre></p>
  <p><pre><code>`simplehttpserver`</code></pre></p>
  <p><pre><code>`http://localhost:8000`</code></pre></p>
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