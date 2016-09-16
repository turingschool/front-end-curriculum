---
title: Foundations JS - III
tags: js, introduction, foundation, variables
---
### Goals

By the end of this lesson, you will know/be able to:

* Declare objects using literal and constructor notation
* Understand whether you need an array or object data structure
* Understand the value of leveraging prototype methods in JS
* Understand what ```this``` is

# Objects
Objects are a collection of key-value pairs. A _key_ is just a _name_ that holds a value. So basically, you know this already. A key-value pair in an object is essentially a variable. That variable is called a _property_ of the object. When we assign a function as the value to one of our keys, we call that function a _method_. Let's look at this:

```javascript
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
}
```
The ```school``` object has four properties:

- ```name: 'International School of Denver'```
- ```capacity: 250```
- ```languageImmersion: true```
- ```currentStudents: 75```

The ```school``` object has one method:

- ```checkOpenspots: function(){ return this.capacity - this.currentStudents; }```

There are several ways to create an object, and the easiset and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var myDumbObjectIsEmpty = {}```

There are two ways to access the properties or methods of an object: 

- _Dot Notation_:
```javascript
 var schoolName = school.name
 var schoolCapacity = school.capacity
```
- _Brackets_: 
```javascript
var schoolName = school['name']
var schoolCapacity = school['capacity']
``` 

Let's goof off in the console a bit:

```javascript
// Create an object in honor of @jhunbug
var myLitObject = {
  coolFactor: "bananas"
}

// 1. Get the value of myLitObject
// 2. Get the value of coolFactor
// 3. Add a new property
// 4. Get the value of that new property, but utilize a different notation from step #2
// 5. Change the value of coolFactor
// 6. Get the value of myLitObject
// 7. Create a method on myLitOjbect that logs "Skateboarding is fun" to the console
// 8. Get the value of myLitObject, confirm that your method is there
```
Great, we feel pretty good about literal notation to create an object. Let's talk about _constructor notation_ to create an object. It's not too hard. Out of the box, javascript gives a function for making blank objects. Javascript also gives us a handy keyword called ```new```. When you put the two together, you can generate blank objects all day!

```javascript
var myLitObject = new Object()
myLitObject
```
And just like before, you can add/change properties and methods on this object, using dot and/or bracket notation just like you did before.

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

What is happening up ^^ there? 
- A function called Restaurant is a template for creating new objects that represent restaurants
- The function has three parameters
- Each parameter sets the _value_ of a _property_ in the object
- Each object created will utilize the same method for checking availability
- The ```this``` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function creates
- Different from an object literal, each statement in a constructor object ends in a semicolon instead of a comma
- Constructor functions begin w/ capital letters, unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. Will it still work if you don't use capitals? YES.  

## Oh jeeze...```this``` (It's just a keyword)
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

// GLOBAL VARIABLES - global variables become properties of the big window in the browser sky object. When a function is in the global context, you can access global variables using the window object.
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
function DumbObjectMaker {}

// Let's ask myDumbObject for the value of it's prototype
function myDumbObject {}
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
 



