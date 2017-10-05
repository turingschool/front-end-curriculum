---
title: Test Driven Development
tags: TDD, unit testing, mocha, chai
mod: 2
---

## Game Plan:
  - Review the what and why of Test Driven Development  
  - Discuss Mocha and Chai on a deeper level  
  - Look at the structure of a test and the testing lifecycle  
  - Write some tests!  

## Review: What is TDD?

TDD, or Test Driven Development, is the concept of writing a series of assertions in a test file BEFORE writing any of the applicable code that supports the tested functionality.   

Think back to some of your module 1 projects, the workflow probably looked something like this:
* Read project spec and feel kind of panicky  
* Start randomly throwing code into an `index.js` file to implement the first feature  
* Open Chrome  
* Stuff is broken, randomly add some other code into your `index.js` file  
* Refresh Chrome  
* Stuff is still broken. Randomly add more code.  
* Refresh Chrome  
* Stuff works!    
* Add some more code for the second feature  
* Refresh Chrome  
* New stuff works, old stuff is broken  
* Throw computer in the river.  

Building an application without tests is similar to building a house without blueprints. Just because this one column looks good, once you build the second column how do you know its going to be the same height and hold up the roof with the first column? You don't.  

Take a look at the workflow when you start with testing:
* Read project spec and feel kind of panicky  
* Find the smallest piece of functionality you can implement first  
* Write a test that implements that specific functionality  
* Watch the test fail  
* Implement the functionality  
* Watch the test pass/fail  
* Either fix code, or refactor code based on pass/fail status  
* Determine next smallest piece of functionality  
* Write a test that implements that specific functionality  
* Watch the test fail  
* Implement the functionality  
* Watch both tests pass/fail  
* Repeat.  

The primary difference between the two, is that with a test driven approach you have a small chunk of code that is keeping an eye on any previous functionality you have already written. This means that when you refactor, or add new features, or accidentally remove existing features, those tests are still watching for specific behavior with a simple terminal command - you no longer have to refresh Chrome and navigate through every button/input field/form/interaction on the DOM.  

## Testing Framework: Mocha  

For now, we'll focus on the testing framework [Mocha](https://mochajs.org/), along with an assertion library called [Chai](http://chaijs.com/).  

