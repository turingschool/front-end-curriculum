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

Set up the [back-end repo](). You might already have this cloned down, and in that case find it a get it started.

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

Coming soon to our next class!


<!-- ### Sad Path Possibilities

* What is the network doesn't give a response...?
* What if the response is empty?
* What is the server is down? -->

#### Resources

* [async await by javascript.info/](https://javascript.info/async-await)
* [MDN on async await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
