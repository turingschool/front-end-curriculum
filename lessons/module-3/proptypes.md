---
title: "React: PropTypes"
length: 180
tags: react, ideabox, prop types
module: 3
---

## Learning Goals

* Implement `PropTypes` and explain why they are useful

## Vocabulary

- `PropTypes` a library we use to validate the data type of props coming into a component; allows for more specific, helpful error messages

<section class="note">
### Set Up

For this lesson, you're going to use [this repo](https://github.com/turingschool-examples/react-iii-ideabox) for practice. If you already have it cloned down, you just need to make sure you are on the main branch (`git checkout main`). If you don't have it cloned, follow these steps:

```bash
git clone git@github.com:turingschool-examples/react-iii-ideabox.git
cd react-iii-ideabox
npm i
npm start
```

You'll also need to get [the backend](https://github.com/turingschool-examples/ideabox-api) running. If you already have it cloned, just `cd` into the directory and run `node server.js`. Otherwise, follow these steps:
```bash
git clone https://github.com/turingschool-examples/ideabox-api.git ideabox-api
cd ideabox-api
npm i
node server.js
```
</section>

## PropTypes

PropTypes allow you to specify what type of props you are expecting in a certain component. This is also known as "typechecking".

Many people have moved to implementing languages like [TypeScript](https://www.typescriptlang.org/) or [Flow](https://flowtype.org/) for this exact purpose, but even without any additional technologies, the `prop-type` module lets you establish a safety net with very little effort.

Let's say you declare a component `<Card title={title}/>`. Here, your component is expecting a prop called `title` and you (probably) expect it to be a string. If you define that value within your `propTypes` object and it comes in as something else - say for example the API you are consuming has changed and now you have an array of strings - you will get a helpful warning message in your console.  

Previously, PropTypes was built into the React library itself, however it has since been extracted into its own module. You can install it like any other module.

```bash
$ npm install prop-types
```

In React, `PropTypes` are declared like this:

```jsx
// Card.js

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, title, description, removeIdea, isFavorite }) => {
  const favoriteClass = isFavorite ? 'favorite' : 'card';

  return (
    <section className={favoriteClass}>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string
};
```

The error you will see if the component gets something besides a string would look something like this:  

```
Warning: Failed prop type: Invalid prop `name` of type `array` supplied to `Card`, expected `string`.
```

Without using PropTypes, you would have seen a vague error when the Component failed to render. With PropTypes, we can see that the error was that we were receiving an array when we expected a string.

### Class propTypes

Check out a complete list of `propTypes` [here](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#react.proptypes). Note: The usage in this example is deprecated, but the list of propTypes is still valid. Checkout a modern usage example [here](https://react.dev/reference/react/Component#static-proptypes).

By default, all props specified within the `Class.propTypes` object will be considered optional. There are many instances where your component will not function correctly without that particular prop. To add a validation that will fire an error message if a prop does not show up at all, simply add `.isRequired` to the end of the propType declaration.  

```js
Card.propTypes = {
  title: PropTypes.string.isRequired
};
```

You can also be more generic - let's say you need a prop to come in but it doesn't matter what type it is as long as it's there. Instead of specifying a particular JS primitive you can use `.any`.

```js
Card.propTypes = {
  title: PropTypes.any.isRequired
};
```

<section class="call-to-action">
### Your Turn

Take a few minutes and finish writing up the rest of the propTypes for our `Card` component.  

</section>

<section class="call-to-action">
### Your Turn

Take the next 5 minutes to look up the following prop types and understand what they do. We will circle back to talk about
these particular methods when you are done.  

- `PropTypes.oneOf()`  
- `PropTypes.arrayOf()`  
- `PropTypes.objectOf()`  
- `PropTypes.shape()`

</section>

## DefaultProps

Just like when writing functions, React also allows us to provide a default value for props. [defaultProps](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#default-prop-values) let you ensure that a value will be passed through. This helps eliminate some of the incessant ternaries that either render the prop or an empty string, for instance.  Note: the above example uses a class component instead of a functional component, but the actual propTypes implementation can be the same. 

```jsx
const Card = ({ id, title, description, removeIdea, isFavorite }) => {
  const favoriteClass = isFavorite ? 'favorite' : 'card'

  return (
    <section className={favoriteClass}>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removeIdea: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  isFavorite: true
};
```  

<section class="note">
### Note

The `propTypes` typechecking validations fire AFTER `defaultProps` have been resolved. This allows for the default props to fill themselves in before any warning messages are thrown.
</section>

<section class="checks-for-understanding">
### Reflect

Take a few minutes to journal to write notes to each of these questions:

* What's the purpose of propTypes?
* When might you choose to use the `isRequired` property?
</section>

### Extra Reading on PropTypes

Now that we've talked about the most obvious use cases of propTypes to preemptively debug your code, read the following article - you are highly encouraged to take notes:  
- [Better Prop Validation](https://medium.com/@MoeSattler/better-prop-validation-in-react-cc83590d311f#.8z6wszfzn).  

