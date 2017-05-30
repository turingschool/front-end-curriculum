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
  <p>A programmable network proxy, allowing you to control how network requests from your page are handled.</p>
  </section>
  <section>
  <p>an <i>event-driven</i> <i>web worker</i> that enables apps to make use of persistent <i>background processing</i> and provide usable <i>offline experiences</i>.</p>
  </section>
  <section>
  <p>a new API that allows you to run a script in <i>background</i> of your application and facilitates creating <i>Progressive Web Apps</i></p>
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

  <p><i>How are they similar to web apps? How are they different?</i></p>
  </section>
</section>

<section>
  <h3>What can Service Workers do?</h3>
  <ul>
    <li>offline your application</li>
    <li>implement background sync*</li>
    <li>enable push notifications*</li>
</section>

<section>
  <section>
    <h3>Characteristics of a Service Worker</h3>
  </section>
  <section>
    <h4><b>Runs in the background</b></h4>
    <ul>
      <li>service workers are a type of web worker</li>
      <li>web workers are single JavaScript files that run on their own thread</li>
      <li>they do not block/interfere with execution of any other client-side JavaScript</li>
      <li>allow you to do time-intensive operations without locking up the UI</li>
      <li>service workers allow background processing that specifically relates to handling network requests</li>
    </ul>
  </section>
  <section>
    <h4><b>Cannot interact with DOM</b></li>
    <ul>
      <li>can't access the DOM tree to do any manipulations</li>
      <li>must communicate through sending messages back and forth</li>
    </ul>
  </section>
  <section>
    <h4><b>Event-based</b></h4>
    <ul>
      <li>service worker can 'go to sleep' at any time</li>
      <li>is only woken up and utilized during events (network requests and messages)</li>
    </ul>
  </section>
</section>
