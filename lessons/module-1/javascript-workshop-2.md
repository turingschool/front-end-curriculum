---
title: JavaScript Workshop Day 2
length:
tags: javascript, code challenges
---

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