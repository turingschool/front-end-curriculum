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
|*Day 1 - Mon* | Groups assigned | 2 project ideas & draft datasets due from each student|
|*Day 3*       | Structuring project| User stories due by 4 pm|
|*Day 5*       | 1st PR | PR due w/both instructors tagged|

### Week 5

|Day | Status| Deliverables |
|--- |---    |--- |
|*8* | 2nd PR| PR due w/both instructors tagged|
|*11* | Assessment| Formal Demo|


# Requirements

## Custom Dataset

* Your group must create **two** related datasets that will represent your application data. 

Below you will find some datasets for inspiration. **You'll want to make sure that you install the Chrome Extension JSONView to make the JSON more readable**

[Nobel Prize](http://api.nobelprize.org/v1/prize.json)\
[Silicon Valley Episodes](http://api.tvmaze.com/singlesearch/shows?q=silicon-valley&embed=episodes)\
[Pokemon](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json)\
[Current US Senators](https://www.govtrack.us/api/v2/role?current=true&role_type=senator)\
[How many people are in space right now](http://api.open-notify.org/astros.json)\

<!-- For example, if you were building a weather forecast application, your datasets might look like [this](https://repl.it/@NathanielFoster/Weatherly-Mock-Data). -->

* At least one of your datasets must have more than 30 records. (if your dataset is an object, it should have 30 keys. if it's an array, it should have 30 elements)

* Your users will only be able to **retrieve** your data, not modify it. (Similar to Jeopardy: you, as a developer, are allowed to manipulate the dataset to make it easier to work with, but the players interacting with your app cannot)


## Search Functionality & Autocomplete

* Your app must have a use-case for search functionality. For example, if you were building a weather forecast application, your users would be able to search for a city name and retrieve the forecast for that city.

* The search functionality will include an autocomplete feature that "guesses" what the user is trying to type in. This means that the information your users are searching for should be part of one of your datasets that it can pull suggestions from. 

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

You should pull request your project ideas and their corresponding datasets [here](https://github.com/turingschool-examples/whateverly-data). Your project ideas should be in the description of your PR and include the following information:

* One or two sentence description of the application
* What use-case it will have for search functionality/auto-complete

Your datasets should be added in a single file to the `/datasets` directory. They should be in JSON format and you should export both datasets at the bottom of the file like:

```
module.exports = {
  instructors,
  students
}
```

# Repo Initialization

* Use [create-react-app](https://www.npmjs.com/package/create-react-app) to create a new project
* ESLint

After initializing your create-react-app project, add eslint to the project.

#### Install eslint

`npm install eslint --save-dev`

Add a file named `.eslintrc` to the root of your project and copy these [restrictions](./assets/weathrly/eslintrc.json) into said file.

