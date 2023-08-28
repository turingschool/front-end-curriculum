---
title: "Testing: TDD, Mocha, and Chai"
tags: TDD, unit testing, mocha, chai
mod: 2
---

## Learning Goals:

- Review the what and why of test driven development
- Examine the structure of a test and the testing lifecycle
- Practice writing tests

## Vocab

- `TDD` Test Driven Development / Design
- `Assertion` An expression containing some testable logic
- `Assertion Library` A package of assertion functionality. Usually distinct from a `Testing Framework`
- `Testing Framework` A library that determines how tests are organized and executed
- `Red Green Refactor` The process of writing a test first (which will fail), then writing the implementation code to make it pass, then refactoring the tests and/or implementation with confidence
- `Test Phases` A test that is organized into the phases - Setup, Execution, Assertion, Teardown*

<section class="call-to-action">
### Warmup!  Let's Review Testing and TDD!

<section class="answer">
### What is TDD?  

TDD, or Test Driven Development, is the concept of writing tests in a test file BEFORE writing any of the implementation code.
</section>

<section class="answer">
### What are some of the benefits of writing tests?

* *Computers can test things faster and more accurately than humans:* testing things manually in the browser is tedious, error prone and slow
* *Forces you to slow down and plan it out/pseudocode:* which helps you think more thoroughly about potential pitfalls *before* you write your code; it's much easier to course-correct yourself before you write any code than to refactor broken code after it's been written
* *Provides a blueprint for new developers to see how the codebase should work:* if your tests are thorough and well-written, a new developer should be able to hop directly into the test folder and get a solid understanding of how each piece of the codebase works
* *Provides future integrity for your code as you iterate on your application:* applications are never done and can always be improved, added to, pivoted, etc. Tests ensure that as these changes are made, new bugs won't accidentally be introduced. *On the job it is very possible that the person making changes/additions to your code will not be you. Your tests protect your code.*
* *Forces you to write more modular, SRP-style code:* often times you'll only recognize opportunities to refactor as you go to write tests for you code and find that it's not testable. TDD prevents this since the tests are written first
</section>

<section class="answer">
### Are there any downsides to writing tests?  

* *It takes more time to write your codebase, which slows down development:* this can be problematic if you're working in an environment where meeting deadlines is a top priority (like working in a newsroom)
* *They don't make the business money:* tests aren't features, and if your company is relying on investors to keep itself going, making progress on the application functionality is going to be of utmost importance
</section>
</section>

<section class="note">
### The Main Benefit

The main benefit of Test Driven Development is that you are forced to look at the problem you are solving at a high level and not worry about the little details for implementing your solution.  It forces you to outline **what** your code should do before you think about **how** you will do it.
</section>

## What Makes Testing Hard?

* At first, not knowing what to test
* So many libraries and frameworks to choose from, differing syntax in documentation
* Difficult to see the benefit until you've been saved by a failing test


## What Should Be Tested?

When talking about what should be tested, we say that we want to test the **outcome** or **result** of a particular piece of code execution. This is an important distinction and can help clarify one of the key pieces of what makes testing hard.

For example, let's say we have a quiz application that checks a user's answers and adds/removes points from their score:

```js
function createQuestion(questionText, correctAnswer) {
  let question = {
    questionText: questionText,
    correctAnswer: correctAnswer
  }
  return question
}

function checkAnswer(question, playerAnswer, score) {
  if (playerAnswer === question.correctAnswer) {
    score++
  } else {
    score--
  }
  return score
}
```

<section class="answer">
### What would we want to test about the `checkAnswer` method? What should this method do?  

```js
describe('checkAnswer', () => {
  it('should return incremented score when answer is correct', () => {

  });

  it('should return decremented score when answer is incorrect', () => {

  });
});
```
</section>  

<section class="call-to-action">
### Practice

In your journal:
* Take a look at the following code. What would you want to test about this function?

```js
function reverseWord(word) {
  let letters = word.split('');
  letters.reverse();
  return letters.join('');
}

reverseWord('turing'); // gnirut
```
</section>

## Reviewing Mocha vs. Chai

<section class="call-to-action">
### In Your Notebook

* What is the difference between Mocha and Chai?
* What are each of their responsibilities?
</section>

<section class="answer">
### The Answer  

