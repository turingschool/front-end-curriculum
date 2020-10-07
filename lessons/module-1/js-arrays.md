---
title: "JS: Arrays"
length: 60
tags: javascript, foundation, arrays
---

## Learning Goals

* Understand array literals  
* Add and change values to arrays via their indices  

## Vocabulary

- `Literal`  A way of declaring a data structure and its values at the same time
- `Array` Used to store a collection of data items/multiple values under a single variable name
- `Element` A single item stored in an array. An element can be of any data type.
- `Bracket Notation` How we access individual elements of an array. Either to
  express the element, or assign a new element.

<section class="call-to-action">
### Warm Up

With a partner
* Explore [this repl](https://repl.it/@letakeane/03-arrays#index.js), questions 1 through 4.
* If you encounter a prompt that you are not sure how to solve - come back to this lesson, or do some googlin'.
* If you have extra time,  attempt the 5th *spicy* prompt.
* Make note of any questions that come up, or any clarifications you need. We'll talk through these when we come back!
* Remember - the goal is not completion. The goal is understanding.
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
### Turn and Talk

With a partner:  
- Consider social media applications that you use (or other favorite websites).
- What are some examples of related data that the application might store in an array?
</section>

## Accessing Values in Arrays

Each value in an array is automatically given a number called an **index**. This index can be used to access a particular value in any given array.

Indices begin at 0 and order incrementally. So in the following `colors` example, the following is true:

- color white has an index of 0
- color black has an index of 1
- color pink has an index of 2

You can change and access values in an array by using their index. Let's walk through it in the console:

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
### Paired Practice

In the console:  
- create an array of cars
- change the values within the array
- add a new car to the array
- identify the value of the 3rd element of the array
</section>

## Getting Multiple Values from Functions

We learned this morning that a single function can only return a single value. There will be times when you want to send a list of values over. We are able to do this by returning an array. Because an array is a complex data type, it has the ability to "wrap up" many values into one value, it doesn't break the rule of "a single function can only return a single value".

```javascript
function combineNames(name1, name2, name3) {
  var names = [name1, name2, name3];
  return names;
}

var listOfNames = combineNames("Luna", "Bey", "Sunny");

listOfNames;
// => ["Luna", "Bey", "Sunny"]

var modOneInstructors = combineNames("Scott", "Kayla", "Hannah");

modOneInstructors;
// => ["Scott", "Kayla", "Hannah"]

```

<section class="call-to-action">
### Final Practice: Access and Update

Start by forking [this repl.it](https://repl.it/@HannahHudson/IntroArrayPractice). Complete each exercise listed in the comments below the provided array literal. Write the code with a given direction directly below it, and **do not delete code as you go**.
</section>

### Dig Deeper

* [JS Style Guide](https://github.com/turingschool-examples/javascript)
* [Seven JS Quirks I Wish I'd Known About](http://developer.telerik.com/featured/seven-javascript-quirks-i-wish-id-known-about/#expdec)  
