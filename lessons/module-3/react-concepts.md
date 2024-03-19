---
title: Important React Concepts
module: 3
---

## Agenda

- Discuss making API calls in React, and where this should happen
- Learn about Controlled Form Components
- Discuss the differences between functional and stateful components

## Learning Goals

- Know where to make API calls in React
- Be able to explain what characteristics a controlled form has
- Know the difference between a functional and class based component, as well as
  when you would use each kind

## Vocab

- componentDidMount
- data down
- actions up
- controlled form
- functional component
- class component

## Important React Concepts

You will hear that 'React is a library not a framework' because React tries to
be unopinionated about how you structure your React project. However that
doesn't mean there aren't common patterns and concepts that should be followed.
We'll discuss some of the most important pieces below.

### Components and API Calls

A common question as we get into heavier React app is "Where exactly do I make my API calls?". React is great in that it's really flexible and technically "lets" you fire off a request in various places in your app. Let's talk about best practices.

First of all let's revisit a crucial concept of React: "Data Down, Actions/Events Up". In React you should build out your components with the intention of having "one source of truth". Meaning there is one place in your state where data lives and is updated.

This means that, in general, the top most parent component (highest in component hierarchy) should be in charge of fetching the data and keeping it updated to hand off to child components as needed.  

There is a solid consensus about NOT making an initial API call in the `constructor()`, and `componentWillMount()` will be deprecated with React 17... so, we are left with `componentDidMount()` as our best option. 

**One Last Thing**  
A final comment about `componentDidMount()`. From [this stack overflow post](http://stackoverflow.com/questions/36049493/when-exactly-is-componentdidmount-fired), there's another interesting note about our most popular lifecycle method.  

```md
Inside a react component tree, `componentDidMount()` is fired after **all children components** have also been mounted. This means, that any child component's `componentDidMount()` is fired before its parent has been mounted.
```

### Controlled Form Components
I highly recommend you breeze through [this blog post](http://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/) that goes into awesome detail about controlled form components.

A controlled form component is a form element (like an input field, radio button, text box, etc) where the value is being told what to be through props or state, as well as user interaction. The blog post referenced above defines them this way:

```
1. Controlled components have functions to govern the data going into them on every onChange event, rather than grabbing the data only once, e.g. when a user clicks a submit button. This 'governed' data is then saved to state (in this case, the parent/container component's state).  
2. Data displayed by a controlled component is received through props passed down from it's parent/container component.
```

It's like a big circle of information love. The initial value is set by props or state, then when the user interacts with the form element (say, types something into the input field) the `onChange` event fires and updates state, which updates what the value of that form element is.  

Without this, the input field is telling state what to be and the circle ends. A common way to write an uncontrolled input element might look like this:   

```js
<input onChange={ e => this.setState({ searchTerm: e.target.value }) } />
```

Really, though, state should tell the input what it should be because of the big "one source of truth" situation.

```js
<input
    value={ this.state.searchTerm }
    onChange={ e => this.setState({ searchTerm: e.target.value }) } />
```

Our `onChange()` event is triggering our state to update, which in turn is re-rendering our component and setting the value of our input field to whatever is now in state.

This is important because it lets us declaratively tell each component what values it needs to know about instead of the other way around.  

Imperative: Oh, user changed something, we need to go figure out what the value is...wait...something else changed...figure that out too...wait...does anyone know what this value should be right now??
Declarative: The value of the input matches the value of that piece of state. Period.

### Props: Functional vs Class Based Components

The first question you should ask yourself is: "Do I need this component to know about state directly?"

If not, if you can pass props to a component and avoid instantiating an entire React class for no reason, then you're looking for a functional component.

```js
const MyComponent = (props) => {
  return (
    <p>Hello, {props.name}</p>
  )
}
```

Notice that in a functional component, props are provided as an argument to the function.

If your component DOES need access to a component-specific state, establish a class based component.

```js
class MyComponent extends Component {
  constructor() {
    super()
    this.state = {showSettings: false}
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        { this.state.showSettings ? <Settings /> : <Main /> }
      </div>
    );
  }
}
```
Notice that in state based components props are available anywhere using `this.props`.  

## Resources  
- [How to Fetch Data in React](https://www.robinwieruch.de/react-fetching-data/)
- [Top JavaScript Libraries for Making Ajax Calls](https://dzone.com/articles/top-javascript-libraries-for-making-ajax-calls)  
