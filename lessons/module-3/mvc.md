---
title: MVC Architecture
module: 3
---

## Agenda

- Discuss what MVC is, why we use it
- Discuss alternative models to MVC
- Learn about the MVC devisions
- Find familiar examples of MVC
- Discuss popular frameworks that lean on MVC
- Discuss how we use the MVC pattern with React/Redux

## Learning Goals

- Be able to explain each of the layers of MVC
- Understand the benefits of separating concerns
- Be able to identify frameworks that use the MVC pattern
- Be able to identify frameworks that use a different design pattern

## Vocab

- Model
- View
- Controller
- Separation of Concerns

## MVC Architecture

MVC (Model View Controller) is a design pattern that you'll find pops up all
over the place in software development. In this lesson, we'll learn what it is,
why it's important, what frameworks you're already familiar with use it, and
what some other options are for project architecture.

### What is it?

MVC is an architectural pattern that separates applications into three main
categories; the model, the view, and the controller. In this pattern, each
component has its own specific responsibility. While implemented slightly
differently in various frameworks, the general pattern is one of the most
frequently used industry standards for creating scalable and extensible
software.

The **Model** is focused solely on the data, and data related logic of the
application. This could be business data for the application, or data that is
being transacted between the View and Controller.

The **View** is concerned only with the UI of the application, and should not
know what the business logic of the application is. The only logic a view should
be concerned with is how to display data, based on what kind of data it was
handed.

The **Controller** acts as the go-between for the Model and the View. It handles
any user interaction coming from the View, and uses the determines any changes
that may need to be made to the Model. It can also manipulate data from the
Model to give to the View, for rendering a final output.

That might seem like a lot of word salad right now, but once you start looking
for this pattern, you will find it all over the place.

### Ok, by why would I ever use it?

You've already been using it! Let's consider a super simple example:

```js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  handleCounter = (event) => {
    const increment = event.target.name === '+' ? 1 : -1
    this.setState({count: this.state.count + increment})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCounter} name="-">-</button>
        <button onClick={this.handleCounter} name="+">+</button>
      </div>
    );
  }
}

export default App;
```

Sure this is about as basic as it gets, but even this simple counter has all
three of our architectural components. Can you identify each one?

---
_**Turn and talk:** What part of the application above is the Model? How about
the Controller and the View? How would your answer change if this was just a
stateless component accepting props?_

### Where have I seen this before?

### Are there other options if I don't like MVC?

### Wrapping it up

## References
