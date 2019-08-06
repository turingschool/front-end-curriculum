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

**NOTE:** Many of the examples used in this document contain a set of colored boxes. However, you won't find the styles for those boxes in the CSS. They are loaded in the CSS Pen settings, thanks to whoever made this: https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/flexbox-playground.css !

## Creating a Flex Container

Without Flexbox, 10 colorful `article`s might look like this:

<p class="codepen" data-height="300" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="RzMYNj" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Normal Blocks Els">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/RzMYNj/">
  Flexbox: Normal Blocks Els</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

But with Flexbox, we can start having some control over them:

<p class="codepen" data-height="300" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="WqzgbL" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Creating a Container">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/WqzgbL/">
  Flexbox: Creating a Container</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
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

<p class="codepen" data-height="300" data-theme-id="37136" data-default-tab="html,result" data-user="ameseee" data-slug-hash="GbxXRQ" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexbox: Align-Items">
  <span>See the Pen <a href="https://codepen.io/ameseee/pen/GbxXRQ/">
  Flexbox: Align-Items</a> by Amy Holt (<a href="https://codepen.io/ameseee">@ameseee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Since `display: flex;` was applied and no further declarations were made for the direction, the default direction is row, or horizontal. So, `align-items: center;` centered the items in relation to the vertical axis, or the _cross-axis_.

If we add the declaration `flex-direction: column`, we will see the items center themselves along the vertical axis, or _cross-axis_.

## Practice

Now that we have explored some of the key properties of Flexbox, let's put our skills to the test with a fun, interactive game known as Flexbox Froggy. Take some time to work through each challenge before moving on to the challenge activity!

Click [here](https://flexboxfroggy.com/) to start flexin' your Flexbox skills!

## Challenge

Now that you have some practice with implementing Flexbox, it's time to refactor your favorite project... Dog Party! You will be given several portions of the Dog Party comp to recreate using Flexbox. Each starter kit will include the HTML structure and _some_ CSS. Your job is as follows:

* Fork the CodePen to your account.
* Using Flexbox, work on replicating the comp for each section - [click here](https://frontend.turing.io/projects/dog-party-2.0.html) to see the Dog Party comp
* Once you have achieved the comp, drop your CodePen link in the following [submission form](https://docs.google.com/forms/d/1pSa6AT8MgzdvZE1CciJ11g8L2Zr2cR96KIrRImzm0tY/edit)

Dog Party Starter Kits:
- [Nav](https://codepen.io/ameseee/pen/MMVEym)
- [Top Section](https://codepen.io/ameseee/pen/zVWEEa)
- [Bottom Section](https://codepen.io/ameseee/pen/PrRJaZ)

## Further Exploration

While you may not use the following properties as frequently, it's working reading through some documentation on them should you have a use-case in the future:

* `flex-wrap`
* `flex-grow`
* `align-contents`
