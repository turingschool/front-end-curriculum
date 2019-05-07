---
title: Testing with Hooks and Linting
tags: TDD, unit testing, mocha, chai, hooks
length: 90 minutes
---

## Goals

* DRY up our tests by utilizing hooks
* Get a better understanding of how linting works and why it is important

## Test Hooks - A Tool

Mocha has something called "hooks" that are available for us to use. They are named functions that run according to their name.

Let's look into [the docs for more infromation](https://mochajs.org/#hooks).

Hooks live within `describe` blocks in Mocha. Once defined, the hook runs as it's name defines it. When do you think `beforeEach()` runs? And so what? How and why should we take advantage of hooks?

<!-- ## Testing Practice: Hooks

You may have noticed that every time we wrote a test, we had to instantiate a new instance of our box. This is super repetitive, and kind of irritating to have to do every time. Luckily, Mocha provides some lifecycle `hooks` that help automate stuff like this. Take a second to look at [the documentation](https://mochajs.org/#hooks).   

Using the docs linked above, add a `beforeEach()` hook that instantiates a new box before every test, this should allow you to remove the line `var box = new Box()` from all of your tests. If you're getting an error about box not being defined, check out [this stackoverflow conversation](https://stackoverflow.com/questions/38044111/basic-but-proper-use-of-beforeeach-or-aftereach-with-mocha-js-and-chai-js).   -->

Hooks are not something special only to Mocha. Almost every testing library you use in the future will have hooks available.

### Setup a Small Test Suite

Here is an example to get us thinking about hooks more.

### Repetiion - A Code Smell...



## Linting

What and Why?

### Setting Up a Linter



## Checks for Understanding

* What are hooks, and why can they be useful?
* What is linting, and why do we use it?