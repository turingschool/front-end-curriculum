---
title: Build Processes with NPM and Webpack
length: 90
tags: npm, webpack, build processes
module: 2
---


<style type="text/css">
    section a:link,section a:visited{border-bottom: 0px;color:#05c2d1}
    section .discuss {color: #555;padding:20px;font-size:0.95em;background-color:#fcfcfc;border:1px solid #eee}
    hr{width:100%;height:1px;background-color:#eee;border:0;margin:50px 0}
    ul li {line-height: 1.5em;font-size: 0.95em;}
    em { font-size: 0.85em; }
</style>


### Learning Goals

By the end of this lesson, students should be able to:

* Define packages and modules
* Articulate why we use tools like Webpack and NPM, and explain the benefits of each
* Define what a "build process" is and why it's helpful to have one


<hr />


## Codebase Organization

Up until now, the codebases you've created have been fairly bare-bones. The file structure may have looked something like this:

* `index.html`
* `README.md`
* `js/main.js`
* `css/styles.css`
* `images/logo.jpg`

In the real world, you're going to see codebases that contain many more files, organized in a much more complex manner. 

<div class="discuss">
  <h4>In Your Notebook</h4>
  <p>Take a look at the files and directory structure of <a href="https://github.com/mozilla/normandy" target="_blank">this repo</a> What are some things that seem new to you? Can you decipher what type of file each directory holds? Why are so many files prefixed with a dot?</p>
</div>

You can expect the apps you work on in the future to be much closer to this size and structure than the simple 5-file, 3-folder structure you've started out with. It's important that we feel comfortable navigating large codebases and understand the how and why they require the complexity that we see here.

In order to demystify some of the complex structure we'll see in the future, let's explore the [gametime-starter](https://github.com/turingschool-examples/gametime-starter) repo.


<hr />


## Configuration Files

Looking at the top-level, root directory of our boilerplate, we already have more files than we're used to working with at a time:

* `.eslintrc` - defines our rules for stylistic conventions we want our code to follow
* `.gitignore` - tells git not to push certain files to our remote repo
* `README.md` - allows us to describe our application and provide any instructions to people trying to use or contribute to it
* `package-lock.json` - builds a dependency tree of any third-party code we are relying on and what versions of those packages our app is using
* `package.json` - describes our application to NPM and what dependencies we need in order to use and develop the app
* `webpack.config.js` - tells webpack how to read and build our files


With the exception of the `README.md` file, each of these is some sort of configuration file. A **configuration file** is a file that allows you to define how a particular tool you're using should interact with your codebase.


<div class="discuss">
  <h4>Turn and Talk</h4>
  <p>Based on the files in our root, what tools are we going to be using to facilitate the development of our application? (It's ok if you don't know what these tools do just yet.)</p>
</div>

<!-- eslint, git, NPM, webpack -->

Let's dig deeper into some of these tools we've identified to help us better understand the files and structure we'll be working with.


<hr />


## NPM

**The NPM Files:** `package.json` and `package-lock.json`

NPM stands for **Node Package Manager**. A package manager is a registry where developers can publish small, reusable pieces of code that they've written (a package), and allow other developers to download it directly into their projects (as a dependency). 

With this definition, there are two more words we'll run into that should be clarified:

* **a package** is a small, independent piece of reusable code
* **a dependency** is a package that your project relies on in order to work

As an example, pretend that the `.filter()` method did not exist in JavaScript for filtering arrays. Developers would constantly have to write some sort of function that would allow them to easily filter any array they might need to work with. This means developers all over the world would be spending time writing some kind of code that looked like the following:

```js
Array.prototype.filter = function(callback) {
  var filteredData = [];
  
  this.forEach(function(i) {
    if (callback(i)) {
      filteredData.push(i)
    }
  })
  return filteredData;
}
```

Instead of having us all re-invent the wheel, and waste time writing the same piece of code over and over again, NPM would allow someone to write this code once and publish it to the registry. From there, all other developers could simply download this code snippet and incorporate it into their project without having to write it from scratch.

<div class="discuss">
  <h4>Table Talk</h4>
  <p>How does NPM differ from GitHub? They both seem to be places where developers can publish and download code.</p>
</div>

<!-- NPM is more for publishing code that is solving a very tiny, common problem that many developers will face. Other developers will download a package from NPM when they want to take advantage of its functionality in their project. GitHub is for publishing entire projects (that may or may not rely on NPM packages). Other developers will only download your project from GitHub if they want to contribute to it. That said, NPM packages are still published to GitHub for version control purposes, but full-blown GitHub projects have no real reason to be published to NPM. Think about idea-box from mod 1. You wouldn't publish that to NPM because most people aren't building projects that need an ideabox inside of them. -->


### Examining the package.json

Let's explore the [package.json](https://github.com/turingschool-examples/gametime-starter/blob/master/package.json) file a bit. This is a configuration file that provides NPM with important information about our project. It is automatically generated for us when we start a new project and run the command `npm init`. (This is very similar to when you start a new git repo!)

We have some more generic information, like the title, description and author of our app, and a link to the repository and where to file issues. The more involved pieces of this file that we'll explore are the `scripts` and the `dependencies`/`devDependencies` sections.

**Understanding scripts**

The scripts section of our `package.json` file allows us to specify commands to perform certain actions on our application that are helpful for the development process. These can include things like:

* running an automated test suite
* linting our code
* starting up a local development server (more on this later)
* running a build of our files (more on this later)

Take the lint script for example:

* We've specified a command with a key of `lint` - this means that we'll be able to type `npm run lint` in our terminal (we must be in the root directory of our repo)
* The value of our `lint` key is `./node_modules/.bin/eslint 'src/**.js' 'test/**.js'` - this tells NPM that whenever we type `npm run lint` in our terminal, run this command to lint any JavaScript files in our `src` and `test` directory

You'll notice we could take that script value and run it directly in our terminal and get the same results - but isn't it so much easier to type `npm run lint`? Pretty handy!

*Note: Some NPM scripts are so common (like start and test) that you can even just type `npm test` instead of `npm run test` -- this shorthand won't work for all scripts. When in doubt, just type `npm run <command>`*


**Understanding Dependencies & Semver**

More often than not, you'll be using NPM to incorporate other people's code into your projects, (as opposed to publishing your own packages). In fact, we've already been doing this quite frequently!

When we incorporate an NPM package into our codebase, we call it a **dependency**. There are two types of dependencies we're concerned with:

* **devDependencies:** these are packages needed only for you, as the developer, to efficiently and effectively work on your application
* **dependencies:** these are packages that are required for a user to actually view and interact with your application

We can see the types of dependencies we might have for our project by looking at the above to sections in our `package.json` file. Some examples of `devDependencies` include:

* eslint
* mocha and chai

If a user is viewing our application in their browser, it's unlikely they're trying to run our tests or lint the code we've written. So these dependencies are specifically for us, as developers, to enhance our development experience.

Regular dependencies that will need to be included in our application for our users might be things like `jQuery` -- without jQuery, our DOM interactions would be broken. The users viewing our app in the browser would not be able to click on buttons or interact with forms, etc.

As we determine that our project needs certain dependencies, we install them by running something like: `npm install <packageName>` in our terminal. This will automatically add that package to our `dependencies` section of the `package.json`. If we only need a development dependency, we can specify for NPM to store it in our `devDependencies` by modifying the command slightly: `npm install <packageName --save-dev`


As we install dependencies, we populate a directory called `node_modules` - this is where our application looks for all of the packages our project relies on. It's important to note that **we do not commit the `node_modules` directory to GitHub**. Looking back at the root of our repo, we noticed a `.gitignore` file that told git specifically not to commit certain files and directories. Included in this list of ignored files was our `node_modules` directory. 


<div class="discuss">
  <h4>Turn and Talk</h4>
  <p>Why wouldn't we want to commit our `node_modules` directory? If this directory is not being pushed up to GitHub, how do other developers still have access to each of our project's dependencies?</p>
</div>


<hr />


## Webpack

**The Webpack Files:** `webpack.config.js`

Webpack is a robust and versatile development tool that provides us with several significant benefits:

* provides us with a development server to more closely mimic how the internet works
* allows us to view our edits immediately without reloading
* bundles and minifies all of our JavaScript files into a single, condensed file to reduce network requests
* pre-processes our code so we can write it how we like, then optimize it during the build process

### Development Servers

In order to understand why it's useful to have a development server, we must first understand what a server is and why it's helpful.

**What is a Server?**

A server is a computer or program that handles the sending and retrieving of resources. There are many different types of servers, but when we build web applications, we’re most concerned with what’s called a Web Server or an HTTP Server. (You’ll often hear these two terms used interchangeably or simply shortened to “server”.) With web applications, the server retrieves any files we need in order to view our application. These can be HTML files, CSS files, images, JS files, etc.

When we're viewing applications on the internet, this retrieval process follows certain rules and protocols *...you may have heard of hypertext transfer protocol ;)* The specifics of these rules are not important just yet, but recognize that accessing a website over HTTP behaves slightly differently than accessing an HTML file from your filesystem.

If we were simply using the filesystem to open our application files in the browser, the environment we'd be building in would behave slightly differently than if we were interacting with an HTTP server. In order to reduce any potential differences here, we can set up our own HTTP server that runs on our machine. This is one of the first main benefits we get from webpack.


We noticed earlier in our `package.json` file that we had a script called `start` -- typing `npm run start` into our terminal will fire up a development server and open our app in the browser at a URL like `localhost:8080`. This is how you'll most frequently be viewing your applications from now on as you develop them.

Besides more closely mimicking and following the rules of HTTP, having a local server provides another added benefit of live-reloading our changes as we make them! In the past, you likely had to make a change to your file, save it, then refresh your browser to view the edit. Now when we make edits, we can see the browser page refresh automatically.

### Bundling & Pre-Processing Files








<hr />


### Checks for Understanding

* Why is it important to have a `.gitignore` file in your repos?
* Why don’t we commit the `node_modules` directory?
* What is a server responsible for?
* What are three main benefits that we get by using a tool like Webpack?
* What is the purpose of the `package.json` file?

<!-- Quiz Review with CFUs: https://goo.gl/forms/7V5rtBeKZM2zTL1U2 -->
