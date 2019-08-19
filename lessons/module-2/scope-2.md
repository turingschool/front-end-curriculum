---
title: Scope
length: 120
tags: javascript, scope, var, let, const, scope chain
module: 2
---

## Goals

By the end of this lesson, you will be able to:

* Describe the differences between `var`, `let` and `const` and when to use each
* Predict how variables will behave when multiple scopes are involved
* Understand how the scope chain is initialized and utilized to resolve variables

## Vocab

- `Scope` The level in which a variable can be accessed

## Scope

Now that we understand the order of execution a bit, we can dive deeper into the concept of scope. Scope is the place in which a variable or value can be accessed.

At the most basic level, variables can be either globally or locally scoped. Take the following example:

```js
var cowNoise = 'moo';

function makeNoise() {
  var catNoise = 'meow';
  console.log('Cow Noise inside Function: ', cowNoise);
  console.log('Cat Noise inside Function: ', catNoise);
}

makeNoise();

console.log('Cow Noise outside Function: ', cowNoise);
console.log('Cat Noise outside Function: ', catNoise);
```

Our variable of `cowNoise` can be accessed and changed from anywhere in our code base because it is globally scoped. Our variable `catNoise` is limited to the scope of `makeNoise` and is thus said to be scoped locally.


### Global, Functional, and Block Scope

