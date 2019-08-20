---
title: Address Book
module: 4
---

# Abstract

Address Book is a two week long paired project intended to solidify your RESTful
API design skills, and get you familiar with the patterns associated with
building a single app across multiple repositories.

Consider how a contact is stored in the Apple ecosystem:

![Contact
Image](https://img.gadgethacks.com/img/57/10/63648585470394/0/apple-pay-cash-101-make-person-person-payments-via-imessage.w1456.jpg)

Your job is to create an address book that can recreate some of this
functionality with your own backend and database. A user should be able to
create a new contact, add contact details (phone, email, address, website) for
that person, and be able to update or delete everything about the contact.

Address book will be build in two separate repositories:
- A back-end repository for your database and server
- A front-end repository for your user-facing application, which will consume
  the back-end API

## Learning Goals

The primary learning goals for this project are:

- server-side testing
- further understanding of complete CRUD endpoints
- connecting BE & FE repositories using CORS
- multiple environments: 
    - testing 
    - making use of automatic continuous integration with TravisCI
    - deployment with Heroku

The second focus for this project is developing professional-level workflow habits. This includes:

- using a PR template
- conducting actual code reviews in your PRs
- detailed agile workflow using a kanban system or GH issues
- keeping track of MVP features and nice-to-have features
- agreeing to a commit message template
- exploring `git rebase` and squashing
- Highly semantic, specific, professional documentation (README, API documentation, etc)

This workflow process will be good preparation for the next group project, which is your Cross-Pollination capstone.

# Base Expectations

## Back End Functionality 

The back-end of this project can be completed with three new lessons: Intro to
Express, Server-Side Testing, and Connecting the BE & FE. You have the tools to
build out the one-to-many relationship in PostgreSQL with a Express/Knex server!

### Required Endpoints

* 4 GET endpoints
  - 2 GET endpoints that serve up ALL of a single resource
  - 2 GET endpoints that serve up a single record of a resource
* 2 POST endpoints
* 2 PUT/PATCH endpoints
* 2 DELETE endpoints

#### Custom API Endpoints

* Developer must use query params on at least one endpoint, which would allow the user to narrow down the nature of their request or filter their results. So for example, you may have an endpoint like:

  `GET api/v1/merchants?areacode=80202`

  Which would limit the results to merchants in the 80202 area code.

  A further example of this implementation can be found here: [params](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters)

### Status Codes & Error Handling

All endpoints should respond with the minimum status code results:

* 200/201: Success
* 404: Not Found

If POST request fails to save an entity due to bad information being sent from the client, you should respond with

* 422: Unprocessable Entity

If you have a critical server error, you should respond with

* 500: Internal Server Error

You are welcome to use other appropriate status codes.

In addition to responding with the appropriate status code, you are expected to send back clear, informative error messages when something goes wrong. Do not simply `console.log` 'WHATEVER'. If a `POST` request fails because the request didn't include a required parameter, respond with something like `'Entity requires a <fieldName> but none was provided.'`

### Testing

All endpoints need to be tested for happy AND sad paths. You should assert that proper status codes are being returned as well as appropriate response data and error messages. Please reference the server-side testing lesson to see the robustness and thoroughness of testing we are expecting.

### Documentation

In the README, developer should provide documentation on the API endpoints that can be hit. Here is a [great example of in-depth documentation](https://developer.github.com/v3/repos/) Pay attention to the information provided and the format that it's presented in.

Some things you want to considering having in your API documentation:

* Endpoints available (e.g. GET /api/v1/students, POST api/v1/students)
* What parameters can be used in certain requests (e.g. For a POST request, what should be put in the request body?)
* Sample responses from endpoints (What does the response object look like for a request?)

You can put your documentation in the README of your BYOB GitHub repository. Remember, improperly formatted information can make it very difficult to read even if it's all accurate, so be sure to utilize markdown syntax styling/formatting ([here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a markdown style cheatsheet).

### Deployment

Your back-end will be deployed to Heroku, and we will set up continuous integration using the TravisCI tool. We will have a lesson where we deploy our BE applications using TravisCI and Heroku together at the end of Week 2.
