---
title: Refactor Tractor - What's Cookin OR Fitlit!
tags: javascript, oop, mocha, testing, sass, fetch
---

## Goals and Objectives

* Build on top of pre-existing code that you did not write and navigate someone else's codebase
* Make network requests to API endpoints to retrieve and manipulate data
* Refactor pre-existing code and use inheritance to DRY up repetitive logic
* Ensure your app is following best practices for accessibility
* Leverage Sass to DRY up your CSS
* Incorporate Webpack to streamline your workflow process

In this project, you will be building on top of somebody else's pre-existing codebase. It's uncommon that you'll be starting an application from scratch when you get on the job; more frequently, you're entering into a large codebase that other developers have been working on for years. It can be intimidating at first, and may take some time for you to learn your way around. Take this project as an opportunity to get comfortable doing this!

---

## Timeline
Dates and deadlines to be aware of:

* **Monday of Week 4** -  Project kickoff
* **Tuesday of Week 4** - Have your project chosen and let PM know. Make sure to have GitHub project board ready with tickets (*DTR should also be complete*).
* **Monday of Week 5** - Project due at 9PM
* **Tuesday of Week 5** - Project evals


Please submit your finished projects [here](https://forms.gle/dTjaDmgDog9U8dGn6){:target='blank'}

---

## Getting Started

You and your team will first need to decide which project you'd like to refactor - [Fitlit](https://frontend.turing.edu/projects/fitlit.html) or [What's Cookin](https://frontend.turing.edu/projects/whats-cookin.html).

### How to Choose?
Both Fitlit and What's Cookin' will give you practice with Sass, Fetch, Web Accessibility, refactoring, working with someone else's code and more. Here are some things you could consider when making that choice:

#### Choosing the same as your paired project
- Since you are already familiar with the application and its requirements, you'll spend less time understanding the new spec
- You'll get more experience and exposure to how someone could have solved the same problems differently than you

#### Choosing the new project
- This will give you valuable practice ramping up on a brand new project
- You might have less temptation to look at your old code

**Note: There are two different versions of each project. You will be assigned the A or B version.**

Once you have chosen either Fitlit or Whats' Cookin' and have been assigned a version. You can get started with your starter repo below:
- [Fitlit A](https://github.com/turingschool-examples/refactor-tractor-fitlit-a)
- [Fitlit B](https://github.com/turingschool-examples/refactor-tractor-fitlit-b)
- [WC A](https://github.com/turingschool-examples/refactor-tractor-whats-cookin-a)
- [WC B](https://github.com/turingschool-examples/refactor-tractor-whats-cookin-b)

---

## Working with Webpack
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


<section class="answer">
### Fitlit Specific

#### Functionality

You must complete all of the User Stories outlined in the [FitLit Spec](https://frontend.turing.edu/projects/fitlit.html){:target='blank'} that your project has yet to finish. Make sure you spend some time reviewing the spec to take note of features that might be unfinished.

**NOTE: You must complete through iteration 5**

#### Fetch

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/fitlit-api){:target='blank'}.  You will need to clone this down and have it running in a separate tab in your terminal each time you run your client.  Here are the endpoints setup for this project:

##### Retrieve all data from an endpoint (GET)

| Data Type | Verb | URL |  
|---|---|---|  
| User Data |GET | http://localhost:3001/api/v1/users |  
| Sleep Data | GET | http://localhost:3001/api/v1/sleep |  
| Activity Data | GET | http://localhost:3001/api/v1/activity |  
| Hydration Data | GET | http://localhost:3001/api/v1/hydration |  

##### Add new sleep, activity, and hydration data (POST)

For the currently displayed user, you must be able to add a new sleep, hydration and activity data entry for that user.

| Data Type | Verb | URL | Required Body |  
|---|---|---|---|  
| Sleep Data | POST | http://localhost:3001/api/v1/sleep | `{"userID": integer, "date": string, "hoursSlept": integer, "sleepQuality": integer}` |  
| Activity Data | POST | http://localhost:3001/api/v1/activity | `{"userID": integer, "date": string, "numSteps": integer, "minutesActive": integer, "flightsOfStairs": integer}` |  
| Hydration Data | POST | http://localhost:3001/api/v1/hydration | `{"userID": integer, "date": string, "numOunces": integer}` |

<section class="note">
### Error Handling

Do proper error handling for your users to ensure that they are getting data and are submitting their POST requests successfully.  An example is handling the case where they submit their data and an error message returns from the request.  Also validate the input fields on the client-side.
</section>

---

#### Extensions
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader.
* Implement an animation using CSS and Sass.
* Create and implement a new feature for your application (run this by instructors first).

---

</section>

<section class="answer">
### What's Cookin' Specific

#### Functionality

You must complete all of the User Stories outlined in the [What's Cookin Spec](https://frontend.turing.edu/projects/whats-cookin.html){:target='blank'} that your project has yet to finish. Make sure you spend some time reviewing the spec to take note of features that might be unfinished.

**NOTE: You must complete through iteration 4**

#### Fetch

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/whats-cookin-api){:target='blank'}.  You will need to clone this down and have it running in a separate tab in your terminal each time you run your client.  Here are the endpoints setup for this project:

##### Endpoints (GET and POST)

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all users |`http://localhost:3001/api/v1/users`| GET  | none | An array containing all users |
|Get all ingredients |`http://localhost:3001/api/v1/ingredients` | GET | none | An array containing all ingredients |
|Get all recipes | `http://localhost:3001/api/v1/recipes` | GET | none | An array containing all recipes |
| Add/Remove Ingredients from a pantry |`http://localhost:3001/api/v1/users`| POST | `{ userID: <number>, ingredientID: <number>, ingredientModification: <number> }` | `{message: '"User # <userID> has 7 units of item # <ingredientID>"' }`|

<section class="note">
### Note about Adding / Removing Ingredients

For the currently displayed user, you must be able to add and remove ingredients from their pantry.

For example, if the currently displayed user has an ID of 50, and you want to _add_ 3 units of an ingredient with an ID of 123, you would want to send a JSON object through with your POST request that looks like:

```json
{
  "userID": 50,
  "ingredientID": 123,
  "ingredientModification": 3
}
```

If you wanted to _remove_ 3 units of that ingredient, you'd want to send a JSON that looks like this:
```json
{
  "userID": 50,
  "ingredientID": 123,
  "ingredientModification": -3
}
```
</section>

<section class="note">
### Error Handling

Do proper error handling for your users to ensure that they are getting data and are submitting their POST requests successfully.  An example is handling the case where they submit their data and an error message returns from the request.  Also validate the input fields on the client-side.
</section>

---

#### Extensions
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader.
* Implement an animation using CSS and Sass.
* Create and implement a new feature for your application (run this by instructors first).

---

</section>

### Inheritance & Refactoring

* Identify redundant code in your classes and opportunities for DRYing it up
* Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior
* Refactor **across** your classes to create a parent class that others inherit methods from as appropriate **OR** be able to defend your choice for *not* using inheritance.

---

### DOM Manipulation

* DOM manipulation should be organized into its own `domUpdates.js` file. The file should look something like this:

```js
// domUpdates.js

let domUpdates = {
  updateDomMethod1(){...},
  updateDomMethod2(){...},
  ...
};

export default  domUpdates;
```

Any DOM updating functionality will then be imported into your `scripts.js` file to be called along with your other class methods.  This helps to create an even more modular structure.

---

### Sass

Refactor the existing CSS into Sass. You should break your Sass out into separate files. At a minimum, you will want an `index.scss` file that imports your partials, and a `variables.scss` file that contains any of your Sass variables or function definitions.  You should also include a [normalize or reset](https://frontend.turing.edu/lessons/module-1/reset-vs-normalize.html){:target='blank'} file to help with cross browser compatibility.  Identify common/re-used elements on your page to determine the remaining partials you might want.

Your Sass should be making use of:

* variables for colors, fonts, etc.
* nesting, when/where appropriate
* at least **two** mixins or extends

Your app should be **fully responsive** from mobile devices - tablets - laptops

---

### Accessibility

* You must be able to tab through your app and use it without a mouse
* Your app must still be viewable when tested with a colorblind extension
* You must score as close to 100% as possible with the "Lighthouse Accessibility Audit". Be prepared to explain any accessibility audits your application is failing.
* Your HTML must be written semantically and ARIA tags should be used (*ONLY if needed / appropriate*)

---

### Testing
In addition to your refactoring, you also want to make sure the application is fully tested. This means:

- Initial values of class properties need tests
- Class methods need tests for all expected outcomes
- Any methods that modify class properties should be test
- **You are not required to test your fetch calls**

---

<section class="note">
## Strategies for Success
* Make sure you are reviewing the original ["FitLit" spec](https://frontend.turing.edu/projects/fitlit.html) or ["What's Cooking" spec](https://frontend.turing.edu/projects/whats-cookin.html) so you have a good idea for what the project and its requirements are.
* Since this project is not separated out into iterations or user stories, make sure that you spending a good amount of time breaking apart tasks and using that project board wisely. Make sure to send over your project board to your PM as well.
* Every group member must fully understand and be able to speak to all of the code changes that have been made.
</section>



---

# Project Requirements Rubric

## Functional Expectiations
* 4: Application fulfills all requirements *as well as* an extension.
* 3: Application fulfills all requirements.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage or does not run.

## Testing
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files.
* 2: Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and some tests do not reflect changes made to implementation.
* 1: Tests have not been updated to reflect changes made in refactor.

## Sass
* 4: Application fulfills all requirements previously mentioned, and has Sass functionality that goes above and beyond an MVP (see extensions).
* 3: The application has well-factored Sass with all styles separated out into logical stylesheets. Mixins or extends, variables, (appropriate) nesting and color functions have been utilized well.
* 2: Application adds organization for the whole stylesheet and within rules, but multiple Sass files have not been utilized. All Sass code lives in a single file, and only makes use of variables. There is some duplication in the codebase, and there may be some unnecessary selectors or tags.
* 1: The application makes little to no use of Sass and is not separated into logical stylesheets. There are many instances of duplication.

## Accessibility
* 4: Has an audit score of 100% and has gone above and beyond accessibility requirements (see extensions).
* 3: All accessibility areas have been considered and tested. An accessibility audit with a score of at least 95%.  
* 2: One accessibility area has not been tested or considered. This may be: an accessibility audit with a score of 80% or lower, errors with color contrast when checking via a colorblind extension, app is not tab-able, large use of non-semantic HTML.
* 1: Two or more accessibility areas have not been tested or considered. This may be: an accessibility audit with a score of 80% or lower, errors with color contrast when checking via a colorblind extension, app is not tab-able, large use of non-semantic HTML.

## JavaScript Refactoring
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.  Excellent usage of `fetch` and updates DOM based on results of network requests.  Handles all scenarios for error handling.
* 3: Class methods use array and object prototypes - for loops are not used in the application. Application shows strong effort towards organization, content, and refactoring.  Great usage of `fetch` and updates DOM based on results in most scenarios, but may update DOM before a network request is complete.  Handles some scenarios for error handling.
* 2: Class methods use a mix of array and object prototypes and for loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.  Uses `fetch` effectively for `GET` but does not implement `POST`.  Has zero error handling and only `logs` errors if a network request fails.
* 1: Application generates syntax error or crashes during execution.  Uses original data files and does not utilize `fetch` at all.

---

## Evaluation

As a group, you will respond to high-level technical questions, interview-style. These questions will all relate to the work you've done on this project. For example, "Describe what a POST request is and why we might perform one."

Individually, you will be asked a question at random to respond to. You must give an attempt at responding to it before passing it off to a group member if you're unsure. Imagine you don't know the answer to a question on a technical interview, you won't simply say "I don't know". Will you try to take an educated guess? Will you say you're unsure? Will you try to explain by example?

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask a follow-up question to you - or they may open it up to volunteers in the group to assist.
