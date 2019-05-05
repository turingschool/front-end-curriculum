---
title: Activity Tracker
length: 2 week
tags: javascript, oop, mocha, testing
---

2 week paired project for FE Mod 2 (Week 2)

## Goals and Objectives

- Follow spec/prompts to make a working application
- Implement ES6 classes
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- **Use object and array prototype methods to perform data manipulation**
- Display information on the page while maintaining ability to test class properties and methods
- Create a data dashboard that is easy to use and displays information in a clear way

In this project, you will be given data from an activity tracker for many users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones. Think of something like Fitbit. Fitbit devices log data and present it on a dashboard for their users:

![Example Fitbit dashboard](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

The image above is _not_ a comp. We expect you to design your own dashboard layout that is relevant to the data that was logged and the calculated data for a user or group of users.

This project is broken into a series of iterations - complete each iteration in order, one-by-one. Through each iteration, you should use TDD to drive implementation of your code.


## Requirements

### Initial Setup

For this project, you need to use this [Activity Tracker Starter](https://github.com/turingschool-examples/activity-tracker) repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up (through running `npm install`), follow the instructions to verify it is setup correctly.

## Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) documentation pages.

### Activity Data

The shape and structure of the data is outlined in the starter kit repo README. A basic overview of the data is:

```
users.js (a file with many users, like their user profile)

There are different activity files that have ALL users' data for many days
 -> hydration.js (how much water someone drinks per day?)
 -> sleep.js (how much sleep does someone get each night and how good is the sleep?)
 -> activity.js (what is someone doing to be active each day?)
```

The data values are randomly generated.

## Project Iterations

Complete each iteration in order, one-by-one. Each iteration has a "Data" section and "Dashboard" section. Data deals with using the data to calculate something useful for the user. The Dashboard section deals with what to display on the page.

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on class structure and the calculation methods, and then move on to the dashboard display. Things don't have to look good until later iterations.


### Iteration 1 - Get Familiar with the Data and Users

**Data:**
Go look into the `data` directory and explore the data (there is also an outline of the structure of the data in the README of the starter kit repo). 

Once you have looked over each data file, start with the `users.js` file. This is the class structure you should start out with:

_UserRepository_

```js
new UserRepository(dataFilepath);
```

* A `UserRepository` holds onto all the `User` objects
* Should have a methods to:
  * Average step goal amongst all users
  * What state are the most users from?

_User_

```js
new User(userData);
```

* A `User` represents a single user
* Each user holds on to the user properties from the data file
* Should have a methods to:
  * Return a user's first name only


**Dashboard:**
Use the `scripts.js` file to add information to the page. This JS file should call methods from your classes to retrieve information. There should not be any DOM manipulation within the _User_ or _UserRepository_ classes.

Choose a user at random - someone with a randomly generated name that speaks to you. For a user:

* Create an info card on the dashboard with all of user's info on the page
* For a specific user, display how their step goal compares to the average step goal amongst all users (this display should _not_ be hard-coded)

#### Testing

You should _not_ use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data.

Write tests for all classes, their properties, and their methods.


### Iteration 2 - Hydration



### Iteration 3 - Sleep



### Iteration 4 - Activity

* Method to convert steps to miles

Step Challenge?

### Iteration 5 - Trends



### Extensions

* Drag and drop widgets (if you did not go with a widget theme, then add some widgets for this extension).
* Priority stats - give the user the ability to select the widgets they always want to see at the top of the page. This is a customization the user would want to make, and you would want to save this customization to `localStorage`.
* Create more kinds of Fitbit-like activity or habit data for users. What other that sleep, daily activity, and hydration would you want to keep track of?
* **Admin** view. Modify your HTML page, or create a new HTML page that is an admin dashboard display. The admin would want to see views of data from all users. What are the trends of all users? How can you display data from all users in a meaningful way?


## Rubric


<!-- Things we can do to ratchet up the difficulty:
* Add something with inheritance to the classes (maybe a different kind of user?)
 -->