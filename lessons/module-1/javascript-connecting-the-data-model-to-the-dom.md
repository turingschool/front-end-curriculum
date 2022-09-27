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
    id: 0
  },
  {
    name: 'Lime',
    img: 'https://bit.ly/344kBtA',
    id: 1
  },
  {
    name: 'Apple',
    img: 'https://bit.ly/2X1v3AJ',
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
you'll find the Data Model from above, as well as some HTML and CSS. Read through all the existing code. Notice that the `renderFruit` function is hard coded to only render the lemon.  

Update the code so that the `renderFruit` function uses the Data Model to display all the fruit in the `fruits` array to the page.

Be an advocate for your own learning, don't read ahead!
</div>

<section class="answer">
### Possible Solution to #1  

```javascript
function render() {
  for(var i = 0; i < fruits.length; i++) { // the DOM update is reliant on the data in the Data Model
    fruitBox.innerHTML += `
    <section class="fruit">
      <h2>${fruits[i].name}</h2>
      <img src=${fruits[i].img} />
      <button id=${fruits[i].id}>Eat</button>
    </section>`
  }
}
```
This code iterates through all the fruits, and builds up an HTML string based on the values in our Data Model. Finally, after it's finished building, it makes _one_ reference to the DOM, to update what our user actually _sees_. Critically, the Data Model is our source of truth. With out the Data Model, our render method is pretty meaningless.
</section>

## Making a change to our Data Model

Let's say we wanted to add another fruit, what should our code actually do?
Remember, our Data Model is our _*source of truth*_, so if a function is going
to add something to our code, it better be updating our Data Model.

<div class="call-to-action">
## Try it #2

Continuing to work in the same codepen, let's make that `Add Fruit` button work! Uncomment the code under `Try It #2` and then create the `addFruit` function. Your function should 1. update the Data Model and 2. display the new fruit on the page.

Hint: How can we reuse the `renderFruit` function?
</div>

<section class="answer">
### Possible Solution to #2

```javascript
function addFruit(name, img) {
  var newFruit = { name: name, img: img, id: Date.now() };

  fruits.push(newFruit); // update the Data Model

  console.log(fruits); // see the update on the Data Model

  renderFruit(); // update the DOM
}
```
You might be tempted to start using some DOM selectors to add in the new fruit you create, but this is an anti-pattern. Remember, we already have a function that is specifically designed to render our fruits. We're reusing our render method to show what's in our data model whenever anything changes. Cool!!

But uh oh...the original fruits are doubling when we click the button. Let's think about what we can change in the `renderFruit` function:

```js
function renderFruit() {
  fruitBox.innerHTML = '';

  for(var i = 0; i < fruits.length; i++) {
    fruitBox.innerHTML += `
    <section class="fruit">
      <h2>${fruits[i].name}</h2>
      <img src=${fruits[i].img} />
      <button id=${fruits[i].id}>Eat</button>
    </section>`
  }
}
```

</section>


<div class="call-to-action">
## Try It #3

It's great to be able to add fruit to our Data Model, but what about removing
them? Create a new function that takes an id parameter, removes the fruit with
that id from our Data Model, and updates the presentation layer for our user.
</div>

<section class="answer">
### Possible Solution to #3

```javascript
function deleteFruit(id) {
  for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].id === id) {
      fruits.splice(i, 1); // update the Data Model
    }
  }

  console.log(fruits); // see the update on the Data Model

  renderFruit() // update the DOM
}
```
Notice that we are once again using the `renderFruits` method! Look how clean our code is!
</section>

<div class="call-to-action">
## Revisiting the Warm Up

Spend some time updating [this codepen](https://codepen.io/kaylaewood/pen/KKRdVmE) so that there is a strong Data Model. Remember, we want to ask ourselves these guiding questions:  
- What represents the data model?  
- Am I updating the data model?  
- Am I updating the DOM using the data model? Is the DOM manipulation dependent on the data model?  

If you get stuck or want inspiration, [here is one way you could tackle it](https://codepen.io/kaylaewood/pen/OJZyNRG)!
</div>

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
