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


## Code Along - create-react-app

Time to write some code in React!

From the slide deck, we ultimately want to create something like this:

![](/assets/images/lessons/react-in-theory/final-image.png)

### Install create-react-app

`npm install -g create-react-app`

`create-react-app awesome-counter`

`cd awesome-counter`

`npm start`

Now open your browser and enter the url

`http://localhost:3000/`

Great we have our React dev environment set up!

### Explore the app

open a new tab on your terminal and open up your folder structure `atom .`

Open `./src/App.js`

It should look like the following. Lets walk through this...
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```
First we import React and specifically the Component class from React. We can also import images, svg files and css. Then we define our main App component / module.

This is great but how does our App component get added to our view?

Open your `./index.js` file.

ReactDOM is React's object for interacting with the DOM and you can see we create an instance of our `<App />` and add it to our a root element which can be found in our `./index.html` page.

### Time to Make a New Component!

Let's start by creating the template for the Like / Dislike button.

Above our App class declaration lets create an ActionButton class

```
class ActionButton extends Component {
  render() {
    return (
      <button className="actionButton">
        Submit
      </button>
    )
  }
}

...

class App extends Component {
  ...
}
```

Let's add it to our app. Replace everything in
```
<div className="App">
  ...
</div>
```
with
```
<ActionButton />
```

Great we have our button!

If you haven't already, download the React Dev Tools extension. Open up the console, click on the React tab, Expand the `<App>` component and you'll see we have our `<ActionButton />` component. Take a minute to dig in and see what comes up in our sidebar.

```
Props
  Empty Object
```

### Props

Props are crucial attributes of React components. A `prop` is an immutable property that will be passed down into the component.

Right now the text within our button is hardcoded to be 'Submit', let's change it to be a prop of the component.

```
class ActionButton extends Component {
  render () {
    return (
      <button className="actionButton">
        {this.props.text}
      </button>
    )
  }
}
```
Now lets pass our text into our instantiation of our ActionButton

`<ActionButton text="Submit the Action"/>`

Check out your devtools again. Select the `<ActionButton />`, what do you see under props?

Note that the word `text` here is completely arbitrary. It can be whatever you want to refer to that value as in your component. I could have said `<ActionButton jellyfish="Submit"/>` and then within our JSX we would have to write `{this.props.jellyfish}`.

### Refactor Time (3-5 minutes)

I want you to move your ActionButton into a separate file called ActionButton.jsx.

### Action Time

Currently our button does not do anything. Lets add an action. Add an `onClick` property to your button element

```
<button
    className="actionButton"
    onClick={() => alert(this.props.text)}>

  {this.props.text}
</button>
```

Cool, now lets make our button a little more customizable by passing in our action

First modify your ActionButton's render function
```
<button
    className="actionButton"
    onClick={this.props.onClick}>

  {this.props.text}
</button>
```
Next, inside your App.js file pass in a function to your instantiated ActionButton
```
<ActionButton
    text="Submit the Action"
    onClick={this.handleClick}/>
```
Finally, add a handle click function to your App.js component
```
class App extends Component {
  handleClick() {
    alert('you clicked me!')
  }
  render() {...}
}
```

### Build out our View (15-20 minutes)
I want you to create a new Component called LikesCounter. This Component should have two Action Buttons one for Like and one for Dislike. You will also need an element to hold your number of "Likes".

When you click Like or Dislike I want you to alert which one was clicked

After you create your LikesCounter, replace the ActionButton in your App with a LikesCounter.

Note: Watch out for the following error.

```
Error in ./src/LikesCounter.jsx
Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag
```

This is an **important note**. React components can only render one element, which simply means that you have to structure your JSX so that everything is contained within a single element.

### Props vs State
So now that we have our HTML page looking pretty fly, its time to add behavior to the buttons. Think about what we're trying to accomplish here:

When the page loads, we want the initial value of Likes to be 0. Then when we click "Like" We want to add 1 to the value of Likes, and remove 1 when we click "Dislike".

Let's rephrase. On page load we want to set the *initial* state of our LikesCounter to have a count of 0, in other words we want to "initialize" our component to have some values. Sounds like a constructor!

Along with sending the `props` through our custom HTML element, we can also define an initial `state` on our components that can be mutated based on user interaction and changes to our data.

Our state machine needs to get that information from somewhere, so let's start with passing in an initial count property to our `<LikesCounter />` instance

`<LikesCounter initialCount="0" />`

Now we can add a constructor to our LikesCounter component. In our constructor we will set the initial state of our component.

Underneath the line `class LikesCounter extends Component`

Add your constructor function
```
constructor(props) {
  super(props);
  this.state = {
    likes: props.initialCount
  };
}
```

Now we can replace our statically coded `0` in our LikesCounter render function with our count stored in `state`

```
render() {
  return(
    <div>Likes: {this.state.likes}</div>
    ...
  )
}
```

At this point your `LikesCounter.jsx` file should look something like this:

```
import React, { Component } from 'react';
import ActionButton from './ActionButton.jsx'

class LikesCounter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      likes: props.initialCount
    };
  }

  handleDislikeClick () {
    alert('Dislike');
  }

  handleLikeClick () {
    alert('Like');
  }

  render () {
    return (
      <div>
        <div>Likes: {this.state.likes}</div>
        <ActionButton
            text="Like +1"
            onClick={() => this.handleLikeClick()} />

        <ActionButton
            text="Dislike -1"
            onClick={() => this.handleDislikeClick()} />

      </div>
    )
  }
}

export default LikesCounter
```

Open up the console and look at what information is available within the `<LikesCounter />` component.

Last step - hook up the buttons to change the state!
<!--
In a perfect world, I want to write a JavaScript function that adds 1 to the number of likes in our `<h3>` tag every time I click on the `Like (+1)` button. -->

Lets modify our two our Like and Dislike functions to change our state. To modify our state we pass in a new state object to `this.setState(newState)`

```
handleLikeClick () {
  this.setState({
    count: this.state.count + 1
  });
}

handleDislikeClick () {
  this.setState({
    count: this.state.count - 1
  });
}
```

This is where the magic of React comes in. We are essentially throwing out the old information and replacing it with fresh, up-to-date information.

Think about how the phrase "Events Up, Data Down" applies to React.

Switch over to your browser and open your React dev tools. What happens when you click a button?

<!-- How can we display the updated number of likes in our HTML? -->


### Refactor

Our handleDislikeClick and handleLikeClick look very similar. Lets create a new function `modifyLikes` that takes a modification parameter and updates our states likes.

e.g.
```
  handleLikeClick () {
    modifyLikes(1);
  }

  handleDislikeClick () {
    modifyLikes(-1);    
  }
```


##### Resources/Additional Learning Materials
[Developing with Webpack](http://survivejs.com/webpack/developing-with-webpack/)

[Render vs Return](https://facebook.github.io/react/docs/component-specs.html)

[React Classes vs extend Component](https://toddmotto.com/react-create-class-versus-component/)

[9 Things Ever React Dev Should Know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)

[React Tutorial by Facebook](https://facebook.github.io/react/docs/tutorial.html)
