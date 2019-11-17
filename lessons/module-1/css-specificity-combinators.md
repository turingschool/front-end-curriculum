---
title: "CSS: Specificity + Combinators"
length: 20
tags: css, combinators, specificity
---

## CSS Specificity

__Specificity__ is how the browser decides which CSS values are the most relevant to an element and whether or not they should be used.
__Specificity__ is a weight that is applied to a given CSS declaration and is determined by the number of each selector type in the matching selector.
Basically, it’s a mechanism within the CSS cascade, which helps browsers in resolve conflicting rules. Suppose you have two (or more) conflicting CSS rules that are being applied to the same element. Int that case, the browser follows some rules to determine which one is most specific and that particular CSS declaration will take precedence.

### What does specificity look like?

```css

// This makes all the <li> tags magenta
li {
  color: magenta;
}

// This indicates that all <p> tags within an <li> tag should have text color of green
// This is more specific than just targeting <p> tags, because it only targets <p> tags that are children of an <li> tag
li p {
  color: green;
}

```

### How do you calculate specificity?

To find the actual specificity of a group of nested selectors takes some calculation. Every inline style has a specificity of 1000 (we don't use inline styles much), every ID selector has a value of 100, every class selector has a value of 10 and every elements and pseudo elements has a value of 1. Finally, we add them up to get the specificity weight.

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
* The only way an !important value can be overridden is with another !important rule declared later in the CSS and with equal or great specificity value.

## CSS Combinators and Complex Selectors

Another way to target specific relationships among elements is to use CSS combinators. We will review a few of the common selectors, but be sure to reference [the documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators) and [this guide](https://learn.shayhowe.com/advanced-html-css/complex-selectors/) for more explanation on some of these complex selectors.

### Use of Commas

```css
h1,
h2,
h3,
h4 {
  /* some rules */
}
```
If you want to apply the SAME styles to multiple elements, you can use a comma to link the elements that you want to apply the styling rules to. In the rule above, all of the headings would have the same styles applied to them.

### Descendant Combinator

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

Note the syntax: `space` between selectors
