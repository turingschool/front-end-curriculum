---
title: Linting and Testing with Hooks
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

Hooks are not something special only to Mocha. Almost every testing library you use in the future will have hooks available.

### Setup a Small Test Suite

[Here is an example](https://github.com/turingschool-examples/testing-hooks-refactor) to get us thinking about hooks more. Clone down this repo, get it setup, and open the test file. Then:

- Write the last test. 
- Write the implementation code to get all of the tests passing.

### Repetiion - A Code Smell...

A term used commonly when developers look at code is a "code smell". [A code smell](https://en.wikipedia.org/wiki/Code_smell) refers to something seen in code that is often a sign of refactoring or code that goes against conventional patterns.

Code repetition or duplication is one of those code smells.

### Hooks Can Help

You may have noticed that every time we wrote a test, we had to invoke our createRocket function in order to create a new rocket. This is super repetitive, and kind of irritating to have to do every time. Luckily, Mocha provides some lifecycle `hooks` that help automate stuff like this. Take a second to look at [the documentation](https://mochajs.org/#hooks).   

- **Using the docs linked above, add a `beforeEach()` hook that uses the createRocket function to create a new rocket before every test.** 
This should allow you to remove the line `let rocket = createRocket();` from each of your tests. If you're getting an error about rocket not being defined, check out [this stackoverflow conversation](https://stackoverflow.com/questions/38044111/basic-but-proper-use-of-beforeeach-or-aftereach-with-mocha-js-and-chai-js).  

### When Hooks "Help Less"

Consider the scenario where we want to add this functionality:

```js
it('Can be given a name when the rocket is created', function() {
  let rocket = creatRocket('Mercury-Redstone 3');

  expect(rocket.name).to.equal('Mercury-Redstone 3');
});
```

Does the `beforeEach()` help with this test? Do we need to change anything?

## Linting

A linter is a tool used across front-end and back-end technologies. All kinds of developers use and love linters.

A linter cares about the text you have written in your code. It doesn't know what your code is trying to do, and it's not really going to run your code. For the most part, the two main purposes of a linter are in regards to: code style and potential code errors.

Read the first section of [this blog post](https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76), up to "Automation".

### Setting Up a Linter

1. Install the package as a development dependency - we are using `eslint`, so `npm install --save-dev eslint`
1. Add the configuration file to the project root - called `.eslintrc`
1. Add a script to the `package.json` file to make things convenient - something like `lint`

Let's add a linter to this repo!

Use this configuration file:

```js
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "parserOptions": { "sourceType": "module" },
  "rules": {
    "eqeqeq": ["error", "always"],
    "brace-style": "error",
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "curly": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "indent": ["warn", 2],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["warn", 80],
    "new-cap": ["error", { "newIsCap": true }],
    "object-shorthand": ["error", "always"],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "always", "classes": "always" }],
    "space-infix-ops": ["error", { "int32Hint": false }]
  }
}
```

**On Your Own:** Add the same linting configuration to your project. Choose one person from your project pair to create the changes - no need for two people to make the same changes at once.

## Checks for Understanding

* What are hooks, and why can they be useful?
* What is linting, and why do we use it?