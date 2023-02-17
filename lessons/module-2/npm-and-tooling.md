---
title: "NPM & Tooling"
length: 90 min
tags: npm, node modules, package
---

## Learning Goals

* What is NPM, why do we use it, and what does it do for us?
* Identify factors in choosing a package
* See how a package interacts with an application

## Vocab

* `Package Manager` - a registry where developers can publish small, reusable pieces of code that they've written and would like others to be able to incorporate into their projects
* `Package` - small, independent piece of reusable code that often solves a commonplace problem
* `Dependency` - a package that your project relies on in order to function properly
* `Configuration File` - a file that allows you to define how a particular tool you're using should interact with your codebase

## Tooling for Complex Apps

As developers, we use a lot of tools to facilitate building our applications - from text editors, to browsers, to consoles. It takes a lot of tooling to build even the simplest of applications.

As our apps grow to be more complex, our toolbox is going to grow as well. So far, we've added quite a few things to your toolkit without really digging deep into what they do, why we use them, and how they work. So today we're going to shed some light on them. Specifically, we'll be talking about NPM.

## Configuration Files

Looking at the top-level, root directory of [the webpack starter kit for What's Cookin](https://github.com/turingschool-examples/whats-cookin-starter-kit), for instance, we already have quite a few files.

<section class="call-to-action">
### Turn and Talk

Based on the files in root, what tools are used to facilitate the development of our application?
</section>

<section class="answer">
### Configuration Files

* `.gitignore` - tells git not to add certain files to our repo
* `package-lock.json` - builds a dependency tree of any third-party code we are relying on and what versions of those packages our app is using
* `package.json` - describes our application to NPM and what dependencies we need in order to use and develop the app
* `webpack.config.js` - tells webpack how to gather all of the files in our application to create a file bundle

With the exception of the `README.md` file, each of these is some sort of configuration file. A **configuration file** is a file that allows you to define how a particular tool you're using should interact with your codebase.
</section>

## NPM

**The NPM Files:** `package.json` and `package-lock.json`

NPM stands for **Node Package Manager**. A package manager is a registry where developers can publish reusable pieces of code that they've written (a package), and allow other developers to download it directly into their projects (as a dependency). NPM is not the only package manager - you may see others such as Yarn or Bower.

With this definition, there are two more words we'll run into that should be clarified:

* **a package** is a small, independent piece of reusable code
* **a dependency** is a package that your project relies on in order to work

### Exploring the NPM Website

[https://www.npmjs.com/](https://www.npmjs.com/)

<section class="call-to-action">
### Practice: Choosing a NPM Package
  
On the NPM website, search for these two packages: **js-datepicker** and **date-selector**

How would you choose between the two packages that aim to do something similar?
</section>

<section class="answer">
### Choosing a Package

Some things to consider when choosing a package:
* What is the documentation like?
* Have there been any recent commits? Is the project being maintained?
* If you look at the GitHub repo for the package, are the issues being worked on?
* The number of weekly downloads
* If the package itself has a lot of dependencies, then that could bring on more risk if you then use that package.
</section>

## Let's Explore NPM Packages

Start by cloning down the What's Cookin Starter Kit repo (with the name being replaced by `fun-with-npm` to keep things separate from your potential project):

```bash
git clone git@github.com:turingschool-examples/whats-cookin-starter-kit.git fun-with-npm
```

Change into the `fun-with-npm` directory and run `npm install`.

What happened when you ran `npm install`? What was added to the project?

### Adding a New Package

Let's add a new package:

1. Go to the npm webpage for `is-odd` to see how to install it and how to use it within an application. Yes, this package exists even though it seems so simple...
1. Install a new package called `is-odd` that checks if a number is odd.
1. Add a line to your `scripts.js` file that console logs the result when `is-odd` checks the number `5`.
1. Edit your code so `is-odd` checks a **string** instead of a number.

Now that it's installed and running, let's edit the source code!
1. Go find the `is-odd` package in the `node_modules` directory.
1. In the `index.js` file for the _package_, edit the string that gets reported in the error.

Now you can see some of the connection between the source code of a package and your application. Behind the scenes, NPM packages are really just JS files. It's not too magical.

### Let's Build Our Own

Let's create our very own package that filters out words based on the number of characters in the word. We'll call it `filter-words`.

1. Create a directory in `node_modules` called `filter-words`.
1. In the `filter-words` directory, create an `index.js` file.
1. In the `index.js` file, add this code as a boilderplate:

```js
function filterWords() {
  console.log("Filtering...")
}

module.exports = filterWords;
```

1. Import our package into our application (in the `scripts.js` file), and invoke the `filterWords` function.
1. Run the webpack development server to make sure it's working as expected so far.

<section class="call-to-action">
### Keep Working on Functionality
  
In your group, wrk on completing the functionality of the filter function using these guidelines:

```js
// filterWords should take in two parameters: the length (number of characters) of the word we want to filter out, and an array of words

// We should be able to use the function like this:

filterWords(3, ['this', 'that', 'hey', 'hat', 'hi'])

// should return ['this', 'that', 'hi']
```
</section>

### Examining the package.json File In Depth

Let's explore the [package.json](https://github.com/turingschool-examples/gametime-starter/blob/master/package.json) file a bit. This is a configuration file that provides NPM with important information about our project. It is automatically generated for us when we start a new project and run the command `npm init`. (This is very similar to when you start a new git repo!)

We have some more generic information, like the title, description and author of our app, and a link to the repository and where to file issues. The more involved pieces of this file that we'll explore are the `scripts` and the `devDependencies` sections.
