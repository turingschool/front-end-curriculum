---
title: Unit Testing Redux
tags: React, Redux, Testing
---

### FOLLOW UP
Webpack configuration
Testing components
Rewire??
Redux Thunk
Redux Mock Store
Fetch - isomorphic-fetch

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

### Component Tests ????????????
As we've seen, it's important to separate our React components into "Presentational" vs "Container".

Dumb component testing generally involves mocking and stubbing, and can be thrown into the "Testing React" bucket. For this lesson, we will focus mostly on Smart components that involve the redux `connect` method.

Connect allows components to receive props directly from the redux `store`, rather than having to pass them through parent components. Said props are accessed using the method `mapStateToProps`. Connect is also a beast to try to test, and even [Official Redux Testing Documentation](http://redux.js.org/docs/recipes/WritingTests.html) suggests somewhat ignoring connect and testing the component itself.  

Lets take our LikesCounter component.  
???????

### Middleware Testing  

For async action creators that hit a third party middleware (such as [redux thunk](https://github.com/gaearon/redux-thunk)), you'll need to completely Mock out the redux store. There are tools for this like [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store), or [nock](https://github.com/pgte/nock) to replicate HTTP requests.


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
