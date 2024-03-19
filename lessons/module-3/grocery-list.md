---
title: Unit Testing React Components
module: 3
length: 120
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

**Golden Rule**: No copy and pasting. Part of the point of this exercise is to
build up some muscle memory.

When testing React apps, or really when testing any kind of application, most of
the tests your write will be *unit tests*. Unit tests make sure that small,
isolated, parts (units) of our application behave as expected. The more we can
write our code in a way that is testable at the unit level, the easier it will
be to scale and extend our applications.

---
**_Turn and talk_: We hear a lot about unit, integration, and acceptance tests.
What is the difference between the three of these. Take 5 minutes and see what
you can find out**

---

### Write in a notebook

Write your own answers to the following questions. Take 5 minutes, then we'll
discuss as a group.

1) Why do we test?

2) Who benefits from our testing?

3) When should we test?

4) When do we not need to test?

### Setting Up the Project

Let's create a react app called `grocery-list`:

```bash
create-react-app grocery-list
```

Next `cd` into the `grocery-list` directory and lets get to work.  

### Clean Up Extra Stuff

Out of the box, `create-react-app` hooks you up with some boilerplate HTML and CSS that 
we won't be using. Let's clean up the existing files before we get started. First, you 
can delete the `logo.svg` file. Next, update the following files to match below:  

```css
<!-- App.css -->

.App {
  margin: auto;
  max-width: 500px;
}
```

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>blah<div>
    );
  }
}

export default App;
```

### Running Tests

As we mentioned before, `create-react-app` has a built in testing framework that cannot 
be changed without ejecting from the boilerplate. Luckily, it's a pretty awesome test 
runner called `Jest`. [Read more about the Jest and React combo here](https://facebook.github.io/jest/docs/tutorial-react.html).

In order to run the tests, type `npm test`. Normally, our suite runs and then we return 
to the command line. With Create React App, `npm test` starts up a server that is 
constantly watching for changes. When you modify a file, the test suite will 
automatically rerun. Even better — by default, it will only watch files that have 
changed since the last time you made a git commit.

Try it out - run `npm test` to fire up the testing server. Currently our app has only 
one test file, `App.test.js`. Take a few seconds to look at that file.

**Stop and Read**: [This section on file naming conventions](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/running-tests.md#filename-conventions).  

Traditionally, we have always put our tests into their own directory. That is absolutely 
still possible, but the Facebook team makes some good points for keeping test files in 
the same directory as their implementation. Whatever you decide to do in the future is 
up to you, but let's go with the facebook convention for the purposes of this tutorial.  

Jest is great for unit testing your app, but according to the [react docs on testing](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/running-tests.md) 
they "recommend that you use a separate tool for browser end-to-end tests if you need 
them. They are beyond the scope of Create React App." This means implementing our super 
friend `Enzyme`!  

### Setting up Enzyme

Enzyme is a fantastic tool for testing our React components in a virtual way,
without actually having to use a browser. This makes running tests related to
our UI much faster. First off, let's get Enzyme installed:

```bash
npm install --save-dev enzyme
```

You're also going need the enzyme adapter for the version of React that you're
using. As of this writing, it's enzyme-adapter-react-16, but that will change in
the future, when create-react-app starts using version 17 of React. Just make sure 
you have the right one.

```bash
npm install --save-dev enzyme-adapter-react-16
```

As a last step, we need to make sure that the adapter is configured before our
test suite runs. Setting up some kind of configuration before a test suite runs
is a really common task actually. So common in fact, that the create-react-app
team has a specific way you need to do this.

Inside of `src/`, create a file called `setupTests.js`.

Jest will run this file before your test suite starts up, so it's the ideal place
to do any kind of configuration or setup for the test suite. Add the following
to `setupTests.js`:

```js
// src/setupTests.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
**Note** be sure to restart your test runner after adding this configuration, otherwise it won't take effect.

Great! Now we're all ready to start using Enzyme to test our React components!

### Big Picture

For this tutorial, we are building a app that allows us to make and edit a grocery list. 
In it, you can add groceries to a list, mark them `starred` or `purchased`, and filter 
based on `starred` or `purchased` tags.  

### Building and Testing the Grocery Component

We're going to start by test driving a single `<Grocery>` React component.

![React Component](/assets/images/lessons/unit-testing-react/grocery-component.gif)

Notice the following:

- The class is changing both when the component is "starred" as well as "purchased."
- The "Purchase" button says "Unpurchase" when the item is purchased.
- The "Star" button says "Unstar" when the item is starred.

To get started, make the following two files in the `src` folder of your project:

