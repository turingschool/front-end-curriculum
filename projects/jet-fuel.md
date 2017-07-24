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

## Base Expectations

A user can:

* Create a folder to store shortened URLs in - the folder name *must be unique*
* Give the application a URL to be shortened and the folder that the URL should belong to 
* Click on a shortened URL and be redirected to the original, long URL

    The anchor tag in your app should look something like this where the `href` attribute is the shortened URL:

```html
<a href="www.myjetfuelapp.com/someShortenedUrl">www.myjetfuelapp.com/someShortenedUrl</a>

<!-- For development, your app domain will just be localhost:3000/, but for production it will be something like https:/my-jet-fuel-app.heroku.com/ -->
<!-- Don't worry about production until the last day of the project (Friday) -->
```

* Visit a folder an see all of the URLs associated with that folder
* Visit a folder and sort the folder's URLs by how recently they were added (both descending and ascending order)
* Enter a URL to be shortened _only if_ it is a valid URL (impose some kind of URL validation)

The basic layout of the application should include:

* A form for submitting a new folder
* A form for submitting a new URL for a selected folder
* When a URL is submitted, the user can see the shorted version of the URL in the user interface
* A list of all of the folders of the site
* For each URL, the user can see the date that the URL was added

### Special Task

On a separate dedicated git branch, open your server file. For each line of the server file, put a comment on the line that explains what the line below is doing. Be as explicit as necessary.

## Guidelines

### Server Side

* The application must be constructed using Node/Express with a knex and PostgreSQL database.
* There should be one client-side route (`'/'`), and other endpoints should be API endpoints (`'api/v1/...'`)
* You should only need to use GET and POST requests. You should not need to use POST, PUT, or DELETE requests for the basic expectations of this project.
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

* **50 points**: No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.
* **40 points**: There is one feature missing from the base expectations that makes the application feel incomplete or hard to use.
* **20 points**: There are two features missing from the base expectations that make the application feel incomplete or hard to use.

### User Interface

* **20 points** - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* **15 points** - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* **7 points** - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* **0 points** - The application is confusing or difficult to use.

### Data Persistence with SQL Database

* **20 points** - The application persists data in a SQL database but with correct relationships between folders and URLs.
* **10 points** - The application persists data in a SQL database but with some incorrect relationships between folders and URLs.
* **0 points** - The application does not persist data in a SQL database.

### Testing

<!-- blah blah blah -->

* **20 points** - Project has a running test suite that tests every server-side endpoint with many happy and sad path cases.
* **15 points** - Project has a running test suite that tests every server-side endpoint, but only has a couple sad path cases.
* **7 points** - Project has sporadic testing of some server-side endpoints. There are happy path tests, but there are is one or zero sad path cases.
* **0 points** - There is little or no evidence of testing in this application. Most or all of the tests in the test suite are failing.

### Commented Server File

* **10 points** - Each line of the server file (on a separate branch) is commented and explains the code using precise, correct terminology and specificity
* **5 points** - Most lines of the server file (on a separate branch) are commented, but the explanation of code does not display understanding of the underlying code
* **0 points** - Lines are sparsely commented in the server file (on a separate branch) and understanding of the code is clearly lacking

### JavaScript Style

* **20 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **15 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **10 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **5 points** - Your client-side application does not function or the application does not make use of `fetch` for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points** - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* **20 points** - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* **15 points** - *Node modules have been committed to the repo*, which you don't want. The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* **5 points** - The developer makes a few, large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* **0 points** - The application was not checked into version control.

## Projects are due on Friday of week 1, by 1:00 p.m. We will provide a submission form for all teams to submit their GitHub repo and production link.

### Project is worth 160 points with 25 extra points possible

### To get a 3 on this project, you need to score 120 points or higher

### To get a 4 on this project, you need to score 140 points or higher