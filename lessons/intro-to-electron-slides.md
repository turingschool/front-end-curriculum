---
title: Intro to Electron
layout: presentation
---

<section>
  <h1>Intro to Electron</h1>
</section>

<section>
  <section>
    <h2>What?</h2>
  </section>
  <section>
    <p>A framework for building desktop applications using the web technologies you're already familiar with</p>
  </section>
  <section>
    <p>Previously known as 'Atom Shell' - foundation for the cross-platform text editor.</p>
  </section>
  <section>
    <p>A wrapper around previously existing technologies that allows us to build an entirely new class of application</p>
  </section>
</section>

<section>
  <section>
    <h2>When?</h2>
  </section>
  <section>
    <h3>Creating GUIs for node apps</h3>
    <ul>
      <li>Anything you can do in the browser, you can do in an Electron app</li>
    </ul>
  </section>
  <section>
    <h3>Creating apps with native OS capabilities</h3>
    <ul>
      <li>Anything you can do in node, you can do in Electron</li>
    </ul>
  </section>
</section>

<section>
  <section>
    <h2>Why?</h2>
  </section>
  <section>
    <h3>Uses pre-existing tech stack</h3>
    <ul>
      <li>Cross-platform desktop apps previously required learning at least three new languages/frameworks</li>
      <li>Can create an entirely new kind of app using the skills you already have</li>
    </ul>
  </section>
  <section>
    <h3>Greater Flexibility & Permissions</h3>
    <ul>
      <li>less of the security concerns we have in browsers</li>
      <li>web apps can't access the file system</li>
      <li>browsers can't execute code not written in JavaScript</li>
      <li>no need to worry about nuances when developing for browsers (feature detection, fallbacks, etc.)</li>
    </ul>
  </section>
</section>

<section>
  <section>
    <h2>How?</h2>
  </section>
  <section>
    <h3>Chromium Content Module</h3>
    <ul>
      <li>open-source version of Google Chrome's browser</li>
      <li>core technology required to render HTML/CSS/JS</li>
      <li>Includes V8 JS Engine & Blink Rendering Engine</li>
      <li>Doesn't allow for anything within the shell of the browser (bookmarks/syncing/extensions/etc.)</li>
    </ul>
  </section>
  <section>
    <h3>Node.js</h3>
    <ul>
      <li>runtime for developing server-side apps using JS</li>
      <li>includes APIs for accessing file systems/creating servers/loading external modules</li>
      <li>allowed front-end devs to more easily transition to writing server-side code</li>
    </ul>
  </section>
  <section>
    <h3>Two Types of Processes:</h3>
    <ul>
      <li>Main process</li>
      <li>0 or more Renderer Processes</li>
    </ul>
  </section>
  <section>
    <h3>Main Process</h3>
    <ul>
      <li>Ran based on the entry point specified in your package.json</li>
      <li>Responds to lifecycle events (starting up, quitting, moving to background/foreground, etc.)</li>
      <li>Communicates with native OS APIs</li>
    </ul>
  </section>
  <section>
    <h3>Renderer Processes</h3>
    <ul>
      <li>Can have as many renderer processes as you'd like</li>
      <li>Responsible for loading web pages to display a GUI</li>
      <li>Cannot communicate with Native OS APIs but instead communicates with the main process to do so</li>
    </ul>
  </section>
</section>