---
title: "React: Our First IdeaBox"
length: 3 hours
tags: react, ideabox
module: 3
---

## Learning Goals

* Create class components
* Create function components
* Use state and props to manage application data
* Create a controlled form
* Use JSX

## Before you get started...
You will complete this lesson on your own. You have lots of time in the calendar over the next two days to work through this lesson. Read each section carefully and completely. Moving quickly through this lesson is **not** the goal. You should move through the lesson at a pace that allows you to take solid notes and fully understand the code you are writing. We will provide lots of code blocks for you, which means you *could* simply copy and paste the code and call it a day. Doing this will only hurt you in the end, as you'll be missing out on a lot, a lot, a lot of learning.    

On Wednesday, your instructors will lead a review session where we will cover the major themes and key points from this lesson. As you are working through it, please write down any questions that pop up for you. We will give lots of time for y'all to ask these questions on Wednesday.  

Can't wait until Wednesday? Come to office hours! We will be hosting office hours on Tuesday to help you move past any major blockers. Show up any time to ask your questions! If a major blocker pops up outside of office hours, post your question in the cohort slack channel.  

Your goal should be to complete this entire lesson by Wednesday morning. Please keep your instructors in the loop if you find that you're not on track to finish on time.

## What You're Building
Here is a peak at what you're going to build during this lesson:  

![ideabox preview](https://media.giphy.com/media/MHPLTw4hmBOpaSteSc/giphy.gif)

<section class="call-to-action">
### Stop and Think

How would you build this application using vanilla JS? What functions would need to exist? What classes might you create?
</section>

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

<section class="call-to-action">
### Explore

Take a few minutes and look around the boilerplate. Hint: start at the `src/` folder!

What happens if you:

* Change some of the HTML you see in the `App.js` file?
* Change some of the CSS you see in the `App.css` file?

You'll also notice an `index.js` file. What is going on in there?

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
</section>

## Modular File Structure

We've talked about React being modular many times, but what does it look like to have our code and project files be modular?

One small example is to keep a modular file structure. This means that any and all files related to a particular component live in the same directory! This is pretty common in React projects, so we recommend setting up your file strucure like this each time you build a new project. Here's an example :)

src 📁
- components 📁
    - App 📁
        - App.js
        - App.css
        - App.test.js
    - Form 📁
        - Form.js
        - Form.css
        - Form.test.js
    - Ideas 📁
        - Ideas.js
        - Ideas.css
        - Ideas.test.js
    - Etc


## Ideabox

Let's get rid of all the boilerplate inside the `App.js` file. Yep. Just ERASE THAT CODE!

You'll notice that as soon as we save our changes, the browser re-renders. Look into the terminal, and you'll see another build kick off. This is because `create-react-app` gives us hot-reloading. Any time we make a change, the browser will update to show our changes.

Look at the console in our dev tools now that we've deleted our `App.js` code, and you'll see an error that reads:

"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."

Back in our `index.js` file we're trying to render a React component: App. However, we're no longer exporting a valid React component! The error is trying to be helpful to let us know what's going on.

Let's start building out our App component.

### Planning our app

Let's figure out what should be a component in our app.

![IdeaBox wireframe](https://i.imgur.com/2bSfaXK.jpg)

- We have an App component. That should probably hold onto our list of ideas.  

- We need a Form component so we can create new ideas. The Form component will have to be able to add new ideas to App's list of ideas.  

- We need a Card component to display our ideas.  

- We can create an Ideas component to hold all of our Cards.  

![IdeaBox wireframe with component boxes](https://i.imgur.com/xWggABx.jpg)

### App.js

Because we want App to hold onto our list of ideas, let's think about how we're going to store that information.

In our first React lesson, we learned about _state_. In order to use component state, we need our component to be a class.

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

When we save that, our error now says "TypeError: instance.render is not a function". Why are we getting this error?

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

<section class="note">
### Understanding JSX

It looks like our `render` method is returning some HTML! Very easy to read, right?  

What we're actually writing here is known as JSX. It's an abstraction that makes React easier to write!  

JSX is "JavaScript and XML" - it's a handy mashup language that allows us to write HTML with a bit of JavaScript injected in. You can read more on it [here](https://reactjs.org/docs/introducing-jsx.html) (and a bit more in depth [here](https://reactjs.org/docs/jsx-in-depth.html)). But in the meantime, we'll see how JSX makes our lives easier throughout this lesson!
</section>

Okay. Now try to add a paragraph tag. What happened?


You should receive this error:
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

If we think about this logically, it makes sense! The method `render` is just a function - a regular old class method. And how many things can a function return at once? Just one! So in order to return multiple JSX elements, we have to wrap them in a single JSX element!

Since this is our App component, let's wrap everything in a `<main>` tag!

<section class="note">
### NOTE  

If you're just looking for an unflavored container for your elements (aka they are not semantically related to one another, and the best element to use would be a `<div>`), then instead, use a `<React.Fragment>`! You can read more about Fragments [here](https://reactjs.org/docs/fragments.html).
</section>

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
      <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
      </main>
    )
  }
}

