---
title: Testing Async JavaScript & API Calls
module: 3
tags: testing, react, async, fetch
---

## Agenda

* Understand how and why we test asynchronous JS
* Understand what to test
* Pseudocode tests for async code
* Write tests using .then() promise resolution
* Refactor tests to use async/await
* Use manual mocks to update and refactor test suite

## Learning Goals

By the end of this lesson, you will:

* Know how to test React components that contain methods with async JavaScript
* Understand how and what to test when making API calls with fetch

## Vocab

* mock - in a test file, overwriting a function/method or data so that the component being tested uses the simpler, controllable mock function/method/data instead of the real one
* `.then()`/`.catch()` - JavaScript syntax for handling the resolution/rejection of a Promise
* `async`/`await` - ES6 syntax for handling asynchronous JavaScript
* `try`/`catch` - ES6 syntax for handling the resolution/rejection of a Promise

## Testing Async JavaScript & API Calls

### Getting Started

We're going to use the [same Ideabox repo](https://github.com/turingschool-examples/ideabox-testing/tree/react-iii-complete) that we've been using to learn how to unit test React components. We'll start by checking out the `react-iii-complete` branch, which already has all of our unit tests!

If you want to pull down a fresh copy, run the following commands in your terminal:

```bash
git clone https://github.com/turingschool-examples/ideabox-testing.git
cd ideabox-testing
git checkout react-iii-complete
npm i
```

Open the code up in your editor. You can fire up the front-end by running `npm start` if you want to remind yourself how the app works.

Open a **new tab** in your terminal, `cd` so you are **no longer inside the ideabox-testing repo**, and run the following command to set up the API that Ideabox will consume:

```bash
git clone https://github.com/turingschool-examples/ideabox-api.git && cd ideabox-api && npm i && npm start
```

## Testing API Calls

When our application makes a request to an API endpoint, we typically want to test our app's **reaction** to the response it receives from that request. We don't really care about what goes on in the back-end, we just want to know that we can handle the response appropriately.

In most cases, we're not the ones who write the back-end, and we're not going to bother testing the code that we didn't write.

However, we _did_ write the code that DOES something with the data we get back from the API! So we do need to test that.

In this lesson, we're going to be rewriting a lot of code to **mock out functionality** in our test suites. For example, we don't actually want to query an API every time we test our fetch functions! But it's important to remember that we shouldn't be mocking out ALL the functionality: usually, we're placing our fetch requests within OTHER functions or methods, and we DO want to test the rest of that method/function functionality, around the mocked fetch!

Here's the overall steps we'll be taking:

1. Move `fetch`es into their own file
  - Discuss why
2. Import `fetch`es into the React component they originally belonged in
  - Make sure component tests still pass
3. Test each `fetch` in isolation
  - Learn how to figure out what needs to be tested
4. Test the asynchronous functions of the component
  - Learn to mock a file
  - Learn what to mock and what to test

Before we get started, take a look at the `App.js` file and the `App.test.js` file.

<section class="call-to-action">
### Turn & Talk

Discuss with your neighbor:
- What methods in App are asynchronous? How can you tell?
- The tests for `addIdea` and `deleteIdea` are failing - why?
</section>

### Isolating fetch

Why do you think the tests for `addIdea` and `deleteIdea` are breaking? Here's the test for `addIdea`:

```js
// App.test.js

it('should update state when addIdea is called', () => {
  const mockIdea = {
    id: 3, title: 'Sweaters for pugs', description: 'Why not?'
  };
  const expected = [{ id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
  { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' }, mockIdea];

  wrapper.instance().addIdea(mockIdea);

  expect(wrapper.state('ideas')).toEqual(expected);
});
```

And let's look at the code for `addIdea`:

