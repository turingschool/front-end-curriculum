---
title: Unit Testing React Components
module: 3
length: 180
tags: react, testing
---

## Learning Goals

- Review differences between Unit testing/Integration Testing/Acceptance Testing
- Know how to add Enzyme to a project
- Become familiar with using Enzyme & Jest docs
- Go over the different ways of testing including:
  - Creating a snapshot of the UI
  - Utilizing Enzyme to simulate user behavior
  - Test class methods using Jest

## Vocab

- `Unit test` - Unit tests test the smallest unit of functionality, typically a method/function. For example, when you call a specific method on a class, you would likely expect a value to be returned. Unit tests should be focused on one particular feature
- `Integration test` - Integration tests build on unit tests by combining the units of code and testing that the resulting combination functions correctly
- `Acceptance test` - Once an application is ready to use, it undergoes testing by the end user or client to verify that it meets the user's expectations
- `Jest` - Jest is a JS framework created by Facebook that is included in React and acts as a test runner, assertion library, and mocking library. It can also be used for snapshot testing.
- `Enzyme` - Enzyme was created by Airbnb and is a JS testing utility that makes it easier to assert, manipulate, and traverse your React component
- `Snapshot` - Snapshot testing is provided by Jest and allows you the ability to create a rendered "snapshot" of a component and compare it to a previously saved "snapshot"
- `Mock` - Mocks are created in order to replicate the data or functions you would expect to have or be fired

<section class="call-to-action">
### Journal on Your Own (3 minutes)

Why do we test? What is the point of writing tests?

### Discuss with a Partner (5 minutes)

Talk with a partner next to you about your reasons to write tests.
</section>

## Unit Testing React Components

When testing React apps, or really when testing any kind of application, most of the tests your write will be *unit tests*. Unit tests make sure that small, isolated, parts (units) of our application behave as expected. The more we can write our code in a way that is testable at the unit level, the easier it will be to scale and extend our applications.

<section class="call-to-action">
### Your Turn
We hear a lot about unit, integration, and acceptance tests. What is the difference between the three of these? Take 5 minutes and see what you and your partner can find out.

### Next Steps
In your journal, write out why do we test. What are the benefits of testing? When should we test? When should we not test?
</section>

### Getting started

Let's continue working on the ideabox app we built together in class yesterday! You can start with a fresh, complete copy by cloning down [this repo](https://github.com/turingschool-examples/ideabox-testing).

```bash
git clone https://github.com/turingschool-examples/ideabox-testing.git
cd ideabox-testing
git checkout begin-react-testing
npm i
```

### Running Tests

This application was built using `create-react-app`. The great thing about this is that it has a built in testing framework. This cannot be changed without ejecting from the boilerplate. Luckily, it's a pretty awesome test runner called `Jest`. [Read more about the Jest and React combo here](https://facebook.github.io/jest/docs/tutorial-react.html).

In order to run the tests, type `npm test`. Normally, our suite runs and then we return to the command line. With Create React App, `npm test` starts up a server that is constantly watching for changes. When you modify a file, the test suite will automatically rerun. Even better — by default, it will only watch files that have changed since the last time you made a git commit.

Try it out - run `npm test` to fire up the testing server. Currently our app has only one test file, `App.test.js`. Take a few seconds to look at that file.

<section class="call-to-action">
### Stop and Read

