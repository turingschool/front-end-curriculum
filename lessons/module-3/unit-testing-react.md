---
title: Unit Testing React Components
module: 3
---

## Agenda

- Discuss Unit testing vs Integration Testing vs Acceptance Testing
- Learn about Jest and what we use it for
- Learn what Enzyme is and what we use it for
- Use Jest and Enzyme to take a snapshot of the UI
- Use Jest and Enzyme to test that a function was called on click
- Use Jest and Enzyme to unit test individual funtions

## Learning Goals

- Know how to add Enzyme to a project
- Know how to use Enzyme and Jest to take a snapshot of UI
- Know how to use Enzyme to simulate user behavior
- Know how to unit test a class method using Jest

## Vocab

- Jest
- Enzyme
- Mock
- Spy
- Snapshot
- Unit test
- Integration test
- Acceptance test

## Unit Testing React Components

**Golden Rule**: No copy and pasting. Part of the point of this exercise is to
build up some muscle memory.

When testing React apps or when testing any kind of application, most of
the tests we write are *unit tests*. Unit tests make sure that individual units 
(small parts that can be isolated) within our code behave as we intend them to.
The more we can write our code in a way that is testable at the unit level, 
the easier it will be to scale and extend our applications.

---
**_Turn and talk_: We hear a lot about unit, integration, and acceptance tests.
What is the difference between the three of these. Take 5 minutes and see what
you can find out**

---

### Getting Started

See if you have `create-react-app` command line tool as a global 
dependency by typing in the terminal: 
```npm list -g --depth=0```

If you do not have the dependency installed:

```bash
npm install -g create-react-app
```

### Setting Up the Project

Create a new project using the following command:

```bash
create-react-app grocery-list --use-npm
```

`cd` into the `grocery-list` directory.  

### Clean Up Extra Stuff

`create-react-app` has boilerplate HTML and CSS that we won't be using. 

First, delete the `logo.svg` file. 
Next, update the following files to match below:  

```js
App.css
```

```css
.App {
  max-width: 500px;
  margin: auto;
}
```

```js
// App.js

import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class App extends Component {
  render() {
    return (
      <Grocery 
        name='bananas' 
        starred={false}
      />
    );
  }
}

export default App;
```

### Running Tests

`create-react-app` has a built in testing framework called `Jest` that includes a test 
runner. [Read more about the Jest and React combo here](https://facebook.github.io/jest/docs/tutorial-react.html).

In order to run the tests, type in the terminal:

```npm test``` 

When using some other testing frameworks, our suite may run, finish, and then return to the 
command prompt. However, a feature of Create React App is that `npm test` starts up a server that is 
constantly watching for changes. The watching we refer to means that when you modify a file,
the test suite will automatically run again. Another related feature is that by default, the server is
watching just the files that have changed since the last git commit.

Currently our app has only one test file, `App.test.js`. 
Inspect that file.

**Stop and Read**: [This section on file naming conventions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#filename-conventions).  

### File Structure

Traditionally, test files were kept in one dedicated test directory. Today, the Facebook team 
makes some good points for keeping test files in the same directory as the corresponding
implementation file. **Follow the Facebook convention** for this lesson. 

Jest is the good unit testing framework for your React app.

Enzyme is the testing utility(tool) for for browser end-to-end tests. Create-React-App does not include Enzyme, so you set
it up yourself:
[react docs on testing](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) 
   
### Install Enzyme

The purpose of enzyme is to allow testing of rendered elements but to avoid actually 
rendering to the DOM. This makes running tests related to the UI much faster.  
Enzyme replaces "headless browsers", making testing much easier.

Install Enzyme as a dev dependancy:

```bash
npm install --save-dev enzyme
```
### Install the Enzyme Adapter

Next, install the enzyme adapter as a dev dependancy for the version of React that you're
using. As of this writing, the adapter is enzyme-adapter-react-16, but that will change
when create-react-app starts using version 17 of React. Make sure 
you have the right one.

```bash
npm install --save-dev enzyme-adapter-react-16
```
### Create the Configuration File - setupTests.js

Setting up a configuration (special file and code) before a test suite runs
is a really common task. The create-react-app team has a specific way to do this:

Inside of `src/`, create a file called `setupTests.js`.

Jest will run this file before the test suite is run.  Add the following
to `setupTests.js`:

```javascript
// src/setupTests.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

Now Enzyme is available for testing our React components!

### A Grocery List App

In this tutorial, we code an app so a user can make and edit a grocery list. 
A user can add individual grocery items to a list, mark them `starred` or `purchased`,
and filter the list based on `starred` or `purchased` tags.  

### Building and Testing the Grocery Component

We're going to start by testing a single `<Grocery>` React component.

![React Component](/assets/images/lessons/unit-testing-react/grocery-component.gif)

Notice the following:

- The class is changing both when the component is "starred" as well as "purchased."
- The "Purchase" button says "Unpurchase" when the item is purchased.
- The "Star" button says "Unstar" when the item is starred.

Make the following two files in the `src` folder of your project:

- `Grocery.js`
- `Grocery.test.js`

In `Grocery.js`, create a stateless functional component with several destructured props:

```js
import React from 'react';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className="Grocery">
      <h3>{name}</h3>
    </article>
  );
};

