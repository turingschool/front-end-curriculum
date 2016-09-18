# First Look: Redux

## Plan Of Attack

### What Is Redux?
- Created by Dan Abramov
- Predictable state container for JS apps
- Can be used with React or with any other view library
- 2kb (INCLUDING dependencies TINY!)
- Some ideas from Flux with Elm influence
- Collection of JS modules (like importing any type of NPM package)
- Written in ES6, but precompile CommonJS. Babel not required for Redux to work (unlike React)
- Scales extremely well to large complex apps
- Allows you to trace every mutation of state to the action that caused it


### Things You Need To Install  
(Assuming you have a skeleton setup with npm, webpack, and react).
```
npm i --save redux react-redux
npm i -D redux-devtools
```

### General Idea
The entire state of your app is stored as a JavaScript object in a single `store`.  

Think Steve's rendition of IdeaBox in React! Crud functionality was handled within a `store.js` file that called on an EventEmitter and handled the add/delete/update etc functionality.  

This is similar, except it's wired up to interact directly with the `state` of your React components through Redux rather than through an EventEmitter.  

Redux emits events called `actions` (essentially event listeners) that change appropriate parts of component's `state`.  

To connect the `action` and related `state` in your `store.js`, you use something called a `reducer`. Reducers specify what you want to do with a given action. Like a middle man between user behavior and component rendering.

### Redux vs Flux + Elm

### Reducers

```
import { createStore } from 'redux'

function likesCounter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1
    case 'DECREMENT' :
      return state - 1
    default:
      return state
  }
}
```

A Reducer is a **[pure function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.wh1l54a00)**. Meaning given the same input, the function will always return the same output.

Quick Example:

*NOT PURE*
```
Math.random(); // => 0.4011148700956255
Math.random(); // => 0.8533405303023756
Math.random(); // => 0.3550692005082965
```
*PURE*
```
FIND EXAMPLE?
```

As in React, instead of mutating the existing state, you return a new object if the state changes.

```
import { createStore } from 'redux'

function likesCounter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1
    case 'DECREMENT' :
      return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app as defined above
let store = createStore(likesCounter)

// Do some fancy stuff with React Redux

// The only way to mutate the state is to dispatch an action.
// Store started with a default value of 0
store.dispatch({ type: 'INCREMENT' })
// => 1
store.dispatch({ type: 'DECREMENT" '})
// => 0

```


### Actions

### Data Cycle

### Code-Along Phase 1: Implement Redux

#### Step 1: Get the app.

