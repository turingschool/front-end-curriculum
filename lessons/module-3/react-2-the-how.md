---
title: "React: Our First IdeaBox"
length: 3 hours
tags: react, ideabox
module: 3
---

## Learning Goals


* Create functional components
* Use state and props to manage application data
* Use Hooks with functional components
* Create a controlled form
* Use JSX

## Before you get started...
You will complete this lesson on your own. Read each section carefully and completely. Moving quickly through this lesson is **not** the goal. You should move through the lesson at a pace that allows you to take solid notes and fully understand the code you are writing. We will provide lots of code blocks for you.  Resist the temptation to copy and paste the code from those examples. Doing this will only hurt you in the end, as you'll be missing out on a lot, a lot, a lot of learning.    

On Wednesday, your instructors will lead a review session where we will cover the major themes and key points from this lesson. As you are working through it, please write down any questions that pop up for you. We will give lots of time for y'all to ask these questions on Wednesday.  If a blocker pops up outside of office hours, post your question in the cohort's questions slack channel.  Work with your classmates to try to figure it out.

Your goal should be to complete this entire lesson by Wednesday morning. Please keep your instructors in the loop if you find that you're not on track to finish on time.

## What You're Building
Here is a peak at what you're going to build during this lesson:  

![ideabox preview](https://media.giphy.com/media/MHPLTw4hmBOpaSteSc/giphy.gif)

<section class="call-to-action">
### Stop and Think

How would you build this application using vanilla JS? What functions would need to exist?
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
Creating a new React app in /Users/yourname/mod3/ideabox.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

⸨  ░░░░░░░░░░░░░░░░⸩ ⠸ fetchMetadata: sill resolveWithNewModule pify@4.0.1 chec...
```

When the script is finished running, you will see the following message in your terminal:

```bash
Success! Created ideabox at /Users/yourname/Turing/TA/MOD3/m3curriculum/ideabox
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

```jsx
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

One small example is to keep a modular file structure. This means that any and all files related to a particular component live in the same directory! This is pretty common in React projects, so we recommend setting up your file structure like this each time you build a new project. Here's an example :)

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

![IdeaBox wireframe](../../../assets/images/lessons/IdeaBox/IdeaBox-Browser.png)

- We have an App component. That should probably hold onto our list of ideas.  

- We need a Form component so we can create new ideas. The Form component will have to be able to add new ideas to App's list of ideas.  

- We need a Card component to display our ideas.  

- We can create an Ideas component to hold all of our Cards.  

![IdeaBox wireframe with component boxes](../../../assets/images/lessons/IdeaBox/IdeaBox-wireframe.png)

### App.js

Because we want App to hold onto our list of ideas, let's think about how we're going to store that information.

In our first React lesson, we learned about _state_. In order to use component state, we need to import useState hook from React.

So: let's import useState hook from React, and create our App component!

```jsx
import { useState } from 'react';

function App() {
 
 // Logic and other needed functions will go here

 return (
  //Your JSX code goes here
 )
}

export default App;
```

The above code is defining the App functional component in React. 

Any additional JSX code or logic can be added to the component as needed, and the final JSX code is returned by the component's return statement just like a pure function.
<section class="note">
  It's important to note that this code is using functional components, rather than class components and OOP. This allows us to manage our component in a more concise and streamlined way, without relying on class inheritance and traditional OOP principles.
</section>
Let's keep writing our App component!

```jsx
import  { useState } from 'react';

function App() {
    return (
      <h1>IdeaBox</h1>
    )
}

export default App;
```

Save this code and go check your browser. What do you see?

Let's take a minute and examine that return statement.

<section class="note">
### Understanding JSX

It looks like we are returning some HTML! Very easy to read, right?  

What we're actually writing here is known as JSX. It's an abstraction that makes React easier to write!  

JSX is "JavaScript and XML" - it's a handy mashup language that allows us to write HTML with a bit of JavaScript injected in. You can read more on it [here](https://reactjs.org/docs/introducing-jsx.html) (and a bit more in depth [here](https://react.dev/learn/writing-markup-with-jsx)). But in the meantime, we'll see how JSX makes our lives easier throughout this lesson!
</section>

Okay. Now try to add a paragraph tag. What happened?


You should receive this error:
```
Failed to compile.

./src/App.js
  Line 12:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

  12 |     return(
  13 |       <h1>IdeaBox</h1>
> 14 |       <p>Hi!</p>
     |       ^
  16 |     )
  17 |   
  18 |
```

Let's figure out what this error is saying. "Adjacent JSX elements must be wrapped in an enclosing tag."

If we think about this logically, it makes sense! Our component is just a function. And how many things can a function return at once? Just one! So in order to return multiple JSX elements, we have to wrap them in a single JSX element!

Since this is our App component, let's wrap everything in a `<main>` tag!

<section class="note">
### NOTE  

If you're just looking for an unflavored container for your elements (aka they are not semantically related to one another, and the best element to use would be a `<div>`), then instead, use a `<React.Fragment>`! You can read more about Fragments [here](https://react.dev/reference/react/Fragment).
</section>

```jsx
import  { useState } from 'react';
import './App.css';

function App() {
  
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
      </main>
    )
  
}

