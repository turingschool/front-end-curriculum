---
title: ARIA Roles, States, Properties
length: 90
tags: ARIA, accessibility
---
# Aria #

Roles, States, Properties, and Why You Should Care.

## Vocab

- `Accessibility` Broadly, creating an experience that is available to literally anyone
- `ARIA` Accessible Rich Internet Applications
- `Role` The function an element serves on the page
- `State` The state of an element on a page (e.g., expanded, disabled)
- `Property` ARIA information about an element

## What Is ARIA ##

**Accessible Rich Internet Applications**.

ARIA is a set of tools we can add to our HTML to make our code more semantically meaningful. Not only is this crucial for assistive technology, but it is also helpful to your future self and other developers to know what you were trying to accomplish in your code.

Think about the information provided by a set of `<div></div>` tags. What do we know about the content within those tags? Really, we know nothing. It's a semantically void element that controls the APPEARANCE of its content - by default it is a `block` style element, but beyond that it could theoretically be literally any kind of data - a title, a paragraph, an image, a random red decorative sidebar...etc.

ARIA provides a series of tools and approaches to enhancing the meaning of your code. Today we will look at the three main aspects of ARIA - Roles, States, and Properties.

## Plan Of Attack ##

* Explore Roles, States, and Properties
* Watch a short video demonstrating the usefulness of these tools
* Reflection: Answer questions based on the video
* Discussion: Come back together to talk about what we've covered

## Roles, States, and Properties ##

