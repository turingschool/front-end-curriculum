# What's Cookin - Part two

## Goals and Objectives

* Work with local server and make network requests to API endpoints to retrieve and manipulate data.
* Refactor your code and use inheritance to DRY up repetitive logic
* Ensure your app follows best practices for accessibility
* Leverage Sass to DRY up your CSS


In this project, you will use what's cooking part one and build on top of that. This is an opportunity to refactor your code from part one and build new features. 

## Timeline
Dates and deadlines to be aware of:

* **Monday of Week 4** -  Project kickoff
* **Tuesday of Week 4** - Have your project board updated with new tickets (*DTR should also already be completed but you could review and edit*).  
* **Monday of Week 5** - Project due at 9PM
* **Tuesday of Week 5** - Project evals

## New Technologies

* Sass

---

## Requirements

### Functionality

You must complete all of the remaining User stories from [What's Cookin Spec](https://github.com/turingschool/front-end-curriculum/blob/gh-pages/projects/What's%20cookin%20-%20Group%20project%20-%20Part%20one){:target='blank'}. If you did not finish parts of the original requirements, this is your chace to revisit and finish all of the functionality. 

**NOTE: You must complete through iteration 4**

### Fetch

You will no longer receive your data from the deployed API, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/whats-cookin-api){:target='blank'}.  This is for getting practice working with local server and how to implement that instead of working with deployed API. 
You will need to clone this down and run it in a separate tab in your terminal each time you run your client.  Here are the endpoints' setup for this project. 


#### Endpoints (GET and POST)

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

<section class="note">
  
### Error Handling

Make proper error handling for your users to ensure they get data and submit their POST requests successfully.  An example is handling the case where they submit their data and an error message returns from the request. How would you show feedback to a user?  Also, validate the input fields on the client-side.
</section>

---

### Inheritance & Refactoring

* Identify redundant code in your classes and opportunities for DRYing it up
* Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior.
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

Refactor the existing CSS into Sass. You should break your Sass out into separate files. At a minimum, you will want an `index.scss` file that imports your partials, and a `variables.scss` file that contains any of your Sass variables or function definitions.  You should also include a [normalize or reset](https://frontend.turing.io/lessons/module-1/reset-vs-normalize.html){:target='blank'} file to help with cross browser compatibility.  Identify common/re-used elements on your page to determine the remaining partials you might want.

Your Sass should be making use of:

* variables for colors, fonts, etc.
* nesting, when/where appropriate
* at least **two** mixins or extends


---

### Accessibility

* You must be able to tab through your app and use it without a mouse
* Your app must still be usable when tested with a colorblind extension
* You must score as close to 100% as possible with the "Lighthouse Accessibility Audit". Be prepared to explain any accessibility audits your application is failing.
* Your HTML must be written semantically and should use ARIA tags (*ONLY if needed / appropriate*)

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
* Since this project is not separated into iterations or user stories, make sure that you spend a good amount of time breaking apart tasks and using that project board wisely. Make sure to send over your project board to your PM as well. 
* Every group member must fully understand and be able to speak to all of the code changes that have been made. 
* Implement feedback received in part one into part two.
</section>

---

### Extensions
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader. 
* Implement an animation using CSS and Sass.
* Create and implement a new feature for your application (run this by instructors first). 

---

### Project demo video
* Instead of live demo with the instructor you are required to make a video and present that during watch demo party.
* You can find the instructions [here]  (https://frontend.turing.edu/projects/project-demo-pair.html){:target='blank'}

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