export default App;
```

You'll notice that instead of "`class`", we're using a "`className`" attribute on our `<main>` element. Why do you think this is?

### App.js state

Okay. Let's come back to our App component and create state.

```jsx
import { useState } from 'react'
import './App.css';

function App(){
  const [ideas, setIdeas] = useState([]);

  return (
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
      </main>
  )
}
```

<section class="call-to-action">
### Reflect

* What is "useState"?
* What is the setIdeas?

</section>

For our application, we want to create a list (aka an array) of ideas.

Let's start out with a couple of default ideas, just so we can have something to look at when we begin building out the rest of our components.

```jsx

import  { useState } from 'react';
import './App.css';

function App(){
  const dummyIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas)

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
    </main>
  )
}

export default App;

  
```

Open up your React Dev Tools (open your dev tools, then go to the Components tab). You can see that App now has state:

![App component state](../../../assets/images/lessons/IdeaBox/React-dev-tool.png)

Neat!

**Consider the following...**

Okay. Let's pause for a second. `App.js` is a functional component, and we used useState to setup a state for our component.

### State

**State** holds data that represents the actual state of our application. State can be changed and mutated through user interactions.

React Hooks is a feature that was introduced at the end of 2018. It allows functional components to access and manipulate state. In future lessons, we'll learn about other types of components as well. However, for now, it's essential to understand functional components and how React Hooks enable them to manage state in a more concise and streamlined way.
<!-- This is where I have stopped March 30th -->
<!-- -------------------------- -->
## Ideas.js

Next, let's focus on getting our two ideas to render!

We already said that we want to have a container for all of our idea Cards. So let's create that component! In your terminal, touch two new files: `$ touch src/Ideas.js src/Ideas.css`.

<section class="note">
### Note

You may have noticed that our App component was capitalized. And now our Ideas component is capitalized, too.In React, component names should be written in PascalCase, which is a naming convention where the first letter of each word in the name is capitalized, and there are no underscores or hyphens between words.By following this naming convention, it becomes clear to other developers that a particular element in the codebase is a React component.   

When an element starts with a lowercase letter, it refers to (and will be treated as) a built-in component like `<div>` or `<span>`, which can lead to silent errors or unexpected side-effects. It's also important to note that capitalizing component names makes for good developer empathy, because they can look at the file tree and see at a glance which files are are components and which are not. 
</section>

Will this Ideas component need to have state? What do you think?

Since the Ideas component will just be rendering Card components, it will not need to have its own state.

let's create a function called Ideas that returns an h2 that reads "Ideas go here!"

```jsx
// Ideas.js

import './Ideas.css';

function Ideas(){
  return (
    <h2>Ideas go here!</h2>
  )
}

export default Ideas;
```

Then, back in our `App.js`, we can import our shiny new Ideas component and add it to our render!

```jsx
// App.js

import './App.css';
import Ideas from './Ideas';
import { useState } from 'react'

function App(){
  const dummyIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas)

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Ideas/>
    </main>
  )
}

export default App;

