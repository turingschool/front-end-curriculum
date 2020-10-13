---
title: "JS: Classes"
length: 120
tags: js, introduction, constructor functions, this, classes, objects
---

## Learning Goals

* Understand what `this` is and how it changes based on context
* Understand what a class is and what object instances are

## Vocabulary

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a Value on an Object
- `Value` The data referenced by a Key
- `Property` Another word for the 'Key' portion of a key-value pair on an object
- `Method` A function on an Object
- `Dot Notation` Notation to access a Value on an Object, explicitly specifies the Key
- `Bracket Notation` Notation to access a Value on an Object, usually specifies a Key via a variable
- `this` A JavaScript keyword with a value that changes depending on the context in which it's used
- `Class` A constructor that allows us to create multiple instances
- `Object Instance` Objects that contain the data and functionality defined in the class

<section class="Call to Action">
### Reconnecting with previous learning
In your notebook, or wherever you take notes, reflect on the following:
- What do I already know about classes?
- What do I already know about instances?

After you've thought about those prompts - discuss them with a partner and add your thoughts to [this Jamboard](https://jamboard.google.com/d/1N_G69-A-4XGHYsJEKC0hfEfWxxGFWpO9lUJmvx_t8SA/edit?usp=sharing)
</section>

## Introduction to `this`

Let's consider our school object from before, but with a different method:

```javascript
var school = {
  name: "International School of Denver",
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
};
```

You may have noticed that we used a familiar word, this, in a strange way in the `checkOpenSpots` method of our `school` object.

Like `var` and `function`, `this` is a special keyword in JavaScript. The value of it can change inside of function code. Invoking a function in different ways can change the value of `this`. It is ***dependent on the `context` of where it is referenced***.

<div class="lesson-segment">
  <h3>Warm Up</h3>
  <p>Choose a driver and a navigator. The driver should start by forking <a href="https://repl.it/@ameseee/this">this repl.it</a>.</p>
  <p>Together, un-comment out each <code>console.log</code> one at a time, starting with line 10. Before you run the code, predict what will print out.</p>
</div>

There are two primary rules of thumb when it comes to `this`:
1. If `this` is used in the context of an object, then `this` refers to and is bound to THE OBJECT itself.
2. Otherwise, when it is used in the _global context_, `this` refers to the global objects of `document` or `window`.

<section class="call-to-action">

### Turn & Talk

With the key point above in mind, why did you sometimes get a value (string, number, array), and sometimes get undefined in the previous activity? Explain with as much technical vocabulary and precision as possible.
</section>

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents;`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.

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

var showWidth = function() {
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
  getArea: function() {
    console.log("in the room object", this);
    return this.width * this.height;
  },
};

```

<div class="lesson-segment">
  <h3>Practice</h3>
  <p>Work with your partner through the exercise in the code snippet below. Make sure you start with a clean file.</p>
  <p><strong>The only rule:</strong> No copy pasting!</p>
</div>

```js
// Declare a global variable of name and assign the value of 'Elvis'

// What do you get when you run console.log(this.name) right now?

// Declare another global variable of human and assign it to an object with a property of name that stores a different value.

// The line below creates a function like we did before (refer to the the GLOBAL VARIABLES example where we created a function called showWidth to log an object's width with "this.width" to the console), but this time leverage the context of `this` to print a name.
function sayName() {
  console.log("Hello! My name is " + this.name);
}

// Call the sayName function now

// Based on your results, what is the context of 'this'?

// The line below adds a property called getName to our human object and assign it the value of our sayName function
human.getName = sayName;

// What does the human object look like now? Print it to the console to check!

// The line below calls the getName method on the human object
human.getName();

// What do your results tell you about the context of this now?

// Create a second object with a different name value and use the same getName/sayName key value pair.
```

<section class="note">

**KEY TAKEAWAY:** The context of this within a function will be determined by _what object the function gets called on_.
</section>

<br>

## Classes and Object Instances

Thus far, we've only talked about creating one-off objects using object literals, but what happens if we want to create many objects with the same properties?

This is where classes come in. **Classes** can serve as object factories that allow us to create multiple objects of the same type, which are commonly referred to as **object instances**.

<div class="lesson-segment">
  <h3>Brainstorm</h3>
  <p>With the person next to you, brainstorm three <strong>types</strong> of objects and <strong>specific</strong> instances of that object that are at Turing.</p>
  <p>For example:</p>
  <ul>
    <li><strong>Type of Object:</strong> Laptop</li>
    <li><strong>Specific Instances:</strong> Louisa's laptop, Travis' laptop, Khalid's laptop</li>
  </ul>
</div>

### Syntax

The syntax for defining a class is as follows:

```javascript
class NameOfClass {
}
```

So, for example, if we wanted to create a Laptop class, we could do the following:

```javascript
class Laptop {
}
```

Generally we will want to put more information in our classes to make them useful to us, but those two lines (even with no other information) will create a class.

### Creating Object Instances

Let's practice together with a Fridge class.

```javascript
class Fridge {
}

var fridge1 = new Fridge();
console.log(fridge1);

var fridge2  = new Fridge();
console.log(fridge2);
```

We can run the repl to see what the fridges are showing at this point. We currently have no state or behavior for these fridge instances. But it is clear that they are instances of a fridge because they show up with `Fridge` before their `{}`.

<section class="call-to-action">

### Practice: Creating Object Instances
- Determine who will drive and who will navigate.
- In a brand-new repl file, define a `laptop` class, then create 2-3 object instances from that class.
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

The object instances of the classes we've defined so far are basically useless. Remember, objects are useful because they can store *state* and *behavior*. Let's give our refrigerator some state.

We can leverage our good friend `this` to add some properties to our instances. Inside of a class, `this` refers to an instance of that class.

For instance, if we wanted to use a class to create a pizza object, here's what that would look like next to an object literal that accomplishes the same thing.

```javascript
// object literal
var pizza1 = {
  crust: "thin",
  sauce: "red",
  toppings: ["cheese", "pepperoni", "black olives"]
}

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
var fridge1 = new Fridge("silver", 36, true, ["spinach", "chicken", "strawberries"]);
var fridge2 = new Fridge("black", 40, true, []);
```

Note that the arguments that we pass to our `Class()` are order dependent.

<section class="call-to-action">

### Practice: Adding Attributes
With your partner, build on the Laptop class you started earlier. Give your `Laptop` class some attributes and create some instances of Laptop.
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

  removeStench() {
    this.smelly = false;
  }

  adjustTemperature(temp) {
    this.temperature = temp;
  }

  addFood(food) {
    this.contents.push(food);
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
With your partner, create a `turnOn` method for your Laptop class. This should set the power of that laptop to *true*.

Finished Early? Complete the exercise in [this repl](https://repl.it/@ameseee/Classes-Extra-Practice). Remember, the quantity of work you get through is not what matters most, it's the depth of your understanding and ability to articulate your understanding of how things are working. Don't race through this and do continue to talk through each line with your partner!
</section>

<section class="checks-for-understanding">

### Check For Understanding

Take the last few minutes of class to self-assess by completing the form below. Once you submit, you will be emailed your responses and be able to view the "solutions" - this is just one solution/answer, yours may vary but still be accurate! Use this as an opportunity to identify what you understand and what you need to brush up on.
</section>

<iframe class="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdYAham4iJ8PGaPL2rZQ0OHrIkIt4MJ8tiVWoA7-EfwavNUBQ/viewform?embedded=true" width="100%" height="600px">Loading...</iframe>


## Additional Resources
* [Objects and Mythical Creatures Video](https://www.youtube.com/watch?v=wfrwMYn2BCg)
