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

<div class="call-to-action">
## Warm Up

Open up [this codepen](https://codepen.io/kaylaewood/pen/KKRdVmE) and look through the code/functionality of the application. Then, talk through the following questions:

- If we wanted to track how many sunny (or cloudy or rainy, etc.) days we had in a week, what about our code would make that difficult to do?  
- How could we change our code so that tracking those stats would be easier? Note: Don't actually change the code, just think about it!  
- 🌶 Spicy: If we wanted this data to persist (i.e. still be there after we close and reopen the page), what about our code would make that difficult to do?
</div>

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
every thing we ultimately _see_ on the DOM, is backed up by some piece of data in
our model.

## Rendering the Data Model

Having a specific way that we render our Data Model is very helpful, because it
allows us to save a lot of effort coding. Once we have a way of rendering our
Data Model, we can use that same method anytime our data model changes.

<div class="call-to-action">
## Try it #1

Taking a look at [this codepen](https://codepen.io/kaylaewood/pen/PopKYYm)
you'll find the Data Model from above, as well as some HTML and CSS. Read through all the existing code, then try adding a `render` method,
which will create one displayed fruit for every fruit in the Data Model.

Be an advocate for your own learning, don't read ahead!
</div>

<section class="answer">
### Possible Solution to #1  

```javascript
function render() {
  for(var i = 0; i < fruits.length; i++) {
    fruitBox.innerHTML += `
    <section class="fruit">
      <h2>${fruits[i].name}</h2>
      <img src=${fruits[i].img} />
      <button id=${fruits[i].id}>Lick</button>
    </section>`
  }
}
```
This code iterates through all the fruits, and builds up an HTML string based on
the values in our Data Model. Finally, after it's finished building, it makes
_one_ reference to the DOM, to update what our user actually _sees_. Critically,
the Data Model is our source of truth. With out the Data Model, our render
method is pretty meaningless.
</section>

<div class="call-to-action">
## Try it #2
What if we don't want the rotten fruit to render? Update the code you have so that only the fruit with a `rotten: false` render to the page.
</div>

<section class="answer">
### Possible Solution to #2  

```javascript
function render() {
  for(var i = 0; i < fruits.length; i++) {
    if (!fruits[i].rotten) {
      fruitBox.innerHTML += `
      <section class="fruit">
        <h2>${fruits[i].name}</h2>
        <img src=${fruits[i].img} />
        <button id=${fruits[i].id}>Lick</button>
      </section>`
    }
  }
}
```
</section>

## Making a change to our Data Model

Let's say we wanted to add another fruit, what should our code actually do?
Remember, our Data Model is our _*source of truth*_, so if a function is going
to add something to our code, it better be updating our Data Model.

<div class="call-to-action">
## Try it #3

Continuing to work in the same codepen, create a function with three arguments:
`name`, `img`, and `rotten`. This function should be able to add a new object to the
Data Model. Once you've finished, call your function with 3 arguments of your
choice (we've provided a banana example for you!). Does your Data Model update? What about what the user sees?
</div>

<section class="answer">
### Possible Solution to #3

```javascript
function addFruit(name, img, rotten) {
  var newFruit = {name: name, img: img, rotten: rotten, id: Date.now()};

  fruits.push(newFruit);

  render();
}
```
You might be tempted to start using some DOM
selectors to add in the new fruit you create, but this is an anti-pattern.
Remember, we already have a function that is specifically designed to render our
fruits. We're reusing our render method to show what's in our data model
whenever anything changes. Cool!!
</section>


<div class="call-to-action">
## Try It #4

It's great to be able to add fruit to our Data Model, but what about removing
them? Create a new function that takes an id parameter, removes the fruit with
that id from our Data Model, and updates the presentation layer for our user.
</div>

<section class="answer">
### Possible Solution to #4

```javascript
function removeFruit(id) {
  for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].id === id) {
      fruits.splice(i, 1);
    }
  }

  render();
}
```
Notice that we are once again using the render method! Look how clean our code is!
</section>

## Challenge Time 🌶

Great, so we can render, add, and remove fruits from our data model, and we're
doing it all with only one DOM element! That's all well and good when we're just
writing the code ourselves, but what if our user actually wants to interact with
our page?

If something our user does should change the look of the page, then it probably
needs to change our Data Model as well.

Notice those 'Lick' buttons? They all have _id attributes_ on them which
match the id of the fruit above. We could use them in conjuction with an event
listener to make our fruit rotten!

<div class="call-to-action">
## Try It #5

Set an event listener on the `fruitBox` DOM element. Whenever someone clicks on
one of the 'Lick' buttons, that fruit should now be labeled as 'Rotten' in the data model and no longer appear on the page.
</div>

<section class="answer">
### Possible Solution to #5
```javascript
fruitBox.addEventListener('click', function (event) {
  makeRotten(event);
});

function makeRotten(event) {
  var id = parseInt(event.target.id);

  for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].id === id) {
      fruits[i].rotten = true;
    }
  }

  render();
}
```
We loop through all our fruits, find the one where the fruit.id matches the
id on the button, and update it's property to indicate it is now rotten. After we've updated our
Data Model, we re-render the model to see the change.  

Interested in learning more about data attributes? Check out [this article](https://www.abeautifulsite.net/posts/working-with-html5-data-attributes/)!
</section>

<div class="call-to-action">
## Enough with the fruit! Let's look at a REAL project!

Now that we have more context for how to separate the data model and the DOM, let's look back at your paired project!  

Note: This repo contains an example of the RomCom project. If you didn't work on that project, don't panic -- It's nearly identical to the Hang in There project!

Clone down [this repo](https://github.com/kaylaewood/romcom)!
</div>

## Guiding Questions:
- What represents the data model?
- Am I updating the data model?
- Am I updating the DOM using the data model? Is the DOM manipulation dependent on the data model?
