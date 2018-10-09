---
title: JS IV - Objects and `this`
tags: js, introduction, constructor functions, this
---
### Goals

In this lesson we'll cover:

* Objects
* Introduction to `this`

## Vocab

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a Value on an Object
- `Value` The data referenced by a Key
- `Property` Another word for the 'Key' portion of a key-value pair on an object
- `Method` A function on an Object
- `Dot Notation` Notation to access a Value on an Object, explicitly specifies the Key
- `Bracket Notation` Notation to access a Value on an Object, usually specifies a Key via a variable
- `this` A variable that changes depending on the context in which it's used 

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
  method1: function() {
    return "I'm a method, because I am a function!";
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

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var emptyObject = {};```

There are two ways to access the properties or methods of an object:

The most common is Dot Notation:

```js
var schoolName = school.name;
var schoolCapacity = school.capacity;
```

There is also bracket notation:

```js
var schoolName = school['name'];
var schoolCapacity = school['capacity'];
```

Bracket Notation is usually used when the name of the property is stored in a variable. 

```js
var prop = 'name';
var schoolName = school[prop];
```

Another example can be seen [here](https://github.com/turingschool-examples/javascript/tree/master/es5#properties).

Default to using Dot Notation unless you find a need to use bracket notation.


### Your Turn
Step 1: Take a few minutes to write about the below individually:
- To start, go ahead and make an object or two.
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- We've already been using objects... can you think of an example of a dom method or property you've used?
- When we assign a function as the value of a key inside an object, what do we call it?
Step 2: Turn to your neighbor and explain the above object-related questions to each other. Practice makes perfect, so make sure you both get to explain:

### Your Turn, Part 2
Let's goof off in the console a bit. As a group, we'll practice working with an object:

```javascript
// Create an object in honor of @jhunbug
var burrito = {
  type: "carne asada"
};

// 1. Get the value of burrito
// 2. Get the value of type
// 3. Add a new property of your choosing
// 4. Check the value of burrito again
// 5. Ask burrito for the value of the new property you set, but utilize a different notation than when you asked for the value of type in step #2
// 6. Change the value of type
// 7. Get the value of burrito
// 8. Create a method on burrito that logs "Why am I so delicious?" to the console
// 9. Check the value of burrito. Do you see your method?
// 10. Use burrito to log "Why am I so delicious?"
```

### What is `this`: a 10,000ft Introduction
Let's consider our school object from before
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

You may have noticed that we used a familiar word in a strange way in the `checkOpenSpots` method of our `school` object. What the heck is `this`? 

Like `var` and `function`, `this` is a special keyword in Javascript. The value of it can change inside of function code. Invoking a function in different ways can change the value of `this`. It is dependent on the _context_ of where it is referenced. When it is used in the _global context_, `this` refers to the global objects of `document` or `window`. In the context of an object, `this` refers to and is bound to the object itself.

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents;`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.

## Which `this` is which?

**ProTip:** The default context of `this` is the `window` object. Try it out: In your console (not a repl), run `console.log(this);`. So without giving our browser ANY additional information, it tells us that the object we are working within is the `window`, which makes sense.

Unfortunately `this` is not that simple. The value of `this` changes in different situations. This can be confusing at first, but it also gives us a really dynamic, powerful tool. Let's look at some example situations:

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