export default App;
```

You'll notice that instead of "`class`", we're using a "`className`" attribute on our `<main>` element. Why do you think this is?

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

<section class="call-to-action">
### Reflect

* What is the keyword `this` doing here?
* What is "state"?
</section>

For our application, we want to create a list (aka an array) of ideas.

Let's start out with a couple of default ideas, just so we can have something to look at when we begin building out the rest of our components.

```js
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }
```

Open up your React Dev Tools (open your dev tools, then go to the Components tab). You can see that App now has state:

![App component state](https://i.imgur.com/hi2ICjX.png)

Neat!

**Consider the following...**

Okay. Let's pause for a second. `App.js` is a class-based component, rather than a function-based component, because we want it to have its own state.

### State

**State** holds data that represents the actual state of our application. State can be changed and mutated through user interactions.

One of the more confusing things about React is when to make a component a class instead of a function.

(React Hooks is a new feature that was released at the end of 2018 and allows function-based components to access and manipulate state - we'll learn more about this in a future lesson, but for now, it's important to understand the uses of and distinctions between class-based and function-based components.)

A basic rule of thumb for determining if a component should be function-based or class-based is this:

**If a component needs to keep track of and display data, and if that component itself will update or change the data it's displaying, we need to use a class-based component.**

In general, function-based components are lighter than class-based components. You'll find that most of your applications will be made up of simple function-based components, getting their data from a few heavier class-based components.


## Ideas.js

Next, let's focus on getting our two ideas to render!

We already said that we want to have a container for all of our idea Cards. So let's create that component! In your terminal, touch two new files: `$ touch src/Ideas.js src/Ideas.css`.

<section class="note">
### Note

You may have noticed that our App component was capitalized. And now our Ideas component is capitalized, too. Why do you think this is? What did you learn about the naming conventions for JS classes in Mod 2?  

When an element starts with a lowercase letter, it refers to (and will be treated as) a built-in component like `<div>` or `<span>`, which can lead to silent errors or unexpected side-effects. It's also import to note that capitalizing class names makes for good developer empathy. Now, at a glance, a dev knows they are dealing with a class.
</section>

Will this Ideas component need to have state? What do you think?

Since the Ideas component will just be rendering Card components, it will not need to have its own state, and can therefore be a function-based component! Exciting.

As always, we will need to import React, but this time, we will not need to import a Component. For now, let's create a function called Ideas that returns an h2 that reads "Ideas go here!"

```js
// Ideas.js

import React from 'react';
import './Ideas.css';

const Ideas = () => {
  return (
    <h2>Ideas go here!</h2>
  )
}

export default Ideas;
```

Then, back in our `App.js`, we can import our shiny new Ideas component and add it to our render!

```js
// App.js

import React, { Component } from 'react';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Ideas />
      </main>
    )
  }
}

export default App;
```

When we look at our browser, we should see our h2! That's nice and all, but not very useful.

We have to pass our ideas array from the App component to our Ideas component. We accomplish that by using **props**.

### Props

Props (along with state) are the heart and soul, the meat and potatoes, of React. They are what allow us to pass information between components. Let's take a look at how that might work.

We've mentioned that components are reusable pieces of code, that allow us to create unique instances of certain UI elements. We can do this by passing props to each of our components. Think about how you create new function and passing arguments into it.

Props allow us to pass information from parent components to child components. We can pass strings, numbers, booleans, arrays, objects, functions, pretty much any piece of data we want access to in our child component. We can name them whatever we'd like, as long as we're consistent and semantic with the names that we choose.

When we pass props down to a child component, it comes through as a simple JavaScript object with key value pairs.

Let's start with an example, just to keep things simple. For now, since our Ideas component just contains an h2, let's make that h2 say something different than "Ideas go here!"

In our App component, let's add something to our `render` method.

```js
// App.js
  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Ideas name='Travis' />
      </main>
    )
  }
```

Now, let's adjust our Ideas component.

```js
// Ideas.js

