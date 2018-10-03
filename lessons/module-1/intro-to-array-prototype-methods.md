---
title: Intro to Array Prototype Methods
tags: JavaScript, array, prototype, introduction
length: 150
---

## Learning Goals

* Understand what array prototype methods are and why they can be useful
* Continue to develop your skills googling and reading documentation
* Get comfortable with manipulating and organizing arrays

## Vocab

- `array` A data structure consisting of a collection of elements (values or variables), each element is identified by an index
- `index` The position of each element within an array
- `method` A function on an object

---

## Context

As discussed previously, arrays often contain a collection of related values.  We've also talked about how you can loop through an array using a `for` loop.  However, you'll soon find out that having a static array isn't always useful.  There might be times where we need to add something to an array or take something out of it.  Other times you might want to find out where a value is in an array (it's index).

This is where array prototype methods can become very useful.  These methods are functions that you have access to on any array.  There are definitely a lot of them.  Just look at the [MDN Docs][exp]!  There's no need to memorize everyone single one, but it is useful to learn how to go through the docs.  Understanding how to read docs, check syntax, and look at examples is extremely useful in helping you find what you need efficiently.  This relates to not only array prototype methods but also documentation in general (you're a developer.  Trust me, you will be going through documentation a lot!)  So let's dive in!

[exp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods

## Let's Do A Few Together

Let's do this in a [Repl](https://repl.it) instead of the console since it's a bit easier to do basic Javascript in there.

1. Insert a dog at the end off the array
```js
// How might I add a dog, 'Collie' at the end using an array prototype method?
var dogs = ['Golden Retriever', 'Pug', 'German Shepherd'];

// console output
=> ['Golden Retriever', 'Pug', 'German Shepherd', 'Collie'];
```

2. How might I insert another favorite food to the beginning of the array?
```js
// Let's try adding a 'breakfast burrito' to the beginning of the array.
var favoriteFoods = ['pizza', 'fruits', 'tacos'];

// console output
=> ['breakfast burrito', 'pizza', 'fruits', 'tacos'];
```

## Your Turn
Now it's your turn to jump into the docs and try some things out!  Cheers!

3. Let's go off our favoriteFoods example from #2.  Let's say, I no longer like tacos and I want to take it off the array.  How might I do this?

```js
var favoriteFoods = ['breakfast burrito', 'pizza', 'fruits', 'tacos'];

// console output
=> ['breakfast burrito', 'pizza', 'fruits'];
```

4. Cool, now that you have figured out how to remove the last value from an array, what if I wanted to remove the first value instead?  Take a look at the example below:

```js
var recipe = ['sugar', 'eggs', 'milk', 'flour'];

// console output
=> ['eggs', 'milk', 'flour'];
```

## Next Steps
Awesome, now that we've learned how to insert/remove values from the beginning/end of an array, let's do another one that requires us using multiple array prototype methods.

5. I have an array of movies but have decided I want to replace `Billy Madison` with `Wedding Crashers`.  How might I do this?

```js
var myMovies = ['Avengers', 'Sherlock Holmes', 'V for Vendetta', 'Fight Club', 'Billy Madison'];

// console output
=> ['Avengers', 'Sherlock Holmes', 'V for Vendetta', 'Fight Club', 'Wedding Crashers'];
```

6. Let's do one more.  Let's say I have a list of numbers and want to take the last number off and add 0 to the beginning.  Using what you have learned from the previous exercises, how could you do this?

```js
var numbers = [1, 2, 3, 4, 5, 6];

// console output
=> [0, 1, 2, 3, 4, 5];
```

## Exploring a Few More Methods
Nice work!  You should have learned atleast 4 different array prototype methods from the exercises before.  Maybe more!  Now that you're getting pretty good at looking through the docs, let's do a few more exercises and try some different methods.

7. I have an array of animals but they are all jumbled up.  How can we sort these animals alphabetically?

```js
var animals = ['zebra', 'giraffe', 'horse', 'red panda', 'polar bear', 'aardvark'];

// console output
=> ['aardvark', 'giraffe', 'horse', 'polar bear', 'red panda', 'zebra'];
```

8. What if I had another array of numbers and just wanted to reverse the order so it was descending instead of ascending?  Which array prototype method could you use?

```js
var jewelry = ['pearl necklace', 'golden ring', 'diamond earrings', 'bracelet'];

// console output
=> ['bracelet', 'diamond earrings', 'golden ring', 'pearl necklace'];
```

9. I have two arrays, `healthyFoods` and `vegetables`, that I want to combine together.  Without using a `for` loop, how could we implement this?

```js
var healthyFoods = ['bananas', 'chicken', 'salmon', 'pecans'];
var vegetables = ['broccoli', 'cucumber', 'asparagus', 'kale'];

// console output
=> ['bananas', 'chicken', 'salmon', 'pecans', 'broccoli', 'cucumber', 'asparagus', 'kale'];
```

10. I have an array of user names and would like to find the index of `Brandon`.  Is there an array prototype method that allows me to find what index he is in the array?

```js
var userNames = ['Justin', 'Tiffany', 'David', 'Brandon', 'Kristen', 'Heather'];

//console output
=> 3
```

Bonus: What value gets returned if I try to find the index of `Karin`?

## Summary

Turns out, array prototype methods are pretty awesome.  They allow us to deal with arrays in a variety of ways.  Being able to quickly go to the docs and find which array prototype method you need for some kind of functionality is really important.  In your journals, write down your answers to each question.  After you are done, discuss with the person next to you what you have learned.

* How might you use some of these array prototype methods in your current/future projects?
* What techniques did you use when going through the documentation?
* Which array prototype method/s are still confusing to you?
* What are your next steps in getting more comfortable with array prototype methods?