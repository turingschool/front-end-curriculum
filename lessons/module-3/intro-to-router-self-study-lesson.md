---
title: React Router v6
length: 1.5 hours
tags: React, Router
module: 3
---

# Intro to Router Self Study Prework Lesson
This self-study lesson requires you to work through the questions below using the React Router (v6) documentation and other resources.  This self study lesson is required prework prior to our live React Router lesson. 

## Instructions
1. Copy these questions to a gist, notion or other online document.
2. Go through the listed readings and answer associated questions.
3. Submit your completed document to your instructors via this [submission form.](https://forms.gle/Jwsu6SHCvYtK21N1A)

## Questions / Readings

### Router Overview
React Router is a library that allows us to make our single page React applications mimic the behavior of multipage apps.
It provides the ability to use browser history, allowing users to navigate with forward / back buttons and bookmark links to specific views of the app. Most modern sites use some form of routing. React Router exposes this functionality through a series of components. Let's start by looking at the overall structure of an app using router:

**Read through [this guide](https://reactrouter.com/en/main/start/overview).** 

#### Router Components
React Router provides a series of helpful components that allow our apps to use routing. These can be split into roughly 3 categories:  
- Routers
- Route Matcher
- Route Changers

#### Routers
Any code that uses a React-Router-provided component must be wrapped in a _router component_. There are lots of router components we can use, but we'll focus on one in particular. Let's look into the docs to learn more.

1. What is a `<BrowserRouter />`?

#### Route Matchers
2. What does the `<Route />` component do? 
3. What does the `<Routes />` component do?
4. What does the `<Outlet />` component do?

#### Route Changers
9. What does the `<Link />` component do? How does a user interact with it?
10. What does the `<NavLink />` component do? How does a user interact with it?