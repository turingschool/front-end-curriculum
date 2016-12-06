---
title: Introduction to JavaScript IV
tags: js, introduction, constructor functions, this
---
### Goals

By the end of this lesson, you will know/be able to:

* Understand what a constructor function is
<!-- * Introduction to ```this``` -->
* Understand whether you need an array or object data structure

<!-- pulled from second half of JS III lesson -->

# Object Review
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- When we assign a function as the value of a key inside an object, what do we call it?

# Objects: Constructor Notation

We feel pretty good about using literal notation to create an object. We know that all we really need is `{}`, but it's a good idea to assign an empty object to a variable to we can actually put things in it.

Now, let's talk about using _constructor notation_ to create an object. It's not too hard. Out of the box, javascript gives a function for making blank objects. Javascript also gives us a handy keyword called ```new```. When you put the two together, you can generate blank objects all day!

```javascript
var myLitObject = new Object()
myLitObject
```
And just like before, you can add/change properties and methods on this object, using dot and/or bracket notation just like you did before.

## Creating Many Objects

Sometimes, you want to create a bunch of objects that are similar. Object constructors can use a function as a _template_ to spit out little objects that you define. Everytime you call ```new``` on this constructor you get an instance of the object. Let's look at this:

```javascript
function Restaurant(name, tables, reservations) {
  this.name = name;
  this.tables = tables;
  this.reservations = reservations;
  this.checkAvailability = function () {
    return this.tables - this.reservations;
  }
}
```

Let's talk about what's going on here:

- A function called Restaurant is a template for creating new objects that represent restaurants
- The function has three parameters
- Each parameter sets the _value_ of a _property_ in the object
- Each object created will utilize the same method for checking availability
- The ```this``` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function creates
- Different from an object literal, each statement in a constructor object ends in a semicolon instead of a comma
- Constructor functions begin w/ capital letters, unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. Will it still work if you don't use capitals? YES.

## Oh jeeze...```this``` again
The keyword ```this``` is commonly used inside functions and objects. It always refers to one object, usually the object in which the function operates. In our Restaurant constructor function, ```this``` refers to the restaurant object created when the function runs. Let's look at this real quick with an abbreviated version of our Restaurant constructor:

```javascript
// Declare a constructor function for making restaurant objects that accepts a parameter of "name".
function Restaurant(name) {
  this.name = name;
}

// Make two restaurant objects, one named "Micis" and the other named "Chilis"
var firstRest = new Restaurant("Micis")
var secondRest = new Restaurant("Chilis")

// Get the name of the firstRest and the secondRest
firstRest.name
secondRest.name
```

So what's all the fuss about ```this``` anyway? Seems pretty straightforward. Well, turns out, the value of ```this``` changes in different situations. Let's look at those situations:

```javascript
// GLOBAL SCOPE FUNCTION - top of script, not inside another function or inside an object. The default object in this context is the WINDOW object.
function Boom() {
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [height, width]
}

// GLOBAL VARIABLES - global variables become properties of the window in the browser object. When a function is in the global context, you can access global variables using the window object.
var width = 600;
var shape = {width: 300}
var showWidth = function() {
  console.log(this.width);
}
showWidth();

// METHOD OF AN OBJECT - when does a function become a method? When it is defined INSIDE an object. In a method, "THIS" refers to the containing object.
var shape = {
  width: 600,
  height: 400,
  getArea: function() {
    return this.width * this.height;
  }
};

// FUNCTION EXPRESSION AS A METHOD - what does that mean? An expression returns a single value. A function can be an expression. If you assign that function expression to a property on an object, it is then called a method.

// Let's declare a global variable of width and assign the value of 600
var width = 600;

// Let's declare a global variable of shape and assign an object to it with a property of width that stores a value of 300
var shape = {width: 300};

// Let's create a that same function we did before, where we show an object's width by logging "this.width" to the console.
var showWidth = function() {
  console.log(this.width);
}

// Let's take that global function of 'showWidth' and assign it to our global variable shape that holds an object. Now shape has how many properties/methods and what are they?
shape.getWidth = showWidth;

// Let's ask shape what it's width is, and see that it no longer refers to a global context, because it is now a method scoped to a specific object, so "this" refers to that containing object.
shape.getWidth();
```

## So WHY this Prototype Business...???
All JavaScript objects inherit the properties and methods from their prototype. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. ```null```, by definition, has no prototype, and acts as the final link in this _prototype chain_. There is nothing special about a prototype object. There are no special-out-of-the-box methods or magic to a prototype. Let's look:

```javascript
// Let's make a constructor function
function DumbObjectMaker() {}

// Let's ask myDumbObject for the value of it's prototype
function myDumbObject() {}
myDumbObject.prototype
```

But why do this? Because fast. Because flexible. Because separation of concerns. Constructors in javascript can be any function and they are responsible for creating new instances. A prototype in javascript can be any object and they are responsible for defining the behavior of instances. The behavior is defined by modifying the prototype directly, e.g. by adding functions to it as properties. You basically use prototype to define your object's instance methods.

```javascript
// Grid constructor whose only job is to create instances of grids all day. Takes width and height parameters, so it can make different sizes of grids all day.
function Grid(width, height) {
  this.width = width;
  this.height = height;
}

Grid.prototype.addBlock(block) = function() {
  // some block manipulation/adding of block code here
}

Grid.prototype.grow(num1, num2) = function() {
  // some parameter manipulation/assignment and growing of grid code here
}
```

## Which Data Structure?
The data you are required to represent is getting increasingly complex. You need several objects at one time, which can be stored in arrays or other objects. When deciding on an approach, you must consider how the data will be used. When the order of objects is important, they should be stored in an array. When you want to access objects using their name, they work well as properties of another object (because you would not need to iterate through all objects like in an array).

#### Objects in an Array

```javascript
var people = [
  {name: 'Mike', age: 65, active: true},
  {name: 'Becca', age: 23, active: false},
  {name: 'Tony', age: 40, active: false},
  {name: 'Penelope', age: 23, active: true}
]
people[1].name
people[3].age
people[2].active
```

#### Objects as Properties

```javascript
var people = {
  Mike: {age: 65, active: true},
  Becca: {age: 23, active: false},
  Tony: {age: 40, active: false},
  Penelope: {age: 23, active: true}
}
people.Mike.age
people.Tony.active
people.Becca.age
```
