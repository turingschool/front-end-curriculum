---
title: What's Cookin'
tags: javascript, oop, mocha, testing, sass, fetch
---
## Goals and Objectives

- Implement ES6 classes that communicate to each other as needed
- **Use object and array prototype methods to perform data manipulation**
- Create a user interface that is easy to use and displays information in a clear way **on multiple screens**
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Make network requests to API endpoints to retrieve and manipulate data

In this project, you will be creating a recipe tracking / meal planning application that allows users to view their favorite recipes and plan shopping trips around them. The idea is similar to sites like [All Recipes](https://www.allrecipes.com/){:target='blank'} or [New York Times Cooking](https://cooking.nytimes.com/){:target='blank'}. Users should be able to view a list of recipes, favorite their own recipes, and choose recipes to cook.

## New Technologies
- Fetch
- [Webpack](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'}

<section class="note">
### Note

Feel free to use the above sites as inspiration for your UI, but note that there is NO COMP provided for this project. We expect you to design your own dashboard layout that is relevant to the data being displayed.

**You must pull 3 inspirations from 3 different apps that you want to implement in your application**
* Be specific about what piece you are trying to re-create
* This may include how elements are organized from desktop to mobile views
* You may also pull inspirations from other sites such as [Dribbble](https://dribbble.com/){:target='blank'}
</section>

---

## Timeline
Dates and deadlines to be aware of:

* **Monday, May 17th** - Submit the following to your PM BEFORE beginning to write code via Slack:
1. DTR (be specific about learning goals, schedules, and communication expectations )
1. Project board (this should be kept updated throughout the project and will be reviewed by PM in check ins)
1. Planned out class structure
1. Wireframes
1. 3 design inspirations (Please include links and details on what you're trying to re-create)

* **Tuesday, May 25th** - Project due at 9PM.
* **Wednesday, May 26th** - Project demos due at 1PM.

Please submit your finished projects [here](https://forms.gle/dTjaDmgDog9U8dGn6){:target='blank'}

---

### Working with Webpack
This project is set up to use [Webpack](https://webpack.js.org/guides/getting-started/){:target='blank'}, a module bundler. It will take whatever code we write, and bundle it into a series of more efficient files that the browser can read (allowing us to use things like Sass, npm packages and ES6 `import` / `export` syntax).

This [video](https://www.youtube.com/watch?v=GU-2T7k9NfI){:target='blank'} provides a nice overview of some things webpack lets us do out of the box, most of which is set up for you already.

This [article](https://survivejs.com/webpack/what-is-webpack/){:target='blank'} provides some more detail into how Webpack works, and what the `webpack.config.js` file is doing (**don't mess with this file unless you're sure you need to -- feel free to ask before you change things**).


<section class="answer">
### Notes on Webpack

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'} is a great place to start). But there are a few things that you should know when starting to work with it:

1. You need to use [`import` / `export`](https://www.youtube.com/watch?v=_3oSWwapPKQ){:target='blank'} syntax
  - Note: This video goes into Babel and Rollup. Webpack handles the transpiling of our ESModules code into something the browser can read.

2. Webpack needs to know where to look for your files. Look [here](https://github.com/turingschool-examples/webpack-starter-kit#where-to-add-your-code){:target='blank'} for a description of where webpack is set up to look for your HTML, CSS, JS and image files. Some general points:
  - You need to import images into the entrypoint file (usually `scripts.js` or `index.js`).
  - You need to `import` your CSS files into the entrypoint file too
  - Make sure HTML, JS and CSS files are all in the `/src` directory
  - You have to `import` any required modules and code for tests into your test files


3. While developing, run `npm start`. Webpack will create a live version of your site on a local server, where you can see your changes happen in real time. To access it, in your browser, navigate to the `localhost` address that your terminal gives you. Be aware, if you write a breaking change, your server may crash. The terminal will give you some error report about why the crash happened.


4. Don't worry about running `npm build` until you are [ready to deploy your site](https://github.com/turingschool-examples/webpack-starter-kit#deploying-to-github-pages){:target='blank'}
</section>

---

## Requirements

### Initial Setup

For this project, you will need to use this [What's Cookin Starter Kit](https://github.com/turingschool-examples/whats-cookin-starter-kit){:target='blank'} repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up, follow the instructions to verify it is setup correctly.

### Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/){:target='blank'} and [chai](https://www.chaijs.com/){:target='blank'} documentation pages.


## Project Iterations
Each iteration has a "Data" section and "User Stories" section. Data deals with using the data to calculate something meaningful for the user. The user stories section deals with what to display on the page and what the user flow looks like. Unlike your week-1 project, the classes and method names are not completely drawn out for you.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on class structure and the calculation methods, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

<section class="note">
### 3rd Party Libraries

You may choose **ONE** of the following 3rd party libraries to incorporate into your app as an extension if interested.  Your group may want to do a research spike over the first weekend to see what your team would like to experiment with.  Please get instructor approval first before choosing to use additional 3rd-party libraries.  

* [Micromodal](https://www.npmjs.com/package/micromodal){:target='blank'}
* [GlideJS](https://www.npmjs.com/package/@glidejs/glide){:target='blank'}
* [InteractJS](https://interactjs.io/){:target='blank'}
</section>

---

### Iteration 1 - Get Familiar with the Data and Recipes

Checkout the `data` directory and explore the data. Get a sense of what each property is and what the data nesting is like.

Once you have looked over each data file, start with the `recipes.js` data file.


#### Recipe Data

A `RecipeRepository` should hold onto all `Recipe` objects.  
- It should have a parameter to take in recipe `data`.
- It should have methods to determine:
  * A filtered list of recipes based on one or more tags.
  * A filtered list of recipes based on its name or ingredients.


A `Recipe` represents one recipe object.
- It should hold on to all its information (provided in the data file).
- It should have methods to:
  - Determine the names of ingredients needed
  - Get the cost of its ingredients
  - Return its directions / instructions

<section class="note">
### Calculating the cost of a Recipe

To calculate the cost of a recipe, you will need to factor in the amount listed in the recipe.  The price (`estimatedCostInCents`) of an ingredient is per `unit`.  

For example, if flour is marked as 100 cents, and the recipe calls for 1.5 cups, then it would cost 150 cents.  Similarly, if a tomato is $2, and the recipe requires 2 tomatoes, then the cost would be $4.
</section>

<section class="note">
### Hint

You may find it helpful to have an `Ingredient` class as well as you build your your recipes.  A common theme when dealing with data is not to manipulate the original data, but to create copies / instances to work with.
</section>

#### User Stories

Use the `scripts.js` file to add information to the DOM. This JS file should call methods from your classes to retrieve information. There should not be any DOM manipulation within your class files.

- As a user, I should be able to view a list of all recipes.
- As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
- As a user, I should be able to filter recipes by multiple tags.
- As a user, I should be able to search recipes by their name or ingredients.

---

### Iteration 2 - Users

#### User Data

Create classes and methods that can:
- Allow a user to favorite or unfavorite recipes (add to / remove from the user's `favoriteRecipes`)
- Decide to cook a recipe that week (add to my `recipesToCook`)
- Filter my `favoriteRecipes` by one or more tags.
- Filter my `favoriteRecipes` by its name or ingredients.

#### User Stories

*On load, a user should be chosen at random.*

* As a user, I should be able to favorite / unfavorite recipes that I like and can easily find again.
* As a user, I should be able to filter my favorited recipes by one or more tags.
* As a user, I should be able to search my favorited recipes by its name or ingredients.
* As a user, I should be able to add a recipe to a list of recipes to cook.

---

### Iteration 3 - Fetch Calls

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool/What-s-cookin--starter-kit-API){:target='blank'}.  You will need to clone this down and have it running in a separate tab in your terminal each time you run your client.  Here are the endpoints setup for this project:

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all users |`http://localhost:3001/api/v1/users`| GET  | none | An array containing all users |
|Get all ingredients |`http://localhost:3001/api/v1/ingredients` | GET | none | An array containing all ingredients |
|Get all recipes | `http://localhost:3001/api/v1/recipes` | GET | none | An array containing all recipes |

Once you've got fetch working on all three arrays, you can delete your hardcoded data file!

### Iteration 4 - Pantries

#### Pantry Data
Create classes and methods that can:
- Determine whether a user's pantry has enough ingredients to cook a given meal.
- Determine the amount of missing ingredients still needed to cook a given meal, based on what's in the user's pantry.

#### User Stories
- As a user, I should be able to view what ingredients exist inside of my pantry.
- As a user, I should be able to check my list of recipes to cook and see if my pantry has enough ingredients to cook a meal.
- As a user, I should be told what ingredients are still needed if I don't have enough ingredients in my pantry to cook the recipe.

---

### Extensions
_Choose at least one_
* Implement one of the listed 3rd party libraries or one of your choosing with instructor approval.
* Favoriting recipes is nice, but implementing a rating system would be even more helpful for a user!  This could include a 5 star rating system, a way to leave reviews, etc!
* You may also collaborate with instructors to personalize an extension for this project.

---

### Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.

You are *expected* to test:

* All class properties
* All class methods and updates to their properties
* Any helper methods you build out

You are *not expected* to test:

* DOM manipulation / DOM manipulating methods (like `document.querySelector(...)`)
* Fetch calls

---

## Rubric

### Functional Expectations
* 4: Application fulfills all requirements *as well as* an extension and/or iteration 4.
* 3: Application fulfills all requirements of iteration 3.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style / OOP / Fetch
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application is expertly divided into logical components each with a clean, single responsibility.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. Application is effectively broken into logical components, but violate the principle of SRP.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring. Divisions of logic into classes are inconsistent or unclear.
* 1: Application generates syntax error or crashes during execution. Application logic shows poor decomposition with too much logic mashed together.

### Test-Driven Development
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements.
* 1: Application does not demonstrate strong use of TDD.

### User Interface
* 4: The application can stand on its own to be used by an instructor without guidance from a developer on the team. The application is fully responsive and the UI does not detract from the UX.  In addition, the application has clearly had special consideration around usability on devices.
* 3: The application has many strong displays/interactions, but a few holes in lesser-used displays.  The application is fully responsive and the UI does not detract from the UX.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.  Application is not responsive on other devices.
* 1: The application is confusing or difficult to use.

------------------------------------------------------------------

### Minimum Professionalism Expectations
  * Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  * Developer uses PRs from feature branches before adding new code to the main branch.
  * The README is formatted well and contains:
      * Overview of project and goals
      * Overview of technologies used, your code architecture, challenges, wins, and any other reflections
      * Screenshots/gifs of your app
