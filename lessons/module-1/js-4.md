---
title: JS IV - Objects, `this`, classes, and instances
length: 120
tags: js, introduction, constructor functions, this, classes, objects
---

## Learning Goals

* Describe what an object literal is
* Understand how to define properties and methods in an object literal
* Understand what `this` is and how it changes based on context
* Understand what a class is and what instances are.

## Vocab

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a Value on an Object
- `Value` The data referenced by a Key
- `Property` Another word for the 'Key' portion of a key-value pair on an object
- `Method` A function on an Object
- `Dot Notation` Notation to access a Value on an Object, explicitly specifies the Key
- `Bracket Notation` Notation to access a Value on an Object, usually specifies a Key via a variable
- `this` A variable that changes depending on the context in which it's used
- `class` A construct that allows us to create multiple instances
- `instance` An object of a certain type

# Objects

### High Level
Objects are an abstraction, or the representation of real world things in computer programming.
They are meant to store two things:
1. State
2. Behavior

### Anatomy of Objects
Objects are a collection of _key-value pairs_ surrounded by _curly braces_. A _key_ is just a _name_ that holds a value. That sounds familiar, doesn't it? You're actually used to working with key-value pairs already, because a key-value pair in an object is essentially a variable. In the context of objects, that variable is called a _property_ of the object. Each property in an object must be unique. You cannot have two properties with the same name. When we assign a function as the value to one of our keys (remember that a function is a tool we use to return a value!), we call that function a _method_.

Let's look at an example:

```javascript
var objectName = {
  property1: value1,
  property2: value2,
  method1: function() {
    return "I'm a method, because I am a function!";
  }
};
```

Which looks like this when we implement it in code:

```javascript
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
};
```
The ```school``` object has four properties:

- ```name: 'International School of Denver'```
- ```capacity: 250```
- ```languageImmersion: true```
- ```currentStudents: 75```

The ```school``` object has one method:

```js
checkOpenspots: function() {
  return this.capacity - this.currentStudents;
}
```

There are several ways to create an object, and the easiest and most popular is _literal notation_. The only thing you need in javascript to declare an object is curly braces ```{}```. I swear. Although, it makes things a bit easier if you at least assign it to a variable, like so: ```var emptyObject = {};```

There are two ways to access the properties or methods of an object:

The most common is Dot Notation:

```js
var schoolName = school.name;
var schoolCapacity = school.capacity;
```

There is also bracket notation:

```js
var schoolName = school['name'];
var schoolCapacity = school['capacity'];
```

Bracket Notation is usually used when the name of the property is stored in a variable.

```js
var prop = 'name';
var schoolName = school[prop];
```

