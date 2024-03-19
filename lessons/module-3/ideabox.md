---
title: Building Ideabox in React
module: 3
---


## Learning Goals
- Build stateful/stateless react components
- Pass data down, and actions up
- Be able to explain what a bound function is, and how to make one
- Be able to destructure props coming into a component

## Vocab

- Data down
- Actions up
- Stateless
- Stateful
- Controlled form component
- Passing props
- Destructure
- Binding
- Autobinding

## Building Ideabox in React

Today we're going to explore some React patterns that will become very familiar
to us over the next few weeks. While this Ideabox may seem pretty contrived,
you'll find that many application out in the real world are just high end
Ideaboxes.

### What components do we need?

Consider the following mockup:

// Ideabox mockup

You've already worked with React a bit, so you've seen components before. What
sort of components do you think you'll need to build this application? Will they
be stateful or stateless components? What is the difference between those two
things? Talk in your small groups for 5 min, then we'll discuss as a group.

### Controlled Form Component

Let's start with our form for new ideas. We're going to use a controlled form
component here. All that means is that our component will be stateful, the
values of the form will be bound to the state of the component, and the state of
the component will update whenever someone types in the form field. Here's the
boilerplate:

```js
// NewIdeaForm.js

import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  render() {
    return (
      <form>
        <input name="name" value={this.state.name} />
        <input name="description" value={this.state.description} />
        <button>Submit</button>
      </form>
    )
  }
}
```

Notice how the value of each input is defined by whatever is in state? That gets
us our first critical piece of what makes up a controlled form, but what about
when the user changes the input? Right now nothing would happen, we need to
handle that `onChange` event.

```js
// NewIdeaForm.js

import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleNameChange(e) {
    const value = e.target.value
    this.setState({name: value})
  }

  render() {
    return (
      <form>
        <input name="name" value={this.state.name} onChange={this.handleNameChange}  />
        <input name="description" value={this.state.description} />
        <button>Submit</button>
      </form>
    )
  }
}
```

Now we're handling the name change with our `handleNameChange` function. But
wait! When we run this code, we get an error: `cannot read property 'setState'
of undefined`. What does that mean?

---
_**Turn and Talk:** Why did we get that error? What are our options for solving it?_

---

Ok, so once we've properly bound our function, it should work for us. Here is
one possible binding solution:

```js
// NewIdeaForm.js

import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleNameChange = (e) => {
    const value = e.target.value
    this.setState({name: value})
  }

  render() {
    return (
      <form>
        <input name="name" value={this.state.name} onChange={this.handleNameChange}  />
        <input name="description" value={this.state.description} />
        <button>Submit</button>
      </form>
    )
  }
}
```

This uses the ES6 arrow syntax to automatically bind `handleNameChange` to
`this`. That allows us to call methods on `this` inside of handleNameChange.
That's great for our first input, but what about our second input?

We *could* make another function that specifically handles the description
change, but that is going to get repetitious pretty quickly. Instead, let's use
the name property on the input, and take advantage of JavaScript's dynamic key
assignment, refactoring our `handleNameChange` function to be more generic

```js
// NewIdeaForm.js

import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <form>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
```

Great! Now our `handleChange` function will handle changes to either input, in
each case updating state with the correct data.

### addNewIdea

Now that we've got a form that can handle user input, we need to take that state
and create new ideas with it. Let's look again at our `App` component:

```js
// App.js

import React, { Component } from 'react'
import NewIdeaForm from './NewIdeaForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  render() {
    return(
      <div>
        <NewIdeaForm />
      </div>
    )
  }
}
```

We need some kind of function that can add new ideas to our array. You might be
tempted to use the array prototype method `push` here, but that's not a great
idea. If we did something like `this.state.ideas.push(idea)`, we're mutating the
state in place, and we're not taking advantage of the React lifecycle methods.
Instead, we want to set the state with a new ideas array:

