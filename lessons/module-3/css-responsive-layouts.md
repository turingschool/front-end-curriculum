---
title: "CSS: Responsive Layouts"
length: 60
tags: css, responsive, media queries, design, layout
---

## Learning Goals

- Define the four page layout types and explain benefits and drawbacks of each
- Understand media queries and explain how they provide the behavior they do

## Vocabulary

- `Page Layout` - The size and positioning of elements on a page. Examples are static, liquid, adaptive, and responsive
- `Media Query` A CSS feature that makes it possible to apply styling based on boolean logic
- `Breakpoint` The specific amounts that media queries reference
- `Viewport Meta Tag` An HTML tag that is used to describe attributes that affect how the page is displayed

## Introduction

In 2019, [53% of web traffic worldwide](https://www.perficient.com/insights/research-hub/mobile-vs-desktop-usage-study){:target='blank'} is generated by mobile devices. Our products lives online, so as developers it's our responsibility to make sure that no matter how a user accesses our products, they are able to use them successfully.

A general understanding of responsive website design, how to use media queries, and when to add breakpoints so your page layout resizes nicely is a critical skill to have.

In this session, we'll be diving into responsive page layouts and using media queries to control your page content at all screen sizes.

<section class="call-to-action">
## Exploration: Page Layouts

*Page Layout* refers to the arrangement and sizing of visual elements on a web page. You and a partner will explore the four primary page layout types [blog post](https://magnusbenoni.com/different-layouts-css/){:target='blank'}. Note: The link labeled "liquidapsive.com" in the blog post is no longer functional, but it can be found [here](https://web.archive.org/web/20180323103234/https://www.liquidapsive.com/){:target='blank'}.

* What characteristics are shared between layouts?  What is different?
</section>

<section class="answer">
### Reviewing Page Layouts

**Static Page Layout**

* Has fixed width and sits in the center of the screen.
* Works on only one screen size
* Fails on screens any smaller or larger than the original design.

**Liquid Page Layout**

* Also known as a "fluid" page layout.
* Uses relative units instead of fixed units (think percentages instead of pixels).
* Fills the whole page, regardless of the screen or browser width
* Doesn't require as much thought and planning as other techniques, making it quick and easy to implement.
* However, this type of layout fails at screen sizes significantly larger or smaller than the original design.

**Adaptive Page Layout**
* Uses *CSS media queries* to detect the width of the browser and make layout adjustments accordingly.
* Unlike a liquid layout, these use fixed units like pixels to define widths.
* Behaves like a series of static layouts defined by specific media queries.
* Often take less time than responsive layouts, and are a great for quickly updating an existing static layout to make it compatible with mobile devices.
* Drawback is that screen widths that fall between the set breakpoints can feel awkward, with contents looking either too crowded or with far too much space.

**Responsive Page Layout**

* Best solution because it combines best parts of a liquid layout and an adaptive layout.
* Creates best experience for users as they move between devices and screen sizes.
* Uses both relative units and media queries, allows a site to transition through screen sizes seamlessly.

</section>

<section class="call-to-action">
### What design changes help in making a site responsive?

* Visit two to three of your favorite sites and view how they look on different screen sizes?
* How are navigation elements handled?  What about images, forms, buttons.
* How many "breakpoints" do you see?
</section>


## Media Queries & Breakpoints

We know we want to build a site that works well on a variety of screen sizes, but we keep talking about "media queries" and "setting breakpoints". What does that mean?

**Media Queries** are a Boolean chunk of logic that lives in your CSS, and when you write a series of media queries you are creating a very basic algorithm. They control at what screen size specific styles will be applied. We will usually write these at the bottom of the CSS file they live in.

There are [several different media types](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) (`all`, `screen`, `print`, `speech`), but for our purposes we'll primarily use `screen`. This indicates that the media query is intended for computer screens.

**Breakpoints** refer to the widths the media queries reference. When the media query is true (i.e. when the screen size matches what is specified by the break point), the styles specified in that media query will be applied. It may seem natural to set breakpoints for certain devices; however it's actually *best practice to choose a breakpoint when the layout of content needs to change.*

<section class="call-to-action">
### Turn & Talk

```css
@media screen and (min-width: 55em) {
  body {
    background: magenta;
  }
}

@media screen and (max-width: 40em) {
  body {
    background: teal;
  }
}
```

Review the two media queries written above. Predict the result of this code. Be ready to share out!
</section>

<section class="answer">
### Let's Review  

* The first example has a breakpoint set for screens 55em (approximately 900px) and larger.  (**Note:** `min-width` is used to define styles at a certain breakpoint and *larger*)
* The second example has a breakpoint set for screens 40em (approximately 700px) and smaller.  (**Note:** `max-width` is used to define styles at a certain breakpoint and *smaller*)
* When the screen size is 55em or more, the background is magenta while 40 em or less is teal.
* In between, the background is whatever has been specified in CSS or white.
</section>


<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="css,result" data-user="turing-school" data-slug-hash="RwwWoqO" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Media Queries Demo">
  <span>See the Pen <a href="https://codepen.io/turing-school/pen/RwwWoqO">
  Media Queries Demo</a> by Turing School (<a href="https://codepen.io/turing-school">@turing-school</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<section class="note">
### Viewport Meta Tag

Before writing any queries, you'll want to add a viewport meta tag in the `head` of your main html file (which is often named `index.html`).  This ensures that the site will work on devices.  Without it, you might find that your responsive site works locally and on device simulators, but not on the actual device itself.

The [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag){:target='blank'} gives the browser instructions on how to control the pages dimensions and sets the width of the page based on the screen width of the device it is being viewed on.

Here's what the tag looks like:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
What this does:

* **Width:** Make the width of the page the same width as whatever screen it is being shown on.
* **Initial Scale:** Controls the zoom level when the page is first loaded.

</section>

<section class="checks-for-understanding">
### Practice

To build on your CSS skills and now practice working with media queries, complete this set of <a href="https://github.com/turingschool-examples/responsive-layout-challenges">Responsive Layout Challenges</a>.

Before you start to build out the HTML, familiarize yourself with all required layouts. Map out which boxes need to be grouped in containers in order to satisfy all required layouts. Then, start writing code!

**Challenge/Early Finisher:** Refactor <a href="https://github.com/turingschool-examples/responsive-rescue">this not-very-responsive site</a>.
</section>

## Documentation & Resources

* [MDN's Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [MDN's Explanation Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
* Brad Frost's [This is Responsive](http://bradfrost.github.io/this-is-responsive/), patterns and resources for creating responsive websites. He also created [this](https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/#relative) brief read.
