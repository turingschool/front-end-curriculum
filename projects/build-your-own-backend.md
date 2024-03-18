---
title: Build Your Own Backend
module: 4
---

## Abstract

BYOB is a one week long solo project. It is intended as a way to get comfortable with building databases using Express, Knex, and PostgreSQL. You will be building a RESTful API, complete with professional-grade documentation. This knowledge will be directly applicable to the next paired project, Palette Picker.

The skills you will be building in BYOB are:

- building your own RESTful API for a large dataset of your choosing
- one-to-many relational database schema design
- deploying your API to Heroku

## Base Expectations

### Find a Data Source

Data source and initial one-to-many schema design MUST BE LOCKED IN by Tuesday morning. We don't want you wasting the whole week trying to find data.

Possible sources of data:

* Work with and scrape new data from an API or website. Some APIs and websites are easier to work with than others - you may not be able to pull off the thing you want to do - be prepared for that.
  * https://developer.nrel.gov/
  * https://sunlightfoundation.com/api/
  * https://developer.foursquare.com/
  * data.world
* Parse CSVs or JSON files (Node has built-in modules for parsing CSVs)
* Create the data yourself. You must create a ‘seed file’ with a minimum of ~30 rows of data for each main table.


### Relationships

At minimum, you must have at least 2 different tables with at least 1 relationship (e.g. one-to-one, one-to-many, many-to-many).

Each table must have no fewer than three columns.

### Required endpoints

* 4 GET endpoints
  * 2 GET endpoints for all of one resource (i.e. '/api/v1/merchants')
  * 2 GET endpoints for a specific resource (i.e. '/api/v1/merchants/:id')
* 2 POST endpoints
* 1 DELETE endpoint

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

### Documentation

