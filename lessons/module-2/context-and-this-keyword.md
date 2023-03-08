---
title: "Context and `this` keyword"
length:
tags: javascript, js, this, keyword
---

### Learning Goals

* Understand and describe what `this` is in JavaScript
* Determine what `this` is referencing in a codebase

## Vocab

- `Invoke` / `Execute` To run a function. e.g., "I've invoked the function here"
- `Declare` To write a function definition. Usually distinct from function execution
- `Constructor Function` The function called to create a new instance of an object. Usually contains the code to set up the object

## Defining rules about "this"

As we have discussed earlier, the keyword *this* in JavaScript can be confusing.  Depending on where *this* is used, it can refer to different things.  We're going to go through some examples and define a few rules that apply to the keyword *this*.

<section class="call-to-action">
### In Pairs

Consider the following `Unicorn` class:

```javascript
function createUnicorn(name, color) {
  // What is logged here?
  console.log('value of this:', this)
  
  
  return {
    name: name,
    color: color,
    says: function says() {
    console.log(`${this.name} is my favorite ${this.color} pony, `, 'value of this:', this)
  }
  // what changes about `this` inside of the object?
  }  
}

var newUnicorn = createUnicorn('Baby', 'Black and White')
```

* Create a new `unicorn` object.  What rule can we infer about *this* when creating an object?
* Now try running it's method, `says`.  What does *this* refer to now?  Has it changed?
</section>

<section class="answer">
### Rule #1  

*this* within function code invoked using the `new` operator refers to the new instance of that object.
</section>


<section class="answer">
### Rule #2  

When executing a function as a method on an object, *this* refers to that object.
</section>

### Let's confirm our theory

To confirm our theory, let's try a different example that uses regular objects instead of classes.   

<section class="call-to-action">
### In your notebook

Consider the following example where we have two objects that have an ES5 function set as the method:

```javascript
function logThis() {
  console.log(this);
}

const voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: logThis
}

const voyager2 = {
  classification: 'Space Probe',
  title: 'Voyager 2',
  logThis: logThis
}

voyager1.logThis();
voyager2.logThis();  
```

* What is the value of *this*?  When is the value of *this* set?
</section>

<section class="answer">
### Takeaway notes  

* We can confirm that our previous two rules still apply.
* The value of `this` is set when the above ES5 function is executed.
</section>

<section class="note">
### Another way to think of this:

If a function is executed and there is a `.` before the name of the function, `this` refers to whatever comes before the `.`
</section>

<section class="call-to-action">
### More Practice!

```js
function logThis() {
  console.log(this);
}

const denver = {
  buildings: {
    athletic: [
      { name: "Coors Field", floors: 4, completed: 1995, height: 64 },
      { name: "Pepsi Center", floors: 5, completed: 1999, height: 68 }
    ],
    medical: [
      { name: "Saint Joseph Hospital", floors: 12, completed: 1873, height: 120, beds: 365 },
      { name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368 }
    ]
  },
  restaurants: [
    { name: "Fruition Restaurant", type: "Fine Dining", number_of_reviews: 788 },
    { name: "Sam's No. 3", type: "Cheap Eats", number_of_reviews: 1870 },
  ]
};
```

Taking turns for each prompt in driver/navigator fashion, use the code snippet below and complete the following:

1. Utilize the `logThis` function (by setting it as a method) so that when you execute the function it logs the following:
```js
{ buildings: {…}, restaurants: Array(2), logThis: ƒ}
```
2. Utilize the `logThis` function (by setting it as a method) so that when you execute the function it logs the following:
```js
{
  name: "Swedish Medical Center",
  floors: 6,
  completed: 1905,
  height: 65,
  beds: 368,
  logThis: ƒ
}
```
</section>

### Are there other rules?

Here's one more scenario to look at

<section class="call-to-action">
### In Your Console

Run the following command!

```js
function logThis() {
  console.log(this);
}

logThis();
```

* What is the value of this?  What is one final rule we can add that applys to *this*?
</section>

<section class="answer">
### Rule #3  

By default, *this* refers to the global object (or in the browser, the window).
</section>

<section class="note">
### Fun Fact

Although *this* refers to the global object in most scenarios, *this* will change if your program (or function) is running in **strict mode**.  Try out the same example with `"use strict"` added and note what happens!

```js
"use strict";

function logThis() {
  console.log(this);
}

logThis();
```

Strict mode was added in ECMAScript 5 and prevents certain actions while also throwing more exceptions.  You can [read more about it here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), but just know it provides a safer feature set of JS.

Simply put:
* If your program is running in **strict mode** *and* neither of the first two rules apply, then *this* will be `undefined`.
</section>

### Reviewing our rules

For our purposes here, these are the three main rules that *this* follows.  You might find exceptions out there especially when looking at ways that you can explicity change the value of *this* using methods like `call`, `apply`, or `bind`, but we'll cover this another time!

<section class="call-to-action">
### On Your Own

Using the rules that you've learned thus far, determine the value of `this` when the last two lines execute:

```js
const obj = {
  value: 'hi',
  printThis: function() {
    console.log(this);
  }
};  

const print = obj.printThis;

obj.printThis(); // What will print here? Why?
print(); // What will print here? Why?
```

* Take note of what happens before checking it in your console!
</section>

## The difference between `function () {}` and `() => {}`

ES6 introduced arrow functions, which allow us to write functions with shorter syntax [among other things](http://frontend.turing.edu/lessons/module-2/es5-vs-es6.html#arrow-functions). Beside being quicker to write/read, the way arrow functions bind `this` is a bit different:

<section class="call-to-action">
### In Breakout Groups

Consider the following example:

```js
var vampire = {
  name: 'dracula',
  dislikes: [
    'garlic',
    'crosses',
    'stakes'
  ],
  whatDoYouDislike: function() {
    console.log(this)

    // this.dislikes.forEach(insert callback here);

    // Should the callback be an arrow function or a traditional ES5 function to use the following log?
    // console.log(this.name + ' dislikes ' + item)
  }
}

vampire.whatDoYouDislike()
```

* Write the callback function inside of the `forEach` in order for the console.log snippet to work appropriately (e.g. each dislike should log `dracula dislikes garlic/crosses/stakes`)
</section>

<section class="answer">
### "This" is confusing  

On a high level, here's what to remember:

1. There are three main rules that apply to the keyword *this*.
* *this* within function code invoked using the `new` operator refers to the new instance of that object.
* When executing a function as a method on an object, *this* refers to that object.
* By default, *this* refers to the global object (or in the browser, the window).
2. When considering using a traditional function vs an arrow function note that:
*  `function () {}`: The value of _this_ is set when the function is *executed*.
* `() => {}`: The value of _this_ is set when the function is *created*.
</section>

<section class="checks-for-understanding">
### Review these points

* What are the rules for determining `this`?
* What is `this` in JavaScript?
</section>


## Further Reading

* [Scope vs. Context](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
* [When not to use an arrow function](https://wesbos.com/arrow-function-no-no/)  
