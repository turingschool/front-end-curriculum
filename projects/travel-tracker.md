---
title: Travel Tracker  
length: 1 week
tags: javascript, oop, testing, jquery
---

## Background and Description

For this project, you will be creating an application to manage and track different trips for users and a travel agency.

## Goals and Objectives

- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

# Requirements

## Technologies

* **the fetch API** to retrieve and add data
* **Sass** for getting fancy with your CSS
* **Mocha** and **Chai** for testing your code

## Initial Setup

For this project, you will want to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit) repo. Setup instructions are in the README

### Endpoints

Below are all the endpoints set up for this project. You may not use all of them -- some apply to extensions. Pay attention to the functionality required of each iteration when picking the appropriate endpoint.

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all travelers|`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers`| GET  | none | object with `travelers` property containing an array of all travelers |
|Get single traveler|`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/<id>`     *where`<id>` will be a number of a traveler's id* | GET  | none | object of single traveler's info |
|Get all trips| `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips` | GET | none | object with `trips` property containing an array of all travelers |
|Get all destinations| `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations` | GET | none | object with `trips` property containing an array of all travelers |
| Add new trip |`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`| POST | `{id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}` | `{message: 'Resource with id <id> successfully posted', newResource: <Object with trip info just posted>}`|
| Add new destination|`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`| POST | `{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}` | `{message: 'Resource with id <id> successfully posted', newResource: <Object with destination info just posted>}`|
| Modify single trip | `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip` | POST | `{id: <number>, status:<String of 'approved' or 'pending', suggestedActivities: <Array of strings>}` *Only a status* **or** *a suggestedActivities property is required for a successful request*| `{message: 'Trip #<id> has been modified', updatedResource: <Object with newly updated data>}`|
| Delete single trip| `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips` | DELETE | `{id: <Number>}` | Trip #<id> has been deleted |

- All POST and DELETE requests should have the following headers:
```js
{
  "Content-Type": "application/json"
}
```

- Remember, a `.catch` won't necessarily run on a bad response (ie 4xx level status) from the server. Make sure you're checking your response status codes and messages if something isn't working as expected

## Iterations

### 1. Dashboard

**As a traveler:**
- I should see a dashboard page that shows me:
    - All of my trips (past, present, upcoming and pending)
    - Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent's 10% fee

### 2. Traveler Interaction

**As a traveler:**
- I should be able to make a trip request:
    - I will select a date, duration, number of travelers and choose from a list of destinations
    - After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
    - Once I submit the trip request, it will show on my dashboard as "pending" so that the travel agency can approve or deny it. 

**Refer to the "Add new trip" section from the endpoints table above!** 

<section class="note">
### Note!

If you haven't already, focus on accessibility at this point.  Before moving to iteration 3, please **create a branch and push it up to GH** so instructors can run *Lighthouse* and check your dashboard for it's accessibility audit.
</section>

### 3. Login

When first arriving at the site, a user should be able to log in with a username and password.

**As a traveler:** 
- I should be able to login:
  - I will see a login page when I first visit the site:
  - I can log in with the following credentials:

```
username: traveler50 (where 50 is the ID of the user)
password: travel2020
```

  - Upon successfully loggin in, I should see my dashboard.

**Refer to the "Get single traveler" section from the endpoints table above!** 

### 4. Agent Interaction

Your app should now support two different types of users.  In addition to having a traveler, you will now add a travel agency. 


**As a travel agent:**
- I should be able to login:
  - I will see a login page when I first visit the site:
  - I can log in with the following credentials:

