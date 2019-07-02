---
title: Intro to Flexbox
length: 60
tags: css, flexbox, layout
---

## Learning Goals

* Explain the difference between a parent and child element, be able to identify direct children
* Apply Flexbox to containers in order to achieve a desired layout

## Prep

Students should read the first portion of the lesson (all sections marked with ✅), until you see the Stop Signs (🛑).

## Vocabulary ✅

* parent
* child
* container
* item
* Flexbox
* property
* value

## What is FlexBox? ✅

Flexbox is a part of CSS that provides a more efficient way to lay out, align and distribute space among items in a container. It helps us when we have those silly block elements, that even with `display: inline-block`, can be hard to do just what we want them to do.

## Parents and Children ✅

As we start working with Flexbox, a very important distinction should be pointed out. We need to be careful about the CSS rules we apply to a parent element vs. those to a child element. A **parent** element wraps other elements, a **child** is nested inside the parent.

Let's look an some HTML to make sure we are all on the same page:

```html
<section>
  <article></article>
  <article></article>
  <article></article>
</section>
```

In the code above, the `section` is the parent element, and the 3 `article`s are all children elements because they are directly nested inside of that `section`. Let's looks at one more example:

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

In the code above, we now have these `h2` elements nested inside of the `article`s. It's important to know that `h2` is **not** a direct child of the `section`. It is technically a grandchild, and a child of `article`. The idea of **direct child** is really important to understand as we work with Flexbox.

When we use Flexbox, we will make the parent elements `flex containers` and the children elements `flex items`. There isn't really a difference between the two, but you'll need to know that vocabulary to successfully navigate documentation.

<img class="small" src="./assets/images/flexbox/parent-container.svg" alt="graphic of parent/container">
<img class="small" src="./assets/images/flexbox/child-item.svg" alt="graphic of child/item">
(Graphics from <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS Tricks</a>)

<div class="turn-and-talk">
  <h3>Explore Flexbox ✅</h3>
  <p>Fork <a href="https://codepen.io/ameseee/pen/PrQObO">this</a> CodePen to your account. One-by-one, uncomment lines 3, 4, 12, 13, and 14. Take note of what impact each "uncomment" has. Identify the containers and items each time Flexbox is used. After you make predictions about what each declaration does, read up on them on <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks</a>. Do <strong>not</strong> read about every single thing on the page; use <code>cmd + f</code> to search for specific properties!</p>
</div>


🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑

**NOTE:** Many of the examples used in this document contain a set of colored boxes. However, you won't find the styles for those boxes in the CSS. They are loaded in the CSS Pen settings, thanks to whoever made this: https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/flexbox-playground.css !

## Creating a Flex Container

Without Flexbox, 10 colorful `article`s might look like this:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="bJKmLB" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Normal Block Elements">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/bJKmLB/">
  Flexbox: Normal Block Elements</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But with Flexbox, we can start having some control over them:

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="Pgayxz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1.0em 0; padding: 1em;" data-pen-title="Flexbox: Applying Flexbox">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/Pgayxz/">
  Flexbox: Applying Flexbox</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

After applying `display: flex;` to the container, we observe that the items are now aligned in a horizontal row.

## Flex Direction

Another CSS property with Flexbox is `direction`. This property takes one of four values:

- `row` (default): left-to-right
- `row-reverse`: opposite of row (right-to-left)
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `column` but bottom to top

## Justify Content

We frequently see white space (margin or padding) used, and the content is **centered** on the screen. We can use Flexbox to center content:

<p class="codepen" data-height="300" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="xoWJYb" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Justify Content">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/xoWJYb/">
  Flexbox: Centering Items</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But the items are still all crunched together. They might need some breathing room too, which can be achieved with margin.

<div class="try-it">
  <h2>Try It: Justify Content</h2>
  <p>On the container's CSS rule, change the code to: <code class="try-it-code">justify-content: space-between;</code>. What happens?</p>
  <p>Now try: <code class="try-it-code">justify-content: space-around;</code>. What is the difference between around and space-between?</p>
  <p>Finished early? Learn about even more values that we can provide to <code class="try-it-code">justify-content</code> with <a target="blank" href="https://css-tricks.com/almanac/properties/j/justify-content/">CSS Tricks</a>.</p>
</div>

The `justify-content` property allows us to control how our content sits _on the main axis_.

<div class="try-it">
  <h2>Try It: Justify Content</h2>
  <p>On the container's CSS rule, change the code to: <code class="try-it-code">flex-direction: column; justify-content: center;</code>. What happens? Why do you think that is?</p>
</div>

## Align Items

Just like we can control how our content sits on the main axis with `justify-content`, we have a tool to control how our content sits _on the cross-axis_. Check out the CodePen below. Try changing the value for `align-items` to `flex-end`, then `flex-start`, and see what happens!

<p class="codepen" data-height="300" data-theme-id="36709" data-default-tab="html,result" data-user="turing-kwk" data-slug-hash="mgKQOR" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Align Items">
  <span>See the Pen <a href="https://codepen.io/turing-kwk/pen/mgKQOR/">
  Flexbox: Align Items</a> by Turing KWK (<a href="https://codepen.io/turing-kwk">@turing-kwk</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>
