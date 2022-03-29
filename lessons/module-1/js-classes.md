---
title: "JS: Classes"
length: 120
tags: js, introduction, constructor functions, this, classes, objects
---

## Learning Goals

- Understand what `this` is and how it changes based on context
- Understand what a class is and what object instances are

## New Vocabulary

- `Property` Another word for a key-value pair on an object
- `Method` A function on an Object
- `this` A JavaScript keyword with a value that changes depending on the context in which it's used
- `Class` A constructor that allows us to create multiple instances
- `Object Instance` Objects that contain the data and functionality defined in the class

## Familiar or Save-for-Later Vocab

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a Value on an Object
- `Value` The data referenced by a Key
- `Dot Notation` Notation to access a Value on an Object, explicitly specifies the Key
- `Bracket Notation` Notation to access a Value on an Object, usually specifies a Key via a variable

<section class="call-to-action">
### Reconnecting with previous learning
In your notebook, or wherever you take notes, reflect on the following:
- What do I already know about classes?
- What do I already know about instances?

After you've thought about those prompts - add your thoughts to [this Jamboard](https://jamboard.google.com/d/1N_G69-A-4XGHYsJEKC0hfEfWxxGFWpO9lUJmvx_t8SA/edit?usp=sharing)

</section>

## Introduction to `this`

Let's consider our school object from before, but with a different method:

```javascript
var school = {
  name: "International School of Denver",
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function () {
    return this.capacity - this.currentStudents;
  },
};
```

You may have noticed that we used a familiar word, this, in a strange way in the `checkOpenSpots` method of our `school` object.

Like `var` and `function`, `this` is a special keyword in JavaScript. The value of it can change inside of function code. Invoking a function in different ways can change the value of `this`. It is **_dependent on the `context` of where it is referenced_**.

<div class="call-to-action">
  <h3>Warm Up</h3>
  <p>Choose a driver and a navigator. The driver should start by forking <a href="https://repl.it/@ameseee/this" target="_blank">this repl.it</a>.</p>
  <p>Together, un-comment out each <code>console.log</code> one at a time, starting with line 10. Before you run the code, predict what will print out.</p>
</div>

There are two primary rules of thumb when it comes to `this`:

1. If `this` is used in the context of an object, then `this` refers to and is bound to THE OBJECT itself.
2. Otherwise, when it is used in the _global context_, `this` refers to the global objects of `document` or `window`.

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents;`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.

<section class="note">
Just a note:
The browser console and Replit behave differently regarding the _'global context'_. This can be confusing because the global objects may look different. Also, you may see differences in later exercises between the browser and Replit. This is okay! The above rules still apply. 
</section>

### Which `this` is which?

The default context of `this` is the `window` object.

However, the value of `this` changes in different situations. This can be confusing at first, but it also gives us a really dynamic, powerful tool. Let's look at some example situations:

**Example 1:**

This function is declared and invoked in the **global scope**, so the context of `this` is the `window` object.

```javascript
function boom() {
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [height, width];
}

boom();
```

**Example 2:**

`width` is a variable declared in the global scope. `showWidth` is a function expression declared and invoked in the global scope. When `showWidth` references `this.width`, it will look to the `window` object for a variable named `width` and it will find one since we declared it on the first line, in the global scope.

```javascript
var width = 600;

var showWidth = function () {
  console.log(this.width);
};

showWidth();
```

**Example 3:**

Since `room` is an object, anytime `this` is referenced inside of `room`, the context of `this` will be the `room` object itself. When `this.width` is referenced, the program will read that as `room.width` and look for a property of `width` on the room object.

```javascript
var room = {
  width: 800,
  height: 400,
  getArea: function () {
    console.log("in the room object", this);
    return this.width * this.height;
  },
};
```

<section class="call-to-action">
### Practice
Work through the exercises in this <a href="https://repl.it/@HannahHudson1/thisPractice#index.js">REPL</a>.
</section>

## Classes and Object Instances

Thus far, we've only talked about creating one-off objects using object literals, but what happens if we want to create many objects with the same properties?

This is where classes come in. **Classes** can serve as object factories that allow us to create multiple objects of the same type, which are commonly referred to as **object instances**.

### Syntax

The syntax for defining a class is as follows:

```javascript
class NameOfClass {}
```

So, for example, if we wanted to create a Laptop class, we could do the following:

```javascript
class Laptop {}
```

Generally we will want to put more information in our classes to make them useful to us, but those two lines (even with no other information) will create a class.

### Creating Object Instances

Let's practice together with a Fridge class.

```javascript
class Fridge {}