const Ideas = (props) => {

  return (
    <h2>Hello, {props.name}!</h2>
  )
}
```

What are those curly brackets doing? In JSX, whenever we're writing something that is JavaScript (aka "not HTML"), we have to wrap it in curly brackets. In this case, "name" acts like a variable. It's not a string that reads "name" - it's a placeholder that represents the value of the property (in this case, "Travis")! Because it's a variable, we have to surround it in curly brackets to tell the JSX to treat the contents like JavaScript.

In your browser, you should see "Hello, Travis!" In `App.js`, add another Ideas component to the `render` method, but pass in a different name. What do you see in the browser? Try creating new props to use!

Okay, so just WHAT exactly is going on here?

Similar to how **state** is an object that contains key-value pairs, **props** is the name of an object that contains key-value pairs. From our above example, the key is "name", and the value is "Travis". So, in our Ideas component, we can access the value by writing `props.name` (which gives us a string of "Travis"). This is the same dot notation we learned in Mods 1 and 2 to access data stored in objects.

If, in the `render` method of our App component, we called the property "potato" instead of "name", we would have to access it by (inside the Ideas component) writing `props.potato`.

We can even destructure the props object, because it's just a regular object!

```js
// Ideas.js

const Ideas = (props) => {
  const { name } = props;

  return (
    <h2>Hello, {name}!</h2>
  )
}
```

In _this_ example, destructuring is a bit over-engineered, yes. However, we'll see in our Card component that destructuring will save us from having to type `props.` over and over again.

And here's YET ANOTHER super-fancy way to destructure:

```js
// Ideas.js

function Ideas({name}){
  return (
    <h2>Hello, {name}!</h2>
  )
}
```

We can destructure props ON THE WAY IN. Whoa! It's accomplishing the same thing as destructuring on a separate line, like in the previous example.


<section class="note">
### State vs. Props  

Understanding the difference between props and state can be tricky. Read through the top three answers on this [stackoverflow question](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react), and go through any links or resources provided in the answers. Just because one answer has the most upvotes, doesn't mean it's going to be the one that makes everything click for you. Take your time reading through the explanations here.
</section>

### Mapping over the ideas array

All right. We don't actually want to render an h2 in our Ideas component. We want to render some Cards with some gosh dang IDEAS!

Let's create a Card component to use. Will it be function or class based?

Create your files: `$ touch src/Card.js src/Card.css`

```js
// Card.js

import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <h3>Card!</h3>
    </div>
  )
}

export default Card;
```

Then, in your Ideas component, let's just try to get these hooked up properly.

```js
// Ideas.js

import React from 'react';
import Card from './Card';
import './Ideas.css';

