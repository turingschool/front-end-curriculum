---
title: Introduction to Unit Testing with JavaScript
length: 120
tags: javascript, browser, testing, tdd
---

## What does it mean to unit test your code?

We're always testing our code. We pull it up in the browser and poke at it. Does it do the thing we were expecting it to do? Yes? Then the code works. It's time to go and celebrate. No? Well then, back to the drawing board, right?

For small code bases, this works. Write or change some code and then flip over to the browser and check to see if you got the desired result. The problem is that this doesn't scale very well. When our applications start getting big, we end up with more and more places to poke.  

Even worse: we can end up in a situation where changing code in one place causes something to break somewhere else—somewhere that we're not currently poking.

Constantly poking at our code is tedious and it's not the best use of our time. We're better off writing some code that tests our other code for us. This sounds almost like a joke about programmers, but it's actually a really efficient way to maintain quality in our code base.

## What are some of the different kinds of tests?

We test our code at a number of different levels:

#### Unit Tests
- Unit tests test one function or one object in isolation to make sure that it behaves the way we were expecting it to behave.  

#### Integration Tests  
- Integration tests test the interaction between two units to make sure that they play together nicely and work the way we expect them to work.   

#### Acceptance Tests  
- Acceptance tests act like a user and visit the page. When I put in a bogus zip code, do I get the error on the page that I'm expecting? Acceptance tests don't typically care about what's happening under the hood. They just care that we got the desired result. Everything could be a total mess in the code base.

### End-to-End Tests  
- End-to-end tests test every component of the system. Let's say you have a back-end application and a front-end application. Your end-to-end tests would test both and make sure they are working together as expected.

Today, we're just talking about _unit_ tests. Why? The bulk of your tests for an application are likely to be unit tests. 

![Testing pyramid](/assets/images/testing-pyramid.png)

#### Benefits

* Unit tests are a safety net that helps developers find software bugs early
* Unit tests provide documentation by telling a living story about your application
* Unit tests foster simplicity by forcing you to write code that is decoupled, flexible, and configurable

## What is test-driven development?

Test-driven development (TDD) is one of those things that is deceptively simple to explain and incredibly hard to do. The basic premise is that we write our test for a piece of required functionality _before_ writing any implementation code. The test should fail when its first run, and then, you write the code to make it pass. Once the test passes, you can then safely refactor your code.

If you think about it, this is not too far off from how you're already thinking about code. You have some idea of what you want to happen and then you go ahead and (try) to make it happen—with some amount of cursing and flailing around wildly in the middle. You manually test your application by checking for the results that you expect in your console or the browser.

With TDD, we're basically automating this process. You're forcing yourself to write down assertions about how the code should work _before_ trying to make said assertions into code. One of the main advantages of TDD is that if you're diligent and stay on the path, then almost all of your code will be covered by tests and you can rest better at night. If a change to one part of your code base breaks some other part of your code base, then you'll know it immediately and be able to fix it quickly.


## So what happens if you don't test first?

"I'll write tests later. I just want to get this working first," is one of the greatest lies in software development and it's usually one that we tell ourselves.

Beyond the issue of general motivation—let's face it, you're never going to go back and add those tests—there is the issue that not all code is testable. We won't run into this issue today, but we will soon. The thing I'd like you to keep in mind is that if you write your tests first, it's really hard to find yourself in this situation.

**Steve's Law of Testing**: If something is hard to test, it's probably not your test's fault.

## Your First Test

Let's say we were writing a function that squared a number and we wanted to write a unit test to see if it worked. Here's how that test would look:

<p data-height="300" data-theme-id="23788" data-slug-hash="VjzroE" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/VjzroE/">Your First Test</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Let's talk a little bit about what's going on here:

1. Typically, our test files are separate from our implementation code.

*Test.js*

```js
describe('square', function () {
  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });
});
```

*Implementation.js*
```js
function square(n) {
  return n * n;
}
```

2. We have a `describe()` block which denotes that we're going to start writing a number of tests about the same unit.

```js
describe('square', function () {
//  it('returns the square of a number', function () {
//    assert.equal(square(2), 4);
//  });
});
```

3. We make a statement about our code with the `it()` block.

```js
//describe('square', function () {
  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });
//});

```

4. We write an _assertion_ about our code. Here, we're asserting that when we pass the number 2 into `square()` that the result should be 4.

```js
//describe('square', function () {
//  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
//  });
//});
```

In Mod 1, we will be using the Mocha testing framework along with the assertion library Chai.

* [Mocha](https://mochajs.org/) is a testing framework that runs on Node.js in your terminal, and can also be run in your browser window. This is what allows us to organize and execute our tests.

* [Chai](http://www.chaijs.com/) is an assertion library that plugs in to Mocha. The assertion library is what actually runs the specs and determines whether any given condition is valid or not.

Below you will find the general syntax for assertions for most of the methods available:

```js
  assert.method(actual, expected, [message]
```

You'll notice that our method takes three arguments (the third being optional, as denoted by the square brackets): 

- actual: The actual JS code that you want to run from the codebase
- expected: The expected output that should be returned based on test requirements
- message: A (String) message to yourself on what is being tested

## The Testing Cycle

One important thing to note is that TDD is not about writing tests. Writing tests is writing tests, period. TDD is more than that - it’s a methodology in which three activities are tightly interwoven: testing (in the form of unit testing), coding, and design (in the form of refactoring). In order to do TDD well, you should follow the following steps:


![TDD cycle](/assets/images/tdd-cycle.png)

1. Think and write test cases - this step ensures that you understand the functionality that is required
2. Red –  In this step, you try to run your test. You have no implementation code, so your test should fail.
3. Green – Write the minimum code required to get the test to pass
4. Green – Ensure that no old tests fail.
5. Refactor - Refactor to ensure functionality is intact and the code is refined.
6. Repeat this cycle - Steps 1 - 5 are repeated multiple times so that all the featuers are covered in TDD cycles

## Let's practice

Enough talking about testing. Let's actually write some tests to see this in action. We'll do some together and then you'll do some on your own.

Check out [this repository][rep] to get your hands dirty.

[rep]: http://github.com/turingschool-examples/testing-javascript
