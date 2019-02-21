---
title: "Intermediate React - Hooks"
length: 2 hours
module: 3
---

# Intermediate React

## React Introduces Hooks (v16.8 - February 2019)

**Note - I am using [this repo](https://github.com/christielynam/pet-box-api) as my backend for this lesson**

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. React gives us a few built-in hooks that we'll take a look at shortly, but we can also create our own custom hooks that will allow us to reuse/share stateful logic.

### Rules

* **ONLY CALL HOOKS FROM REACT FUNCTIONS** (THEY DON'T WORK INSIDE CLASSES & THEY DON'T WORK OUTSIDE OF REACT)
* **DON'T CALL HOOKS INSIDE LOOPS, CONDITIONS, OR NESTED FUNCTIONS** 

### Benefits of Hooks

* Let you use more of React's features without classes (state and an alternative to lifecycle methods)
* Let you organize the logic inside a component into reasonable isolated units
* Allow you to reuse stateful logic without changing your component hierarchy
* Will likely reduce your bundle size because code using Hooks tends to minify better than equivalent code using classes
* No breaking changes

### State Hook

We call this hook inside a function component to add some local state to it. React will preserve this state between re-renders. `useState` returns a pair: the current state value an a function that lets you update it. `useState` takes 1 argument - the initial state. This value is only used during the first render.

What if your component needs more than 1 piece of state? No worries... you can use the state hook multiple times in a single component. The array destructuring syntax lets us give different names to each piece of state and the functions that update them.

```js
import React, { useState } from 'react'
import PetList from './PetList'

function App() {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  return (
    <div className='App'>
      <h1>PetBox</h1>
      { isError && <div>Something went wrong...</div> }
      { isLoading ? <div>Loading...</div> : <PetList pets={pets} /> }
    </div>
  )
}
export default App
```

### Effect Hook

The Effect Hook, `useEffect`, allows us to perform side effects (data fetching, subscriptions, etc) from a functional component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`, but unified into a single API.

```js
import React, { useState, useEffect } from 'react'
import PetList from './PetList'

function App() {
  const [pets, setPets] = useState([])

  const getPets = async () => {
    setError('')
    setIsLoading(true)
    try {
      const url = 'http://localhost:3001/api/v1/pets'
      const response = await fetch(url)
      const pets = await response.json()
      setPets(pets)
    } catch(error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getPets()
  }, [])
  
  return (
    <div className='App'>
      <h1>PetBox</h1>
      { isError && <div>Something went wrong...</div> }
      { isLoading ? <div>Loading...</div> : <PetList pets={pets} /> }
    </div>
  )
}
export default App
```

Here, we've imported the `useEffect` hook from React and added a `getPets` method that will fetch all of our pets. Since `App` is now a functional component, we don't have access to lifecycle methods like `componentDidMount`. Instead, we can now utilize the `useEffect` hook to call `getPets`. 

There are a few important things to be aware of in the code above. First, the `useEffect` hook **MUST** return a clean-up function or nothing at all. We can't return a Promise. This means that we can't write an async function inside of `useEffect` (because an async function always returns a Promise). That's why we have written `getPets` outside of `useEffect` and just called it inside of `useEffect`. 

Also, notice that we have passed an empty array as a second argument to `useEffect`. Without doing this, we would get caught in a infinite loop because the `useEffect` hook runs when the component mounts **and** after **EVERY** update/render. Because we are setting the state after every data fetch, the component updates and the effect runs again. By adding an empty array as the second argument, we avoid activating the effect hook when the component updates and it will only run once when the component mounts and unmounts. If we want the effect to run when one of the variables is updated, then we would add that variable to the array. This could be a prop or a piece of state. Check out [the docs](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) for more info on conditionally firing an effect.

## Sharing Stateful Logic Between Components

There are numerous ways to reuse logic in React apps these days. We can write simple reuseable functions and we also have components (which could be either class-based or functional). The issue with class-based components is that they have to render some UI. This makes them inconvenient for sharing non-visual logic. This is how we end up with complex patterns like render props and higher order components.

### Recent Attempts to Solve the Problem

**TLDR**; Higher Order Components and Render Props are complex patterns that require you to restructure your components when you use them and introduce unnecessary nesting in your component tree. This can become cumbersome and make your code more difficult to read.

#### Higher Order Components

A Higher Order Component is a function that takes in a component and returns a new component. Higher Order Components are an attempt at applying the functional programming concept of Higher Order Functions to React components. They funciton similarly to how Higher Order Funtions pass data via closures. You can imagine in a large app, the same pattern of fetching data and setting state with that data will occur over and over again. Higher Order Components allow us to define this logic in a single place and share it across many components.

```js
import React, { Component } from 'react'

function withPets(WrappedComponent) {
  return class extends Component {
    state = {
      pets: []
    }

    getPets = async () => {
      const url = 'http://localhost:3001/api/v1/pets'
      const response = await fetch(url)
      const pets = await response.json()
      return pets
    }

    async componentDidMount() {
      const pets = await this.getPets()
      this.setState({ pets })
    }

    render() {
      const { pets } = this.state
      return (
        <WrappedComponent pets={pets} {...this.props} />
      )
    }
  }
}

export default withPets
```

Now we can give any component access to the pets. For instance, if we wanted to give `PetList` and `Nav` both access to the pets, we're in luck. `PetListWithPets` and `NavWithPets` are now components that we can use anywhere that have pets as a prop.

```js
const PetListWithPets = withPets(PetList)
const NavWithPets = withPets(Nav)
```

#### Render Props

The Render Props pattern is a way for us to create a component that provides some kind of data to a child component. The basic idea is that we have a component that just perfoms some functionality and serves its result to a child component.  

```js
function PetList({ pets }) {
  const displayPets = pets.map(pet => (
    <PetDetail key={pet.id} {...pet} />
  ))
  
  return (
    <div>
      {displayPets}
    </div>
  )
}

<Fetch
  url='http://localhost:3001/api/v1/pets'
  render={(pets) => <PetList pets={pets} />} 
/>
```

`PetList` should look pretty familiar... it's just a normal presentation component. But let's take a closer look at the `Fetch` component. We have 2 props - a url prop and a **render prop**. This render prop takes a function that receives some data and returns the `PetList` component that gets passed the data as a prop. The whole render-props pattern is about invoking a function in our return method like so.

```js
class Fetch extends Component {
  render() {
	return this.props.render()
  }
}
```

So, we need to pass something into `this.props.render()`. Let's extract the function invocation and take a closer look at it.

```js
(pets) => <PetList pets={pets} />
```

We can see that we need a paramater of pets. This is where our `Fetch` component comes in to do some heavy lifting for us (fetching the data).

```js 
class Fetch extends Component {
  state = {
    pets: []
  }
  
  fetchData = async () => {
    const response = await fetch(this.props.url)
    cosnt pets = await response.json()
    this.setState({ pets }) 
  }
  
  componentDidMount() {
    this.fetchData()
  }
  
  render() {
    const { pets } = this.state
    return (
      {!pets.length ? null : this.props.render(pets)}
    )  
  }
}
``` 

Let's now switch gears a bit and think about what we would need to do in the event that the url changes. We would need to add an additional lifecycle method to our `Fetch` component.

```js
componentDidUpdate(prevProps) {
  if(this.props.url && this.props.url !== prevProps.url) {
    this.fetchData(this.props.url)
  }
}
```

Ok... GROSS! Both of these complex patterns add additional non-presentational components and unnecessary nesting to our component tree and make our code somewhat difficult to follow. Wouldn't life be easier if there was just one simple, common way to reuse code?!?

### Custom Hooks to the Rescue

We've already talked about a few of the built-in hooks that React gives us access to. Now let's check out how we can create a custom hook that can fetch data (or do whatever you want) that we can reuse in multiple places.

```js
import { useState, useEffect } from 'react'

function usePets() {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')

  const getPets = async () => {
    setIsError('')
    setIsLoading(true)
    try {
      const url = 'http://localhost:3001/api/v1/pets'
      const response = await fetch(url)
      const pets = await response.json()
      setPets(pets)
    } catch(error) {
      setIsError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getPets()
  }, [])

  return {pets, isLoading, isError}
}

export default usePets
```

**An important note about the code above...** we have to remember to return all the variables inside the `usePets` function so that we can have access to them in the future. Now we can use the extracted data fetching logic anywhere in our application and give any component access to the pets. 

```js
import React from 'react';
import PetList from './PetList'
import usePets from './usePets'

function App() {
  const {pets, isLoading, isError} = usePets()
  
  return (
    <div className='App'>
      <h1>PetBox</h1>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? <div>Loading...</div> : <PetList pets={pets} />}
    </div>
  )
}
export default App	
```

**Isn't this approach so much cleaner and easier to read than render props and higher order components?!?! No more unnecessary nesting in our component tree!!** 

## Resources

* [React Docs on Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) by Dan Abramov
* [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e) by Rudi Yardley
* [Why React's new Hooks API is a game changer](https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c) by Rudi Yardley
* [React Docs on Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
* [The amazing Render props pattern for React.js — lifecycle begone!](https://itnext.io/the-amazing-render-props-pattern-for-react-js-lifecycle-begone-14e520fc3821) by Christoffer Noring
* [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by Robin Wieruch
* [How the useEffect Hook Works](https://daveceddia.com/useeffect-hook-examples/) by Dave Ceddia
