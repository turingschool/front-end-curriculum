---
title: Testing Redux
tags: React, Redux, Testing
module: 3
---

## Learning Goals

- Understand the different types of tests related to Redux
- Know how to test Action Creators and Reducers
- Understand how to test Containers with `mapStateToProps` & `mapDispatchToProps`

## Vocab

- `Pure functions` A pure function is a function that returns the same output given the same input.  It has no side affects and modifies no other variables outside of its scope.
- Vocab from [Starting Up Redux](starting-up-redux.html)

## Getting Started

We're going to be using the TodoList application that we made when we were exploring Redux for the first time. Go ahead and clone it, and switch to the begin-testing branch:

```bash
git clone https://github.com/turingschool-examples/redux-lesson-boilerplate testing-redux
cd testing-redux
git checkout begin-testing
npm i
```

### Breaking Down a Container

A container refers to a component that is connected to the Redux store. Before we determine how/what to test for this container, it is important to understand how the component is connected and how data flows to and from the component.

With a partner, annotate the `AddToDoForm.js` component and any relevant files that interact with this container. Use your experiences from the Crate project to help you track down what files need to be annotated.

<!-- The above has been added for a quick workshop in Mod 4 around Redux testing. -->

### Unit Testing

Unit tests aim to test individual pieces of code as thoroughly as possible. In React apps, these targeted pieces include classes, functions, components, and helper functions. Unit testing makes your life easier as a developer, and makes it simpler to refactor your code. When testing in Redux, most of our tests will be unit tests.

### Testing in Redux  

In order to test Redux, we need to first consider the pieces that will require testing.

<section class="call-to-action">
### When it comes to redux, what do you think we need to test?

Take a look at the <a href="https://redux.js.org/recipes/writing-tests/" target="_blank">Redux docs</a> and come up with an answer.
</section>


### What we'll test:
 We'll need:
- Action Creator tests
- Reducer tests 
- Container tests
- Tests for any Redux Middleware we may be using

For this lesson, we're just going to focus on the first three.


Testing in Redux can actually be a very pleasant experience, because all the functions you'll be writing while using Redux are *pure*. This means that given the same inputs for a function, we'll always get back the same output. For more explanation of pure functions, check out [this post](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/).

Let's start with Action Creator tests.

### Action Creators

Action creators in Redux are functions that return an Action object. Actions describe changes to our Redux store. Action creators are *pure*, and thus are not too difficult to test.

<section class="call-to-action">
### Stop and Think

Why do we even need Action Creators? Couldn't we just create objects where we need them?

<!-- For simpler Actions, this is possible.  But as Actions get more complex, copy-and-pasting an action in multiple places can be more difficult. It's much easier to update a complex payload or refactor some code in one area than multiple places. This keeps our code DRY. -->
</section>

Action Creators are functions that return a plain object. When testing Action Creators we want to test that the returned object is what we expect, based on the input parameters.

Take for example our `addTodo()` action.  

```js
export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    text,
    id
  }
};
```

