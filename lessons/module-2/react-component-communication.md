---
title: React - Component Communication
tags: javascript, react
module: 2
---

# React III: Component Communication with Props and State

* Building the following app (give them printed out image, and a demo on the screen)
  * Highlight and name each of the components you think we'll need
  * Which of these components will need state? Which won't?


## The Components

We'll have four components:

* **App** - Our top-level wrapper component. Will contain state that gets passed down as props to render child components
* **TriviaList** - A child component of App. Will not contain state, will simply render a list of trivia questions.
* **Question** - A stateful component that will render a single question, and toggle the display of its answer.
* **Controls** - A child component of App. Will contain state for keeping track of the user input in form fields for filtering questions.

## State vs. Props



## Communication Flow

Our component heirarchy looks something like this:



Our App component has two children - TriviaList and Controls. This makes the TriviaList and Controls siblings. In React, sibling components can't directly speak to each other. For example, I can't update my question limit in the Controls component, and have it tell the TriviaList component to re-render itself with the appropriate amount of questions.

Instead, I have to communicate through their shared parent component. Both siblings need to know about the question limit:

* Controls must know about it so its text input can reflect that value
* TriviaList must know about it so it can render the correct amount of questions

The question limit is a data point that effects the way the app is rendered, and can change based on user interaction. **This makes it a good candidate for going into state.**

But where do we store that state? 

We're going to put it in our top-level App component.



* Data down, actions up
  * What is data?
  * What are actions?





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
* App.js: add filterQuestions method & pass it down as a prop, bind - explain again
 -->


## Further Reading

* [Why you need to call super](https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do)
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* [Binding](https://medium.freecodecamp.org/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36)
