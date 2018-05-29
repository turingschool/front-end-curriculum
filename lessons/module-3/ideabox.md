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

### addNewIdea

### Display ideas on page

### removeIdea

### Wrapping it up

## References
