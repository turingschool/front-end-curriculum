---
title: HTML - Planning a Layout
length: 90
tags: html, layout, semantic
---

## Learning Goals

* Explain the difference between block and inline elements
* Wireframe a complex layout utilizing semantic HTML tags

## Vocabulary

- `Block` A block-level element occupies the entire width of its parent element (container), thereby creating a "block."
- `Inline` An inline-level element only occupies the space bounded by the tags defining the element, instead of breaking the flow of the content.

## Block and Inline Elements

You might notice that some elements behave a little differently in a layout than others. Some elements make content stack, while others let content sit next to each other. What's that about?

This is an important distinction:

- **Block elements** stack on top of each other. Each one starts and ends on its own line.
- **Inline elements** can be used to mark up a few words inside of a block element.

Most elements are block elements. Some common **inline tags** you might see used:

- `<em>` is used to denote that you'd like to emphasize some text.
- `<strong>` is used to denote that this text is important.

We use `<em>` and `<strong>` to denote the semantic meaning of the content. When looking at the markup, you also notice that it's common for inline elements to be written on the same line of code, nested inside of a parent element.

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="turing-school" data-slug-hash="LYYpbrr" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline v Block Elements">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/LYYpbrr">
  Inline v Block Elements</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

You may notice that the `<em>` tags are italicized and the `<strong>` tags are displayed in bold. The browser does this by default. That said, you should still only use these tags to convey meaning. We can change the way elements appear by using CSS - later.

### `<span>` and `<div>`

All of the tags we discussed above have some kind of semantic meaning. Assistive technology devices will use them to help people with visual impairments understand the page. Search engines will use them to figure out the structure of your page. You should use semantic HTML tags whenever possible and appropriate.

Sometimes, however, you don't want a tag to have any meaning. Typically, this is when you just want to target a certain portion of the page with CSS or JavaScript and none of the semantic tags really apply.

Some think of `<span>` and `<div>` as the flavorless Jello of HTML tags:

- They don't have any meaning in and of themselves
- They typically don't come with any built-in styling from the browser.

There is just one important difference between the two:

- `<div>` is a block element.
- `<span>` is an inline element.

We'll discuss these more in a later lesson when we talk about CSS.

<div class="call-to-action">
### Turn & Talk
* What is the difference between block and inline elements?
* Are `<img>` elements block or inline? `<a>` elements? Explain and/or prove it.
</div>

## Containing Elements

There are a number of HTML elements whose main job is to hold other content - or be a container. The `div` is the oldest, probably most well-known and most used container element. It communicates no semantic meaning; which sometimes is what we want.

When we want to convey semantic meaning, we can use one the following containing elements:

- `header`
- `nav`
- `section`
- `article`
- `aside`
- `footer`

Although we commonly refer to these, broadly, as "containers" - to be clear, there is **not** and HTML element called "container".

## Layout Structure

As front-end developers, you'll use HTML to build layouts given to you by a designer or client. It's an interesting challenge that can seem overly simple, but how you structure your HTML can have a very real impact in how you have to write your CSS and even how you use Javascript. Remember, HTML is like the frame of a house -- it has to be stable and well thought through for everything to be stable!

### Planning a Layout

In your groups, use the following semantic HTML tags to create the basic structure of a twitter profile on your chart paper.  Click the links below to read the docs for each HTML element.  (notice they all send you to the MDN docs).  Think about which elements are most fitting and how it could be used to create the basic structure of the page.

**Recommended starting point:** Mark up the hard copy of the image with the elements you would use for each part, then consider the ordering/nesting necessary to achieve that as you write your HTML on the chart paper.

* [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
* [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
* [h1 - h6](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
* [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
* [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
* [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
* [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
* [img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
* [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
* [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
* [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
* [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

![Twitter Profile](/assets/images/twitter-profile.png)

<!-- Commenting the codepen example of this solution (below) out for now since we're having them do it on chartboard paper instead of doing it in a codepen -->
<!-- <p data-height="300" data-theme-id="23788" data-slug-hash="oYePxJ" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="Blank" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/oYePxJ/">Blank</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> -->

***

# Additional Resources

* [Turing HTML Style Guide](https://github.com/turingschool-examples/html)
* [Check out the cheat sheets in independent study](http://frontend.turing.edu/lessons/independent-study/)
* [W3C Markup validation](https://validator.w3.org/#validate_by_uri)
* [MDN HTML Overview](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
