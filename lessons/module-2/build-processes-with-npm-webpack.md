---
title: Build Processes with Webpack
length: 90
tags: npm, webpack, build processes
module: 2
---


<style type="text/css">
    section a:link,section a:visited{border-bottom: 0px;color:#05c2d1}
    section .discuss {color: #555;padding:20px;font-size:0.9em;background-color:#fcfcfc;border:1px solid #eee}
    hr{width:100%;height:1px;background-color:#eee;border:0;margin:50px 0}
    ul li {line-height: 1.5em;font-size: 0.95em;}
    em { font-size: 0.85em; }
</style>


### Vocab

`Build Process` - a phase of development where source code is converted into some other final format


### Learning Goals

By the end of this lesson, students should be able to:

* identify the benefits of a tool like webpack
* define what a "build process" is and why it's helpful to have one


<hr />


## What is Webpack

**The Webpack Files:** `webpack.config.js`

Webpack is a robust and versatile development tool that provides us with several significant benefits:

* provides us with a development server to more closely mimic how the internet works while we develop our app
* allows us to view our edits immediately without reloading
* bundles and minifies all of our JavaScript files into a single, condensed file to reduce network requests
* pre-processes our code so we can write it how we like, then optimize it during the build process

As the applications we build gain more complexity, it helps to have tooling in place that makes the development process easier. The above benefits can significantly speed up our development and help ensure the app is in an appropriate state when it comes time to push it live.

Let's dig into each of these benefits by working with our [Game Time Webpack Starter Kit Repo](https://github.com/turingschool-examples/webpack-starter-kit). **Clone** the starter repo to your machine. We'll make a handful of changes that you can trash when we're done with `git checkout .`


### Development Servers

In order to understand why it's useful to have a development server, we must first understand what a server is and why it's helpful.

#### What is a Server

A server is a computer or program that handles the sending and retrieving of resources. There are many different types of servers, but when we build web applications, we’re most concerned with what’s called a Web Server or an HTTP Server. (You’ll often hear these two terms used interchangeably or simply shortened to “server”.) With web applications, the server retrieves any files we need in order to view our application. These can be HTML files, CSS files, images, JS files, etc.

When we're viewing applications on the internet, this retrieval process follows certain rules and protocols *...you may have heard of hypertext transfer protocol ;)* The specifics of these rules are not important just yet, but recognize that accessing a website over HTTP behaves slightly differently than accessing an HTML file from your filesystem.

If we were simply using the filesystem to open our application files in the browser, the environment we'd be building in would behave slightly differently than if we were interacting with an HTTP server. In order to reduce any potential differences here, we can set up our own HTTP server that runs on our machine. This is one of the first main benefits we get from webpack.

We talked earlier about NPM, and briefly discussed the scripts section of our `package.json` file. If we use the `start` command from this scrips section, by typing `npm run start` into our terminal, we will fire up a development server and open our app in the browser at a URL like `localhost:8080`. This is how you'll most frequently be viewing your applications from now on as you develop them.

#### Live Reloading Changes

Besides more closely mimicking and following the rules of HTTP, having a local server provides another added benefit of live-reloading our changes as we make them! In the past, you likely had to make a change to your file, save it, then refresh your browser to view the edit. Now when we make edits, we can see the browser page refresh automatically.

Make a change to your CSS file and save it. Watch the change take effect immediately! Webpack is essentially "watching" any files that we might be working with, and when it detects a change, it will reload our app to reflect that update.


### Bundling & Pre-Processing Files

This retrieval process we discussed, where a server goes to fetch any resources we might need (like an HTML or CSS file), can take quite a bit of time. Every time a resource is requested, we have to wait for that request to make a trip all the way to the server, wait for the server to find the file we're looking for, then wait for the server to send it back to us so we can actually utilize it.

Because this process can be quite slow, we want to make as few trips to the server as possible. This means requesting the smallest amount of files that we can. One way to facilitate this would be to put all of our code into a single file. But that could get quite hairy and hard to organize! Our codebases are much more maintainable if we can separate our files out into independent, logical pieces of functionality.

Webpack allows us to do just this. We can create as many JavaScript files as we want, to separate out and organize our logic, without having to worry about requesting all of those files later. During the **build process**, Webpack will find all of the files we need and combine them into a single file that will automatically be requested as we're viewing our application.

This single file it generates is called a **bundle file**. We can see this generated code by running: `npm run build` in our terminal. This will create a `dist` directory with a file named `main.bundle.js`. You'll notice the bundle file is quite large and difficult to read. That's ok! You should never have to even look at this file as you're building your application.

<!-- show them how to add a basic Game.js file in the /src directory and import it into your index.js file, discuss the import/export syntax -->

<hr />


### Further Reading

* [Import/Export Syntax](https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f)
* [MDN Export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
* [MDN Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [Semver](https://semver.org/), [NPM Semver](https://docs.npmjs.com/about-semantic-versioning)

<hr />

<section class="checks-for-understanding">
### Checks for Understanding

* What is a server responsible for?
* What are three main benefits that we get by using a tool like Webpack?
</section>
<!-- Quiz Review with CFUs: https://goo.gl/forms/7V5rtBeKZM2zTL1U2 -->
