---
title: Activity Tracker
length: 2 week
tags: javascript, oop, mocha, testing
---

2 week paired project for FE Mod 2 (Week 2)

## Goals and Objectives

- Follow spec/prompts to make a working application
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- **Use object and array prototype methods to perform data manipulation**
- Display information on the page while maintaining ability to test class properties and methods
- Create a data dashboard that is easy to use and displays information in a clear way

In this project, you will be given data from an activity tracker for many users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones. Think of something like Fitbit. Fitbit devices log data and present it on a dashboard for their users:

![Example Fitbit dashboard](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

The image above is _not_ a comp. We expect you to design your own dashboard layout that is relevant to the data that was logged and the calculated data for a user or group of users. Use inspiration from Fitbit and other fitness/activity apps, but do not copy something directly.

This project is broken into a series of iterations - complete each iteration in order, one-by-one. Through each iteration, you should use TDD to drive implementation of your code.


## Requirements

### Initial Setup

For this project, you need to use this [Activity Tracker Starter](https://github.com/turingschool-examples/activity-tracker) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up (through running `npm install`), follow the instructions to verify it is setup correctly.

## Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) documentation pages.

DOM functionality cannot and should not be tested in this project.

### Activity Data

The shape and structure of the data is outlined in the starter kit repo README. A basic overview of the data is:

```
users.js (a file with many users, like their user profile)

There are different activity files that have ALL users' data for many days
 -> hydration.js (how much water someone drinks per day?)
 -> sleep.js (how much sleep does someone get each night and how good is the sleep?)
 -> activity.js (what is someone doing to be active each day?)
```

As a note, the data values are randomly generated.

## Project Iterations

Complete each iteration in order, one-by-one. Each iteration has a "Data" section and "Dashboard" section. Data deals with using the data to calculate something useful for the user. The Dashboard section deals with what to display on the page. Unlike your week-1 project, the classes and method names are not completely drawn out for you.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on class structure and the calculation methods, and then move on to the dashboard display. Things don't have to look good until later iterations.

**Note:** For this dataset, "today" is the last date in the data.

---

### Iteration 1 - Get Familiar with the Data and Users

**Data:**
Go look into the `data` directory and explore the data (there is also an outline of the structure of the data in the README of the starter kit repo). 

Once you have looked over each data file, start with the `users.js` file. This is the class structure you should start out with:

_UserRepository_

```js
new UserRepository(dataFilepath);
```

* A `UserRepository` holds onto all the `User` objects
* Should have methods to:
  * Given a user's ID, what is their user data?
  * Average step goal amongst all users
  * What state are the most users from?

_User_

```js
new User(userData);
```

* A `User` represents a single user
* Each user holds on to the user properties from the data file
* Should have a method to:
  * Return a user's first name only


**Dashboard:**
Use the `scripts.js` file to add information to the page. This JS file should call methods from your classes to retrieve information. There should not be any DOM manipulation within the _User_ or _UserRepository_ classes.

Choose a user at random - someone with a randomly generated name that speaks to you. For a user:

* Create an info card on the dashboard with all of user's info on the page
* For a specific user, display how their step goal compares to the average step goal amongst all users (this display should _not_ be hard-coded)

#### Testing

You should _not_ use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.

Write tests for all classes, their properties, and their methods from now on for all iterations.

---

### Iteration 2 - Hydration

**Data:**
Using a similar class structure for a user and a user repository, create methods that can calculate:

* For a user (identified by their `userID`), the average fluid ounces consumed per day
* For a user, how many fluid ounces they consumed for a specific day (identified by a date)
* For a user, how many fluid ounces of water consumed each day over the course of a week (7 days)

You have to decide which classes should contain each method. Think about whose responsibility it is to own the method.

**Dashboard:**
For your user (or any user you choose), add:

* A display to show how much water they have consumed today
* How much water they have consumed each day over the course of the latest week

Keep the displays simple for now and make them fancy later. Do not use and additional 3rd-party libraries to display information on the page unless you get instructor approval first. This goes for other sources of data as well.

---

### Iteration 3 - Sleep

**Data:**
Using a similar class structure for a user and a user repository, create methods that can calculate:

* For a user (identified by their `userID`), the average number of hours slept per day
* For a user, their average sleep quality per day
* For a user, how many hours they slept for a specific day (identified by a date)
* For a user, their sleep quality for a specific day (identified by a date)
* For a user, how many hours slept each day over the course of a week (7 days)
* For a user, their sleep quality each day over the course of a week (7 days)
* For all users, the average sleep quality
* Find all users who average a sleep quality greater than `3` for the latest week (7 days)
* For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
* Make a metric of your own!

**Dashboard:**
Items to add to the dashboard:

* For a user, their sleep data for the latest day (hours slept and quality of sleep)
* For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
* For a user, their all-time average sleep quality and number of hours slept

---

### Iteration 4 - Activity

**Data:**
Using a similar class structure for a user and a user repository, create methods that can calculate:

* For a specific day, convert a user's number of steps to miles (use the `strideLength` to help calculate this)
* For a user, (identified by their `userID`)
* For a given day (specified by a date), did a user reach their step goal?
* Find all the days where a user exceeded their step goal
* For a user, find their all-time stair climbing record
* Make a metric of your own!

**Dashboard:**
Items to add to the dashboard:

* For a user, the number of steps for the latest day
* For a user, the distance they have walked (in miles) for the latest day based on their step count
* For a user, a weekly view of their step count

---

### Iteration 5 - Trends and Challenges

1. Design a step challenge between friends. Give your user a few friends from the user data file. Add the methods you need and a display on the dashboard to see their friends step count for a whole week, and then show who had the most steps for that week.
1. Calculate and display this trend: for a user, what days had increasing steps for 3 or more days?
1. Think of your own trend for one user or many users. Calculate it and display it.

---

### Extensions

* Drag-and-drop widgets (if you did not go with a widget theme, then add some widgets for this extension). You can use a 3rd-party library to help you accomplish this.
* Priority stats - give the user the ability to select the widgets they always want to see at the top of the page. This is a customization the user would want to make, and you would want to save this customization to `localStorage`.
* Create more kinds of Fitbit-like activity or habit data for users. What other that sleep, daily activity, and hydration would you want to keep track of?
* **Admin** view. Modify your HTML page, or create a new HTML page that is an admin dashboard display. The admin would want to see views of data from all users. What are the trends of all users? How can you display data from all users in a meaningful way?
* Other extensions you can think of! Let your instructors know.

---

## Rubric

### Functional Expectations
* 4: Application fulfills all expectations of iterations 1 - 5 with no bugs, crashes, or missing functionality *as well as* an extension.
* 3: Application fulfills expectations of iterations 1 - 4 with no bugs, crashes, or missing functionality.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style
* 4:  Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.
* 3:  Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. 
* 2:  Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.
* 1:  Application generates syntax error or crashes during execution.

### Test-Driven Development
* 4: Application is broken into components which are well tested in both isolation and integration using appropriate data.
* 3: All classes and methods are tested. Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements.
* 1: Application does not demonstrate strong use of TDD.

### Encapsulation / Breaking Logic into Components
* 4: Application is expertly divided into logical components each with a clear, single responsibility.
* 3: Application effectively breaks logical components apart but breaks the principle of SRP.
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear.
* 1: Application logic shows poor decomposition with too much logic mashed together.

### Workflow
* 4 - The team effectively uses Git branches and many small, atomic commits that document the evolution of their application with descriptive commit messages. The team displays good pairing practices (driver-navigator, dividing up work, etc.) and utilizes a planning tool more than GitHub issues (GitHub Projects, Trello, etc).
* 3 - The team makes a series of small, atomic commits that document the evolution of their application. The team conducts a DTR (define the relationship) and utilizes GitHub issues and best pairing practices. Both members contribute meaningfully to the application.
* 2 - The team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* 1 - The team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.

<!-- Things we can do to ratchet up the difficulty:
* Add something with inheritance to the classes (maybe a different kind of user?)
* Give the user a date selector to be able to select a specific date for data (and then a button to go back to "today")
 -->