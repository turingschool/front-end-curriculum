---
title: Object Literals
length: 120
tags: js, introduction, object literals, dot notation
---

## Learning Goals

* Describe what an object literal is
* Define properties and methods in an object literal
* Access values and methods from an object using dot and bracket notation

## Vocabulary

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a Value on an Object
- `Value` The data referenced by a Key
- `Property` Another word for the 'Key' portion of a key-value pair on an object
- `Method` A function on an Object
- `Dot Notation` Notation to access a Value on an Object, explicitly specifies the Key
- `Bracket Notation` Notation to access a Value on an Object, usually specifies a Key via a variable
- `this` A variable that changes depending on the context in which it's used
- `Class` A constructor that allows us to create multiple instances
- `Object Instance` Objects that contain the data and functionality defined in the class

## Objects

Objects are an abstraction, or the representation of real world things in computer programming.
They are meant to bundle together two things:

1. State (data)
2. Behavior (functions)

## Anatomy of Objects

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in JavaScript to declare an object is curly braces ```{}```. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var emptyObject = {};```

Objects are a collection of _key-value pairs_ surrounded by _curly braces_. A _key_ is like a _name_ that holds a value. You're actually used to working with key-value pairs already, because a key-value pair in an object is similar to a variable - the variable name serves as a label for the data we really care about referencing.

In the context of objects, that variable is called a _property_ of the object. Each property in an object **must be unique**. You cannot have two properties with the same name. When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: "value1",
  property2: "value2",
  method1: function() {
    return "I'm a method, because I am a function!";
  },
};
```

Which looks like this when we implement it in code:

```javascript
var school = {
  name: "International School of Denver",
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  sendWelcomeMessage: function() {
    return "Welcome to International School of Denver!"
  },
};
```
The `school` object has four properties:

- `name: "International School of Denver"`
- `capacity: 250`
- `languageImmersion: true`
- `currentStudents: 75`

The `school` object has one method:

```js
sendWelcomeMessage: function() {
  return "Welcome to International School of Denver!"
},
```

### Access Properties

There are two ways to access the properties or methods of an object:

The most common is dot notation:

```js
var schoolName = school.name;
var schoolCapacity = school.capacity;
```

<section class="call-to-action">

### Partner Practice: Accessing Properties

Choose a driver and a navigator. The driver should start by forking [this repl.it](https://repl.it/@ameseee/Dot-Notation-Practice)

Together, complete each exercise listed in the comments below the two object literals. Write the code with a given direction directly below it, and do not delete code as you go.
</section>

There is also bracket notation:

```js
var schoolName = school["name"];
var schoolCapacity = school["capacity"];
```

Bracket notation is usually used when the name of the property is stored in a variable or parameter.  This can make it dynamic, since the value in a variable can _vary_.

```js
function getSchoolValue(prop) {
  return school[prop];
}

getSchoolValue("name");
```

Another example can be seen [here](https://github.com/turingschool-examples/javascript/tree/master/es5#properties).

Default to using Dot Notation unless you need to access properties with a variable/parameter.  

### Adding a Property

What if we wanted to add another property to an object after we already created it? By accessing the object and using dot notation, we can create another unique property and assign it whatever value we want. This works almost exactly like a variable. Take a look at an example below:

```js
school.address = "7701 E 1st Pl, Denver, CO 80230";
console.log(school);

// console output
// => {
//   name: "International School of Denver",
//   capacity: 250,
//   languageImmersion: true,
//   currentStudents: 75,
//   sendWelcomeMessage: function() {
//      return "Welcome to International School of Denver!"
//   },
//   address: "7701 E 1st Pl, Denver, CO 80230"
// }
```
<section class="call-to-action">

### Solo Practice: Reassigning & Adding
- Go back to the repl you were working on before, and add a property of "bestFriend" to `user1`. Assign it to a string of anything you want.
- Now try re-assigning `user1` **age** to 9. Then, re-assign `user2`'s **hobbies** to an array of your choice!
- 🤞Remember to call the object or the property on the last line of the file, and run the repl to verify the outcome!
</section>

<section class="checks-for-understanding">

### Stop and Reflect
**First:** Independently, take a few minutes to write about each prompt below:
- To start, go ahead and make an object or two.
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- We've already been using objects; can you think of a DOM method or property you've used?
- When we assign a function as the value of a key inside an object, what do we call it?

**Then:** Turn to your neighbor and explain the above object-related questions to each other. Practice makes perfect, so make sure you both get to explain.
</section>

<section class="call-to-action">

### Partner Practice: Access and Update
- Choose a driver and a navigator. The driver should start by forking [this repl.it](https://repl.it/@ameseee/Partner-Practice)
- Together, complete each exercise listed in the comments below the provided object literal. Write the code with a given direction directly below it, and **do not delete code as you go**.
</section>
<br>
