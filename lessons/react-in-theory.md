---
title: React In Theory
length: 180 min
tags: React, JavaScript, Webpack
module: 2
---

## Background

### Overview -- Front-End Application History

* Beginning: Basic Jquery scripting; mostly static HTML
with small bits of dynamism on top of them
* Mostly ad-hoc / isolated interactions with the server
* __Problems:__ Browser applications becoming more and more
complex; numerous DOM Elements dependent on dynamic
data coming from servers or other sources
* __Frameworks:__ Like many technical problems, the open source community
decided to solve this with more robust and sophisticated
libraries

### The Landscape - Front-End Application Architectures

As front-end frameworks have proliferated, lots of different
ideas and approaches have been attempted, and we can
place them across a few interesting continua:

* small libraries vs. large frameworks
* View and Interaction only vs. Data and Persistence management
* View/Data combination vs. View/Data separation

__Discussion: Where do the major frameworks fit on these gradients?__

* Backbone
* Ember
* Angular

### React's Take

__Analogy:__ GPU Programming

Part of the fundamental problem is that as the number of UI elements
we're dealing with grows, the complexity of keeping them up to date
and in sync with all the relevant data grows as well.

Imagine you were developing a modern video-game: You likely have numerous
in-game "objects" that interact with one another as well as with the
game's landscape and environment, and ultimately all of these are getting
rendered onto a high resolution screen that could easily have millions of
pixels.

Suppose the player flips a switch in the game causing a light to turn on
somewhere in the environment. How do you handle updating the screen?
Do you seek out all the specific pixels which correspond to the light
and turn them on individually?

Probably not! But this is, in many ways, how front-end web technologies
have handled the problem of updating Browser-based User Interfaces in
response to user interactions.

Clicked a button? Hold on, let me find the dom element which corresponds
to the button you clicked and update its color.

Clicked a dropdown? Hold on, let me find the (currently hidden) chunk of
html which is associated with it and toggle it on.

And this is not to say that front-end developers are incompetent --
there are many reasons for doing things this way:

* it's relatively intuitive
* for much of the web's history, the amount of interactive elements
we've dealt with on a page were small and easy to track
* It minimizes expensive DOM re-renders (more on this in a moment)

### So what's the alternative?

Think back to our video game example: we gave one example of
something we probably _wouldn't_ do. So how _would_ we handle
the situation?

As an alternative to trying to selectively re-draw portions
of the scene, we could take a more whole-hog approach: Just
re-draw everything.

Consider the benefits of this approach:

* Conceptually simpler: rendered scene is simply a product
of all the existing information about the world's state
* Conceptually consistent: every re-render follows the same process
(initial render is no different than subsequent updates)

But also consider the costs:

* More computationally intensive (more rendering being done); likely
to run into performance issues

### What does it mean for web development

In practice, this last difficulty has largely prevented
this approach from taking off in web development.

One of the perennial thorns in the side of browser developers
is the speed of updating the DOM. Whenever we want to, say,
add a CSS class to an element, the browser has to go through
an extensive "re-painting" process. With sufficient
numbers of DOM elements, this process can get slow enough
for the UI to feel sluggish and unusable.

By avoiding large swaths of updates (i.e. with the traditional
approach of updating small chunks of markup at a time), we
can avoid this problem and keep our browser-based
UI's snappy.

### Where does React come in?

React's big innovation is that it gives us a way to utilize
the "re-render the world" approach in the context of DOM manipulation.

Using React, we'll define __components__ -- individual pieces of our UI
in terms of the pieces of data they depend on. Then, we'll give each
component a key __render__ function, which tells React how to
re-generate the portion of the DOM controlled by that component
_in terms of its data._

Then, whenever anything changes, React can walk down the component tree,
re-rendering components in terms of their associated data (which may or may not have changed).

But what about the performance problems of DOM repaints?

React gets around this problem by implementing a separate, in-memory model
of the current DOM (called a "virtual DOM"). When things need to be re-rendered,
it can (very quickly) re-generate its virtual representation of the DOM. Then,
it actually uses an algorithm to isolate those elements that _actually changed_,
and sends real DOM updates to only those elements.

So when we said React allows us to continuously re-render the entire UI in response
to data changes, we were oversimplifying. In reality, React itself does end up
sending selective updates to the DOM.