[Mocha](https://mochajs.org/) is a testing framework that runs on Node.js in your terminal, and can also be run in your browser window.  

Mocha itself is the framework that runs the tests and dictates the syntax of the test block as a whole. This is separate from the assertion library Chai that we will talk about in a minute.

First, lets look at the syntax provided from Mocha:    

```js
describe('unicorn', function() {
  it('should accumulate calories when eating', function() {
  });
})
```

The code above simply indicates that we want to test a piece of functionality that is associated with `unicorn`. In English, we want to test that it `should accumulate calories when eating`. These pieces are specific to the Mocha framework, but nothing is actually being tested yet. This is where we need to pull in something called an `assertion library`. Most testing frameworks provide the tools to run your tests in Node, or your browser, but the specific syntax for what you are verifying is true (aka "asserting"), can be done lots of different ways.

## Assertion Library: Chai  

An assertion is the crucial piece of the test that actually checks that when certain pieces of are code are executed, what we're getting back is what we expect.  

In english, here are a few examples of things we might want to assert:  

"After I create a new instance of a unicorn, the unicorn **should have a name**"  
"After I create a new instance of a unicorn, and tell it to sing, the unicorn **should return a string of text from a song**"  
"After I create a new instance of a unicorn, and the unicorn eats three times, the unicorn **should have 300 calories**"  

If you think of each of these simple english sentences, the "assertion" piece is the part in bold. In that last example, in other words, after I create a unicorn and it eats three times, I want to assert that its calorie count is **EQUAL TO** 300.  

The assertion library we are going to use today is called [Chai](http://chaijs.com/). Chai can be inserted into many different testing frameworks, but it works seamlessly with Mocha which is what we'll focus on today. Before we get back to our tests, lets look at some of the syntax options Chai provides:  

![Chai Syntax Libraries](http://i.imgur.com/T7Q4YkE.png)  

You'll notice that Chai provides three different interfaces that accomplish the same task - as a developer you can choose which version feels best to you. For today we are going to stick with the [Assert API](http://chaijs.com/api/assert/), since it might seem the most familiar coming off of mythical creatures in mod 1.  

The [Assert API](http://chaijs.com/api/assert/) from Chai provides a plethora of methods to allow for in-depth, dynamic testing. The general syntax looks something like this:  

```js
assert.method(actual, expected, [message])
```

In other words, we call `assert`, then the method we want, and the method takes three arguments.
`actual`: The actual javascript code you want to run from your codebase  
`expected`: What you expect to be returned for this test to pass  
`message`: String (Optional), a message to yourself to indicate what is being tested  

Note: Not all methods take three arguments. Keep the docs handy!  

## Common Chai Assertions  

Let's look at a few of the methods you might use most often:

Assert equality:  

```js
assert.equal(2 + 2, 4, 'adding two plus two returns 4');
```

Assert inequality:  

```js
assert.notEqual(3, 4, 'these numbers are not equal');
```

Assert existence:  

```js
var foo = 'hi';

assert.exists(foo, 'foo is neither `null` nor `undefined`');
```

Assert the type of something:  

```js
assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
```

Assert inclusion:  

```js
assert.include([1,2,3], 2, 'array includes a value of 2');
```

*PAUSE: What's the difference between equal vs deepEqual?*

At some point you may have seen an assertion that something `deeply equals` something else. This is because JavaScript is trying to make your life easy and fill in some gaps for you. Sometimes we don't want those gaps filled. Lets look at a quick example:

```js
assert.equal({ tea: 'green' }, { tea: 'green' });
```

Using the `equal` method, this test will fail. These two objects look the same but they are in fact two distinct objects with the same contents. You can think of them as if they were genetic twins. Genetic twins share the same genetic DNA but they are not the same person. The `equal` method checks if two things are exactly the same.

Now, lets look at `deepEqual`.

```js
  assert.deepEqual({ tea: 'green' }, { tea: 'green' });
```

If use `deepEqual` instead, the same test will pass. `deepEqual` tells Chai to dig deeper into the objects themselves and look at the internal data, which in this case is the same. The `deepEqual` method checks if two things contain the same information.

## Structure of a Test  

Now that we've discussed the difference between Mocha and Chai, let's look at a test from top to bottom.

There are four crucial pieces of a test:  
1. Setup
2. Pre-Assertion
2. Execution
3. Post-Assertion

Look at the following example and read the comments that talk about each line of our test:  

```js
// Before anything can happen, we need a describe block to indicate the context of what we are testing
// In this case, the tests within our describe block are all related to 'unicorn'
describe('unicorn', function() {

  // Next, an 'it block' contains the context of each specific test
  it('should accumulate calories when eating', function() {

    // 1. "Setup"
    // Instantiate an instance of our unicorn
    var unicorn = new Unicorn('Susan');

    // 2. "Execute"
    // Run appropriate functions that execute the behavior indicated by our test title
    unicorn.eat();
    unicorn.eat();
    unicorn.eat();

    // 3. "Assert"
    // Make an assertion to verify that after executing certain functions, we end up with what we expect
    assert.equal(unicorn.calories, 300);
  });
})
```

## The Testing Cycle

You'll often hear the following catch phrase in nerd-circles when talking about TDD:

**Red, Green, Refactor**  

![Red, Green, Refactor](http://i.imgur.com/lwHNsic.png)

In other words, write a test and watch it fail.  
Implement some code to make the test pass  
Then clean up your code with some refactoring now that we have a test to keep an eye on the correct functionality.  

![Mr Green Refactor](http://i.imgur.com/rIduOzg.jpg)  
You're welcome.  

Here is another more in-depth global lifecycle for best testing practices:  

![Global Lifecycle](http://i.imgur.com/CL6Pr58.png)  


## Testing Practice: Adding Mocha and Chai   

**First Rule of Mod 2:** No copy pasting. Until you can write this syntax with your eyes closed, practice typing it out word for word. If you feel like it's slow going, go home tonight and do this lesson again until you feel more confident.  

To practice, let's kick off a brand new project to demonstrate how you would add Mocha and Chai to a project, and write a couple basic tests.  

In your terminal, create your project directory, initialize an npm directory, and add a javascript file.  

```bash
mkdir unit-testing-practice && cd unit-testing-practice && npm init --yes && touch index.js  
```

Open up this project in your text editor.  

When we ran the command `npm init --yes` it generated a `package.json` file for us automatically. This file is where we will store all of the dependencies our project will need to run smoothly. The `--yes` command allowed us to bypass answering any config questions when generating this file, which means we have a bare-bones skeleton that looks like this:  

```json
// package.json  

{
  "name": "unit-testing-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```  

**Install Mocha**:  
`npm install -global mocha` (Installs the `mocha` command globally)  
`npm install --save-dev mocha` (Installs the `mocha` command locally within your project as a development dependency.)  

We need to install Mocha globally here because we are going to tell our package.json that the command `mocha` is what we will use to run our tests. This command will be executed in our terminal on a global level. We also need this package locally so when it sees the describe blocks within our code it knows what to do.  

**Install Chai**:  
`npm install --save-dev chai`  
(Installs chai locally - we don't need this package globally because our assertions will only ever be within our tests themselves.)  

You'll now see that in your `package.json` you have the following new dependencies (your version numbers might be different):  

```json
"devDependencies": {
  "chai": "^4.1.1",
  "mocha": "^3.5.0"
}
```

**Update package.json**:  
Finally, we need to tell our package.json what to do when we want to run our tests. You'll notice there is a section within our `package.json` file called `scripts`. This is where our node app goes to figure out if the command we told it to execute from our terminal exists in within our application. Right now, we should have the following unhelpful line of code:  

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Before we change anything, run the command `npm test` from your terminal. You should see text printout that looks suspiciously similar to the snippet above.  

*Pause: Command Breakdown: `npm` tells node to check package.json scripts for whatever command we type next. `test` tells node to execute the line of code indicated by the key `test` in our scripts object, which in this case is simply echoing a string in our terminal.*  

Update the scripts object to run Mocha:  

```js
"scripts": {
  "test": "mocha"
},
```

Run `npm test` again. You should see a line of code that says something like:

```bash
Warning: Could not find any test files matching pattern: test
```

This makes sense! We don't have a directory called `test`, which is what Mocha is looking for by default, nor do we have any test files for it to run.

Let's practice writing a couple tests in true TDD fashion - this first one will just help verify that everything is wired up correctly - plus it's always nice to start with an easy win.  

```bash
mkdir test && touch test/index-test.js
```

```js
// test/index-test.js  

describe('Box', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });
});
```

If you run `npm test` now, you'll see an expected error. It's important to recognize this error, because it will happen a lot. Mocha and Chai are two different libraries - which is indicated by this error message:  

```bash
1) Box should return true:
   ReferenceError: assert is not defined
    at Context.<anonymous> (test/index-test.js:3:5)
```

It's saying that it doesn't know what `assert` is, and recall that `assert` comes from the Chai library. At this point we haven't told our file to care about Chai, nor have we told it which API we want to use (remember Chai lets us choose between `should`, `expect`, or `assert`).

Import Chai and the `assert` library, at the top of your test file:  

```js
// test/index-test.js  

const chai = require('chai');
const assert = chai.assert;

describe('Box', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });
});
```

*NOTE: You might have seen syntax like `import { assert } from 'chai'` instead of this `require('chai')` business. `import` comes from ES6, which needs some additional tools in order to run. Right now we have a very simple JS application and are not incorporating any Babel compilers to help us navigate ES6 syntax. For now we will stick to ES5 syntax.*  

If you run `npm test` now, we should have a passing test.  

```bash
Box
  ✓ should return true


1 passing (10ms)  
```


## Testing Practice: Iteration 1  

Obviously this test isn't doing anything helpful, but we know our files are wired up. Let's add some more interesting tests. Let's pretend we just received a spec, and the first iteration looks something like this:  

```
Iteration 1:
- You should have a Box constructor which has a default height and width of 100.
- User should be able to pass in specific height and widths if they so choose.
- You should be able to calculate the area of your box using the method `.area()`.   
```

Let's write some unit tests that pick apart each individual piece of functionality for this iteration. Notice that we are now also bringing in our primary `index.js` file and assigning it the variable `Box`.  

We will work through the TDD testing cycle we mentioned earlier: `Red-Green-Refactor`.  

```js
// test/index-test.js

const chai = require('chai');
const assert = chai.assert;
const Box = require('../index.js');

describe('Box', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });

  it('should have a default height and a width', function() {
    var box = new Box();

    assert.equal(box.height, 100);
    assert.equal(box.width, 100);
  });

  it('should have take a height and a width as arguments', function() {
    var box = new Box(50, 40);

    assert.equal(box.height, 50);
    assert.equal(box.width, 40);
  });

  it('should calculate its area', function() {
    var box = new Box(30, 30);

    assert.equal(box.area(), 900);
  })
});
```

Run the tests and watch them fail (RED).

```bash
1) Box should have a default height and a width:
   TypeError: Box is not a constructor
    at Context.<anonymous> (test/index-test.js:12:15)

2) Box should have take a height and a width as arguments:
   TypeError: Box is not a constructor
    at Context.<anonymous> (test/index-test.js:19:15)

3) Box should calculate its area:
   TypeError: Box is not a constructor
    at Context.<anonymous> (test/index-test.js:26:15)
```

Write some code to implement the functionality one test at a time. You can use the method `.skip` on any tests you want to skip so you can isolate individual tests you want to run.  

Take a minute to make those tests pass **WITHOUT LOOKING AHEAD**. Here's a picture of a pig so you aren't tempted to look at the answer first.  

![adorable pig in rain boots](http://i.imgur.com/iEL5S40.jpg)   


```js
// index.js  
function Box(height, width) {
  this.height = height || 100,
  this.width = width || 100
}

Box.prototype.area = function() {
  const height = this.height;
  const width = this.width;
  const area = height * width;
  return area;
}

module.exports = Box;
```

Run `npm test` and watch the tests pass! (GREEN).

Look at the implementation of the `Box.prototype.area()` function as its written in the code snippet above. It works, and it was helpful to be super verbose on a first pass, but its pretty ugly. Now that we have a test to watch for functionality, we can refactor that code to clean it up.  

```js
// index.js  

Box.prototype.area = function() {
  return this.height * this.width;
}

```

Run `npm test` again to make sure we didn't break anything. (REFACTOR).

SWEET! There we go with the first cycle of our RED-GREEN-REFACTOR TDD approach.  

## Testing Practice: Hooks & Iteration 2

You may have noticed that every time we wrote a test, we had to instantiate a new instance of our box. This is super repetitive, and kind of irritating to have to do every time. Luckily, Mocha provides some lifecycle `hooks` that help automate stuff like this. Take a second to look at [the documentation](https://mochajs.org/#hooks).   

Using the docs linked above, add a `beforeEach()` hook that instantiates a new box before every test, this should allow you to remove the line `var box = new Box()` from all of your tests. If you're getting an error about box not being defined, check out [this stackoverflow conversation](https://stackoverflow.com/questions/38044111/basic-but-proper-use-of-beforeeach-or-aftereach-with-mocha-js-and-chai-js).  

Implement iteration 2 for our box per the spec outlined below.  

```
Iteration 2:  

- You should be able to increment the width by a provided value.
ie: `box.increaseWidth(10)`
- You should be able to increment the height of your box by a provided value
ie: `box.incrementHeight(10)`  
- Refactor to allow for a single method to do both jobs
ie: `box.increment(10, height)` or `box.increment(10, width)`  
```

## Homework: Adventures of Blocky  

[Adventures Of Blocky](http://frontend.turing.io/lessons/module-2/adventures-of-blocky.html)  

Now that you have a grasp of testing on a deeper level, its time to really get after it and drive home the concepts we've talked about. Click on the lesson repo above to begin your testing adventure!  
