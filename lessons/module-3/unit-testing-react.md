---
title: Unit Testing React Components
module: 3
length: 180
tags: react, testing
---

## Learning Goals

- Review differences between Unit testing/Integration Testing/Acceptance Testing
- Know how to add Enzyme to a project
- Know how to use Enzyme and Jest to take a snapshot of UI
- Know how to use Enzyme to simulate user behavior
- Know how to unit test a class method using Jest

## Vocab

- `Unit test` - Unit tests test the smallest unit of functionality, typically a method/function. For example, when you call a specific method on a class, you expect should a value to be returned. Unit tests should be focused on one particular feature
- `Integration test` - Integration tests build on unit tests by combining the units of code and testing that the resulting combination functions correctly.
- `Acceptance test` - Once an application is ready to use, it undergoes testing by the end user or client to verify that it meets the user expectations
- `Jest` - Jest is a JS framework created by Facebook that is included in React and acts as a test runner, assertion library, and mocking library.  It can also be used for snapshot testing. 
- `Enzyme` - Enzyme was created by Airbnb is a JS testing utility that makes it easier to assert, manipulate, and traverse your React component
- `Snapshot` - Snapshot testing is provided by Jest and allows you the ability to create a rendered ‘snapshot’ of a component and compare it to a previously saved ‘snapshot’
- `Mock` - Mocks are created in order to replicate the data or functions you would expect to have or be fired.  

## Unit Testing React Components

When testing React apps, or really when testing any kind of application, most of
the tests your write will be *unit tests*. Unit tests make sure that small,
isolated, parts (units) of our application behave as expected. The more we can
write our code in a way that is testable at the unit level, the easier it will
be to scale and extend our applications.

---
_**Your Turn**: We hear a lot about unit, integration, and acceptance tests.  What is the difference between the three of these? Take 5 minutes and see what you and your partner can find out._

---

---
_**Next Steps**: In your journal, write out why do we test.  What are the benefits of testing?  When should we test?  When should we not test?_

---

### Getting started

Let's continue working on the ideabox app we built together in class yesterday! You can start with a fresh, complete copy by cloning down [this repo](https://github.com/turingschool-examples/ideabox-testing).

```bash
git clone https://github.com/turingschool-examples/ideabox-testing.git
cd ideabox-testing
npm i
```

### Running Tests

This application was built using `create-react-app`.  This great thing about this is that it has a built in testing framework.  This that cannot be changed without ejecting from the boilerplate. Luckily, it's a pretty awesome test runner called `Jest`. [Read more about the Jest and React combo here](https://facebook.github.io/jest/docs/tutorial-react.html).

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
npm i enzyme -S
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

---
_**Stop and Think**: We've got everything setup to start writing tests.  But first, we need to think about what we need to test?  We answered this question previously, but think about what needs to be tested for our IdeaBox.  Should we test things like the UI?  What about methods we've created?_

---

### What should we test?

A general rule of thumb when thinking about testing is asking yourself what code did you write?  Did you write the JSX?  Then likely you should test that.  Did you write those methods?  Are you making changes to state?  You would likely want to test that as well.

When testing React, focus on these three main rules:
* Test your UI to make sure it is rendering the JSX you expect it to.
* Test the methods and the functionality it executes.
* Test changes in state to make sure things are updating correctly.

### Testing the Card Component

Let's focus on our first rule first and test our `Card` component.  We'll have to create a test file called `Card.test.js`. In `Card.test.js`, we'll start with a simple test to see if the `name` property is properly rendered in the component when passed in as a prop.

We want to import our `Card` component so we can test that.  We also want to import `shallow` from Enzyme.  This renders our component in a testing environment so that we can test it.  It allows you to test a component in isolation while also allowing you to test methods like `componentDidMount` and `componentDidUpdate`.  You will almost always want to start with `shallow`.  

Another way to render a component in a testing environment is using `mount`.  Read more about the differences between [shallow rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) and [full mounting](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md). `mount` will also render child elements, but you typically will not want to do this since you want to test these components in isolation.  We will write tests for every component so this is a mute point.  Think back to what a `unit test` is.  According to the docs, the few scenarios where you might want to use `mount` would be if you have to do some testing with a DOM API or need to test components that are wrapped in higher order components.  You will likely have few situations where you need to worry about this throughout the module.

```jsx
// Card.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders the title of the idea in <h1> tags', () => {
    const wrapper = shallow(<Card title="Bananas" />);
    const title = <h2>Bananas</h2>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
```

