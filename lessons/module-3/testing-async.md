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

Follow along with a modified version of the grocery list application [here](https://github.com/turingschool-examples/grocery-list/tree/async-begin). 

Clone the repo and checkout the **async-begin** branch. 

Open the code up in your editor.

Open two tabs in your terminal and run the following commands to get started:

```bash
npm install
node server.js
npm start
```

## Testing API Calls
When our application makes a request to an API endpoint, we typically want to test our app's **reaction** to the response it receives from that request. We don't really care about what goes on in the back-end, we just want to know that we can handle the response appropriately. This makes API calls a good scenario for using mocks. However, we're usually placing our fetch requests within other functions or methods, and we might not want to override the functionality of the entire method with a mock. Consider the following example from our [AddGroceryForm Component](https://github.com/turingschool-examples/grocery-list/blob/async-complete/src/AddGroceryForm.js):

```javascript
// AddGroceryForm.js

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

If we would like to test this method, containing a fetch request, we're going to run into some issues when it executes. Mainly, `fetch` won't be available when running our tests in the console and we wouldn't have access to the API endpoint. There are a bunch of libraries that you could use to handle this behavior, some that you'll come across may include [nock](https://github.com/node-nock/nock) or [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/). The thing is, [Jest](https://facebook.github.io/jest) has some really great utilities for mocking built into it, so using an external library beyond Jest here really isn't necessary.

Let's take a closer look at the previous example. Building off of our Grocery List application, we've now added a back-end for persisting the grocery data we're working with. When we submit a new grocery, we now make a `POST` request to our server to add that grocery item. We don't want to override the entire `addGrocery` method, but we do want to intercept that `POST` request so that we can return some fake data to work with.

Let's start by adding a test file for this component named `AddGroceryForm.test.js`. At the top of our new test file, we'll import the React and Enzyme dependencies, and the component we're testing:

```javascript
// AddGroceryForm.test.js

import React from 'react';
import { shallow } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';
```

Before we start into writing our tests for this method, let's first consider what we need to test in our function. In
my mind the critical pieces fall into four categories. First, we should test that fetch is in fact called, with the
correct parameters. Second, we need to test that the state of the component is correctly set after the fetch call is
made. Third, we need to test that our callback, `updateGroceryList`, is called with the correct parameters. Finally, we
should test that in the event of an error, our `errorStatus` state is set correctly. With that in mind, lets sketch out
our four tests.

```javascript
// AddGroceryForm.test.js

import React from 'react';
import { shallow } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';

describe('AddGroceryForm', () => {
  it('calls fetch with the correct data when adding a new grocery', () => {
  })

  it('resets the state after adding a new grocery', () => {
  })

  it('calls the updateGroceryList callback after adding a new grocery', () => {
  })

  it('sets an error when the fetch fails', () => {
  })
})
```

Now that we have our test placeholders, let's consider what we'll need to mock to effectively test our `addGrocery`
method. We're going to need a `mockGrocery`, to simulate the actual data that is being posted. We'll need some
`mockGroceries` to return from our fetch. We're going to need a `mockEvent`, because our `addGrocery` method is
expecting an event as a param, and finally, we're going to need a `mockUpdateGroceryList` function, to pass to our
component as a param.

```javascript
// AddGroceryForm.test.js

import React from 'react';
import { shallow } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';

describe('AddGroceryForm', () => {
  const mockGrocery = { name: 'Oranges', quantity: 3 }

  const mockGroceries = [
    {id: 1, name: 'Pineapples', quantity: 10},
    {id: 2, name: 'Oranges', quantity: 3}
  ]

  const mockEvent = { preventDefault: jest.fn() }

  const mockUpdateGroceryList = jest.fn()

  it('calls fetch with the correct data when adding a new grocery', () => {
  })

  it('resets the state after adding a new grocery', () => {
  })

  it('calls the updateGroceryList callback after adding a new grocery', () => {
  })

  it('sets an error when the fetch fails', () => {
  })
})
```

### Tangent: before & after blocks
Often times, you'll want to start from scratch after every `it` block runs in your test files. For example, if we have more than one test that manipulates our component state, we might get some unexpected failures in later tests because we didn't start fresh with a clean default state. This is where `before` and `after` hooks come in handy. There are four hooks we can use to run some setup code at different points in our testing lifecycle:

* [beforeAll](https://facebook.github.io/jest/docs/api.html#beforeallfn) - will run once before any `it` blocks have been run
* [afterAll](https://facebook.github.io/jest/docs/api.html#afterallfn) - will run once after all `it` blocks have been run
* [beforeEach](https://facebook.github.io/jest/docs/api.html#beforeeachfn) - will run before every single `it` block
* [afterEach](https://facebook.github.io/jest/docs/api.html#aftereachfn) - will run after every single `it` block

In the following examples, we'll be using the beforeEach method to get a fresh instance of our renderedComponent.

## Writing our tests
Now that we've mocked all the important data, let's mock our fetch function itself. Remember, we need to override the
behavior of `fetch` because we don't want to actually make an API request. We can override the behavior of fetch really
easily with Jest, using `mockImplementation`.

```javascript
// AddGroceryForm.test.js

import React from 'react';
import { shallow } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';

describe('AddGroceryForm', () => {
  const mockGrocery = { name: 'Oranges', quantity: 3 }

  const mockGroceries = [
    {id: 1, name: 'Pineapples', quantity: 10},
    {id: 2, name: 'Oranges', quantity: 3}
  ]

  const mockEvent = { preventDefault: jest.fn() }

  const mockUpdateGroceryList = jest.fn()

  window.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
    resolve({
      json: () => new Promise((resolve, reject) => {
        resolve(mockGroceries)
      })
    })
  }))

  let renderedComponent

  beforeEach(() => {
    const renderedComponent = shallow(<AddGroceryForm 
                                      updateGroceryList={mockUpdateGroceryList}
                                    />)
  })

  it('calls fetch with the correct data when adding a new grocery', () => {
  })

  it('resets the state after adding a new grocery', () => {
  })

  it('calls the updateGroceryList callback after adding a new grocery', () => {
  })

  it('sets an error when the fetch fails', () => {
  })
})
```

The `fetch` function returns a Promise, which resolves to a Response object. That Response object has a `json()` method
on it, which itself returns a Promise. Using our Jest mock, it's easy to recreate this behavior. Now that we've mocked
everything. We can start writing our tests.

Our first test needs to assert that fetch was called with the expected parameters. Since the fetch params pull from the
state of the component, we'll need to set the state of our `renderedComponent` before we call the `addGrocery` method.

```javascript
// AddGroceryForm.test.js

