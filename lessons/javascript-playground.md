---
title: JavaScript Playground
length: 180
tags: javascript, introduction, practice
---

## Learning Goals

Get more practice with JavaScript:

* Terminology
* Variables
* Arrays
* Operators (assignment, arithmetic, logical, comparison)
* Conditionals
* Functions

Open the console in your browser, and let's get going!

Along the way, if your console gets too cluttered with text, then you can clear it by using the ``clear()`` command in the console.

## Variables

```js
// Let's create some vars!

// Create each of these variables in the console
// console.log each variable
// What do you expect to be logged for each var?

// What data type is each var?

var a = "A text string"

var b = 9

var c = 3*5

var d = "This" + " and" + " this"

var e = true

var 4isNotGood = 10

var @isNotGood = 10

var names = ["Marty", "Daphne", "Niles"]
```

```js
// Variable assignment

var myVar = "To be"

myVar = "Or not to be"

// Before you run this command, what do you expect to happen?
console.log(myVar)

// Why did that happen?


// Create a variable named ``newVar`` that is equal to the number ``1000``

// Create a variable `theta` and assign it with a string that is a sentence

// Create a new, separate variable for each of these data types: string, boolean, and number
```

## Arrays

```js
// Make an array of three of your favorite animals

// Make an array of five numbers and three strings

// Make an array with ten names in it

// How do you get the first name from the array using indexing?

// How do you get the fifth name from the array?

// In your array of names, change the last name to a vegetable

// Now change the second name to your least favorite number

// Finally, add your favorite tree to the end of the array

// As a challenge, how do you get the last element of an array of any size?
```

## Operators

### Assignment

```js
// Assign a number to a variable
var numPizzas = 10

var numToppings = 2 * numPizzas

numPizzas = 25

console.log(numToppings)

// What did you expect here? Was the output different from what you expected?

somePizzaVar = 10

// What happened there?
```

### Arithmetic

```js
// Add +, subtract -, multiply *, divide /, modulus %, increment ++, decrement --
// Work through each of these in your console
// Before you hit Enter, predict in your head what will be returned

12 + 53

"Turing" + " " + "School"

"String" + 10

13 + 4 * 6

(13 + 4) * 6

-1 + 3

5.3333 / 2

0 / 2

2 / 0

5.3333 % 2

2 % 2

var incrementMe = 50
++incrementMe
++incrementMe

var decrementMe = 50
--decrementMe
--decrementMe
```

Chain some more arithmetic operators together to see how the affect one another.

### Logical and Comparison

```js
// Identity operator ===
5 === 5

"All the words" === "All the words"

"All the words" === "All the words!"

2 === "2"

"true" === true

var aVar = 67
var bVar = 67
var cVar = "67"

aVar === bVar
aVar === cVar

// Negation operator !==
5 !== 5

2 !== "2"

true !== false

// And &&, Or ||, Not !
true && true

true && false

true  || true

false || true

false && true || true

false && (true || true)

!true

!false
```

There is also ``<``, ``>``, ``<=``, ``>=``. Create scenarios where you get true and false for each of these comparison operators.

## Conditionals

```js
// Structure of an if/else statement
if (condition_1) {
  statement_1;
} else {
  statement_last;
}

// Structure of an if/else-if statement
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

It can get a little cumbersome to write if/else statements in the web browser's console. There is a website called JS Bin that lets you write multiple lines of JavaScript and test it in the console.

Click here to use [JS Bin with JavaScript and the console](https://jsbin.com/?js,console).

```js
// What will happen with this conditional?
var isFalse = false;

if (isFalse) {
  console.log("Did it get here?")
}
```

Write an if/else statement where the first condition is satisfied.

Write another if/else statement where the ``else`` condition is satisfied.

```js
// Conditional with logical operators

// Before you type this, what do you think will happen?
var isFalse = false;
var isTruth = true;

if (isFalse && isTruth) {
  console.log("First condition!");
} else if (isFalse || isTruth) {
  console.log("Second condition!");
} else {
  console.log("Last condition!");
};
```

When you're done looking at ``if/else`` statements, research the ``switch`` statement to see how it behaves.

## Functions

```js
function sayHello() {
  "Hello!"
}

console.log(sayHello());

// What will be logged?

function divides(a, b) {
  return a / b;
}

console.log(divides(10, 5));

// What will be logged?

// Now it's your turn

// Write a function that does not take any arguments, and it logs "Wow, it worked!" to the console

// Write a function that does not take any arguments, and it returns your favorite movie as a string
// console.log the result

// Write a function that takes one argument, a number, and multiplies that number by 100
// console.log the result

// Write a function that takes one argument, your name, and puts your name in the middle of a sentence
// console.log the result

// Write a function that takes three numbers as arguments and returns the largest number
// The numbers should be able to be specified in any order

// What do you think will happen here? Anything bad?

function conCat(first, second, third) {
  return first + second + third;
}

var result = conCat("What ","gives? ");

console.log(result);

// Are you surprised?
```

## Additional Practice and Resources

When you search for JavaScript questions, you will often find a link to W3Schools. This site is...meh. It's really not the most organized or thorough resource. A clearer and more thoughtful source of documentation is called MDN (Mozilla Developer Network). [Here is MDN's JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

Practice, practice, practice! Repetition, repetition, repetition!

* [Functions Practice](http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html)
* If you want more of a challenging problem that deals with conditionals, try to solve [SuperFizzBuzz](https://github.com/turingschool/challenges/blob/620f4a12ab4e3c1a3f258bb4347e0c2c569a934d/super_fizz.markdown), but don't worry about the extensions.
* [Code Academy - JavaScript](https://www.codecademy.com/learn/javascript)
* [JavaScript Exercisms](http://exercism.io/languages/javascript)
* Exercises at the end of each chapter in Eloquent JavaScript
