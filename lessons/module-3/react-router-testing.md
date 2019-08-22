---
title: React Router Testing
module: 3
tags: testing, react, router
---

## Overview

In this exercise, you will utilize blog posts and documentation to learn how to test an application using React Router.

## What to Test?

React Router enables your application to have multiple pages (URLs). Instead of everything in your application displayed on `localhost:3000/`, you can have pages like `localhost:3000/photos` or `localhost:3000/users`. At a high level, React Router selectively renders components based on the URL in the browser.

Based on this, we want to make sure that: given a URL, the correct components are rendered. Similarly, given a URL, we want to make sure that components we do not expect to be rendered are _not_ rendered.

## Research

When you are on the job, there won't be any lesson plans or senior engineers to walk you through a concept from start to finish. Fortunately, you'll have a lot of resources out there to learn new concepts like blog posts, videos, and documentation.

<section class="call-to-action">
### Reading

Read these blog posts and documentation pages, and take notes as you read through them:

* [Testing routes (react router dom) in react using jest](https://techdoma.in/testing-routes-react-router-dom-in-react-using-jest-2/){:target="_blank"}
* [React Training - React Router Testing](https://reacttraining.com/react-router/web/guides/testing){:target="_blank"}
* [Testing React Router apps with Jest and Enzyme](https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303){:target="_blank"} **Note:** If you have `<Router>` in the `index.js` file surrounding `<App>` like [this lesson](../module-3/react-router-v4.html) shows, then you do not have to worry about mocking the Browser Router as is noted in this blog post.
* [MemoryRouter Documentation](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md){:target="_blank"}

From the reading, if you had to tell someone what a `<MemoryRouter>` is, what would you tell them? Why do we need it for testing?
</section>

## Implementation

Test the routes of React Router lesson.

## Deliverables

The tests from the lesson.

Work with your project partners to add at least one route to your current project, and test that the routing is working.

Send links to the code files on GitHub for the lesson and for your project.
