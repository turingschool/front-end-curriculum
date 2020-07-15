---
title: Refactor Tractor
tags: javascript, oop, mocha, chai, testing
---

## Goals and Objectives

* Build on top of pre-existing code that you did not write and navigate someone else's codebase
* Develop processes for working remotely and submitting pull requests to perform effective code reviews that help ensure the code is accurate and that everyone understands it
* Make network requests to API endpoints to retrieve and manipulate data
* Refactor pre-existing code and use inheritance to DRY up repetitive logic
* Ensure your app is following best practices for accessibility
* Leverage Sass to DRY up your CSS
* Incorporate Webpack to streamline your workflow process
* Leverage Chai Spies to verify that your DOM manipulation is happening 

In this project, you will be building on top of somebody else's pre-existing FitLit codebase. It's uncommon that you'll be starting an application from scratch when you get on the job; more frequently, you're entering into a large codebase that other developers have been working on for years. It can be intimidating at first, and may take some time for you to learn your way around. Take this project as an opportunity to get comfortable doing this!

## New Technologies

* Sass
* Fetch
* [Webpack](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html)

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

| Data Type | Verb | URL |  
|---|---|---|  
| User Data |GET | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData |  
| Sleep Data | GET | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData |  
| Activity Data | GET | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData |  
| Hydration Data | GET | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData |  

#### Add new sleep, activity, and hydration data (POST)
For the currently displayed user, you must be able to add a new sleep, hydration and activity data entry for that user.

For example, if the currently displayed user has an ID of 50, and you want to add a new sleep entry for that user, you would want to send a JSON object through with your POST request that looks like:

| Data Type | Verb | URL | Required Body |  
|---|---|---|---|  
| Sleep Data | POST | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData | `{"userId": integer, "date": string, "hoursSlept": integer, "sleepQuality": integer}` |  
| Activity Data | POST | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData | `{"userId": integer, "date": string, "numSteps": integer, "minutesActive": integer, "flightsOfStairs": integer}` |  
| Hydration Data | POST | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData | `{"userId": integer, "date": string, "numOunces": integer}` | 


### Pull Requests

* Each person must submit at least 1 pull request to their group mates for feedback
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


### Testing with Spies

* Refactor DOM manipulation into methods on an object
* Spy on all DOM manipulation methods to verify that they occurred and were called with the correct arguments
* Use an `afterEach` hook to clean up spies in between tests
* Spy on any class methods that have already been tested elsewhere


## Extensions

* Deploy your updates to GH pages
* Create and implement a new feature for your application (run this by instructors first). 
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader. 
* Implement an animation using CSS and SASS 


### Strategies for Success
* Make sure you are reviewing the original "FitLit" spec so you have a good idea for what the project and its requirements are. 
* Since this project is not separated out into iterations or user stories, make sure that you spending a good amount of time breaking apart tasks and using that project board wisely. Make sure to send over your project board to your PM as well. 
* Every group member must fully understand and be able to speak to all of the code changes that have been made. 


# Project Requirements Rubric
## Functional Expectiations
* Novice: Application crashes during normal usage.
* Advanced Beginner: Application is usable, but has some missing functionality.
* Proficient: Application fulfills all requirements. 
* Exceptional: Application fulfills all requirements, and has functionality that goes above and beyond an MVP.


## Testing
* Novice - There is little or no evidence of testing in the application.
* Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested.
* Proficient - Project has a running test suite that tests multiple levels but fails to cover some features. Chai spies have been attempted with some success. 
* Exceptional - Project has a running test suite that utilizes spies well. The test suite covers almost all aspects of the application.

## SASS
* Novice - There are several (10+) instances of duplication. Code is written with unnecessary selectors or tags which do not increase clarity. No SASS, or VERY minimal SASS is utilized .
* Advanced Beginner - There is some duplication (5-10 instances) in the codebase, and there may be some unnecessary selectors or tags. Application adds organization for the whole stylesheet and within rules, but multiple SASS files have not been utilized. All SASS code lives in a single file, and only a few variables have been used. 
* Proficient - The application has well-factored SASS with all styles separated out into logical stylesheets. Mixins or extends, variables, (appropriate) nesting and color functions have been utilized well. 
* Exceptional - Application fulfills all requirements of the proficient level, and has SASS functionality that goes above and beyond an MVP (see extensions). 