var fridge1 = new Fridge();
console.log(fridge1);

var fridge2 = new Fridge();
console.log(fridge2);
```

We can run this to see what the fridges are showing at this point. We currently have no state or behavior for these fridge instances. But it is clear that they are instances of a fridge because they show up with `Fridge` before their `{}`.

<section class="call-to-action">

### Practice: Creating Object Instances

- In a brand-new repl file, define a `Laptop` class, then create 2-3 object instances from that class.
- Keep this repl file open in a tab; we will come back to it throughout the next few sections of class.
</section>

### Constructor

When we run `new Fridge();` in JavaScript, what actually happens? We can see from the last example that different Fridge object instances are created and returned. Other than that, nothing happens. If we want some specific code to run when we first create a new Fridge, we need to tell JavaScript what should happen when a new Fridge object instance is created. We do this with the constructor method.

```javascript
class Fridge {
  constructor() {
    // constructor code here
  }
}
```

This method is run **once and only once** during an object instance's lifetime, when we use the `new` keyword in conjunction with the class to the class, in this case, `Fridge();`.

## Modeling State with Properties

The object instances of the classes we've defined so far are basically useless. Remember, objects are useful because they can store _state_ and _behavior_. Let's give our refrigerator some state.

We can leverage our good friend `this` to add some properties to our instances. Inside of a class, `this` refers to an instance of that class.

For instance, if we wanted to use a class to create a pizza object, here's what that would look like next to an object literal that accomplishes the same thing.

```javascript
// object literal
var pizza1 = {
  crust: "thin",
  sauce: "red",
  toppings: ["cheese", "pepperoni", "black olives"],
};

// class
class Pizza {
  constructor(crust, sauce, toppings) {
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }
}

var pizza2 = new Pizza("thin", "red", ["cheese", "pepperoni", "black olives"]);
```

Now lets look at a slightly less contrived example by adding some attributes to our `Fridge` class.:

```javascript
class Fridge {
  constructor(color, temperature, isPluggedIn, contents) {
    this.color = color;
    this.temperature = temperature;
    this.isPluggedIn = isPluggedIn;
    this.contents = contents;
  }
}
```

Now we are able to actually create some fridges with some variation. Let's try creating a couple of instances in our repl.

```javascript
var fridge1 = new Fridge("silver", 36, true, [
  "spinach",
  "chicken",
  "strawberries",
]);
var fridge2 = new Fridge("black", 40, true, []);
```

Note that the arguments that we pass to our `Class()` are order dependent.

<section class="call-to-action">

### Practice: Adding Attributes

Build on the Laptop class you started earlier. Give your `Laptop` class some attributes and create some instances of Laptop.

</section>

## Implementing Behavior with Methods

We can also create methods that will allow us update the state of our Fridge class. For example, let's say we wanted to add eggs to our Fridge. We currently have a way to see what the `contents` of the Fridge are, but we don't have any way to add to them. Let's do that by creating a method called `addFood` that will add a food to the `contents` array.

Let's define an `addFood` method that allows us to put foods in your fridge.

```javascript
class Fridge {
  constructor() {
    this.temperature = 36;
    this.smelly = true;
    this.contents = [];
  }

  addFood(food) {
    this.contents.push(food);
  }

  removeStench() {
    this.smelly = false;
  }

  adjustTemperature(temp) {
    this.temperature = temp;
  }
}
```

<section class="call-to-action">

### Turn & Talk

- How would one invoke the `removeStench` function/method? Be specific.
- Describe, in detail, what the `removeStench` function/method does, and how it does it.
- How would one invoke the `adjustTemperature` function/method? Describe, in detail, what the `adjustTemperature` function/method does, and how it does it.
- How would one invoke the `addFood` function/method? Be specific.
- Describe, in detail, what the `addFood` function/method does, and how it does it.
</section>

<section class="call-to-action">

### Practice: Adding Behavior

With your partner, create a `turnOn` method for your Laptop class. This should set the power of that laptop to _true_.

Finished Early? Complete the exercise in [this repl](https://repl.it/@ameseee/Classes-Extra-Practice). Remember, the quantity of work you get through is not what matters most, it's the depth of your understanding and ability to articulate your understanding of how things are working. Don't race through this and do continue to talk through each line with your partner!

</section>
