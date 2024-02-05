---
title: "Scope I: Execution Contexts"
length: 120
tags: javascript, execution, creation, hoisting
module: 2
---

## Learning Goals

* Understand the order of execution for JavaScript code and why it matters
* Explain what an execution context is and describe what happens in both of its phases

## Vocab

- `JavaScript Engine/Interpreter` A program that executes JavaScript code. Most commonly used in web browsers
- `Hoisting` The process of implicitly moving the declaration of variables and functions to the top of their scope
- `Creation Phase` The phase where the interpreter sets aside some space in memory to store any variables and functions we might need access to.
- `Execution Phase` The phase where the interpreter executes Javascript code, line-by-line.
- `Execution Call Stack` A tool (data structure) for the interpreter to keep track of its place in a script that calls multiple functions

# How JavaScript is Read

A fundamental part of writing better code and digging into more advanced topics is understanding how JavaScript is read by the browser. Can you build out applications without this knowledge? Of course. But a lot of developers find that having a good grasp on what is going on 'under the hood' ends up making other things infinitely easier - including, but not limited to, self-teaching new concepts, debugging, and writing solid JavaScript code.

Each browser has what's called a 'JavaScript Engine' that translates (or interprets) your code line by line as it executes, which allows your application to perform the behaviors and interactions you've programmed. For example, if you've written the following code:

```js
const header = document.getElementById('header');
header.innerText = 'Lorem Ipsum Dolor'
```

The JavaScript engine will read and interpret these two lines in the order they've been written: first the browser will find the header element, then it will update its inner text. You can think of the JavaScript engine as a foreign language translator, who acts as an intermediary between two people who don't speak the same language. As developers, we understand how to write JavaScript, the JavaScript Engine knows how to read JavaScript, and can pass those instructions onto the rest of the browser.

## Understanding the Order of Execution

