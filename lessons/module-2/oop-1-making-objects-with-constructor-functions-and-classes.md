---
title: "OOP I: Making Objects with Constructor Functions and Classes"
length: 180
tags: javascript, objects, constructors, classes this, oop
module: 2
---

## Learning Goals

* Define OOP and its benefits
* Describe how classes allow us to reuse code and create encapsulation
* Understand and describe what `this` is in JavaScript

## Vocab

- `OOP` Object Oriented Programming
- `Programming paradigm` A style or way of thinking about and approaching programming problems
- `Object` A data structure of key value pairs that groups related data and behavior
- `Constructor Function` A special function for reliably creating multiple
  instances of similar objects
- `Class` A blueprint or template of an object that describes what information it should contain and how it should interact with the data
- `Instance` One specific copy of an object
- `Encapsulation` Hiding the details of how an object works & grouping data and behavior
- `SRP` Single Responsibility Principle
- `Coupling` The level of connectedness between two objects
- `this` keyword that references the current context (or owner) of the code being executed

---

<section class="call-to-action">
### Journal Warm Up
  * What might be a benefit of placing methods inside of objects (as opposed to defining them as functions outside of objects)? 
  * Create an object literal based on this sentence: This school is a non-profit, in a basement, that opens at 9 and closes at 5.
</section>

# Programming Paradigms 

A programming paradigm is a "style" or way of thinking about and approaching problems. JavaScript is considered a multi-paradigm language that allows you to freely mix and match object-oriented, procedural, and functional paradigms.

In all programs, there are two primary components:
  1. Data (stuff a program knows)
  2. Behaviors (stuff a program can do to/with that data) 


| | Functional | Procedural | Object-Oriented |
|--- |--- |--- |--- |
| **Focal Point** | Functions | Instructions | Objects |
| **Data/Behavior** | Separate: distinctly different| Global: shared by functions| Encapsulated: single location|

You can read more about the differences in these paradigms <a href="https://levelup.gitconnected.com/functional-object-oriented-procedural-programming-644feda5bcfc" target="\__blank">here</a>.

# OOP
Object Oriented Programming (OOP) will be our primary focus for this lesson - which is an approach that structures your code around objects rather than functions and procedures. *(Functional and procedural programming are beyond the scope of this lesson.)*

In OOP, real-world objects are each viewed as separate entities having their own state which is modified only by built-in procedures, called methods. Because objects operate independently, they are encapsulated into modules which contain both local environments and methods. Communication with an object is done by message passing.

## Benefits

* Code reusability
* Encapsulation: values are scoped to the specific object
* Design & Scalability: OOP forces programmers to meticulously plan the project. OOP is also much more maintainable for larger programs
* Maintainable: OOP tends to be easier to modify specific pieces of the code without affecting the larger program

## Objects

We said that OOP structures your code around objects. Let's review what an object is and what it means in the context of OOP.

An **object** is a data structure that allows us to group related information and behaviors into key-value pairs. Let's take a look at the following example:

```js
let instructor = {
  name: 'Pam',
  module: 2,
  traits: ['funny', 'smart'],
  primaryLesson: 'OOP',
  teachLesson: function(duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  },

  gradeProject: function(project) {
    return `${this.name} is grading ${project}.`
  }
};
```

Based on this object, we can say: "Our instructor is funny and smart and can teach lessons and grade projects."   

Let's think back to our primary education, and highlight the parts of speech in this sentence. 

* **noun:** instructor 
* **adjectives:** funny, smart  
* **verbs:** teach, grade 

If we map this back to JavaScript, we can assume:  

* **noun:** the name of our object (or properties on our object that are not methods)  
* **adjectives:** the values of our properties (sometimes these will not actually be adjectives, but the idea here is that the values of our properties are descriptors for our object) 
* **verbs:** the methods on our object  

Remembering these vocabulary rules will help you with creating semantic naming conventions for your objects and their properties. This will also help you with structuring your programs around objects when we dive further into object-orienting programming.

#### Your Turn

Take a moment to examine the school object that you created during the warm-up. Does it follow these naming conventions?

## Creating Many Objects

### Constructor functions

Let's go back to the instructor object we created earlier - say we're building an application for Turing that provides profiles for all the instructors on staff. We'd have to create about 20 different instructor objects that all have the same properties and methods, but whose values each vary. (e.g. each instructor has a different name). We would also have to constructor 100s of chair objects to keep track of every chair in the basement. This could be really repetitive and exhausting to build out individually.

This is where object constructor functions come into play. **Constructor Functions** are essentially just regular functions in JavaScript allow us to create multiple objects from a template. In order to do this, we invoke these functions with the `new` keyword:

```javascript
function Instructor(name, module, traits) {
  this.name = name;
  this.module = module;
  this.traits = traits;
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

var instructor = new Instructor('Pam', 2, ['funny', 'smart']);
```

#### Turn and Talk

* With a partner, compare the instructor object literal that we started with to the constructor function above. What is similar? What is different? 

### Classes

Since 2015, we now have a much cleaner, nicer way to create multiple objects: classes. **Classes** in JavaScript are templates, or blueprints, for creating many objects that share properties and behaviors, but might vary in their values.

