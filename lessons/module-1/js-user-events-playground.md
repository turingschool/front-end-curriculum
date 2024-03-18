---
title: "JS: User Events Playground"
length: 120
tags: javascript, dom, events
---

## Learning Goals

- Explore Documentation for User Events
- Get hands-on practice working with User Events
- Get hands-on practice with manipulating the DOM using:
    - Query Selectors
    - Event Listeners
    - Functions

## Warm up

<section class="call-to-action">

Explore this [MDN page for Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- What user events did you learn about? 
- Did anything surprise you?
Explore this [website](https://web.archive.org/web/20180408072040/http://banguptotheelephant.restaurant/) and [this one](https://sketch.london/):
- How many different types of events can you find?
- Does your computer seem to get mad (fan turning on, loading slowly, etc)?

</section>

## Demo

We'll be using [this Codepen](https://codepen.io/sertmer/pen/dyMzNEL) for our demo and exercise. Take a moment to open it up.

I want to change the color of the box on click, so that it turns green when I click it once, and back to blue when I click it again.
- What would your pseudocode look like for this process?

When the user clicks the 🔥 button, the image inside of the div should reveal itself.
- What would your pseudocode look like for this process?

## Explore

<section class="call-to-action">

In your small groups, try to accomplish the following tasks, using a forked version of that [same CodePen](https://codepen.io/sertmer/pen/dyMzNEL):
- Add a new button with the following functionality:
    - Change the background color of the `body` element when your new button is clicked.
- When the input detects a `keyup` event, the colored div should grow larger.
- When the input detects a `keydown` event the colored div should shrink.
- When the box is dragged by the user, it should `console.log()` a message of your choice.
- When the box detects a `mouseover` event, it should spin (you can use the spin class in the CSS file).
- When the 🔥 button is clicked, the text inside of it should change to 💦, and it should change back to 🔥 when clicked again.
- Your choice: What other events can you use? What other results can you create?

</section>

## Wrap Up

<section class="call-to-action">

- What is the general process for manipulating DOM nodes / HTML elements with JavaScript?
- Which events seem the most useful? Which seem the most niche?
- What questions do you still have?

</section>