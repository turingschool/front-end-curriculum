---
title: React Testing
length: 180
tags: react, jest, enzyme, react testing, testing
module: 2
---

## Goals

* Be able to test the rendered output, state changes, and event handlers in your React components


## Discuss at Your Tables

* What are the four phases of a test?
* What type of logic do you write in each phase of a test? (Think back to your GameTime projects - what are some specific examples of code you wrote in each phase?)

(All of these same phases and concepts are going to apply when testing our React applications!)

<!-- Instructor Review/Whiteboard the 4 phases of a test:
  * Setup:
    * Any configuration, data, or variable setup your tests will rely on
    * e.g. Import dependencies, mock necessary data, beforeEach hook
  * Execution:
    * The code that must be invoked in order to assert against
    * e.g. Running a player.updateScore() method to assert it updates player's score
    * Common pitfall: trying to manually force the tests to be true. e.g. writing player.score = 100; expect(player.score).toEqual(100);
  * Assertion:
    * Our expectation; what we expect to have happened after the execution phase has completely finished running
    * Common pitfall: trying to test a method line-by-line. e.g. asserting that the method takes in a string, then converts the string into an array, then loops through the array, then returns a new version of the array, etc. rather than just asserting the final result of what has changed after the method is finished running
  * Teardown:
    * Code to reset any changes or side effects from our previous tests to ensure our next tests start with a perfectly clean slate
    * e.g. Resetting the spies call count to 0 afterEach test
-->





## Jest & Enzyme
* Previously used Mocha & Chai, now we’re going to use Jest & Enzyme

### Jest
    * Automatically finds tests in your codebase
    * Automatically mocks React dependencies
    * Runs your tests with a fake DOM implementation

Enzyme
* jQuery for Jest - makes things easier/nicer to read and write




What Are We Testing
* What gets rendered
* Simple state changes
* Event handlers/actions


Steps
Install npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json
Update package.json:

  "jest": {
      "snapshotSerializers": ["enzyme-to-json/serializer"]
    }

Create setupTests.js file



TriviaList
  together — go over imports, mock data, setup, snapshot
Question
  alone - import, mock data, setup, snapshot
  together - default state
  alone - toggleAnswer method



Controls
  together - simulating a click event for set-filter, mock method that belongs to App
  alone - updateCount method - simulate change event
  alone - default state
App
  together - what tests do we need here?
  alone - write them





