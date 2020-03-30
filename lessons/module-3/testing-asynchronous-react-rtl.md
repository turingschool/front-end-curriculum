---
title: Testing Asynchronous React
module: 3
tags: testing, react, asynchronous, fetch, async, await
---

## Learning Goals

By the end of this lesson, you will:

* Understand how and why we test asynchronous JavaScript in React
* Know how to test React components that contain methods with asynchronous JavaScript
* Understand how and what to test when making API calls with fetch
* Be able to write tests using async/await syntax


## The Current State of Things

Let's assume we have a React application that is fetching data when the `App` component mounts. The app we're thinking about is a classic ideabox that holds onto our best future ideas. Pseudocode for a test in this application might look something like:

```js
it('Can view all the ideas when the app loads', () => {
  // Render the App component (this component fetches data from an external back-end API)

  // Check that there is a container element on the page

  // Check that there are ideas on the page
});
```
<section class="call-to-action">
### Turn & Talk

Discuss with a partner:
* Why will this test fail?
* What about this test is wasteful?
</section>

<section class="answer">
### What's Going On With This Test?

* The test will fail because the test does not know to wait for the `fetch` call to be done before it checks for the ideas on the page.
* The test is actually fetching data from the back-end API, which should not be necessary. Imagine if we had to pay for requests to the back-end API...we don't want to waste money every time we run our tests.
</section>

### Jest and `jsdom`

The testing library we use with React (Jest) comes with a library by default called `jsdom`. This library simulates the browser environment when we run our tests, which means that every browser API we use in our app can be used when we run our tests. Browser APIs like `Date.now()`, `fetch()`, `document.querySelector()`, etc are available to use while we run our tests. This is amazing! But it's also something we want to avoid sometimes. In particular, we want to avoid actually making network requests in our tests (we'll get into that later).

## On Your Marks: Our Goal

We need to:

1. Tell our tests to wait for certain things to happen (like wait until data is returned from a network request)
1. Tell our test to not make a network request, but instead fake the network request

## Get Set: Setup

**Shut down all other servers that you currently have running, front-end and back-end.**

