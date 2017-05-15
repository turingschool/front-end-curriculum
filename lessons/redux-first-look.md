---
title: "First Look: Redux"
length: 180 min
tags: React, JavaScript, Webpack
module: 2
---

DEPRECATED - see Starting Up Redux lesson instead

## Plan Of Attack
  - What is Redux? (Slide Deck)
  - [Code Along](https://github.com/martensonbj/redux-first-look) (short!)

## Things to Keep In Mind:
  - This is meant to be a surface level class to introduce you to concepts, buzz words, and let you have a first glance at what Redux looks like.
  - You ARE NOT expected to understand Redux after this class.
  - There are tons of great resources (listed at the bottom of this file) if you want to dive deeper this week.

### What Is Redux?
Redux was created by Dan Abramov to be a predictable state manager for JavaScript applications.  

**Redux is only concerned with State**

Although we will be talking about Redux within a React app, it is not dependent on React it just works really well together, and the two libraries share some of the same brilliant minds. You could just as easily implement Redux into an Angular2 App.  

As you start getting into docs, you'll hear a lot about "Flux" vs "Redux". Flux came first, and I like to think of it as the conceptual approach, or a general list of "best practices". Redux takes that one step further and gives you methods and code structure to implement this approach in a consistent way. Redux was designed to simplify Flux and do the job better.  If you want to know more, research Flux.  

Redux is written in ES6, but precompiles into CommonJS so Babel is not required for Redux to work (but Babel IS required for React. So there's that.) Also, It's only 2kb (INCLUDING dependencies. That's TINY!)  

In a nutshell, Redux wraps up all of your application's state into a single black box of information called a `store`. The state is changed when your app fires off an "action", which is processed in something called a "reducer", which then modifies the state within your store. Let that wash over you for a moment - what you should think about at this point are the buzz words `action`, `reducer` and `store`.  

Other benefits of Redux are that it scales extremely well to large complex apps. As your app grows, it grows horizontally with the help of Redux. Things do not become more dependent on each other, you simply add more pieces to the puzzle. Redux also allows your to trace every mutation of state to the action that caused it, it comes built in with a type of "rewind" functionality.  

### Things You Need To Install If You're Doing This Alone
(Assuming you have a skeleton setup with npm, webpack, and react).  

```
npm i --save redux react-redux  
npm i -D redux-devtools
```

React-redux only gives us two things: A component called `<Provider />`, and access to the `connect` method. Stick that  

### General Idea
The entire state of your app is stored as a JavaScript object in a single Redux `store`. Think of the store like a black box that churns out state based on any (or lack of any) changes to your app.

If you experienced Steve's rendition of IdeaBox in React, crud functionality was handled within a `store.js` file that called on an EventEmitter and handled the add/delete/update etc functionality. All of that action happened outside of the component itself, which is a similar concept of the Redux store.   

This is similar, except it's wired up to interact directly with the `state` of your React components through Redux rather than through an EventEmitter.  

Redux emits events called `actions` (essentially event listeners) that change appropriate parts of component's `state`.  

To connect the `action` and related `state` in your `store.js`, you use something called a `reducer`. Reducers specify what you want to do with a given action. Like a middle man between user behavior and component rendering.

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

A Reducer is set of a **[pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.wh1l54a00)**. Meaning given the same input, the function will always return the same output.

Quick Example:  

*NOT PURE*
```
Math.random(); // => 0.4011148700956255
Math.random(); // => 0.8533405303023756
Math.random(); // => 0.3550692005082965
```

Even though we are calling the same function, with the same arguments ( or lack thereof ), we get back different results every time. That is an inpure function.  


*PURE*
```
addTwo(num) {
  return num + 2
}
```

If we call `addTwo(2)`, we will ALWAYS get back `4`, no matter how many times we call said function.

As in React, instead of mutating the existing state, you return a new object if the state changes, which helps us maintain pure functions within our reducers.  Let's take a very high-level look at a possible action-flow. Note that there are more things that need to happen here to make this code work...but for example purposes...

```
// Get the necessary method(s) from redux
import { createStore } from 'redux'

// Set up a reducer that tells redux what happens to state based on a given action
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

// Create a Redux store that holds the state of your app and keeps an eye on it
let store = createStore(likesCounter)

// Do-Some-Fancy-Stuff-With-React-Redux-Here-That-We-Will-Talk-About-Later

// Dispatch an action that tells Redux to update the state if necessary

store.dispatch({ type: 'INCREMENT' })
// => 1
store.dispatch({ type: 'DECREMENT" '})
// => 0

// Do what you want with the newly updated state

```

### Actions

Actions are simple JavaScript objects that send data from your application to your store. They require a type (defined as a string), and can also have an optional payload.

```
type: 'DECREMENT',
changeCount: -1
```

### ActionCreator

Action Creators are simple JavaScript functions that return action objects. Action Creators allow your app to call a function and return an object with the organized information your reducer needs to do it's job. In the following example we won't have an action creator.  

```
decrementCount = () => {
  type: 'DECREMENT',
  changeCount: -1
}
```

### Reducers

Reducers make a copy of state, update the copy, and pass those copies back to the store. A redux store can only accept one "reducer" passed in as an argument so you will most often see them consolidated into something called a rootReducer.

In your store, these actions will be called using the built in redux function `store.dispatch()` which we will get into later.  

Think of a Reducer like tiny photocopy robots. Instead of overwriting anything, they are always just making copies and making changes to the newest copy.  

Each individual reducer (let's say we had a few like an "ideas" reducer, and a "posts" reducer, and "comments" reducer) sends their respective states to the root reducer. The rootReducer then compares notes, puts together a master copy of anything needing updated, and send its along to the redux store and then on to your components.  

Things Reducers should NOT do:
  - Mutate Arguments
  - Perform side jobs (API calls, routing, etc)
  - Call non-pure functions like Math.random() or Date.now()   


Example:  
```
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

### Store

The redux Store is the crux of the gig. It pulls in the actions and reducers and hands everything off to the components that need it.  

It gives us a few built in functions:  
  - getState()
  - dispatch()
  - subscribe()  



### Code-Along Phase 1: Implement Redux

#### Step 1: Get the app.

Clone down a copy of the [first-look-redux](https://github.com/martensonbj/redux-first-look) lesson. (**Confirm you're on the master branch**).

Notice we have a skeleton setup with components, a little css, an our index.js and html files.   

Run `npm install` and then `npm start` to confirm everything is working.

#### Step 2: Write our First Reducer

The beauty of redux is that it handles our application's state in one localized place. Right now our LikesCounter is maintaining our state. Let's move that responsibility over to redux world.

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
      return state = {...state, likes: state.likes + 1}
    case 'DECREMENT':
      return state = {...state, likes: state.likes - 1}
    default:
      return state
  }
}
```

First we set up an initial state so we only have to make changes in one place. Then we write a switch statement that handles each of our action types, for this app we only have two: 'INCREMENT', or 'DECREMENT', which respectively replace the value in `state.likes`.  

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

`store.subscribe()`: Registers a callback within which it is always listening for something to be dispatched. It's like having an alert that says "SOMETHING WAS DISPATCHED!" which triggers our app to say "Hey, React, see if we need to re-render this component now.".

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

Let's refactor to allow for scalability and add some react-redux special effects. (Note: This will be a sneak peek at next steps, which will be covered more in depth next module).

#### Step 1: Implement a rootReducer  

Start by creating a new file `reducers/counter.js`. Assuming our app will eventually have more than one reducer, this lets us start to separate our logic.

Keep in mind that Redux can only pass one reducer to state, which means we need to consolidate our information so this is possible.

Within that file move the logic from `reducers/index.js`:  
`reducers/counter.js`  

```
// counter reducer

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

Update `reducers/index.js`  

```
import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({
  counter
})

export default rootReducer
```

Now we need to make a few changes in our `store` (`src/index.js`).  
This line:  
`import counter from './reducers'`  
Becomes:
`import reducer from './reducers'`

Assuming our reducer now represents multiple reducers it doesn't make sense to call it "counter".

Then pass our store the new variable.  
`const store = createStore(reducer)`.  

Think about how we are passing our state initially to our App. What did we just do? How can we drill into the information to accurately render our Likes counter now?
*hint: debugger!*

We are going to leave this lesson here. Next steps will include:
  - Implementing `react-redux` specific functions:
  - Wrapping our main component in a `<Provider />` component
  - Using connect() to pare down what state our component needs access to
  - Using `mapStateToProps()` and `mapDispatchToProps()` to work with `connect()`

#### Resources
[Official Github Docs](https://github.com/reactjs/redux)  
[Redux Example Apps](http://redux.js.org/docs/introduction/Examples.html)  
[Using Redux with React](http://redux.js.org/docs/basics/UsageWithReact.html)  
[Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)  
[Thinking In React](https://facebook.github.io/react/docs/thinking-in-react.html)  
[Redux - By Turing's own Marc Garreau!](https://quickleft.com/blog/redux-plain-english-workflow/)  
