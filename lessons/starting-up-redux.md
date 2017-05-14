---
title: Starting Up Redux
tags: React, JavaScript, Webpack, Redux
module: 3
---

# Agenda

- Code Along - What is Even Happening
- Research
- Code Along Wrap Up

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

![Redux Explained](/assets/images/redux-explained1.png)

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

### I Do: What Does It Do?

So here is a brief explanation of what an action creator is:

*Action Creators*

Functions. They receive data from a DOM event and return a specific action formatted as a JSON object. Think of Action Creators like component organizers - when an event fires, they gather and organize any extra information needed to make changes to state and pass it on in a neat little bundle to the reducer.

We now have this much of the Redux Lifecycle.

![Redux Explained](/assets/images/redux-explained2.png)


