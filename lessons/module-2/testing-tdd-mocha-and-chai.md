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
### Warmup!  Let's Review TDD!

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
### Are there any downsides to using TDD?  

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
class Question {
  constructor(questionText, correctAnswer) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.score = 0;
  }

  checkAnswer(playerAnswer) {
    if (playerAnswer === this.correctAnswer) {
      this.score++
    } else {
      this.score--
    }
    return this.score
  }
}
```

<section class="answer">
### What would we want to test about the `checkAnswer` method? What should this method do?  

```js
describe('Question Class', () => {
  it('should increment a player score when their answer is correct', () => {

  });

  it('should decrement a player score when their answer is incorrect', () => {

  });

  it('should return the updated score', () => {

  });  
});
```
</section>  

<section class="note">
Testing Tip:  
When writing tests for classes, you should test:  
  * each class property  
  * each class method  

Remember to test all possible outcomes (happy path/sad path/etc).  Ask yourself:  
  - What is the value of each property?  
  - Does the method return anything?  
  - Does the method update any properties?
  - Are there different possible outcomes to test for based on different arguments being passed in?
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
describe('unicorn', function() {
  it('should accumulate calories when calling eat', function() {

  });
});
```

**Chai:**
* An assertion is the crucial piece of the test that actually checks that when certain pieces of are code are executed, what we're getting back is what we expect.
* Although Chai can be inserted into many different testing frameworks, it works seamlessly with Mocha.

```js

  expect(unicorn.calories).to.equal(300);

```
</section>

<section class="note">
### A note about the multiple syntax options provided by Chai

![Chai Syntax Libraries](http://i.imgur.com/T7Q4YkE.png)

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
class Player {
  constructor(name) {
    this.name = name;
    this.winningWords = [];
  }

  checkForWin(playerWord, correctWord) {
    if(playerWord === correctWord) {
      this.winningWords.push(word)
    }
  }
}
```

<section class="answer">
### What would we want to test about the `checkForWin` method? What should this method do?  

```js
describe('Player Class', () => {
  it('should add word to winningWords when answer is correct', () => {

  });

  it('should not update winningWords when answer is incorrect', () => {

  });
});
```
</section>  

Now that we've determined what we need to test, read the comments that talk about each line of our tests

```js
// Before anything can happen, we need a describe block to group related tests together
// In this case, the tests within our describe block are all related to the 'Player' class
describe('Player', function() {

  // Next, an 'it block' contains the context of each specific test
  it('should add word to winningWords when answer is correct', () => {

    // 1. "Setup"
    // Create the mock data we need to use in this test
        // Instantiate an instance of our player
        // Create variable to hold the correctWord we'll use for this test
    var player = new Player('Susan');
    var correctWord = 'adore';

    // 2. "Execution"
    // Run appropriate functions that execute the behavior indicated by our test title
    player.checkForWin('adore', correctWord);

    // 3. "Assertion"
    // Make an assertion to verify that after executing certain functions, we end up with what we expect
    expect(player.winningWords).to.deep.equal(['adore']]);
  });
});
```

<section class="call-to-action">
### In your notebook  
  1. Could we use one of the following assertion statements instead? Why/why not?  
  ```js  
  //check that winningWords is an array  
  expect(player.winningWords)to.be.an('array');  

  //check the length of the winningWords array  
  expect(player.winningWords.length).to.equal(1);  
  ```

  2. How would we write our test for the sad path (if playerWord is not the correctWord)?  
</section>  

<section class="note">
### What makes a good test?

- Test one thing
- Do not have control flow (`if`, `when`, `for`) statements
- Can be used as documentation for the code they test
- Are clear and easy to read
- Assertions are specific, testing for exactly what value is expected, not just length or data type.
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
* Move to the `/test/Box-test.js` file. Make sure your assertion library, the `expect` keyword have been imported. Wait on importing Box until Iteration 1.
* Setup your `describe` block, and write a basic dummy test (such as `expect(true).to.equal(true);`). This test *should* pass right away to show you that everything is linked correctly.
* Run `npm test` to see if your test passes.  If not, take note of the error message and try to fix it.
</section>

<section class="note">
### Note
Pay close attention to all these imports - they may not always already be there for you.  
`const chai = require('chai');` -> gives you access to the Chai assertion library.    
`const expect = chai.expect;` -> gives you access to the Expect syntax from the Chai assertion library.  
`const Box = require('../src/Box');` -> imports your Box class into your test file.  Remember this only works if you are also exporting from your Box Class.
</section>

<section class="answer">
### The Answer (Only click if you get stuck or have finished)

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

Running `npm test` should result in:

```bash
Box
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

- You should have a Box constructor which has a default height and width of 100.
- User should be able to pass in specific height and widths if they so choose.
- You should be able to calculate the area of your box using the method `.calculateArea()`.

1. Start with writing the tests.  Note that you'll need to import (and export) a `Box` class and create a new instance of it for each test.  Your tests will **fail** when you run `npm test`.
2. Now work on the implementation in the `Box.js` file.  Feel free to add `.skip` to your tests so that you can focus on one at a time.
</section>

<section class="answer">
### Test Solution

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

  it('should be able to take a height and a width as arguments', function() {
    var box = new Box(50, 40);

    expect(box.height).to.equal(50);
    expect(box.width).to.equal(40);
  });

  it('should calculate its area', function() {
    var box = new Box(30, 30);

    expect(box.calculateArea()).to.equal(900);
  })
});
```
</section>

<section class="answer">
### Implementation Solution

```js
// Box.js  
class Box {
  constructor(height = 100, width = 100) {
    this.height = height;
    this.width = width;
  }

  calculateArea() {
    return this.height * this.width;;  
  }
}

module.exports = Box;
```
</section>

## Testing Practice: Iteration 2

Let's continue to practice adding more iterations following the TDD process from before.  Implement iteration 2 for our box per the spec outlined below.  

<section class="call-to-action">
### Iteration 2

- You should be able to increase the width by a provided value.
ie: `box.increaseWidth(10)`
- You should be able to increase the height of your box by a provided value
ie: `box.increaseHeight(10)`
</section>

## Testing Practice: Iteration 3

Implement iteration 3 for our box per the spec outlined below;

<section class="call-to-action">
### Iteration 3

- Refactor your code so that instead of having increaseWidth and increaseHeight methods, you can have a single method to do both jobs
ie: `box.increment(10, 'height')` or `box.increment(10, 'width')`
</section>

<section class="checks-for-understanding">
### Checks for Understanding

* What is the difference between Mocha and Chai?
* What is the structure of a test?
* What makes a test good?
</section>

### Further Reading
* <a href="https://frontend.turing.edu/lessons/module-2/testing-with-hooks-and-linting.html" target="\__blank">Hooks</a>
