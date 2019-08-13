---
title: JavaScript Scope
length: 60
tags: javascript, scope, hoisting
---

## Learning Goals

In this lesson we'll cover:

* Hoisting & Variable scope  

## Vocab

- `Scope` Determines the accessibility/visibility of variables and functions
- `Hoisting` The process of implicitly moving the declaration of variables and functions to the top of their scope

### Hoisting

Hoisting is a fancy way of saying that "some things are considered more important" to the interpreter that processes your JavaScript. In other words, certain lines of code are `hoisted` to the top of the containing scope of your code.  

But WTF does that even mean??

Example:

```js
// This named function...
function foo() {
  bar();
  var x = 1;
}

// Will actually be interpreted like this:
function foo() {
  var x;
  bar();
  x = 1;
}

// Which can be seen here:
function bar() {
  console.log('y1', y);
  var y = 2;
  console.log('y2', y);
}
```

A function declaration (ie: `function foo()`) has a higher priority to the interpreter than an anonymous function (ie: `function()`). The interpreter will always look for variables and function declarations _before_ going line-by-line through the rest of the script. This means that a function created by a function declaration gets special treatment, and can be called _before_ it has even been declared.  

But Wait! Don't the examples above show that variables get hoisted? Doesn't that mean that function expressions (ie: `var foo = function()`) would get hoisted too?.

Tricky Question! You'll notice that in the above snippets of code, only the **NAME** of the variable is hoisted, but the value is left behind. The value of that variable is not evaluated until the interpreter reaches the line where that variable is declared. **Function declarations, on the other hand, are treated differently. The entire body of that declaration will be hoisted as well.**    

In other words, this means that when a function is written as an expression, the interpreter won't process it until it gets to that full statement. **This means function expressions do *not* get special treatment, you cannot call the function _before_ the interpreter discovers it.** (As a side note, it also means any preceding code up to that point could potentially alter what goes inside that function.)  

### Your Turn

Take a few minutes with the person in front/behind you to talk through and explain hoisting to each other.

<!-- Take a few minutes with the person in front/behind you to look through the following examples functions. Try to answer the questions WITHOUT using your console yet. Then we will go over them together.  

[Check Your Understanding](https://gist.github.com/)   -->

# Variable Scope

Where you declare a variable affects where it can be used within your code. If you declare a variable within a function, it can only be used within that function. This is known as the variable's `scope`. When we talk about variables in regard to their scope, there are two (kind of three) types:

- Local Variables:
  - created _inside_ a function using the var keyword
  - said to have "local scope"
  - cannot be accessed outside the function in which it was declared
  - they are created when the function is run, and removed when it is done
  - if the function runs twice, the variable could have a different value each time
  - if the variable is locally scoped, then two different functions can use the same variable name without a naming conflict

- Global Variables
  - created _outside_ a function
  - can be used anywhere in the script
  - said to have "global scope"
  - stored in memory for as long as the web page is loaded
  - takes up more memory than local variables, as well as introduces more risk of naming conflicts

- Variables sans the keyword `var`
  - ok when used to redefine a variable that has already been declared
  - risky business otherwise

## The Variable Danger Zone

Keep this in mind as you're making new variables:

Variables sans the keyword `var`
  - will work
  - will be considered global variable, even if declared _inside_ a function
  - are bad practice

Here's an example of what this looks like:

```js
function defineVariables() {
  num1 = 10;
  var num2 = 20;
}

defineVariables();

console.log(num1);  // This will display 10.
console.log(num2);  // This will give a ReferenceError: : num2 is not defined.
```

The good news is all you have to do to avoid this is to always remember to use the `var` keyword when declaring a new variable!

## Name Your Parameters Carefully

Now that we've talked a little bit about scope, we know that we have access to global variables inside of a function, right?  However, what happens if I name a parameter the same as a global variable?  In this scenario, the interpreter will try to use which one it thinks you are talking about.  In most scenarios, it will work as you'd expect.  Let's take a look below at a happy path:

```js
var number = 10;

function test(number) {
  console.log(number + 2);
}

test(number);  // This will give 12
test(15);  // This will give 17
```

Here it will work just fine because the Javascript interpreter knows to refer to the number *parameter* when we invoke the function as opposed to the *global variable* number.  However, this is not always the case.  Let's look at a scenario where this doesn't work:

```js
var number = 10;

function test(number) {
  number = number + 2;
  console.log(number); // This will give 12
}

test(number);

console.log(number); // This will give 10
```

Here we are trying to reassign our global variable to whatever value I pass through as an argument plus two in our test function.  It logs the value we expect, when the function is invoked.  However, when we log what the global variable is, it remains the same as before.  The global variable wasn't reassigned...rather the parameter was reassigned a different value.

This is all very confusing.  But there's an easy way to avoid this confusion...make sure your parameters have a different name from your global variables!  Let's try that now...

```js
var num = 10;

function test(number) {
  num = number + 2;
  console.log(num); // This will give 12
}

test(num)

console.log(num); // This will also give 12
```

Hooray!  Now we are getting what we expected both inside of the function and globally.  Because we are using a different name, the interpreter knows which variable we are referring to.
