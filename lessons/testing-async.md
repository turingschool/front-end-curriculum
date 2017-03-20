---
title: Testing Async JavaScript & API Calls
module: 3
tags: testing, react, async, fetch
---

## Goals

By the end of this lesson, you will:

* Know how to test React components that contain methods with async JavaScript 
* Understand how and what to test when making API calls with fetch

Follow along with a modified version of the grocery list application [here](https://github.com/turingschool-examples/grocery-list/tree/async-begin).


## Testing API Calls
When our application makes a request to an API endpoint, we typically want to test our app's **reaction** to the response it receives from that request. We don't really care about what goes on in the back-end, we just want to know that we can handle the response appropriately. This makes API calls a good scenario for using mocks. However, we're usually placing our fetch requests within other functions or methods, and we might not want to override the functionality of the entire method with a mock. Consider the following example from our [AddGroceryForm Component](https://github.com/turingschool-examples/grocery-list/blob/async-complete/src/AddGroceryForm.js):

```javascript
  addGrocery(event) {
    event.preventDefault();
    const { updateGroceryList } = this.props;
    const grocery = this.state.grocery;

    fetch('/api/v1/groceries', {
      method: 'POST',
      body: JSON.stringify({ grocery }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(groceries => {
      this.setState({
        grocery: {
          name: '',
          quantity: '' 
        }
      }, updateGroceryList(groceries));
    })
    .catch(error => {
      this.setState({
        errorStatus: 'Error adding grocery'
      })
    });
  }
```

If we would like to test this method, containing a fetch request, we're going to run into some issues when it executes. Mainly, `fetch` won't be available when running our tests in the console and we wouldn't have access to the API endpoint. Lucky for us, there are a bunch of libraries out there we can use to mock out our fetch requests. One of the first you'll come across is [nock](https://github.com/node-nock/nock). I've historically had an impossible time working with this, I don't know why, and I don't know how it's the most popular library out there, but the one I've had most success with is [fetch-mock](https://www.npmjs.com/package/fetch-mock).

Fetch-mock allows us to intercept any fetch requests we make and explicitly set a response to send back. This helps us to A) avoid issues where fetch is not available through the test runner B) test if our application reacts to a particular response in the appropriate manner.

Let's take a closer look at the previous example. Building off of our Grocery List application, we've now added a back-end for persisting the grocery data we're working with. When we submit a new grocery, we now make a `POST` request to our server to add that grocery item. We don't want to override the entire `addGrocery` method, but we do want to intercept that `POST` request so that we can return some fake data to work with.

Let's start by adding a test file for this component named `AddGroceryForm.test.js`. And install `fetch-mock` via npm:

```bash
npm install fetch-mock
```

We'll import fetchMock at the top of our new test file, along with React and Enzyme dependencies, and the component we're testing:

```javascript
import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import AddGroceryForm from './AddGroceryForm';
```

Let's create our `describe` block and we're going to want to mock out some fake groceries that we can use later to return from our API request:

```javascript
describe('AddGroceryForm', () => {

  const mockGroceries = [
    { id: 1, name: 'Pineapples', quantity: 10 },
    { id: 2, name: 'Coconuts', quantity: 1000 },
    { id: 3, name: 'Pears', quantity: 5 }
  ];

});
```

Now we want to make an `it` block that will verify that our fetch request is a) being made b) called with the appropriate data. The very first thing we want to do in this block is utilize fetchMock to intercept that fetch request:

```javascript
it('submits the correct data when adding a new grocery', () => {
  fetchMock.post('/api/v1/groceries', { 
    status: 200,
    body: mockGroceries
  });
});
```

This `fetchMock.post()` method takes two arguments. The first is the URL we want to match against to intercept requests, and the second is what we want to return from the fetch request. It is essentially saying: "intercept any POST requests made to `/api/v1/groceries` and instead of actually trying to hit the server, just immediately respond with a successful status code (200) and an array of fake groceries".

You're probably used to starting your tests off with a `shallow` or `mount` rendering of the component you're testing. In this scenario, it's important to do this AFTER we set up our fetch mock intercepts. If our component had finished mounting before we setup our fetchMock, the requests would not be caught in time and our component would attempt to hit the server when they ran. But now that we've setup our fetchMock, let's go ahead and mount our component:

```javascript
it('submits the correct data when adding a new grocery', () => {
  fetchMock.post('/api/v1/groceries', { 
    status: 200,
    body: mockGroceries
  });
  
  const wrapper = mount(
    <AddGroceryForm updateGroceryList={jest.fn()} />
  );

});
```

Note here that we are passing in a prop called `updateGroceryList` as a mocked function. This is to prevent the test runner from complaining that it is undefined when we hit our `.then()` upon a successful fetch request. Because we're not concerned with testing this specific method right now, it's ok to mock it in and ignore its functionality.









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

