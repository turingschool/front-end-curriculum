---
title: "Javascript: Connecting the Data Model to the DOM"
length: 60
tags: javascript, dom, data model
---

## Learning Goals

* Be able to explain what a Data Model is in an application
* Create a reusable function to display the Data Model
* Create helper functions to update the data model

## Vocabulary

- `Data Model` This is what holds onto the state of our application. You can
  think of it as a single source of truth for what should display on the page.
- `DOM` The Document Object Model, the visual representation of our application.

## Abstract

As you've realized by now, it doesn't take very much code for a project to get
really complex. Without sensible patterns, it can be very hard to know what is
happening in a project, and where our changes should be made. One pattern we use
to help make this process easier is the Data Model.

## The Data Model

When you're using an application, even a small one, you're likely interacting
with some kind of underlying Data Model. It's the source of truth about what
you're looking at. Lets look at an example:

```javascript
var fruits = [
  {
    name: 'Lemon',
    img: 'https://bit.ly/2wQwmYG',
    rotten: false,
    id: 0
  },
  {
    name: 'Lime',
    img: 'https://bit.ly/344kBtA',
    rotten: false,
    id: 1
  },
  {
    name: 'Apple',
    img: 'https://bit.ly/2X1v3AJ',
    rotten: true,
    id: 2
  }
]
```

This Array of objects is our Data Model. Every object represents one piece of
the model that we could create a visual representation for. The key is that
every this we ultimately _see_ on the DOM, is backed up by some piece of data in
our model.

<div class="call-to-action">
## Try it in a group

Taking a look at [this codepen](https://codepen.io/wvmitchell/pen/eYNaYpG)
you'll find the Data Model from above, as well as some HTML and CSS. Take 15
minutes, read through all the existing code, then try adding a `render` method,
which will create one displayed fruit for every fruit in the Data Model.
</div>
