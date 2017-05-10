---
title: Redux Saga
tags: React, Redux, Sagas
---

### What Is Redux-Saga

Redux-Saga is a library that makes performing in-between events easier in a React/Redux application. Similar to `redux-thunk`, `redux-saga` gets added to your Redux store right when it is created. Remember that this is when the `applyMiddlware()` function gets called, at which time you pass in an array of middleware, which now includes `redux-saga`.

### Setting Up Additional Dependencies

Let's kick things off by running `create-react-app redux-saga-workshop`.

Then, `cd` into your directory and let's add some additional libraries.

`yarn install redux react-redux redux-saga`.  

If you run `npm start` at this time, you should see the default React app with the spinning teal logo. Take a minute to clean this up so you're working from a clean slate. (Feel free to keep the file structure, we just don't need the default boilerplate HTML being rendered by the `App.js` file.)  

### Wire Up Redux

As the name indicates, we can't use `redux-saga` until we're wired up and ready to go with Redux.  
