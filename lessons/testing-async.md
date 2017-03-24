---
title: Testing Async JavaScript & API Calls
module: 3
tags: testing, react, async, fetch
---

## Goals

By the end of this lesson, you will:

* Know how to test React components that contain methods with async JavaScript
* Understand how and what to test when making API calls with fetch

### Getting Started

Follow along with a modified version of the grocery list application [here](https://github.com/turingschool-examples/grocery-list/tree/async-begin). Clone the repo and checkout the **async-begin** branch. Run the following commands to get started:

```bash
npm install
npm run server
npm start
```

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

If we would like to test this method, containing a fetch request, we're going to run into some issues when it executes. Mainly, `fetch` won't be available when running our tests in the console and we wouldn't have access to the API endpoint. Lucky for us, there are a bunch of libraries out there we can use to mock out our fetch requests. One of the first you'll come across is [nock](https://github.com/node-nock/nock). I've historically had an impossible time working with this, I don't know why, and I don't know how it's the most popular library out there, but the one I've had most success with is [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/).

Fetch-mock allows us to intercept any fetch requests we make and explicitly set a response to send back. This helps us to A) avoid issues where fetch is not available through the test runner B) test if our application reacts to a particular response in the appropriate manner.

Let's take a closer look at the previous example. Building off of our Grocery List application, we've now added a back-end for persisting the grocery data we're working with. When we submit a new grocery, we now make a `POST` request to our server to add that grocery item. We don't want to override the entire `addGrocery` method, but we do want to intercept that `POST` request so that we can return some fake data to work with.

Let's start by adding a test file for this component named `AddGroceryForm.test.js`. And install `fetch-mock` via npm:

```bash
npm install --save-dev fetch-mock
```

We'll import `fetchMock` at the top of our new test file, along with React and Enzyme dependencies, and the component we're testing:

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

  const mockFn = jest.fn()

  const wrapper = mount(
    <AddGroceryForm updateGroceryList={ mockFn } />
  )

});
```

Note here that we are passing in a prop called `updateGroceryList` as a mocked function. This is to prevent the test runner from complaining that it is undefined when we hit our `.then()` upon a successful fetch request. Because we're not concerned with testing this specific method right now, it's ok to mock it in and ignore its functionality.

Now let's get to the good part: writing our assertions. We first need access to our form elements on the page so that we can simulate adding a name and quantity value before submitting the form:

```javascript
const nameInput = wrapper.find('input[name="name"]');
const qtyInput = wrapper.find('input[name="quantity"]');
const formElem = wrapper.find('form');
```

On both the `nameInput` and `qtyInput` elements, we want to simulate **change** events so that we can add values to them, and then we want to simuulate a **submit** event on our form element:

```javascript
nameInput.simulate('change', {
  target: { name: 'name', value: 'Foo' }
});

qtyInput.simulate('change', {
  target: { name: 'quantity', value: '1000' }
});

formElem.simulate('submit');
```

Now we should be able to assume that our `addGrocery` method was called and it triggered a fetch request that was intercepted with fetchMock. The fetchMock API gives us several methods for writing different assertions. Let's assert that:

1. fetch was called
2. fetch was called with the correct URL
3. the correct data was passed along with the fetch request

```javascript
expect(fetchMock.called()).toEqual(true);
expect(fetchMock.lastUrl()).toEqual('/api/v1/groceries');
expect(fetchMock.lastOptions()).toEqual({
  method: 'POST',
  body: '{"grocery":{"name":"Foo","quantity":"1000"}}',
  headers: { 'Content-Type': 'application/json' }
});
```

The most important assertion in this example is the `fetchMock.lastOptions()`. This is the assertion that verifies we actually sent in the correct body data. You can see the method (POST) is correct, and the body is a JSON.stringified object that contains a single grocery, with a name of Foo and a quantity of 1000 -- the exact values we simulated in our input elements earlier.

You'll notice the methods on fetchMock are prefixed with the word 'last'. (e.g. `lastUrl`, `lastOptions`). This is because we'll often have multiple test blocks that will be intercepting various fetch requests. We will always want the latest match every time fetchMock intercepts a request. We're also going to want to 'clean up' any fetchMock interceptions that we've made in our it blocks so that we can start with a clean slate when we run new tests. A nice way to add some reset/cleanup functionality to our test file is by using an `afterEach` hook. Within your `describe` block, directly before your first `it` block, add the following:

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


## Testing with Async/Await

In our previous example, we tested a `POST` request, and used fetchMock to fake a successful response. Let's look at an example of testing a `GET` request that returns an error. In our `App.js` file, we are now making a fetch request in `componentDidMount` in order to retrieve groceries from the server:

```javascript
  componentDidMount() {
    fetch('/api/v1/groceries')
      .then(response => {
        if (response.status >= 400) {
          this.setState({
            errorStatus: 'Error fetching groceries'
          });
        }
        else {
          response.json().then(data => {
            this.setState({groceries: data.groceries})
          });
        }
      })
  }
