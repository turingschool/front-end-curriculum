---
title: Redux Saga
tags: React, Redux, Sagas
---

## FOLLOW UP:
  - Currying with ES6


### A Review of middleware

According to [the docs](http://redux.js.org/docs/advanced/Middleware.html), middleware is `some code you can put between the framework receiving a request, and the framework generating a response.` There are lots of different steps you may need to take in between two primary stages of an application that a given framework isn't set up to deal with. The useful part of middleware is that it's "composable", meaning you can chain together a lot of different third-party libraries to perform these different necessary actions.

More specifically, Redux needs middleware to create a check point between firing off an action and hitting a reducer. There are many different redux middleware libraries that perform tasks like logging, asynchronous API calls, routing, etc.

If you dig into the docs, you'll see an example of handrolling what middleware is doing behind the scenes. It looks something like this:

```js
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}
```


### applyMiddleware()

In order to tell Redux to use middleware in the first place, we need to implement this method, passing in all necessary middleware libraries.

This method then hands specific Redux methods to each library - `getState()` and `dispatch(action)`

### What Is Redux-Saga

Redux-Saga is a library that makes performing in-between events easier in a React/Redux application. Similar to `redux-thunk`, `redux-saga` gets added to your Redux store right when it is created. Remember that this is when the `applyMiddlware()` function gets called, at which time you pass in an array of middleware, which now includes `redux-saga`.

### Setting Up Additional Dependencies

Let's kick things off by running `create-react-app redux-saga-workshop`.

Then, `cd` into your directory and let's add some additional libraries.

`yarn install redux react-redux redux-saga`.

If you run `npm start` at this time, you should see the default React app with the spinning teal logo. Take a minute to clean this up so you're working from a clean slate. (Feel free to keep the file structure, we just don't need the default boilerplate HTML being rendered by the `App.js` file.)  

### Wire Up Redux

As the name indicates, we can't use `redux-saga` until we're wired up and ready to go with Redux.

### Step 1: Organize Dependencies/Setup Store

The centerpiece of any redux application is the Redux Store. This is the engine behind the scenes that keeps track of your application's state, and communicates with your React components to update or mutate that state.

Update your main `index.js` file to match the following:  
(Keep in mind that everything will broken until we put together one entire piece of the codebase).

```js
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App/App';
import './index.css';

import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
