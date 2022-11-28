---
title: REDUX-THUNK MIDDLEWARE
tags: middleware, thunk, redux-thunk, redux
module: 3
---

## Agenda

We often need to send or get data from a database. Now that we are implementing
Redux in our applications, let's take a look at how middleware can help us deal
with our asynchronous Redux code.

Once we fetch our data, we no longer want to store it in our component's state.
We want to be able to put it in the Redux store when it comes back.

Today, we will:
- Discuss what middlware is, and what it is used for
- Learn about Thunks, and the problems they solve for us
- Explore a familiar project, and discuss where we could use thunks
- Write some thunks

## Learning goals

- Be able to explain why middleware is helpful
- Be able to add middleware to your redux project
- Be able to write your own thunks
- Be able to test thunks

## Vocab

- Middleware
- Thunks
- redux-thunk

### What is Middleware?

Middleware provides a 3rd party between dispatching an action and the moment it reaches a reducer. It basically allows us to hook into the lifecycle of Redux and run some other code between the time an action is dipatched and the time it gets to the reducer.

If we think about it, there are 3 stages of an asynchronous request:

* The start of the request
* If the request succeeds 
* If the request fails

Our state needs to account for each of these stages. 

### Thunk, n.

A thunk is just another name for a function. But it's not just any old function... it's a special name for a function that wraps an expression to delay its evaluation. Let's take a look at a very basic example of a thunk.

```javascript
const notAThunk = () => {
   return () => console.log('do stuff now')
}
```
Here, the inner function that is returned is a thunk. You've probably seen this pattern before; you just didn't know it was a thunk. If you want to execute the `do stuff now` part, you would have to call it like `notAThunk()()` - calling it twice, basically.

### Redux-Thunk

Up until this point, we've only seen Redux actions as objects that don't do anything. Pretty boring, right? Wouldn't it be cool if we could actually make them do something... like make a fetch request or trigger other actions? Enter **redux-thunk**!

`Redux-Thunk` is a middleware that allows our action creators to return a function instead of an action object. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. It looks at every action that passed thrugh the system; and if it's a function, it calls that function. This is just another tool that can help us decouple our application logic from our view rendering. 

Redux passes 2 arguments to thunk funcitons: `dispatch` so that we can dispatch new actions if we need to, and `getState` so that we can access the current state. 

### Enough talk - let's see how this actually works!

To demonstrate how `redux-thunk` actually works, we're going to be using this same repos we used to create our Turing Front-End Staff website. Here is the [client-side repo](https://github.com/turingschool-examples/promises-practice) we will be working in and the [backend repo](https://github.com/turingschool-examples/promises-api) we will be fetching our data from. 

#### Start Up Instructions 

