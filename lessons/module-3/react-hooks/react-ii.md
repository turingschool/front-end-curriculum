---
title: "React II: the How - building IdeaBox"
length: 3 hours
tags: react, ideabox
module: 3
---

## Learning Goals

* Use state and props to manage application data
* Create a controlled form
* Use JSX

## Create React App

For this lesson, we will be using [`create-react-app`](https://facebook.github.io/create-react-app/). This is a command line tool that sets up a boilerplate React application for us. Out of the box, it comes with some handy scripts (such as `start` and `test`).

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

You'll notice that as soon as we save our changes, the browser re-renders. Look into the terminal, and you'll see another build kick off. This is because `create-react-app` gives us hot-reloading *(you have also seen hot-reloading when working with webpack)*. Any time we make a change, the browser will update to show our changes.

If we look at the browser now that we've deleted our `App.js` code, you'll see an error that reads:

"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."

Back in our `index.js` file we're trying to render a React component: App. However, we're no longer exporting a valid React component! The error is trying to be helpful to let us know what's going on.

Let's start building out our App component.

### Planning our app

Let's figure out what should be a component in our app.

![IdeaBox wireframe](https://i.imgur.com/2bSfaXK.jpg)

* We have an **App component**. That should probably hold onto our list of ideas.
* We need a **Form component** so we can create new ideas. The Form component will have to be able to add new ideas to App's list of ideas.
* A **Card component** to display each single idea.
* An **Ideas component** to hold all of our Cards.

![IdeaBox wireframe with component boxes](https://i.imgur.com/xWggABx.jpg)

### App.js

Let's bring back some code. We'll start with our top-level App component. This will act as a container or wrapper for our other components:


```js
// App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <h1>IdeaBox</h1>
  )
}

export default App;
```


Save this code and go check your browser. What do you see?

Let's take a minute and examine our return statement.

> **Understanding JSX**  
>
> It looks like our `App` function is returning some HTML! Very easy to read, right?  
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

If we think about this logically, it makes sense! The `App` component is just a function. And how many things can a function return at once? Just one! So: in order to return multiple JSX elements, we have to wrap them in a single JSX element!

Since this is our App component, let's wrap everything in a `<main>` tag!

_NOTE: If you're just looking for an unflavored container for your elements (aka they are not semantically related to one another, and the best element to use would be a `<div>`), then instead, use a `<React.Fragment>`! You can read more about Fragments [here](https://reactjs.org/docs/fragments.html)._

```js
// App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <p>Hi!</p>
    </main>
  )
}

export default App;
```


<section class="note">
### ES6 Class Components

You'll notice that instead of "`class`", we're using a "`className`" attribute on our `<main>` element. Why do you think this is?

The answer lies with JSX: because we're writing JavaScript + XML, and not true HTML, we can't use "`class`" because "`class`" is already a reserved JavaScript word! So, we're using "`className`" instead.
</section>



### App.js State

During the planning phase, we mentioned that our `App` component will somehow hold onto our list of ideas. This means it must manage some application data. In the previous React lesson, we learned a bit about props and state.

<section class="call-to-action">
### Turn and Talk

Refresh your memory on props vs. state. What did we use props for? What example was given for state? What were the differences between props and state?
</section>

Our app should be able to add and remove ideas - which means that **our list of ideas is application data that will be changing in response to user interaction**. This makes it a good candidate for being placed in state. Let's see what it looks like to create state in React:

```js
// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <p>Hi!</p>
    </main>
  )
}

export default App;
```

We have two new additions to our code here:

* We are now importing a function from React called `useState` - this is what's known as a **React Hook**. You will learn about more hooks in future lessons. For now, you can think of a React Hook as **a function that allows you to access different features of React**. With the `useState` hook, we are giving ourselves access to React's ability to manage application data through state.
* On the first line of our `App` component function, we are setting up a state variable called (`ideas`) and a function that will allow us to update it when we add or remove ideas (`setIdeas`) The syntax here can be overwhelming, so let's break it down a bit.

<section class="call-to-action">
### Read & Journal

Take a moment to read the API documentation on the [useState Hook])(https://reactjs.org/docs/hooks-reference.html#usestate) and answer the following questions:

* What does the `useState` hook take in as an argument?
* What does the `useState` hook return?
* Why are our variables (`ideas` and `setIdeas`) wrapped in hard brackets?
</section>

<!-- Instructor Explanation:

* We have a `const` keyword and an `=` operator which means we're doing a variable assignment
* On the right-hand side of the assignment, we are invoking the `useState()` function that we imported from React
* `useState()` takes in a single argument - the initial state. Because we want our ideas to be an array of ideas, we'll set our initial state value to an empty array
* `useState()` returns an array with two values in it: one that represents the state, and another that is a function which will allow you to update that piece of state
* We are leveraging array destructuring in order to assign those two return values to variables (ideas and setIdeas)
-->

Let's start out with a couple of default ideas, just so we can have something to look at when we begin building out the rest of our components. We'll create an array called `initialIdeas` that we'll use as the argument to pass into our `useState` hook:


```js
import React, { useState } from 'react';
import './App.css';

const initialIdeas = [
  { id: 1, title: 'Sweaters for pugs', description: 'Sweaters but only for pugs to wear' },
  { id: 2, title: 'Salt Water Taffy', description: 'The ocean is cool but what if it was candy?' },
  { id: 3, title: 'Flying pigs', description: 'Would allow many things to finally come true' }   
];

const App = () => {
  const [ideas, setIdeas] = useState(initialIdeas);

  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <p>Hi!</p>
    </main>
  )
}

export default App;
```

When I look in my React dev tools, I can see that App now has state:

![App component state](https://imgur.com/njnh2HE)



<!-- **Consider the following...**

Okay. Let's pause for a second. `App.js` is a class-based component, rather than a function-based component, because we want it to have its own state.

(React Hooks is a new feature that was released at the end of 2018 and allows function-based components to access and manipulate state - we'll learn more about this in a future lesson, but for now, it's important to understand the uses of and distinctions between class-based and function-based components.)

A basic rule of thumb for determining if a component should be function-based or class-based is this:

**If a component needs to keep track of and display data, and if that component itself will update or change the data it's displaying, we need to use a class-based component.**

In general, function-based components are lighter than class-based components. You'll find that most of your applications will be made up of simple function-based components, getting their data from a few heavier class-based components.

 -->



## Ideas.js

Now that we have some ideas in our state, let's work on getting those to render on the page. We will create an `Ideas` component to encapsulate all of our idea cards. 

In your terminal, touch two new files: `$ touch src/Ideas.js src/Ideas.css`.


<section class="note">
### Note

You may have noticed we are capitalizing the first letter of our component file names. This follows conventions you've seen in Mod 2 where you capitalized your class templates, and each class template had its own file with a capital letter.
</section>


In `Ideas.js`, let's create a function called `Ideas` that simply returns an h2 reading "Ideas go here!"

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

Then, back in our `App.js`, we can import our shiny new Ideas component and render it to the page like so:

```js
// App.js

import React, { useState } from 'react';
import './App.css';
import Ideas from './Ideas';

const initialIdeas = [
  { id: 1, title: 'Sweaters for pugs', description: 'Sweaters but only for pugs to wear' },
  { id: 2, title: 'Salt Water Taffy', description: 'The ocean is cool but what if it was candy?' },
  { id: 3, title: 'Flying pigs', description: 'Would allow many things to finally come true' }   
];

const App = () => {
  const [ideas, setIdeas] = useState(initialIdeas);

  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <Ideas />
    </main>
  )
}

export default App;
```

When we look at our browser, we should see our h2! That's nice and all, but not very useful. We have to pass our ideas array from the App component to our Ideas component. We accomplish that by using **props**.

### Props

Props (along with state) are the heart and soul, the meat and potatoes, of React. They are what allow us to pass information between components. Let's take a look at how that might work.

Let's start with an example, just to keep things simple. For now, since our Ideas component just contains an h2, let's make that h2 say something different than "Ideas go here!"


```js
// App.js

return (
  <main className='App'>
    <h1>IdeaBox</h1>
    <Ideas name='Travis' />
  </main>
)
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

Without the curly braces, if we were to return `<h2>Hello, props.name</h2>` - that's what we would literally see in the browser. Wrapping `props.name` in curlies tells React to evaluate what `props.name` actually represents ('Travis'), and render that instead. 



<section class="call-to-action">
### Practice On Your Own

In `App.js`, add another Ideas component to the `render` method, but pass in a different name. What do you see in the browser? Try creating new props to use!
</section>

Okay, so just WHAT exactly is going on here?

Similar to how **state** is an object that contains key-value pairs, **props** is the name of an object that contains key-value pairs. From our above example, the key is "name", and the value is "Travis". So, in our Ideas component, we can access the value by writing `props.name` (which gives us a string of "Travis"). This is the same dot notation we learned in Mods 1 and 2 to access data stored in objects.

If, in the JSX of our App component, we called the property "potato" instead of "name", we would have to access it (inside the Ideas component) by writing `props.potato`.

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

const Ideas = ({name}) => {

  return (
    <h2>Hello, {name}!</h2>
  )
}
```

React lets us destructure props ON THE WAY IN. Whoa! It's accomplishing the same thing as destructuring on a separate line, like in the previous example.



### Mapping over the ideas array

All right. We don't actually want to render an h2 in our Ideas component. We want to render some Cards with some gosh dang IDEAS!

Let's create a Card component that we'll be able to re-use for rendering each idea.

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

return (
  <main className='App'>
    <h1>IdeaBox</h1>
    <Ideas ideas={ideas} />
  </main>
)
```

Let's unpack what we're doing here. We created a new prop called "ideas", and the value we're passing in is our array of ideas which lives in the App component's state. Remember, `ideas` is a variable we've created with JavaScript, not HTML, so we need to wrap it in curly brackets!

Go look at the Ideas component in your React dev tools in the browser. You should see that the props contain a key of "ideas" with a value of the array of ideas from App state!

We now want to iterate through our array and create a Card component for each idea, passing it the information it needs to display the proper information!

```js
// Ideas.js

const Ideas = ({ideas}) => {

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

I created a button to delete the Card, but we'll get to that later. For now, high five the people at your table, because we just got this sucker to display some ideas!!


<section class="call-to-action">
### Table Talk

We've created 3 components so far, one with state (App) and two with props (Ideas and Card). Take some time to discuss again the relationship between state and props. You can use the following questions to guide your conversation:

* Why did we place our ideas state in the App component? Why not in the Card component? 
* How did we use our state value in other components?
* How can we identify when a component needs state vs. when it just needs props?
</section>





### Form.js

Let's move on to our Form component. We're going to create what is known as a controlled form. This form component will also have some state to keep track of our user input values:

* Users will be typing a title and description for a new idea into the input fields, therefore
* The input values are data that changes in response to user interaction, therefore
* They are good candidates for storing in state

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

import React, { useState } from 'react';

const Form = (props) => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input name="title" type="text" placeholder="Title" />
      <label htmlFor="description">Description</label>
      <input name="description" type="text" placeholder="Description" />
      <button type="submit" id="add">Add Idea</button>
    </form>
  )
}

export default Form;
```

Import the Form component into your `App.js` file and render it within the JSX:

```js
import Form from './Form';

<Form />
````

We're already importing `useState` from React - now we just need to leverage it. We'll have two state values in our Form component - `title` and `description` that each represent the value of their corresponding input fields:

```js
// Form.js

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
```

Remember that `setTitle` and `setDescription` are now functions that can be called when we want to update those state values. Because we want to keep the state value in sync with what a user is typing, we'll add an `onChange` event to our input fields. We'll also set the `value` attribute of our input fields to the state value it should be reflecting at all times:

```js
<input name="title" type="text" placeholder="Title" value={title} onChange={(event) => { handleTitleChange(event)}}></input>

<input name="description" type="text" placeholder="Description" value={description} onChange={(event) => { handleDescriptionChange(event)}}></input>
```

Let's break this syntax down a little bit:

* We add an `onChange` attribute to our input element (think back to Mod 1 and your standard HTML skills - this is just an attribute you can add to your HTML elements)
* We assign it to an arrow function (the entire arrow function must be wrapped in curly braces - remember a function is JavaScript so we need to tell React to treat anything within the curlies as pure JavaScript rather than literal HTML)
* Our arrow function gives us access to an event object that will help us grab the input value from that element (again, think back to Mod 1 when you added event listeners to your elements)
* Our arrow function kicks off a new named function (e.g. `handleTitleChange`) that takes in the event object as an argument
* We now must create these two functions `handleTitleChange` and `handleDescriptionChange` in order to make our state changes:


```js
const Form = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  }
```

Each of these functions will invoke either `setTitle` or `setDescription` in order to update their respective state value. We make use of the `event` object by grabbing the input value with `event.currentTarget.value` and use that as the new value for our state. Take a look at your React dev tools - is the state updating as you type into the inputs?

<!-- I would note here why those handle function calls need to be wrapped in an anonymous arrow function rather than just trying to invoke them directly in the JSX before moving on 

Maybe you also want to show them how to refactor/dry this up a bit? Here is an example of the two state values merged into somewhat more reusable logic: https://gist.github.com/brittanystoroz/a686f1928830e470a9a579e823bf2d2d

--> 

### Passing methods as props

Now that our inputs are working, we need to hook up the submit button to actually add our new idea to the list. Remember:

* The list of ideas is going to grow or shrink in response to user interaction
* We stored this list of ideas in state from within our App component

We can only access and manipulate the App component's state from within the App component. This means that we'll want to write a function in `App.js` that can add our new idea into the list:

```js
const addIdea = (idea) => {
  let newIdeaList = ideas.concat([idea]);
  setIdeas(newIdeaList);
}
```

Even though we must define this function within the `App` component, we'll want to **invoke** the function within our `Form` component. In order to do this, we must pass down a reference to it as a prop:

```js
<Form addIdea={addIdea} />
```

This will allow us to invoke the function in the appropriate place (our Form component, which is keeping track of the new idea values). Note that we are not invoking it here (there are no parens after `addIdea`), we are simply referencing it.

Now, in our Form component, we can invoke `addIdea` when a user clicks the submit button:

```js
<button type="submit" id="add" onClick={(event) => { handleSubmit(event)}}>Add Idea</button>
```

Let's create a `handleSubmit` function that allows us to prevent the default behavior of the submit event (reloading the entire page, which we do not want or need), invokes our `addIdea` function, and resets the input fields:

```js
const handleSubmit = (event) => {
  event.preventDefault(); // prevents the page from refreshing on form submit
  const newIdea = { 
    id: Date.now(),            // give our new idea a unique id
    title: title,              // give our new idea a title using the title value from state
    description: description   // give our new idea a description using the description value from state
  };

  props.addIdea(newIdea);
  clearInputs();              // clear out the input values after our new idea has been added
}
```

In this function, we invoke our `addIdea` function by accessing `props.addIdea`. It will take in an object that represents our new idea data - an ID, title and description. (Look back to how we created the `addIdea` function in our App component - you'll see it has a single parameter called `idea`). 

In order to clear our input fields, let's write another function like so:

```js
const clearInputs = () => {
  setTitle('');
  setDescription('');
}
```


### Deleting a Card

Now that you know how to use a method and props to allow a different component to update App's state, see if you can get each Card's delete button to work.

First, write the App method to delete an idea from state and pass it to the Ideas component:

```js
// App.js

const deleteIdea = (id) => {
  let newIdeaList = ideas.filter(idea => idea.id !== id);
  setIdeas(newIdeaList);
};
```

Second, pass the `deleteIdea` function to each Card that the Ideas component creates:

```js
import React from 'react';
import './Ideas.css';
import Card from './Card';

const Ideas = ({ideas, deleteIdea}) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={props.deleteIdea}
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

### Suggested homework

We **strongly** suggest that you try building IdeaBox (or a Grocery List app, or a To Do List app, or something similar) using React tonight, on your own.
