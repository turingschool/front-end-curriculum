---
title: Overlook  
length: 1 week
tags: javascript, oop, testing, jquery
---

1 week solo project for FE Mod 2 (Week 6)

## Background and Description

For this project, you will be building a hotel management tool for hotel staff to manage activities like customer details, booking details for different types of rooms, unbooking rooms, and calculating/showing a customer's total bill.

## Goals and Objectives

- Use OOP to drive the design of the application and the code
- Separate business-logic code from view-related code
- Create a robust test suite that thoroughly tests all functionality of a client-side application

# Requirements

## Technologies

* **the fetch API** for sending/receiving data 
* **jQuery** for making the DOM easier to handle
* **Sass** for getting fancy with your CSS

## Initial Setup

For this project, you need to use this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit) repo.

## Testing

You should be testing your the correctness of your code throughout your project. 
Each JavaScript file in your project should have its own test file. 
Your testing suite should test all of the functionality of the application, including the following:

* Class default properties
* Class methods
* Anything that updates class properties

For the purposes of this project, you will keep your state logic completely separate from your view logic. In other words, your business logic (classes/methods) should not handle anything that deals with the UI (DOM Manipulation).

To do this, you will utilize a separate `domUpdates.js` file that handles any DOM manipulation that is triggered by your business logic. This is covered in more depth in the testing lesson, which you can find [here](http://frontend.turing.io/lessons/module-2/testing-with-chai-spies.html).

## README

Your README should include the following, in this order:

- Abstract at the top (A sentence or two describing the project)
- Install/Setup instructions
- Everything else (must include wireframes and screenshot/GIF of finished project)

## User Stories

### Core Application

```
As a developer of the application,
I must allow a visitor (hotel manager) to see all daily room service charges and booking information. This information should be available regardless of whether a valid customer has been selected.
```

```
As a developer of the application,
I need to give the visitor the ability to search for and add new customers from the `Customers` tab. 
If a valid customer result is returned while searching or a new customer is added,
all the tabs besides the `Main` tab will be specific to that customer.
If there are no valid results found, I will implement error handling for this case and all tab will continue to display generalized information.
```

```
As a developer of the application,
I need to make sure a valid customer has been selected in order for a visitor to be able to do any of the following:

- book/unbook a room
- purchase room service
- upgrade a room
- calculate a total bill
```

### EPIC: Dashboard

```
As a visitor,
when I visit the main application tab,
I will be presented with a dashboard that displays today's date. The dashboard will also have the following information:

- Total Rooms Available for today's date
- Total of debt's owed/earned for today's date
- Percentage of rooms occupied for today's date
```

```
As a visitor,
when I visit the main applications tab,
I will also see four icons that allow me to visit four distinct tabs:

- Main
- Orders
- Rooms
- Customer

Clicking on `Orders`, `Rooms`, or `Customer` show a take the customer to a new tab.
Clicking on the `Main` link from any of the tabs will redirect to the main dashboard.
```

### Epic: Customer

```
As a visitor,
When I visit the main application tab,
clicking on the `Customer` icon will take me to the `Customer` tab.
The UI will prompt to either search for a current customer or create a new customer.
If I create a new customer, 
I will have to submit the customer's name and this customer will automatically be selected.
I will know that a customer has been selected,
because the customer name will be displayed at the top of the page.
```

```
As a visitor,
When I visit the main application tab,
clicking on the `Customer` icon will take me to the `Customer` tab.
The UI will prompt me to either search for a current customer or create a new customer.
If I search for a current customer,
finding that customer will give me the option to select that customer.
If that customer does not exist,
the UI will state that this customer does not exist.
I will know that a customer has been selected,
because the customer name will be displayed at the top of the page.
```

### Epic: Orders

```
As a visitor,
When I visit the main application tab,
clicking on the `Orders` icon  will take me to the `Orders` tab.
The `Orders` tab will default to display _all_ orders for room service for today's date.

I will also see an input that will allow me to search for all orders for room service for a specified date.
```

```
As a visitor,
when a valid customer has been selected,
clicking on the `Orders` icon  will take me to the `Orders` tab.
The `Orders` tab will display customer specific information:

- Breakdown of dates and dollar amounts for room service
- Total dollar amount spent on room service for a particular day
- Total dollar amount spent on room service for a all days ever


If there is no valid information for this customer,
I will be notified that no valid data exists.
```

### Epic: Bookings

```
As a visitor,
When I visit the main application tab,
clicking on the `Rooms` icon will take me to the `Rooms` tab.
The `Rooms` tab will default to display the following:

- Most popular booking date 
- The date with the most rooms available

I will also see an input that will allow me to search for what rooms are available for a specified date.
```

```
As a visitor,
when a valid customer has been selected,
The `Rooms` tab will display all the following customer specific information:

- Summary of all past and current bookings

If there is no valid information for past booking for this customer,
I will be notified that no valid data exists.
```

```
As a visitor,
when a valid customer has been selected,
and there is not a current booking for today's date,
the UI for the `Rooms` tab will show a button for creating a new booking.
Clicking this button will reveal a menu that allows for filtering rooms by type.

If the desired room type is available for the current date, that room information will be displayed and be available for booking.
If the desired room type is _not_ available for the current date, all other available rooms will be displayed and be available for booking.
```

```
As a visitor, 
when a valid customer has been selected,
and there are rooms that are available for booking on the `Rooms` tab,
all available rooms will show me the following information:

- type
- number of beds
- bed sizes
- bidet availability

This information will be available prior to completing the booking.
```

```
As a visitor,
when a valid customer has been selected,
and a new booking has been made for the current date,
a button will be available to add room service.
Clicking this button will reveal a menu that has a list of food and prices that are available to purchase.

If purchases are made for room service, these changes will be reflected on the `Orders` tab.
```

# Rubric

## Specification Adherence

* [ ]  Novice - The application is missing multiple features/requirements outlined above. 
* [ ]  Advanced Beginner - The application is in a useable state, but is missing part of one or more of the technologies outlined above.
* [ ]  Proficient - The application uses the above technologies to a professional level. 
* [ ]  Exceptional - Meets all expectations of `Proficient`. In addition, the application has additional features/extensions implemented that go above and beyond the project requirements.

## UI/UX

* [ ] Novice - The application is confusing or difficult to use. The UI is incomplete.
* [ ] Advanced Beginner - The application may be confusing or difficult to use at times. The application shows some effort in the interface, but the result is not effective because UX and/or UI still present an application that is incomplete or difficult to use.
* [ ] Proficient - The application has many strong pages/interactions. The application can stand on its own to be used by instructor without guidance from a developer on the team. The application is fully responsive and the UI does not detract from the UX.
* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, the application has clearly had special consideration around usability on devices. 

## JavaScript / React Style

* [ ] Novice - There is a significant amount of duplication and one or two major bugs. JavaScript does not follow the principles of `DRY` (Don't Repeat Yourself)
* [ ] Advanced Beginner - There is some duplication and there may be one or two major bugs. The application has large components and logic could be broken apart into smaller, function components. JavaScript may be hard to read/follow.
* [ ] Proficient - Application has little to no duplication and no major bugs. Application has several components built out that logically break apart the functionality. JavaScript may be hard to follow at times but is generally easy to read/understand. 
* [ ] Exceptional - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There are zero instances where an instructor would recommend taking a different approach to design and component architecture. DRY and SRP (Single Responsibility Principle) practices are incorporated, making JavaScript very easy to follow/read.

## CSS/Sass Style

* [ ] Novice - There are several (10+) instances of duplication and one or two major bugs. Developers write code with unnecessary selectors or tags which do not increase clarity.
* [ ] Advanced Beginner - There is some duplication (5-10 instances) in the codebase. There may be one to two minor bugs. There may be some unncessary selectors or tags. Application adds organization for the whole stylesheet and within rules.
* [ ] Proficient - Application is thoughtfully put together with comments to help guide organization. There may be some duplication (fewer than 5 instances) present. Comments are present to assist with organization of code.
* [ ] Exceptional - Meets all expectations for `Proficient`. The application has exceptionally well-factored CSS/Sass with all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.

## Testing

* [ ] Novice - There is little or no evidence of testing in the application.
* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The applicaiton contains numberous holes in testing and/or many features are untested.
* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features.
* [ ] Exceptional - Project has a running test suite that exercises the application used Enzyme. The test suite covers almost all aspects of the application.
