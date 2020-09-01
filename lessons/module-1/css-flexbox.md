---
title: "CSS Layout: Flexbox"
length: 90
tags: css, flexbox, layout
---

## Learning Goals

* Explain what flexbox is and why its an important tool for creating layouts
* Explain the difference between a parent and child element, be able to identify direct children
* Apply Flexbox to containers in order to achieve a desired layout

## Pre-Work
Read through [Intro to Layout Pre-Work document](./intro-to-layout-prework.html) and all links provided and complete exercises provided in it. Be prepared to demonstrate your understanding of the concepts in that document when you come to this class.

## Vocabulary

- `flexbox` a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces
- `display` a css property that sets whether an element is treated as a block or inline element and the layout used for its children, such as grid or flex
- `flex parent` or `flex container` - Any HTML element that has been given the `display: flex` declaration
- `flex child` or `flex item` - Any _direct descendants_ of a flex parent

<section class="checks-for-understanding">
## Warm Up

- With a partner, fork [this codepen](https://codepen.io/hannahhch/pen/zYqdVyp)
- Explore the CSS that's already present. Without googling, what do you think `:nth-child` means?
- In your CSS, add the property of "display" with a value of "flex" to the `.wrapper` selector. What happened? Which elements visually changed?
</section> 

## What is Flexbox?

Flexbox is a part of CSS that provides a more efficient way to lay out, align and distribute space among items in a container. It helps us when we have those silly block elements, that even with `display: inline-block`, can be hard to do just what we want them to do. Before flexbox became popular, it was a real challenge to center elements. We would use something called a `float`, which could behave unpredictably at times. 


## Parents and Children

As we start working with Flexbox, a very important distinction should be pointed out. We need to be careful about the CSS rules we apply to a parent element vs. those to a child element. A **parent** element wraps other elements, a **child** is nested inside the parent.

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
In the code above, we now have these `h2` elements nested inside of each `article`. It's important to know that `h2` is **not** a direct child of the `section`. It is technically a grandchild, and a child of `article`. The idea of **direct child** is really important to understand as we work with Flexbox.

When we use Flexbox, we will make the parent elements `flex containers` and the children elements `flex items`. 
</section>

<img class="small" src="./assets/images/flexbox/parent-container.svg" alt="graphic of parent/container">
<img class="small" src="./assets/images/flexbox/child-item.svg" alt="graphic of child/item">
<br>
(Graphics from <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS Tricks</a>)

<div class="call-to-action">
### Partner Practice
  - Go back to your codepen from the warm up
  - Experiment adding the "justify-content" property to your `.wrapper`. Add the following values (one at a time), and note what changes:
    - `center`
    - `space-around`
    - `space-between`
  - Delete or comment out your justify-content declaration. Add the following to your `.wrapper`, and note what changes;:
    - `flex-direction: column`
    - `align-items: center`
</div>

**NOTE:** Many of the examples used in this document contain a set of colored boxes. However, you won't find the styles for those boxes in the CSS. They are loaded in the CSS Pen settings, thanks to whoever made [this](https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/flexbox-playground.css)!

## Creating a Flex Container

Let's see another example of this! Without flexbox, 10 colorful `article`s might look like this:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="jOObVJM" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Normal Blocks Els">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/jOObVJM">
  Flexbox: Normal Blocks Els</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But with flexbox, we can start having some control over them:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="eYYpBXG" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Creating a Container">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/eYYpBXG">
  Flexbox: Creating a Container</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

After applying `display: flex;` to the container, we observe that the items are now aligned in a horizontal row.

<section class="note">
### Note

Most flexbox-related properties have _default_ values. We don't see them in our CSS, but can know that they are being applied! These properties can always be changed by us. You'll see some default values indicated below.
</section>

## Flex Direction

Another CSS property with flexbox is `flex-direction`. This property takes one of four values:

- `row` (default): left-to-right
- `row-reverse`: opposite of row (right-to-left)
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `column` but bottom to top

## Justify Content

We frequently see white space (margin or padding) used, and the content is **centered** on the screen. We can use flexbox to center content:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="xxxwRBz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Justify Content">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/xxxwRBz">
  Flexbox: Justify Content</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But the items are still all crunched together. They might need some breathing room too, which can be achieved with margin!

<div class="call-to-action">
  <h2>Try It: Justify Content</h2>
  <p>On the container's CSS rule, change the code to: <code class="try-it-code">justify-content: space-between;</code>. What happens?</p>
  <p>Now try: <code class="try-it-code">justify-content: space-around;</code>. What is the difference between space-around and space-between?</p>
  <p>Finished early? Learn about even more values that we can provide to <code class="try-it-code">justify-content</code> with <a target="blank" href="https://css-tricks.com/almanac/properties/j/justify-content/">CSS Tricks</a>.</p>
</div>

The `justify-content` property allows us to control how our content sits _on the main axis_.

<div class="call-to-action">
  <h2>Try It: Justify Content</h2>
  <p>On the container's CSS rule, change the code to: <code class="try-it-code">flex-direction: column; justify-content: center;</code>. What happens? Why do you think that is?</p>
</div>

In the section above, you should have observed that `justify-content: center;` had a different impact - it centered the items vertically. Since `flex-direction: column;` was applied, the _main axis_ was the vertical axis. `justify-content` will apply it's values to the items along the _main axis_.

## Align Items

Just like we can control how our content sits on the main axis with `justify-content`, we have a tool to control how our content sits _on the cross-axis_. Check out the CodePen below.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="bGGVBJE" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Align-Items">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/bGGVBJE">
  Flexbox: Align-Items</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Since `display: flex;` was applied and no further declarations were made for the direction, the default direction is row, or horizontal. So, `align-items: center;` centered the items in relation to the vertical axis, or the _cross-axis_.

If we add the declaration `flex-direction: column`, we will see the items center themselves along the vertical axis, or _cross-axis_.


## Partner Challenge


<section class="call-to-action">
### Instructions

1. Create a new repo on GitHub
2. Create the following file: `index.html` and `styles.css` (don't forget to link your css to your html file!!)
3. Re-create the following comp using flexbox - work on making small, atomic commits! Feel free to take creative liberty on color schemes, fonts, placeholder images/logos, etc.
</section>


#### Pricing Table
<img class="medium-large" src="./assets/images/flexbox/pricing.png">

## Additional Resources

- [Flex Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [freeCodeCamp Blog Post](https://www.freecodecamp.org/news/learn-css-flexbox-in-5-minutes-b941f0affc34/)
- [Scrimba Video that accompanies blog post above](https://scrimba.com/g/gflexbox)
- [Flexbox Froggy - great practice!](https://flexboxfroggy.com/)
- [Flexbox Defense - more practice!](http://www.flexboxdefense.com/)