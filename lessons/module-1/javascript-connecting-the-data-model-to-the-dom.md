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

Be an advocate for your own learning, don't read ahead!
</div>

## Rendering our Data Model

Having a specific way that we render our Data Model is very helpful, because it
allows us to save a lot of effort coding. Once we have a way of rendering our
Data Model, we can use that same method anytime our data model changes.

Here's one way that you could have rendered the Data Model in the codepen above:

```javascript
function render() {
  var fruitHTML = ""
  fruits.forEach(function(fruit) {
    var fruitTitle = fruit.rotten ? `Rotten ${fruit.name}` : fruit.name;
    fruitHTML += `
      <div class="fruit">
        <h2>${fruitTitle}</h2>
        <img src="${fruit.img}" />
        <button data-id=${fruit.id}>Lick</button>
      </div>
    `
  })
  fruitBox.innerHTML = fruitHTML;
}
```

This code iterates through all the fruits, and builds up an HTML string based on
the values in our Data Model. Finally, after it's finished building, it makes
_one_ reference to the DOM, to update what our user actually _sees_. Critically,
the Data Model is our source of truth. With out the Data Model, our render
method is pretty meaningless.

## Making a change to our Data Model

Let's say we wanted to add another fruit, what should our code actually do?
Remember, our Data Model is our _*source of truth*_, so if a function is going
to add something to our code, it better be updating our Data Model.

<div class="call-to-action">
## Back to the group

Continuing to work in the same codepen, create a function with three arguments: 
name, img, and rotten. This function should be able to add a new object to the
Data Model. Once you've finished, call your function with 3 arguments of your
choice. Does your Data Model update? What about what the user sees?
</div>

If you successfully added a new fruit to your Data Model, you may have written a
function that looks something this this:

```javascript
function addFruit(name, img, rotten) {
  var newFruit = {name: name, img: img, rotten: rotten, id: fruits.length}
  fruits.push(newFruit)
}
```

This will do a fine job of updating our Data Model, but what about actually
showing the fruit on the page? You might be tempted to start using some DOM
selectors to add in the new fruit you create, but this is an anti-pattern.
Remember, we already have a function that is specifically designed to render our
fruits. Let's just modify our addFruit method to call our render function once a
fruit is added:

```javascript
function addFruit(name, img, rotten) {
  var newFruit = {name: name, img: img, rotten: rotten, id: fruits.length}
  fruits.push(newFruit)
  render()
}
```

Awesome! Now we're reusing our render method to show what's in our data model
whenever anything changes. Cool!!

<div class="call-to-action">
## Once more with the group

It's great to be able to add fruit to our Data Model, but what about removing
them? Create a new function that takes an id parameter, removes the fruit with
that id from our Data Model, and updates the presentation layer for our user.
</div>