```js
// App.js

addIdea = (newIdea) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...newIdea })
  };

  fetch('http://localhost:3001/api/v1/ideas', options)
    .then(response => response.json())
    .then(response => fetch(`http://localhost:3001/api/v1/ideas/${response.id}`))
    .then(response => response.json())
    .then(newIdea => this.setState({ ideas: [...this.state.ideas, newIdea] }))
    .catch(error => this.setState({ error: error.message }))
}
```

A HA! When our test suite is running through the code, it hits that `fetch` and gets nothing back - because we don't want to _actually_ query our API. It's not actually getting anything back from the fetch, so it's not changing App's state at all.

So instead, we're going to have to mock `fetch`. We do that by overwriting the window's implementation of `fetch` inside our test suite. We're going to rewrite it so it returns exactly what we want the `addIdea` fetch call to return! NICE.

But, hang on - we have more than one `fetch` in our code! There's TWO in `addIdea`, and there's a different one in `deleteIdea`. We can't chop up the component and have it define different mocked `fetch`es for the different methods, unfortunately. So instead we're going to **isolate** our API calls by creating a separate file to hold all of our `fetch`es.

_Yikes._ What does all of this even mean?

<section class="note">
### Analogy time!

You're the component. You're standing at a vending machine. You can order whatever you want by selecting the right code. Chips, pop, candy.

Punching in the code is the equivalent of calling `fetch`. There are lots of different API queries you could make!

But let's put you in a testing situation: you didn't build the vending machine, so you don't need to make sure that the inner mechanisms work. You don't care about making sure the little spiral things turn and advance an item. You don't care that the little flap at the bottom properly swings up to stop people from stealing stuff from the bottom row.

But you DO care that, if you type in the code for peanut butter cups, you get peanut butter cups out of the machine! Especially if, say, you were getting them for your project partner because you know they especially love peanut butter cups. You not only want to get back peanut butter cups, but you especially need them to be peanut butter cups, because you're going to be doing something with them after you get them! You can't go giving your project partner a _granola bar_ instead of _peanut butter cups!_ CAN YOU IMAGINE?!

Okay, so this testing scenario: you don't get to use the real vending machine, because you're just checking that things work and you don't wanna keep stuffing quarters in a machine for no reason.

So instead you make a fake one. It can only dispense one thing at a time - it's basically a gumball machine, because making a whole entire vending machine would be REALLY complicated and probably not worth the time or effort.

Now, when you put in the code for peanut butter cups, you get peanut butter cups! NICE.

But, uh oh - when you put in the code for potato chips ... you still get peanut butter cups. NOT NICE.

There's no way to stop and swap out the peanut butter cups for potato chips.

Instead, let's do something that still feels kinda silly, but works: let's build **multiple fake vending machines**, which each give you back exactly what you want, but only when you ask for it the right way.

Faking it like this is still okay, because - again, YOU DIDN"T BUILD THE VENDING MACHINE. You just want to make sure that, when you ask for potato chips, you get back potato chips. When you ask for peanut butter cups, you don't get a granola bar. It's a safety net to catch errors when things change. Because, hey, maybe in the future, the real vending machine is updated and it'll work differently - it's best to have our tests be able to catch the changes before we spend a dollar on the wrong snack.
</section>

So what does this look like in our Ideabox app?

In our front-end repo, let's create a file to hold all our API queries, and a file to test those queries:

```bash
touch src/apiCalls.js src/apiCalls.test.js
```

<section class="note">
### Note

Notice that we did not capitalize this filename. That's because this is not a component! Only components are capitalized. This is just a regular old JavaScript file, with some regular old JavaScript functions in it.
</section>

Let's look at the API calls we're making in `App,js`.

We're making one to get all of our ideas in the `componentDidMount`. We're making one that posts a new idea. We're making one that gets a single idea based on its id. We're making one that deletes an idea by its id.

So let's write three separate functions for each of those `fetch`es!

I'll get you started:

```js
// apiCalls.js
export const getIdeas = () => {
  return // your code here
};