```

When we look at our browser, we should see our h2! That's nice and all, but not very useful.

We have to pass our ideas array from the App component to our Ideas component. We accomplish that by using **props**.

### Props

Props (along with state) are the heart and soul, the meat and potatoes, of React. They are what allow us to pass information between components. Let's take a look at how that might work.

We've mentioned that components are reusable pieces of code, that allow us to create unique instances of certain UI elements. We can do this by passing props to each of our components. Think about how you create a new function and pass arguments into it.

Props allow us to pass information from parent components to child components. We can pass strings, numbers, booleans, arrays, objects, functions, pretty much any piece of data we want access to in our child component. We can name them whatever we'd like, as long as we're consistent and semantic with the names that we choose.

When we pass props down to a child component, it comes through as a simple JavaScript object with key value pairs.

Let's start with an example, just to keep things simple. For now, since our Ideas component just contains an h2, let's make that h2 say something different than "Ideas go here!"

In our App component, let's add something to our `render` method.

```jsx
// App.js
// ...
  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Ideas name='Travis'/>
    </main>
  )

```

Now, let's adjust our Ideas component.

```jsx
// Ideas.js

function Ideas(props){

  return (
    <h2>Hello, {props.name}!</h2>
  )
}
```

What are those curly brackets doing? In JSX, whenever we're writing something that is JavaScript (aka "not HTML"), we have to wrap it in curly brackets. In this case, "name" acts like a variable. It's not a string that reads "name" - it's a placeholder that represents the value of the property (in this case, "Travis")! Because it's a variable, we have to surround it in curly brackets to tell the JSX to treat the contents like JavaScript.

In your browser, you should see "Hello, Travis!" In `App.js`, add another Ideas component to the `App.js` `return()` , but pass in a different name. What do you see in the browser? Try creating new props to use!

Okay, so just WHAT exactly is going on here?

 **props** is the name of an object that contains key-value pairs. From our above example, the key is "name", and the value is "Travis". So, in our Ideas component, we can access the value by writing `props.name` (which gives us a string of "Travis"). This is the same dot notation we learned in Mods 1 and 2 to access data stored in objects.

If, in the `return` of our App component, we called the property "potato" instead of "name", we would have to access it by (inside the Ideas component) writing `props.potato`.

We can even destructure the props object, because it's just a regular object!

```jsx
// Ideas.js

function Ideas(props){
  const { name } = props;

  return (
    <h2>Hello, {name}!</h2>
  )
}
```

In _this_ example, destructuring is a bit over-engineered, yes. However, we'll see in our Card component that destructuring will save us from having to type `props.` over and over again.

And here's YET ANOTHER super-fancy way to destructure:

```jsx
// Ideas.js

