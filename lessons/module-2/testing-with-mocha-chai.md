---
title: Test Driven Development
tags: TDD, unit testing, mocha, chai
mod: 2
---

## Game Plan:

- Talk through the what and why of Test Driven Development  
- Look at the structure of a test and the testing lifecycle  
- Discuss Mocha and Chai
- Write some tests!`

## Vocab

- `TDD` Test Driven Development / Design
- `Assertion` An expression containing some testable logic
- `Assertion Library` A package of assertion functionality. Usually distinct from a `Testing Framework`
- `Testing Framework` A library that determines how tests are organized and executed
- `Red Green Refactor` The process of writing a failing test, making it pass, then refactoring the tests and/or implementation with confidence
- `Test Phases` A test that is organized into the phases [Setup, Execution, Assertion, Teardown*]

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

Building an application without tests is similar to building a house without blueprints. Just because this one column looks good, once you build the second column how do you know it's going to be the same height and hold up the roof with the first column? You don't.  

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

The main **benefits** of writing tests are:

* *Computers can test things faster and more accurately than humans:* testing things manually in the browser is tedious, error prone and slow
* *Forces you to slow down and pseudocode:* which helps you think more thoroughly about potential pitfalls *before* you write your code; it's much easier to course-correct yourself before you right any code than to refactor broken code after it's been written
* *Provides a blueprint for new developers to see how the codebase should work:* if your tests are thorough and well-written, a new developer should be able to hop directly into the test folder and get a solid understanding of how each piece of the codebase works
* *Provides future integrity for your code as you iterate on your application:* applications are never done and can always be improved, added to, pivoted, etc. Tests ensure that as we make these changes, we won't accidentally introduce new bugs
* *Forces you to write more module, SRP-style code:* often times you'll only recognize opportunities to refactor as you go to write tests for you code and find that it's not testable

Some very minimal **downsides** of TDD are:

* *It takes more time to write and maintain your codebase, which slows down development:* this can be problematic if you're working in an environment where meeting deadlines is a top priority (like working in a newsroom)
* *They don't make the business money:* tests aren't features, and if your company is relying on investors to keep itself going, making progress on the application functionality is going to be of utmost importance

The main benefit of Test Driven Development is that you are forced to look at the problem you are solving at a high level and not worry about the little details for implementing your solution.

For example, if you are writing a test for a function, you focus on the scenario: for a given input to the function, what is the expected output? The test does not care what exactly happens within the function as long as the output is what is expected.


## What Makes Testing Hard?

* At first, not knowing what to test
* So many libraries and frameworks to choose from, differing syntax in documentation
* Difficult to see the benefit until you've been saved by a failing test


## What Should Be Tested?

When talking about what should be tested, we say that we want to test the **outcome** or **result** of a particular piece of code execution. This is an important distinction and can help clarify one of the key pieces of what makes testing hard.

For example, let's say we have a quiz application that checks a user's answers and adds/removes points from their score:

```js
class Question {
  constructor(questionText, correctAnswer) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
  }

  checkAnswer(playerAnswer) {
    if (playerAnswer === this.correctAnswer) {
      player.score++
    } else {
      player.score--
    }
  }
}
```
<section class="call-to-action">
What would we want to verify about the `checkAnswer` method? What should this method do?
</section>

```js
describe('Question Class', () => {
  it('should increment a player score when their answer is correct', () => {

  });

  it('should decrement a player score when their answer is incorrect', () => {

  });
});
```

<section class="call-to-action">
### Practice

In your journal:
* Take a look at the following code. What would you want to test about this function?

```js
function reverseWord(word) {
  let letters = word.split();
  letters.reverse();
  return letters;
}

reverseWord('turing'); // gnirut
```
</section>

<!--

describe('reverseWord', () => {
  it('should return the given word in reverse order', () => {
    expect(reverse('javascript')).to.equal('tpircsavaj');
  });
});

-->

## Testing Framework: Mocha  

For now, we'll focus on the testing framework [Mocha](https://mochajs.org/), along with an assertion library called [Chai](http://chaijs.com/).  

[Mocha](https://mochajs.org/) is a testing framework that runs on Node.js in your terminal, and can also be run in your browser window.  

Mocha itself is the framework that runs the tests and dictates the syntax of the test block as a whole. This is separate from the assertion library Chai that we will talk about in a minute.

First, lets look at the syntax provided from Mocha:    

```js
describe('unicorn', function() {
  it('should accumulate calories when calling eat', function() {

  });
});
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

