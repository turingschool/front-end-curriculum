---
title: Overlook  
length: 1 week
tags: javascript, oop, testing
---

<!-- Final 1 week solo project for FE Mod 2 (Week 6) -->

## Background and Description

For this project, you will be building a hotel management tool for hotel customers and staff to manage room bookings and calculate customer bills.

## Goals and Objectives

- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Timeline

Dates and deadlines to be aware of:

Tuesday Week 5 - Submit the following to your PM BEFORE beginning to write code via Slack:
- Project repo

Tuesday, Week 6 - Project due at 9PM.

# Requirements

## Technologies

* **the fetch API** to retrieve and add data
* **Mocha** and **Chai** for testing your code

## Initial Setup

For this project, you will want to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit){:target='blank'} repo. Setup instructions are in the README.  You will also need to clone down this [local server](https://github.com/turingschool-examples/overlook-api){:target='blank'} and have it running in a separate tab in your terminal each time you run your client.

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

* All POST and DELETE requests should have the following headers:
```js
{
  "Content-Type": "application/json"
}
```

* Remember, a `.catch` won't necessarily run on a bad response (ie 4xx level status) from the server. Make sure you're checking your response status codes and messages if something isn't working as expected
</section>


## Iterations

### 1. Dashboard

**As a customer:**

* I should see a dashboard page that shows me:
  * Any room bookings I have made (past or present/upcoming)
  * The total amount I have spent on rooms

### 2. Customer Interaction

**As a customer:**

* I should be able to select a date for which I'd like to book a room for myself
* Upon selecting a date, I should be shown a list of room details for *only rooms that are available on that date*
* I should be able to filter the list of available rooms by their `roomType` property
* I should be able to select a room for booking
* In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search

**Refer to the "Add new booking" section from the endpoints table above!**

<section class="note">
### Note!

If you haven't already, focus on accessibility at this point.  Before moving to iteration 3, please **create a branch and push it up to GH** so instructors can run *Lighthouse* and check your dashboard for it's accessibility audit.
</section>

### 3. Login

When first arriving at the site, a user should be able to log in with a username and password.

**As a customer:**
* I should be able to login
  - I will see a login page when I first visit the site
  - I can log in with the following credentials:

```
username: customer50 (where 50 is the ID of the user)
password: overlook2021
```

  - Upon successfully loggin in, I should see my dashboard.

**Refer to the "Get single user" section from the endpoints table above!**

### 4. Manager Interaction

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
You should be testing the correctness of your code throughout your project. Each JavaScript class file in your project should have its own test file.

Your testing suite should test all of the functionality of the application, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

## Workflow
You will want to submit PRs to your accountabilibuddy to:

* You must give your accountabilibuddy collaboration access to your repo.
* You must submit *at least* 2 PRs to your accountabilibuddy for review.
* You must wait for your accountabilibuddy to review your PRs, and allow THEM to merge any PRs you submit.

It is up to you to decide what changes warrant a PR – remember we want to submit PRs that have significant changes and potential for feedback. Think about what functionality you’re struggling with or have questions about or need help with. As an accountabilibuddy, you are responsible for reviewing at least 2 PRs from your partner.

**Please also tag your project manager in any PR you make to your buddy.**

## Accessibility

* Accessibility audits should be at 100% for the dashboard.
* A user should be able to interact with all functionality of your application by tabbing through it, no use of the trackpad
* ARIA attributes should be utilized for any UI elements that are not understood by the screen reader


## Due Date

Make sure you submit your project [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'} by **Tuesday of Week 6 at 9pm**.

# Rubric

## Specification Adherence

* 4: The application completes all iterations above without error.
* 3: The application completes the first 3 iterations above without error. **Note: Must be completed in order to pass.**
* 2: The application completes the first 2 iterations and is in a usable state, but has some miscellaneous bugs.
* 1: The application completes only the first iteration, displaying the user's data, but has no additional functionality.

## UI/UX & Accessibility

* 4: Application has clearly had special consideration around accessibility. Lighthouse accessibility audit is at a 100%.
* 3: Application has many strong pages/interactions. The application can stand on its own to be used by instructor without guidance.The UI does not detract from the UX. Lighthouse accessibility audit is at least 90%.
* 2: The application may be confusing or difficult to use at times.  The UI is incomplete. Accessibility has been considered, but does not have strong accessible features.
* 1: Application is confusing or difficult to use. The UI is incomplete. Accessibility has not been considered.

## JavaScript Style & OOP

* 4: Application has exceptionally well-factored code with little or no duplication.  The business-logic code driving functionality is cleanly separated from rendering, view-related code.   Excellent usage of `fetch` and updates DOM based on results of network requests.  Handles all scenarios for error handling.
* 3: Application is thoughtfully put together with some duplication.  Application is organized into classes with some misplaced logic. Business-logic code is mostly separated from view-related code.  Great usage of `fetch` and updates DOM based on results in most scenarios, but may update DOM before a network request is complete.  Handles some scenarios for error handling.
* 2: Class methods use a mix of array and object prototypes and for loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.  Uses `fetch` effectively for `GET` but does not implement `POST`.  Has zero error handling and only `logs` errors if a network request fails.
* 1:  Application generates syntax error or crashes during execution.  Application is not separated into classes and there is no separation of business-side logic and view-related code. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity.


## Testing

* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths.
* 3: Application is well tested but fails to cover some features and only tests for happy paths.
* 2: Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested.
* 1: There is little or no evidence of testing in the application.

# Evaluation

Evaluations will be done live with an instructor. You'll be asked to step through the various parts of your application including accessibility audit, the user interface, running tests and looking at fetch calls and JavaScript code.
