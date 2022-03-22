---
title: "JS: Object Literals"
length: 120
tags: js, introduction, object literals, dot notation
---

## Learning Goals

* Describe what an object literal is
* Define properties and methods in an object literal
* Access values and methods from an object using dot notation

## Vocabulary

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a value on an object
- `Value` The data referenced by a key
- `Property` How we refer to one of the key-value pairs of an object
- `Method` A function on an object
- `Dot Notation` Notation to access a value on an object, explicitly specifies the key

<section class="call-to-action">
## Warm Up
Respond to the following questions on [this Jamboard](https://jamboard.google.com/d/1phYlXmE3yEpmnBwLUT96mjYzwawFA7WhR_un1q5bLsc/edit?usp=sharing){:target="blank"}
- What do you already know about Objects from M0?
- What feels fuzzy or do you have questions about?
</section>

## Objects

Objects are a type of collection, or complex data type in JavaScript. We can think of objects as a representation of real world things in computer programming.

They are meant to bundle together two things:

1. State (data)
2. Behavior (functionality)

## When to use Objects

If we already have our primitive data types, when/why do we also need objects?

- When we need an associative relationship (title for some info)
- We want to model a more complex thing.

Imagine you wanted to model all the information related to a car in code. We
could create a whole series of variables (brand, color, year, model, etc),
however those variables aren't tied together in any sensible way. The car itself
is one thing, and we want a way hold onto it as such. This is where objects
really shine.

## Anatomy of Objects

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in JavaScript to declare an object is curly braces ```{}```. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var emptyObject = {};```

Objects are a collection of _key-value pairs_ or _properties_ surrounded by _curly braces_. A _key_ is like a _name_ that holds a value. You're actually used to working with key-value pairs already, because a key-value pair in an object is similar to a variable - the variable name serves as a label for the data we really care about referencing.

In the context of objects, that variable is called a _key_ of the object. Each _key_ in an object **must be unique**. You cannot have two _keys_ with the same name.

Let's look at an example:

```javascript
var objectName = {
  property1: "value1",
  property2: "value2",
};
```

Which looks like this when we implement it in code:

```javascript
var school = {
  name: "International School of Denver",
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
};
```
The `school` object has four properties:

- `name: "International School of Denver"`
- `capacity: 250`
- `languageImmersion: true`
- `currentStudents: 75`

<section class="call-to-action">
### Solo Practice: Turn some facts into an Object

Create a new repl.

Declare a new variable called <code>myInfo</code> that stores an object literal that represents you! It should have all of the following keys: `name`, `age`, `alive`, and `homeTown`. Give each of those keys an appropriate value.
</section>

### Access Properties

There are two ways to access the properties or methods of an object, today we will focus on **Dot Notation:**

```js
var schoolName = school.name;
var schoolCapacity = school.capacity;
```

<section class="call-to-action">
### Solo Practice: Accessing Data about YOU

Return to the repl you created with your object.

Practice using dot notation to access each value on your `myInfo` object.
</section>

<section class="call-to-action">
### Partner Practice: Accessing Properties

Choose a driver and a navigator. The driver should start by forking [this repl.it](https://repl.it/@ameseee/Dot-Notation-Practice){:target="blank"}

Together, complete each exercise listed in the comments below the two object literals. Write the code with a given direction directly below it, and do not delete code as you go.
</section>


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
//   address: "7701 E 1st Pl, Denver, CO 80230"
// }
```
<section class="call-to-action">

### Solo Practice: Reassigning & Adding
- Go back to the repl about you, and add a property of `currentLocation` to your object. Assign it to a string of any coffee shop location you (used to) frequent.
- Now try re-assigning the **age** property to a different number.
- 🤞Remember to call the object or the property on the last line of the file (or in the console), and run the repl to verify the outcome!
</section>

## Methods on Objects

When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: "value1",
  property2: "value2",
  method1: function() {
    return "I'm a method, because I am a function that belongs to an object!";
  },
};
```

This looks like a lot more code, and potentially a bit more daunting, but when we read through it slowly, we can recognize:
- There is a key name, followed by a colon
- ONE value as a property

The difference is that our property is now a function definition.

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

The `school` object has one method:

```js
sendWelcomeMessage: function() {
  return "Welcome to International School of Denver!"
},
```

To call the `sendWelcomeMessage` method that belongs to the `school` object, we have to take one step at a time:
1. Tell the program we are interested in something regarding the `school` object
2. Tell the program we are specifically interested in the `sendWelcomeMessage` method
3. Call the `sendWelcomeMessage` method using `()`

In action, it looks like this:

```js
school.sendWelcomeMessage();
```
<section class="call-to-action">
## Turn and Talk

- When reading the code snippet above, how would you say, out loud, in English, what we are doing?
- When we used dot notation at the start of the lesson, we didn't follow a property name with `()`. Why do you think we are using that here? What does it remind you of? Further, what do you think would happen if we called `school.sendWelcomeMessage`?
</section>

Let's add a method to the object representing ourselves. What behaviors or methods should our `you` object have?

<section class="checks-for-understanding">
### Stop and Reflect
**First:** Independently, take a few minutes to write about each prompt below:
- To start, go ahead and make an object or two.
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- When we assign a function as the value of a key inside an object, what do we call it?
</section>
