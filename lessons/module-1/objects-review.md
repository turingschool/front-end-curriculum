---
title: Objects Review
length: 45
---

## Introduction

This review document can be used as a facilitator guide for a small group or as a self-guided reading/activity for students to review objects and drill down their understanding of them and fluency with syntax.

**Note:** Throughout the practice exercises, inputs fields are available for one to type in their responses. Anything typed in will **not** persist; if you refresh or navigate from the page, anything you type will be lost.

## Object Literals

Objects are a collection of _property-value pairs_ surrounded by _curly braces_. A _property_ is like a _name_ that holds a value.

Here's an example of an object literal. Let's break it down piece-by-piece:

```javascript
var user = { name: "Djavan" }
```

Many times we'll have more than one property/value pair in an object. You'll usually see objects with >2 property/values pairs organized like this, for better readability:

```javascript
var user = {
  name: "Djavan",
  age: 30,
  location: "Denver, CO"
}
```

<section class="call-to-action">
### Object Literal Practice

Familiarize yourself with the object literal stored in `employee`, then answer the questions below.

```javascript
var employee = {
  id: 467239,
  name: "Megan Cain",
  team: 4,
  payTier: 7
}
```

How many property/value pairs does the `employee` object have? <input/>

What value is associated with the property of `payTier`? <input/>

What is the property name, or label, for the value `"Megan Cain"`? <input/>

Write your own object assigned to a variable named `friend`. The friend should have a name property and an appropriate value.
<textarea class="wide-text"></textarea>

Write another object assigned to a variable named `artist`. The artist should have at least three properties.
<textarea class="wide-text"></textarea>
</section>

## Dot Notation

**Dot notation** allows us to access a value from a given property. Let's look at an example:

```javascript
var user = {
  name: "Djavan",
  age: 30,
  location: "Denver, CO"
}

user.name
// => "Djavan"

user.age
// => 30
```

You may notice above there are three components to accessing a value:
1. Calling the object itself. In this case, `user` is the variable that stores the object.
2. Using the `.` for dot notation. This tells the computer we are looking for a property or method on the object specified before.
3. Calling the name of the property. In this case, `name` and `age` were called.

<section class="call-to-action">
### Dot Notation Practice

We'll use the same `employee` object from the previous practice section.

```javascript
var employee = {
  id: 467239,
  name: "Megan Cain",
  team: 4,
  payTier: 7
}
```

Write the syntax that will access the value `4`: <input/>

Write the syntax that will access the value `"Megan Cain"`: <input/>

What will happen if you call `employee.age`? Why?
<textarea class="wide-text"></textarea>

Get a little more practice. Use this object:

```javascript
var student = {
  name: "Francy",
  program: "Front End",
  module: 5,
  alum: true
}
```

Write the syntax that will access the value `"Front End"`: <input/>

Write the syntax that will access the value `true`: <input/>

What will happen if you call `francy.module`? Why?
<textarea class="wide-text"></textarea>

</section>

## Reassigning Properties

Sometimes, we'll need to change the status of an object. This idea is also commonly referred to as "updating the state" of an object. For example, an employee object may currently look like this:

```javascript
var user = {
  name: "Djavan",
  age: 30,
  location: "Denver, CO"
}
```

But soon enough, Djavan will have a birthday and get older, and one day may move to another city😭 This object is not set in stone; we can update as time goes by. Here's the syntax:

```javascript
user.age = 31;
user.age = 32;
user.age = 33;
user.age = 34;
user.location = "Chicago";
```

In this specific case, we could also use something like `user.age += 1` since we will always increment by 1!

Notice that we still have those same three pieces:
1. The object we want to access
2. Dot notation
3. The specific property we want to access
4. Now, we **also** have the assignment operator and a new value.

<section class="call-to-action">
### Reassigning Practice

We'll use a similar `student` object from the previous practice section.

```javascript
var student = {
  name: "Scott",
  program: "Front End",
  module: 1,
  alum: false
}
```

Write the syntax that will move Scott to Module 2: <input/>

Write the syntax that will move Scott to Module 5: <input/>

Write the syntax that will make Scott an alum: <input/>

What will happen if you run `scott.module = 3`? Why?
<textarea class="wide-text"></textarea>

</section>

## More Complex Data Shapes

