---
title: Introduction to JavaScript IV
tags: js, introduction, constructor functions, this
---
### Goals

In this lesson we'll cover:

* Objects
* What a constructor function is
* When you need an array or object data structure
* Introduction to ```this```


# Objects

### High Level
Objects are an abstraction, or the representation of real world things in computer programming.

### Anatomy of Objects
Objects are a collection of _key-value pairs_ surrounded by _curly braces_. A _key_ is just a _name_ that holds a value. That sounds familiar, doesn't it? You're actually used to working with key-value pairs already, because a key-value pair in an object is essentially a variable. In the context of objects, that variable is called a _property_ of the object. Each property in an object must be unique. You cannot have two properties with the same name. When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: value1,
  property2: value2,
  property3: function() {
    return "I'm value3!";
  }
};
```

Which looks like this when we implement it in code:

```javascript
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
};
```
The ```school``` object has four properties:

- ```name: 'International School of Denver'```
- ```capacity: 250```
- ```languageImmersion: true```
- ```currentStudents: 75```

The ```school``` object has one method:

```js
checkOpenspots: function() {
  return this.capacity - this.currentStudents;
}
```

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var myDumbObjectIsEmpty = {};```

There are two ways to access the properties or methods of an object:

The most common is Dot Notation:

```js
var schoolName = school.name;
var schoolCapacity = school.capacity;
```

Bracket Notation is usually used when the name of the property is stored in a variable. 

```js
var prop = 'name';

var schoolName = school[prop];
```

