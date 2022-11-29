---
title: "JS: Objects"
length: 90
tags: javascript, foundation, objects, dot notation, bracket notation, method
---

## Learning Goals

* Describe what an object is
* Define properties and methods in an object
* Access values and methods from an object using dot notation

## Vocabulary

- `Object` A bundle of behavior (methods) and state (properties)
- `Key` The name used to reference a value on an object
- `Value` The data referenced by a key
- `Property` How we refer to one of the key-value pairs of an object
- `Method` A function on an object
- `Dot Notation` Notation to access a value on an object; explicitly specifies the key
- `Bracket Notation` Notation to access a value on an object; can be dynamic

## Part 1: Student Exploration

We will start this lesson with a BIG chunk of work time. You might be thinking - What! We haven’t learned anything yet! That’s not true! You already know some stuff about these concepts from Mod 0. Plus, you have problem solving skills (and googling skills 😉).

We want to give YOU a chance to dig into the code and explore before we all get together and talk about these concepts. It’s okay (and expected!) that some of this activity will be difficult on your own. We want you to get used to that feeling - not knowing all the answers - and start to enjoy the process of diving in and getting your hands dirty in the code!



**Spend one hour working through [this repl](https://replit.com/@kaylaewood/objects#index.js)**. As you're working, write down the following things in your notes:
* Ah-ha moments/Key Points (for example: `You can access values in an object with dot notation.`)
* Questions (for example: `Can you ever have an object inside of another object?`)

If you get stuck...
* Reference [this Intro to Objects lesson](https://frontend.turing.edu/lessons/module-1/js-intro-to-objects.html)
* Reference [javascript objects documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).  Use the search bar and Command+F to search for specific terms and concepts
* Google (for example: `invoke object method javascript`)
* Write down your question/what exactly you're stuck on and move on. Then ask that question when we get on the zoom call!

After this hour, we will continue with the remainder of this lesson guided primarily by your questions.

## Part 2: Class Discussion

### Questions

Asking questions is an essential part of being a developer. Take a few minutes right now to look through your notes from the last hour. What questions do you have about data types, variables, interpolation and concatenation? Everyone should have at least one question! Let's add those questions to [this jamboard](https://jamboard.google.com/d/1e3bH0_5I3gb3Jn8pzML9gFH0PelpzzPVZDWVm0nPycA/edit?usp=sharing).

### Key Points

We just went through **a lot** of information. Let's go over the most important things we need to know.  

<section class="answer">
### Why are objects useful?

Objects bundle together information in a way that is much more readable and accessible. For example, think about modeling a car's features in code. You might do something like this:
```js
var carMake = 'subaru';
var carModel = 'forester';
var carMiles = 34506;
var carPassengers = ['Joy', 'Khalid', 'Billy', 'Leah'];
```
That's all fine, but those variables aren’t tied together in any sensible way. Here's where an object can be super helpful!
```js
var car = {
  make: 'subaru',
  model: 'forester',
  miles: 34506,
  passengers: ['Joy', 'Khalid', 'Billy', 'Leah']
};
```
</section>

<section class="answer">
### How do we reassign values in an object?

Just like variables, you can reassign the value in an object at any time. You can even add new properties!
```js
var fruit = {
  type: 'banana',
  ripe: false
}
```
Bananas ripen SO fast! Let's update the object:
```js
fruit.ripe = true;
```
Notice that we don't need to use the keyword `var` when we reassign the value - just like when we reassign variables!  

Uh oh! Now the banana has ripened too much. Let's add a new property:
```js
fruit.rotten = true;
```
Now, the object's properties are:
```js
{
  type: 'banana',
  ripe: true,
  rotten: true
}
```
</section>

<section class="answer">
### What are methods and how do we invoke them?

When we assign a function as the value to one of our keys, we call that function a method. Just like other properties, we use a key name followed by a colon. Then, the value is an **anonymous function** (an unnamed function). Check this out:

```js
var car = {
  make: 'subaru',
  model: 'forester',
  miles: 34506,
  passengers: ['Joy', 'Khalid', 'Billy', 'Leah'],
  pickUpPassenger: function(newPassenger) {
    this.passengers.push(newPassenger);
  }
};
```
Then, we invoke the method by combining what we know about objects and functions:
```js
car.pickUpPassenger('Quinn');
```
Now, the car's passengers array would include Quinn!

Note: Don't worry about `this` in that code block - we'll cover that soon :)
</section>

<section class="answer">
### Can we have objects inside of objects?

Yeah we can! For example here's an object with properties that have object values:
```js
var meals = {
  breakfast: { time: 9, dish: 'scrambled eggs' },
  lunch: { time: 12, dish: 'salad' },
  dinner: { time: 6, dish: 'burrito' }
}
```
We can **chain** multiple properties to dig into the values we want.
```js
meals.breakfast.time
// 9

meals.dinner.dish
// 'burrito'
```
There's no limit to how nested this data can get! Gnarly!
</section>

<section class="answer">
### What's the difference between dot and bracket notation? When and how do I use them?

Dot and bracket notation are both ways to access data in an object. While you'll mostly reach for dot notation because it's syntactically easier, there will be times where bracket notation is required.

Dot notation accesses a key name like this: `person.age`.
Bracket notation accesses a key name like this: `person['age']`.

Notice that bracket notation expects the key name to be a string. Dot notation does not require the quotes. You can see how dot notation might be more direct and easier.

Dot notation is limited because you have to use the actual, literal key name. You can never use a variable as a key name. For example:
```js
var person = {
  name: 'Hannah',
  age: 32
}

var lookUpKey = 'name';

person.name;
// 'Hannah'
// Explanation: Literally looks for a key of 'name' and finds it, returns the value of 'Hannah'

person['name'];
// 'Hannah'
// Explanation: Literally looks for a key of 'name' and finds it, returns the value of 'Hannah'

person[name];
// error
// Explanation: Looks for a variable of `name` and doesn't find it. Resolves to person[undefined] and returns error

person.lookUpKey;
// undefined
// Explanation: Looks for a key that is literally called "lookUpKey" and can't find it. It returns `undefined`.

person['lookUpKey'];
// undefined
// Explanation: Looks for a key that is literally called "lookUpKey" and can't find it. It returns `undefined`.

person[lookUpKey];
// 'Hannah'
// Explanation: The variable `lookUpKey` resolves into a string of 'name', resulting in `person['name']` which is 'Hannah'.
```

You might be wondering *When will be ever need to access a key via a variable?* and that's a great question! We'll definitely see use cases for this in M1. For now, get comfortable with dot notation, but remember that bracket notation is always there if (when) you need it!
</section>

## More Practice

If you'd like more practice with objects, work through the exercises in [this lesson](https://frontend.turing.edu/lessons/module-1/objects-review.html).

Post any questions you still have in your main cohort channel!
