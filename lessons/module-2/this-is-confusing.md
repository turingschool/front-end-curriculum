---
title: This is Confusing
length:
tags: javascript, js, this, keyword
---

## [Slides](https://drive.google.com/open?id=1oF5k17fEaN_I4KIQOdBK-eEaNBf_S0_DrZhFzbPrA2w)

## Vocab

- `Invoke` / `Execute` To run a function. e.g., "I've invoked the function here"
- `Declare` To write a function definition. Usually distinct from function execution
- `Constructor Function` The function called to create a new instance of an object. Usually contains the code to set up the object 

## Introduction

The keyword `this` in javascript can be confusing. Depending on where `this` is used in code, it can refer to different things.

One key thing to remember is we can only change the value of the keyword `this` inside of an traditional function. There are a few ways we can invoke/execute a traditional function to change the value of this inside of the function.

In ES5 functions, the value of this is determined when the function is executed. This is in contrast to arrow functions where the value of `this` is determined when the arrow function is declared.

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

var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: logThis  // adding logThis function to voyager1
}

// voyager1 will be logged
voyager1.logThis();  
```

One important thing to remember here is that the value of `this` is set when the above ES5 function is executed.

If I move the function to a different object, then execute the function on that object, `this` inside the function will refer to the new object it is a method of.

```javascript
function logThis() {
  console.log(this);
}

var voyager1 = {
  classification: 'Space Probe',
  title: 'Voyager 1',
  logThis: logThis
}

var voyager2 = {
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

Exercise: Move the logThis function so that when you execute the function it logs some of the following nested objects.
```js
function logThis () {
  console.log( this );
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

## Rule 3 - _this_ in function code invoked using the new operator refers to the newly created object.

The `new` keyword is used with constructor functions to create a new instance of an object.

When the `new` keyword is used to invoke a function, `this` inside of the function refers to the newly created object.

```javascript
function SpaceProbe(title, classification) {
  
  // new empty object will log
  console.log(this);  

  this.title = title;
  this.classification = classification

  // object with added properties will log
  console.log(this);  
}

var voyager1 = new SpaceProbe('Voyager 1', 'Space Probe');
var voyager2 = new SpaceProbe('Voyager 2', 'Space Probe');
```

With ES6 classes, the class constructor function replaces our old ES5 constructor function.

```javascript
class SpaceProbe {

  constructor (title, classification) {
  
    // new empty object will log
    console.log(this);  

    this.title = title;
    this.classification = classification

    // object with added properties will log
    console.log(this);  
  }
  
}
```
When the `new` keyword is used with our ES6 class, the constructor function is executed and `this` inside the constructor function refers to the newly created object.


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
```

## The difference between `function () {}` and `() => {}`

### function () {}
The value of _this_ is set when the function is executed.

### () => {}
The value of _this_ is set when the function is created.

Example
```
var vampire = {
  name: 'dracula',
  dislikes: [
    'garlic',
    'crosses',
    'stakes'
  ],
  whatDoYouDislike: function () {
    // console.log(this)
    
    // this.dislikes.forEach(( item ) => {
    //   console.log(this.name + ' dislikes ' + item)
    // })
    
    this.dislikes.forEach(function ( item ) {
      console.log(this.name + ' dislikes ' + item)
    }.bind(this))
  }
}

vampire.whatDoYouDislike()
```
