---
title: JavaScript Workshop Day 1
length:
tags: javascript, code challenges
---

### It's a Code Challenge Adventure

An interesting fact is that coming out of Turing, being able to _do_ the job and _getting_ the job can often involve different strategies.  In some scenarios, what is asked of you in the technical part of an interview won't involve building out an application.  Rather, it could be an abstract logic problem that you will need to solve either in front of someone or on your own within a short time constraint.  The following challenges will not only help you start to prepare for these, but will also help you review some of the concepts we've covered in class (for loops, conditionals, accessing values in objects, etc.).  It is also likely that they will make you think in ways you haven't previously (when to use return statements, how to access values in an object other than dot notation, etc.).    

#### Scrabble Hand

Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

Here's an example hand:

```js
[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
```

The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

##### Examples

```js
getMaximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]) ➞ 28

getMaximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
]) ➞ 15
```

#### Online Shopping

Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

##### Examples

```js
checkForFreeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

checkForFreeShipping({ "Flatscreen TV": 399.99 }) ➞ true

checkForFreeShipping({ 
  "Monopoly": 11.99, 
  "Secret Hitler": 35.99, 
  "Bananagrams": 13.99 
  }) ➞ true
```

##### Notes
* Look into how you can create an array based on the values of an object.

#### Frequency Distribution

Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

##### Examples

```js
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
```

##### Notes
* Look into ways of grabbing values out of objects aside from *dot notation*.
* If given an empty array, return an empty object (see example #4).


#### Two of the Same

Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

##### Examples

```js
checkIfDataIsSame({
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}, {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
})

➞ false

checkIfDataIsSame({
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}, {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
})

➞ true
```