export const postIdea = newIdea => {
  return // your code here
}

export const getIdea = id => {
  return // your code here
};

export const deleteIdea = id => {
  return // your code here
}
```

Before we start coding, take a second to consider:

<section class="call-to-action">
### In Your Notebook

What do we need to return out of these functions?

How much of the `addIdea` and `deleteIdea` methods will we be pulling into these functions instead?
</section>

Okay. Let's take a look at `componentDidMount` in our `App.js` file:

```js
// App.js

componentDidMount() {
  fetch('http://localhost:3001/api/v1/ideas')
    .then(response => response.json())
    .then(ideas => this.setState({ ideas }))
    .catch(error => this.setState({ error: error.message }));
}
```

After we make the first `fetch` call, we get back a Promise that resolves into the response.

<section class="note">
### Note

Any time you can chain on a `.then()`, the previous line is returning a Promise!
</section>

Once the Promise that the `.json()` generates is resolved, we put the parsed response in state.

How much of this should we move into the `getIdeas` function?

Probably, anything to do with a component's state should stay inside that component. I think we can safely move the fetch and parsing the response into the `getIdeas` function!

```js
// apiCalls.js
export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => response.json())
}
```

But wait! If we look back at the `componentDidMount`, we can see that we could also possibly get an error back from the API, rather than an array of ideas.

So let's write our new function to handle that possibility:

```js
// apiCalls.js
export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas')
      }
      return response.json()
    })
}
```

We can now import this function into our `App.js` file and use it!

```js
// App.js

import { getIdeas } from './apiCalls.js';

componentDidMount() {
  getIdeas()
    .then(ideas => this.setState({ ideas }))
    .catch(error => this.setState({ error: error.message }));
}
```

If you start up Ideabox, you should see that our app still works! _Whew!_

And we can see our error working nicely if we change the URL of our fetch to something like `http://localhost:3001/api/v1/yolo`. Now, our app displays the error we threw - "Error fetching ideas".

Now that we know that this is working, let's test this `getIdeas` function!

















