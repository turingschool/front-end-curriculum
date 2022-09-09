---
title: "Dev Skills: Problem Solving & Pseudocoding"
length: 90
tags: js, introduction, pseudocoding, articulation, problem solving
---

## Learning Goals

* Understand what pseudocoding is and its purpose
* Practice talking about code without writing code
* Develop a strong strategy for approaching complex problems

## Vocabulary

- `pseudocoding` Literally, fake code! Writing out steps to solve a problem or achieve functionality, without writing actual code
- `terms of art` Technical vocabulary, the words and terms that accurately describe code

<section class="call-to-action">
## Warm Up

Your friend asked you to build them a bookcase and you said yes! Before you started actually building the bookshelf...
1. ...what questions would you have for your friend?
2. ...what materials would you need to gather?
3. ...what research would you need to do?
4. ...what other planning would you need to do?
</section>

## Problem Solving

Approaching complex tasks in code is very similar to approaching complex tasks in real life! For example, let think about this scenario: Your Turing instructor asked you to build an application that helps track her dog's meals. Before you started coding...
1. ...what questions would you have for your instructor?
2. ...what research would you need to do?
3. ...what other planning would you need to do?

Just like there is a lot to think through before we start building that bookcase, there is a lot that we need to think through **before** we start to code. Today, we will develop a strategy for how to approach complex problems in our code.

## What is Pseudocoding?

One of the greatest tools in your developer toolbelt is **pseudocoding**.

Pseudocode is written in plain English and outlines the steps necessary to complete the task at hand.

Pseudocode examines each step that needs to be taken, but it does not worry about writing the code to accomplish that step.

Pseudocode functions as a way for you to work logically through a problem, even if you don't know the code to actually accomplish it. It's like planning out a road trip without having actually driven the route before. You can get a pretty good guess of what you want to do and where you want to go. Things may change when you're actually driving, but you'll still have a general map and itinerary to follow!

We will write pseudocode in the space where we will eventually write code. We won't just think about it in our heads. This is important! Draw a line on your map! If you try to memorize your route through unfamiliar cities and roads, when you're actually driving, you're sure to forget something or to get lost or distracted. If you wrote it down, you can be reminded of where you're trying to go.

<section class="call-to-action">
### Your First Pseudocode

In your notebook, write down step by step instructions on how to get in your car and back out of the driveway. Below are some examples of steps to show you the level of detail we are looking for.
```
Step 1: Grab your car keys (a piece of black plastic with a metal stick coming out).
Step 2: Point those keys in the direction of your car and click the button that has an unlock symbol. You should hear a beep to indicate the car is unlocked.
...
```
</section>

While pseudocoding is a very important part of the problem solving process, it is not enough on its own. Let's look at the full process.

## Problem Solving Process

1. **Restate the goal** in your own words. Take note of EXACTLY what the final output(s) should be.
2. **Consider the data** that you’re working with. What data types are you working with? Are there any parameters/arguments? What data in particular do you need access to?
3. **Ask clarifying questions** that you have about the goal and/or the data. Is there anything that still unclear? It is critical that you have a complete and accurate idea of the goal and data before you move on.
4. **Pseudocode** the steps needed to get to the goal. Write out your plan, with specific steps, in plain English. What will you need to do first? Then what?… Note: You may only be able to pseudocode out the first couple of steps - that’s okay! Plan out as much as possible now.
5. **Research what you don’t know**. Is there something you’ve noted in your pseudocode that you don’t know how to do? Take note of that and google.  
6. **Start coding** by referencing the pseudocode you’ve written.
7. **Stuck? Go back** to step 4 and **repeat** steps 4-6 until you’ve reached your goal.


## Problem Solving in Action!

Let's go through an example together.

```js
// Write a function that removes all names that are longer than 5 letters from the array

var names = ["Sophia", "Brandt", "Arcturus", "Evelyn", "Hilde", "Lorenzo", "Xola", "Mayhew"];
```

<section class="answer">
### Here's an example for what that problem solving approach could look like:

```js
// Write a function that removes all names that are longer than 5 letters from the array

var names = ["Sophia", "Brandt", "Arcturus", "Evelyn", "Hilde", "Lorenzo", "Xola", "Mayhew"];

// goal: Delete all names that have 5 or more letters

// data: Taking an array of strings (names) and returning an array of strings (without 5+ letter names)

// questions: Will there ever be spaces? If so, do those spaces count as a character?

// pseudocode:
  // Look at each name one at a time
  // Determine how many letters are in each name*
  // If 5 or more, delete it**
  // If 4 or less, keep it (do nothing)
  // Continue until we've gone through every name

// research:
  // *How do you find the number of letters in a string? --> .length
  // **How do you delete an element in an array? --> .splice

// now we can code!
```
</section>

### Reflect

Take some time to reflect on the following questions and then we will share out as a class.

- What are some takeaways you have from that example?
- What do you like about this process?
- What might make this process difficult to do?
- Do we need to go through this process every single time we are writing code?

## Time for YOU to Practice!

<section class="call-to-action">
### Solo Practice

Strengthen your problem solving skills by going through steps 1-5 of the `Problem Solving Process` with this challenge. We do not want you to write any code.
```js
// Write a function that will capitalize the first letter of a person's name. For example, "Scott Ertmer"

// Make sure your pseudocode can handle the value of "person" changing to a different name!

var person = "scott ertmer";
```
</section>

<section class="call-to-action">
### Swap and Share

Now you will get in a breakout room with a partner and share what you worked on. You will each time a few minutes to screen share and talk through your process.
</section>

## When Should We Use This?

This process is appropriate to use anytime you're tackling a complex task with code. It could be used for technical challenges like the ones we saw in class. It is also useful for when you're building out a feature of an application or trying to pass a particularly difficult test in Medusa.

Let's look at one more example so we can see how this process works in a different context.

<section class="call-to-action">
### Paired Practice

Work through steps 1-5 of the `Problem Solving Process` with the prompt found in the JS file of [this codepen](https://codepen.io/kaylaewood/pen/oNdxMvq). We do not want you to write any code.
</section>

## Continuing to Strengthen this Skill

This was just an introduction to problem solving and pseudocoding. It's a skill that you will continue to develop for years, so don't beat yourself up if it's still confusing or hard!

Throughout the rest of mod 1, we have [daily practice](https://frontend.turing.edu/lessons/module-1/daily-problem-solving-practice.html) worked into the calendar to give you more opportunities to develop your problem solving process.

<section class="checks-for-understanding">
### Final Reflections

Take a few minutes to write about each prompt below:

- This problem solving process seems like it slows down the overall coding process. Why would anyone bother doing it?
- Why don't we just tell you to pseudocode? Why even bother with the other steps?
- What are the characteristics of solid, beneficial pseudocode?
- If you were to explain to a non-developer what pseudocoding is, and if you needed to teach them to be able to pseudocode, what would you tell them?
</section>

### Additional Resources

- [Problem Solving - Odin Project](https://www.theodinproject.com/lessons/foundations-problem-solving)
