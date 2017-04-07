---
title: Build an NPM Module
length: 120 min
module: 4
tags: npm, node, package
---

## Goals

By the end of this lesson, you will know/be able to:

* Be equipped to break out chunks of code into seperate node modules
* Push a node module up to NPM 

## Reading

[Read this Gold Standard Level blog post by Joanne Daudier](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738)

Note: don't code along, that will come later. 

Note: as you read, prepare answers to the following discussion points

### Reading Discussion Points

- What is SemVer
- What is the difference between `npm install --save` `npm install` `npm install -g` and `npm install --save-dev`
  - Why might it be _very important_ to use the `--save` and `--save-dev` flags appropriately for an NPM package?
- Having read this blog, what steps might be missing for you to create your own node module and deploy it?
- What npm packages do you depend on? Have you ever looked at their source code?

## An Example

* [Example Repo](https://github.com/rrgayhart/load-machine)

Check out the implementation above. The README contains a 'more or less' summary of the steps taken to convert a piece of my Vending Machine Challenge logic into an npm module.

## You Do

Your challenge, if you choose to accept it, is to take a VERY small amount of logic out of your own repo and break it into an npm module. Go for the smallest possible thing. One helper function is ideal.

### Check out a branch on your original repo

```
  git checkout -b 'npm-refactor'
```

### Pick a very small helper function to break out

In my case, my vending machine challenge code has a prototype function that allows me to load a machine dynamically. I am able to give the function an array of objects

```js
var items = [ {item: 'apple', cost: 2}, 
              { item: 'banana', cost: 1.25},
              { item: 'pear', cost: 2},
              { item: 'strawberry', cost: 1.75},
              { item: 'pineapple', cost: 2.5},
              { item: 'orange', cost: 1},
              { item: 'lime', cost: .5},
              { item: 'lemon', cost: 2},
              { item: 'guava', cost: 2},
              { item: 'mango', cost: 2},
              { item: 'lichee', cost: 2} ];
```

The function will take the width, number of rows, and depth of each row to assign a button value to each item. The functionality is kind of cool, so it might be something someone else might want to use? 

### Create an npm module to wrap some functionality in your app

Reference the [blog post]((https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738)) that you read earlier. Reference the [Example Repo](https://github.com/rrgayhart/load-machine). Use the additional resources linked at the bottom of this tutorial. Isolate a very small piece of logic and move it out. 

### Replace the original code in your original app with the NPM module

   Make sure you're on a branch!!!

   Try 'linking' to your local version (the example repo has a summary of linking)

### Publish your module to NPM

  Woo! Time to be famous!

## Outside Resources / Further Reading

- Watch Steve Kinney's [2016 talk](https://www.youtube.com/watch?v=MamP2wIquGQ)
  - And check out [the slides](https://speakerdeck.com/stevekinney/the-ins-and-outs-of-publishing-a-module-to-npm) here
- [NPM docs - How NPM works](https://docs.npmjs.com/how-npm-works/packages)
- [NPM cheatsheet](http://browsenpm.org/help)

---

## Reading Discussion Point Answers

- SemVer stands for semantic versioning
- The `--save-dev` flag means that the dependency is only used by developers. The `--save` flag means that this dependency has to be used for the package to work in production. It really matters here. When people include your npm module in their `node_modules` folder, the dev dependencies won't come along for the ride. That's important, because number of lines of code matter for the speed of an application. If you completely omit the `--save` flag, then your npm module won't work when other folks pull it down.