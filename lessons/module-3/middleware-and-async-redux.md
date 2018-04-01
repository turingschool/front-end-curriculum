---
title: Middleware and Async Redux
tags: middleware, thunk, redux-thunk, redux
---

# MIDDLEWARE and ASYNC REDUX

We often need to send data to and get data from a database. Now that we are implemeting Redux in our applications, let's take a look at how middleware can help us deal with our asynchronous Redux code.

Once we fetch our data, we no longer want to store it in our component's state. We now want to be able to put it in the Redux store when it comes back.

## What is Middleware?

Middleware provides a 3rd party between dispatching an action and the moment it reaches a reducer. It basically allows us to hook into the lifecycle of Redux and perform some kind of actions between the time an action is dipatched and the time it gets to the reducer.

If we think about it, there are 3 stages of an asynchronous request:

* The start of the request
* If the request succeeds 
* If the request fails

Our state needs to account for each of these stages. 

## Thunk

A thunk is just another name for a function. But it's not just any old function... it's a special name for a function that wraps an expression to delay its evaluation. Let's take a look at a very basic example of a thunk.

```javascript
const notAThunk = () => {
   return () => console.log('do stuff now')
}
```
Here, the inner function that is returned is a thunk. You've probably seen this patter before; you just didn't know it was a thunk. If you want to execute the `do stuff now` part, you would have to call it like `notAThunk()()` - calling it twice, basically.

## Redux-Thunk

Up until this point, we've only seen Redux actions as objects that don't do anything. Pretty boring, right? Wouldn't it be cool if we could actually make them do something... like make a fetch request or trigger other actions? Enter **redux-thunk**!

`Redux-Thunk` is a middleware that allows our action creators to return a function instead of an action object. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. It looks at every action that passed thrugh the system; and if it's a function, it calls that function. Brilliant!!

Redux passes 2 arguments to thunk funcitons: `dispatch` so that we can dispatch new actions if we need to, and `getState` so that we can access the current state. 

### Enough talk - let's see how this actually works!

To demonstrate how `redux-thunk` actually works, we're going to be using this same repos we used to create our Turing Front-End Staff website. Here is the [client-side repo](https://github.com/turingschool-examples/promises-practice) we will be working in and the [backend repo](https://github.com/turingschool-examples/promises-api) we will be fetching our data from. 

#### Start Up Instructions 

