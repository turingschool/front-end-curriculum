# What's Cookin'?

## Goals and Objectives

- Follow the specification below to make a working application
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Use object and array prototype methods to perform data manipulation
- Display information on the page while maintaining ability to test class properties and mehtods
- Create a user interface that is easy to use and displays information in a clear way

In this project, you will be creating a recipe tracking / meal planning application that allows users to view their favorite recipes and plan shopping trips around them. The idea is similar to sites like [All Recipes](https://www.allrecipes.com/){:target='blank'} or [New York Times Cooking](https://cooking.nytimes.com/){:target='blank'}. Users should be able to view a list of recipes, favorite their own recipes, and choose recipes to cook, and make a shopping list based off of these chosen recipes.

<section class="note">
### Note

Feel free to use the above sites as inspiration for your UI, but note that there is NO COMP provided for this project. We expect you to design your own dashboard layout that is relevant to the data being displayed.

**You must pull 3 inspirations from 3 different apps that you want to implement in your application**
* Be specific about what piece you are trying to re-create
* This may include how elements are organized from desktop to mobile views
* You may also pull inspirations from other sites such as [Dribbble](https://dribbble.com/){:target='blank'}
</section>

---

## Timeline
Dates and deadlines to be aware of:

* **Monday, February 8th** - Submit the following to your PM BEFORE beginning to write code via Slack:
1. DTR (be specific about learning goals, schedules, and communication expectations ) 
1. Project board
1. Planned out class structure
1. Wireframes
1. 3 design inspirations (Please include links)

* **Thursday, February 17th** - Project due at 9PM.
* **Friday, February 18th** - Project evals.

Please submit your finished projects [here](https://forms.gle/dTjaDmgDog9U8dGn6){:target='blank'}

---

## Requirements

### Initial Setup

For this project, you need to use this [What's Cookin Starter Kit](https://github.com/turingschool-examples/whats-cookin-starter-kit){:target='blank'} repo. Follow the instructions in the README for forking the repo and getting it setup. Once you have it set up, follow the instructions to verify it is setup correctly.

### Testing Setup

There is no boilerplate for testing in the starter-kit repo. You will need to set up all of the tests yourself. Although, if you have run `npm install` in the setup instructions, then the tooling you need to start testing is already installed (`mocha` and `chai`). Refer to the testing lesson from week 1 as a guide to get started as well as the [mocha](https://mochajs.org/){:target='blank'} and [chai](https://www.chaijs.com/){:target='blank'} documentation pages.

### Data

The shape and structure of the data is outlined in the starter-kit repo. The data and values are all randomly generated -- don't read too much into why a certain user has certain data associated with them. A general overview of the data is:

```
users.js - a file with many users
recipes.js - a file with many recipes
ingredients.js - a file with many ingredients and their associated prices

Users will be associated with recipes, which will in turn be associated with ingredients, via IDs
```

---

## User Stories

### Users
A `User` holds on to all of a user's data. As a user, I should be able to:
  - Favorite recipes (add to / remove from the user's `favoriteRecipes`)
  - Decide to cook a recipe that week (add to my `recipesToCook`)
  - Filter my `favoriteRecipes` or `recipesToCook` by type
  - Search any of my saved recipes by name or ingredient

Favorites are meant to be recipes that one can easily find again. When a user decides to cook a recipe, they should be able to determine whether they have sufficient ingredients in their pantry (see Pantry user stories). If they do not, they should be able to see a list of what ingredients they need to buy, and how much it will cost. A user should be able to do this for at least one recipe. Making a list of `recipesToCook` can be implemented at a later time.

### Recipes

Users should be able to view a list of recipes. Specifically:
- As a user, I should be able to filter recipes by type / tag
- As a user, I should be able to search recipes by ingredients

A `Recipe` should hold on to all its information (provided in the data file). It should be able to:
- Get the cost of its ingredients
- Get its directions / instructions

### Pantries
Every User should have a pantry. A `Pantry` holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have.
As a user, I should be able to:
- Determine whether my pantry has enough ingredients to cook a given meal
- Determine the amount of ingredients still needed to cook a given meal, based on what's in my pantry
- Remove the ingredients used for a given meal from my pantry, once that meal has been cooked (only applicable if users have a list of `mealsToCook`; can be considered a stretch goal)

<section class="note">
The details outlined above are basic user stories. You may find it useful to create classes that relate to the stories (ex: would it be useful to have classes that hold on to multiple instances of a different class?), but are not specifically outlined above.
</section>

---

#### Testing

You should *NOT* use the original data files in the `data` directory for testing. These are big files to begin with, and a real-world dataset would have millions of records. That's far too big to use every time you want to run a test.

Instead, for your tests, you should create small, sample datasets that match the structure of the application data. By creating this sample dataset, you will also know if your methods are working correctly because you can do the calculations by hand with a much smaller dataset.

You are *expected* to test:

* All class properties
* All class methods and updates to their properties
* Any helper methods you build out

You are *not expected* to test:

* DOM manipulation / DOM manipulating methods (like `document.querySelector(...)`)

<section class="note">
### Note

When you test a JavaScript class file, you need to use `module.exports` in your class file so the test can use the code - just like Mythical Creatures. However, in this project when you call that same class in the browser, the browser has no idea what `module` is. So your code crashes. To fix this, you'll want to include something like this in your class file (for each class file that you create):

```js
// Instead of:
module.exports = someClassName;

// You will need to use:
if (typeof module !== 'undefined') {
  module.exports = someClassName;
}
```
</section>

## Rubric

### Functional Expectations
* 4: Application fulfills all requirements *as well as* an extension.
* 3: Application fulfills all requirements.
* 2: Application is usable but has some missing functionality.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style / OOP
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application is expertly divided into logical components each with a clean, single responsibility.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring. Application is effectively broken into logical components, but violate the principle of SRP.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring. Divisions of logic into classes are inconsistent or unclear.
* 1: Application generates syntax error or crashes during execution. Application logic shows poor decomposition with too much logic mashed together.

### Test-Driven Development
* 4: Application covers all aspects of the application including various flows and covers both happy/sad paths.
* 3: Application is well tested but fails to cover some features and only tests for happy paths. Tests use smaller, sample data files as input rather than the large, original data files.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements.
* 1: Application does not demonstrate strong use of TDD.

### User Interface
* 4: The application can stand on its own to be used by an instructor without guidance from a developer on the team. The application is fully responsive and the UI does not detract from the UX.  In addition, the application has clearly had special consideration around usability on devices.
* 3: The application has many strong displays/interactions, but a few holes in lesser-used displays.  The application is fully responsive and the UI does not detract from the UX.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.  Application is not responsive on other devices.
* 1: The application is confusing or difficult to use.

### Workflow
* 4: The team effectively uses Git branches and many small, atomic commits that document the evolution of their application with descriptive commit messages. The team displays good pairing practices (driver-navigator, dividing up work, etc.) and utilizes a planning tool more than GitHub issues (GitHub Projects, Trello, etc).
* 3: The team makes a series of small, atomic commits that document the evolution of their application. The team conducts a DTR (define the relationship) and utilizes GitHub issues and best pairing practices. Both members contribute meaningfully to the application.
* 2: The team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* 1: The team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.