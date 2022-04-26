---
title: "Dev Skills: Pseudocoding"
length: 90
tags: js, introduction, pseudocoding, articulation, problem solving
---

## Learning Goals

* Understand what pseudocoding is and its purpose
* Practice talking about code without writing code
* Sit in the eustress!

## Vocabulary

- `pseudocoding` Literally, fake code! Writing out steps to solve a problem or achieve functionality, without writing actual code
- `terms of art` Technical vocabulary, the words and terms that accurately describe code
- `eustress` Beneficial stress; the motivating sensation of discomfort that occurs when you don't know something, which compels you to figure it out (different from _distress_, which paralyzes)

<section class="call-to-action">
## Warm Up

In your notebook, journal about the following prompts:

- What skill do you have that you are proud of? Perhaps a recipe you're good at, or a sick kick flip on a skateboard, or maybe you're very good at remembering people's names, or you play an instrument.
- Do you remember what it was like when you first began learning the skill?
- Although it may feel easy now, or like something you've always been good at, push yourself to describe the work you had to put in to achieve proficiency!
</section>

## So what is pseudocoding?

One of the greatest tools in your developer toolbelt is **pseudocoding**.

Pseudocoding is the secretly-complex skill of writing down what you want your code to do, without writing any code.

It's harder than you think, but we're going to break it down and help furnish you with skills you can lean on as you are learning!

It helps to think about your code as a series of instructions for a well-meaning but VERY LITERAL and kind of foolish robot.

If you had to explain to a robot how to make a peanut butter sandwich, what instructions would you need to give it? Watch the following video to get an idea of the level of detail we have to get into in our pseudocode:

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/FN2RM-CHkuI?start=9" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

### Cool, but what about when it's a coding problem?

Okay, let's zoom in and take a look at an example.

```js
var names = ["Sophia", "Brandt", "Arcturus", "Evelyn", "Hilde", "Lorenzo", "Xola", "Mayhew"];

// Write a function that removes all names that are longer than 5 letters from the array
```

<section class="call-to-action">
## Journal

In your notebook, write down:

- What is your first reaction to seeing this? Do you want to write code?
- If you were to explain what to do to a very simple, very literal, very well-meaning, helpful, but silly robot, what would you tell it to do?
- Attempt to write some pseudocode!

Hints: Use good terms of art. Don't write code. Focus on getting closer to a solution, but don't worry about solving it!
</section>

### How to pseudocode

Strong pseudocode will generally focus on the following things:

1. What are we attempting to DO? What change is being made?
1. What information do we need to ACCESS? How do you get to that information?
1. Once you've accessed the information you need, what do we need to DO with it?
1. Many times, we need to check the information - for a pattern, to see if it fulfills some condition, etc.
1. How do we make the change we want to make?
1. Does anything else need to happen? Repeat!

<section class="answer">
### How We Did It - don't look until you've written yours!

```js
var names = ["Sophia", "Brandt", "Arcturus", "Evelyn", "Hilde", "Lorenzo", "Xola", "Mayhew"];

// We are attempting to remove all names that are longer than 5 letters
// We need to access every single element in the array (names) so we can examine it
// When looking at an element, we check to see how many characters are in the string
// If the string is longer than 5 letters, remove that element from the array
// If the string is 5 characters long or less, do nothing
// Move on to the next element and repeat the examination process!
// Continue this until we've looked at every element
```
</section>

What do you notice about our pseudocode?

<section class="call-to-action">
## Turn and Talk

With a partner, discuss what you notice about the provided pseudocode.

- Does it contain code?
- What terms of art are we using? Why is it important to use precise vocabulary, even when just pseudocoding?
- Do you have to know how to write a function, or how to write the code to access array elements, in order to write this pseudocode?
- Share the pseudocode you wrote before with each other. What is missing? What should be removed?
</section>

### Final thoughts

Notice in the provided pseudocode: we are balancing the level of detail we get into.

The pseudocode examines each step that needs to be taken, but it does not worry about writing the code to accomplish that step.

Pseudcode functions as a way for you to work logically through a problem, even if you don't know the code to actually accomplish it. It's like planning out a road trip without having actually driven the route before. You can get a pretty good guess of what you want to do and where you want to go. Things may change when you're actually driving, but you'll still have a general map and itinerary to follow!

We wrote down the pseudocode in the space where we will eventually write code. We didn't just think about it in our heads. We **wrote it down**. This is important! Draw a line on your map! If you try to memorize your route through unfamiliar cities and roads, when you're actually driving, you're sure to forget something or to get lost or distracted. If you wrote it down, you can be reminded of where you're trying to go.

The plan may change, or we might not know exactly how to accomplish something. That's okay!

For example, our pseudocode says, "If the string is longer than 5 letters, remove that element from the array."

At the moment, I don't know eactly how to:

- check the length of a string
- do an action _conditionally_
- remove an item from an array

But that's okay! We only need to know that that's what we want to do.

Next steps after this, is to do some research! Perhaps I would search the following term: `javascript length of string` and see what results came up!

## Practice

Let's put this into practice. We'll get into pairs, separately write pseudocode for two different coding challenges, and swap! The goal will be to see if we can use each others' pseudocode to research and try implementing some code.

Once you form your pair, Partner ⭐️ is the person with the shortest hair. Partner ⚡️ is the person with the longest hair.

Find your challenge below (do not cheat and look at your partner's challenge yet!), and spend 5 minutes writing some specific pseudocode.

<section class="answer">
### Partner ⭐️ Challenge

```js
var bounces = 5;

// Write a function that makes a string that repeats the word "boing" the same number of times as the value of the variable "bounces".
// Make sure your pseudocode can handle for the value of "bounces" changing to be a different number!
```
</section>

<section class="answer">
### Partner ⚡️ Challenge

```js
var person = "scott ertmer ";

// Write a function that will capitalize the first letter of a person's name. For example, "Scott Ertmer"
// Make sure your pseudocode can handle the value of "person" changing to a different name!

```
</section>

Once your pseudocode is written, swap with your partner! Take 10 minutes researching steps. Even though we haven't written functions or had practice with these things, hopefully the pseudocode gives you a roadmap of things to research!

## Summary

This was just an introduction to pseudocoding. It's a skill that you will continue to develop for years, so don't beat yourself up if it's still confusing or hard!

<section class="checks-for-understanding">
### Stop and Reflect

Take a few minutes to write about each prompt below:

- Pseudocoding seems like it slows down the coding process. Why would anyone bother doing it?
- What is a benefit of spending your time pseudocoding?
- What are the characteristics of solid, beneficial pseudocode?
- What was helpful about your partners' pseudocode? What was confusing?
- If you were to explain to a non-developer what pseudocoding is, and if you needed to teach them to be able to pseudocode, what would you tell them?
</section>

Whenever you face a challenge you don't know how to approach, practice pseudocoding. And practice pseudocoding even when you know exactly what code you would write to solve a problem!

Pseudocoding is a tool you will use to chip away at a big, challenging problem. It's a way of looking at towering cliffside and being able to see the first couple hand- and foot- holds that will help you climb it.

### Additional Resources

- [Problem Solving - Odin Project](https://www.theodinproject.com/lessons/foundations-problem-solving)