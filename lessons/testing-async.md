---
title: Testing Async JavaScript & API Calls
module: 3
tags: testing, react, async, fetch
---

## Goals

By the end of this lesson, you will:

* Know how to test React components that contain methods with async JavaScript 
* Understand how and what to test when making API calls with fetch

## Testing API Calls
When our application makes a request to an API endpoint, we typically want to test our app's **reaction** to the response it receives from that request. We don't really care about what goes on in the back-end, we just want to know that we can handle the response appropriately. This makes API calls a good scenario for using mocks. However, we're usually placing our fetch requests within other functions or methods, and we might not want to override the functionality of the entire method with a mock. Consider the following example:

```javascript
tktktk
```

If we would like to test this method, containing a fetch request, we're going to run into some issues when it executes. Mainly, `fetch` won't be available when running our tests in the console and we wouldn't have access to the API endpoint. Lucky for us, there are a bunch of libraries out there we can use to mock out our fetch requests. One of the first you'll come across is [nock](https://github.com/node-nock/nock). I've historically had an impossible time working with this, I don't know why, and I don't know how it's the most popular library out there, but the one I've had most success with is [fetch-mock](https://www.npmjs.com/package/fetch-mock).

Fetch-mock allows us to intercept any fetch requests we make and explicitly set a response to send back. This helps us to A) avoid issues where fetch is not available through the test runner B) test if our application reacts to a particular response in the appropriate manner.

Let's take a look at an example. Building off of our Grocery List application, we've now added a back-end for persisting the grocery data we're working with. When we submit a new grocery, we now make a `POST` request to our server to add that grocery item:

```javascript
// AddGroceryForm.js

  addGrocery(event) {
    event.preventDefault();
    fetch('/api/v1/groceries', {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then({
      this.setState({
        name: '',
        quantity: '',
        notes: ''
      });
    })
    .catch(error => console.log(error));
  }
```


```javascript
import fetchMock from 'fetch-mock';
```


```javascript
  afterEach(() => {
    // assert that all API calls have been intercepted
    // and handled appropriately. If there is anything
    // remaining in this array, we messed up
    expect(fetchMock.calls().unmatched).toEqual([]);

    // start fresh with fetchMock after each test so that we're
    // not intercepting API calls that no longer need to be tested
    fetchMock.restore();
  });
```

### Tangent: before & after blocks

Often times, you'll want to start from scratch after every `it` block runs in your test files. For example, if we have more than one test that manipulates our component state, we might get some unexpected failures in later tests because we didn't start fresh with a clean default state. This is where `before` and `after` hooks come in handy. There are four hooks we can use to run some setup code at different points in our testing lifecycle:

* [beforeAll](https://facebook.github.io/jest/docs/api.html#beforeallfn) - will run once before any `it` blocks have been run
* [afterAll](https://facebook.github.io/jest/docs/api.html#afterallfn) - will run once after all `it` blocks have been run
* [beforeEach](https://facebook.github.io/jest/docs/api.html#beforeeachfn) - will run before every single `it` block
* [afterEach](https://facebook.github.io/jest/docs/api.html#aftereachfn) - will run after every single `it` block

In this example, we're using the `afterEach` block to reset our `fetchMock` status. We will use these hooks more frequently when we begin working with Redux, but for now, just know that they exist and allow us to execute code before and after our tests run.

