---
title: Unit and Integration Testing Components
module: 3
length: 180
tags: react, testing
---

## Learning Goals

- Review differences between unit, integration, and acceptance testing
- Know how to setup a testing suite from scratch within `create-react-app`
- Identify when mocking is needed and how to mock in our apps
- Go over some of the different ways of testing including:
  - Test the display of a component determined by props
  - Test results of user interactions
  - Test class methods using Jest
- This lesson does not cover how to deal with asynchronous JS (like `fetch`)

## Vocab

- `Unit test` - Unit tests test the smallest unit of functionality, typically a method/function. For example, when you call a specific method on a class, you would likely expect a value to be returned. Unit tests should be focused on one particular feature
- `Integration test` - Integration tests build on unit tests by combining the units of code and testing that the resulting combination functions correctly
- `Acceptance test` - (also known as end-to-end tests) Once an application is ready to use, it undergoes testing in a browser by a user (or automated user) to verify that the features behave normally and meet expectations
- `Jest` - Jest is a JS framework created by Facebook that is included in React and acts as a test runner, assertion library, and mocking library. It can also be used for snapshot testing.
- `React Testing Library` - A testing library that allows us to render, find and interact with elements within Jest
- `Mock` - Mocks are created in order to replicate the data or functions you would expect to have or be fired, or when we want to set up a function that runs in place of another function
## Why Do We Test? What Should We Test?

<section class="call-to-action">
### Journal on Your Own (3 minutes)

1. Why do we test? What is the point of writing tests?
2. What have you been testing in apps so far?

</section>

When testing React apps, or really when testing any kind of application, most of the tests your write will be *unit and integration tests*.

<section class="call-to-action">
### Your Turn
We hear a lot about unit, integration, and acceptance tests. What is the difference between the three of these? Take 5 minutes and see what you and your partner can find out.
</section>

## Tools to Test

To test any React application, and more broadly almost any application, we need three tools to help us:
* A test runner
* Something to "render" components for us and execute that component code
* An assertion library

<section class="call-to-action">
### Your Turn
What test runners and assertion libraries have you used in the past, and what was each library doing for you?
</section>

For our React apps, we're going to use:
* [Jest](https://jestjs.io/) as the test runner and assertion library
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to help render components in our tests

Bookmark these links! You'll be going to these documentation pages a lot this mod and throughout your new dev career, especially if you're writing code using React. It takes practice to read through docs, and now is a great time to get more practice.

## Setup of Tools

One great thing about `create-react-app` is that it comes with Jest installed. Jest was created by Facebook just as React was, so it makes sense that it is included in `create-react-app` by default. So we don't have to install it.

We can double-check that it's installed by looking into the `node_modules` directory and finding a directory within it called `jest`. If you see that `jest` directory, then you can be assured that it's already installed.

However, React Testing Library is not given to us by default with `create-react-app`. So we need to install this ourselves.

<section class="call-to-action">
### Your Turn
Head on over to the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) docs and see if you can find how to install this library.
</section>

<section class="answer">
### Installation Command

Run the command in your terminal: `npm install --save-dev @testing-library/react`
</section>

## Unit Testing

What is the goal of a unit test? It depends on what we're working with. If we want to test a bunch of functions, then each test can test the functionality of each function. If we are dealing with components, then we can have a test where only one component is rendered, and the component is treated as a unit.

Our goals with component unit tests will be to:

* Render the component
* Check that everything we expect to see on the page is there
* Interact with the component as a user would and check that the app responds as we expect

Let's take this step by step and dive into the docs.

### Rendering Components

<section class="call-to-action">
### Let's Do Some Research
Head on over to the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) docs and see if you can find how to render components within a test.
</section>

<section class="answer">
### Rendering a Component

