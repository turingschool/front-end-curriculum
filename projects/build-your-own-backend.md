---
title: Build Your Own Backend
module: 4
---

## Abstract

BYOB is a two week long paired project. In Week One of the project, you will be building a fully-tested API, complete with professional-grade documentation.

During Week Two of the project, you will be turning your completed back-end into an open source project (you will maintain your own repository as well as work on contributing to another group's repository), and you will create a separate front-end site that functions as an interactive documentation site (similar to [this](https://opentdb.com/api_config.php)).

Last week, Palette Picker had you dive head first into a full-stack application with Node, Express, Knex, and a front-end to boot. That was a lot thrown at you in one week, so this time around we are going to expand our skills in the backend. You will be:

- building your own API for a large dataset of your choosing
- writing a complete server side test suite
- setting up continuous integration and deploying to Heroku
- setting up a separate front-end application to consume your API

The main focus of this project will be to reinforce your understanding of CRUD methods, querying a database, responding with JSON data, and testing the back-end. You can complete this project with only two new lessons (server-side testing and continuous integration).

The second focus for this project is developing professional-level workflow habits. This includes:

- using a PR template
- conducting actual code reviews in your PRs
- detailed agile workflow using a kanban system or GH issues
- keeping track of MVP features and nice-to-have features
- agreeing to a commit message template
- exploring `git rebase` and squashing
- Highly semantic, specific, professional documentation (README, API documentation, etc)


## Base Expectations

### WEEK 1: Find a Data Source

Data source MUST BE LOCKED IN by Monday EOD . We don't want you wasting the whole week trying to find data. Having production API endpoints well tested is more important.

Possible sources of data:

* Work with and scrape new data from an API or website. Some APIs and websites are easier to work with than others - you may not be able to pull off the thing you want to do - be prepared for that.
  * https://developer.nrel.gov/
  * https://sunlightfoundation.com/api/
  * https://developer.foursquare.com/
  * data.world
* Parse CSVs or JSON files (Node has built-in modules for parsing CSVs)
* Create the data yourself. You must create a ‘seed file’ with a minimum of ~30 rows of data for each main table

### WEEK 1: Relationships

At minimum, you must have at least 2 different tables with at least 1 relationship (e.g. one-to-one, one-to-many, many-to-many).

Each table must have no fewer than three columns.

### WEEK 1: Required endpoints

* 4 GET endpoints
  * 2 GET endpoints for all of one resource (i.e. '/api/v1/merchants')
  * 2 GET endpoints for a specific resource (i.e. '/api/v1/merchants/:id')
* 2 POST endpoints
* 2 PUT or PATCH endpoints
* 2 DELETE endpoints

### WEEK 1: Status Codes & Error Handling

All endpoints should respond with the minimum status code results:

* 200/201: Success
* 404: Not Found

If POST/PUT/PATCH request fails to save an entity due to bad information being sent from the client, you should respond with

* 422: Unprocessable Entity

If you have a critical server error, you should respond with

* 500: Internal Server Error

You are welcome to use other appropriate status codes.

In addition to responding with the appropriate status code, you are expected to send back clear, informative error messages when something goes wrong. Do not simply `console.log` 'WHATEVER'. If a `POST` request fails because the request didn't include a required parameter, respond with something like `'Entity requires a <fieldName> but none was provided.'`

### WEEK 1: Custom API Endpoints

* Developer must use query params on at least one endpoint, which would allow the user to narrow down the nature of their request or filter their results. So for example, you may have an endpoint like:

  `GET api/v1/merchants?areacode=80202`

  Which would limit the results to merchants in the 80202 area code.

  A further example of this implementation can be found here: [params](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters)

<!-- * Developer must secure at least 4 endpoints with a JWT. Though this project doesn't have an explicit frontend, at the `/` root of your application, return an `index.html` file with a form that allows a user to request a JWT. The user must submit an email address and an app name. If the email address ends in `@turing.io`, the JWT should include admin privileges. Require a JWT with admin privileges for any 'write' requests (POST/PUT/PATCH/DELETE). -->

### WEEK 1: Documentation

In the README, developer should provide documentation on the API endpoints that can be hit. Here is a [great example of in-depth documentation](https://developer.github.com/v3/repos/) Pay attention to the information provided and the format that it's presented in.

Some things you want to considering having in your API documentation:

* Endpoints available (e.g. GET /api/v1/students, POST api/v1/students)
* What parameters can be used in certain requests (e.g. For a POST request, what should be put in the request body?)
* Sample responses from endpoints (What does the response object look like for a request?)

You can put your documentation in the README of your BYOB GitHub repository. Remember, improperly formatted information can make it very difficult to read even if it's all accurate, so be sure to utilize markdown syntax styling/formatting.

### WEEK 1: Testing & Linting

* All endpoints need to be tested for happy AND sad paths. You should assert that proper status codes are being returned as well as appropriate response data and error messages.
* You are expected to use a linter on this project and have 0 linting errors. You are expected to set up and configure a linter. Consider using a git hook that prevents you from committing any un-linted code.

### WEEK 1: Deployment

* Your application should be automatically deployed to Heroku via TravisCI
* TravisCI should be running your tests and linter

### WEEK 2: "Open Source" mini project

AS A MAINTAINER:

* Your back-end application should be fully documented with SETUP instructions and CONTRIBUTING guidelines.
* Your scrum board should be publicly viewable and several issues should be available for contributors to choose from.
* Available issues should be thoroughly documented, giving good context and laying out clear expectations in order for contributors to have a clear idea of what to work on.
* When contributors create a PR, conduct a thorough code review, leave comments with requests for tweaks, and eventually close or merge the PR.

AS A CONTRIBUTOR:

* You will find an open issue to work on and communicate your intent to work on that issue to the maintainers.
* Set up the repo according to the SETUP instructions documented in the repo you will be working on.
* Be sure your contributions conform to the standards provided by the maintainer's CONTRIBUTING documentation.
* Respond to requests for updates or changes on your PR.

### WEEK 2: Front-End Documentation site

* Create a _separate_ front-end repository that will consume and document the back-end repository.
* Provide a page that documents the available endpoints, the data that will be received, and the data the user must send.
* The site should be interactive, allowing a developer to "try out" endpoints. Think of building out something like Postman specifically for your back-end.
* This front-end documentation site should be a single page and can be written in Javascript, jQuery, or React.
* The documentation site must be deployed to Heroku using continuous integration with TravisCI.

-----------------------------------------------

## Evaluations

We will have two evaluations throughout the course of the project.

At the end of Week 1, we will have a benchmark to see whether or not the Week 1 expectations are met.

At the end of Week 2, we will have an evaluation to look over the server, the PRs from the mini open source project, and the front-end documentation site.

To pass the project, all base expectations must be met in a timely manner.

-----------------------------------------------

#### Common Gotchas with Seeding Data:

* You'll probably have to do some sort of data manipulation/massaging before you try to seed. Think about how YOU want YOUR data to look before just dumping the data you found into your database. Do any manipulations you need to on your dataset before trying to seed. (e.g. you might want to rename, delete, or add columns)
* The data records you pull might already have unique IDs on them. Feel free to use these as your primary keys instead of wiping them out and creating new ones.
* You're going to be seeding a lot of data all at once. Recall the "Seeding Large Datasets" example from the [Knex Lesson Plan](http://frontend.turing.io/lessons/module-4/knex-postgres.html) and brush up on how to work with `Promise.all()`
* Remember you often have to RETURN the Promises you're using in your seed file. If you aren't getting any errors, but your data isn't being seeded, you're likely forgetting a `return` statement.
* If you're trying to transform data from a CSV file, avoid using [this library](https://www.npmjs.com/package/knex-seed-file).
