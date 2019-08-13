---
title: React III - Advanced data management
length: 180
tags: react, ideabox, lifecycle methods, prop types, conditional rendering
module: 3
---

## Learning Goals

* Understand the component lifecycle
* Understand class component lifecycle methods
* Implement conditional rendering
* Implement PropTypes & understand why they are useful

## Vocabulary

- lifecycle method: a set of methods found in the parent class Component that fire at different points during the component lifecycle
- PropTypes: a library we use to validate the data type of props coming into a component; allows for more specific, helpful error messages

## Overview

In today's lesson, we're going to continue building on our fully tested IdeaBox repo. You may clone down a completed copy [here](https://github.com/turingschool-examples/ideabox-testing/) (be sure to checkout the branch `react-iii` and then run `npm install`).

Before we get started with our code along, let's take some time to understand the component lifecycle from a high level!

## The Component Lifecycle

Did you ever learn about the butterfly lifecycle when you were a kid? It starts out as an egg, hatches into a caterpillar, eats a bunch, wraps itself into a cocoon, emerges as a butterfly? Well, React components have lifecycles, too.

A React Component goes through 3 distinct phases during its Lifecycle:

* Mounting (aka Birth)
* Updating (aka Growth)
* Unmounting (aka Death)

Dan Abramov [tweeted](https://twitter.com/dan_abramov/status/981712092611989509) a diagram that helps explain some of the React 16 lifecycle methods.

![React 16 component lifecycle methods chart](https://pbs.twimg.com/media/DZ-97vzW4AAbcZj?format=jpg)

We'll take a deeper look into some of these methods in this lesson.

## Mounting Phase

### constructor() && super()

Let's talk about the first methods we see in a class-based React component.  

```js
constructor() {
  super();
  this.state = {
    name: ''
  };
}
```

Can you think of where you've seen these methods before, outside of React? Take a minute to write down everything you know about `constructor()` and `super()` methods in JavaScript classes (think back to the beginning of Mod 2!).

Per [the docs](https://facebook.github.io/react/docs/react-component.html#constructor), the `constructor()` method is called once, and before the component is mounted onto the DOM. It is the first and only function called automatically whenever a `class`-based component is created.  

Any class in JavaScript has this rule: Within the constructor, it's important to immediately call `super()` in cases where our class extends any other class that also has a defined constructor. In the case of React class-based components, what class are we extending?

(Hint: go take a look at your last React project and find a class-based component. What does code say when you are declaring your component?)

Invoking `super()` will run the constructor method of the parent class and allows it to initialize itself. This invocation allows `this` to have a defined value **within the constructor**. Constructors are great for setting up our component and initializing state. However, this is **NOT** a place you should consider making a network request.

This does not mean that every class NEEDS a constructor. The [default constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor#Default_constructors) is used if you aren't modifying it. There is even an [eslint rule](http://eslint.org/docs/rules/no-useless-constructor) for detecting the use of a default constructor. Basically, if you don't need to initialize state or bind any methods, you don't need to implement a constructor for your component! It will get called automatically behind the scenes. Magic!

Rule of thumb, though, is typically: if you have a constructor method in your code, you must invoke the super method. In fact, browsers today will throw an error if you are using ES6 syntax and try to call a constructor method without `super()`! Thanks for looking out like a pal, browsers!

Let's take a minute to fire up a react component and watch the errors trigger as we build out a class based component. Remember - errors are trying their best to be helpful. They're like friendly goblins - kinda alarming to look at at first, but then you start to see how helpful they are.

Start a blank react project - feel free to use `create-react-app` for this lesson.  

You'll notice that React has some incredibly verbose and helpful goblins - I mean, error messages. Make sure you take time to read these as you build out projects this mod, they will almost always point you in the direction of happiness.  

### What is this `super()` business?  

Try this in your component and check out the error message:

```js
// Card.js

constructor(){
  console.log(this);
}
```

You should see something like this:  

```js
Failed to compile.

Error in ./src/Card.js
Syntax error: 'this' is not allowed before super()

`
  3 | export default class Card extends Component {
  4 |   constructor(){
> 5 |     console.log(this);
    |                 ^
  6 |   }
  7 |
  8 |   render () {
`
```

If, in your constructor, you need access to that component's `props`, you _must_ pass these as an argument down through `super()`.

```js
constructor(props) {
  super(props);
  this.state = {
    name: props.initialName
  };
}
```

Without passing the props down into this method, `this.props` will return as `undefined` **within the `constructor` method**.  
This is bad because the constructor method is the first function called when your component is instantiated as a class - knowing the context of `this` from the get go can be a big deal.   

Note that whether or not you have a constructor method has no effect on `this` or `this.props` within the `render()` method - the `render()` method defines its own context.  

Per [the docs](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class), class components should always pass props to the base constructor (this is why we pass them into the `super()` method). However there is some debate as to why this is suggested, since React will automatically set the props for you once the constructor has fired.

### static getDerivedStateFromProps() - ***NEW***

This is a new lifecycle method that was added with React 16.3. Check out what the [docs](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) have to say about it. Because this is a static method, we don't have access to `this` inside the method. Per the docs, this method gets invoked under 2 circumstances:
  * after a component is instantiated
  * when the component receives new props

It takes in `nextProps` and `prevState` and returns an object to update state, or null if the new props do not require any state updates.

This method exists for only one purpose... it enables a component to update its internal state as the result of changes in props. Since this method is static, you can't refernece `this` in it. Whatever object is returned from this method is what the state of the component will be set to. This new method will be called on the initial mounting of the component, as well as when it's re-rendered.

### render()

Now that our component has been initialized and configured, we can begin rendering some content/elements on the page. This is the lifecycle method that React developers are most familiar with. It is the one lifecycle method that exists across all phases of a React component. It's important to remember to always keep `render()` a **pure method**. This means we should never call `this.setState()` within `render()`. If we take a minute to think about this, it makes total sense... it would put us in an infinite loop of re-rendering!  

#### Managing Children Components and Mounting

The React Element that has been rendered by the initial `render()` may possibly have a number of children that need to be rendered as well. This is where each of those children kickoff their own lifecycle methods... `constructor()`, `render()`, and `componentDidMount()`. Once all the children have been successfully created, initialized and mounted, the parent's `componentDidMount()` method will finally be called.

### componentDidMount()

Per [the docs](https://reactjs.org/docs/react-component.html#componentdidmount), `componentDidMount()` is invoked "immediately after a component is mounted." When `componentDidMount()` is called, this signalizes that the component - and all its sub-components - have rendered properly. Any functionality that is dependent on existing DOM nodes should live here. For example, let's say you want to set state which affects a `<p>` tag, you need to wait until that `<p>` tag exists before you can throw any additional information into it.

This is also the go-to location to fire off an API call or network request (**BEST PRACTICE**). This is a great [blog post](https://www.robinwieruch.de/react-fetching-data/) that discusses how and where to fetch data in React.

**NOTE:** Setting state in this method **WILL** trigger a re-render - but will not cause an infinite re-rendering loop, because `componentDidMount` only fires after the initial mount of the component.

## Updating Phase

### static getDerivedStateFromProps

Yep, it lives here, too. If you look back up at the diagram from the beginning of the lesson, you can see that it's a part of the _New Props_ phase of Updating.

### getSnapshotBeforeUpdate - *NEW with React 16.3.0*

This method is called right before any DOM manipulations are made. If you need to do any calculations that you'd like to use in componentDidUpdate(), you can return those in this method, and they will get passed along as a the third argument to componentDidUpdate()

### render()

And, yeah, render lives here, too.

### componentDidUpdate()

Per the docs: "Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to the previous props (e.g. a network request may not be necessary if the props have not changed)."

## Unmounting Phase

### componentWillUnmount()

This is invoked just once, before the component is unmounted and destroyed. It's a good place to invalidate any open network requests, kill any timers, and do any other necessary cleanup tasks.

## Error Handling

### componentDidCatch() - *just know that this exists*

`componentDidCatch` allows you to set up error boundaries in your application, and display fallback UI rather than just letting the error crash into the console. Check the references below for more information.

## Code Along

Okay. Why do we care about any of this?

To be honest, you probably won't be using much more than `constructor()`, `super()`, `render()`, and `componentDidMount()` in Mod 3. However, it's good to be aware that other lifecycle methods exist.

We're going to implement `componentDidMount()` in our IdeaBox.

### Setup  your back end

We're going to be running a back end server, which will function as our API! Lucky you, we've written up the backend for you, complete with documentation and friendly error messages.

Clone down [the repo](https://github.com/turingschool-examples/ideabox-api) - but NOT inside your existing IdeaBox repository!

Follow the instructions inside the API repo's README to get set up.

Once you are set up, you can visit `http://localhost:3001/api/v1/ideas` and you should see a brief list of ideas!

### Refactor our IdeaBox Front End

Okay. Let's refactor our IdeaBox so that we are consuming our API!

In `App.js`, let's edit our initial state.

```jsx
// App.js

  this.state = {
    ideas: [],
    error: ''
  };
```

Now, let's make a network request to our back-end to get our ideas data. Looking through our lifecycle methods, from which one should we make our fetch?

By convention, we make network requests from `componentDidMount`. This occurs after the initial mount of the component (aka, some data is rendered to the page), so that we can get _something_ onto the page, even if our network request takes forever. We don't want users staring at a blank screen!

```jsx
// App.js

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/ideas')
      .then(response => response.json())
      .then(ideas => this.setState({ ideas }))
      .catch(error => this.setState({ error: error.message }));
  }
```

You'll notice that when we refresh our app, the title and form render, but the Cards render a split second later, once the data has come back from our back-end server.

What happens if you intentionally break the fetch? Try messing up the URL. What happens to the UI? Check what's going on in your React dev tools.

It looks like our catch is firing (because our Promise rejected), and we're setting the error message in state. Let's _do_ something with that information! Such as displaying it to the user.

### Conditional Rendering

We don't want an error message showing all the time. So ... let's make use of conditional rendering! Let's take a look at our current `render()` method:

```js
// App.js

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas
          ideas={this.state.ideas}
          deleteIdea={this.deleteIdea}
        />
      </main>
    )
  }
```

If we wanted to add an h2 that would show up if we had an error, what would we write?

```js
// App.js

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        {this.state.error && <h2>{this.state.error}</h2>}
        <Ideas
          ideas={this.state.ideas}
          deleteIdea={this.deleteIdea}
        />
      </main>
    )
  }
```

Wowwwww okay. What does that syntax even mean?

First of all, this is JavaScript (we can tell because of the curly brackets). The first statement of `this.state.error` will evaluate to a truthy or a falsy value (an empty string is falsy). The code after the double ampersand is what will render if we get past the first statement.

It's a shorthand way of saying, "If there is an error in state, render the error inside h2 tags!"

Neato!

Notice that we are only conditionally rendering the one part of the render that is contingent upon whether or not an error is in state.

We're not rendering two different versions of the App. We just have the one, and one line will show up only if there is an error stored in state.

## PropTypes

PropTypes allow you to specify what type of props you are expecting in a certain component. This is also known as "typechecking".

Many people have moved to implementing languages like [TypeScript](https://www.typescriptlang.org/) or [Flow](https://flowtype.org/) for this exact purpose, but even without any additional technologies, the `prop-type` module lets you establish a safety net with very little effort.

The overall benefit of using PropTypes is that it gives your error-message goblins more tools to provide you with helpful, specific errors to better debug your code.

Let's say you declare a component `<Main title={this.state.title}/>`. Here, your component is expecting a prop called `title` and you (probably) expect it to be a string. If you define that value within your `propTypes` object and it comes in as something else - say for example the API you are consuming has changed and now you have an array of strings - you will get a helpful warning message in your console.  

Previously, PropTypes was built into the React library itself, however it has since been extracted into its own module. You can install it like any other module.

```sh
$ npm install prop-types -S
```

_hint: the `-S` flag is the same as the `--save` flag, and as of npm version 5, all dependencies installed without a flag default to being saved as regular dependencies._

In React, `PropTypes` are declared like this:

```js
// Main.js

import PropTypes from 'prop-types'

class Main extends Component  {
  render() {
    return(
      <p>Welcome, {this.props.name}</p>
    )
  }
}

Main.propTypes = {
  name: PropTypes.string
}
```

The error you will see if the component gets something besides a string would look something like this:  

```
Warning: Failed prop type: Invalid prop `name` of type `array` supplied to `Main`, expected `string`.
    in Main (created by App)
    in App
```

Without using PropTypes, you would have seen a vague error when the Component failed to render. With PropTypes, we can see that the error was that we were receiving an array when we expected a string.

### Class propTypes

Check out a complete list of `propTypes` and examples of usage [here](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#react.proptypes).  

By default, all props specified within the `Class.propTypes` object will be considered optional. There are many instances where your component will not function correctly without that particular prop. To add a validation that will fire an error message if a prop does not show up at all, simply add `.isRequired` to the end of the propType declaration.  

```js
Main.propTypes = {
  name: PropTypes.string.isRequired
}
```

You can also be more generic - let's say you need a prop to come in but it doesn't matter what type it is as long as it's there. Instead of specifying a particular JS primitive you can use `.any`.

```js
Main.propTypes = {
  name: PropTypes.any.isRequired
}
```

### Your Turn

Take the next 5 minutes to look up the following prop types and understand what they do. We will circle back to talk about
these particular methods when you are done.  

- `PropTypes.oneOf()`  
- `PropTypes.arrayOf()`  
- `PropTypes.objectOf()`  
- `PropTypes.shape()`


## DefaultProps

Just like when writing functions, React also allows us to provide a default value for props. [defaultProps](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#default-prop-values) let you ensure that a value will be passed through. This helps eliminate some of the incessant ternaries that either render the prop or an empty string, for instance.  

```js
class Main extends Component  {
  render() {
    return(
      <p>Welcome, {this.props.name}</p>
    )
  }
}

Main.defaultProps = {
  name: 'Batman'
}
```  

**Note:** The `propTypes` typechecking validations fire AFTER `defaultProps` have been resolved. This allows for the default props to fill themselves in before any warning messages are thrown.  

### Your Turn  

Now that we've talked about the most obvious use cases of propTypes to preemptively debug your code, read the following two articles - you are highly encouraged to take notes:  
- [Better Prop Validation](https://medium.com/@MoeSattler/better-prop-validation-in-react-cc83590d311f#.8z6wszfzn).  
- [Writing A Good React Component](https://thoughts.travelperk.com/writing-a-good-react-component-59624ed40b8e#.64wzjk4qc)  

We will circle back to review the main points of these articles together.  

When you are done reading, work with your table to implement propTypes and defaultProps into IdeaBox!

## Reflect

Take a few minutes to journal:

* What "aha" moments did you have?
* Which concepts are the fuzziest for you right now?
* Which concepts are the clearest for you right now?
* What do you know about `componentDidMount`?
* How do you conditionally render a part of a component?
* What's the purpose of propTypes?

## Suggested homework

### Additional Async Practice

Right now, our IdeaBox will work as expected. However, you'll notice that our `addIdea` and `deleteIdea` methods are only manipulating our application state, rather than interacting at all with our back-end.

Go take a look at the BE repo's README. There is documentation for adding and deleting ideas.

Refactor IdeaBox to use these endpoints. Hint: you might need to write more fetches...

### Take a look ahead to our async testing lesson and...

...pull the fetches into their own files and try to write out a few async tests!

## References

- [React Lifecycle Docs](https://reactjs.org/docs/react-component.html)
- [The React Life Cycle](https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html)
- [Understanding Component Lifecycle](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d)
- [Lifecycle Simulators](https://reactarmory.com/guides/lifecycle-simulators)
- [Dan Abramov's Twitter chart/convo on modern React lifecycle methods](https://twitter.com/dan_abramov/status/981712092611989509)
- [Error handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)
- [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
- [React v16.3.0: New Lifecycles](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
