---
title: Test Driven Development
tags: TDD, unit testing, mocha, chai
mod: 2
---

## Game Plan:
  - Review the what and why of Test Driven Development  
  - Look at the structure of a test and the testing lifecycle  
  - Discuss Mocha and Chai on a deeper level  
  - Write some tests!  

## Vocab

- `TDD` Test Driven Development / Design
- `Four Phase Test` A test that is organized into the phases [Setup, Execution, Assertion, Teardown]
- `Assertion` An expression containing some testable logic
- `Assertion Library` A package of assertion functionality. Usually distinct from a `Testing Framework`
- `Testing Framework` A library that determines how tests are organized and executed
- `SUT` or `Subject Under Test` The unit being tested
- `Red Green Refactor` The process of writing a failing test, making it pass, then refactoring the tests and/or implementation with confidence

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

## Why TDD?

Tests are useful because testing everything by hand is tedious, error prone, and slow. Computers can test things faster and better than humans (that's why they will some day take over the world).
TDD is good because it provides a process for writing tests well.

Think about a time when you changed something and then a method somewhere else broke.
Without tests, the only way you'd know if something broke is to go poke at it manually.
With tests, you know right away.
These benefits scale as your app grows larger.

## What Should Be Tested?

This is the age old question!
This is a matter of culture and personal opinion and will vary widely depending on what software development team you join. Some teams want to test everything, others want you to test only the _really_ important stuff.
Typically, the deciding factor in what should be tested is whether or not tests deliver enough value vs. the cost it takes to create and maintain them.

**Some value associated with testing:**
- confidence that your code does the right thing
- confidence that you didn't break anything when your code changed
- the speed at which the points above can be verified
- code that is tested tends to be better than code that is not

**Some costs associated with testing:**
- they take more time to write
- they don't make the business money
- they take time to maintain
- updating features is slower when you've got to fix tests, too

<!-- 
  Take some time and think about the game which you are building. 
  What are some the key pieces of functionality in your game?
-->

## Types of Tests

![The Testing Pyramid](https://i.imgur.com/8nDly8J.png)

There are many types of tests, and a lot of them go by different names.
This lesson will focus on unit tests because a they are the fastest and least costly.
Most tests you write will be unit tests.

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

## Testing Framework: Mocha  

For now, we'll focus on the testing framework [Mocha](https://mochajs.org/), along with an assertion library called [Chai](http://chaijs.com/).  

[Mocha](https://mochajs.org/) is a testing framework that runs on Node.js in your terminal, and can also be run in your browser window.  

Mocha itself is the framework that runs the tests and dictates the syntax of the test block as a whole. This is separate from the assertion library Chai that we will talk about in a minute.

First, lets look at the syntax provided from Mocha:    

```js
describe('unicorn', function() {
  it('calling eat accumulates calories', function() {
  });
})
```

The code above simply indicates that we want to test a piece of functionality that is associated with `unicorn`. In English, we want to test that `eating accumulates calories`. You'll write the code above with any framework, but nothing is actually being tested yet. This is where we need to pull in something called an `assertion library`. Most testing frameworks provide the tools to run your tests in Node, or your browser, but the specific syntax for what you are verifying is true (aka "asserting"), can be done lots of different ways.

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

## BDD

The idea with BDD is to specify behavior in a very natural, human way.
For example, tests should read like "Given X, when I do Y, then Z should happen."

## Structure of a Test  

Good tests have **Four Phases**:  
1. Setup - Setup the conditions required to execute the action on your `SUT`
2. Execution - Execute some action on your `SUT`
3. Assertion - Assert that the action you did had the results you expect
4. Tear Down - Clean up any resources you used in your test (this is done automatically the majority of the time)

All four of these phases deal with the **Subject Under Test** (`SUT`, or just `subject`).
Most tests you write will not need the Tear Down phase, but it's good to know that step is there sometimes.

**Good tests:**
- test one thing
- don't test what didn't happen
- have no control flow (`if`, `when`, `for`) statements
- can be used as documentation for the code they test
- are clear and easy to read

Look at the following example and read the comments that talk about each line of our test:  

```js
// Before anything can happen, we need a describe block to group related tests together
// In this case, the tests within our describe block are all related to the 'Unicorn' class
describe('Unicorn', function() {

  // Next, an 'it block' contains the context of each specific test
  it('should add 100 calories after eating', function() {

    // 1. "Setup"
    // Instantiate an instance of our unicorn
    var unicorn = new Unicorn('Susan');

    // 2. "Execution"
    // Run appropriate functions that execute the behavior indicated by our test title
    unicorn.eat();
    unicorn.eat();
    unicorn.eat();

    // 3. "Assertion"
    // Make an assertion to verify that after executing certain functions, we end up with what we expect
    assert.equal(unicorn.calories, 300);
  });
})
```

## Testing Practice: Adding Mocha and Chai   

To practice, let's kick off a brand new project to demonstrate how you would add Mocha and Chai to a project, and write a couple basic tests.  

In your terminal, create your project directory and initialize an npm directory 

```bash
mkdir unit-testing-practice && cd unit-testing-practice && npm init --yes  
```

Next, let's add some of our base files

```bash
touch index.html index.js Box.js Game.js
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
`npm install --save-dev mocha` (Installs the `mocha` command locally within your project as a development dependency.)  

**Install Chai**:  
`npm install --save-dev chai`  

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
  "test": "./node_modules/mocha/bin/mocha"
},
```

Run `npm test` again. You should see a line of code that says something like:

```bash
Warning: Could not find any test files matching pattern: test
```

This makes sense! We don't have a directory called `test`, which is what Mocha is looking for by default, nor do we have any test files for it to run.

Let's practice writing a couple tests in true TDD fashion - this first one will just help verify that everything is wired up correctly - plus it's always nice to start with an easy win.  

```bash
mkdir test && touch test/Box-test.js
```

```js
// test/Box-test.js  

describe('Box', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
```

If you run `npm test` now, you'll see an expected error. It's important to recognize this error, because it will happen a lot. Mocha and Chai are two different libraries - which is indicated by this error message:  

```bash
1) Box should return true:
   ReferenceError: expect is not defined
    at Context.<anonymous> (test/Box-test.js:3:5)
```

It's saying that it doesn't know what `expect` is, and recall that `expect` comes from the Chai library. At this point we haven't told our file to care about Chai, nor have we told it which API we want to use (remember Chai lets us choose between `should`, `expect`, or `assert`).

Import Chai and the `expect` library, at the top of your test file:  

```js
// test/Box-test.js  

const chai = require('chai');
const expect = chai.expect;
const Box = require('../Box.js');

describe('Box', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
```

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

Let's write some unit tests that pick apart each individual piece of functionality for this iteration. Notice that we are now also bringing in our primary `Box.js` file and assigning it the variable `Box`.  

We will work through the TDD testing cycle we mentioned earlier: `Red-Green-Refactor`.  

```js
// test/Box-test.js

const chai = require('chai');
const expect = chai.expect;
const Box = require('../Box.js');

describe('Box', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default height and a width', function() {
    var box = new Box();

    expect(box.height).to.equal(100);
    expect(box.widht).to.equal(100);
  });

  it('should have take a height and a width as arguments', function() {
    var box = new Box(50, 40);

    expect(box.height).to.equal(50);
    expect(box.width).to.equal(40);
  });

  it('should calculate its area', function() {
    var box = new Box(30, 30);

    expect(box.area()).to.equal(900);
  })
});
```

Run the tests and watch them fail (RED).

```bash
1) Box should have a default height and a width:
   TypeError: Box is not a constructor
    at Context.<anonymous> (test/Box-test.js:11:15)

2) Box should have take a height and a width as arguments:
   TypeError: Box is not a constructor
    at Context.<anonymous> (test/Box-test.js:18:15)

3) Box should calculate its area:
   TypeError: Box is not a constructor
    at Context.<anonymous> (test/Box-test.js:25:15)
```

Write some code to implement the functionality one test at a time. You can use the method `.skip` on any tests you want to skip so you can isolate individual tests you want to run.  

Take a minute to make those tests pass **WITHOUT LOOKING AHEAD**. Here's a picture of a pig so you aren't tempted to look at the answer first.  

![adorable pig in rain boots](http://i.imgur.com/iEL5S40.jpg)   


```js
// Box.js  
class Box {
  constructor(height = 100, width = 100) {
    this.height = height;
    this.width = width;
  }

  area() {
    const height = this.height;
    const width = this.width;
    const area = height * width;
    return area;  
  }
}

module.exports = Box;
```

Run `npm test` and watch the tests pass! (GREEN).

Look at the implementation of the `Box.prototype.area()` function as its written in the code snippet above. It works, and it was helpful to be super verbose on a first pass, but its pretty ugly. Now that we have a test to watch for functionality, we can refactor that code to clean it up.  

```js
// Box.js  

area() {
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
ie: `box.increment(10, 'height')` or `box.increment(10, 'width')`  
```

## DOM Manipulation

One of the biggest hurdles you'll have when building frontend applications is keeping your codebase from becoming a complicated mess as your application grows. Chances are good that you are currently intermixing your DOM Manipulation with code that is handling the state of your application. However, the classes in your game file should be completely oblivious to the DOM - they should only store state and broadcast their changes to the DOM... not handle DOM manipulation directly.

Now that we have our class of Box, let's make this into a full-fledged game by setting up some functionality to display the box height and width to the DOM when the application loads. First, add a file to house all of your DOM Manipulation:

```bash
touch domUpdates.js
```

Next, set up a boilerplate in your HTML file with script tags for every JS file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>The Display Box Game</title>
</head>
  <body>

    <output class="display-height"></output>
    <output class="display-width"></output>

  <script type="text/javascript" src="Box.js"></script>
  <script type="text/javascript" src="domUpdates.js"></script>
  <script type="text/javascript" src="index.js"></script>
  </body>
</html>
```

Let's take the `increaseWidth` and `increaseHeight` methods that you created earlier and get these updated numbers to display to the DOM directly whenever these methods are called. Let's start by modifying our test for `increaseWidth`.

Since we aren't worried about actually testing our DOM manipulation at this point, we are going to use a [`spy`](https://github.com/chaijs/chai-spies) to verify whether our method that displays the score has been called. *Note: Spies will help you verify calls to methods without actually calling them.*

First, let's install and require `chai-spies`:

**Install**
`npm install --save-dev chai-spies`

```js
const chai = require('chai');
const expect = chai.expect;
const Box = require('../Box.js');
const spies = require('chai-spies')
chai.use(spies);
```

Next, require the `domUpdates` files that we will be using to store our DOM manipulation methods:

```js
global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, ['displayHeight','displayWidth'], () => true);
```

And lastly, let's update our test for `increaseWidth` to verify that our method of `displayWidth` (that we have yet to write) is being called:

```js
  it('should have an increment method that will increase the width by a provided value', function() {
    box.increaseWidth(10);

    assert.equal(box.width, 110);
    expect(domUpdates.displayWidth).to.have.been.called(1);
    expect(domUpdates.displayWidth).to.have.been.called(1);
  });

```

Run `npm test`

Your test should fail and you should get an assertion error that doesn't show the method has been called (as it doesn't exist). Let's fix that. Go to your `domUpdates` file to create that method:

```js
// domUpdates.js

const domUpdates = {
  displayWidth(width){
    document.querySelector('.display-width').innerText = width;
  }
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}

```

You'll want to add the conditional that you see at the bottom to your `Box` file as well - so that exports don't affect the client side but will still happen for testing.

Finally, we can call that method in the appropriate place and see that our test is passing.

```
//Box.js

increaseWidth(val) {
  this.width += val;
  domUpdates.displayWidth(this.width);
}
```

*Note - if you would like to see this actually update client-side, you will have to create a new instance of Box and call the increaseWidth method in index.js*


#### Your Turn
Set up functionality and tests to display the width and the height to the DOM when the application loads.

## Homework: Adventures of Blocky  

[Adventures Of Blocky](http://frontend.turing.io/lessons/module-2/adventures-of-blocky.html)  

Now that you have a grasp of testing on a deeper level, its time to really get after it and drive home the concepts we've talked about. Click on the lesson repo above to begin your testing adventure!  
