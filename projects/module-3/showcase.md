---
title: Showcase Project
module: 3
tags: react, javascript, api
---

## Introduction

This project will challenge you to use the technology you've become familiar with over the course of Mod 3, as well as force you to work inside some constraints. Everyone will be working with (at least) one API and one audience.

## Project Goals and Requirements

1. Use the technology you've been working with over the course of the module to
   demonstrate mastery of the following:
   - React
   - Router
   - Asynchronous JavaScript
   - End to end testing with Cypress

2. Create personas and user stories to describe your target audience.

3. Work within constraints to deliver a product for your niche audience, which helps solve a problem unique to them.

4. Your applications must have the following core functionality:
  - **Display** the data from the API in a way that applies directly to your audience
  - Ability for users to **store/manipulate** the data displayed in the application, such as favoriting or adding to a list, searching, commenting, etc
  - Multiple views handled by Router
  - Be deployed using Vercel, Heroku, Surge, or any other similar service

## Abstract

This project, having a short time frame, will need to pack a lot into a small space. We're going to accomplish this by building an app that serves the needs of a very small, very niche audience.

You'll create an MVP to serve a deeply specific audience of users.

<section class="answer">
### What is an MVP?

When we talk about "MVP", we mean "**M**inimum **V**iable **P**roduct"!

An MVP defines the features that MUST be included in an app to achieve its base, core functionality.

Let's consider Twittter. It's MVP may be defined as:
- A user can write a tweet, which when submitted will be visible on the page

That's it! Obviously, Twitter has MANY more features. But without tweets, Twitter wouldn't be Twitter.

These other Twitter features (which may FEEL very central and vital) are actually just nice-to-haves, which make the experience richer and more robust:
- A user can log in
- A user can see their previous tweets
- A user can follow another user
- A user can like tweets
- A user can re-tweet
- etc

</section>

## Process

Here are some tips for creating an interesting, tightly-scoped application!

### Finding an API

