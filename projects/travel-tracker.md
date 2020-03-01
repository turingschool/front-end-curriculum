---
title: Travel Tracker  
length: 1 week
tags: javascript, oop, testing, jquery
---

1 week solo project for FE Mod 2 (Week 6)

## Background and Description

For this project, you will be creating an application to manage and track different trips for users and travel agencies.

## Goals and Objectives

- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

# Requirements

## Technologies

* **the fetch API** to retrieve and add data
* **jQuery** for making the DOM easier to handle
* **Sass** for getting fancy with your CSS

## Initial Setup

For this project, you will want to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit) repo. Setup instructions are in the README

## Datasets

You will use the following endpoints for fetching your data:

* [Travelers](https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers)
* [Trips](https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips)
* [Destinations](https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations)

### Endpoints

Below are all the endpoints set up for this project. You may not use all of them -- some apply to extensions. Pay attention to the functionality required of each iteration when picking the appropriate endpoint.

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all travelers|`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers`| GET  | none | object with `travelers` property containing an array of all travelers |
|Get single traveler|`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers/<id>`     *where`<id>` will be a number of a traveler's id* | GET  | none | object of single traveler's info |
|Get all trips| `https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips` | GET | none | object with `trips` property containing an array of all travelers |
|Get all destinations| `https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations` | GET | none | object with `trips` property containing an array of all travelers |
| Add new trip |`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips`| POST | `{id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}` | `{message: 'Resource with id <id> successfully posted', newResource: <Object with trip info just posted>}`|
| Add new destination|`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations`| POST | `{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}` | `{message: 'Resource with id <id> successfully posted', newResource: <Object with destination info just posted>}`|
| Modify single trip | `https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/updateTrip` | POST | `{id: <number>, status:<String of 'approved' or 'pending', suggestedActivities: <Array of strings>}` *Only a status* **or** *a suggestedActivities property is required for a successful request*| `{message: 'Trip #<id> has been modified', updatedResource: <Object with newly updated data>}`|
| Delete single trip| `https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips` | DELETE | `{id: <Number>}` | Trip #<id> has been deleted |

- All POST and DELETE requests should have the following headers:
```
{
  "Content-Type": "application/json"
}
```

- Remember, a `.catch` won't necessarily run on a bad response (ie 4xx level status) from the server. Make sure you're checking your response status codes and messages if something isn't working as expected

## Iterations

### 1. Login

Your app should support two different types of users: a traveler and the travel agency. When first arriving at the site, a user should be able to log in with a username and password.

If it is the **travel agency** logging in, they should log in with the following credentials:

```
username: agency
password: travel2020
```

If it is a **traveler** logging in, they should log in with the following credentials:

```
username: traveler50 (where 50 is the ID of the user)
password: travel2020
```

### 2. Dashboard