Read [this section on file naming conventions](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/running-tests.md#filename-conventions).
</section>  

Traditionally, we have always put our tests into their own directory. That is absolutely still possible, but the Facebook team makes some good points for keeping test files in the same directory as their implementation. Whatever you decide to do in the future is up to you, but let's go with the facebook convention for the purposes of this tutorial.

Jest is great for unit testing your app, but according to the [react docs on testing](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/running-tests.md)
they "recommend that you use a separate tool for browser end-to end tests if you need them. They are beyond the scope of Create React App." This means implementing our super friend `Enzyme`!  

### Setting up Enzyme

Enzyme is a fantastic tool for testing our React components in a virtual way, without actually having to use a browser. This makes running tests related to our UI much faster. First off, let's get Enzyme installed:

```bash
npm install enzyme --save-dev
```

You're also going to need the enzyme adapter for the version of React that you're using. As of this writing, it's enzyme-adapter-react-16, but that will change in the future, when create-react-app starts using version 17 of React. Just make sure you have the right one.

```bash
npm install enzyme-adapter-react-16 --save-dev
```

As a last step, we need to make sure that the adapter is configured before our test suite runs. Setting up some kind of configuration before a test suite runs is a really common task actually. So common in fact, that the create-react-app team has a specific way you need to do this.

Inside of `src/`, create a file called `setupTests.js`. This might already be created for you with `create-react-app`.

Jest will run this file before your test suite starts up, so it's the ideal place to do any kind of configuration or setup for the test suite. Add the following to `setupTests.js`:

```js
// src/setupTests.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

**Note** be sure to restart your test runner after adding this configuration, otherwise it won't take effect.

Great! Now we're all ready to start using Enzyme to test our React components!

<section>
### Stop and Think

We've got everything setup to start writing tests. But first, we need to think about what we need to test? We answered this question previously, but think about what needs to be tested for our IdeaBox. Should we test things like the UI? What about methods we've created?
</section>

### What should we test?

A general rule of thumb when thinking about testing is asking yourself what code did you write? Did you write the JSX? Then likely you should test that. Did you write those methods? Are you making changes to state? You would likely want to test that as well.

When testing React, focus on these three main rules:
* Test your UI to make sure it is rendering the JSX you expect it to.
* Test the methods and the functionality it executes.
* Test changes in state to make sure things are updating correctly.

### Testing the Card Component

Let's focus on our first rule first and test our `Card` component. We'll have to create a test file called `Card.test.js`. In `Card.test.js`, we'll start with a simple test to see if the `name` property is properly rendered in the component when passed in as a prop.

We want to import our `Card` component so we can test that. We also want to import `shallow` from Enzyme. This renders our component in a testing environment so that we can test it. It allows you to test a component in isolation while also allowing you to test methods like `componentDidMount` and `componentDidUpdate`. You will almost always want to start with `shallow`.

Another way to render a component with Enzyme is using `mount`. Read more about the differences between [shallow rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) and [full mounting](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md). `mount` will also render child elements, but you typically will not want to do this since you want to test these components in isolation. We will write tests for every component so this is a mute point. Think back to what a *unit test* is. According to the docs, the few scenarios where you might want to use `mount` would be if you have to do some testing with a DOM API or need to test components that are wrapped in higher order components. You will likely have few situations where you need to worry about this throughout the module.

```js
// Card.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders the title of the idea in <h3> tags', () => {
    const wrapper = shallow(<Card title="Bananas" />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
```

As previously mentioned, `create-react-app` uses [Jest](http://facebook.github.io/jest/) instead of Mocha. That said, you'll notice that the syntax is surprising similar. One difference is that Jest includes its own expectation library which is similar to Chai's `expect` syntax (as opposed to the `assert` syntax).

[Jest Assertions](https://facebook.github.io/jest/docs/api.html)  

If you run `npm test` you should see your one test pass (two if you still have the generic App test). You can keep this process running. The test suite will automatically run whenever you make a change to the test file.

<section class="note">
### Fun Fact
Let's say we changed that `h3` tag to an `h2`. It's going to fail. If we wanted to debug and see what our `shallow` was actually rendering, we can add this line in our test.

```js
    console.log(wrapper.debug());
```
</section>

<section class="note">
### Fun Fact 2

If you want to keep seeing those friendly green checkmarks, we can add a "verbose" flag to our test script. In your `package.json`, under `scripts`, edit the `"test"` script:

```js
  "test": "react-scripts test --verbose"
```

If you stop your test runner (type `q` into your terminal) and then restart it (`npm test`), you should see the "should" statement from your it testing block.
</section>

We could continue to write tests this way for every single element but...there is actually a much better way of doing this. Enter the world of snapshot testing!

<!-- This test works, but you might be thinking right now, 'hey don't my PropTypes cover that kind of behavior?' You're absolutely right! If you're using PropTypes throughout your application you really don't need these kinds of tests. In fact, there is a much simpler way of testing your UI, snapshot tests! -->


### Snapshot testing

Once again, let's look at the docs to find out what [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) is in Jest. Reading through the docs, we find out that we can use snapshot tests to compare against a previous 'snapshot' of what our component looked like. Snapshot tests are not really TDD but it is a way to double check if a change was made to the UI unexpectedly. If something has changed, the snapshot will fail. If we really did mean to make that change, we can `update` our snapshot to use the newest version.

First we'll need to install one more package in order to convert our Enzyme wrappers to a format that is compatible with Jest snapshot testing.

```bash
npm install enzyme-to-json --save-dev
```

Lastly, in order to use this serializer in jest, we need to add this line to our Jest configuration in our `package.json`.

```js
  "jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }
```

Everything should be set up now so that we can run our snapshot tests. Let's add the following test:

```js
// Card.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Card
      title="Bananas"
      description="B A N A N A S"
      id={3}
      removeIdea={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
```

Go ahead and run this test. It passes, and you should see the line `1 snapshot created`

Ok, well that's great, but what are we actually testing? The first time we run the snapshot test, it doesn't have anything to compare against, so it records the snapshot, and puts it in a new directory `__snapshots__/` next to wherever your test lives. Go ahead and look at this now.

It should look like this:

```js
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

How do we make this test fail? We'd have to change what our component actually looks like. Let's change the h3 tag to an h2 tag. Do that now:

```js
// Card.js

const Card = ({ id, title, description, removeIdea }) => {
  return (
    <section className='card'>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  )
};
```

Running the tests now, you should see a failure for the snapshot test, with the differences between the two snapshots in the console. Here is where you have to consider, "am I ok with those changes?" If so, you can update the tests by typing `u` while `Jest` is still in watch mode. Alternatively, you can restart your test suite and run `npm test --updateSnapshot`.

<section class="note">
### Note

This also tests to see if we have changed our className as well!  However, it does not test if we changed the name of the function.
</section>

<section class="call-to-action">
### Your Turn

Write snapshot tests for the rest of your components including your App, Form, and Ideas components. Remember to pass the props necessary in order for your wrapper to render correctly.
</section>

### Testing for dynamic changes

When testing your components, you're mainly testing presentation logic. Given our UI will change based on application data (our component props), we'll want to make sure we have tests for any conditional logic or dynamic changes.

We'll learn more about conditional rendering in React III but for now, let's add some conditional rendering into our IdeaBox, just so you can see how we'd test it.

Imagine our Card component having an extra property, called "isFavorite" - and if "isFavorite" is true, then the Card will have an a different class of "favorite".

```js
// Card.js

import React from 'react';
import './Card.css';

const Card = ({ id, title, description, removeIdea, isFavorite }) => {
  const favoriteClass = isFavorite ? 'favorite' : 'card';

  return (
    <section className={favoriteClass}>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  )
};

export default Card;
```

Don't worry too much about what's going on here; we'll see what that strange syntax is doing in our React III lesson.

Just know that, when `isFavorite` is passed into Card with a value of `true`, the Card will have a class of "favorite". If the value is `false` or `undefined`, then the class will be `card`.

We can write a second snapshot test that looks at a different wrapper instance:

```js
// Card.test.js

it('should match the favorited snapshot', () => {
  const wrapper = shallow(
    <Card
      title='bananas'
      description='b a n a n a s'
      id={3}
      removeIdea={jest.fn()}
      isFavorite={true}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
```

When both tests pass, we know that the two different possible versions of our Card are both rendering properly.

### Testing Button Functionality

We currently only have one button, but how do we know it's doing what we expect it to do?

First, we should start by being clear about what should happen. If you look closely at the code, you'll see that the `removeIdea` property is being passed in. It stands to reason that this function should be called when that button is tested.

At this point, we don't necessarily care what the functions are doing -- just that they are being called appropriately. We'll test what the function is doing later when we test the `App` component where the method lives. This is where **mocks** come in handy.

Mocks are stubbed-in or "faked" functionality that allows us to unit test specific parts of our code without having to worry about others. A mock will override the behavior of a specific function and provide you with utilities to test the interaction with the mock instead.

You'll find when testing applications that use a framework like React, you'll need to make a significant amount of mocks. And that's ok! Sometimes it may feel like you're faking too much of your code by mocking so many pieces of functionality. The general rule here is if you're not testing the actual behavior **within** the code you are mocking, it's perfectly fine to mock it.

So let's use mocks to test that the `removeIdea` function we passed in is being called appropriately, and with the correct argument.

<section class="call-to-action">
### Your Turn

Before looking at the test below, think about how you might test this. You don't need to write out the specific code, but think about what needs to be tested. In english form, write out in your notebook how you might set up this test.
</section>

A common practice to think about and follow through when writing out tests is:
* `Setup` - What do we need to do in order to render the component (aka *shallow* or *mount*). What data needs to be mocked?
* `Execution` - Let's run the command or simulate the action.
* `Expectation` - This is where our assertion happens. After running our function, what did we expect to happen?


<section class="answer">
### Mocking `removeIdea`

```js
// Card.test.js

it('should call the removeIdea prop with the Card\'s id when clicked', () => {
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
  expect(removeIdeaMock).toHaveBeenCalledWith(7);
});
```

- `jest.fn()` Mock functions allow you to spy on the behavior of a function that is called indirectly by some other code, rather than testing the output. Read more about it [here](https://jestjs.io/docs/en/jest-object.html#jestfnimplementation).
- `wrapper.find('.btn-remove').simulate('click');` will simulate a click event. This uses specific methods that enzyme gives us. This includes [find](https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html) and [simulate](https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html)
- `expect(removeIdeaMock).toHaveBeenBeenCalledWith([arg])` asks our mock function if it was called with a specific argument. Here are the [docs](https://jestjs.io/docs/en/expect) to see a list of different methods available to you from `Jest`.
</section>

### Testing a class-based component's method

<section class="call-to-action">
### Your Turn

Let's focus our testing now on our `App` component. With the person next to you, discuss what might be similar with our functional component? What might be different? (Go back to your notes. We've actually discussed this earlier!)
</section>

In our App component we have two class methods, `addIdea` and `removeIdea`. Think about what each of those methods do.

True to unit-testing-nature, we'd like to test both of those methods in isolation. (AKA we don't want to only be able to test it by bringing in our whole Form component, finding the inputs, simulating changes, finding the button, simulating a click, and then seeing whether or not `addIdea` was called. That would be an integration test; much harder to do!)

Fortunately, [Enzyme](https://airbnb.io/enzyme/docs/api/ReactWrapper/instance.html) has a really handy function that lets us call a method from the instance of a component: `instance()`.

Calling `instance()` on our wrapper will give us access to all of the class instance methods. In this case, `addIdea` and `removeIdea` (and also `setState` if you want to set an initial state!)

<section class="note">
### Important Note

REMEMBER! `instance()` can only be used on class components. `instance()` returns `null` for stateless functional components. Sooo....don't include methods in your functional components!
</section>

Let's write a test for `addIdea` in our `App.test.js` file. We want to:
- Start by creating a shallow version of our `<App>` component. Does it require any props?
- What does our state start as? Do we need to do anything to make that happen?
- Does the `addIdea` method take any arguments? How can we account for that?
- What would our state look like after we add an idea?

<section class="answer">
### addIdea Solution

```js
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

- `wrapper.state([arg])` returns the state based what key you give as an argument. If there is no argument included, it returns the entire state. Read the docs [here](https://airbnb.io/enzyme/docs/api/ReactWrapper/state.html)!
</section>

### More Practice & Examples (Forms!)

Let's dive into a few more examples where testing methods and changes in state can happen a lot. The best scenario for this is in our `Form` component!  Let's get our initial setup done by creating the test file, importing what is necessary, and include a snapshot test if you haven't already.

<section class="answer">
### Form Solution Pt. 1

```js
import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';

describe('Form', () => {
  let wrapper
  const mockAddIdea = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addIdea={mockAddIdea} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
```
</section>



Awesome now that we have got that set up, let's take a closer look at our `Form` component. One of the first methods that we have is `handleChange`. Inside the method it is updating the state. So let's write another test that...

- Invokes the `handleChange` method
- Checks to see if the state has been updated

<section class="call-to-action">
### Your Turn

Write a test that calls `handleChange` on the **instance** and check to see if state has been updated. Look at the last test we wrote for `addIdea` in the `App.test.js`.
- Are we passing any arguments through handleChange?
- What properties are we expecting to have inside of that *event* object?
</section>

Let's take a look at a solution below:

<section class="answer">
### handleChange solution

```js
it('should update state when handleChange is called', () => {
  //setup
  const mockEvent = { target: { name: 'title', value: 'Sweaters for pugs.'} };
  const expected = 'Sweaters for pugs.';

  //execution
  wrapper.instance().handleChange(mockEvent);

  //expectation
  expect(wrapper.state('title')).toEqual(expected);
});
```
</section>

Notice we had to mock out the event object giving it the exact properties we expected it to have. It needs a `target` that has a value of an object that also has two properties of `name` and `value`. You can give them whatever values you want as long as you assert that the change in state has that same value!  Let's practice doing one more test that is similar.

<section class="call-to-action">
### Your Turn

Write a test for your `resetInputs` method!
- The purpose of this method is to clear out the state right? Think about how you could set a default state in here (how do you normally set state?)
- Run the `resetInputs` method.
- Assert that the state is empty.
</section>

Let's take a look at a solution below:

<section class="answer">
### resetInputs Solution

```js
it('should reset state when resetInputs is called', () => {
  //setup
  const defaultState = { title: 'Sweaters for pugs', description: 'Why not?'}
  const expected = { title: '', description: '' };

  //execution
  wrapper.instance().setState(defaultState);

  wrapper.instance().resetInputs();

  //expectation
  expect(wrapper.state()).toEqual(expected);
});
```
</section>


Crazy!  We can call `setState` in our component as well since it is a method that we have available that we inherit from the `Component` class. Then we can call the method assert that the state has been emptied out.

Let's now take a look at a more complicated method like `submitNewIdea`. We can see that it's passing an event object, so that should tell us that we will need to mock it out like we did previously. It looks like it also creates a new Idea object and calls two methods, `addIdea` and `resetInputs`. Since `addIdea` comes from our `App`, we don't need to test the functionality of it. (we already have actually!)  We have also already tested what `resetInputs` does as well!  `**What we want to do is test that these methods have been invoked!**`  Let's work through it together:

<section class="call-to-action">
### Testing submitNewIdea()

- The first thing we notice is the `e.preventDefault()` - how can we handle this in our test?
- We don't care about `resetInputs` at the moment, just that it was called.  How can we handle this in our test?
- How can we invoke the method we are trying to test? Does it need to be passed any arguments?
</section>

<section class="answer">
### submitNewIdea Solution Pt. I

```js
it('should call addIdea and resetInputs when submitNewIdea is called', () => {
  //setup
  const mockEvent = { preventDefault: jest.fn() };
  wrapper.instance().resetInputs = jest.fn();

  //execution
  wrapper.instance().submitNewIdea(mockEvent);

  //expectation
  expect(mockAddIdea).toHaveBeenCalled();
  expect(wrapper.instance().resetInputs).toHaveBeenCalled();
});
```
</section>

This one is a bit trickier. We want to set `resetInputs` to a mock function so that we can keep track of whether or not the function has been called. After invoking `submitNewIdea`, we want to assert a few things. Notice at the top of our test where we are declaring our wrapper, we are passing `addIdea` as a prop which has the value of a mock function. So, we can test that both `addIdea` and `resetInputs` have been called.

Now...is there a way that we can take this a step further? Notice that `addIdea` often passes an argument (the newIdea). We can change our expectation so it reads:

```js
expect(wrapper.instance().props.addIdea).toHaveBeenCalledWith();
```

Read what the test tells us...
- It's now checking the argument which has our default values and an id set to the actual `Date.now()`.
- The problem is that `Date.now()` is always going to be a different value every time we run the test.

Brace yourself....we are going to mock our what `Date.now` returns! Update your test to what it looks like below:

<section class="answer">
### submitNewIdea Solution Pt. II

```js
it('should call addIdea and resetInputs when submitNewIdea is called', () => {
  //mock out Date.now()
  global.Date.now = jest.fn().mockImplementation(() => 12345)
  //setup
  const mockEvent = { preventDefault: jest.fn() };
  const expected = { title: '', description: '', id: 12345 };
  wrapper.instance().resetInputs = jest.fn();

  //execution
  wrapper.instance().submitNewIdea(mockEvent);

  //expectation
  expect(mockAddIdea).toHaveBeenCalledWith(expected);
  expect(wrapper.instance().resetInputs).toHaveBeenCalled();
});
```
</section>

We are assigning `Date.now` to a mock function. These mock functions have a method called `mockImplementation` to tell it how that mock function should behave. Here we are just telling it that it should always return the value of *12345* every time it gets invoked. Now we make an assertion because the value will always be the same. Noice!

Let's write one more test. Let's test something different, like simulating an event. Similar to our `Card` component when we clicked on a button, we can do something similar here. Let's write a test for clicking the button on our form!  Let's work through it:

<section class="call-to-action">
### Testing the Button click

- We can mock out `submitNewIdea` since we have already tested that it works as expected
- We are going to use `forceUpdate` to allow us to setup `submitNewIdea` as a `jest.fn()`
- Find the button and simulate a click event - how can we pass the necessary info into this simulated event?
- What does this `submitNewIdea` need to be passed to work correctly? That will help inform our assertion/expectation!  
</section>

<section class="answer">
### Button Click solution

```js
it('should run submitIdea when the button is clicked', () => {
  //setup
  wrapper.instance().submitNewIdea = jest.fn();
  wrapper.instance().forceUpdate();
  const mockEvent = { preventDefault: jest.fn() };

  //execution
  wrapper.find('button').simulate('click', mockEvent);

  //expectation
  expect(wrapper.instance().submitNewIdea).toHaveBeenCalledWith(mockEvent);
});
```
</section>

<section class="note">
### What is this forceUpdate?

This has to do with the binding of our method. Looking at the `Form` component, it is assigned to *this.submitNewIdea*. If you change it to *e => this.submitNewIdea(e)* and comment out the `forceUpdate` line, it works as well!  Weird!  It has to do with how React binds the method to the onClick. Don't stress too much on this, just know depending on how you set your methods to `onClick` and `onChange`, you might need to use `forceUpdate()`.
</section>

<section class="checks-for-understanding">
### Homework: Finish testing your ideabox

Definitely take some more time testing out your ideabox. To see a finished example of what we did in class, you can checkout the `react-testing-complete` branch. Continue to look through those docs as you work on testing these other pieces of functionality.

- Write a unit test for `removeIdea`
- Can you write the tests and implementation for the "favorite" button (that doesn't exist yet)?
- Write a test that makes sure that our Ideas component shows the correct number of ideas.
- Make sure that any other functions or interactions (ie. button clicks, input changes) are tested (especially in your form).
- Can you test and implement a counter that keeps track of the number of ideas in the list?
</section>

<section class="note">
### Fun Fact

Interested in how much of your app you have tested? You can run this command below!  Try and go for 100% test coverage!

```bash
npm test --  --coverage --watchAll=false
```
</section>
