---
title: Redux: When and Why
length: 1 hour
tags: redux, react, state
---

### Goals

By the end of this lesson, you will:

* Know when your application actually needs redux
* Understand why it might be a better alternative than plain React

## Redux: When and Why?

At this point, we've worked with Redux and we're familiar with some of the syntax and setup required to wire it into a React application. But the only way to get the most out of a library is to understand **when** to use it, and **why** you're doing so.

If you still wouldn't feel comfortable answering these two questions, it's likely because you haven't yet built an app without Redux that desperately needed it. Often times, you won't truly understand the need for a library until you try to build something without it that simply doesn't work.

### A Case Study
For example, let's say we have an e-commerce clothing website. We navigate immediately to the clearance section, because everything on here is a ripoff, and we see the basic layout of our browsing experience: a sidebar for filtering/sorting, a main content area with product previews that match our filters, and a top navigation bar showing our current place within the site:

![ecommerce][ecommerce-site]

So this page might be made up of 3 container components:

* `sidebarFiltersContainer`
* `productPreviewsContainer`
* `breadcrumbsContainer`

#### React-only Strategy
If we were to build this with just React, each component would need to know exactly what category of clothing we were browsing *(Clearance > Dresses)* and our `sidebarFiltersContainer` and `productPreviewsContainer` would also need to know what filters we selected *(Size 4 > Color: Black)*.

If we were to build this with just React, the only way we could share the same information across all three of these components would be to create **another** container component that stored all of that data in its state. It would have to wrap all three of our components and pass down the necessary data to each of them.

And what happens when we decide to change our filters? If we want to look at red sweaters instead, now we have to pass that data back up to the mega-container component, just to pass it right back down again, updating each of the child components. 

Additionally, our state can change from any three of these components. We can update the filters from the sidebar, we can update the clothing category by clicking on the breadcrumb links (e.g. if our breadcrumb links show *Women's > Clothing > Dresses* we could click on *Clothing*, effectively removing the *Dresses* category from our search), and we can click on a product preview to completely change our route and display the full product details, making most of the state we just stored in our mega-container irrelevant.

**This is a good time to use Redux.**

[ecommerce-site]: /assets/images/lessons/redux-when-why/e-commerce.png

#### React & Redux Strategy
As we've learned, Redux is intended to manage state and only state. 

**State** is the application data that influences how the application is rendered. (e.g. if the state says we are filtering by dresses, our application should only render dresses.) **State** can be updated through user interactions (e.g. if we click on the 'Sweaters' filter, our state should update itself to reflect that we are now browsing sweaters instead of dresses, and update the UI accordingly).

**Managing state** is all about storing and updating the application data, and making it accessible throughout the application.

**WHEN** *our application has to manage a significant amount of application data, and share it across multiple components, we want to use Redux.*

In our e-commerce example, using Redux, we could save all of our application data in a Redux store that's available to us in any `connected` component, and updated solely through the use of actions and reducers

**WHY** is this a better alternative than our React-only solution? It gives us the following benefits:

* We have a single and explicit high-level place to store all of our application data, without having to create an arbitrary mega-container component to hold it.
* Anything we save in our Redux store is going to be accessible wherever we decide we need it.
* We do not have to pass data up and down between child components and their mega-container parents to update the state and what's rendered.
* We can re-use Redux actions and reducers in multiple components that provide similar interactions and have a similar effect on the data store.


## Tips
* Try building your app in just React first. If you run into problems accurately managing your state or sharing data across components, that's a good sign you need Redux
* When you start using Redux, only add a little information to the store at a time. What do you really need in that data store? (Likely something that needs to be available across multiple components).

## Resources
* [Redux Motivation](http://redux.js.org/docs/introduction/Motivation.html)
* [Why You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.19nfi6djh) - read the comments as well