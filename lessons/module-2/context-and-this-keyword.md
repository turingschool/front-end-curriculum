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

## Introduction

The keyword `this` in JavaScript can be confusing. Here are a couple of definitions that might help clarify:

* `this` refers to the current *context* (or owner) of the code being executed
* `this` refers to the object on which the current function is called
* Context is most often determined by how a function is invoked


Depending on where `this` is used, it can refer to different things. One key thing to remember is **we can only change the value of** `this` **inside of a function**. There are a few ways we can invoke/execute a function to change the value of `this`.

In ES5 functions, the value of this is determined when the function is executed. This is in contrast to arrow functions, where the value of `this` is determined by its lexical scope.

With that being said, there are several rules which determine what the value of `this` is at any given point in time.

## Rule 1 - _this_ in function code invoked using the new operator refers to the new instance of that object.

```javascript
class Unicorn {
  constructor(name, color) {
    // new empty object will log
    console.log(this);  

    this.name = name;
    this.color = color;

    // object with added properties will log
    console.log(this);  
  }

  says(words) { 
    console.log('Toilet Sparkle is my favorite pony', this);
  }
}
```

When the `new` keyword is used with our ES6 class, the constructor function is executed and `this` inside the constructor function refers to the newly created instance.

## Rule 2 - When executing a function as a method on an object, _this_ refers to that object.

This is a long rule, another way to think about this rule is if a function is executed and there is a `.` before the name of the function, `this` refers to whatever comes before the `.`. 

In the following example, since `logThis` function is being executed as a method of the `voyager1` object, `this` will refer to the `voyager1` object.

```javascript
function logThis() {
  console.log(this);
}

const voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: logThis  // adding logThis function to voyager1
}

// voyager1 will be logged
voyager1.logThis();  
```

One important thing to remember here is that the value of `this` is set when the above ES5 function is executed.

If I move the function to a different object, then execute the function on that object, `this` inside the function will refer to the new object that it is a method of.

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

// voyager1 will be logged
voyager1.logThis(); 

// voyager2 will be logged
voyager2.logThis();  
```

Because of this rule, I can create a function once, add it to whichever objects I want and `this` will always refer to the object I execute the function on.

Now typically, if we find ourselves creating multiple objects with the same properties and using the same functions it would be better to create a constructor function to create the objects or use ES6's new class constructor

#### Turn and Code

Taking turns for each prompt in driver/navigator fashion, use the code snippet below and complete the following:

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

1. Utilize the `logThis` function (by setting it as a method) so that when you execute the function it logs the following:
      `{buildings: {…}, restaurants: Array(2), logThis: ƒ}`
2. Utilize the `logThis` function (by setting it as a method) so that when you execute the function it logs the following:
      `{ name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368, logThis: ƒ}`


## Rule 3 - Default _this_ refers to the global object

By default _this_ refers to the global object if you are not running your program in strict mode. This means that in the event that one of the first two rules _don't_ apply... _this_ will refer to the global object. (In a browser, the global object is the window). 

#### Strict Mode

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.

If your program is running in strict mode _and_ neither of the first two rules apply, then _this_ will be undefined. 


```javascript
"use strict";

function logThis() {
  console.log(this);
}

logThis();
```

*Note:This is also assuming that we don't explicitly change the value of _this_ using a method like `call`, `apply`, or `bind` to set _this_. This is an additional rule that you will likely see as you research _this_ in JavaScript. For our purposes here, we will only be focusing on the 3 rules covered*

#### Your Turn

Using the rules that you've learned thus far, determine the value of `this` when the last two lines execute (without checking in your console). Write your answer in your journal. Check your work.

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


## The difference between `function () {}` and `() => {}`

ES6 introduced arrow functions, which allow us to write functions with shorter syntax [among other things](http://frontend.turing.io/lessons/module-2/es5-vs-es6.html#arrow-functions). Beside being quicker to write/read, arrow functions also lexically bind the `this` value implicitly:

### function () {}
The value of _this_ is set when the function is *executed*.

### () => {}
The value of _this_ is set when the function is *created*.


```js
var vampire = {
  name: 'dracula',
  dislikes: [
    'garlic',
    'crosses',
    'stakes'
  ],
  whatDoYouDislike: function() {
    // console.log(this)

    // this.dislikes.forEach(insert callback here);
    // how should you write your callback function in order
    // for the following line of code to work:
    // console.log(this.name + ' dislikes ' + item)
    // as an arrow function or as a traditional ES5 function?
  }
}

vampire.whatDoYouDislike()
```

#### Your Turn

- Write the callback function inside of the `forEach` in order for the console.log snippet to work appropriately (e.g. each dislike should log `dracula dislikes garlic/crosses/stakes`)

### Closing

* What are the rules for determining `this`?
* What is `this` in JavaScript?

## Further Reading

* [Scope vs. Context](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
* [When not to use an arrow function](https://wesbos.com/arrow-function-no-no/)  