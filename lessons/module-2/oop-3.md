---
title: "Objects: Inheritence"
length: 60
tags: javascript, object oriented programming, oop
module: 2
---

## Learning Goals

By the end of this lesson, you will be able to:

* Understand and describe OOP and its benefits
* Implement and structure a basic program around objects
* Understand prototypal inheritance

## Vocab

- `OOP` Object Oriented Programming
- `Object` A data structure of key value pairs that groups related data and behavior
- `Class` A blueprint or template of an object that describes what information it should contain and how it should interact with the data
- `Subclass` A class that inherits from a parent class (also known as a child class)
- `Instance` One specific copy of an object
- `Inheritance` The practice of allowing new objects to take on the data and behavior of their parents
<!-- - `Encapsulation` Hiding the details of how an object works & grouping data and behavior
- `SRP` Single Responsibility Principle
- `Coupling` The level of connectedness between two objects -->


## Benefits

* Code reusability
* Encapsulation: values are scoped to the specific object
* Design & Scalability: OOP forces programmers to meticulously plan the project. OOP is also much more maintainable for larger programs
* Maintainable: OOP tends to be easier to modify specific pieces of the code without affecting the larger program


## Inheritance

Inheritance allows you to create an object based on another one. Let's look at an example of an inheritance structure:

![instrument example](https://koenig-media.raywenderlich.com/uploads/2017/05/ObjectOrientedProgramming-graph-2.png)

We have a top-level **parent class** called `Instrument`. An `Instrument` might have a name, and be able to play music. But then we can branch out further from there, and create guitars, pianos, violins, etc. 

Each of these more specific instruments should all still have a name and be able to play music - but they might start having their own behaviors and properties. For example, a guitar might have a property that denotes if it's acoustic or electric. A piano might have a property that denotes how many keys it has.

As we get more specific, we create new classes that are based on our parent `Instrument`, and we allow them to each **inherit** the name property and the ability to play music from that parent. This allows us to share a single method across many subclasses, keeping our code DRY and performant.

Let's go back to our previous example with an Instructor:

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

We can now create some Teaching Assistants, which are a more specific type of instructor. Teaching Assistants should have a name, module, and traits property, just like instructors do. They should also be able to teach lessons, grade projects, and schedule check-ins. Because TAs have so much in common with Instructors, we can create a **child class** or a **sub class** that inherits all of the properties and methods from our Instructor class. The only new behavior we need TAs to perform is to schedule check-ins.

We can create a child class like so:


```js
class TA extends Instructor {
  constructor(name, module, traits) {
    super(name, module, traits);
  }

  scheduleCheckIns() {
    console.log('Scheduling checkins!');
  }
}


let bob = new TA('Bob', 2, ['serious']);
```

**Syntax breakdown:**

* We create a new class called `TA` that **extends** from `Instructor` (this tells our TA that it is going to be subclass of `Instructor`)
* We create our constructor, which takes in the same parameters as our `Instructor` class
* Within our constructor, we can invoke the built-in `super` function to call the constructor method of the parent class, passing through **only** the properties that it needs to inherit from the parent class
* We add our additional behavior method - scheduling check-ins

<!-- When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object. -->

##### More about super

The super keyword is used to access and invoke methods on the parent class. In the example above, the super keyword is used to invoke the constructor method of the parent class.

The super keyword allos us to call a function (the class we are extending) that is definied somewhere else, but keep the current context (of our child class). 

This will allow the parent constructor to add any inherited properties to the new instance of our class. 

#### OOP: Animals and the Zoo

With a partner, think about your last trip to the Zoo and come up with at least three things that could be templated with a class. What properties and methods might it have? Come up with a subclass that could inherit from it and either add new behaviors, or override existing ones. Create a repl for them!


<!-- 
#### Old Way:

```
function Vehicle(color, price) {
  this.color = color;
  this.price = price;
}

Vehicle.prototype.manualDrive = function() {
  // manually drive the car!
}

function Tesla(color, price) {
  Vehicle.call(color, price);
  this.chargingPort = 'microUsb';
}

Tesla.prototype.autoDrive = function() {
  // automatically drive the car!
}
```

 -->


## Checks for Understanding

* Explain how inheritance works
* Why do we call `super()` in the inherited class's constructor?


## Further Reading


* [Class-based vs. prototypal inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
* [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

<!-- ## Review Prompt

_**Review**_

// Given these two classes, what properties and/or methods would a parent class of Pet have? What would need to modified/removed/added on our classes of `Dog` and `Cat` for them to inherit from `Pet`?

```js
// Dog.js

class Dog {
  constructor(name, breed, tricks) {
    this.name = name;
    this.breed = breed;
    this.tricks = tricks;
  }

  learnTrick() {
    if (typeof trick === 'string' && !this.tricks.includes(trick) ) {
      this.tricks.push(trick);
    }
  }
}

// Cat.js

class Cat {
  constructor(name, breed, faveTreat) {
    this.name = name;
    this.breed = breed;
    this.faveTreat = faveTreat;
  }

  feedTreat(treat) {
    if ( this.faveTreat == treat ) {
      return `${this.name} eats a treat: ${treat}`
    } else {
      return `${this.name} casually sniffs the ${treat} and then ignores it.`
    }
  }
} 
``` -->