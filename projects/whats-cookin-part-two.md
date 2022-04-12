---
title: What's Cookin - Part two!
tags: javascript, oop, mocha, testing, fetch, sass
---

## Goals and Objectives

* Work with a local server and make network requests to API endpoints to retrieve and manipulate data.
* Refactor your code to DRY up repetitive logic
* Ensure your app follows best practices for accessibility
* Practice talking about your code and high level technical concepts
* Implement feedback to improve product and process.

In this project, you will use your project from What's Cookin' (Part One) and build on top of that. This is an opportunity to refactor your code, complete unfinished work, build new features, and take advantage of instructor feedback.  

## Timeline
Dates and deadlines to be aware of:

* **Tuesday of Week 4** -  Project kickoff; Have your project board updated with new tickets (*DTR should also already be completed but you should review and edit.*)
* **Monday of Week 5** - Project due
* **Tuesday of Week 5** - Project evaluations

---

# Requirements
- [ ] Implementing Part 1 Feedback
- [ ] Functionality
- [ ] Fetch
- [ ] Error Handling
- [ ] DOM Manipulation
- [ ] Accessibility
- [ ] Testing

---

## Refactoring and Applying Instructor Feedback from Part 1

* Implement instructor feedback from Part 1
* Consider any additional refactoring opportunities:
  * Identify redundant code in your classes and opportunities for DRYing it up
  * Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior.

---

## Functionality

You must complete all of the remaining user stories from the [What's Cookin Spec](https://frontend.turing.edu/projects/whats-cookin-part-one.html){:target='blank'}. If you did not finish parts of the original requirements, this is your chance to revisit and finish all of the functionality. In addition to the Part One requirements you must also ***implement your instructor's feedback*** and add ***"Iteration Four"*** and include proper ***Error Handling***.

### Iteration 4 - Pantries

#### Pantry Data
Create classes and methods that can:
- Determine whether a user's pantry has enough ingredients to cook a given meal.
- Determine the amount of missing ingredients still needed to cook a given meal, based on what's in the user's pantry.

#### User Stories
- As a user, I should be able to view what ingredients exist inside of my pantry.
- As a user, I should be able to check my list of recipes to cook and see if my pantry has enough ingredients to cook a meal.
- As a user, I should be told what ingredients are still needed if I don't have enough ingredients in my pantry to cook the recipe.
- As a user, I should not be able to cook a recipe if I don't have the ingredients required.
- As a user, when I cook a meal, those ingredients should be removed from my pantry.
- As a user, I should be able to add more ingredients to my pantry.

---  

## Fetch

You will no longer receive your data from the deployed API, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/whats-cookin-api){:target='blank'}.

Your GET requests should not change very much, but you will need to clone down the repo for the local server and run it in a separate tab in your terminal each time you run your client (app). Below are the endpoints' setup for this project.

<section class="note">
### Why this change?

Everyone was using the same exact endpoints for Part One. This is typically how things work, but can cause some headache when implementing types of requests other than GET. In this part of the project, you will start making POST requests. Creating a local server instead of using the hosted (deployed) one, gives everyone their own version of the APIs and decreases an overload of new data getting sent.

</section>

#### Remember:

The expectation for Mod 2 is that you will avoid using `async/await`.  We know `async/await` is tempting, but it is important that you are able to work with the approaches that pre-date the introduction of `async/await`.  Consider doing some research on [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).  

### Endpoints (GET and POST)

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all users |`http://localhost:3001/api/v1/users`| GET  | none | An array containing all users |
| Get all ingredients |`http://localhost:3001/api/v1/ingredients` | GET | none | An array containing all ingredients |
| Get all recipes | `http://localhost:3001/api/v1/recipes` | GET | none | An array containing all recipes |
| Add/Remove Ingredients from a pantry |`http://localhost:3001/api/v1/users`| POST | `{ userID: <number>, ingredientID: <number>, ingredientModification: <number> }` | `{message: '"User # <userID> has 7 units of item # <ingredientID>"' }`|

<section class="note">
### Note about Adding / Removing Ingredients

For the currently displayed user, you must add and remove ingredients from their pantry.

For example, if the currently displayed user has an ID of 50, and you want to add __ 3 units of an ingredient with an ID of 123, you would want to send a JSON object through with your POST request that looks like:

```json
{
  "userID": 50,
  "ingredientID": 123,
  "ingredientModification": 3
}
```

