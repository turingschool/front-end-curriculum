---
title: Array Prototype Methods Introduction
length: 180
tags: JavaScript, array, prototype
---

# Aria # 

Accessible Rich Internet Applications.

ARIA is a set of tools we can add to our HTML to give our code more semantic meaning. Not only is this crucial for assistive technology, but it is also helpful to your future self and other developers to know why you did what you did.

Think about the information provided by a set of `<div></div>` tags. What do we know about the content within those tags? Really, we know nothing. It's a meaningless element that controls the APPEARANCE of its content - by default setting is a `block` style element, but beyond that it could theoretically be literally any kind of data - a title, a paragraph, an image, a random red decorative sidebar...etc.

## Roles ##

Roles define what an element IS - what function it serves on the page.

These can be either **implicit** or **explicit**.

Implicit roles are those that are pre-defined by default in HTML. Ie: `<h1></h1>`, `<button></button>`, `<ul></ul>`. The semantic meanings of these elements are already clear by the element themselves and assistive technologies have this information too.

Example:

```html
<h1>Hello World</h1>

<!-- The above markup has an implicit role of "heading", with an attribute specifying that it has a property of aria-level 1.-->
```

Explicit roles are those that you specifically attach to a given element outside of what is provided by default in the HTML itself. Ie: A `<div></div>` that is serving to hold a hero image at the top of your webpage, or a set of images that are only there for decoration and add no crucial meaning to the content.

Example:

```html
<div role="banner"></div>
<span role="separator"> --------------- </span>

<!-- The above markup might have a background image set by CSS that is acting as as Hero Image, or a "banner", followed by a thin line that separates sections of content. The elements themsleves don't provide this additional information, requiring us to include an explicit role as an attribute  -->
```

### Roles: Avoiding Redundancy ###

As previously mentioned, many semantic HTML5 elements have implicit roles that are hooked up for free in the markup itself. It's important to avoid bloating your code with redundant markup both for DRYness, and to avoid confusion for any users running your markup through assistive technology.

Things to Avoid:

* Reduncancy
* Replacement
* Modification

```html
<h1 role="heading" aria-level="1"></h1>
<!-- Redundancy. H1 implicitly has a role of heading and a level of 1.  -->

<p role="heading" aria-level="1"></p>
<!-- Replacement. You're using a paragraph but telling it to be an h1. Just use an h1.  -->

<h1 role="heading" aria-level="2"></h1>
<!-- Modification. Just use an h2 here instead of tweaking an element when a more logical choice exists.  -->
```

As much as possible, if there's an element that accomplishes the "role" you are trying to achieve, use it. HTML 5 has provided a boatload of really great, semantically rich elements that not only convey the appropriate role, but also handle all of the behavioral keyboard interactions without requiring additional javascript.

## States ##

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

## Properties ##

Properties give an element special characteristics that you can relate to other documents or elements.

For example, take the button we mentioned when discussing states. That button specifcially controlled the sidebar-menu, but what if there are multiple menus that have similar buttons? ARIA lets us add additinoal properties that link elements together.

```html
<button
  aria-expanded="true"
  aria-controls="sidebar-menu"
>
    Toggle Menu
</button>
```

The `aria-controls` property has a value of the ID of the element it is attached to. So in this case, we would assume that there is another element with an id of `sidebar-menu` that is contolled by this button.

YOu can also use something called an `aria-label` property. Think of this like an `alt` tag for accessibility - this property allows you to enter additional text that provides more information to the user. This information won't sho up on the page but will be read by the screen reader.

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

**NOTE**: Use this with caution. The screen reader will now REPLACE whatever exists as the default button text and instead read the `aria-label` content.

### Other Properties

"What Am I"

* `aria-label` - Described above. Provides additional information about an element.
* `aria-live` - **CRUCIAL** This Indicates an area of the page that might change, which tells the screen reader to watch this section of the DOM and announce any changes if necessary. (Ie: your facebook feed).
* `aria-atomic`
* `aria-required`

" Who am I Related To?"

* `aria-controls` - Seen above. References an element that is controlled by the current element.
* `aria-describedby`
* `aria-labelledby` - Sister to `aria-label`, tells the screen reader which element contains additional information about it.
* `aria-owns`

[Learn more about the extensive list of properties and states available in the documentation](https://msdn.microsoft.com/en-us/library/hh801958(v=vs.85).aspx).

## Resources ##

* [Aria Roles, States, and Properites](https://www.youtube.com/watch?v=JptGV3XqNNk)
* [ARIA, Accesibility and Coding Like you Give A Damn](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)