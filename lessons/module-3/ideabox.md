---
title: Building Ideabox in React
module: 3
---

## Agenda

- Review React
- Discuss what we're building
- Talk about Data vs Actions
- Build the controlled form component
- Add ideas to our App state
- Display ideas on the page
- Remove ideas that have been added

## Learning Goals

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
    const value = name.target.value
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
    const value = name.target.value
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
change, but that is going to get repitious pretty quickly. Instead, let's use
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
    const {name, value} = name.target
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


### Display ideas on page

### removeIdea

### Wrapping it up

## References
