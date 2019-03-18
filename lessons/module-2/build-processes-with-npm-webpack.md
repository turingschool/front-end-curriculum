---
title: Build Processes with NPM and Webpack
length: 90
tags: npm, webpack, build processes
module: 2
---


<style type="text/css">
    section .discuss {padding:20px;font-size:15px;background-color:#fdfdfd;border:1px solid #eee}
</style>


## Build Processes with NPM & Webpack

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

<!-- INSTRUCTOR NOTES 

Go into each of the configuration files a bit more descriptively:

* gitignore: Why would we want to ignore files? Why wouldn't we want to push up node_modules? If we don't push up our node_modules, how to other people *get* our node_modules?

-->








### Checks for Understanding

* What are three main benefits that we get by using a tool like Webpack?
* Why don’t we commit the `node_modules` directory?
* Why is it important to have a `.gitignore` file in your repos?
* What is a server responsible for?
* What is the purpose of the `package.json` file?
