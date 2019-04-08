---
title: JavaScript Workshop
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


#### Spelling It Out

Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

##### Examples

```js
spellOut("bee") ➞ ["b", "be", "bee"]

spellOut("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spellOut("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
```

##### Notes
* How might I break a string out into an array?

#### Transform into an Array with No Duplicates

A *set* is a collection of unique items. A *set* can be formed from an array from removing all duplicate items.

```js
[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
```

Create a function that transforms an array into a set.

##### Examples

```js
makeSet([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

makeSet([4, 4, 4, 4]) ➞ [4]

makeSet([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
```

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

#### Online Shopping

Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

##### Examples

```js
checkForFreeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

checkForFreeShipping({ "Flatscreen TV": 399.99 }) ➞ true

checkForFreeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
```

##### Notes
* Look into how you can create an array based on the keys of an object.


#### Two of the Same

Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

##### Examples

```js
checkIfSame({
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}, {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
})

➞ false

checkIfSame({
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

#### Isograms

Determine if a word or phrase is an isogram.

An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

Examples of isograms:

lumberjacks
background
downstream
six-year-old
The word isograms, however, is not an isogram, because the s repeats.

##### Examples

```js
isIsogram('duplicates') ➞ true
isIsogram('eleven') ➞ false
isIsogram('subdermatoglyphic') ➞ true
isIsogram('alphabet') ➞ false
isIsogram('éléphant') ➞ false
isIsogram('six-year-old') ➞ true
```

#### Pangrams

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

_The quick brown fox jumps over the lazy dog._

The alphabet used consists of letters from a to z and is case insensitive. The input will not contain any other symbols.

```js
isPangram('abcdefghijklmnopqrstuvwxyz') ➞ true
isPangram('the quick brown fox jumps over the lazy dog') ➞ true
isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog') ➞ true
isPangram('a quick movement of the enemy will jeopardize five gunboats') ➞ false
```



