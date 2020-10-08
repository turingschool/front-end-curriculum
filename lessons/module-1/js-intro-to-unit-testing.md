---
title: "JS: Intro to Unit Testing"
tags: javascript, testing, tdd, mocha, chai
---

## Learning Goals

* Understand what testing is, why it is important, and the various types of tests
* Recognizing the importance of Test Driven Development (TDD)
* Understand the red/green testing workflow
* Ability to read/create tests
* Understand how to import/export files specifically for testing

## Vocabulary

- `TDD` Test Driven Development / Design
- `Assertion` An expression containing some testable logic
- `Assertion Library` A package of assertion functionality. Usually distinct from a `Testing Framework`
- `Testing Framework` A library that determines how tests are organized and executed
- `Red/Green Testing` - a workflow for testing your code, in which we write *and* fail tests (red) before we write any implementation code to pass the test (green)

## Part I: Strategies, Tools, and Functions

<section class="call-to-action">
## Warm Up

Open [this repository](https://github.com/turingschool-examples/first-unit-tests), then:
* Read the README, and follow the `Getting Started` steps.
* Run the `npm test` command in your terminal and explore at the result. 
* Open up the `functions-test.js` file, and read every line, out loud, using all of the terms of art that you can.
* What do you notice about this file? What does it seem like this file is doing?
* What peices of code are clear in their purpose? What is unclear?
* What sort of functionality is being tested?
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

#### Benefits of Testing

* Unit & Integration tests are a safety net that helps developers find software bugs early
* Unit & Integration tests provide documentation by telling a living story about your application
* Unit tests foster simplicity by forcing you to write code that is decoupled, flexible, and configurable
* Integration tests allow us to be confident that all those small pieces are working together as expected

<section class="call-to-action">
### Think - Pair - Share

Consider an application that you use regularly.

* What is one piece of functionality that you could test from your  application?
* Would that be a unit or integration test? Why?
* What would the consequences for the company be if this piece of functionality broke?
</section>

## What is Test-Driven Development?

Test-Driven Development (TDD) is one of those things that is deceptively simple to explain and incredibly hard to do. The basic premise is that we write our test for a piece of required functionality _before_ writing any implementation code. 

Ideally, we'd follow **Red/Green Testing**. This means we would write the test, then *fail* the test, and then finally write the code to *pass* the test. Once the test passes, you can then safely refactor your code to optimize your solution.

<section class="call-to-action">
## Think

* What's the purpose of failing the test *before* we write the code to pass the test?
</section>


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

## Mocha and Chai

In Mod 1, we will be using the Mocha testing framework along with the assertion library Chai.

* [Mocha](https://mochajs.org/) is a testing framework that runs on `Node.js` in your terminal. This is what allows us to organize and execute our tests.

* [Chai](http://www.chaijs.com/) is an assertion library that plugs into Mocha. The assertion library is what actually runs the specs and determines whether any given condition is valid or not.

## Set Up

When we are testing code, it's usually best to have the implementation code pulled up, as well as the test file. You'll constantly be going back and forth between the two, and need to compare what is in each, so this will make you much more effiecient.

<img src="./assets/images/testing/setup.png" alt="Screen shot of two panes in Atom text editor">

- Our `implementation` file refers to the code we are actually testing. This will be generally be a class file.
- Our `test` file will be the automated tests that we write, that verify our class does what it should. This is where we will create object instances, and verify that they do what they should.
- It is important to keep scope in mind: **variables declared in the `test` file are not available in the `implementation` file.** And in the `implementation` file, the only way we can call properties declared in the class is if we call them on an object instance created from that class.

## Testing Functions

Eventually, we'll be writing our own tests, but for now we'll
start with some prewritten tests. This allows us to see the process, and get some practice reading error messages

Head over to [that same repository](https://github.com/turingschool-examples/first-unit-tests) and begin to folow the TDD workflow - fail the tests, then write the code to pass 'em!

## Part II: Testing Classes

Let's say we were writing a class, Tweet, that represents the content a user see when they read a tweet. We want to make sure each tweet is labeled with its sender. Here's how that test would look:

```javascript
class Tweet {
// In the spirit of TDD, we haven't yet written the implementation code
}

describe('Tweet', function() {
  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });
});
```

Let's talk a little bit about what's going on here:

* We have a `describe()` block which denotes that we're going to start writing a number of tests about the same function.

```js
describe('Tweet', function() {
  // it('has a sender', function() {
  //   var tweet = new Tweet('@LetaCodes', 'something brilliant');
  //
  //   assert.equal(tweet.sender, '@LetaCodes');
  // });
});
```

* We make a human-readable statement about what we want to test with the `it()` block.

```js
// describe('Tweet', function() {
  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });
// });

```

* We write an _assertion_ about our code. Here, we're asserting that when we pass the string `@LetaCodes` into `Tweet` that the tweet object will have a `sender` property with that value.

```js
// describe('Tweet', function() {
  // it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  // });
// });
```

<section class="note">
Below is the general syntax for assertions for most of the methods available:

```js
  assert.method(the result of our, expected)
```

You'll notice that our method takes two arguments:

- `actual`: The actual JS code that you want to run from the codebase
- `expected`: The expected output that should be _returned_ based on test requirements

You can learn more about the various methods available on the `assert` object
[here](https://www.chaijs.com/guide/styles/#assert){:target="_blank"}
</section>

## Importing/Exporting Files

As mentioned earlier, tests are typically separate from its implementation code.  In order for this to work properly, we need to be able to export the functionality from one file and import it into the test file.  Let's take a look at an example:

*tweet.js*

```js
class Tweet {

}

module.exports = Tweet;
```

The `module.exports` allows us to export a piece of functionality.  In this instance, we want to export our function (specifically, our class) Tweet, so that is what we assign it.    

*tweet-test.js*

```js
var Tweet = require('./tweet.js'); //  './tweet.js' is the file path to the file we want to import from.

describe('Tweet', function() {
  it('has a sender', function() {
    var tweet = new Tweet('@LetaCodes', 'something brilliant');

    assert.equal(tweet.sender, '@LetaCodes');
  });
});
```

By adding `require('./tweet')` to our test file, we are importing that function and assigning it to a variable.  Then we can test it by asserting what value is returned after invoking our imported function!

<section class="call-to-action">
## Let's practice

Enough talk about testing. Let's actually write some tests to see this in action! We'll do some together and then you'll do some on your own.

Check out [this repository](https://github.com/turingschool-examples/intro-js-testing) to get your hands dirty.
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

In your journal or notebook, reflect on the following:

* What are the benefits to testing your code?
* What is the Red/Green testing workflow? Why do we use this process?
* What is Mocha? What is Chai? Write an example of the code that comes from Chai.
* How do we export something from a file for testing?
* How do we import something into another file for testing?

</section>

## Extra Stuff
If your curiosity is piqued - read [this article](https://techcrunch.com/2020/02/04/iowa-caucus-app-disaster/). 

- What were the consequences of this app not working as expected?
- What kind of pressure can you imagine the engineering team who built this were under, while developing the app?
- What lessons do you think the company and engineering team learned from this?