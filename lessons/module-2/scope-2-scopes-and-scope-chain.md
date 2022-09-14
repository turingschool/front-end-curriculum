---
title: "Scope II: Scopes and Scope Chain"
length: 120
tags: javascript, scope, var, let, const, scope chain
module: 2
---

## Goals

* Describe the differences between `var`, `let` and `const` and when to use each
* Predict how variables will behave when multiple scopes are involved
* Understand how the scope chain is initialized and utilized to resolve variables

## Vocab

- `Scope` - The place in which a variable can be accessed.
- `Scope Chain` - A stack of currently accessible scopes, from the most immediate context to the global context.
- `Global Scope` - A globally scoped variable can be accessed anywhere in the program
- `Local or Function Scope` - A locally scoped variable can only be accessed in the function where it was declared
- `Block Scope` - A block scoped variable can only be accessed in the set of curly brackets where it was declared (only applies to `let` and `const`)

## Scope

Now that we understand the order of execution a bit, we can dive deeper into the concept of scope. **Scope** is the place in which a variable or value can be accessed.

<section class="call-to-action">
### Warmup

Pre-ES6 variables often are described as having either global scope or local (function) scope.

* How would you describe the differences between a *globally* vs *locally* scoped variable?
* Looking at the below example, does our `makeNoise` function have access to the `cowNoise` and `catNoise` variables?
* What about outside of our function?  Do we have access to `cowNoise` and `catNoise` here as well?   

```js
var cowNoise = 'moo';

function makeNoise() {
  var catNoise = 'meow';
  console.log('Cow Noise inside of Function: ', cowNoise);
  console.log('Cat Noise inside of Function: ', catNoise);
}

makeNoise();

console.log('Cow Noise outside of Function: ', cowNoise);
console.log('Cat Noise outside of Function: ', catNoise);
```
</section>

### Global, Functional, and Block Scope

We have several scopes available to us: global, local (also known as function), and block scope.

#### Global scope

<section class="call-to-action">
### In Your Notebook

Here is an example that uses *globally* scoped variables. What rules apply to them?

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
```
</section>

<section class="answer">
### Global Scope Takeaways  

- Global scope is the default.
- Everyone and everything has access to the global scope.
- Functions and variables in the global scope are "vulnerable" because they can be accessed by everything and potentially mutated (changed).
- `var`, `let`, and `const` can be globally scoped.
</section>

#### Function scope

<section class="call-to-action">
### In Your Notebook

Here is an example that uses *locally* scoped variables.  What rules apply to them?

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

// Am I able to access the variables here?
console.log(greeting + question + response);
```
</section>

<section class="answer">
### Function/Local Scope Takeaways  

- Variables declared in the function (using `var`, `let`, or `const`) can only be accessed by the other code inside the function.
- Because these variables are only used and accessible within the function, it is clearer for another developer to understand the impact of changing them and is less likely to result in issues when compared to globally scoped variables.
- The global scope cannot access function scope.
</section>


#### Block scope:

<section class="call-to-action">
### In Your Notebook

Here is an example that uses *block* scoped variables.  What rules apply to them?

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
</section>

<section class="answer">
### Block Scope Takeaways  

- Variables declared in the [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) (`if` blocks, `for` loops, etc) using `let` or `const` can only be accessed by other code inside the block.
- Variables declared in block statements using `var` will not be scoped within the block (as this is a special feature of `let` and `const`). Variables declared with `var` will "leak out" of the block to the block's parent scope.
</section>

## Scope & Scope Execution Practice

##### Parent vs. Child Scopes

Let's look at another example and compare how scopes work between the parent and child.

<section class="call-to-action">
### Problem #1

Review the example below and answer the following questions:

```js
const array = [5, 4, 3, 2, 1];
const secondNumber = array[1];

function getFirstNumber() {
  const firstNumber = array[0];
  return firstNumber;
}

function getSecondNumber() {
  return secondNumber;
}

console.log('getFirstNumber(): ', getFirstNumber())
// console.log('getSecondNumber(): ', getSecondNumber())

// console.log('secondNumber: ', secondNumber);
// console.log('firstNumber: ', firstNumber);
```

* Run the `getFirstNumber` either in a Repl or your console.  What happens & why?
* Do the same for `getSecondNumber` and discuss similarly what happens & why.
* Finally, log `secondNumber` and `firstNumber`.  Note what happens when doing one vs the other.  Why?
</section>

<section class="note">
### Review Note:

Parent scopes do not have access to child scopes BUT child scopes do have access to their parent scope.
</section>

##### Block Scoped Variable Practice

