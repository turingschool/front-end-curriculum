---
title: "Objects: prototype chain"
length: 90
tags: oop, prototype chain
module: 2
---

## Learning Goals

By the end of this lesson, you will be able to:

* Speak to and understand the difference between `prototoype` and `[[prototype]]`
* Understand and explain how prototypal inheritance works via the prototype chain.

## Vocab

`prototype` A special object which is assigned to functions that you make in JavaScript  
`[[prototype]]` A hidden link on every object that links objects to one another, allowing objects to share behaviors
`__proto__` Also called "dunder-proto", this allows us to access the `[[prototype]]` link


# Prototype

Prototypes are the mechanism by which JavaScript objects inherit features from one another. Having access to this chain of inheritance (via prototype objects) is a powerful way to define a behavior in one place and then use it in many others.

But what is a prototype? In JavaScript, a prototype is a special object that is assigned to all functions, including but not limited to functions that are used to construct objects. 

As you may recall, classes (like our `Instructor` class below) operate as constructor functions under the hood:

```js
class Instructor {
  constructor(name, primaryLesson) {
    this.name = name;
    this.primaryLesson = primaryLesson;
  }

  teachLesson(duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  }
}

var instructor = new Instructor('Pam', 'OOP');
```

After declaring this class, type `Instructor.` into your console. You should see the browser attempting to autocomplete this with properties that are available on this function:

![prototype in the console](/assets/images/lessons/oop/prototype.png)

By accessing the `prototype` of our `Instructor` class - we can see that it points to an object that has a property of `constructor` that points back to the class of `Instructor`. 

Similarly, if you type 'instructor' into your console to check the new instance, you should be presented with properties that are found directly on that instance, as well as quite a bit of other information:

![instance in the console](/assets/images/lessons/oop/instance.png)


It is likely that you have seen this (somewhat overwhelming) list of properties while working with other types of data in your console - not just functions and objects.

![the prototype chain simlified](/assets/images/lessons/oop/chain.png)


#### On Your Own

In your console, declare an array literal name `food` in your console. This should be a list of the last three things that you ate. What happens when you type `food.`? What is the browser attempting to autocomplete? What familiar properties are showing up? 

## __proto__

You'll notice that when we checked our array literal in the console, there was no property of `prototype` listed. This is because arrays are _not_ functions, so the special object with the name/property of `prototype` is not automatically assigned. However... _everything_ that we have checked in the console thus far has had the property `__proto__`.

`__proto__`, or "dunder-proto" (double-underscore proto), is a property that exposes the internal `[[prototype]]` property. This `[[prototype]]`property acts a as a reference that points to a function's prototype object. It is this reference, or linking, between objects that makes up the prototype chain a. The prototype chain (and objects linking in such a way) is what allows us to define behavior in one place (or one `prototype` object) and share it between many objects. 

![dunder proto at work](/assets/images/lessons/oop/prototype-chain.png)


#### Turn and Code

With a partner, save all the data types that you can think of to variables. Using the console, check the `[[prototype]]` link via the dunder-proto.

- What similiarties do you notice across data types? What differences?

# The Prototype Chain

It is this linking between objects that makes it so that objects are not limited to using the methods that are formally defined directly on that object - they can also ask objects further up the chain for help.

When the interpreter is attempting to access a property on an object, it will start by looking directly on that object. If that property is not found, the objects internal `[[prototype]]` property will point to the object to examine next. The interpreter will continue to travese the prototype chain to seek a resolution for the property... until the end of the prototype chain is reached (resulting in `null`). 

The most common way to link two objects together (and extend the prototype chain that is built-in to the language) is to use the `new` keyword with the invocation of a function. When this occurs, the new object instance that is created will automatically set the instance's `[[prototype]]` property to point to that function's `prototype`. 

_*Note: There are a number of ways to extend the prototype chain. You can find discussions on other ways [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Different_ways_to_create_objects_and_the_resulting_prototype_chain)*_

## Checks for Understanding

* Describe the prototype chain. Why is the chain in place? Why would the interpreter traverse this chain?
* What is the difference between `prototype` and `[[prototype]]`?
