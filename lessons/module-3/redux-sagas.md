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

### Step 2: Adding my first saga

Right now, whenever a user submits the login form, I'm logged in and can see the
main page. Great for demo purposes, but pretty insecure. What I actually want to
have happen is for the user to make a request to the server when they submit the
form, and have the 'LOGIN_USER' action dispatch if my credentials are correct.
Sounds like a great opportunity for a Saga!

Take a look at `Login/index.js`:

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount = () => {
    if(this.props.loggedIn) {
      this.props.history.push('/main')
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.loggedIn) {
      this.props.history.push('/main')
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitLogin = async event => {
    event.preventDefault()
    await this.props.loginUser(this.state)
  }

  render = () => (
    <div>
      <form onSubmit={this.submitLogin}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={this.handleChange} />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(actions.loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
```

Right now, we're dispatching our 'LOGIN_USER' action as soon as the form is
submitted. That won't do, let's change it to dispatch a new action type,
'SUBMIT_LOGIN_USER'. This will require changes to our `submitLogin` event
handler method, and our `mapDispatchToProps`:

```js
submitLogin = async event => {
  event.preventDefault()
  this.props.submitLoginUser(this.state.email, this.state.password)
}

const mapDispatchToProps = (dispatch) => ({
  submitLoginUser: (email, password) => dispatch(actions.submitLoginUser(email, password))
})
```

If we're going to go dispatching a new action, we better create that action too.
Go ahead and add this action to your `actions/index.js`:

```js
export const submitLoginUser = (email, password) => ({
  type: 'SUBMIT_LOGIN_USER',
  email,
  password
})
```

Finally, let's create our first Saga! Create a new directory, `sagas/` and add
an `index.js` file. Go ahead and add the following:

```js
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api'
import * as actions from '../actions'

function* listenForSubmitLoginUser() {
  yield takeLatest('SUBMIT_LOGIN_USER', submitLoginUser)
}

export default listenForSubmitLoginUser
```

Hey look! Sagas are generators! In this case, the `listenForSubmitLoginUser` is
going to take the latest dispatched 'SUBMIT_LOGIN_USER' action, and then call
another saga, `submitLoginUser`. We'll define that in a minute, but first, let's
explore the `redux-saga/effects` API a bit.

---
_**Turn and talk:** What is being imported from redux-saga/effects? What do you
think each method is for? After you've ventured a guess for each one, go ahead
and read some documentation. Were you right?_

---


### Step 3: Sagas calling sagas

Our first saga is just a listener saga; it's going to keep an eye out for any
dispatched 'SUBMIT_LOGIN_USER' actions. Now however, we want to actually make
our api request, using a new saga `submitLoginUser`. We want the saga to first
call the api, with the credentials from the action object, and then dispatch our
'LOGIN_USER' action to the Store.

Add the following saga to your `sagas/index.js`:

```js
function* submitLoginUser(action) {
  try {
    const user = yield call(api.postLoginUser, action.email, action.password)
    yield put(actions.loginUser(user))
  } catch(err) {
    // What should we put here?
    // yield something, but what?
  }
}
```

If you've wired everything up correctly, and your server is running, your saga
should now be called onSubmit of the Login form!

This pattern of having a listener saga that delegates to another, side effect
saga, is extremely common in the real world when sagas are being used. Next up,
we'll see how to take advantage of one of redux-saga main draws, ease of
testing!


---
_**Turn and talk:** We can still use try/catch! That's awesome, but what should
we be doing in the event of an error?_

---