[MDN List of Aria Roles, States, Properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

### Roles ###

Roles define what an element is - what function it serves on the page. They give screen readers more information about how to interact with the element.

These can be either **implicit** or **explicit**.

Implicit roles are those that are pre-defined by default in HTML. Ie: `<h1></h1>`, `<button></button>`, `<ul></ul>`. The semantic meanings of these elements are already clear by the element themselves and assistive technologies have this information too.

Example:

```html
<h1>Hello World</h1>

<!-- The above markup has an implicit role of "heading" -->
```

Explicit roles are those that you specifically attach to a given element outside of what is provided by default in the HTML itself. Ie: A `<div></div>` that is serving to hold a hero image at the top of your webpage, or a set of images that are only there for decoration and add no crucial meaning to the content.

Example:

```html
<div role="banner"></div>
<span role="separator"> --------------- </span>

<!-- The above markup might have a background image set by CSS that is acting as as Hero Image, or a "banner", followed by a thin line that separates sections of content. The elements themselves don't provide this additional information, requiring us to include an explicit role as an attribute  -->
```

#### Roles: Avoiding Redundancy ####

As previously mentioned, many semantic HTML5 elements have implicit roles that are hooked up for free in the markup itself. It's important to avoid bloating your code with redundant markup both for DRYness, and to avoid confusion for any users running your markup through assistive technology.

Things to Avoid:

* Redundancy
* Replacement

```html
<h1 role="heading"></h1>
<!-- Redundancy. H1 implicitly has a role of heading and a level of 1.  -->


<p role="heading"></p>
<!-- Replacement. You're using a paragraph but telling it to be a header. Just use an h1-h6 element.  -->
```

As much as possible, if there's an element that accomplishes the "role" you are trying to achieve, use it. HTML 5 has provided a boatload of really great, semantically rich elements that not only convey the appropriate role, but also handle all of the behavioral keyboard interactions without requiring additional JavaScript.

[Table of elements and their implicit roles](https://www.w3.org/TR/html-aria/#docconformance)

Use the table of elements and look up the following elements and their implicit roles
- body
- div
- article
- footer
- img
- input

#### Your Turn

- Turn to your neighbor take turns explaining what a role is.
- What is the difference between implicit and explicit roles?

### States ###

States describe how you are interacting with an element.

For example, think about websites that have a sidebar menu that can be toggled open or closed. You might see something like this:

```html
<button>
  Toggle Menu
</button>
```

Here we have a button with text that says "Toggle Menu", probably indicating that when you click on said button it will toggle the menu open or closed.

What this doesn't tell you is if the menu is already open or closed, which is fine if you have fully functional eyesight, but probably not great if you use assistive technology.

Luckily ARIA provides state information that we can add to our markup.

```html
<button
  aria-expanded="true"
>
  Toggle Menu
</button>
```

This also allows you to target these elements using the `aria-expanded` attribute when interacting with them in your JavaScript.

Here is a good [menu example][Menu-Example] that you can use with voiceover to see how screen readers interact with aria-expanded.

[Menu-Example]: https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html

#### Your Turn

- Turn to your neighbor take turns explaining what states are.
- What would be another example of state that your app might need?

### Properties ###

Properties give an element special characteristics that you can relate to other documents or elements.

For example, take the button we mentioned when discussing states. That button specifically controlled the sidebar-menu, but what if there are multiple menus that have similar buttons? ARIA lets us add additional properties that link elements together.

```html
<button
  aria-expanded="true"
  aria-controls="sidebar-menu"
>
    Toggle Menu
</button>

<nav id="sidebar-menu">
  <!-- ...nav code here... -->
</nav>
```

The `aria-controls` property has a value of the ID of the element it is attached to. So in this case, we would assume that there is another element with an id of `sidebar-menu` that is controlled by this button.

Open [this CodePen](https://codepen.io/damwhit/pen/WZqyEe) to play around with it.

You can also use something called an `aria-label` property. Think of this like an `alt` tag for accessibility - this property allows you to enter additional text that provides more information to the user. This information won't show up on the page but will be read by the screen reader.

```html
<button
  aria-expanded="true"
  aria-controls="sidebar-menu"
  aria-label="Close sidebar navigation menu"
>
    Toggle Menu
</button>
```

You can then use JavaScript to keep this information up to date - for example, once `aria-expanded="false"`, you'd set your `aria-label` to `"Open sidebar navigation menu"`.

Open [this CodePen](https://codepen.io/damwhit/pen/XeLVbw) to play around with it.

**NOTE**: Use `aria-label` with caution. The screen reader will now REPLACE whatever exists as the default button text and instead read the `aria-label` content.

#### Other Properties ####

"What Am I"

* `aria-label` - Described above. Provides additional information about an element.
* `aria-required` - Tells a user if they need to provide input on an element
  before a form is submitted.

"Who am I Related To?"

* `aria-controls` - Seen above. References an element that is controlled by the current element.
* `aria-labelledby` - Sister to `aria-label`, references the ID of another element, which is a short title for the element.
* `aria-describedby` - is just like aria-labelledby – but is meant for longer descriptions instead of short titles. This is read after the field-type is stated
<!-- * `aria-owns` - References child elements if that relationship is not already clear in the dom. [Example][aria-owns-example]
 -->
<!-- [aria-owns-example]: https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html -->

[Learn more about the extensive list of properties and states available in the documentation](https://msdn.microsoft.com/en-us/library/hh801958(v=vs.85).aspx).

### Your Turn
<!-- Turn and discuss with your neighbor. Answer these questions and come up with an analogies for role, state and properties -->

- Turn to your neighbor and explain what a property is?
- Come up with a good analogy for property?
- How are properties different from state?


## Video ##

Watch the following video (roughly 30 min)

[ARIA, Accessibility and Coding Like you Give A Damn](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)

## Reflection ##

Answer the following questions:

- What is the difference between the DOM tree and an Accessibility Tree?

<!--  
  Accessibility tree is a separate tree used by screen readers to navigate the DOM
-->

- What 3 main types of information are available through the Accessibility Tree? Describe each of these types of information and provide an example.

<!--
  Role - what purpose does the element have?
  State - what is element doing currently? - Will likely change
  Properties - additional information about the element
-->

- Talk about the two different types of site navigation using a screen reader: Semantic Navigation vs Landmark Navigation. How are they different? How are they the same? Why are these tools helpful for users on a screen reader?

<!--
  using keyboard shortcuts you can easily navigate the page in different ways.
  Semantic navigation: moving through list tags, heading tags
  Landmark Navigation: using semantic tags you can navigate between article, section, footer, main...  
  users can scan a page in multiple ways
-->

- True or False: You can use JavaScript to directly interact with the Accessibility Tree. Elaborate.

<!--
  No, hopefully in the future.
  We can use ARIA attributes to override the default accessibility tree
-->

- How does a screen reader interact with `<div>` and `<span>` tags?
<!--
  semantically neutral, treats it like plain text
-->

- What could you do in order to tell a screen reader to treat an element, for instance a `<span></span>` tag, as a button? What does this do to the functionality of this element?

<!--
  <span role="button"></span>
  screen reader will treat like a button, won't give it the ability of a button, still have to do that with js
-->

- Seeing as adding a role doesn't actually change the elements functionality or behavior, what could you do to make sure a screen reader catches an element as it tabs through the page?

<!--
  <span role="button" tabindex="0"></span>
  add tabIndex to the element
 -->

- Write the necessary CSS that indicates visual changes have happened when hovering or focusing on something with the role of a button.

<!--
  [role="button"]:hover [role="button"]:focus {
    // css properties here
  }
 -->

- What ARIA property gives a user a shortcut to content associated with a particular button?

<!--
aria-controls
<span role="button" aria-controls="navigation-pane"></span>
 -->

- When should you use `aria-hidden` and why?

<!--
  if content is not needed for screen reader - remove content from accessibility tree
 -->

- What does this mean in terms of what you need to do within your JavaScript to make sure your ARIA markup stays accurate?

<!--
  You have to use JS to update the aria properties to make sure they stay current with what is being displayed
 -->

As mentioned in the video, it's not about changing EVERYTHING all at the same time. Name ONE aspect of Accessibility that you can commit to adding to every project for the rest of this mod.

## Discussion ##

If time allows, reconvene with the class to discuss the answers to these questions.

## Resources ##

All information in this lesson plan was pulled as a summary of the following two videos:

* [Aria Roles, States, and Properties](https://www.youtube.com/watch?v=JptGV3XqNNk)
* [ARIA, Accessibility APIs and Coding Like You Give A Damn!](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)

This is the documentation for ARIA. As you can see it is super dense and hard to
pull out the practical pieces:

* [Aria Documentation](https://www.w3.org/TR/wai-aria)
* [Aria Examples & Design Patterns](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
* [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [describedBy vs labeledBy video](https://www.youtube.com/watch?v=U8_VjI-Z1LA)

Tools
* [aXe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