Another example can be seen [here](https://github.com/turingschool-examples/javascript/tree/master/es5#properties).

Default to using Dot Notation unless you find a need to use bracket notation.


### Your Turn
Step 1: Take a few minutes to write about the below individually:
- To start, go ahead and make an object or two.
- How do you create an object using literal notation?
- What is an object and what is it made up of?
- We've already been using objects... can you think of an example of a dom method or property you've used?
- When we assign a function as the value of a key inside an object, what do we call it?

Step 2: Turn to your neighbor and explain the above object-related questions to each other. Practice makes perfect, so make sure you both get to explain:

### Your Turn, Part 2
In the console (or a repl), in pairs, practice the following:

```javascript
// use this object literal
var burrito = {
  type: "carne asada"
};

// 1. Get the value of burrito
// 2. Get the value of type
// 3. Add a new property of your choosing
// 4. Check the value of burrito again
// 5. Ask burrito for the value of the new property you set, but utilize a different notation than when you asked for the value of type in step #2
// 6. Change the value of type
// 7. Get the value of burrito
// 8. Create a method on burrito that logs "Why am I so delicious?" to the console
// 9. Check the value of burrito. Do you see your method?
// 10. Use burrito to log "Why am I so delicious?"
```

### What is `this`: a 10,000ft Introduction
Let's consider our school object from before
```javascript
var school = {
  name: 'International School of Denver',
  capacity: 250,
  languageImmersion: true,
  currentStudents: 75,
  checkOpenSpots: function() {
    return this.capacity - this.currentStudents;
  }
};
```

You may have noticed that we used a familiar word in a strange way in the `checkOpenSpots` method of our `school` object. What the heck is `this`?

Like `var` and `function`, `this` is a special keyword in Javascript. The value of it can change inside of function code. Invoking a function in different ways can change the value of `this`. It is dependent on the _context_ of where it is referenced.

There are two primary rules of thumb when it comes to `this`:
1. When it is used in the _global context_, `this` refers to the global objects of `document` or `window`.
2. In the context of an object, `this` refers to and is bound to the object itself.

In our example `school` object above, `this` is referring to `school`. If we look at our `checkOpenSpots` method, we see the statement being returned is: `return this.capacity - this.currentStudents;` which is basically saying `return school.capacity - school.currentStudents;`.

`capacity` and `currentStudents` are properties of the `school` object, so when used in this context `this` refers to `school`.

### Which `this` is which?

**ProTip:** The default context of `this` is the `window` object. Try it out: In your console (not a repl), run `console.log(this);`. So without giving our browser ANY additional information, it tells us that the object we are working within is the `window`, which makes sense.

Unfortunately `this` is not that simple. The value of `this` changes in different situations. This can be confusing at first, but it also gives us a really dynamic, powerful tool. Let's look at some example situations:

```javascript
// FUNCTION DECLARATIONs - top of script, not inside another function or inside an object. The default object in this context is the `Window` object.
function boom() {
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [height, width];
}

// GLOBAL VARIABLES - global variables become properties of the `Window` in the browser object. When a function is in the global context, you can access global variables using the window object.
var width = 600;
var shape = {width: 300};
var showWidth = function() {
  console.log(this.width);
};
showWidth();

// METHOD OF AN OBJECT - when does a function become a method? When it is defined INSIDE an object. In a method, `this` refers to the containing object.
var room = {
  width: 800,
  height: 400,
  getArea: function() {
    console.log('in the room object', this);
    return this.width * this.height;
  }
};

```

**YOUR TURN**: Take a few minutes with the person BEHIND/IN FRONT OF you and work through the next series of code examples. If you've been following along with the code above in a repl/script file, comment all of it out so you are starting with a clean slate.

**Rule #1: No Copy Pasting.**

```js
// FUNCTION EXPRESSION AS A METHOD - what does that mean? An expression returns a single value. A function can be an expression. If you assign that function expression to a property on an object, it is then called a method.

// Declare a global variable of name and assign the value of 'Elvis'
var name = 'Elvis';

// What do you get when you console.log(this.name) right now?

// Declare another global variable of human and assign it to an object with a property of name that stores a different value.
var human = {
  name: 'Cher'
};

// Create a function like we did before (refer to the the GLOBAL VARIABLES example where we created a function called showWidth to log an object's width with "this.width" to the console), but this time leverage the context of `this` to print a name.
var sayName = function() {
  console.log('Hello! My name is ' + this.name);
}

// Call the sayName function now
sayName();

// Based on your results, what is the context of 'this'?

// Add a property called getName to our human object and assign it the value of our sayName function
human.getName = sayName;

// What does the human object look like now?

// Ask human what its name is
human.getName();

// What do your results tell you about the context of this now?

// Spoiler alert: `this` no longer refers to the global context (Elvis), because it is now a method scoped to a specific object (human), so "this" refers to that containing objects name property (Cher).

// Create a second object with a different name value and use the same getName/sayName key value pair.
```

**PRO TIP:** The context of this within a function will be determined by WHERE THE FUNCTION GETS CALLED.

Lets use [this codepen](https://codepen.io/damwhit/pen/XxeZpg?editors=1011) for another activity:

1. Individually, determine what the value of `this` is inside of your event listener.
2. Why is that the value of `this`, in this scenario?

## Classes and Instances

Thus far, we've only talked about creating one-off objects using object literals, but what happens if we want to create many objects with the same attributes?

This is where classes come in. **Classes** can serve as object factories that allow us to create multiple objects of the same type, which are commonly referred to as **instances**.

### Warmup

In your notebook brainstorm five **types** of objects and **specific** instances of that object that are at Turing.

For example:

* Type of object: Chair
* Specific instances:
    * Louisa's chair
    * Travis' chair
    * David's chair

### Syntax

The syntax for defining a class is as follows:

```javascript
class NameOfClass {
}
```

So, for example, if we wanted to create a Dog class, we could do the following:

```javascript
class Dog {
}
```

Generally we will want to put more information in our classes to make them useful to us, but those two lines (even with no other information) will create a class.

### Practice

Let's practice together with a Fridge class. Make a new node repl and let's put the following in that file:

```javascript
class Fridge {
}

var fridge1 = new Fridge();
console.log(`Number 1: ${fridge1}`);

var fridge2  = new Fridge();
console.log(`Number 2: ${fridge2}`);
```

Run the repl to see what the fridges are showing at this point. We currently have no state or behavior for these fridge instances. But it is clear that they are instances of a fridge because they show up with `Fridge` before their `{}`.

### Independent Practice

**TRY IT**: With your pair, define a Dog class in a repl and create instances of that class.

### Constructor

When we run `new Fridge();` in javascript, what actually happens? We can see from the last example that different Fridge objects (or instances) are created. Other than that, nothing happens. If we want some specific code to run when we first create a new Fridge, we need to tell JavaScript what should happen when a new Fridge instance (or object) is created. We do this with the constructor method.

```javascript
class Fridge {
  constructor() {
    // constructor code here
  }
}
```

This method is run once and only once during an instance's lifetime, when we use the `new` keyword in conjunction with `Fridge();`.


### Modeling State with Attributes

The instances of the classes we've defined so far are basically useless.

Remember, objects are useful because they can store *State* and *Behavior*. Let's give our refrigerator some state.

### Practice

In our repl, we'll add some attributes to the `Fridge` class.

We can leverage our good friend `this` to add some properties to our instances. Inside of a class, `this` refers to an instance of that class.

For instance if we wanted to use a class to create a pizza object, here's what that would look like next to an object literal that accomplishes the same thing.

```javascript
// object literal
var pizza1 = {
  crust: 'thin',
  sauce: 'red',
  toppings: ['pepperoni']
}

// class
class Pizza {
  constructor(crust, sauce, toppings) {
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
  }
}
var pizza2 = new Pizza('thin', 'red', ['pepperoni']);

```

Now lets look at a slightly less contrived example:

```javascript
class Fridge {
  constructor(color, temperature, isPluggedIn, contents)
    this.color = color;
    this.temperature = temperature;
    this.isPluggedIn = isPluggedIn;
    this.contents = contents;
  end
}
```

Now we are able to actually create some fridges with some variation. Let's try creating a couple of instances in our repl.

```javascript
var fridge1 = new Fridge("silver", 36, true, ["leftover pizza", "yogurt", "soylent"]);
var fridge2 = new Fridge("black", 40, true, []);
```

Note that the arguments that we pass to our `Class()` are order dependent.

### Independent Practice

**TRY IT**: With your pair, give your Dog class some attributes and create some instances of Dog.

## Other Methods

We can also create other methods that will allow us update the state of our Fridge class. For example, let's say we wanted to add eggs to our Fridge. We currently have a way to see what the `contents` of the Fridge are, but we don't have any way to add to them. Let's do that by creating a method called `addFood` that will add a food to the `contents` array.

### Practice

Define an `addFood` method that allows you to put foods in your fridge. 

```javascript
class Fridge {
  // ... constructor code 

  addFood(food) {
    this.contents.push(food);
  }
```

Update your repl so that you:

1. Create a new instance of Fridge.
2. Log the contents of that Fridge.
3. Add something to the contents of the Fridge.
4. Log the new contents of the Fridge.

### Independent Practice

**TRY IT**: With your pair, create a `celebrateBirthday` method for your Dog class. This should increase the age of that dog by 1.

## In Pairs

### Create a Book Class

With your partner, create a book class. Make sure that your book class has at least 3 attributes and 2 methods. Log those instances using your repl console or console.logs

### Create a Library Class

With your partner, create a Library class. Add attributes as you wish, but the be sure to include a `collection` property that starts as an empty array.

If you have time:

* Add an `addBook` method that takes an instance of book and adds it to your collection.
* Add a `titles` method that iterates over your collection of books and returns only their titles.
* Add an `authors` method that iterates over your collection of books and returns the authors for each book.

### Check for Understanding

With your partner, answer the questions below.

* Classes, instances, objects
    * What is a Class?
    * What is an Instance?
    * What is an Object?
    * How are these three things alike/different?
    * What happens when a new instance is created? What method is run?
    * What code do you have to write to create a Class? What code do you have to write to create an instance? What code do you write to create a one-off object?
* Properties & Methods
    * What is a property? How can we query a property?
    * How can we reassign the value of a property?
    * What is a method?
* `this`
    * What is the default value of this?
    * What scenarios change that value?

## Additional Resources
* [Objects and Mythical Creatures Video](https://www.youtube.com/watch?v=wfrwMYn2BCg)

