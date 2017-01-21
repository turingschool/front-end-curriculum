---
title: React Better Practices
module: 3
tags: React
---

## LifeCycle Methods: An Interactive Adventure

Take 5-10 minutes to read up on your assigned life cycle method. Documentation can be found [here](https://facebook.github.io/react/docs/react-component.html)

### Phase 1: Mounting  
1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

### Phase 2: Updating  
1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

### Phase 3: Removing  
5. componentWillUnmount()

## PropTypes

PropTypes allow you to specify what type of props you are expecting in a certain component. This is also known as "typechecking". Many people have moved to implementing languages like [TypeScript](https://www.typescriptlang.org/) or [Flow](https://flowtype.org/) for this exact purpose, but even without any additional technologies React's built in `propType` tools let you establish a safety net with very little effort.  

Let's say you declare a component `<Main title={this.state.title}/>`. Here, your component is expecting a prop called `title` and you expect it to be a string. If you define that value within your `propTypes` object and it comes in as something else -- say for example the API changed and now you have an array of strings -- you will get a helpful warning message in your console.  

In React, `propTypes` are declared like this:

```js
class Main extends Component  {
  render() {
    return(
      <p>Welcome, {this.props.name}</p>
    )
  }
}

Main.propTypes = {
  name: React.PropTypes.string
}
```

The error you will see if the component gets something besides a string would look something like this:  

```
Warning: Failed prop type: Invalid prop `jokes` of type `array` supplied to `Main`, expected `string`.
    in Main (created by App)
    in App
```

Check out a complete list of `propTypes` and examples of usage [here](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#react.proptypes).  

## DefaultProps

Just like when writing functions, React also allows us to provide a default value for props. [defaultProps](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#default-prop-values) let you ensure that a value will be passed through.

```js
class Main extends Component  {
  render() {
    return(
      <p>Welcome, {this.props.name}</p>
    )
  }
}

Main.defaultProps = {
  name: 'Batman'
}
```

## Constructor && Super

Let's talk about the first methods we see in a class based React component.  

```js
constructor() {
  super();
  this.state = {
    name: ''
  };
}
```

Per [the docs](https://facebook.github.io/react/docs/react-component.html#constructor), the `constructor()` method is called before the component is mounted onto the DOM. It is the first and only functional called automatically whenever a `class` based component is created.  

Within the constructor it's important to immediately call `super()` which allows `this` to have a defined value **within the constructor**. This does not mean that every class NEEDS a constructor. Rule of thumb is typically "if you have a constructor in your code, you must call super". In fact, browsers today will throw an error if you are using ES6 syntax and try to call a constructor method without `super()`.


If, in your constructor, you need access to that component's `props` you must pass these as an argument down through `super()`.

```js
constructor(props) {
  super(props);
  this.state = {
    name: props.initialName
  };
}
```

Without passing the props down into this method, `this.props` will return as `undefined` **within the `constructor` method**.  This is bad because it's the first function called when your component is instantiated as a class - knowing the context of `this` at this time is a big deal.   

Note that whether or not you have a constructor method has no effect on `this` or `this.props` within the `render()` method - the `render()` method sets its own context.  

(That being said, be wary of defining state using props within your constructor, this can cause parts of your app state to get out of sync and cause problems down the road.)

### Components and API Calls

A common question as we get into heavier React app is "Where exactly do I make my API calls?". React is great in that it's really flexible and technically "lets" you fire off a request in various places in your app. Let's talk about best practices.

First of all let's revisit a crucial concept of React: "Events Up, Data Down". In React you should build out your components with the intention of having "one source of truth". Meaning there is one place in your state where data lives and is updated.

This means that, in general, the most parent component should be in charge of fetching the data and keeping it updated to hand off to child components as needed.  

With that in mind, what's the difference between sticking your initial `fetch()` request in the `constructor()` vs in `componentDidMount()` vs `componentWillMount()`? Shockingly, this is a common conversation in the React realm.

In [this react conversation](https://github.com/reactjs/react-redux/issues/129#issuecomment-148420509) our buddy Mr. Abramov makes an interesting comment about the issue. More specifically, he says:

```
Posted Comment: My reaction to this is that perhaps I wish there were documentation somewhere about when constructor() and componentWillMount() should be used in React.

Dan's Answer: Just don't execute side effects in constructor. It's only for initializing state (and perhaps other variables). Don't make calls or change the state of your app from there.
```

It seems as though there is a solid consensus about NOT making an initial API call in the `constructor()`, but there's still a pretty healthy debate about sticking it in `componentWillMount()` vs `componentDidMount()`.


## Controlled Form Components
I highly recommend you breeze through [this blog post](http://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/) that goes into more details about Controlled Form Components.  

A controlled form component is a form element (like an input field, radio button, text box, etc) where the value is controlled by state as well as user interaction. The blog post referenced above defines them this way:

```
1. Controlled components have functions to govern the data going into them on every onChange event, rather than grabbing the data only once, e.g. when a user clicks a submit button. This 'governed' data is then saved to state (in this case, the parent/container component's state).  
2. Data displayed by a controlled component is received through props passed down from it's parent/container component.
```

Input tells the state what it should be updated to.

```
<input onChange={ e => this.setState({ searchTerm: e.target.value }) } />
```

Really, though, state should tell the input what it should be, making it something called a "Controlled Component".

```
<input
    value={ this.state.searchTerm }
    onChange={ e => this.setState({ searchTerm: e.target.value }) } />
```

Remove the `onChange()` line completely. What happens when you try to type into the input field?  

Command Z to get the `onChange()` back. What's happening here? Our `onChange()` event is triggering our state to update, which in turn is re-rendering our component and setting the value of our input field to whatever is now in state.

**// FOLLOW UP: WHY IS A CONTROLLED COMPONENT IMPORTANT?**

Imperative: Oh, user changed something, we need to go figure out what the value is.
Declarative: The value of the input is the value of the state.

More explicitly matches what is defined as the value of a component with what is defined in state, less of a question.


## A Few Additional Comments

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

If your component DOES need acess to a component-specific state, establish a class based component.

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
- [How and Where to Make AJAX Calls In React](https://daveceddia.com/ajax-requests-in-react/)
- [On Ajax Library Comparisons](http://andrewhfarmer.com/ajax-libraries/)  
