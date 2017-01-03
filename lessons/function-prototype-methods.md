---
title: Function Prototype Methods
---

### Goals

* Understand the various rules governing the behavior of the `this` keyword in javascript
* Understand the precedence of these rules
* Understand the difference between function definition context and invocation context

***

## What is `this`?
- The most misunderstood aspect of javascript.
- Every function, _while executing_, has a reference to its current execution context, called `this`.
- `this` is a _binding_ that is made when a function is _invoked_, and what it references is determined entirely by the _call-site_ where the function is called.
- `this` allows us to reuse functions with different context.

#### First question when trying to determine `this`: Where is this function invoked?

Here?

```javascript
var greeting = function(name) {
  console.log('Hello, ' + name);
};
```

Or Here?

```javascript
var greeting = function(name) {
  console.log('Hello, ' + name);
};

greeting('Peggy')
```

`this` is determined by where the function is invoked, not where it is defined.

***

## How do I figure `this` out? There are four rules, in order of precedence:

### new Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-1.jpg)

- When a function is invoked with the `new` keyword, the `this` keyword inside that function is bound to the new object being constructed
- Confusingly, you can put `new` on ANY function

```javascript

var Car = function(make, model, color){
  this.make = make;
  this.model = model;
  this.color = color;
}

var bestCar = new Car('Audi', 'R8', 'grey')
```

```javascript
var Car = function(make, model, color){
  // this = {}
  this.make = make;
  this.model = model;
  this.color = color;
}

```

### Explicit Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-2.jpg)

- `bind()`, `call()`, or `apply()`
- `call()` and `apply()` are really the same & are invoked immediately
- `bind()` let's you save for later

```javascript
// Basic object w/ two properties and a method.

var noah = {
    name: 'Noah',
    age: 12,
    sayName: function(){
  console.log('My name is ' + this.name);
 }
}

// We know the left of the dot rule means the this keyword references our noah object.
noah.sayName()
```

```javascript
// What happens if we want to move that method to the global scope and still reference the context of our Noah object?

var sayName = function(){
  console.log('My name is ' + this.name);
}

var noah = {
    name: 'Noah',
    age: 12,
}

// What happens now if we try?

sayName()

// Every function has a "call" method, defined on prototype, whose first argument is the context for which to call that function. :)

sayName.call(noah)
```

```javascript
// Let's make it a little more interesting.

var noah = {
  name: 'Noah',
  age: 12,
}

var sayName = function(){
  console.log('My name is ' + this.name);
}

var cars = ['R8', 'Yugo', 'Shelby']

// With the call method on a function, the first argument is the context and every argument AFTER that will be run through the function. :)

var sayName = function(car1, car2, car3){
  console.log('My name is ' + this.name + ' and I own a ' + car1 + ', ' + car2 + ', and a ' + car3);
 };

var noah = {
    name: 'Noah',
    age: 12,
};

var cars = ['R8', 'Yugo', 'Shelby'];

sayName.call(noah, cars[0], cars[1], cars[2]);
```

```javascript
// Yikes, that is a lot of arguments to manage. Does javascript give us a better option? YES

var sayName = function(car1, car2, car3){
  console.log('My name is ' + this.name + ' and I own a ' + car1 + ', '
  + car2 + ', and a ' + car3);
 };

var noah = {
    name: 'Noah',
    age: 12,
};

var cars = ['R8', 'Yugo', 'Shelby'];

// Just remember the 'a' in apply goes with the 'a' in array! :)

sayName.apply(noah, cars);
```

```javascript
// But what if you don't want to invoke the function immediately with call and apply? Good news - you can save for later with bind.

var sayName = function(car1, car2, car3){
  console.log('My name is ' + this.name + ' and I own a ' + car1 + ', '
  + car2 + ', and a ' + car3);
 };

var noah = {
    name: 'Noah',
    age: 12,
};

var cars = ['R8', 'Yugo', 'Shelby'];

// Bind will not run the function immediately on the cars, instead you get a new function back. So knowing that, we'll assign this bound function to a newly named function and call the new function to check that we get the same result.

var newFunction = sayName.bind(noah, cars[0], cars[1], cars[2]);
```

Let's recap those:

- `call()` and `apply()` and `bind()` allow us to explicitly state what
  the `this` keyword is going to be in any given function
- `call()` and `apply()` behave the exact same way. They will
  immediately invoke the function.
- `call()` you pass the arguments in one-by-one
- `apply()` you pass the arguments in as an array
- `bind()` is just like `call()`, EXCEPT instead of immediately invoking
  the function, it returns you a brand new function that you can invoke
  later

### Implicit Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-3.jpg)

- The most common rule.
- Found in about 80% of the use cases.
- Left of the dot at call time.

```javascript
var fruit = {
    name: 'apple',
    ripe: true,
    displayType: function(){ console.log(this.name) }
  };

fruit.displayType();
```

```javascript
var fruitBowl = function(object){
    object.fruitName = function(){
        console.log(this.name)
      };
  };

var apple = {
  name: 'apple',
  ripe: false
  };

var banana = {
  name: 'banana',
  ripe: true
  };

fruitBowl(apple);
fruitBowl(banana);

apple.fruitName();
banana.fruitName();
```

```javascript
var Fruit = function(name, ripe){
  return {
    name: name,
    ripe: ripe,
    fruitType: function(){ console.log(this.name) },

    trickyFruit: {
      name: 'Tomato',
      ripe: false,
      fruitType: function(){ console.log(this.name) }
    }
  }
};

var someFruit = Fruit('apple', true);
someFruit.fruitType();
someFruit.trickyFruit.fruitType();
```

### window Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-4.jpg)

- In the absence of any other rule, `this` refers to the window object
- This is the default rule, when all of the above fails
- [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) will throw you an error, because it knows you don't _really_ mean the window, so it doesn't even let you do it, and makes `this` undefined

```javascript
var carColor = function(){
  console.log(this.color);
};
```

```javascript
var carColor = function(){
  'use strict';
  console.log(this.color);
};
```

## Pop Quiz Questions
1. What determines which object a function's `this` points to? What's the default?
2. How do you "borrow" a function by implicit assignment of `this`?
3. How do you explicitly bind `this`?
4. How can you seal a specific `this` to a function? Why do that? Why not?
5. How do you create a new `this`?

## Pop Quiz Exercise

```javascript

var fullname = 'Jane Doe';
var obj = {
  fullname: 'Scooby Doo',
  prop: {
    fullname: 'Penny Pumpkin',
    getFullname: function() {
      return this.fullname;
    }
  }
};

// What will this return? Make a prediction BEFORE typing it into the console.
console.log(obj.prop.getFullname());

// What does this return? Why?
var test = obj.prop.getFullname;
console.log(test());

// Fix the above test code to return Penny Pumpkin using call and/or apply
```

### Additional Resources
- [MDN Github What is `this`? Lesson](https://github.com/mdn/advanced-js-fundamentals-ck/blob/gh-pages/tutorials/02-functions/02-what-is-this.md)
- [You Don't Know JS: `this` or that](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md)
- [You Don't Know JS: `this` All Makes Sense Now!](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)
