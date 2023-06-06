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
  - PropTypes has been implemented in all components with props
  - App is responsive across mobile, tablet and desktop sizes
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

### Day 2 before 12 PM MT
* The link to your MVP proposal

### Day 3 before 3 PM MT
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

## Minimum Collaboration and Professionalism Expectations

* Team holds daily standups throughout project.
* Commits are atomic and frequent, effectively documenting the evolution/progression of the application. There is no more than a 10% disparity in project contributions between teammates.
* A project board is utilized (and updated throughout the project) with Github issues and labels.
* Team uses branches, PRs and thorough code reviews to add new code to the main branch.
* The README is formatted well and at a minimum contains:
  * Overview of project and goals
  * Overview of technologies used, challenges, wins, and any other reflections
  * Screenshots/gifs of your app
  * List of contributors
* **Team collaborates effectively to accomplish the shared goal.  Team productively and professionally works through challenges and conflicts to ensure all team members are able to be heard and contribute throughout the project.**  
  * Instructors are available to offer support and guidance but conversations around what *is* and what *is not* working are expected to be led by the team members themselves.

## Rubric

### Specification Adherence
💫ON TRACK💫 can look like:
- Project meets all MVP requirements 
- App is fully resposive across mobile, tablet and desktop devices

✨WOW✨ can look like:
- Project completes 1 or more additional features beyond MVP

### React Architecture:

💫ON TRACK💫 can look like:
* A consistent, modular file structure is used
* A clear understanding of stateful components vs stateless components is demonstrated
* Only the data that a child component _needs_ is passed down as props
* Logic is kept out of return statements; return statements are as readable as possible, only communicating what will be displayed
* The data displayed on the frontend is consistent with the data stored on the backend
* Functions follow the single responsibility principle and are written to be reusable when appropriate
* Data fetched from API is cleaned before being set to state
* All components which receive props implement prop typechecking (proptypes or otherwise)  

✨WOW✨ can look like:
* Refactoring your stateful components into class-based components. Be sure to do this on a separate branch and submit the link to that PR to your Project Manager. You do not need to merge it in.

### Routing

💫ON TRACK💫 can look like:
  - Application uses Router to display appropriate components based on URL
  - The user has access to previous routes via the back button
  - A 404 page handles undefined routes
  - UX is clear and set up so the user has access to previous routes

✨WOW✨ can look like:
-  Code was refactored to remove unnecessary or old code artifacts
- When the user enters a bad URL, they are given an easy way to navigate to a working page

### Testing:

💫ON TRACK💫 can look like:
* All user flows are tested
* All network request functionality is intercepted and stubbed
* Tests make specific assertions about the content DOM elements contain

✨WOW✨ can look like:
* All sad path user flows have been tested

### Professionalism 
You will not receive a score for professionalism, but you should be meeting these expectations:
💫ON TRACK💫 can look like:
* Project is deployed
* README concisely communicates the team's individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability
* README links to all user GitHub profiles and any applicable repos & deployed sites
* Setup instructions for any and all repos are thorough and verbose enough that even non-technical people (like recruiters) could follow them
* Git commits are atomic, with concise and precise descriptions of the change made
* PRs have full, consistent descriptions
* Team members conduct consistent code reviews of PRs
* Evolution of the project (decisions made, etc) is documented in the git history and PRs
* When the project is run locally, the terminal shows no errors and no warnings.

✨WOW✨ can look like:
* Mapping out extensions in your project board beyond your MVP
* Using github issues to track bugs or other issues as they crop up. 
* Getting several PR reviews from your rocks and/or mentors and implementing their feedback _before_ you merge the PR.