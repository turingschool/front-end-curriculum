---
title: Palette Picker
module: 4
---

# Abstract

Palette Picker is a two-week-long paired project intended to solidify your RESTful API design skills and get you familiar with the patterns associated with building a single app across multiple repositories.

There is a website out there called [Coolors](https://coolors.co/495867-577399-bdd5ea-f7f7ff-fe5f55){:target="_blank"} - and others like it are out there. They help you generate color palettes for websites or other design projects.

Your job is to recreate some of this site's functionality with your own backend and database. A user should be able to come to your site, generate a color palette, save it for their own future projects, edit/update their saved color palettes, and delete their palettes.

Palette Picker will be built in two separate repositories:
- A back-end repository for your database and server
- A front-end repository for your user-facing application that will consume the BE API

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

Here is a list of common status codes that should exist within your endpoints:

* 200/201: Success
* 404: Not Found

If a POST request fails to save an entity due to bad information being sent from the client, you should respond with

* 422: Unprocessable Entity

If you have a critical server error, you should respond with

* 500: Internal Server Error

You are welcome to use other appropriate status codes.

In addition to responding with the appropriate status code, you are expected to send back clear, informative error messages when something goes wrong. Do not simply `console.log` 'WHATEVER'. If a `POST` request fails because the request didn't include a required parameter, respond with something like `'Entity requires a <fieldName> but none was provided.'`

### Testing

All endpoints need to be tested for happy AND sad paths. You should assert that proper status codes are being returned as well as appropriate response data and error messages. Please reference the server-side testing lesson to see the robustness and thoroughness of testing we are expecting.

### Workflow

As part of your project planning and workflow for this project, it is expected that you will make use of a sprint board (like [GitHub Projects](https://help.github.com/en/articles/about-project-boards) or [ClubHouse](https://clubhouse.io/)) as well as a [PR template](https://quickleft.com/blog/pull-request-templates-make-code-review-easier/).

We also expect that you will follow a [rebase workflow](https://medium.com/hackernoon/git-merge-vs-rebase-whats-the-diff-76413c117333) for this project.  

### Documentation

In the README, developer should provide documentation on the API endpoints that can be hit. Here is a [great example of in-depth documentation](https://developer.github.com/v3/repos/) Pay attention to the information provided and the format that it's presented in.

Some things you want to considering having in your API documentation:

* Endpoints available (e.g. GET /api/v1/students, POST api/v1/students)
* What parameters can be used in certain requests (e.g. For a POST request, what should be put in the request body?)
* Sample responses from endpoints (What does the response object look like for a request?)

You can put your documentation in the README of your Palette Picker GitHub repository. Remember, improperly formatted information can make it very difficult to read even if it's all accurate, so be sure to utilize markdown syntax styling/formatting ([here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a markdown style cheatsheet).

### Deployment

Your back-end will be deployed to Heroku, and we will set up continuous integration using the TravisCI tool. We will have a lesson where we deploy our BE applications using TravisCI and Heroku together at the end of Week 2.


## Front End functionality

Your application should have the following functionality. A user should be able to:

* Generate a palette with **5 distinct colors**
  * You should be able to hold or "freeze" one color and generate a new palette while the frozen color remains the same (similar to the _Lock_ functionality on [Coolors](https://coolors.co/393d3f-fdfdff-c6c5b9-62929e-546a7b))
  * The colors should be randomly generated (do not use predefined lists of color palettes)
* Create a project folder as a place to save palettes
  * You should be able to create multiple folders
  * Folder names must be unique (you should not be able to create two folders with the same name)
  * A folder can hold many saved palettes (a one-to-many relationship)
  * The saved folder should persist in your backend database
* Save a generated palette to a project folder
  * The saved palette should appear in the folder with the name of the palette (specified by the user) and the saved palette colors
  * When you click on the name or colors in the saved palette, the palette generator should show the colors of that saved palette
  * The saved palette should persist in your backend database
* Delete a palette from a project folder, which removes it from the page and database
* Delete a project and all its associated palettes, which removes it from the page and database
* Never need to refresh the page to see new information

### Wireframe

This is a very generic guide on what should be included in your site. You can completely change the look of your own website as long as you stay true to the project specifications and features. All functionality as detailed below should still be met; remember that the primary goal of UX/UI design is _usability_.

Please remember that wireframes are not to be copied exactly as-is. Take liberties and build a UI that *makes sense*, and is intuitive for your users.

✨ We highly encourage you to have a non-Turing/non-developer friend try to use your application. Pay attention to when they get confused or struggle trying to use your app, and fix your UX accordingly. ✨

![Palette Picker Wireframe](/assets/images/palette-picker-wireframe.png)

### Design Research

As part of your submission template, we'd like you to do some design research. Pick a single UI element off of [Dribbble](https://dribbble.com) (or any other site you find to be really pretty) that you like and use it to inspire the rest of your design. For example: 

I really like the subtle drop-shadows on these [notifications](https://dribbble.com/shots/1467222-Notifications), and the way the notification icons vary slightly in color by being slightly lighter than the rest of the background. I will incorporate these types of drop-shadows on elements in my project and play with this particular use of color.

In your project submission, you will link to _your wireframes and to your design inspiration(s)_.

### Testing

Because testing the front-end is familiar by now, we will require 75% or higher testing coverage of your front-end codebase.

### Deployment

Your front-end codebase should be fully deployed to Heroku. You do not need to implement TravisCI for your front-end repository, but you may if you wish.

## Project Extensions

Once all other project expectations are completed, you may 

* Secure some endpoints with a JWT. Though this project doesn't have an explicit frontend, at the `/` root of your application, return an `index.html` file with a form that allows a user to request a JWT. The user must submit an email address and an app name. If the email address ends in `@turing.io`, the JWT should include admin privileges. Require a JWT with admin privileges for any 'write' requests (POST/PUT/PATCH/DELETE).
* Palette generation that isn't random and actually makes sense: If you look at the [HTML Color Codes site](http://htmlcolorcodes.com/color-picker/), they give some explanation about what colors make sense with other colors in a palette. Design your color generator so that the colors aren't picked completely at random, but they make a more cohesive, harmonious color palette.
* Color modification: In addition to being able to lock a particular color (part of the base functionality), a user should be able to modify one of the colors in the palette (by entering in their own hex code, color name, or some kind of hue slider).

<!-- ### WEEKEND MINI PROJECT: "Open Source" -->
<!-- AS A MAINTAINER: -->
<!-- * Your back-end application should be fully documented with SETUP instructions and CONTRIBUTING guidelines. -->
<!-- * Your scrum board should be publicly viewable and several issues should be available for contributors to choose from. -->
<!-- * Available issues should be thoroughly documented, giving good context and laying out clear expectations in order for contributors to have a clear idea of what to work on. -->
<!-- * When contributors create a PR, conduct a thorough code review, leave comments with requests for tweaks, and eventually close or merge the PR. -->
<!-- AS A CONTRIBUTOR: -->
<!-- * You will find an open issue to work on and communicate your intent to work on that issue to the maintainers. -->
<!-- * Set up the repo according to the SETUP instructions documented in the repo you will be working on. -->
<!-- * Be sure your contributions conform to the standards provided by the maintainer's CONTRIBUTING documentation. -->
<!-- * Respond to requests for updates or changes on your PR. -->

## Tech Stack

**Back-End:** build using Express, knex, and PostgreSQL. Each API endpoint should respond with JSON-formatted data.

**Front-End:** build using React and React Hooks.

Both the back-end and front-end codebases should be thoroughly tested.

## Suggested Timeline

In order to ensure you're on pace for finishing the project successfully and on-time, you should try to be meeting each of these checkpoints:

**EOD Monday:** First draft of schema design for database is complete, you have begun determining what endpoints you need.

**EOD Wednesday:** The migrations and example seeds have been implemented, the server is returning expected data. You have pseudo-coded every happy and sad path test you will need for each of your endpoints.

**EOD Friday:** Your back-end is deployed with TravisCI and Heroku, your tests are being completed.

**Weekend:** You complete server-side testing. Your wireframings for your front-end application are completed and you have begun coding it out. Review the project spec to see complete FE functionality requirements and expectations.

**EOD Monday:** You have begun testing your FE application.

**EOD Tuesday:** Your FE application is mostly functional and you have completed most testing.

**EOD Wednesday:** Your FE application is deployed to Heroku, fully tested, and ready for evals on Thursday!

This is a guide only. If you fall behind, view it as an indicator that your team should reach out for help from: other groups, your mentors, your instructors. One skill you will develop is a good estimation of how much work you accomplish in a given period of time.

## Evals

On Thursday, your team will meet with one of your instructors. The 30 minute evals will follow this format:

* 5 minute demonstration of deployed FE application
* Discussion of BE codebase
  - Each contributor will identify a piece of the codebase that was challenging, and describe how the challenge was overcome
* Discussion of FE codebase
  - Instructor will ask each contributor to describe the functionality of pieces of code
* Examination of the BE test suite
  - Run tests
  - Examine a few happy and sad path tests
* Reflection
  - Discuss the new concepts from this project (server-side testing, continuous integration with TravisCI, CORs)
  - Each contributor will speak about what they learned and what concepts are still unclear
  
  The instructors may also conduct code reviews over the weekend.

## Rubric

### Project Specification Adherence

* **4** - No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use. Data persists on refresh using a knex/postgreSQL database.
* **3** - There is one feature missing from the base expectations that makes the application feel incomplete or hard to use.
* **2** - There are two features missing from the base expectations that make the application feel incomplete or hard to use.

### User Interface

* **4** - User interface is intuitive and the instructor can easily use it on their own without guidance. Styling is consistent and call-to-action elements are obvious. The application provides the user with relevant feedback based on interactions.  
* **3** - User interface is mostly intuitive, though the instructor might need some guidance on interactions. Styling is mostly consistent, but could use some clean up. Application may be missing some relevant feedback that would help guide the user. 
* **2** - User interface demonstrates some effort, but is not intuitive and the instructor needs help figuring out how to use the application. Styling has several inconsistencies and it's sometimes unclear what elements a user can interact with. Application lacks useful feedback for the user.  
* **1** - User interface does not demonstrate effort and is unintuitive. The instructor cannot use the application on their own. Styling is inconsistent and user interactions are unclear. Application lacks useful feedback for the user.


### Testing

* **4** - FE shows 75%+ test coverage. Every server endpoint is tested thoroughly: status code, response content, happy and sad paths.
* **3** - FE shows 75%+ test coverage. Every server endpoint is tested: status code, response content, happy paths. Some sad paths are not tested. Response content tests are not robust enough.
* **2** - FE shows less than 75% test coverage. A few server endpoint tests are missing. Some happy paths are tested. Response content tests are unhelpfully vague.
* **1** - FE shows less than 75% test coverage. Several server endpoint tests are missing.

### Workflow

* **4** - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.
* **3** - Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.
* **2** - Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.
* **1**  - Developer(s) make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

If a project is not in a passing state, instructors _may_ offer the team the weekend to complete functionality with specific tasks to be completed. These extensions are not guaranteed and are only offered in some cases.