* You will want to clone down [promises-api](https://github.com/turingschool-examples/promises-api), run `npm install` and `npm start`. The server should now be running on `localhost:3001`
* Now you will want to clone down [promises-practice](https://github.com/turingschool-examples/promises-practice) and `npm install` 
* You will then want to checkout the branch `pre-redux` by running `git checkout pre-redux`
* Then start up the application `npm start`

If we take a look at `App.js`, we can see that our component's state currently has 3 properties. These properties correspond to the 3 stages of our async request that we need to account for.

```javascript
// App.js
this.state = {
   staff: [],
   isLoading: false,
   hadErrored: false
}
```
##### Take a few minutes and review the `fetchStaff`, `fetchBios`, and `commponentDidMount` methods that are being used to fetch our data and handle our loading and error cases.

## Converting to Redux

To start, we will need to add Redux, React-Redux, and Redux-Thunk as dependencies of our project so that we can use them. I'm also going to go ahead and install the redux-devtools-extention. I have found that this is easier to use when passing multiple arguments to `createStore()`.

`npm install --save redux react-redux redux-thunk redux-devtools-extention`

### Designing our state

From what we already have, we know our state needs to have 3 propertes: 

* **staff**
* **isLoading** 
* **hasErrored** 

We will need to create an action for each of these, but we will probably also need an additional 2 action creators that will call our other 3 action (creators) depending on the status of fetching the data. These additional 2 action creators will look very similar to our `fetchStaff` and `fetchBios` methods, but instead of directly setting state with `this.setState({ isLoading: true })`, we'll `dispatch` an action to do the same: `dispatch(isLoading(true))`.

### Creating our actions

Let's create an `actions` folder with an `index.js` to hold all of our actions. We'll start with our 3 simple actions that we know we will need:

```javascript
// actions/index.js

export const isLoading = (bool) => ({
   type: 'IS_LOADING',
   isLoading: bool
})
	
export const hasErrored = (bool) => ({
   type: 'HAS_ERRORED',
   hasErrored: bool
})

export const staffFetchDataSuccess = (staff) => ({
   type: 'STAFF_FETCH_DATA_SUCCESS',
   staff
})
```
Now that we have the 3 actions that will represent our state, we need to create our other 2 action creators that will reflect our `fetchStaff` and `fetchBios` methods. By default, Redux action creators don't support async actions like fetching data, so here's is where we will utilize our `redux-thunk` middleware.

```javascript
// actions/index.js

export const fetchStaff = (url) => {
  return (dispatch) =>  {
    dispatch(isLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(isLoading(false))
        return response
    })
    .then(response => response.json())
    .then(data => dispatch(fetchBios(data.bio)))
    .then(staff => dispatch(staffFetchDataSuccess(staff)))
    .catch(() => dispatch(hasErrored(true)))
  }
}

export const fetchBios = (staffArray) => {
  return (dispatch) => {
    dispatch(isLoading(true))
    const unresolvedPromises = staffArray.map(staffMember => {
      return fetch(staffMember.info)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(isLoading(false))
        return response
      })
      .then(response => response.json())
      .then(data => ({...data, name: staffMember.name}))
      .catch(() => dispatch(hasErrored(true)))
    })
    return Promise.all(unresolvedPromises);
  }
}
```
### Creating our reducers

Now that we have all our action creators defined, we need to write our reducers that take our actions and return a new copy of our state. This should be nothing new.

```javascript
// reducers/staffReducer.js

export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = false, action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const staff = (state = [], action) => {
  switch(action.type) {
    case 'STAFF_FETCH_DATA_SUCCESS':
      return action.staff
    default:
      return state
  }
}

```

Now we need to combine our individual reducers into a `rootReducer` to create a single object that can be passed to our `createStore()` method.

```javascript
import { combineReducers } from 'redux';
import { isLoading, hasErrored, staff } from './staffReducer';

const rootReducer = combineReducers({
  staff,
  isLoading,
  hasErrored
})

export default rootReducer;
```
### Create our store and provide it to our app

This is great! All that's left to do is head over to our `index.js` and configure our store, pass it to our application, and then connect our componenet to the store. This is where we will tell the store about `redux-thunk` and it will give us access to `dispatch` in our action creators. 

```javascript
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
```
Now we just need to clean up our App component and allow it to use the Redux store and methods. We can completely get rid of our constructor and component state as well as our `fetchStaff` and `fetchBios` methods. Now let's map some props and `connect` to the store!

```javascript
// App.js

const mapStateToProps = (state) => ({
  staff: state.staff,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

const mapDispatchToProps = (dispatch) => ({
  fetchStaff: (url) => dispatch(fetchStaff(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
Previously, we had destructured `staff`, `isLoading`, and `hasErrored` off of state. We now are destructuring them off of props. Lastly, we just need to call `this.props.fetchStaff(url)` in `componentDidMount()`. 

##### Voila... we have successfully removed our data fetching logic from our component/UI logic into action creators. Because this is such a common pattern, `redux-thunk` is one of the most popular libraries in the Redux ecosystem.

## Resources
* [Stack Overflow](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
* [Understanding how redux-thunk works](https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50) by Gethyl George Kurian
* [Introduction to React with Redux and Redux Thunk: How to fetch data from an API](http://work.haufegroup.io/intro-redux/) by Camil Bradea
* [A Dummy's Guide to Redux and Thunk in React](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react) by Matt Stow
