---
title: "Objects and prototype chain"
length: 90
tags: oop, prototype chain, inheritance
module: 2
---

## Learning Goals

By the end of this lesson, you will be able to:

* Speak to and understand the difference between `prototoype` and `__proto__`
* Understand and explain how prototypal inheritance works via the prototype chain.

## Vocab

* `prototype` A special object which is assigned to functions that you make in JavaScript  
* `[[prototype]]` A hidden link on every object that links objects to one another, allowing objects to share behaviors    
* `__proto__` Also called "dunder-proto", this allows us to access the `[[prototype]]` 


# Prototype

<section class="call-to-action">
### Warm Up

Where have we heard the term `prototype` before.  What do we know about this so far?
</section>

<section class="answer">
### Review 

* We know that a **prototype** is a model of something and how it should look or behave.
* We know that we have access to prototype methods (forEach, filter, etc) on arrays. 

</section>

<section class="call-to-action">
### What is a prototype?

In JavaScript, a prototype is a special object that is assigned to all functions, including but not limited to functions that are used to construct objects. 

Take a look at the example below:

```js
const createInstructor = (name, primaryLesson) => {
  return {
    name: name,
    primaryLesson: primaryLesson,
    teachLesson: (duration) => {
      if (duration > 3) {
        return `${this.name} can\'t teach a lesson that long!`
      } else {
        return `Gunna teach you all real good about ${this.primaryLesson}`
      }
    },
    gradeProjects: (project) => {
      return `${this.name} is grading ${project}.`
    } 
  }
}

const nick = createInstructor('Nick', 'Intro to Accessibility')
```

* After declaring this function and initializing the variable `nick`, type `nick.` into your console. You should see the browser attempting to autocomplete this with properties that are available on this function.  Look at the `nick.constructor.prototype` property and take note of its value.
</section>

<section class="answer">
### Diving Deeper  

Let's consider the `Array` data type in JavaScript. In your console, access the `prototype` of `Array` - what do you notice? The `constructor` of all arrays defines the methods on our `Array.prototype` - you might be familiar with some of these array prototype methods already!

<!-- By accessing the `prototype` of our instructor's `constructor` - we can see that it points to an object that has three methods: `constructor`, `teachLesson`, and `gradeProject`.  Our `prototype` is a property on the function that points back to our instructor's `constructor`. -->

Our `createInstructor` function which creates new instructor objects is also known as **constructor function**.  In object-oriented programming, which is based on **classes**, developers use constructor functions to create multiple objects from a template.  Here is the some code written using ES5 class syntax:

```js
function Instructor(name, primaryLesson) {
    this.name = name;
    this.primaryLesson = primaryLesson;
}

Instructor.prototype.teachLesson = function(duration) {
  if (duration > 3) {
    return `${this.name} can\'t teach a lesson that long!`;
  } else {
    return `Gunna teach you all real good about ${this.primaryLesson}`;
  } 
}

Instructor.prototype.gradeProjects = function(project) {
  return `${this.name} is grading ${project}.` 
}

let instructor = new Instructor('Robbie', 'POST Requests');
```

In order to add methods to our template, we had to manipulate the `prototype` directly. We can do with with our `Array` type. First, we will define a new prototype method on `Array`, and then access that method like we would for `.map()` or `.filter()`.

```js
Array.prototype.getLast = function() {
  return this[this.length - 1]
}

const ingredients = ['sauce', 'cheese', 'crust', 'peppers']

ingredients.getLast()
```

What is `this` referring to in the example above?
</section>

<section class="checks-for-understanding">
### Review: What is a prototype?

A special object which is assigned to functions that you make in JavaScript
</section>

<section class="call-to-action">
### Another Look (In Breakout Groups)

From our prior example, take a look at the `nick` and take note of *all* the properties. (*especially the `prototype` property*)

![instance in the console](/assets/images/lessons/oop/instance-2.png)

It is likely that you have seen this (somewhat overwhelming) list of properties while working with other types of data in your console - not just functions and objects.

* After doing the above, declare an array literal named `food` in your console.  (list the last three things you ate)
* What happens when you type `food.`?  
* What is the browser attempting to autocomplete?
* What familiar properties are showing up?  
* Is the `prototype` property still there? Why or why not?
* Bonus: Try this out with other data types! 
</section>

## __proto__

You'll notice that when we checked the `instructor` instance and array literal in the console, there was no property of `prototype` listed. This is because neither of these are functions, so the property of `prototype` is not automatically assigned. 

<section class="answer">
### What is the __proto__?

_Everything_ that we have checked in the console thus far has had the property `__proto__`.

* `__proto__`, or "dunder-proto" (double-underscore proto), is a property that exposes the internal `[[prototype]]` property. 
* This `[[prototype]]`property acts a as a reference that points to a function's prototype object. 
</section>

![dunder proto at work](/assets/images/lessons/oop/prototype-chain-FP.png)

<section class="note">
### Note

It is this reference, or linking, between objects that makes up the **prototype chain**. 
* The prototype chain (and objects linking in such a way) is what allows us to define behavior in one place (or one `prototype` object) and share it between many objects. 

For example, using our `instructor` variable, let's use the `valueOf` prototype method.

```js
// Example #1
let instructor = createInstructor('Travis', 'OOP');

instructor.valueOf()
// {instructor: "Travis", module: 2}

// Example #2
let message = 'The prototype chain is super cool!';
message.valueOf();
// "The prototype chain is super cool!"
```

Strange...this isn't a method we created on our `createInstructor` constructor method.  [valueOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf){:target='blank'} is actually an object prototype method!  Why do we have access to this method on a string as well? What is happening?!

When the interpreter is attempting to access a property on an object, it will start by looking directly on that object. If that property is not found, the objects internal `[[prototype]]` property will point to the object to examine next. The interpreter will continue to travese the prototype chain to seek a resolution for the property... until the end of the prototype chain is reached (resulting in `null`). 

*It is this linking between objects that makes it so that objects are not limited to using the methods that are formally defined directly on that object - they can also ask objects further up the chain for help.* 

![the prototype chain simplified](/assets/images/lessons/oop/simple-chain-FP.png)
</section>

<section class="call-to-action">
### In Breakout Groups

With your partner, save all the data types that you can think of to variables. Using the console, check the `[[prototype]]` link via the dunder-proto.

- What similiarties do you notice across data types? What differences?
- Can we say "everything is an object" in JavaScript?
</section>

<section class="checks-for-understanding">
### Checks for Understanding

* Describe the prototype chain. Why is the chain in place? Why would the interpreter traverse this chain?
* What is the difference between `prototype` and `__proto__`?
</section>

## Additional Resources
* [Other Ways Of Extending the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Different_ways_to_create_objects_and_the_resulting_prototype_chain){:target='blank'}
* [Object Prototypes from MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes){:target='blank'}
* [Explaining JavaScript's Prototype Chain Like You're Five](https://dev.to/codesmith_staff/explain-javascripts-prototype-chain-like-im-five-51p){:target='blank'}
* [Prototype Inheritance](https://javascript.info/prototype-inheritance){:target='blank'}
* [Everything in JavaScript Is (Not) an Object](https://betterprogramming.pub/everything-in-javascript-is-an-object-except-for-when-it-isnt-305bc65a3410){:target='blank'}
* [Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive){:target='blank'}
