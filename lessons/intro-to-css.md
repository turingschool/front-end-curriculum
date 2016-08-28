---
title: Introduction to CSS
length: 180
tags: css
---

<!-- NOTE: WIP, because Louisa is in a constant state of not getting this lesson finished. -->

### Goals

By the end of this lesson, you will know/be able to:

* Understand what CSS is and how it works with HTML
* Be able to write organized, clear CSS
* Have an understanding of key CSS concepts, like positioning and the box model.

### What is CSS?

CSS stands for Cascading Style Sheets, and it is a "style sheet language" that lets us apply style and positioning to your HTML. CSS is responsible to applying colors, sizes, specific fonts, and controlling the arrangement of elements on the page. It works _with_ HTML, but is not HTML. Like HTML, it is used in every website and every digital product you use. It is a cornerstone of

CSS was first proposed by Håkon Wium Lie in 1994 to pair with Tim Berners-Lee's work with HTML and the web. Both men held positions at CERN during this time, and CSS was one of several style sheet approaches being tossed around, ultimately beating out the competition and becoming the standard used. In 1996, Bert Bos became the co-author of CSS1 with contributions of such significance that he and Lie are considered the co-creators of CSS.

The concept of stylesheets has been around in various implementations since the 1980's, but CSS is unique because it was specifically targeted to work on the web, which presented unique challenges that made existing stylesheet approaches ill suited. Because the web is made up of many connected documents spread across different sources, styles needed to be flexible enough to adapt to different specifications being applied by all those sources. This is where the "cascade" comes in.

By _cascading_ through the available styles, CSS uses the last relevant style it finds and renders it. So, if a style is set at the top of your stylesheet, and then it is set again at the bottom, the style at the bottom will override the first and that will be what is rendered. This means one HTML file can have multiple style sheets from different sources applying styles, because any duplicate styles will simply be overridden by the cascade. An example of this is default browser styles: each browser has unique default styles, and those styles will be mixed in and used along with any custom styles you apply to your site.

As with modern HTML, the CSS we write today is very different than the CSS that was being written in 1994. But the principles at the core of CSS remain the same, and gave us the foundation that modern CSS is built on.

### Anatomy of a CSS Rule

A stylesheet is made up of a collection of CSS rules. A rule is made up of a selector and a series of property: value pairs. Here's what that looks like:

```css
selector {
  property: value;
}
```