Consider the following example from our [AddGroceryForm Component](https://github.com/turingschool-examples/grocery-list/blob/async-complete/src/AddGroceryForm.js):

```javascript
// AddGroceryForm.js

handleAddGrocery(event) {
  event.preventDefault();
  const { updateGroceryList } = this.props;
  const { grocery } = this.state;

  return fetch('/api/v1/groceries', {
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

Let's take a closer look at the previous example. Building off of our Grocery List application, we've now added a back-end for persisting the grocery data we're working with. When we submit a new grocery, we now make a `POST` request to our server to add that grocery item. We don't want to override the entire `handleAddGrocery` method, but we do want to intercept that `POST` request so that we can return some fake data to work with.

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

  it('sets the error in state if the fetch fails', () => {
  })
})
```

Now that we have our test placeholders, let's consider what we'll need to mock to effectively test our `handleAddGrocery`
method. We're going to need a `mockGrocery`, to simulate the actual data that is being posted. We'll need some
`mockGroceries` to return from our fetch. We're going to need a `mockEvent`, because our `handleAddGrocery` method is
expecting an event as a param, and finally, we're going to need a `mockUpdateGroceryList` function, to pass to our
component as a param.

```javascript
// AddGroceryForm.test.js

import React from 'react';
import { shallow } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';

describe('AddGroceryForm', () => {
  let mockEvent
  let mockGrocery
  let mockGroceries
  let mockUpdateGroceryList

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() }
    mockGrocery = { name: 'Oranges', quantity: 3 }
    mockGroceries = [
      {name: 'Pineapples', quantity: 10},
      {name: 'Oranges', quantity: 3}
    ]
    mockUpdateGroceryList = jest.fn()
  })

  it('calls fetch with the correct data when adding a new grocery', () => {
  })

  it('resets the state after adding a new grocery', () => {
  })

  it('calls the updateGroceryList callback after adding a new grocery', () => {
  })

  it('sets the error in state if the fetch fails', () => {
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
  let mockEvent
  let mockUpdateGroceryList
  let mockGrocery
  let mockGroceries
  let wrapper

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() }
    mockUpdateGroceryList = jest.fn()
    mockGrocery = { name: 'Oranges', quantity: 3 }
    mockGroceries = [
      {name: 'Pineapples', quantity: 10},
      {name: 'Oranges', quantity: 3}
    ]
    wrapper = shallow(<AddGroceryForm updateGroceryList={mockUpdateGroceryList} />)
  })
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockGroceries)
    }))

  it('calls fetch with the correct data when adding a new grocery', () => {
  })

  it('resets the state after adding a new grocery', () => {
  })

  it('calls the updateGroceryList callback after adding a new grocery', () => {
  })

  it('sets the error in state if the fetch fails', () => {
  })
})
```

The `fetch` function returns a Promise, which resolves to a Response object. That Response object has a `json()` method
on it, which itself returns a Promise. Using our Jest mock, it's easy to recreate this behavior. Now that we've mocked
everything. We can start writing our tests.

Our first test needs to assert that fetch was called with the expected parameters. Since the fetch params pull from the
state of the component, we'll need to set the state of our `wrapper` before we call the `handleAddGrocery` method.

```javascript
// AddGroceryForm.test.js

it('calls fetch with the correct data when adding a new grocery', () => {
  const url = '/api/v1/groceries'
  const options = {
    method: 'POST',
    body: JSON.stringify({ grocery: mockGrocery }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  wrapper.setState({grocery: mockGrocery})
  wrapper.instance().handleAddGrocery(mockEvent)
  expect(window.fetch).toHaveBeenCalledWith(url, options)
})
```

Our second test asserts that the state of the component was properly set after our fetch call fired. We'll want to step through the asynchronous behavior of the function to make sure the state gets reset after a successful fetch. If we take a look at our code, the `handleAddGrocery` function is not currently returning anything. However, if we update our code and `return` the fetch, `handleAddGrocery` is now returning a Promise that we can chain behavior to.

```javascript
// AddGroceryForm.test.js

it('resets the state after adding a new grocery', () => {
  const expected = { name: '', quantity: '' }
  wrapper.setState({grocery: mockGrocery})

  // Execution and Expectation - this assumes that handleAddGrocery method returns a promise
  wrapper.instance().handleAddGrocery(mockEvent)
   .then(() => {
      expect(wrapper.state('grocery')).toEqual(expected)
    })
})
```

Our third test looks similar to our first. We need to step through the asynchronous behavior of a successful fetch to determine if our `mockUpdateGroceryList` was called with the correct param.

```javascript
// AddGroceryForm.test.js

it('calls the updateGroceryList callback after adding a new grocery', () => {
  wrapper.instance().handleAddGrocery(mockEvent)
    .then(() => {
      expect(mockUpdateGroceryList).toHaveBeenCalledWith(mockGroceries)
    })
})
```

Our final test asserts that our catch statement sets the state correctly if the fetch call fails. However in order to
simulate this failure, we're going to need to mock our fetch call again to simulate a failed fetch.

```javascript
// AddGroceryForm.test.js

it('sets an error when the fetch fails', () => {
  window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
    new Error('Fetch failed')
  )

  wrapper.instance().handleAddGrocery(mockEvent)
    .then(() => {
      expect(wrapper.state('errorStatus')).toEqual('Error adding grocery')
    })
})
```

### A note on error handling

When using fetch calls, there are two main times when we want to check for errors. The first is when our fetch rejects, which is the case we tested above.

The second is when the fetch doesn't fail, but the response is not ok. In that case we should manually throw an error that we'll catch elsewhere. We'll show how that's done later on in this lesson.

## Refactoring to async/await

Awesome, now all the critical functionality of our addGrocery method is tested! Already though, you should be thinking that there may be an easier, or at least more succinct way of writing this code. Rather than chaining Promises, I'd like to use the new ES7 `async/await` syntax. Let's lean on our new test suite to refactor our code.

```javascript
// AddGroceryForm.js

async handleAddGrocery(event) {
  event.preventDefault();
  const { updateGroceryList } = this.props;
  const { grocery } = this.state;

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

Using `async/await` with `try/catch` allows us to `await` all our asynchronous behavior. Should any of our `await`ed Promises fail, they will be caught by the `catch` statement. In this example, our code is now moderately more terse, and I would say a fair bit more readable. Let's use this new syntax to now update our tests.

Our first test is unchanged, as there is nothing asynchronous happening. In small groups, work to refactor the rest of  the tests, using the ES7 `async/await` syntax.

## Refactoring fetch(es) into a separate file

While this works for us now, I'm not totally satisfied with our workflow here. Making naked fetch calls inside of our component code isn't ideal, for a couple reasons.

1. For starters, if we had more than one fetch call inside this component, it would get harder to correctly mock them when testing our components.
1. Additionally, if another component in our application needs to POST to our '/api/v1/groceries', we'd need to rewrite our fetch call.

Instead of doing this, I prefer to pull all of my API calls into their own file. This will make it easier to test the behavior of these fetch calls, as well as how our component digests the data.

Let's create a new file that will hold our API calls, named apiCalls.js, as well as an accompanying test file, apiCalls.test.js.

```sh
$ touch src/apiCalls.js src/apiCalls.test.js
```

### Writing the fetch in apiCalls.js

Let's write our function! Remember, we are replacing the fetch from our handleAddGrocery function.

```javascript
// apiCalls.js

export const addGrocery = grocery => {
  return fetch('/api/v1/groceries', {
    method: 'POST',
    body: JSON.stringify({ grocery }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if(!response.ok) {
      throw Error('Error adding grocery')
    } else {
      return response.json()
    }
  }
}
```

Take a second and compare this with the fetch in the updateGroceryList method in AddGroceryForm. What's the same? What's different?

Notice that our fetch is also parsing the json!

### Testing the fetch in isolation

Let's test this fetch now that it's not stuck inside our AddGroceryForm component code.

```javascript
// apiCalls.test.js

import { addGrocery } from './apiCalls'

describe('addGrocery', () => {
  let mockGrocery
  let mockGroceriesResponse

  beforeEach(() => {
    mockGrocery = { name: 'ice cream', quantity: '5000' }
    mockGroceriesResponse = [
      { name: 'ice cream cones', quantity: '3000' },
      mockGrocery
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockGroceriesResponse)
      })
    })
  })

  // fetch called w/ correct params
  it('should be called with correct params', () => {
    const expected = [
      '/api/v1/groceries',
      {
        method: 'POST',
        body: JSON.stringify({grocery: mockGrocery}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ]

    addGrocery(mockGrocery);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  })

  // returns a response if the status is ok
  it('should return a parsed response if status is ok', async () => {
    const result = await addGrocery(mockGrocery);

    expect(result).toEqual(mockGroceriesResponse);
  })

  // return an error if the status is not ok
  it('should return an error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    await expect(addGrocery()).rejects.toEqual(Error('Error adding grocery'))
  })
})
```

Our helper method `addGrocery` uses a similar mocking strategy as before. This time, I'm also adding a status code to the resolved object. This will exist on the response object as well, and will be considered 'ok', if the status is less than 400. Thus, if the status code is less than 400, my helper function should resolve to an array of grocery objects; otherwise, I should expect an error. Note the `resolves/rejects` happening in the test. These expectation helpers are built into Jest, and allow you get the resolved or rejected values from asynchronous functions.

### Refactoring AddGroceryForm to use our new, isolated fetch

With our new reusable function, our component method now knows nothing of fetch, and instead `await`'s our asynchronous
function from apiCalls.js.

Notice that we don't need to parse our response, because we're parsing it before we send it!

```javascript
// AddGroceryForm.js

