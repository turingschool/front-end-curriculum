---
title: Unit Testing React Components
---

**Golden Rule**: No copy and pasting. Part of the point of this exercise is to build up some muscle memory.

## Getting Started with Create React App

[Create React App][] is a new, officially-supported way to easily create React apps. As of this writing, the project is still very young and not used widely, but adoption is growing quickly.

[Create React App]: https://github.com/facebookincubator/create-react-app

**Stop and Read**: [Create Apps with No Configuration](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

Install the `create-react-app` command line tool.

```
npm install -g create-react-app
```

### Setting Up the Project

Once you have the command line tool installed, you can create a new project using the following command:

```
create-react-app grocery-list
```

### Setting Up Linting

Linting is a powerful tool for maintaining code quality. Create React App uses ESLint for code linting. One thing that you'll notice as you build your application is that you'll see warnings in the console and the command line.

Add the following to your `package.json`:

```json
"eslintConfig": {
  "extends": "react-app"
}
```

### Running Tests

In order to run the tests, you can type `npm test`. Normally, our suite runs and then we return to the command line. With Create React App, `npm test` starts up a server that is constantly watching for changes. When you modify a file, the test suite will automatically rerun. Even better — by default, it will only watch files that have changed since the last time you made a git commit.

As you might expect, you can use `npm test` to fire up the test server.

**Stop and Read**: [This section on file naming conventions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#filename-conventions). Traditionally, we have always put our tests into their own directory. That is absolutely still possible, but the Facebook team makes some good points for keeping test files in the same directory as their implementation. Whatever you decide to do in the future is up to you, but let's go with it for the purposes of this tutorial.

```
npm install --save-dev enzyme react-addons-test-utils
```

### Testing the Grocery Component

We're going to start by test driving a single `<Grocery>` React component.

![React Component](/assets/images/lessons/unit-testing-react/grocery-component.gif)

Notice the following:

- The class is changing both when the component is "starred" as well as "purchased."
- The "Purchase" button says "Unpurchase" when the item is purchased.
- The "Star" button says "Unstar" when the item is starred.

To get started, make the following three files in the `src` folder of your project:

- `Grocery.js`
- `Grocery.test.js`

In `Grocery.js`, let's add a simple component:

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

It's a simple, stateless component. Right now, we're not using a number of the properties we're passing. Don't worry, we will.

In `Grocery.test.js`, we'll start with a simple test to see if the `name` property is properly rendered in the component.

```js
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

Create React App uses [Jest][] instead of Mocha. That said, you'll notice that the syntax is surprising similar. One difference is that Jest includes its own expectation library which is similar to Chai's `expect` syntax instead of an `assert` syntax.

[Jest](https://facebook.github.io/jest)

If you run `npm test` you should see your one test pass. You can keep this process running. The test suite will automatically be run whenever you make a change to the test file.

#### Testing for a class

It might also be helpful to test to see if a component has a certain class. An easy way to do that is to test if it matches a given selector.

```js
it('has a class of .Grocery', () => {
  const wrapper = shallow(<Grocery name="Bananas" />);

  expect(wrapper.is('.Grocery')).toEqual(true);
});
```

In the image above, the component changes visually based on whether or not the grocery item has been starred or purchase.

We could start out with a simple test to see if it has the appropriate class if it's starred.

```js
it('should have a className of "starred" if is starred', () => {
  const wrapper = shallow(
    <Grocery name="Bananas" starred={true} />
  );

  expect(wrapper.is('.starred')).toEqual(true);
});
```

This will fail. You could be fancy and try either a ternary or an `&&` condition in a template literal interpolation in `Grocery.js`.

```jsx
<article className={`Grocery ${starred ? 'starred' : ''}`}>
```

```jsx
<article className={`Grocery ${starred && 'starred' }`}>
```

Try both of those out and verify that they get the test passing. Then let the uneasy feeling settle in as you consider that as time goes on, you'll have to do this repeatedly — first with `purchased` and then possibly with more properties as requirements change down the line.

**Stop and Read**: To make our lives easier, we'll use the [classnames][] package from npm. Check out the documentation before moving forward. You can install it with `npm install -S classnames`.

[classnames]: https://www.npmjs.com/package/classnames

We'll import it into the module and refactor our components as follows:

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

#### Your Turn

When `starred` is true, it will be included as a class name. But, how do we know that it's not always included? Also, what about the `purchased` property?

Write the following tests and the implementation to match:

- `it('should not have a className of "starred" if it is not starred')`
- `it('should have a className of "purchased" if it is purchased')`
- `it('should not have a className of "purchased" if it is not purchased')`

### Optional Components

Sometimes my son has strong opinions on how many of something I should get. For example, he wanted _two_ packs of "[circle cheeses][]" the other day. The same is true for notes. He _does not_ like the "Light" variety and I better not dare come home with the cheddar-flavored derivatives.

To help with this, our grocery application allows the user to specify an optional quantity or notes. These aren't always needed. I know exactly what kind of vegan sardines I want. In these cases, I don't want to clutter up the user interface with "Quantity: NaN" or anything along those lines.

[circle cheeses]: http://mini-babybel.com/products/

Let's start with a test:

```js
it('should have a p.Grocery-quantity element if a quantity is passed as a prop', () => {
  const wrapper = shallow(
    <Grocery name="Bananas" quantity={'17 bunches'} />
  );

  expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
});

it('should not have a p.Grocery-quantity element if a quantity is not passed as a prop', () => {
  const wrapper = shallow(
    <Grocery name="Bananas" quantity={undefined} />
  );

  expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
});
```

Like jQuery, Enzyme has the `find` command which will traverse the component to find what I'm looking for.

Depending on what projects you've worked on, you may or may not have experience conditionally displaying elements. So, I'll help you out with this one.

```js
const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred, purchased })}>
      <h3>{name}</h3>
      { quantity && <p className="Grocery-quantity">Quantity: {quantity}</p> } // Our new code.
    </article>
  );
};
```

#### Your Turn

So, does that functionality even work? Let's write a test to make sure the element isn't present if there is no quantity. While we're at it, let's do the same for the notes as well.

- `it('should not have a p.Grocery-quantity element if a quantity is not passed as a prop')`
- `it('should have a p.Grocery-notes element if notes are passed as a prop')`
- `it('should not have a p.Grocery-notes element if notes are not passed as a prop')`

### Testing for the Changing Text on the Buttons


```js
describe('.Grocery-purchase button', () => {

  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchased is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });

});
```

#### Your Turn

- Can you implement the functionality that passes the tests above?
- Can you write the tests and implementation for the "Star" button as well?
- Can you make a "Remove" button? It's probably not _super_ important but we're going to need it in the next section and now seems like as good a time as any to make it, right?
- Can you write a test to see if the quantity field has the correct text in it?
- Can you write a test to see if the notes field has the correct text in it?

### Testing the Button Functionality

So, the buttons say the right things. That's cool, but how do we know that they do the things we expect them to?

First, we should start by being clear about what should happen. If you look closely at the code, you'll see that `onPurchase`, `onStar`, and `onRemove` properties are being passed in. It stands to reason that these functions should be called when one of those fancy buttons we just made are tested.

This is just a unit test. How are we going to test this functionality? Doesn't it require _at least_ the containing element?

Jest is more than just a Mocha alternative and a Chai alternative. It's also a Sinon alternative! We can use mocks to test that the functions we passed in are being called. Consider the following test:

```js
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

- `jest.fn()` returns a special function that we can use but also test to see if it was called.
- `wrapper.find('.Grocery-purchase').simulate('click');` will simulate a click event.
- `expect(onPurchaseMock).toBeCalled()` asks our mock function if it was called. Ideally, when we wire it up to the appropriate button, this will be true.

#### Your Turn

- Can you add an `onClick` function to the "Purchase" button and be the hero who makes the test pass?
- Can you write the tests and implementation for the "Star" and "Remove" buttons?

### Implementing the Grocery List

![](/assets/images/lessons/unit-testing-react/grocery-list-component.gif)

(**Important Note for Careful Readers**: You're not responsible for the form... just the list below.)

The list has the following functionality:

- It shows all of the groceries. Can you test to make sure that it shows the appropriate number of groceries?
- There is a "Clear Groceries" button that is disabled unless there are one or more groceries on the list.
- When the "Clear Groceries" button has been pressed the `onClearGroceries` property function should be called.
- Not shown: Can you test and implement a counter that keeps track of the number of groceries in the list?
