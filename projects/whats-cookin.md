# What's Cookin'?

## Goals and Objectives

- Follow the specification below to make a working application
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Use object and array prototype methods to perform data manipulation
- Display information on the page while maintaining ability to test class properties and mehtods
- Create a user interface that is easy to use and displays information in a clear way

In this project, you will be creating a recipe tracking / meal planning application that allows users to view their favorite recipes and plan shopping trips around them. The idea is similar to sites like <a href="https://www.allrecipes.com/" target="\__blank">All Recipes</a> or <a href="https://cooking.nytimes.com/" target="\__blank"> New York Times Cooking</a>. Users should be able to view a list of recipes, favorite their own recipes, and choose recipes to cook, and make a shopping list based off of these chosen recipes.

Feel free to use the above sites as inspiration for your UI, but note that there is NO COMP provided for this project. Flex those design muscles!

## Requirements

### Initial Setup

For this project, you will use a <a href="https://github.com/turingschool-examples/whats-cookin-starter-kit" target="\__blank">starter-kit</a> repo. Follow the instructions in the README for forking the repo and getting it set up. Once you have it set up, follow the instructions to ensure everything is working correctly.

### Testing

Aside from the necessary tooling (`mocha` and `chai`), you will need to set up all testing for this project yourselves. If you ran `npm install` as per the set up instructions, you should have your testing framework and assertion library installed.

You are __expected__ to test:
- __All instance methods__
- __Any helper methods__ (things you stuck in scripts.js)

You are __not expected__ to test:
- DOM manipulation / DOM manipulating methods

### Data

The shape and structure of the data is outlined in the starter-kit repo. The data and values are all randomly generated -- don't read too much into why a certain user has certain data associated with them. A general overview of the data is:

```
users.js - a file with many users
recipes.js - a file with many recipes
ingredients.js - a file with many ingredients and their associated prices

Users will be associated with recipes, which will in turn be associated with ingredients, via IDs
```

## User Stories

### Users
A `User` holds on to all of a user's data. As a user, I should be able to:
  - Favorite recipes (add to / remove from the user's `favoriteRecipes`)
  - Decide to cook a recipe that week (add to my recipesToCook)
  - Filter my `favoriteRecipes` or `recipesToCook` by type
  - Search any of my saved recipes by name or ingredient

Favorites are meant to be recipes that one can easily find again. When a user decides to cook a recipe, they should be able to determine whether they have sufficient ingredients in their pantry (see Pantry user stories). If they do not, they should be able to see a list of what ingredients they need to buy, and how much it will cost. User should be able to do this for at least one recipe. Making a list of `recipesToCook` can be implemented at a later time.

### Recipes

Users should be able to view a list of recipes. Specifically:
- As a user, I should be able to filter recipes by type / tag
- As a user, I should be able to search recipes by ingredients

A recipe should hold on to all its information (provided in the data file). It should be able to:
- Get the cost of its ingredients
- Get its directions / instructions


### Pantries
Every User should have a pantry. A `Pantry` holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have.
As a user, I should be able to:
- Determine whether my pantry has enough ingredients to cook a given meal
- Determine the amount of ingredients still needed to cook a given meal, based on what's in my pantry
- Remove the ingredients used for a given meal from my pantry, once that meal has been cooked (only applicable if users have a list of `mealsToCook`; can be considered a stretch goal)

### A Note:
When you test a JavaScript class file, you need to use module.exports in your class file so the test can use the code - just like Mythical Creatures. However, in this project when you call that same class in the browser, the browser has no idea what module is. So your code crashes. The module object is something your tests know how to use, but the browser has no idea what it is. To fix this, you’ll want to include something like this in your class file (for each class file that you create):
```js
// Instead of:
module.exports = someClassName;

// You will need to use:
if (typeof module !== 'undefined') {
  module.exports = someClassName;
}
```
Where someClassName is the name of your class - like User. Read through this a few times - what does this conditional do? Pick it apart. Why do you need it in your code sometimes?

<section class="note">
The details outlined above are basic user stories. You may find it useful to create classes that relate to the stories (ex: would it be useful to have classes that hold on to multiple instances of a different class?), but are not specifically outlined above.
</section>

## MVP

The user stories outlined above should be used to create an outline of your class structure. It will be each group's responsibility to determine what MVP looks like. This should be noted in your class structure plan / project board, and submitted for review before you begin writing code.

## Timeline

Dates and deadlines to be aware of:

**Monday, October 12th** - Submit your project board, DTR, wireframe, and planned out class structure to instructors BEFORE beginning to write code!  
**Wednesday, October 21st** - Project due at 9PM.  
**Thursday, October 22nd** - Project evals.  

Submit projects <a href="https://docs.google.com/spreadsheets/u/1/d/1TbHvKMGjt-hJhJzP98_ED41utNE2Zk_wYeABXfVWrg4/edit?usp=sharing" target="\__blank">here</a> by 9PM, July 15th.

## Rubric

### Functional Expectations
* 4: Application fulfills all expectations of user stories, and has functionality that goes above and beyond an MVP.
* 3: Application demonstrates a fully functional MVP, and group members can articulate choices for prioritizing certain pieces of functionality.
* 2: Application is usable, but has some missing functionality and no clear MVP.
* 1: Application crashes during normal usage.

### Fundamental JavaScript & Style
* 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.
* 3: Class methods use array and object prototypes - `for` loops are not used in the application. Application shows strong effort towards organization, content, and refactoring.
* 2: Class methods use a mix of array and object prototypes and `for` loops. Application runs but the code has long methods, unnecessary or poorly named variables, and needs significant refactoring.
* 1: Application generates syntax error or crashes during execution.

### Test-Driven Development
* 4: Application is broken into components which are well tested in both isolation and integration using appropriate data. Test feature many sad paths for methods as well.
* 3: All classes and methods are tested. Application is well tested but does not balance isolation and integration tests, using only the data necessary to test the functionality. Tests use smaller, sample data files as input rather than the large, original data files.
* 2: Application makes some use of tests, but the coverage is insufficient given project requirements.
* 1: Application does not demonstrate strong use of TDD.

### Encapsulation / Breaking Logic into Components
* 4: Application is expertly divided into logical components each with a clear, single responsibility.
* 3: Application effectively breaks logical components apart, but breaks the principle of SRP.
* 2: Application shows some effort to break logic into components, but the divisions are inconsistent or unclear.
* 1: Application logic shows poor decomposition with too much logic mashed together.

### User Interface
* 4: The application is pleasant, logical, and easy to understand. There are no holes in functionality and the application stands on its own to be used by the instructor _without_ guidance from the developer.
* 3: The application has many strong displays/interactions, but a few holes in lesser-used displays.
* 2: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the users' needs.
* 1: The application is confusing or difficult to use.

### Workflow
* 4: The team effectively uses Git branches and pull requests for meaningful code review. The evolution of the project is evident through conversation done via code reviews and pull requests.
* 3: The team makes a series of small, atomic commits that document the evolution of their application. The team conducts a DTR (define the relationship) and utilizes GitHub issues and best pairing practices. Team members utilize a kanban-style project board (we recommend Github Project) and git branches.
* 2: The team makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. The team does not utilize a planning tool or equitable pairing practices. One or both members do not contribute meaningfully to the application.
* 1: The team committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
