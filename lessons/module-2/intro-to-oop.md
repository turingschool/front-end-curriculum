---
title: Intro to Object Oriented Programming
length: 60
tags: javascript, object oriented programming, oop
module: 2
---

## After this lesson you should...
* Have a high-level understanding of what OOP is
* Be able to speak to the benefits of OOP
* Understand inheritance

## Vocab

- `OOP` Object Oriented Programming
- `Object` A grouping of data and behavior
- `Class` A blueprint or prototype of an object
- `Subclass` A class that inherits from a parent class
- `Instance` One specific copy of an object
- `Inheritance` The practice of allowing new objects to take on the data and behavior of their parents
- `Encapsulation` Hiding the details of how an object works & grouping data and behavior
- `Message Passing` The way in which Objects talk to each other
- `SRP` Single Responsibility Principle
- `Coupling` The level of connectedness between two objects

---

# What is Object Oriented Programming?

###### Here's a definition from [Techtarget](http://searchmicroservices.techtarget.com/definition/object-oriented-programming-OOP):

* _Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic._

###### Here's another definition from [techterms.com](https://techterms.com/definition/oop)

* _OOP (not Oops!) refers to a programming methodology based on objects, instead of just functions and procedures. These objects are organized into classes, which allow individual objects to be grouped together._

While some languages such as Java, C++ and Ruby are specifically object-oriented languages, JavaScript is very flexible and has the ability to be functional (partial functions, currying, etc.) or object-oriented.

### Examples:

![vehicle example](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-OOP-objects_and_classes.svg/220px-CPT-OOP-objects_and_classes.svg.png)


---


![car example](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CPT-OOP-objects_and_classes_-_attmeth.svg/300px-CPT-OOP-objects_and_classes_-_attmeth.svg.png)


---


![instrument example](https://koenig-media.raywenderlich.com/uploads/2017/05/ObjectOrientedProgramming-graph-2.png)


# Benefits

* Code reusability
* Encapsulation: values are scoped to the specific object
* Design & Scalability: OOP forces programmers to meticulously plan the project. OOP is also much more maintainable for larger programs
* Maintainable: OOP tends to be easier to modify specific pieces of the code without affecting the larger program

# How do objects work?


![object breakdown](http://www.teachitza.com/delphi/object.gif)

When you're considering creating an object you should follow the `Principal of Least Knowledge`. This principle can  be summarized by the following:

* Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
* Each unit should only talk to its friends; don't talk to strangers.
* Only talk to your immediate friends.

# Objects and Instances

You want to think of an object like it were a template and an instance of that object is a specific version or type of that original template.


TRY IT: With someone next to you, brainstorm a type of object and specific instances of that object. What types of properties and methods should they have? For example:

**Type of object (Class)**: Cubby

Properties: dimensions, location, items
Methods: addItems, removeItems

**Specific objects (Instances)**:

* Student cubby: 5x5, FE2, notebook
* Staff cubby: 7x7, staffArea, studentRoster

In the cases above, what we called "type of object" is called a Class, and what we called "specific objects" are called instances.

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

##### super keyword
The above example uses the super keyword. The super keyword is used to access and invoke methods on the parent class. In the example above, the super keyword is used to invoke the constructor function of the parent class. This will allow the parent constructor to add any inherited properties to the new instance of our class. Then we can add properties that are unique to the child class to the new instance of our class.


# Messages


![message passing](https://www.defit.org/wp-content/uploads/2012/06/message-passing-320x266.jpg)


![message example](https://www3.ntu.edu.sg/home/ehchua/programming/java/images/OOP_Objects.png)


This is how objects interact with each other. For example, if I'm driving my car and the gas tank light comes on, my car (an object) is sending me (another object) a message that I need to put gas in the car.

In order for objects to interact with each other they must communicate with messages. Messages are parameters that are essentially passed back and forth from object to object. The messages use parameters to make sure the information is precise. If the receiving object does not have enough information, it will not be able to properly carry out the method

<!-- # SRP and Coupling

Objects have expectations. When creating objects, you should always strive to have them know as little as possible or basically follow the SRP ([Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)). The more each object knows essentially the more dependencies that are added. That means that there is a higher likely hood that something will break.

Coupling refers to the level of connectedness between two objects. Objects will need to interact with one another and therefore can create dependencies. A good goal as a programmer is to make objects as independent as possible, meaning they can be tested as stand-alone units and don't have too many dependencies on other objects to perform their respective duties.

 -->
# Code Along

Clone [this repo](https://github.com/brittanystoroz/flash-cards-oop) and `cd` into the project directory. Run `npm install` in your terminal, and open the project in your text editor.

We'll be building out some classes to create a minimal flash card application.


## Further Reading

* [Class-based vs. prototypal inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)