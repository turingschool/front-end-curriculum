---
title: What's Cookin - Part one!
tags: javascript, oop, mocha, testing, fetch
---
## Goals and Objectives


- Implement ES6 classes that communicate to each other as needed
- **Use object and array prototype methods to perform data manipulation**
- Create a user interface that is easy to use and clearly displays information.
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- **Implement a robust testing suite using TDD**
- **Make network requests to retrieve data**

In this project, you will create a recipe tracking / meal planning application that allows users to view recipes they want to cook and plan shopping trips around them. The idea is similar to sites like [All Recipes](https://www.allrecipes.com/){:target='blank'} or [New York Times Cooking](https://cooking.nytimes.com/){:target='blank'}. Users should view a list of recipes and choose recipes to cook.

## New Technologies
- Fetch API
- [Webpack](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'}

<section class="note">

### Note	 
Feel free to use the above sites as inspiration for your UI, but note that there is *NO COMP* provided for this project. We expect you to design your own dashboard layout that is relevant to the data being displayed.

**You must pull 3 inspirations from 3 different apps that you want to implement in your application**
* Be specific about what piece you are trying to re-create
* You may also pull inspirations from other sites, such as [Dribbble](https://dribbble.com/){:target='blank'}
</section>

---

## Timeline
Dates and deadlines to be aware of:

* **By EOD Monday of Week 2** - Submit the following to your PM via Slack BEFORE beginning to write code:
1. DTR (be specific about learning goals, schedules, and communication expectations)
1. GitHub project board (this should be kept updated throughout the project and will be reviewed by PM in check-ins.
1. Wireframes (a rough sketch of your website for planning)
1. 3 design inspirations (Please include links and details on what you're trying to re-create).

* **Monday of Week 3** - Project due at 9PM.

Please submit your project [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'}

---

### Working with Webpack
This project is set up to use [Webpack](https://webpack.js.org/guides/getting-started/){:target='blank'}, a module bundler. It will take whatever code we write, and bundle it into a series of more efficient files that the browser can read (allowing us to use things like Sass, npm packages and ES6 `import` / `export` syntax).

This [video](https://www.youtube.com/watch?v=GU-2T7k9NfI){:target='blank'} provides a nice overview of some things webpack lets us do out of the box, most of which is set up for you already.

This [article](https://survivejs.com/webpack/what-is-webpack/){:target='blank'} provides some more detail into how Webpack works, and what the `webpack.config.js` file is doing (**don't mess with this file unless you're sure you need to -- feel free to ask before you change things**).


<section class="answer">

### Notes on Webpack

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'} is a great place to start). But there are a few things that you should know when starting to work with it:

1. You need to use [`import` / `export`](https://www.youtube.com/watch?v=_3oSWwapPKQ){:target='blank'} syntax
- Note: This video goes into Babel and Rollup. Webpack handles the transpiling of our ESModules code into something the browser can read.

2. Webpack needs to know where to look for your files. Look [here](https://github.com/turingschool-examples/webpack-starter-kit#where-to-add-your-code){:target='blank'} for a description of where webpack is set up to look for your HTML, CSS, JS and image files. Some general points:
- You need to import images into the entrypoint file (usually `scripts.js` or `index.js`).
- You need to `import` your CSS files into the entrypoint file too
- Make sure HTML, JS and CSS files are all in the `/src` directory
- You have to `import` any required modules and code for tests into your test files


3. While developing, run `npm start`. Webpack will create a live version of your site on a local server, where you can see your changes happen in real time. To access it, in your browser, navigate to the `localhost` address that your terminal gives you. Be aware, if you write a breaking change, your server may crash. The terminal will give you some error report about why the crash happened.
  - The command `control + c` is used to stop the local server.  Just closing the terminal without stopping the server first could mean things continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use.  

4. Don't worry about running `npm build` until you are [ready to deploy your site](https://github.com/turingschool-examples/webpack-starter-kit#deploying-to-github-pages){:target='blank'}

5. Do not run `npm audit fix --force`.  This will update to the latest version of packages.  We are not using the latest version of webpack (see starter-kit README for version) so updating to the latest version will cause problems.
</section>

---

## Requirements

### Initial Setup

For this project, you will need to use this [What's Cookin Starter Kit](https://github.com/turingschool-examples/whats-cookin-starter-kit){:target='blank'} repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up, follow the instructions to verify it is setup correctly.

### Testing Setup

There is some boilerplate for testing in the starter-kit repo. You will need to set up the rest of the tests yourself. If you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/){:target='blank'} and [chai](https://www.chaijs.com/){:target='blank'} documentation pages.


## Project Iterations
Each iteration has a "Data" section and "User Stories" section. Data deals with using the data to calculate something meaningful for the user. The user stories section deals with what to display on the page and what the user flow looks like. Unlike your week-1 project, the classes and method names are not completely drawn out for you.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on class structure and the calculation methods, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

<section class="note">
### 3rd Party Libraries

You may choose **ONE** of the following 3rd party libraries to incorporate into your app *as an extension* if interested. Your group may want to do a research spike over the first weekend to see what your team would like to experiment with. Please get instructor approval first before choosing to use additional 3rd-party libraries. **This is an extension and not required!**

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
  * A filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)
  * A filtered list of recipes based on its name. (Extension option: filtering by name or ingredients)

A `Recipe` represents one recipe object.
- It should hold on to all its information (provided in the data file).
- It should have methods to:
  * Determine the names of ingredients needed
  * Get the cost of its ingredients
  * Return its directions / instructions

<section class="note">

### Calculating the cost of a Recipe

To calculate the cost of a recipe, you will need to factor in the amount listed in the recipe. The price (`estimatedCostInCents`) of an ingredient is per `unit`.

For example, if flour is marked as 100 cents, and the recipe calls for 1.5 cups, then it would cost 150 cents. Similarly, if a tomato is $2, and the recipe requires 2 tomatoes, then the cost would be $4.  

Please note that the prices for the recipes might be a bit higher than is realistic. That's okay - the mock data has high prices. You can always double check your math by manually calculating the price of a recipe.  
</section>

<section class="note">
### Hint

You may find it helpful to have an `Ingredient` class as well as you build your recipes. A common theme when dealing with data is not to manipulate the original data, but to create copies / instances to work with.
</section>

#### User Stories (Dashboard)

Use the `scripts.js` file to add information to the DOM. This JS file should call methods from your classes to retrieve data. There should not be any DOM manipulation within your class files.

- As a user, I should be able to view a list of all recipes.
- As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
- As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
- As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)

---

### Iteration 2 - Users

#### User Data

Create classes and methods that can:
- Allow a user to add/remove a recipe to their recipesToCook list (add to my `recipesToCook`)
- Filter my `recipesToCook` by a tag. (Extension option: filter by multiple tags)
- Filter my `recipesToCook` by its name. (Extension option: filter by name or ingredients)

#### User Stories

*On load, a user should be chosen at random.*

* As a user, I should be able to add/remove a recipe to a list of recipes to cook
* As a user, I should be able to filter my `toCook` recipes by a tag. (Extension option: filter by multiple tags)
* As a user, I should be able to search my `toCook` recipes by its name. (Extension option: search by name or ingredients)


---

### Iteration 3 - Fetch Calls

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from provided Endpoints in the table below.

<section class="note">
### Hint

The expectation for Mod 2 is that you will avoid using `async/await`.  We know `async/await` is tempting, but it is important that you are able to work with the approaches that pre-date the introduction of `async/await`.  Consider doing some research on [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
</section>  

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all users |`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`| GET | none | An array containing all users |
| Get all ingredients |`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients` | GET | none | An array containing all ingredients |
| Get all recipes | `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes` | GET | none | An array containing all recipes |

Once you've got fetch working on all three arrays, you can delete your hardcoded data file!


### Extensions
_Choose at least one_
* Implement one of the listed 3rd party libraries or one of your choosing with instructor approval.
* Expand your filtering functionality to include multiple tags and search by name and ingredients in your RecipeRepository and User classes.
* Implementing a rating system would be helpful for a user! This could include a 5 star rating system, a way to leave reviews, etc!
* You may also collaborate with instructors to personalize an extension for this project.

---

### Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files, to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.  

You are expected to research and implement `beforeEach` in your test files.

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
* 4: Application fulfills all requirements *as well as* an extension.
* 3: Application fulfills all requirements of iteration 3 without bugs.
* 2: Application is usable but has some missing functionality or bugs.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style / OOP / Fetch
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application is expertly divided into logical components each with a clean, single responsibility.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. Application is effectively broken into logical components, but may violate the principle of SRP. There is no DOM manipulation present in class components.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring. Divisions of logic into classes are inconsistent or unclear.
* 1: Application generates syntax errors or crashes during execution. Application logic shows poor decomposition with too much logic mashed together.

### Test-Driven Development
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths. Tests must be passing to be considered.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files.  Some use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements. No use of beforeEach to DRY up tests.  Tests must be passing to be considered.
* 1: Application does not demonstrate strong use of TDD, and some tests might be failing.

### User Interface
* 4: Special consideration has been given to the usability of the application. The application can stand on its own to be used by an instructor without guidance from a developer on the team. Design is responsive across small, medium and large breakpoints.
* 3: The application has many strong displays/interactions.The UI does not detract from the UX.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.
* 1: The application is confusing or difficult to use.

------------------------------------------------------------------

### Minimum Professionalism Expectations
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* The Project Board is utilized (and updated throughout the project) with Github issues and labels.
* Developer uses PRs from feature branches before adding new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
  * List of contributors
