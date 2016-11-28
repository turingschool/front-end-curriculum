---
title: Jet Fuel
module: 4
---

## Abstract

In this project you'll build a URL shortener service.

Your application will allow users to provide long, ugly URLs and create shortened URLs through your service.

The main goal of your application is to redirect a request at the shortened URL to their long URL equivalent.

Your secondary goal is to track URL usage and provide popularity statistics.

## Things to Think About

### Application

* Does the application meet the expectations defined above?

### Code Clarity

* Is the application consistent with other applications you have written or seen?
* Are the files of the application laid out in a logical manner?
* Does the code within each file directly relate to the name of the file and location within the application?
* Is the code clearly laid out?
* Does each method accomplish their intended task or do they do more than intended?

### Server-side Code

* Does each route handle a single operation?
* Are there a small number of instance variables defined?
* Could multiple of the instance variables be represented with a singular concept/object?
* Are your routes "RESTful"?

### Tests

* Are all aspects of the application well-tested?
* Do the tests run? Are there failures?
* Are the tests within the test file directly related to the file they are testing?
* Is it clear what code is under test?
* Is it clear what scenario is being tested?
* Is it clear the expected results of the scenario?
* Is there a lot of repetition of setup/teardown in the tests?

## Base Expectations

```gherkin
Given that I am an anonymous user of the system
When I visit the site
And give a URL to the service
Then I expect it to return a service shortened URL

Given that I am an anonymous user of the system
When I follow a service shortened URL
Then I expect to be redirected to the original URL

Given that I am an anonymous user of the system
When I visit the site
Then I expect to see URLs sorted by popularity
And I expect to see URLs sorted by how recently they were added
```

### Statistics

Provide additional statistics on the main page of your application, a user's page of shortened URLS, and individual URL pages.

```gherkin
Given that I am an anonymous user of the system
When I visit the site
And click to sort by popularity
Then I expect to see a list of generated links sorted by popularity
```

### Filtering

```gherkin
Given that I am an anonymous user of the system
When I visit the site
And type into the search field
Then I expect to only see a list of generated links that contain my search query
```

### Titles

Having just a big table of URLs (shortened and unshortened) is going to get unwieldy fast.

Create a background task that fetches the title of the webpage and saves it to the model.

## Evaluation

The following features are required for specification adherence (35 points) in the rubric below.

- The home page has a form for submitting a new URL.
- When a URL is submitted, the user can see a shorted version of the URL in the user interface.
- When the user visits the shortened URL, they are redirected to the original URL.
- There is a list of all of the URLs shortened by the application on the page.
- Users can see the data the URL was added as well as how many times the short URL has been visited.
- Users can sort by popularity and by date added in either ascending or descending order.

In addition, the following features are worth additional points.

- The list of URLs has a search field for filtering the list of URLs. (5 points)
- The application will asynchronously fetch the title of the web page. (10 points)
- The application will display an error to the if the page does not exist and it will not store it in its database. (10 points)
- The application will allow the user to provide a custom short URL. (10 points)
- The application will persist the data permanently in a database. (20 points)

## Instructor Evaluation Points

The following set of points are distributed at the discretion of the instructor.

### Specification Adherence

* **35 points**: No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.

### User Interface

* **5 points** - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* **3 points** - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* **2 points** - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* **0 points** - The application is confusing or difficult to use.

### Testing

* **10 points** - Project has a running test suite that exercises the application at multiple levels including server and client tests.
* **8 points** - Project has a running test suite that tests and multiple levels but fails to cover some features. All controller actions are covered by tests. The application makes some use of integration testing.
* **5 points** - Project has sporadic use of tests and multiple levels. Not all controller actions are tested. There are little or no attempts at integration testing.
* **0 points** - There is little or no evidence of testing in this application.

### JavaScript Style

* **10 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **8 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **5 points** - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* **3 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **1 point** - Your client-side application does not function or the application does not make use of AJAX using jQuery for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points** - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* **10 points** - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* **5 points** - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* **3 points** - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* **1 point** - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* **0 points** - The application was not checked into version control.
