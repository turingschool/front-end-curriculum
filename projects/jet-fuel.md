---
title: Jet Fuel
module: 4
---

## Abstract

In this project you'll build a URL shortener service.

Your application will allow users to provide long, ugly URLs and create shortened URLs through your service.

The main goal of your application is to redirect a request at the shortened URL to their long URL equivalent.

Your secondary goal is to track URL usage and provide popularity statistics.

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
