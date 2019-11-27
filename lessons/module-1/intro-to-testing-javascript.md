---
title: Introduction to Unit Testing with JavaScript
length: 150
tags: javascript, testing, tdd, mocha, chai
---

## Learning Goals

* Understand what testing is, why it is important, and the various types of tests
* Recognizing the importance of Test Driven Development (TDD)
* Ability to read/create tests
* Understanding how to import/export files specifically for testing

## Vocabulary

- `TDD` Test Driven Development / Design
- `Assertion` An expression containing some testable logic
- `Assertion Library` A package of assertion functionality. Usually distinct from a `Testing Framework`
- `Testing Framework` A library that determines how tests are organized and executed

<section class="call-to-action">
## Warm Up

In your group, brainstorm at least 3 pieces of functionality that your assigned app has. Use the `user story` format below:

```
As a user...
  - When I [take some action]
  - I [observe some outcome]
```

Here's as example for Venmo:

```
As a user,
- When I click "Transfer Balance"
- I receive a notification that the transfer has initiated.
```
</section>

## What does it mean to test your code?

We're always testing our code. We pull it up in the browser and poke at it. Does it do the thing we were expecting it to do? Yes? Then the code works. It's time to go and celebrate. No? Well then, back to the drawing board, right?

For small code bases, this works. Write or change some code and then flip over to the browser and check to see if you got the desired result. The problem is that this doesn't scale very well. When our applications start getting big, we end up with more and more places to poke.  

Even worse: we can end up in a situation where changing code in one place causes something to break somewhere else—somewhere that we're not currently poking.

<section class="note">
Constantly poking at our code manually is tedious and it's not the best use of our time. We're better off writing some code that tests our other code for us. It's a really efficient way to maintain quality in our code base.
</section>

## Unit Tests

The bulk of your tests for an application are likely to be unit tests. **Unit tests** test one function or one object in isolation to make sure that it behaves the way we were expecting it to behave. The bulk of your tests for an application are likely to be unit tests (both at Turing and in the work environment).

## Integration Tests

**Integration tests** test the interaction between two units to make sure that they play together nicely and work the way we expect them to work. You will get many opportunities to experiment with this type of test at Turing (including Mod 1) and in the work environment as well.  

#### Benefits

* Unit & Integration tests are a safety net that helps developers find software bugs early
* Unit & Integration tests provide documentation by telling a living story about your application
* Unit tests foster simplicity by forcing you to write code that is decoupled, flexible, and configurable
* Integration tests allow us to be confident that all those small pieces are working together as expected

<section class="call-to-action">
### Think - Pair - Share

* What is one piece of functionality (think back to the Warm Up) that you could test from your assigned application?
* Would that be a unit or integration test? Why?
* What would the consequences for the company be if this piece of functionality broke?
</section>

## What is Test-Driven Development?

Test-Driven Development (TDD) is one of those things that is deceptively simple to explain and incredibly hard to do. The basic premise is that we write our test for a piece of required functionality _before_ writing any implementation code. The test should fail when its first run, and then, you write the code to make it pass. Once the test passes, you can then safely refactor your code.

If you think about it, this is not too far off from how you're already thinking about code. You have some idea of what you want to happen and then you go ahead and (try) to make it happen—with some amount of cursing and flailing around wildly in the middle. You manually test your application by checking for the results that you expect in your console or the browser.

With TDD, we're basically automating this process. You're forcing yourself to write down assertions about how the code should work _before_ trying to make said assertions into code. One of the main advantages of TDD is that if you're diligent and stay on the path, then almost all of your code will be covered by tests and you can rest better at night. If a change to one part of your code base breaks some other part of your code base, then you'll know it immediately and be able to fix it quickly.

## The Testing Cycle

One important thing to note is that TDD is not about writing tests. Writing tests is writing tests, period. TDD is more than that - it’s a methodology in which three activities are tightly interwoven: testing (in the form of unit testing), coding, and design (in the form of refactoring). In order to do TDD well, you should follow the following steps:

![TDD cycle](/assets/images/tdd-cycle.png)

1. Think and write test cases - this step ensures that you understand the functionality that is required
2. Red –  In this step, you try to run your test. You have no implementation code, so your test should fail.
3. Green – Write the minimum code required to get the test to pass
4. Green – Ensure that no old tests fail.
5. Refactor - Refactor to ensure functionality is intact and the code is refined.
6. Repeat this cycle - Steps 1 - 5 are repeated multiple times so that all the features are covered in TDD cycles

<section class="call-to-action">
### In Your Notebook

* What is your understanding of why testing is important?
* Explain the steps of TDD in your own words.  
</section>

## What happens if you don't test first?