it('calls fetch with the correct data when adding a new grocery', () => {
  const expectedFetchBody = {
    method: 'POST',
    body: JSON.stringify({ grocery: mockGrocery }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  renderedComponent.setState({grocery: mockGrocery})
  renderedComponent.instance().addGrocery(mockEvent)
  expect(window.fetch).toHaveBeenCalledWith('/api/v1/groceries', expectedFetchBody)
})
```

Our second test asserts that the state of the component was properly set after our fetch call fired. Because fetch is
asynchronous, we'll need to write a Promise to wait for the component to actually update. Since setting the state is
also asynchronous, we need to chain the Promise, and update the component before our expectation.

```javascript
// AddGroceryForm.test.js

it('resets the state after adding a new grocery', () => {
  renderedComponent.setState({grocery: mockGrocery})

  new Promise((resolve) => {
    resolve(renderedComponent.instance().addGrocery(mockEvent))
  }).then(() => {
    renderedComponent.update()
  }).then(() => {
    expect(renderedComponent.state('grocery')).toEqual({name: '', quantity: ''})
  })
})
```

Our third test looks similar to our first, however because we don't care about any state changes, and just want to
assert that our `updateGroceryList` mock was called, we don't need to update the component.

```javascript
// AddGroceryForm.test.js

it('calls the updateGroceryList callback after adding a new grocery', () => {
  new Promise((resolve) => {
    resolve(renderedComponent.instance().addGrocery(mockEvent))
  }).then(() => {
    expect(mockUpdateGroceryList).toHaveBeenCalledWith(mockGroceries)
  })
})
```

Our final test asserts that our catch statement set the state correct if the fetch call fails. However in order to
simulate this failure, we're going to need to mock our fetch call again. Also, due to an Enzyme oddity, we're going to
need to update our component twice, otherwise we won't see the state change.

```javascript
// AddGroceryForm.test.js

it('sets an error when the fetch fails', () => {
  window.fetch = jest.fn().mockImplementationOnce(() => new Promise((resolve, reject) => {
    reject(new Error('failed'))
  }))

  new Promise((resolve) => {
    resolve(renderedComponent.instance().addGrocery(mockEvent))
  }).then(() => {
    renderedComponent.update()
  }).then(() => {
    renderedComponent.update()
  }).then(() => {
    expect(renderedComponent.state('errorStatus')).toEqual('Error adding grocery')
  })
})
```

Awesome, now all the critical functionality of our addGrocery method is tested! Already though, you should be thinking
that there may be an easier, or at least more succinct way of writing this code. Rather than chaining Promises, I'd like
to use the new ES7 `async/await` syntax. Let's lean on our new test suite to refactor our code.

```javascript
// AddGroceryForm.test.js

async addGrocery(event) {
  event.preventDefault();
  const { updateGroceryList } = this.props;
  const grocery = this.state.grocery;

  try {
    const response = await fetch('/api/v1/groceries', {
      method: 'POST',
      body: JSON.stringify({ grocery }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const groceries = await response.json()
    this.setState({
      grocery: {
        name: '',
        quantity: '' 
      }
    }, updateGroceryList(groceries));
  } catch(error) {
    this.setState({
      errorStatus: 'Error adding grocery'
    })
  };
}
```

Using `async/await` with `try/catch` allows us to `await` all our asynchronous behavior. Should any of our `await`ed
Promises fail, they will be caught by the `catch` statement. In this example, our code is now moderately more terse, and
I would say a fair bit more readable. Let's use this new syntax to now update our tests.

Our first test is unchanged, as there is nothing asynchronous happening. In small groups, work to refactor the rest of 
the tests, using the ES7 `async/await` syntax.

## Refactoring out fetch

While this works for us now, I'm not totally satisfied with our workflow here. Making naked fetch calls inside of our
component code isn't ideal, for a couple reasons. For starters, if we had more fetch calls inside this component, it
would get harder to correctly mock them. Additionally, if another component in our application needs to post to our
'/api/v1/groceries', we'd need to rewrite our fetch call. Instead of doing this, I prefer to pull all of my API calls
into their own file. This will make it easier to test the behavior of these fetch calls, as well as how our component
digests the data.

Let's create a new file that will hold our API calls, named apiCalls.js, as well as an accompanying test file,
apiCalls.test.js. Since we're TTD style developers, let's write our tests first, and then our actual method.

```javascript
// apiCalls.test.js

import { addGrocery } from './apiCalls'

describe('addGrocery', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => new Promise(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve({
          groceries: mockGroceries,
        })
      }),
    })))
  })

  it('fetch is called with the correct params', async () => {
    const mockGrocery = {name: 'Oranges', quantity: 3}
    const expected = [
      "/api/v1/groceries", 
      {
        body: JSON.stringify({ grocery: mockGrocery }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    ]

    addGrocery(mockGrocery)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('returns an object if status code is ok', () => {
    const mockGrocery = {name: 'Oranges', quantity: 3}
    const mockGroceries = [
      {id: 1, name: 'Pineapples', quantity: 10},
      {id: 2, name: 'Oranges', quantity: 3}
    ]

    expect(addGrocery(mockGrocery)).resolves.toEqual({groceries: mockGroceries})
  })

  it('throws an error if status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }))

    expect(addGrocery()).rejects.toEqual(Error('Error adding grocery'))
  })
})

```

Here, I've assumed that I have a helper method `addGrocery` in my apiCalls.js file. Using a similar mocking strategy as
before, I've mocked fetch. This time, I'm also adding a status code to the resolved object. This will exist on the
response object as well, and will be considered 'ok', if the status is less than 400. Thus, if the status code is less
than 400, my helper function should resolve to an object, otherwise, I should expect an error. Note the
`resolves/rejects` happening in the test. These expectation helpers are built into Jest, and allow you get the resolved
or rejected values from asynchronous functions.

Now that we have our tests, lets write our function:

```javascript
// apiCalls.js

export const addGrocery = async (grocery) => {
  const response = await fetch('/api/v1/groceries', {
    method: 'POST',
    body: JSON.stringify({ grocery }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(response.status >= 400) {
    throw(new Error('Error adding grocery'))
  } else {
    return await response.json()
  }
}
```

Now that we've isoloated and tested our fetch functionality, testing our component method is simplified, because we can
mock the response from our new `addGrocery` function. We no longer need to test that fetch is being called in the
component tests, we only need to test that the data is handled correctly after the function is called.

To facilitate this, we're going to create a mock file, which will override the addGrocery helper method we just created.

```javascript
// __mocks__/apiCalls.js

export const addGrocery = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
    ],
  }))
  .mockImplementationOnce(() => {
    throw(new Error('Error adding grocery'))
  })
