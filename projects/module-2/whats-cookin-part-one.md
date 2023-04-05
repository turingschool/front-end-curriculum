---
title: What's Cookin - Part one!
tags: javascript, mocha, testing, fetch
---
## Goals and Objectives

- Use object and array prototype methods to perform data manipulation
- Create a user interface that is easy to use and clearly displays information.
- Write DRY, reusable code that follows SRP and trends toward function purity
- Implement a robust testing suite using TDD
- Make network requests to retrieve data
- Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project.

In this project, you will create a recipe tracking / meal planning application that allows users to view recipes they want to cook and plan shopping trips around them. The idea is similar to sites like [All Recipes](https://www.allrecipes.com/){:target='blank'} or [New York Times Cooking](https://cooking.nytimes.com/){:target='blank'}. Users should view a list of recipes and choose recipes to cook.

## New Technologies
- Fetch API
- [Webpack](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'}

<section class="note">

### Note	 
Feel free to use the above sites as inspiration for your UI, but note that there is *NO COMP* provided for this project. We expect you to design your own dashboard layout that is relevant to the data being displayed.

**You must pull 3 inspirations from 3 different apps that you want to implement in your application**
* Be specific about what piece you are trying to re-create.  What specifically do you want to replicate from this site? (i.e. layout, color palette, flat design, font, etc)
* You may also pull inspirations from other sites, such as [Dribbble](https://dribbble.com/){:target='blank'}
</section>

---

## Timeline
Dates and deadlines to be aware of:

* **By EOD Monday of Week 2** - Submit the following to your PM via Slack BEFORE beginning to write code:
1. DTR (be specific about learning goals, schedules, and communication expectations)
1. GitHub project board (this should be kept updated throughout the project and will be reviewed by PM in check-ins.
1. Wireframes (a rough sketch of your website for planning - worth googling!)
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

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'} is a great place to start). But there are a few things that you should know when starting to work with it:

1. You need to use [`import` / `export`](https://www.youtube.com/watch?v=_3oSWwapPKQ){:target='blank'} syntax
- Note: This video goes into Babel and Rollup. Webpack handles the transpiling of our ESModules code into something the browser can read.

2. Webpack needs to know where to look for your files. Look [here](https://github.com/turingschool-examples/webpack-starter-kit#where-to-add-your-code){:target='blank'} for a description of where webpack is set up to look for your HTML, CSS, JS and image files. Some general points:
- You need to import images into the entrypoint file (usually `scripts.js` or `app.js`).
- You need to `import` your CSS files into the entrypoint file too
- Make sure HTML, JS and CSS files are all in the `/src` directory
- You have to `import` any required modules and code for tests into your test files

3. While developing, run `npm start`. Webpack will create a live version of your site on a local server, where you can see your changes happen in real time. To access it, in your browser, navigate to the `localhost` address that your terminal gives you. Be aware, if you write a breaking change, your server may crash. The terminal will give you some error report about why the crash happened.
  - **Use the command `control + c` to stop the local server.**  
    Just closing the terminal without stopping the server first could mean things continue to run in the background and cause problems and lead you to an `EADDRINUSE` error.  
    This `control + c` command is not specific to Webpack; make note of it for future use.  

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
Each iteration has a "Data" section and "User Stories" section. Data deals with using the data to calculate something meaningful for the user. The user stories section deals with what to display on the page and what the user flow looks like. Unlike your week-1 project, the function names are not completely drawn out for you.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on the data and calculation functions, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

---

### Iteration 1 - Get Familiar with the Data and Recipes

Checkout the `data` directory and explore the data. Get a sense of what each property is and what the data nesting is like.  

#### Recipe functionality

You should have functions that:
  * Return a filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)
  * Return a filtered list of recipes based on a recipe name. (Extension option: filtering by name or ingredients)
  * Determine the names of ingredients needed for a given recipe.
  * Calculate the cost of a given recipe's ingredients
  * Return the directions / instructions for a given recipe

<section class="note">

### Calculating the cost of a Recipe

To calculate the cost of a recipe, you will need to factor in the amount listed in the recipe. The price (`estimatedCostInCents`) of an ingredient is per `unit` - regardless of if that unit is a cup, teaspoon, etc.

For example, if flour is marked as 100 cents, and the recipe calls for 1.5 cups, then it would cost 150 cents. Similarly, if a tomato is $2, and the recipe requires 2 tomatoes, then the cost would be $4.  

Please note that the prices for the recipes might be higher than is realistic. That's okay - the mock data has high prices. You can always double check your math by manually calculating the price of a recipe - and of course, by writing thorough tests.
</section>

<section class="note">
### Hint

A common theme in functional programming when dealing with data is not to manipulate the original data, but to create copies to work with.  

You as the developer will need to make decisions about the shape of data you'll want back from various functions.  Consider how you will be using this data to update the DOM. 
</section>

#### User Stories (Dashboard)

Use the `domUpdates.js` file to update the DOM. There should not be any DOM manipulation within your `scripts.js` file.

- As a user, I should be able to view all recipes.
- As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
- As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
- As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)

---

### Iteration 2 - Users

#### User Data

You should have functions that:
- Allow a user to add/remove a recipe to/from their recipesToCook list (add to my `recipesToCook`)
- Filter my `recipesToCook` by a tag. (Extension option: filter by multiple tags)
- Filter my `recipesToCook` by its name. (Extension option: filter by name or ingredients)  

Consider:  
*Do you already have functions that are filtering recipes?  How can you ensure those existing functions are dynamic and reusable in a way that can accomplish the filtering required in this iteration as well?*

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

- Once you've got fetch working on all three arrays, **delete your hardcoded data file!**  Make sure you are not using this data file for your testing.  Instead, create smaller sample datasets in their own file to use for testing.

---

### Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files, to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, you should create small, sample datasets that match the structure of the application data and use these for your test data. By creating this sample dataset, you will also know if your functions are working correctly because you can do the calculations by hand with a much smaller dataset.  

You are expected to research and implement `beforeEach` in your test files.

**You are *expected* to test:**
* All functions that do not update the DOM.  This means everything in your `scripts.js` file should be tested.

Remember to test all possible outcomes (happy/sad/etc).  Ask yourself:  
  - Does the function return anything?  
  - Are there different possible outcomes to test for based on different arguments being passed in?

**You are *not expected* to test:**
* DOM manipulation / DOM manipulating function (like `document.querySelector(...)`)
* Fetch calls

---

### Extension Options
* Implement one of the listed 3rd party libraries or one of your choosing with instructor approval.
* Expand your filtering functionality to include multiple tags and be able to search by both name and ingredients.
* Implement a rating system would be helpful for a user! This could include a 5 star rating system, a way to leave reviews, etc!
* You may also collaborate with instructors to personalize an extension for this project.

<section class="note">
## 3rd Party Libraries

You may choose **ONE** of the following 3rd party libraries to incorporate into your app *as an extension (aka not expected, not required)* if interested. Your group may want to do a research spike to see which library, if any, makes sense for your application. Please get instructor approval first before implementing any 3rd-party libraries (including these). 

* [Micromodal](https://www.npmjs.com/package/micromodal){:target='blank'}
* [GlideJS](https://www.npmjs.com/package/@glidejs/glide){:target='blank'}
* [InteractJS](https://interactjs.io/){:target='blank'}

</section>

---

### Minimum Collaboration and Professionalism Expectations
* Team holds daily standups throughout project.
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* A project board is utilized (and updated throughout the project) with Github issues and labels.
* Team uses branches, PRs and thorough code reviews to add new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
  * List of contributors
* **Team collaborates effectively to accomplish the shared goal.  Team productively and professionally works through challenges and conflicts to ensure all team members are able to be heard and contribute throughout the project.**  
  * Instructors are available to offer support and guidance but conversations around what *is* and what *is not* working are expected to be led by the team members themselves.

---

## Rubric

For the rubric sections below, you will be scored as **Wow**, **Yes** or **Not Yet** depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstate competency.  These are just *some* examples. 

<section class="answer">
### Does the project demonstrate student understanding of the learning goals & concepts?

Projects will answer that question, being marked as yes, not yet, and wow. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

The overall project outcome (yes, not yet, wow) is determined by “averaging” each section’s outcome. You can think of a “yes” being worth a 1, a “not yet” being worth a 0, and a “wow” being worth a 2.

For this project, an average of 0.5 is considered a yes - a passing project that demonstrates good student understanding! An average of 1+ is considered a wow. Anything below a 0.5 is considered a not yet - a project that indicates that the concepts have not been fully understood (see note in the section below). 
</section>

While M2 rubrics do not have a separate section for WOWs like in M1, there are a few WOW examples noted throughout.  In addition to these WOW bullets, you can strive for a WOW by demonstrating not just competency, but excellence and thoroughness across the rubric sections. 

### Functional Expectations
* Wow: Application fulfills all requirements *as well as* an extension.
* Yes: Application fulfills all requirements of iterations 1-3 without bugs.
* Not Yet: Application crashes or has missing functionality or bugs.

### JavaScript & Style / Functional Programming / Fetch
- Code is divided into logical components each with a clean, single responsibility
- Array prototype methods are used to iterate instead of for loops
- All DOM manipulation is held in the `domUpdates.js` file.  No DOM manipulation occurs outside of this file.
- Variables and functions are consistently and appropriately named
- Code leverages JavaScript's truthy/falsey principles
- Demonstrates efforts towards making functions pure when possible. *Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.*
- WOW option: Effectively implements one or more closure throughout project.  *Note: See Closures lesson on M2 lesson page as a resource.*

### Test-Driven Development
- Application has a robust and thorough test suite that covers all functions that do not update the dom.
- Test suite is organized.
  - Each function is tested in its own it block.
- All scenarios/outcomes/paths are tested for your functions, including happy and sad paths.
  - Each path is tested in its own it block.
- Rather than using the production data, small sample data is stored in its own file and used for testing.
  - Sample data has been crafted to create the scenarios needed for thorough testing.
  - For example: If you need to test a sad path of searching for recipes with a tag that no recipes match, you need to create test data that simulates that scenario so you can test it.
- `beforeEach` hook is used to DRY up test files
- There are no failing/pending tests upon submission

### User Interface
- The application can stand on its own to be used by an instructor without guidance from a developer on the team.
- UI/UX is intuitive and easy to read/use
- Helpful messaging is displayed to prevent user confusion
  - For example: If a user searches for a recipe and finds no matching results, a message is displayed to indicated that the search worked, nothing is broken, there just aren't any matching recipes found.
- WOW option: Design is responsive across small, medium and large breakpoints.

### Collaboration and Professionalism 
- See "Minimum Collaboration and Professionalism Expectations" above.  
- While this is not a scored rubric section, every team member is expected to fully participate, contribute, communicate and collaborate with the team throughout the entirety of this project. **Failure to do so can result in an individual failing the project, even if the group/project is otherwise passing**.