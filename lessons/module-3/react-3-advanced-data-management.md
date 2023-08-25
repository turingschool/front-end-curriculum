---
title: React 3 - Advanced Data Management.
length: 3 hours
module: 3
tags: react, hooks, useEffect, Network request 
---

## Learning Goals

* Be able to perform network requests and make use of the response data with the `useEffect` hook
* Understand how to perform side effect behavior in a functional component with `useEffect`
* Be able to conditionally render different views in a function component

## Vocab

* `useEffect` - A React Hook which enables us to add side effect behavior to a functional component.
* Side effect - Any action performed by a component that causes a change in the application state or interacts with the outside world. 

## React Hooks

React introduced hooks with v16.8 in February 2019.

Hooks are functions that let you "hook into" React state and lifecycle features from functional components. React gives us some built-in hooks, that we'll take a look at shortly, but we can also create our own custom hooks that will allow us to reuse/share stateful logic.

**What are some hooks you've seen already when working with React?**

There are a number of different motivations behind adding hooks to React, which you can read more about [here](https://reactjs.org/docs/hooks-intro.html#motivation). The most important take-away for you is that hooks allows us to streamline our applications and leverage the power of functional components.

### Some Important Rules

* Only call hooks from within React functions 
* Don't call hooks inside of loops, conditions, or nested functions 

### Benefits of Hooks

* Let you organize the logic inside a component into reasonable isolated units
* Allow you to reuse stateful logic without changing your component hierarchy
* Will likely reduce your bundle size because code using Hooks tends to minify better than equivalent code using classes
* No breaking changes

## Network Requests & React

### Review - Fetch

We will be using `fetch` today. Let's review what you already know about `fetch`. Take some time to look into the <a href="https://developer.mozilla.org/en-us/docs/web/api/fetch_api/using_fetch" target="_blank">fetch API documentation</a> and answer the following questions:
<section class="answer">
### What does `fetch` do?
`fetch` is a method provided by the Fetch API. It allows us to make a network request.     
</section>
<section class="answer">
### What does `fetch` return?
`fetch` returns a promise.
</section>
<section class="answer">
### What does `.then()` do? What is the method called on? What does it return?
`.then()` is a method of the Promise prototype that is called on a promise object. It is used to handle the successful resolution of a promise. When the promise resolves, the code inside the `.then()` block is executed. The `.then()` method itself returns a new promise object, allowing for chaining multiple asynchronous operations together.
</section>
<section class="answer">
### What does `.catch()` do? What is the method called on? What does it return?
`.catch()` is a method called on a Promise object (aka a Promise prototype method). It runs when the first promise it is chained to fails / rejects. It returns a promise object.
</section>

### Set Up

You'll need to clone down two repos for today:
- [FE Repo](https://github.com/turingschool-examples/advanced-data-management-hooks-fe/tree/main)
- [BE Repo](https://github.com/turingschool-examples/ideabox-api) - Do NOT clone inside your FE repository!

Follow the steps in each README to get both the FE and BE running on your local machine. Make a tab in Chrome for:
- `localhost:3000`: You should see the React app up and running here
- `http://localhost:3001/api/v1/ideas`: You should see your list of ideas here

Our goal is to refactor this codebase so that we are accessing and updating the data from our API!

### `GET` Request

We are going to start with the `GET` request. Let's start by thinking about a couple of things:
- What data do we want to GET?
- When do we need to GET that data?
- What are we going to do with the data we GET?

<section class="answer">
### Answers  
  
- What data do we need to GET? **All ideas**
- When do we need to run that GET? **On page load**
- What are we going to do with the data we GET? **Add the ideas to our App component's state**
</section>

Given that we are going to use the data to update the `App` component's state, we should probably put the `GET` there. 

<section class="call-to-action">
### Make the GET Request

Write a function in `App` that runs a fetch request to GET all ideas. 

Notes:
- Refer to the BE repo's README for endpoints and documentation. 
- For now, let's `console.log` the data that comes back.
- You're not immediately going to know where/when to invoke this function - that's okay! For now, only definte the function, don't invoke it.

<section class="answer">
### Possible Solution  

```jsx
// App.js 

function getIdeas() {
  fetch('http://localhost:3001/api/v1/ideas')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
}
```
</section>
</section>

Okay, now's the fun part - where and when do we invoke this function?! We said earlier that we want to invoke the function on page load. Let's pause here for a second and talk about the **lifecycle of a React component**.

### The Component Lifecycle

Every component you create goes through several phases of existing:

* **Mounting:** The component is created! The mounting phase **occurs only once** when the component is first rendered and added to the DOM, and subsequent updates to the component do not trigger the mounting phase again. 
* **Updating:** Any time we update state values that are used in our JSX, the component updates itself and re-renders reflecting those changes on the DOM. This phase happens lots of times!
* **Unmounting:** The component is completely removed from the DOM, usually in response to some sort of user interaction or change in state.

<section class="call-to-action">
### Reflect

During which phase of the App component's lifecyle do we want our GET to run?

<section class="answer">
### Answer  

During the Mounting Phase!
</section>
</section>

### The Effect Hook

The Effect Hook, `useEffect`, allows us to perform side effects (data fetching, subscriptions, etc) from a functional component. So far in React, we've leveraged the `useState` hook to manage our application data. Another common hook that you'll want to get comfortable with is `useEffect`. This hook allows you to perform some logic during certain phases of the **component lifecycle**. 

Let's add `useEffect` to our code to invoke our `getIdeas` function:
```jsx
// App.js
import  { useState, useEffect } from 'react'; //make sure you import it!

// ...

function getIdeas() {
  fetch('http://localhost:3001/api/v1/ideas')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
}

useEffect(() => {
  getIdeas();
})
```

### `useEffect` Timing

The Effect Hook will fire during certain phases of the component life cycle, depending on the second argument:

```jsx
useEffect(/* callback function */, /* second argument */)
```

Let's update our code so that we aren't just console logging the data, but we're actually updating state:

```jsx
// App.js

function getIdeas() {
  fetch('http://localhost:3001/api/v1/ideas')
  .then(response => response.json())
  .then(data => setIdeas([...ideas, ...data]))
  .catch(error => console.log(error.message))
}

useEffect(() => {
  getIdeas();
})
```

Run your app. **What's happening?** :scream:

Oh no! Let's revisit the timing conversation. What we invlude in that second argument affects the timing like this:
- `no argument`: The Effect Hook will run for the mounting and updating phases
- `[]`: The Effect Hook will run for the mounting phase only
- `[<piece of state>]`: The Effect Hook will run when that specific piece of state is updated (i.e. `[ideas]`)

<section class="call-to-action">
### Reflect

- When is our `useEffect` hook currently firing? What issues is that causing?
- What should we change to our `useEffect` to get the timing right?

<section class="answer">
### Answer  

It's currently running when the component is mounted (good) AND when state is changed (not good). Since we are updating state in our `useEffect`, it's causing an infinite loop! We need to add an empty array as a second argument to make it only run during the mounting phase:
```jsx
useEffect(() => {
  getIdeas();
}, [])
```
</section>
</section>

We did it! We've got our first network request working in a React app! High five!

## `POST` Request

Now, let's talk about the `POST` request. Let's start by thinking about these questions:
- What data do we need to POST?
- When do we need to run that POST?
- Will our POST need to happen in a `useEffect`?

<section class="answer">
### Answers  

- What data do we need to POST? **New idea from form**
- When do we need to run that POST? **When "submit" is clicked**
- Will our POST need to happen in a `useEffect`? **No, because it's not tied to a specific lifecycle phase**
</section>

A common misconception is that all network requests need to happen in a `useEffect`. In the case of this `POST`, we want it to happen when a user event occurs - specifically, when the "Submit" button is clicked. We can do that directly in the event handler function. 

<section class="call-to-action">
### Make the POST Request

Update `addIdea` in `App` so that a new idea is POSTed to the API.

Notes:
- Refer to the BE repo's README for endpoints, necessary options, and documentation. 
- Think about what you want to happen after the POST resolves successfully.
- You can check that it's successfully being POSTed by going to 'http://localhost:3001/api/v1/ideas' in your browser.

<section class="answer">
### Possible Solution  

```jsx
// App.js 

  function addIdea(newIdea) {
    fetch('http://localhost:3001/api/v1/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea), 
    })
    .then(response => response.json())
    .then(data => setIdeas([...ideas, data]))
    .catch(error => console.log(error.message)) 
  }
```
</section>
</section>

We will not cover it in this class, but if you'd like an added challenge later - update `deleteIdea` so that it also updates the backend data, too!

## Error Handling & Conditional Rendering

**Note**: Turn off your server for this section so that we can force some errors!

So far in this lesson (and perhaps in your whole time at Turing), we've been console logging the error messages in our `.catch`es. That's not great because our users can't see that! Let's actually DO something with those error messages!

There are two things we want to do with errors:
- capture them somewhere
- let the user know what's going on

**Where can we capture the error message so that we can use it later?**

State! Great idea! Let's do that.

<section class="call-to-action">
### Add Error Messages to State

Update your `.catch`es so that rather than console logging the error, we are capturing the error in our state.

<section class="answer">
### Possible Solution

```jsx
// App.js 

const [error, setError] = useState('')

// ...

.catch(error => setError(error.message)) 
```
</section>
</section>

Great! We now have access to the errors when we need them! Now, let's actually show the error to the users. We'll do this through **conditional rendering**. Meaning, we will render certain elements to the DOM based on a condition. Let's look at what this looks like:

```jsx
  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      {error && <h2>{error}</h2>}
      <Ideas ideas={ideas} removeIdea={removeIdea} />
    </main>
  );
```

Wowwwww okay. What does that syntax even mean?

First of all, this is JavaScript (we can tell because of the curly brackets). The first statement of error will evaluate to a truthy or a falsy value (an empty string is falsy). The code after the double ampersand is what will render if we get past the first statement.

It’s a shorthand way of saying, “If there is an error in state, render the h2 element!” Neato!

Notice that we are only conditionally rendering the one part of the render that is contingent upon whether or not an error is in state. We’re not rendering two different versions of the App. We just have the one, and one line will show up only if there is an error stored in state.

Fun fact: You can conditionally render whole components:
```jsx
  return (
    <>
      {pieceOfState && <AWholeComponent />}
    </>
  );
```
Have fun exploring that!

### Error Messages for Your Users

As a frontend dev, you want to think about your users all the time. With that in mind, you will want to think about what errors are appropriate for your users. For example, would an error message like "WDGeneralNetworkError error 500;" be something you'd want to render to your app's screen? Maybe in some cases, maybe not.

When rendering error messages for your users, consider ways to present the information in an unintimidating way AND provide next steps for them. It's okay to display a different error than what the BE provides. For example, maybe you do something like this:

```jsx
// App.js 

.catch(error => {
  console.log(error)
  setError('Oops! Something went wrong! Please try again in a couple minutes.')
}) 
```

This way, the devs have access to the error via the console, but the users have a nice, friendly message!

## Closing - Checks for Understanding

In your notebooks, respond to the following:

* What at the three phases of a component's lifecycle?
* What is the Effect Hook?
* How can we control when `useEffect` runs?
* Do all network requests need to occur in the Effect Hook?
* What is conditional rendering and when might we use it?

## Resources

* [React Docs on Hooks](https://react.dev/reference/react)
* [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) by Dan Abramov
* [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e) by Rudi Yardley
* [Why React's new Hooks API is a game changer](https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c) by Rudi Yardley
* [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by Robin Wieruch
* [How the useEffect Hook Works](https://daveceddia.com/useeffect-hook-examples/) by Dave Ceddia
* [LifeCycle methods - Data management using class component](https://frontend.turing.edu/lessons/module-3/react-3-advanced-data-management.html) 
