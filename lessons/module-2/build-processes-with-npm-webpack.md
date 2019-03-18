---
title: Build Processes with NPM and Webpack
length: 90
tags: npm, webpack, build processes
module: 2
---


<style type="text/css">
    a:link,a:visited{text-decoration:none;color:#05c2d1}
    section .discuss {padding:20px;font-size:15px;background-color:#fdfdfd;border:1px solid #eee}
</style>


### Learning Goals

By the end of this lesson, students should be able to:

* Define packages and modules
* Articulate why we use tools like Webpack and NPM, and explain the benefits of each
* Define what a "build process" is and why it's helpful to have one


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

### NPM

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


More often than not, you'll be using NPM to incorporate other people's code into your projects. In fact, we've already been doing this quite frequently!



### Webpack











### Checks for Understanding

* What are three main benefits that we get by using a tool like Webpack?
* Why don’t we commit the `node_modules` directory?
* Why is it important to have a `.gitignore` file in your repos?
* What is a server responsible for?
* What is the purpose of the `package.json` file?
