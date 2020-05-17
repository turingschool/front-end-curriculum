# Refactor Tractor - What's Cookin

## Goals and Objectives

* Build on top of pre-existing code that you did not write and navigate someone else's codebase
* Develop processes for working remotely and submitting pull requests to perform effective code reviews that help ensure the code is accurate and that everyone understands it
* Make network requests to API endpoints to retrieve and manipulate data
* Refactor pre-existing code and use inheritance to DRY up repetitive logic
* Ensure your app is following best practices for accessibility
* Detect cross-browser compatibility issues by testing your app on different platforms and environments
<!-- * Practice (or solidify) your understanding of DOM manipulation with jQuery -->
* Leverage Sass to DRY up your CSS
* Incorporate Webpack to streamline your workflow process
* Leverage Chai Spies to verify that your DOM manipulation is happening

In this project, you will be building on top of somebody else's pre-existing Whats Cookin' codebase. It's uncommon that you'll be starting an application from scratch when you get on the job; more frequently, you're entering into a large codebase that other developers have been working on for years. It can be intimidating at first, and may take some time for you to learn your way around. Take this project as an opportunity to get comfortable doing this!

## New Technologies

* Sass
* Fetch
* [Webpack](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html)

## Set Up

1. Download your assigned repo
2. Move the zip file into the folder where you want the project to live
3. cd into the directory with your zip file
4. run `unzip [filename]`
5. cd into the newly unzipped directory
6. On GitHub, make a new repo for your project
7. Copy the new repo's url
8. In your terminal:
    - remove the old remote `git remote remove origin`
    - then add a new remote `git remote add origin [your new repo url]`

