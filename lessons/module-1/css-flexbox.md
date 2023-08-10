---
title: "CSS Layout: Flexbox"
length: 90
tags: css, flexbox, layout
---

## Learning Goals

* Explain what flexbox is and why its an important tool for creating layouts
* Explain the difference between a parent and child element, be able to identify immediate children
* Apply Flexbox to containers in order to achieve a desired layout

## Pre-Work
Read through [Intro to Layout Pre-Work document](./intro-to-layout-prework.html) and all links provided and complete exercises provided in it. Be prepared to demonstrate your understanding of the concepts in that document when you come to this class.

## Vocabulary

- `flexbox` - a layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces
- `display` - a css property that sets whether an element is treated as a block or inline element and the layout used for its children, such as grid or flex
- `flex parent` or `flex container` - Any HTML element that has been given the `display: flex` declaration
- `flex child` or `flex item` - Any _immediate descendants_ of a flex parent
- `main axis` – the primary axis along which flex items are laid out. It can be horizontal or vertical, and is defined by the direction set by the `flex-direction` property.

<section class="checks-for-understanding">
## Warm Up

- With a partner, fork [this codepen](https://codepen.io/kaylaewood/pen/oNBdGEx)
- Explore the CSS that's already present. Without googling, what do you think `:nth-child` means?
- In your CSS, add the property of "display" with a value of "flex" to the `.wrapper` selector. What happened? Which elements visually changed?
</section>

## What is Flexbox?

Flexbox is a part of CSS that provides an efficient way to lay out, align and distribute space among items in a container. Before flexbox became popular, it was a real challenge to center elements. We would use something called `float`, which could behave unpredictably at times.

## Parents and Children

As we start working with flexbox, a very important distinction should be pointed out. We need to be careful about the CSS rules we apply to a parent element vs. those to a child element. A **parent** element wraps other elements, a **child** is nested inside the parent.

Let's look an some HTML to make sure we are all on the same page. Which element is the parent and which are its children?

```html
<section>
  <h1></h1>
  <article></article>
  <article></article>
  <article></article>
</section>
```
<section class="answer">
### The Answer
In the code above, the `section` is the parent element, the `<h1>` and the 3 `article`s are all children elements because they are directly nested inside of that `section`. Proper indentation is really helpful here!
</section>

What about in this block of HTML?
```html
<section>
  <article>
    <h2>Title of Article 1</h2>
  </article>
  <article>
    <h2>Title of Article 2</h2>
  </article>
  <article>
    <h2>Title of Article 3</h2>
  </article>
</section>
```
<section class="answer">
### The Answer
In the code above, we now have these `h2` elements nested inside of each `article`. It's important to know that the `h2` is **not** an immediate child of the `section`. It is technically a grandchild, and a child of `article`. The idea of **immediate child** is really important to understand as we work with Flexbox.

When we use Flexbox, we will make the parent elements `flex containers` and the children elements `flex items`.
</section>

<img class="small" src="./assets/images/flexbox/parent-container.svg" alt="graphic of parent/container">
<img class="small" src="./assets/images/flexbox/child-item.svg" alt="graphic of child/item">
<br>
(Graphics from <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS Tricks</a>)

<div class="call-to-action">
### Try It 1
  - Go back to your codepen from the warm up
  - Experiment adding the `justify-content` property to your `.wrapper`. Add the following values (one at a time), and note what changes:
    - `center`
    - `space-around`
    - `space-between`
    - `space-evenly`
    - `flex-end`
</div>

## Justify Content

`justify-content` allows us to define the alignment of items (flex children) along the *main axis*, and is incredibly useful for centering elements.  

- `flex-start` (default): items are packed toward the start line
- `flex-end`: items are packed toward to end line
- `center`: items are centered along the line
- `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
- `space-around`: items are evenly distributed in the line with equal space around them
- `space-evenly`: items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same

Here is a great example of how you can use `justify-content` to move your items:
<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="css-tricks" data-slug-hash="zzJMGJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox &amp;amp; justify-content">
  <span>See the Pen <a href="https://codepen.io/team/css-tricks/pen/zzJMGJ">
  Flexbox &amp; justify-content</a> by CSS-Tricks (<a href="https://codepen.io/css-tricks">@css-tricks</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_The above Codepen is an example from CSS Tricks_

<section class="note">
### Note

Most flexbox-related properties have _default_ values. We don't see them in our CSS, but can know that they are being applied! These properties can always be changed by us. You'll see some default values indicated below.
</section>

<div class="call-to-action">
### Try It 2
  - Go back to your codepen from the warm up
  - Now add `flex-direction: column;` to your `.wrapper`
  - What happened? How does changing the values for the `justify-content` property affect the boxes?
</div>

## Flex Direction

Another CSS property with flexbox is `flex-direction`. This property takes one of four values:

- `row` (default): left-to-right
- `row-reverse`: opposite of row (right-to-left)
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `column` but bottom to top


**The `flex-direction` property defines the main axis**

<img class="medium" src="./assets/images/flexbox/flexbox-axis.svg" alt="flexbox parent axis">

<div class="call-to-action">
### Try It 3
  - Go back to your codepen from the warm up
  - Remove the `justify-content` and `flex-direction` properties.
  - Now, add in an `align-items` property and experiment with the following values:
    - `stretch`
    - `center`
    - `baseline`
    - `flex-start`
    - `flex-end`
  - Then, add `flex-direction: column;` to your `.wrapper`. What changes?
</div>

## Align Items

Just like we can control how our content sits on the main axis with `justify-content`, we have a tool to control how our content sits _on the cross-axis_.

- `stretch` (default): stretch to fill the container (still respect min-width/max-width)
- `flex-start`: cross-start margin edge of the items is placed on the cross-start line
- `flex-end`: cross-end margin edge of the items is placed on the cross-end line
- `center`: items are centered in the cross-axis
- `baseline`: items are aligned such as their baselines align

<img src="./assets/images/flexbox/flex-align.svg" alt="flex align values">

<section class="note">
### Note

These properties will get you far enough for now, but they're just scratching the surface at what flex can do! If you want more, check out this [extensive guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) from CSS tricks.
</section>

## Tips and Tricks (write these in your notes!)

When you are about to use flexbox, ask yourself the following questions:
- *What elements do I want to move?*
- *What is the parent element of those elements?* (this is where the flex properties should live!)

If flex isn't working the way you think it should, check the following things:
- *Did I remember to include `display: flex;`?* Without that line of code, the other flex properties won't work!
- *Am I sure I'm adding the flex properties to the correct element?* Check the parent-child relationship in the HTML file to be sure that you are adding those properties to the direct parent.
- *Is the parent element big enough?* Add a border to the parent element. If it is the same width and/or height as the children, you won't be able to move those children as expected.

CSS tends to require a lot of trial and error when you're first learning it. Often, the CSS flow for newbies is something like:
 - Developer edits their css file and reload their webpage to see if it's what they want.
 - Developer realizes it's not quite right, so they edit their CSS file again, reload again, on and on and on.

We encourage you to make your CSS changes in your dev tools which will instantly show you the result. You can keep editing the CSS right in your dev tools until it's right, then copy those rules over to your text editor and save yourself all the time on the back and forth.

## Using Flexbox on Nested Elements

<div class="call-to-action">
### Try It 4
  - Fork [this NEW codepen](https://codepen.io/kaylaewood/pen/jOyxZWz)
  - Complete the 3 challenges listed in the CSS file.
</div>

## Recreating a Comp

We will now continue working on the comp from the CSS Fundamentals lesson. You will have one hour to work on `iteration 2` of [this activity](https://github.com/kaylagordon/css-intro-imperfectfoods).

## Additional Resources

- [Flex Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [freeCodeCamp Blog Post](https://www.freecodecamp.org/news/learn-css-flexbox-in-5-minutes-b941f0affc34/)
- [Scrimba Video that accompanies blog post above](https://scrimba.com/g/gflexbox)
- [Flexbox Froggy Game - great practice!](https://flexboxfroggy.com/)
- [Flexbox Defense Game - more practice!](http://www.flexboxdefense.com/)
- [Flexbox Zombies Game - leveled up practice!](https://geddski.teachable.com/p/flexbox-zombies)
- [CSS Diner Game - learn more complex CSS selecting](https://flukeout.github.io/)
