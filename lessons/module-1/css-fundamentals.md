---
title: "CSS: Fundamentals"
length: 90
tags: css, box model, syntax
---

## Learning Goals

* Implement clean and consistent CSS syntax
* Use Chrome Dev Tools to debug CSS
* Demonstrate understanding of the box model by recreating small comps

## Pre-Work

Read through [Intro to CSS Pre-Work document](./intro-to-css-prework.html) and all links provided and complete exercises provided in it. Be prepared to demonstrate your understanding of the concepts in that document when you come to this class.

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

## Warm Up

<section class="call-to-action">
Add your thoughts and questions to [this google document](https://docs.google.com/document/d/1q0rv8RN5w4ECL0CSOhB-QbqQ2HQsYPRQ-7aCf30bo3g/edit?usp=sharing).
</section>


## What is CSS?
CSS can do SO MUCH more than just add color or make things pretty. CSS can be used to create artwork like [this project](https://www.cssartist.com/inprogress) by Kassandra Sanchez. CSS can also make complex processes more intuitive and accessible users, like [TurboTax](https://turbotax.intuit.com/personal-taxes/online/) and [airbnb](https://www.airbnb.com/). CSS is a powerful tool for frontend developers. Let's jump in to see how it works!  

It’s a “style sheet language” that lets you style the HTML elements on your page. CSS works _with_ HTML, but isn't HTML. CSS controls the positioning, sizing, colors, and specific fonts on your page. There is a `class` and `id` attribute available to use on __every__ HTML element. In addition to the plain old element names themselves, these attributes allow you to create "targets" for both your CSS and JavaScript. They are hooks that you can use to manipulate the look and behavior of your HTML elements.

## Anatomy of a Basic CSS Rule

![CSS Rule](/assets/images/css-rule.png)

We can target an HTML element in CSS many ways:
```css
// by element name
h1 {
  color: red;
}

// by class name
.primary-font {
  font-family: "Montserrat", sans-serif;
  font-size: 45px;
}

// by id name
#about-page {
  background-color: lightgrey;
}

// by a combination of above
.primary-font p {
  font-size: 15px;
  color: darkgrey;
}
```

<p class="codepen" data-height="300" data-theme-id="37918" data-default-tab="html,result" data-user="kaylaewood" data-slug-hash="mdEexwR" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Rules">
  <span>See the Pen <a href="https://codepen.io/kaylaewood/pen/mdEexwR">
  CSS Rules</a> by Kayla Wood (<a href="https://codepen.io/kaylaewood">@kaylaewood</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<section class="call-to-action">
### Explore

With your partner, use the CodePen above to explore.
* Uncomment each line in the CSS file at a time (starting at the top). Before you uncomment, make a prediction about what you will see on the page.
* Do you notice a pattern for what styling is taking precedent?
* Write down any questions that come up!
</section>

[Read More on the CSS Cascade](https://wattenberger.com/blog/css-cascade)

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
* Change the background color of the nav to `orange`.
* Change the "Kode With Klossy" logo in the nav bar to have a height of 90px and a width of 320px
* Change the background color of the right side "donate" button to a color of your choosing. Try out different color formats. Hint - this [HTML Color Codes](https://htmlcolorcodes.com/) website will help!
* Experiment with deselecting a few CSS styles. What happens?

</section>

## The Box Model

Each elements content is in a rectangular box. CSS leverages **the box model** to control layout and design. An HTML element is comprised of its content and the padding, borders, and margins surrounding it. Boxes are "stacked" in the order they appear in your HTML. You can stack them horizontally, vertically, and in the z-plane.

This diagram can be found in the CSS Dev Tools and the same color coding is used when we hover over elements in the browser with the inspector selected.

# ![Box Model](/assets/images/box-model.jpg)

## The Box Model Applied

<section class="call-to-action">
### Explore Box Model

**Setup**
* Fork a copy of this [static-site-playground](https://github.com/turingschool-examples/static-site-playground) directory
* Clone it down to your machine
* Open it up in your text editor
* Test things are working as expected by opening in the browser by running `open index.html` in your terminal
* Explore the code! How is the CSS file linked to the HTML file?

**Write some CSS!**
* On your own, take a few minutes to practice writing the syntax of CSS rules and seeing how margin and padding affect an element.
* A common mantra when working on CSS is "when in doubt, border it out". Apply a border of an obvious color to both the section and button so you are 100% clear on where things are. Hint: Make sure to be researching properties on MDN!
* Add margin and padding to your button
* Add margin and padding to the section

If you have time left, see what else you can change or add with CSS!
</section>

## Recreating Comps

We can apply all the margin and padding we want, but when it comes down to it, many times Front End Developers are tasked with re-creating something a designer has provided them with, commonly called "comps". Let's use our tools to build something professional-grade.  

Throughout both lessons today, you are going to work on recreating a piece of the [Imperfect Foods website](https://web.archive.org/web/20220118162321/https://try.imperfectfoods.com/overview).  

You will have one hour to work on `iteration 1` of [this activity](https://github.com/kaylagordon/css-intro-imperfectfoods). You will work on `iteration 2` this afternoon, after you've learned about Flexbox.

## Wrap Up

<section class="call-to-action">
### Solo Journaling

- How does CSS differ from HTML?
- Explain the Box Model
- What questions do you still have about CSS?

</section>

Next week we will learn how to create layouts using the CSS display property!


## Additional Resources

* [MDN Common CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
* [Turing CSS Style Guide](https://github.com/turingschool-examples/css)
* [Visual Guide to CSS](http://cssreference.io/)
* [MDN CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
* [CSS Border Box](https://dev.to/ameseee/meet-border-box-my-best-friend-a56)
