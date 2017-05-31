---
title: Background Sync & Push Notifications
layout: presentation
tags: push, sync, offline
module: 4
---

<section>
  <h2>Background Sync & Push Notifications</h2>
</section>

<section>
  <h3>Goals:</h3>
  <ol>
    <li>Understand how background sync works with Service Workers to queue network requests</li>
    <li>Be able to implement push notifications when a sync event is complete</li> 
  </ol>
</section>

<section>
  <section>
    <h3>Background Sync</h3>
  </section>
  <section>
    <ul>
      <li>allows us to run code on a separate thread that will not lock up or interfere with any other client-side javascript</li>
      <li>is an API dependent on Service Workers</li>
      <li>allows us to defer an action to a later point in time when a user has a more stable network connection</li>
    </ul>
  </section>
</section>

<section>
  <section>
    <h3>Push Notifications</h3>
  </section>
  <section>
    <ul>
      <li>enables us to send notifications outside the context of a browser page</li>
      <li>mimics the notification functionality we're familiar with on our phones and devices</li>
    </ul>
  </section>
</section>

<section>
  <h3>When Do I Use These?</h3>
  <ul>
    <li>when a user is manipulating application data through network requests but has an unstable or intermittent connection</li>
    <li>
  </ul>
</section>

<section>
  <h3>How Does it Work?</h3>
  <ul>
    <li></li>
  </ul>
</section>

<section>
  <h3>Let's Practice</h3>
  <p>Fetch and checkout the 'begin-db-lesson' branch of the <a href="https://github.com/turingschool-examples/offline-news">offline news repo</a></p>
  <p><pre><code>`npm install`</code></pre></p>
  <p><pre><code>`npm start`</code></pre></p>
  <p><pre><code>`http://localhost:3000`</code></pre></p>
</section>

<section>
  <h3>What Are Our Goals?</h3>
  <ul>
    <li>Display a notification if we are online or not</li>
    <li>Listen for changes in our connection status and display an appropriate list of articles</li>
    <li>If we are online => fetch and display the latest articles from the server</li>
    <li>If we're not online => display any articles saved to indexedDB for offline reading</li>
  </ul>
</section>