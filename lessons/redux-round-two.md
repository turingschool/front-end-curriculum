---
title: Redux Round Two
tags: React, JavaScript, Webpack, Redux
module: 3
---

### Game Plan
  - Why Redux?
  - Break down Redux concepts
  - Build a slice of a Todo App in Redux
  - Look at a completed App
    - [Working Repo](https://github.com/martensonbj/redux-lesson-boilerplate)
  - Explore Testing

### Why Redux + Part 1 Of Slides

In a nutshell, Redux is a *predictable state manager* for your app. Every application fires up with an initial state (for example, 0 ideas in the idea box). Every interaction following start up (when you click `Submit Idea` on a form, or `Like` on Facebook) has the potential to modify that state and needs to do so in predictable, manageable ways.  

As an application scales, maintaining where state changes and when, and which components need to know about it, and how to trickle that information down to the 500th grandchild of the component who knows about state, becomes less fun.

### When To Use Redux

According to [this article](http://redux.js.org/docs/faq/General.html#general-when-to-use), Dan Abramov has said:  
> ...don't use Redux until you have problems with vanilla React.  

**Redux should be used when you have a significant amount of data changing over time and it is no longer reasonable to keep your state in a top-level React component.**  

That being said, Redux comes with trade offs. It requires a significant amount of work to set up the structure necessary to implement Redux, as we'll see shortly, but then once in place allows you to scale your app horizontally.  

**READ THIS AT SOME POINT:** [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.tm7sb1mps)  

Think about adding more components to an app using React without Redux - as the app continues to grow, state from a parent component will need to continually be passed deeper down a vertical chain of nested components. With Redux, the app stops growing vertically the moment it is in implemented and instead allows for a shallow communication of state to any component in the app.  

Let's visualize this.  

### LifeCycle of a Redux App

![Redux Diagram](https://i.redd.it/hl2aytgofz6x.png)  

### Research Spike

1. **Stop And Read:**   ( 10 Minutes )
[Data Flow](http://redux.js.org/docs/basics/DataFlow.html)  

2. **Independent Research** ( 10 Minutes )   
Spend the next 10 minutes understanding your assigned concept below and jotting down notes - NOTEBOOKS ONLY,

  **1:** [Store](http://redux.js.org/docs/api/Store.html) and [Reducers](http://redux.js.org/docs/basics/Reducers.html)   
  **2:** [Actions](http://redux.js.org/docs/basics/Actions.html)   [Provider](http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)   
  **3:** [Presentational vs Container Components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)  

3. **Single Concept Group Discussion** ( 5 - 10 Minutes)  
Get together with classmates who also studied the same Redux concept (ie: all 1's get together, all 2's get together etc).
- Discuss what you understood from your reading and compare notes.
- What role does the section you studied play?
- How does it fit into the data-flow of redux in the bigger-picture?

4. **Data Flow Group Discussion** ( 5 - 10 Minutes)  
Head to the white board with your project group. Each member of the group should write their part of the redux data-flow on the board and explain to the rest of the group what it does, then pass the marker to the next person in the data-flow.  

### Part 2 Of Slides

### Redux Key Concepts

*Store*  
The essence of Redux. Holds all of your application's state(s) and data in a giant JavaScript object.

*Actions*  
Objects. Recall that every component will do at least two things. It will render itself to the DOM after dealing with necessary data in "State", and it will potentially interact with user interaction through "Actions". Every action has a type, and a payload of information that gets sent to the store using `store.dispatch()`.

```js
{
  type: 'ADD_TODO'
  text: 'Get a pumpkin'
}
```

*Action Creators*  
Functions. They receive data from a DOM event and return a specific action formatted as a JSON object. Think of Action Creators like component organizers - when an event fires, they gather and organize any extra information needed to make changes to state and pass it on in a neat little bundle to the reducer.

```js
const addTodo = (text) => {
  type: 'ADD_TODO',
  text: text
}
```

*Reducers*  
Functions. Takes existing state from the Redux store, pulls in our bundle of information sent from the Action Creators and returns a new state that gets updated in the Redux store. Redux then passes that new state to any components that need to know about it which triggers the React engine to re-render the component.  

```js
const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // return state with an additional ToDo
    case 'TOGGLE_TODO':
      // return a version of state based on what filter is applied
    default:
      // return a default state if an error is made
      return state
  }
}

```


### Container vs Presentational Components

*Container Components*  
Synonymous with smart, or stateful components. These are parent components to Presentational Components that are connected to Redux and state. Containers pass data to the presentational component, making the connection between the Redux store and the presentational components that need to be rendered.

*Presentational Components*  
Synonymous with a dumb or stateless component. Presentational components receive data from container/smart/stateful components and render themselves accordingly.

[Dan Abramov Talks about Presentational vs Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.v3t2z819q)

### Connect

*`connect()`*  
Connects a React component to the Redux store. Behind the scenes it actually returns a new connected component that wraps around any existing components.  

Takes at least one argument, either `mapStateToProps` or `mapDispatchToProps` or both.

*`mapStateToProps(state, [ownProps])`*  
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

const mapStateToProps = (state) => {
  // Some code to connect Component to State within the Redux Store
}

const mapDispatchToProps = (dispatch) => {
  // Some code to connect Component to app Actions and therefore Reducers within Redux Store
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentThatCares)
```

*`<Provider store={store}>`*  
Typically, this component is wrapped around your application's root component. This allows the `connect()` method in nested components to have access to the Redux store.

**Example:**:  

```js
render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('application')
)
```

*Middleware*  
[Redux Docs: Middleware](http://redux.js.org/docs/advanced/Middleware.html)  
Middleware is code inserted between the part of your app receiving a request and the part that generates a response. In other words (straight from the docs), it **provides a third party extension point between dispatching an action and the moment it reaches the reducer**. There are tons of examples of middleware usage in a React-Redux app, but a big reason is to make asynchronous API calls to fetch data from outside your app.

**Example:**
(`hitTwitterAPI` is a made-up function that makes a request to some third party API, for instance.)

```js
let store = createStore(
  reducers,
  applyMiddleware(hitTwitterApi)
  )
```

### Code Along  
[Redux Second Look](https://github.com/martensonbj/redux-lesson-boilerplate)
* Clone down
* `npm install`  
* Checkout a new branch  

We are starting from the `create-react-app` boilerplate (huzzah! no more building your own boilerplate!). The setup comes with React out of the box, but at this point it does not come with Redux. We need two libraries to help us out:

`npm i -S redux react-redux`

### Organizing An App

Implementing Redux forces you to think about your app from a high-level perspective, in terms of the data you need to manage and how the state of your app will change.

Let's start by looking at how to organize a directory structure in broad terms. It is common to put actions, components, containers, and reducers in their own folders. The boilerplate you've cloned down should have a structure that looks like this (with some additional files in there, probably):     

```js
node_modules
public/
src/
  actions/
  components/
  containers/
  reducers/
.gitignore
package.json
README.md
```

#### What We Are Building:

![Todo List Screenshot](http://i.imgur.com/IlABtj7.png)  

Let's take a second to break this down into components.

What components do you foresee being necessary? What actions? How are these going to be organized?

**Components**  
- Add Todo Form  
- List of Todos  
- Todo Item  
- Filter(s)  
- FilterMenu  

Let's break down what our information each component might need to render, and what events (aka "actions") it needs to listen for.

**AddTodoForm:**  
- State: 'todos'  
  - In this example, I'll be using the length of the array of todos to create a unique ID every time we create a new Todo   

- Actions: "ADD_TODO"  

   We have a form with a submit button, on click we need it to grab the value from the input field and assign itself a unique ID.

   In vanilla React, this would probably be a "handleClick" method that gets sent back up to the parent App component.  

   Using Redux, our click event grabs the `handleClick` method sent down as a prop, and needs to hit an action that would return something like this:  

```js
  {
    type: "ADD_TODO",
    text: "Go to the Vault"
    id: 1
  }
```

**TodoList:**  
  State:  
    - Needs to have a list of todos (`[]`)  

  Actions: "TOGGLE_TODO"  

  Each individual todo-list item will have an on-click event that can mark itself as complete. When this happens, we need to update the todo list item.  

  The information needed to make this happen is simply the id of the todo-list item.

```js
    {
      type: "TOGGLE_TODO",
      id: 2
    }
```

**Filter**  
  State:  
    - Which Filter has been selected (ie: all, complete, incomplete)  

  Actions: "SET_FILTER"  

  Tells other components which filter has been selected, and therefore which todo list items to display. This means we need it to know which filter is active and update state accordingly.

```js
  {
    type: "SET_FILTER",
    filter: "completed"
  }
```

### Actions/Action Creators

So based on our thorough planning, we have three actions: "ADD_TODO", "TOGGLE_TODO", and "SET_FILTER". This means we need three Action Creator functions to return the objects our reducers need to update state.

Recall that an Action Creator is a function that takes in data from a DOM event, and returns an action object with any additional information that is needed.  

Let's update our `actions/index.js` file to include these action creators.

```js
// src/actions/index.js

export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    text,
    id
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

Once our actions have been fired off, we need a couple reducers to handle what that means in terms of updating our application's state.  

We will need:  
- Something to handle our list of todos  
- Something to deal with setting/changing filters.   

The todos reducer will handle the default state of our todo list - probably an empty array - and respond to 'ADD_TODO' and 'TOGGLE_TODO' actions.  

The filters reducer will handle a default filter (probably `'SHOW_ALL'` of some sort), and the `'SET_FILTER'` action to toggle between `active` and `completed` tasks.  

You'll notice our directory is set up with a `reducers/index.js` file. We will be adding to that shortly, but first, create the two reducer files.  

`touch src/reducers/todos-reducer.js src/reducers/filter-reducer.js`  

```js
// src/reducers/todos-reducer.js

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

```js
// src/reducers/filter-reducer.js

const filter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filter
```

Recall from our slide deck that your app can only import one reducer. To create a redux store you need to pass it one exported file representing all of your reducers. We currently have two reducers, which means we need to combine them into a...drumroll..."root reducer".  

```js
// src/reducers/index.js

import { combineReducers } from 'redux'
import todosReducer from './todos-reducer'
import filterReducer from './filter-reducer'

const rootReducer = combineReducers({
  todosReducer,
  filterReducer
})

export default rootReducer
```

### Build Out Components

Here's our list of components:  

**Components**  
  - Add Todo Form  
  - List of Todos  
  - Todo Item  
  - Filter(s)  
  - FilterMenu  

For each component that needs to interact with state, we need a container component wrapped around it to talk to our redux store, and a presentational component connected to it that will render the information.  

Which components need to interact with and/or care about state?  
  - Add Todo Form  
    - We will need to add a new todo to our state based on user input  
  - Todo List  
    - Needs access to all todos and any filter information  
  - Filters  
    - Need to know which filter is applied, and maybe what that means for our todo list.  

Each of these will need a container component that will connect it to the Redux store, and then pass data as props on to a presentational component that will render it.

Let's go back to our mockup and add these layers.  

## Build Out A Slice Of The App

From here, let's build out a slice of the app from start to finish to see how everything is wired up.

### AddTodoForm Functionality

#### Presentational Component  

##### `<AddTodoForm />`
This will be our form. We only need an input field and a submit button for this example, but you'll notice we are using a tiny bit of local state to create a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components).  

The `handleSubmit` callback and `todos` will be coming in as a prop from the container component that hasn't been written yet.

`touch src/components/AddTodoForm.js`  

```js
// src/components/AddTodoForm.js

import React, { Component } from 'react'

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
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

export default AddTodoForm
```

### Container Components
This is where the magic happens!

Now that we have our presentational components ready to display the appropriate information, we need to build out the container components. Containers act as the middle men between the Redux store that knows about state, and the presentation component ready to render it on the page.  

Think of a container as a type of shell that is always talking to the redux `store`. It wraps around a  component to hand it any information it needs to render.  

Using Redux's built in methods `connect` and `dispatch` it will act as a liaison between the store (which knows about state) and the component (which does not). This is also where the two methods `mapDispatchToProps`, and `mapStateToProps` come in.

For our `AddTodo` container, we need the `connect` method from Redux, the `addTodo` action we defined in our ActionsCreator, and the `AddTodoForm` component that needs access to these "props".

#### `<AddTodo />` Container
`touch src/containers/AddTodoFormContainer.js`  

```js
// src/containers/AddTodoFormContainer.js

import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleSubmit: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
```

Take a second to notice that the prop `handleSubmit` is exactly what our `AddTodoForm` component is expecting when it renders. Because of Redux, our container is hooked up to the required action that passes the new component information through our reducers to update state.

#### <App />

Let's wire our AddTodoForm component and container up to the DOM through `<App />` - the existing file just needs a bit of tweaking.

```js
// src/components/App.js  

import React from 'react';
import './App.css';

import AddTodoFormContainer from '../containers/AddTodoFormContainer'

const App = () => {
    return (
      <div className="App">
        <AddTodoFormContainer />
      </div>
    );
}

export default App;
```

Notice that we changed this to be a functional component. Because redux is attaching state to each component directly, we no longer need App to know about or care about the overarching state of our app. Look how clean this component is!

Also notice that instead of rendering the component, we are rendering the CONTAINER (which, at the end of the day, is wrapped around our presentational form component).  

If you start up your app now, it will blow up. The error message will say something about: `Could not find 'store'`. This makes sense because we need one last piece to have our app actually talk to Redux and create our application store.

### Create The Redux Store

#### `index.js`

We need a file that will tell our app what to render to the DOM, pulling in all the necessary pieces. In that file we can create our Redux Store. The file already exists as the entry point of our app (`src/index.js`), but we need to beef it up.

```js
// src/index.js  

import './index.css'

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'

import App from './components/App'

const store = createStore(reducers)

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)
```

Pop over to your browser and watch the magic happen.

Dig into your React dev tools to check out the nested Connect component!  

### Redux Dev Tools

Like with React, there is a Chrome dev tools extension to help us look into what Redux is doing behind the scenes.

[Go here for the redux dev tool extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)  

If you install the tools and fire them up immediately, you'll get a helpful error message.

`No store found. Make sure to follow the instructions.`

Here are [the instructions](https://github.com/zalmoxisus/redux-devtools-extension#usage).  

Basically, we need to tell our app to add this extra step as part of the "middleware" of our app. So in between all of the interactions (components --> containers --> actions --> reducers) send the information through these dev tools first to keep us posted.  

For now, we will set up our tools like so:  

```js
// src/index.js

// ... IMPORT LINES UP HERE

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

// ... RENDER DOWN HERE

```

Now check out your redux dev tools. Woohoo!  

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

### TADA!
You just built a React-Redux To-Do list.

### Resources
[Official Redux Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)  
[Original Todo List Redux  Tutorial](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.fn8hsv6vf)  
