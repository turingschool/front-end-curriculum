# Refactor Tractor

## Goals and Objectives

* Build on top of pre-existing code that you did not write and navigate someone else's codebase
* Develop processes for working remotely and submitting pull requests to perform effective code reviews that help ensure the code is accurate and that everyone understands it
* Make network requests to API endpoints to retrieve and manipulate data
* Refactor pre-existing code and use inheritance to DRY up repetitive logic
* Ensure your app is following best practices for accessibility
* Detect cross-browser compatibility issues by testing your app on different platforms and environments
* Practice (or solidify) your understanding of DOM manipulation with jQuery
* Leverage Sass to DRY up your CSS
* Incorporate Webpack to streamline your workflow process
* Leverage Chai Spies to verify that your DOM manipulation is happening 

In this project, you will be building on top of somebody else's pre-existing FitLit codebase. It's uncommon that you'll be starting an application from scratch when you get on the job; more frequently, you're entering into a large codebase that other developers have been working on for years. It can be intimidating at first, and may take some time for you to learn your way around. Take this project as an opportunity to get comfortable doing this!

## New Technologies

* Sass
* Fetch
* Webpack

## Set Up

1. Download your assigned repo
2. Move the zip file into the folder where you want the project to live 
3. cd into the directory with your zip file 
4. run `unzip [filename]` 
5. cd into the newly unziped directory 
6. On GitHub, make a new repo for your project 
7. Copy the new repo's url
8. In your terminal:
    - remove the old remote `git remote remove origin`
    - then add a new remote `git remote add origin [your new repo url]`


## Requirements 

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
* userData: https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData
* sleepData: https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData
* activityData: https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData
* hydrationData: https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData

#### Add new sleep, activity, and hydration data (POST)
For the currently displayed user, you must be able to add a new sleep, hydration and activity data entry for that user.

For example, if the currently displayed user has an ID of 50, and you want to add a new sleep entry for that user, you would want to send a JSON object through with your POST request that looks like:

```json
{
  "userId": 50,
  "date": "2019/09/23",
  "hoursSlept": 5.4,
  "sleepQuality": 4.9
}
```


### Pull Requests

* Each person must submit 1 pull request to their group mates for feedback
* Each pull request that you did NOT submit must be reviewed by every other team member, individually
* Each pull request should include significant / helpful feedback and conversation
* No pull request may be merged before it has been reviewed, and must not be merged by the person who submitted it

### Inheritance & Refactoring

* Identify redundant code in your classes and opportunities for DRYing it up
* Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior
* Refactor **across** your classes to create a parent class that others inherit methods from


### Accessibility

* You must be able to tab through your app and use it without a mouse
* Your app must still be viewable when tested with a colorblind extension
* You must score as close to 100% in an Accessibility Audit as possible. Be prepared to explain any accessibility audits your application is failing.

### Cross-Browser/Platform Compatibility

* App should be fully responsive from mobile devices - tablets - laptops - large monitors
* Test your app in Safari and Firefox to identify any inconsistencies and file issues for resolving them
* Resolve as many cross-browser compatibility issues as possible

### DOM Manipulation with jQuery

* All DOM manipulation is done with JQuery, there should be no mixture of jQuery and vanilla JavaScript

### Testing with Spies

* Refactor DOM manipulation into methods on an object
* Spy on all DOM manipulation methods to verify that they occurred and were called with the correct arguments
* Use an `afterEach` hook to clean up spies in between tests
* Spy on any class methods that have already been tested elsewhere


## Extensions

* Deploy your updates to GH pages
* Test and fix any inconsistencies of your application in Internet Explorer (BrowserStack is a potential tool that may help with this!)
* Add webpack into YOUR FitLit Project


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

**Novice:** Cannot respond to the question with accuracy. Interviewer may reprhase the question several times or pivot to ask a simpler question. May find a way to gracefully say "I don't know".

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask follow-up question to you - or they may open it up to volunteers in the group to assist.









* Group eval, with individual scores
* We may have you delete some functionality that was implemented during this project and re-implement it on the fly and/or we will be asking technical/conversational questions and expect that any of you can speak to them. (e.g. "Describe what a POST request is and why we might perform one.")