Clone down a copy of the [first-look-redux](https://github.com/martensonbj/redux-first-look) lesson. (**Confirm you're on the master branch**).

Notice we have a skeleton setup with components, a little css, an our index.js and html files.   

Run `npm start` to confirm everything is working.

#### Step 2: Write our First Reducer

The beauty of redux is that it handles our application's state in on localized place. Right now our LikesCounter is maintaining our state. Let's move that responsibility over to redux world.

Think about what we need here. We have an initial state value of 0, and then a function to update our value by 1 or -1. This is what will be handled by a `reducer`. Remember that a `reducer` is the middle man between when a user triggers an event, and the state of our component being updated.  

Create the following structure within your `src` directory:
```
reducers/
  index.js
```

In `reducers/index.js` let's tell it how to handle our user's actions.  

```
const initialState = {
  likes: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state = {likes: state.likes + 1}
    case 'DECREMENT':
      return state = {likes: state.likes - 1}
    default:
      return state
  }
}
```

First we set up an initial state so we only have to make changes in one place. Then we write a switch statement that handles each of our action types, for this app we have two: 'INCREMENT', or 'DECREMENT', which respectively replace the value `state.likes`.  

#### Step 3: Create a Store

As of now we have a reducer, but it's not hooked up to our React component(s) yet. In your `src/index.js` file let's create a redux store to connect the two.  

Also keep in mind that currently all of our rendering is happening within our `App.js` file. Let's move that responsibility to `src/index.js` as well.

`src/index.js`  

```
// main entry file

import './css/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'

import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter)
const target = document.getElementById('application')

const render = () => ReactDOM.render(
  <App
    state={store.getState()}
    incrementLike={() => store.dispatch({ type: 'INCREMENT' })}
    decrementLike={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  target
)

render()
store.subscribe(render)
```

What is happening here?  

In the first few lines we require all of the necessary dependencies to work with React and access our main App component. That should look familiar.  

Then we do some redux magic and import a method called `createStore` from the `redux` module.  This gives us access to three built in redux function, `getState()`, `dispatch()`, and `subscribe()`.

In order to wire up a store, we also need access to our reducer which I've set to the variable `counter`.

To finally connect all the pieces, we send our `counter` reducer into the method `createStore`, which tells redux how our state will be updated using the specified actions. (For simplicity I also added a constant to specify where on the DOM we want all of this to ultimately render.)

Now lets focus on the following chunk of code:

```
const render = () => ReactDOM.render(
  <App
    state={store.getState()}
    incrementLike={() => store.dispatch({ type: 'INCREMENT' })}
    decrementLike={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  target
)
```

Here, we tell ReactDOM to render our APP component. As props, we pass down some functions which will carry through information to other nested components.  

Lets talk about each Redux specific function.  

`store.getState()`: Pulls out the current state of the redux store for whatever part of the app Redux is responsible for. Here, we've given it only our counter reducer, which has an initial state value of 0.  

`store.dispatch()`:  This is the most commonly used store method. Allows us to "dispatch" actions to change the state of our application when events are fired. This is similar to calling "this.setState()..." when an `onClick` event fires on a button.

`store.subscribe()`: Registers a callback within which it is always listening for something to be dispatched. It's like having an alert that says "SOMETHING WAS DISPATCHED!" which triggers our app to say "Hey, React, go re-render this component now.".

#### Step 4: Update our Components

So now we have this render function in `src/index.js` that is sending new information as props to our App component.  

```
<App
  state={store.getState()}
  incrementLike={() => store.dispatch({ type: 'INCREMENT' })}
  decrementLike={() => store.dispatch({ type: 'DECREMENT' })}
/>
```

This is no longer what our App.js file is expecting, which means we need to update how App is handing down props to the `<LikesCounter />` component. Let's update that file.  

First, we can remove the directions to render this component since that is now being handled in `src/index.js`, and instead we simply need to export the class. This means we also no longer need import the render method at the top of our file, and lastly we need to update how the props are being passed through.

`App.js`  
```
import React, { Component } from 'react'
import LikesCounter from './LikesCounter.js'

export default class App extends Component {
  render () {
    const { state, incrementLike, decrementLike} = this.props
    return (
      <section className="container">
        <h1>Count Some Likes</h1>
        <LikesCounter initialCount={state.likes}
                      handleIncrement={incrementLike}
                      handleDecrement={decrementLike}
        />
      </section>
    )
  }
}
```

Follow the chain of components and continue updating how our props and events are communicating with each other.  

In `LikesCounter.js` we no longer have any need for the state constructor or `addToLikes()` function since redux and our reducer are no handling this instead. Remove those, and then update the render function.

`LikesCounter.js`  

```
import React, { Component } from 'react'
import ActionButton from './ActionButton.js'

export default class LikesCounter extends Component {
  render () {
    const { initialCount, handleIncrement, handleDecrement } = this.props
    return (
      <div className="LikesCounter">
        <h3>Likes: {initialCount}</h3>
        <div className="ActionButtons">
          <ActionButton text="Like! (+1)" handleClick={handleIncrement} />
          <ActionButton text="Dislike! (-1)" handleClick={handleDecrement} />
        </div>
      </div>
    )
  }
}
```

And finally in `ActionButton.js`:
```
import React, { Component } from 'react'

export default class ActionButton extends Component {
  render () {
    const { text, handleClick } = this.props
    return (
      <button className="ActionButton" onClick={handleClick}>
        <span>{text}</span>
      </button>
    )
  }
}
```

### Code-Along Phase 2: Refactor  

Congrats! We've implemented Redux. But this is really only convenient if we have a tiny app with one component, one state, and one reducer. If that's all that was necessary we might as well just handle state within the components without redux at all.

Let's refactor to allow for scalability.


#### QUESTIONS
  - import css from './styles.css' --> what is css?
  - what is raven? (config.js)
  - React.cloneElement, this.props.children
  - store.subscribe(render)??

#### BUZZ WORDS
  - Action
  - ActionCreator
  - Reducer
  - Store
  - Payload

#### Resources
[Official Github Docs](https://github.com/reactjs/redux)
[Redux Example Apps](http://redux.js.org/docs/introduction/Examples.html)
