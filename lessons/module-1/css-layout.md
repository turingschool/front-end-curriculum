---
title: "CSS: Layout"
length: 90
tags: css, combinators, layout, display, specificity
---

## Learning Goals

* Understand and utilize the various positioning properties you have available
* Use floats to handle more difficult layouts
* Learn how specificity rules can impact your CSS rules
* Learn about complex CSS selectors

But first, the road to enlightenment: [CSS Zen Garden](http://www.csszengarden.com/)


## Display Property

- The display property allows us to manipulate the layout of elements on a page without taking them out of the normal page flow.
- The default value for all elements is inline. Most "User Agent stylesheets" (the default styles the browser applies to all sites) reset many elements to "block".
- **Inline:** `<span>`, `<em>` Text wraps around me! I accept margin and padding, and push things horizontally, not vertically. I am ignore height and width instructions.
- **Inline-Block:** An element set to `inline-block` is very similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a `width` and `height` which will be respected. They also apply 2px of margin that does not register in dev tools.
- **Block:**  A number of elements are set to block by UA stylesheets, usually container elements. `<div>`, `<ul>`, `<section>`, and a bunch more. Also, text blocks like: `<p>`, `<h1>`. I do not sit inline! I will take up as much horizontal space as possible!

```css
div {
  display: 'inline';        /* Default of all elements, unless UA stylesheet overrides */
  display: 'inline-block';  /* Characteristics of block, but sits in a line */
  display: 'block';         /* UA stylesheet makes things like <div> and <section> block */
  display: 'none';          /* Hide */
}
```

Quick tip: If you want to center an element, you can give the `margin` property a value of `auto` to center a block like element.

### Your turn:

* With a partner:
  * Fork the following [CodePen](https://codepen.io/eric_turing/pen/QeXBYz)
  * How can you right align a block like element using the margin property?

## Position Property

- We can manipulate this [CodePen](https://codepen.io/eric_turing/pen/bXPzzW) to play around with the following values for our position property.
- The `position` property in CSS will take elements out of the normal page flow, and should therefore be used sparingly.
- `relative`: A relatively positioned element preserves its space. The adjacent elements aren’t repositioned to occupy the reserved space for this element. However, the offsets of this element don’t occupy space. They’re completely ignored from the other elements, and hence that may causes elements to overlap each other.
- `absolute`: An absolutely positioned element is completely removed from the normal flow. The adjacent sibling elements occupy its space.
- `fixed`: A fixed positioned element (subcategory of the absolute positioning) is positioned relative to the viewport. It will stick in place despite any scrolling or resizing of the viewport
- You specify the position of your element via offset properties: `auto` (default), `top`, `bottom`, `right`, `left`
- An element whose position property is set to absolute or fixed is called an absolutely positioned element.
- A positioned element can take advantage of the `z-index` property to specify its stack order. The stack order is the order in which elements in the same space lay on top of one another. For example, an element with a `z-index` of `2` will appear above an element with a `z-index` of `1` if they happen to overlap. Without any z-index value, elements stack in the order they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning will always appear on top of elements with default static positioning. Also note that nesting plays a big role. If an element B sits on top of element A, a child element of element A can never be higher than element B.

### Your turn:

* With a partner:
  * What might be a useful scenario for using position absolute?
  * What about relative?
  * Fixed?
  * z-index?

## Floats

"Floating" an element takes it out of the normal flow, and places it as far to the left or right of its containing element as possible. Any other elements, such as paragraphs or lists, will wrap around the floated element as seen [here](https://codepen.io/LouisaBarrett/pen/GwwKGN).

- Always specify a width when floating an element, otherwise the element is likely to take up the whole page and not appear floated.
- You can specify a) whether an element is floated or not, and b) which side it ﬂoats on.
- `none`: the element does not float. This is the initial value.
- `left`: floats the element to the left of its container.
- `right`: floats the element to the right of its container.
- `inherit`: the element inherits the float direction of its parent.
- `clear`: Float's sister property. An element that has the clear property set on it will not move up adjacent to the float like the float desires, but will move itself down past the float.
- We can play around with this [code pen](https://codepen.io/LouisaBarrett/pen/GEQbNY) to see how float and clear work with one another.

```css
.clearfix:after {
    content: ' ';
    display: table;
    clear: both;
}
```

## CSS Specificity

__Specificity__ is how the browser decides which CSS values are the most relevant to an element and whether or not they should be used.
__Specificity__ is a weight that is applied to a given CSS declaration and is determined by the number of each selector type in the matching selector.
Basically, it’s a mechanism within the CSS cascade, which helps browsers in conflicts resolution. Suppose, you have two (or more) conflicting CSS rules that are being applied to the same element, then there are going to be some basic rules which a browser will follow to determine which one is most specific and that particular CSS declaration will win.

### What does specificity look like?

```css

// This makes all the <li> tags magenta
li {
  color: magenta;
}

// This indicates that all <p> tags within an <li> tag should have text color of green
li p {
  color: green;
}

```

### How do you calculate specificity?

To find the actual specificity of a group of nested selectors takes some calculation. Basically, every inline style has a specificity of 1000, every ID selector has a value of 100, every class selector has a value of 10 and every elements and pseudo elements  has a value of 1. Finally, we add them up to get the specificity weight.

Examples:

* `a` has a specificity of 1 (1 element selector)
* `div p` has a specificity of 2 (2 element selectors, 1+1)
* `.active` has a specificity of 10 (1 class selector)
* `#nav` has a specificity of 100 (1 id selector)
* `#nav li.active` a has a specificity of 111 (1 id selector + 1 class selector + 1 elements selector)

[Specificity Calculator](https://specificity.keegan.st/) The highest number wins for most specific and will correspondingly take precedent in application of style.

Key Points:

* In case of conflicting styles declaration, the declaration with higher specificity will win regardless of order.
* The universal selector (\*) has no specificity value.
* Pseudo-classes have specificity of 10 while pseudo-elements (e.g. :first-line) has a specificity of 1. [Pseudo-class vs. Pseudo-element](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/)
* The pseudo-class :not() adds no specificity by itself, only elements inside its parenthesis will add to specificity weight.
* When an !important rule is used on a style declaration, it will override any other declarations.
* The only way an !important value can be overridden is with another !important rule declared later in the CSS and with equal or great specificity value .


## CSS Combinators and Complex Selectors

Another way to target specific relationships among elements is to use CSS combinators. We will review a few of the common selectors, but be sure to reference [the documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators) and [this guide](https://learn.shayhowe.com/advanced-html-css/complex-selectors/) for more explanation on some of these complex selectors.

#### Use of Commas

```css
h1,
h2,
h3,
h4 {
  /* some rules */
}
```
If you want to apply the SAME styles to multiple elements, you can use a comma to link the elements that you want to apply the styling rules to. In the rule above, all of the headings would have the same styles applied to them.

#### Descendant Combinator

```html
<section>
  <p>Some text</p>
</section>
<p>Even more cool text</p>
```
```css
section p {
    /* some rules */
}
```
This combinator will target the second element that is a direct descendant of the first element. In the above example, this combinator will target all `p` tags that are descendants of a section tag. In this case, the rules would only apply to the first paragraph on the page, but not the second since it is not nested within a `section` tag.

Syntax: `space` between selectors


## Additional Resources

* [Turing CSS Style Guide](https://github.com/turingschool-examples/css)
