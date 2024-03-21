---
title: "Approaching Problems Many Ways"
length: 60
tags: prototype methods
---

## Learning Goals
- Develop a deeper understanding of iterator methods
- Reduce the risk of being too attached to one iterator method OR avoiding an iterator method
- Compare and contrast iterator methods by using different iterators to achieve the same output

## Activity

### Set Up
- Open up a new replit.
- Here is your starter code for your replit:
```js
const ninetiesToys = [
    {
        name: "Tamagotchi",
        releaseYear: 1996,
        price: 15.99
    },
    {
        name: "Furby",
        releaseYear: 1998,
        price: 29.99
    },
    {
        name: "Super Soaker",
        releaseYear: 1989,
        price: 19.99
    },
    {
        name: "Pogs",
        releaseYear: 1991,
        price: 5.99
    },
    {
        name: "Game Boy",
        releaseYear: 1989,
        price: 89.99
    }
];
```
- We will be solving the same challenge three times today. Each time, you will be told with iterator method(s) you're allowed to use.

<section class="note">
### The Prompt!

Write a function `findCheapToys` that returns an array of toy names that cost less than $20.

Expect output => `[ 'Tamagotchi', 'Super Soaker', 'Pogs' ]`
</section>

### Round 1: `forEach`
- Solve the prompt using a `forEach`. You may not use any other iterator methods. 

<section class="call-to-action">
### Round 1 Reflection

- What are some pros and cons of using `forEach`?
- Can you think of any prompt/scenario where a `forEach` would not work?
</section>

### Round 2: `filter` and `map`
- Solve the prompt using a `filter` and `map`. You may not use any other iterator methods. 

<section class="call-to-action">
### Round 2 Reflection

- What are some pros and cons of this approach?
- Why couldn't we use only a `filter` or only a `map`? Why did we need to use both?
</section>

### Round 3: `reduce`
- Solve the prompt using a `reduce`. You may not use any other iterator methods. 

<section class="call-to-action">
### Round 3 Reflection

- What are some pros and cons of using `reduce`?
- Can you think of any prompt/scenario where a `reduce` would not work?
- Look at your code from the `forEach` and `reduce`. How do they compare?
- Out of all 3 rounds, which approach did you prefer? Why?
</section>

## Looking Ahead
While you are working on jsFUN, we recommend taking the time to solve the same problem multiple ways. This will reduce the likelihood that you become too attached or too afraid of an iterator method. It can also help to understand each method better if you are comparing them to each other. Remember that jsFUN is there to help you learn - finishing the problems as fast as you can is not the goal!