```
username: agency
password: travel2020
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
You should be testing the correctness of your code throughout your project. Each JavaScript class file in your project should have its own test file.

Your testing suite should test all of the functionality of the application, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

## Workflow
You will be assigned one workflow buddy to submit PRs to:

* You must give your workflow buddy collaboration access to your repo.
* You must submit _at least_ 2 PRs to your workflow buddy for review.
* You must wait for your workflow buddy to review your PRs, and allow THEM to merge any PRs you submit.

It is up to you to decide what changes warrant a PR – remember we want to submit PRs that have significant changes and potential for feedback. Think about what functionality you’re struggling with or have questions about or need help with. As a workflow buddy, you are responsible for reviewing at least 2 PRs from your partner.

**Please also tag your project manager in any PR you make to your buddy.**

## Extensions
- The user dashboard should display a countdown to my next trip (if I have any)
- Allow the travel agent to POST suggestedActivities for user trips (see Endpoints table above). This could be based off of a user's "travelerType" value.
- Allow the travel agent to create new destinations (see Endpoints table above)
- Utilize an npm package (example: momentJS) - requires permission from instructors
- Choose your own extension! 

## Due Date

Make sure you turn in your project [here](https://docs.google.com/spreadsheets/d/1sezifM_yYe9M7VK0DrnoiTyAnAXsU6d2UaQlSfyH9aQ/edit#gid=1963824141) by **Tuesday, September 22nd at 9pm**

# Rubric

## Specification Adherence

* [ ]  Novice - The application completes only the first iteration, displaying the user's data, but has no additional functionality.
* [ ]  Advanced Beginner -The application completes the first 2 iterations and is in a usable state, but has some miscellaneous bugs.
* [ ]  Proficient - The application completes the first 3 iterations above without error.
* [ ]  Exceptional - The application completes all iterations above and implements one or more of the extensions.

## UI/UX & Accessibility

* [ ] Novice - The application is confusing or difficult to use. The UI is incomplete, and the app is not responsive. Accessibility has not been considered. 
* [ ] Advanced Beginner - The application may be confusing or difficult to use at times. The application shows some effort in the interface, but the result is not effective because UX and/or UI still present an application that is incomplete or difficult to use. The UI is incomplete, and the app is not responsive. Accessibility has been considered, but does not have strong accessible features. 
* [ ] Proficient - The application has many strong pages/interactions. The application can stand on its own to be used by instructor without guidance from a developer on the team. The application is fully responsive and the UI does not detract from the UX. Lighthouse accessibility audit is at least 90%.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, the application has clearly had special consideration around usability on devices. Lighthouse accessibility audit is at a 100%.

## JavaScript Style & OOP

* [ ] Novice - Application is not separated into classes, or methods and properties are illogically assigned to classes. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Business-side logic and view-related code are not separated.
* [ ] Advanced Beginner - Application has a significant amount of duplication. Application is organized into classes that do not display a good understanding of encapsulation, and logic is not well-divided. Developer cannot articulate what each line of code is doing.
* [ ] Proficient - Application is thoughtfully put together with some duplication. Developers can speak to choices made in the code and knows what every line of code is doing. Application is organized into classes (and correctly uses inheritance) with some misplaced logic. Business-logic code is mostly separated from view-related code.
* [ ] Exceptional - Meets all requirements of `Proficient`. In addition, application has exceptionally well-factored code with little or no duplication. SRP (single responsibility principle) and DRY (don't repeat yourself) principles are utilized. There are _zero_ instances where an instructor would recommend taking a different approach. There are no instances where instructor would suggest moving logic or data to another class. The business-logic code driving functionality is cleanly separated from rendering, view-related code.

## CSS/SASS Style

* [ ] Novice -  The application makes little to no use of SASS and is not separated into logical stylesheets. There are many instances of duplication
* [ ] Advanced Beginner - Application adds organization for the whole stylesheet and within rules, but multiple SASS files have not been utilized. All SASS code lives in a single file, and only makes use of variables. There is some duplication in the codebase, and there may be some unnecessary selectors or tags. 
* [ ] Proficient - The application has well-factored SASS with all styles separated out into logical stylesheets. Mixins or extends, variables, (appropriate) nesting and color functions have been utilized well.
* [ ] Exceptional - Application fulfills all requirements of the proficient level, and has SASS functionality that goes above and beyond an MVP.

## Testing

* [ ] Novice - There is little or no evidence of testing in the application.
* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested.
* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features and only tests for happy paths.
* [ ] Exceptional - The test suite covers almost all aspects of the application and covers both happy/sad paths.
