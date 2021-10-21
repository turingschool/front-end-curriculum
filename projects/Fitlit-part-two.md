---
title: Fitlit - Part two!
tags: javascript, oop, mocha, testing, fetch, sass
---

## Goals and Objectives

* Work with a local server and make network requests to API endpoints to retrieve and manipulate data.
* Refactor your code and use inheritance to DRY up repetitive logic
* Ensure your app follows best practices for accessibility
* Leverage Sass to DRY up your CSS
* Practice talking about your code and high level technical concepts

In this project, you will use your project from Fitlit' (Part One) and build on top of that. This is an opportunity to refactor your code, complete unfinished work, build new features, and take advantage of instructor feedback.  

## Timeline
Dates and deadlines to be aware of:

* **Monday of Week 4** -  Project kickoff
* **Tuesday of Week 4** - Have your project board updated with new tickets (*DTR should also already be completed but you should review and edit.*).  
* **Monday of Week 5** - Project and video due at 9PM(MST)
* **Tuesday of Week 5** - Project evaluations
* **Tuesday of Week 5** - Project demo watch party (optional to attend)

_NOTE: Creating the project demo video is a requirement, but attending and submitting your video in the watch party is optional. Instructions can be found [here](https://frontend.turing.edu/projects/project-demo-pair.html)_

## New Technologies + Tools

* Sass
* Lighthouse Accessibility Audit

---

## Requirements

### Functionality

You must complete all of the remaining user stories from the [Fitlit Spec](https://frontend.turing.edu/projects/Fitlit-part-one.html){:target='blank'}. If you did not finish parts of the original requirements, this is your chance to revisit and finish all of the functionality. In addition to the Part One requirements you must also add ***"Iteration Five."***

---

### Iteration 5 - Activity

#### Data
Create classes and methods that can calculate:

* For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their `strideLength` to help calculate this)
* For a user, (identified by their `userID`) how many minutes were they active for a given day (specified by a date)?
* For a user, how many minutes active did they average for a given week (7 days)?
* For a user, did they reach their step goal for a given day (specified by a date)?
* For a user, find all the days where they exceeded their step goal
* For a user, find their all-time stair climbing record
* For all users, what is the average number of:
  * stairs climbed for a specified date
  * steps taken for a specific date
  * minutes active for a specific date

#### Dashboard
Items to add to the dashboard:

* For a user, the number of steps for the latest day
* For a user, the number minutes active for the latest day
* For a user, the distance they have walked (in miles) for the latest day based on their step count
* How their number of steps, minutes active, and flights of stairs climbed compares to all users for the latest day
* For a user, a weekly view of their step count, flights of stairs climbed, and minutes active
* A user should be able to add new sleep, hydration and activity data from the dashboard

---

### Fetch

You will no longer receive your data from the deployed API, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/fitlit-api){:target='blank'}. 

Your GET requests should not change very much, but you will need to clone down the repo for the local server and run it in a separate tab in your terminal each time you run your client (app). Below are the endpoints' setup for this project. 

<section class="note">
  
<h3> Why this change? </h3>

Everyone was using the same exact endpoints for Part One. This is typically how things work, but can cause some headache when implementing types of requests other than GET. In this part of the project, you will start making POST requests. Creating a local server instead of using the hosted (deployed) one, gives everyone their own version of the APIs and decreases an overload of new data getting sent. 

</section>


#### Endpoints (GET and POST)

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all users |`http://localhost:3001/api/v1/users`| GET  | none | An array containing all users |
| Get all sleep data |`	http://localhost:3001/api/v1/sleep` | GET | none | An array containing all sleep datas |
| Get all activity data | `http://localhost:3001/api/v1/activity` | GET | none | An array containing all activities |
| Get all hydration data | `http://localhost:3001/api/v1/hydration` |GET | none | An array containing all hydration data |
| Add A User sleep data |`http://localhost:3001/api/v1/sleep`| POST | `{ userID: <number>, date: <string> , hoursSlept: <number> , sleepQuality:<number> }` | `{ userID: #, date: "some dates ex("12/12/2020")" , hoursSlept: # , sleepQuality: # }`|
| Add A User hydration data |`http://localhost:3001/api/v1/hydration`| POST | `{ userID: <number>, date: <string> , numOunces: <number> }` | `{ userID: #, date: "some dates ex("12/12/2020")" , numOunces: # }`|
| Add A User activity data |`http://localhost:3001/api/v1/activity`| POST | `{ userID: <number>, date: <string>, flightsOfStairs: <number>, minutesActive: <number>, numSteps: <number>` | `{ userID: #, date: "some dates ex("12/12/2020")" , flightsOfStairs: #, minutesActive: # }`|

<section class="note">
  
<h3> Note about Adding Sleep, Hydration and activity data</h3>

For the currently displayed user, you must be able to add a new sleep, hydration and activity data entry for that user.

For example, if the currently displayed user has an ID of 50, and you want to add new sleep data you would want to send a JSON object through with your POST request that looks like:
    

```json
{
    userID: 50, 
    date: "10/29/2021" , 
    hoursSlept: 2, 
    sleepQuality:2.2
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

* separate files
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
- **You are not required to test your fetch calls or dom manipulation**

---

<section class="note">
  
## Strategies for Success
* Since this project is not separated into iterations or user stories, make sure that you spend a good amount of time breaking apart tasks and using that project board wisely. 
* Every group member must fully understand and be able to speak to all of the code changes that have been made. 
* Implement feedback received in part one into part two.
</section>

---

### Extensions
* If you didn't get a chance to experiment with an NPM package in [Part One](https://frontend.turing.edu/projects/whats-cookin-part-one.html), try one out here! Remember to revist the list of approved NPM packages, or run a new one by your project manager first. 
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader. 
* Implement an animation using CSS and Sass and/or make your application responsive on smaller screen sizes. 
* Create and implement a new feature for your application (run this by instructors first). 

---

### Project demo video
* Instead of live demo with the instructor you are required to make a video and present that during watch demo party.
* You can find the instructions [here](https://frontend.turing.edu/projects/project-demo-pair.html){:target='blank'}

---
# Project Requirements Rubric

## Functional Expectations
* 4: Application fulfills all requirements *as well as* an extension.
* 3: Application fulfills all requirements.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage or does not run.

## Testing
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths. All tests are passing. 
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files. All tests are passing
* 2: Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and some tests do not reflect changes made to implementation. Some tests might be failing. 
* 1: Tests have not been updated to reflect changes made in refactor. There is not enough test coverage, and multiple tests might be failing. 

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
* 1: Application generates syntax errors or crashes during execution. Does not utilize `fetch` at all.

---

### Minimum Professionalism Expectations
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application
* The Project Board is utilized (and updated) with Github issues and labels.
* Developer uses PRs from feature branches before adding new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
  * Demo video

---

## Evaluation

As a group, you will respond to high-level technical questions, interview-style. These questions will all relate to the work you've done on this project. For example, "Describe what a POST request is and why we might perform one."

Individually, you will be asked a question at random to respond to. You must give an attempt at responding to it before passing it off to a group member if you're unsure. Imagine you don't know the answer to a question on a technical interview, you won't simply say "I don't know". Will you try to take an educated guess? Will you say you're unsure? Will you try to explain by example?

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask a follow-up question to you - or they may open it up to volunteers in the group to assist.

