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
