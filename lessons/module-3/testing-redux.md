---
title: Testing Redux
tags: React, Redux, Testing
module: 3
---

# Agenda

- Talk about the different types of tests related to Redux
- Work through Action Creator tests
- Work through Reducer tests
- Discuss how NOT to test Containers
- Work through mapStateToProps and mapDispatchToProps tests

# Learning Goals

- Know how to test Action Creators
- Know how to test Reducers
- Know how to test mapStateToProps and mapDispatchToProps

# Vocab

- Dispatch
- Pure functions
- Container
- Vocab from [Starting Up Redux](starting-up-redux.html)

## Getting Started

We're going to be using the TodoList application that we made when we were
exploring Redux for the first time. Go ahead and clone it, and switch to the
begin-testing branch:

```bash
git clone https://github.com/turingschool-examples/redux-lesson-boilerplate
cd redux-lesson-boilerplate
git fetch
git checkout begin-testing
```

### Unit Testing

Unit tests, aim to modularly test individual pieces of code as throughly as
possible. In React apps, these targeted pieces include classes, functions,
components, and helper files. Unit testing makes your life easier as a
developer, and makes it simpler to refactor your code. When testing in Redux,
most of our tests will be unit tests.

### Testing in Redux  

In order to test Redux, we need to first consider the pieces that will require
testing. We'll need Action Creator tests, Reducer tests, Container tests, and
tests for any Redux Middleware we may be using. For this lesson, we're just
going to focus on the first three.

Testing in Redux can actually be a very plesant experience, because all the
functions you'll be writing while using Redux are *pure*. This means that given
the same inputs for a function, we'll always get back the same output. For more
explaination of pure functions, check out [this
post](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/).

Let's start with Action Creator tests.

### Action Creators

Action creators in Redux are functions that return an Action object. Actions
describe changes to our Redux store. Action creators are *pure*, and thus are
not too difficult to test.

---
_**Stop and think**: Why do we even need Action Creators? Couldn't we just create
objects where we need them?_

---

Action Creators are functions that return a plain object. When testing action
creators we want to test that the returned object is what we expect, based on
the input parameters.

Take for example our `addTodo()` action.  

```js
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}
```