*(Nice-to-Know Note: You might hear some people say that 'JavaScript doesn't have classes.' This is technically true, but a moot point. Classes in JavaScript are simply syntactic sugar over constructor functions.)*

For our Turing application, we can create an Instructor class - which allows to define a constructor and a set of a methods in a single place:

```js
class Instructor {
  constructor(name, module, traits) {
    this.name = name;
    this.module = module;
    this.traits = traits;
  }

  teachLesson(duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  }

  gradeProject(project) {
    return `${this.name} is grading ${project}.`
  }
}

var instructor = new Instructor('Pam', 2, ['funny', 'smart']);
```

Let's break down this syntax a bit:

1. we start off using the keyword `class`
2. we name our class `Instructor`, starting with a capital letter (this is convention for denoting it's a special type of object -- it's a class)
3. we open up some curly braces (just like a regular object)
4. we immediately set up a **constructor** method (where we set our instance properties). This provides us with the actual constructor function that is bound to the name of the Class
5. we define our own custom methods of `teachLesson` and `gradeProjects`


## Creating Instances

Now that we have our Instructor class, we can spin up a bunch of instructor objects by creating instances. An **instance** is a single object created based on the template provided by the class. 

When thinking about the relationship between classes and instances, we would say:

* a class is the template for each instance
* each instance is an object based off of the class template

To create new instances of an Instructor, we would do the following:

```js
let pam = new Instructor('Pamela Lovett', 2, ['funny', 'smart']);
let brittany = new Instructor('Brittany Storoz', 2, ['honest', 'smart']);  
```

We declare a new variable, and use the `new` keyword to instantiate a new object from our Instructor class.

This is a lot more concise than creating separate object literals for each of our instructors, saves memory (as both instances now share the same `teach` and `grade` methods), and DRYs up our code significantly. Being able to re-use a class template to create multiple objects is one of the core benefits of OOP. 

Another benefit we see here is called **encapsulation**. Only the `pam` variable knows anything about that instance's name, module, and trait properties. The `brittany` variable doesn't know anything about pam, and it doesn't have to! Each instance property is scoped directly to that particular instance. We want our objects to know as little as possible about each other. This prevents them from having unintended effects on each other, and allows them to work independently.

For example, if `brittany` relied on `pam` being funny and smart, and all of a sudden `pam` became boring and stupid, now `brittany` could potentially be broken.

This connectedness between the two objects is referred to as **coupling**. The more objects depend on each other, the more **tightly coupled** they are. A good goal as a programmer is to make objects as independent as possible, meaning they can be tested as stand-alone units and don't have too many dependencies on other objects to perform their respective duties.


## Single Responsibility Principle/Principle of Least Knowledge

Avoiding these dependencies means following the single responsibility principle and the principle of least knowledge. These concepts suggest that each of our objects should have a single, focused duty, and should know only as much information as it needs to perform it. This creates fewer dependencies and prevents bugs from creeping into our codebase. A good comparison would be to think about how our organs work - a [heart](https://www.youtube.com/watch?v=HYWmYJNg5Jw) can be maintained for transplant in a box because it's completely unaware of its surroundings and doesn't know that it's not inside a body because it has a single responsibility: to beat, and knows as little as possible about the rest of the system it's attached to.

#### Turn and Talk

- Explain classes and class instances to the person next to you
- Describe SRP in your own words

# The keyword `this` 

The keyword `this` is commonly used inside functions and objects - just as our examples above have shown. Since the keyword of `this` can be confusing in JavaScript, here are a couple of definitions to help clarify:

* `this` refers to the current context (or owner) of the code being executed
* `this` refers to the object on which the current function is called
* Context is most often determined by how a function is invoked

---

In our Instructor class below, `this` is bound to the new instance being constructed by our class.

```js
class Instructor {
  constructor(name, module, traits) {
    // new empty object will log
    console.log(this);  

    this.name = name;
    this.module = module;
    this.traits = traits;

    // object with added properties will log
    console.log(this);
  }

  teachLesson(duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  }

  gradeProject(project) {
    return `${this.name} is grading ${project}.`
  }
}

var instructor = new Instructor('Pam', 2, ['funny', 'smart']);
```

*Why?*

Q. _How_ are constructor functions _and_ classes invoked?  
A. With the `new` operator  

RULE: The keyword `this` in functions invoked using the `new` operator refers to the new instance of that object. 

---

In our instructor object literal, `this` is going to reference the object in our example: 


```js
let instructor = {
  name: 'Pam',
  module: 2,
  traits: ['funny', 'smart'],
  primaryLesson: 'OOP',
  teachLesson: function(duration) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${this.primaryLesson}`;
    }
  },

  gradeProject: function(project) {
    return `${this.name} is grading ${project}.`
  }
};

instructor.teachLesson(3);
```

*Why?*

Q. _How_ are the functions in this example being invoked?  
A. The function (`teachLesson`) will be executed as a method on an object  

RULE: When executing a function as a method on a object, `this` refers to that object.

#### Turn and Talk
- With a partner, describe how we can determine the context of code that is being executed. What are the two rules that we've covered thus far?

## Checks for Understanding

* What is OOP and some of the benefits that we've discussed today?
* Describe what a class is. Why would you use one? What does the `constructor` method within a class do?
* What is `this` in JavaScript?

## Further Reading
* [Intro to OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
