---
title: Build Your Own Backend
module: 4
---

## Abstract

BYOB is a two week long paired project. In Week One of the project, you will be building a fully-tested API, complete with thorough documentation. In Week Two of the project, you will be building a front-end to consume and use the data from your (or potentially another group's) API.

Practice makes practice. Last week's project had you dive head first into a full-stack application with Node, Express, Knex, and a front-end to boot. That was a lot thrown at you in one week, so this time around we are going to expand our skills in the backend. You will be:


- building your own API for a large dataset of your choosing
- writing a complete server side test suite
- setting up continuous integration
- setting up a separate front-end application to consume your API

The main focus of this project will be to reinforce your understanding of CRUD methods, querying a database, responding with JSON data, and testing the back-end. You can complete this project with a single new lesson (server-side testing).

A secondary focus for this project is beginning to develop professional-level workflow habits. This includes:

- using a PR template
- conducting code reviews in your PRs
- detailed agile workflow using a kanban system or GH issues
- keeping track of MVP features and nice-to-have features
- agreeing to a commit message template
- exploring `git rebase` and squashing
- Highly semantic and specific documentation (README, API documentation, etc)


## Base Expectations

### Find a Data Source

Data source MUST BE LOCKED IN by Monday EOD . We don't want you wasting the whole week trying to find data. Having production API endpoints well tested is more important.

Possible sources of data:

* Work with and scrape new data from an API or website. Some APIs and websites are easier to work with than others - you may not be able to pull off the thing you want to do - be prepared for that.
  * https://developer.nrel.gov/
  * https://sunlightfoundation.com/api/
  * https://developer.foursquare.com/
  * data.world
* Parse CSVs or JSON files (Node has built-in modules for parsing CSVs)
* Create the data yourself. You must create a ‘seed file’ with a minimum of ~30 rows of data for each main table

### Relationships

At minimum, you must have at least 2 different tables with at least 1 relationship (e.g. one-to-one, one-to-many, many-to-many).

### Required endpoints

* 4 GET endpoints
  * 2 GET endpoints for all of one resource (i.e. '/api/v1/merchants')
  * 2 GET endpoints for a specific resource (i.e. '/api/v1/merchants/:id')
* 2 POST endpoints
* 2 PUT or PATCH endpoints
* 2 DELETE endpoints

### Status Codes & Error Handling

All endpoints should respond with the minimum status code results:

* 200/201: Success
* 404: Not Found

If POST/PUT/PATCH request fails to save an entity due to bad information being sent from the client, you should respond with

* 422: Unprocessable Entity

If you have a critical server error, you should respond with

* 500: Internal Server Error

You are welcome to use other status codes.

In addition to responding with the appropriate status code, you are expected to send back clear, informative error messages when something goes wrong. Do not simply `console.log` 'WHATEVER'. If a `POST` request fails because the request didn't include a required parameter, respond with something like `'Entity requires a <fieldName> but none was provided.'`

### Custom API Endpoints

* Developer must use query params on at least one endpoint, which would allow the user to narrow down the nature of their request or filter their results. So for example, you may have an endpoint like:

  `GET api/v1/merchants?areacode=80202`

  Which would limit the results to merchants in the 80202 area code.

  A further example of this implementation can be found here: [params](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters)

<!-- * Developer must secure at least 4 endpoints with a JWT. Though this project doesn't have an explicit frontend, at the `/` root of your application, return an `index.html` file with a form that allows a user to request a JWT. The user must submit an email address and an app name. If the email address ends in `@turing.io`, the JWT should include admin privileges. Require a JWT with admin privileges for any 'write' requests (POST/PUT/PATCH/DELETE). -->

### Documentation

In the README, developer should provide documentation on the API endpoints that can be hit. Here is a [great example of in-depth documentation](https://developer.github.com/v3/repos/) Pay attention to the information provided and the format that it's presented in.

Some things you want to considering having in your API documentation:

* Endpoints available (e.g. GET /api/v1/students, POST api/v1/students)
* What parameters can be used in certain requests (e.g. For a POST request, what should be put in the request body?)
* Sample responses from endpoints (What does the response object look like for a request?)

You can put your documentation in the README of your BYOB GitHub repository. Remember, improperly formatted information can make it very difficult to read even if it's all accurate, so be sure to utilize markdown syntax styling/formatting.

### Testing & Linting

* All endpoints need to be tested for happy AND sad paths. You should assert that proper status codes are being returned as well as appropriate response data and error messages.
* You are expected to use a linter on this project and have 0 linting errors. You are expected to set up and configure a linter. Consider using a git hook that prevents you from committing any unlinted code.

### Deployment

* Your application should be automatically deployed to Heroku via TravisCI
* TravisCI should be running your tests and linter

-----------------------------------------------

## Instructor Evaluation Points

The following set of points are distributed at the discretion of the instructor.

### Documentation

* **10 points** -  The README includes documentation for all available endpoints and how to use them. Instructor can easily follow the documentation for using the API.
* **5 points** -  The README documentation is out-of-date or inaccurate in some places. Instructor can not successfully use every endpoint based on following the documentation.
* **0 points** - The README documentation is too sparse or inaccurate to be helpful.


### Back-End Feature Completion

* **60 points** - Developer has implemented all 10 endpoints, and at least one is a custom endpoint that filters data based on query params. The database is seeded with at least two tables and one relationship.
* **40 points** - Developer has implemented all 10 endpoints but did not have a custom endpoint based on query params. The database is seeded with at least two tables but without an appropriate relationship.
* **20 points** - Developer is missing endpoints and has not customized any of the ones that have been implemented. The database is not seeded with two tables and one relationship.

### Testing & Linting & Error Handling

* **40 points** - Project has a running test suite that covers all happy and sad paths for the appropriate endpoints. Error handling is informative and helpful for the end-user. The project has a linting configuration that passes with no errors.
* **20 points** - Project has a running test suite that covers most happy and sad paths for each endpoint. Error handling has been implemented but does not cover all possible scenarios or is unhelpful for the end-user. Linter has some errors that need fixing.
* **10 points** - Project has significant lack of testing for happy and sad paths of endpoints. Error handling is non-existent or missing status codes and helpful messages. Linter is failing on multiple lines.

### Front-End Feature Completion

* **40 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **20 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **15 points** - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* **10 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.

### Workflow

* **20 points** - Developers make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developers effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. Developers utilize PR process to full extent, conducting code reviews and never merging in faulty code. There are no instances where the developers have committed source code that should be `.gitignore`d. There are no instances of "dead" or commented-out code and debugger statements like `console.log`.
* **15 points** - Developers make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developers use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developers have committed source code that should be `.gitignore`d. There may be some instances of "dead" or commented-out code and debugger statements like `console.log` that need to be cleaned up.
* **10 points** - Developers make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developers rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be `.gitignore`d and instances of dead code and/or debugger statements.
* **5 points**  - Developers make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be `.gitignore`d and many instances of dead code and/or debugger statements.

-----------------------------------------------

#### Projects are due on Friday of at 1PM. Create one submission file for your project based on [this template](https://github.com/turingschool/front-end-submissions-public/blob/master/1804/mod-4/byob/submission-template.md) by copying it to a new file called YOURNAME-PARTNERSNAME.md in the same directory. Submit it as a PR to the front-end-submissions repo.

To get a **3** on this project, you need to score **125** points or higher  
To get a **4** on this project, you need to score **145** points or higher  

# Final Score: x / 170

-----------------------------------------------

#### Common Gotchas with Seeding Data:

* You'll probably have to do some sort of data manipulation/massaging before you try to seed. Think about how YOU want YOUR data to look before just dumping the data you found into your database. Do any manipulations you need to on your dataset before trying to seed. (e.g. you might want to rename, delete, or add columns)
* The data records you pull might already have unique IDs on them. Feel free to use these as your primary keys instead of wiping them out and creating new ones.
* You're going to be seeding a lot of data all at once. Recall the "Seeding Large Datasets" example from the [Knex Lesson Plan](http://frontend.turing.io/lessons/module-4/knex-postgres.html) and brush up on how to work with `Promise.all()`
* Remember you often have to RETURN the Promises you're using in your seed file. If you aren't getting any errors, but your data isn't being seeded, you're likely forgetting a `return` statement.
* If you're trying to transform data from a CSV file, avoid using [this library](https://www.npmjs.com/package/knex-seed-file).