As we discussed earlier, variables declared with the keyword `let` or `const` will be block scoped if declared within a block. This means that they are scoped to the block statement (`if`, `for`...) in which they are declared. When you see `{` and `}`, those curly brackets are likely creating a scope, - as with `function`, `if`, and `for`.

<section class="call-to-action">
### Problem #2

Run the following examples in your Repl/console:

```js
// Example #1:
let message = 'You are doing great!';

if (message.length > 0) {
  let message = 'I think you are amazing!';

  console.log('Inside of conditional:', message);
}

console.log('Outside of conditional:', message);
```

```js
// Example #2
function getIndex(searchQuery) {
  const names = ["Nik", "Travis", "Hannah"];

  for (let i = 0; i < names.length; i++) {
    if (names[i] === searchQuery) {
      console.log ('The index is: ', i);
      break; //break just stops the for loop execution
    }
  }
  return i;
}

console.log('getIndex(): ', getIndex("Hannah")); // What will happen?
```

* Run this code in a Repl.  What happens?
* Be prepared to try to explain what is happening and why.  Guesses are fine!
* Then replace `let` with `var` in **Example #2** and note what happens!
</section>

<section class="checks-for-understanding">
### In Your Notebook

- Describe "scope" in your own words.
- What are the similarities and differences between `var`, `let`, and `const`?
- What might be a metaphor or analogy for scope? Draw or diagram it out.
</section>

-------------------------------------------------------------

## Scope Chain

Whenever a variable is used, the JavaScript interpreter traverses the `scope chain` until it finds an entry for that variable. Traversal on the scope chain always starts in the most immediate scope and moves towards the global space. Note that the scope chain is initialized during the "creation phase" of the interpreter running through the code.  Let's see an example of this in action!

<section class="call-to-action">
### In Breakout Groups

Consider the following example and explain what is happening:

```js
let number = 10;

function logNumber() {
  number = 20;
  console.log('A', number);
}

console.log('B', number);

logNumber()

console.log('C', number);
```

* Before running the code, what do you think the value of `number` is in each of the logs?
* Now run it and take note of what happens.  Allow each person in the group to explain what they think is happening.
</section>

<section class="answer">
### What is happening here?  

1. `logNumber` and its definition as well as the declaration `number` are stored in global memory
2. Line 1 - `number` is assigned the value of 10
3. Line 8 - prints `B 10` to the console
4. Line 10 - `logNumber` is invoked, creating a new execution context
5. Line 4 - A variable is declared without the keyword `var` and assigned a value. The interpreter searches in the current execution context to see where this variable was defined. Because it doesn't find it declared in the current scope, it looks up the scope chain to the parent scope, which happens to be the global scope. The interpreter understands that this is to be treated as a re-assignment and assigned the value of `number` to 20, both locally and globally.
6. Line 5 - prints `A 20` to the console
7. Line 12 - prints `C 20` to the console
</section>

<section class="note">
### Major Takeaways

* The scope chain (e.g. "What is the parent scope for this variable? The grandparent scope?") is determined by where functions are _defined_ in the code base.... not where functions are _invoked_.

* Every time a variable is initialized, the interpreter will first look in its own scope to see if the label can be found. If it is not found, it will look "up" the scope chain to the parent scope to try to resolve the variable in the parent context.

* If that label is never found, the interpreter will declare it globally on the window and the variable will be scoped as such.
</section>

<section class="note">
### Clarification between Scope Chain & Hoisting

It is important to note that the interpreter moving up the scope chain to resolve variable values is *NOT* hoisting.  Remember that the JS interpreter hoists declarations (storing them in memory) during the creation phase, not when the code itself is being executed.
</section>

<section class="call-to-action">
### More Examples

With a partner, take turns walking through the following code examples:

Example 1:

```js
function logLocalNumber () {
  var localNumber = 20;
  number = localNumber;  
}

logLocalNumber()

console.log(number);  // what will log here?
```

Example 2:

```js
var givenName = 'Amon Williams';

function printGreeting() {
  console.log(`Hello ${givenName}`);
}

printGreeting('Khalid') // what will log here?
printGreeting()      // what will log here?
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

printGreeting()

console.log(`D: Hello ${givenName}`);

// What logs at each letter?
```
</section>

<section class="checks-for-understanding">
### Final Reflections


Using your journal, take a few minutes to answer the following:

- Why is it important to understand scope?
- What is the scope chain? What does it do?
</section>

### Additional Resources

* [Var, Let and Const - What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
* [How JavaScript variable scoping is just like multiple levels of government](https://blog.codeanalogies.com/2017/11/22/how-javascript-variable-scoping-is-just-like-multiple-levels-of-government/)
