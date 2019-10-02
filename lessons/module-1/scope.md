---
title: JavaScript Scope
length: 60
tags: javascript, scope, hoisting
---

## Learning Goals

* Determine the scope of a given variable
* Have a high level understanding of how hoisting works

## Vocabulary

- `Scope` Determines the accessibility/visibility of variables and functions

## Variable Scope

**Scope** refers to the accessibility of, or ability to reference, a variable. **Where** you declare a variable affects where it can be used within your code.

<section class="call-to-action">
### Explore Scope

Visit [this repl](https://repl.it/@ameseee/Scope) and follow these directions:
1. List out the names of all variables in this program
2. One-by-one, `console.log` the value of each variable on line 8. What prints out?
3. One-by-one, `console.log` the value of each variable on line 11. What prints out?
4. Why were the results different from line 8 and 11?
</section>

If you declare a variable within a function, it can only be accessed within that function. This is known as the variable's `scope`. When we talk about variables in regard to their scope, there are two types:

**Local Variables:**
- created _inside_ a function using the `var` keyword
- are said to have "local scope"
- cannot be accessed outside the function in which it was declared
- are created when the function is run, and removed when it is done

Other notes:
- if the function runs twice, the variable could have a different value each time
- two different functions can use the same variable name without a naming conflict
- parameters behave in the same way in terms of scoping

**Global Variables**
- created _outside_ a function
- can be used anywhere in the script
- are said to have "global scope"
- are stored in memory for as long as the web page is loaded
- take up more memory than local variables, as well as introduces more risk of naming conflicts → we work to use as few as possible

## The Variable Danger Zone

Keep this in mind as you're making new variables:

Variables without the keyword `var`
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

In JavaScript, global variables are available within the scope of a function. However, what happens if I name a parameter the same as a global variable? In this scenario, the interpreter will try to use which one it thinks you are talking about. In most scenarios, it will work as you'd expect.  Let's take a look below at a happy path:

```js
var number = 10;

function test(number) {
  console.log(number + 2);
}

test(number);  // This will give 12
test(15);  // This will give 17
```

Here it will work just fine because the JavaScript interpreter knows to refer to the number *parameter* when we invoke the function as opposed to the *global variable* number. However, this is not always the case. Let's look at a scenario where this doesn't work:

```js
var number = 10;

function test(number) {
  number = number + 2;
  console.log(number); // This will give 12
}

test(number);

console.log(number); // This will give 10
```

Here we are trying to reassign our global variable to whatever value I pass through as an argument plus two in our test function. It logs the value we expect, when the function is invoked.  However, when we log what the global variable is, it remains the same as before. The global variable wasn't reassigned...rather the parameter was reassigned a different value.

This is all very confusing. But there's an easy way to avoid this confusion...make sure your parameters have a different name from your global variables!  Let's try that now...

```js
var num = 10;

function test(number) {
  num = number + 2;
  console.log(num); // This will give 12
}

test(num)

console.log(num); // This will also give 12
```
