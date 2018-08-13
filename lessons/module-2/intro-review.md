---
title: Intro Review
length: 180
tags: javascript
module: 2
---


<style type="text/css">
  .discuss{padding:20px;font-size:13px;background-color:#fefefe;border:1px solid #eee}
</style>


<div class="discuss">
  <h4>In Pairs/Threes</h4>
  <p>Discuss your prework. What was new and interesting? What was difficult or confusing? Did you get tripped up on anything during the tutorials, installations, etc.</p>
</div>

## Data Types Review

JavaScript has the following data types:

* Boolean
* Null
* Undefined
* Number
* String
* Symbol 
* Object

Data types allow us to declare what kind of information it is that we're working with. Programming languages provide us with data types so that we can more easily interact and manipulate them in a useful way. For example, if we declare a variable that's a Number, we can assume some common things we might want to do with that number:

* add/subtract/multiply/divide it with another
* round it up or down

When we're working with strings, we might want to do things like:

* uppercase/lowercase them
* grab a portion of the string to work with
* count how many characters it contains


### Loosley vs. Strongly Typed Languages

JavaScript is a dynamically or loosely typed language. This means that when we declare and assign a variable, it can be of any data type and it can be reassigned to a new data type at any time. Take a look at the following example:

```js
var moo = 'cow'; // moo is a string
moo = 2; // moo is a number
moo = true // moo is a boolean
```

This is an important and unique feature of JavaScript. It differs from many other languages, which are strongly typed, meaning a variable must be told what data type it represents. That data type cannot change after it's been declared. Here's an example of declaring a variable in Java, a strongly typed language:

```java
int moo = 20;
```

In this example, we first define that the variable we're about to declare is an integer, with `int`. Then we declare the name of the variable, and assign it an integer value. For the rest of it's lifetime, `moo` must now be an integer. We cannot convert it to a string or boolean later.

The dynamic nature of JavaScript makes it more flexible to work with variables, but also makes it much easier to introduce bugs into your application. Recognizing that variable data types can change will help you prevent bugs and catch them more easily when you do encounter an error.


### Primitives vs. Objects


#### Objects

We've previously learned about objects in a very basic sense. We might create an object to represent a collection of related information, stored as key-value pairs. For example, if we were creating an online order for a pizza, we might store this information in an object like so:

```js
var pizza = {
  toppings: ['cheese', 'mushrooms', 'peppers'],
  sauce: 'vodka',
  size: 'large',
  delivery: true
} 
```

But objects are actually quite a bit more than that. Read through the documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects) to identify what else is considered an object in JavaScript.


#### Primitives

All of JavaScript's data types besides objects are considered **primitives**. This means that they are immutable, and they have no methods, unlike objects. Read through the documentation on primitives [here](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) and then we'll discuss it further as a class.


#### Everything is an Object

We said that primitives have no methods. If a string is a primitive, then how can we call a method on it like so:

```js
var moo = 'mooooo cow';
moo.toUpperCase();
```

In this example, it looks like strings **do** have methods. The reason we can do this is that JavaScript provides a wrapper object around the primitive string so that we can call specific methods on it. Whenever we call a method on our primitive string, behind the scenes, JavaScript coerces this primitive into an object really quickly, then converts it back to a primitive when the operation is complete.

This provides some insight into why primitives are immutable. The string primitive itself never actually changes, but you can perform actions on it through the use of this wrapper object that allow you to create a modified value that you might want to work with. When JavaScript converts your string back into a primitive, the original value has not changed.

So even though we have these primitive data types, an important generalization we can make is that **everything in JavaScript is an object**.

If you read the comments on this blog post over at [CSS-Tricks](https://css-tricks.com/the-javascript-ah-ha-moment/) you'll see how this concept set a lightbulb off for many developers. It's ok if that moment isn't quite there yet for you, just file this information away in the back of your mind and it will come :) 


### ES5 vs ES6 Review

[ES6 Overview](http://frontend.turing.io/lessons/module-2/es5-vs-es6.html)

#### Main Themes:

* let and const (block scope)
* arrow functions (this)
* default parameters
* spread operator
* destructuring
* classes


### Further Reading

* [JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)