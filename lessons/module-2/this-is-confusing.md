---
title: This is Confusing
length:
tags: javascript, js, this, keyword
---

## [Slides](https://drive.google.com/open?id=1oF5k17fEaN_I4KIQOdBK-eEaNBf_S0_DrZhFzbPrA2w)

### Learning Goals

* Understand and describe what `this` is in JavaScript
* Determine what `this` is referencing in a codebase

## Vocab

- `Invoke` / `Execute` To run a function. e.g., "I've invoked the function here"
- `Declare` To write a function definition. Usually distinct from function execution
- `Constructor Function` The function called to create a new instance of an object. Usually contains the code to set up the object 

### Warm Up

* What do you understand `this` to represent in JavaScript? 
* Where have you seen/utilized the word `this` in your JavaScript projects thus far?
* Why do you think the keyword `this` exists? 

## Introduction

The keyword `this` in JavaScript can be confusing. Here are a couple of definitions that might help clarify:

* `this` refers to the current *context* (or owner) of the code being executed
* `this` refers to the object on which the current function is called
* Context is most often determined by how a function is invoked


Depending on where `this` is used, it can refer to different things. One key thing to remember is **we can only change the value of** `this` **inside of a function**. There are a few ways we can invoke/execute a function to change the value of `this`.

In ES5 functions, the value of this is determined when the function is executed. This is in contrast to arrow functions, where the value of `this` is determined when the arrow function is declared.

With that being said, there are several rules which determine what the value of `this` is at any given point in time.

## Rule 1 - Default _this_ refers to the global object

By default _this_ refers to the global object. In a browser, the global object is the window. If we don't change what the value of `this` is, it will refer to the global object.

```javascript
console.log(this);

function logThis() {
  console.log(this);
}

logThis();
```

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

#### Your Turn

Using the rules that you've learned thus far, determine the value of`this` when the last two lines execute (without checking in your console). Write your answer in your journal. Check your work.

```js
const obj = {
  value: 'hi',
  printThis: function() {
    console.log(this);
  }
};  

const print = obj.printThis;

obj.printThis(); // What will print here? Why?
print(); // -> What will print here? Why?
```

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
      `{ name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368 }`

## Rule 3 - _this_ in function code invoked using the new operator refers to the newly created object.

When we use the new keyword to call our function as a constructor, a few things happen behind the scenes:

1. `this` is set to a new empty object
2. The prototype property of the constructor function (Unicorn.prototype in the example below) is set as the prototype of the new object, which was set to `this` in the first step
3. The body of our function runs
4. Our new object, `this`, is returned from the constructor

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



<!-- 
## Rule 4 - When a function is called with either call, apply or bind, _this_ is set to the first argument passed to call, apply or bind

```
function logThis() {
  console.log(this);
}

var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: function () {
    console.log(this);
  }
}

logThis.call(voyager1);
logThis.apply(voyager1);

var logVoyager = logThis.bind(voyager1);

logVoyager();
``` -->

## The difference between `function () {}` and `() => {}`

ES6 introduced arrow functions, which allow us to write functions with shorter syntax (among other things). Beside being quicker to write/read, arrow functions also lexically bind the `this` value implicitly:

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
    
    // ES6
    // this.dislikes.forEach(( item ) => {
    //   console.log(this.name + ' dislikes ' + item)
    // })
    
    // ES5
    this.dislikes.forEach(function(item) {
      console.log(this.name + ' dislikes ' + item);
    });
  }
}

vampire.whatDoYouDislike()
```

#### Your Turn

- Delete the ES6 function and modify the ES5 function so that we don't lose the value of `this`

### Closing

* What are the rules for determining `this`?
* What is `this` in JavaScript?

## Further Reading

* [Scope vs. Context](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
* [When not to use an arrow function](https://wesbos.com/arrow-function-no-no/)
<!-- 
====================================================
====================================================
====================================================

REVIEW PROMPT

_**Context**_
Prompt for students:
* What are the most important/significant things someone should know about:
    * Arrow functions
    * this

What is the result of the following code? Explain your answer
```js 
var fullname = 'Pamela Lovett';
var foo = {
   fullName: 'Brittany Storoz',
   prop: {
      fullname: 'Robbie McJaeger',
      getFullname: function() {
         return this.fullname;
      }
   }
};

var test = foo.prop.getFullname;

console.log(foo.prop.getFullname()); // What will log here? Why?
console.log(test()); // What will log here? Why?
``` -->