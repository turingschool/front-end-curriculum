---
title: Constructor Functions
tags: js, introduction, constructor functions, this
---

# Objects: Constructor Notation

We feel pretty good about using literal notation to create an object. We know that all we really need is `{}`, but it's a good idea to assign an empty object to a variable to we can actually put things in it.

Now, let's talk about using _constructor notation_ to create an object. It's not too hard. Out of the box, JavaScript gives a function for making blank objects. Javascript also gives us a handy keyword called ```new```. When you put the two together, you can generate blank objects all day!

```javascript
// literal notation
var burrito = {};
burrito;

// constructor notation
var taco = new Object();
taco;
```
And just like before, you can add/change properties and methods on this object, using dot and/or bracket notation.

### Creating Many Objects

Sometimes, you want to create a bunch of objects that are similar. Object constructors can use a function as a _template_ create similar objects. Every time you call ```new``` on this constructor you get an instance of that constructor. These are called `constructor functions`, and you can think of them like cookie cutters that produce the same shape of cookie every time you use them. Let's take a look:

```javascript
function Restaurant(name, tables, reservations) {
  this.name = name;
  this.tables = tables;
  this.reservations = reservations;
}
```

Let's talk about what's going on here:

- A function called `Restaurant` is a template for creating new objects that represent individual "instances" of restaurants  
- Therefore, every time the function is invoked, it creates a new instance (object of a certain type) of a Restaurant
- The function has three parameters (`name`, `tables`, `reservations`)  
- Each parameter sets the _value_ of a _property_ in the object  
- The `this` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function creates  
- Different from an object literal, each statement in a constructor object ends in a semicolon instead of a comma  
- Constructor functions begin w/ capital letters (PascalCase), unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. Will it still work if you don't use capitals? YES.  

## Revisiting `this`
The keyword `this` is commonly used inside functions and objects. It always refers to one object, usually the object in which the function operates. In our Restaurant constructor function, `this` refers to the restaurant object that is being created when the function runs. Let's look at this with an abbreviated version of our Restaurant constructor:

```javascript
// Declare a constructor function for making restaurant objects that accepts a parameter of "name".
function Restaurant(name) {
  this.name = name;
}

// Make two restaurant objects, one named "KFC" and the other named "Chilis"
var restaurant1 = new Restaurant("KFC");
var restaurant2 = new Restaurant("Chilis");

// Get the name of the restaurant1 and the restaurant2
restaurant1.name;
restaurant2.name;
```

### Your Turn

With a partner:

* Make a constructor function and use it to make two new objects.
* Come up with an analogy for constructor functions.

## Adding methods to our constructed objects
The constructor function prototype is a blueprint that is inherited by each object created by the constructor function.
```javascript
  Restaurant.prototype.checkAvailability = function () {
    return this.tables - this.reservations;
  }
```
- Each object created will inherit this method for checking availability.

## Prototypes & Inheritance: A First Look
All JavaScript objects **inherit** the properties and methods from their `prototype`.  

In other words, each object has an internal link to another object called its `prototype`. That prototype object has another prototype of its own, and so on and so on until an object is reached with `null` as its prototype. ```null```, by definition, has no prototype, and acts as the final link in this _prototype chain_.  

There is nothing special about a prototype object. There are no special-out-of-the-box methods or magic to a prototype. Let's look:

```javascript
// Let's make a constructor function
function Singer() {}

// Let's ask Singer for the value of it's prototype
Singer.prototype;
```

As a review, constructors in JavaScript can be any function and they are responsible for creating new instances - recall that we can throw on some initial properties in our constructor function to give it some information off the bat.

```javascript
function Singer() {
  this.name = "Elvis";
}
```

Similarly, a `prototype` in JavaScript can be _any object_ and it is responsible for defining the **behavior** of instances. This behavior is defined by modifying the prototype directly, e.g. by adding functions to it as properties. Creating prototype functions is essentially defining your objects' instance methods.  

Let's look at some code examples.  

```javascript
// Pie constructor whose only job is to create instances of pies. It takes pants, socks, and shirt parameters so it can make different pies.
function Pie(type, toppings) {
  this.type = type;
  this.toppings = toppings;
}

Pie.prototype.bake = function() {
  console.log(`The delicious ${this.type} pie with ${this.toppings} is in the oven!`);
}

// Now we can create instances of an Pie and use our compliment function to fire off the same behavior for every outfit we create.

var pie = new Pie('apple', 'whipped cream')
pie.bake();
```

_Note_: We will get WAY MORE INTO prototype methods and what is happening behind the scenes as we progress through this mod/program. This is not the last time we will talk about these concepts so if prototypes and the word "this" make you feel panicky...thats ok.  
