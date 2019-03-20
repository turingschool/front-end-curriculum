---
title: React Testing
length: 180
tags: react, jest, enzyme, react testing, testing
module: 2
---


<!-- Sometime before the lesson, send this message out in the channel: https://turingschool.slack.com/archives/CCQMF2S0G/p1550070679038900 to make sure they all get set up with the `testing-begin` branch before the live code starts. The completed code lives on the `testing-complete` branch -->

<style type="text/css">
    section a:link,section a:visited{border-bottom: 0px;color:#05c2d1}
    section .discuss {color: #555;padding:20px;font-size:0.95em;background-color:#fcfcfc;border:1px solid #eee}
    hr{width:100%;height:1px;background-color:#eee;border:0;margin:50px 0}
    ul li {line-height: 1.5em;font-size: 0.95em;}
    em { font-size: 0.85em; }
</style>


### Learning Goals

By the end of this lesson, students should:

* Be familiar with the Jest/Enzyme syntax
* Be able to test the rendered output, state changes, and event handlers in your React components


<hr />

## Review: Four Phases of a Test

<div class="discuss">
  <h4>Turn and Talk</h4>
  <p>What are the four phases of a test? What type of logic do you write in each phase of a test? (Think back to your GameTime projects - what are some specific examples of code you wrote in each phase?)</p>
  <p>(All of these same phases and concepts are going to apply when testing our React applications!)</p>
</div>

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

<hr />


## Jest & Enzyme

<!-- I really only spend like 5 minutes on this section, as the live code and 'what are we testing' seem a bit more important than them understanding the tooling/distinction between these two. Mostly just want them to know that yea, we're using different libraries now, but everything they've learned about testing so far still applies. -->

So far, you've seen and used Mocha & Chai for testing purposes. Now that we're moving into React, we're going to use some slightly different tooling for testing our applications. The concepts, patterns and fundamentals of testing have not changed, just the tools and syntax we'll be using to do it!

### Jest

* Automatically finds tests in your codebase *(very similar to mocha!)*
* Automatically mocks React dependencies
* Runs your tests with a fake DOM implementation *(think about how we didn't test our DOM manipulations in GameTime because the terminal did not know what a document or window was)*

### Enzyme

You can think of Enzyme as jQuery for Jest -- it makes our test files a bit easier to read and write, and provides us with a lot of helper methods for testing common pieces of functionality.



<hr />



## What Are We Testing

We're going to test three main things in each of our React components:

* **What gets rendered:** given certain props, does the component ultimately render the HTML that we're expecting?
* **State changes:** does the state of our component change in an appropriate manner as we call certain methods?
* **Event handlers/actions:** do our buttons/forms/etc. respond to user interaction in the way we're expecting?

In order to effectively test every component, we must make sure our methods strictly follow the **single responsibility principle**. The smaller our methods, the easier they are to test. We'll use the [Trivia App](https://github.com/turingschool-examples/react-trivia/tree/testing-begin) repo we've been working with to practice some examples of each type of test we're looking to write.




<hr />



## Setup

As you may have expected, we need to install some dependencies from NPM before we can get started with testing our React components. `create-react-app` by default comes with Jest installed, but not Enzyme. We'll need to install Enzyme and set up an adapter to let React know that we're using an additional tool when we run our tests:

`npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json`

Next we need to update our `package.json` files to configure some of our test output *(more on this later)*:

```js
  "jest": {
      "snapshotSerializers": ["enzyme-to-json/serializer"]
    }
```

<!-- This configuration makes the snapshot files infinitely easier to read and make sense of. If you don't have it in there, you can still do all the snapshot testings, it's just harder to show the students what a snapshot actually represents. Christie and David mentioned that students were having problems with this package/configuration in Mod 3 and it was breaking their testing suites for some reason, but we've never had any issues with it in Mod 2. We need to figure out if both mods are all working with the same versions of create react app/react/jest/enzyme/etc. Link up with them to get more details on how this package was breaking people's apps. -->

Lastly, we need to tell React to use the Enzyme adapter we just installed. In your `/src` directory, alongside all of your components and their test files, create a new file called `setupTests.js`.

This `setupTests.js` file can be thought of as a configuration file for React testing. This time around, all we're using it for is to tell React we'll be leveraging Enzyme. You will learn additional use-cases for this file as you get into more advanced testing, but for now, just keep in mind that it is allowing us to configure our test environment.

Add the following code to your `setupTests.js` file:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

**STOP! Double Check:** is your file named exactly `setupTests.js`? (This file name is case-sensitive, so capitalization counts!) is your file in the `/src` directory? If not, you will not be able to test any of your files.


<hr />


## Snapshot Testing

The first type of test we'll tackle is a **Snapshot Test**. This is what allows us to test the rendered output of our component. Open up the `TriviaList.test.js` file:

**What dependencies do we need to import?**

We'll need React, Enzyme, and the component we're actually trying to test:

```js
import React from 'react';
import TriviaList from './TriviaList';
import { shallow } from 'enzyme';
```

From Enzyme, we are only importing a single helper function called `shallow`. This function will help us create a basic representation of the rendered output for our component, called a **shallow render**.

<!-- I don't go much further into shallow/mount with them. We'll use a mount when we test the Controls component and I kind of just leave it as "shallow is for really simple components, and will work 9 times out of 10. Mount is needed for more complex components where maybe you need to test a mock function/spy. When in doubt, use shallow, if it doesn't work, switch to mount. If mount doesn't solve your problem, go back to shallow and continue debugging elsewhere." -->

**What kind of mock data might our TriviaList component need in order to render?**

*(Hint: Look at where you're actually rendering TriviaList in your component files. What data are you passing through to TriviaList?)*

If we look at our `App.js` component where we're actually rendering our `<TriviaList>`, we can see that it's expecting to get two props: `triviaQuestions` and `questionCount`. Let's create those both as variables in our test file so we can include them when we render our component:

```js
const mockQuestions = [{category:"Entertainment: Video Games",type:"multiple",difficulty:"hard",title:"When was the first Call of Duty title released?",correct_answer:"October 29, 2003",incorrect_answers:["December 1, 2003","November 14, 2002","July 18, 2004"],id:1},{category:"Entertainment: Books",type:"multiple",difficulty:"medium",title:"How many books are in the Chronicles of Narnia series?",correct_answer:"7",incorrect_answers:["6","8","5"],id:2},{category:"Entertainment: Film",type:"boolean",difficulty:"easy",title:"Han Solo's co-pilot and best friend, 'Chewbacca', is an Ewok.",correct_answer:"False",incorrect_answers:["True"],id:3}];

const mockQuestionCount = 2;
```

*Note: A good naming convention for your mock data is to keep the original variable name the same, so you can easily recognize what it represents, but prefix it with the word `mock`.)*

**What kind of setup do we need to do?**

We'll need to set up our component so that we have something to write our expectations against. This is where that handy `shallow` function will come into play. 

Remember we always write our set up code in a `beforeEach` block, to reduce the amount of duplication in our `it` blocks:

```js
describe('TriviaList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TriviaList
        triviaQuestions={mockQuestions}
        questionCount={mockQuestionCount}
      />
    );
  });
});
```

The shallow render will create an Enzyme 'wrapper' for us around an instance of our component. Now, in each of our tests, we'll be able to interact with this `wrapper` variable as if it were our `TriviaList` component.

**Writing the Snapshot**

Finally, after all this set up, we're ready to write our snapshot assertion:

```js
it('should match the snapshot with all data passed in', () => {
  expect(wrapper).toMatchSnapshot();
});
```

This expectation will tell our testing tools to generate a file that includes a representation of our rendered output. If we head over to our terminal and run our tests with `npm test` - we should see that we have a passing App test.

<!-- I stop here and explain to them how the test runner works differently in React apps. It will automatically look for changes and re-run just the tests that were affected by your changes. Sometimes as a sanity check, I just like to always run all my tests by typing 'a' or 'Enter'. It will constantly be running in your terminal tab, so you have to open a new tab if you want to do other things. -->

You can also check out the snaphshot file that was generated for us by writing this expectation. In your `/src` directory, you should now see a `__snapshots__` folder that includes a `TriviaList.test.js.snap` file. Take a moment to look over the contents of that file.


<div class="discuss">
  <h4>On Your Own</h4>
  <p>Write a snapshot test for the `Question` component. Ask yourself the same questions we just went over: what do we need to import, what mock data might we need, what setup must we do? No copy pasting the code we just wrote! You will want to develop your muscle memory here by typing everything out from scratch.</p>
  <p>As you get stuck, or as you finish, pair up with the person next to you to compare your logic.</p>
</div>



<hr />



## Testing State

Now that we know how to test our rendered output, we can start testing some application changes like state updates. This `Question` component you just tested is a bit more involved than the `TriviaList` component from earlier - it has some state that can change in response to a user interaction.


**Validating Default State**

Let's first write a test that validates the default state of our component.

In a new `it` block, we want to assert that our state value for `showAnswer` is initially false. We will make use of another handy method from Enzyme called `state()` in order to access the state of our component:

```js
it('should have the proper default state', () => {
  expect(wrapper.state()).toEqual({ showAnswer: false });
});
```

<div class="discuss">
  <h4>Solo Research</h4>
  <p>Read the Enzyme documentation on <a href="https://airbnb.io/enzyme/docs/api/ReactWrapper/state.html" target="_blank">wrapper.state()</a>. Based on this documentation, what's an alternative way we could have written the above assertion?</p>
</div>

<!-- I talk about why this is handy as a method -- testing the entire state object or passing in a key to test just a single piece of state that you expect to be updating. They have a hard time understanding initially why wrapper.state() is a method and not just a property like wrapper.state. I recommend when you test default state, just use wrapper.state(), but when we test a method that changes a piece of state, pass in the key that you actually care about. -->


**Validating a State Change**

Not only do we want to check that our default state looks OK, we want to make sure any methods that call state changes also behave as expected. In our `Question` component, we have a method called `toggleState` that flips the boolean value of `showAnswer` answer in our state. We want to make sure that any time we invoke this method, `showAnswer` has been updated.

There are [several ways to test methods on a component](https://bambielli.com/til/2018-03-04-directly-test-react-component-methods/#). For this example, we will **directly** test the `showAnswer` method by invoking it.

In a new `it` block, we want to first assert the default value of `showAnswer`, then invoke our `toggleAnswer` method, then assert that the value of `showAnswer` has changed:

```js
it('should update the answer state when toggleAnswer is called', () => {
  expect(wrapper.state('showAnswer')).toEqual(false);
  wrapper.instance().toggleAnswer();
  expect(wrapper.state('showAnswer')).toEqual(true);
});
```

*Note: We cannot simply call `wrapper.toggleAnswer()` to invoke our method. The wrapper returned to us from our shallow render has a lot of Enzyme-related padding around it, so we need to dig into the actual instance of our component in order to access the methods we've defined on it.*



<hr />

## Testing User Interactions




<hr />

<div class="discuss">
  <h4>Turn and Talk</h4>
  <p>The last component to be tested is our App component. With your table, discuss what tests need to be written for this component. Once you've decided on the tests to be written, with your partner, write them!</p>
</div>

<!-- They usually never make it to actually writing the tests for the App component, we run out of time. But that could be a good follow-up review session. Asking them what tests they needed to write and having them come up and write them. -->


### Further Reading

* [Testing Component Methods](https://bambielli.com/til/2018-03-04-directly-test-react-component-methods/#)
* [Enzyme Documentation](https://airbnb.io/enzyme/)


<!-- 

Controls
  together - simulating a click event for set-filter, mock method that belongs to App
  alone - updateCount method - simulate change event
  alone - default state
-->



