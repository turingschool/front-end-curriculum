---
title: Curiously Native
module: 4
tags: react native, redux, immutable, data, visualizations, api
---

## The Project

In this project, we'll be creating an mobile app with React Native that consumes a public API and renders useful data visualizations. We will also be using Redux with ImmutableJS to store the our data and auth0 to authenticate users.

You can use whatever API interests you and any of the auth0 providers to authenticate users.

### Pre-Work

You'll be expected to have reviewed the following materials by Wednesday morning:

1. https://facebook.github.io/react-native/
2. http://www.reactnativeexpress.com/

## Requirements

### Authentication

You must use auth0 to authenticate a user. You can use any of the auth0 providers (Google, Twitter, Facebook, Github... [check them all out here](https://auth0.com/docs/identityproviders))

### Consume Public API

You can pick any API you want. No CORS in React Native so go bananas.

### Immutablility

You must use ImmutableJS with Redux to store your API data in your app.

### User Experience

You must create four distinct scenes (think of a web page for mobile) and use the navigator to navigate between them:

1. A Home scene - Ability to login
2. A Profile scene - Picture of user along with user information and ability to logout
3. A search scene - Ability to make an api call to search for information and display results.
4. Data visualization scene - Two unique data visualizations based on data retrieved by api call.

What the scenes and visualizations look like is up to you.

### Blog Posts

You've built apps in React/Redux, you've hit API endpoints, but you haven't used React Native for mobile development. One of the goals of this project is to documenting your successes and struggles with mobile development and authentication. In addition to programming, you'll be writing a a series of blog posts:

1. An introduction to React Native and how mobile development differs from web development. Discuss the pros/cons of using React Native vs. React, what you need to keep in mind when developing for both iOS and Android, and any design choices you made because of mobile development.
2. A particular technical problem that occurred when trying to visualize data.
3. A post-mortem on what went well and what you would improve upon if you were to continue working on this project or if you started over

## Extensions

* Add an additional scene with two more data visualizations and animations (15 pts)
* Persist data in a MySql database using Realm (20 pts)

---------

## Rubric

### Authentication (10 Points)

* 10: A user can successfully login and logout using JWTs and Auth0 and can access all functionality relating to that user.
* 7: A user can successfully login and logout but there are issues with authenticating that prevents the user from accessing functionality.
* 3: There are bugs in authenticating and heavily duplication of code
* 0: No authentication.

### Consume API (10 Points)

* 10: A user can fetch data from an API and specify different request params. Useful messages/UI appear to guide a user to successful searches.
* 7: A user can successfully fetch data.
* 3: There are bugs in fetching data.
* 0: No data.

### Immutablility (10 Points)

* 15: Successfully store data from the API in ImmutableJS and render it in React components.
* 10: Success at storing API data in ImmutableJS but bugs in rendering it in React components.
* 5: Attempt at using ImmutableJS but really it's a dumpster fire of data.
* 0: No attempt made

### Visualizations (20 Points)

* 20: There are at least two unique data visualization that have animations and are beautifully rendered.
* 15: There are two unique data visualization with basic animations.
* 7: There are less than two scenes of data visualization or visualizations do not work properly.
* 0: No visualizations.

### Blog Post (45 Points - 15 points per post)

### JavaScript Style (30 points)

* 40: Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* 35: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 15: Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 10: Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* 5: Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* 0: There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### User Interface (10 points)

* 10: The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer. The client interface is unique and is in spirit with the selected theme.
* 7: The application has many strong pages/interactions, but a few holes in lesser-used functionality. Some attempt to create a unique client interface and experience.
* 5: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories. Little to no attempt to create a unique client interface.
* 0: The application is confusing or difficult to use.

### Risk Taking and Creativity (20 points)

Instructor/developers will select one feature in the project to review for this section of the rubric.

- 50: Developers pushed themselves and their team by taking risks which is demonstrated by a delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 40: Developers pushed themselves and their team by taking risks which is demonstrated by an almost delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 30: Developers attempted to implement extensions using technologies not covered in class but it did not result in a delivered feature.
- 10: Developers but did not build any features.

### Workflow (10 Points)

* 20: The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application. There is visible evidence of code review happening in pull requests and discussion around approaches.
* 15: The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. There is little evidence of code review.
* 5: The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. There are formatting issues in the code base. (This is important. These issues should not be able to make it past code review.)
* 1: The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0: The application was not checked into version control.
