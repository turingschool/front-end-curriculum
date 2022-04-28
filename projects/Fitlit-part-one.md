---
title: FitLit - Part One!
tags: Javascript, OOP, Mocha, Chai, Testing
---

## Goals and Objectives

- Implement ES6 classes that communicate to each other as needed.
- **Use object and array prototype methods to perform data manipulation**.
- Create a dashboard that is easy to use and displays information in a clear way.
- Write modular, reusable code that follows SRP (Single Responsibility Principle).
- Implement a robust testing suite using TDD.
- Make network requests to retrieve data.

In this project, you will be given data from an activity tracker for many users over many days.  Think of something like Fitbit. Fitbit devices log data and present it on a dashboard for their users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones.

![Example Fitbit dashboard](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

## New Technologies
- Fetch API
- [Webpack](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'}


<section class="note">

### Note

The image above is *not* a comp. We expect you to design your own dashboard layout that is relevant to the data that was logged or calculated for a user or group of users. Use inspiration from Fitbit and other fitness/activity apps, but do not copy an app directly.

**You must pull 3 inspirations from 3 different apps that you want to implement in your application**
* Be specific about what piece you are trying to re-create
* You may also pull inspirations from other sites such as [Dribbble](https://dribbble.com/)
</section>

---
## Timeline
Dates and deadlines to be aware of:

#### Monday Week 2 - Submit the following to your PM BEFORE beginning to write code via Slack:
- DTR (be specific about learning goals, schedules, and communication expectations)
- Project board (this should be kept updated throughout the project and will be reviewed by PM in check-ins).
- Planned out Class structure, for example, for a User setup, you can have a ```UserRepository Class ``` and ```User Class```.
- Wireframes
- 3 design inspirations (Please include links and details on what you're trying to re-create).

#### Monday, Week 3 - Project due at 9PM.

- Please submit your Group project part one [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'}

---

### Working with Webpack
This project is set up to use [Webpack](https://webpack.js.org/guides/getting-started/){:target='blank'}, a module bundler. It will take whatever code we write, and bundle it into a series of more efficient files that the browser can read (allowing us to use things like Sass, npm packages and ES6 `import` / `export` syntax).

This [video](https://www.youtube.com/watch?v=GU-2T7k9NfI){:target='blank'} provides a nice overview of some things webpack lets us do out of the box, most of which is set up for you already.

This [article](https://survivejs.com/webpack/what-is-webpack/){:target='blank'} provides some more detail into how Webpack works, and what the `webpack.config.js` file is doing (**don't mess with this file unless you're sure you need to -- feel free to ask before you change things**).


<section class="answer">

### Notes on Webpack

Webpack is a powerful tool, which you're encouraged to explore more (the Turing [Webpack lesson plan](https://frontend.turing.io/lessons/module-2/build-processes-with-npm-webpack.html){:target='blank'} is a great place to start). But there are a few things that you should know when starting to work with it:

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

---

## Requirements

### Initial Setup

For this project, you need to use this [FitLit Starter Kit](https://github.com/turingschool-examples/fitlit-starter-kit) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up, follow the instructions to verify it is setup correctly.

### Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) documentation pages.

## Project Iterations

Each iteration has a "Data" section and "Dashboard" section. Data deals with using the data to calculate something meaningful for the user. The Dashboard section deals with what to display on the page. Unlike your week-1 project, the classes and method names are not completely drawn out for you.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on class structure and the calculation methods, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

<section class="note">

### Note
For this dataset, when "today" is referenced in iterations, it is the last date in the data. The latest week is the most recent 7 days in the data.
</section>

<section class="note">

### 3rd Party Libraries

***Please get instructor approval first before using additional 3rd-party libraries.***  You may use [Day.js](https://www.npmjs.com/package/dayjs) to help with manipulating / formatting dates.  You may also use [Chart.js](https://www.npmjs.com/package/chart.js) in order to help with displaying some data.  (Note: Learning a new technology does take extra time.  Plan ahead and maybe do a research spike over the first weekend, before deciding to use it.)
- ***You are not required to use any 3rd party libraries***
</section>

### Iteration 1 - Get Familiar with the Data and Users

#### Data
Go look into the `data` directory and explore the data (there is also an outline of the structure of the data in the README of the starter kit repo). Get a sense of what each property is and what the data nesting is like.

Once you have looked over each data file, start with the `users.js` data file. To work with this data, this is the class structure you should start out with:

_UserRepository_ class

```js
new UserRepository(data);
```

* A `UserRepository` holds onto all of the `User` objects
* It should have a parameter to take in user `data`
* It should have methods to determine:
  * Given a user's ID, what is their user data?
  * The average step goal amongst all users

_User_ class

```js
new User(userData);
```

* A `User` represents a single user
* It should have a parameter to take in a `userData` object
* Each user holds on to the user properties from the data file
* Should have a method to:
  * Return a user's first name only


#### Dashboard
Use the `scripts.js` file to add information to the DOM. This JS file should call methods from your classes to retrieve information. There should not be any DOM manipulation within the _User_ or _UserRepository_ class files.

To develop this dashboard, first choose a user at random - someone with a randomly generated name that speaks to you. On the dashboard for a user:

* Create an info card on the dashboard with all of user's info on the page
* Display their first name somewhere prominently on the page to welcome them
* For a specific user, display how their step goal compares to the average step goal amongst all users (this display should _not_ be hard-coded)

---

### Iteration 2 - Fetch Calls

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from provided Endpoints in the table below.

<section class="note">
### Hint

The expectation for Mod 2 is that you will avoid using `async/await`.  We know `async/await` is tempting, but it is important that you are able to work with the approaches that pre-date the introduction of `async/await`.  Consider doing some research on [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
</section>  

| Data Type | Verb | URL |  
|---|---|---|  
| User Data |GET | https://fitlit-api.herokuapp.com/api/v1/users |  
| Sleep Data | GET | https://fitlit-api.herokuapp.com/api/v1/sleep |  
| Activity Data | GET | https://fitlit-api.herokuapp.com/api/v1/activity |  
| Hydration Data | GET | https://fitlit-api.herokuapp.com/api/v1/hydration |  

Once you've got fetch working, you can delete your hardcoded data file!

### Iteration 3 - Hydration

#### Data
Create classes and methods that can calculate:

* For a user (identified by their `userID` - this is the same for all methods requiring a specific user's data), the average fluid ounces consumed per day for all time
* For a user, how many fluid ounces they consumed for a specific day (identified by a date)
* For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day

You have to decide which classes should contain each method. Think about whose responsibility it is to own the method.

#### Dashboard
For your user (or any user you choose), add:

* A display to show how much water they have consumed today (these displays are often called "widgets" in the FE tech world)
* A display to show much water they have consumed each day over the course of the latest week

---

### Iteration 4 - Sleep

#### Data
Create classes and methods that can calculate:

* For a user (identified by their `userID`), the average number of hours slept per day
* For a user, their average sleep quality per day over all time
* For a user, how many hours they slept for a specific day (identified by a date)
* For a user, their sleep quality for a specific day (identified by a date)
* For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
* For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
* For all users, the average sleep quality

#### Dashboard
Items to add to the dashboard:

* For a user, their sleep data for the latest day (hours slept and quality of sleep)
* For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
* For a user, their all-time average sleep quality and all-time average number of hours slept

---
### Extensions
_Choose at least one_
* Design a step challenge between friends. Assign your user a few friends from the user data file. Add the methods you need and a display on the dashboard to see their friends step count for a whole week, and then show who had the most steps for that week.
* Implement one of the listed 3rd party libraries or one of your choosing with instructor approval.
* Calculate and display this trend: for a user, what days had increasing steps for 3 or more days?
* Drag-and-drop widgets (if you did not go with a widget theme, then add some widgets for this extension). You can use a 3rd-party library to help you accomplish this.
* Priority stats - give the user the ability to select the widgets they always want to see at the top of the page. This is a customization the user would want to make, and you would want to save this customization to `localStorage`.
* **Admin** view. Modify your HTML page, or create a new HTML page that is an admin dashboard display. The admin would want to see views of data from all users. What are the trends of all users? How can you display data from all users in a meaningful way?

---

#### Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.

You are expected to research and implement `beforeEach` in your test files.

You are *expected* to test:

* All class properties
* All class methods and updates to their properties
* Any helper methods you build out

You are *not expected* to test:

* DOM manipulation / DOM manipulating methods (like `document.querySelector(...)`)
* Fetch calls


---

## Rubric

### Functional Expectations
* 4: Application fulfills expectations of iterations 1 - 4 *as well as* an extension.
* 3: Application fulfills expectations of iterations 1 - 4 with no bugs or missing functionality.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style / OOP / Fetch
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application is expertly divided into logical components each with a clean, single responsibility.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. Application is effectively broken into logical components, but violate the principle of SRP.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring. Divisions of logic into classes are inconsistent or unclear.
* 1: Application generates syntax error or crashes during execution. Application logic shows poor decomposition with too much logic mashed together.

### Test-Driven Development
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths. Tests must be passing to be considered.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files. Some use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements. No use of beforeEach to DRY up tests. Tests must be passing to be considered.
* 1: Application does not demonstrate strong use of TDD, and some tests might be failing.

### User Interface
* 4: The application can stand on its own to be used by an instructor without guidance from a developer on the team. The UI does not detract from the UX. Design is responsive across small, medium and large breakpoints.  
* 3: The application has many strong displays/interactions.The UI does not detract from the UX.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.
* 1: The application is confusing or difficult to use.

------------------------------------------------------------------

### Minimum Professionalism Expectations
* Team collaborates effectively.  Team holds daily standups throughout project.
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* The Project Board is utilized with Github issues and labels.
* Developer uses PRs from feature branches before adding new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
