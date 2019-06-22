---
title: React II: the How - building IdeaBox in React
length: 3
tags: javascript, react
---

## Learning Goals

* Create class components
* Create function components
* Use state and props to manage application data
* Create a controlled form
* Use JSX
* Understand conditional rendering

## Create React App

For this lesson, we will be using [`create-react-app`](https://facebook.github.io/create-react-app/). This is a single command line that sets up a boilerplate React application for us. Out of the box, it comes with some handy scripts (such as `start` and `test`).

Many of the dependencies and configuration files will be obscured, since we won't need to worry about them. This is a fast way to set up a React application so we can concentrate on building out the app, instead of spending our time and energy on tooling.

_Note_: A good intermission or post-graduation project is to learn how to configure React. Hand-rolling a React application will make you more familiar with how React works.

### Get started with Create React App

To set up a new react application, simply open your terminal and run the command:

```bash
$ npx create-react-app NAMEOFYOURAPP
```

For this lesson, we'll be rebuilding a Mod 1 project in React! Let's run the following script:

```bash
$ npx create-react-app ideabox
```

You will see something like this start to run in your terminal:

```bash
Creating a new React app in /Users/leta/mod3/ideabox.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

⸨  ░░░░░░░░░░░░░░░░⸩ ⠸ fetchMetadata: sill resolveWithNewModule pify@4.0.1 chec...
```

When the script is finished running, you will see the following message in your terminal:

```bash
> node scripts/postinstall || echo "ignore"

+ react-dom@16.8.6
+ react@16.8.6
+ react-scripts@3.0.1
added 1541 packages from 747 contributors and audited 888986 packages in 52.528s
found 0 vulnerabilities


Initialized a git repository.

Success! Created ideabox at /Users/leta/Turing/TA/MOD3/m3curriculum/ideabox
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd ideabox
  npm start

Happy hacking!
```

As the instructions say, let's change directories into our new ideabox application and run `npm start` to see our new boilerplate application!

### Exploring the boilerplate

Take a few minutes and look around the boilerplate. Hint: start at the `src/` folder!

What happens if you:

* Change some of the HTML you see in the `App.js` file?
* Change some of the CSS you see in the `App.css` file?

You'll also notice an `index.js` file. What is going on in there?

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

This is the React magic happening. You can read more about what's happening [here](https://reactjs.org/docs/react-dom.html), but in a nutshell: at our HTML element with an ID of "root", we're rendering a React element onto the browser DOM.

Okay. Enough with the nitty gritty. Let's get to building our IdeaBox application!

## Ideabox

Let's get rid of all the boilerplate inside the `App.js` file. Yep. Just ERASE THAT CODE!

You'll notice that as soon as we save our changes, the browser re-renders. Look into the terminal, and you'll see another build kick off. This is because `create-react-app` gives us hot-reloading. Any time we make a change, the browser will update to show our changes.

If we look at the browser now that we've deleted our `App.js` code, you'll see an error that reads:

"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."

Back in our `index.js` file we're trying to render a React component: App. However, we're no longer exporting a valid React component! The error is trying to be helpful to let us know what's going on.

Let's start building out our App component.

### Planning our app

Let's figure out what should be a component in our app.

![IdeaBox wireframe](https://i.imgur.com/2bSfaXK.jpg)

We have an App component. That should probably hold onto our list of ideas.

We need a Form component so we can create new ideas. The Form component will have to be able to add new ideas to App's list of ideas.

We need a Card component to display our ideas.

And let's create an Ideas component to hold all of our Cards.

![IdeaBox wireframe with component boxes](https://i.imgur.com/xWggABx.jpg)

### App.js

Let's bring back some code.

Because we want App to hold onto our list of ideas, let's think about how we're going to store that information.

In our React I lesson, we learned about _state_. In order to use component state, we need our component to be a class.

So: let's import React and the parent Component class, and create our child App component! Think back to your OOP knowhow from Mod 2.

```js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
  }
}

export default App;
```

When we save that, our error now says "TypeError: instance.render is not a function". This is because React expects our class-based component to have a method called "render"!

The class method `render` comes from the parent class, Component.

Just like any other parent class in OOP, when we inherit from it to create a child class, we have access to all of the parent's methods and properties. This is why the first thing we have to put in our constructor is the familiar `super` function.

If you look under the hood, the React "Component" is just a class that contains various methods (`render`, `setState`, `componentDidMount`). We will learn more about these in this and the next lesson.

Let's keep writing our App component!

```js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>IdeaBox</h1>
    )
  }
}

export default App;
```

Save this code and go check your browser. What do you see?

Let's take a minute and examine that return statement in our `render` method.

> **Understanding JSX**  
>
> It looks like our `render` method is returning some HTML! Very easy to read, right?  
>
> What we're actually writing here is known as JSX. It's an abstraction that makes React easier to write!  
>
> JSX is "JavaScript and XML" - it's a handy mashup language that allows us to write HTML with a bit of JavaScript injected in. You can read more on it [here](https://reactjs.org/docs/introducing-jsx.html) (and a bit more in depth [here](https://reactjs.org/docs/jsx-in-depth.html)). But in the meantime, we'll see how JSX makes our lives easier throughout this lesson!

Okay. Now try to add a paragraph tag. What happened?

If you saw this error, don't panic!

```
Failed to compile.

./src/App.js
  Line 12:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

  10 |     return(
  11 |       <h1>IdeaBox</h1>
> 12 |       <p>Hi!</p>
     |       ^
  13 |     )
  14 |   }
  15 |
```

Let's figure out what this error is saying. "Adjacent JSX elements must be wrapped in an enclosing tag."

If we think about this logically, it makes sense! The method `render` is just a function - a regular old class method. And how many things can a function return at once? Just one! So: in order to return multiple JSX elements, we have to wrap them in a single JSX element!

Since this is our App component, let's wrap everything in a `<main>` tag!

_NOTE: If you're just looking for an unflavored container for your elements (aka they are not semantically related to one another, and the best element to use would be a `<div>`), then instead, use a `<React.Fragment>`! You can read more about Fragments [here](https://reactjs.org/docs/fragments.html)._

```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  render() {
    return(
      <main className="App">
        <h1>IdeaBox</h1>
        <p>Hi!</p>
      </main>
    )
  }
}

export default App;
```

You'll notice that instead of "`class`", we're using a "`className`" attribute on our `<main>` element. Why do you think this is?

The answer lies with JSX: because we're writing JavaScript + XML, and not true HTML, we can't use "`class`" because "`class`" is already a reserved JavaScript word! So, we're using "`className`" instead.

### App.js state

Okay. Let's come back to our App constructor method and create state.

```js
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }
```

Let's review. What is the keyword `this` doing here? What is "state"?

Just like any other class, the keyword `this` refers to the instance of App that will be created when the constructor method is invoked! So: `this.state` is merely an instance variable for the App component. State is an object that will hold whatever information we want it to hold!

In our case, we want to create a list (aka an array) of ideas!

Let's start out with a couple of default ideas, just so we can have something to look at when we begin building out the rest of our components.

```js
  constructor() {
    super();
    this.state = {
      ideas: [
        { title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
      ]
    }
  }
```

When I look in my React Dev Tools, I can see that App now has state!

![App component state](https://i.imgur.com/hi2ICjX.png)