[Mocha](https://mochajs.org/) is a *testing framework* while [Chai](http://chaijs.com/) is an *assertion library*.

**Mocha:**
* Mocha runs on Node.js in your terminal, and can also be run in your browser window
* Mocha itself is the framework that runs the tests and dictates the syntax of the test block as a whole. This is separate from the assertion library Chai.

```js
describe('checkAnswer', function() {
  it('should return incremented score when answer is correct', function() {

  });
});
```

**Chai:**
* An assertion is the crucial piece of the test that actually checks that when certain pieces of are code are executed, what we're getting back is what we expect.
* Although Chai can be inserted into many different testing frameworks, it works seamlessly with Mocha.

```js

  expect(result).to.equal(3);

```
</section>

<section class="note">
### A note about the multiple syntax options provided by Chai

![Chai Syntax Libraries](https://i.imgur.com/T7Q4YkE.png)

Although there are small differences, all three interfaces can accomplish the same task.  As a developer you can choose which version feels best to you.  For example, **expect** provides a function as a starting point for chaining assertions, whereas **should** extends the Object.prototype to provide a single getter as the starting point.  **Expect** works on node.js and all browsers, while **should** does not work in Internet Explorer.  For today we are going to go with the [Expect API](https://www.chaijs.com/api/bdd/).
</section>


## Structure of a Test  

Good tests have **Four Phases**:  
1. Setup - Setup the conditions required to execute the action on your `SUT`
2. Execution - Execute some action on your `SUT`
3. Assertion - Assert that the action you did had the results you expect
4. Tear Down - Clean up any resources you used in your test (this is done automatically the majority of the time)

(Most tests you write will not need the Tear Down phase, but it's good to know that step is there sometimes)

All of these phases deal with the **Subject Under Test** (`SUT`, or just `subject`).

Look at the following code example and make note of what we need to test:


```js
let player = {
  name: 'Trisha',
  winningWords: []
}

function checkForWin(playerWord, correctWord, player) {
  if(playerWord === correctWord) {
    player.winningWords.push(playerWord)
    return 'Correct!'
  } else {
    return 'Incorrect, try again!'
  }
}

```

<section class="answer">
### What would we want to test about the `checkForWin` method? What should this method do?  

```js
describe('checkForWin function', () => {
  it('should add word to player\'s winningWords when answer is correct', () => {

  });

  it('should not update player\'s winningWords when answer is incorrect', () => {

  });

  it('should return Correct! when answer is correct', () => {

  });

  it('should return Incorrect, try again! when answer is incorrect', () => {

  });
});
```
</section>  

Now that we've determined what we need to test, read the comments that talk about each line of our tests

```js
// Before anything can happen, we need a describe block to group related tests together
// In this case, the tests within our describe block are all related to the 'checkForWin' function 
describe('checkForWin function', function() {

  // Next, an 'it block' contains the context of each specific test
  it('should add word to player\'s winningWords when answer is correct', () => {

    // 1. "Setup"
    // Create the mock data we need to use in this test
        // Create a mock player
        // Create variable to hold the correctWord we'll use for this test
    var player = {
        name: 'Nick',
        winningWords: []
    };
    var correctWord = 'adore';

    // 2. "Execution"
    // Run appropriate functions that execute the behavior indicated by our test title
    // Pass in the arguments needed to test the specific path/scenario we're trying to test
    checkForWin('adore', correctWord, player);

    // 3. "Assertion"
    // Make assertion to verify that we end up with what we expect after executing the function
    expect(player.winningWords).to.deep.equal(['adore']);
  });

//Lets breakdown a sad path!
  // 'it block' contains the context of each specific test
  it('should not update player\'s winningWords when answer is incorrect', () => {

    // 1. "Setup"
    // Create the mock data we need to use in this test
        // Create a mock player
        // Create variable to hold the correctWord we'll use for this test
    var player = {
        name: 'Ben',
        winningWords: []
    };
    var correctWord = 'adore';

    // 2. "Execution"
    // Run appropriate functions that execute the behavior indicated by our test title
    // Pass in the arguments needed to test the specific path/scenario we're trying to test
        //This time we will pass an incorrect guess for the first arg in order to simulate and test the sad path
    checkForWin('spend', correctWord, player);

    // 3. "Assertion"
    // Make an assertion to verify that after executing certain functions, we end up with what we expect
    expect(player.winningWords).to.deep.equal([]);
  });
});
```

<section class="call-to-action">
### In Your Notebook  
  1. Could we use one of the following assertion statements in our first it block instead? Why/why not?  
    `expect(player.winningWords)to.be.an('array');`  
    `expect(player.winningWords.length).to.equal(1);`  
  1. How would we write our tests for testing what the function returns (happy and sad path)?  
  1. Is this `checkForWin` function pure?  Why or why not?
  1. Why might side effects be difficult to test?
</section>  

<section class="note">
### What makes a good test?

- Test one outcome or result
- Do not have control flow (`if`, `when`, `for`) statements
- Can be used as documentation for the code they test
- Are clear and easy to read
- Assertions are specific, testing for exactly what value is expected, not just length or data type.

### What makes a function easy to test?

- Pure functions are easier to test.  Why?
- Functions that update or rely on a global variable are harder, sometimes impossible, to test.  Why?

</section>


## Testing Practice: Setup, Mocha, and Chai   

To practice, let's kick off a small project to demonstrate how you would utilize Mocha and Chai to write a couple tests.  

<section class="call-to-action">
### Getting Started (in pairs)

* In your terminal, clone down this [starter repo](https://github.com/turingschool-examples/our-first-tests) and run `npm install`:

```bash
git clone https://github.com/turingschool-examples/our-first-tests
cd our-first-tests
npm install
```

* Note what files exist in the tests.  Take a look at the `package.json` file as well, noting *devDependencies* and the *scripts*.
* Move to the `/test/box-test.js` file. Make sure your assertion library, the `expect` keyword have been imported. Wait on importing functions from box until Iteration 1.
* Setup your `describe` block, and write a basic dummy test (such as `expect(true).to.equal(true);`). This test *should* pass right away. This is just to show you that everything is linked correctly.
* Run `npm test` to see if your test passes.  If not, take note of the error message and try to fix it.
</section>

<section class="note">
### Note
Pay close attention to all these imports - they may not always already be there for you.  
`const chai = require('chai');` -> gives you access to the Chai assertion library.    
`const expect = chai.expect;` -> gives you access to the Expect syntax from the Chai assertion library.  
`const {createBox, calculateArea} = require('../box');` -> imports your functions from your box file into your test file.  Remember this only works if you are also exporting each function from your box file.
</section>

<section class="answer">
### The Answer (Only click if you get stuck or have finished)

```js
// test/box-test.js  

const chai = require('chai');
const expect = chai.expect;

describe('box functions', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
```

Running `npm test` should result in:

```bash
  ✓ should return true

1 passing (10ms)  
```
</section>

## Testing Practice: Iteration 1  

Obviously this test isn't doing anything helpful, but we know our files are wired up. Let's add some more interesting tests.

**Work through the following iterations using TDD - meaning you will write the test first, then write the implementation code to pass each test.**  

Let's pretend we just received a spec, and the first iteration looks something like this:

<section class="call-to-action">
### Iteration 1

- You should have a `createBox` function which assumes a default height and width of 100.
- User should be able to pass in specific height and widths if they so choose.
- User should be able to calculate the area of the box by passing the box into a `calculateArea` function.

1. Start with writing the tests.  
  - Note that you'll need to import (and export) each function. 
  - You often need to set up some mock data to use for each test.  
  - Your tests will **fail** when you run `npm test` because you haven't yet written the implementation code to make them pass.
2. Now work on the implementation in the `box.js` file.  Feel free to add `.skip` to your tests so that you can focus on one at a time.
</section>

<section class="answer">
### Test Solution

```js
// test/box-test.js

const chai = require('chai');
const expect = chai.expect;

const {createBox, calculateArea} = require('../box');

describe('box', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default height and a width', function() {
    var box = createBox()

    expect(box.height).to.equal(100);
    expect(box.width).to.equal(100);
  });

  it('should be able to take a height and a width as arguments', function() {
    var box = createBox(50, 40);

    expect(box.height).to.equal(50);
    expect(box.width).to.equal(40);
  });

  it('should calculate its area', function() {
    var box = createBox(30, 30);

    var area = calculateArea(box)

    expect(area).to.equal(900);
  })
});
```
</section>

<section class="answer">
### Implementation Solution

```js
// box.js  
function createBox(height, width) {
  var box = {
    height: height || 100,
    width: width || 100
  }
  return box
}

function calculateArea(box) {
  return box.height * box.width;;  
}

module.exports = { createBox, calculateArea };
```
</section>

## Testing Practice: Iteration 2

Let's continue to practice adding more iterations following the TDD process from before.  Implement iteration 2 for our box per the spec outlined below.  

<section class="call-to-action">
### Iteration 2

- You should be able to increase the width by a provided value.
ie: `increaseWidth(10)`
- You should be able to increase the height of your box by a provided value
ie: `increaseHeight(10)`
</section>

## Testing Practice: Iteration 3

Implement iteration 3 for our box per the spec outlined below;

<section class="call-to-action">
### Iteration 3

- Refactor your code so that instead of having increaseWidth and increaseHeight methods, you can have a single method to do both jobs
ie: `increment(10, 'height')` or `increment(10, 'width')`
</section>

<section class="checks-for-understanding">
### Checks for Understanding

* What is the difference between Mocha and Chai?
* What is the structure of a test?
* What makes a test good?
* What makes a function easy or difficult to test?
</section>

### Further Reading
* <a href="https://frontend.turing.edu/lessons/module-2/testing-with-hooks-and-linting.html" target="\__blank">Hooks</a>