Given a string as text, (let's say "Go to Brothers"), with an `id` of `21`,  we expect it to return an object with a type of `'ADD_TODO'` and the text "Go to Brothers" with an id of `21`.  

### Action Creator Tests
`actions/todos.test.js`  

Step one, let's just make sure everything is wired up.

```js
import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    expect(true).toEqual(false);
  });
});

```

Run `npm test` to run your suite. We should see it fail, because true doesn't equal false.

```bash
expect(received).toEqual(expected)

Expected value to equal:
  false
Received:
  true
```

Great, our test suite is ready to run, lets actually write our action test.

```js
import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    // Setup
    const text = "Go to the Vault";
    const id = 1;
    const expectedAction = {
      type: 'ADD_TODO',
      text: "Go to the Vault",
      id: 1
    };

    // Execution
    const result = actions.addTodo(text, id);

    // Expectation
    expect(result).toEqual(expectedAction);
  });
});
```

<section class="call-to-action">
### YOUR TURN!

Write two more unit tests to cover the other two Action Creators.
</section>

### Reducers

Recall that Reducers digest actions that have been dispatched to the store, and then return a new state. In other words, a reducer receives an action, and decides what the new state will be based on the type of the action. We want to test that behavior.

Take a look at our todos reducer.

```js
// reducers/todosReducer.js

const todosReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: action.id, text: action.text, completed: false}]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      })   
    default:
      return state
  }
};

export default todosReducer;
```

### Reducer Tests

Make the new test file:  
`reducers/todosReducer.test.js`  

To test this reducer, let's start by testing what happens if the action is undefined. What we want to have happen in this case is for the reducer to return whatever the state was when the reducer function was called.

```js
import { todosReducer } from '../reducers/todosReducer';

describe('todosReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = todosReducer(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});
```

<section class="call-to-action">
### YOUR TURN!
Test the todos reducer for what we expect to see in State if we...

* Hit the `ADD_TODO` case:

```js
it('should return state with a new todo', () => {

});
```

* Hit the `TOGGLE_TODO` case:

```js
it('should toggle the completed status of a new todo', () => {

});
```
</section>

### Unit and Integration Testing Containers

Testing React Containers is a lot of what you already know, with a little of what you don't mixed in. Remember that a container is a Redux connected React component. We connect the React component to the Redux store using the `connect` method.

<!-- While we could try to mock out our store and test through the `connect` method, we're not going to do that. We didn't write `connect`, and it's a real challenge to test through it. Even the [Redux Testing Docs](https://redux.js.org/recipes/writing-tests#connected-components) suggest that this is unwise.

With that in mind, there are three main areas of our container that need to be tested; our `Component`, our `mapStateToProps` function, and our `mapDispatchToProps` function. -->

Lets take a look at our container to remind ourselves:

```js
// containers/AddTodoFormContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { handleSubmit, todos } = this.props;
    return (
      <section>
        <form onSubmit={ (e) => {
            e.preventDefault();
            handleSubmit(this.state.text, todos.length);
        }}>
          <input  value={this.state.text}
                  placeholder="Add A Todo"
                  onChange={(e) => this.setState({ text: e.target.value} )} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => dispatch(addToDo(text, id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
```

<section class="note">
### Some Context

In some projects out in the wild, you'll see the component imported into the container file, rather than all in one file. Both are reasonable approaches, the former being mostly for container reusability.
</section>

<section class="call-to-action">
### Let's Think

Take a moment to think about testing these connected components. Since this component is connected to the Redux store, what might happen when we import component into a test file and call `render()` (from React Testing Library) with the component? Will it go well for us? Why not?

<!-- The component is connected to the store, and if the component is rendered without a provider around it, then it has no store to connect to -->
</section>

With a connected component, any time we bring the component into a test, it will try to connect to the Redux store. But if the component is rendered on its own in the test, then it no longer has a `Provider` wrapped around it (like we would see in the `src/index.js` file around `App`).

So it no longer has access to a Redux store and can't connect! For unit and integration test where we are testing a component that is connected to the store, we must "provide" a redux store for that component to connect to.

Let's break it down. We need to:

* Test a component connected to the store
* Give that component a store to connect to
* A store is created and given to a `Provider` component and wrapped around a component
* So we need to make a store, give it to a provider, and wrap the component under test with that provider

Here is what that could look like in pseudocode:

```js
// AddTodoFormContainer test file

// ..other testing imports up here

// import the function needed to make a store
// import the component that provides the store to whatever it is wrapped around
// import the root reducer

it('can render AddTodoForm and see the form', () => {
  // make a new Redux store

  // render the component with the component under test (AddTodoFormContainer) wrapped in a Provider
  // this part is the crux of it all, so no worries if it's tough

  // check that the form is rendering as expected
});
```

<section class="call-to-action">
### Try it Out!

Take some time to fill in the pseudocode from above. Take it one line at a time, and phone a friend when you need to!
</section>

<section class="answer">
### Testing a Connected Component

```js
// AddTodoForm.test.js

import React from 'react';
import AddTodoForm from './AddTodoForm';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';


describe('AddTodoForm', () => {
  it('can render AddTodoForm and see the form', () => {
    const store = createStore(rootReducer);

    const { getByPlaceholderText } = render(<Provider store={store}><AddTodoForm /></Provider>);

    expect(getByPlaceholderText('Add A Todo')).toBeInTheDocument();
  });
});
```
</section>

If you want to get fancy with it and reduce the boilerplate around each component under test for every `it` block, then checkout how a special `render` function can be made from the React Testing Library [recipes docs](https://testing-library.com/docs/example-react-redux). Keep in mind this is not necessary for your projects.

<section class="note">
### Testing Functions Being Called

Note that with this style of test, since Redux is giving the component the function to call when the form is submitted, we don't have direct access to that function to check if it's called. Therefore, we cannot have the same style test as before where would check if a `jest.fn()` was invoked with the correct arguments...you can debate in your head for a few minutes on if you like that or not.
</section>

<section class="call-to-action">
### Break the Code!

Take out the `Provider` component in your test so that you're rendering only the `<AddTodoForm />`. What happens? What is the error? Why are you getting this error?

Note down this error because you might see it again in the future.
</section>

<!--
### Container Tests

When we go to test this container, as mentioned before, we don't want to test through `connect`. This means when importing into our test file, we don't want the default export `connect`, but instead want to import the component on it's own, as well as `mapStateToProps` and `mapDispatchToProps`. To achieve this, we'll need to add named exports to all three, like so:

```js
// containers/AddTodoFormContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    console.log(this.props);
    const { handleSubmit, todos } = this.props;
    return (
      <section>
        <form onSubmit={  (e) => {
            e.preventDefault();
            handleSubmit(this.state.text, todos.length);
        }}>
          <input  value={this.state.text}
                  placeholder="Add A Todo"
                  onChange={(e) => this.setState({ text: e.target.value} )} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  todos: state.todos
});

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => dispatch(addToDo(text, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
```

Now we can export everything individually, making it easier to test. The tests for the component will be exactly as we've tested those in the past. If you need a refresher, check out the [testing lesson](unit-testing-react.html). The new test we're going to need are for `mapStateToProps` and `mapDispatchToProps`. Let's start with `mapStateToProps`.

Make a new test file:  
`containers/AddTodoFormContainer.test.js`  

The key in testing `mapStateToProps` is understanding what it's role is. It will take in the state of the Redux store, and return to us an object that has parsed out just the data which our container will need.

A test description might be 'it should return an object with the todos array'

```js
// containers/AddTodoFormContainer.test.js

import { AddTodoForm, mapStateToProps, mapDispatchToProps } from '../containers/AddTodoForm';

describe('AddTodoFormContainer', () => {
  describe('AddTodoForm component', () => {
    // Write these tests on your own
    // You already know how!
  });

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      // Setup
      const mockState = {
        todos: [{text: 'Learn Redux!', id: 1}],
        filter: 'SHOW_ALL'
      };
      const expected = {
        todos: [{text: 'Learn Redux!', id: 1}]
      };

      // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });
});

```

<section class="call-to-action">
### Stop and Think

Why do we include the **filter** key in the `mockState`?
</section>

Ok, hopefully that wasn't too bad! Now let's turn our attention to `mapDispatchToProps`, what do we need to test here? `mapDispatchToProps` is similar to `mapStateToProps` in that it returns a object, however the values are pretty different. Each key/value pair represents a callback function, that will ultimately call dispatch.

Remember, we didn't write dispatch, so all we really need to test here is that dispatch is called with the correct action when one of our mapped prop functions is called. Let's take a look at how that is done:

```js
// containers/AddTodoFormContainer.test.js

import { AddTodoForm, mapStateToProps, mapDispatchToProps } from '../containers/AddTodoForm';
import { addTodo } from '../actions';

describe('AddTodoFormContainer', () => {
  describe('AddTodoForm component', () => {
    // Write these tests on your own
    // You already know how!
  });

  // mapStateToProps test here...

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addTodo action when handleSubmit is called', () => {
      // Setup
      const mockDispatch = jest.fn();
      const actionToDispatch = addTodo('Learn Redux!', 1);

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleSubmit('Learn Redux!', 1);

      // Expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
```

<section class="call-to-action">
### Discuss With a Partner

Assume we have another action `removeTodo`, and that our `todosReducer` digests it properly. Write a test that checks `dispatch` is called with this `removeTodo` action, whenever the `mappedProp` of `handleRemove` is called.
</section> -->

## Final Thoughts

Testing Redux can be your favorite thing in the world if you lean into it. All of the pieces of the Redux flow have been designed so that they are easy to test. You can do it, give it a shot!

## Resources
[Testing Section of Official Redux Docs](https://redux.js.org/recipes/writing-tests/)  
[Comprehensive Blog Post about Unit Testing Redux](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)  
[Blog Post About Testing Containers](http://www.wsbrunson.com/react/redux/test/2016/05/08/testing-redux-containers.html)  
