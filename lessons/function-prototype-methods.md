---
title: Function Prototype Methods
---

### Goals

* Understand the various rules governing the behavior of the `this` keyword in javascript
* Understand the precedence of these rules
* Understand the difference between function definition context and invocation context

#### Questions you will have to answer at the end of the lesson: 
1. What determines which object a function's `this` points to? What's the default?
2. How do you "borrow" a function by implicit assignment of `this`?
3. How do you explicitly bind `this`?
4. How can you seal a specific `this` to a function? Why do that? Why not?
5. How do you create a new `this`?

***

#### What is `this`?
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

#### How do I figure `this` out? There are four rules, in order of precedence:

#### new Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-1.jpg) 

- When a function is invoked with the `new` keyword, the `this` keyword inside that function is bound to the new ojbect being constructed
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

#### Explicit Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-2.jpg) 

- `bind()`, `call()`, or `apply()`
- `call()` and `apply()` are really the same & are invoked immediately
- `bind()` let's you save for later

```javascript
```

#### Implicit Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-3.jpg) 

- The most common rule. 
- Found in about 80% of the use cases.
- Left of the dot at call time.

```javascript
var fruit = {
    name: 'apple',
    ripe: true,
    displayType: function(){ console.log(this.name) }
  }

fruit.displayType()
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
  }
var banana = {
  name: 'banana',
  ripe: true
  }

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

#### window Binding
![fight-club-image](/assets/images/lessons/function-prototype-methods/fight-club-4.jpg) 

- In the absence of any other rule, `this` refers to the window object
- This is the default rule, when all of the above fails
- Strict mode will throw you an error, because it knows you don't _really_ mean the window, so it doesn't even let you do it, and makes `this` undefined

```javascript
var carColor = function(){
  console.log(this.color);
};

var myCar = {
  color: 'Black';
};
```

```javascript
var carColor = function(){
  'use strict';
  console.log(this.color);
};

var myCar = {
  color: 'Black';
};
```
