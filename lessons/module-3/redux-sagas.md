---
title: Redux Saga
tags: React, Redux, Sagas
---

## Agenda

Now that we've learned about [Generators](es6-generators.html), we're going to
explore a real use case! Redux Sagas are another popular middlware for handling
side effects in Redux, and as an added bonus, they're super easy to test!

Today, we'll go over:

- A review of what middlware is in Redux
- What we mean by 'side-effect'
- What the API of redux saga looks like
- How to create a listener saga
- How to create a side effect saga
- How to test both types of sagas

## Learning Goals

- Be able to write your own listener and side effect sagas
- Be able to write tests for each of your saga types

## Vocab

- Middleware
- applyMiddleware
- Redux saga
- put
- call
- takeEvery
- takeLatest


### A Review of middleware

According to [the docs](http://redux.js.org/docs/advanced/Middleware.html),
middleware is `some code you can put between the framework receiving a request,
and the framework generating a response.` That's a mouthfull. Think of it this
way: Middleware sits in between the dispatching of an action, and the digestion
of that action by a reducer.

A useful characteristic of middleware is that it's 'composable', meaning that
you can chain together a lot of different third-party libraries to perform these
different necessary actions. Redux needs middlware to create a check point
between firing off an action and hitting a reducer. There are many different
Redux middleware libraries for performing familiar tasks such as logging,
asychronous API call, and routing, just to name a few.

If you dig into the docs, you'll see an example of handrolling what middlware is
doing behind the scenes. It looks something like this:

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

Notice anything familiar about this pattern? It's one of those curried functions
that we went over. In both cases, we have access to our store, the action
that was dispatched, as well as function `next`, which allows us to continue on
to the next middlware, or onto the reducer. For more information on rolling your
own middlware, check out [this
post](https://medium.com/netscape/creating-custom-middleware-in-react-redux-961570459ecb)

### Side Effects

[Redux Saga](https://github.com/redux-saga/redux-saga) bills itself as an
`alternative side effect model for Redux apps`, so what exactly does that mean? 

Side effects are anything asychronous in our applications, such as API calls,
fetching information for the browser cache or local storage, or logging
information to an external service. These kinds of things are error prone, and
often difficult to test. Sagas aim to make this easier on us as developers.

### What is Redux-Saga

Redux-Saga is a library that makes performing these in-between side effects
easier in React/Redux applications. Similarly to `redux-thunk`, `redux-saga`
gets added to your Redux store when it's created. We're able to do this with a
helper method that we get from redux, `applyMiddleware()`.

In order to tell Redux to use middleware in the first place, we need to
implement this method, passing in all the middlware libraries we want to use.
`applyMiddleware` gives each middleware library access to the important Redux
methods `getState()` and `dispatch()`. 

Here's an example from the docs of how we'd add redux-saga middleware to our store:

```javascript
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga (we haven't learned what mySaga is yet, do worry, we will)
sagaMiddleware.run(mySaga)
```

## Code Along

Alright! Now that we've reviewed what middlware is, and seen how we'd add it to
our store, we're ready to start working with Redux-Saga.

### Getting Started

We've got a minimal client and server application set up for this lesson, go
ahead and clone it down, then follow the instructions in the README to get
things up and running.

`git clone https://github.com/turingschool-examples/redux-sagas-demo`

---
_**Take five minutes**: Read through this project. It's okay that you haven't
seen it before, reading code you haven't written will be a big part of you job.
What is this application doing?_

---


### Add Redux Sagas

We can't do much unless we install the library. `cd` into the `saga-client`
project from the repo, and install `redux-saga`

`npm i -S redux-saga`


### Step 1: Organize Dependencies/Setup Store

The centerpiece of and redux application is the Redux Store. That's not any
different in this application, but we are going to need to add in sagas as
middleware. 

---
_**Don't look below yet!** Take 5 minutes, and based on the example above, and
the Redux Sagas documentation, see if you can figure out how you'd add redux to
the store._

---

We're going to need to import `applyMiddleware` from the redux library, and
we'll need to import the redux-saga library as `createSagaMiddleware`. 

Also, we're going import a yet to be created saga, `listenForSubmitLoginUser`,
and we need to tell our saga middlware to run that saga. Don't worry too much
about what that means just yet, we'll see what it looks like in a minute.

Update your main `index.js` file to match the following:  
(Keep in mind that everything will broken until we put together one entire piece of the codebase).

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import listenForSubmitLoginUser from './sagas'
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(listenForSubmitLoginUser)

const app = <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
```