const Ideas = (props) => {
  const { name } = props;

  return (
    <div className='ideas-container'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas;
```

And let's throw some CSS in just to make our cards look like not a hot garbage fire:

```css
/* Ideas.css */

.ideas-container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

And in your Card css file:

```css
/* Card.css */

.card {
  box-sizing: border-box;
  border: 3px solid black;
  padding: 10px;
}
```

Okay! Hopefully your app looks like this:

![screenshot of IdeaBox so far](https://i.imgur.com/TiPPUMq.png)

All right, friends. Let's get to passing some PROPS! Let's go all the way back to our App component and pass our list of ideas to the Ideas container component, so that it can then create Card components out of each individual idea.

```js
// App.js

render() {
  return(
    <main className='App'>
      <h1>IdeaBox</h1>
      <Ideas ideas={this.state.ideas} />
    </main>
  )
}
```

Let's unpack what we're doing here. We created a new prop called "ideas", and the value we're passing in is our array of ideas which lives in the App component's state. Remember, `this.state.ideas` is JavaScript, not HTML, so we need to wrap it in curly brackets!

Go look at the Ideas component in your React dev tools in the browser. You should see that the props contain a key of "ideas" with a value of the array of ideas from App state!

We now want to iterate through our array and create a Card component, passing it the information it needs to display the proper information!

```js
// Ideas.js

function Ideas({ideas}){

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}
```

Okay - we've made a few changes! You'll notice that we're now destructuring the props _as we pass them in_! W H A T. I know. Then, we're mapping over the ideas array and creating a new array of Card components, each with props of `title` and `name`. The `key` property is something that React requires when using `map()` to create elements. In this case, I'm just using the unique id that each idea has.

If you look in your React dev tools, you'll see that both Card components now has props of "title" and "description"! Go ahead a change Card so we display that information.

```js
// Card.js

const Card = ({ title, description, id }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>🗑</button>
    </div>
  )
}
```

I created a button to delete the Card, but we'll get to that later. For now, let's celebrate, because we just got this sucker to display some ideas!!

## Conditional Rendering

Before me move on, lets tighten up the UX here a bit.

<section class="call-to-action">
### Explore  

* Try making App.state.ideas an empty array.
* What happens? Why?
* What would make for a better user experience?
</section>

To handle the logic for this, we can use **Conditional Rendering**.

Conditional rendering is exactly what it sounds like: telling a component to render something based on a condition. We put some JS into our component's render function, and tell it what to put on the DOM based on some set of conditions. Let's add some here!

Currently our App looks like this:

```javascript
// App.js

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  render () {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Ideas ideas={this.state.ideas} />
      </main>
    )
  }
}


```

<section class="answer">
### In plain JS, what could this conditional look like?
```javascript
if (! this.state.ideas.length) {
  // render an h2 saying to add some ideas
}
```
</section>

We want this logic to live inside of our `render()` method, so we can use curly braces to inject JS into our JSX. However, we need whatever is inside of our curlies to _evaluate_ to the HTML we want rendered, so we'll use some syntax like this:

```js
// App.js

render() {
 return ( 
  <main className="App">
    <h1>IdeaBox</h1>
    {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
    <Ideas ideas={this.state.ideas} />
  </main>
 )
}

```

<section class="note">
### If this syntax feels weird, take a look at the [logical && operator's docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical).

What does the operator return?
</section>

The code above says that, if the expression on the left side of the `&&` is true, return the expression on the right side. So if there are no ideas in state, return our h2!

## Form.js

Let's move on to our Form component. We're going to create what is known as a controlled form.

Create the Form component files: `$ touch src/Form.js src/Form.css`

```css
/* Form.css */

form {
  margin: auto;
}

input, button {
  margin: 5px;
  width: 30%;
  border: 2px solid black;
  font-size: 18px;
}

```

Our Form will start like this:

```js
// Form.js

import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
```

But we need to write some functions. Let's start by making sure that when we type into our inputs, they update the Form's state.

```js
// Form.js

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
```

What is this `setState` business? It's a method that comes from the parent Component class. It does a few things: it takes in an object (with a key that matches a key in state, and the updated value), it updates state with the new information, and it triggers a re-render (it literally runs the `render` method again) to keep our displayed data up to date!

Take a look at your React dev tools - is the state updating as you type into the inputs?

When we click the submit button, what do we want to happen? We want to create an object out of the new idea and add it to the list of ideas that App is holding onto in state. How do we access App's state from inside our Form component?

### Passing bound methods

In App, we're going to have to create a method that updates App's state:

```js
// App.js

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} />
      </main>
    )
  }
```

You'll notice that we're using an arrow function to create this class method. Why do you think that is? We know that - unlike keyword `function` functions - the context of `this` is set when an arrow function is declared, not when it is invoked. This means that, no matter where we call `addIdea`, no matter what component invokes it, the `this` from `this.setState` will refer to the App component.

This is good, because we're passing it down as a prop to the Form component!

Before we had ES6 arrow functions at our disposal, we had to manually bind our functions in the constructor, like this:

```js
// App.js

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }

    this.addIdea = this.addIdea.bind(this);
  }

  addIdea(newIdea) {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} />
      </main>
    )
  }
}
```

This took place in the constructor for a few reasons: you wouldn't have to remember to bind it every place you wanted to pass it in the `render`, and it would only be declared once, when the `constructor` method was called. (Conversely, `render` is called every time the component state updates; there's no need to have a bunch of identical bound `addIdea`s floating around in memory!)

You can see that using the arrow function is much shorter syntactically. However, it's good to know the REASON behind using it, especially since some legacy codebases will still be using manually bound class methods.

Now, in the Form component, let's make use of the `addIdea` method we passed as a prop. In class-based components, we reference props with `this.props`. If you remember from earlier, function-based components merely use the keyword `props`.

```js
// Form.js

  submitIdea = event => {
    event.preventDefault(); // prevents the page from refreshing when the form submits
    const newIdea = {
      id: Date.now(),
      ...this.state // spreading in the title and description
    }
    this.props.addIdea(newIdea); // using the addIdea method from App that we passed as a prop to Form
    this.clearInputs(); // invoking the method I wrote below to reset the inputs
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitIdea(event)}>SUBMIT</button> // adding the event listener to the button
      </form>
    )
  }
}
```

### Deleting a Card

Now that you know how to use a method and props to allow a different component to update App's state, see if you can get each Card's delete button to work.

First, write the App method to delete an idea from state and pass it to the Ideas component:

```js
// App.js

import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);

    this.setState({ ideas: filteredIdeas });
  }

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App;
```

Second, pass the `deleteIdea` function to each Card that the Ideas component creates:

```js
import './Ideas.css';
import Card from "./Card"
function Ideas({ideas, deleteIdea}){

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key = {idea.id}
        deleteIdea = {deleteIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;
```

Third, create an event listener on the Card button:

```js
import React from 'react';
import './Card.css';

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card;
```

Voila! You've created a React application!

## Review

Take a few minutes to journal:

* What "aha" moments did you have?
* Which concepts are the fuzziest for you right now?
* Which concepts are the clearest for you right now?
* What do you know about class-based components?
* What do you know about function-based components?
* What do you know about state?
* What do you know about passing props?
* What questions do you have? (bring these to class on Wednesday!)
