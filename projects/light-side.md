---
title: Light Side
module: 3
tags: react, javascript, api
---

## Introduction

For this project, we are going to work on developing some muscle memory building out React components. At this point you've built at least one basic React app in the past. Now's the time to leverage that and add some complexity.  

For this project, we will be hitting [The Star Wars API](https://swapi.co/documentation) to tap into a "black hole" of Star Wars data. Mwahaha.  

## Prep Work

You will be expected to use a modular structure for this application. Before you begin coding, read [this article](https://kentcdodds.com/blog/colocation) which discusses why modular architecture is a good idea.   

Using a "Modular Structure" means that all of the files associated with a given component should be nested within the same folder.  

For example:  
```js
src/
  components/
    Button/
      Button.js
      Button.scss
      Button.spec.js
    Card/
      Card.js
      Card.scss
      Card.spec.js
```

## Project Goals & Requirements:

1. Learn how to wireframe and know why it is important.
2. Write **squeaky clean**, well refactored code using ES6 & ES7 syntax.  
3. Make informed design decisions to create a user-friendly application.  
4. Keep state based components to a minimum and leverage more functional components.  
5. Use a modular architecture for your application file structure.  
6. Think deeply about React Lifecycle Methods.  
7. Understand and utilize React Router to effectively display data.
8. Use `propTypes` for every component receiving props.  

### Important Notes  

- The API we are using is completely unsecured. This means we will be making all requests for this particular project directly from our browser. We will not be sending any advanced communication from a local server.  
- Although there are many resources out there for making API calls, you are asked to exclusively use the native [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API for this project. 

## Specifications

### Iteration O: Wireframing

- Utilize a wireframing tool of your choice to plan the design of your application before you start building.
  * Sketch
  * Draw.io
  * Balsamiq
  * Adobe XD CC 
  * InVision

### Iteration 1: Landing Page

- When the app starts up on the root index `/`,  the user should see the opening `scrolling text` of a random film, with the title of the film and release year listed below.  
- There should be buttons to browse three different categories: People, Planets, and Vehicles.  
- There should be a button to view favorites, with the number of current favorites indicated.  

![Landing Page](http://i.imgur.com/opKLFZ8.png)

### Iteration 2: Get People

- When a user clicks on `People`, it should redirect the user to `/people` where the page is populated with cards with data for each person.
- The cards should have:  
  - Name  
  - Birth Year  
  - Gender
  - Height  
  - Eye Color
  - A button to "Favorite" the person  

- The button should have an `active` class indicating it has been pressed.  

![People](http://i.imgur.com/7bKxgS5.png)  

### Iteration 3: Get Planets/Vehicles
- When a user clicks on any of the other buttons, the page should redirect the user to either `/planets` or `/vehicles` with its respective data depending on which button was pressed.  

- Planet Cards:  
  - Name  
  - Terrain  
  - Diameter  
  - Population  
  - A button to "Favorite" the planet  

- Vehicle Cards:  
  - Name  
  - Model  
  - Class  
  - Number of Passengers 
  - A button to "Favorite" the vehicle 
  
### Iteration 4: Favorites

- There should be a button on each card to save it to Favorites.  

![Favorite Button](http://i.imgur.com/iTGJNu5.png)  

- There should also be a button that when clicked, displays only the favorited cards. 
- This button should also show the count of favorited items in the button text.

![Favorites Page](http://i.imgur.com/AVPEopf.png)  

- Users should be able to unfavorite a card.  
- If there are no favorites, there should be a message indicating that there are no favorites.

## Extensions (DO THESE IN ORDER)

1. Get more exciting data on our People and Planet cards!

- People Cards:
  - Homeworld
  - Species  
  - Population of Homeworld 

- Planet Cards:
  - Population  
  - Climate  
  - Residents  

2. Implement a `More` button. When clicked, the next 10 items of that category should be shown. There should be a `Back` button to go back to the previous page.  
3. Have your data persist in `localStorage`. Think about when you want to store it.

## Rubric 

### Specification Adherence

* 4 - All requirements from 3 are met. The application completes all iterations above and implements one or more of the extensions. And the evaluator has no recommendations for design changes.
* 3 - The application completes all iterations above without error. Evaluator has minimal recommendations for design changes.
* 2 - The application is in a usable state, but is missing part of one or more of the features outlined above. Evaluator has multiple recommendations for design changes.
* 1 - The application is missing multiple features outlined above. Developer did minimal to no CSS for this project.
  
  [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)

### Project Professionalism

* 4 - All requirements from 3 met, codebase has zero linter errors/warnings and readme contains screenshots of application. Project team uses a rebase workflow, taking advantage of github issues to track work. Project shows a complete mastery of React architecture.
* 3 - PropType functionality is complete, the codebase has less than 5 linter errors, README has been updated with all group members. Project utilized wireframes from the outset. All git commits are atomic, made first to branches, and use descriptive and concise commit messages. Project demonstrates a fundamental understanding of React architecture.
* 2 - Project is missing PropTypes, README updates, wireframes, or has more than 5 linter errors. Project team makes large infrequent git commits. Project shows a basic understanding of React.
* 1 - PropTypes are substantially unused, README is incomplete, wireframes were not used, or more than 10 linter errors are present. Git history does not show evolution of project, with many large and inconsistent commits. Project shows little understanding of React and significant refactoring is required.

### Testing

* 4 - All requirements from 3 met, all async functionality is tested, tests are passing and run efficiently (using mount only when appropriate).
* 3 - All requirements from 2 are met and a valid attempt to test asynchronous functionality has been made.
* 2 - Nearly all unit tests are in place. No attempt to test async functionality was made.
* 1 - A valid attempt to test this application was made, but there are obvious gaps, with missing unit tests.

### Routing

* 4 - All requirements from 3 met, and always chooses the correct component for rendering, as well as the correct Route API. Application should account for undefined routes.
* 3 - Application uses React Router to display appropriate components based on URL.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.
* 1 - Application uses React Router, but does not render/use all routes.

