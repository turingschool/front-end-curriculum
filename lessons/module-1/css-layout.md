---
title: "CSS: Layout"
length: 120
tags: css, combinators, layout, display, specificity
---

## Learning Goals

* Understand and utilize the various positioning properties you have available
* Use floats to handle more difficult layouts
* Understand how specificity rules can impact your CSS rules
* Be able to implement complex CSS selectors

But first, the road to enlightenment: [CSS Zen Garden](http://www.csszengarden.com/)

## Pre-Work

Come prepared to class by reading [CSS Specificity + Combinators](https://frontend.turing.io/lessons/module-1/css-specificity-combinators.html)

## Warm Up

Find the other 2-3 students who have the same color and numbered sticky-note as you. This will be your team. You do **not** need to move your belongings; just huddle together and wait for directions from your instructor!

[Instructor Resource](https://docs.google.com/presentation/d/1ZM4pRSnB-pgvXvpCoRjYPt-RmRncYPahvOCibIuS1WU/edit#slide=id.g78e7823268_0_0)

## Display Property

The display property allows us to manipulate the layout of elements on a page without taking them out of the normal page flow. The default value for all elements is inline. Most "User Agent stylesheets" (the default styles the browser applies to all sites) reset many elements to "block".

- **Inline:** `<span>`, `<em>` Text wraps around anything in these elements. Inline elements margin and padding, and push things horizontally, not vertically, but ignore height and width instructions.
- **Inline-Block:** An element set to `inline-block` is very similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a `width` and `height` which will be respected. They also apply 2px of margin that does not register in dev tools.
- **Block:**  A number of elements are set to block by UA (user agent) stylesheets, usually container elements. `<div>`, `<ul>`, `<section>`, and more. Also, text blocks like: `<p>`, `<h1>`. These elements take up as much space, horizontally, as available.

```css
div {
  display: 'inline';        /* Default of all elements, unless UA stylesheet overrides */
  display: 'inline-block';  /* Characteristics of block, but sits in a line */
  display: 'block';         /* UA stylesheet makes things like <div> and <section> block */
  display: 'none';          /* Hide */
}
```

**Quick tip:** If you want to center an element, you can give the `margin` property a value of `auto` to center a block-like element. The element must have a declared width for this to work.

## Position Property

<!-- - We can manipulate this [CodePen](https://codepen.io/turing-school/pen/XWWmNyz) to play around with the following values for our position property. -->
The `position` property in CSS will take elements out of the normal page flow, and should therefore be used sparingly.

- **static**: Every element, by default, has a static position. When `position: static` is applied, the element will stick to the normal page flow.
- **relative**: The element is positioned relative to its normal position. When `position: relative` is applied, an no other positioning attributes are, nothing will happen. It is mainly used in conjunction with `position: absolute` on a child element.
- **absolute**: An absolutely positioned element is completely removed from the normal flow. The adjacent sibling elements occupy its space.
  - An element whose position property is set to absolute or fixed is called an absolutely positioned element.
  - We can position an element to a specific place on the page, relative to one of its ancestor elements.
  - We can determine which ancestor we can to position it in relation to.
  - To establish this relationship, the ancestor must have `position: relative` applied to it.
  - You specify the position of your element via offset properties: `auto` (default), `top`, `bottom`, `right`, `left`
- **fixed**: A fixed positioned element (subcategory of the absolute positioning) is positioned relative to the viewport. It will stick in place despite any scrolling or resizing of the viewport.
- **sticky**: A sticky element will behave a lot like an absolutely positioned element. But, if the user scrolls beyond the view of the element, the element will be "stuck" and remain in the users view (where an absolutely positioned element will scroll off the page). Many times this is used for headers or footers on a page. There are a couple of great examples in [this blog post](https://medium.com/@elad/css-position-sticky-how-it-really-works-54cd01dc2d46).

<section class="call-to-action">
### Your turn:

Over the course of today's class, we will work to re-create the top part of a Twitter profile. It will _not_ be perfect by the end of class! The goal is just to see how these concepts can be used in real applications, and get some practice. Start with one step at a time:
  * Fork [this CodePen](https://codepen.io/turing-school/pen/ZEEVpYy?editors=1100) for your starter kit and check out what a Twitter Profile looks like [here](https://twitter.com/TaelurAlexis). Notice that the round profile photo (photo) is layered over the rectangular background photo (header photo).
  * With your partner, talk about how you can use `position` to achieve a layout like that. Once we discuss as a class, you will implement a solution.
</section>

## z-index

A positioned element can take advantage of the `z-index` property to specify its stack order. The stack order is the order in which elements in the same space lay on top of one another. For example, an element with a `z-index` of `2` will appear above an element with a `z-index` of `1` if they happen to overlap. Without any z-index value, elements stack in the order they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning will always appear on top of elements with default static positioning. Also note that nesting plays a big role. If an element B sits on top of element A, a child element of element A can never be higher than element B.

## Floats

"Floating" an element takes it out of the normal flow, and places it as far to the left or right of its containing element as possible. Any other elements, such as paragraphs or lists, will wrap around the floated element as seen [here](https://codepen.io/LouisaBarrett/pen/GwwKGN).

Always specify a width when floating an element, otherwise the element is likely to take up the whole page and not appear floated.

You can specify a) whether an element is floated or not, and b) which side it ﬂoats on.
- `none`: the element does not float. This is the initial value.
- `left`: floats the element to the left of its container.
- `right`: floats the element to the right of its container.
- `inherit`: the element inherits the float direction of its parent.
- `clear`: Float's sister property. An element that has the clear property set on it will not move up adjacent to the float like the float desires, but will move itself down past the float.

We can play around with this [CodePen](https://codepen.io/turing-school/pen/JjjYbmv) to see how float and clear work with one another.

```css
.clearfix:after {
  content: ' ';
  display: table;
  clear: both;
}
```

<section class="call-to-action">
### Your turn:

Back in your Twitter profile CodePen:
  * Use `float` to move the div that holds the three buttons over to the right side of the profile.

**Extra Time?** Apply the necessary margin and padding to get a few of those little details just right. Consider the amount of space between the name and handle, the amount of space between the handle and description, the amount of space between the "following" button and the edge of the profile card.
</section>

## Additional Resources

* [Turing CSS Style Guide](https://github.com/turingschool-examples/css)
