---
title: "JS: Intro to Arrays"
length: 60
tags: javascript, foundation, arrays
---

## Learning Goals

* Understand array literals (arrays)
* Add and change values to arrays via their indices  

## Vocabulary

- `Literal`  A way of declaring a data structure and its values at the same time
- `Array` Used to store a collection of data items/multiple values under a single variable name
- `Element` A single item stored in an array. An element can be of any data type.
- `Bracket Notation` How we access individual elements of an array. Either to
  express the element, or assign a new element.

<section class="call-to-action">
### Warm Up

* Add your responses to the prompts on [this JamBoard](https://jamboard.google.com/d/1YTS-L4g4FT87J-SQbHgZQQl3DATxgiNx24GnFJHT0Cg/edit?usp=sharing). You don't have to answer every prompt!
</section>

## Arrays

An array is a complex data type. Instead of storing just one value, it stores an ordered list of values. Each value is referred to as an `element`. You should consider using an array whenever you are working with a collection of values of the same data type, or values that are related to one another.

An array is capable of holding any type of data (even objects and other arrays!), but generally each array should hold just one type of data. There is not a certain number of elements an array can or should contain:

```js
// Good practice - each array only holds one type of data
var rainbowColors = ['Red', 'Orange', 'Yellow'];
var lotteryNumbers = [33, 72, 64, 18, 17, 85];

var denver = "Denver, CO";
var raleigh = "Raleigh, NC";
var atlanta = "Atlanta, GA";

var locations = [denver, raleigh, atlanta];


// Bad practice - this array holds a mix of data types
var randomData = ['hello', true, 100, denver, [1, 2, 3]];
```
You can create an array just like you would any other variable, using the `var` keyword followed by the name of your array. The values are assigned to the array inside a pair of square brackets (`[]`), and each element is comma-separated. The above technique for creating an array is known as an **array literal**.

You can also write an array with values on separate lines, like so:

```javascript
var modOneLessons = [
  'JS: Data Types, Variables, Conditionals',
  'JS: Intro to Functions',
  'JS: Intro to Unit Testing'
];
```
This is good practice when you have lengthy content!

<section class="call-to-action">
### Stop and Think

- Consider social media applications that you use (or other favorite websites).
- What are some examples of related data that the application might store in an array?
</section>

## Accessing Values in Arrays

Each value in an array is automatically given a number called an **index**. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the following `colors` example, the following is true:

- color white has an index of 0
- color black has an index of 1
- color pink has an index of 2

You can change and access values in an array by using their index. Walk through the following in the console or in a repl:

```javascript
// Create the array
var colors = ['white', 'black', 'pink'];

// Check the value of colors
colors;

// Update the third value in the array
colors[2] = 'blue';

// Check the value of colors
colors;

// Get the value of the 1st element
colors[0];
```

<section class="call-to-action">
### Practice!

* Fork [this repl](https://replit.com/@HannahHudson/03-arrays#index.js) and complete the prompts.
</section>

## Accessing and Updating Nested Data

Often, arrays and objects will be used in tandem to hold data. We can dig into data by putting together what we've learned about accessing objects and arrays. Look below for an example:

```javascript
var instructors = [
  { name: 'Will', program: 'FE', modsTaught: [1, 2, 3, 4] },
  { name: 'Hannah', program: 'FE', modsTaught: [1, 2] },
  { name: 'Heather', program: 'FE', modsTaught: [1] },
  { name: 'Ian', program: 'BE', modsTaught: [1, 2, 3, 4] }
];

instructors[0];
// { name: 'Will', program: 'FE', modsTaught: [ 1, 2, 3, 4 ] }

instructors[1].name;
// 'Hannah'

instructors[2].modsTaught[0];
// 1

instructors[1].program = 'BE';
instructors[1];
// { name: 'Hannah', program: 'BE', modsTaught: [ 1, 2 ] }
```

<section class="call-to-action">
### More Practice!

Start by forking [this repl](https://replit.com/@kaylaewood/NestedDataPractice#index.js) and then complete all the exercises.
</section>

### Dig Deeper

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [Seven JS Quirks I Wish I'd Known About](http://developer.telerik.com/featured/seven-javascript-quirks-i-wish-id-known-about/#expdec)  
