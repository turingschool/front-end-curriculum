---
title: "NPM & Tooling"
length: 90 min
tags: npm, node modules
mod: 2
---

<style type="text/css">
    section a:link,section a:visited{border-bottom: 0px;color:#05c2d1}
    section .discuss {color: #555;padding:20px;font-size:0.9em;background-color:#fcfcfc;border:1px solid #eee}
    hr{width:100%;height:1px;background-color:#eee;border:0;margin:50px 0}
    ul li {line-height: 1.5em;font-size: 0.95em;}
    em { font-size: 0.85em; }
</style>

## Learning Goals

* Explain what NPM is, why we use it and what it does for us
* Identify packages and dependencies

## Vocab

* `Package Manager` - a registry where developers can publish small, reusable pieces of code that they've written and would like others to be able to incorporate into their projects
* `Package` - small, independent piece of reusable code that often solves a commonplace problem
* `Dependency` - a package that your project relies on in order to function properly
* `Configuration File` - a file that allows you to define how a particular tool you're using should interact with your codebase


## Tooling for Complex Apps

As developers, we use a lot of tools to facilitate building our applications - from text editors, to browsers, to consoles, it takes a lot of tooling to build even the simplest of applications.

As our apps grow to be more complex, our toolbox is going to grow as well. So far, we've added quite a few things to your toolkit without really digging deep into what they do, why we use them, and how they work. So today we're going to shed some light on them.

Specifically we'll be talking about NPM, using ESLint as a guide to help answer some of the above questions.

## Codebase Organization

Up until now, the codebases you've created have been fairly bare-bones. The file structure may have looked something like this:

* `index.html`
* `README.md`
* `js/main.js`
* `css/styles.css`
* `images/logo.jpg`

In the real world, you're going to see codebases that contain many more files, organized in a much more complex manner.

<section class="call-to-action">
  <h4>In Your Notebook</h4>
  <p>Take a look at the files and directory structure of <a href="https://github.com/facebook/react" target="\__blank">this repo</a> What are some things that seem new to you? What's familiar? Why are so many files prefixed with a dot?</p>
</section>

You can expect the apps you work on in the future to be much closer to this size and structure than the simple 5-file, 3-folder structure you've started out with. It's important that we feel comfortable navigating large codebases and understand the how and why they require the complexity that we see here.

In order to demystify some of the complex structure we'll see in the future, let's explore the [Paired Project Starter Kit](https://github.com/turingschool-examples/fitlit-starter-kit) repo.


## Configuration Files

Looking at the top-level, root directory of our boilerplate, we already have quite a few files.


<section class="call-to-action">
  <h4>Turn and Talk</h4>
  <p>Based on the files in our root, what tools are we going to be using to facilitate the development of our application?</p>
</section>


* `.eslintrc` - defines our rules for stylistic conventions we want our code to follow
* `.gitignore` - tells git not to add certain files to our repo
* `README.md` - allows us to describe our application and provide any instructions to people trying to use or contribute to it
* `package-lock.json` - builds a dependency tree of any third-party code we are relying on and what versions of those packages our app is using
* `package.json` - describes our application to NPM and what dependencies we need in order to use and develop the app

With the exception of the `README.md` file, each of these is some sort of configuration file. A **configuration file** is a file that allows you to define how a particular tool you're using should interact with your codebase.

## NPM

**The NPM Files:** `package.json` and `package-lock.json`

NPM stands for **Node Package Manager**. A package manager is a registry where developers can publish reusable pieces of code that they've written (a package), and allow other developers to download it directly into their projects (as a dependency). NPM is not the only package manager - you may see others such as Yarn or Bower.

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

### Exploring the NPM Website

[https://www.npmjs.com/](https://www.npmjs.com/)

Let's search for a familiar package, like Chai or Mocha. What things do we notice on the page?

<section class="call-to-action">
  <h4>Paired Practice: Choosing a NPM package.</h4>
  <p>On the NPM website, search for these two packages: <strong>js-datepicker</strong> and <strong>date-selector</strong></p>
  <ol>
    <li>What are some of the differences between the two packages?</li>
    <li>Which package would you want to use in a project?</li>
    <li>Seeing that both of these packages are also on GitHub, what is the difference between NPM and GitHub?</li>
  </ol>

</section>


### Examining the package.json

Let's explore the [package.json](https://github.com/turingschool-examples/gametime-starter/blob/master/package.json) file a bit. This is a configuration file that provides NPM with important information about our project. It is automatically generated for us when we start a new project and run the command `npm init`. (This is very similar to when you start a new git repo!)

We have some more generic information, like the title, description and author of our app, and a link to the repository and where to file issues. The more involved pieces of this file that we'll explore are the `scripts` and the `devDependencies` sections.

**Understanding scripts**

The scripts section of our `package.json` file allows us to specify commands to perform certain actions on our application that are helpful for the development process. These can include things like:

* running an automated test suite
* linting our code

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

If a user is using our application in their browser, it's unlikely they're trying to run our tests or lint the code we've written. So these dependencies are specifically for us, as developers, to enhance our development experience.

Regular dependencies that will need to be included in our application might be things like `moment js`.  Moment is a time library that helps makes time calculations and normalization easier.  This would be considered a regular dependency since it is included in our code base.

As we determine that our project needs certain dependencies, we install them by running something like: `npm install <packageName>` in our terminal. This will automatically add that package to our `dependencies` section of the `package.json`. If we only need a development dependency, we can specify for NPM to store it in our `devDependencies` by modifying the command slightly: `npm install <packageName --save-dev`


As we install dependencies, we populate a directory called `node_modules` - this is where our application looks for all of the packages our project relies on. It's important to note that **we do not commit the `node_modules` directory to GitHub**. Looking back at the root of our repo, we noticed a `.gitignore` file that told git specifically not to commit certain files and directories. Included in this list of ignored files was our `node_modules` directory.


<section class="call-to-action">
  <h4>Turn and Talk</h4>
  <p>Why wouldn't we want to commit our `node_modules` directory? If this directory is not being pushed up to GitHub, how do other developers still have access to each of our project's dependencies?</p>
</section>

**Semantic Versioning**

![breaking feature fix](/assets/images/lessons/intro-to-npm/semver.png)

You'll notice that the dependencies we install each have a value associated with them like '1.4.6' -- these values are the version numbers of our dependencies. As developers update their packages, they must increase the version number of their package to allow any projects relying on it some lee-way before they update.

Think back to the filter example code from earlier. Imagine the developer who created that package decided to change the name of the method from `filter` to `sift`. If this change took effect immediately, as soon as the developer pushed it to GitHub, now anybody using the `filter` method would have a broken application. Version numbers allow us to rely on a particular representation of a package (e.g. `filter` at version `1.2.3`), then update manually to a newer version (e.g. `sift` at version 2.0.0) when we have the time and knowledge to refactor our applications to work with the new changes.


<section class="call-to-action">
  <h4>Reading</h4>
  <p>Read through the following <a href="https://semver.org/">documentation</a>. What do each of the numbers in a version number represent?</p>
</section>