Set up the [front-end repo](https://github.com/turingschool-examples/ideabox-testing-rtl):

```bash
git clone https://github.com/turingschool-examples/ideabox-testing-rtl.git testing-async-react
npm install
npm start
```

Run the test suite given by `create-react-app` to make sure it works:

```bash
npm test
```

<section class="answer">
### If you get an fsevents error...

Try running `npm install fsevents@1.2.11` to install a specific version of `fsevents` and then run `npm test` again to see if that worked.
</section>

Set up the [back-end repo](https://github.com/turingschool-examples/ideabox-api.git). You might already have this cloned down, and in that case find it a get it started.

```bash
git clone https://github.com/turingschool-examples/ideabox-api.git
npm install
node server.js
```

### Make a Request for the Idea Data

Right now, the app does not make a network request to the back-end for the ideas.

<section class="call-to-action">
### One Your Own

In the `App` component, use `fetch` and `componentDidMount` to bring all the ideas from the back-end API into the `App`'s state.

Make sure that the ideas from the back-end API render to the page.
</section>

### Write a Test to Verify Network Request

<section class="call-to-action">
### Setup the Testing Libraries

With a partner:

* Install React Testing Library
* Install the `jest-dom` library
</section>

<section class="answer">
### Setup Needed

Run `npm install --save-dev @testing-library/react` to install React Testing Library

Run `npm install --save-dev @testing-library/jest-dom` to install `jest-dom`
</section>

Now that the testing libraries are added to the app, let's get a test going.

<section class="call-to-action">
### Add A Failing Test

Remember the test pseudocode we started out with? Let's actually write that test - it's ok if it fails right now. In fact we expect it to fail.

Use the pseudocode to guide your test code.

```js
it('Can view all the ideas when the app loads', () => {
  // Render the App component (this component fetches data from an external back-end API)

  // Check that there is a container element on the page

  // Check that there are ideas on the page
});
```
</section>

<section class="answer">
### First Failing Test

```js
it('Can view all the ideas when the app loads', () => {
  // Render the App component (this component fetches data from an external back-end API)
  const { getByText } = render(<App />);
  // Check that there is a container element on the page
  const ideasContainer = getByText("Ideas Component");
  const idea = getByText("Sweaters for pugs");
  // Check that there are ideas on the page
  expect(ideasContainer).toBeInTheDocument();
  expect(idea).toBeInTheDocument();
});
```
</section>

## Go: Fix Our Tests

Back to our first goal: Tell our tests to wait for certain things to happen (like wait until data is returned from a network request).

DOM Testing Library has a way to help us out with _waiting_ for certain things to happen.

<section class="call-to-action">
### Head to the Docs and Try Something!

Look into the [Async Utilities](https://testing-library.com/docs/dom-testing-library/api-async) docs and read through these.

Our problem is that we need to know when the `fetch` is done and wait for that. Is there anything there we can use to help us with this problem?

Try something out. How do we know the fetch is done? Can we wait for anything to show up on the page that can tell us the fetch is complete?
</section>

<section class="note">
### Seeing Errors?

If you're getting the error `TypeError: MutationObserver is not a constructor` while using `waitFor`, it's not your fault.

Depending on the day you are writing your test, the version of Jest that comes with `create-react-app` might be different from the version that React Testing Library expects you to have.

Here is how to solve it for now:

Run `npm install --save-dev jest-environment-jsdom-sixteen` to install a more recent version of Jest.

Change the `test` script in the `package.json` file to be: `"test": "react-scripts test --env=jest-environment-jsdom-sixteen"`

The reason behind this is listed as a breaking change in [these release notes](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0).
</section>

<section class="answer">
### A Passing Test!

```js
describe('App', () => {
  it('Can view all the ideas when the app loads', async () => {
    // Render the App component (this component fetches data from an external back-end API)
    const { getByText } = render(<App />);
    // Check that there is a container element on the page
    const ideasContainer = getByText("Ideas Component");
    // Wait for an idea to appear on the page
    const idea = await waitFor(() => getByText("Sweaters for pugs"));
    // Check that there are ideas on the page
    expect(ideasContainer).toBeInTheDocument();
    expect(idea).toBeInTheDocument();
  });
});
```
</section>

What is the `async` keyword needed for? What does `await` do?

The network request is still happening in the background. We'll take care of that next.

## No More Network Requests

Let's return to our second goal: Tell our test to not make a network request, but instead fake the network request

To fake the network request, we need to mock the network request. The best way to mock something is to overwrite an existing function using a `jest.fn()`. The issue we need to solve now is how to overwrite the `fetch` call without always overwriting the entire implementation of `fetch`. To do that, we need to isolate any network request we make to its own function.

<section class="call-to-action">
### Isolate the Fetch Call

In the `App` component, we have `fetch` being invoked in `componentDidMount`. Spend some time taking this network request and putting it into it's own function in a file called `apiCalls.js` that lives in the `src` directory.

With the code you have written in `componentDidMount` so far, you'll have to play around with how much code you can pull out of `App` and how much needs to stay in the component.

If you have isolated the fetch call, make sure your test still passes.
</section>

<section class="answer">
### An Isolated Fetch Call

```js
// src/apiCalls.js
export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => response.json())
};

// App.js
// only looking at componentDidMount
componentDidMount() {
  getIdeas()
    .then(ideas => this.setState({ ideas }))
    .catch(err => console.error(err.message))
}
```
</section>


### Mock the Function

Now that the function with the network request is isolated, we can focus on mocking it. In the future, this `apiCalls` file could have many network requests for posting and/or deleting ideas. So we will tell Jest to mock the entire file.

We need to add this to our App's test file before we write any `it` blocks:

```js
import { getIdeas } from '../apiCalls';
jest.mock('../apiCalls.js');
```

What is this doing? `jest.mock(filename)` is going into that file and making everything in that file a `jest.fn()`, which allows us to overwrite any of those functions behavior.

Ultimately, the behavior of the `getIdeas` function is to make a network request and return a promise with a resolved or rejected value. If we assume a happy path, the function returned a resolved promise with the resolved value being the array of ideas from the API.

```js
[
  {id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'},
  {id: 2, title: 'Film a romcom', description: 'But make it ghosts'},
  {id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'},
]
```

In our test, now that the `getIdeas` function is a `jest.fn()`, we can overwrite its behavior. To do this, we can mock what the resolved value of the function should be in the test:

```js
// at the top of the test

getIdeas.mockResolvedValueOnce([
  {id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'},
  {id: 2, title: 'Film a romcom', description: 'But make it ghosts'},
  {id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'},
]);
```

Now turn off your back-end API, and you should still have a passing test!

<section class="answer">
### Mocked Network Request

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getIdeas } from '../apiCalls';
jest.mock('../apiCalls.js');

describe('App', () => {
  it('when the App loads, we should see an idea', async () => {
    getIdeas.mockResolvedValueOnce([
      {id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'},
      {id: 2, title: 'Film a romcom', description: 'But make it ghosts'},
      {id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'},
    ]);

    const { getByText } = render(<App />);

    const ideaContainer = getByText('Ideas Component');

    const idea = await waitFor(() => getByText('Sweaters for pugs'));

    expect(ideaContainer).toBeInTheDocument();
    expect(idea).toBeInTheDocument();
  });
});
```
</section>

### Another Scenario

<section class="call-to-action">
### Write Another Test

Consider the scenario where the API returns an empty array of ideas.

Write another test to mock this scenario. Change the apps behavior to render a message like "No ideas yet!" on the page if the ideas state is an empty array.

Be sure to write an assertion to check for the message on the page.
</section>

### Posting a New Idea

This one will take a little longer from start to finish.

<section class="call-to-action">
### Add Posting Functionality

Add functionality into the app so that when you submit a new idea, it is posted to the back-end API and displays on the page.

Then add a test for that scenario using the same order of operations we did for mocking `getIdeas`.
</section>

### Sad Path Possibilities

In your apps, consider the scenarios where:

* What if the network doesn't give a response...?
* What if the response is empty?
* What if the server is down?

For a rejected promise, you can use [mockRejectedValueOnce](https://jestjs.io/docs/en/mock-function-api.html#mockfnmockrejectedvalueoncevalue) to mock that scenario.

#### Resources

* [async await by javascript.info/](https://javascript.info/async-await)
* [MDN on async await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
