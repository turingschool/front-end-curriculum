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
    <h3>Client-Side Storage</h3>
    <p>What other options do we have for storing data in the browser?</p>
  </section>
  <section>
    <ul>
      <li><b>Cookies:</b> pre-HTML5, can't store much data</li>
      <li><b>LocalStorage & Sessionstorage:</b> adheres to CORS, can store more information</li>
      <li><b>Cache Storage:</b> built-in with the browser, expanded to support Service Workers and AppCache</li>
    </ul>
  </section>
  <section>
    <h3>Why so many options?</h3>
    <ul>
      <li>increasing complexity of applications required more flexibility in storage</li>
      <li>each storage option varies in size limits, security, persistence and allowed data types</li>
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
  <p>Fetch and checkout the '03-before-db' branch of the <a href="https://github.com/turingschool-examples/markdown-previewer">markdown previewer repo</a></p>
  <p><pre><code>`npm install`</code></pre></p>
  <p><pre><code>`webpack --watch`</code></pre></p>
  <p><pre><code>`node server.js`</code></pre></p>
  <p><pre><code>`http://localhost:3000`</code></pre></p>
</section>

<section>
  <h3>What's Changed?</h3>
  <ul>
    <li>brought in webpack, updated SW cache to add `bundle.js`</li>
    <li>added a drop-down menu of saved markdowns to select</li>
  </ul>
</section>

<section>
  <h3>What Are Our Goals?</h3>
  <ul>
    <li>Save markdowns to IndexedDB</li>
    <li>Load all saved markdowns into the drop-down menu</li>
    <li>Select a saved markdown from the drop-down menu to display in the textareas</li>
  </ul>
</section>