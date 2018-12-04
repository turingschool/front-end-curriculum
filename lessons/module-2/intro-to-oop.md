---
title: Intro to Object Oriented Programming
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
- `Encapsulation` Hiding the details of how an object works & grouping data and behavior
- `SRP` Single Responsibility Principle
- `Coupling` The level of connectedness between two objects

---

### Journal Warm Up

* Describe one new or interesting thing that you learned about OOP from your research yesterday
* Rewrite this class as a function called `createUnicorn` that creates an object and returns it. The object should still have the same properties of `name` and `color` as well as a reference to a `sparkle` function that is declared outside of `createUnicorn`.

```js
class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  sparkle() {
    console.log('**!*')
  }
}
```

# Programming Paradigms 

A programming paradigm is a "style" or way of thinking about and approaching problems. JavaScript is considered a multi-paradigm language that allows you to freely mix and match object-oriented, procedural, and functional paradigms.

In all programs, there are two primary components:
  1. Data (stuff a program knows)
  2. Behaviors (stuff a program can do to/with that data) 


| | Functional | Procedural | Object-Oriented |
|--- |--- |--- |--- |
| **Focal Point** | Functions | Instructions | Objects |
| **Data/Behavior** | Separate: distinctly different| Global: shared by functions| Encapsulated: single location|


# OOP

Object Oriented Programming (OOP) will be our primary focus for this lesson - which is an approach that structures your code around objects rather than functions and procedures. *(Functional and procedural programming are beyond the scope of this lesson.)*

In OOP, real-world objects are each viewed as seperate entities having their own state which is modified only by built in procedures, called methods. Because objects operate independently, they are encapsulated into modules which contain both local environments and methods. Communication with an object is done by message passing.

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
  teachLesson: function(topic, duration) {
    let lessonDuration = duration;

    if (lessonDuration > 3) {
      return `This lesson is too long, I'm not teaching that.`;
    } else {
      return `Gunna teach you all real good about ${topic}`;
    }
  },
  gradeProject: function(student, project){
    `${student} got an A on ${project}!`;
  }
}
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

#### Turn and Code

Remembering these vocabulary rules will help you with creating semantic naming conventions for your objects and their properties. Take the following sentence and create an object based off of it:

<blockquote>The chair has a padded cushion and four legs with wheels that allow it to move from room to room.</blockquote>

## Classes

Let's go back to the instructor object we created earlier - say we're building an application for Turing that provides profiles for all the instructors on staff. We'd have to create about 30 different instructor objects that all have the same properties and methods, but whose values each vary. (e.g. each instructor has a different name). This could be really repetitive and exhausting to build out individually.

This is where Classes come into play. **Classes** are templates, or blueprints, for creating many objects that share properties and behaviors, but might vary in their values.

*(Nice-to-Know Note: You might hear some people say that 'JavaScript doesnt have classes.' This is technically true, but a moot point. Classes in JavaScript are simply syntactic sugar over constructor functions.)*

For our Turing application, we would create an `Instructor` Class that has properties of `name`, `module`, and `traits`, and methods of `teachLesson` and `gradeProject`:

