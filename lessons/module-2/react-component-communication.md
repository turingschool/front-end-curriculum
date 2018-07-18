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