However its internal implementation (using
a virtual representation of the DOM and a diffing algorithm) allows us, the developer,
to write our code as if the top-to-bottom re-render was actually occurring.

While the idea of a "virtual DOM" is an interesting and important implementation
detail, the fundamental shift toward a more functional and less imperative model
of UI programming is ultimately what makes React so interesting.

### Other things to like about React

* __Lightweight__ -- does a specific thing and does it pretty well
* __Very modular__ -- easy to drop in for a small portion
of your UI without having to "rewrite the whole thing in React"
* __Easy to learn__ -- As we will see shortly, there's honestly
not that much to it. Learn the basics for setting up components
as well as a few core lifecycle methods, and you're ready to start
building your own UI.


## Code Along

  - Build a basic web app from scratch using React

## There Are 2 Starting points to this lesson:
  [Repository](https://github.com/martensonbj/react-in-theory/tree/basic-config)
  * If you want to build your app from scratch with some fancy web plugins and sass, start here and make sure you're in the branch `from-scratch`.
  * If you want to jump in with everything put together but the React configuration and implementation, checkout the branch `from-react`

## 1. Code Along From Scratch

### Webpack and Application Setup

Clone down [the repository](https://github.com/martensonbj/react-in-theory).  
Initialize `npm` and accept all defaults  
`npm init --yes`  

Add a quick console.log into your `index.js` file so we have something to look for when we wire up our Webpack.  

To cover our bases make sure your `.gitignore` file is ready to go:  
`curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore > .gitignore`  

We want Webpack to handle all the fancy stuff so let's set that up as well.  
`npm i webpack webpack-dev-server -D`  
`touch webpack.config.js`  

You can verify that everything is in order if your `package.json` dependencies (so far) look something like this:  

```
...
"devDependencies": {
  "webpack": "^2.2.1",
  "webpack-dev-server": "^2.4.1"
}
...
```

Now's the time to write our `webpack.config.js` as follows:  

```
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'app'),
  root: __dirname
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.root,
    filename: '[name].bundle.js'
  }
}
```  

In `package.json` add the script to run `webpack` and `webpack-dev-server`.

```
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
}
```

*What are we missing in our directory before we can build our app?*
<!-- missing an index.html file -->

Once you've added what's missing, kick off Webpack with `npm run build` so it can put itself together.

Notice that we should now `main.bundle.js` in our root directory (and an `index.html` file if you created one).

Run `npm start` and visit `localhost:8080` to make sure that everything is wired up and we see our `console.log` message.

Let's breeze through the rest of setup with a few more commands to wire up our app to work with Sass and React.  

`npm install --save-dev style-loader css-loader`  

Update your `webpack.config.js` file to fire up the loaders that we just installed, and to make life easier let's also add that bit about keeping track of what extensions we expect to use.  

Your `webpack.config.js` file should now match this:  

```
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'app'),
  root: __dirname
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.root,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
    ]
  },
  resolve: {
    extensions: ['', '.css']
  }
}
```
Add `require('./main')` at the top of `index.js`, rebuild and check out `localhost:8080`. You should see a slightly darker background.

### Prepare Webpack for React

Our first step in setting up our app to work with Webpack is to install some React specific dependencies. React uses JSX syntax to write HTML in our JavaScript files, which means we need Babel installed to transpile it.  

`npm i babel-loader babel-core --save-dev`  

Add the loader and extensions to `webpack.config.js`  
```
loaders: [
...
    { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' }
  ]
...
resolve: {
  extensions: ['','.css', '.js', '.json', '.jsx']
}
...
```

Finally let's set up a `.babelrc` file to help our app recognize and develop both ES6 and React syntax.  

First we need to install some babel presets before we can tell our config file to use them.

`npm i babel-preset-es2015 babel-preset-react --save-dev`

Then, in the root of your application, `touch .babelrc`, and in that file add the following:

```
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

## 2. Code Along From React

Time to write some code in React!  

From the slide deck, we ultimately want to create something like this:

![](/assets/images/lessons/react-in-theory/final-image.png)

As always, we need to install the necessary dependencies to add the React library to our application.

`npm i react react-dom --save`  

(Note we do NOT use `--save-dev` here because we don't only want access to these dependencies in development.)  

Let's start by creating the template for the "Like" button.

Replace what is currently in `index.js` with:  

```
require('./main')

const React = require('react')
const ReactDOM = require('react-dom')

class ActionButton extends React.Component {
  render () {
    return (
        <button className="ActionButton">
          <span>Submit</span>
        </button>
    )
  }
}

ReactDOM.render(<ActionButton  />, document.getElementById('application'))
```

Let's talk about what's happening here. First we require our stylesheet. The next two lines are calling in dependencies from the React libraries we just installed. The first gives us React, the second is a support library that indicates that we want to interact with the DOM vs a mobile phone or other media. (Other libraries include `react-native`, or `react-three` to name others.)

Then we create our first React component called `<ActionButton />`, in which we render a simple button in JSX. Feels like HTML, right? About time we stopped having to concatenate ridiculous strings of markup.  

Check out that last line. Here we are telling React-DOM to take our `<ActionButton />` component and stick it into the DOM element with an ID of `application`.  

What interesting things do you notice about this chunk of code, and what problems do you forsee happening (particularly with that last line)?

Run `npm start` and checkout `localhost:8080` to see the 'ReACTION'...mwahaha. Awesome! We've just written our first code in React.  

If you haven't already, download the React Dev Tools extension. Open up the console, click on the React tab, and you'll see we have our `<ActionButton />` component. Take a minute to dig in and see what comes up in our sidebar.  

```
Props
  Empty Object
```

### Props

Props are crucial attributes of React components. A `prop` is an immutable property that will be passed down into the component.  

Right now the text within our button is hardcoded to be 'Submit', let's change it to be a prop of the component.  

```
class ActionButton extends React.Component {
  render () {
    return (
      <button className="ActionButton">
        <span>{this.props.text}</span>
      </button>
    )
  }
}

ReactDOM.render(<ActionButton text="Submit"/>, document.getElementById('application'))  

```

Check out the console again. Select the `<ActionButton />`, what does `$r.props` give you?  

Note that the word `text` here is completely arbitrary. It can be whatever you want to refer to that value as in your component. I could have said `<ActionButton jellyfish="Submit"/>` and then within our JSX we would have to write `{this.props.jellyfish}`.  

### Build A MiniApp

Time to build out something more interesting!  

I want to replicate the app from our slideshow and create two buttons that add or subtract from a "Likes" counter.  

Ultimately, I want a wrapping element that I'll name LikesCounter that has my tally of likes and two buttons for increasing and decreasing said likes.

Lets reorganize our app a little bit to plan ahead for refactoring and write out our structure.

`mkdir app/components`  
`touch app/components/LikesCounter.jsx`  

Move what is in your `index.js` file into `LikesCounter.jsx`.  In `index.js` simply require the component.

`index.js`

```
require('./main')
require('./components/LikesCounter')
```

Now let's add a "LikesCounter" component.  
`LikesCounter.jsx`  

```
const React = require('react')
const ReactDOM = require('react-dom')

class LikesCounter extends React.Component {
  render () {
    return (
      <h3>Likes: 0</h3>
      <ActionButton text="Like! (+1)" />
      <ActionButton text="Dislike! (-1)" />
    )
  }
}

class ActionButton extends React.Component {
  render () {
    return (
      <button className="ActionButton">
        <span>{this.props.text}</span>
      </button>
    )
  }
}

ReactDOM.render(<LikesCounter />, document.getElementById('application'))

```  

Danger Will Robinson!  
[Click here if that reference means nothing to you](http://www.urbandictionary.com/define.php?term=Danger%2C%20Will%20Robinson!)  
[Also This](https://www.youtube.com/watch?v=OWwOJlOI1nU)  

What is happening in the browser?  

```
Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (10:6)
```

This is an **important note**. React components can only render one element, which simply means that you have to structure your JSX so that everything is contained within a single element. Lets refactor:

```
class LikesCounter extends React.Component {
  render () {
    return (
      <div className="LikesCounter">
        <h3>Likes: 0</h3>
        <div className="ActionButtons">
          <ActionButton text="Like! (+1)" />
          <ActionButton text="Dislike! (-1)" />
        </div>
      </div>
    )
  }
}
```

Notice how we have nested `<ActionButton />` components within our containing `<LikesCounter />` component. This is what makes React so convenient - by handling each element as its own bundle of information we can move pieces around without having to rewrite any of the markdown.  

Make sure to change the last line of code to reflect that we want `ReactDOM.render()` to render `<LikesCounter />` onto the DOM, which will in turn render the `<ActionButton />` guys.  

So now that we have our HTML page looking pretty fly, its time to add behavior to the buttons. Think about what we're trying to accomplish here:

When the page loads, we want the initial value of Likes to be 0. Then when we click "Like" We want to add 1 to the value of Likes, and remove 1 when we click "Dislike".


### Props vs State

Let's rephrase. On page load we want to set the *initial* state of our LikesCounter to have a count of 0, in other words maybe we want to "initialize" our component to have some values. Sounds like a constructor!

Along with sending the `props` through our custom HTML element, we can also define an initial `state` on our components that can be mutated based on user interaction and changes to our data.

Our state machine needs to get that information from somewhere, so let's start with setting an initial count through our `<LikesCounter />` as a `prop`.  

`ReactDOM.render(<LikesCounter initialCount={0} />, document.getElementById('application'))`  

Now we can set the initial state of the component in a constructor to reflect the initialCount of the HTML element, which we are setting to 0.  

Then we can use the information stored in our current `state` to tell our `<h3>` element what to display.  

Underneath the line `class LikesCounter extends React.Component`...  

```
constructor(props) {
  super(props);
  this.state = {count: props.initialCount};
}
```

At this point your `LikesCounter.jsx` file should look like this:  

```
const React = require('react')
const ReactDOM = require('react-dom')

class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render () {
    return (
      <div className="LikesCounter">
        <h3>Likes: 0</h3>
        <div className="ActionButtons">
          <ActionButton text="Like! (+1)" />
          <ActionButton text="Dislike! (-1)" />
        </div>
      </div>
    )
  }
}

class ActionButton extends React.Component {
  render () {
    return (
      <button className="ActionButton">
        <span>{this.props.text}</span>
      </button>
    )
  }
}

ReactDOM.render(<LikesCounter initialCount={0}/>, document.getElementById('application'))

```
Open up the console and look at what information is available within the `<LikesCounter />` component.  

Last step - hook up the buttons to change the state!  

In a perfect world, I want to write a JavaScript function that adds 1 to the number of likes in our `<h3>` tag every time I click on the `Like (+1)` button. Lets add that between our `constructor` and our final `render ()`  function.  

```
addToLikesCount (num) {
  this.setState({count: this.state.count + num});
}
```  

This is where the magic of React comes in. We are essentially throwing out the old information and replacing it with fresh, up-to-date information by re setting the state to be `{count: this.state.count + num}` .  

Finally, add an `onClick` event-listener into our `ActionButton` class, and then pass that information to the `<ActionButton />` component to tell it what to do within our `<LikesCounter />` .  

```
class ActionButton extends React.Component {
  render () {
    return (
      <button className="ActionButton" onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}
```  

Note that within our `onClick` action, we get to name our "prop" whatever we want. A common function name is `handleClick`. This will in turn go tell our component to find the prop `handleClick` and run the function we set as its value.

```
<ActionButton text="Like! (+1)" handleClick={this.addToLikesCount.bind(this, 1)} />
<ActionButton text="Dislike! (-1)" handleClick={this.addToLikesCount.bind(this, -1)} />
```

Think about how the phrase "Events Up, Data Down" applies to React.

Switch over to your browser and open your React dev tools. What happens when you click a button?

How can we display the updated number of likes in our HTML?  


### Refactoring

One of many cool parts about React is the ability to break up the pieces of your app into tiny modular components that are scalable.  

Right now we have one giant file, inaccurately named "LikesCounter", and a folder called `components` with one file in it.

Let's break our file into it's individual pieces. This will help with refactoring, maintainability, and creating a bigger app down the road.  

`touch app/components/App.jsx app/components/ActionButton.jsx`  

Hint: Each of these files will house a single component of the same name!

See if you can refactor so that your index.js file looks like this:

`index.js`  

```
require('./main')
require('./components/App')
```


##### Resources/Additional Learning Materials
[Developing with Webpack](http://survivejs.com/webpack/developing-with-webpack/)

[Render vs Return](https://facebook.github.io/react/docs/component-specs.html)

[React Classes vs extend Component](https://toddmotto.com/react-create-class-versus-component/)

[9 Things Ever React Dev Should Know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)

[React Tutorial by Facebook](https://facebook.github.io/react/docs/tutorial.html)
