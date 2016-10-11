---
title: React In Theory
length: 180 min
tags: React, JavaScript, Webpack
---

### Goals of This Lesson
  - Build a basic web app from scratch using React

## There Are 2 Starting points to this lesson:
  [Repository](https://github.com/martensonbj/react-in-theory/tree/basic-config)
  * If you want to build your app from scratch with some fancy web plugins and sass, start here and make sure you're in the branch `from-scratch`.
  * If you want to jump in with everything put together but the React configuration and implementation, checkout the branch `from-react`

# 1. Code Along From Scratch

## Webpack and Application Setup

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
  "webpack": "^1.13.2",
  "webpack-dev-server": "^1.15.0"
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

Once you've added what's missing, kick off Webpack with `run build` so it can do put itself together.

`npm run build`  

Notice that we should now `main.bundle.js` in our root directory (and and `index.html` file if you created one).

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

From the slide deck, we ultiately want to create something like this:

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

Ultimately I want a wrapping element that I'll name LikesCounter that has my tally of likes and two buttons for increasing and decreasing said likes.

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