```

Using Jest's `mockImplementationOnce` helper, we can control what is returned from our function each time it is
called. This greatly simplifies our three tests. When we call `jest.mock('./apiCalls')`, jest overwrites any functions
that are found in `apiCalls.js` with the functions of the same signature in `__mocks__/apiCalls.js`. Note that it's
critical that the `__mocks__` directory live next to the actual functional code, otherwise Jest won't be able to find
it.

```javascript
// AddGroceryForm.test.js

import React from 'react'
import { shallow } from 'enzyme'
import AddGroceryForm from './AddGroceryForm'

jest.mock('./apiCalls')

describe('AddGroceryForm', () => {
  const mockGrocery = { name: 'Oranges', quantity: 3 }
  const mockUpdateGroceryList = jest.fn()
  const mockEvent = { preventDefault: jest.fn() }
  let renderedComponent

  beforeEach(() => { 
    renderedComponent = shallow(<AddGroceryForm 
                                  updateGroceryList={mockUpdateGroceryList}
                                />)
  })

  it('resets the state after adding a new grocery', async () => {
    renderedComponent.setState({grocery: mockGrocery})
    await renderedComponent.instance().addGrocery(mockEvent)
    expect(renderedComponent.state('grocery')).toEqual({name: '', quantity: ''})
  })

  it('calls the updateGroceryList callback after adding a new grocery', async () => {
    await renderedComponent.instance().addGrocery(mockEvent)
    expect(mockUpdateGroceryList).toHaveBeenCalled()
  })

  it('sets an error when the fetch fails', async () => {
    await renderedComponent.instance().addGrocery(mockEvent)
    expect(renderedComponent.state('errorStatus')).toEqual('Error adding grocery')
  })

})
```

## Final thoughts
As a rule of thumb, code is easier to test when it is doing less. By separating our API calls from component code, it’s easier to test the expected behavior of both pieces. By using the mocking and asynchronous expectations that are available in Jest, it’s easy to mimic the behavior of an API, and ensure that your application responds as you expect it should.
