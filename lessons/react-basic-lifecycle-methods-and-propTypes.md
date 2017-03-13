---
title: React: Basic Lifecycle Methods and propTypes
module: 3
---

## Basic React Lifecycle Methods

### Constructor && Super

Let's talk about the first methods we see in a class based React component.  

```js
constructor() {
  super();
  this.state = {
    name: ''
  };
}
```

Per [the docs](https://facebook.github.io/react/docs/react-component.html#constructor), the `constructor()` method is called before the component is mounted onto the DOM. It is the first and only function called automatically whenever a `class` based component is created.  

Within the constructor it's important to immediately call `super()`, which allows `this` to have a defined value **within the constructor**. This does not mean that every class NEEDS a constructor. Rule of thumb is typically "if you have a constructor in your code, you must call super". In fact, browsers today will throw an error if you are using ES6 syntax and try to call a constructor method without `super()`.

Let's take a minute to fire up a react component and watch the errors fire as we build out a class based component. Start a blank react project - feel free to use `create-react-app` for this lesson.  

You'll notice that React has some incredibly verbose and helpful error messages. Make sure you take time to read these as you build out projects this mod, they will almost always point you in the direction of happiness.  

### What is this `super` business?  

Try this in your component and check out the error message:

```js
constructor(){
  console.log(this);
}
```

You should see something like this:  

```js
Failed to compile.

Error in ./src/Card.js
Syntax error: 'this' is not allowed before super()

`
  3 | export default class Card extends Component {
  4 |   constructor(){
> 5 |     console.log(this);
    |                 ^
  6 |   }
  7 |
  8 |   render () {
`
```

If, in your constructor, you need access to that component's `props` you must pass these as an argument down through `super()`.

```js
constructor(props) {
  super(props);
  this.state = {
    name: props.initialName
  };
}
```

Without passing the props down into this method, `this.props` will return as `undefined` **within the `constructor` method**.  This is bad because it's the first function called when your component is instantiated as a class - knowing the context of `this` from the get go can be a big deal.   

Note that whether or not you have a constructor method has no effect on `this` or `this.props` within the `render()` method - the `render()` method sets its own context.  

(That being said, be wary of defining state using props within your constructor, this can cause parts of your app state to get out of sync and cause problems down the road.)

### componentDidMount

Per the docs, `componentDidMount()` is invoked "immediately after a component is mounted." Any functionality that is dependent on existing DOM nodes should live here. For example, let's say you want to set state which affects a `<p>` tag, you need to wait until that `<p>` tag exists before you can throw any additional information into it.

This is also the go-to location to fire off an API call or network request.  

**NOTE:** Setting state in this method **WILL** trigger a re-render.

## More About Props

### PropTypes

PropTypes allow you to specify what type of props you are expecting in a certain component. This is also known as "typechecking". Many people have moved to implementing languages like [TypeScript](https://www.typescriptlang.org/) or [Flow](https://flowtype.org/) for this exact purpose, but even without any additional technologies, React's built in `propType` tools let you establish a safety net with very little effort.  

Let's say you declare a component `<Main title={this.state.title}/>`. Here, your component is expecting a prop called `title` and you (probably) expect it to be a string. If you define that value within your `propTypes` object and it comes in as something else -- say for example the API changed and now you have an array of strings -- you will get a helpful warning message in your console.  

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
Warning: Failed prop type: Invalid prop `name` of type `array` supplied to `Main`, expected `string`.
    in Main (created by App)
    in App
```

Check out a complete list of `propTypes` and examples of usage [here](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#react.proptypes).  

By default, all props specified within the `Class.propTypes` object will be considered optional. There are many instances where your component will not function correctly without that particular prop. To add a validation that will fire an error message if a prop does not show up at all, simply add `.isRequired` to the end of the propType delcaration.  


```js
Main.propTypes = {
  name: React.PropTypes.string.isRequired
}
```

You can also be more generic - let's say you need a prop to come in but it doesn't matter what type it is as long as it's there. Instead of specifying a particular JS primitive you can use `.any`.

```js
Main.propTypes = {
  name: React.PropTypes.any.isRequired
}
```


### Your Turn

Take the next 5 minutes to look up the following prop types and understand what they do. We will circle back to talk about these particular methods when you are done.  

- `React.PropTypes.oneOf()`  
- `React.PropTypes.arrayOf()`  
- `React.PropTypes.objectOf()`  
- `React.PropTypes.shape()`  


## DefaultProps

Just like when writing functions, React also allows us to provide a default value for props. [defaultProps](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#default-prop-values) let you ensure that a value will be passed through. This helps eliminate some of the incessant ternaries that either render the prop or an empty string, for instance.  

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

**Note:** The `propTypes` typechecking validations fire AFTER `defaultProps` have been resolved. This allows for the default props to fill themselves in before any warning messages are thrown.  


### Your Turn  

Now that we've talked about the most obvious use cases of propTypes to preemptively debug your code, read the following two articles - you are highly encouraged to take notes:  
- [Better Prop Validation](https://medium.com/@MoeSattler/better-prop-validation-in-react-cc83590d311f#.8z6wszfzn).  
- [Writing A Good React Component](https://thoughts.travelperk.com/writing-a-good-react-component-59624ed40b8e#.64wzjk4qc)  

We will circle back to review the main points of these articles together.  

When you are done, get with your project partner (if you have one) and implement propTypes and defaultProps into your current project.  
