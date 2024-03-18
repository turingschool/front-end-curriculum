---
title: FitLit - Part One!
tags: Javascript, mocha, chai, testing, fetch
---

## Goals and Objectives

- Use object and array prototype methods to perform data manipulation.
- Create a user interface that is easy to use and displays information in a clear way.
- Write DRY, reusable code that follows SRP and trends toward function purity
- Implement a robust testing suite using TDD.
- Make network requests to retrieve data.
- Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project.

In this project, you will be given data from an activity tracker for many users over many days. Think of something like Fitbit or Strava. Activity devices log data and present it on a dashboard for their users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones.

![Example Fitbit dashboard](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

<section class="note">
### Note

The image above is *not* a comp. We expect you to design your own dashboard layout that is relevant to the data that was logged or calculated for a user or group of users. Use inspiration from Fitbit and other fitness/activity apps, but do not copy an app directly.

**Find 3 inspirations from 3 different apps that you want to use to guide the user interface of your application.** (Google image search is great for finding inspiration as well as a site called [Dribbble](https://dribbble.com/)).

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

---

## Requirements

### Initial Setup

For this project, you need to use this [FitLit Starter Kit](https://github.com/turingschool-examples/fitlit-starter-kit) repo. Follow the instructions in the README for forking the repo and getting it set up. Once you have it set up, follow the instructions to verify it is set up correctly.

### Testing Setup

There is some boilerplate for testing in the starter-kit repo. You will need to set up the rest of the tests yourself. If you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) documentation pages.

## Project Iterations

Each iteration has a “Data” section and “Dashboard” section. Data deals with using the data to calculate something meaningful for the user. The Dashboard section deals with what to display on the page.

Don’t get too caught up with polishing your dashboard too early. You’ll want to focus your energies first on calculation functions, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

<section class="note">
### Note About Dates

For this dataset, when "today" is referenced in iterations, it is the last date in the data. The latest week is the most recent 7 days in the data (even if they aren't consecutive).   

You should not be hardcoding the date.  You should be using code to find the last (most recent) date in the dataset for the current user, using that date as "today", and displaying data based on that date. Note that different users may have a different date as their most recent date - once you are dynamically pulling this date from the data, it shouldn't matter that it changes for different users.
</section>

<section class="note">
### Third-Party Libraries

***Please get instructor approval first before using additional third-party libraries.*** You may use [Day.js](https://www.npmjs.com/package/dayjs) to help with manipulating / formatting dates if you find it necessary. You may also use [Chart.js](https://www.npmjs.com/package/chart.js) in order to help with displaying some data. (*Note: Learning a new technology does take extra time.  Plan ahead and maybe do a research spike over the first weekend, before deciding to use it.*)

- ***You are not required to use any 3rd party libraries***
</section>

<section class="answer">
### Iteration 1 - Get Familiar with the Data and Users

#### User Data 

Go look into the `data` directory and explore the data (there is also an outline of the structure of the data in the README of the starter kit repo). Get a sense of what each property is and what the data nesting is like.

Once you have looked over each data file, start with the `users.js` data file. To work with this data, here is the functionality that you need to implement. 

You should create functions that:

- Return a user's data based on their ID.
- Return the average step goal amongst all users.

#### User Stories (Dashboard)

Use the `domUpdates.js` file to update the DOM. There should not be any DOM manipulation within your `scripts.js` file.

*On load, a user should be chosen at random.*

- As a user, I should be able to view an info card with all of my info on the page
- As a user, I should be able to see my first name somewhere prominently on the page to welcome me
- As a user, I should be able to see how my step goal compares to the average step goal amongst all users (this display should *not* be hard-coded)
</section>

<section class="answer">
### Iteration 2 - Hydration

#### Hydration Data

You should create functions that:

- Return the user's average fluid ounces consumed per day for all time
- Return the user's fluid ounces they consumed for a specific day
- Return how many fluid ounces of water a user consumed each day over the course of a week (7 days)

<section class="note">
### Note

All functions requiring a specific user's data should be identified by their `userID`.  Also note that all functions returning data for a specific day should be identified by a date.
</section>

#### User Stories (Dashboard)

- As a user, I should be able to see how much water I have consumed today (*these displays are often called “widgets” in the FE tech world*)
- As a user, I should be able to see much water I have consumed each day over the course of the latest week
</section>

<section class="answer">
### Iteration 3 - Fetch Calls

You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from provided Endpoints in the table below.

<section class="note">
### Hint

The expectation for Mod 2 is that you will avoid using `async/await`.  We know `async/await` is tempting, but it is important that you are able to work with the approaches that pre-date the introduction of `async/await`.  Consider doing some research on [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
</section> 

| Data Type | Verb | URL |  
|---|---|---|  
| User Data |GET | https://fitlit-api.herokuapp.com/api/v1/users |  
| Sleep Data | GET | https://fitlit-api.herokuapp.com/api/v1/sleep |  
| Hydration Data | GET | https://fitlit-api.herokuapp.com/api/v1/hydration |  
| Activity Data | GET | https://fitlit-api.herokuapp.com/api/v1/activity |  

Once you've got fetch working, **delete your hardcoded data file**!  Make sure you are not using this data file for your testing.  Instead, create smaller sample datasets in their own file to use for testing.
</section>

<section class="answer">
### Iteration 4 - Sleep

#### Sleep Data

You should create functions that:

- Return the user's average number of hours slept per day
- Return the user's average sleep quality per day over all time
- Return how many hours a user slept for a specific day
- Return a user's sleep quality for a specific day
- Return how many hours a user slept each day over the course of a given week (7 days)
   - *This function should be able to calculate this for any week, not just the latest week*
- Return a user's sleep quality for each day over the course of a given week (7 days) 
  - *this function should be able to calculate this for any week, not just the latest week*

#### User Stories (Dashboard)

- As a user, I should be able to see my sleep data for the latest day (*hours slept and quality of sleep*)
- As a user, I should be able to see my sleep data over the course of the latest week (*hours slept and quality of sleep*)
- As a user, I should be able to see my all-time average sleep quality and all-time average number of hours slept
</section>

<section class="answer">
### Iteration 5 - Activity (Extension)

#### Activity Data

You should create functions that:

- Calculate the miles a user has walked based on their number of steps (*use their `strideLength` to help calculate this*), based on a specific day
- Return how many minutes a user was active for a given day
- Return if a user reached their step goal for a given day

#### Dashboard

- As a user, I should be able to see my number of steps I've made for the latest day
- As a user, I should be able to view the number minutes I've been active for the latest day
- As a user, I should also see the distance I have walked (*in miles*) for the latest day based on my step count
- As a user, I should be able to view a weekly view of my step count and if I have reached my step count goal for each day
</section>

<section class="answer">
### Additional Extension Options

* Implement one of the listed third-party libraries or one of your choosing with instructor approval.
* Design a step challenge between friends. Assign your user a few friends from the user data file. Add the functions you need and a display on the dashboard to see their friends step count for a whole week. The display should also show who had the most steps for that week.
* Calculate and display what days a user had increasing steps for 3 or more days.
* Build drag-and-drop widgets (*if you did not go with a widget theme, then add some widgets for this extension*). You can use a 3rd-party library to help you accomplish this or utilize the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API){:target='blank'}.
* Priority stats - give the user the ability to select the widgets they always want to see at the top of the page. This is a customization the user would want to make, and you would want to save this customization to `localStorage`.
* You may also collaborate with instructors to personalize an extension for this project.
</section>

---

## Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That’s far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your functions are working correctly because you can do the calculations by hand with a much smaller dataset.

**You are *expected* to:**
- Build a robust testing suite.  This might include testing pure functions in your `scripts.js`.

**Remember to test all possible outcomes (happy/sad/etc). Ask yourself:**

- Does the function return anything?
- Are there different possible outcomes to test based on different arguments being passed in?

**You are *not expected* to test:**

- DOM manipulation / DOM manipulating functions (like `document.querySelector(...)`)
- Fetch calls

---
## Minimum Collaboration and Professionalism Expectations

* Team holds daily standups throughout project.
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* A project board is utilized (and updated throughout the project) with Github issues and labels.
* Team uses branches, PRs and thorough code reviews to add new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
  * List of contributors
* **Team collaborates effectively to accomplish the shared goal.  Team productively and professionally works through challenges and conflicts to ensure all team members are able to be heard and contribute throughout the project.**  
  * Instructors are available to offer support and guidance but conversations around what *is* and what *is not* working are expected to be led by the team members themselves.

### Daily Check-Ins

Every work day, your group should do a check-in as a whole group, preferably live over Zoom, and discuss at least these things:

- What is the state of the project so far? (update your GitHub project board if necessary)
- What is each person working on today?
- Are there any blockers, and what is your plan to get through the blocker?

Your daily check-in (sometimes called “stand-ups”) schedule should be outline in your DTR so the whole group is aware of the meeting.

---

## Rubric

For the rubric sections below, you will be scored as **Wow**, **Yes** or **Not Yet** depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstrate competency.  These are just some examples.

<section class="answer">
### Functional Expectations

💫ON TRACK💫 can look like:
- Application fulfills all requirements of iterations 1-4 without bugs.

✨**WOW**✨ can look like:
- Application fulfills all requirements *as well as* an extension.

</section>

<section class="answer">
### JavaScript & Style / Functional Programming / Fetch

💫ON TRACK💫 can look like:
- Code is divided into logical components each with a clean, single responsibility.
- Array prototype methods are used to iterate instead of for loops.
- All DOM manipulation is held in the `domUpdates.js` file.  No DOM manipulation occurs outside of this file.
- Variables and functions are consistently and appropriately named.
- Code leverages JavaScript's truthy/falsey principles.
- Demonstrates efforts towards making functions pure when possible. *Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.*

✨**WOW**✨ can look like:
- Effectively implements one or more closure throughout project.  *Note: See Closures lesson on M2 lesson page as a resource.*
</section>

<section class="answer">
### Test-Driven Development

💫ON TRACK💫 can look like:
- Application has a robust and thorough test suite
- Test suite is organized.
  - Each function is tested in its own it block.
- All scenarios/outcomes/paths are tested for your functions, including happy and sad paths.
  - Each path is tested in its own `it` block.
- Rather than using the production data, small sample data is stored in its own file and used for testing.
  - Sample data has been crafted to create the scenarios needed for thorough testing.
  - ***For example:** If you need to test a scenario where a user hasn't been active for 7 days, you need test data that creates that scenario.*
- `beforeEach` hook is used to DRY up test files.
- There are no failing/pending tests upon submission.
</section>

<section class="answer">
### User Interface

💫ON TRACK💫 can look like:
- The application can stand on its own to be used by an instructor without guidance from a developer on the team.
- UI/UX is intuitive and easy to read/use.
- Helpful messaging is displayed to prevent user confusion.
  - ***For example:** If a user hasn't been active for 7 days, a message is displayed saying there isn't enough data to show their weekly report for each data point.*

✨**WOW**✨ can look like:
- Design is responsive across small, medium and large breakpoints.
</section>

---

### Collaboration and Professionalism 
- See "Minimum Collaboration and Professionalism Expectations" above.  
- While this is not a scored rubric section, every team member is expected to fully participate, contribute, communicate and collaborate with the team throughout the entirety of this project. **Failure to do so can result in an individual failing the project, even if the group/project is otherwise passing**.