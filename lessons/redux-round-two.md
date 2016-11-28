---
title: Redux Round Two
tags: React, JavaScript, Webpack, Redux
---

### Game Plan
  - Why Redux?
  - Break down Redux concepts
  - Build a slice of a Todo App in Redux
  - Look at a completed App
    - [Working Repo](https://github.com/martensonbj/redux-second-look)
  - Explore Testing

// FIND ARTICLE AND SETUP GROUPS  

### LifeCycle of a Redux App

![Redux Diagram](https://i.redd.it/hl2aytgofz6x.png)

### Redux Key Concepts

*Store*  
The essence of Redux. Holds all of your application's state(s) and data in a giant JavaScript object.

*Actions*  
Objects. Recall that every component will do at least two things. It will render itself to the DOM after dealing with necessary data in "State", and it will potentially interact with user interaction through "Actions". Every action has a type, and a payload of information that gets sent to the store using `store.dispatch()`.

```
{
  type: 'ADD_TODO'
  text: 'Get a pumpkin'
}
```

*Action Creators*  
Functions. They receive data from a DOM event and return a specific action formatted as a JSON object. Think of Action Creators like component organizers - when an event fires, they gather and organize any extra information needed to make changes to state and pass it on in a neat little bundle to the reducer.

```
function addTodo(text) => {
  type: 'ADD_TODO',
  text: text
}
```

*Reducers*  
Functions. Take state from Redux, and our bundle of information from our Action Creator and return a new state that is updated in our Redux store. Redux then passes that new state to any components that need to know about it which triggers the React engine to re-render the component.

*Container Components*  
Synonymous with smart, or stateful components. These are parent components to Presentational Components that deal with redux, state, actions etc. Containers pass data to the presentational component, making the connection between the Redux store and the presentational components that need to be rendered.

### More Concepts

*Presentational Components*  
Synonymous with a dumb or stateless component. Presentational components receive data from container/smart/stateful components and render themselves accordingly.


#### Connect Magic

*`connect()`*  
Connects a React component to the Redux store. Behind the scenes it actually returns a new connected component that wraps around any existing components.  

Takes at least one argument, either `mapStateToProps` or `mapDispatchToProps` or both.

*`mapStateToProps(state, [ownProps]) `*  
Function.   

If passed into `connect()`, the component will subscribe to Redux store updates. Any time the store is updated, `mapStateToProps` will be called and will pass along the updated props. If `ownProps` is specified, its value will be what is passed as props to the component.

*`mapDispatchToProps(dispatch, [ownProps])`*  
Object or Function.  

By default injects the `dispatch()` method into your component's props, which connects any event listeners to a designated action and reducer. If `ownProps` is specified, its value will be what is passed as props to the component. If an object is passed as an argument, anything inside will be assumed to be a Redux action creator.

```
containers/ComponentThatCaresContainer.js
```

```js
import ComponentThatCares from './ComponenThatCares.js'  

const mapStateToProps = () => {
  // Some code to connect Component to State within the Redux Store
}

const mapDispatchToProps = () => {
  // Some code to connect Component to app Actions and therefore Reducers within Redux Store
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentThatCares)
```

*`<Provider store={store}>`*  
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
Middleware is code inserted between the part of your app receiving a request and the part that generates a response. In other words (straight from the docs), it **provides a third party extension point between dispatching an action and the moment it reaches the reducer**. There are tons of examples of middleware usage in a React-Redux app, but a big reason is to make asynchronous API calls to fetch data from outside your app.

**Example:**
(`hitTwitterAPI` is a made-up function that makes a request to some third party API, for instance.)

```
let store = createStore(
  reducers,
  applyMiddleware(hitTwitterApi)
  )
```

### Organizing An App

Implementing Redux forces you to think about your app from a high-level perspective, in terms of the data you need to manage and how the state of your app will change.

Let's start by looking at how to organize a directory structure in broad terms. It is common to put actions, components, containers, and reducers in their own folders.   

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

If you are coding along, you'll need the following directories:  
`mkdir actions components containers reducers test`  

#### What We Are Building:  

![Imgur](http://i.imgur.com/XSEWgwR.png)

Let's take a second to break this down into components.

What components do you foresee being necessary? What actions? How are these going to be organized?

**Components**
  - Add Todo Form  
  - List of Todos  
  - Todo Item  
  - Filter(s)  
  - Footer  

Thinking back to our first look at Redux, we know that each component is to render something to the DOM based on state, and they will have behavior called "actions" that pass along information to update that state. Let's break down what our components need to facilitate functionality.

**AddTodo:**  
  State:  
    - None. (It's an input field and a button. Nothing about the rendering is changed based on user interaction)  

  -Actions: "ADD_TODO"  

   We have a form with a submit button, on click we need it to grab the value from the input field. Our action object would look something like this:  

```
  {
    type: "ADD_TODO",
    payload: { text: "Go to the Vault" }
  }
```

**TodoList:**  
  State:  
    - Needs to have a list of todos (`[]`)  

  Actions: "TOGGLE_TODO"  

  Each individual todo-list item will have an on-click even that can mark itself as complete. When this happens, we need to update the todo list item. The information needed to make this happen is simply the id of the todo-list item.

```
    {
      type: "TOGGLE_TODO",
      payload: { id: ### }
    }
```

**Filter**  
  State:  
    - Which Filter is currently applied (ie: all, complete, incomplete)  

  Actions: "SET_FILTER"  

  Tells other components which filter has been selected, and therefore which todo list items to display. This means we need it to know which filter is active.

```
  {
    type: "SET_FILTER",
    payload: { filter: "Completed" }
  }
```

### Time For Action Creators

So based on our thorough planning, we have three actions: "ADD_TODO", "TOGGLE_TODO", and "SET_FILTER". This means we need three Action Creators.

Recall that an Action Creator is a function that takes in data from a DOM event, and returns an action object with any additional information that is needed for our reducers to update state.  

`touch actions/index.js`  

```
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
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

We will need:  
  - Something to handle our todos  
  - Something to deal with filters.   

The todos reducer will handle the 'ADD_TODO' and 'TOGGLE_TODO' actions.  

The filters reducer will handle a default filter (probably "show all" of some sort), and the 'SET_FILTER' action.  

First, create the two reducers.  

`touch reducers/todos.js reducers/setFilter.js`  

`// reducers/todos.js`  

```
const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Date.now(), text: action.text, completed: false}]
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

`// reducers/setFilter.js`  

```
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

`// reducers/index.js`  

```
import { combineReducers } from 'redux'
import todos from './todos'
import setFilter from './setFilter'

const reducers = combineReducers({
  todos,
  setFilter
})

export default reducers
```

### Build Out Components

Recall our list of components:  

**Components**  
  - Add Todo Form  
  - List of Todos  
  - Todo Item  
  - Filter(s)  
  - Footer  

For each component we have that deals with our redux store, we need a container component wrapped around it to handle the messy logic, and a presentational component nested within to render that information.  

Which components need to interact with and/or care about state?  
  - Add Todo Form  
    - We will need to add a new todo to our state based on user input  
  - Todo List  
    - Needs access to all todos and any filter information  
  - Filters  
    - Need to know which filter is applied, and maybe what that means for our todo list.  

Each of these will need a container component that will connect it to the Redux store, and then pass data as props on to a presentational component that will render it.

Let's go back to our mockup and add these layers.

![Components Deconstructed](http://i.imgur.com/DrXdU4s.png)  

Let's build out a slice of the app from start to finish to see how everything is wired up.

### AddTodo Chunk

#### Presentational Component  

##### `<AddTodoForm />`
This will be our form. We only need an input field and a submit button. The `onSubmit` callback is coming in as Props from the container component that hasn't been written yet.

`touch components/AddTodoForm.js`  

`// components/AddTodoForm.js`  

```
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

### Container Components
This is where the magic happens!

Now that we have our presentational components ready to display the appropriate information, we need to build out the container components that will handle what that information is.  

Think of container components as a type of shell that gets a high five from redux, and wraps around a dumb component to hand it any information it needs to render. This means that each of our containers need to import the presentational component it cares about, then using Redux's built in methods `connect` and `dispatch` it will pass it data from the Redux store. This is also where the two objects `mapDispatchToProps`, and `mapStateToProps` come in.

For our AddTodo container, we need the `connect` method from Redux, the `addTodo` action we defined in our ActionsCreator, and the `AddTodoForm` presentational component that needs access to these "props".

#### `<AddTodo />`
`touch containers/AddTodo.js`

`// containers/AddTodo.js`

```
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

#### App

Let's wire these two up to our DOM.

`touch components/App.js`

```
import React from 'react'
import AddTodo from '../containers/AddTodo'

class App extends React.Component {
  render () {
    return (
      <section>
        <AddTodo />
      </section>  
    )
  }
}

export default App
```

### Create Redux Store

#### `index.js`

We need a file that will tell our app what to render to the DOM, pulling in all the necessary pieces. This creates our Redux Store. The file already exists as the entry point of our app (`app/index.js`), but we need to beef it up.

`// app/index.js`  

```
require('./main')

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

Let's see what happens!

`npm run build`  
`npm start`   
`localhost:8080`  

Dig into your React dev tools to check out the nested Connect component!  

### Presentational Components
Now we finish building out our presentational components.

#### `<Todo />`
Before we deal with a list of Todos, let's set up our individual Todo component. It makes sense to set this up as a `<li>` html element since an individual todo will be part of a larger `<ul>` section. We will need some text, for whatever the user inputs as the value of the Todo, and an `onClick` event for if the user marks a todo as completed.  

`touch components/Todo.js`  

```
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

````
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

Each of our given filters will be rendered as either a link or plain text depending on if it's active or not. They'll each need a boolean, text to display, and a callback to trigger the boolean to change.

`components/FilterLink.js`  

```
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

### Remaining Container Components

#### `<FilteredTodoList />`
Next up is the TodoList container which is a bit more complicated. We need to get all of the todos, including which filter is being applied (if any), and then pass that information to the presentational component as props.

`touch containers/FilteredTodoList.js`  

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

`touch containers/Filter.js`  

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
)(FilterLink)

export default Filter
```

#### `<App />`  
Update the wrapper component.  


`// components/App.js`

```
import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilteredTodoList from '../containers/FilteredTodoList'
import Footer from '../components/Footer'

class App extends React.Component {
  render () {
    return (
      <section>
        <AddTodo />
        <FilteredTodoList />
        <Footer />
      </section>  
    )
  }
}

export default App
```

### TADA!
You just built a React-Redux To-Do list.

### Resources
[Official Redux Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
[Original Todo List Redux  Tutorial](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.fn8hsv6vf)