Objects are such a helpful data type because they allow us to bundle together data and functionality that goes together. A company likely has a lot more data on an employee than we have been working with. There are many cases in which **nested data** will help us out. Let's look at an object that has a property which is associated with an array.

```javascript
var employee = {
  id: 467239,
  name: "Megan Cain",
  team: 4,
  payTier: 7,
  dependents: ["Jackson Cain", "Benjamin Cain"]
}
```

If we call `employee.dependents` we will get back the full array of two different strings. At that point, we can treat that array the same way we would if it were assigned to it's own variable.

A value of a property on an object can also be another object:

```javascript
var employee = {
  id: 467239,
  name: "Megan Cain",
  team: 4,
  payTier: 7,
  dependents: ["Jackson Cain", "Benjamin Cain"],
  promotions: {
    nurse: "2004",
    nurseLead: "2007",
    teamLead: "2011",
    nurseManager: "2019"
  }
}
```

If we wanted to find out when Megan was promoted to `teamLead`, we could use dot notation, twice:

```javascript
// break down step by step:
// this means we have to store the first step in a variable:
var promotions = employee.promotions;
promotions.teamLead
// => "2011"


// OR get it all done in one line
// by chaining:
employee.promotions.teamLead
// => "2011"
```

<section class="call-to-action">
### Nested Objects Practice

First, add a list (array) of allergies to our student object:

```javascript
var student = {
  name: "Vee",
  program: "Front End",
  module: 1,
  alum: false
}
```
<textarea class="wide-text"></textarea>

We'll use a similar `student` object from the previous practice section. Notice the update we've made with the `projects` property:

```javascript
var student = {
  name: "Heather",
  program: "Front End",
  module: 1,
  alum: false,
  projects: {
    dogParty: "n/a",
    numberGuesser: "crushed it, great teamwork!",
    checkYoSelf: null
  }
}
```

Write the syntax that would access the notes from Heather's Dog Party: <input/>

Write the syntax that would access the notes from Heather's Number Guesser: <input/>

Write the syntax that will give Heather a note of "Great Job!" for Check Yo Self: <input/>

Why do you think the value of the `checkYoSelf` property is assigned to `null` in the original object?
<textarea class="wide-text"></textarea>

</section>

## Objects as Arguments

Because objects are able to package up a lot of information, it is sometimes handy to use them as arguments and parameters! This sometimes allows us to have 1 big argument passed in rather than 4+ various pieces of information.

Here's one example:

```javascript
function employeeUpdate(employee) {
  return `${employee.name} is on team ${employee.team} and has ${employee.dependents.length} dependents.`
}

var megan = {
  id: 467239,
  name: "Megan Cain",
  team: 4,
  payTier: 7,
  dependents: ["Jackson Cain", "Benjamin Cain"],
  promotions: {
    nurse: "2004",
    nurseLead: "2007",
    teamLead: "2011",
    nurseManager: "2019"
  }
}

employeeUpdate(megan);
// => Megan Cain is on team 4 and has 2 dependents.
```

If we invoked this function and passed a similarly formatted object for a different employee, we would get a custom message with that employees information.

<section class="call-to-action">
### Think About It

- Why did the developer who wrote this code have to call `employee.` every time they wanted to access a property? Why couldn't they just write employee once?
- In the function, the parameter is named `employee` but the actual object was named `megan`. Why did that still work?

### Objects as Arguments Practice

**Note:** It is probably best to write the code for this practice in a repl.it.

Use the `student` object below as a template for potentially a lot of other similarly formatted objects. Follow the directions below to write a function that takes a student object in as a parameter.

```javascript
var student = {
  name: "Cody",
  program: "Front End",
  module: 1,
  alum: false
}
```

Write a function that `console.log`s a sentence following this format: `[name] is one of our awesome [program] students, currently in module [module]!`. To make sure it is working as expected, try invoking it with at least two different objects being passed in as the argument.

### Challenge

Use the object below as a template:

```javascript
var student = {
  name: "Allie",
  program: "Front End",
  module: 1,
  alum: false,
  projects: ["Dog Party", "Number Guesser", "Check Yo Self"]
}
```

Write a function that `console.log`s a sentence following this format: `[name] is an awesome [program] student! They have built the following projects: [project1], [project2], and [project3]`. This function should be dynamic enough so that when Allie (in this case) adds another project to her list, the function would return an appropriate end of the sentence (i.e. `[project1], [project2], [project3], and [project4]`).
</section>
