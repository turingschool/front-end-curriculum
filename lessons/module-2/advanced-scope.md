---
title: Scope
length: 120
tags: javascript, scope, scope chain, closures, lexical scope, execution call stack, execution context
module: 2
---

## Goals

By the end of this lesson, you will be able to:

* Understand the order of execution for JavaScript code and why it matters
* Describe the differences between `var`, `let` and `const` and when to use each
* Predict how variables will behave when multiple scopes are involved

## Vocab

- `JavaScript Engine/Interpreter` A program that executes JavaScript code. Most commonly used in web browsers
- `Scope` The level in which a variable can be accessed
- `Hoisting` The process of implicitly moving the declaration of variables and functions to the top of their scope

# How JavaScript is Read

A fundamental part of writing better code and digging into more advanced topics is understanding how JavaScript is read by the browser. Can you build out applications without this knowledge? Of course. But a lot of developers find that having a good grasp on what is going on 'under the hood' ends up making other things infinitely easier - including, but not limited to, self-teaching new concepts, debugging, and writing solid JavaScript code. 

Each browser has what's called a 'JavaScript Engine' that translates (or interprets) your code line by line as it executes, which allows your application to perform the behaviors and interactions you've programmed. For example, if you've written the following code:

```
var header = document.getElementById('header');
header.innerText = 'Lorem Ipsum Dolor'
```

The JavaScript engine will read and interpret these two lines in the order they've been written: first the browser will find the header element, then it will update its inner text. You can think of the JavaScript engine as a foreign language translator, who acts as an intermediary between two people who don't speak the same language. As developers, we understand how to write JavaScript, the JavaScript Engine knows how to read JavaScript, and can pass those instructions onto the rest of the browser.


## Understanding the Order of Execution

