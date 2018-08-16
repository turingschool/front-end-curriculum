---
title: Scope
length: 120
tags: javascript, scope, scope chain, closures, lexical scope, execution call stack, execution context
module: 2
---

## Goals

By the end of this lesson, students should be able to:

* Technically speak to how the JavaScript interpreter executes code
* Predict how variables will behave when multiple scopes are involved
* Implement and describe how closures are working 

## Vocab

- `Javascript Engine/Interpreter` A program that executes JavaScript code most commonly used in web browsers
- `Scope` The scope in which a variable can be accessed
- `Execution context` The environment a function executes in
- `Closure` An inner function that has access to (aka closes over) the variables declared outside itself


# The JS Interpreter 

A fundamental part of writing better code and digging into more advanced topics is understanding how the Javascript interpreter works. Can you build out applications without this knowledge? Of course. But a lot of developers find that having having a good grasp on what is going on 'under the hood' ends up making other things infinitely easier - including, but not limited to, self-teaching new concepts, debugging, and writing solid JavaScript code. 

We won't get into the nitty gritty details of the different JavaScript engines (Chrome uses Chrome v8, Mozilla uses SpiderMonkey, etc.) or the differences between interpreted vs compiled languages (you can read [this](https://www.upwork.com/hiring/development/the-basics-of-compiled-languages-interpreted-languages-and-just-in-time-compilers/) if you would like to dig into these concepts more). Just know that JavaScript is an interpreted language - meaning that JavaScript is translated (or interpreted) by the engine line by line at the _same_ time that the program is being executed. JavaScript is a single-threaded language, making it so that only one task can be executed at a time.

## How the JS Engine Interprets Code

Once we realize that our JavaScript code is read line by line by the browser's engine, it becomes more apparent why the order of things matters when we are writing our programs. 

```js
1   var modTwoTeachers = ['Brittany', 'Naniel', 'Pam'];
2
3   function calculateEvals (teachers, classSize) {
4    return classSize / teachers;
5   }
6
7   var numEvals = calculateEvals(modTwoTeachers, currentCohort);
8
9   var currentCohort = 32;
10  console.log(numEvals);
```

Knowing this, one might estimate that the code above is interpreted by the engine as such:

##### A Good Guess

1. Line 1 - A variable named `modTwoTeachers` is declared and assigned the value of an array of strings
2. Line 3 - We declare a function named `calculateEvals` that takes two parameters
3. Line 4 - The result of the `classSize` parameter divided by the `teachers` parameter is returned out of the function
4. Line 7 - The function `calculateEvals` is invoked and is passed two variables as arguments, `modTwoTeachers` and `currentCohort`
5. Line 9 - A variable named `currentCohort` is declared and assigned the value of 32.
6. Line 10 - The console logs `NaN` as the value of `numEvals`

It is reasonable to believe that the interpreter would read your JS file from top to bottom like this explanation shows; however, the steps that are listed above are not entirely accurate. A more accurate representation of how the interpreter goes through these lines is listed below:


##### A Better Explanation

1. The interpreter stores the function declaration (including its definition) in global memory
2. The interpreter stores the variable declarations of `modTwoTeachers`, `numEvals`, and `currentCohort` into global memory
3. Line 1 - `modTwoTeachers` is assigned the value of an array of strings
4. Line 7 - `calculateEvals` is invoked and passed two variables as arguments, `modTwoTeachers` and `currentCohort`
5. The interpreter runs through the body of the function `calculateEvals`, which creates a new execution context. The parameter of `teachers` is assigned the value of an array and the parameter of `classSize` is assigned the value of undefined. These values are stored in local memory. The function completes by returning the quotient of these two parameters. Once the function has returned, the parameters of `teachers` and `classSize` are eligible for garbage collection
6. The returned value from the function call on line 7 is assigned to the variable labeled `numEvals`
7. Line 9 - `currentCohort` is assigned the value of 32
8. The console prints `NaN`

Although the second explanation of how the interpreter reads code may seem a bit too meticulous at times, it is important to inspect the code at this level of granularity so that more advanced JavaScript topics are easier to understand.

