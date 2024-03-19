---
title: Whateverly
length: 2 weeks
tags: javascript, react, jsx, sass
---

2 week group project for FE Mod 2 (weeks 4-5)

## Background and Description

For this project you will be working in a group to write a program in React. This is an opportunity to reinforce and solidify the concepts we've covered thus far - JS fundamentals, OOP, working with large datasets, and developing workflows. This is also an opportunity for you to have more autonomy over what you are building.

Remember that software, at its core, is about solving problems. Some things to think about as you brainstorm:

- What problem are you solving?
- What features must the solution include to solve this problem?

Check out the following application that solves the problem of not readily having access to the weather conditions: [Weathrly App](http://gs-jm-weatherly.herokuapp.com/)

## Goals and Objectives

- Synthesize knowledge of OOP, classes, and JS fundamentals to create an application using React
- Construct complex dataset to be used to implement array mutator and iterator methods to work with data
- Collaborate and create (and iterate) on user stories 
- Demonstrate good GitHub collaboration and workflow within a large group

## Technologies

You'll be working with some new technologies for this project:

* **the fetch API** for sending/receiving data
* **ReactJS** for organizing your application into components
* **JSX** for writing your component templates
* **Sass** for getting fancy with your CSS

## Outline

### Week 4

|Day           | Status| Assigments/Deliverables |
|---           |---    |--- |
|*Friday*      | Kick-off and brainstorming | React static comp, brainstorm project ideas and datasets|
|*Day 1 - Mon* | Groups assigned | 1 project idea & datasets due from each student|
|*Day 2*       | Structuring project| User stories due by 5pm|
|*Day 5*       | 1st PR | PR due w/both instructors tagged|

### Week 5

|Day | Status| Deliverables |
|--- |---    |--- |
|*8* | 2nd PR| PR due w/both instructors tagged|
|*11* | Assessment| Formal Demo|


# Requirements

## Custom Dataset

Below you will find some datasets for inspiration.  
**You'll want to make sure that you install the Chrome Extension JSONView to make the JSON more readable**

[Nobel Prize](http://api.nobelprize.org/v1/prize.json)  
[Silicon Valley Episodes](http://api.tvmaze.com/singlesearch/shows?q=silicon-valley&embed=episodes)  
[Pokemon](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json)  
[Current US Senators](https://www.govtrack.us/api/v2/role?current=true&role_type=senator)  
[How many people are in space right now](http://api.open-notify.org/astros.json)  

* You must create **two** related datasets that will represent your application data. Each group will be assigned a dataset

* At least one of your datasets must have more than 30 records. (if your dataset is an object, it should have 30 keys. if it's an array, it should have 30 elements)

* Your users will only be able to **retrieve** your data, not modify it. (Similar to Jeopardy: you, as a developer, are allowed to manipulate the dataset to make it easier to work with, but the players interacting with your app cannot)


## Search & Filter Functionality

* Your app idea should lend itself to a useful implementation of search functionality. You **must** have at least a single text input that searches at least one of your datasets for particular entries. 

* Your app should be able to filter the search results / datasets based on user-provided parameters. e.g. if I were building a podcast app, I should be able to filter by genre so that I'm only shown podcast results listed in the comedy genre.


## LocalStorage

* Your app should have a use-case for implementing localStorage. For example, if I were building a podcast app and I wanted to favorite certain podcasts that I was interested in subscribing to, maybe those podcasts would be saved to localStorage so that I could revisit just my favorites.



## Code Organization

Your codebase should be organized with a file structure that works for your group. See the [React docs](https://reactjs.org/docs/faq-structure.html) for some common approaches. 

## GitHub Collab & Workflow

The requirements for collaboration and workflow are more constrained within this project considering this project's learning goals:

- A minimum of two PRs must tag both instructors
- PR should be around 400 lines of code (significant enough for your partners to have some serious code to review, think about, and ask questions about, but not so big that it’s overwhelming and the reviewer is just going to skim over it/miss potential mistakes)
- You should be reviewing each other's code by leaving line-by-line comments
- If you have feedback for one of your partners to change something, *DO NOT* merge the PR before that person has a chance to make the change

## User Stories

Smaller companies don’t have product teams. As front-end engineers, one of the most valuable assets you bring is the ability to think about the end user's perspective. Creating user stories is a mind shift that forces you to understand that you are building features and software for other people. 

## README

Your README should include the following, in this order:

- Abstract at the top (A sentence or two describing the project)
- Install/Setup instructions
- Everything else (must include wireframes and screenshot/GIF of finished project)

# Submitting Your Project Ideas & Datasets

You should pull request your project ideas and their corresponding datasets [here](https://github.com/turingschool-examples/fe-apps). Your project ideas should be in the description of your PR and clearly describe what kind of application you will build and how it will utilize the datasets you've created.

When submitting your data:

* you must run your dataset through a [JSON validator](https://jsonformatter.curiousconcept.com/) before submitting a pull request for your datasets to make sure you don't have any syntax errors [like so](https://imgur.com/jecJoe9)
* you must **not** delete **any files or datasets** that currently exist in the repo. Do not replace them with your data and do not remove them
* you must only create **one** single file that holds **both** datasets inside your cohort folder in the `whateverly` directory. that file should be named `yourGithubUsername.js`
* They should be in JSON format and you should export both datasets at the bottom of the file like so:

```
module.exports = {
  instructors,
  students
}
```

* See additional instructions and sample files in the [README](https://github.com/turingschool-examples/fe-apps#student-instructions)


# Repo Initialization

* Use [create-react-app](https://www.npmjs.com/package/create-react-app) to create a new project



# Rubric

## Specification Adherence

* [ ] Novice - README is missing or incomplete. Codebase is not organized. User stories from group are never submitted. Application does not solve the presented problem.

* [ ] Advanced Beginner - README is complete. Codebase is organized. User stories are completed; however, may be late. Some user stories may be unclear or hard to understand. Application is close to solving presented problem.

* [ ] Proficient - Developers turn in user stories on time and iterate on user stories throughout the life of the project, as needed. User stories have enough detail - such that an outside developer could jump right in and help with user stories/tickets. Application solves the presented problem.

* [ ] Exceptional - Meets all expectations for `Proficient`. Developers may use personas to help guide their user stories. Developers may also incorporate other tools to assist in planning - workflow diagrams, story maps, etc.

------------------------------------------------------------------

## UI/UX

* [ ] Novice - The application is confusing or difficult to use. The final project presents an interface that is incomplete.

* [ ] Advanced Beginner - The application may be confusing or difficult to use at times. The application shows effort in the interface, but the result is not effective because UX and/or UI still present an application that is incomplete or difficult to use. It is not clear that the user stories helped to guide UX.

* [ ] Proficient - The application has many strong pages/interactions. The application can stand on its own to be used by instructor without guidance from a developer on the team.

* [ ] Exceptional - Meets all expectations for `Proficient`. In addition, the application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality.

------------------------------------------------------------------

## CSS/Sass Style

* [ ] Novice - There are several (10+) instances of duplication and one or two major bugs. Developers write code with unnecessary selectors or tags which do not increase clarity.

* [ ] Advanced Beginner - There is some duplication (5-10 instances) in the codebase. There may be one to two minor bugs. There may be some unnecessary selectors or tags. Application adds organization for the whole stylesheet and within rules.

* [ ] Proficient - Application is thoughtfully put together with comments to help guide organization. There may be some duplication (fewer than 5 instances) present. Comments are present to assist with organization of code.

* [ ] Exceptional - Meets all expectations for `Proficient`. The application has exceptionally well-factored CSS/Sass with all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.

------------------------------------------------------------------

## JavaScript / React Style

* [ ] Novice - There is a significant amount of duplication and one or two major bugs. JavaScript does not follow the principles of `DRY` (Don't Repeat Yourself)

* [ ] Advanced Beginner - There is some duplication and there may be one or two major bugs. The application has large components and logic could be broken apart into smaller, stateless components. JavaScript may be hard to read/follow.

* [ ] Proficient - Application has little to no duplication and no major bugs. Application has several components built out that logically break apart the functionality. JavaScript may be hard to follow at times but is generally easy to read/understand. 

* [ ] Exceptional - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There are zero instances where an instructor would recommend taking a different approach to design and component architecture. DRY and SRP (Single Responsibility Principle) practices are incorporated, making JavaScript very easy to follow/read.

------------------------------------------------------------------

## GitHub Collaboration/Workflow

* [ ] Novice - Developers do not tag instructors in the two required PRs by due dates listed in the project outline or tagged PR has fewer than 200 lines of code. The developer creating the PR does not summarize the changes or why the changes were made. Reviewers are not leaving line-by-line feedback/comments _or_ are merging the PR before changes are made.

* [ ] Advanced Beginner - Developers tag instructors in both required PRs by due dates _or_ in one of the two required. PR has less than the required lines of code in PR. Reviewers do not leave line-by-line feedback. May be merging PR before feedback is incorporated.

* [ ] Proficient - Developers tag instructors in both required PRs by due dates. PR is over 100 lines of code. The developer creating the PR summarizes the changes made, why those changes were necessary, and asks for insights. Reviewers leave line-by-line comments/feedback and wait to merge PR until feedback is incorporated.

* [ ] Exceptional - Meets all expectations for `Proficient`. The feedback is both kind _and_ insightful. There may be numerous threads of conversation where developers go back and forth to find the best solution to the problems they are solving together.

------------------------------------------------------------------

## Testing

* [ ] Novice - There is little or no evidence of testing in the application.

* [ ] Advanced Beginner - Project has sporadic use of tests at multiple levels. The application contains numerous holes in testing and/or many features are untested.

* [ ] Proficient - Project has a running test suite that tests multiple levels but fails to cover some features.

* [ ] Exceptional - Project has a running test suite that exercises the application used Enzyme. The test suite covers almost all aspects of the application.

------------------------------------------------------------------

## Presentation

* [ ] Novice - Not all presenters speak. Presenters give too much or too little information about the application. Presenters do not use audio/visual aids or media.

* [ ] Advanced Beginner - Everyone in the group speaks. Presenters do a live demo of the application. The group may speak about the planning/challenges/rewards of the project; however, the delivery does not seem thought out/well-planned. 

* [ ] Proficient - Everyone in the group has an opportunity to speak during the presentation. The group has a visual of the application to demo (e.g. slides, recordings of interactions, live demo). The group talks about the app, speaking to the challenges, rewards, and collaborative aspects of the project.

* [ ] Exceptional - Meets all expectations of `Proficient`. In addition, the presentation runs smoothly w/no hiccups - indicating that it was planned/rehearsed/polished. The presentation is so engaging that there is no time that the evaluators find themselves checking the time/clock.
