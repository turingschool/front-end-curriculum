---
title: Starting Up Redux
tags: React, JavaScript, Webpack, Redux
module: 3
---

# Agenda

Redux is a difficult concept to explain.

So in today's tutorial, we are going to implement Redux and explain as we go.

At the end of this lesson, you will:

- Create an application that uses Redux
- Learn a little bit about Redux
- Still be kind of confused about Redux

Don't worry, this isn't the last Redux lesson we're going to teach.

Hold on to your butts.

# Code Along

## Step One: Getting Started

- Clone this repo: https://github.com/turingschool-examples/redux-lesson-boilerplate

- `npm install`

### While We NPM Install

In a nutshell, Redux is a *predictable state manager* for your app.

When an application fires up, it has an initial state.

Every action that happens after things fire up modifies your state. 

As an application scales, maintaining where state changes and when, and which components need to know about it, and how to trickle that information down to the 500th grandchild of the component who knows about state, becomes less fun.

Redux is an approach to managing data that adds a ton of complexity to a clientside app in order to make state management more predictable.

You don't always need Redux. But you should always know what it can do.

### Installing Dependencies

- Install redux and react-redux: `npm i -S redux react-redux`

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

At this point, we know about this much of the Redux process:

![Redux Explained](/assets/images/redux-explained1.jpg)

Let's see if we can start to fill in some gaps.

### What We Are Building:

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

### `<AddTodoForm />`

**State:**

'all todos'

(we need this information because we will figure out the ID of a new todo based on length of old todos)

**Actions**

 "ADD_TODO"  

 We have a form with a submit button, on click we need it to grab the value from the input field and assign itself a unique ID.

In vanilla React, this would probably be a "handleClick" method that gets sent back up to the parent App component.  

### `<TodoList />`

**State**  

Needs to have a list of all todos 

**Actions**

"TOGGLE_TODO"  

Each individual todo-list item will have an on-click event that can mark itself as complete. When this happens, we need to update the todo list item.  

### `<Filter />`

**State**  

- Which Filter has been selected (ie: all, complete, incomplete)  

**Actions**

"SET_FILTER"  

Tells other components which filter has been selected, and therefore which todo list items to display. This means we need it to know which filter is active and update state accordingly.

### You Do: Think About It

We know how to  build this application with React, right?

Take 5 minutes to turn to the person next to you and talk through how you might implement this simple todo app?

## Step Two: Creating Some Actions

So based on our thorough planning, we have three actions: "ADD_TODO", "TOGGLE_TODO", and "SET_FILTER" that need to happen for our app to work.

In Redux language - I would say something like:

> This means we need three Action Creator functions to return the objects our reducers need to update state.

Out of that statement there are a couple of terms we don't know. I will define exactly one of them: `Action Creator`. 

An Action Creator is a function that takes in data from a DOM event, and returns an action object with any additional information that is needed.  

We will put those actions in a folder called 'actions'.

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

### You Do: Think About It

Take a few minutes to turn to the person next to you and see if you can come up with theories on what these functions might be doing.

Don't peek below, eh?

### I Do: What Does It Do?

So here is a brief explanation of what an action creator is:

*Action Creators*

Functions. They receive data from a DOM event and return a specific action formatted as a JSON object. Think of Action Creators like component organizers - when an event fires, they gather and organize any extra information needed to make changes to state and pass it on in a neat little bundle to the reducer.

We now have this much of the Redux Lifecycle.

![Redux Explained](/assets/images/redux-explained2.jpg)

## Step Two: Creating Some Reducers

So, if you may think of our actions as little sanitizers for expected actions on the website.

When an action happens, we need something that responds to the action and changes the application state accordingly.

So if we were to think about our three actions `AddTodo`, `ToggleTodo`, `setFilter`.

What two nouns do we have?

- Todo

- Filter

Okay, cool - create two empty files

```
  touch src/reducers/todos-reducer.js
  touch src/reducers/filter-reducer.js
```

Now think about the following psuedo-code:

```
I need a function that I can give an action and the state of all todos

Depending on the action, it will 'switch' between different behaviors

If the action is to add a todo:

  - It will create a new todo

  - Return an array with all todos including the new todo

If the action is to toggle todos

  - It change the status of completed on the todo with the matching id

  - It will return all the todos in state including the toggled todo

If it doesn't recognize the action, it will return the state unmodified.
```

This is what something like that might look like:

```
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

Copy this code over to the appropriate file.

### You Do: Play Around with the Code

The `src/reducers/todos-reducer.js` file just contains a function. We can run it without React or Redux.

Let's do that.

Comment out `export default todos` for a second.

Make sure you are at your root directory.

In your terminal, type in `node`

This will get you into the node REPL.

Within the REPL, type:

`.load src/reducers/todos-reducer.js`

Now, try playing around with the todos function. Pass it different states and different actions and see what it returns.

See if you can get the following things to happen:

- You can add a 'new todo'
- You can add a few new todos and have them update 'state'
- You can change an existing todo

Try to break things and get errors.

MAKE SURE to comment your `export default todos` back in when you are done. 

### Wrapping Up Reducers: Filter and Combine

We mentioned that we have one other 'noun' to cover with a reducer: filter.

We can do that by adding the following code to our filter-reducer: 

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

Now that we have two reducers, we are going to need to use something in redux called `combineReducers` and export all of our reducers at once?

Why?

Well - we need a root reducer to kind of listen to all possible actions? We can only export one reducer? It's cleaner this way? 

Let's go with 'because I said so' for now....

Add the following code to your project:

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

### I Do: What Does It Do?

**Reducers**

Functions. Takes existing state from the Redux store, pulls in our bundle of information sent from the Action Creators and returns a new state that gets updated in the Redux store. Redux then passes that new state to any components that need to know about it which triggers the React engine to re-render the component.

We have now seen about this much of the Redux Lifecycle.

![Redux Explained](/assets/images/redux-explained3.jpg)

## Step Four: Creating a Component

Here's our list of all the components we need to build out our application:  

**Components**  
  - Add Todo Form  
  - List of Todos  
  - Todo Item  
  - Filter(s)  
  - FilterMenu 

  In redux, we are going to treat any component that interacts with state differently that other components.

  Which components need to interact with and/or care about state?  
  - Add Todo Form  
    - We will need to add a new todo to our state based on user input  
  - Todo List  
    - Needs access to all todos and any filter information  
  - Filters  
    - Need to know which filter is applied, and maybe what that means for our todo list.  

For each component that needs to interact with state, we need a **container component** wrapped around it to talk to our redux store, and a **presentational component** connected to it that will render the information.

### `<AddTodo />` Presenter

Let's create the `Presentational Component` first - because it will seem the most familiar to us.

Create a component:

```
touch src/components/AddTodoForm.js
```

Now ponder the following psudocode:

```

First, I will import React and Component

Then I will create a stateful component that extends Component by creating an AddTodoForm class.

My class will have a constructor, which accepts props as an argument and passes props up through super.

I will also define the state as an object, which only contains a key or text with a value of an empty string.

I will then define the function render()

Within the render function, I want to set variables for handleSubmit and todos, and assign them to props of the same name.

I then want to return a parent html 'section' element.

Within that section, I want the following html elements:

- form
  - input
  - button

I want my form to have an onSubmit - which is an anonymous function that calls preventDefault on the event and then calls handleSubmit with the button's text (from state) and the length of all todos.

I want my input to have a value of the text (from state), a placeholder of 'Add a Todo', and an onChange - which is an anonymous function that sets the state of text to the event's target's value.

I want my button to simply include the text AddTodo

```

### You Do: Based on PsuedoCode, try to Implement

Without peeking at the code below, take some time to try and create the component that was psudocoded above.

Don't try to finish it, just try to parse the confusing psuedocode into a regular old React component.

Finally, I want to export my component.

### I Do: Implementing

The code that ultimately makes up the Presenter layer of the AddTodoForm [will look like this code](https://gist.github.com/rrgayhart/7207b26797a9a138509f4d3aad3fd4ff). Go ahead and add this in to your codebase.

We only need an input field and a submit button for this example, but you'll notice we are using a tiny bit of local state to create a [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components).  

The `handleSubmit` callback and `todos` will be coming in as a prop from the container component that hasn't been written yet.

### `<AddTodo />` Container

As previously mentioned, our stateful components need to be wrapped in a 'container'. That container wraps around a component and is responsible for handing it any information it needs in order to render.

`touch src/containers/AddTodoFormContainer.js`  

In psuedo-code, what we need to do is:

```
Import the 'connect' method from redux

Import the AddTodo action function

Import the AddTodoForm presenter component

Create one function 'mapStateToProps' responsible for bringing in the props in state.

This function takes state as an argument and returns an object - wherein it creates a key for todos and assigns the todos in state as the value.

Create another function 'mapDispatchToProps' which accepts an argument representing a 'dispatch'. It will return an object which has a key of 'handleSubmit' with a value of an anonymous function.

The anonymous function accepts text and id, and passes it to the addTodo action which is passed to the dispatch.

We then export the result of passing mapStateToProps and mapDispatchToProps and then passing AddTodoForm to that result.