In our previous example, we mentioned the JS Engine will read the two lines of code in the order they were written. Just like we might read a book, we must completely finish reading one line before we move onto the next (otherwise that book wouldn't make much sense to us)! In programming languages, this is what we call **single-threaded**.

JavaScript is a **single-threaded** language, which means each line of code must fully finish executing before it can move onto the next -- only one task can be executed at a time.

<section class="call-to-action">
### In Your Notebook

```js
var modTwoTeachers = ['Hannah', 'Nik', 'Leta'];

function calculateEvals (teachers, classSize) {
  return classSize / teachers.length;
}

var numEvals = calculateEvals(modTwoTeachers, currentCohort);

var currentCohort = 33;
console.log(numEvals);
```

Looking at the example above, what would you expect to be logged when we get to line 10? Why?
</section>

Let's do a quick breakdown of what the interpreter did here to read this code:

<section class="answer">
### Breakdown of what the interpreter is doing  

1. **Line 1:** The `modTwoTeachers` variable is assigned the value of an array of instructor names.
2. **Line 7:** We then skip down to line 7, because we are not currently invoking the function that's been declared, so we skip over that for now. On line 7, the `numEvals` variable is assigned to the value of the function expression (the invoking of) `calculateEvals`.
    - _Technically, lines 2-6 are still being read and understood by the interpreter as a function declaration. It just doesn't EXECUTE this code._
3. **Line 3:** Because line 7 told us to invoke `calculateEvals`, the interpreter will jump back up to line 3 and begin executing that function.
4. **Line 4:** return `classSize / teachers.length` - the function expression evaluates to the calculated value.
5. **Line 9:** Our function has finished executing, so we're going to pop out of that and pick up where we left off, which is on line 9, where the `currentCohort` variable is assigned the value 33.
6. **Line 10:** We log the value of our `numEvals` variable to the console, which gives us NaN.

Based on this order of execution, we ultimately receive NaN as our result because the value of our `currentCohort` is not assigned until **after** we already do the math within `calculateEvals`. At the time `calculateEvals` executes, the value of our `currentCohort` variable is `undefined`. So what our function is really doing is trying to return `undefined / 3` -- which will always result in NaN. NOTE: You will get a different error message instead of `NaN` if declaring variables with `const` instead of `var`.
</section>

<section class="call-to-action">
### Looking at another example

```js
const moo = mooLikeACow();

function mooLikeACow() {
  return 'Moooo!';
}

console.log('Animal Sound: ', moo);
```

What would we expect to be logged when line 7 executes? Why? Is the actual behavior different than you expected?
</section>

### Hoisting & The Creation Phase

In order to understand what's happening here, we must explore another step the interpreter takes before executing our code.

The interpreter takes a first pass to skim over our code and get a general idea of what we're doing and what variables and functions we'll be using. This is called the **creation phase**. In the creation phase, the interpreter sets aside some space in memory to store any variables and functions we might need access to.

Using the first code example, the interpreter recognizes that we're going to be working with a function called `calculateEvals` and some variables - `modTwoTeachers`, `numEvals`, and `currentCohort`. In trying to be helpful, the interpreter **hoists** these functions and variables to the top of our scope. Behind the scenes, the interpreter would essentially be changing our code to look something like this:

```js
var modTwoTeachers, numEvals, currentCohort;
function calculateEvals(teachers, classSize) {
  return classSize / teachers.length;
}

modTwoTeachers = ['Hannah', 'Nik', 'Leta'];

numEvals = calculateEvals(modTwoTeachers, currentCohort);

currentCohort = 33;
console.log(numEvals);
```

Our variable **declarations** are hoisted to the top of our code block, but their **initialization** or **assignment** remains on the original line it was written. Therefore, all three of our variables are `undefined` until the **execution phase** when the interpreter reaches the lines where we assign them values.

Our function is also hoisted to the top of our code block, with its entire definition alongside it. This gives us insight into why our second example still worked without throwing an error:

```js
function mooLikeACow() {
  return 'Moooo!';
}

const moo = mooLikeACow();

console.log('Animal Sound: ', moo);
```

When functions are hoisted to the top of our code block, it hoists not just the function name, but the code inside of it as well. This means we can invoke functions before we've declared them without running into errors.

This hoisting behavior adds some complexity to the JavaScript language, and is important to understand thoroughly in order to anticipate the values of your variables at any given time.


<section class="call-to-action">
### Turn and Talk

With a partner, take turns explaining how the following JavaScript code would be translated by the interpreter. We will come back together as a class to discuss:


```js
const hungriestDog = 'Tess';

function begForTreats(seconds) {
  const result = seconds * 2;

  if (result > 5) {
    return 'This human is rude, not giving me treats. Onto the next one.';
  } else {
    return 'Yum, human food!';
  }
}

let beggingTime = 1;

let beg = begForTreats(beggingTime);

beggingTime = 4;
console.log(beg)
```
</section>

## Execution Call Stack

Chances are good that you have come across information that references `The stack`, `The call stack`, or the `Execution Call Stack`. A [call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) is a way for the JavaScript interpreter to keep track of its place (its current execution context) in a script that calls multiple functions — what function is currently being run, what functions are called from within that function and should be called next, etc.
A stack is a fundamental data structure in Computer Science that follows "First-In-Last-Out" (FILO) semantics. Any time a new function is invoked (and a new execution context is created) this execution context is pushed to the stack. Once a function has returned, the call is popped off the stack. The stack is used to determine in what order the code runs. Let's look at this example:  

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

<section class="answer">
### What's happening here?  

As the call stack builds up, each function has its own execution context.  
1. We start in the global execution context  
1. `ransomTheWorld` is called, creating a new call on the stack
1. `buildMoonBase` is called creating a new call on the stack. Within this function, a variable is declared and `buildLaser` is called  
1. `buildLaser` being invoked creates a new call on the stack
1. `buildLaser` declares a variable, prints the variable to the console, and is returned and popped off the call stack... bringing us back to the context of `buildMoonBase`  
1. `buildMoonBase` prints the previously declared variable to the console and is returned and popped off the call stack... bringing us back to the context of `ransomTheWorld`
1. `ransomTheWorld` returns and is popped off. Our stack frame is empty and we are back in the global execution context.  

![callstack building up](https://media.giphy.com/media/3ohs4rkYvzISB83cqY/giphy.gif)
</section>

<section class="call-to-action">
### Turn and Talk

With a partner, take turns explaining how the the following JavaScript code would be translated by the interpreter. While one person is speaking, the other person should be diagramming this process.

```js  
const myNum = 21;

function addTwo(num) {
  hello();  
  return num + 2;
}

function hello() {
  console.log('hello');
}

const sum = addTwo(myNum);
console.log(sum);
```
</section>


<section class="checks-for-understanding">
### Check for Understanding

Using your journal, take a few minutes to answer the question:

What are the most important/significant ideas or elements about how the JS engine executes code?
</section>


### Further Reading

* [Ultimate Guide to Execution Contexts, Hoisting, Scopes and Closures](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
* [JavaScript Visualizer](https://tylermcginnis.com/javascript-visualizer/)
* [Function Expressions vs. Function Declarations](https://gomakethings.com/function-expressions-vs-function-declarations)
