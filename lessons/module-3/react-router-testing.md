---
title: React Router Testing
module: 3
tags: testing, react, router
---

## Overview

In this exercise, you will utilize blog posts and documentation to learn how to test an application that uses React Router.

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
* [Testing React Router apps with Jest and Enzyme](https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303){:target="_blank"} **Note:** If you have `<Router>` in the `index.js` file surrounding `<App>` like [this lesson](../module-3/react-router-v4.html){:target="_blank"} shows, then you do not have to worry about mocking the Browser Router as is noted in this blog post.
* [MemoryRouter Documentation](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md){:target="_blank"}

From the reading, if you had to tell someone what a `<MemoryRouter>` is, what would you tell them? Why do we need it for testing? What is the difference between Enzyme's `shallow` and `mount` methods?
</section>

## Implementation

Test the routes in the application you created during the [React Router lesson](../module-3/react-router-v4.html){:target="_blank"}.

* You can use your `App.test.js` file to house tests for routing.
* Create a `describe` block in your `App.test.js` file, and give it a name of "Routes" or something similarly meaningful
* Within the `describe` block, create `it` blocks to test each routing possibility
* Go forth and test the routing!

<section class="checks-for-understanding">
### Deliverables

1. Submit a link to the JS file on GitHub containing the tests from the React Router lesson.
1. Work with your project partners to add at least one route to your current project, and test that the routing is working. Submit a link to the code file on GitHub containing your project's routing tests.

Submit the links here: [submission gist](https://gist.github.com/robbiejaeger/816c31fbdb01aef8467908378b214f80){:target="_blank"}
</section>