Given a string as text, (let's say "Go to the Vault"), we expect it to return an 
object with a key of `'ADD_TODO'` and the text "Go to the Vault".  

### Action Creator Tests
`actions/todos.test.js`  

Step one, let's just make sure everything is wired up.

```js
import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    expect(true).toEqual(false)
  })
})

```
Run `npm test` to run your suite. We should see it fail, because true doesn't
equal false.

```bash
expect(received).toEqual(expected)

Expected value to equal:
  false
Received:
  true
```

Great, our test suite is ready to run, lets actually write our action test.

```js
import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    // Setup
    const text = "Go to the Vault"
    const id = 1
    const expectedAction = {
      type: 'ADD_TODO',
      text: "Go to the Vault",
      id: 1
    }

    // Execution
    const result = actions.addTodo(text, id)

    // Expectation
    expect(result).toEqual(expectedAction)
  })
})
```

#### YOUR TURN!

Write two more unit tests to cover the other two Action Creators.

### Reducers

Recall that Reducers digest actions that have been dispatched to the store, and
then return a new state. In other words, a reducer receives an action, and
decides what the new state will be based on the type of the action. We want to
test that behavior.

Take a look at our todos reducer.

```js
// reducers/todosReducer.js

const todosReducer = (state=[], action) => {
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

export default todosReducer
```

### Reducer Tests

Make the new test file:  
`reducers/todosReducer.test.js`  

To test this reducer, let's start by testing what happens if the action is
undefined. What we want to have happen in this case is for the reducer to return
whatever the state was when the reducer function was called.

```js
import todosReducer from '../todosReducer'

describe('todosReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = []

    // Execution
    const result = todosReducer(undefined, {})

    // Expectation
    expect(result).toEqual(expected)
  })
})

```

#### YOUR TURN!
Test the todos reducer for what we expect to see in State if we...

* hit the "ADD_TODO" case

```js
it('should return state with a new todo', () => {
})
```

* hit the "TOGGLE_TODO" case

```js
it('should toggle the completed status of a new todo', () => {
})
```

### Containers

Testing React Containers is a lot of what you already know, with a little of
what you don't mixed in. Remember that a container is just a Redux connected
React component. We connect the React component to the Redux store using the
`connect` method.

While we could try to mock out our store, and test through the `connect` method,
we're not going to do that. We didn't write `connect`, and it's a real challenge
to test through it. Even the [Redux Testing Docs](https://redux.js.org/recipes/writing-tests#connected-components)
suggest that this is unwise.

With that in mind, there are three main areas of our container that need to be
tested; our Component, our mapStateToProps function, and our mapDispatchToProps
function.

Lets take a look at our container to remind ourselves:

```js
// containers/AddTodoFormContainer.js

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    console.log(this.props);
    const { handleSubmit, todos } = this.props;
    return (
      <section>
        <form onSubmit={  (e) => {
              e.preventDefault()
              handleSubmit(this.state.text, todos.length)
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

const mapStateToProps = (state) => {
  console.log(state)
  return { todos: state.todosReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, id) => {
      console.log(text, id);
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
```

---
_**Context:** In some projects, you'll see the component imported into the
container file, rather than all in one file. Both are reasonable approaches,
the former being mostly for container reusability._

---

### Container Tests

When we go to test this container, as mentioned before, we don't want to test
through `connect`. This means when importing into our test file, we don't want
the default export `connect`, but instead want to import the component on it's
own, as well as mapStateToProps and mapDispatchToProps. To achieve this, we'll
need to add named exports to all three, like so:

```js
// containers/AddTodoFormContainer.js

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

export class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    console.log(this.props);
    const { handleSubmit, todos } = this.props;
    return (
      <section>
        <form onSubmit={  (e) => {
              e.preventDefault()
              handleSubmit(this.state.text, todos.length)
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

export const mapStateToProps = (state) => {
  console.log(state)
  return { todos: state.todosReducer }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, id) => {
      console.log(text, id);
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
```

Now we can export everything individually, making it easier to test. The tests
for the component will be exactly as we've tested those in the past. If you need
a refresher, check out the [testing lesson](unit-testing-react.html). The new
test we're going to need are for `mapStateToProps` and `mapDispatchToProps`.
Let's start with `mapStateToProps`.

First, create a new file containers/AddTodoFormContainer.test.js

The key in testing `mapStateToProps` is understanding what it's role is. It will
take in the state of the Redux store, and return to us an object that has parsed
out just the data which our container will need.

A test description might be 'it should return an object with the todos array'

```js

// containers/AddTodoFormContainer.test.js

import { AddTodoForm, mapStateToProps, mapDispatchToProps }

describe('AddTodoFormContainer', () => {
  describe('AddTodoForm component', () => {
    // Write these tests on your own
    // You already know how!
  })

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      // Setup
      const mockState = {
        todos: [{text: 'Learn Redux!', id: 0}],
        filter: 'SHOW_ALL'
      }
      const expected = {
        todos: [{text: 'Learn Redux!', id: 0}]
      }

      // Execution
      const mappedProps = mapStateToProps(mockState)

      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })
})

```

---
_**Stop and think:** Why do we include the **filter** key in the mockState?_

---

Ok, hopefully that wasn't too bad! Now let's turn our attention to
`mapDispatchToProps`, what do we need to test here? `mapDispatchToProps` is
similar to `mapStateToProps` in that it returns a object, however the values
are pretty different. Each key/value pair represents a callback function, that
will ultimately call dispatch.

Remember, we didn't write dispatch, so all we really need to test here is that
dispatch is called with the correct action when one of our mapped prop functions 
is called. Let's take a look at how that is done:

```js

// containers/AddTodoFormContainer.test.js

import { AddTodoForm, mapStateToProps, mapDispatchToProps }
import { addTodo } from '../actions'

describe('AddTodoFormContainer', () => {
  describe('AddTodoForm component', () => {
    // Write these tests on your own
    // You already know how!
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addTodo action when handleSubmit is called', () => {
      // Setup
      const mockDispatch = jest.fn()
      const actionToDispatch = addTodo('Learn Redux!', 0)

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handleSubmit('Learn Redux!', 0)

      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})

```

---
_**Discuss with a partner:** Assume we have another action removeTodo, and that
our todosReducer digests it properly. Write a test that checks dispatch is
called with this removeTodo action, whenever the mappedProp of handleRemove is
called._

---

### Final Thoughts

Test Redux can be your favorite thing in the world if you lean into it. All of
the pieces of the Redux flow have been design so they are easy to test. You can
do it, give it a shot!

There are some additional resources below if you'd like to dive into the topic
further.

### Resources
[Testing Section of Official Redux Docs](http://redux.js.org/docs/recipes/WritingTests.html)  
[Comprehensive Blog Post about Unit Testing Redux](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)  
[Blog Post About Testing Containers](http://www.wsbrunson.com/react/redux/test/2016/05/08/testing-redux-containers.html)  
