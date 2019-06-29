---
title: Unit Testing React Components
module: 3
length: 180
tags: react, testing
---

## Agenda

- Discuss Unit testing vs Integration Testing vs Acceptance Testing
- Learn what Jest is why it's used
- Learn what Enzyme is it's used
- Use Jest and Enzyme to take a snapshot of the UI
- Use Jest and Enzyme to test that a function was called on click
- Use Jest and Enzyme to unit test individual functions

## Learning Goals

- Know how to add Enzyme to a project
- Know how to use Enzyme and Jest to take a snapshot of UI
- Know how to use Enzyme to simulate user behavior
- Know how to unit test a class method using Jest

## Vocab

- Unit test
- Integration test
- Acceptance test
- Jest
- Enzyme
- Snapshot
- Mock

## Unit Testing React Components

When testing React apps, or really when testing any kind of application, most of
the tests your write will be *unit tests*. Unit tests make sure that small,
isolated, parts (units) of our application behave as expected. The more we can
write our code in a way that is testable at the unit level, the easier it will
be to scale and extend our applications.

---

**_Turn and talk_: We hear a lot about unit, integration, and acceptance
tests.  What is the difference between the three of these. Take 5 minutes and
see what you can find out**

---

### Write in a notebook

Write your own answers to the following questions. Take 5 minutes, then we'll
discuss as a group.

1) Why do we test?

2) Who benefits from our testing?

3) When should we test?

4) When do we not need to test?

### Getting started

Let's continue working on the ideabox app we built together in class yesterday! You can start with a fresh, complete copy by cloning down [this repo](https://github.com/turingschool-examples/ideabox-testing).

### Running Tests

As we mentioned before, `create-react-app` has a built in testing framework that cannot be changed without ejecting from the boilerplate. Luckily, it's a pretty awesome test runner called `Jest`. [Read more about the Jest and React combo here](https://facebook.github.io/jest/docs/tutorial-react.html).

In order to run the tests, type `npm test`. Normally, our suite runs and then we return to the command line. With Create React App, `npm test` starts up a server that is constantly watching for changes. When you modify a file, the test suite will automatically rerun. Even better — by default, it will only watch files that have changed since the last time you made a git commit.

Try it out - run `npm test` to fire up the testing server. Currently our app has only one test file, `App.test.js`. Take a few seconds to look at that file.