**As a traveler, upon logging in:**
- I should see a dashboard page that shows me:
    - All of my trips (past, present, upcoming and pending)
    - Total amount I have spent on trips this year (including travel agent's 10% fee)

**As a travel agent, upon logging in:**
- I should see a dashboard page that shows me:
    - New trip requests
    - Total income generated this year (should be 10% of user trip cost)
    - Number of travelers on trips for today's date

### 3. Traveler Interaction

**As a traveler:**
- I should be able to make a trip request
    - I will select a date, duration, number of travelers and choose from a list of destinations
    - After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
    - Once I submit the trip request, it will show on my dashboard as "pending"

Submitting a trip request will require a POST request to the trips endpoint, like so:

**Trips: [https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips](https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips)**

```js
{
   "id": 92829,
   "userID": 44,
   "destinationID": 49,
   "travelers": 1,
   "date": "2019/09/16",
   "duration": 8,
   "status": "pending",
   "suggestedActivities": []
}
```
- This is an example of what to send the server if you wanted to add a new trip

### 4. Agent Interaction

**As an agent:**
- I should be able to see and approve / deny trip requests
- I should be able to search for any user by name and:
    - View their name, a list of all of their trips, and the total amount they’ve spent (including 10% agent cut)
    - Approve a trip request for that user
    - Delete an upcoming trip for that user

Approving a trip will require a POST - changing the trip status from "pending" to "approved", like so:

```js
{
   "id": 92829,
   "status": "approved"
}
```
- This is an example of what to send the server if you wanted to approve trip 92829

Deleting an upcoming booking will require a DELETE request to the bookings endpoint, like so:

```js
{
  "id": 92829
}
```
- This is an example of what to send the server if you wanted to delete trip 92829

### Extensions
- The user dashboard should display a countdown to my next trip (if I have any)
- Allow the travel agent to POST suggestedActivities for user trips (see Endpoints table above)
- Allow the travel agent to create new destinations (see Endpoints table above)

## Workflow
You will be assigned one workflow buddy to submit PRs to:

* You must give your workflow buddy collaboration access to your repo.
* You must submit at least 2 PRs to your workflow buddy for review.
* You must wait for your workflow buddy to review your PRs, and allow THEM to merge any PRs you submit.

It is up to you to decide what changes warrant a PR – remember we want to submit PRs that have significant changes and potential for feedback. Think about what functionality you’re struggling with or have questions about or need help with. As a workflow buddy, you are responsible for reviewing at least 2 PRs from your partner.

Please also tag your instructors in any PR you make to your buddy.

## Testing
You should be testing your the correctness of your code throughout your project. Each JavaScript class file in your project should have its own test file.

Your testing suite should test all of the functionality of the application, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

Keep in mind your use-cases for Spies:

- Mocking out a fetch call and testing your applications reaction to the response
- Spying on methods that call other methods which are already tested elsewhere
- Spying on any functions that do DOM manipulation in response to the result of a fetch request/instance updating

# Rubric

## Specification Adherence

* [ ]  Novice - The application is missing multiple features/requirements outlined above.
* [ ]  Advanced Beginner - The application is in a usable state, but is missing part of one or more of the technologies outlined above.
* [ ]  Proficient - The application uses the above technologies to a professional level.
* [ ]  Exceptional - Meets all expectations of `Proficient`. In addition, the application has additional features/extensions implemented that go above and beyond the project requirements.

## UI/UX

* [ ] Novice - The application is confusing or difficult to use. The UI is incomplete.
* [ ] Advanced Beginner - The application may be confusing or difficult to use at times. The application shows some effort in the interface, but the result is not effective because UX and/or UI still present an application that is incomplete or difficult to use.
* [ ] Proficient - The application has many strong pages/interactions. The application can stand on its own to be used by instructor without guidance from a developer on the team. The application is fully responsive and the UI does not detract from the UX.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, the application has clearly had special consideration around usability on devices.

### JavaScript Style & OOP

* [ ] Novice - Application is not separated into classes, or methods and properties are illogically assigned to classes. Developer writes code with unnecessary variables, operations, or steps that do not increase clarity. Business-side logic and view-related code are not separated.
* [ ] Advanced Beginner - Application has a significant amount of duplication. Application is organized into classes that do not display a good understanding of encapsulation, and logic is not well-divided. Developer cannot articulate what each line of code is doing.
* [ ] Proficient - Application is thoughtfully put together with some duplication. Developers can speak to choices made in the code and knows what every line of code is doing. Application is organized into classes (and correctly uses inheritance) with some misplaced logic. Business-logic code is mostly separated from view-related code.
* [ ] Exceptional - Meets all requirements of `Proficient`. In addition, application has exceptionally well-factored code with little or no duplication. SRP (single responsibility principle) and DRY (don't repeat yourself) principles are utilized. There are _zero_ instances where an instructor would recommend taking a different approach. There are no instances where instructor would suggest moving logic or data to another class. The business-logic code driving functionality is cleanly separated from rendering, view-related code.

## CSS/Sass Style

* [ ] Novice - There are several (10+) instances of duplication and one or two major bugs. Developers write code with unnecessary selectors or tags which do not increase clarity.
* [ ] Advanced Beginner - There is some duplication (5-10 instances) in the codebase. There may be one to two minor bugs. There may be some unnecessary selectors or tags. Application adds organization for the whole stylesheet and within rules.
* [ ] Proficient - Application is thoughtfully put together with comments to help guide organization. There may be some duplication (fewer than 5 instances) present. Comments are present to assist with organization of code.
* [ ] Exceptional - Meets all expectations for `Proficient`. The application has exceptionally well-factored CSS/Sass with all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.

## Testing

* [ ] Novice - There is little or no evidence of testing in the application.
* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested.
* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features.
* [ ] Exceptional - Project has a running test suite that utilizes spies. The test suite covers almost all aspects of the application.
