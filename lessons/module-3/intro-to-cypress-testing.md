---
title: Intro to Cypress Testing
length: 3 hours
tags: Cypress, testing
module: 3
---

<section class="call-to-action">
### Prework:
In this lesson, we're going to be working with a new codebase and testing multiple scenarios to explore the power of end-to-end tests and the tools **Cypress** provides.  To get the most out of this lesson, please clone down the following the repos:

**[UI](https://github.com/turingschool-examples/feedback-loop-ui){:target='blank'}**
```bash
git clone https://github.com/turingschool-examples/feedback-loop-ui.git
cd feedback-loop-ui
npm i
npm start
```

**[API](https://github.com/turingschool-examples/feedback-loop-api){:target='blank'}**
```bash
git clone https://github.com/turingschool-examples/feedback-loop-api.git
cd feedback-loop-api
npm i
npm start
```

Once you have application running, experiment with the application and then examine the FE code to see how the application runs.  It's not important to understand every line of code, but take note of the various user flows and how the various API calls work.
</section>

## Learning Goals:
* Understand what end-to-end tests are
* Become familiar with what Cypress is and the tools available to it
* Practice testing a React application with Cypress including:
  * Filling out forms and switching of routes
  * Happy and sad path user flows that require network requests

## What are end-to-end tests?
`End-to-end` tests add another layer of confidence to your testing by running your entire application including the client, API, database, and other services.  This helps boost a developer's confidence with their app ensuring that the **user flow** works correctly.  Although they can be expensive in the initial setup, they test how a user would interact with an application.

This is the final layer that should be added in addition to `unit` and `integration` tests.  While these tests focus more on the code written and help pinpoint potential errors for the developer, `end-to-end` tests are useful for the end user.  Think about the various happy and sad path user flows your last project encompassed.  This could include the *happy paths* of displaying a list of movies or adding a movie to their favorites.  Maybe the route changes if a user clicks on a button.  There are also the *sad paths* to those user flows.  What if the movie has already been favorited?  What if a route doesn't exist?

##  What is Cypress?

Cypress is an automated testing tool used for the functional aspects of web applications.  It's actually built on *Node.js* and allows you to write tests using JavaScript.  It allows you to test a number of aspects of your application including `integration` and `end-to-end` tests.  It's a bit different from how you may have tested in the past because it actually operates directly in the browser. 

<section class="answer">
### Major Features of Cypress

Here are a list of major features pulled from the [documentation](https://docs.cypress.io/guides/overview/why-cypress.html#Features){:target='blank'}

* **Time Travel:** Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
* **Debuggability:** Stop guessing why your tests are failing. Debug directly from familiar tools like Developer Tools. Our readable errors and stack traces make debugging lightning fast.
* **Automatic Waiting:** Never add waits or sleeps to your tests. Cypress automatically waits for commands and assertions before moving on. No more async hell.
* **Spies, Stubs, and Clocks:** Verify and control the behavior of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips.
* **Network Traffic Control:** Easily control, stub, and test edge cases without involving your server. You can stub network traffic however you like.
* **Screenshots and Videos:** View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.
* **Cross browser Testing:** Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a Continuous Integration pipeline.
</section>

<section class="note">
### Is this similar to Selenium?

Although often compared to Selenium, another common automated testing framework that allows you to test your application across multiple browsers, Cypress has some distinct differences that makes it stand out. Below is a list of some key differences:

#### Key Differences
| | **Cypress** | **Selenium** |
| Languages Supported | JavaScript | Many popular languages like Java, Python, Ruby, and JavaScript. |
| Browsers Supported | Chrome, Edge, Firefox(beta) | Chrome, IE, Safari, Edge, Firefox, Opera |
| Frameworks Supported | Supports only Mocha JS | Supports multiple frameworks based on what language is being used (i.e. JUnit for Java, Cucumber for JavaScript, etc.) |
| Setup Complexity | Setup is simple with no additional downloads required | More complex due to the necessity of download browser-specific drivers |

You'll note that Selenium seems to have more support and honestly, it has been around for longer.  However, Cypress is gaining a significant amount of support in recent years and has some distinct advantages including it runs in the same run loop as the app, it's built on a Node server process, and it allows you to read / alter web traffic giving you the ability to modify everything that comes in and out of the browser.  You can read more about the differences and why Cypress is becoming a major game changer in the industry [here](https://docs.cypress.io/guides/overview/key-differences.html#Debuggability){:target='blank'}.
</section>

<section class="call-to-action">
### Enough Talk Already!

Let's experiment ourselves and see how great Cypress is firsthand.  Using the app provided earlier, **Feedback Loop**, let's experiment testing it with Cypress!

* First setup the FE with Cypress following the instructions [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing){:target='blank'}
* Although there are multiple ways of opening up Cypress, setup a `script` in your `package.json` to open up Cypress.
* Open Cypress with the script you added and take note of the new window opened.  Also take a look at some of the new directories and files added to your application.
</section>

<section class="answer">
### If you get stuck!  

* Install `cypress` as a dev dependency.

```bash
  npm i -D cypress
```

* Add the following to your `package.json`

```js
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

* Then run `npm run cypress:open`
</section>

## Writing our first test!

You might be overwhelmed by the number of directories & files added.  For now, let's focus on the newly added `integration` directory living inside of the `Cypress` directory.  You may delete the `examples` directory since these are just examples of the various ways you can test.

Let's add a new file to the `integration` directory that will represent our application called `feedback_loop_spec.js`.

Inside we'll write a dummy test to make sure things are hooked up correctly.

```js
describe('Feedback Loop', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
});
```

Move over to the [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview){:target='blank'} and click on the `feedback_loo-spec.js` and prepare to be amazed!  Did it pass?  Look at the [Command Log](https://docs.cypress.io/guides/core-concepts/test-runner.html#Command-Log){:target='blank'} and notice the assertion being made.  Then try changing `true` to `false` and see if it fails.

<section class="note">
### Note the Similarities

Both the `describe` and `it` blocks come from **Mocha** while the `expect` syntax comes from **Chai**.  We're just building off from what you've learned previously!
</section>

<section class="call-to-action">
### Simple enough.  Now what?

This is great and all but let's think about what we actually need to test.  Remember that Cypress is especially useful for testing `user flows` on our applications.  List out a few user flows for the beginning of our application.
</section>

<section class="answer">
### Beginning User Flows  

* As a user, I should be able to visit `http://localhost:3000` and see a title & form displayed.
* As a user, I can select different inputs and fill them out.
* As a user, I will receive an error message when I click the Submit button without filling out both inputs
* As a user, I can fill out the `email` and `password` inputs and click the Submit button and be directed to a different URL.  **Happy Path**
* As a user, I will receive an error message that my email and password don't match if I submit incorrect `email` and `password` inputs.  **Sad Path**
</section>

<section class="call-to-action">
### Testing Our First User Flow

**User Story:** As a user, I should be able to visit `http://localhost:3000` and see a title & form displayed.

* Write a test that asserts that a user can visit `http://localhost:3000` using the [visit](https://docs.cypress.io/api/commands/visit.html#Syntax) command.
* In the same `it` block, check to make sure that our site can [get](https://docs.cypress.io/api/commands/get.html#Syntax){:target='blank'} a form and that it [contains](https://docs.cypress.io/api/commands/contains.html){:target='blank'} the correct text on the page!
* Take note of any errors that you get in the `Test Body` of the **Command Log**.

<section class="note">
### Note

You might notice that your test will fail trying to load your site.  This is because Cypress is actually trying to visit your page, but your server is not running.  Make sure your React server is running in a separate tab on your terminal!
</section>
</section>


<section class="answer">
### Possible Solution  

```js
describe('Feedback Loop', () => {
  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000')
      .contains('Feedback Loop').get('form').contains('Please Sign In');
  });
});
```

Note that we can chain multiple methods to make multiple assertions!
</section>

<section class="call-to-action">
### Let's Test Another User Flow

Before starting our next test, let's add in the following block:

```js
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
```

This helps to ensure that we start anew before each test.  A [best practice](https://docs.cypress.io/guides/references/best-practices.html#Having-tests-rely-on-the-state-of-previous-tests){:target='blank'} is that tests should always be able to run independently from one another and *still pass*.

**User Story:** As a user, I can select different inputs and fill them out.

* Experiment with [type](https://docs.cypress.io/api/commands/type.html){:target='blank'} and [should](https://docs.cypress.io/api/commands/should.html#Syntax){:target='blank'} as you write a test that selects the `Email` and `Password` inputs and fills them with the corresponding values, `leta@turing.io` and `keane20`.  Assert that they have the correct values.

**User Story:** As a user, I will receive an error message when I click the Submit button without filling out both inputs. 

* Write another test that asserts an error message is displayed when the Submit button is [clicked](https://docs.cypress.io/api/commands/click.html){:target='blank'} without filling both inputs.
</section>

<section class="note">
### Did You Know?

In the test runner, you can actually hit `command + option + i` to open up your DevTools!  Instead of looking at your code, use your DevTools to find the necessary elements you need to query.
</section>

<section class="answer">
### Solutions  

```js
  it('should be able to select the email and password inputs and fill them with the corresponding values', () => {
    cy.get('input[type="email"]')
      .type('leta@turing.io')
      .should('have.value', 'leta@turing.io')
      .get('input[type="password"]')
      .type('keane20')
      .should('have.value', 'keane20')
  })

  it('should display an error message when a user clicks the Submit button without filling both inputs', () => {
    cy.get('button').click()
    cy.contains('Please fill out both inputs')
  });
```
</section>

<section class="call-to-action">
### Writing tests involving network requests

**User Story:** As a user, I can fill out the `email` and `password` inputs and click the Submit button and be directed to a different URL.

* This builds off of what we have done previously, however we now want to test that the we log in successfully and visit the new url `http://localhost:3000/dashboard`.  It's okay if the page doesn't display all of the data on the next page, just assert that the url has updated.

<section class="note">
### Note

Upon filling out the form and submitting, you will likely run into a new error, `Failed to fetch`.  This is because it is trying to access our API.  In order to write a *true* end-to-end test, you could startup the server driving the application the same way a real user would.  These are important around testing your application's *critical paths* especially around **happy paths**.  

There are some downsides however:
* Because this is sending real responses, you normally would need to *seed a database* separate from your actual user's info.  (We don't want to be making accidental changes to our user's information and settings.)
* This can slow the performance of your tests as a result of doing real network requests.
* It is also more difficult to test edge cases.

For now, let's experiment with [stubbing](https://docs.cypress.io/guides/guides/network-requests.html#Stub-Responses){:target='blank'} and [intercepting](https://docs.cypress.io/api/commands/intercept.html#Comparison-to-cy-route){:target='blank'} the response.  Although both types of tests are important, stubbing is much more common and allows you to control the response body, status, and headers while also making your tests more performant.
</section>
</section>

<section class="answer">
### Potential Solution  

```js
  it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
    cy.intercept({
        method: 'POST',
        url: 'http://localhost:3001/api/v1/login'
      },
      {
        statusCode: 201,
        body: {
          id: 2,
          image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
          name: "Leta Keane"
        }
      })
      .get('input[type="email"]')
      .type('leta@turing.io')
      .get('input[type="password"]')
      .type('keane20')
      .get('button').click()
      .url().should('include', '/dashboard')
  });
```

Note that we are just intercepting the `POST` request for logging in and mocking out what the expected response would look like.  You can even add a log in your `apiCalls.js` file and track the response there as well.  Although our dashboard is blank because we haven't mocked out the other network requests, this is something we could do later on.
</section>

<section class="note">
### Note

Many of the projects you will be working on often require that you load a significant amount of data.  To take the above example to the next step, we would need to load a user's teammates.  To help with readability of our tests, it would be good to use a [fixture](https://docs.cypress.io/api/commands/fixture.html#Syntax){:target='blank'} to load a fixed set of data from another file. 
</section>

<section class="call-to-action">
### Testing the Sad Path to a Network Request

**User Story:** As a user, I will receive an error message that my email and password don't match if I submit incorrect `email` and `password` inputs.

* Take what you learned from the exercise to **stub** a `401` response if a user fails to login.  Assert that a new error message is displayed.
</section>

<section class="answer">
### Solution  

```js
  it('should display an error message if I submit an incorrect email and password', () => {
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/login'
    },
    {
      statusCode: 401,
      body: { 
        message: `Email and password do not match.  Please try again.` 
      }
    })
    .get('input[type="email"]')
    .type('leta@turing.io')
    .get('input[type="password"]')
    .type('YOLO')
    .get('button').click()
    .get('p').should('contain', 'Email and password do not match.  Please try again.')
  });
```

Once again we have intercepted the `POST` request, but this time changed the statusCode to be a 401 along with a body including an error message.  You can follow the functionality in the `signInUser` method of `LoginForm` to confirm.  
</section>

<section class="note">
### Note

Take note of the different arguments passed through `should` when checking the values of an element on the page.  

* **Input:** `.should('have.value', [some value])`. 
* **URL:** `.should('include', [some url])` 
* **Other DOM elements:** `.should('contain', [some text]')`.
</section>

<section class="call-to-action">
### Just the beginning

This is just the beginning to testing with Cypress, but hopefully it gives you more context to explore more of the functionality within this application.  The [documentation](https://docs.cypress.io/api/api/table-of-contents.html){:target='blank'} Cypress offers is a great place to start as you become more and more proficient in testing.  With time, you can even drive your implementation through TDD with Cypress.
</section>

<section class="checks-for-understanding">
### Exit Ticket

* What is end-to-end testing and how is it different from unit and integration tests?
* What is Cypress and how is it different from other testing frameworks you've used in the past?
* Should you include tests that utilize the API or should you stub the network requests?  Is there an argument for both?
</section>