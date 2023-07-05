---
title: React 3 - Advanced Data Management.
length: 3 hours
module: 3
tags: react, hooks, useEffect, Network request 
---

## Learning Goals
* Be able to perform network requests and make use of the response data with the `useEffect` hook.
* Understand how to perform side effect behavior in a functional component with `useEffect`.
* Be able to conditionally render different views in a function component.


## Vocab

* `useEffect` - A React Hook which enables us to add side effect behavior to a functional component.
* Side effect - Any action performed by a component that causes a change in the application state or interacts with the outside world. 

## React Introduces Hooks (v16.8 - February 2019)

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. React gives us some built-in hooks, that we'll take a look at shortly, but we can also create our own custom hooks that will allow us to reuse/share stateful logic.

There are a number of different motivations behind adding hooks to React, which you can read more about [here](https://reactjs.org/docs/hooks-intro.html#motivation). The most important take-away for you is that hooks allows us to streamline our applications and leverage the power of functional components.

### Some Important Rules

* **Only call hooks from within React functions** 
* **Don't call hooks inside of loops, conditions, or nested functions** 

### Benefits of Hooks

* Let you organize the logic inside a component into reasonable isolated units.
* Allow you to reuse stateful logic without changing your component hierarchy.
* Will likely reduce your bundle size because code using Hooks tends to minify better than equivalent code using classes
* No breaking changes


### Getting started
We're going to be using [this repo](https://github.com/turingschool-examples/advanced-data-management-hooks-fe/tree/main) today. Before going any further please do the following:

* Clone the repo to your machine
* Run `npm install` in the repo
* Put a thumbs up in the participants panel of zoom once you're done!

### Setting Up Your Back End

We're also going to be running a back end server, which will function as our API! Lucky you, we've written up the backend for you, complete with documentation and friendly error messages.

Clone down [the repo](https://github.com/turingschool-examples/ideabox-api) seperately- but NOT inside your FE repository!

```bash
git clone https://github.com/turingschool-examples/ideabox-api.git ideabox-api
cd ideabox-api
npm i
node server.js
```

Note that the frontend should be running on `localhost:3000` and the backend should be running on `localhost:3001`.

Once you are set up, you can visit `http://localhost:3001/api/v1/ideas` and you should see a brief list of ideas!


### Implement Getting Data from the Backend
<section class="call-to-action">
### Your Turn -- Review `.fetch()`
 Take some time to look into the <a href="https://developer.mozilla.org/en-us/docs/web/api/fetch_api/using_fetch" target="_blank">fetch API documentation</a>.
 Answer the following questions:
  <section class="answer">
### What does `.fetch()` do?
  `.fetch()` is a method provided by the fetch api. It allows us to make a network request.     
  </section>
  <section class="answer">
### What does `.fetch()` return?
`.fetch()` returns a promise.
  </section>
  <section class="answer">
### What does `.then()` do? What is the method called on? What does it return?
`.then()` is a method of the Promise prototype that is called on a promise object. It is used to handle the successful resolution of a promise. When the promise resolves, the code inside the `.then()` block is executed. The `.then()` method itself returns a new promise object, allowing for chaining multiple asynchronous operations together.
  </section>
  <section class="answer">
### What does `.catch()` do? What is the method called on? What does it return?
`.catch()` is a method called on a Promise object (aka a Promise prototype method). It runs when the first promise it is chained to fails / rejects. It returns a promise object.
  </section>
</section>

Okay. Let's refactor our IdeaBox so that we are consuming data from our API!
<section class="call-to-action">
### Your Turn

Pair up and work together on implementing the functionality to fetch our ideas from the API using the useEffect hook! Use the docs for the API to figure out what endpoint you need to hit. Also, think about where this hook should be placed in the component's code. Once you have the ideas being rendered, give your partner a high five!
</section>

As we've noted before, we should use our catch somehow in order to display an error if something goes wrong.  Try stopping your backend server and see what happens.  Your catch should before firing (because the Promise rejected).  Let's do something with that error.

### Effect Hook

The Effect Hook, `useEffect`, allows us to perform side effects (data fetching, subscriptions, etc) from a functional component.
So far in React, we've leveraged the `useState` hook to manage our application data. Another common hook that you'll want to get comfortable with is `useEffect`. This hook allows you to perform some logic during certain phases of the **component lifecycle**. We'll first demonstrate how and when `useEffect` runs, and then we'll dig into the syntax before demonstrating some real world use-cases.

### The Component Lifecycle

Every component you create goes through several phases of existing:

* **Mounting:** the component is being assessed, created and rendered on the DOM.The mounting phase occurs only once when the component is first rendered and added to the DOM, and subsequent updates to the component do not trigger the mounting phase again. 
* **Updating:** any time we update state values that are used in our JSX, the component updates itself and re-renders reflecting those changes on the DOM
* **Unmounting:** the component is completely removed from the DOM, usually in response to some sort of user interaction or change in state.

 In the example bellow we are going to use `useEffect` and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) to handle the promise object that was return from the fetch API. 

```jsx
import React, { useState, useEffect } from 'react'

function App() {
  const [pets, setPets] = useState([])
  const [error, setError] = useState('')

  const getPets = async () => {
    const url = 'http://localhost:3001/api/v1/pets'
    setError('')

    try {
      const response = await fetch(url)
      const pets = await response.json()
      setPets(pets)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getPets()
  }, [])
  
  return (
    <div className='App'>
      <h1>PetBox</h1>
      { error && error }
      <PetList pets={pets} />
    </div>
  )
}
export default App
```
<section class="call-to-action">
### In Your Notebook

* Where does `useEffect` come from? We did not define it ourselves. What is our first step in making sure we can use it?
* What data type is `useEffect`?
* What argument does `useEffect` take in? What data type is it?
</section>
<section class="answer">
### The Answer  

`useEffect` is a function that we get for free when we import it from React. It takes in a function as an argument - this will fire any time React kicks off a call to `useEffect` (During the mounting, updating, unmounting phases)
</section>

Here, we've imported the `useEffect` hook from React and added a `getPets` method that will fetch all of our pets. 

There are a few important things to be aware of in the code above. First, the `useEffect` hook **MUST** return a clean-up function or nothing at all. We can't return a Promise. This means that we can't write an async function inside of `useEffect` (because an async function always returns a Promise). That's why we have written `getPets` outside of `useEffect` and just called it inside of `useEffect`. 

Also, notice that we have passed an empty array as a second argument to `useEffect`. Without doing this, we would get caught in a infinite loop because the `useEffect` hook runs when the component mounts **and** after **EVERY** update/render. Because we are setting the state after every data fetch, the component updates and the effect runs again. By adding an empty array as the second argument, we avoid activating the effect hook when the component updates and it will only run once when the component mounts and unmounts. If we want the effect to run when one of the variables is updated, then we would add that variable to the array. This could be a prop or a piece of state. Because we only want to update the pets once, on mount, and there are no other props or pieces of state that depend on this effect, we can pass an empty array. Check out [the docs](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) for more info on conditionally firing an effect.

<section class="call-to-action">
### Your turn!

With a partner, work on the App component and implement  `useEffect`.

* import `useEffect` from the react library
* use the `useEffect` hook to set the title of this application.


If you've done everything right, the IdeaBox should still work exactly as it did
before!
</section>

<section class="answer">
### Here's one way you could do it, don't look until you're done!

```jsx
import React, { useState, useEffect } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    document.title = `IdeaBox (${ideas.length})`
  })

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  }

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);

    setIdeas(filteredIdeas);
  }

  return(
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </main>
  )
}
export default App;
```
</section>

### Conditional Rendering
Conditional rendering is a powerful technique that allows us to show different UI components based on certain conditions. With React Hooks, we can easily implement conditional rendering in our functional components. Let's take a look at an example:
```jsx
import React, { useState } from 'react';
import Form from './Form';
import Ideas from './Ideas';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState('');

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  };

  const removeIdea = (id) => {
    const filteredIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(filteredIdeas);
  };

  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      {error && <h2>{error}</h2>}
      <Ideas ideas={ideas} removeIdea={removeIdea} />
    </main>
  );
}
```
Wowwwww okay. What does that syntax even mean?

First of all, this is JavaScript (we can tell because of the curly brackets). The first statement of error will evaluate to a truthy or a falsy value (an empty string is falsy). The code after the double ampersand is what will render if we get past the first statement.

It’s a shorthand way of saying, “If there is an error in state, render the error inside h2 tags!”

Neato!

Notice that we are only conditionally rendering the one part of the render that is contingent upon whether or not an error is in state.

We’re not rendering two different versions of the App. We just have the one, and one line will show up only if there is an error stored in state

<section class="call-to-action">

## Your Turn 

 Imagine we have a slow connection or need to load A LOT of data. We might want to implement some kind of loading icon. Using conditional rendering, display a loading icon while the fetch is retrieving the data.
</section>

## Checks for Understanding

In your notebooks, respond to the following:

* What does `useState` do? What two things does it give back to us?
* What does `useEffect` do? What two arguments do we need to pass to it?


## Resources

* [React Docs on Hooks](https://react.dev/reference/react)
* [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) by Dan Abramov
* [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e) by Rudi Yardley
* [Why React's new Hooks API is a game changer](https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c) by Rudi Yardley
* [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by Robin Wieruch
* [How the useEffect Hook Works](https://daveceddia.com/useeffect-hook-examples/) by Dave Ceddia
* [LifeCycle methods - Data management using class component](https://frontend.turing.edu/lessons/module-3/react-3-advanced-data-management.html) 