## Accessibility
* Novice - Two or more accessibility areas have not been tested or considered. This may be: an accessibility audit with a score of 80% or lower, errors with color contrast when checking via a colorblind extension, app is not tab-able, large use of non-semantic HTML. 
* Advanced Beginner - One accessibility area has not been tested or considered. This may be: an accessibility audit with a score of 80% or lower, errors with color contrast when checking via a colorblind extension, app is not tab-able, large use of non-semantic HTML. 
* Proficient - All accessibility areas have been considered and tested. An accessibility audit with a score of at least 95%.  
* Exceptional - Meets all requirements for proficient, with an audit score of 100% and has gone above and beyond accessibility requirements (see extensions).

## User Testing / UI
* Novice - The application is confusing or difficult to use. The UI is incomplete, and the app is not responsive.
* Advanced Beginner - The application may be confusing or difficult to use at times. The application shows some effort in the interface, but the result is not effective because UX and/or UI still present an application that is incomplete or difficult to use. The UI is incomplete, and the app is not responsive.
* Proficient - The application has many strong pages/interactions. The application can stand on its own to be used by instructor without guidance from a developer on the team. The application is fully responsive and the UI does not detract from the UX. New features match the style of the existing project, and appropriate error handling messages are displayed. 
* Exceptional - Meets all expectations for Proficient. In addition, the application has clearly had special consideration around usability on devices.

## JavaScript
* Novice - Application generates syntax error or crashes during execution.
* Advanced Beginner - Class methods use a mix of array and object prototypes and for loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.
* Proficient - Class methods use array and object prototypes - for loops are not used in the application. Application shows strong effort towards organization, content, and refactoring.
* Exceptional - Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.

## Workflow
* Novice - The team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* Advanced Beginner - The team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* Proficient - The team makes a series of small, atomic commits that document the evolution of their application. The team conducts a DTR (define the relationship) and utilizes GitHub issues and best pairing practices. Team members utilize a kanban-style project board (we recommend Github Project) and git branches. The team effectively uses Git branches and pull requests for meaningful code review. The evolution of the project is evident through conversation done via code reviews and pull requests.
* Exceptional - All requirements for proficient have been met, and the team has consistently delivered meaningful code review. This may look like: multiple comments on every PR across the team, with specific code comments. 


# Technical Evaluation Rubric

As a group, you will respond to high-level technical questions, interview-style. These questions will all relate to the work you've done on this project. For example, "Describe what a POST request is and why we might perform one."

Individually, you will select a card at random that has a question to respond to. You must give an attempt at responding to it before passing it off to a group member if you're unsure. Imagine you don't know the answer to a question on a technical interview, you won't simply say "I don't know". Will you try to take an educated guess? Will you say you're unsure? Will you try to explain by example?

### We will evaluate your response (individually) based on the following rubric:

* Novice: - Cannot respond to the question with accuracy. Interviewer may rephrase the question several times or pivot to ask a simpler question. May find a way to gracefully say "I don't know".
* Advanced Beginner - Cannot respond to the question with accuracy. May discuss related ideas, but does not quite stay on topic for the question we're asking. May ramble a bit until they throw out the correct term, looking to the interviewer for signs of being on the right track.
* Proficient - Responds to the question with accuracy, but may be a bit vague or unsure of themselves. May answer the question by describing an example rather than having an eloquent articulation of the concept. May not be able to dig much deeper to respond to follow-up questions that may arise.
* Expert - Responds to the question accurately and gracefully. Uses the correct vocabulary when discussing the concept, and is sure of their response. Gives an appropriate amount of detail to thoroughly answer the question, but responds well to any follow-up questions that may arise.

If the evaluator is left wanting a bit more from your response, they may choose to continue to ask follow-up question to you - or they may open it up to volunteers in the group to assist.