```

We are doing a check on the status code right away when the response comes back to determine how to proceed. *(This style of writing fetch requests may seem unfamiliar, but you'll see it often in the real world. Sometimes it is useful to handle various status codes in different ways, rather than just lumping all erroneous status codes in a .catch())*.

Let's again make a test file for this component named `App.test.js`, and add the appropriate imports:

```javascript
import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import App from './App';
```

We'll fill out our describe block similarly to the previous example. Because we're going to test an erroneous fetch response, we don't need to mock out any fake groceries this time around:

```javascript
describe('App', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('displays an error if fetching groceries fails', () => {
  });

});
```

In our `App.js` component, we are rendering an error message if there happened to be a problem fetching the groceries:

```jsx
{ errorStatus &&
  <p className="error">{errorStatus}</p>
}
```

In our assertion, we want to verify that this paragraph tag exists when our fetch request fails and that our state updated to add an error message.

Again, let's first set up our fetchMock and then mount our component:

```javascript
fetchMock.get('/api/v1/groceries', {
  status: 500
});

const wrapper = mount(<App />);
```

This time we're doing a `GET` request, so instead of `fetchMock.post()`, we'll call `fetchMock.get()`. The URL we want to match is `/api/v1/groceries`, and we're simply going to return a status code of 500 from this request, which should be caught as an error within our component.

Now we want to write our assertions. We want to verify that the `errorStatus` in our state was updated, and that a paragraph tag with an error class exists:

```javascript
expect(wrapper.state('errorStatus')).toEqual('Error fetching groceries');
expect(wrapper.find('.error').length).toEqual(1);
```

If we go ahead and run this test, we'll see that it actually fails. Our first assertion says that `errorStatus` still equals an empty string, even though we expected it to update with an error message:

```bash
Expected value to equal:
  "Error fetching groceries"
Received:
  ""
```

But our app is working perfectly fine! What could be wrong here? The problem isn't in our component code, but rather the way we've written our test. Dealing with asynchronous code (like API calls) can be tricky, especially when it exists within our React Lifecycle Methods. We need to rewrite our it block to say "mount our component, and wait for it to completely update before trying to test any changes". One way we can do this is with **async/await** and enzyme's `update()` method. Let's add some pieces to our `it` block:

```javascript
  it('displays an error if fetching groceries fails', async () => {
    fetchMock.get('/api/v1/groceries', {
      status: 500
    });

    const wrapper = mount(<App />);
    await wrapper.update();

    expect(wrapper.state('errorStatus')).toEqual('Error fetching groceries');
    expect(wrapper.find('.error').length).toEqual(1);
  });
```

We've added three things here:

1. `async` - right before the opening parens of our `it` block, this keyword tells the test runner there is something asynchronous that we need to wait for before running our assertions with `expect`
2. `await` - right before `wrapper.update()`. Await works alongside the `async` keyword we added and says 'this is the line of code we want to wait for!'
3. `wrapper.update()` - this is one of [Enzyme's helper methods](http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html) that will force a re-render so that we can check our render output after something may have updated the state

Now if we run this test again, we should see that it passes in flying colors. Hurray!


### Your Turn

* Can you display an error message in the `AddGroceryForm` component if the `POST` request fails, and write an assertion to test it?
* Can you test a successful `GET` request in the `App` component and verify it updates the grocery list?

### Resources

* [FetchMock](http://www.wheresrhys.co.uk/fetch-mock/)
* [Jest Async Examples](https://facebook.github.io/jest/docs/tutorial-async.html#content)
