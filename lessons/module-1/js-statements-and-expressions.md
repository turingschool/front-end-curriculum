---
title: "JS: Statements & Expressions"
length: 90
tags: javascript, introduction, foundation, variables
---

## Learning Goals

* Understand the difference between statements and expressions in JavaScript
* Use various operators in JavaScript

## Vocabulary
- `Statement` A single piece of code that accomplishes one task or action
- `Expression` A statement that produces a value
- `Operator` Symbols that are used to assign, compare, and perform operations

## Statements

A script is a series of instructions that a computer can follow one-by-one. Each individual instruction is known as a **statement**. Each statement in JavaScript is followed by a semicolon.

Example statements:

```javascript
"hello";
358;
false;
console.log('BOOM');
alert('POW');
```

## Expressions

An **expression** is a statement that, when read by the browser, results in a single value. Expressions can use operators to create this single value. Here are some example expressions:

This expression results in "apple": `"ap" + "ple"`

This expression results in 5: `2 + 3`

### What is the difference?

In simpler terms, a statement performs some kind of action. It does not return anything. An expression produces a value and can be written wherever a value is expected.

Think about the following sentences:

- "It's raining a lot!"
- "It's raining cats and dogs!"

Both of these sentences are statements! They declare something. But one of them is an _expression_ - it means something other than what the letters actually spell out. "It's raining cats and dogs" ACTUALLY _means_ "It's raining a lot".

Similarly, consider the following code statements:

- `4;`
- `2 + 2;`

They're both statements. One is an expression - `2 + 2;` evaluates to `4;`!

## Operators

Expressions rely on operators to calculate their single value. There are 5 basic types of operators to get you started:

1. [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment) assign a value to a variable. `var color = 'magenta';`
2. [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic) perform basic math. `var addTwo = 2 + 2;`
3. [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String) combine strings. `var greeting = 'Hello! ' + 'Nice to meet you.';`
4. [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison) compare two values and return a __true__ or __false__. `var buy = 3 > 5; // Value of buy is false`
5. [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical) combines __expressions__ and return a Boolean value of true or false. `var buy = (5 > 3) && (2 < 4);`

<section class="call-to-action">
### Challenge

Translate each of the following expressions to JavaScript. Type them out in your console so you can be more confident they are doing what you want them to do.

_Example:_ Check if 2 is greater than or equal to 3
_Example solution:_ `2 >= 3`

- Find 12 divided by 3
- Find the remainder when 12 is divided by 5
- Combine the strings "hello" and "world" and "!"
- Check if "4" is the exact same thing as 4
- Write a variable age and assign to a number. Check if the age is greater than 21 but less than 65.
</section>
