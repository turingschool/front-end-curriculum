---
title: MVC Architecture
module: 3
---

## Learning Goals

- Be able to explain each of the layers of MVC & why we use it
- Understand the benefits of separating concerns
- Be able to identify frameworks that use the MVC pattern
- Be able to identify frameworks that use a different design pattern
- Understand how we can use the MVC pattern with React/Redux

## Vocab

- `Model` The Model is focused solely on the data, and data related logic of the application. The data can both relate to the business data of the application, or the data that is being transacted between the View and Controller.
- `View` The View is concerned only with the UI of the application, and should not know what the business logic of the application is. The only logic it should be concerned with is how to display data.
- `Controller` The Controller acts as the go-between for the Model and the View. It handles user interaction coming from the View, and determines any changes that may need to be made to the Model. Vice versa, it can also manipulate data from the Model to give to the View, for rendering a final output.
- `Separation of Concerns` This refers to the idea that each module or layer in an application is only responsible for one thing and should not contain code that deals with other parts of the application. Separating concerns reduces code complexity by breaking a large application down into many smaller units of encapsulated functionality.

## Warm up
Answer the following questions on your own for 4 minutes, and take another couple minutes of minutes to discuss with a partner.

In the context of computer programming:

1. What is a pattern?
2. What patterns have you seen so far in your software career?
3. Why are patterns useful?

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
know what the business logic of the application is. The only logic the View should
be concerned with is how to display data, based on what kind of data it was
handed.

The **Controller** acts as the go-between for the Model and the View. It handles
any user interaction coming from the View, and determines any changes
that may need to be made to the Model. It can also manipulate data from the
Model to give to the View, for rendering a final output.

That might seem like a lot of word salad right now, but once you start looking
for this pattern, you will find it all over the place.

![MVC interactions](https://www.tutorialspoint.com/sencha_touch/images/mvc.jpg
"Data flow in MVC")

Take a look at [the docs on MDN](https://developer.mozilla.org/en-US/docs/Glossary/MVC) if you'd like to see it explained in another way.

### Ok, by why would I ever use it?

You've already been using it! Let's consider a super simple example:

```js
import React, { Component } from 'react';

function App() {
  const [count, setCount] = useSate(0);


   handleCounter = (event) => {
    const increment = event.target.name === '+' ? 1 : -1;
    setCount(count + increment)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={(e) => handleCounter(e)} name="-">-</ button>
      <button onClick={(e) => handleCounter(e)} name="+">+</button>
    </div>
  )
}

export default App;
```

Sure this is about as basic as it gets, but even this simple counter has all
three of our architectural components. Can you identify each one?

<section class="call-to-action">
### Turn and talk

* What part of the application above is the Model? 
* How about the Controller and the View? 
* How would your answer change if this was just a stateless component accepting props?
</section>

### Where will I see this?

This pattern is all over the place in software development. Consider a simple
webpage. What does the HTML represent? How about the CSS? What about the browser
itself?

### MVC Frameworks

Several frameworks that you're already familiar with use the MVC pattern, some
of the big names are:

* [Angular.js](https://angularjs.org/)
* [Ember.js](https://www.emberjs.com/)
* [Backbone.js](http://backbonejs.org/)
* [React.js (kind of)](https://reactjs.org/)

### Why should I bother with a framework?

Frameworks 'force' you to reap the benefits of the MVC design pattern. Having
some common, accepted standards for how to build out a project helps teams move
faster, and not have to make so many decisions along the way.

Additionally, frameworks are generally easier to test, and the tests that you
write will start to follow a natural pattern. Separation of concerns make this
possible.

### Are there other options if I don't like MVC?

There are, although they're less common in web application development. A
few MVP (Model View Presenter) frameworks that you may come across are:

* [CodeIgniter](https://codeigniter.com/)
* [Nette](https://nette.org/en/)
* [JavaFX](http://www.oracle.com/technetwork/java/javase/overview/javafx-overview-2158620.html)

### Wrapping it up

In small groups draw out the MVC of your most recent application. How does Redux
play into this? Work on this for 10 minutes, then we'll reconvene.

## References

[MVC
Architecture](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
[Understanding
MVC](https://blog.codinghorror.com/understanding-model-view-controller/)  