function Ideas({ name }){
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

Let's create a Card component to use.

Create your files: `$ touch src/Card.js src/Card.css`

```jsx
// Card.js


import './Card.css';

function Card(){
  return (
    <div className='card'>
      <h3>Card!</h3>
    </div>
  )
}

export default Card;
```

Then, in your Ideas component, let's just try to get these hooked up properly.

```jsx
// Ideas.js


import Card from './Card';
import './Ideas.css';

function Ideas(props){
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

![screenshot of IdeaBox so far](./assets/images/ideaBox/IdeaBox-Screenshot.png)

All right, friends. Let's get to passing some PROPS! Let's go all the way back to our App component and pass our list of ideas to the Ideas container component, so that it can then create Card components out of each individual idea.

```jsx
// App.js


  return(
    <main className='App'>
      <h1>IdeaBox</h1>
      <Ideas ideas={ideas} />
    </main>
  )
```

Let's unpack what we're doing here. We created a new prop called "ideas", and the value we're passing in is our array of ideas (data) which lives in the App component's state. Remember, `ideas` is JavaScript, not HTML, so we need to wrap it in curly brackets!

Go look at the Ideas component in your React dev tools in the browser. You should see that the props contain a key of "ideas" with a value of the array of ideas from App state!

We now want to iterate through our array and create a Card component, passing it the information it needs to display the proper information!

```js
// Ideas.js

function Ideas({ ideas }){

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

function Card({ title, description, id }){
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

* Try assigning  an empty array to the state of our App data .
* What happens? Why?
* What would make for a better user experience?
</section>

To handle the logic for this, we can use **Conditional Rendering**.

Conditional rendering is exactly what it sounds like: telling a component to render something based on a condition. We put some JS into our component's render function, and tell it what to put on the DOM based on some set of conditions. Let's add some here!

Currently our App looks like this:

```jsx
// App.js

function App () {
    const [ideas,setIdeas] = useState([])
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Ideas ideas={ideas} />
      </main>
    )
}


```

<section class="answer">
### In plain JS, what could this conditional look like?
```javascript
if (!data.length) {
  // return an h2 saying to add some ideas
}
```
</section>

We can use curly braces to inject JS into our JSX. However, we need whatever is inside of our curlies to _evaluate_ to the HTML we want rendered, so we'll use some syntax like this:

```jsx
// App.js

 return ( 
  <main className="App">
    <h1>IdeaBox</h1>
    {!ideas.length && <h2>No ideas yet -- add some!</h2> }
    <Ideas ideas={ideas} />
  </main>
 )


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

```jsx
// Form.js

import { useState } from 'react';
import './Form.css';

function Form(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={title}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
        />

        <button>SUBMIT</button>
      </form>
    )
}

export default Form;
```

But we need to write some functions. Let's start by making sure that when we type into our inputs, they update the Form's state.

```jsx
// Form.js

    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <button>SUBMIT</button>
      </form>
    )

```

What is this `setTitle` business? It's a function created using useState hook to manage the state of the title. The useState hook returns an array with two elements. The current state value in this case an empty string and a function to update the state in this case `setTitle`. 
OK let's go back to `setTitle` and what is happening in the `onChange`. So when the `onChange` event listener is triggered by the user typing something into the input field, the `setTitle` function is called with the new value of the input as an argument. This updates the state of the title variable with the new value, causing a re-render of the component with the updated state.


Take a look at your React dev tools - is the state updating as you type into the inputs?

When we click the submit button, what do we want to happen? We want to create an object out of the new idea and add it to the list of ideas that App is holding onto in state. How do we access App's state from inside our Form component?

### Passing bound methods

In App, we're going to have to create a method that updates App's state:

```jsx
// App.js

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }

    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} />
      </main>
    )

```

You'll notice that we're using a function keyword to create this function. Why do you think that is? This is a callback function that takes a new idea object as an argument, and adds it to the existing ideas array by creating a new array using the spread operator ... to copy the existing ideas array and adding the new idea to the end of it.
This updated array is then set as the new state of `ideas` using `setIdeas` function which is the state updater function created by useState hook. 

This is good, because we're passing it down as a prop to the Form component!

Now, in the Form component, let's make use of the `addIdea` method we passed as a prop. In functional components, we reference props with `props`. 

```jsx
// Form.js

  function submitIdeas(event) {
        event.preventDefault()
        const newIdea = {
            id: Date.now(),
            title,
            description
        }
        addIdea(newIdea)
        clearInput()
  }
  function clearInput(){
        setTitle("")
        setDescription("")
  }
    
    return (
        <form>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
  
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
  
          <button onClick = { event => submitIdeas(event)}>SUBMIT</button>
        </form>
      )
```

### Deleting a Card

Now that you know how to use a method and props to allow a different component to update App's state, see if you can get each Card's delete button to work.

First, write the App method to delete an idea from state and pass it to the Ideas component:

```jsx
// App.js

import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState } from 'react'

function App(){
  const dummyIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas)
  
  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Form addIdea={addIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;

```

Second, pass the `deleteIdea` function to each Card that the Ideas component creates:

```jsx
import './Ideas.css';
import Card from "./Card"
function Ideas({ ideas, deleteIdea }){

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
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

```jsx

import './Card.css';

const Card = ({ title, description, id, deleteIdea }) => {
    return (
      <div className='card'>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={()=> deleteIdea(id)}>🗑</button>
      </div>
    )
  }
  export default Card;
```

Voila! You've created a React application!

## Review
<section class="checks-for-understanding">

Take a few minutes to journal:

* What "aha" moments did you have?
* Which concepts are the fuzziest for you right now?
* Which concepts are the clearest for you right now?
* What do you know about functional components?
* What do you know about hooks?
* What do you know about state?
* What do you know about passing props?
* What questions do you have? (bring these to class on Wednesday!)

</section>
