---
title: "Intro to CSS"
length: 90
tags: css, box model, syntax
---

But first, the road to enlightenment: [CSS Zen Garden](http://www.csszengarden.com/)

## Learning Goals

* Implement clean and consistent CSS syntax
* Demonstrate understanding of the box model by recreating small comps

## Vocabulary

- `CSS` Cascading Style Sheets
- `HTML element` A building block that makes up the structure of a web page
- `id` / `class` attributes on HTML elements that allow us to identify HTML elements in our CSS
- `property` (CSS property) The name of a style property of an HTML element (e.g., color, border)
- `value` The value that is paired with a given style property
- `declaration` A property/value pair within a CSS rule
- `declaration blocks` multiple declarations
- `selector` used to target HTML elements on our web pages that we want to style
- `rule` selector(s) and a declaration block come together to create a rule

## What is CSS?

It’s a “style sheet language” that lets you style the HTML elements on your page. CSS works _with_ HTML, but isn't HTML. CSS controls the positioning, sizing, colors, and specific fonts on your page. There is a `class` and `id` attribute available to use on __every__ HTML element. In addition to the plain old element names themselves, these attributes allow you to create "targets" for both your CSS and JavaScript. They are hooks that you can use to manipulate the look and behavior of your HTML elements.

## Anatomy of a Basic CSS Rule

![CSS Rule](/assets/images/css-rule.png)

We can target an HTML element in CSS many ways:
* via element name
* via class name
* via id name
* via a combination of above

<p data-height="300" data-theme-id="26495" data-slug-hash="KNvbQX" data-default-tab="html,result" data-user="turing" data-embed-version="2" data-pen-title="CSS Rules" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/KNvbQX/">CSS Rules</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<section class="call-to-action">
### Explore

With your partner, use the CodePen above to explore. Then, answer the questions below:

* Can you add two classes to an element? What is the syntax?
* Which class will take precedent?
* If an element has both a class and an id, and conflicting rules are applied to the class and id, which takes precedent? What about element and class? Element and id?
</section>

## Dev Tools and CSS

Developer Tools, or Dev Tools, are available to use in every browser. They help us debug, experiment, and test assumptions in our HTML, CSS, and JavaScript quickly and with a low-risk in the browser. They're your friend when it comes to understanding how CSS works (or untangling why it *isn't* working) -- get in the habit of using them early and often!

### Editing CSS

To the right of the HTML pane, there's a small sidebar that gives us styling information for the currently selected element. Similar to the HTML pane, we can add or remove styles and adjust CSS property values from this pane. You can click on any style property associated with the selected element and change its value. You can also use the blue checkbox to toggle the style on or off.

![Editing CSS](/assets/images/lessons/debugging-with-devtools/editing-css.png)

<section class="call-to-action">
### Dev Tools Challenge

Directly from the CSS pane, we can edit the CSS and see the changes reflected immediately.

Let's make the following edits on [kodewithklossy.com](https://www.kodewithklossy.com/):

* Change the background color of the div that holds the mission to `rebeccapurple`
* Change the text color of all the nav items to `orange`.
* Change the "Kode With Klossy" logo in the nav bar to have a height of 90px and a width of 320px
* Hide the element that contains the content under the sub header "In The News"
</section>

## The Box Model

Each elements content is in a rectangular box. CSS leverages **the box model** to control layout and design. An HTML element is comprised of its content and the padding, borders, and margins surrounding it. Boxes are "stacked" in the order they appear in your HTML. You can stack them horizontally, vertically, and in the z-plane.

This diagram can be found in the CSS Dev Tools and the same color coding is used when we hover over elements in the browser with the inspector selected.  You will probably find it extremely helpful!

# ![Box Model](/assets/images/box-model.jpg)

### The Docs

* [MDN CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
* [MDN CSS Overview](https://developer.mozilla.org/en-US/docs/Web/CSS)

## CSS Practice Time!

Let's setup a small static page to experiment with our HTML and CSS.

First, let's flex those command-line muscles you've been building:

* Create a directory called static-site-playground
* Create a file `index.html` with the html provided below
* Create a file `main.css`
* Link the index and main files you just made
* Test things are working as expected by adding in the following HTML:

```html
<!doctype html>
<html>
  <head>
    <title>CSS Playground</title>
  </head>
  <body>
    <article class="article-1">article 1</article>
    <article class="article-2">article 2</article>
  </body>
</html>
```

Next, we'll use this HTML to do some experimenting with Box Model behavior.

### Let's draw some boxes and play with some basic CSS properties

Use `.article-1` and `.article-2` as the selectors you're targeting in your `main.css` file.

Try adding some properties that impact the Box Model and some properties that impact the aesthetics of your page:

* Box Model things: `width`, `height`, `border`, `padding`, `margin`
* Aesthetic things: `color`, `font`, `background`

What do you notice when you add or adjust the Box Model properties? What happens to the size of the element?

## Box-Sizing and the CSS Box Model

In HTML, you can visualize each element as its own rectangular box. There are a number of CSS properties that can affect the final width and height of each of these boxes. The CSS Box Model describes how the final height and width of an element is determined.

We have an `article` element that we gave a `width` of `400` and a `height` of `200`. However, we've also applied several additional properties that are affecting its size and positioning. The `padding` and `border` properties are both adding `20px` to the element's height and width. Now the actual *visible* dimensions of our element are `480x280`. The Dev Tools panel provides a handy graphic of how our article is being rendered.

This is the default behavior for the rendering of block elements in CSS and is due to the `box sizing` property having a default value of `content-box`. The `box-sizing` property allows us to override this behavior and alter how the dimensions of an element are calculated:

```css
*,
*:after,
*:before {
  box-sizing: border-box;
}
```

Setting the `box-sizing` property to `border-box` will alter the model so that the `width` and `height` properties include the content, padding and border. If we were to set `box-sizing: border-box` on our previous example, our element would be rendered at exactly the `400x200` dimensions we specified. It's `padding` and `border` properties would be included within those dimensions, making our content area slightly smaller.

### CSS Practice Time, the remix!

Revisit the static page you just made and add the CSS rule shown above that applies the `box-sizing` property to your CSS. How does it change what's rendered in the browser? How is the size of the elements impacted?

## Inline vs. Block

The document flow is the model by which elements are rendered by default in the CSS specifications. In this model, elements are rendered according to their default display rule. In other words, block-level elements are displayed on a new line and inline elements on the same line. Everything is stacked in an ordered way from top to bottom. The document flow can be modified by CSS through its positioning properties.

- CSS divides HTML elements into two types: inline and block
- After block elements, browsers render a new line
- Inline elements: `img`, `a`, `br`, `em`, `strong`
- Block elements: `p`, `h1`, `ul`, `li`, almost everything else

## Additional Resources

* [Turing CSS Style Guide](https://github.com/turingschool-examples/css)
* [Visual Guide to CSS](http://cssreference.io/)