If you wanted to remove_ 3 units of that ingredient, you'd want to send a JSON that looks like this:
```json
{
  "userID": 50,
  "ingredientID": 123,
  "ingredientModification": -3
}
```
</section>

---
## Error Handling

Make proper error handling for your users to ensure they get data and submit their POST requests successfully.  An example is handling the case where they submit their data and an error message returns from the request. How would you show feedback to a user?  Also, validate the input fields on the client-side.

---

## DOM Manipulation

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

## Accessibility

* You must be able to tab through your app and use it without a mouse
* Your app must still be usable when tested with a colorblind extension
* You must score as close to 100% as possible with the "Lighthouse Accessibility Audit". Be prepared to explain any accessibility audits your application is failing.
* Your HTML must be written semantically and should use ARIA tags (*ONLY if needed / appropriate*)

---

## Testing
In addition to your refactoring, you also want to make sure the application is fully tested. This means:

- Initial values of class properties need tests
- Class methods need tests for all expected outcomes
- Any methods that modify class properties should be test
- **You are not required to test your fetch calls or dom manipulation**

---

## Extensions
* If you didn't get a chance to experiment with an NPM package in [Part One](https://frontend.turing.edu/projects/whats-cookin-part-one.html), try one out here! Remember to revist the list of approved NPM packages, or run a new one by your project manager first.
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader.
* Implement an animation using CSS and Sass and/or make your application responsive on smaller screen sizes.
* Create and implement a new feature for your application (run this by instructors first).
* Refactor the existing CSS into Sass. You should break your Sass out into separate files. At a minimum, you will want an `index.scss` file that imports your partials, and a `variables.scss` file that contains any of your Sass variables or function definitions. Identify common/re-used elements on your page to determine the remaining partials you might want.  Your Sass could potentially make use of variables, nesting, mixins and/or extends.

---

<section class="note">

## Strategies for Success
* Since this project is not separated into iterations or user stories, make sure that you spend a good amount of time breaking apart tasks and using that project board wisely.
* Every group member must fully understand and be able to speak to all of the code changes that have been made.
* **Implement feedback received in part one into part two.**
</section>

---

# Project Requirements Rubric

### Functional Expectations
* 4: Application fulfills all requirements *as well as* an extension.
* 3: Application fulfills all requirements.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage or does not run.

### Testing
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths.  Tests must be passing to be considered.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files.  Some use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 2: Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and some tests do not reflect changes made to implementation. No use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 1: Tests have not been updated to reflect changes made in refactor. There is not enough test coverage, and some tests might be failing.

### Accessibility
* 4: Has an audit score of 100% and has gone above and beyond accessibility requirements (see extensions).
* 3: All accessibility areas have been considered and tested. An accessibility audit with a score of at least 95%.  
* 2: One accessibility area has not been tested or considered. This may be: an accessibility audit with a score of 80% or lower, errors with color contrast when checking via a colorblind extension, app is not tab-able, large use of non-semantic HTML.
* 1: Two or more accessibility areas have not been tested or considered. This may be: an accessibility audit with a score of 80% or lower, errors with color contrast when checking via a colorblind extension, app is not tab-able, large use of non-semantic HTML.

### JavaScript Refactoring
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.  Excellent usage of `fetch` and updates DOM based on results of network requests.  Handles all scenarios for error handling.
* 3: Class methods use array and object prototypes - for loops are not used in the application. Application shows strong effort towards organization, content, and refactoring.  Great usage of `fetch` and updates DOM based on results in most scenarios, but may update DOM before a network request is complete.  Handles some scenarios for error handling.
* 2: Class methods use a mix of array and object prototypes and for loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.  Uses `fetch` effectively for `GET` but does not implement `POST`.  Has zero error handling and only `logs` errors if a network request fails.
* 1: Application generates syntax errors or crashes during execution. Does not utilize `fetch` at all.

---

### Minimum Professionalism Expectations
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* The Project Board is utilized (and updated) with Github issues and labels.
* Developer uses PRs from feature branches before adding new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app

---

## Evaluation

As a group, you will respond to high-level technical questions, interview-style. These questions will all relate to the work you've done on this project. For example, "Describe what a POST request is and why we might perform one."

Individually, you will be asked a question at random to respond to. You must give an attempt at responding to it before passing it off to a group member if you're unsure. Imagine you don't know the answer to a question on a technical interview, you won't simply say "I don't know". Will you try to take an educated guess? Will you say you're unsure? Will you try to explain by example?

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask a follow-up question to you - or they may open it up to volunteers in the group to assist.
