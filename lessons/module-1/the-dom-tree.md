---
title: The Dom Tree
length: 60
tags: javascript, dom, browser, research, documentation, docs
---

## Learning Goals

* Deep dive into the DOM node tree
* Understand from a high level the history and purpose of the DOM
* Practice research skills
* Practice reading documentation
* Build independent learning skills

## Vocabulary

- `DOM` - Document Object Model, the JS interface used to interact with HTML
- `interface` - a shared boundary across which two separate components exchange information.
- `node` - a basic unit of a data structure; often contains data and is linked to other nodes
- `tree` - a basic structure that describes relationships between pieces of information (`nodes`); composed of related nodes in an organized structure

## Warm Up

On your own, in your notebook, create something like a family tree. You can use your family, your close friends, your social media contacts, your pets, whatever. 

Construct a web/tree/diagram of people or things and their relationships to each other.

An example of Leta's immediate family tree:

```
              Jan - Jim
                  |        (adopted)
        ___________________.....
        |      |               |
Kay - Ryan    Evan - Clark   Leta
    |
   Emma
```

<section class="call-to-action">
### Discuss

With a partner, share your diagram.

- Would you call your diagram a tree or a web? Or something else?
- What does your diagram illustrate about the relationships between each item/person?
</section>

## Taking a Closer Look at the DOM

We've [already learned](https://frontend.turing.edu/lessons/module-1/dom-manipulation-1-rewrite.html) that the DOM (the Document Object Model) is a representation of the HTML file, and that it is an interface that allows us to interact with the HTML file and browser using JavaScript.

We've looked at the `document` object in the browser console. We've dug into individual elements using `querySelector`, and discovered that each element in the DOM has properties such as `classList`, `innerText`, and `innerHTML`, and some have more, like `src`, and `value`.

But what exactly _is_ the DOM?

## Trees and Nodes

This next part gets into some computer science fundamentals.

Picture a tree. Just a regular tree. Maybe deciduous. Let's say an oak.

![oak tree with wide, spreading branches](https://img1.10bestmedia.com/Images/Photos/36889/292153612-angel-oak-17_54_990x660_201404181815.jpg)

Every tree starts with a trunk, and that trunk splits into branches which split into branches which split into branches, on and on and on until you get to the outermost edge of each branch: a leaf.

Every leaf belongs to a branch, which belongs to a branch, which belongs to a branch .... all the way back until you get back to the single, original trunk. 

Even if the tree has two or more trunks, eventually, they all meet back at one point where they are a single plant.

In computer science, we have data structures (aka structures that contain data) which resemble trees.

Just like your family tree, they contain `nodes` of information (aka each person in the tree), linked together by their relationships to one another (aka "parent", "child", "sibling", "child of a sibling", "parent of a parent", etc).

<section class="call-to-action">
### Read about trees

Take a few minutes to read Vaidehi Joshi's excellent blog post about tree data structures!

[How to Not Be Stumped by Trees](https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7)

Then consider the following questions:
- Looking at Leta's family tree above, identify all the parent nodes
- Identify all the child nodes
- Are some of the parent nodes ALSO child nodes?
- Any leaf nodes?
- Which are the sibling nodes?

(Also, I recommend checking out all of [BaseCS](https://medium.com/basecs)'s amazing posts that explore computer science basics!)
</section>

## The DOM Tree

So how is the DOM a tree?

Consider the following code:

```html
<html>
  <head>
    <title>I'm a tree</title>
  </head>
  <body>
    <h1>The DOM is a tree!</h1>
    <p>Pretty fancy, huh? It has:</p>
    <ul>
      <li>nodes, including a root node</li>
      <li>parents</li>
      <li>children</li>
      <li>siblings</li>
    </ul>
  </body>
</html>
```

<section class="call-to-action">
### Try It Out

In your notebook, draw out this HTML as a tree! AKA as a series of connected nodes.

- What's the root node?
- What are its children?
- What are the children's children?
- Which elements are siblings?
</section>

### Node relationships

DOM tree nodes is that some of them "know" about others, but not every node knows about every other node. Whoa, hang on, what does that even mean?

Parents know about their children. Children know about their parent. Siblings don't know about each other directly.

Look at the DOM tree we created out of the code from above.

If there is a line between two nodes, then the nodes can access information about each other directly.

<section class="call-to-action">
### Try It Out

In the browser console, create a variable `firstSection` whose value is the first `section` element (hint: use `document.querySelector`). 

Then, inspect the children of that element! `firstSection.childNodes`

What do you see? How many children are there? How do the children seem to be stored? Can you access just one of them?
</section>

## Summary

So while the DOM is an interface that allows us to use JavaScript to interact with our HTML, the DOM itself is a series of inter-connected `nodes` of data.

Each HTML element is represented as a `node` - that is, an object which knows about its parents and children, and which contains other vital information (`innerText`, `innerHTML`, other attributes/properties).

Each `node` is connected to its parents and children in a tree structure.

### Why are we talking about this?

Having a birds-eye view of the DOM will help us understand the way our elements are related to each other. This in turn will help us when we start talking (in future lessons) about "event bubbling" and "event delegation" - two concepts which will be critical as you begin to build out more complex applications.

This is one of those cases of "start getting a broad understanding of a concept so that future concepts will make more sense". The benefit will be delayed, but it is worth it, I promise!
