---
title: Jet Fuel
module: 4
---

## Abstract

In this project you'll build a URL shortener service.

Your application will allow users to create folders (like bookmark folders) to store long, ugly URLs as shortened URLs through your service.

The main goal of your application is to redirect a request at the shortened URL to their long URL equivalent. Each shortened URL should belong to a unique folder which is capable of storing N number of URLs.

Your secondary goal is to track URL usage and provide popularity statistics.

## Base Expectations

```gherkin
Given that I am an anonymous user of the site
When I visit the site and provide a folder name to the service
Then I expect it to create that folder for storing URLs

Given that I am an anonymous user of the site
When I visit a folder and provide a URL to the service
Then I expect it to return a service shortened URL for that folder

Given that I am an anonymous user of the site
When I follow a service shortened URL
Then I expect to be redirected to the original URL

Given that I am an anonymous user of the site
When I visit a folder
Then I expect to see all URLs relating to that folder

Given that I am an anonymous user of the site
When I visit a folder
Then I expect the ability to sort the folder's URLs by popularity (number of visits)
And I expect the ability to sort the folder's URLs by how recently they were added
```

## Things to Think About

### Application

* Does the application meet the expectations defined above?

### Code Clarity

* Is the application consistent with other applications you have written or seen?
* Are the files of the application laid out in a logical manner?
* Does the code within each file directly relate to the name of the file and location within the application?
* Is the code clearly laid out?
* Does each function accomplish their intended task or do they do more than intended?

### Server-side Code

* Does each route handle a single operation?
* Does each route respond with the correct resource and in the correct JSON format?
* Are your routes "RESTful"?
* Are your urls stored to their correct folder in the database?

### Client-side Code

* Do event-listeners fetch the correct data from the correct endpoint?
* Do fetch responses append information to the page correctly?

### Tests

* Are all aspects of the application well-tested?
* Do the tests run? Are there failures? Are failed tests skipped with comments?
* Is it clear what code is under test?
* Is it clear what scenario is being tested?
* Is it clear the expected results of the scenario?
* Is there a lot of repetition of setup/teardown in the tests?

## Evaluation

The following features are required for specification adherence (50 points) in the rubric below.

- The home page has a form for submitting a new folder.
- The home page has a form for submitting a new URL for a selected folder.
- When a URL is submitted, the user can see a shorted version of the URL in the user interface.
- When the user visits the shortened URL, they are redirected to the original URL.
- There is a list of all of the folders of the site.
- There is a list for each folder of all of it's shortened URLs.
- Users can see the date the URL was added as well as how many times the short URL has been visited.
- Users can sort by date added and by popularity in either ascending or descending order.

In addition, the following features are worth additional points.

- The list of URLs has a search field for filtering the list of URLs. (5 points)
- The application will allow the user to provide their own custom short URL. (10 points)

## Instructor Evaluation Points

The following set of points are distributed at the discretion of the instructor.

### Specification Adherence

* **50 points**: No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.

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

* **20 points** - Project has a running test suite that exercises the application at multiple levels including server and client tests.
* **15 points** - Project has a running test suite that tests and multiple levels but fails to cover some features. All controller actions are covered by tests. The application makes some use of integration testing.
* **7 points** - Project has sporadic use of tests and multiple levels. Not all controller actions are tested. There are little or no attempts at integration testing.
* **0 points** - There is little or no evidence of testing in this application.

### JavaScript Style

* **20 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **15 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **12 points** - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* **8 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **3 point** - Your client-side application does not function or the application does not make use of AJAX using jQuery for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points** - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* **20 points** - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* **15 points** - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* **7 points** - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* **0 points** - The application was not checked into version control.

## Projects are due on Friday 3/17, 12:00 p.m. We will provide a submission form for all teams to submit their repos.

## Project is worth 150 points with 15 extra points possible

## To get a 3 on this project, you need to score 110 points or higher

## To get a 4 on this project, you need to score 135 points or higher

# Final Score: x / 150