As previously mentioned, `create-react-app` uses [Jest](http://facebook.github.io/jest/) instead of Mocha. That said, you'll notice that the syntax is surprising similar. One difference is that Jest includes its own expectation library which is similar to Chai's `expect` syntax (as opposed to the `assert` syntax).  

[Jest Assertions](https://facebook.github.io/jest/docs/api.html)  

If you run `npm test` you should see your one test pass (two if you still have the generic App test). You can keep this process running. The test suite will automatically run whenever you make a change to the test file.

---
_**Fun Fact**: Let's say we changed that `h2` tag to an `h3`.  It's going to fail.  If we wanted to debug and see what our `shallow` was actually rendering, we can add this line in our test._

```js
    console.log(wrapper.debug());
```
---

---
_**Fun Fact 2**: If you want to keep seeing those friendly green checkmarks, we can add a "verbose" flag to our test script. In your `package.json`, under `scripts`, edit the `"test"` script:_

```js
  "test": "react-scripts test --verbose"
```
---

If you stop your test runner (type `q` into your terminal) and then restart it (`npm test`), you should see the "should" statement from your it testing block.

We could continue to write tests this way for every single element but...there is actually a much better way of doing this.  Enter the world of snapshot testing!

<!-- This test works, but you might be thinking right now, 'hey don't my PropTypes cover that kind of behavior?' You're absolutely right! If you're using PropTypes throughout your application you really don't need these kinds of tests. In fact, there is a much simpler way of testing your UI, snapshot tests! -->


### Snapshot testing

Once again, let's look at the docs to find out what [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) is in Jest.  Reading throught the docs, we find out that we can use snapshot tests to compare against a previous 'snapshot' of what our component looked like. Snapshot tests are not really TDD but it is a way to double check if a change was made to the UI unexpectedly.  If something has changed, the snapshot will fail. If we really did mean to make that change, we can `update` our snapshot to use the newest version. 

First we'll need to install one more package in order to convert our Enzyme wrappers to a format that is compatible with Jest snapshot testing.

```bash
npm install enzyme-to-json --D
```

Lastly, in order to use this serializer in jest, we need to add this line to our Jest configuration in our `package.json`.

```js
  "jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }
```

Everything should be set up now so that we can run our snapshot tests.  Let's add the following test:

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Card
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

It should look like this:

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Card should match the snapshot with all data passed in correctly 1`] = `
<section
  className="card"
>
  <h3>
    Bananas
  </h3>
  <p>
    B A N A N A S
  </p>
  <button
    onClick={[Function]}
  >
    🗑
  </button>
</section>
`; 
```

How do we make this test fail? We'd have to change what our component actually looks like. Let's the h3 tag to an h2 tag. Do that now:

```jsx
// Card.js

const Card = ({ id, title, description, removeIdea }) => {
  return (
    <section className='card'>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  )
}
```

Running the tests now, you should see a failure for the snapshot test, with the differences between the two snapshots in the console. Here is where you have to consider, 'am I ok with those changes?' If so, you can update the tests by typing `u` while `Jest` is still in watch mode. Alternatively, you can restart your test suite and run `npm test --updateSnapshot`.

---
_**Note**: This also tests to see if we have changed our className as well!  However, it does not test if we changed the name of the function._

---

---
_**Your Turn**: Write snapshot tests for the rest of your components as well including your App, Form, and Ideas components.  Remember to pass the props necessary in order for your wrapper to render correctly._

---

### Testing for dynamic changes

When testing your components, you're mainly testing presentation logic. Given our UI will change based on application data (our component props), we'll want to make sure we have tests for any conditional logic or dynamic changes.

We'll learn about conditional rendering in React III but for now, let's add some conditional rendering into our IdeaBox, just so you can see how we'd test it.

Imagine our Card component having an extra property, called "isFavorite" - and if "isFavorite" is true, then the Card will have an additional class of "favorite".

```jsx
// Card.js

import React from 'react';
import './Card.css';

const Card = ({ id, title, description, removeIdea, isFavorite }) => {
  var favoriteClass = isFavorite ? 'favorite' : 'card'

  return (
    <section className={favoriteClass}>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  )
}

export default Card;
```

Don't worry too much about what's going on here; we'll see what that strange syntax is doing in our React III lesson.

Just know that, when `isFavorite` is passed into Card with a value of `true`, the Card will have a class of "favorite".  If the value is `false` or `undefined`, then the class will be `card`.

We can write a second snapshot test that looks at a different wrapper instance:

```jsx
// Card.test.js

it('should match the favorited snapshot', () => {
    const wrapper = shallow(
      <Card
        title='bananas'
        description='b a n a n a s'
        id={3}
        deleteIdea={jest.fn()}
        isFavorite={true}
      />
    )

    expect(wrapper).toMatchSnapshot();
  });
```

When both tests pass, we know that the two different possible versions of our Card are both rendering properly.

### Testing Button Functionality

We currently only have one button, but how do we know it's doing what we expect it to do?

First, we should start by being clear about what should happen. If you look closely at the code, you'll see that the `deleteIdea` property is being passed in. It stands to reason that this function should be called when that button is tested.

At this point, we don't necessarily care what the functions are doing -- just that they are being called appropriately. We'll test what the function is doing later when we test the `App` component where the method lives.  This is where **mocks** come in handy.

Mocks are stubbed-in or "faked" functionality that allows us to unit test specific parts of our code without having to worry about others. A mock will override the behavior of a specific function and provide you with utilities to test the interaction with the mock instead.

You'll find when testing applications that use a framework like React, you'll need to make a significant amount of mocks. And that's ok! Sometimes it may feel like you're faking too much of your code by mocking so many pieces of functionality. The general rule here is if you're not testing the actual behavior **within** the code you are mocking, it's perfectly fine to mock it.

So let's use mocks to test that the removeIdea function we passed in is being called appropriately, and with the correct argument.

---
_**Your Turn**: Before looking at the test below, think about how you might test this.  You don't need to write out the specific code, but think about what needs to be tested.  In english form, write out in your notebook you might set up this test._

---

A common practice to think about and follow through when writing out tests are:
* `Setup` - What do we need to render the component (aka *shallow* or *mount*).  What data needs to be mocked?
* `Execution` - Let's run the command or simulate the action.
* `Expectation` - There is where our assertion happens.  After running our function, what did we expect to happen?

Consider the following test:

```jsx
  it('should call the deleteIdea prop with the Card\'s id when clicked', () => {
    // Setup
    const removeIdeaMock = jest.fn();
    const wrapper = shallow(
      <Card
        title="Bananas"
        description="blah blah bloop"
        id={7}
        removeIdea={removeIdeaMock}
      />
    );
  
    // Execution
    wrapper.find('button').simulate('click');
  
    // Expectation
    expect(removeIdeaMock).toBeCalledWith(7);
  });
```

- `jest.fn()` Mock functions allow you to spy on the behavior of a function that is called indirectly by some other code, rather than testing the output.  Read more about it [here](https://jestjs.io/docs/en/jest-object.html#jestfnimplementation).  
- `wrapper.find('.btn-remove').simulate('click');` will simulate a click event.  This uses specific methods that enzyme gives us.  This includes [find](https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html) and [simulate](https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html)
- `expect(removeIdeaMock).toHaveBeenBeenCalledWith([arg])` asks our mock function if it was called with a specific argument. Here are the [docs](https://jestjs.io/docs/en/expect) to see a list of different methods available to you from `Jest`.

### Testing a class-based component's method

---
_**Your Turn**: Let's focus our testing now on our `App` component.  With the person next to you, discuss what might be similar with our functional component?  What might be different?  (Go back to your notes.  We've actually discussed this earlier!)_ 

---

In our App component we have two class methods, `addIdea` and `deleteIdea`. Think about what each of those methods does.

True to unit-testing-nature, we'd like to test both of those methods in isolation. (AKA we don't want to only be able to test it by bringing in our whole Form component, finding the inputs, simulating changes, finding the button, simulating a click, and then seeing whether or not `addIdea` was called. That would be an integration test; much harder to do!)

Fortunately, [Enzyme](https://airbnb.io/enzyme/docs/api/ReactWrapper/instance.html) has a really handy function that lets us call a method from the instance of a component: `instance()`.

Calling `instance()` on our wrapper will give us access to all of the class instance methods. In this case, `addIdea` and `deleteIdea` (and also `setState`, which will be useful in a moment)!

---
_**Important Note**: REMEMBER! `instance()` can only be used on class components.  `instance()` returns `null` for stateless functional components.  Sooo....don't include methods in your functional components!_ 

---

Let's write a test for `addIdea` in our `App.test.js` file:

```jsx
// App.test.js

describe('App', () => {
  it('should update state with an idea when addIdea is called', () => {
    // Setup
    const wrapper = shallow(<App />);
    const mockIdea = { title: 'sweaters for pugs', description: 'why not?', id: Date.now() };
    const expected = [mockIdea];

    // Expectation
    expect(wrapper.state('ideas')).toEqual([]);

    // Execution
    wrapper.instance().addIdea(mockIdea);

    // Expectation
    expect(wrapper.state('ideas')).toEqual(expected);
  });
});
```

- `wrapper.state([arg])` returns the state based what key you give as an argument.  If there is no argument included, it returns the entire state.  Read the docs [here](https://airbnb.io/enzyme/docs/api/ReactWrapper/state.html)!

### Homework: Finish testing your ideabox

- Write a unit test for deleteIdea
- Can you write the tests and implementation for the "favorite" button (that doesn't exist yet)?
- Write a test that makes sure that our Ideas component shows the correct number of ideas.
- Make sure that any other functions or interactions (ie. button clicks, input changes) are tested (especially in your form).
- Not shown: Can you test and implement a counter that keeps track of the number of ideas in the list?
