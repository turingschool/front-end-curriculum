---
title: ARIA Roles, States, Properties
length: 120
tags: ARIA, accessibility
---
# Aria #

Roles, States, Properties, and Why You Should Care.

## What Is ARIA ##

**Accessible Rich Internet Applications**.

ARIA is a set of tools we can add to our HTML to make our code more semantically meaningful. Not only is this crucial for assistive technology, but it is also helpful to your future self and other developers to know what you were trying to accomplish in your code.

Think about the information provided by a set of `<div></div>` tags. What do we know about the content within those tags? Really, we know nothing. It's a semantically void element that controls the APPEARANCE of its content - by default it is a `block` style element, but beyond that it could theoretically be literally any kind of data - a title, a paragraph, an image, a random red decorative sidebar...etc.

ARIA provides a series of tools and approaches to enhancing the meaning of your code. Toay we will look at the three main aspects of ARIA - Roles, States, and Properties.

## Plan Of Attack ##

* Explore Roles, States, and Properties
* Watch a short video demonstrating the usefulness of these tools
* Reflection: Answer questions based on the video
* Discussion: Come back together to talk about what we've covered

## Roles, States, and Properties ##

### Roles ###

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

#### Roles: Avoiding Redundancy ####

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

### Properties ###

Properties give an element special characteristics that you can relate to other documents or elements.

For example, take the button we mentioned when discussing states. That button specifcially controlled the sidebar-menu, but what if there are multiple menus that have similar buttons? ARIA lets us add additinoal properties that link elements together.

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

The `aria-controls` property has a value of the ID of the element it is attached to. So in this case, we would assume that there is another element with an id of `sidebar-menu` that is contolled by this button.

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

**NOTE**: Use this with caution. The screen reader will now REPLACE whatever exists as the default button text and instead read the `aria-label` content.

#### Other Properties ####

"What Am I"

* `aria-label` - Described above. Provides additional information about an element.
* `aria-live` - **CRUCIAL** This Indicates an area of the page that might change, which tells the screen reader to watch this section of the DOM and announce any changes if necessary. (Ie: your facebook feed).
* `aria-atomic`
* `aria-required`

"Who am I Related To?"

* `aria-controls` - Seen above. References an element that is controlled by the current element.
* `aria-describedby`
* `aria-labelledby` - Sister to `aria-label`, tells the screen reader which element contains additional information about it.
* `aria-owns`

[Learn more about the extensive list of properties and states available in the documentation](https://msdn.microsoft.com/en-us/library/hh801958(v=vs.85).aspx).

## Video ##

Watch the following video (roughly 30 min)

[ARIA, Accesibility and Coding Like you Give A Damn](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)

## Reflection ##

Answer the following questions:

1. What is the difference between the DOM tree and an Accessibility Tree?

1. What 3 main types of information is available through the Accessibility Tree? Describe each of these types of information and provide an example.

1. Talk about the two different types of site navigation using a screen reader: Semantic Nagivation vs Landmark Navigation. How are they different? How are they the same? Why are these tools helpful for users on a screen reader?

1. True or False: You can user JavaScript to interact directly with the Accessibility Tree. Elaborate.

1. How does a screen reader interact with `<div>` and `<span>` tags?

1. What could you do in order to tell a screen reader to treat an element, for instance a `<span></span>` tag, as a button? What does this do to the functionality of this element?

1. Seeing as adding a role doesn't actually change the elements functionality or behavior, what could you do to make sure a screen reader catches an element as it tabs through the page?

1. Write the necessary CSS that indicates visual changes have happened when hovering or focusing on something with the role of a button.

1. What ARIA property gives a user a shortcut to content associated with a particular button?

1. When should you use `aria-hidden` and why?

1. What does this mean in terms of what you need to do within your JavaScript to make sure your ARIA markup stays accurate?

1. As mentioned in the video, it's not about changing EVERYTHING all at the same time. Name ONE aspect of Accessibility that you can commit to adding to every project for the rest of this mod.

## Discussion ##

If time allows, reconvene with the class to discuss the answers to these questions.

## Resources ##

All information in this lesson plan was pulled as a summary of the following two videos:

* [Aria Roles, States, and Properites](https://www.youtube.com/watch?v=JptGV3XqNNk)
* [ARIA, Accessibility APIs and Coding Like You Give A Damn!](https://www.youtube.com/watch?v=qdB8SRhqvFc&t=399s)