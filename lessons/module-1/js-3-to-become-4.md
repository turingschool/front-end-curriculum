---
title: Introduction to JavaScript III
tags: js, introduction, functions, objects, loops
---

# THIS LESSON IS REDUNDANT -- CONTENT HAS BEEN MOVED TO OTHER LESSONS AND INTO TO DOM MANIPULATION IS JS 3 NOW

### Goals

By the end of this lesson, you will know/be able to:

* Understand what a loop is and when to use one
* Be familiar with calling a function inside of another function
* Declare objects using literal notation
* Be familiar with `this`


<!-- # More Fun with Functions
We're familiar with how to write functions, but let's talk about more things we can do with them.

### Calling functions inside of other functions
When writing Javascript, you want to do your best to keep your code DRY. That means keeping functions concise and single responsibility. It's not uncommon to do a first pass at solving a problem and end up with a more verbose solution, and then revisit your code to tighten it up. This process of cleaning up your working code is called refactoring. When we refactor, one of the things we look for is unnecessary duplication. If we see a line of code being used in multiple places, we can pull it out into its own separate functions of reusable code.

Let's take a crack at refactoring some functions and calling functions within other functions. Below we see two very important functions:

```js
function karateChop() {
  console.log("KARATE CHOP!");
  alert("KAPOW!");
}

function ninjaAttack() {
  alert("KAPOW!");
  console.log("NINJA SURPRISE!");
}
```

We can see that we have some duplication going on between these two functions. We see we have an `alert` that is exactly the same in both functions, which means it is a prime candidate to get pulled into its own function. This will let us reuse this code without retyping it repeatedly (which helps reduce human error and typos), and gives us the flexibility to easily use it in future functions as well. Let's see what that looks like:

```js
function kapow() {
  alert("KAPOW!");
}

function karateChop() {
  console.log("KARATE CHOP!");
  kapow();
}

function ninjaAttack() {
  kapow();
  console.log("NINJA SURPRISE!");
}
```

### Your Turn

Turn to your neighbor and explain how the functions above work.

<!-- do one with a param instead of hard coded string so they're dealing with params --> -->

# Objects
Objects are a collection of key-value pairs. A _key_ is just a _name_ that holds a value. That sounds familiar, doesn't it? You're actually used to working with key-value pairs already, because a key-value pair in an object is essentially a variable. In the context of objects, that variable is called a _property_ of the object. When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: value1,
  property2: value2,
  property3: function() {
    return "I'm value3!";
  }
}
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
}
```
The ```school``` object has four properties:

- ```name: 'International School of Denver'```
- ```capacity: 250```
- ```languageImmersion: true```
- ```currentStudents: 75```

The ```school``` object has one method:

- ```checkOpenspots: function(){ return this.capacity - this.currentStudents; }```

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var myDumbObjectIsEmpty = {}```

There are two ways to access the properties or methods of an object:

The most common is Dot Notation:

```js
var schoolName = school.name
var schoolCapacity = school.capacity
```

Bracket Notation is less commonly used:

```js
var schoolName = school['name']
var schoolCapacity = school['capacity']
```

### What is `this`: a 10,000ft Introduction
You may have noticed that we used a familiar word in a strange way in the `checkOpenSpots` method of our `school` object. What the heck is `this`?

`this` is a keyword in Javascript that references its parent object and is dependent on the _context_ of where it is referenced. When it is used in the _global context_, `this` refers to the global objects of `document` or `window`. In the context of an object, `this` refers to and is bound to the object itself.

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement that being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.

### Your Turn
Let's goof off in the console a bit. As a group, we'll practice working with an object:

```javascript
// Create an object in honor of @jhunbug
var myLitObject = {
  burritoType: "carne asada"
}

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