We have several scopes available to us: global, function, block, and eval (the latter won't be covered in this lesson - but you can read more on it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)).

**Global scope:**
- Global scope is the default.
- Everyone and everything has access to the global scope.
- Functions and variables in the global scope are "vulnerable" because they can be accessed by everything and potentially mutated (changed).
- `var`, `let`, and `const` can be globally scoped.

```js
var one = "one";
let two = "two";
const three = "three";

showNumbers();

function showNumbers () {
  console.log("In function: ", one, two, three);
  if (one && two && three) {
    console.log("In if block: ", one, two, three);
  }
}


// The three global variables are accessible everywhere
```

**Function scope:**
- Variables declared in the function (using `var`, `let`, or `const`) can only be accessed by the other code inside the function.
- You control what's in the function scope, it cannot be meddled with by anyone or anything else.
- The global scope cannot access function scope.

```js
function readWords() {
  var greeting = "Hello, friend, ";
  let question = "how are you? ";
  const response = "I am fine."

  if (true) {
    console.log('Sentence in the if block: ', greeting, question, response);
  }

  console.log(greeting + question + response);
}

readWords();

console.log(greeting + question + response);


```

**Block scope:**
- Variables declared in the [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) (`if` blocks, `for` loops, etc) using `let` or `const` can only be accessed by other code inside the block.
- Variables declared in block statements using `var` will not be scoped within the block (as this is a special feature of `let` and `const`). Variables declared with `var` will "leak out"

```js
function readWords() {
  var greeting = "Hello, friend, ";
  let question = "how are you? ";
  const response = "I am fine."

  if (true) {
     var greeting = "Sup dawg, ";
     let question = "what's good?";
     const response = "Nm."
     console.log('Sentence in if block: ', greeting, question, response);
  }

  console.log(greeting + question + response);
}

readWords();
```



*Important things to know when dealing with scope and code execution*


##### Returning values

To make use of variables declared inside function scope while OUTSIDE that scope, the value must be returned out of the function.

```js
function makeNumber () {
  var number = 5;

  return number;
};

makeNumber();

console.log(number); // undefined
console.log(makeNumber); // function () {...}
console.log(makeNumber()); // 5
```

It's **important to note** that the variable name does not come with the returned value. Above, you can see that when we run the function `makeNumber()`, the variable `number` is not visible to the global scope. However, when we run the function in the last `console.log`, the function evaluates to 5.

If we want to use values created by functions, we must return those values out of the function. Additionally, if that value needs to be used elsewhere in our code, we must capture it with a variable.

`const number = makeNumber();` could be one way; assigning the returned value of the function to a new variable allows us to "store" or "capture" the value to be used elsewhere.

##### Parent scopes do not have access to child scopes BUT child scopes do have access to their parent scope

In the example below, the `console.log` fails because parent scopes do not have access to variables declared in child scopes. However, the child has access to the variables declared in the parent scope (`array`). Think of this like tinted windows in a car -- if you're inside the car, you can see **out**, but if you're outside of the car, you cannot see in.

```js
const array = [ 5, 4, 3, 2, 1 ];
const secondNumber = array[1];

function getFirstNumber () {
  const firstNumber = array[0];
  return firstNumber;
}

function getSecondNumber () {
  return secondNumber;
}

getFirstNumber(); // this works, why?
getSecondNumber(); // this works, why?

console.log(secondNumber);
console.log(firstNumber);  // why can we access secondNumber, but not firstNumber?
```

##### Let and const are block scoped

Variables declared with the keyword `let` or `const` will be block scoped if declared within a block. This means that they are scoped to the block statement (`if`, `for`...) in which they are declared. When you see `{` and `}`, those curly brackets are likely creating a scope, - as with `function`, `if`, and `for`.

```js
let message = 'You are doing great!';

if (message.length > 0) {
  let message = 'I think you are amazing!';

  console.log(message);
}

console.log(message);
```

Another fun example:

```js
function getIndex(searchQuery) {
  const names = ["Brittany", "Khalid", "Robbie"];

  for (let i = 0; i < names.length; i++) {
    if (names[i] === searchQuery) {
      console.log ('The index is: ', i);
      break;
    }
  }
  return i;
}

getIndex("Khalid"); // What will log and what will return?
```

If they are not found within the context of a block statement, then `let` and `const` will be functionally scoped, like `var`.

#### Journal

Complete the following prompts in your journal:

Describe "scope" in your own words. What are the similarities and differences between `var`, `let`, and `const`?

What might be a metaphor or analogy for scope? Draw or diagram it out.

## Scope Chain

Whenever a variable is used, the JavaScript interpreter traverses the `scope chain` until it finds an entry for that variable. Traversal on the scope chain always starts in the most immediate (local) scope and moves towards the global space. Remember that the scope chain is initialized during the "creation phase" of the interpreter running through the code. This is important to note, as the scope chain (e.g. "What is the parent scope for this variable? The grandparent scope?") is determined by where functions are _defined_ in the code base.... not where functions are _invoked_.

Every time a variable is initialized, the interpreter will first look in its own scope to see if the label can be found. If it is not found, it will look "up" the scope chain to the parent scope to try to resolve the variable in the parent context. It will climb up the scope chain examining every scope, looking for a match to the variable name. If that name is never found, the interpreter will declare it globally on the window and the variable will be scoped as such.


```js
1  let number = 10;
2
3  function foo () {
4    number = 20;
5    console.log('A', number);  // prints 'A', 20
6  }
7
8  console.log('B', number);  // prints 'B', 10
9  
10  foo();
11
12  console.log('C', number);    // prints 'C', 20
```

##### Scope chain at work

1. `foo` and its definition as well as the declaration `number` are stored in global memory
2. Line 1 - `number` is assigned the value of 10
3. Line 8 - prints `B 10` to the console
4. Line 10 - `foo` is invoked, creating a new execution context
5. Line 4 - A variable is declared without the keyword `var` and assigned a value. The interpreter searches in the current execution context to see where this variable was defined. Because it doesn't find it declared in the current scope, it looks up the scope chain to the parent scope, which happens to be the global scope. The interpreter understands that this is to be treated as a re-assignment and assigned the value of `number` to 20, both locally and globally.
6. Line 5 - prints `A 20` to the console
7. Line 12 - prints `C 20` to the console

**It is important to note that the interpreter moving up the scope chain to resolve variable values is _NOT_ hoisting. Which bears repeating. The process of traversing the scope chain is *NOT* hoisting. Remember that the JS interpreter hoists declarations (storing them in memory) during the creation phase, not when the code itself is being executed.**

#### Turn and Talk

With a partner, take turns walking through the following code examples:

Example 1:

```js
function foo () {
  var localNumber = 20;
  number = localNumber;  
}

foo()

console.log(number);  // what will log here?
```

Example 2:

```js
var givenName = 'Amon Williams';

function printGreeting() {
  console.log(`Hello ${givenName}`);
}

printGreeting('Khalid');  // what will log here?
printGreeting();      // what will log here?
```

Example 3:

```js
var givenName = 'Amon Williams';

function printGreeting() {
  let givenName = "Khalid"
  console.log(`A: Hello ${givenName}`);

  if( givenName.split(" ").length < 2) {
    givenName = "Khalid Williams";
    console.log(`B: Hello ${givenName}`);
  }

  console.log(`C: Hello ${givenName}`);
}

printGreeting();

console.log(`D: Hello ${givenName}`);

// What logs at each letter?
```

#### Closing

Using your journal, take a few minutes to answer the following:

- Why is it important to understand scope?



<!-- ## Exercises

**Exercise 1**

```js
let number = 10;

function foo () {
  number = 20;
  console.log(number);  // 1 - what will log here?
}

console.log(number);    // 2 - what will log here?

foo()

console.log(number);    // 3 - what will log here?
```

**Exercise 2**

```js
let number = 10;

function foo () {
  let number = 20;
  console.log(number);  // 1 - what will log here?
}

console.log(number);    // 2 - what will log here?

foo()

console.log(number);    // 3 - what will log here?
```

**Exercise 3**

```js
function foo () {
  var localNumber = 20;
  number = localNumber;  
}

foo()

console.log(number);  // what will log here?
```

**Exercise 4**

```js
var name = "Nathaniel Foster";

function printGreeting(name) {
  console.log("Hello " + name);
}

printGreeting("Danger");  // what will log here?
printGreeting();      // what will log here?
```

**Exercise 5**

```js
let array = [];

for (var i = 0; i < 10; i++) {
  array[i] = function () {
    console.log('You clicked: ' + i);
  };
}

array[5]()  // what will log here?
```

**Exercise 6**

```js
let array = [];

for (let i = 0; i < 10; i++) {
  array[i] = function () {
    console.log('You clicked: ' + i);
  };
}

array[5]()  // what will log here?
``` -->






<!--
====================================================
====================================================
====================================================


## Review Prompt

_**Scope**_
Prompt for students:

What is the result of each `console.log()`? Explain your answer.
```js
var alarmTime = 8;

function testAlarm() {
   let alarmTime = 22;
   if (alarmTime > 10) {
     console.log('A', alarmTime);
     console.log('Wake up!');
   }
}

console.log('B', alarmTime);

for (let i=0; i<5; i++) {
   alarmTime++;
}

console.log('C', alarmTime);

testAlarm();

console.log('D', alarmTime);
```
 -->