import { addGrocery } from './apiCalls.js'

async handleAddGrocery(event) {
  event.preventDefault();
  const { updateGroceryList } = this.props;
  const { grocery } = this.state;

  try {
    const groceries = await addGrocery(grocery)
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

Now that we've isolated and tested our fetch functionality, testing our component method handleAddGrocery is simplified, because we can mock the response from our new `addGrocery` function. We no longer need to test that fetch is being called in the component tests, we only need to test that the data is handled correctly after the function is called.

To facilitate this, we're going to create a mock, which will override the addGrocery helper method we just created.

Using Jest's `mockImplementationOnce` helper, we can control what is returned from our function each time it is called. This greatly simplifies our three tests. When we call `jest.mock('./apiCalls')`, jest overwrites any functions that are found in `apiCalls.js` with whatever we specify in the second argument to that mock function call.

```javascript
// AddGroceryForm.test.js

import React from 'react'
import { shallow } from 'enzyme'
import AddGroceryForm from './AddGroceryForm'
import { addGrocery } from '.apiCalls'
// The line below is what allows us to mock addGrocery and make it return our mockGroceries array
jest.mock('./apiCalls')

describe('AddGroceryForm', () => {
  let mockGrocery
  let mockGroceries
  let mockUpdateGroceryList
  let mockEvent
  let wrapper

  // We add a beforeAll to mock addGrocery, ensuring that it returns our mockGroceries array when it's called
  beforeAll(() => {
    addGrocery.mockImplementation(() => mockGroceries);
  })

  beforeEach(() => {
    mockGrocery = { name: 'Oranges', quantity: 3 }
    mockGroceries = [{ name: 'apple', quantity: 12 }, mockGrocery]
    mockUpdateGroceryList = jest.fn()
    mockEvent = { preventDefault: jest.fn() }
    wrapper = shallow(<AddGroceryForm updateGroceryList={mockUpdateGroceryList} />)
  })

  // We no longer need to test that the fetch is happening! We tested the fetch in isolation in apiCalls.test.js already!

  it('resets the state after adding a new grocery', async () => {
    wrapper.setState({grocery: mockGrocery})
    await wrapper.instance().handleAddGrocery(mockEvent)
    expect(wrapper.state('grocery')).toEqual({name: '', quantity: ''})
  })

  it('calls the updateGroceryList callback after adding a new grocery', async () => {
    await wrapper.instance().handleAddGrocery(mockEvent)
    expect(mockUpdateGroceryList).toHaveBeenCalled()
  })

  it('sets an error when the fetch fails', async () => {
    // We have to overwrite the original mock of addGrocery to make sure that it sends back an error!
    addGrocery.mockImplementation(() => {
      throw new Error('Error adding grocery')
    });
    await wrapper.instance().handleAddGrocery(mockEvent)
    expect(wrapper.state('errorStatus')).toEqual('Error adding grocery')
  })
})
```

Moving the fetch into its own file and testing it in isolation allows us to streamline our component tests.

We make sure that the fetch works in its own test (`apiCalls.test.js`), and we make sure that the overall expected functionality works in our component tests (`AddGroceryForm.test.js`).

## Final thoughts

As a rule of thumb, code is easier to test when it is doing less. By separating our API calls from component code, it’s easier to test the expected behavior of both pieces. By using the mocking and asynchronous expectations that are available in Jest, it’s easy to mimic the behavior of an API, and ensure that your application responds as you expect it should.

## Your turn

This isn't the only fetch call which needs to be tested. Notice the fetch call that's happening in the `componentDidMount` method of App.js? With a partner, extract that functionality into a helper method, and test both the helper method, and the App, using the same patterns we just went over.

## Instructor Notes
