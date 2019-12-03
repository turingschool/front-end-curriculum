---
title: Objects, `this`, Classes, & Instances
length: 120
tags: js, introduction, constructor functions, this, classes, objects
---

## Learning Goals

* Describe what an object literal is
* Define properties and methods in an object literal
* Access values and methods from an object using dot and bracket notation
* Understand what `this` is and how it changes based on context
* Understand what a class is and what instances are

## Vocabulary

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a Value on an Object
- `Value` The data referenced by a Key
- `Property` Another word for the 'Key' portion of a key-value pair on an object
- `Method` A function on an Object
- `Dot Notation` Notation to access a Value on an Object, explicitly specifies the Key
- `Bracket Notation` Notation to access a Value on an Object, usually specifies a Key via a variable
- `this` A variable that changes depending on the context in which it's used
- `Class` A constructor that allows us to create multiple instances
- `Object Instance` Objects that contain the data and functionality defined in the class

## Objects

Objects are an abstraction, or the representation of real world things in computer programming.
They are meant to bundle together two things:

1. State (data)
2. Behavior (functions)

## Anatomy of Objects

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in JavaScript to declare an object is curly braces ```{}```. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var emptyObject = {};```

Objects are a collection of _key-value pairs_ surrounded by _curly braces_. A _key_ is like a _name_ that holds a value. You're actually used to working with key-value pairs already, because a key-value pair in an object is similar to a variable - the variable name serves as a label for the data we really care about referencing.

In the context of objects, that variable is called a _property_ of the object. Each property in an object **must be unique**. You cannot have two properties with the same name. When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: "value1",
  property2: "value2",
  method1: function() {
    return "I'm a method, because I am a function!";
  },
};
```

Which looks like this when we implement it in code:

```javascript
var school = {
  name: "International School of Denver",
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  sendWelcomeMessage: function() {
    return "Welcome to International School of Denver!"
  },
};
```
The `school` object has four properties:

- `name: "International School of Denver"`
- `capacity: 250`
- `languageImmersion: true`
- `currentStudents: 75`

The `school` object has one method:

```js
sendWelcomeMessage: function() {
  return "Welcome to International School of Denver!"
},
```

### Access Properties

There are two ways to access the properties or methods of an object:

The most common is dot notation:

```js
var schoolName = school.name;
var schoolCapacity = school.capacity;
```

<section class="call-to-action">

### Partner Practice: Accessing Properties

Choose a driver and a navigator. The driver should start by forking [this repl.it](https://repl.it/@ameseee/Dot-Notation-Practice)

Together, complete each exercise listed in the comments below the two object literals. Write the code with a given direction directly below it, and do not delete code as you go.
</section>

There is also bracket notation:

```js
var schoolName = school["name"];
var schoolCapacity = school["capacity"];
```

Bracket notation is usually used when the name of the property is stored in a variable or parameter.  This can make it dynamic, since the value in a variable can _vary_.

```js
function getSchoolValue(prop) {
  return school[prop];
}

getSchoolValue("name");
```

Another example can be seen [here](https://github.com/turingschool-examples/javascript/tree/master/es5#properties).

Default to using Dot Notation unless you need to access properties with a variable/parameter.  

### Adding a Property

What if we wanted to add another property to an object after we already created it? By accessing the object and using dot notation, we can create another unique property and assign it whatever value we want. This works almost exactly like a variable. Take a look at an example below:

```js
school.address = "7701 E 1st Pl, Denver, CO 80230"
console.log(school);

// console output
// => {
//   name: "International School of Denver",
//   capacity: 250,
//   languageImmersion: true,
//   currentStudents: 75,
//   sendWelcomeMessage: function() {
//      return "Welcome to International School of Denver!"
//   },
//   address: "7701 E 1st Pl, Denver, CO 80230"
// }
```
<section class="call-to-action">

### Solo Practice: Reassigning & Adding
We are also able to reassign the value of a property in a similar way.
- Go back to the repl you were working on before, and add a property of "bestFriend" to `user1`. Assign it to a string of anything you want.
- Now try re-assigning `user1` **age** to 9. Then, re-assign `user2`'s **hobbies** to an array of your choice!
- 🤞Remember to call the object or the property on the last line of the file, and run the repl to verify the outcome!
</section>

<section class="checks-for-understanding">

### Stop and Reflect
**First:** Independently, take a few minutes to write about each prompt below:
- To start, go ahead and make an object or two.
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- We've already been using objects; can you think of a DOM method or property you've used?
- When we assign a function as the value of a key inside an object, what do we call it?

**Then:** Turn to your neighbor and explain the above object-related questions to each other. Practice makes perfect, so make sure you both get to explain.
</section>

<section class="call-to-action">

### Partner Practice: Access and Update
- Choose a driver and a navigator. The driver should start by forking [this repl.it](https://repl.it/@ameseee/Partner-Practice)
- Together, complete each exercise listed in the comments below the provided object literal. Write the code with a given direction directly below it, and **do not delete code as you go**.
</section>
<br>

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
  <h3>Explore <code>this</code></h3>
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

<div class="lesson-segment">
  <h3>Explore: <code>this</code> and the DOM</h3>
  <p>Visit <a href="">this CodePen</a>. Make sure the CodePen console is opened. Enter something in the input then click submit. What logs to the console?</p>
  <p>Before talking with your partner, try to reason through why the value of <code>this</code> is what it is.</p>
</div>
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