Choose an open API to work with where the data sounds interesting to you. A good place to start looking is [this repo with a list of free/open APIs](https://github.com/public-apis/public-apis). Choose an API where you could make an application based on the data from the API. _Do not choose an API that requires "OAuth or OAuth 2.0"_, which is a more complicated authentication scheme. Also, be wary of APIs that have "CORS" value of "no."

APIs that require an `apikey` are usually easy to deal with, and some APIs don't require an `apikey`. If the API you want to use relies on an API key, be sure to request one ASAP!

Sometimes an API (especially open public ones) can cease to be maintained, so request keys from a few and start playing around with the data you can get!

### Choosing an audience

After you have an API that interests you, the next thing you need to do is choose an audience. You need to be **specific** with your audience.

For example, if you chose an API that served cat data, your audience should not just be "cat lovers". Instead, it should be something more specific like "cat lovers who live in Alaska". This will give you some constraints for the project to make it more unique and design decisions a little easier.

**GET WEIRD. HAVE FUN.** (And also still be professional. Silliness is good; rudeness/crassness is not.)

Once you've chosen your API and audience, start thinking about how you're going to build something for this audience, using that API. Come up with a few different ideas.

### Niche audience

The best audiences for this project are highly specific. You won't have a lot of time to build something, so a big app that has to serve lots of different audience members is not really feasible. You're not building Airbnb or Twitter here.

Examples of past student apps that had excellent audiences:
- An app that interprets sports statistics into bite-sized sentences to share at work, intended to help non-sports-fans talk to sports-fans.
- An app for plant-killers to remember to water their plants.
- An app for wine-haters to find wines to try.
- An app for soon-to-be-dads to begin building up a repertoire of dad jokes.

As you can see, specific, niche audiences are more fun and interesting than broad audiences! These constraints will help inspire specific app features.

## Thinking like a developer

This project is often a portfolio piece for FE students. So let's make this as professional as possible!

### User personas

We expect you to write 2 thorough user personas which describe two members of your niche audience. These personas should inform the design & features/functionality of your app.

### Wireframes & design inspiration

Wireframing will be a major component of this project. The more time you spend intentionally thinking about the layout/views and user flow of your application, the better the final result will be.

There are many different tools you can use for this, including just plain old pen and paper. Just make sure you really spend time thinking about the user interactions. For a good overview of how to effectively wireframe a project, check out [this video](https://www.youtube.com/watch?v=e2Oynq-mOLk).

We also want you to choose two design inspiration pieces, which can be as broad as inspiration for the layout of your app, to as small as a color palette or a micro-interaction animation.

## Deliverables

**Turn in all Day 1 + 2 deliverables via [this google sheet](https://docs.google.com/spreadsheets/d/1O5tv2wxmzeJp8-vlk5bZNTtRBEYQ4Zk-0SgOuyzzVJg/edit?usp=sharing).**

### Day 1 before 2 PM MT
* The link to your MVP proposal

### Day 2 before 3 PM MT
* The link to your repo
* The link to your Project Board
* A link to 2-3 pieces of design inspiration that you will aim to mimic
* A wireframe of your app - this can include sketches of your user interface, or a link to your Canva, InVision, etc.

### Weekend PR review

Before the weekend, you'll be assigned a PR buddy. Over the weekend, tag each other in a review that you'd like some eyes on (hopefully a PR for something that involves the learning goals of this project).
Plan to spend about 20 minutes deep-diving into your buddy's code, asking questions, proposing refactors, and just generally discussing the code with one another.

## Evals

Unlike the evals for the previous projects in Mod 3, you will receive less feedback on this project. Instead, you'll be asked to answer some high level questions about your code and the decisions you made.

The purpose of this is to give you an opportunity to begin experiencing what it is like to turn in a code challenge for a job interview. Often, you will not receive close code feedback - you'll simply move on to the next round of interviewing, or not. It's also common to be asked to talk about your code and what led you to make the decisions you did.

### Eval process

Project evals will be asynchronous.  The feedback for this project will be limited - but feel free to ask questions about your code.   We highly encourage you to seek a code review and feedback from a peer, house mentor or from the #questions channel in slack - a great opportunity to connect with an alumni and create a warm contact for networking!

1. We will DM you your scores
2. In a DM, we will send you a link to part of your project code.
  * Please describe that code in your own words:
    - what does that code do,
    - when is it used,
    - what choices did you make when you wrote it?
3. Answer the following question in a short paragraph, using specific examples from a Mod 3 project:
  * “What is a benefit of using a framework like React over vanilla JS? What is a drawback?” (this is a common interview question!)
<!-- 4. **OPTIONAL:** Identify one function or test that you would like specific feedback on
  * Send us the link
    - Instructions on grabbing the link can be found [here](https://stackoverflow.com/questions/23821235/how-to-link-to-specific-line-number-on-github)
  * If you do not want specific feedback, you can skip this step -->

## Rubric

Remember: scores are an indicator of your progress in specific areas.

Score key:  
- **4:** above and beyond expectations; did extensive self-teaching to achieve
- **3:** right on track; exactly where instructors expect you to be
- **2:** a little behind; be sure to devote study & practice time to this area in order to accelerate growth/understanding
- **1:** very behind; strongly recommend you reach out to instructors to create a plan to catch up in this area

### Specification Adherence

* **4:**
  - Project meets MVP & adds nice-to-haves; meets all project requirements
* **3:**
  - Project meets MVP; meets all project requirements, and is responsive for desktop and mobile screens
* **2:**
  - Project either does not meet MVP, does not meet all project requirements, or is not responsive
* **1:**
  - Project does not meet MVP or project requirements

### React Architecture

* **4:**
  - A consistent, modular file structure is used
  - A clear understanding of class components vs function components is demonstrated (if using hooks, a clear understanding of when hooks need to be used is sufficient)
  - Only the data that a child component _needs_ are passed down as props
  - Logic is kept out of `return` statements; `return` statements are as readable as possible, only communicating what will be displayed
  - Fetch calls have been refactored to be reusable for multiple queries
  - Frontend data (state) always matches the backend data
  - Data fetched from API is run through a cleaning function (which is defined in a separate `utilities` file)
  - Implements excellent error handling if movie database server is down or fetch fails (this includes loading images as well as error messages on the frontend)
  - PropTypes or type-checking of props is complete and specific (all data passed into a component is correctly and specifically identified)
* **3:**
  - A consistent, modular file structure is used
  - A clear understanding of class components vs function components is demonstrated (if using hooks, a clear understanding of when hooks need to be used is sufficient)
  - Only the data that a child component _needs_ is passed down as props
  - Logic is kept out of return statements; return statements are as readable as possible, only communicating what will be displayed
  - There are some issues with the asynchronous JS where the frontend is not matching with the backend
  - There are multiple functions (including fetch calls) that are doing similar pieces of functionality that could continue to be refactored
  - Data fetched from API is not cleaned before being set to state
  - PropTypes or type-checking of props is mostly complete
* **2:**
  - The file structure is inconsistent and/or not modular
  - There is some confusion about when to use a class or function component, but it does not hinder functionality
  - Unnecessary data is passed down to child components as props
  - `return` statements contain logic that should be refactored out for the sake of readability and performance
  - There are methods that are being created inside of functional components that should be passed down through props from a parent class component
  - API calls have not been broken out into their own file
  - PropTypes or type-checking of props is incomplete
* **1:**
  - Project shows little understanding of React and significant refactoring is required, including but not limited to:
    - component structure is inconsistent or buggy
    - a class component is used when a function component is preferable, and/or vice versa
    - props are being passed or accessed incorrectly
    - props are being mutated
    - state is directly mutated
  - File structure is not modular.
  - PropTypes or type-checking of props is not implemented

### Testing

* **4:**
  - Team has successfully achieved 90%+ test coverage of all components
  - All async functionality is stubbed
  - Tests cover happy & sad path user flows
  - All user flows are covered
* **3:**
  - All user flows are covered
  - Async functionality is stubbed at least once
* **2:**
  - Most user flows are covered, sad paths are not
  - A valid attempt is made at stubbing async functionality
* **1:**
  - Many tests are missing/failing
  - Tests do not successfully illustrate user flows
  - No async functionality is stubbed
  - There are obvious, large gaps in testing app functionality

### Routing

* **4:**
  - Application has been refactored to use Router without leaving artifacts of the prior code (no odd workarounds remaining)
  - Use of Router shows developer empathy (readability, maintainability)
  - UX is excellent; routes are consistent and navigation is clear
  - When the user enters a bad URL, they are given an easy way to navigate to a working page
* **3:**
  - Application uses Router to display appropriate components based on URL
  - Refactoring was clean; there may be a few code smells showing the existence of the prior code, but there are no major bugs indicating a lack of understanding of Router
  - Application uses React Router components and does not manipulate the `history` object
  - UX is clear and set up so the user has access to previous routes
  - A 404 page handles undefined routes
* **2:**
  - Application uses Router but does not display the appropriate components when navigating throughout the app
  - Refactoring is messy; there are remnants of the previous code or other code smells that indicate that Router is not clearly understood
  - There are 1+ issues with the UX; access to routes is unclear or not fully implemented
  - Bad URLs are not handled
* **1:**
  - Application uses Router but fails to properly display all necessary routes
  - Application does not use built-in React Router components and instead directly manipulates the `history` object
  - UX is challenging; multiple pages are missing links to routes, or browser Back/Forward arrow navigation does not work

  ### Project Professionalism
  You will not receive a score for professionalism, but you should be meeting these expectations:
  * Project is deployed
  * README includes the deployed link and it is easy to locate
  * README concisely communicates your learning goals, the evolution of the project, and reflections while using good formatting to enhance readability
  * README links to any applicable repos/deployed sites and includes clear instructions for running the application locally
  * README includes a gif of the application
  * Git commits are atomic, with concise and precise descriptions of the change made
  * PRs have full, consistent descriptions
  * Evolution of the project (decisions made, etc) are fully and clearly documented in the git history and PRs
  * When the project is run locally, the terminal shows no errors or warnings

<!-- ### Project Professionalism

The goal of this rubric section is to continue to gauge your readiness and prepare you for workplace standards. As you ramp up your job hunt, it becomes increasingly important to demonstrate to future employers that you are not sloppy and take care with the details of your work and processes!

* **4:**  
  - README concisely communicates your learning goals, the evolution of the project, and reflections - while using good formatting to enhance readability
  - README links to any applicable repos/deployed sites
  - You use a rebase workflow
  - Git commits are atomic, with concise and precise descriptions of the change made
  - PRs have full, consistent descriptions
  - You lean on cohortmates or a mentor to do consistent, thorough, meaningful code reviews of PRs, which prompt updates and changes made to that PR before merging
  - Evolution of the project (decisions made, etc) is fully and clearly documented in the git history and PRs
  - When the project is run locally, the terminal shows no errors or warnings
* **3:**
  - README concisely communicates the team's individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability
  - README links to all applicable repos/deployed sites
  - Git commits are atomic, with concise and precise descriptions of the change made
  - PRs have full, consistent descriptions
  - Evolution of the project (decisions made, etc) is documented in the git history and PRs but is sometimes unclear
  - When the project is run locally, the terminal shows no errors and fewer than 5 warnings
* **2:**
  - README concisely communicates your learning goals and the evolution of the project, but does not use Markdown formatting to aid readability
  - README links to any applicable repos/deployed sites
  - Git commits are mostly atomic but sometimes document changesets that are too large
  - PRs do not have thorough descriptions
  - Evolution of the project (decisions made, etc) is not clearly documented through git commits and PRs
  - When the project is run locally, the terminal shows no errors and more than 5 warnings
* **1:**
  - README does not document your learning goals, the evolution of the project, and is poorly formatted (hindering readability)
  - README does not include links to team member's GitHub profiles
  - Git commits are not atomic and document changesets that are too large
  - PRs do not have thorough descriptions, and no code reviews are conducted, merging bugs into the main branch
  - When the project is run locally, the terminal shows errors and more than 5 warnings -->