* Clone down [promises-api](https://github.com/turingschool-examples/promises-api), run `npm install` and `npm start`. The server should now be running on `localhost:3001`
* Clone down [promises-practice](https://github.com/turingschool-examples/promises-practice)
* Checkout the branch pre-redux-aa `git checkout pre-redux-aa`
* Install the dependencies `npm install`
* Start up the application `npm start`

If we take a look at `App.js`, we can see that our component's state currently has 3 properties. These properties correspond to the 3 stages of our async request that we need to account for.

```javascript
// App.js
this.state = {
   staff: [],
   isLoading: false,
   error: ''
}
```
##### Take a few minutes and review the `fetchStaff`, `fetchBios`, and `commponentDidMount` methods that are being used to fetch our data and handle our loading and error cases.

### Converting to Redux

To start, we will need to add Redux, React-Redux, and Redux-Thunk as dependencies of our project so that we can use them. I'm also going to go ahead and install the redux-devtools-extention. I have found that this is easier to use when passing multiple arguments to `createStore()`.

`npm install --save redux react-redux redux-thunk redux-devtools-extension`

### Designing our state

From what we already have, we know our state needs to have 3 propertes: 

* **staff**
* **isLoading** 
* **error** 

We will need to create an action for each of these, but we will probably also need an additional 2 action creators that will call our other 3 action (creators) depending on the status of fetching the data. These additional 2 action creators will look very similar to our asynchronous `fetchStaff` and `fetchBios` methods, but instead of directly setting state with `this.setState({ isLoading: true })`, we'll `dispatch` an action to do the same: `dispatch(isLoading(true))`.

### Creating our actions

Let's create an `actions` folder with an `index.js` to hold our synchronous actions and a `thunks` folder to hold our asynchronous actions. Let's start with our 3 simple synchronous actions that we know we will need:

```javascript
// actions/index.js

export const isLoading = (bool) => ({
   type: 'IS_LOADING',
   isLoading: bool
})
	
export const hasErrored = (message) => ({
   type: 'HAS_ERRORED',
   message
})

export const setStaff = (staff) => ({
   type: 'SET_STAFF',
   staff
})
```
Now that we have the 3 actions that will represent the state of our network request, we need to create our other 2 action creators that will reflect our `fetchStaff` and `fetchBios` methods. By default, Redux action creators don't support async actions like fetching data, so here's is where we will utilize the `redux-thunk` middleware. We can transition `fetchStaff` and `fetchBios` into asynchronous action creators by returning a function instead of an object. The functions that we return from `fetchStaff` and `fetchBios` can safely perform a network request and dispatch a synchrounous action with the response data. 

Let's make a separate file for each of our thunk action creators (it will make them easier to test down the road!). We will also need to import any actions that we might need to dispatch.

```javascript
// thunks/fetchStaff.js

import { isLoading, hasErrored, setStaff } from '../actions'
import { fetchBios } from './fetchBios.js'

export const fetchStaff = (url) => {
  return async (dispatch) =>  {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      const staff = await dispatch(fetchBios(data.bio))
      dispatch(isLoading(false))
      dispatch(setStaff(staff))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
```

```javascript
// thunks/fetchBios.js

import { hasErrored } from '../actions'

export const fetchBios = (staffArray) => {
  return (dispatch) => {
    const unresolvedPromises = staffArray.map(async staffMember => {
      try {
        const response = await fetch(staffMember.info)
        if(!response.ok) {
          throw Error(response.statusText)
        }
        const data = await response.json()
        return { ...data, name: staffMember.name}
      } catch (error) {
        dispatch(hasErrored(error.message))
        }
      })
    return Promise.all(unresolvedPromises)
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

export const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

export const staff = (state = [], action) => {
  switch(action.type) {
    case 'SET_STAFF':
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
  error: hasErrored
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
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchStaff: (url) => dispatch(fetchStaff(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
Previously, we had destructured `staff`, `isLoading`, and `error` off of state. We now are destructuring them off of props. Lastly, we just need to call `this.props.fetchStaff(url)` in `componentDidMount()`. 

### Voila... we have successfully removed our data fetching logic from our component/UI logic into action creators. Because this is such a common pattern, `redux-thunk` is one of the most popular libraries in the Redux ecosystem.

## Testing Thunks

So, think back to last week when we were testing `mapDispatchToProps`... What were we actually testing? Testing thunks is going to be very similar. We don't actually want to test dispatch (we didn't write dispatch). So we're probably going to want to mock dispatch and just test that it was called with the correct action. That doesn't sound so bad, right?

Let's start with `fetchStaff`. What is the first action that gets dispatched? Are we doing anything asynchronous at this point? Nope! We're just dispatching `isLoading` right before we kick off our network request. We already said we were going to mock dispatch, so the only other mock we need is just a url.

First things first... We need to import `fetchStaff` and `fetchBios` (it gets called in `fetchStaff`) and all of our synchronous actions that get dispatched (`isLoading`, `hasErrored`, and `setStaff`). We can also go ahead and create any mocks that we are going to need.

With the help of `redux-thunk`, when we call `fetchStaff` with our mockUrl, we are returned a function that then takes dispatch as an argument. We then call that function, passing it our mockDispatch. Now we can expect that our mockDispatch was called with `isLoading(true)`.

```javascript
// thunks/__tests__/fetchStaff.js

import { fetchStaff } from '../fetchStaff'
import { fetchBios } from '../fetchBios'
import { isLoading, hasErrored, setStaff } from '../../actions'

describe('fetchStaff', () => {
  let mockUrl
  let mockStaff
  let mockDispatch
  
  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockStaff = [
      {name: 'Christie', info: 'www.somemoreinfo.com'}, 
      {name: 'Will', info: 'www.somemoreinfo.com'}
    ]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        bio: mockStaff
      })
    }))
  })
  
  it('calls dispatch with isLoading(true)', () => {
    const thunk = fetchStaff(mockUrl) // this is the inner function that is returned
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('calls fetch with the correct param', () => {
    const thunk = fetchStaff(mockUrl)

    thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})
```

Ok, here's where we get into async land. We've kicked off our network request and now need to test what gets dispatched if the response is ok/not ok. If you need a refresher on how to mock fetch or resolve a Promise in our tests, take some time to go back and review the [Testing Async Javascript & API Calls](http://frontend.turing.edu/lessons/module-3/testing-async.html) lesson.

```javascript
// thunks/__tests__/fetchStaff.js

it('should dispatch hasErrored with a message if the response is not ok', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: false,
    statusText: 'Something went wrong'
  }))
  
  const thunk = fetchStaff(mockUrl) // again, this is the inner function that is returned
  
  await thunk(mockDispatch)
  
  expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
})