In our previous example, we mentioned the JS Engine will read the two lines of code in the order they were written. Just like we might read a book, we must completely finish reading one line before we move onto the next (otherwise that book wouldn't make much sense to us)! In programming languages, this is what we call **single-threaded**. 

JavaScript is a **single-threaded** language, which means each line of code must fully finish executing before it can move onto the next -- only one task can be executed at a time.

Let's look at a more complex example:


```js
1   var modTwoTeachers = ['Brittany', 'Robbie', 'Pam'];
2
3   function calculateEvals (teachers, classSize) {
4     return classSize / teachers.length;
5   }
6
7   var numEvals = calculateEvals(modTwoTeachers, currentCohort);
8
9   var currentCohort = 32;
10  console.log(numEvals);
```

### In Your Notebook

**What would you expect to be logged when we get to line 10? Why?**



Let's do a quick breakdown of what the interpreter did here to read this code:

1. **Line 1:** The `modTwoTeachers` variable is assigned to an array of instructor names.
2. **Line 7:** We then skip down to line 7, because we are not currently invoking the function that's been declared, so we skip over that for now. On line 7, the `numEvals` variable is assigned to the invocation of `calculateEvals`.
3. **Line 3:** Because line 7 told us to invoke `calculateEvals`, the interpreter will jump back up to line 3 and begin executing that function.
4. **Line 4:** return `classSize / teachers.length`
5. **Line 9:** Our function has finished executing, so we're going to pop out of that and pick up where we left off, which is on line 9, where the `currentCohort` variable is assigned to the number 32.
6. **Line 10:** We console log the value of our `numEvals` variable, which gives us NaN.


Based on this order of execution, we ultimately receive NaN as our result because the value of our `currentCohort` is not assigned until **after** we already do the math within `calculateEvals`. At the time `calculateEvals` executes, the value of our `currentCohort` variable is `undefined`. So what our function is really doing is trying to return `undefined / 3` -- which will always result in NaN.


Let's look at another example:


```
1  var moo = mooLikeACow();
2  
3  function mooLikeACow() {
4    return 'Moooo!';
5  }
6 
7  console.log('Animal Sound: ', moo);
```

**What would we expect to be logged when line 7 executes? Why? Is the actual behavior different than you expected?**

Based on our previous example, where we received `NaN` because our variable hadn't been assigned a value yet, we might expect this new example to throw some sort of error as well. But it appears to work just fine! We get back `Animal Sound: Moooo!` when line 7 is executed.


### Hoisting & The Creation Phase

In order to understand what's happening here, we must explore another step the interpreter takes before executing our code.

The interpreter takes a first pass to skim over our code and get a general idea of what we're doing and what variables and functions we'll be using. This is called the **creation phase**. In the creation phase, the interpreter sets aside some space in memory to store any variables and functions we might need access to.

Using the first code example, the interpreter recognizes that we're going to be working with a function called `calculateEvals` and some variables - `modTwoTeachers`, `numEvals`, and `currentCohort`. In trying to be helpful, the interpreter **hoists** these functions and variables to the top of our scope. Behind the scenes, the interpreter would essentially be changing our code to look something like this:

```
1   var modTwoTeachers, numEvals, currentCohort;
2   function calculateEvals(teachers, classSize) {
3     return classSize / teachers.length;
4   }
5
6   modTwoTeachers = ['Brittany', 'Robbie', 'Pam'];
7
8   numEvals = calculateEvals(modTwoTeachers, currentCohort);
9
10  currentCohort = 32;
11  console.log(numEvals);
```

Our variable **declarations** are hoisted to the top of our code block, but their **initialization** or **assignment** remains on the original line it was written. Therefore, all three of our variables are `undefined` until the execution phase when the interpreter reaches the lines where we assign them values.

Our function is also hoisted to the top of our code block, with its entire definition alongside it. This gives us insight into why our second example still worked without throwing an error:

```
1  function mooLikeACow() {
2    return 'Moooo!';
3  }
4
5  var moo = mooLikeACow();
6  
7  console.log('Animal Sound: ', moo);
```

When functions are hoisted to the top of our code block, it hoists not just the function name, but the code inside of it as well. This means we can invoke functions before we've declared them without running into errors. 

This hoisting behavior adds some complexity to the JavaScript language, and is important to understand thoroughly in order to anticipate the values of your variables at any given time. 



#### Turn and Talk

With a partner, take turns explaining how the following JavaScript code would be translated by the interpreter. We will come back together as a class to discuss:


```js
1  var hungriestDog = 'Tess';
2 
3  function begForTreats(seconds) {
4   var result = seconds * 2;
5
6   if (result > 5) {
7    return 'This human is rude, not giving me treats. Onto the next one.';
8   } else {
9    return 'Yum, human food!'
10  }
11 }
12 
13 var beggingTime = 20;
14
15 begForTreats(beggingTime);
16
17 beggingTime = 30;
```



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

**Function scope:**
- Variables declared in the function (using `var`, `let`, or `const`) can only be accessed by the other code inside the function.
- You control what's in the function scope, it cannot be meddled with by anyone or anything else.
- The global scope cannot access function scope.

**Block scope:**
- Variables declared in the [block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) (`if` blocks, `for` loops, etc) using `let` or `const` can only be accessed by other code inside the block.
- Variables declared in block statements using `var` will not be scoped within the block (as this is a special feature of `let` and `const`). Variables declared with `var` will "leak out"


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

function getFirstNumber () {
  const firstNumber = array[0];
  return firstNumber;
}

getFirstNumber(); // this works, why?

console.log(firstNumber);  // why can't we access firstNumber?
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

If they are not found within the context of a block statement, then `let` and `const` will be functionally scoped, like `var`.

#### Journal

Complete the following prompts in your journal:

Describe "scope" in your own words. What are the similarities and differences between `var`, `let`, and `const`?

What might be a metaphor or analogy for scope? Draw or diagram it out.

## Scope Chain

Whenever a variable is used, the JavaScript interpreter traverses the `scope chain` until it finds an entry for that variable. Traversal on the scope chain always starts in a local context and moves into the global space. Remember that the scope chain is initialized during the "creation phase" of the interpreter running through the code. This is important to note, as the scope chain (e.g. "What is the parent scope for this variable? The grandparent scope?") is determined by where functions are _defined_ in the code base.... not where functions are _invoked_. 

Every time a variable is initialized, the interpreter will first look in its own scope to see if the label can be found. If it is not found, it will look "up" the scope chain to the parent scope to try to resolve the variable in the parent context. It will climb up the scope chain examining every execution context looking for a match to the variable name. If that name is never found, the interpreter will declare it globally on the window and the variable will be scoped as such.


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
5. Line 4 - A variable is declared without the keyword `var` and assigned a value. The interpreter searchs in the current execution context to see where this variable was defined. Because it doesn't find it declared in the current scope, it looks up the scope chain to the parent scope, which happens to be the global scope. The interpreter understands that this is to be treated as a re-assignment and assigned the value of `number` to 20 both locally and globally.
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
var givenName = 'Bananiels Foster';

function printGreeting() {
  console.log(`Hello ${givenName}`);
}

printGreeting('Danger');  // what will log here?
printGreeting();      // what will log here?
```


#### Closing

Using your journal, take a few minutes to answer the following:

- What are the most important/significant ideas or elements about how the JS engine executes code?
- Why is it important to understand scope?
- What makes closures special?


<!-- 
====================================================
====================================================
====================================================


## Review Prompt

_**Scope**_
Prompt for students:
* Describe the two phases that the JS interpreter uses to run your code.
* Give and example of when you would see a global execution context and a local execution context.

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