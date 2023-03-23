---
title: Overlook  
length: 1 week
tags: javascript, testing
---
<!-- Final 1 week solo project for FE Mod 2 (Week 6) -->

## Background and Description

For this project, you will be building a hotel management tool for hotel customers and staff to manage room bookings and calculate customer bills.

## Goals and Objectives

- Use object and array prototype methods to perform data manipulation
- Create a clear and accessible user interface
- Make network requests to retrieve data
- Implement a robust testing suite using TDD
- Write DRY, reusable code that follows SRP (Single Responsibility Principle)
- Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project


## Timeline

Dates and deadlines to be aware of:

Day One Deliverable:
Submit your project [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'}

Tuesday, Week 6 - Project due at 12PM.

# Requirements

## Workflow
You will want to submit PRs to your accountabilibuddy to:

* You must give your accountabilibuddy collaboration access to your repo.
* You must submit *at least* 2 PRs to your accountabilibuddy for review.
* You must wait for your accountabilibuddy to review your PRs, and allow THEM to merge any PRs you submit.

It is up to you to decide what changes warrant a PR – remember we want to submit PRs that have significant changes and potential for feedback. Think about what functionality you’re struggling with or have questions about or need help with. As an accountabilibuddy, you are responsible for reviewing at least 2 PRs from your partner.

**Please also tag your project manager in any PR you make to your buddy.**

## Technologies

* **Fetch API** to retrieve and add data
* **Mocha** and **Chai** for testing your code
* [**Webpack**](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html)

## Initial Setup

For this project, you will want to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit){:target='blank'} repo. Setup instructions are in the README.  