it('should dispatch isLoading(false) if the response is ok', async () => {
  const thunk = fetchStaff(mockUrl) // inner function
  
  await thunk(mockDispatch)
  
  expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
})

```

We've made our initial fetch and gotten back a good response. Now it's time to dispatch our other asynchronous action creator / thunk. We don't necessarily care what `fetchBios` is doing. We are just concerned about whether or not it got dispatched. Since that's the case, we can just mock out `fetchBios`. 

Remember back when we were creating our thunks and we decided to put each of them in their own file? This is why we did that... we wanted to be able to mock `fetchBios` individually. So, now let's go create a manual mock of `fetchBios`.

```javascript
// thunks/__tests__/fetchStaff.js

jest.mock('../fetchBios') // this is the file path for the original, not the mock

it('should dispatch fetchBios with the correct param', async () => {
  const thunk = fetchStaff(mockUrl)
  
  await thunk(mockDispatch)
  
  expect(mockDispatch).toHaveBeenCalledWith(fetchBios(mockStaff))
})
```

Only 1 test left for `fetchStaff`...

```javascript
// thunks/__tests__/fetchStaff.js

it('should dispatch setStaff with the correct params', async () => {
  const finalStaff = [
    {name: 'Christie', bio: 'Christie bio', image: 'Christie image'}, 
    {name: 'Will', bio: 'Will bio', image:   'Will image'}
  ]
  
  const thunk = fetchStaff(mockUrl)
  
  mockDispatch = jest.fn().mockImplementation(() => finalStaff)

  await thunk(mockDispatch)

  expect(mockDispatch).toHaveBeenCalledWith(setStaff(finalStaff))
})
```

### YOUR TURN! Pair up with a partner and see if you can write the tests for `fetchBios`. 


## Resources
* [Stack Overflow](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
* [Understanding how redux-thunk works](https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50) by Gethyl George Kurian
* [Thunks in Redux](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60) by Gabriel Lebec
* [Introduction to React with Redux and Redux Thunk: How to fetch data from an API](http://work.haufegroup.io/intro-redux/) by Camil Bradea
* [A Dummy's Guide to Redux and Thunk in React](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react) by Matt Stow