### Working with Webpack
This project is set up to use [Webpack](https://webpack.js.org/guides/getting-started/), a module bundler. It will take whatever code we write, and bundle it into a series of more efficient files that the browser can read (allowing us to use things like Sass, npm packages and ES6 `import` / `export` syntax).

This [video](https://www.youtube.com/watch?v=GU-2T7k9NfI) provides a nice overview of some things webpack lets us do out of the box, most of which is set up for you already.

This [article](https://survivejs.com/webpack/what-is-webpack/) provides some more detail into how Webpack works, and what the `webpack.config.js` file is doing (don't mess with this file unless you're sure you need to -- feel free to ask before you change things).

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html) is a great place to start). But there are a few things that you should know when starting to work with it:

- You need to use [`import` / `export`](https://www.youtube.com/watch?v=_3oSWwapPKQ) syntax
  - Note: This video goes into Babel and Rollup. Webpack handles the transpiling of our ESModules code into something the browser can read.

- Webpack needs to know where to look for your files. Look [here](https://github.com/turingschool-examples/webpack-starter-kit#where-to-add-your-code) for a description of where webpack is set up to look for your HTML, CSS, JS and image files. Some general points:
  - You need to import images into the entrypoint file (usually `scripts.js` or `index.js`).
  - You need to `import` you Scss/CSS files into the entrypoint file too
  - Make sure HTML, JS and Scss/CSS files are all in the `/src` directory
  - You have to `import` any required modules and code for tests into your test files

- While developing, run `npm start`. Webpack will create a live version of your site on a local server, where you can see your changes happen in real time. To access it, in your browser, navigate to the `localhost` address that your terminal gives you. Be aware, if you write a breaking change, your server may crash. The terminal will give you some error report about why the crash happened.

- Don't worry about running `npm build` until you are [ready to deploy your site](https://github.com/turingschool-examples/webpack-starter-kit#deploying-to-github-pages)


## Requirements

### Functionality / Basic Testing

You must complete all of the User Stories outlined in the [What's Cookin Spec](https://frontend.turing.io/projects/whats-cookin.html) that your project has yet to finish. These include:

#### Users
A `User` holds on to all of a user's data. As a user, I should be able to:
  - Favorite recipes (add to / remove from the user's `favoriteRecipes`)
  - Decide to cook a recipe that week (add to my recipesToCook)
  - Filter my `favoriteRecipes` or `recipesToCook` by type
  - Search any of my saved recipes by name or ingredient

Favorites are meant to be recipes that one can easily find again. When a user decides to cook a recipe, they should be able to determine whether they have sufficient ingredients in their pantry (see Pantry user stories). If they do not, they should be able to see a list of what ingredients they need to buy, and how much it will cost. User should be able to do this for at least one recipe. Making a list of `recipesToCook` can be implemented at a later time.

#### Recipes

Users should be able to view a list of recipes. Specifically:
- As a user, I should be able to filter recipes by type / tag
- As a user, I should be able to search recipes by ingredients

A recipe should hold on to all its information (provided in the data file). It should be able to:
- Get the cost of its ingredients
- Get its directions / instructions


#### Pantries
Every User should have a pantry. A `Pantry` holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have.
As a user, I should be able to:
- Determine whether my pantry has enough ingredients to cook a given meal
- Determine the amount of ingredients still needed to cook a given meal, based on what's in my pantry
- Determine how much it will cost to buy the necessary ingredients needed to cook a given meal, based on what's in my pantry
- Add the necessary ingredients to my pantry (and keep this up to date with the database via `fetch`)
- Remove the ingredients used for a given meal from my pantry, once that meal has been cooked

#### Testing
The application should also be fully tested. This means:
- Initial values of class properties need tests
- Class methods need tests for all expected outcomes
- Any methods that modify class properties should be test

You'll also be expected to test the methods that update the DOM (more info below).

### Sass

Refactor the existing CSS into Sass. You should break your Sass out into separate files. At a minimum, you will want an `index.scss` file that imports your partials, and a `variables.scss` file that contains any of your Sass variables or function definitions. Identify common/re-used elements on your page to determine the remaining partials you might want.

Your Sass should be making use of:

* variables for colors, fonts, etc.
* nesting, when/where appropriate
* color functions for ensuring a cohesive color scheme
* at least one mixin, function or extends


### Fetch

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from a server. You must use fetch to:

#### Retrieve all data from an endpoint (GET)
* wcUsersData: https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData
* ingredientsData: https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData
* recipesData: https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData

#### Add and remove ingredients from a user's pantry
For the currently displayed user, you must be able to add and remove ingredients from their pantry.

For example, if the currently displayed user has an ID of 50, and you want to _add_ 3 units of an ingredient with an ID of 123, you would want to send a JSON object through with your POST request that looks like:

```json
{
  "userId": 50,
  "ingredientID": 123,
  "ingredientModification": 3
}
```

If you wanted to _remove_ 3 units of that ingredient, you'd want to send a JSON that looks like this:
```json
{
  "userId": 50,
  "ingredientID": 123,
  "ingredientModification": -3
}
```

#### Error Handling
* Do proper error handling for your users to ensure that they are submitting their POST requests successfully (handle the case where they submit their data and an error message returns from the request, and also validate the input fields on the client-side)


### Pull Requests

* Each person must submit 1 pull request to their group mates for feedback
* Each pull request that you did NOT submit must be reviewed by every other team member, individually
* Each pull request should include significant / helpful feedback and conversation
* No pull request may be merged before it has been reviewed, and must not be merged by the person who submitted it

### Inheritance & Refactoring

* Identify redundant code in your classes and opportunities for DRYing it up
* Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior
* Refactor **across** your classes to create a parent class that others inherit methods from as appropriate


### Accessibility

* You must be able to tab through your app and use it without a mouse
* Your app must still be viewable when tested with a colorblind extension
* You must score as close to 100% in an Accessibility Audit as possible. Be prepared to explain any accessibility audits your application is failing (you'll need to deploy to GH pages for this)
<!-- 
### Cross-Browser/Platform Compatibility

* App should be fully responsive from mobile devices - tablets - laptops - large monitors
* Test your app in Safari and Firefox to identify any inconsistencies and file issues for resolving them
* Resolve as many cross-browser compatibility issues as possible -->

### DOM Manipulation 

<!-- * All DOM manipulation is done with jQuery, there should be no mixture of jQuery and vanilla JavaScript -->
* DOM manipulation should also be organized into a `domUpdates.js` file. The file should look something like this:

```js
// domUpdates.js

let domUpdates = {
  updateDomMethod1(){...},
  updateDomMethod2(){...},
  ...
};

export default  domUpdates;
```
* Any DOM updating functionality will then be imported into other files that need them
  - This will create a more modular structure, and allow you to test your DOM methods (see below)

### Testing with Spies

* Refactor DOM manipulation into methods on an object
* Spy on all DOM manipulation methods to verify that they occurred and were called with the correct arguments
* Use an `afterEach` hook to clean up spies in between tests
* Spy on any class methods that have already been tested elsewhere

### User Testing / UI
* Test out the application manually and file errors for any UI or UX issues you can find
* Fix UI / UX problems. If a display feels hard to use, think about how you can remake it
* Make the page fully responsive and functional down to mobile screensx

## Extensions
* TBD
<!-- * Test and fix any inconsistencies of your application in Internet Explorer (BrowserStack is a potential tool that may help with this!) -->


## Iterations

* You must finish every bullet point in the requirements
* Every group member must fully understand all of the code changes that have been made


## Evaluation/Rubric

As a group, you will respond to high-level technical questions, interview-style. These questions will all relate to the work you've done on this project. For example, "Describe what a POST request is and why we might perform one."

Individually, you will select a card at random that has a question to respond to. You must give an attempt at responding to it before passing it off to a group member if you're unsure. Imagine you don't know the answer to a question on a technical interview, you won't simply say "I don't know". Will you try to take an educated guess? Will you say you're unsure? Will you try to explain by example?

We will evaluate your response based on the following rubric:

**Expert:** Responds to the question accurately and gracefully. Uses the correct vocabulary when discussing the concept, and is sure of their response. Gives an appropriate amount of detail to thoroughly answer the question, but responds well to any follow-up questions that may arise.

**Proficient:** Responds to the question with accuracy, but may be a bit vague or unsure of themselves. May answer the question by describing an example rather than having an eloquent articulation of the concept. May not be able to dig much deeper to respond to follow-up questions that may arise.

**Advanced Beginner:** Cannot respond to the question with accuracy. May discuss related ideas, but does not quite stay on topic for the question we're asking. May ramble a bit until they throw out the correct term, looking to the interviewer for signs of being on the right track.

**Novice:** Cannot respond to the question with accuracy. Interviewer may rephrase the question several times or pivot to ask a simpler question. May find a way to gracefully say "I don't know".

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask follow-up question to you - or they may open it up to volunteers in the group to assist.



<!-- IDEAS FOR NEXT INNING
* Better error handling when users do something wrong with their POST request - make this a requirement rather than an extension
* Add bugs into the codebase
* Give you a codebase of a similar but different project
* Don't just generate a random user - let people choose who they want to see
-->