The second `Better` explanation shows how the JavaScript engine runs through two different phases while executing code: a creation phase and an execution phase. 

During the creation phase, the Javascript engine runs through the entirety of the code and sets aside memory for the variables and functions that it identifies (hoisting). Something called the `scope chain` is also initialized (more on that further down) and the value of `this` is determined. 

In the execution phase, code is interpreted and executed on a single-thread. This is when our variable declarations are assigned values.

*Some additional things to note:*

- #1 & #2 in our `Better Explanation` shows how the interpreter deals with hoisting variable and function declarations. Many explanations for hoisting will describe hoisting as _The process of implicitly moving the declaration of variables and functions to the top of their scope_. Many people interpret this to mean that these declarations are literally moved and most visuals online show just that. What really happens is that these declarations are stored in memory during the compile phase of the code.
- #5 states that invoking the function `calculateEvals` creates a new execution context. This happens whenever a function is invoked. Conceptually, you could think of the  execution context as an object that keeps track of scope and the variable environment within that function, the scope chain, and that value of `this`.
- #5 also talks about the function returning - which is another way of saying that the function has completed. It also references [garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) - which is a process where the JavaScript engine 'automatically' frees up values stored in memory that are not used anymore.


#### Turn and Talk

With a partner, take turns explaining how the the following JavaScript code would be translated by the interpreter. We will come back together as a class to discuss:


```js
1  var bestDog = 'Tammy';
2 
3  function moveAway(seconds) {
4   var result = seconds * 2;
5
6   if (result > 5) {
7    return 'I HAVE TO GO NOW';
8   } else {
9    return 'Man, it sure is rainy over there'
10  }
11 }
12
13 var num = 21;
14 moveAway(3);
```

## Execution Call Stack

Chances are good that you have come across information that references `The stack`, `The call stack`, or the `Execution Call Stack`. A [call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) is a way for the JavaScript interpreter to keep track of its place (its current execution context) in a script that calls multiple functions — what function is currently being run, what functions are called from within that function and should be called next, etc.

A stack is a fundamental data structure in Computer Science that follows "First-In-Last-Out" (FILO) semantics. Any time a new function is invoked (and a new execution context is created) this execution context is pushed to the stack. Once a function has returned, the call is popped off the stack:

```js
function buildLaser () {
  var message = 'Laser Built';
  console.log(message);
}

function buildMoonBase () {
  var message = 'Moon Base Built';
  buildLaser();
  console.log(message);
}

function ransomTheWorld () {
  buildMoonBase();
}

ransomTheWorld();
```

As the call stack builds up, each function has its own execution context. 

1. We start in the global execution context
2. `ransomTheWorld` is called, creating a new call on the stack
3. `buildMoonBase` is called creating a new call on the stack. Within this funciton, a variable is decalred and `buildLaser` is called
4.  `buildLaser` being invoked creates a new call on the stack
5. `buildLaser` declares a variable, prints the variable to the console, and is returned and popped off the call stack... bringing us back to the context of `buildMoonBase`
6. `buildMoonBase` prints the previously declared variable to the console and is returned and popped off the call stack... bringing us back to the context of `ransomTheWorld`
7. `ransomTheWorld` returns and is popped off. Our stack frame is empty and we are back in the global execution context.

