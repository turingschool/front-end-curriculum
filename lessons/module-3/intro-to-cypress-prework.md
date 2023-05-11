---
title: Intro to Cypress Testing
length: 1 hour
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

Once you have application running, use the application and then examine the FE code to see how the application runs. (The fake log-in information is located in [this file](https://github.com/turingschool-examples/feedback-loop-api/blob/main/mockData/users.js){:target='blank'}.) It's not important to understand every line of code, but take note of the various user flows and how the various API calls work.

For example, you don't need to know how Router works; instead, use the application and see how the URL changes as you navigate through the website.
</section>

<section class="call-to-action">
### Enough Talk Already!
Now that we understand the big picture, let's get into the details!

Let's experiment ourselves and see how great Cypress is firsthand.  Using the app provided earlier, **Feedback Loop**, let's experiment testing it with Cypress!

* First use [the Cypress docs](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing){:target='blank'} to figure out how to use npm to install Cypress within the Feedback Loop UI repo.
* There are multiple ways of opening up Cypress.  Use the docs to figure out how to setup a `script` in the `package.json` that you'll be able to use to open up Cypress.  
* Open Cypress with the script you added. A new window will appear with two testing options.  
  * Select **E2E Testing**.  
  * There are some config options on the next window...but for now just select **Continue** at the bottom.  
    * *Hint: If you see an error that references webpack, you likely chose Component Testing by mistake in the previous step.*
  * Then select your browser (*Chrome*) and the Start E2E Testing in Chrome button. Pause here for now.  

Having completed these steps, you should notice some new directories and files added to your application.
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
    "cypress": "cypress open"
  }
}
```

* Then run `npm run cypress`

Note: This syntax might be slightly different than what you found in the docs. Thats ok! There are many syntax options.
</section>

## Writing our first test!

<section class="call-to-action">
### Creating some test files

You'll notice that there are a few directories including `downloads`, `fixtures`, and `support` inside of a `cypress` directory.  For now, don't worry about these directories and go back to the main window on Cypress and follow the [instructions here](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#What-you-ll-learn){:target="_blank"} for adding your first test file.

As we consider what we will be testing, let's consider a few ways to set up our files.

We could make one giant file and test absolutely everything there: `feedback_loop_spec.cy.js`.  But it's probably more maintainable to group up our related user flows.

Create a few files using the UI in the `e2e` directory (located inside the `cypress` directory):
- `cypress/e2e/login_spec.cy.js`
- `cypress/e2e/dashboard_spec.cy.js`
- `cypress/e2e/form_spec.cy.js`
</section>

<section class="note">
### Note

Notice that each of these describes actions tied to our data/server/network requests. When viewing feedback from coworkers, there are several different user flows. But they all involve GETTING feedback data from the back end.

Figuring out how to group user flows/stories can be tricky, and ultimately there are no hard-and-fast rules about how to do so. Over time, you'll develop a sense of what to put together, just like how you are learning what to break out into a React component and what to leave as is. And, of course, these conventions change from team to team.
</section>