You will also need to clone down this [local server](https://github.com/turingschool-examples/overlook-api){:target='blank'} and have it running in a separate tab in your terminal each time you run your client.

### Endpoints

Below are all the endpoints set up for this project. You may not use all of them. Pay attention to the functionality required of each iteration when picking the appropriate endpoint.

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all customers|`http://localhost:3001/api/v1/customers`| GET  | none | object with `customers` property containing an array of all customers |
|Get single customer|`http://localhost:3001/api/v1/customers/<id>`     *where`<id>` will be a number of a customer's id* | GET  | none | object of single customer's info |
|Get all rooms| `http://localhost:3001/api/v1/rooms` | GET | none | object with `rooms` property containing an array of all rooms |
|Get all bookings| `http://localhost:3001/api/v1/bookings` | GET | none | object with `bookings` property containing an array of all bookings |
| Add new booking |`http://localhost:3001/api/v1/bookings`| POST | `{ "userID": 48, "date": "2019/09/23", "roomNumber": 4 }` | `{ message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }`|
| Delete single booking | `http://localhost:3001/api/v1/bookings/<id>`     *where`<id>` will be a number of a booking's id*  | DELETE | none | `{ message: Booking #<id> has been deleted }` |

<section class="note">
### Note

All POST and DELETE requests should have the following headers:
```js
{
  "Content-Type": "application/json"
}
```

Remember, a `.catch` won't necessarily run on a bad response (ie 4xx level status) from the server. Make sure you're checking your response status codes and messages if something isn't working as expected.
</section>


## Iterations

<section class="note">
### Note
Consider how past projects specified a 'Data' section and a 'User Stories' section throughout the iterations description. You'll noticed that you're only supplied with User Stories below. Analyze each user story to determine what data you'll need to work with and plan what functions you'll create to manipulate that data. 

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on the data and calculation functions, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there
</section>

### 1. Dashboard

**As a customer:**

* I should see a dashboard page that shows me:
  * Any room bookings I have made (past or upcoming)
  * The total amount I have spent on rooms

### 2. Customer Interaction

**As a customer:**

* I should be able to select a date for which I'd like to book a room for myself
* Upon selecting a date, I should be shown a list of room details for *only rooms that are available on that date*
* I should be able to filter the list of available rooms by their `roomType` property
* I should be able to select a room for booking
* In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search

**Refer to the "Add new booking" section from the endpoints table above!**


### 3. Accessibility

* Create a branch for accessibility.  
* Use this branch to make your dashboard as accessible as possible.  
* Push this branch up to GH.  You can merge the changes into main but do not delete this branch.  
  * This branch should not have a login page so that during the live eval, we can run the Lighthouse audit and check tabbability of your dashboard (without the login page).  

### 4. Login

When first arriving at the site, a user should be able to log in with a username and password.

**As a customer:**
* I should be able to login
  - I will see a login page when I first visit the site
  - I can log in with the following credentials:

```
username: customer50 (where 50 is the ID of the user)
password: overlook2021
```

  - Upon successfully logging in, I should see my dashboard.

**Refer to the "Get single user" section from the endpoints table above!**

### 5. Manager Interaction (extension)

Your app should now support two different types of users.  In addition to having a customer, you will now add a manager.

**As a manager:**
- I should be able to login
  - I will see a login page when I first visit the site
  - I can log in with the following credentials:

```
username: manager
password: overlook2021
```

**As a manager, upon logging in:**

* I should see a dashboard page that shows me:
  * Total Rooms Available for today's date
  * Total revenue for today's date
  * Percentage of rooms occupied for today's date

**As a manager:**

* I should be able to search for any user by name and:
  * View their name, a list of all of their bookings, and the total amount they've spent
  * Add a room booking for that user
  * Delete any upcoming room bookings for that user (they cannot delete a booking from the past)

**Refer to the endpoints table above for *deleting* a single booking**

## Testing

You should NOT use the original data files in the data directory for testing. These are big files, to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, you should create small, sample datasets that match the structure of the application data and use these for your test data. By creating this sample dataset, you will also know if your functions are working correctly because you can do the calculations by hand with a much smaller dataset.

You are expected to test:

All functions that do not update the DOM. This means everything in your scripts.js file should be tested.
Remember to test all possible outcomes (happy/sad/etc). Ask yourself:

Does the function return anything?
Are there different possible outcomes to test for based on different arguments being passed in?
You are not expected to test:

DOM manipulation / DOM manipulating function (like document.querySelector(...))
Fetch calls

## Accessibility

Strive for an accessibility audit score of 100% for the dashboard.

A user should be able to interact with all functionality of your application by tabbing through it, no use of the trackpad.

ARIA attributes should be utilized for any UI elements that are not understood by the screen reader


## Minimum Collaboration and Professionalism Expectations

- Team holds daily standups throughout project.
- Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
- A project board is utilized (and updated throughout the project) with Github issues and labels.
- Team uses branches, PRs and thorough code reviews to add new code to the main branch.
- The README is formatted well and at a minimum contains:
- Overview of project and goals
- Overview of technologies used, challenges, wins, and any other reflections
- Screenshots/gifs of your app
- List of contributors
- Team collaborates effectively to accomplish the shared goal. Team productively and professionally works through challenges and conflicts to ensure all team members are able to be heard and contribute throughout the project.
- Instructors are available to offer support and guidance but conversations around what is and what is not working are expected to be led by the team members themselves.

---

# Rubric

For the rubric sections below, you will be scored as Wow, Yes or Not Yet depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstate competency. The following examples are not checklists to complete! There are just some examples.

<section class="answer">
### Functional Expectations

- Wow: Application fulfills all requirements as well as an extension.
- Yes: Application fulfills all requirements of iterations 1-3 without bugs. **Note: Must be completed in order to pass**
- Not Yet: Application crashes or has missing functionality or bugs.
</section>

<section class="answer">
### UI/UX & Accessibility

* The application can stand on its own to be used by an instructor without guidance from a developer on the team.
UI/UX is intuitive and easy to read/use
* Helpful messaging is displayed to prevent user confusion. For example: For example: If a user searches for a room, but none are available then a message is displayed to indicate that the search worked, nothing is broken, there just aren't any matching rooms available.
* The Lighthouse accessibility audit score is at least 90%
* The application is fully tabbable 

✨WOW✨ can look like: 

* Design is responsive across small, medium and large breakpoints
* Special consideration was made around accessibility
</section>

<section class="answer">
### Fundamental JavaScript and Style / Fetch Competency Examples

* Code is divided into logical components each with a clean, single responsibility
* Array prototype methods are used to iterate instead of for loops
* All DOM manipulation is held in the scripts.js file. No DOM manipulation occurs outside of this file.
* Variables and functions are consistently and appropriately named
* Code leverages JavaScript's truthy/falsey principles
* Demonstrates efforts towards making functions pure when possible. **Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.**
* Implements GET and POST Fetch requests
* When utilizing Fetch, the DOM is updated based on the results of that Fetch
* Most errors are handled and messages are displayed to a user when an error occurs

✨WOW✨ can look like: 

* All data manipulation is cleanly separated from rendering code. 
* Code has clearly been refactored; functions are DRY and adhere to the Single Responsibility Principle. 
* All errors are handled and messages are displayed to a user when an error occurs
* Effectively implements one or more closure throughout project.
</section>

<section class="answer">
### Testing

* Tests cover most features and test for happy paths
* Test suite is organized.
* Each function is tested in its own it block.
* Each path is tested in its own it block.
* Rather than using the production data, small sample data is stored in its own file and used for testing.
* Sample data has been crafted to create the scenarios needed for thorough testing.
* beforeEach hook is used to DRY up test files
* There are no failing/pending tests upon submission 

✨WOW✨ can look like: 

* All scenarios/outcomes/paths are tested for functions, including happy and sad paths.
* Application has a robust and thorough test suite that covers all functions that do not update the dom.
</section>

## Collaboration and Professionalism

See "Minimum Collaboration and Professionalism Expectations" above.
While this is not a scored rubric section, every team member is expected to fully participate, contribute, communicate and collaborate with the team throughout the entirety of this project. Failure to do so can result in an individual failing the project, even if the group/project is otherwise passing.

# Evaluation

Evaluations will be done live with an instructor. You'll be asked to step through the various parts of your application including accessibility audit, the user interface, running tests and looking at fetch calls and JavaScript code.
