---
title: Cross-Pollination Capstone Project
---

For the first time ever, you get to work across programs and create a project that might not be possible otherwise! In this project plan, we'll kick-off the project and define expectations and deliverables for teams.

## Learning Goals

This is a unique opportunity that presents some valuable goals:

* Ultimately, demonstrate knowledge you've gained throughout Turing
* Use an agile process to turn well defined requirements into deployed and production ready software
* Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
* Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
* Practice an advanced, professional git workflow (see whole-team expectations)
* Gain more experience using continuous integration tools to build and automate the deployment of features in various environments
* Build applications that execute in development, test, CI, and production environments
* Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec

## Kick-Off

## Expectations

### Whole-Team

Generally, this project will consist of a front-end (FE) and back-end (BE) with the following:

* Use Github Projects to track stories and progress
* The FE and BE applications live in separate repositories that communicate to each other using API requests
* Early and consistent deployment to production (instructors will check build history)
* In-depth `README.md` for each repository describing the project, setup procedure, testing procedure, and screenshots, if applicable (API documentation, if applicable)
* Create and use pull request templates that document and create discussion for finished features

If you do not see your project following this outline, then speak to your instructors about it.


#### Regarding Authentication Please Read Carefully!!!!!!

Authentication has been banned for this project. You will not be creating login logout functionality or the ability to create users.
If you have questions regarding this please reach out to your project managers.

### Back-End Creators

* Test the BE:
  * If you use Rails for your BE, then we expect above 80% test coverage
  * If you experiment with a new BE language/framework outside of Rails, then BE test coverage is expected to be at least 25%

* You must pick **2** of the following stretch goals:
    * Implement BE in a framework or language you have not used before in a project
    * Create a Backend API using GraphQL
    * Create a micro service or two and abstract out functionality into a separate application
    * Utilize websockets rather than traditional HTTP/HTTPS

### Front-End Creators

* Interface with the BE team’s API(s) that serve JSON data and incorporate that data into your FE
* Test the FE:
  * If you use React/Redux for your FE, then we expect above 85% test coverage
  * If you experiment with a new FE framework outside of React/Redux, then FE test coverage is expected to be at least 25%
* Implement a stretch goal (listed below)

Possible stretch goals:

* Implement FE in a framework you have not used before in a project
* Utilize internationalization and localization tools to localize the FE based on the user's locale
* Implement Progressive Web App (PWA) technologies like: background sync, IndexedDB, static assets caching using a Service Worker
* Utilize websockets rather than traditional HTTP/HTTPS (maybe [socket.io](https://socket.io/))

**Note:** FE students can be the BE creators and vice versa, if it fits into your learning goals

## Day 1 Deliverables

You should have a full proposal of your project, which should include:

* DTR in the form of a gist
* Initialize your repositories (don't write any code just yet!)
* Set up your scrum board with Github projects.
    * You'll be required to use a single board for all repos. This will make it easier to see what everyone is working on during the project.
    * Write all stories for what you are committing to have completed by first check-in. Label with Phase 1
* Normalize on git workflow and create a PR template
* Determine MVP (knowing it could change as the project continues)
* Create wireframes
* Construct schema design

## Going Forward

### Check-Ins

Instructors will serve as project managers and hold check-ins:

The teams are expected to present on the following:
* The committed work that is complete and address any issues for incomplete work
* Difficulties, roadblocks, and bugs
* Stories on board for what the next phase will be and what the team is committing to by next checkin
* Review of git commits and PRs

### End-of-Project Demos

Thursday morning of week 6 your team will demo your application to the class and instructors (the application should be demo'd using _production_).

_Demo Expectations:_
1. Live demo your application in production (Have a recording as a back-up)
1. Include the problem you are trying to solve and how your application does that
1. Include the challenges on the Frontend and Backend and solutions to those challenges
1. Have your application up and ready to go when you start. Other windows should be closed
1. Be proud of your applications! You've spent a lot of time and hard work on this, now is your chance to show it off. Your demo should really showcase that hard work and accomplishments.

We recommend that you have a quick 30 sec - 1 min statement about what your app is and then jump straight into your demo. After the demo is complete, you can go in more depth and talk about the other points.

### Evaluation

For your evaluation your team is expected to come prepared with a 20 minute presentation (10 minute back-end and 10 minute front-end)
The presentation should use the rubric as a guideline for what needs to be covered.

Teams - it's your responsibility to keep an ensure you are on track to meet expectations of the rubric, which can be found [here](./cross_pollination_rubric).