This [example page](https://testing-library.com/docs/react-testing-library/example-intro) is a good resource as well as the specific [API page](https://testing-library.com/docs/react-testing-library/api#render).

At the top of the component test file we need to `import { render } from '@testing-library/react'`.

Then use `render(<ComponentUnderTest />)` to render the component that we are interested in testing.
</section>

### Finding Elements on the Page

React Testing Library comes with another library already installed with it. It's called the DOM Testing Library. The DOM Testing Library comes with some really nice tools to find elements on the page.

<section class="call-to-action">
### Back to the Docs
Using the [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) docs, see if you can find a way to:

* Obtain all the elements that have the text "Idea!" within them
* Obtain an input with the placeholder text "Enter name here..."

If you finish this, then look into the different between `getAllBy` queries and `queryAllBy` queries.
</section>

<section class="answer">
### Finding Elements

This [Queries API docs page](https://testing-library.com/docs/dom-testing-library/api-queries) is a going to be your best friend to help you find how to get the element(s) you're looking for.

#### Using `screen` to get queries
It's recommended to use [screen](https://testing-library.com/docs/dom-testing-library/api-queries#screen) to get these queries! 
All queries live as methods on the `screen` object!
</section>

The good thing about using this library to find elements is that it really pushes us as developers to make our apps accessible. So many of the queries available to us in the library are based around accessibility.

### Interacting with Elements

Lastly, we need to be able to interact with the page/component, like click a button or enter text into an input field. How do we do this?

<section class="call-to-action">
### One More Time!

What can you find in the [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) docs that could be used to click a button or put text into an input field?
</section>

<section class="answer">
### Interaction Events

This [firing events](https://testing-library.com/docs/dom-testing-library/api-events) part of the DOM Testing Library docs is a going to be your best friend to help you fire events like button clicks.
</section>

The React Testing Library and DOM Testing Library docs are pretty nice once you get used to them. Right now, they might seem big and verbose, but you will get to know them the more you practice reading through them to help you figure out testing.

**Keep in mind** that by installing React Testing Library, we get the functionality of the DOM Testing library for free!

<section class="checks-for-understanding">
### Organize the Library Chaos

Make a table in your notebook or on a piece of paper with the following columns:

* Library Name
* Installation Command
* What is it? Why would we use it?
</section>


### Testing What is Rendering to the Page

Let's bring all of our research in the docs together to make our first test! Use [this repo](https://github.com/turingschool-examples/ideabox-testing-rtl) as a starting point - it's an ideabox that has a form and delete button already implemented. Make sure you clone this down outside of any other React projects you have right now. Here are the steps to set it up:

```bash
git clone git@github.com:turingschool-examples/ideabox-testing-rtl.git
cd ideabox-testing-rtl
npm install
npm start
```

Test out the app in the browser. Add some ideas. Delete some ideas. Then explore the codebase, looking at each component one-by-one to see how things are connected.

<section class="call-to-action">
### Set Up the Test

1. Install the React Testing Library
1. Create a test file for the Card component
1. Create a `describe` block for the Card component and then an `it` block for testing that the card displays information on the page
1. Within the `it` block, verify your test is setup correctly so far by expecting true to be equal to true. Then switch it to test that true is equal to false to make sure it fails.
</section>

Now that we know our Jest tests can run and our assertions work, we can move on to testing that the Card is rendering what we expect.

<section class="call-to-action">
### Render the Component

1. Remove the assertion of true to be equal to true
1. Render the Card component in the `it` block (making sure to pass in props that the component needs)
1. Find the element with a certain title text (you decide what the title text should be via the props)
</section>

For the `removeIdea` prop, what do you pass in??? For now, pass in a Jest function: `removeIdea={jest.fn()}`. We'll talk more about this in later testing lessons.

Next we need to make an assertion. You found the element on the page, but you want to assert that it is generally on the page. For that, there is a library to help called [jest-dom](https://github.com/testing-library/jest-dom).

<section class="call-to-action">
### Make Assertions

1. Install the [jest-dom](https://github.com/testing-library/jest-dom) library
1. Import the library into your test file using `import '@testing-library/jest-dom';`
1. Head to the [Custom Matchers section of the jest-dom docs](https://github.com/testing-library/jest-dom#custom-matchers) to find how to assert that something is in the document
1. Repeat the assertion for the Card's description and delete button
</section>

<section class="answer">
### A Finished Test

```js
// Card.test.js

import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('displays correct information in the Card', () => {
    render(<Card
              id={1}
              title="New Idea"
              description="Something new I thought of"
              removeIdea={jest.fn()}
              />);
    expect(screen.getByText("New Idea")).toBeInTheDocument();
    expect(screen.getByText("Something new I thought of")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
```
</section>

<section class="note">
### Debugging

This [section of the testing API page](https://testing-library.com/docs/react-testing-library/api#debug) shows how you can see what is rendered in the test, which can help you debug tests when things go wrong.
</section>


### Interactive Unit Testing

The Card component has a button that when clicked, fires a function that was passed down through the component via props. We want to be able to test that when that button is clicked, the function is fired with the correct argument(s).

To do that, we need to know more about the `jest.fn()` we used earlier.

A `jest.fn()` is known as a "mock". Here is the [documentation on Jest mock functions](https://jestjs.io/docs/en/mock-function-api.html). By using a `jest.fn()` function, it gives us the ability to:
* Provide a mock function to override the original function's behavior
* Track that the mock function was called and was called with certain arguments, if applicable

Our goal is to:
* Give the component a mock function that we can reference later (to know that it was called)
* Trigger the event that would call the function in the component
* Check that the mock function was called and check if it was called with the correct arguments, if applicable

Let's setup this test:

```js
it('passes the correct id to the removeIdea function', () => {
    const mockRemoveIdea = jest.fn();
    render(<Card
      id={1}
      title="New Idea"
      description="Something new I thought of"
      removeIdea={mockRemoveIdea}
      />);

    // Execute the code by clicking the button

    // Assert that the mockRemoveIdea was called with the correct argument
  })
});
```

<section class="call-to-action">
### Finish the Test

1. Find out how to trigger the function by clicking the delete button
1. Assert that the mocked function was called with the correct argument

Hint: assertions/expectations/matchers for mocked functions can be found [here](https://jestjs.io/docs/en/expect) along with other Jest matchers.
</section>

<section class="answer">
### Checking a Mocked Function

```js
it('passes the correct id to the removeIdea function', () => {
    const mockRemoveIdea = jest.fn();
    render(<Card
            id={1}
            title="New Idea"
            description="Something new I thought of"
            removeIdea={mockRemoveIdea}
            />);

    fireEvent.click(screen.getByText("Delete"));
    expect(mockRemoveIdea).toHaveBeenCalledWith(1);
  })
});
```
</section>

Congrats! You wrote a great unit test for this component. It gives us assurance that in the chain of event that occurs when the Delete button is clicked, that this is performing as expected.

### Overwriting Existing Functionality with Mocks

Let's look at the `Form` component's functionality. Using the logic from clicking the delete button in the `Card` unit test, we should be able to apply the same logic to triggering the `addIdea` function within the `Form` and test that it was called with the correct argument(s).

<section class="call-to-action">
### Write the Test

1. Create a new test file for the `Form` component
1. Write a new `it` block for this test
1. Setup your test file so that you can render the `Form` component using React Testing Library
1. Pass in a mocked function for the `addIdea` prop
1. Fill in the input fields and click the submit button
1. Check that the mocked `addIdea` function was called with the correct argument

Use `debug()` along the way to see the progress of your components.
</section>

<section class="answer">
### Mocking the addIdea Function

```js
// Form.test.js

import React from 'react';
import Form from './Form';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Form', () => {
  it('sends the correct data up to app via addIdea', () => {
    const mockAddIdea = jest.fn();

    render(<Form addIdea={mockAddIdea} />);

    fireEvent.change(screen.getByPlaceholderText('title'), {target: {value: 'Best!'}});
    fireEvent.change(screen.getByPlaceholderText('description'), {target: {value: 'Idea!'}});
    fireEvent.click(screen.getByText('Submit!'));

    expect(mockAddIdea).toHaveBeenCalledWith({id: Date.now(), title: "Best!", description: "Idea!"});
  });
});
```
</section>

But the test is failing! Why??

We need to overwrite the functionality of `Date.now()` to get a consistent value when we run our tests. We can do that with Jest mock functions too! Within the `it` block:

```js
it('sends the correct data up to app via addIdea', () => {
  const mockAddIdea = jest.fn();
  Date.now = jest.fn().mockImplementation(() => 1584585306565);

  render(<Form addIdea={mockAddIdea} />);

  fireEvent.change(screen.getByPlaceholderText('title'), {target: {value: 'Best!'}});
  fireEvent.change(screen.getByPlaceholderText('description'), {target: {value: 'Idea!'}});
  fireEvent.click(screen.getByText('Submit!'));

  expect(mockAddIdea).toHaveBeenCalledWith({id: 1584585306565, title: "Best!", description: "Idea!"});
});
```

We can reassign the `Date.now` function to be a function that _we control_ using Jest's `mockImplementation`. In essence, we are overwriting `Date.now()` to return the value `1584585306565` every time it is called in this test (but not for our actual production code).

## Integration Testing

Integration testing is all about testing multiple functions or components working together. In our case, a great integration test would be to test that we can submit a new idea to the page.

To begin an integration test, ask yourself, "What components need to be rendered to perform this task?"

In this case, the entire application needs to be rendered because we need the form and we need to see that the Card shows up on the page. So let's make an integration test for `App`.

<section class="call-to-action">
### Write the Integration Test

1. Go into the `App.test.js` file or create a new test file for `App` if one does not exist
1. Write a new `it` block for this test
1. Setup your test file so that you can render the `App` component using React Testing Library
1. Fill in the input fields and click the submit button
1. After submit, check that the inputs have been cleared
1. Check that the new idea has been added to the page

Use `debug()` along the way to see the progress of your components.
</section>

<section class="answer">
### Adding an Idea Integration Test

```js
// App.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('can add a new idea', () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText('title'), {target: {value: 'Best!'}});
    fireEvent.change(screen.getByPlaceholderText('description'), {target: {value: 'Idea!'}});
    fireEvent.click(screen.getByText('Submit!'));

    expect(screen.getByPlaceholderText('title').value).toEqual('');
    expect(screen.getByPlaceholderText('description').value).toEqual('');

    expect(screen.getByText("Best!")).toBeInTheDocument();
    expect(screen.getByText("Idea!")).toBeInTheDocument();
  });
});

```
</section>

<section class="call-to-action">
### Some More Tests to Write

1. Unit: In the Form, test that it displays correctly
1. Unit: In the Form, check that when you type in an input that the correct value displays in the input
1. Integration: Test that you can delete an idea
</section>


## Extra Resources:
- [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event)
