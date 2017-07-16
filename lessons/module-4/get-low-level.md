---
title: Get Low-Level
layout: presentation
tags: standards bodies, web APIs
module: 4
---

<section>
  <h2>Get Low-Level</h2>
  <h4>Understanding Specs<br /> & Standards Bodies</h4>
</section>

<section>
<p>On the whiteboard, list all the libraries and frameworks you've used.</p>
<ul>
  <li>look through the lesson plans listed on the frontend site</li>
  <li>look through your `package.json` files in projects you've built</li>
</ul>
</section>

<section>
  <p><i>Learning 100 different libraries is still easier than building an application with none.</i></p>
</section>

<section>
  <h3>Identifying the Layers</h3>
  <img src="../../assets/images/lessons/get-low-level/low-level-layers.png" />
</section>

<section>
  <section>
    <h3>Layer #3 - The Library</h3>
    <ul>
      <li>previously learned <a href="http://dexie.org/">Dexie</a> - library wrapping IndexedDB</li>
      <li><a href="https://github.com/turingschool-examples/offline-news/blob/before-sync-lesson/public/indexedDB.js">code</a> was concise and read similar to English</li>
    </ul>
  </section>
  <section>
    <p><b>On your own:</b> look through the Dexie <a href="https://github.com/dfahlander/Dexie.js">source code</a> and find the following implementations:</p>
    <ul>
      <li>`put`</li>
      <li>`get`</li>
      <li>`delete`</li>
    </ul>
  </section>
</section>

<section>
  <h3>Layer #2 - The Web API</h3>
  <ul>
    <li>Downsides of IndexedDB: "The API is <a href="https://github.com/turingschool-examples/offline-news/blob/d6182e5e7858af7481ef41d534dbc5a5d8b717f0/public/indexedDB.js">brutal</a>".</li>
    <li>code is verbose and difficult to read</li>
  </ul>
</section>

<section>
  <h3>But y tho?</h3>
  <ul>
    <li>Web APIs need to be as <b>flexible</b> as possible</li>
    <li>This means they have to be as <b>bare-bones</b> as possible</li>
  </ul>
</section>