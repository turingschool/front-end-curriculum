---
title: FitLit
tags: javascript, oop, mocha, chai, testing
---

## Goals and Objectives

- Follow the specification below to make a working application
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- **Use object and array prototype methods to perform data manipulation**
- Display information on the page while maintaining ability to test class properties and methods
- Create a data dashboard that is easy to use and displays information in a clear way

In this project, you will be given data from an activity tracker for many users over many days. Think of something like Fitbit. Fitbit devices log data and present it on a dashboard for their users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones.

![Example Fitbit dashboard](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

The image above is _not_ a comp. We expect you to design your own dashboard layout that is relevant to the data that was logged or calculated for a user or group of users. Use inspiration from Fitbit and other fitness/activity apps, but do not copy an app directly.

This is an extremely common task as a front-end developer. Given a dataset from your engineering team, how can you take the data and display it in a meaningful way?

This project is divided into a series of iterations - complete each iteration in order, one-by-one. Through each iteration, you should use TDD to drive implementation of your code.


## Requirements

### Initial Setup

For this project, you need to use this [FitLit Starter Kit](https://github.com/turingschool-examples/fitlit-starter-kit) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up, follow the instructions to verify it is setup correctly.

## Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) documentation pages.

You are *expected* to test:

* All instance methods
* All class methods (including any helper methods)

You are *not expected* to test:

* DOM manipulation / DOM manipulating methods (like `document.querySelector(...)`)


### Activity Data

The shape and structure of the data is outlined in the starter kit repo README. The data values are randomly generated - try not to read too much into why a user has a certain data value. A basic overview of the data is:

```
users.js (a file with many users, like their user profile)

There are different activity files that have ALL users' data for many days
 -> hydration.js (how much water someone drinks per day?)
 -> sleep.js (how much sleep does someone get each night and how good is the sleep?)
 -> activity.js (what is someone doing to be active each day?)
```


## Project Iterations

Complete each iteration in order, one-by-one. Each iteration has a "Data" section and "Dashboard" section. Data deals with using the data to calculate something meaningful for the user. The Dashboard section deals with what to display on the page. Unlike your week-1 project, the classes and method names are not completely drawn out for you.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on class structure and the calculation methods, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there.

**Note:** For this dataset, when "today" is referenced in iterations, it is the last date in the data. The latest week is the most recent 7 days in the data.

---

### Iteration 1 - Get Familiar with the Data and Users

**Data:**
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


**Dashboard:**
Use the `scripts.js` file to add information to the DOM. This JS file should call methods from your classes to retrieve information. There should not be any DOM manipulation within the _User_ or _UserRepository_ class files.

To develop this dashboard, first choose a user at random - someone with a randomly generated name that speaks to you. On the dashboard for a user:

* Create an info card on the dashboard with all of user's info on the page
* Display their first name somewhere prominently on the page to welcome them
* For a specific user, display how their step goal compares to the average step goal amongst all users (this display should _not_ be hard-coded)

#### Testing

You should _not_ use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.

**Write tests for all classes, their properties, and their methods from now on for all iterations.**

**Note:** When you test a JavaScript class file, you need to use `module.exports` in your class file so the test can use the code - just like Mythical Creatures. However, in this project when you call that same class in the browser, the browser has no idea what `module` is. So your code crashes. The `module` object is something your tests know how to use, but the browser has no idea what it is. To fix this, you'll want to include something like this in your class file (for each class file that you create):

```js
// Instead of:
module.exports = someClassName;

// You will need to use:
if (typeof module !== 'undefined') {
  module.exports = someClassName;
}
```

Where `someClassName` is the name of your class - like `UserRepository`. Read through this a few times - what does this conditional do? Pick it apart. Why do you need it in your code sometimes?

---

### Iteration 2 - Hydration

**Data:**
Create classes and methods that can calculate:

* For a user (identified by their `userID` - this is the same for all methods requiring a specific user's data), the average fluid ounces consumed per day for all time
* For a user, how many fluid ounces they consumed for a specific day (identified by a date)
* For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day

You have to decide which classes should contain each method. Think about whose responsibility it is to own the method.

**Dashboard:**
For your user (or any user you choose), add:

* A display to show how much water they have consumed today (these displays are often called "widgets" in the FE tech world)
* A display to show much water they have consumed each day over the course of the latest week

Keep the displays simple for now and make them fancy later. Do not use and additional 3rd-party libraries to display information on the page unless you get instructor approval first. This rule goes for other iterations as well.

---

### Iteration 3 - Sleep

**Data:**
Create classes and methods that can calculate:

* For a user (identified by their `userID`), the average number of hours slept per day
* For a user, their average sleep quality per day over all time
* For a user, how many hours they slept for a specific day (identified by a date)
* For a user, their sleep quality for a specific day (identified by a date)
* For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
* For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
* For all users, the average sleep quality
* Find all users who average a sleep quality greater than `3` for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
* For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
* Make a metric of your own! Document it, calculate it, and display it.

**Dashboard:**
Items to add to the dashboard:

* For a user, their sleep data for the latest day (hours slept and quality of sleep)
* For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
* For a user, their all-time average sleep quality and all-time average number of hours slept

---

### Iteration 4 - Activity

**Data:**
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
* Make a metric of your own! Document it, calculate it, and display it.

**Dashboard:**
Items to add to the dashboard:

* For a user, the number of steps for the latest day
* For a user, the number minutes active for the latest day
* For a user, the distance they have walked (in miles) for the latest day based on their step count
* How their number of steps, minutes active, and flights of stairs climbed compares to all users for the latest day
* For a user, a weekly view of their step count, flights of stairs climbed, and minutes active

---

### Iteration 5 - Trends and Challenges
_Choose at least one_
1. Design a step challenge between friends. Assign your user a few friends from the user data file. Add the methods you need and a display on the dashboard to see their friends step count for a whole week, and then show who had the most steps for that week.
1. Calculate and display this trend: for a user, what days had increasing steps for 3 or more days?
1. Think of your own trend for one user or many users. Document it, calculate it, and display it.

---

### Extensions

* Drag-and-drop widgets (if you did not go with a widget theme, then add some widgets for this extension). You can use a 3rd-party library to help you accomplish this.
* Priority stats - give the user the ability to select the widgets they always want to see at the top of the page. This is a customization the user would want to make, and you would want to save this customization to `localStorage`.
* Create more kinds of Fitbit-like activity or habit data for users. What other that sleep, daily activity, and hydration would you want to keep track of?
* **Admin** view. Modify your HTML page, or create a new HTML page that is an admin dashboard display. The admin would want to see views of data from all users. What are the trends of all users? How can you display data from all users in a meaningful way?
* Other extensions you can think of! Let your instructors know.

---

### Timeline
Dates and deadlines to be aware of:

* **Monday, May 11th** - Submit your project board and planned out class structure to instructors BEFORE beginning to write code! (send this to us via Slack)
* **Wednesday, May 20th** - Project due at 9PM. 
* **Thursday, May 21st** - Project evals.

Please submit your finished projects [here](https://docs.google.com/spreadsheets/d/1N4bLirAEpgNWVCeNJheoM6vnrlSB5Qy9ejsFeSbvxCQ/edit#gid=1401427478) 

---

## Rubric

### Functional Expectations
* 4: Application fulfills all expectations of iterations 1 - 5 with no bugs or missing functionality *as well as* an extension.
* 3: Application fulfills expectations of iterations 1 - 5 with no bugs or missing functionality.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style / OOP
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application is expertly divided into logical components each with a clean, single responsibility.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. Application is effectively broken into logical components, but violate the principle of SRP.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring. Divisions of logic into classes are inconsistent or unclear.
* 1: Application generates syntax error or crashes during execution. Application logic shows poor decomposition with too much logic mashed together.

### Test-Driven Development
* 4: Application is broken into components which are well tested in both isolation and integration using appropriate data. Test feature many sad paths for methods as well.
* 3: All classes and methods are tested. Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality. Tests use smaller, sample data files as input rather than the large, original data files.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements.
* 1: Application does not demonstrate strong use of TDD.

<!--
### Encapsulation / Breaking Logic into Components
* 4: Application is expertly divided into logical components each with a clear, single responsibility.
* 3: Application effectively breaks logical components apart but breaks the principle of SRP.
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear.
* 1: Application logic shows poor decomposition with too much logic mashed together.
-->

### User Interface
* 4: The application is pleasant, logical, and easy to understand. There are no holes in functionality and the application stands on its own to be used by the instructor _without_ guidance from the developer.
* 3: The application has many strong displays/interactions, but a few holes in lesser-used displays.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.
* 1: The application is confusing or difficult to use.

### Workflow
* 4: The team effectively uses Git branches and many small, atomic commits that document the evolution of their application with descriptive commit messages. The team displays good pairing practices (driver-navigator, dividing up work, etc.) and utilizes a planning tool more than GitHub issues (GitHub Projects, Trello, etc).
* 3: The team makes a series of small, atomic commits that document the evolution of their application. The team conducts a DTR (define the relationship) and utilizes GitHub issues and best pairing practices. Both members contribute meaningfully to the application.
* 2: The team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* 1: The team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.

<!-- Things we can do to ratchet up the difficulty:
* Add something with inheritance to the classes (maybe a different kind of user?)
* Give the user a date selector to be able to select a specific date for data (and then a button to go back to "today")
 -->
