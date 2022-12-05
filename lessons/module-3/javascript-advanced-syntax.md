---
title: JavaScript Advanced Syntax
length: 1 hour
tags: javascript, es6
module: 3
---

JavaScript is full of ways to do the same task using different methods. In React especially, you'll see some more advanced syntax being used to make your life easier (harder at first to learn the new syntax, of course).

## Learning Goals
* See some new JavaScript syntax
* Get practice reading through docs and other resources

## Pass by Value - Pass by Reference

You might have seen examples like this before. Consider the following:

```js
let myPet = 'Scruffy';
let myOtherPet = myPet;

myOtherPet = 'Ferret Bueller';

console.log('myPet:', myPet);
console.log('myOtherPet:', myOtherPet);
```

<section class="call-to-action">
### What will Happen?

What will be logged to the console for `myPet` and `myOtherPet`?
</section>

Turns out that strings and other primitive data types are "pass by value." This means that the _value_ is passed while assigning to another variable. There is no connection from one variable to another, which is why changing the string in one variable does not affect the other.

Now consider this scenario:

```js
let myPet = {name: 'Scruffy', age: 5};
let myOtherPet = myPet;

myOtherPet.name = 'Ferret Bueller';

console.log('myPet:', myPet);
console.log('myOtherPet:', myOtherPet);
```

<section class="call-to-action">
### What will Happen?

What will be logged to the console for `myPet` and `myOtherPet`?
</section>

Now we can see where this thing called "pass by reference" gets us in trouble. We think we are modifying a copy of the first object, but in fact we are modifying a _reference_ to the original object. It's the same for arrays!

<section class="note">
### React Needs to Compare Objects

When we use `setState()`, React wants to **compare** what we pass in to the existing state. We can't do this if we modify the existing state directly with something like `this.state.myPet = {name: 'Freddy Cougar', age: 10}` because React will not necessarily know that anything in state has changed.
</section>

## New Arrays and Objects with the Spread Operator

So how do you make a copy of an array...easily? You could use `.concat()`, but the spread operator can make your code easier to write and easier to read once you learn the syntax.

<section class="call-to-action">
### Head to the Docs

Take 5 minutes to look at [this MDN doc page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_array_literals) and read through the **Spread in array literals** section.

After you're done reading, create an example where you make two separate arrays of any elements. Then combine the two arrays into a new array using the spread operator.
</section>

You've probably seen the spread operator used with `setState` and arrays in React. The spread operator also works with objects!

<section class="call-to-action">
### Head to the Docs Again!

Take 5 minutes to look at [this MDN doc page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) and read through the **Spread in object literals** section.

After you're done reading, create an example where you make two objects with a few key-value pairs and combine the two using the spread operator. What happens when there are two of the same keys in the objects?
</section>

## Object Destructuring

In React, people get tired of writing `this.props` over and over...this isn't the only place you will see destructuring, but it's common with `props`.

But again, these syntaxes are not specific to React. They're built in to the JavaScript language now. Let's try out a small exercise.

<section class="call-to-action">
### Head to the Docs Yet Again!

Take 5 minutes to look at [this MDN doc page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) and read through the **Object destructuring** section.

After you're done reading, work through this exercise:

```js
function combineNames(fullName) {
  // Your code here

  return `Your full name is ${first} ${last}.`
}

combineNames({first: "Alan", last: "Turing"})
```

Then create an example of your own where you utilize object destructuring!
</section>


## Object Property Value Shorthand

Yet again, another shortcut for our lazy developer selves. Start with this short article to learn about object property value shorthand...a long term for something simple.

<section class="call-to-action">
### Go Through this Article

Take 5 minutes to look at [article on Object Property Value Shorthand](https://attacomsian.com/blog/javascript-object-property-shorthand).
</section>


## Extra Resources

* [Immutability in React](https://blog.logrocket.com/immutability-in-react-ebe55253a1cc/)
* [All Features of ES6](http://es6-features.org/#Constants)
