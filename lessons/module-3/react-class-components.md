---

title: Legacy Class Components in React
module: 3

---

<section class="call-to-action">

### Prework

Understanding class components requires some background knowledge about classes in JavaScript. Please complete the following pre-work before the lesson. 

[Classes in JavaScript](./react-class-components-prework.html)

</section>

## Learning Goals

By the end of this lesson, you will be able to:

* explain the differences between classs components and functional components
* create class components
* convert class based components to functional components

## Vocabulary
- `this` - a keyword with a value that changes depending on the context in which it's used
- `class` - a special function which acts as as a template for creating objects
- `class component` - a React component that inherits properties and methods from a `Component` class. 

<section class="call-to-action">

## Warm Up

In small groups, answer the following questions. Make sure everyone has an oportunity to share and feel free to share screens.
- What do you know about JS classes?
- How do you create a class in JS?
- How do you create an object instance using a class? 

</section>

## Getting Started

We’re going to be using this [ideabox](https://github.com/turingschool-examples/react-iii-ideabox) repo today. Before going any further please do the following:
* Clone the repo to your machine
* Switch to the `refactor-hooks-to-classes` branch
* Run `npm install` in the repo
* Put a thumbs up in the participants panel of zoom once you’re done!

## Background

React has been around since 2013 and that means it has gone through many iterations. Originally, if a developer wanted to utilize state and utilize a component's lifecycle then they had to use a class component. More recently, React introduced Hooks. Hooks allow developers to use state and a component's lifecycle in a functional component. This pattern is encouraged as common practice moving forward. 

However, enterprise and company software moves at a much slower pace than the React ecosystem. This means that there are still many code bases out there that are using class components. You might find yourself in a job which uses class components! You may also find yourself tasked with the job of refactoring legacy class components into functional components. 

## Compare and Contrast

Both functional and class components share some common features: 
- they both render JSX in some way
- they both can have props
- the both can have state
- they both have a way to call functions at different stages of a component's life-cycle. (for example, `useEffect`)

The main differences are: 
- things work differently under the hood
- the syntax is different! 

## React Class Components

#### What are class components anyway?

Class components, or class-based components, are just JavaScript classes that act as independent and reusable bits of code which allow you to render content to the DOM. A class component inherits methods and properties from a parent class which React provides, using the `extend` keyword. We'll take a look at more of these inherited properties and methods later. For now, let's take a look at an example of a class component, which has a `render` method and renders content to the DOM - similar to how a functional component renders content with the `return` keyword. 

```jsx
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello, World!
      </div>
    )
  }
}
```

<section class="note">

### Tip

Render should only return JSX. Avoid doing anything else in this method - there should be no side-effects. This isn't a good place to update state or run any operations. 

</section>

## State in Class Components

Instead of using hooks to define and update state, class components utilize class properties and a class method. To utilize the parent class' properties and methods, we must call the `super` function. This will give us access to a method called `setState`, which we can use to update our state. After that, we can define our state using the `this` keyword. Note: state must be an object, but you can have other data types inside of it. 

You can access state in your render method by referencing `this`.

```jsx
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Bill',
    }
  }

  render() {
    return {
      <h1>Hello, {this.state.name}</h1>
    }
  }
}
```

### Props in Class Components

Props probably look similar to what you're used to in functional components. How we use them _within_ our components must change a little bit, though. 

You can pass props to a component. 

```js

<UserComponent email="bill@gmail.com" />

```

To access props in a class component, lean on your good friend `this`:

```js
import { Component } from 'react';

class UserComponent extends Component {
  render() {
    return <h1>Email: { this.props.email }</h1>;
  }
}
```

## Event Handlers

Event handlers may look a bit different in class based components, but only because we have to utilize `this` to call methods from our class. 

For example: 

```jsx
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      title: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name ]: event.target.value });
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

<section class="note">

### For your consideration: 

It's common to define event handlers with arrow functions. Why do you think that is?

</section>

<section class="call-to-action">

### Your turn!

Use your new class component knowledge to begin refactoring the Form in the Ideabox repository into a functional component. Work with a partner to do the following:

- import the `useState` hook from the React library
- refactor the class based component into a functional component of the same name
- remove the old constructor, and replace it with calls to the useState hook (make sure to name both your new piece of state, and the function that will update it)
- update your render method into a return statement to make use of your new state and setter methods
- NOTE: The current form makes use of a handleChange method. You don’t necessarily need this, but you can use it with some appropriate refactoring.

</section>

<section class="answer">

### Here's one way you could do it, don't look until you're done!

```jsx
import { useState } from 'react';
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

## Lifecycle Methods

In functional components, you can call functions in response to the lifecycle of a component using the `useEffect` hook. 

Review the following questions before diving into Lifecycle methods for class components: 

- How do you call a function when the component mounts using `useEffect`?
- How do you call a function when state changes using `useEffect`? 

Class components inherit several lifecycle methods that we can use. Two important methods are: 

`componentDidMount` - this method is invoked immediately after a component is mounted. React invokes this for us - we simply define the method in our class component. Note: the action of defining `componentDidMount` is actually something fancy called `method overwriting`, which allows a child class to make a specific implementation of the parent class' method. 

`componentDidUpdate()` - this method is invoked _after_ updating occurs. It is not called on the initial render. React invokes this for us, as well. This is a good place for network requests and updating state, but you'll need to compare the current props to the previous props. Find more information [here](https://dev.to/cesareferrari/how-to-use-componentdidupdate-in-react-30en) to learn about using a conditional to update state in `componentDidUpdate` so that you don't end up with an infinite loop.

<section class="call-to-action">

### Your turn! 

With a partner, refactor the App component in our ideabox to be a functional component. Make sure you do the following:

- import `useState` and `useEffect` from the react library
- convert the class based component into a functional component
- use the `useState` hook to recreate the parts of state that were previously in a constructor function
- use the `useEffect` hook to recreate the functionality present in the lifecycle method
- update the return statement using your new state values

If you’ve done everything right, the ideabox should still work exactly as it did before!

</section>


<section class="answer">

### Here's one way you could do it, don't look until you're done!

```jsx
import { useState, useEffect } from 'react';
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

<section class="checks-for-understanding">

### Checks for Understanding

* What's the difference between class components and functional components in React?
* What is `componentDidMount` used for?
* How do you work with state in a class component?
* Why is it useful to know about class components? 

</section>

### Resources

- [Legacy React Docs](https://legacy.reactjs.org/)
- [How to use componentDidUpdate](https://dev.to/cesareferrari/how-to-use-componentdidupdate-in-react-30en)
- [Tips for converting a class component into a functional one in React](https://www.petroskyriakou.com/tips-for-converting-a-class-component-to-a-functional-one-in-react)