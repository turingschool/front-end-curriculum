---
title: Jet Fuel
module: 4
---

## Abstract

Have you ever used [bitly](https://bitly.com/)? It's a service made to take a long URL and shorten it. When you visit the new short URL, it redirects you to the original, long URL.

For instance, I put the long URL, `https://fortunedotcom.files.wordpress.com/2015/02/78439682.jpg?w=720&quality=85`, for [this photo](https://fortunedotcom.files.wordpress.com/2015/02/78439682.jpg?w=720&quality=85) into bitly, 
and it returned a [shortened URL](http://bit.ly/2tuK5Ai), `http://bit.ly/2tuK5Ai`.

You're going to create an application that does the same thing! 

The main goal of your application is to redirect a request at the shortened URL to their long URL equivalent. Each shortened URL should belong to a _unique_ folder that is capable of storing N number of URLs.

## Wireframe

This is a general guide on what should be included in your site. You can completely change the look of your own website as long as you stay true to the project specifications and features.

![Jet Fuel Wireframe](/assets/images/jet-fuel-wireframe.png)

## Base Expectations

A user can:

* Create a folder to store shortened URLs in
* Give the application a URL to be shortened and the folder that the URL should belong to 
* Click on a shortened URL and be redirected to the original, long URL

    The anchor tag in your app should look something like this where the `href` attribute is the shortened URL:

```html
<a href="/theShortenedUrl">www.myjetfuelapp.com/theShortenedUrl</a>

<!-- Note that the URL is a relative URL because it refers to your own backend endpoints -->
```

* Visit a folder an see all of the URLs associated with that folder
* Visit a folder and sort the folder's URLs by how recently they were added (both descending and ascending order)
* Enter a URL to be shortened _only if_ it is a valid URL (impose some kind of URL validation)

The basic layout of the application should include:

* A form for submitting a new folder
* A form for submitting a new URL for a selected folder
* When a URL is submitted, the user can see the shorted version of the URL in the user interface
* A list of all of the folders of the site
* When a user clicks on a folder, a CSS animation should be used to expand and display the list of URLs belonging to that folder
* For each URL, the user can see the date that the URL was added

### Special Task (Required)

On a separate dedicated git branch, open your server file. For each line of the server file, put a comment on the line that explains what the line below is doing. Be as explicit as necessary.

### Project File Structure

Here is how we would like you to structure your project files.

```
jet-fuel
|__ .gitignore
|__ server.js
|__ public
|  |__ index.html
|  |__ css
|  |  |__ styles.css
|  |  |__ other-stylesheets.css
|  |__ js
|  |  |__ scripts.js
|  |  |__ other-scripts.js
```

## Guidelines

### Server Side

* The application must be constructed using Node/Express with a knex and PostgreSQL database
* There should be one client-side route (`'/'`), and other endpoints should be API endpoints (`'api/v1/...'`)
* You should only need to use GET and POST requests. You should not need to use PATCH, PUT, or DELETE requests for the basic expectations of this project.
* Each API endpoint should respond with JSON-formatted data

### Client Side

* There is no comp given to you to follow - it is up to you how you want to design the UI/UX of your site within the base expectations of the app
* This is a single-page app - everything about the app should be viewable from the homepage (eg. `localhost:3000/`)
* Client-side code must be written in vanilla JavaScript or jQuery (just be consistent using one or the other) - _not React or any other framework_.
* Client-side requests to the server should be made using the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* Remember that you're all front-end developers - take pride in the UI/UX and design part of this project
* The user should never have to refresh the page

### Testing

* Server-side testing is required for all endpoints using `mocha`, `chai`, and `chai-http`, and the tests should include happy and sad paths
* You can get extra points for client-side testing, but for this project the focus should be server-side testing

### Production

On the last day of the project, you will have a class about pushing your application to production. You application must be on production 
before it can be evaluated.

## Extensions

- The list of URLs has a search field for filtering the list of URLs (5 points)
- The application will allow the user to provide their own custom short URL (10 points)
- All of the client-side interactions are tested (10 points)

## Instructor Evaluation Points

The following set of points are distributed at the discretion of the instructor.

### Specification Adherence

* **50 points**: No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use. Data persists on refresh using a knex/postgreSQL database.
* **40 points**: There is one feature missing from the base expectations that makes the application feel incomplete or hard to use.
* **20 points**: There are two features missing from the base expectations that make the application feel incomplete or hard to use.

### User Interface

* **20 points** - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* **15 points** - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* **7 points** - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* **0 points** - The application is confusing or difficult to use.

### Testing

* **20 points** - Project has a running test suite that tests every server-side endpoint with many happy and sad path cases.
* **15 points** - Project has a running test suite that tests every server-side endpoint, but only has a couple sad path cases.
* **7 points** - Project has sporadic testing of some server-side endpoints. There are happy path tests, but there are is one or zero sad path cases.
* **0 points** - There is little or no evidence of testing in this application. Most or all of the tests in the test suite are failing.

### Commented Server File

* **10 points** - Each line of the server file (on a separate branch) is commented and explains the code using precise, correct terminology and specificity
* **5 points** - Most lines of the server file (on a separate branch) are commented, but the explanation of code does not display understanding of the underlying code
* **0 points** - Lines are sparsely commented in the server file (on a separate branch) and understanding of the code is clearly lacking

### JavaScript Style

* **30 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **20 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **10 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **5 points** - Your client-side application does not function or the application does not make use of `fetch` for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points** - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* **20 points** - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.
* **15 points** - Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.
* **10 points** - Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.
* **5 points**  - Developer(s) make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

## Create one submission file for your project based on [this template](https://github.com/turingschool/front-end-submissions-public/blob/master/1703/mod-4/jet-fuel/submission-template.md) by copying it to a new file called YOURNAME.md in the same directory. Submit it as a PR to the front-end-submissions repo.

### Project is worth 150 points with 25 extra points possible

### To get a 3 on this project, you need to score 110 points or higher

### To get a 4 on this project, you need to score 130 points or higher