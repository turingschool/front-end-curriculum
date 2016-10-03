---
title: Redux Round Two
tags: React, JavaScript, Webpack, Redux
---

FOLLOW UP:
  - How does it know which reducer file to grab?
  - Deconstruct how state is updated in reducers - ...state stuff
  - Map out life cycle of redux on paper

### Game Plan
  - Talk about structuring a Redux app
  - Review key Redux concepts
  - Dig into essential Redux methods
  - Build a slice of a Todo App
  - Look at a completed App - [Working Repo](https://github.com/martensonbj/redux-second-look)

![Mockup Image](http://i.imgur.com/XSEWgwR.png)

### LifeCycle of a Redux App

![Redux Diagram](https://i.redd.it/hl2aytgofz6x.png)

### Review of Redux Key Concepts

*Actions*  
Objects. Recall that every component will do at least two things. It will render itself to the DOM after dealing with necessary data in "State", and it will potentially interact with user interaction through "Actions". Every action has a type, and a payload of information that gets passed on to the reducer.

*Action Creators*  
Functions that receive data from a DOM event and return a specific action formatted as a JSON object. Think of Action Creators like component organizers - when an event fires, they gather and organize any information needed to make changes to state and pass it on in a neat little bundle to the reducer.

*Reducers*  
Functions. Take state from Redux, and our bundle of information from 'actions' from our Action Creator and return a new state that is updated in our Redux store.

Reducer functions get called by the "Container" when there is a user action. When the reducer changes the state, Redux passes that information to any components that need to know about it which triggers the React engine to re render the component.

*Presentational Components*  
Synonymous with a dumb or stateless component. Presentational components receive data from container/smart/stateful components and render themselves accordingly.

*Container Components*
Synonymous with smart, or stateful components. These are parent components to Presentational Components that deal with redux, state, actions etc. Containers pass data to the presentational component.

### New Redux Concepts

*`connect()`*  
Connects a React component to the Redux store. Does not modify anything, actually returns a new connected component that wraps around any existing components.  

Takes at least one component, either mapStateToProps or mapDispatchToProps which generally are each defined outside of this function. (Note: There are other arguments that we will not get into here, such as `mergeProps` and `options`)

**Example:**  

```
  connect(mapStateToProps, mapDispatchToProps)
```

*`[mapStateToProps(state, [ownProps]): stateProps](Function)`*  
If passed into `connect()`, the component will subscribe to Redux store updates. Any time the store is updated, `mapStateToProps` will be called and will pass along the updated props. If `ownProps` is specified, its value will be what is passed as props to the component.

*`[mapDispatchToProps(dispatch, [ownProps]): dispatchProps](Object or Function)`*  
By default injects the `dispatch()` method into your component's props, which connects any event listeners to a designated action and reducer. If `ownProps` is specified, its value will be what is passed as props to the component. If an object is passed as an argument, anything inside will be assumed to be a Redux action creator. Functions will be given access to `dispatch()`

*`<Provider store>`*  
Typically, this component is wrapped around your application's root component. This allows the `connect()` method in nested components to have access to the Redux store.

**Example:**:  

```
render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('application')
)
```

*Middleware*  
Middleware is code inserted between the code receiving a request and the code generating a response. In other words (straight from the docs), it **provides a third party extension point between dispatching an action and the moment it reaches the reducer**. There are tons of examples of middleware usage in a React-Redux app, but a big reason is to make asynchronous API calls to hit a database.

**Example:**
(`hitTwitterAPI` is a made-up function that makes a request to some third party API, for instance.)

```
let store = createStore(
  reducers,
  applyMiddleware(hitTwitterApi)
  )
```

*Containers*  
"Smart" components that are aware of Redux and connected to the redux store. They wrap around presentational components, handing down any data as props as needed.

### Organizing Our App
Implementing Redux forces you to think about your app from a high-level perspective, in terms of the data you need to manage.

Let's start by looking at how to organize the directory structure.  

```
actions/
app/
build/
components/
containers/
reducers/
test/
.babelrc
.gitignore
package.json
README.md
webpack.config.js
```

If you are coding along, go ahead and create the missing directories now.  
`mkdir actions components containers reducers test`  

Let's take a second to look at our list of components.

What components do you foresee being necessary? What actions? How are these going to be organized?

**Components**
  - Add Todo Form
  - List of Todos
  - Filter(s)
  - Todo Item
  - Footer

![Components Deconstructed](http://i.imgur.com/DrXdU4s.png)

Thinking back to our first look at Redux, we know that each component is going to (potentially) be connected to state, and have behavior called "actions" that pass along information to update that state. Let's break down what our components might need.

**AddTodo:**
  - State:  
    - None. (It's an input field and a button. Nothing about the rendering is changed based on user interaction)

  - Actions: "ADD_TODO"

   We have a form with a submit button, on click we need it to grab the value from the input field, give it an ID, and maybe indicate that it has not been completed on default. Our action object would look something like this:  

```
  {
    type: "ADD_TODO",
    payload: { data: "Go to the Vault", id: 1, completed: false }
  }
```

**TodoList:**
  - State:
    - Needs to have a list of todos (`[]`)
    - Maybe something to indicate if a filter is turned on.

  - Actions: "TOGGLE_TODO"

    Each individual todo-list item will have an on click even that can mark itself as complete. When this happens, we need to update the todo list item and tell our other components. The information needed to make this happen is simply the id of the todo-list item.

```
    {
      type: "TOGGLE_TODO",
      payload: { id: ### }
    }
```

**Filter**
  - State:
    - Which Filter is currently applied (ie: all, complete, incomplete)

  - Actions: "SET_FILTER"  

  Tells other components which filter has been selected, and therefore which todo list items to display. This means we need it to know which filter is active.

```
  {
    type: "SET_FILTER",
    payload: { filter: "Completed" }
  }
```

### Time For Action Creators

So based on our thorough planning, we have three actions: "ADD_TODO", "TOGGLE_TODO", and "SET_FILTER". This means we need three Action Creators.

Recall that an Action Creator is a function that takes in data from a DOM event, and returns an action object that is sent to a reducer.  

`touch actions/index.js`  

```
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: Date.now(),
    text,
    completed: false
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    filter
  }
}
```

### Add Reducers

Once our actions have been filtered through our Action Creator, we need a couple reducers to handle what that means in terms of updating our application's state.   

Let's take a second to think about what we need.
  - We need something to handle our todos
  - And something to deal with filters.   

If a user wants to add a todo, we need an reducer that takes in the information from the ADD_TODO action and updates our state. Likewise with toggling a TODO as completed.  

For our filters, we need to set a default filter (maybe "show all?"), and then we need to toggle which status we want to display based on if a filter has been selected by a user.  

This means we want two reducers, which we will combine into a `rootReducer` in our next step.  

First, create the two reducers.  

`touch reducers/todos.js reducers/setFilter.js`  

```
// reducers/todos.js  

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

export default todos
```

```
// reducers/setFilter.js

const setFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default setFilter
```

Recall from our first look at redux that your app can only import one reducer, because to create a redux store you need to pass it one exported file. We currently have two reducers, which means we need to combine then.

`touch reducers/index.js`  

```
// reducers/index.js

import { combineReducers } from 'redux'
import todos from './todos'
import setFilter from 'setFilter'

const reducers = combineReducers({
  todos,
  setFilter
})

export default reducers
```

### Build Out Components

For each component we have, we need a container component wrapped around it to handle the messy logic, and a presentational component nested within to render that information. (Think back to the deconstructed mockup with all the crazy arrows.)

### Presentational Components
Let's start with building out our presentational components.

#### `<AddTodoForm />`
This will be our form. We only need an input field and a submit button. The `onSubmit` callback is coming in as Props from the container component that hasn't been written yet.

`touch components/AddTodoForm.js`

```
// components/AddTodoForm.js

import React from 'react'

let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <section>
      <form onSubmit={ (e) => {
            e.preventDefault()
            onSubmit(input.value)
      }}>
        <input ref={ node => { input = node }} />
        <button>Add Todo</button>
      </form>
    </section>
  )
}

export default AddTodoForm
```

#### `<Todo />`
Before we deal with a list of Todos, let's set up our individual Todo component. It makes sense to set this up as a `<li>` html element since an individual todo will be part of a larger `<ul>` section. We will need some text, for whatever the user inputs as the value of the Todo, and an `onClick` event for if the user marks a todo as completed.  

`touch components/Todo.js`  

```
// components/Todo.js

import React from 'react'

const Todo = ({ onClick, completed, text }) => {
  (
    <li
      onClick={ onClick }
      style={
        { textDecoration: completed ? 'line-through' : 'none' }
      }
    >
    { text }
    </li>
  )
}

export default Todo
```

#### `<TodoList />`  

Now to render a list of all "todos" which will come from an array stored in our state. The array of existing todos and the logic behind an onClick function (to trigger whether or not the item is marked complete) will be sent in from the parent container.

`touch components/TodoList.js`

```
// components/TodoList.js

import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0) {
    return <h3>You have nothing to do!</h3>
  }

  <ul>
    { todos.map(todo => {
      <Todo
        key={todo.id}  
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />  
    })}
  </ul>
}

export default TodoList
```

#### `<FilterLink />`
So each of our given filters will be rendered as either a link or plain text depending on if it's active or not. They'll each need a boolean, text to display, and a callback to trigger the boolean to change.

`components/FilterLink.js`

```
// components/FilterLink.js

import React from 'react'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{ children }</span>
  }

  <a  href="#"
      onClick={ (e) => {
        e.preventDefault()
        onClick()
      }}
  >
  { children }
  </a>

}

export default FilterLink
```

#### `<Footer />`
Our list of available filters is displayed as a row of links in our footer, which will each be a container component. Lets put together the rendering component now.

`components/Footer.js`

```
// components/Footer.js

import React from 'react'
import Filter from '../containers/Filter'

const Footer = () => (
  <footer>
    <Filter filter="SHOW_ALL">All Todos</Filter>
    <Filter filter="SHOW_ACTIVE">Active</Filter>
    <Filter filter="SHOW_COMPLETED">Completed</Filter>
  </footer>
)

export default Footer
```

#### `<App />`
Let's stick all of the presentational components in a wrapper component.

`touch components/App.js`

```
// components/App.js

import React from 'react'
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends React.Component {
  render () {
    return (
      <section>
        <AddTodo />
        <TodoList />
        <Footer />
      </section>  
    )
  }
}

export default App
```

### Container Components
This is where the magic happens!

Now that we have our presentational components ready to display the appropriate information, we need to build out the container components that will handle what that information is.  

Think of container components as a type of shell that gets a high five from redux, and wraps around a dumb component to hand it any information it needs to render. This means that each of our containers need to import the presentational component it cares about using Redux's built in methods `connect` and `dispatch`. We will also be building two objects `mapDispatchToProps`, and `mapStateToProps` that use these methods.

Let's start with our AddTodo container. Our container element needs the `connect` method from Redux, the `addTodo` action we defined in our ActionsCreator, and the `AddTodoForm` presentational component to send this information to.

`touch containers/AddTodo.js`

```
// containers/AddTodo.js

import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapDispatchToProps=(dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    }
  }
}

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo
```

Take a second to notice that the prop `onSubmit` is exactly what our `AddTodoForm` component is expecting when it renders. Because of redux our container is hooked up to the required action that passes the new component information through our reducers to update state.

#### `<FilteredTodoList />`
Next up is the TodoList container which is a bit more complicated. We need to get all of the todos, including which filter is being applied (if any), and then pass that information to the presentational component as props.

// FilteredTodoList.js  

```
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Based on what filter the user has clicked, what todos do we need to manipulate?

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// What part of state does the component care about?

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.setFilter)
})

// What are we handing down as an event listener (also coming through as a prop), and what reducer is organizing what that action needs?

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default FilteredTodoList
```

#### `<Filter />`
Next is the Filter container component. Remember we created three different filters that are displayed as links for `all`, `active`, or `completed`. The component needs to know which filter has been selected.

```
import { connect } from 'react-redux'
import { setFilter } from '../actions'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state, props) => ({
  active: props.filter === state.setFilter
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(setFilter(props.filter))
  }
})

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default Filter
```

#### `index.js`

FINALLY, we need a file that will tell our app what to render to the DOM, pulling in all the necessary pieces. The file already exists as the entry point of our app (`app/index.js`), but we need to beef it up.

```
// app/index.js

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers'

import App from '../components/App'

let store = createStore(reducers)

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('application')
)
```

### TADA!
You just built a React-Redux To-Do list. 

### Resources
[Official Redux Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
[Original Todo List Redux  Tutorial](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.fn8hsv6vf)
