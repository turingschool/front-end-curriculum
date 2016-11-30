---
title: CSS Positioning
length: 180
tags: css
---

### Goals

By the end of this lesson, you will:

* Understand the differences between block and inline elements
* Know the CSS properties that affect how elements are displayed
* Understand how the CSS box-model works

### CSS Positioning

- CSS divides HTML elements into two types: inline and block
- After block elements, browsers render a new line
- Inline elements: img, a, br, em, strong
- Block elements: p, h1, ul, li, almost everything else

### Box-Sizing and the CSS Box Model:

In HTML, you can visualize each element as its own rectangular box. There are a number of CSS properties that can affect the final width and height of each of these boxes. The CSS Box Model describes how the final height and width of an element is determined. Let's look at the following example:

![Box Model][box-model]

We have a `div` element that we gave a `width` of `400` and a `height` of `200`. However, we've also applied several additional properties that are affecting its size and positioning. The `padding` and `border` properties are both adding `20px` to the element's height and width. Now the actual *visible* dimensions of our element are `480x280`. The DevTools panel provides a handy graphic of how our div is being rendered.

This is the default behavior for the rendering of block elements in CSS. The `box-sizing` property allows us to override this behavior and alter how the dimensions of an element are calculated:


```css
*,
*:after,
*:before {
  box-sizing: 'border-box';
}
```

Setting the `box-sizing` property to `border-box` will alter the model so that the `width` and `height` properties include the content, padding and border. If we were to set `box-sizing: border-box` on our previous example, our element would be rendered at exactly the `400x200` dimensions we specified. Its `padding` and `border` properties would be included within those dimensions, making our content area slightly smaller.

[box-model]: /assets/images/lessons/css-positioning/box-model.png

### Display Property

- The default value for all elements is inline. Most "User Agent stylesheets" (the default styles the browser applies to all sites) reset many elements to "block".
- **Inline:** `<span>`, `<em>` Text wraps around me! I accept margin and padding, but only push things horizontally, not vertically. I am going to politely ignore your height and width instructions.
- **Inline-Block:** An element set to `inline-block` is very similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a `width` and `height` which will be respected.
- **Block:**  A number of elements are set to block by UA stylesheets, usually container elements. `<div>`, `<ul>`, `<section>`, and a bunch more. Also, text blocks like: `<p>`, `<h1>`. I do not sit inline! I will take up as much horizontal space as possible!

```css
div {
  display: 'inline';        /* Default of all elements, unless UA stylesheet overrides */
  display: 'inline-block';  /* Characteristics of block, but sits in a line */
  display: 'block';         /* UA stylesheet makes things like <div> and <section> block */
  display: 'none';          /* Hide */
}
```

### Position Property

- `relative`: A relatively positioned element preserves its space. The adjacent elements aren’t repositioned to occupy the reserved space for this element. However, the offsets of this element don’t occupy space. They’re completely ignored from the other elements, and hence that may causes elements to overlap each other.
- `absolute`: An absolutely positioned element is completely removed from the normal flow. The adjacent sibling elements occupy its space.
- `fixed`: A fixed positioned element (subcategory of the absolute positioning) is positioned relative to the viewport. It will stick in place despite any scrolling or resizing of the viewport
- You specify the position of your element via offset properties: `auto` (default), `top`, `bottom`, `right`, `left`
- An element whose position property is set to absolute or fixed is called an absolutely positioned element. 
- A positioned element can take advantage of the `z-index` property to specify its stack order. The stack order is the order in which elements in the same space lay on top of one another. For example, an element with a `z-index` of `2` will appear above an element with a `z-index` of `1` if they happen to overlap. Without any z-index value, elements stack in the order they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning will always appear on top of elements with default static positioning. Also note that nesting plays a big role. If an element B sits on top of element A, a child element of element A can never be higher than element B.

### Floats

- "Floating" an element takes it out of the normal flow, and places it as far to the left or right of its containing element as possible. Any other elements, such as paragraphs or lists, will wrap around the floated element. (It was originally intended only for magazine style text wrapping.)
- Always specify a width when floating an element, otherwise the element is likely to take up the whole page and not appear floated.
- You can specify a) whether an element is floated or not, and b) which side it ﬂoats on.

- `none`: the element does not float. This is the initial value.
- `left`: floats the element to the left of its container.
- `right`: floats the element to the right of its container.
- `inherit`: the element inherits the float direction of its parent.
- `clear`: Float's sister property. An element that has the clear property set on it will not move up adjacent to the float like the float desires, but will move itself down past the float. 

```css
.clearfix:after {
    content: ' ';
    display: table;
    clear: both;
}
```
