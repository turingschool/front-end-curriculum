---
title: How to build a state tree AKA wtf is: (Redux/Flux/Vuex)
---

### Author

Regis Jean-Pierre Boudinot (selfup)

Frontend Engineer at Gitlab

### Goals

By the end of this lesson, you will know/be able to:

* Understand what a state tree is
* Better reasoning about Redux/Flux/Vuex internals
* Understand the difference between Redux and React-Redux (VERY IMPORTANT)

#### Hook: <5 min


* Captures student interest. *What is a state tree, and why do you need it*
* Why is this lesson important? *It will help you understand concepts that will get you a job*
* Things I will not do: Explain how to use Redux. That is something the dev must learn on their own time.
* Examples: demonstration, story, problem to solve

  1. Built my own because I didn't understand Redux. Now I get it!
  1. Building a State Tree for GitLab because most of them are overly complex
  1. Makes testing MUCH EASIER because unit testing Frontend is hard

#### Opening: 1-2 min


* What will students know or be able to do by the end of the class? What are the goals?

  They will understand that redux itself is not that complex.
  It has just evolved into a complex entity throughout it's development
  KISS (Keep it simple silly)
  They will be able to create their own State Trees and know how to make a custom one in their own React app


#### Guided Practice (We do)


* Live code with a base repo everyone clones down.
* Explain every step.
* Finish live coding vanilla state tree.

### Then


* Live code with a react repo (since this is the only well known Stateful View Layer by Mod 3/4)
* How to make a redux-like component
* How to make a provider (same thing really)
* How to inject props into children (hardest part)
* How to use custom provider

#### The Closing: ~5 min


* Open up for more questions (many will be asked during the live coding)

### Possible questions and/or misunderstandings


* What questions might students ask during class, and how will you respond?

  1. What is immutability? *I will wing this one*
  1. Why do we need an external store? *Wingin' it*
  1. What is functional programming?  *Easy to explain once we build user defined actions*
  1. What is `Object.assign`? *Merging objects - will use Chrome Console*
  1. What is the spread operator? *cloning and other features - will use Chrome Console*
  1. Why is Redux different from React-Redux? *how to force a render and inject props*
  1. What is prop injection? *this should be simple, but you never know*


* What concepts might students misunderstand, and why?

  1. The difference between Vanilla JS State Trees and State Trees for View layers/frameworks
  1. Functional Programming
  1. One way data flow
  1. Immutability

### Repositories


* [what-is-a-state-tree](https://github.com/selfup/what-is-a-state-tree)

  1. clone it
  1. Code along!
  1. The goal will be to replicate: [StoreLab](https://github.com/selfup/StoreLab)
  1. Do not look at that code until we are done!


* [React-Store-Lab-Example](https://github.com/selfup/react-store-lab-example)

  1. clone it `git clone https://github.com/selfup/react-store-lab-example`
  1. `git checkout learn`
  1. `npm install && npm start`
  1. Suffer with me as I live code and try not to mess things up!