"I'll write tests later. I just want to get this working first," is one of the greatest lies in software development and it's usually one that we tell ourselves.

Beyond the issue of general motivation — let's face it, you're never going to go back and add those tests — there is the issue that not all code is testable. We won't run into this issue today, but we will soon. The thing you want to keep in mind is that if you write your tests first, it's really hard to find yourself in this situation.

**Steve's Law of Testing**: If something is hard to test, it's probably not your test's fault.

## Your First Test

In Mod 1, we will be using the Mocha testing framework along with the assertion library Chai.

* [Mocha](https://mochajs.org/) is a testing framework that runs on `Node.js` in your terminal. This is what allows us to organize and execute our tests.

* [Chai](http://www.chaijs.com/) is an assertion library that plugs into Mocha. The assertion library is what actually runs the specs and determines whether any given condition is valid or not.

Let's say we were writing a function that squared a number and we wanted to write a unit test to see if it worked. Here's how that test would look:

```javascript
function square(n) {
  return n * n;
}

describe('square', function() {

  it('returns the square of a number', function() {
    var result = square(2);

    assert.equal(result, 4);
  });

});
```

Let's talk a little bit about what's going on here:

* Typically, our test files are separate from our implementation code.

*test.js*

```js
describe('square', function() {
  it('returns the square of a number', function() {
    var result = square(2);

    assert.equal(result, 4);
  });
});
```

*implementation.js*

```js
function square(n) {
  return n * n;
}
```

* We have a `describe()` block which denotes that we're going to start writing a number of tests about the same unit.

```js
describe('square', function() {
//  it('returns the square of a number', function() {
  // var result = square(2);
  //
  // assert.equal(result, 4);
//  });
});
```

* We make a statement about our code with the `it()` block.

```js
//describe('square', function() {
  it('returns the square of a number', function() {
    var result = square(2);

    assert.equal(result, 4);
  });
//});

```

* We write an _assertion_ about our code. Here, we're asserting that when we pass the number 2 into `square()` that the result should be 4.

```js
//describe('square', function() {
//  it('returns the square of a number', function() {
      var result = square(2);

      assert.equal(result, 4);
//  });
//});
```

Below you will find the general syntax for assertions for most of the methods available:

```js
  assert.method(actual, expected)
```

You'll notice that our method takes two arguments:

- `actual`: The actual JS code that you want to run from the codebase
- `expected`: The expected output that should be _returned_ based on test requirements

## Importing/Exporting Files

As mentioned earlier, tests are typically separate from its implementation code.  In order for this to work properly, we need to be able to export the functionality from one file and import it into the test file.  Let's take a look at an example:

*implementation.js*

```js
function hello() {
  return 'Hello World';
}

module.exports = hello;
```

The `module.exports` allows us to export a piece of functionality.  In this instance, we want to export our function Hello, so that is what we assign it.    

*test.js*

```js
var hello = require('./implementation')

describe('hello', function() {
  it('returns the string Hello World', function() {
    assert.equal(hello(), 'Hello World');
  });
});
```

By adding `require('./implementation')` to our test file, we are importing that function and assigning it to a variable.  Then we can test it by asserting what value is returned after invoking our imported function!

<section class="call-to-action">
## Let's practice

Enough talk about testing. Let's actually write some tests to see this in action! We'll do some together and then you'll do some on your own.

Check out [this repository][rep] to get your hands dirty.

[rep]: http://github.com/turingschool-examples/testing-javascript
</section>


## The Testing Process

It takes some time to build out solid habits when testing.  Often we'll see some developers run the test without even looking at the test first, or start writing the implementation code before they have even run the test.  Develop these good habits early so you really know what you are testing for and can speak to the process.

1. **Read the test**.  This includes the description, paying attention to what it is asking for, and then what the assertions are.
2. **Run the test**.  It should fail.  Take a look at the error and what it is saying.  Pay attention also to what line the test fails on.
3. Then begin to **write implementation code**.  Going off of what the error says, write the _minimum_ amount of code it is asking for.
4. **Run the test** again.  If it still fails, see if the error has changed.  Is a different line of code failing?  Rinse and repeat until it passes.
5. Then make sure that all of the **previous tests are passing**.  If not, go back and follow steps 1-4.  Otherwise, continue on to the next one.

<section class="checks-for-understanding">
### Wrap Up

Open up the Slack DM between you, your project parter, and your instructors. Share your answers to the following with the group:
* Why is testing your code important? ⬅️ _Popular Interview Question!_
* What is the TDD process?
* In the Paired Project project:
  - What are the smallest pieces of functionality?
  - How could you write tests for that functionality?

**Note:** You are not required to test anything on the Paired Project, this is just an exercise to push your thinking on how it _can_ be applied.
</section>
