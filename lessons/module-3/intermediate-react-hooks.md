---
title: Intermediate React - Intro to Hooks
length: 1.5 hours
module: 3
tags: react, hooks, useState, useEffect
---

## Learning Goals

* Understand how to add state to a functional component with `useState`
* Understand how to perform side effect behavior in a functional component with
  `useEffect`
* Be able to migrate a class based component to a functional component

## Vocab

* `useState` - A React Hook which enables us to add state to a functional
  component
* `useEffect` - A React Hook which enables us to add side effect behavior to a
  functional component

## React Introduces Hooks (v16.8 - February 2019)

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. React gives us some built-in hooks that we'll take a look at shortly, but we can also create our own custom hooks that will allow us to reuse/share stateful logic.

There are a number of different motivations behind adding hooks to React, which
you can read more about
[here](https://reactjs.org/docs/hooks-intro.html#motivation). The most important
take-away for you is that hooks can allow us to remove class based components
from our applications, and simplify the management of functions that depend on
the lifecycle of the component.

### Some Important Rules

* **Only call hooks from within react functions** (They don't work inside of class-based components and they don't work outside of React)
* **Don't call hooks inside of loops, conditions, or nested functions** 

### Benefits of Hooks

* Let you use more of React's features without classes (state and an alternative to lifecycle methods)
* Let you organize the logic inside a component into reasonable isolated units
* Allow you to reuse stateful logic without changing your component hierarchy
* Will likely reduce your bundle size because code using Hooks tends to minify better than equivalent code using classes
* No breaking changes


### Getting started

We're going to be using [this ideabox
repo](https://github.com/turingschool-examples/react-iii-ideabox) today. Before
going any further please do the following:

* Clone the repo to your machine
* Switch to the `using-hooks` branch
* Run `npm install` in the repo
* Put a thumbs up in the participants panel of zoom once you're done!

### State Hook

We call this hook inside a functional component to add some local state to it. React will preserve this state between re-renders. `useState` returns a pair: the current state value and a function that lets you update it. `useState` takes 1 argument - the initial state. This value is only used during the first render.

What if your component needs more than 1 piece of state? No worries... you can use the state hook multiple times in a single component. 

The [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) syntax lets us give different names to each piece of state and the functions that update them.

```js
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  
  return (
    <form className='Form'>
      <h1>My Form</h1>
      <input 
        title='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input 
        title='age'
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
    </form>
  )
}
export default App
```

In the code above, we've set up two pieces of state for a form, as well as their
corresponding setter methods.

* `name` and its setter method `setName`
* `age` and its setter method `setAge`

Additionally, we've set the inital values for these pieces of state, based on
what we passed into `useState`.

<section class="call-to-action">
### Your turn!

We're going to refactor the Form in our Ideabox repository to be a functional
component using hooks! Work with a partner to do the following:

* import the `useState` hook from the react library
* refactor the class based component into a functional component of the same
  name
* remove the old constructor, and replace it with calls to the `useState` hook
  (make sure to name both your new piece of state, and the function that will
  update it)
* update your return statement to make use of your new state and setter methods
* NOTE: The current form makes use of a `handleChange` method. You don't
  necessarily need this, but you _can_ use it with some appropriate refactoring.

If you've done everything right, the ideabox should still work exactly as it did
before!
</section>

<section class="answer">
### Here's one way you could do it, don't look until you're done!

```javascript
import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    props.addIdea(newIdea);
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    setDescription('')
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

      <button onClick={submitIdea}>SUBMIT</button>
    </form>
  )
}

export default Form;
```
</section>

### Effect Hook

The Effect Hook, `useEffect`, allows us to perform side effects (data fetching, subscriptions, etc) from a functional component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`, but unified into a single API.

```js
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

Here, we've imported the `useEffect` hook from React and added a `getPets` method that will fetch all of our pets. Since `App` is now a functional component, we don't have access to lifecycle methods like `componentDidMount`. Instead, we can now utilize the `useEffect` hook to call `getPets`. 

There are a few important things to be aware of in the code above. First, the `useEffect` hook **MUST** return a clean-up function or nothing at all. We can't return a Promise. This means that we can't write an async function inside of `useEffect` (because an async function always returns a Promise). That's why we have written `getPets` outside of `useEffect` and just called it inside of `useEffect`. 

Also, notice that we have passed an empty array as a second argument to `useEffect`. Without doing this, we would get caught in a infinite loop because the `useEffect` hook runs when the component mounts **and** after **EVERY** update/render. Because we are setting the state after every data fetch, the component updates and the effect runs again. By adding an empty array as the second argument, we avoid activating the effect hook when the component updates and it will only run once when the component mounts and unmounts. If we want the effect to run when one of the variables is updated, then we would add that variable to the array. This could be a prop or a piece of state. Because we only want to update the pets once, on mount, and there are no other props or pieces of state that depend on this effect, we can pass an empty array. Check out [the docs](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) for more info on conditionally firing an effect.

<section class="call-to-action">
### Your turn!

With a partner, refactor the App component in our ideabox to be a functional
component. Make sure you do the following:

* import `useState` and `useEffect` from the react library
* convert the class based component into a functional component
* use the `useState` hook to recreate the parts of state that were previously in
  a constructor function
* use the `useEffect` hook to recreate the functionality present in the
  lifecycle method
* update the return statement using your new state values

If you've done everything right, the ideabox should still work exactly as it did
before!
</section>

<section class="answer">
### Here's one way you could do it, don't look until you're done!

```javascript
import React, { useState, useEffect } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    document.title = `Ideabox (${ideas.length})`
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

## Checks for Understanding

In your notebooks, respond to the following:

* What does `useState` do? What two things does it give back to us?
* What does `useEffect` do? What two arguments do we need to pass to it?
* Why should we consider using React Hooks over class based components?

## Resources

* [React Docs on Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) by Dan Abramov
* [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e) by Rudi Yardley
* [Why React's new Hooks API is a game changer](https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c) by Rudi Yardley
* [React Docs on Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
* [The amazing Render props pattern for React.js — lifecycle begone!](https://itnext.io/the-amazing-render-props-pattern-for-react-js-lifecycle-begone-14e520fc3821) by Christoffer Noring
* [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by Robin Wieruch
* [How the useEffect Hook Works](https://daveceddia.com/useeffect-hook-examples/) by Dave Ceddia
