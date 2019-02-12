---
title: React - Component Communication
tags: javascript, react
module: 2
---

### Lesson goals

By the end of this lesson, students should be able to:

* Understand 'Data Down, Actions Up' as a pattern for communication in React
* Understand and implement strategies for determining what components should 'own' state

### Warm Up

* What are components in React? What are the benefits of using components?
* What is the difference between state and props in React?
* When should you make a component stateful?

<!-- Review from previous lessons on React
* functions or an extended ES6 class; return one, single JSX element (remember, functions can only return one thing!); there are two types of components: stateless and stateful; modular and reuseability
* props passed as object with key/value pairs; state holds data that represents the state; props immutable, state mutable;
* Most of your components should simply take some data from props and render it. However, sometimes you need to respond to user input, a server request or the passage of time. For this you use state.
You might conceptualize state as private to that component.-->

## Structuring React Applications

As a newcomer to React, it's not initially clear which components should hold state or how a React application should be structured (especially when there are multiple components dealing with the same state).  After you've looked at the UI to plan your component hierarchy and you've built out the basic, static version of your application, you'll want to follow these steps to figure out _where_ each piece of state in your application should live:

1. Identify every component that renders something based on that state.
2.  Find a common owner component (a single component above all the components that need the state in the hierarchy).
3. Either the common owner or another component higher up in the hierarchy should own the state.
4. If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

___

Today we are going to build a Trivia application:

![React Trivia App](/assets/images/lessons/react-communication/trivia-app.png)

*Trivia App is an application for asking (and showing answers) for Trivia Questions. Users are able to filter how many questions are shown/rendered through the use of an input and button*

## The Components

We'll have four components:

* **App** - Our top-level wrapper component. Will contain state (our triviaQuestions) that will be passed down as props to render child components
* **TriviaList** - A child component of App. We want app to render a list of trivia questions.
<!-- Will not have state -->
* **Question** - A component that will render a single question, _and_ toggle the display of its answer.
<!-- Will have state -->
* **Controls** - A child component of App. We want this to keep track of the user input in form fields for filtering questions.
<!-- Will have state -->

#### Turn and Talk 
* Based on what we are looking to do, which of these components will need state? Which won't? Why?

## Communication Flow

Now that we have decided what components will have state, let's talk about our component hierarchy a bit more:

- App has two children - `TriviaList` and `Controls` (making them siblings)
- In React, siblings cannot communicate directly to each other.
<!--  For example, I can't update my question limit in the Controls component, and have it tell the TriviaList component to re-render itself with the appropriate amount of questions. -->
- Communication happens through the shared parent component.

Both siblings need to know about the question limit - but for different reasons:

* Controls must know about it so its text input can reflect that value
* TriviaList must know about it so it can render the correct amount of questions

The question limit is a data point that affects the way the application is rendered and can change based on user interaction **This makes it a good candidate for going into state.** But where do we store that state? 

<!-- We're going to put it in our top-level App component. --> 

## Data Down, Actions Up

This is a term that you will hear a lot when you look into React - but what does it mean, really? It is a way to describe the simplified, basic pattern of how React components communicate with one another.

Although there are several different strategies for making communication happen between React components, we will be focusing on 3 today:

### Parent-to-Child

![Parent-to-Child](/assets/images/lessons/react-communication/parent-to-child.png)

This is your `Data Down`. `Props` allow you to send data from a parent to a child and are the most common way to transfer information between components. That `data` can be anything from state to methods that are passed down so they are accessible to child components.

### Child-to-Parent

![Child-to-Parent](/assets/images/lessons/react-communication/child-to-parent.png)

This is your `Actions Up`. This allows us to send data from a child to a parent. Generally, this is a two stop process:

Callback functions - The parent will pass the child a function as a prop:

  ```js
  <MyChild myFunc={this.handleChildFunc} />
  ```

  The child would then call the function to communicate with its parent:

  ```js
  this.props.myFunc(newData)
  ```


### Sibling-to-Sibling

![Sibling-to-sibling](/assets/images/lessons/react-communication/sibling-to-sibling.png)
  
As we discussed earlier, communicating from sibling to sibling (in instances where two components may share a piece of state) requires a combination of using `Data Up, Actions Down` through a shared parent component.

#### Turn and Talk

In your own words, explain the term `Data Down, Actions Up` 

### Component Communication Flow

Now that we are familiar with the different stateless and stateful components (as well as how they communicate) let's take a look at how `Data Down, Actions Up` is implemented in React.

With this example, we will be implementing some functionality for a simple application that take's a user's name and then displays a greeting on screen. Our application consists of 3 components: `App`, `Greeting`, and `Login`. 

To start, let's follow the 4 stop process that we covered at the beginning of the lesson:
1. Identify every component that renders something based on that state.
  _We know that `Greeting` will render our Villian's name. We also know that `Login` will be rendering a login form to get our user's information._
2.  Find a common owner component (a single component above all the components that need the state in the hierarchy).
  _The common component between these two is `App`._