![callstack building up](https://media.giphy.com/media/3ohs4rkYvzISB83cqY/giphy.gif)

#### Turn and Talk

With a partner, take turns explaining how the the following JavaScript code would be translated by the interpreter. While one person is speaking, the other person should be diagramming this process. Your diagram should include columns for the call stack, the global execution context (as well as any local contexts), and global memory.

```js
var myNum = 21;

function addTwo(num) {
  hello();
  return num + 2;
}

function hello() {
  console.log('hello');
}

var sum = addTwo(myNum);
console.log(sum)
```


## Global, Functional, and Block Scope

Now that we understand how the interpreter works and a little bit about the concept of the execution context, we can dive deeper into the concept of scope. The first thing to address is that scope and the execution context are _not_ technically the same thing, although you'll often see these terms used interchangeably. Whereas execution context is a concept that roughly equates to the 'environment' a function executes in (among other things - remember our conceptual object mentioned above?), scope is literally the scope in which a variable or value can be accessed.

At the most basic level, variables/values can be either globally or locally scoped. Take the following example: 

```js
1  var foo = 'bar';
2
3  function baz() {
4    var birdNoise = 'caw';
5    return birdNoise;
6  }
7  
8  var noise = baz();
```

Our variable of `foo` can be accessed and changed from anywhere in our code base because it is globally scoped. Our variable `birdNoise` is limited to the scope of `baz` and is thus said to be scoped locally.

In the example above, the interpreter is working in the global execution context until line 8, when the `baz` function is invoked. Once this function is invoked, a new execution context (local) is created. This creates a local variable environment where any parameters or variables declared within that function are locally scoped and made inaccesible in the global space. *Note: The exception to this are when variables are initialized without the keywords var, let, or const - in which is bad practice.*

We have several scopes available to us. Global, function, block, and eval (the latter we won't be covering in this lesson - but you can read more on it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)).

**Global scope:**
- Global scope is the default.
- Everyone and everything has access to the global scope.
- Functions and variables in the global scope are "vulnerable" because they can be accessed by everything and potentially mutated.

**Function scope:**
- Variables declared in the function (using `var`, `let`, or `const`) can only be accessed by the other code inside the function.
- You control what you create.

**Block scope:**
- Variables declared in the [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) (`if` blocks, `for` loops, etc) using `let` or `const` can only be accessed by other code inside the block.
- Variables declared in block statements using `var` will not be scoped within the block (as this is a special feature of `let` and `const`). Variables declared with `var` will only ever be functionally or locally scoped.


*Important things to know when dealing with scope and code execution*


##### Returning values

To make use of variables declared inside function scope while OUTSIDE that scope, the value must be returned out of the function.

```js
function makeNumber () {
  var number = 5;

  return number;
}

makeNumber()

console.log(number); // undefined
console.log(makeNumber); // function () {...}
console.log(makeNumber()); // 5
```

It's **important to note** that the variable name does not come with the returned value. Above, you can see that when we run the function `makeNumber()`, the variable `number` does not become visible to the global scope. However, when we run the function in the last `console.log`, the function evaluates to 5.

If we want to use values created by functions, we must return those values out of the function. Additionally, if that value needs to be used elsewhere in our code, we must capture it with a variable.

`const number = makeNumber();` could be one way; assigning the returned value of the function to a new variable allows us to "store" or "capture" the value to be used elsewhere.

##### Parent scopes do not have access to child scopes

In the example below, the console log inside `makeArray` fails because parent scopes do not have access to variables declared in child scopes. However, the child has access to the variables declared in the parent scope (`array`).

```js
function makeArray () {
  const array = [ 5, 4, 3, 2, 1 ];

  function getFirstNumber () {
    const firstNumber = array[0];
    return firstNumber;
  }
  
  getFirstNumber();

  console.log(firstNumber);  // why can't we access firstNumber?

  return array;
}

makeArray();
```

##### Let and const can be block scoped

Variables declared with the keyword `let` or `const` are block scoped. This means that they are scoped to the block statement (if, for...) in which they are declared.

```js
let message = 'You are doing great!';

if (message.length > 0) {
  let message = 'I think you are amazing!';

  console.log(message);
}

console.log(message);
```

#### Journal

In your journal complete the following prompts:

Describe scope in your own words. What are the similarities and differences between `var`, `let`, and `const`?

What might be a metaphor or analogy for scope? Draw or diagram it out

## Scope Chain

Whenever a variable is used, the JavaScript interpreter traverses the `scope chain` until it finds an entry for that variable. Traversal on the scope chain always starts in a local context and moves into the global space. Remember that the scope chain is initialized during the "creation phase" of the interpreter running through the code. This is important to note, as the scope chain (e.g. "What is the parent scope for this variable? The grandparent scope?") is determined by where functions are _defined_ in the code base.... not where functions are invoked. 

Every time a variable is initialized, the interpreter will first look in its own scope to see if the label can be found. If it is not found, it will look "up" the scope chain to the parent scope to try to resolve the variable in the parent context. It will climb up the scope chain examining every execution context looking for a match to the variable name. If that name is never found, the interpreter will declare it globally on the window and the variable will be scoped as such.


```js
1  let number = 10;
2 
3  function foo () {
4   number = 20;
5   console.log('A', number);  // prints 20
6  }
7 
8  console.log('B, number);    // prints 10
9  
10 foo()
11
12  console.log('C', number);    // prints 20
```

##### Scope chain at work

1. `foo` and its definition as well as the declaration `number` are stored in global memory
2. Line 1 - `number` is assigned the value of 10
3. Line 8 - prints `B 10` to the console
4. Line 10 - `foo` is invoked, creating a new execution context
5. Line 4 - A variabe is declared without the ketword `var` and assigned a value. The interpreter search in the current execution context to see where this variable was defined. Because it doesn't find it declared in the current scope, it looks up the scope chain to the parent scope, which happens to be the global scope. The interpreter understands that this is to be treated as a re-assignment and assigned the value of `number` to 20 both locally and globally.
6. Line 5 - prints `A 20` to the console
7. Line 12 - prints `C 20` to the console

**It is important to note that the interpreter moving up the scope chain to resolve variable values is _NOT_ hoisting. Which bears repeating. The process of traversing the scope chain is *NOT* hoisting. Remember that the JS interpreter hoists declarations (storing them in memory) during the creation phase of execution, not when the code itself is being executed.**

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
var name = "Bananiels Foster";

function printGreeting(name) {
  console.log("Hello " + name);
}

printGreeting("Danger");  // what will log here?
printGreeting();      // what will log here?
```

## Closures

[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) are expressions (usually functions) which can work with variables set within a certain context. In other words, a closure is formed when nested function is defined inside of another function. This allows us to access to the outer function's variables via the scope chain.

Here's a basic example of a closure:

```js
function init() {
  var name = 'Turing'; // name is a local variable created by init

  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }

  displayName();    
}
init();
```

You're probably asking, 'So what?'... which is totally fair. It's hard to see the real value of closures until the nested functionality is returned.

Returning the nested functionality allows you to maintain access to the local variables in its associated (lexical) scope. Unlike what we've mentioned before with garbage collection, the interpreter is smart enough to know that any referenced variables within this returned function should not be garbage-collected.

Let's take a look at another example of a closure:

```js
1  function makeCounter () {
2    var count = 0;
3  
4    return {
5     add: function () {
6     count++;
7    },
8    getCount: function () {
9     return count;
10   }
11  };
12 }
13 
14 var counter = makeCounter();
15
16 console.log(counter)
17 console.log(counter.getCount()); // 0
18 counter.add();
19 console.log(counter.getCount()); // 1
```

In the example above, you'll notice that the value of counter on line 16 prints `{add: ƒ, getCount: ƒ}` - which is what we expect given the return statement in `makeCounter`. 

This is when closures get interesting - when that inner functionality is returned. You'll notice that when we actually call the methods that are stored in the `counter`object (lines 17-19) we still have access to the variable `count`. 

Because of the way that our code is written and returned, JavaScript knows not to garbage collect the variable of count. There is no way to mutate or overwrite it `count` because it is completely protected within the closure. It's only accessible through the functions provided by the closure itself. Simply put, a closure is the ability of a function to remember the environment in which it was created.

You can find some practical uses for closure [here](https://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript).

#### Your challenge

Create a function called `createGreeting` that declares a variable called `myName` and an inner function that is returned. When the created function is called, it should log `'Hello' + <yournamehere>` to the console. 

```js
function createGreeting() {
  // your code here
}

// var yourGreeting = createGreeting();
// yourGreeting(); //should log the string of 'Hello' with your name
```

#### Closing

Using your journal, take a few minutes to answer the following:

- What are the most important/significant ideas or elements about the JS engine executes code?
- Why is it important to understand scope?
- What makes closures special?
