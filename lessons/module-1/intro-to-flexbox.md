---
title: Intro to Flexbox
length: 60
tags: css, flexbox, layout
---

## Learning Goals

* Explain the difference between a parent and child element, be able to identify direct children
* Apply Flexbox to containers in order to achieve a desired layout

## Vocabulary

* parent
* child
* container
* item
* Flexbox
* property
* value

## What is FlexBox?

Flexbox is a part of CSS that provides a more efficient way to lay out, align and distribute space among items in a container. It helps us when we have those silly block elements, that even with `display: inline-block`, can be hard to do just what we want them to do.

## Parents and Children

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
<br>
(Graphics from <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS Tricks</a>)

<div class="turn-and-talk">
  <h3>Explore Flexbox</h3>
  <p>Fork <a href="https://codepen.io/ameseee/pen/PrQObO">this</a> CodePen to your account. One-by-one, uncomment lines 3, 4, 12, 13, and 14. Take note of what impact each "uncomment" has. Identify the containers and items each time Flexbox is used. After you make predictions about what each declaration does, read up on them on <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks</a>. Do <strong>not</strong> read about every single thing on the page; use <code>cmd + f</code> to search for specific properties!</p>
</div>

**NOTE:** Many of the examples used in this document contain a set of colored boxes. However, you won't find the styles for those boxes in the CSS. They are loaded in the CSS Pen settings, thanks to whoever made [this](https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/flexbox-playground.css)!

## Creating a Flex Container

Without Flexbox, 10 colorful `article`s might look like this:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="jOObVJM" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Normal Blocks Els">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/jOObVJM">
  Flexbox: Normal Blocks Els</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But with Flexbox, we can start having some control over them:

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="eYYpBXG" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Creating a Container">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/eYYpBXG">
  Flexbox: Creating a Container</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
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

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="xxxwRBz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Justify Content">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/xxxwRBz">
  Flexbox: Justify Content</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But the items are still all crunched together. They might need some breathing room too, which can be achieved with margin!

<div class="turn-and-talk">
  <h2>Try It: Justify Content</h2>
  <p>On the container's CSS rule, change the code to: <code class="try-it-code">justify-content: space-between;</code>. What happens?</p>
  <p>Now try: <code class="try-it-code">justify-content: space-around;</code>. What is the difference between space-around and space-between?</p>
  <p>Finished early? Learn about even more values that we can provide to <code class="try-it-code">justify-content</code> with <a target="blank" href="https://css-tricks.com/almanac/properties/j/justify-content/">CSS Tricks</a>.</p>
</div>

The `justify-content` property allows us to control how our content sits _on the main axis_.

<div class="turn-and-talk">
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

<section class="call-to-action">
## Put It All Together

Now that you have had a chance to play around with some of properties of flexbox - let's solidify our learning. Please complete the [Flexbox Froggy](https://flexboxfroggy.com/) exercises before moving on to the Practice section!
</section>

## Practice

You will be assigned a portion of the Dog Party comp to recreate - but with Flexbox this time! You'll be given a starter kit with the HTML you should use and _some_ CSS. Follow the protocol below:

* Fork each CodePen to your account.
* Navigator - use notes from this lesson and navigate your driver towards implementing Flexbox!
* Once you've achieved the comp, the driver should explain what each new line of CSS is doing.

Dog Party Starter Kits:
- [Nav](https://codepen.io/ameseee/pen/MMVEym)
- [Top Section](https://codepen.io/ameseee/pen/zVWEEa)
- [Bottom Section](https://codepen.io/ameseee/pen/PrRJaZ)

Once you have finished, submit each one of your CodePen links on the following [submission form!](https://docs.google.com/forms/d/e/1FAIpQLSerzju9NYHp6EgMjK6SHmSEr05iFWdRA64h54lSF7XQK5gBQw/viewform?usp=sf_link)

## Solo Challenge

Now that you have had some experience implementing Flexbox on a comp that you have encountered, it's time to apply these skills to a new comp! We have selected a few common design layouts that you can implement with Flexbox. Follow the steps below for implementation:

<section class="call-to-action">
### Instructions

1. Create a new repo on GitHub called `Flexbox Comp Challenges`
2. Create the following files: `collection-grid.html`, `pricing-table.html`, `collection-styles.css`, and `pricing-styles.css`
3. Re-create the following comps using Flexbox - work on making small, atomic commits! Feel free to take creative liberty on color schemes, fonts, placeholder images/logos, etc.
4. Once you have finished, submit your GH repo link in the Submission Form!
</section>

#### Collection Grid
<img class="medium-large" src="./assets/images/flexbox/collection.png">

#### Pricing Table
<img class="medium-large" src="./assets/images/flexbox/pricing.png">

## Further Exploration

While you may not use the following properties as frequently, it's working reading through some documentation on them should you have a use-case in the future:

* `flex-wrap`
* `flex-grow`
* `align-contents`
