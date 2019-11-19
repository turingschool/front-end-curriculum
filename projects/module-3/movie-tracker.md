---
title: Movie Tracker
module: 3
tags: react, redux, testing, javascript, api
---

## Introduction

Ever been curious about what movies are currently out in theaters and wish you could get more info about them?  Welcome to Movie Tracker where you will be building out an application that allows a user to sign in, see the latest movies, and favorite them for later.  

As a result of building out this project, you are going to be developing some muscle memory building out applications with Redux. You will also be getting much more practice doing network requests with a backend. 

## Learning Goals

1. Write **squeaky clean**, well refactored code using ES6 syntax.  
2. Make informed design decisions to create a user-friendly application.  
3. Become comfortable with different network requests like `GET`, `POST`, & `DELETE`. 
4. Solidify concepts with React to create clean and re-useable components.
5. Become comfortable with Redux's lifecycle, creating actions, reducers, and connecting them to React components.  
6. Understand and solidify concepts with React component, asynchronous code, and Redux testing.

## Project Setup

This project is working off the [The Movie DB API](https://www.themoviedb.org/documentation/api){:target="_blank"} - note you'll need to go create an account to get an API key.

[This repository](https://github.com/turingschool-examples/favorites-tracker-api){:target="_blank"} will serve as your backend, allowing you to connect to a PostgreSQL database. You'll need to set up a separate client-side application (use `create-react-app`), to sit alongside this one. Do not put that project in the same repository as this one, save yourself a headache.

Follow the instructions in the backend repo for setup. Everyone in your group will have to setup the backend separately on their own machines. Once you have it setup, practice using the endpoints (routes) listed in the README of the backend repo. *The documentation for the endpoints is in the README for the backend repo.*

You will be using the fetch API to make all your API calls. If you are making a post request, note that you will need to pass in an options object with a method and headers - with a `'Content-Type': 'application/json'`. Additionally you will need to pass any required fields into the body. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for additional info.

### Deliverables 
Please DM your instructors the following by the end of the first day:
  * Wireframes
  * DTR between you & project partner
  * Project management tool (GH Projects, trello, etc.)

### Iterations

##### Iteration 0: Pull in movie API
  * Pull most recent movies from MovieDB API.
  * Display each movie on root index `/`

##### Iteration 1: Sign In / Sign Out Functionality
  * Be able to sign in on page `/login` and redirect user to `/`
    * Flash "Email and Password do not match" - if password is incorrect
  * Ability to create a user.
    * Flash "Email has already been used" - if email has been taken
  * The user has the ability to sign out. 
  
##### Iteration 2: Favorites and Showing Details
  * Each movie should be displayed with a favorite button.
  * If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
  * Validate favorites before adding to db. Aka does that user already have the movie stored as favorites. There should be no duplicates. 
  * If the user visits `/favorites` they should see a list of all their favorite movies.
  * The user should be able to delete favorites from `/favorites` or `/`.
  * Favorite movies should have a visual indication on `/`.
  * A user can click and view any individual movie. The url for each individual movie page should be "/movies/:id"

##### Extensions:
  * A user stays signed in after refreshing the page. *Hint:* You will probably use localStorage. 
  * Should only take real email addresses *Hint:* Look into regular expressions
  * Convert your project to use [typescript](https://www.typescriptlang.org/)
  
----------------------------------------------------------

## Rubric 

### Specification Adherence

* 1 - The application is missing multiple features outlined above and in it's current state is non-functioning. Developer did minimal to no CSS for this project.
* 2 - The application is in a usable state, but is missing part of one or more of the features outlined above. There are one or more major bugs and the evaluator has multiple recommendations for design changes.
* 3 - The application completes all iterations above without error. Evaluator has minimal recommendations for design changes.
* 4 - The application completes all iterations above and implements one or more of the extensions.  The evaluator has no recommendations for design changes.

### Project Professionalism

* 1 - Either the README is incomplete, wireframes are not used, no project management system was utilized, or more than 10 linter errors are present. Git history does not show evolution of project with many large and inconsistent commits. 
* 2 -  README has been updated but is missing group members, setup, tech used, application images, or etc.  Wireframes are included and a project management tool was started, but are not utilized throughout the entire project. Project has more than 5 linter errors. Project team makes large infrequent git commits. 
* 3 - The codebase has less than 5 linter errors and README has been updated with all group members. Project utilized wireframes from the outset and updated them as changes were made. A project management tool was continuously used from the beginning of the project.  All git commits are atomic, made first to branches, and use descriptive and concise commit messages. 
* 4 - Codebase has zero linter errors/warnings and README is well documented with images of different pages, setup, purpose of application, and group members. Project team uses a rebase workflow, taking advantage of GitHub issues to track work.

### React Architecture

* 1 - PropTypes are substantially unused. Project shows little understanding of React and significant refactoring is required including but not limited to component structure, knowing when to use class vs functional components, mutation of props, or etc.  Unnecessary data is being passed down to child components through props. File structure is not modular.
* 2 - PropType functionality is complete.  There are no unnecessary props being passed down to child components.  However, there are still methods that are being created inside of functional components instead of being passed down through props from a class component.  File structure is modular but API calls have not been broken out into a separate file.  
* 3 - React architecture is clean and organized.  Logic is kept out of return statements.  There are some issues with the asynchronous js where the frontend is not matching with the backend.  There are multiple functions (including fetch calls) that are doing similar pieces of functionality that could continue to be refactored. Data fetched from API is not cleaned before being set to state.
* 4 - Functions including fetch calls have been refactored to be reusable for multiple queries.  Frontend data always matches the backend data.  Data fetched from API is run through a cleaning function (which lives in a separate file).  Implements excellent error handling if server is down or fetch fails.  This includes loading images as well as error messages on the frontend.

### Redux Architecture

* 1 - Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of class vs. functional.
* 2 - At least one component is not connected with Redux appropriately. Application state is mutated by more than just Redux. The Redux store is missing application data that it should be handling.
* 3 - Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary application data. All state changes are handled through Redux actions and reducers.
* 4 - All requirements from 3 met, and no duplication of data exists in the store. Data in the store remains flat (not nested).

### Testing

* 1 - A valid attempt to test this application was made, but there are obvious
  gaps with missing unit tests for Redux and React.  
* 2 - Nearly all unit tests are in place. React components are well tested with a diverse set of tests including but not limited to snapshot tests, event simulation tests, and tests on class methods. There are tests in place for actions, reducers, mapStateToProps, and mapDispatchToProps. No attempt to test async functionality was made.
* 3 - All Redux functionality is tested (actions, reducers, mapStateToProps, mapDispatchToProps), all components are unit tested, and a valid attempt was made to test any async functionality.
* 4 - All async functionality is tested. Asynchronous tests cover happy paths as well as multiple sad paths. All pieces of functionality have been tested and are passing and run efficiently (using mount only when appropriate). Evaluator has no recommendations for testing. (Try testing React Router.)

### Routing

* 1 - Application uses React Router, but does not render/use all routes according to spec. Application does not utilize built in React Router components and manipulates history instead.  UX is challenging and frustrating where multiple pages on the application are missing links to routes.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.  There are one or more issues with the UX and access to routes is either unclear or not full implemented on some pages.
* 3 - Application uses React Router to display appropriate components based on URL.  UX is clear and set up well so that user has access to previous routes.
* 4 - React Router components have been refactored for developer empathy and code quality is clean.  Application accounts for undefined routes. UX is excellent and set up well to have links to all routes on all pages.