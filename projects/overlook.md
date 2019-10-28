---
title: Overlook  
length: 1 week
tags: javascript, oop, testing, jquery
---

1 week solo project for FE Mod 2 (Week 6)

## Background and Description

For this project, you will be building a hotel management tool for hotel customers and staff to manage room bookings and calculate customer bills.

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

* [Users](https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users)
* [Rooms](https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms)
* [Bookings](https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings)


## Iterations

### 1. Login

Your app should support two different types of users: a customer and a manager. When first arriving at the site, a user should be able to log in with a username and password. If it is a **manager** logging in, they should log in with the following credentials:

```
username: manager
password: overlook2019
```

If it is a **customer** logging in, they should log in with the following credentials:

```
username: customer50 (where 50 is the ID of the user)
password: overlook2019
```


### 2. Dashboard

**As a manager, upon logging in:**

* I should see a dashboard page that shows me:
  * Total Rooms Available for today's date
  * Total revenue for today's date
  * Percentage of rooms occupied for today's date

**As a customer, upon logging in:**

* I should see a dashboard page that shows me:
  * Any room bookings I have made (past or present/upcoming)
  * The total amount I have spent on rooms

### 3. Customer Interaction

**As a customer:**

* I should be able to select a date for which I'd like to book a room for myself
* Upon selecting a date, I should be shown a list of room details for *only rooms that are available on that date*
* I should be able to filter the list of available rooms by their `roomType` property
* I should be able to select a room for booking
* In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search

Booking a room will require a POST request to the bookings endpoint, like so:

**Room Booking: [https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings](https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings)**

```js
{
    "userID": 48,
    "date": "2019/09/23",
    "roomNumber": 4
}
```


### 4. Manager Interaction

**As a manager:**

* I should be able to search for any user by name and:
  * View their name, a list of all of their bookings, and the total amount they've spent
  * Add a room booking for that user
  * Delete any upcoming room bookings for that user (they cannot delete a booking from the past)

Deleting an upcoming booking will require a DELETE request to the bookings endpoint, like so:

```js
id: 12085397154
```

## Workflow

You will be assigned one workflow buddy to submit PRs to:

* You must give your workflow buddy collaboration access to your repo.
* You must submit at least 2 PRs to your workflow buddy for review.
* You must wait for your workflow buddy to review your PRs, and allow THEM to merge any PRs you submit.

It is up to you to decide what changes warrant a PR -- remember we want to submit PRs that have significant changes and potential for feedback. Think about what functionality you're struggling with or have questions about or need help with. As a workflow buddy, you are responsible for reviewing at least 2 PRs from your partner.

Please also tag your instructors in any PR you make.


## Testing

You should be testing your the correctness of your code throughout your project. Each JavaScript class file in your project should have its own test file.

Your testing suite should test all of the functionality of the application, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

Keep in mind your use-cases for Spies:

* Mocking out a fetch call and testing your applications reaction to the response
* Spying on methods that call other methods which are already tested elsewhere
* Spying on any functions that do DOM manipulation in response to the result of a fetch request/instance updating


## Accessibility

* Accessibility audits should be at 100%
* A user should be able to interact with all functionality of your application by tabbing through it, no use of the trackpad
* ARIA attributes should be utilized for any UI elements that are not understood by the screen reader
* Application should be fully responsive for mobile - tablet - desktop


## Extensions

* Allow customers to filter available rooms by cost (min/max), bed size, and/or number of beds
* Allow customers and managers to add a room service charge to a booking by utilizing the [room services endpoint](https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices)
* Find and fix a cross-browser compat issue



## Rubric