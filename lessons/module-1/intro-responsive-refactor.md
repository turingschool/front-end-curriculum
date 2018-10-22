---
title: Intro to Responsive Layouts - Refactor
length: 60
tags: html, css
---

### Learning Goals
- Understand and describe page layout
- Understand and apply media queries

## Vocabulary

- `Page Layout` - The size and positioning of elements on a page. Examples are static, liquid, adaptive, and responsive
- `Media Query` A CSS feature that makes it possible to apply styling based on boolean logic
- `Breakpoint` The specific amounts that media queries reference (usually in pixels)
- `CSS Reset` A set of styles that applies default styling
- `Viewport Meta Tag` An html tag that is used to describe attributes that affect how the page is displayed

## Introduction

We can't control how our users interact with our products, but we *can* make sure that our work looks good and functions correctly on all screen sizes. Your product lives online, it's important to make sure that no matter how a user accesses it they are able to use it successfully.

A general understanding of responsive website design, how to use media queries, and when to add breakpoints so your page layout resizes nicely is a critical skill to have in your toolbelt.

In this session, we'll be diving into responsive page layouts and using media queries to control your page content at all screen sizes. This lesson assumes you are familiar with HTML and CSS fundamentals.

**Page Layout**
The arrangement and sizing of visual elements on a web page

There are four primary page layout types:

**Static Page Layout**
A static layout is fixed width and sits in the center of the screen -- it is the traditional web layout. It works on one screen size and one screen size only. It will fail on screens any amount smaller or larger than the original design.

**Liquid Page Layout**
A liquid (also called 'fluid') page layout uses relative units instead of fixed units (think percentages instead of pixels).

Liquid layouts fill the whole page, regardless of the screen or browser width. It's an approach that doesn't take as much thought and planning as other techniques, making it quick and easy to implement. However, this ease of implementation comes with major disadvantages. These layouts fail at screen sizes significantly larger or smaller than the original design.

**Adaptive Page Layout**
An adaptive layout uses CSS media queries to detect the width of the browser and make layout adjustments accordingly. Unlike liquid layouts, adaptive layouts use fixed units like pixels to define widths. They behave like a series of static layouts defined by specific media queries.

Because adaptive layouts typically take less time to build than true responsive layouts, they are a great option for quickly updating an existing static layout to make it compatible with mobile devices.

The primary drawback to this strategy is that screen widths that fall between the set breakpoints can feel awkward, with contents looking either too crowded or with far too much space.

**Responsive Page Layout**
At first glance, a responsive site looks a lot like an adaptive site. But start resizing your screen, and you'll see why it's the best solution. A true responsive page layout combines the best parts of a liquid layout and an adaptive layout to create the best experience for your users as they move between devices and screen sizes. By using both relative units and media queries, a responsive site allows us to transition through screen sizes seamlessly and effortlessly.

## Docs

* The site [Liquidapsive](http://www.liquidapsive.com/) is a great resource showing simple examples of all the layout types in action.
* [MDN's Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
<!-- * [MDN's Responsive Design Overview](https://developer.mozilla.org/en-US/Apps/Progressive/Responsive) -->
* [MDN's Explanation Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)
* Brad Frost's [This is Responsive](http://bradfrost.github.io/this-is-responsive/), patterns and resources for creating responsive websites.

# Practice

#### Using Media Queries

We know we want to build a site that works well on a variety of screen sizes, but we keep talking about "media queries" and "setting breakpoints". What does that mean?

**Media queries** are a Boolean chunk of logic that lives in your CSS, and when you write a series of media queries you are creating a very basic algorithm. They control at what screen size specific styles will be applied.

There are [several different media types](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) (`all`, `screen`, `print`, `speech`), but for our purposes we'll primarily use ``screen``. This indicates that the media query is intended for computer screens.

**Break points** are the pixel widths the media queries reference. When the media query is true (i.e. when the screen size matches what is specified by the break point), the styles specified in that media query will be applied.

Below is an example of a media query with a breakpoint set for screens 900px and larger. In this example we've added a loud background color to our ``body`` just to make sure the media query is kicking in when we want it to:

```css
@media screen and (min-width: 900px) {
  body {
    background: magenta;
  }
}
```

**NOTE:** Before we write any queries, you'll want to add a viewport meta tag in the ``head`` of your main html file (which is often named ``index.html``). This tag will make sure that our site works on devices. It is a frustrating surprise to find that your responsive site works locally and in device simulators, only to try it out on your phone and find out it looks terrible. The viewport meta tag gives the browser instructions on how to control the pages dimensions and sets the width of the page based on the screen width of the device it is being viewed on. Magic! If you want to learn more, Mozilla has an [article](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) that's full of good information.

Here's what the tag looks like:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
The viewport metatag shown above is saying...

```
width=device-width
initial-scale=1
```

In more human terms these say..

* __Width__: Make the width of the page the same width as whatever screen it is being shown on.
* __Initial Scale__: Controls the zoom level when the page is first loaded.

## Let's Get Started

Let's try this out! **We'll refactor [this not-very-responsive  site](https://github.com/turingschool-examples/responsive-rescue)** that's based on [a basic 2-column page layout](https://github.com/turingschool-examples/intro-to-responsive)

# Your Turn

For additional practice with CSS and working with media queries, complete this set of [Responsive Layout Challenges](https://github.com/turingschool-examples/responsive-layout-challenges)
