---
title: Testing Async JavaScript & API Calls
module: 3
tags: testing, react, async, fetch
---

## Learning Goals

By the end of this lesson, you will:

* Understand how and why we test asynchronous JS
* Know how to test React components that contain methods with async JavaScript
* Understand how and what to test when making API calls with fetch
* Be able to write tests using .then() and async/await syntax

## Vocab

* mock - in a test file, overwriting a function/method or data so that the component being tested uses the simpler, controllable mock function/method/data instead of the real one
* `.then()`/`.catch()` - JavaScript syntax for handling the resolution/rejection of a Promise
* `async`/`await` - ES7 syntax for handling asynchronous JavaScript
* `try`/`catch` - ES7 syntax for handling the resolution/rejection of a Promise
* happy path - the expected, desired outcome
* sad path - the unexpected outcome, typically covered by error handling

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

  addIdea = newIdea => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newIdea),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/v1/ideas', options)
      .then(response => response.json())
      .then(idea => this.setState({
        ideas: [...this.state.ideas, idea]
      }))
      .catch(error => this.setState({
        error: 'There was a problem adding your new idea.'
      }))
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

Let's look at the API calls we're making in `App.js`.

We're making one to get all of our ideas in the `componentDidMount`. We're making one that posts a new idea and lastly, we're making one that deletes an idea by its id.

So let's write three separate functions for each of those `fetch`es!

I'll get you started:

```js
// apiCalls.js

export const getIdeas = () => {
  return // your code here
};

export const postIdea = newIdea => {
  return // your code here
};

export const deleteIdea = id => {
  return // your code here
};
```

Before we start coding, take a second to consider:

<section class="call-to-action">
### In Your Notebook

What do we need to return out of these functions?

How much of the `componentDidMount`, `addIdea`, and `deleteIdea` methods will we be pulling into these functions instead?
</section>

Okay. Let's take a look at `componentDidMount` in our `App.js` file:

```js
// App.js

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/ideas')
      .then(data => data.json())
      .then(ideas => this.setState({ ideas, isLoading: false }))
      .catch(error => this.setState({
        isLoading: false,
        error: error.message
      })
    );
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
};
```

But wait! If we look back at the `componentDidMount`, we can see that we could also possibly get an error back from the API, rather than an array of ideas.

So let's write our new function to handle that possibility:

```js
// apiCalls.js

export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas');
      }
      return response.json();
    });
};
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

Fun fact: our fetch can fail in a couple ways! The way above, which is the one we're controlling, and a second way, which we don't have control over. You can see this second error by stopping your server or changing the url we're querying to `http://localhost:3002/api/v1/ideas` - it now reads "Failed to fetch".

Now that we know that this is working, let's test this `getIdeas` function!

### Testing the isolated fetch

In your `apiCalls.test.js` file, let's set up our tests.

```js
// apiCalls.test.js

import { getIdeas } from './apiCalls';

describe('getIdeas', () => {

});
```

We don't have to import React, because - remember - the file we're testing is just plain JavaScript, not a React component! We also don't need `shallow` or `mount`, for the same reason. All we need is the function we're testing.

Okay. So how do we know what we need to test?

Let's take a look at each line of our function.

```js
// apiCalls.js

export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas');
      }
      return response.json();
    });
};
```

Take a few minutes to talk it through with your partner.

<section class="call-to-action">
### Turn & Talk

What do you think you should test in the `getIdeas` function?
What's going on in each line?
What's the happy path?
What's the sad path?
</section>

Going through line by line, here's what I see to test:

* Fetch should be invoked with the correct URL
* If the response is good, we should get back an array of ideas (the happy path)
* If the response is bad, we should get back an Error with a message of "Error fetching ideas" (the sad path)

Let's set up those it blocks!

```js
// apiCalls.test.js

import { getIdeas } from './apiCalls';

describe('getIdeas', () => {

  it('should call fetch with the correct url', () => {

  });

  it('should return an array of ideas (HAPPY)', () => {

  });

  it('should return an error (SAD)', () => {

  });
});
```

Reading through my tests, it looks like I'm going to need to use some mocked data.

Let's set up a `beforeEach()` block to handle it.

```js
// apiCalls.test.js

import { getIdeas } from './apiCalls';

describe('getIdeas', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        id: 1,
        title: "Sweaters for pugs",
        description: "To keep them warm"
      }
    ];
  });

  it('should call fetch with the correct url', () => {

  });

  it('should return an array of ideas (HAPPY)', () => {

  });

  it('should return an error (SAD)', () => {

  });
});
```

Okay, so let's write our first test.

```js
// apiCalls.test.js

  it('should call fetch with the correct url', () => {
    getIdeas();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/ideas');
  });
```

We're going to run into some issues when this executes. Firstly, our test runner will fail and tell us that "toHaveBeenCalledWith" can only be used on a mocked jest function. And secondly, `fetch` won't be available when running our tests in the console; we won't have access to the real API endpoint. There are a bunch of libraries that you could use to handle this behavior, some common ones are [nock](https://github.com/node-nock/nock) or [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/).

