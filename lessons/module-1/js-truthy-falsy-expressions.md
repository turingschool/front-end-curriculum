---
title: "JS: Truthy and Falsy Expressions"
length: 60
tags: javascript, foundation, conditionals, truthy, falsy, expressions
---

## Learning Goals

* Determine which expressions are truthy and which are falsy to the JS interpreter
* Write cleaner code by applying your knowledge of truthy and falsy values

## Vocabulary

- `Expression` A statement that produces a value
- `Conditional` An expression that evaluates to true or false, or a control flow statement that executes code
- `Truthy values` In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
- `Falsy values` In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.

## Cleaning Up Conditionals
Learning about truthy and falsy values can help you write cleaner code. Let's look at this code block:
```js
var isMorning = true;
var isDayTime = false;
var isEvening = false;

function greetFriend() {
  if (isMorning === true && isDayTime === false && isEvening === false) {
    return `Good morning, friend!`;
  } else if (isMorning === false && isDayTime === true && isEvening === false) {
    return `Good afternoon, friend!`;
  } else if (isMorning === false && isDayTime === false && isEvening === true) {
    return `Good night, friend!`;
  } else {
    return `Hi friend!`;
  }
}

greetFriend();
```
That code contains a lot of unnecessary code! It's okay if you don't see what is unnecessary just yet - that's what this lesson is for! We'll come back to this block of code at the end of the lesson and clean it up.

<section class="call-to-action">
### Explore

Open and fork [this repl](https://repl.it/@kaylaewood/truthynessfalsyness). Uncomment each line of code **one at a time**. Prior to running the code, predict whether you think the expression will result in a `truthy` or `falsy` value. Then, run the code. Repeat this process for every line. Take notes along the way - What values are `truthy`? Which are `falsy`? Do you notice any patterns?
</section>

<section class="call-to-action">
### Read the Docs

Read through MDN's docs on [Truthy Values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).
</section>

## Truthy and Falsy Values
The following values are considered **falsy**:
- `false`
- `0`
- `-0`
- `""`
- `null`
- `undefined`
- `NaN`  

**All other values are considered truthy!**

This means that the following code is **unnecessary**:
- `=== undefined`
- `=== null`
- `=== true`
- `=== false`
- `=== 0`

If you find yourself writing any of the code listed above, find a better way to write it. For example, instead of this:
```js
if (pets.length > 0) {
  return 'You have at least one pet!';
}
```
Write this:
```js
if (pets.length) {
  return 'You have at least one pet!';
}
```
And instead of this:
```js
if (character === undefined) {
  return 'No character found.';
}
```
Write this:
```js
if (!character) {
  return 'No character found.';
}
```

<section class="call-to-action">
### Refactor code

Code refactoring is the process of restructuring existing code without changing the code's behavior or output. Go through [this repl](https://repl.it/@kaylaewood/conditionalRefactoring) and find ways to rewrite the existing code so that it does not use unnecessary conditional logic.
</section>

<section class="checks-for-understanding">
### In Your Journal

1. How do the following values vary in their truthyness?
 - `0` and `"0"`
 - `false` and `"false"`
 - `[]` and `[].length`
 - `""` and `"something"`
2. What values are falsy?
3. Why is understanding truthyness and falsyness useful?
</section>
