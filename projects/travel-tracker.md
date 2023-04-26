---
title: Travel Tracker  
length: 1 week
tags: javascript, testing
---

## Background and Description

For this project, you will be creating an application to manage and track different trips for users and a travel agency.

## Goals and Objectives

- Use object and array prototype methods to perform data manipulation
- Create a clear and accessible user interface
- Make network requests to retrieve data
- Implement a robust testing suite using TDD
- Write DRY, reusable code that follows SRP (Single Responsibility Principle)

## Timeline

Dates and deadlines to be aware of:

Day One Deliverable:
Please submit your project [here](https://docs.google.com/forms/d/e/1FAIpQLScsgrJD22g9WnUj7-3gXMHFSPqkk9rTt86kbRTEDGfGCIMLVA/viewform?usp=sf_link){:target='blank'}

Tuesday, Week 6 - Project due at 12PM Mountain Time.

# Requirements

## Workflow
You will want to submit PRs to your accountabilibuddy to:

* You must give your accountabilibuddy collaboration access to your repo.
* You must submit *at least* 2 PRs to your accountabilibuddy for review.

It is up to you to decide what changes warrant a PR – remember we want to submit PRs that have significant changes and potential for feedback. Think about what functionality you’re struggling with or have questions about or need help with. As an accountabilibuddy, you are responsible for reviewing at least 2 PRs from your partner.

## Technologies

* **Fetch API** to retrieve and add data
* **Mocha** and **Chai** for testing your code
* [**Webpack**](https://frontend.turing.edu/lessons/module-2/build-processes-with-npm-webpack.html)

## Initial Setup

For this project, you will want to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit){:target='blank'} repo. Setup instructions are in the README.  

You will also need to clone down this [local server](https://github.com/turingschool-examples/travel-tracker-api){:target='blank'} and have it running in a separate tab in your terminal each time you run your client.

### Endpoints

Below are all the endpoints set up for this project. You may not use all of them -- some apply to extensions. Pay attention to the functionality required of each iteration when picking the appropriate endpoint.

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all travelers|`http://localhost:3001/api/v1/travelers`| GET  | none | object with `travelers` property containing an array of all travelers |
|Get single traveler|`http://localhost:3001/api/v1/travelers/<id>`     *where`<id>` will be a number of a traveler's id* | GET  | none | object of single traveler's info |
|Get all trips| `http://localhost:3001/api/v1/trips` | GET | none | object with `trips` property containing an array of all trips |
|Get all destinations| `http://localhost:3001/api/v1/destinations` | GET | none | object with `destinations` property containing an array of all destinations |
| Add new trip |`http://localhost:3001/api/v1/trips`| POST | `{id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}` | `{message: 'Trip with id <id> successfully posted', newTrip: <Object with trip info just posted>}`|
| Add new destination|`http://localhost:3001/api/v1/destinations`| POST | `{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}` | `{message: 'Destination with id <id> successfully posted', newDestination: <Object with destination info just posted>}`|
| Modify single trip | `http://localhost:3001/api/v1/updateTrip` | POST | `{id: <number>, status:<String of 'approved' or 'pending', suggestedActivities: <Array of strings>}` *Only a status* **or** *a suggestedActivities property is required for a successful request*| `{message: 'Trip #<id> has been modified', updatedTrip: <Object with newly updated data>}`|
| Delete single trip| `http://localhost:3001/api/v1/trips/<id>`     *where`<id>` will be a number of a trip's id*  | DELETE | none | Trip #<id> has been deleted |

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

<section class="note">
### Note
Consider how past projects specified a 'Data' section and a 'User Stories' section throughout the iterations description. You'll notice that you're only supplied with User Stories below. Analyze each user story to determine what data you'll need to work with and plan what functions you'll create to manipulate that data. 

Don't get too caught up with polishing your dashboard too early. You'll want to focus your energies first on the data and calculation functions, and then move on to the dashboard display. Establish some kind of minimum viable product (MVP) for your dashboard look, and then polish from there
</section>

### 1. Dashboard

**As a traveler:**
- I should see a dashboard page that shows me:
    - All of my trips (past, upcoming and pending)
    - Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent's 10% fee

### 2. Traveler Interaction

**As a traveler:**
- I should be able to make a trip request:
    - I will select a date, duration, number of travelers and choose from a list of destinations
    - After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
    - Once I submit the trip request, it will show on my dashboard as "pending" so that the travel agency can approve or deny it.

**Refer to the "Add new trip" section from the endpoints table above!**

### 3. Accessibility

* Create a branch for accessibility.  
* Use this branch to make your dashboard as accessible as possible.  
* Push this branch up to GH.  You can merge the changes into main but do not delete this branch.  
  * This branch should not have a login page so that during the live eval, we can run the Lighthouse audit and check tabbability of your dashboard (without the login page).  

### 4. Login

When first arriving at the site, a user should be able to log in with a username and password.

**As a traveler:**
- I should be able to login:
  - I will see a login page when I first visit the site:
  - I can log in with the following credentials:

```
username: traveler50 (where 50 is the ID of the user)
password: travel
```

  - Upon successfully loggin in, I should see my dashboard.

**Refer to the "Get single traveler" section from the endpoints table above!**

### 5. Agent Interaction (extension)

Your app should now support two different types of users.  In addition to having a traveler, you will now add a travel agency.


**As a travel agent:**
- I should be able to login:
  - I will see a login page when I first visit the site:
  - I can log in with the following credentials:

```
username: agency
password: travel
```

**As a travel agent, upon logging in:**
- I should see a dashboard page that shows me:
    - New trip requests (a user's "pending" trips)
    - Total income generated this year (should be 10% of user trip cost)
    - Travelers on trips for today's date (number, names, however you want to display this!)

**As a travel agent:**
- I should be able to see and approve / deny trip requests
- I should be able to search for any user by name and:
    - View their name, a list of all of their trips, and the total amount they’ve spent (including 10% agent cut)
    - Approve a trip request for that user
    - Delete an upcoming trip for that user

**Refer to the endpoints table above for *modifying* and *deleting* a single trip**

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

## Accessibility

Strive for an accessibility audit score of 100% for the dashboard.

A user should be able to interact with all functionality of your application by tabbing through it, no use of the trackpad.

ARIA attributes should be utilized for any UI elements that are not understood by the screen reader

## Additional Extensions
- The user dashboard should display a countdown to my next trip (if I have any)
- Allow the travel agent to POST suggestedActivities for user trips (see Endpoints table above). This could be based off of a user's "travelerType" value.
- Allow the travel agent to create new destinations (see Endpoints table above)
- Utilize an npm package - requires permission from instructors
  - Some options include: 
    * [Micromodal](https://www.npmjs.com/package/micromodal){:target='blank'}
    * [GlideJS](https://www.npmjs.com/package/@glidejs/glide){:target='blank'}
    * [InteractJS](https://interactjs.io/){:target='blank'}
    * [DayJS](https://www.npmjs.com/package/dayjs)
- Choose your own extension!

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

For the rubric sections below, you will be scored as Wow, Yes or Not Yet depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstate competency. The following examples are not checklists to complete! There are just some examples.

While M2 rubrics do not have a separate section for WOWs like in M1, there are a few WOW examples noted throughout. In addition to these WOW bullets, you can strive for a WOW by demonstrating not just competency, but excellence and thoroughness across the rubric sections.
</section>

<section class="answer">
### Functional Expectations

- Wow: Application fulfills all requirements as well as Iteration 5 or an extension.
- Yes: Application fulfills all requirements of iterations 1-4 without bugs. **Note: Must be completed in order to pass**
- Not Yet: Application crashes or has missing functionality or bugs.
</section>

<section class="answer">
### UI/UX & Accessibility

* The application can stand on its own to be used by an instructor without guidance from the developer
* UI/UX is intuitive and easy to read/use
* Helpful messaging is displayed to prevent user confusion. For example: If a user searches for a room, but none are available then a message is displayed to indicate that the search worked, nothing is broken, there just aren't any matching rooms available.
* The Lighthouse audit tool was used to improve accessibility.
* Users who only use keyboards can still navigate this application
* Users who use a screen reader can still navigate this application
* Utilizes ARIA attributes on interactive elements when no other tool allows for accessible content
* Wow option: design is responsive across small, medium and large breakpoints
</section>

<section class="answer">
### Fundamental JavaScript and Style / Fetch Competency Examples

* Code is divided into logical components each with a clean, single responsibility
* Array prototype methods are used to iterate instead of for loops
* Project is organized to separate concerns (Ask yourself - where should my DOM manipulation live?)
* Variables and functions are consistently and appropriately named
* Code leverages JavaScript's truthy/falsey principles
* Demonstrates efforts towards making functions pure when possible. Note: Purity is not possible for every function in a FE application. Strive for it only when it makes sense.
* Implements GET and POST Fetch requests
* When utilizing Fetch, the DOM is updated based on the results of that Fetch
* Errors are handled and messages are displayed to a user when an error occurs
* Wow option: Effectively implements one or more closure throughout project.
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