Luckily for us, though, [Jest](https://facebook.github.io/jest) has some really great utilities for mocking built into it!

Let's rewrite `fetch`.

Okay. Let's really read our `getIdeas` function:

```js
// apiCalls.js

export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas');
      }
      return response.json();
    });
};
```

We know that `fetch` returns a Promise (because we can chain a `.then()` onto it). The Promise resolves into the response object. It looks like that response object has at least two values in it: a key of "ok" whose value is a boolean, and a key of "json" whose value is a function. That "json" function also returns a Promise, and _that_ Promise resolves into our array of ideas.

So let's write out our mocked fetch!

```js
// apiCalls.test.js

import { getIdeas } from './apiCalls';

describe('getIdeas', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        id: 1,
        title: "Sweaters for pugs",
        description: "To keep them warm"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getIdeas();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/ideas');
  });
})
```

<section class="note">
### Tangent: before & after blocks
Often times, you'll want to start from scratch after every `it` block runs in your test files. For example, in our components, if we have more than one test that manipulates our state, we might get some unexpected failures in later tests because we didn't start fresh with a clean default state. This is where `before` and `after` hooks come in handy. There are four hooks we can use to run some setup code at different points in our testing lifecycle:

* [beforeAll](https://facebook.github.io/jest/docs/api.html#beforeallfn) - will run once before any `it` blocks have been run
* [afterAll](https://facebook.github.io/jest/docs/api.html#afterallfn) - will run once after all `it` blocks have been run
* [beforeEach](https://facebook.github.io/jest/docs/api.html#beforeeachfn) - will run before every single `it` block
* [afterEach](https://facebook.github.io/jest/docs/api.html#aftereachfn) - will run after every single `it` block
</section>

WOWZA. Our test now passes! WOOHOO! Now let's get our next test passing.

Notice that we're still using the mock implementation of `fetch` that we set up in the `beforeEach()` block.

```js
// apiCalls.test.js

  it('should return an array of ideas (HAPPY)', () => {
    getIdeas()
    .then(results => expect(results).toEqual(mockResponse));
  });
```

Hopefully you're seeing that green checkmark :) The happy path has been tested! I feel pretty happy.  Notice though that the syntax is a bit odd because we have to use `.then` before we can make our assertion.  We can use a less verbose way using the `.resolves` [property](docs.google.com/spreadsheets/d/1hJqBIWJTBk36uEZgH-icjA9-sE2NT2Wr7q-qCqlpB-0/edit#gid=1720707264) in order to make the test a bit cleaner/easier to read. 

```js
// apiCalls.test.js

  it('should return an array of ideas (HAPPY)', () => {
    expect(getIdeas()).resolves.toEqual(mockResponse);
  });
```

Now we've got to test the sad path. Sad path tests are critical - if something unwanted happens, we need to make sure that we're handling it properly so our whole app doesn't just break.

Sad path tests help us make sure those eventualities are covered!

We're going to have to rewrite our `fetch` so that the object's "ok" key's value is false, because we WANT to trigger our error.

<section class="call-to-action">
### In Your Notebook

How would you rewrite the mock implementation of fetch?
</section>

Let's try it out.

```js
// apiCalls.test.js

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(getIdeas()).rejects.toEqual(Error('Error fetching ideas'));
  });
```

HECK YES! Notice this time we are using the `rejects` property.  Now that we've figured out how to isolate and test the `fetch` that gathers up all our ideas from the API, let's keep going.

### A note on error handling

When using fetch calls, there are two main times when we want to check for errors. The first is when the fetch itself rejects.

The second is when the fetch doesn't fail, but the response is not ok. In that case we should manually throw an error that we'll catch elsewhere.

So far, we've only handled the second instance.

Let's add a catch to our isolated fetches to handle when the fetch fails.

```js
// apiCalls.js

export const getIdeas = () => {
  return fetch('http://localhost:3001/api/v1/ideas')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching ideas');
      }
      return response.json();
    })
    .catch(error => {
      throw Error(error.message);
    })
};
```

And in our tests:

```js
// apiCalls.test.js

  // describe getIdeas
    it('SAD: should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'fetch failed'
        })
      });

      expect(getIdeas()).rejects.toEqual(Error('fetch failed'));
    });
```

<section class="checks-for-understanding">
### You try it!

Isolate and test the fetch that posts a new idea.

Isolate and test the fetch that deletes an idea based on its id.

_Hint: Put each of these fetches into its own `describe` block!_
</section>

Because `post` needs an options object, you will need to include that when checking to see if the fetch called that argument.  Here is a solution below:

```js
// apiCalls.test.js

import { getIdeas, postIdea } from './apiCalls';

describe('postIdea', () => {
  let mockIdea = {
    id: 1,
    title: "Sweaters for pugs",
    description: "To keep them warm"
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockIdea)
      });
    });
  });

  it('should fetch with the correct url', () => {
    const expected = [ 'http://localhost:3001/api/v1/ideas', {
      method: 'POST',
      body: JSON.stringify(mockIdea),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    postIdea(mockIdea);

    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
});
```

### Testing the component

Now that we've finished testing each of our fetches in isolation, what is left to test when we bring them into our `App` component? Let's focus on `getIdeas` for now.

Here's the part of App that's using `getIdeas`:

```js
// App.js

componentDidMount() {
  getIdeas()
    .then(ideas => this.setState({ ideas }))
    .catch(error => this.setState({ error: error.message }));
}
```

Since we've already tested that `getIdeas` works as we expect, all we have left to test is that the methods get called in the `componentDidMount`.

<section class="note">
### Note

I recommend not testing state changes in `componentDidUpdate`.  It gets complex fast, and even once you mock out what `getIdeas` returns, you can run into race conditions where asserting things about state doesn't always work. However, you **should** test that state has updated with other async methods you have created. 
</section>

`App.js` is bringing in `getIdeas` from `./apiCalls.js`. We can trick App into using mocked functions instead of the real ones!

When we export all our fetch functions from the real `apiCalls.js`, each of those functions is being added to an object, and that object is what we're importing at the top of `App.js`.

Now, we're going to interrupt that cycle and paste in our own object of mocked functions instead!

We're going to call `jest.mock('../apiCalls')`, which allows jest to overwrite any functions that are found in `apiCalls.js` as mock functions.  Let's also import and mock out what `getIdeas` returns and run that in a beforeEach.

```js
// App.test.js

import { getIdeas } from '../apiCalls'

jest.mock('../apiCalls.js')

describe('App', () => {
  beforeEach(() => {
    getIdeas.mockImplementation(() => {
      return Promise.resolve([{ id: 1, title: 'Idea', description: 'It\'s great' }])
    });
  });
});
```

So now, when App's `componentDidMount` runs its first line, it runs the jest function instead of the real one from `apiCalls`.

`shallow` calls `componentDidMount` automatically, so let's test to see if it has been called.

```js
// App.test.js

  it('should retrieve ideas after mounting', async () => {
    shallow(<App />);
    expect(getIdeas).toHaveBeenCalled();
  });
```

Cheers! Our componentDidMount has been tested.

Let's try out our first failing App test:

```js
// App.test.js

it('should update state when addIdea is called', () => {
    const wrapper = shallow(<App />);
    const mockIdea = { title: 'sweaters for pugs', description: 'why not?', id: Date.now() };
    const expected = [mockIdea];

    wrapper.instance().addIdea(mockIdea);

    expect(wrapper.state('ideas')).toEqual(expected);
});
```

Ooooookay. There are a few things we need to edit. This test is leftover from when we were starting out App's state with a hardcoded list of ideas. Now that we're getting our ideas from the server, we know that in our test suite App will start out with an array with just one idea - the one we're returning from our mocked out `getIdeas`!

So let's update the original test to look something more like this:

```js
// App.test.js

it('should update state when addIdea is called', () => {
  const wrapper = shallow(<App />);
  const mockIdea = { id: 2, title: 'Sweaters for pugs', description: 'Why not?' };
  const expected = [{id: 1, title: 'Idea', description: 'It\'s great'}, mockIdea];

  wrapper.instance().addIdea(mockIdea);

  expect(wrapper.state('ideas')).toEqual(expected);
});
```

Our test will still fail ... because we haven't mocked out `postIdea`! Try that out now.

<section class="call-to-action">
### With a Partner

Import and mock out your `postIdea` function in your test file. Try to get the test passing.
</section>

Below you can see that we have mocked out how postIdea works in the test itself.  (you could move it in the beforeEach, but this is the only test asking for it).  Notice we also used `async/await` because our postIdea method is asynchronous.  We want it to wait before we check out the state.

```js
  // App.test.js

  it('should update state with an idea when addIdea is called', async () => {
    postIdea.mockImplementation(() => {
      return Promise.resolve(
        { id: 2, title: 'Sweaters for pugs', description: 'Why not?' }
      );
    })
    const wrapper = shallow(<App />);
    const mockIdea = { id: 2, title: 'Sweaters for pugs', description: 'Why not?' };
    const expected = [{id: 1, title: 'Idea', description: 'It\'s great'}, mockIdea];

    await wrapper.instance().addIdea(mockIdea);

    expect(postIdea).toHaveBeenCalled();
    expect(wrapper.state('ideas')).toEqual(expected);
  });
```

## Summary

Moving the fetch into its own file and testing it in isolation allows us to streamline our component tests.

We make sure that the fetch works in its own test (`apiCalls.test.js`), and we make sure that the overall expected functionality works in our component tests (`App.test.js`).

## Final thoughts

As a rule of thumb, code is easier to test when it is doing less. By separating our API calls from component code, it’s easier to test the expected behavior of both pieces. By using the mocking and asynchronous expectations that are available in Jest, it’s easy to mimic the behavior of an API, and ensure that your application responds as you expect it should.

<section class="checks-for-understanding">
### Check for Understanding

Refactor the rest of your apiCalls tests into using async await where necessary!
</section>

You can find completed async testing by checking out the branch `async-complete` on this repo.