```js
// App.js

import React, { Component } from 'react'
import NewIdeaForm from './NewIdeaForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  render() {
    return(
      <div>
        <NewIdeaForm addIdea={this.addIdea} />
      </div>
    )
  }
}
```

Notice that our `addIdea` method also adds an `id` to each new idea. This will
prove useful later when we want to remove ideas.

Also, we're passing our new `addIdea` method down to our form as a prop. This
gives our form access to this function, but we're still going to need to make
some changes to our form to make it work.

### handleSubmit

Our form is getting the `addIdea` function passed as a prop, but right now we're not
doing anything with it. Lets add another function to handle the `onSubmit` of
the form, and then call our `addIdea` prop function:

```js
// NewIdeaForm.js

import React, { Component } from 'react'

class NewIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
```

Great! Now, `onSubmit` our `handleSubmit` function will be called, and call the
`addIdea` function it was passed from `App` as a prop. This is what we mean when
we say 'data down, actions up'. We're passing the function down (yes, functions
are a data type as well), and then the action that the user takes submitting the
form gets passed back up to the `App` when that function is called.

### Display ideas on page

We're adding our ideas to the `App` state, but we're not yet displaying those on
the page. Let's make a new component called `IdeasContainer` and pass the ideas
in state to it as a prop.

```js
// IdeasContainer.js

import React from 'react'
import IdeaCard from './IdeaCard'

const IdeasContainer = ({ideas}) => {

  const ideaCards = ideas.map(idea => <IdeaCard {...idea} />)

  return(
    <div className="IdeasContainer">
      { ideaCards }
    </div>
  )
}
```

Notice we're mapping over all our ideas to create an array of IdeaCard
components. We haven't created that component yet though! Let's fix that.

```js
import React from 'react'

const IdeaCard = ({name, description, id}) => (
  <div className="IdeaCard">
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
)
```

Great! Now we're displaying our ideas on the page via our two functional
(stateless) components IdeasContainer and IdeaCard. Next up, we'll work though
removing an idea from the page.

### removeIdea

Before we show off any solutions, take a moment to think about the problem. If
we need to remove an idea from the page, what is the best way to do that? Where
do our ideas live? Where should the code to remove them live? Take 5 minutes and
discuss how you would solve the problem in small groups.

There are a number of different ways that we could solve this, but for this
exercise, let's create a `removeIdea` function in the App component, then pass it
down as a prop.

```js
// App.js

import React, { Component } from 'react'
import NewIdeaForm from './NewIdeaForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas})
  }

  render() {
    return(
      <div>
        <NewIdeaForm addIdea={this.addIdea} />
        <IdeasContainer ideas={this.state.ideas} removeIdea={this.removeIdea}/>
      </div>
    )
  }
}
```

When `removeIdea` is called, we'll iterate over the ideas in state, and filter
out any idea whose id doesn't match the id that the function is called with.
Let's update our IdeasContainer and IdeaCard to call this function when a remove
button is clicked.

```js
// IdeasContainer.js

import React from 'react'
import IdeaCard from './IdeaCard'

const IdeasContainer = ({ideas, removeIdea}) => {

  const ideaCards = ideas.map(idea => <IdeaCard {...idea} removeIdea={removeIdea} />)

  return(
    <div className="IdeasContainer">
      { ideaCards }
    </div>
  )
}
```

```js
import React from 'react'

const IdeaCard = ({name, description, id, removeIdea}) => (
  <div className="IdeaCard">
    <h1>{name}</h1>
    <p>{description}</p>
    <button onClick={() => removeIdea(id)}>Remove</button>
  </div>
)
```

### Wrapping it up

Not too shabby! We've built a small application that can take user input, store
this in the application, display the user input on the browser, and update the
remove the same data. While this might seem contrived, this pattern is the
essence of what React is all about, and we'll see it over and over again as we
continue to learn about the library.

## References

[Important React Concepts](react-concepts.html)  
[React Docs](https://reactjs.org/)  
[Create React App](https://github.com/facebook/create-react-app)
