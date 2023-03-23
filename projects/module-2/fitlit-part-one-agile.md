---
title: FitLit - Part One!
tags: Javascript, OOP, mocha, chai, testing, fetch
---

## Goals and Objectives

- **Use object and array prototype methods to perform data manipulation**.
- Create a dashboard that is easy to use and displays information in a clear way.
- Write modular, reusable code that follows SRP (Single Responsibility Principle).
- Implement a robust testing suite ideally using TDD.
- Make network requests to retrieve data.

In this project, you will be given data from an activity tracker for many users over many days. Think of something like Fitbit or Strava. Activity devices log data and present it on a dashboard for their users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones.

![Example Fitbit dashboard](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

<section class="note">
### Note

The image above is *not* a comp. We expect you to design your own dashboard layout that is relevant to the data that was logged or calculated for a user or group of users. Use inspiration from Fitbit and other fitness/activity apps, but do not copy an app directly.

**You must pull 3 inspirations from 3 different apps that you want to use to guide the user interface of your application.** (Google image search is great for finding inspiration).

Be specific about what piece you are trying to re-create. What specifically do you want to replicate from this site? (i.e. layout, color palette, flat design, font, etc)
</section>

---
## Timeline and Deliverables
Dates and deadlines to be aware of:

#### Monday Week 2 - Submit the following to your PM BEFORE beginning to write code via Slack:
- DTR - some things to highlight:
  - Individual learning goals
  - Schedules
  - Communication expectations
  - When you will do a quick 15-minute daily check-in as a whole group
- Project board (this should be kept updated throughout the project and will be reviewed by PM in check-ins).
- 3 design inspirations (Please include links and details on what you're trying to re-create).
- Wireframes (a rough sketch of your website for planning - pen and paper is perfectly fine for this)

#### Monday, Week 3 - Project due at 9PM.

- Submit part one of your project [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'}

---

### Working with Webpack
This project is set up to use [Webpack](https://webpack.js.org/guides/getting-started/){:target='blank'}, a module bundler. It will take whatever code we write, and bundle it into a series of more efficient files that the browser can read (allowing us to use things like Sass, npm packages and ES6 `import` / `export` syntax).

This [video](https://www.youtube.com/watch?v=GU-2T7k9NfI){:target='blank'} provides a nice overview of some things webpack lets us do out of the box, most of which is set up for you already.

This [article](https://survivejs.com/webpack/what-is-webpack/){:target='blank'} provides some more detail into how Webpack works, and what the `webpack.config.js` file is doing (**don't mess with this file unless you're sure you need to -- feel free to ask before you change things**).


<section class="answer">
### Notes on Webpack

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'} is a great place to start). But there are a few things that you should know when starting to work with it:

- You need to use [`import` / `export`](https://www.youtube.com/watch?v=_3oSWwapPKQ){:target='blank'} syntax
	- Note: This video goes into Babel and Rollup. Webpack handles the transpiling of our ESModules code into something the browser can read.

- Webpack needs to know where to look for your files. Look [here](https://github.com/turingschool-examples/webpack-starter-kit#where-to-add-your-code){:target='blank'} for a description of where webpack is set up to look for your HTML, CSS, JS and image files. Some general points:
	- You need to import images into the entrypoint file (usually `scripts.js` or `index.js`).
	- You need to `import` your CSS files into the entrypoint file too
	- Make sure HTML, JS and CSS files are all in the `/src` directory
	- You have to `import` any required modules and code for tests into your test files

- While developing, run `npm start`. Webpack will create a live version of your site on a local server, where you can see your changes happen in real time. To access it, in your browser, navigate to the `localhost` address that your terminal gives you. Be aware, if you write a breaking change, your server may crash. The terminal will give you some error report about why the crash happened.
  - The command `control + c` is used to stop the local server.  Just closing the terminal without stopping the server first could mean things continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use.  

- Don't worry about running `npm build` until you are [ready to deploy your site](https://github.com/turingschool-examples/webpack-starter-kit#deploying-to-github-pages){:target='blank'}  

- Do not run `npm audit fix --force`.  This will update to the latest version of packages.  We are not using the latest version of webpack (see starter-kit README for version) so updating to the latest version will cause problems.
</section>


### Initial Setup

For this project, you need to use this [FitLit Starter Kit](https://github.com/turingschool-examples/fitlit-starter-kit) repo. Follow the instructions in the README for forking the repo and getting it set up. Once you have it set up, follow the instructions to verify it is set up correctly.

### Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) documentation pages.

## Project Iterations

Each iteration has a “Data” section and “Dashboard” section. Data deals with using the data to calculate something meaningful for the user. The Dashboard section deals with what to display on the page.

Don’t get too caught up with polishing your dashboard too early. You’ll want to focus your energies first on the calculation methods, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

<section class="note">
### Note About Dates

For this dataset, when "today" is referenced in iterations, it is the last date in the data. The latest week is the most recent 7 days in the data (even if they aren't consecutive).   

You should not be hardcoding the date.  You should be using code to find the last (most recent) date in the dataset for the current user, using that date as "today", and displaying data based on that date. Note that different users may have a different date as their most recent date - once you are dynamically pulling this date from the data, it shouldn't matter that it changes for different users.
</section>

<section class="note">
### Third-Party Libraries

***Please get instructor approval first before using additional third-party libraries.*** You may use [Day.js](https://www.npmjs.com/package/dayjs) to help with manipulating / formatting dates if you find it necessary. You may also use [Chart.js](https://www.npmjs.com/package/chart.js) in order to help with displaying some data. (Note: Learning a new technology does take extra time.  Plan ahead and maybe do a research spike over the first weekend, before deciding to use it.)

- ***You are not required to use any 3rd party libraries***
</section>

## Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That’s far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.

You are *expected* to test all class properties and methods, and you are expected to research and implement `beforeEach` in your test files.

Remember to test all possible outcomes (happy/sad/etc). Ask yourself:

- What is the value of each property?
- Does the method return anything?
- Does the method update any properties?
- Are there different possible outcomes to test based on different arguments being passed in?

You are *not expected* to test:

- DOM manipulation / DOM manipulating methods (like `document.querySelector(...)`)
- Fetch calls

## Daily Check-Ins

Every work day, your group should do a check-in as a whole group, preferably live over Zoom, and discuss at least these things:

- What is the state of the project so far? (update your GitHub project board if necessary)
- What is each person working on today?
- Are there any blockers, and what is your plan to get through the blocker?

Your daily check-in (sometimes called “stand-ups”) schedule should be outline in your DTR so the whole group is aware of the meeting.

<section class="answer">
### Iteration 1 - Get Familiar with the Data and Users

#### Data

Go look into the `data` directory and explore the data (there is also an outline of the structure of the data in the README of the starter kit repo). Get a sense of what each property is and what the data nesting is like.

Once you have looked over each data file, start with the `users.js` data file. To work with this data, here is the functionality that you ned to implement. Create a class structure and methods that can calculate:

- A place holds onto all of the user data objects (which takes in the user data)
- Methods to determine:
    - Given a user’s ID, what is their user data?
    - The average step goal amongst all users
    - A user’s first name only

#### Dashboard

Use the `scripts.js` file to add information to the DOM. This JS file should call methods from your classes to retrieve information. There should not be any DOM manipulation within the class files.

To develop this dashboard, you should randomly generate a user. On the dashboard for the user:

- Create an info card on the dashboard with all of user’s info on the page
- Display their first name somewhere prominently on the page to welcome them
- For a specific user, display how their step goal compares to the average step goal amongst all users (this display should *not* be hard-coded)
</section>

<section class="answer">
### Iteration 2 - Hydration

#### Data

Create a class structure and methods that can calculate:

- For a user (identified by their `userID` - this is the same for all methods requiring a specific user’s data), the average fluid ounces consumed per day for all time
- For a user, how many fluid ounces they consumed for a specific day (identified by a date)
- For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day

#### Dashboard

For your user (or any user you choose):

- Display to show how much water they have consumed today (these displays are often called “widgets” in the FE tech world)
- Display to show much water they have consumed each day over the course of the latest week
</section>

<section class="answer">
### Iteration 3 - Fetch Calls

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from provided Endpoints in the table below.

| Data Type | Verb | URL |  
|---|---|---|  
| User Data |GET | https://fitlit-api.herokuapp.com/api/v1/users |  
| Sleep Data | GET | https://fitlit-api.herokuapp.com/api/v1/sleep |  
| Hydration Data | GET | https://fitlit-api.herokuapp.com/api/v1/hydration |  
| Activity Data | GET | https://fitlit-api.herokuapp.com/api/v1/activity |  

Once you've got fetch working, you should be able to delete your hardcoded data file and everything will work the same!

<section class="note">
### Hint

The expectation for Mod 2 is that you will avoid using `async/await`.  We know `async/await` is tempting, but it is important that you are able to work with the approaches that pre-date the introduction of `async/await`.  Consider doing some research on [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
</section>  
</section>

<section class="answer">
### Iteration 4 - Sleep

#### Data

Create a class structure and methods that can calculate:

- For a user (identified by their `userID`), the average number of hours slept per day
- For a user, their average sleep quality per day over all time
- For a user, how many hours they slept for a specific day (identified by a date)
- For a user, their sleep quality for a specific day (identified by a date)
- For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
- For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
- For all users, the average sleep quality

#### Dashboard

Items to add to the dashboard:

- For a user, their sleep data for the latest day (hours slept and quality of sleep)
- For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
- For a user, their all-time average sleep quality and all-time average number of hours slept
</section>

<section class="answer">
### Iteration 5 - Activity

#### Data

Create a class structure and methods that can calculate:

- For a specific day (specified by a date), calculate the miles a user has walked based on their number of steps (use their `strideLength` to help calculate this)
- For a user, (identified by their `userID`) how many minutes were they active for a given day (specified by a date)?
- For a user, did they reach their step goal for a given day (specified by a date)?

#### Dashboard

Items to add to the dashboard:

- For a user, the number of steps for the latest day
- For a user, the number minutes active for the latest day
- For a user, the distance they have walked (in miles) for the latest day based on their step count
- For a user, a weekly view of their step count, and if they reached their step count goal for each day
</section>

## Rubric

### Functional Expectations
* 4: Application fulfills expectations of iterations 1 - 4 *as well as* an extension that you create and let your project manager know about before submission.
* 3: Application fulfills expectations of iterations 1 - 4 with no bugs or missing functionality.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### JavaScript / SRP / Fetch
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application is expertly divided into logical components each with a clean, single responsibility.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. Application is effectively broken into logical components, but violate the principle of SRP.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring. Divisions of logic into classes are inconsistent or unclear.
* 1: Application generates syntax error or crashes during execution. Application logic shows poor decomposition with too much logic mashed together.

### Testing
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths. Tests must be passing to be considered.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files. Some use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements. No use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 1: Application does not demonstrate strong use of TDD, and some tests might be failing.

### User Interface
* 4: The application can stand on its own to be used by an instructor without guidance from a developer on the team. The UI does not detract from the UX. Design is responsive across small, medium and large breakpoints.  
* 3: The application has many strong displays/interactions.The UI does not detract from the UX.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.
* 1: The application is confusing or difficult to use.

---

### Minimum Professionalism Expectations
* Team collaborates effectively.  Team holds daily check-ins throughout project.
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* The Project Board is utilized with Github issues and labels.
* Developer uses PRs from feature branches before adding new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