In the README, developer should provide documentation on the API endpoints that can be hit. Here is a [great example of in-depth documentation](https://developer.github.com/v3/repos/) Pay attention to the information provided and the format that it's presented in.

Some things you want to considering having in your API documentation:

* Endpoints available (e.g. GET /api/v1/students, POST api/v1/students)
* What parameters can be used in certain requests (e.g. For a POST request, what should be put in the request body?)
* Sample responses from endpoints (What does the response object look like for a request?)

You can put your documentation in the README of your BYOB GitHub repository. Remember, improperly formatted information can make it very difficult to read even if it's all accurate, so be sure to utilize markdown syntax styling/formatting ([here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a markdown style cheatsheet).

### Workflow

As part of your project planning and workflow for this project, it is expected that you will make use of a sprint board  with [GitHub Projects](https://help.github.com/en/articles/about-project-boards) as well as a [PR template](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository).

Here is an example format for a questions you can ask in a  PR template:

>What does this PR do?
>How should this be manually tested?
>Any background context that you want to provide?
>What are the relevant tickets?
>Screenshots (if appropriate)
>Questions:

Of course, you are free to use other templates that you find as well!

We also expect that you will follow a [rebase workflow](https://medium.com/hackernoon/git-merge-vs-rebase-whats-the-diff-76413c117333) for this project.


<!--

__Sprint Board__
    * Icebox (Stories to do eventually)
    * Backlog (Stories to do next) These are our priorities for the next day, new few days
    * In Progress (Stories currently being worked on) - owned by someone
    * In Review (Stories with finished code the team* is reviewing)
    * Completed (Things we’ve finished/merged)


__WHAT IS A STORY?__
    * One single unit of work
    * Possibly following this format:

      ```js
      As a [ user type ]
      I want [ feature requested]
      So that [ benefit gained]
      ```

 -->
## Articulation Requirement

In addition to the functional requirement, on a separate dedicated git branch, go through each line of the server file and put a comment on each line that explains what that line of code is doing. Be as explicit as you can.

### Deployment

* Your application should be deployed to Heroku

### Extensions:

**Create a FE documentation in your BE repo**  

If all other expectations and requirements are met, you may:

* Create a front-end (in the same repository as BYOB) that will document the API.
* Provide a page that documents the available endpoints, the data that will be received, and the data the user must send.
* The site should be interactive, allowing a developer to "try out" endpoints. Think of building out something like Postman specifically for your back-end.
* This front-end documentation page should be a single page and can be written in Javascript, jQuery, or React.

**Test your Application**  

If all other expectations and requirements are met, we would strongly encourage you to [look ahead](https://frontend.turing.edu/lessons/module-4/server-side-testing-with-db.html) to see about testing your application.

**Create a custom API endpoint**  
Use query params on at least one endpoint, which would allow the user to narrow down the nature of their request or filter their results. So for example, you may have an endpoint like:

GET api/v1/merchants?areacode=80202

Which would limit the results to merchants in the 80202 area code.

A further example of this implementation can be found here: [params](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters)

-----------------------------------------------

## Check Ins

We will have one check in over the course of the project.

-----------------------------------------------

## Project Due Date

Project should be submitted via this [link](https://forms.gle/M8YEKa5KPKbH4Hgi6) no later than 9 AM the Monday of Week 2. Instructors will go through individual projects and do a review at 1 PM.

#### Common Gotchas with Seeding Data:

* Often, people think they have to do all their seeding in one step, but you can take whatever steps you need. Scraping data from the web? Consuming another API? You can do those all in separate steps! Get your data, _then_ clean it, _then_ write your seed file!
* You'll probably have to do some sort of data manipulation/massaging before you try to seed. Think about how YOU want YOUR data to look before just dumping the data you found into your database. Do any manipulations you need to on your dataset before trying to seed. (e.g. you might want to rename, delete, or add columns)
* You're going to be seeding a lot of data all at once. Recall the "Seeding Large Datasets" example from the [Knex Lesson Plan](http://frontend.turing.edu/lessons/module-4/knex-postgres.html) and brush up on how to work with `Promise.all()`
* Remember you often have to RETURN the Promises you're using in your seed file. If you aren't getting any errors, but your data isn't being seeded, you're likely forgetting a `return` statement.
* If you're trying to transform data from a CSV file, avoid using [this library](https://www.npmjs.com/package/knex-seed-file).

## Rubric

### Endpoints

* **4** - Developer has implemented all 7 endpoints. All endpoints have appropriate status codes and clear, informative messages for error handling.
* **3** - Developer has implemented all 7 endpoints. Some endpoints may not be using appropriate status codes. Error messaging is clear.
* **2** - Developer is missing 1 - 2 endpoints and may be missing status codes.
* **1** - Developer is missing more than 2 endpoints.

### Data Persistence with SQL Database

* **4** - The application persists data in a SQL database with correct relationships clearly defined
* **3** - The application persists data in a SQL database but with some incorrect relationships bet
* **2** - The application persist data in a SQL database in most scenarios. There may be instances/bugs where data does not persist or is not updated appropriately.
* **1** - The application does not persist data in a SQL database

### Documentation and Annotations

* **4** - README provides in-depth documentation for what API endpoints are available, the parameters used (if any), as well as sample responses. Developer has a separate, dedicated git branch with detailed annotations (line-by-line) of what is happening in the server file.
* **3** - README provides documentation for what API endpoints are available, the parameters used (if any), as well as sample responses. Developer has a separate, dedicated git branch with annotations for the server file
* **2** - README provides documentation for what API endpoints are available. Formatting makes the README hard to read. Annotations in the server file are sparse.
* **1** - There is no documentation and/or annotations on the server file

### Workflow

* **4** - Developer makes many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Developer(s) effectively use git branches and pull requests (with templates) to incorporate changes into the application, and are not pushing directly to master. Developer makes use of a sprint board, which is linked in the README.
* **3** - Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may sometimes not make use of a PR template. Developer makes use of a sprint board, which is linked in the README.
* **2** - Developer make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master.
* **1**  - Developer makes very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests are not used.