**Stop and Read**: [This section on file naming
conventions](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/running-tests.md#filename-conventions).  

Traditionally, we have always put our tests into their own directory. That is absolutely still possible, but the Facebook team makes some good points for keeping test files in the same directory as their implementation. Whatever you decide to do in the future is up to you, but let's go with the facebook convention for the purposes of this tutorial.  

Jest is great for unit testing your app, but according to the [react docs on testing](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/running-tests.md)
they "recommend that you use a separate tool for browser end-to end tests if you need them. They are beyond the scope of Create React App." This means implementing our super friend `Enzyme`!  

### Setting up Enzyme

Enzyme is a fantasic tool for testing our React components in a virtual way, without actually having to use a browser. This makes running tests related to our UI much faster. First off, let's get Enzyme installed:

```bash
npm install enzyme --save-dev
```

You're also going need the enzyme adapter for the version of React that you're using. As of this writing, it's enzyme-adapter-react-16, but that will change in the future, when create-react-app starts using version 17 of React. Just make sure you have the right one.

```bash
npm install enzyme-adapter-react-16 --D
```

Hint: the `--D` flag is the same as the `--save-dev` flag - just shorter!

As a last step, we need to make sure that the adapter is configured before our test suite runs. Setting up some kind of configuration before a test suite runs is a really common task actually. So common in fact, that the create-react-app team has a specific way you need to do this.

Inside of `src/`, create a file called `setupTests.js`.

Jest will run this file before your test suite starts up, so it's the ideal place to do any kind of configuration or setup for the test suite. Add the following to `setupTests.js`:

```js
// src/setupTests.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

**Note** be sure to restart your test runner after adding this configuration, otherwise it won't take effect.

Great! Now we're all ready to start using Enzyme to test our React components!

### Testing the Card Component

First, we'll have to create a test file called `Card.test.js`. In `Card.test.js`, we'll start with a simple test to see if the `name` property is properly rendered in the component when passed in as a prop.

```js
// Card.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders the title of the idea in <h1> tags', () => {
    const wrapper = shallow(<Card title="Bananas" />);
    const title = <h1>Bananas</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
```

As previously mentioned, `create-react-app` uses [Jest](http://facebook.github.io/jest/) instead of Mocha. That said, you'll notice that the syntax is surprising similar. One difference is that Jest includes its own expectation library which is similar to Chai's `expect` syntax (as opposed to the `assert` syntax).  

[Jest Assertions](https://facebook.github.io/jest/docs/api.html)  

If you run `npm test` you should see your one test pass (two if you still have the generic App test). You can keep this process running. The test suite will automatically run whenever you make a change to the test file.

If you want to keep seeing those friendly green checkmarks, we can add a "verbose" flag to our test script. In your `package.json`, under `scripts`, edit the `"test"` script:

```js
  "test": "react-scripts test --verbose"
```

If you stop your test runner (type `q` into your terminal) and then restart it (`npm test`), you should see the "should" statement from your it testing block.

<!-- This test works, but you might be thinking right now, 'hey don't my PropTypes cover that kind of behavior?' You're absolutely right! If you're using PropTypes throughout your application you really don't need these kinds of tests. In fact, there is a much simpler way of testing your UI, snapshot tests! -->

### What to test

Let's stop for a moment and consider: when we're testing our components, what do we even test at all?

What does a component do? They all render something to the page. Some of them have their own methods. Those are good places to start!

Let's begin by testing the UI.

### Snapshot testing

The first thing to realize is that snap shot tests are not really TDD. Instead, we use snapshot tests to compare against a previous 'snapshot' of what our component looked like. If something has changed, the snapshot will fail. Then, if we've expected that change, we can `update` our snapshot to use the newest version. Add the following test:

```js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow( <Card
      title="Bananas"
      description="B A N A N A S"
      id={3}
      deleteIdea={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
```

Go ahead and run this test. It passes, and you should see the line `1 snapshot created`

Ok, well that's great, but what are we actually testing? The first time we run the snapshot test, it doesn't have anything to compare against, so it records the snapshot, and puts it in a new directory `__snapshots__/` next to wherever your test lives. Go ahead and look at this now.

How do we make this test fail? We'd have to change what our component actually looks like. Let's change the description to be an h4 instead of a p tag. Do that now:

```js
// Card.js

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}
```

Running the tests now, you should see a failure for the snapshot test, with the differences between the two snapshots in the console. Here is where you have to consider, 'am I ok with those changes?' If so, you can update the tests by typing `u` while `Jest` is still in watch mode. Alternatively, you can restart your test suite and run `npm test --updateSnapshot`.

### Testing for dynamic changes

When testing your components, you're mainly testing presentation logic. Given our UI will change based on application data (our component props), we'll want to make sure we have tests for any conditional logic or dynamic changes.

We'll learn about conditional rendering in React III. For now, let's add some conditional rendering into our IdeaBox, just so you can see how we'd test it.

Let's say that a Card could be created with an extra property, called "isFavorite" - and if "isFavorite" is true, then the Card will have an additional class of "favorite".

```js
// Card.js

import React from 'react';
import './Card.css';

const Card = ({ title, description, id, deleteIdea, isFavorited }) => {
  return (
    <div className={`card ${isFavorite && 'favorite'}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card;
```

Don't worry too much about what's going on here; we'll see what that strange syntax is doing in our React III lesson.

Just know that, when `isFavorited` is passed into Card with a value of `true`, the Card will have a class of both "card" and "favorite".

We could start out with a simple test to see if a card has the appropriate class if it's starred.

```js
it('should have a className of "favorite" if isFavorite', () => { const
  wrapper = shallow( <Card title="Bananas" isFavorite={true} />);

  expect(wrapper.is('.favorite')).toEqual(true);
});
```

Alternatively, we could write a second snapshot test that looks at a different wrapper instance:

```js
// Card.test.js

it('should match the favorited snapshot', () => {
    const wrapper = shallow(
      <Card
        title='bananas'
        description='b a n a n a s'
        id={3}
        deleteIdea={jest.fn()}
        isFavorited={true}
      />
    )

    expect(wrapper).toMatchSnapshot();
  });
```

When both tests pass, we know that the two different possible versions of our Card are both rendering properly.

### Testing Button Functionality

We currently only have one button, but how do we know it's doing what we expect it to do?

First, we should start by being clear about what should happen. If you look closely at the code, you'll see that the `deleteIdea` property is being passed in. It stands to reason that this function should be called when that button is tested.

At this point, we don't necessarily care what the functions are doing -- just that they are being called appropriately. This is where **mocks** come in handy.

Mocks are stubbed-in or "faked" functionality that allows us to unit test specific parts of our code without having to worry about others. A mock will override the behavior of a specific function and provide you with utilities to test the interaction with the mock instead.

You'll find when testing applications that use a framework like React, you'll need to make a significant amount of mocks. And that's ok! Sometimes it may feel like you're faking too much of your code by mocking so many pieces of functionality. The general rule here is if you're not testing the actual behavior **within** the code you are mocking, it's perfectly fine to mock it.

So let's use mocks to test that the removeIdea function we passed in is being called appropriately, and with the correct parameter.

Consider the following test:

```js
it('should call the deleteIdea prop with the Card\'s id when clicked', () => {
  const deleteIdeaMock = jest.fn();

  const wrapper = shallow(
    <Card
      title="Bananas"
      description="blah blah bloop"
      id={7}
      deleteIdea={deleteIdeaMock}
    />
  );

  wrapper.find('button').simulate('click');

  expect(deleteIdeaMock).toBeCalledWith(7);
});
```

- `jest.fn()` returns a special mock function that we can use but also test to see if it was called.
- `wrapper.find('.btn-remove').simulate('click');` will simulate a click event.
- `expect(removeIdeaMock).toBeCalled()` asks our mock function if it was called. Ideally, when we wire it up to the appropriate button, this will be true.
- We are now using the `mount` function to create our wrapper rather than the `shallow` rendering we've used previously. Doing a full mount will allow us to more easily test methods on our components. Read more about the differences between [shallow rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) and [full mounting](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md).

### Testing a class-based component's method

So far, we've only been concerned with the tests for this small, function-based component. What about testing our class components? How will that differ?

Let's consider what we need to test:
- UI (our `render` method)
- Any conditional rendering
- Events (like testing that button click in the Card component)
- All the class methods we created for our component

Here, our App component has two class methods, `addIdea` and `deleteIdea`. Think about what each of those methods does.

True to unit-testing-nature, we'd like to test both of those methods in isolation. (AKA we don't want to only be able to test it by bringing in our whole Form component, finding the inputs, simulating changes, finding the button, simulating a click, and then seeing whether or not `addIdea` was called. That would be an integration test; much harder to do!)

Fortunately, Enzyme has a really handy function that lets us call a method from the instance of a component: `instance()`.

Calling `instance()` on our wrapper will give us access to all the class instance methods. In this case, `addIdea` and `deleteIdea` (and also `setState`, which will be useful in a moment)!

Let's write a test for `addIdea`:

```js
// App.test.js

describe('App', () => {
  it('should update state with an idea when addIdea is called', () => {
    // Setup
    const wrapper = shallow(<App />);
    const mockIdea = { title: 'sweaters for pugs', description: 'why not?', id: Date.now() };
    const expected = [mockIdea];

    // Execution
    wrapper.instance().addIdea(mockIdea);

    // Expectation
    expect(wrapper.state('ideas')).toEqual(expected);
  });
});

```

Looking at the above code, you'll see some comments that say "Setup", "Execution", and "Expectation". These describe each of the phases of our test.

During "setup", we create the "before" conditions of our component.

In "execution", we run the piece of code we're trying to test.

In "expectation", we declare what changes we expect to see as a result of the execution phase.

So, in the example from above, we're creating our instance of App. We are creating a mocked out new idea. We're calling `addIdea` from this new instance of App, passing in our new mocked idea. And finally we're checking to see if the new idea was added to state.

### Homework: Finish testing your ideabox

- Write a unit test for deleteIdea
- Can you write the tests and implementation for the "favorite" button (that doesn't exist yet)?
- Write a test that makes sure that our Ideas component shows the correct number of ideas.
- Make sure that any other functions or interactions (ie. button clicks, input changes) are tested.
- Not shown: Can you test and implement a counter that keeps track of the number of ideas in the list?
