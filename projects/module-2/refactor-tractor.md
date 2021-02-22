# Refactor Tractor - FitLit

## Goals and Objectives

* Build on top of pre-existing code that you did not write and navigate someone else's codebase
* Make network requests to API endpoints to retrieve and manipulate data
* Refactor pre-existing code and use inheritance to DRY up repetitive logic
* Ensure your app is following best practices for accessibility
* Leverage Sass to DRY up your CSS
* Incorporate Webpack to streamline your workflow process

In this project, you will be building on top of somebody else's pre-existing FitLit codebase. It's uncommon that you'll be starting an application from scratch when you get on the job; more frequently, you're entering into a large codebase that other developers have been working on for years. It can be intimidating at first, and may take some time for you to learn your way around. Take this project as an opportunity to get comfortable doing this!

## New Technologies

* Sass
* Fetch
* [Webpack](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html)

## Timeline
Dates and deadlines to be aware of:

* **Wednesday, February 24th** - Make sure to have project board ready with tickets already completed and plans to complete for sprint over the weekend. (*DTR should also be complete*)
* **Monday, March 1st** - Project board up to date with tasks completed and plans for finishing final sprint. (*May review a couple PRs as well for code reviews*)
* **Wednesday, March 3rd** - Project due at 9PM.
* **Thursday, March 4th** - Project evals.

Please submit your finished projects [here](https://forms.gle/dTjaDmgDog9U8dGn6){:target='blank'}

---

## Set Up

1. Download your assigned repo [fitlit-a](https://drive.google.com/file/d/1-foUFLx8vyn8XkI6WVlf48e-0BrdpdF5/view?usp=sharing){:target='blank'} or [fitlit-b](https://drive.google.com/file/d/1i68mv2A5oRJtKzJsF2W6tojNnVkaByDB/view?usp=sharing){:target='blank'}

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

#### Need to know

- To start your development server, run `npm start`. Webpack will create a live version of your site on a local server, where you can see your changes happen in real time. To access it, in your browser, navigate to the `localhost` address that your terminal gives you. Be aware, if you write a breaking change, your server may crash. The terminal will give you some error report about why the crash happened.

- Don't worry about running `npm build` until you are [ready to deploy your site](https://github.com/turingschool-examples/webpack-starter-kit#deploying-to-github-pages)

- You need to use [`import` / `export`](https://www.youtube.com/watch?v=_3oSWwapPKQ) syntax
  - Note: This video goes into Babel and Rollup. Webpack handles the transpiling of our ESModules code into something the browser can read.

- Webpack needs to know where to look for your files. Look [here](https://github.com/turingschool-examples/webpack-starter-kit#where-to-add-your-code) for a description of where webpack is set up to look for your HTML, CSS, JS and image files. Some general points:
  - You need to import images into the entrypoint file (usually `scripts.js` or `index.js`).
  - You need to `import` you Scss/CSS files into the entrypoint file too
  - Make sure HTML, JS and Scss/CSS files are all in the `/src` directory
  - You have to `import` any required modules and code for tests into your test files

#### Nice to know

This project is set up to use [Webpack](https://webpack.js.org/guides/getting-started/), a module bundler. It will take whatever code we write, and bundle it into a series of more efficient files that the browser can read (allowing us to use things like Sass, npm packages and ES6 `import` / `export` syntax).

This [video](https://www.youtube.com/watch?v=GU-2T7k9NfI) provides a nice overview of some things webpack lets us do out of the box, most of which is set up for you already.

This [article](https://survivejs.com/webpack/what-is-webpack/) provides some more detail into how Webpack works, and what the `webpack.config.js` file is doing (don't mess with this file unless you're sure you need to -- feel free to ask before you change things).

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html) is a great place to start). But there are a few things that you should know when starting to work with it:

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

| Data Type | Verb | URL | Required Body |  
|---|---|---|---|  
| Sleep Data | POST | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData | `{"userID": integer, "date": string, "hoursSlept": integer, "sleepQuality": integer}` |  
| Activity Data | POST | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData | `{"userID": integer, "date": string, "numSteps": integer, "minutesActive": integer, "flightsOfStairs": integer}` |  
| Hydration Data | POST | https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData | `{"userID": integer, "date": string, "numOunces": integer}` |


---

### Sass

Refactor the existing CSS into Sass. You should break your Sass out into separate files. At a minimum, you will want an `index.scss` file that imports your partials, and a `variables.scss` file that contains any of your Sass variables or function definitions.  You should also include a [normalize or reset](https://frontend.turing.io/lessons/module-1/reset-vs-normalize.html){:target='blank'} file to help with cross browser compatibility.  Identify common/re-used elements on your page to determine the remaining partials you might want.

Your Sass should be making use of:

* variables for colors, fonts, etc.
* nesting, when/where appropriate
* color functions for ensuring a cohesive color scheme
* at least **two** mixins or extends

---

### User Testing / UI
* Test out the application manually and file errors for any UI or UX issues you can find
* Fix UI / UX problems. If a display feels hard to use, think about how you can remake it (wihout changing the original design of the app)
* Your app should be **fully responsive** from mobile devices - tablets - laptops - large monitors
---

### Extensions
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader. 
* Implement an animation using CSS and SASS.
* Create and implement a new feature for your application (run this by instructors first). 


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
* Your HTML must be written semantically and ARIA tags should be used (*ONLY if needed / appropriate*)


## Extensions

* Deploy your updates to GH pages
* Create and implement a new feature for your application (run this by instructors first).
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader.
* Implement an animation using CSS and SASS

### Testing
In addition to your refactoring, you also want to make sure the application is fully tested. This means:

- Initial values of class properties need tests
- Class methods need tests for all expected outcomes
- Any methods that modify class properties should be test
- **You are not required to test your fetch calls**

<section class="note">
## Strategies for Success
* Make sure you are reviewing the original ["FitLit" spec](https://frontend.turing.io/projects/fitlit.html) so you have a good idea for what the project and its requirements are.
* Since this project is not separated out into iterations or user stories, make sure that you spending a good amount of time breaking apart tasks and using that project board wisely. Make sure to send over your project board to your PM as well.
* Every group member must fully understand and be able to speak to all of the code changes that have been made.
</section>

---

# Project Requirements Rubric

## Functional Expectiations
* 4: Application fulfills all requirements *as well as* an extension.
* 3: Application fulfills all requirements.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

## Testing
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files.
* 2: Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and some tests do not reflect changes made to implementation.
* 1: Tests have not been updated to reflect changes made in refactor.

## SASS
* 4: Application fulfills all requirements previously mentioned, and has SASS functionality that goes above and beyond an MVP.
* 3: The application has well-factored SASS with all styles separated out into logical stylesheets. Mixins or extends, variables, (appropriate) nesting and color functions have been utilized well.
* 2: Application adds organization for the whole stylesheet and within rules, but multiple SASS files have not been utilized. All SASS code lives in a single file, and only makes use of variables. There is some duplication in the codebase, and there may be some unnecessary selectors or tags. 
* 1: The application makes little to no use of SASS and is not separated into logical stylesheets. There are many instances of duplication

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