You'll notice that Chai provides three different interfaces that accomplish the same task - as a developer you can choose which version feels best to you. For today we are going to go with the [Expect API](https://www.chaijs.com/api/bdd/).


## Structure of a Test  

Good tests have **Four Phases**:  
1. Setup - Setup the conditions required to execute the action on your `SUT`
2. Execution - Execute some action on your `SUT`
3. Assertion - Assert that the action you did had the results you expect
4. Tear Down - Clean up any resources you used in your test (this is done automatically the majority of the time)

(Most tests you write will not need the Tear Down phase, but it's good to know that step is there sometimes)

All of these phases deal with the **Subject Under Test** (`SUT`, or just `subject`).


**Good tests:**
- Test one thing
- Do not have control flow (`if`, `when`, `for`) statements
- Can be used as documentation for the code they test
- Are clear and easy to read

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
    expect(unicorn.calories).to.equal(300);
  });
});
```

## Testing Practice: Setup, Mocha, and Chai   

To practice, let's kick off a small project to demonstrate how you would utilize Mocha and Chai to write a couple tests.  

In your terminal, clone down this [starter repo](https://github.com/turingschool-examples/our-first-tests) and run `npm install`:

```bash
git clone https://github.com/turingschool-examples/our-first-tests
cd our-first-tests
npm install
```

---

Let's look at the tooling we have in place already - go to the `package.json` file!

Things to note:

* Libraries in `devDependencies`: mocha and chai
* `npm test` script (this script looks in a specific place for test files)


We already have two files in place for us: `/src/Box.js` and `/test/Box-test.js` In our test file, we need to require our assertion library: chai.

```js
// test/Box-test.js  

const chai = require('chai');
```

Let's practice writing a couple tests in true TDD fashion - this first one will just help verify that everything is wired up correctly - plus it's always nice to start with an easy win.  

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
1) Box
       should return true:
       ReferenceError: expect is not defined
      at (/test/Box-test.js:5:1)
```

It's saying that it doesn't know what `expect` is, and recall that `expect` comes from the Chai library. At this point we haven't told our file to care about Chai, nor have we told it which API we want to use (remember Chai lets us choose between different assertion styles: `should`, `expect`, or `assert`).

Require Chai and the `expect` library, at the top of your test file:  

```js
// test/Box-test.js  

const chai = require('chai');
const expect = chai.expect;

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

const Box = require('../src/Box');

describe('Box', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default height and a width', function() {
    var box = new Box();

    expect(box.height).to.equal(100);
    expect(box.width).to.equal(100);
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
1) Box
    should have a default height and a width:
    some error at (/test/Box-test.js:12:1)

2) Box
    should have take a height and a width as arguments:
    some error (/test/Box-test.js:19:1)

3) Box
    should calculate its area:
    some error at (/test/Box-test.js:26:1)
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
};

```

Run `npm test` again to make sure we didn't break anything. (REFACTOR).

SWEET! There we go with the first cycle of our RED-GREEN-REFACTOR TDD approach.  

## Testing Practice: Iteration 2

Implement iteration 2 for our box per the spec outlined below.  

```
Iteration 2:  

- You should be able to increase the width by a provided value.
ie: `box.increaseWidth(10)`
- You should be able to increase the height of your box by a provided value
ie: `box.increaseHeight(10)`
```

## Testing Practice: Iteration 3

Implement iteration 3 for our box per the spec outlined below;

```
Iteration 3:

- Refactor your code so that instead of having increaseWidth and increaseHeight methods, you can have a single method to do both jobs
ie: `box.increment(10, 'height')` or `box.increment(10, 'width')`
```

<section class="checks-for-understanding">
### Checks for Understanding

* What is the difference between Mocha and Chai?
* What are the phases of a test?
* What is the `describe()` block used for, and what is the `it()` block used for?
</section>
