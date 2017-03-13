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

### componentDidMount

## More About Props

### PropTypes

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