- `Grocery.js`
- `Grocery.test.js`

In `Grocery.js`, let's add a simple component:

```jsx
import React from 'react';

const Grocery = ({ name, quantity, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className="Grocery">
      <h3>{name}</h3>
    </article>
  );
};

export default Grocery;
```

It's a functional, stateless component. Right now, we're not using a number of the 
properties we're passing. Don't worry, we will.

In `Grocery.test.js`, we'll start with a simple test to see if the `name` property 
is properly rendered in the component when passed in as a prop.

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import Grocery from './Grocery';

describe('Grocery', () => {

  it('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true);
  });

});
```

As previously mentioned, `create-react-app` uses [Jest](http://facebook.github.io/jest/) 
instead of Mocha. That said, you'll notice that the syntax is surprising similar. One 
difference is that Jest includes its own expectation library which is similar to Chai's 
`expect` syntax (as opposed to the `assert` syntax).  

[Jest Assertions](https://facebook.github.io/jest/docs/api.html)  

If you run `npm test` you should see your one test pass (two if you still have the 
generic App test). You can keep this process running. The test suite will automatically 
run whenever you make a change to the test file.

This test works, but you might be thinking right now, 'hey don't my PropTypes
cover that kind of behavior?' You're absolutely right! If you're using PropTypes
throughout your application you really don't need these kinds of tests. In fact,
there is a much simpler way of testing your UI, snapshot tests!

### Snapshot testing

The first thing to realize is that snap shot tests are not really TDD. Instead,
we use snapshot tests to compare against a previous 'snapshot' of what our
component looked like. If something has changed, the snapshot will fail. Then,
if we've expected that change, we can `update` our snapshot to use the newest
version. Add the following test:

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import Grocery from './Grocery';

describe('Grocery', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Grocery 
        name="Bananas" 
        quantity="7"
        purchased="false"
        starred="false"
        onStar={jest.fn()}
        onPurchase={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
```

Go ahead and run this test. It passes, and you should see the line `1 snapshot
created`

Ok, well that's great, but what are we actually testing? The first time we run
the snapshot test, it doesn't have anything to compare against, so it records
the snapshot, and puts it in a new directory `__snapshots__/` next to wherever
your test lives. Go ahead and look at this now.

How do we make this test fail? We'd have to change what our component actually
looks like. Do that now:

```js
// Grocery.js

import React from 'react';

function Grocery({ name, quantity, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className="Grocery">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
    </article>
  );
}

export default Grocery;
```

Running the tests now, you should see a failure for the snapshot test, with the
differences between the two snapshots in the console. Here is where you have to
consider, 'am I ok with those changes?' If so, you can update the tests by
typing `u` while `Jest` is still in watch mode. Alternatively, you can restart
your test suite and run `npm test --updateSnapshot`.

### Testing for dynamic changes  

When you're testing your components, you're mainly testing presentation logic. Given our UI 
will change based on application data (our component props), we'll want to make sure we 
have tests for any conditional logic or dynamic changes. For example, our grocery component 
changes visually based on whether or not the grocery item has been starred or purchased. 

We could start out with a simple test to see if it has the appropriate class if it's starred.

```jsx
it('should have a className of "starred" if is starred', () => {
  const wrapper = shallow(
    <Grocery name="Bananas" starred={true} />
  );

  expect(wrapper.is('.starred')).toEqual(true);
});
```

This will fail. To fix it, we need to set up a conditional within our component that checks 
if the property `starred` has been passed in as a prop. Let's be fancy and use either a 
ternary or an `&&` condition in a template literal interpolation in `Grocery.js`.

```jsx
<article className={`Grocery ${starred ? 'starred' : ''}`}>
```

```jsx
<article className={`Grocery ${ starred && 'starred' }`}>
```

Try both of those out and verify that they get the test passing. Then let the uneasy feeling 
settle in as you consider that as time goes on, you'll have to do this repeatedly — first 
with `purchased` and then possibly with more properties as requirements change down the line.

If you want, you can add some css that will reflect state changes:

```bash
touch src/Grocery.css
```

```css
.Grocery {
  border: 1px solid rgb(91,126,154);
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em;
}

.Grocery h3 {
  margin-top: 0;
}

.Grocery.purchased {
  opacity: 0.5;
}

.Grocery.starred {
  background-color: rgb(91,126,154);
  color: rgb(160,182,196);
}
```

### Testing the Button Functionality

So, the buttons say the right things. That's cool, but how do we know that they do 
the things we expect them to?

