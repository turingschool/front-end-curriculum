---
title: Persisting Data with IndexedDB
layout: presentation
tags: indexedDB, storage, offline
module: 4
---

<section>
  <h2>Persisting Data with IndexedDB</h2>
</section>

<section>
  <h3>Goals:</h3>
  <ol>
    <li>Understand how to leverage IndexedDB to store offline data</li>
    <li>Provide a user experience that works regardless of network connectivity</li> 
  </ol>
</section>

<section>
  <section>
    <h3>What is IndexedDB</h3>
  </section>
  <section>
    <p>a client-side storage mechanism for persisting data in a user's browser regardless of network availability</p>
  </section>
</section>

<section>
  <section>
    <h3>Why so many storage options?</h3>
  </section>
  <section>
    <ul>
      <li>each storage option varies in size limits, persistence and allowed data types</li>
      <li>the internet is terrible and we don't know what we're doing</li>
    </ul>
  </section>
</section>

<section>
  <h3>What is IndexedDB good for?</h3>
  <ul>
    <li>storing larger and more complex datasets (within reason)</li>
    <li>persisting data without expiration so it can be available offline</li>
    <li>robust querying</li>
  </ul>
</section>

<section>
  <h3>Any Downsides?</h3>
  <ul>
    <li>the API is absolutely brutal</li>
  </ul>
</section>

<section>
  <h3>Let's Practice</h3>
  <p>Fetch and checkout the 'begin-db-lesson' branch of the <a href="https://github.com/turingschool-examples/offline-news">offline news repo</a></p>
  <p><pre><code>`npm install`</code></pre></p>
  <p><pre><code>`weback --watch`</code></pre></p>
  <p><pre><code>`node server.js`</code></pre></p>
  <p><pre><code>`http://localhost:3000`</code></pre></p>
</section>

<section>
  <h3>What's Changed?</h3>
  <ul>
    <li>brought in webpack, updated SW cache to add `bundle.js`</li>
    <li>fetching articles from the server rather than hardcoding</li>
    <li>allowing users to click an article that will save it for offline reading (not implemented yet)</li>
  </ul>
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