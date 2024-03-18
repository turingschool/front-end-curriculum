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


## Timeline

Dates and deadlines to be aware of:

Day One Deliverable:
Submit your project [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'}

Tuesday, Week 6 - Project due at 9PM Mountain Time.

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

* You must be able to tab through your app and use it without a mouse 
* Your app must still be usable when tested with a colorblind extension
* You must score as close to 100% as possible with the Lighthouse and WAVE accessibility audits. Be prepared to explain any accessibility audits your application is failing.
* Your HTML must be written semantically and should use ARIA attributes for any UI elements that are not understood by the screen reader (ONLY if needed / appropriate)

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


## Minimum Professionalism Expectations

- Commits are atomic and frequent, effectively documenting the evolution/progression of the application.
- A project board is utilized (and updated throughout the project) with Github issues and labels.
- Student uses branches, PRs and thorough code reviews to add new code to the main branch.
- The README is formatted well and at a minimum contains:
- Overview of project and goals
- Overview of technologies used, challenges, wins, and any other reflections
- Screenshots/gifs of your app

---

# Rubric

<section class="answer">
### Does the project demonstrate student understanding of the learning goals & concepts?

Projects will answer that question, being marked as yes, not yet, and wow. Similarly, each section of the rubric (see below) will have yes/not yet/wow markings, helping you understand your progress and growth in specific areas.

The overall project outcome (yes, not yet, wow) is determined by “averaging” each section’s outcome. You can think of a “yes” being worth a 1, a “not yet” being worth a 0, and a “wow” being worth a 2.

For this project, an average of 0.5 is considered a yes - a passing project that demonstrates good student understanding! An average of 1+ is considered a wow. Anything below a 0.5 is considered a not yet - a project that indicates that the concepts have not been fully understood (see note in the section below). Please note that for this project, iterations 1-3 must be completed without bugs. 
</section>

For the rubric sections below, you will be scored as Wow, Yes or Not Yet depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstrate competency. The following examples are not checklists to complete! There are just some examples.

While M2 rubrics do not have a separate section for WOWs like in M1, there are a few WOW examples noted throughout.  In addition to these WOW bullets, you can strive for a WOW by demonstrating not just competency, but excellence and thoroughness across the rubric sections. 

<section class="answer">
### Functional Expectations

- **Wow**: Application fulfills all requirements as well as Iteration 5.
- Yes: Application fulfills all requirements of iterations 1-4 without bugs. **Note: Must be completed in order to pass**
- Not Yet: Application crashes or has missing functionality or bugs.
</section>

<section class="answer">
### UI/UX & Accessibility

* The application can stand on its own to be used by an instructor without guidance from the developer
* UI/UX is intuitive and easy to read/use
* Helpful messaging is displayed to prevent user confusion. For example: If a user searches for a room, but none are available then a message is displayed to indicate that the search worked, nothing is broken, there just aren't any matching rooms available.
* The Lighthouse and WAVE audit tools were used to improve accessibility.
* Users who only use keyboards can still navigate this application
* Users who use a screen reader can still navigate this application
* Utilizes ARIA attributes on interactive elements when **no other tool** allows for accessible content
* **Wow option**: design is responsive across small, medium and large breakpoints
</section>

<section class="answer">
### Fundamental JavaScript and Style / Fetch Competency Examples

* Code is divided into logical components each with a clean, single responsibility
* Array prototype methods are used to iterate instead of for loops
* Project is organized to separate concerns (Ask yourself - where should my DOM manipulation live?)
* Variables and functions are consistently and appropriately named
* Code leverages JavaScript's truthy/falsey principles
* Demonstrates efforts towards making functions pure when possible. **Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.**
* Implements GET and POST Fetch requests
* When utilizing Fetch, the DOM is updated based on the results of that Fetch
* Errors are handled and messages are displayed to a user when an error occurs
* **Wow option**: Effectively implements one or more closure throughout project.

</section>

<section class="answer">
### Testing

* Application has a robust and thorough test suite
* Testing includes happy and sad paths
* Test suite is organized - a new developer could easily identify what function is causing a test to fail
* Rather than using the production data, small sample data is stored in its own file and used for testing.
* Sample data has been crafted to create the scenarios needed for thorough testing.
* Tests are DRY (Ask yourself - what tools can I use to limit repetitive code?)
* There are no failing/pending tests upon submission 

</section>

# Evaluation

Evaluations will be done live with an instructor. You'll be asked to step through the various parts of your application including accessibility audit, the user interface, running tests and looking at fetch calls and JavaScript code.
