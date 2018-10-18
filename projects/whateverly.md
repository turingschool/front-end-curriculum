---
title: Whateverly
---

# Context

TBD


# Technologies

You'll be working with some new technologies for this project:

* **the fetch API** for sending/receiving data
* **ReactJS** for organizing your application into components
* **JSX** for writing your component templates
* **Sass** for getting fancy with your CSS


# Requirements

## Custom Dataset

* Your group must create **two** related datasets that will represent your application data. For example, if you were building a weather forecast application, your datasets might look like [this]().

* At least one of your datasets must have more than 30 records. (if your dataset is an object, it should have 30 keys. if it's an array, it should have 30 elements)

* Your users will only be able to **retrieve** your data, not modify it. (Similar to Jeopardy: you, as a developer, are allowed to manipulate the dataset to make it easier to work with, but the players interacting with your app cannot)


## Search Functionality & Autocomplete

* Your app must have a use-case for search functionality. For example, if you were building a weather forecast application, your users would be able to search for a city name and retrieve the forecast for that city.

* The search functionality will include an autocomplete feature that "guesses" what the user is trying to type in. This means that the information your users are searching for should be part of one of your datasets that it can pull suggestions from. 









## Outline

### Week 4

|Day | Status| Deliverables |
|--- |---    |--- |
|*Friday* (wk 3) | Kick-off and brainstorming | Practice with the React static comp, brainstorm project ideas and datasets |
|*Monday* | 2 project ideas & draft datasets [due]() |
|*3* | Understanding/Planning| Diagram for OOP design/classes due|
|*5* | Check-in| Pair-to-Pair feedback|

### Week 5

|Day | Status| Deliverables |
|--- |---    |--- |
|*8* | Check-in| Instructor pairing|
|*11* | Assessment| Formal Code Review or Class Code Review|





#### Submitting Your Project Ideas & Datasets

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






--------------------------------------------------------------

ALL OF THIS SHIT NEEDS TO BE REDONE. Eslint instructions don't need to be so verbose, just link them to the new configuration file.


# Repo Initialization

* Use [create-react-app](https://www.npmjs.com/package/create-react-app) to create a new project
* ESLint

After initializing your create-react-app project, add eslint to the project.

#### Install eslint

`npm install eslint --save-dev`

#### Add an eslint command to your package.json scripts property
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "lint": "./node_modules/eslint/bin/eslint.js ./src/*.js"
},
```

#### Add this .eslintrc file to the root of your project

Make sure to name it .eslintrc

[.eslintrc](./assets/weathrly/eslintrc.json)





## Design Requirements
Your Readme should include wireframes of your app.


## Extensions

SHOULD PROBABLY COME UP WITH MORE EXTENSIONS

* Add one or two examples of Micro-Interactions found on Dribbble or Behance in your ReadMe that inspired your design

* The application is fully accessible.
   * The application can be used without a mouse
   * zero axe-core violations