```js
class Instructor {
  constructor(name, module, traits) {
    this.name = name;
    this.module = module;
    this.traits = traits;
  }

  teachLesson(topic, duration) {
    let lessonDuration = duration;

    if (lessonDuration > 3) {
      return `This lesson is too long, I'm not teaching that.`;
    } else {
      return `Gunna teach you all real good about ${topic}`;
    }
  }

  gradeProject(student, project) {
    return `${student} got an A on ${project}!`;
  }
}
```

Let's break down this syntax a bit:

1. we start off using the keyword `class`
2. we name our class `Instructor`, starting with a capital letter (this is convention for denoting it's a special type of object -- it's a class)
3. we open up some curly braces (just like a regular object)
4. we immediately set up a **constructor** method (where we set our instance properties)
5. we define our own custom methods of `teachLesson` and `gradeProjects`

#### Turn and Code

Take the chair object that you created above and rewrite it as a class.

### The Constructor Method

The constructor method should be the first thing you set up within your class. The constructor method is built into classes by default (JavaScript gives this to you). It takes in any property values you'd like to set on your object, and assigns them as **instance properties**.

We know we want our instructor to have a name, module, and traits, so we're going to allow users to pass these values in when they go to create a new instructor. You'll notice we're assigning each instance property with `this.nameOfProperty = propertyValue`. You must prefix each instance property with `this`

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

Coupling refers to the level of connectedness between two objects. It's inevitable that objects will need to interact with one another, and therefore can create dependencies. A good goal as a programmer is to make objects as independent as possible, meaning they can be tested as stand-alone units and don't have too many dependencies on other objects to perform their respective duties.

## Single Responsibility Principle/Principle of Least Knowledge

Avoiding these dependencies means following the single responsibility principle and the principle of least knowledge. These concepts suggest that each of our objects should have a single, focused duty, and should know only as much information as it needs to perform it. This creates fewer dependencies and prevents bugs from creeping into our codebase. A good comparison would be to think about how our organs work - a [heart](https://www.youtube.com/watch?v=HYWmYJNg5Jw) can be maintained for transplant in a box because it's completely unaware of its surroundings and doesn't know that it's not inside a body because it has a single responsibility: to beat, and knows as little as possible about the rest of the system it's attached to.

#### Turn and Talk

- Explain classes and class instances to the person next to you
- Describe SRP in your own words

## Inheritance

Inheritance allows you to create an object based on another one. Let's look at an example of an inheritance structure:

![instrument example](https://koenig-media.raywenderlich.com/uploads/2017/05/ObjectOrientedProgramming-graph-2.png)

We have a top-level **parent class** called `Instrument`. An `Instrument` might have a name, and be able to play music. But then we can branch out further from there, and create guitars, pianos, violins, etc. 

Each of these more specific instruments should all still have a name and be able to play music - but they might start having their own behaviors and properties. For example, a guitar might have a property that denotes if it's acoustic or electric. A piano might have a property that denotes how many keys it has.

As we get more specific, we create new classes that are based on our parent `Instrument`, and we allow them to each **inherit** the name property and the ability to play music from that parent. This allows us to share a single method across many subclasses, keeping our code DRY and performant.

Let's go back to our previous example and create some Teaching Assistants, which are a more specific type of instructor. Teaching Assistants should have a name, module, and traits property, just like instructors do. They should also be able to teach lessons, grade projects, and schedule check-ins. Because TAs have so much in common with Instructors, we can create a **child class** or a **sub class** that inherits all of the properties and methods from our Instructor class. The only new behavior we need TAs to perform is to schedule check-ins.

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
* Within our constructor, we invoke the built-in `super` function, passing through **only** the properties that it needs to inherit from the parent class
* We add our additional behavior method - scheduling check-ins

##### More about super

The super keyword is used to access and invoke methods on the parent class. In the example above, the super keyword is used to invoke the constructor function of the parent class. This will allow the parent constructor to add any inherited properties to the new instance of our class.

#### OOP: Animals and the Zoo

With a partner, think about your last trip to the Zoo and come up with at least three things that could be templated with a class. What properties and methods might it have? Come up with a subclass that could inherit from it and either add new behaviors, or override existing ones. Create a repl for them!

### Prototypal Inheritance

Let's inspect our `bob` TA in the developer tools. In the console tab, you should be able to type in `bob` and get a representation of the bob object like so:

![prototypal](https://i.imgur.com/E01qcn7.png)

Here you can see the entire prototype chain, and how `bob` is inheriting properties and methods from the `Instructor` class. This is called **prototypal inheritance**.

<!-- ## More Practice

Pick an application you use regularly -- it can be a social media app, e-commerce site, etc. Think about what kinds of classes you might use to build it. What components of the application should be reusable? What kinds of properties and behaviors should they have? Could anything inherit from them? -->

<!-- 

### Examples:

![vehicle example](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-OOP-objects_and_classes.svg/220px-CPT-OOP-objects_and_classes.svg.png)


---


![car example](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CPT-OOP-objects_and_classes_-_attmeth.svg/300px-CPT-OOP-objects_and_classes_-_attmeth.svg.png)


---


![instrument example](https://koenig-media.raywenderlich.com/uploads/2017/05/ObjectOrientedProgramming-graph-2.png)




# How do objects work?


![object breakdown](http://www.teachitza.com/delphi/object.gif)

When you're considering creating an object you should follow the `Principal of Least Knowledge`. This principle can  be summarized by the following:

* Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
* Each unit should only talk to its friends; don't talk to strangers.
* Only talk to your immediate friends.


# Inheritance

is when an object or class is based on another object (prototypal inheritance) or class (class-based inheritance), using the same implementation (inheriting from an object or class: inheriting behavior, programming by difference[1]) or specifying a new implementation to maintain the same behavior (realizing an interface). Such an inherited class is called a subclass of its parent class or super class.

Or, just...

When an object or class is based on another object or class.

So back to the car examples above...Although each new instance of the car class has unique attributes, it may come with one or more shared attributes given from its parent. For example, each instance might come stock with:
* 4 wheels
* Steering wheel
* Seat-belts

### Example:

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

#### New Way:

```
class Vehicle {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }

  manualDrive() {
    // manually drive the car!
  }
}

class Tesla extends Vehicle {
  constructor(color, price) {
    super(color, price);
    this.chargingPort = 'microUsb';
  }

  autoDrive() {
    // automatically drive the car!
  }
}

```

# Messages


![message passing](https://www.defit.org/wp-content/uploads/2012/06/message-passing-320x266.jpg)


![message example](https://www3.ntu.edu.sg/home/ehchua/programming/java/images/OOP_Objects.png)


This is how objects interact with each other. For example, if I'm driving my car and the gas tank light comes on, my car (an object) is sending me (another object) a message that I need to put gas in the car.

In order for objects to interact with each other they must communicate with messages. Messages are parameters that are essentially passed back and forth from object to object. The messages use parameters to make sure the information is precise. If the receiving object does not have enough information, it will not be able to properly carry out the method
 -->


<!-- # Code Along

Clone [this repo](https://github.com/brittanystoroz/flash-cards-oop) and `cd` into the project directory. Run `npm install` in your terminal, and open the project in your text editor.

We'll be building out some classes to create a minimal flash card application.

 -->


## Checks for Understanding

* What is OOP?
* What are the core benefits of OOP?
* What does the `constructor` method do?
* Explain how inheritance works


## Further Reading

* [Intro to OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
* [Class-based vs. prototypal inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
* [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

<!-- ## Review Prompt

_**Review**_

Given these two classes, create a parent class of `Pet` and refactor `Dog` and `Cat` so they inherit from it. 

```js
// Dog.js

class Dog {
  constructor(name, breed, tricksArray) {
    this.name = name;
    this.breed = breed;
    this.tricks = tricksArray;
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