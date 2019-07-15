---
title: Starting Up Redux - Wrap Up
tags: React, JavaScript, Webpack, Redux
module: 3
---

### Presentational Components
Let's finish building out our presentational components.

#### `<Todo />`
Before we deal with a list of Todos, let's set up our individual Todo component. It makes sense to set this up as a `<li>` html element since an individual todo will be part of a larger `<ul>` section. We will need some text, for whatever the user inputs as the value of the Todo, and an `onClick` event for if the user marks a todo as completed.  

`touch src/components/Todo.js`  

```js
// src/components/Todo.js  

import React from 'react'

const Todo = ({ handleClick, completed, text }) => {
  return (
    <li
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      { text }
    </li>
  )
}

export default Todo

```

#### `<TodoList />`  

Now to render a list of all "todos" which will come from an array stored in our state. The array of existing todos and the logic behind an `onClick` function (to trigger whether or not the item is marked complete) will be sent in from the parent container.

`touch src/components/TodoList.js`  

```js
import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0) {
    return <h3>You have nothing to do!</h3>
  }

  return(
    <ul>
    { todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          {...todo}
          handleClick={() => onTodoClick(todo.id)}
        />
      )
    }) }
    </ul>
  )
}

export default TodoList
```

#### `<FilterLink />`  

Each of our given filters will be rendered as either a link or plain text depending on if it's active or not. They'll each need a boolean, text to display, and a callback to trigger the boolean to change.

`src/components/FilterLink.js`  

```js
import React from 'react'

const FilterLink = ({ active, children, handleClick }) => {
  if (active) {
    return <span>{ children }</span>
  }

  return (
    <a  href="#"
        onClick={ (e) => {
          e.preventDefault()
          handleClick()
        }}
    >
      { children }
    </a>
  )
}

export default FilterLink
```

#### `<FilterMenu />`  

Our list of available filters is displayed as a row of links in our filter menu, which will each be a container component. Lets put together the rendering component now.

`touch src/components/FilterMenu.js`

```js
// src/components/FilterMenu.js

import React from 'react'
import FilterContainer from '../containers/FilterContainer'

const FilterMenu = () => {
  return (
    <section className="FilterMenu">
      <FilterContainer filter="SHOW_ALL">All Todos</FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">Active</FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">Completed</FilterContainer>
    </section>
  )
}

export default FilterMenu
```

### Remaining Container Components

#### `<FilteredTodoList />`  

Next up is the TodoList container which is a bit more complicated. We need to get all of the todos, including which filter is being applied (if any), and then pass that information to the presentational component as props.

`touch src/containers/TodoListContainer.js`  

```js
// src/containers/TodoListContainer.js  

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Based on what filter the user has clicked, what todos do we want to work with?

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return new Error('Unknown filter: ' + filter)
  }
}

// What part(s) of state does the component care about?

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todosReducer, state.filterReducer)
})

// What are we handing down as an event listener (also coming through as a prop), and what reducer is organizing what that action needs?

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
```

#### `<Filter />`
Finally is the Filter container component. Remember we created three different filters that are displayed as links for `all`, `active`, or `completed`. The component needs to know which filter has been selected.  

`touch src/containers/FilterContainer.js`  

```js
import { connect } from 'react-redux'
import { setFilter } from '../actions'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state, props) => ({
  active: props.filter === state.setFilter
})

const mapDispatchToProps = (dispatch, props) => ({
  handleClick () { dispatch(setFilter(props.filter)) }
})

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default FilterContainer
```

#### `<App />`  
Update the wrapper component.  

```js
// src/components/App  

import React, { Component } from 'react'
import AddTodoFormContainer from '../containers/AddTodoFormContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FilterMenu from '../components/FilterMenu'

const App = () => {
  return (
    <section>
      <AddTodoFormContainer />
      <TodoListContainer />
      <FilterMenu />
    </section>
  )
}

export default App
```