export default Grocery;
```

(Some of the props are included now to be used later.)

## Two Ways to Test for Correctly Rendered Element Tags

### Snapshot Testing and Tag Rendering Testing

TDD can begin by testing that the basic DOM is being rendered as we wish. There are
two ways to test that the elements we expect are being rendered: snapshot tests or
basic tag rendering tests. Tag rendering tests are an earlier approach.  Snapshot 
tests are a newer way to test for the same things.  You should use snapshot tests
in our projects, but be familiar with the tag rendering tests, too.


### Snapshot Tests:

Snapshot tests are not really TDD. Instead, snapshot tests compare against
a previous snapshot of a component. If something in the UI has changed since the
previous snapshot was created, the new snapshot will be different and the 
snapshot test will fail.  If the change is what we expect because we coded
some change, we can `update` the snapshot to use the newest
version. Add the following test:

```javascript
import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Grocery
                              name='apples'
                              quantity='10'
                              notes='granny smith'
                              purchased='10-22-18'
                              starred=false
                              onStar={jest.fn()}
                              onPurchase={jest.fn()}
                              onDelete={jest.fn()}
                            />)
    expect(wrapper).toMatchSnapshot()
  })
})
```

Run:

```npm test```

See your one test pass (two if you still have the generic App test). 
The first time a snapshot test runs, it always passes because there
is no previous snapshot to compare against. 
You should see the line `1 snapshot created`.
The test suite will keep watching.  When you make a change to the code, 
then the test suite will automatically run again.

What does the snapshot test actually test? The first time we run
the snapshot test, it doesn't have anything to compare against, so it records
the snapshot, and puts it in a new directory `__snapshots__/` next to wherever
your test lives. 

Find the new snapshot file.

Changing the component makes the test fail.
Do that now:

```js
// Grocery.js

import React from 'react';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className="Grocery">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Notes: {notes}</p>
    </article>
  );
};

export default Grocery;
```

Run:

```npm test```

You should see a failure for the snapshot test, with the
differences between the two snapshots in the console. Here is where
you have to consider, 'am I ok with those changes?' 

Since the changes are intentional, update the 
snapshots in one of two ways: 

- 1. Type `u` while `Jest` is still in watch mode. 
- 2. Cancel the test suite, then run
```npm test --updateSnapshot```

Run:

```npm test```

### Tag Rendering Tests

Delete or comment out the snapshot test you just wrote.

Now, in `Grocery.test.js`, we can write a simple test to see if the `name` property 
is properly rendered in the component when passed in as a prop.

-```js
-import React from 'react';
-import { shallow, mount } from 'enzyme';
-
-import Grocery from './Grocery';
-
-describe('Grocery', () => {
-
-  it('renders the name of the grocery in <h3> tags', () => {
-    const wrapper = shallow(<Grocery name="Bananas" />);
-    const title = <h3>Bananas</h3>;
-
-    expect(wrapper.contains(title)).toEqual(true);
-  });
-
-});
-```
-
As previously mentioned, `create-react-app` uses [Jest](http://facebook.github.io/jest/) 
instead of Mocha. One difference is that Jest includes its own expectation library which
is similar to Chai's `expect` syntax instead of an `assert` syntax.  

-[Jest Assertions](https://facebook.github.io/jest/docs/api.html)  

If you run `npm test` you can see your new test pass, or you may see that you have kept
your test process running and that the new test has run automatically.

### PropTypes
PropTypes, though not a test, also cover the kind of behavior handled by the test we just wrote.
If you use PropTypes throughout your application you probably do not need the Tag Rendering test.
As we mentioned above, the simpler way of testing your UI is snapshot tests.

### Testing Dynamic Changes 

Above we said that `create-react-app` uses Jest as a test-runner [Jest](http://facebook.github.io/jest/) 
(instead of Mocha). Jest also includes its own expectation library.  
The syntax is notably similar to Chai's but there are differences. One 
difference is `expect` syntax instead of `assert` syntax.  

[Jest Expectations](https://facebook.github.io/jest/docs/api.html) 

When testing React components, you are mainly testing presentation logic. The UI 
does change based on application data (our component props), so we 
create tests for any conditional logic or dynamic changes. For example, our grocery component 
changes in the browser window based on whether the grocery item is starred or purchased. 

Start with a simple test to see if the grocery item has the expected className if it is starred.

```js
it('should have a className of "starred" if is starred', () => {
  const wrapper = shallow(
    <Grocery name="Bananas" starred={true} />
  );

  expect(wrapper.is('.starred')).toEqual(true);
});
```

The test fails. To pass the test, set up a conditional within our component that checks 
if the property `starred` has been passed in as a prop. Use either a 
ternary or an `&&` condition in a template literal interpolation in `Grocery.js`.
Try both, separately, to verify that each can get the test passing:

```jsx
<article className={`Grocery ${starred ? 'starred' : ''}`}>
```

```jsx
<article className={`Grocery ${ starred && 'starred' }`}>
```

Recognize that as your app develops, you will write a similar test for the 
`purchased` className. Then again, for more properties as the requirements for the app extend to more features.

### Add Classnames Package

**Stop and Read**:  [classnames](https://www.npmjs.com/package/classnames) 
To make our lives easier, use the classnames package from npm. Check out the documentation 
before moving forward. You can install it with:
```npm install -S classnames```

Now classnames is installed into the node module so we can... 

add this pre-made css... 

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

...and refactor our `Grocery.js`, remembering to import classnames...

```js
import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred })}>
      <h3>{name}</h3>
    </article>
  );
};