First, we should start by being clear about what should happen. If you look closely 
at the code, you'll see that `onPurchase`, `onStar`, and `onRemove` properties are being 
passed in. It stands to reason that these functions should be called when one of those 
fancy buttons we just made are tested.

At this point, we don't necessarily care what the functions are doing -- just that they 
are being called appropriately. This is where **mocks** come in handy. Mocks are stubbed-in 
or "faked" functionality that allows us to unit test specific parts of our code without having 
to worry about others. A mock will override the behavior of a specific function and provide 
you with utilities to test the interaction with the mock instead.

You'll find when testing applications that use a framework like React, you'll need to make 
a significant amount of mocks. And that's ok! Sometimes it may feel like you're faking too 
much of your code by mocking so many pieces of functionality. The general rule here is if 
you're not testing the actual behavior **within** the code you are mocking, it's perfectly 
fine to mock it.

So let's use mocks to test that the functions we passed in are being called appropriately.

Consider the following test:

```jsx
it('should call the onPurchase prop when clicked', () => {
  const onPurchaseMock = jest.fn();

  const wrapper = mount(
    <Grocery
      name="Bananas"
      purchased={true}
      onPurchase={onPurchaseMock}
    />
  );

  wrapper.find('.Grocery-purchase').simulate('click');

  expect(onPurchaseMock).toBeCalled();
});
```

- `jest.fn()` returns a special mock function that we can use but also test to see if 
  it was called.
- `wrapper.find('.Grocery-purchase').simulate('click');` will simulate a click event.
- `expect(onPurchaseMock).toBeCalled()` asks our mock function if it was called. Ideally, 
  when we wire it up to the appropriate button, this will be true.
- We are now using the `mount` function to create our wrapper rather than the `shallow` 
  rendering we've used previously. Doing a full mount will allow us to more easily test 
  methods on our components. Read more about the differences between [shallow rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) 
  and [full mounting](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md).

#### Your Turn

- Can you add an `onClick` function to the "Purchase" button and be the hero who makes 
  the test pass?
- We likely want to pass in a grocery ID or grocery name to the `onPurchase` method so 
  we can keep track of what has been purchased. Can you add an assertion to the previous 
  test to check that `onPurchaseMock` was called with the correct arguments? 
  ([Hint](https://facebook.github.io/jest/docs/expect.html#content))
- Can you write the tests and implementation for the "Star" and "Remove" buttons?

### Testing a class method

So far, we've only been concerned with the tests for this small, stateless
component. What about testing our class components? How will that differ? Take a
look again at our `App.js` file (with some new features added in):

```jsx
// App.js

import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceries: []
    }
  }

  addGrocery = (grocery) => {
    const newGrocery = {...grocery, starred: false}

    this.setState({
      groceries: [...this.state.groceries, newGrocery]
    });
  }

  groceryList = () => (
    this.state.groceries.map(grocery => (
      <Grocery {...grocery} />
    ))
  );

  render() {
    return (
      <div>
        <GroceryForm addGrocery={this.addGrocery} />
        { groceryList() }
      </div>
    );
  }
}

export default App;
```

Here, our App is bit more full featured, with two class methods. This first adds
Groceries to our state, and the second gives us a list of JSX elements. What
we'd like to be able to do is test those methods in isolation. Fortunately,
Enzyme has a really handy tool for doing just that, `instance()`.

Calling `instance()` on our wrapper will give us access to all the class' instance methods, in this case, `addGrocery` and `groceryList`. Let's write a test for `addGrocery`.

```jsx
// App.test.js

describe('App', () => {
  it('should update the state with a grocery when addGrocery is called', () => {
    // Setup
    const wrapper = shallow(<App />)
    const mockGrocery = { name: 'apples', quantity: '10' }
    const expected = [{name: 'apples', quantity: '10', starred: 'false'}]

    // Execution
    wrapper.instance().addGrocery(mockGrocery)

    // Expectation
    expect(wrapper.state('groceries')).toEqual(expected)
  })
})
```

Now, see if you can write a test for the other method, on your own!

### Homework: Implementing the Grocery List

![](/assets/images/lessons/unit-testing-react/grocery-list-component.gif)

The list should have the following functionality (test driven, if you can):

- It has the GroceryForm that we're calling in App.js
- It shows all of the groceries. Can you test to make sure that it shows the appropriate number of groceries?
- There is a "Clear Groceries" button that is disabled unless there are one or more groceries on the list.
- When the "Clear Groceries" button has been pressed the `onClearGroceries` property function should be called.
- Not shown: Can you test and implement a counter that keeps track of the number of groceries in the list?