3. Either the common owner or another component higher up in the hierarchy should own the state.
  _This is a TEENY TINY application... so `App` will own state in this example.
4. If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
  _Found the component - we're good_


Given this, we know that are needing to communicate from sibling to sibling. `Login` will get the name that we need and will pass that information up to `App` via the action of a button click. From there, `App` will pass the data (our user's name) down to `Greeting` to be displayed.

```jsx
class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };

    this.setUserName = this.setUserName.bind(this);
  }

  setUserName(name) {
    this.setState({ userName: name });
  };

  render() {
    return (
      <div>
        <Login setUserName={this.setUserName} />
        <Greeting
          villianName={this.state.userName}
          compliment="Your hair looks great today"
        />
      </div>
    );
  }
}
```

Above, we can see our "data" in the form of our method `setUserName` being passed down to `Login`. You'll notice that we are binding `this` in our constructor. This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as when we are passing this method down, you should bind that method.


```jsx
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setUserName(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Please Log In</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

```

Now `Login` has access a way to communicate to `App` via `this.props.setUserName`. This is not to be confused with the `setUserName` method in our class of `Login` - which is a method that is triggered on the click of our `button` element. You'll also notice a different syntax for our methods in `Login`. This syntax (called `class fields`) is *experimental* and is enabled by default in Create React App. Using this particular syntax will also ensure that the value of `this` is bound.

Generally, you should be binding in the constructor or using the `class fields syntax` for avoiding performance issues.


```jsx
const Greeting = ({villianName, compliment}) => {
  return (
    <div>
      <h2>Hello {villianName}</h2>
      <p>{compliment}</p>
    </div>
  )
}
```

After `Login` passes our information (in the form of a user's name) back to `App`, we will set the updated userName to state. Calling `setState` will trigger a re-render, allowing us to pass the updated data to `Greeting`

#### Turn and Talk

Turn to the person next to you and take turns walking through this data flow.


# Exercise: React Trivia App

* Clone down [this](https://github.com/turingschool-examples/react-trivia) repo, and `cd` into it.

* Run: `npm install`

* Start your server with `npm start`

## Phase 1: App & TriviaList
- Update state in `App` to include `triviaQuestions`
- Render `TriviaList` component - passing questions down as props
- Import and implement the `Question` component in `TriviaList` by following the psuedocode. You should see a lot of empty LIs:

![Empty list items](/assets/images/lessons/react-communication/empty-listitems.png)

## Phase 2: Question
- Display the title of question in `Question`
- Initialize state in `Question` according to pseudocode in file
- Follow psuedocode to implement `toggleAnswer` method  
*HINT 1: Check out [the docs](https://reactjs.org/docs/handling-events.html) on how to handle Events in React*  
*HINT 2: Generally, if you refer to a method without () after it, you should bind that method!*
- Implement conditional rendering with our answer when `showAnswer` is true 
  *HINT: Check out [the docs](https://reactjs.org/docs/conditional-rendering.html) to see all the ways to conditionally render. Use a `span` if you choose render inline*
- **BONUS** Implement conditional in psuedocode that updates our icon based on state

## Phase 3: Controls
- Import `Controls` into `App` and create a `Controls` component by following psuedocode in file. Remember to render `Controls` within `App`
- Remember that `App` will serve as the parent component between `Controls` and `TriviaList` to handle the state of how many questions to filter. How do we get these siblings to communicate with one another? 

  * `Controls` takes input from user
  * Updates parent of how many questions to filter
  * Parent updates `TriviaList` to display the correct info

*HINTS: Check to see if your state is updating as expected with React dev tools. Also, if you run into trouble... remember that you are ultimately still dealing with a `form` element in your Controls component. What is the default behavior of forms? When we pull a value from an input, what data type are we dealing with? #MOD1*

## Phase 4: Extension!!!
Now that you have successfully created a basic app that showcases component communication in React, let's add to what we have
  - Update your `Controls` component to include a `select` element that allows the user to also filter for the category of triviaQuestions . Use the `categories` that are being imported in line 3 in `App.js`

_Completed version of Phases 1-3 can be found on the branch `complete-morning`_

<!-- ## Code Steps
* App.js: Import triviaList
* App.js: add triviaList to state
* App.js: render TriviaList component with questions prop
* TriviaList.js: create component with Question UL
* Question.js: create component LI/P/SPAN
* Question.js: add onClick and toggleAnswer - explain binding
* App.js: import Controls component
* App.js: update state with limit/category
* App.js: render controls component
* Controls.js: create controls component
* Controls.js: add button with onClick
* App.js: add filterQuestions method & pass it down as a prop, bind - explain again-->

### Summary

- What does `Data Down, Actions Up?` mean?
- Describe how siblings communicate in React
- Why did we have to worry about binding within our application?

## Further Reading

* [Why you need to call super](https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do)
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* [Binding](https://medium.freecodecamp.org/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36)