Another example can be seen [here](https://github.com/turingschool-examples/javascript/tree/master/es5#properties).

Default to using Dot Notation unless you find a need to use bracket notation.


### Your Turn
Turn to your neighbor and explain the following object-related questions to each other. Practice makes perfect, so make sure you both get to explain:
- To start, go ahead and make an object or two together.
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- When we assign a function as the value of a key inside an object, what do we call it?

### Your Turn, Part 2
Let's goof off in the console a bit. As a group, we'll practice working with an object:

```javascript
// Create an object in honor of @jhunbug
var myLitObject = {
  burritoType: "carne asada"
};

// 1. Get the value of myLitObject
// 2. Get the value of burritoType
// 3. Add a new property of your choosing
// 4. Check the value of myLitObject again
// 5. Ask myLitObject for the value of the new property you set, but utilize a different notation than when you asked for the value of burritoType in step #2
// 6. Change the value of burritoType
// 7. Get the value of myLitObject
// 8. Create a method on myLitOjbect that logs "Skateboarding is fun" to the console
// 9. Check the value of myLitObject. Do you see your method?
// 10. Use myLitObject to log "Skateboarding is fun"
```

### What is `this`: a 10,000ft Introduction
You may have noticed that we used a familiar word in a strange way in the `checkOpenSpots` method of our `school` object. What the heck is `this`? Let's take a VERY brief look before you continue with objects. We will circle back on this later.

Like `var` and `function`, `this` is a special keyword in Javascript. It references its parent object and is dependent on the _context_ of where it is referenced. When it is used in the _global context_, `this` refers to the global objects of `document` or `window`. In the context of an object, `this` refers to and is bound to the object itself.

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents;`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.


# Objects: Constructor Notation

We feel pretty good about using literal notation to create an object. We know that all we really need is `{}`, but it's a good idea to assign an empty object to a variable to we can actually put things in it.

Now, let's talk about using _constructor notation_ to create an object. It's not too hard. Out of the box, javascript gives a function for making blank objects. Javascript also gives us a handy keyword called ```new```. When you put the two together, you can generate blank objects all day!

```javascript
var myLitObject = new Object();
myLitObject;
```
And just like before, you can add/change properties and methods on this object, using dot and/or bracket notation.

## Creating Many Objects

Sometimes, you want to create a bunch of objects that are similar. Object constructors can use a function as a _template_ to spit out little objects that you define. Everytime you call ```new``` on this constructor you get an instance of the object. These are called `constructor functions`, and you can think of them like cookie cutters that produce the same shape of cookie every time you use them. Let's take a look:

```javascript
function Restaurant(name, tables, reservations) {
  this.name = name;
  this.tables = tables;
  this.reservations = reservations;
}
```

Let's talk about what's going on here:

- A function called `Restaurant` is a template for creating new objects that represent individual "instances" of restaurants  
- The function has three parameters (`name`, `tables`, `reservations`)  
- Each parameter sets the _value_ of a _property_ in the object  
- Each object created will utilize the same method for checking availability  
- The `this` keyword is used instead of the object name to indicate that the property or method belongs to the object that THIS function creates  
- Different from an object literal, each statement in a constructor object ends in a semicolon instead of a comma  
- Constructor functions begin w/ capital letters (PascalCase), unlike our other functions which tend toward beginning w/ lowercase. Why? The hope is to remind developers to use the keyword new with this function. Will it still work if you don't use capitals? YES.  

## Revisiting `this`
The keyword `this` is commonly used inside functions and objects. It always refers to one object, usually the object in which the function operates. In our Restaurant constructor function, `this` refers to the restaurant object created when the function runs. Let's look at this real quick with an abbreviated version of our Restaurant constructor:

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

* Take a few minutes and make a constructor function and use it to make two new objects.
* Take a few minutes to come up with an analogy for constructor functions.

## Which `this` is which?

**ProTip:** The default context of `this` is the `window` object. Try it out: In your console (not a repl), run `console.log(this);`. So without giving our browser ANY additional information, it tells us that the object we are working within is the `window`, which makes sense.

Unfortunately ```this``` is not that simple. The value of ```this``` changes in different situations. This can be confusing at first, but it also gives us a really dynamic, powerful tool. Let's look at some example situations:

```javascript
// FUNCTION DECLARATIONs - top of script, not inside another function or inside an object. The default object in this context is the `Window` object.
function boom() {
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [height, width];
}

// GLOBAL VARIABLES - global variables become properties of the `Window` in the browser object. When a function is in the global context, you can access global variables using the window object.
var width = 600;
var shape = {width: 300};
var showWidth = function() {
  console.log(this.width);
};
showWidth();

// METHOD OF AN OBJECT - when does a function become a method? When it is defined INSIDE an object. In a method, "THIS" refers to the containing object.
var room = {
  width: 800,
  height: 400,
  getArea: function() {
    console.log('in the room object', this);
    return this.width * this.height;
  }
};

```

**YOUR TURN**: Take a few minutes with the person BEHIND/IN FRONT OF you and work through the next series of code examples. If you've been following along with the code above in a repl/script file, comment all of it out so you are starting with a clean slate.

**Rule #1: No Copy Pasting.**

```js
// FUNCTION EXPRESSION AS A METHOD - what does that mean? An expression returns a single value. A function can be an expression. If you assign that function expression to a property on an object, it is then called a method.

// Declare a global variable of name and assign the value of 'Elvis'
var name = 'Elvis';

// What do you get when you console.log(this.name) right now?

// Declare another global variable of human and assign it to an object with a property of name that stores a different value.
var human = {
  name: 'Cher'
};

// Create a function like we did before (refer to the the GLOBAL VARIABLES example where we created a function called showWidth to log an object's width with "this.width" to the console), but this time leverage the context of `this` to print a name.
var sayName = function() {
  console.log('Hello! My name is ' + this.name);
}

// Call the sayName function now
sayName();

// Based on your results, what is the context of 'this'?

// Add a property called getName to our human object and assign it the value of our sayName function
human.getName = sayName;

// What does the human object look like now?

// Ask human what its name is
human.getName();

// What do your results tell you about the context of this now?

// Spoiler alert: `This` no longer refers to the global context (Elvis), because it is now a method scoped to a specific object (human), so "this" refers to that containing objects name property (Cher).

// Create a second object with a different name value and use the same getName/sayName key value pair.
```

**PRO TIP:** The context of this within a function will be determined by WHERE THE FUNCTION GETS CALLED.

## Prototypes & Inheritance: A First Look
All JavaScript objects **inherit** the properties and methods from their `prototype`.  

In other words, each object has an internal link to another object called its `prototype`. That prototype object has another prototype of its own, and so on and so on until an object is reached with `null` as its prototype. ```null```, by definition, has no prototype, and acts as the final link in this _prototype chain_.  

There is nothing special about a prototype object. There are no special-out-of-the-box methods or magic to a prototype. Let's look:

```javascript
// Let's make a constructor function
function DumbObjectMaker() {}

// Let's ask DumbObjectMaker for the value of it's prototype
function DumbObjectMaker() {}
DumbObjectMaker.prototype;
```

As a review, constructors in javascript can be any function and they are responsible for creating new instances - recall that we can throw on some initial properties in our constructor function to give it some information off the bat.

```js
function DumbObjectMaker() {
  this.name = "Elvis";
}
```

Similarly, a `prototype` in javascript can be _any object_ and it is responsible for defining the **behavior** of instances. This behavior is defined by modifying the prototype directly, e.g. by adding functions to it as properties. Creating prototype functions is essentially defining your objects' instance methods.  

Let's look at some code examples.  

```javascript
// Outfit constructor whose only job is to create instances of outfits all day. It takes pants, socks, and shirt parameters, so it can make different outfits all day.
function Outfit(pants, shirt) {
  this.pants = pants;
  this.shirt = shirt;
}

Outfit.prototype.compliment = function() {
  console.log('Nice ' + this.pants + ' pants and ' + this.shirt + '  shirt!');
}

// Now we can create instances of an Outfit and use our compliment function to fire off the same behavior for every outfit we create.

var casual = new Outfit('denim', 'cat')
casual.compliment();
```

_Note_: We will get WAY MORE INTO prototype methods and what is happening behind the scenes as we progress through this mod/program. This is not the last time we will talk about these concepts so if prototypes and the word "this" make you feel panicky...thats ok.  

## Which Data Structure?
When deciding on an approach, you must consider how the data will be used. Let's think about a few scenarios:

When the order of objects is important, they should be stored in an array.  
When you want to access objects using their name, they work well as properties of another object.(because you would not need to iterate through all objects like in an array).

#### Objects in an Array

```javascript
var people = [
  {name: 'Mike', age: 65, active: true},
  {name: 'Becca', age: 23, active: false},
  {name: 'Tony', age: 40, active: false},
  {name: 'Penelope', age: 23, active: true}
];
people[1].name;
people[3].age;
people[2].active;
```

#### Objects as Properties

```javascript
var people = {
  Hercules: {age: 65, active: true},
  Aphrodite: {age: 23, active: false},
  Zeus: {age: 40, active: false},
  Magneto: {age: 23, active: true}
};
people.Magneto.age;
people.Hercules.active;
people.Aphrodite.age;
```
