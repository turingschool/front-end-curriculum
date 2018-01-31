---
title: Scope And Closures
tags: javascript, scope, closure, currying, iife
module: 2
author: Nathaniel Foster
---

[Lesson slides](https://docs.google.com/presentation/d/1zX-A4d_yMFPrVpofoIP5FLSjOb94vBzORql-BOV2vUc/edit#slide=id.g1c033f9cd5_0_35)

## Lesson goals

By the end of the lesson, you will know:
* What types of scope are available
* How to create scope
* How to create closures
* What IIFEs are

## What is scope?

Scope refers to where variables and functions are accessible, and in what context the code is being executed.

You can think of a house with rooms. The house is inside the global scope. Each function and block creates a new room nested inside the house.

![scope can be thought of as a house with rooms](https://i.imgur.com/a1iQB6p.png)

The variables declared inside those rooms remain visible/accessible only when you are inside that room. Once outside the room, those variables are no longer accessible.

In a nutshell, scope:
- is the current context of execution. 
- is the context in which values and expressions are "visible," or can be referenced. 
- If a variable or other expression is not "in the current scope," then it is unavailable for use.
- Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but **not** vice versa.

### Execution scope

We have several scopes available to us. Global, function, block, and eval (more on eval in a moment).

**Global scope:**
- Global scope is the default.
- Everyone and everything has access to the global scope.
- Functions and variables in the global scope are "vulnerable" because they can be accessed by everything and potentially mutated.

**Function scope:**
- Variables declared in the function (using `var`, `let`, or `const`) can only be accessed by the other code inside the function.
- You control what you create.

**Block scope:**
- Variables declared in the [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) (`if` blocks, `for` loops, etc) using `let` or `const` can only be accessed by other code inside the block.
- Variables declared in block statements using `var` will be hoisted out of the block and to the top of the enclosing parent scope (the function or the global scope containing the block statement).

**Eval scope:**
- Eval can be very dangerous!
- It executes the code passed into it with the privileges of the caller.
  - If you run eval() with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage / extension.
  - More importantly, third party code can see the scope in which eval() was invoked, which can lead to possible attacks in ways to which a similar function (with the usual protections of function scope) is not susceptible.
  - Some JSON.parse implementations use eval to turn a string of JSON into a valid js object

Let's consider the following code:

```
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

Even though buildLaser and buildMoonBase both use a variable called `message`, because they are declared within a function, those variables do not interact or overwrite each other; they both occupy a separate piece of memory. Both variables are scoped to their own function and can only be accessed from inside their function scope.

As the call stack builds up, each function has its own execution context.

![callstack building up](https://media.giphy.com/media/3ohs4rkYvzISB83cqY/giphy.gif)

### Creating scope

**Global scope:**

```
var count = 20;

console.log(window.count);
```

Variables declared in the global scope are added as properties of the window (the global object). These properties will be around for as long as the window exists; this can cause inadvertent naming collisions.

Tools like webpack can help us avoid this by creating scope for each file it bundles up. Take minute to look at the `bundle.js` file of your gametime project.

**Function scope (returning values):**

```
function makeNumber () {
  var number = 5;

  return number;
}

makeNumber()

console.log(number); // undefined
console.log(makeNumber); // function () {...}
console.log(makeNumber()); // 5
```

To make use of variables declared inside function scope while OUTSIDE that scope, the value must be returned out of the function.

It's **important to note** that the variable name does not come with the returned value. Above, you can see that when we run the function `makeNumber()`, the variable `number` does not become visible to the global scope. However, when we run the function in the last `console.log`, the function evaluates to 5.

If we want to use values created by functions, we must return those values out of the function. Additionally, if that value needs to be used elsewhere in our code, we must capture it somehow.

`const number = makeNumber();` could be one way; assigning the returned value of the function to a new variable allows us to "store" or "capture" the value to be used elsewhere.

```
function makeNumber () {
  var number = 5;

  return number;
}

const number = makeNumber()

console.log(number); // 5
console.log(makeNumber); // function () {...}
console.log(makeNumber()); // 5
```

**Function scope (child and parent scopes):**

```
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

In the above example, the console log inside `makeArray` fails because parent scopes do not have access to variables declared in child scopes. However, the child has access to the variables declared in the parent scope (`array`).

If we think about the house analogy, everyone in the house has access to common areas, but (and, yes, this house is highly unusual and trusting) no one has access to anything inside individuals' rooms besides the owner of the room.

**Try it yourself**

Exercise 1:

```
function makeNumber () {
  let number = 5;  
  return number;
} 

function makeObject () {
  let object = {};
  
  makeNumber();
  object.number = number;

  return object;  
}

makeObject();
console.log(object.number);
```

The above code is broken. Why? How can we make it work?

Exercise 2:

```
let favoriteVillain = 'Ursula';

function getFavoriteVillain () {
  let favoriteVillain = 'Jafar';

  if (favoriteVillain === 'Jafar') {
    favoriteVillain = 'Scar';

    if (favoriteVillain === 'Scar') {
      let favoriteVillain = 'Maleficent';
    }
    
    console.log(favoriteVillain);
  }
  
  console.log(favoriteVillain);
}

getFavoriteVillain();

console.log(favoriteVillain);
```

What will log? How does this change if we change variable declaration to use `var` instead of `let`? Why?

## Closures

[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) are expressions (usually functions) which can work with variables set within a certain context. In other words, a closure is an inner function that has access to the outer (enclosing) function’s variables' scope chain.

(The scope chain is the chain the code follows when it's looking for variables; if a variable is referenced but not declared in a block, the code goes out to the next available scope and looks there. This process continues - the code traverses the chain until it finds the variable declaration.)

Let's take a look at an example of a closure:

```
var counter = (function () {
  var counter = 0;

  return {
	add: function () {
  counter++;
},
	getCount: function () {
	  return counter;
    }
  };
})();

console.log(counter.getCount()); // 0
counter.add();
console.log(counter.getCount()); // 1
```

What's happening in the code above?
- We're declaring a variable `counter`, which is pointing to a function that is being called immediately (we'll talk more about this in a minute).
- Inside the anonymous function, we're declaring a variable `count`, whose value is 0.
- We're returning an object with two keys, `add` and `getCount`, whose values are functions that increment the `count` variable and return it, respectively.

This means that the value of `counter` is an object. The only way to access the `count` variable is by running one of our two methods, `add` or `getCount`.

What's the point of doing something like this?

You'll notice that there's no way to mutate or overwrite the `count` variable, because it is completely protected within the closure. It's only accessible through the functinos provided by the closure itself.

Here's another interesting example of a closure in action:

```
function add (x) {
  return function (y) {
    return x + y;
  };
}

var add5 = add(5);

var no8 = add5(3);
alert(no8); // Returns 8

var no12 = add5(7);
alert(no12); // Returns 12
```

The first `add` function behaves like a factory or template - we can use it to create functions that will always add the parameter we give it. `const add9 = add(9);` and `const add2785 = add(2785);`, for example.

Then, once we have those new functions, we can pass in a second parameter and get the added value returned.

tl;dr: The `add` function is the factory. `add5` and `add9` are closures: they contain the same code but refer to different scopes.

(This is also known as [currying](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe), a concept from functional programming.)

## IIFE (immediately invoked function expressions)

```
(function myScope () {
  var functionScopedVariable = "Safety!"
})();

console.log(functionScopedVariable); // undefined
console.log(myScope) // undefined
```

Take a look at the code above. Neither the function-scoped variable `functionScopedVariable`, nor the named function `myScope` are available in the global scope. Why is this? What do you notice about the syntax of this code?

The function `myScope` is wrapped in parentheses, and then a pair of parentheses is added onto the end. We know in Javascript, we invoke a function with those parentheses. This function is being invoked as soon as it is created, which means the function itself is enclosed in function scope and unavailable to the global scope.

**JavaScript Module Pattern:**

We can make use of IIFEs to create modules.

```
window.myStringModule = (function () {
  var allCapsString = "SAFETY!"

  function setString (newString) {
	  allCapsString = newString.toUpperCase();
  }

  return {
	  setString: setString,
	  getString: function () {
      return allCapsString;
    }
  };
})();  
```

Looking at this code, what do you think is happening?

You can read more about the module pattern here:
Read more about the JS Module Pattern:
- [http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
- [https://toddmotto.com/mastering-the-module-pattern/](https://toddmotto.com/mastering-the-module-pattern/)

## A few more notes

Functions are hoisted to the top of their scope.

```
log();

function log () {
  console.log("log something");
}
```

The above code will work, because the function is hoisted so it is declared and defined at the top of the code, above the function invocation.

Contrast this against the way variables are hoisted to the top of their scopes:

```
var age = 32065;

function setAge () {
  console.log(age); // undefined
  var age = 29;
}

setAge();
```

Why is that console log in `setAge` undefined, rather than 29 or even 32065?

This is what JavaScript thinks is happening:

```
var age = 32065;

function setAge () {
  var age;
  console.log(age); // undefined
  age = 29;
}

setAge();
```

This is true regardless of what variable declaration keyword is used (`var`, `let`, or `const` all behave this way).

The variable declaration is hoisted to the top of the scope, but the definition does not happen until where it is originally declared/defined.

## Exercises

**Exercise 1**

```
let number = 10;

function foo () {
  number = 20;
  console.log(number);	// 1 - what will log here?
}

console.log(number);		// 2 - what will log here?

foo()

console.log(number);		// 3 - what will log here?
```

**Exercise 2**

```
let number = 10;

function foo () {
  let number = 20;
  console.log(number);	// 1 - what will log here?
}

console.log(number);		// 2 - what will log here?

foo()

console.log(number);		// 3 - what will log here?
```

**Exercise 3**

```
function foo () {
  var localNumber = 20;
  number = localNumber;  
}

foo()

console.log(number);  // what will log here?
```

**Exercise 4**

```
var name = "Nathaniel Foster";

function printGreeting(name) {
  console.log("Hello " + name);
}

printGreeting("Danger");	// what will log here?
printGreeting();			// what will log here?
```

**Exercise 5**

```
let array = [];

for (var i = 0; i < 10; i++) {
  array[i] = function () {
    console.log('You clicked: ' + i);
  };
}

array[5]()	// what will log here?
```

**Exercise 6**

```
let array = [];

for (let i = 0; i < 10; i++) {
  array[i] = function () {
    console.log('You clicked: ' + i);
  };
}

array[5]()	// what will log here?
```
