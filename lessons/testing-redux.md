---
title: Unit Testing Redux
tags: React, Redux, Testing
---

### Unit Testing Redux

Unit tests, as always, aim to modularly test individual pieces of code as thoroughly as possible. In React apps, these targeted chunks of code include classes, functions, components, helper files...etc. Things that you refactor and split up. Unit testing makes your life as a developer easier and makes refactoring possible.  

The goal of unit testing is for each function, after giving your test the expected arguments, do you get back what you expected?

An interesting comment I read in [this blog post](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking) referred to unit testing as "tests written for developers", whereas integration (or acceptance) tests are written for those who can't code.  

In order to test Redux, there are a few things you need to mentally organize. Tests in Redux include Action tests, Reducer tests, Component tests, and any other middleware or additional libraries you may have included (like `ImmutableJS`).

Let's look at an example of a unit test in English.

"I want to make sure that my todos reducer returns an array with an incremented length value in my state after receiving the ADD_TODO event."

This differs from an integration test which alternatively would make sure that "As a user, when I'm on the home page, and I type in a Todo, and I click "Add Todo" then I see my new Todo on the page".

Let's start with Action tests.

### Action Creators

Action creators in Redux are functions that simply return a plain object. When testing action creators we want to test whether the correct action creator was called and also whether the right action was returned.

Take for example our `addTodo()` action.

```
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: Date.now(),
    text,
    completed: false
  }
}
```

Given a string as text, (let's say "Find A Pumpkin"), we expect it to return an object with a key of `'ADD_TODO'` and data containing the ID, the text "Find A Pumpkin", and a default value of "completed: false".

### Setup Testing with Jest

`npm i -D jest`  
`npm i -D babel-jest`  

Make sure you have the following in your `.babelrc` file:  

```
  {
    "presets": ["es2015"]
  }
```

Then make a quick change to the test part of `scripts` in your `package.json`.

```
{
  "scripts":{
    ...
    "test": "jest",
    "test:watch": "npm test -- --watch"
    ...
  }
}
```

Next, let's set up our test.  

### Action Test
`test/actions/todos.test.js`  

Step one, let's just make sure everything is wired up.

```
import * as actions from '../../actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    expect(true).toEqual(true)
  })
})
```
Run `npm test` to run your suite once, or `npm run test:watch` to test on any file changes.  
Assuming you have a passing test, let's add some substance.

```
import * as actions from '../../actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = "Find A Pumpkin"
    const expectedAction = {
      type: 'ADD_TODO',
      text,
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})
```

### Reducer Tests

Recall that Reducers connect actions to state, returning an updated state based on a given action.

In other words, a reducer receives an action and decides how to change the state based on the behavior defined in the action. We want to test that behavior.

How about we look at our todos reducer.

```
//reducers/todos.js

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: action.id, text: action.text, completed: false}]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }
        return Object.assign({}, todo, {completed: !todo.completed})
      })
    default:
      return state
  }
}
```
Make the correct directory:  
`test/reducers/todos.test.js`  

To test this reducer, let's start by testing what happens if we don't pass this reducer any action. We want to get the default state back, which for us is an empty array.

```
import reducer from '../../reducers/todos'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })
})

```

YOUR TURN! Test the todos reducer for what we expect to see in State if we Add a Todo.

### Component Tests
As we've seen, it's important to separate our React components into "Presentational" vs "Container".

Presentational component testing generally involves minor mocking and stubbing, and can be thrown into the "Testing React" bucket which you are all familiar with.

Container components, however, are hooked up to Redux and use the `connect` method. Connect allows components to receive props directly from the redux `store`, rather than having to pass them through parent components. Said props are accessed using the method `mapStateToProps`. Connect is a beast to try to test, and even the [Official Redux Testing Documentation](http://redux.js.org/docs/recipes/WritingTests.html) suggests somewhat ignoring connect and testing the component itself.  

But, because we're unique snowflakes, let's give it a go.  

First, if you don't have it already, make sure Enzyme and it's buddy are installed.  
`npm i -D enzyme react-addons-test-utils`  

Let's look at the AddTodoForm Component, and AddTodo Container.

Normally, to import a component into a test you would simply include the line `import AddTodoForm from './path/AddTodoForm'` or something along those lines.  With Redux, our component is wrapped in a container component that passes State to it using the `connect()` method. This means that the component that is rendered is actually a `<Connect />` component, and not the `<AddTodoForm />` component itself.

Sometimes it's important to test the interaction with Redux, in which case you would wrap it in a <Provider> component and create a store designed specifically for a particular unit test. In order to simply test the rendering of the component itself, you must export the undecorated (without Connect) component in the container file.

This means that when importing said component in your test, you need to grab it with curly braces from the modules being exported from the container file.

```
// test/components/AddTodoForm.test.js

import React from 'react'
import { shallow } from 'enzyme'
import { AddTodoForm } from '../../containers/AddTodo'

function setup() {
  const props = {
    onSubmit: jest.fn()
  }

  const wrapper = shallow(<AddTodoForm {...props} /> )

  return {
    props,
    wrapper
  }
}
```

Then let's confirm that it renders a form (we'll keep this test simple for now, although in real life you would need a beefier test).

```
...

describe('components', () => {
  describe('AddTodoForm', () => {

    it('should render a form', () => {
      const { wrapper } = setup()

      expect(wrapper.find('form').length).toEqual(1)
      // should test other elements here
    })

  })
})

```

And finally check that when the Add Todo button is clicked that it calls the function we expect. We've set it up to mock a function call with `jest.fn`.

```
 ...

describe('components', () => {
  describe('AddTodoForm', () => {

    it('should render a form', () => {
      const { wrapper } = setup()

      expect(wrapper.find('form').length).toEqual(1)
    })

    it('should call addTodo when Add Todo button is clicked', () => {
      const { wrapper, props } = setup()

      wrapper.find('button').simulate('click')

      expect(props.onSubmit).toBeCalled()

      // Or to verify how many times a function has been called
      expect(props.onSubmit.mock.calls.length).toBe(1)
    })

  })
})

```

### Middleware Testing  

For async action creators that hit a third party middleware (such as [redux thunk](https://github.com/gaearon/redux-thunk)), you'll need to completely Mock out the redux store (hence the difficulty). There are tools for this like [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store), or [nock](https://github.com/pgte/nock) to replicate HTTP requests.  


### Resources
[Testing Section of Official Redux Docs](http://redux.js.org/docs/recipes/WritingTests.html)
[Comprehensive Blog Post about Unit Testing Redux](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)

### Answers

Test ADD_TODO action in todos reducer:   

```
it('should handle ADD_TODO', () => {
  expect(
    reducer([], {
      type: 'ADD_TODO',
      text: 'Carve batman'
    })
  ).toEqual(
    [
      {
        id: Date.now(),
        text: "Carve batman",
        completed: false
      }
    ]
  )
})
```