```

Whew. What?

Containers act as the middle men between the Redux store that knows about state, and the presentation component ready to render it on the page. 

Think of a container as a type of shell that is always talking to the redux `store`. It wraps around a  component to hand it any information it needs to render.  

Using Redux's built in methods `connect` and `dispatch` it will act as a liaison between the store (which knows about state) and the component (which does not). This is also where the two methods `mapDispatchToProps`, and `mapStateToProps` come in.

If it seems like a lot of extra code to accomplish something pretty simple - well... it is.

And this is what it should look like

```js
// src/containers/AddTodoFormContainer.js

import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (state) => {
  return { todos: state.todosReducer }
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

Let's keep going and wire the app up.

### You Do: Wiring it Up

Without peeking below, try to predict and add what you think you might need to add the todo form to the main <App /> component.

- Do you need to include the presenter and the container?
- Do you need to pass any props?
- What all will you need to import into <App />

Note: You will get errors even if you get it right, because we are missing one last piece of the redux puzzle.

### I Do: <App />

Let's wire our AddTodoForm component and container up to the DOM through `<App />` - the existing file just needs a bit of tweaking.

[Here is the actual code needed](https://gist.github.com/rrgayhart/cb8328448444674f6049cb66d09f6472)

Because redux is attaching state to each component directly, we no longer need App to know about or care about the overarching state of our app. It can be a clean functional component. 

Also notice that instead of rendering the component, we are rendering the CONTAINER (which, at the end of the day, is wrapped around our presentational form component).

We have now see this much of the redux puzzle

![Redux Explained](/assets/images/redux-explained4.jpg)

## Step Five: Creating a Store

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

const store = createStore(rootReducer)

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

We have now implemented the entire data flow of redux.

![Redux Explained](/assets/images/redux-explained5.jpg)

## Step Six: What Did It All Mean?

So we implemented a redux workflow, but there are likely quite a few questions that are still outstanding.

### When To Use Redux

According to [this article](http://redux.js.org/docs/faq/General.html#general-when-to-use), Dan Abramov has said:  
> ...don't use Redux until you have problems with vanilla React.  

**Redux should be used when you have a significant amount of data changing over time and it is no longer reasonable to keep your state in a top-level React component.**  

That being said, Redux comes with trade offs. It requires a significant amount of work to set up the structure necessary to implement Redux, as we'll see shortly, but then once in place allows you to scale your app horizontally.  

**READ THIS AT SOME POINT:** [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.tm7sb1mps)  

Think about adding more components to an app using React without Redux - as the app continues to grow, state from a parent component will need to continually be passed deeper down a vertical chain of nested components. With Redux, the app stops growing vertically the moment it is in implemented and instead allows for a shallow communication of state to any component in the app.  

### LifeCycle of a Redux App

![Redux Diagram](https://i.redd.it/hl2aytgofz6x.png) 

### You Do: Research Spike

1. **Stop And Read:** ( 10 Minutes )
[Data Flow](http://redux.js.org/docs/basics/DataFlow.html)  

2. **Independent Research** ( 10 Minutes )   
Spend the next 10 minutes understanding your assigned concept below and jotting down notes - NOTEBOOKS ONLY,

  **1:** [Store](http://redux.js.org/docs/api/Store.html) and [Reducers](http://redux.js.org/docs/basics/Reducers.html)   
  **2:** [Actions](http://redux.js.org/docs/basics/Actions.html) & [Provider](http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)   
  **3:** [Presentational vs Container Components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)  

3. **Single Concept Group Discussion** ( 5 - 10 Minutes)  
Get together with classmates who also studied the same Redux concept (ie: all 1's get together, all 2's get together etc).
- Discuss what you understood from your reading and compare notes.
- What role does the section you studied play?
- How does it fit into the data-flow of redux in the bigger-picture?

4. **Data Flow Group Discussion** ( 5 - 10 Minutes)  
Head to the white board with your project group. Each member of the group should write their part of the redux data-flow on the board and explain to the rest of the group what it does, then pass the marker to the next person in the data-flow.  

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
import ComponentThatCares from './ComponentThatCares.js'  

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

## Step Seven: Wrapping Up the App

Challenge yourself to try and finish out the remaining components by copying the first example and using what you already know about React.

Remember, only components needing to interact with state actually need container components. Present components won't look all that different that what you're already used to seeing.

If you want to finish up the app functionality, you can [finish things up here](http://frontend.turing.io/lessons/starting-up-redux-wrapup.html).

### Resources

The original redux diagram used throughout this lesson is courtesy of [The New Boston](https://thenewboston.com/)

- [Official Redux Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)  

- [Original Todo List Redux  Tutorial](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.fn8hsv6vf)  
