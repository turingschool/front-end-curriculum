---
title: Real Time
module: 4
tags: websockets
---

## The Project

In this project, we're going to exploring client-side security and build a real time application with WebSockets. When the server gets new information, it pushes it out to all of the connected clients.

## Approach

The focus of this project is to implement client-side security and real-time communications with WebSockets. You will create a polling service that shows a user's Github image when they select a poll option.

### On the Server

- Build a Node application that starts off just keeping all of the data in memory using local variables.
- Use WebSockets to broadcast poll results to the client.

### On the Client

- Use jQuery for all updating and DOM manipulations.
- You're welcome to use a front-end framework like Ember or React to handle all of the client-side concerns of your application. However, think long and hard if you really need a framework for this project.
- Use WebSockets to broadcast your vote to the server

## Learning Objectives

- Build a rich web application that leverages WebSockets to push data to connected clients in real time.
- Use JSON Web Tokens to authenticate yourself and display your Github image when you respond to a poll.
- Evaluate the trade-offs involved in different approaches and make informed decisions about your application's design and architecture.

## Case Studies and User Flows

Your application must meet the needs of the user as outlined below.

### Crowdsource

Alex is an instructor at a seven month developer training program in Colorado. In the middle of a long rant about the merits of CoffeeScript, he wants to check for student understanding. He could pause for a moment and ask the room if they have any idea what he's talking about, but he suspects they'll just smile and nod like they always do. He knows that some students may not want to admit in front of the whole group that they neither understand what Alex is talking about, nor do they particularly care.

- Alex decides to use Crowdsource to poll the room.
- He goes to the site to generate a new poll and adds three potential responses: "This is old hat to me", "I have an okay understanding of this", "I have no idea what you're babbling about".
- He gets back a link to share with others that contains a voting page that shows the options for the poll.
- He drops the link into Slack and his students vote.
- Alex can see in real time the poll results and a picture of each student next to their response.
- Alex feels pleased when he sees that 100% of his students are absolute masters of everything he has ever taught.

## Evaluation Criteria

Please read the entire rubric before beginning the project.

### Concept and Features

Does it have the expected features?

* 50 points - Met expectations as outlined by the user personas, the application is a solid first version. All planned features were delivered and the application is easy to use.
* 35 points - Some features were sacrificed to meet the deadline. At best, this is a prototype. Major features covered by the learning goals listed above were not written by the developer.
* 10 points - Major features are missing, there are major bugs that make it impossible to use, and/or the application is not deployed to production.
* 0 - There is no application.

### Code Quality (JavaScript)

* 50 points - Developer writes code that is exceptionally clear and well-factored. Application is expertly divided into logical components each with a clear, single responsibility.
* 35 points - Developer solves problems with a balance between conciseness and clarity and often extracts logical components. Developer can speak to choices made in the code and knows what every line of code is doing.
* 25 points - Developer writes effective code, but does not breakout logical components. Application shows some effort to break logic into components, but the divisions are inconsistent or unclear. There are many large methods or functions and it is not clear to the evaluator what a given section of code does.
* 10 points - Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* 0 points - Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Testing

* 25 points - The application has all routes tested and a minimum of five unit tests. No tests are failing on master and any skipped tests have an explanation of why skipped.
* 17 points - The application has most routes tested and some unit tests. There are no tests failing testing on master.
* 12 points - The application has a small number of routes tested and no unit tests. No tests are failing on master.
* 0 points - The application is has no testing.

### Workflow

* 25 points - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* 17 points - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* 12 points - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* 0 points - The application was not checked into version control.

### Extensions

* 20 points - The application persists all poll questions and responses to a database.
* 20 points - When creating a new poll, you have the ability to set an end date and time to automatically close the poll (you can visit the poll to see results but no one can vote).


### Blog Posts
This is not part of the project score but a homework assignment. If you are choosing not to do homework, then don't do it. If you are, please post 2 blog posts (minimum 500 words) to Medium on the following subjects:

* What are some interesting use-cases for WebSockets besides polling or IM'ing (aka Slack)?
* Explain the structure and content of a JSON web tokens and how you can use a JWT to restrict a user to specific routes in your application?

## Total possible points of 150 with a chance of 40 extra points

## To get a 3, you need 110 / 150 points

## To get a 4, you need 135 / 150 points