export default Grocery;
```

### TDD for the Button Functions

In order to write good tests for buttons, be clear about what should happen when 
the button is clicked. Notice that `onPurchase`, `onStar`, and `onRemove` properties are being 
passed in. Reasonably, the onPurchase function will be called when a Purchased button is clicked.
Similarly, clicking a Star button should call the onStar function.
Clicking a Delete button should call the onDelete function.

#### Write the test first:
**Mocks** allow us to confirm a function is being called. Mocks are stubbed-in ("faked") 
functions that allow us to unit test specific parts of our code where a function is
being called. A mock will override the behavior of a specific function and provide 
you with utilities to test the code's interaction with the mock instead.

When testing applications that use a framework/library like React, making mocks is common and necessary. 
The general rule here is: if you are not testing the actual behavior **within** the code, then you should be mocking 
that behavior.

Use mocks to test that the functions that were passed in as props are being called appropriately.

Add this test:

```js
it('should call the onPurchase prop when clicked', () => {
  const onPurchaseMock = jest.fn();

  const wrapper = shallow( 
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

- `jest.fn()` returns a special mock function that we can test to see if 
  it was called.
- `wrapper.find('.Grocery-purchase').simulate('click');` will simulate a click event.
- `expect(onPurchaseMock).toBeCalled()` asks our mock function if it was called. Ideally, 
  when we wire it up to the appropriate button, this will be true.
- We are now using the `mount` function to create our wrapper rather than the `shallow` 
  rendering we've used previously. Doing a full mount will allow us to more easily test 
  methods on our components. Read more about the differences between [shallow rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) 
  and [full mounting](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md).

#### Your Turn

- To the Grocery component, add an `onClick` function to a "Purchase" button and make the test pass.
- We likely want to pass in a grocery ID or grocery name to the `onPurchase` method so 
  we can keep track of what has been purchased. 
- Add an assertion to the previous test to check that `onPurchaseMock` was called with the correct arguments. 
  ([Hint](https://facebook.github.io/jest/docs/expect.html#content))
- Write the tests and implementation for the "Star" and "Remove" buttons.

- Here is some code to help get you started: 
```
const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred })}>
      <h3>{name}</h3>
      <button 
       className="Grocery-purchase"
       onClick={() => onPurchase(name)}>Purchased
      </button>
      <button>Star</button>//
      <button>Delete</button>//
    </article>
  );
};
```

### Testing a Method on a Class

So far, we've only been concerned with the tests for the a stateless functional
component. What about testing our class components? How will that differ? Take a
look again at our `App.js` file (with some new features added in):

```js
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
    })
  }

  groceryList = () => (                     // Notice the two implicit returns,
    this.state.groceries.map(grocery => (   // recognizeable by wrapping parentheses.
      <Grocery {...grocery} />              // Can you spot them?                                         
    ))                                      // Do you understand them?
  )

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

Here, our App has two class methods on it. This first adds
Groceries to our state, and the second gives us a list of JSX elements. What
we'd like to be able to do is test those methods in isolation. Fortunately,
Enzyme has a really handy method for doing just that, `instance()`.

Calling `instance()` on our wrapper will give us access to all the class methods
of that instance, in this case, `addGrocery` and `groceryList`. Let's write a
test for `addGrocery`.

```javascript
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

The list should have the following functionality (test driven, of course):

- It has the GroceryForm that we're calling in App.js
- It shows all of the groceries. Can you test to make sure that it shows the appropriate number of groceries?
- There is a "Clear Groceries" button that is disabled unless there are one or more groceries on the list.
- When the "Clear Groceries" button has been pressed the `onClearGroceries` property function should be called.
- Not shown: Can you test and implement a counter that keeps track of the number of groceries in the list?
