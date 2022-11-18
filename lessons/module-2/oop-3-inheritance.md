---
title: "Objects: Inheritance"
length: 60
tags: javascript, object oriented programming, oop
module: 2
---

## Learning Goals

* Understand and describe OOP and its benefits
* Implement and structure a basic program around objects
* Understand how to utilize inheritance with classes

## Vocab

- `OOP` Object Oriented Programming
- `Class` A blueprint or template of an object that describes what information it should contain and how it should interact with the data
- `Subclass` A class that inherits from a parent class (also known as a child class)
- `extends` A keyword that is used in class declarations to create a class that is a child of another class.
- `super` A keyword that is used to access and call functions on an class' parent.
- `Inheritance` The practice of allowing new objects to take on the data and behavior of their parents

<section class="call-to-action">
### Warm Up

Discuss in groups:

In groups, add some stickies to [this Jamboard](https://jamboard.google.com/d/1IxfF8lH5n4rWk-o40ahxb7x3gotGXlo1LkrFkDUMxBs/viewer?f=0)

- What are some of the benefits of Object Oriented Programming? Think about why we organize code into classes.
</section>

<section class="answer">
### OOP Benefits

  * Code reusability
  * Encapsulation: values & functionality are scoped to the specific object
  * Design & Scalability: OOP forces programmers to meticulously plan the project. OOP is also much more maintainable for larger programs
  * Maintainable: OOP tends to be easier to modify specific pieces of the code without affecting the larger program
</section>

## Inheritance

Inheritance allows you to create an object based on another one. Let's look at an example of an inheritance structure:

![instrument example](https://koenig-media.raywenderlich.com/uploads/2017/05/ObjectOrientedProgramming-graph-2.png)

<section class="call-to-action">
### Discuss in groups:

- What traits or functionality do ALL instruments have?
- What traits or functionality could a guitar *inherit* from an instrument? What about a piano?
- Getting more specific, what traits/functionality do these **sub classes** *inherit* from the **parent class**?

| **Parent class**| **Sub class** |
| Guitar | Acoustic Guitar / Electric Guitar / Bass Guitar |
| Piano | Electric Keyboard / Grand Piano / Harpsichord |
| String instrument | Violin, Viola, Cello, Bass |

- Outside of instruments, can you think of other examples similar to the above?
</section>

### Inheritance syntax and examples

The basic inheritance syntax will look something like this:

```js
class Childclass extends Parentclass {...}
```

Let's go back to our previous example with an Instructor used in the [last lesson](https://frontend.turing.edu/lessons/module-2/oop-2-objects-and-prototype-chain.html):

```js
class Instructor {
  constructor(name, module, traits) {
    this.name = name;
    this.module = module;
    this.traits = traits;
  }

  teachLesson(duration, lesson) {
    if (duration > 3) {
      return `${this.name} can\'t teach a lesson that long!`;
    } else {
      return `Gunna teach you all real good about ${lesson}.`;
    }
  }

  gradeProject(project) {
    return `${this.name} is grading ${project}.`
  }
}

let instructor = new Instructor('Hannah', 2, ['hungry', 'calm']);
```

Similar to an instructor, we might have a teaching assistant class to keep track of this data. Teaching Assistants should have a name, module, and traits property, just like instructors do. They should also be able to teach lessons, grade projects, and schedule check-ins.

Instead of creating another class and re-creating these methods, we can create a **child class** or a **sub class** that inherits all of the properties and methods from our `Instructor` class. The only new behavior we need TAs to perform is to schedule check-ins.

<section class="call-to-action">
### In Breakout Groups

Here is an example of what our TA might look like with out new class *inheriting* specific properties and methods from the `Instructor` class.  Copy the `Instructor` class and the `TA` class into RunJS or Repl and complete the following exercises:

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

- What is `super`?  Try commenting it out and accessing `bob`'s properties.  What error do you get?
- Comment `super` back in and then log each of the properties including the `name`, `module`, and `traits`.
-  Check out the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) on `super`.
- Add a new property of `experience` to signify years of experience that TA has.  Check both the `Instructor` and `TA` to see which class has the added property.
- Should a `TA` still have access to their parent's methods?  Try having `bob` "teach a lesson" or "grade a project."
</section>

<section class="answer">
### Breakdown of Syntax  

* We create a new class called `TA` that **extends** from `Instructor` (this tells our TA that it is going to be subclass of `Instructor`)
* We create our constructor, which takes in the same parameters as our `Instructor` class
* Within our constructor, we can invoke the built-in `super` function to call the constructor method of the parent class, passing through the properties that it needs to inherit from the parent class
* We add our additional behavior method - scheduling check-ins
</section>

<section class="note">
### What is super?  

The `super` keyword in JavaScript acts as a reference variable to the parent class.
The `super` keyword is used to access and invoke methods on the parent class. In the example above, the `super` keyword is used to invoke the constructor method of the parent class.

When used in a constructor, the `super` keyword appears alone and must be used before the `this` keyword is used. The `super` keyword can also be used to call functions on a parent object while keeping the current context (of our **child class**).

Calling super() initializes `this` in `TA` class. It acts as the `Instructor` class constructor. Therefore, passing it its parameters initializes the properties in `Instructor` for `TA` which thereby inherits those properties.


</section>

<section class="call-to-action">
### OOP: Building out a game

With a partner, think about an arcade game such as Frogger, Galaga, Centipede, or Snake and come up with what parts could be templated with a class.

- What properties and methods might our **parent class** have?
- Come up with a **sub class** that could inherit from it and either add new behaviors or override existing ones.
- Create a Repl and build out atleast one **parent class** and two **sub classes**!
</section>

<section class="checks-for-understanding">
### Checks for Understanding

* Explain how inheritance works. How does this play into the Prototype Chain?
* Why do we call `super()` in the inherited class's constructor?
</section>

## Further Reading

* [MDN Super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
* [MDN Extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
* [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
