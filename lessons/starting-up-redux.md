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
