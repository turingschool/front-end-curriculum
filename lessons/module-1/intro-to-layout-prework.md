---
title: "Intro to Layout: Pre-Work"
length: 30
tags: css, syntax, prework
---

## Learning Goals

* Explain the difference between block, inline and inline-block elements
* Be able to change an element's display property with CSS

## Vocabulary

- `Block` A block-level element occupies the entire width of its parent element (container), thereby creating a "block."
- `Inline` An inline-level element only occupies the space bounded by the tags defining the element, instead of breaking the flow of the content.
- `Inline-block` An inline-block level element behaves the same as an inline element, but you can set a fixed width and/or height (note: no elements are inline-block by default)

## Default Block and Inline Elements

You might notice that some elements behave a little differently in a layout than others. Some elements make content stack, while others let content sit next to each other. What's that about?

This is an important distinction:

- **Block elements** stack on top of each other. Each one starts and ends on its own line.
- **Inline elements** and **inline-block elements** can be used to mark up a few words inside of a block element.

Most elements are block elements by default. Some common **inline tags** you might see used:

- `<a>` is used to create links
- `<em>` is used to denote that you'd like to emphasize some text.
- `<strong>` is used to denote that this text is important.

We use `<em>` and `<strong>` to denote the semantic meaning of the content. When looking at the markup, you also notice that it's common for inline elements to be written on the same line of code, nested inside of a parent element.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="LYYpbrr" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline v Block Elements">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/LYYpbrr">
  Inline v Block Elements</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>



### `<span>` and `<div>`

Some think of `<span>` and `<div>` as the flavorless Jello of HTML tags:

- They don't have any meaning in and of themselves
- They typically don't come with any built-in styling from the browser.

There is just one important difference between the two:

- `<div>` is a block element.
- `<span>` is an inline element.

<section class="note">
  **Quick tip:** If you want to center an element, you can give the `margin` property a value of `0 auto` to center a block-like element!
</section>

## CSS Display Property
The `display` property allows us to change the default value of block and inline level elements. Along with block and inline, we have a few other display values to choose from. Some common ones you will see are "none", "flex" and "grid." We'll learn aobut flex tomorrow!

```
display: inline-block;
display: inline;
display: block;
display: none;
```

<section class="call-to-action">
### Practice

Visit [this Codepen](https://codepen.io/turingschool/pen/mdzRVZq), which contains an HTML file and a CSS file. 

Read through the HTML and CSS. Observe what classes and CSS is being applied to the elements in the HTML. 

Work through the questions/challenges commented in the CSS file. 
</section>

<section class="call-to-action">

### BONUS - More on Hiding Elements with CSS
There are a number of different ways to hide an element with CSS, and they all behave slightly differently. Try creating some invisible elements and inspecting them to see if they take up space! 

```
// Element no longer exists on the page and does not take up space
display: none;

// Element exists on the page and takes up space but cannot be seen
visability: hidden

// Similar to visability, but is read by screen readers. Also useful for animation!
opacity: 0
```
</section>
<section class="checks-for-understanding">
### Checks for Understanding

- What is the difference between inline, block and inline-block?
- List out three elements that are block level by default.
- List out three elements that are inline level by default.
- Write down at least one question you have about the display property for class tomorrow. 

</section>

## Additional Resources

* [Turing HTML Style Guide](https://github.com/turingschool-examples/html)
* [MDN CSS Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
* [MDN Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
* [MDN Block Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
* [Hiding Elements with CSS](https://bitsofco.de/hiding-elements-with-css/)
