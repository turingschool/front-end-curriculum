---
title: "JS: Arrays"
length: 60
tags: javascript, foundation, arrays
---

## Learning Goals

* Review what you know about arrays
* Add and change values to arrays via their indices  
* Access nested data (arrays and objects)

## Vocabulary

- `Literal`  A way of declaring a data structure and its values at the same time
- `Array` Used to store a collection of data items/multiple values under a single variable name
- `Element` A single item stored in an array. An element can be of any data type.
- `Bracket Notation` How we access individual elements of an array. Either to
  express the element, or assign a new element.

## Part 1: Student Exploration

We will not get on a zoom call until about halfway through this lesson. We want to give YOU a chance to dig into the code and explore before we all get together and talk about arrays. It's okay (and expected!) that some of this activity will be difficult on your own. We want you to get used to that feeling - not knowing all the answers - and start to enjoy the process of diving in and getting your hands dirty in the code!

**Spend one hour working through [this repl](https://replit.com/@kaylaewood/arrays-1#index.js)**. As you're working, write down the following things in your notes:
* Ah-ha moments/Key Points (for example: `The index of the first element of the array is 0, not 1.`)
* Questions (for example: `When would you want to have an array of nested arrays?`)

If you get stuck...
* Reference [this Intro to Arrays lesson](https://frontend.turing.edu/lessons/module-1/js-intro-to-arrays.html)
* Reference [javascript arrays documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* Google (for example: `reassign element in array javascript`)
* Write down your question/what exactly you're stuck on and move on. Then ask that question when we get on the zoom call!

After this hour, we will get on the zoom call in your calendar and continue with the remainder of this lesson.

## Part 2: Class Discussion

### Questions

Asking questions is an essential part of being a developer. Take a few minutes right now to look through your notes from the last hour. What questions do you have about arrays? Everyone should have at least one question! Let's add those questions to [this jamboard](https://jamboard.google.com/d/1JwoZ0xbAGtREcnw4-cHTAlyEhQbVEBiP15JWRLNMwUA/edit?usp=sharing).

### Key Points

We just went through **a lot** of information. Let's go over the most important things we need to know about arrays.  

<section class="answer">
### How should we name our arrays?

Since arrays hold a list of elements, we want to name arrays using a plural noun, describing the elements in the array. For example, `pets`, `people`, `days`...
</section>

<section class="answer">
### What type of data should arrays hold?

Arrays can hold any data type! They can even hold other arrays. Or objects with values that are arrays. It can get wild!   

That said, the elements in an array should always be consistent with each other. Meaning, they should be the same data type AND they should represent the same type of information.
</section>

For the remaining points, let's use this example:

```js
var craftSupplies = [
  { type: 'yarn', colorsAvailable: ['turquoise', 'black', 'beige', 'terracotta'] },
  { type: 'paint', colorsAvailable: ['red', 'yellow', 'blue'] },
  { type: 'fabric', colorsAvailable: ['black', 'white', 'purple'] }
];
```

<section class="answer">
### How would we access the first element in this array?

Since the first element of an array starts at 0, we would access the first element with bracket notation at index 0: `craftSupplies[0]`
</section>

<section class="answer">
### How would we reassign the second element in this array?

Just like we can reassign a variable to a new value, we can access any element in the array using bracket notation and then reassign it:
`craftSupplies[1] = { name: 'thread', colorsAvailable: ['gray'] };`
</section>

<section class="answer">
### How can we access nested data?

By combining what we know about objects and arrays, we can use bracket notation and dot notation to access nested information. For example, I can access the string of `'yellow'` with `craftSupplies[1].colorsAvailable[1]`
</section>

## More Practice

If you'd like more practice with arrays, work through the exercises in [this repl](https://replit.com/@kaylaewood/NestedDataPractice#index.js).

Post any questions you still have in your main cohort channel!
