---
title: Walker Texas Rangerbox
module: 3
tags: react, javascript, api
---

## Introduction

For this project, we are going to dive deep into the realm of React components. At this point many of you have had significant exposure building React apps, and it's time to leverage that during this first week.  

For this project, we will be hitting [The Internet Chuck Norris Database](http://www.icndb.com/api/) to access a collection of Chuck Norris jokes with questionable humor. You're welcome.   

## Prep Work

[Read This First](https://medium.com/@kentcdodds/what-code-comments-can-teach-us-about-scaling-a-codebase-90bbfad8d70d#.yno9hmf22) (7 min)  - This is an article discussing why modular architecture is a good idea.

## Project Goals & Requirements:

1. Get comfortable whipping together React components on your own and implementing React Router.
2. Write **squeaky clean**, well refactored code using **exclusively** ES6 syntax.
3. Match the given comps for styling - [style guide info can be found here](#style-guide).
4. Make informed decisions between creating functional vs class based React components.
5. Use a modular architecture for your application file structure.
6. Think deeply about React Lifecycle Methods.  
6. Use `propTypes` for every component receiving props.  

### Important Notes  

- The API we are using is completely unsecured. This means we will be making all requests for this particular project directly from our browser. We will not be sending any advanced communication from a local server.  
- Although there are many resources out there for making API calls, you are asked to use exclusively the native `fetch()` API for this project. That being said, you are **highly** encouraged to experiment with `axios` and any other fun libraries you wish for comparison purposes.  
- The data does not need to persist. Feel free to implement Firebase or localStorage if you are so moved.

## Specifications

### Iteration 0: View Random Joke

- When visiting `'/'` the app displays a random joke.

![Landing Page](http://i.imgur.com/XqDYLbG.png)

### Iteration 1: Get Jokes

- There is an input field to set the number of jokes you want returned. When a user clicks on `Get Jokes`, a request is made that returns the specified number of jokes on the page, and the path is `'/jokes'`.  

- Each joke displays the joke text (with clean data - aka no `&quot;` messes). The jokes automatically spread themselves out evenly based on the number of jokes requested.

![Get Jokes](http://i.imgur.com/7nIBMCB.png)

### Iteration 2: Settings

- There is a `Settings` button, that when clicked displays a configuration page and the path is `'/settings'`. The user no longer sees the buttons or list of jokes when on the settings page (*comp 3*).  

- On the settings page, there should be a field to change the name `Chuck Norris`.

- There should also be a `Parental Controls` radio button that sets the jokes to be either kid-friendly, or general audience.   

![Settings](http://i.imgur.com/SFpVmjT.png)

### Iteration 3: Starred Jokes

- There should be a button to show "Favorites". When clicked, the path is `'/favorites'` and the user sees their starred jokes.

- If there are no favorites, there should be a message indicating that there are no favorites.

- Each joke has a star icon that when clicked changes colors.

- When a joke is "starred" it gets moved to "Favorite Jokes".

## Extensions

- `Parental Controls` buttons look like a [toggle slider](http://www.w3schools.com/howto/howto_css_switch.asp)

- Data persists using Firebase, localStorage, or the database of your choice.

- Walker Texas Ranger Chuck Norris gifs with sound happen occasionally (this will mean bonus cool points.)  

### Style Guide

![Annotated Style Guide](http://i.imgur.com/f0zyVOA.png)

## Rubric

### Specification Adherence
- 4 - The application completes all 3 iterations above and implements one or more of the extensions.
- 3 - The application completes all 3 iterations.
- 2 - The application is in a usable state, but is missing 1 of the features outlined in the specification above.
- 1 - The application is missing multiple features essential to having a complete application.
- 0 - The application is unusable.

### Code Quality
- 4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
- 3 - Developer appears comfortable in React demonstrated gaps in knowledge of how the tools should be used and/or the app contains unrefactored code.
- 2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
- 1 - Developer did not make any effort to use React effectively or refactor code.

### Design
- 4 - Developer aligned design completely with provided comps. Zero major changes requested by evaluator.
- 3 - Developer made a strong effort to match provided comps, some changes requested by evaluator.
- 2 - Developer made a minimal attempt to style application to match provided comps. .
- 1 - There was no attempt to style this application as specified.

### Testing
- 4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
- 3 - Almost all components are tested to a level that indicates developer has an understanding of testing
- 2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
- 1 - There was little to no attempt to test this application.
