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
  <section>
    <h4>On the whiteboard:</h4>
    <p><i>list all libraries & frameworks you've used</i></p>
    <ul>
      <li>look through the lesson plans listed on the frontend site</li>
      <li>look through your `package.json` files in projects you've built</li>
    </ul>
  </section>
  <section>
    <p><i>Learning 100 different libraries is still easier<br />than building an application with none.</i></p>
  </section>
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
    <h4>On Your Own:</h4>
    <p>look through the Dexie <a href="https://github.com/dfahlander/Dexie.js">source code</a><br />and find the following implementations:</p>
    <ul>
      <li>`put`</li>
      <li>`get`</li>
      <li>`delete`</li>
    </ul>
  </section>
</section>

<section>
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
      <li>Web APIs need to be <b>flexible</b> to handle many scenarios</li>
      <li>This means they have to be as <b>bare-bones</b> as possible</li>
    </ul>
  </section>
</section>

<section>
  <section>
    <h3>Layer #1 - The Browser</h3>
    <ul>
      <li>browser made up of many different parts</li>
      <li>working with APIs is dependent on JS Engine & Browser Engine</li>
      <li>JS Engine allows browser to understand the JavaScript we write</li>
      <li>Browser Engine allows browser to understand the Web APIs we use</li>
    </ul>
  </section>
  <section>
    <h3>Browser Architecture</h3>
    <img src="../../assets/images/lessons/get-low-level/browser-arch.png" />
  </section>
</section>

<section>
  <section>
    <h3>Layer #1a - The Browser Engine</h3>
    <p><i>The browser engine is responsible for implementing Web APIs and functionality like IndexedDB, geolocation, web audio, etc.</i></p>
    <ul>
      <li>Chrome - Webkit (C++)</li>
      <li>Firefox - Gecko (C++)</li>
    </ul>
  </section>
  <section>
    <h3>Check the <a href="https://github.com/WebKit/webkit/tree/master/Source/WebCore/Modules">source</a></h3>
    <ul>
      <li>which modules sound familiar to you?</li>
      <li>bump up a directory and explore the rest of /WebCore/</li>
      <li>what other APIs live in the browser engine?</li>
    </ul>
  </section>
</section>

<section>
  <h3>Layer #0a - The Web API Specification</h3>
  <ul>
    <li>browser engine implementation of an API is dependent on its spec</li>
  </ul>
</section>

<section>
  <section>
    <h3>Standards Bodies & Specs</h3>
  </section>
  <section>
    <h3>Why Standards?</h3>
  </section>
  <section>
    <h3>Working Groups</h3>
  </section>
  <section>
    <h3>Standardization Process</h3>
  </section>
</section>

<section>
  <section>
    <h3>Layer #1b - The JS Engine</h3>
    <p><i>The JavaScript Engine is responsible for interpreting the JavaScript we write and doing something meaningful with it.</i></p>
    <ul>
      <li>Chrome - V8 (C++)</li>
      <li>Firefox - Spidermonkey (C/C++)</li>
    </ul>
  </section>
  <section>
    <h3>Check the <a href="https://github.com/v8/v8/tree/master/src/js">source</a></h3>
    <ul>
      <li>which file names sound familiar to you?</li>
      <li>bump up a directory and explore the rest of /src/</li>
      <li>what other functionaliy lives in the JS engine?</li>
    </ul>
  </section>
</section>

<section>
  <h3>Layer #0b - The ECMAScript Spec</h3>
</section>