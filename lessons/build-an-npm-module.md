
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

## I Do

* [Link to optional repo]()

## You Do

Check out a branch on your vending machine challenge

Pick a very small helper function to break out

Create an npm module to wrap the function

Move over tests

Replace it

## Outside Resources / Further Reading

- Watch Steve Kinney's [2016 talk](https://www.youtube.com/watch?v=MamP2wIquGQ)
  - And check out [the slides](https://speakerdeck.com/stevekinney/the-ins-and-outs-of-publishing-a-module-to-npm) here
- [NPM docs - How NPM works](https://docs.npmjs.com/how-npm-works/packages)
- [NPM cheatsheet](http://browsenpm.org/help)

---

## Reading Discussion Point Answers

- SemVer stands for semantic versioning
- The `--save-dev` flag means that the dependency is only used by developers. The `--save` flag means that this dependency has to be used for the package to work in production. It really matters here. When people include your npm module in their `node_modules` folder, the dev dependencies won't come along for the ride. That's important, because number of lines of code matter for the speed of an application. If you completely omit the `--save` flag, then your npm module won't work when other folks pull it down.