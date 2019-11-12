# What's Cookin'?

## Goals and Objectives 

- Follow the specification below to make a working application
- Implement ES6 classes that communicate to eachother as needed
- Write modular, resuable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Use object and array prototype methods to perform data manipulation
- Display information on the page while maintaining ability to test class properties and mehtods 
- Create a user interface that is easy to use and displays information in a clear way

In this project, you will be creating a recipe tracking / meal planning application that allows users to view their favorite recipies and plan shopping trips around them. The idea is similar to sites like <a href="https://www.allrecipes.com/" target="\__blank">All Recipes</a> or <a href="https://cooking.nytimes.com/" target="\__blank"> New York Times Cooking</a>. Users should be able to view a list of recipies, favorite their own recipies, and choose recipies to cook, and make a shopping list based off of these chosen recipies. 

Feel free to use the above sites as inspiration for your UI, but note that there is NO COMP provided for this project. Flex those design muscles!

## Requirements

### Initial Setup

For this project, you will use a <a href="#" target="\__blank">starter-kit</a> repo. Follow the unstructions in the README for forking the repo and getting it set up. Once you have it set up, follow the instructions to ensure everything is working correctly.

### Testing

Aside from the necessary tooling (`mocha` and `chai`), you will need to set up all testing for this project yourselves. If you ran `npm install` as per the set up instructions, you should have your testing framework and assertion library installed. 

You are __expected__ to test:
- __All instance methods__
- __All class methods__ (including any helper methods)

You are __not expected__ to test:
- DOM manipulation / DOM manipulating methods

### Data 

The shape and structure of the data is outlined in the starter-kit repo. The data and values are all randomly generated -- don't read too much into why a certain user has certain data associated with them. A general overview of the data is:

```
users.js - a file with many users 
recipies.js - a file with many recipies 
ingredients.js - a file with many ingredients and their associated prices 

Users will be associated with recipies, which will in turn be associated with ingredients, via IDs
```

## Project Iterations

### Iteration 1 

At the most basic level, the app should allow users to view recipies. This iteration should be focused on this behavior.

#### Classes

In this phase, your app should _at least_ have the following classes:

__RecipieRepository__ class

- A `RecipieRepository` holds on to all the recipies that are viewable 
- It should be able to take in a collection of recipies
- It should have methods to:
  - Get a recipie given a recipie's ID
  - Filter recipies by type / tag
  - Search recipies by ingredients / name
 
__Recipie__ class


- A `Recipie` holds on to one recipie's information
- It should be able to take in its information
- It should have methods to:
  - Get the cost of its ingredients 
  - Get its directions / instructions 

### Iteration 2

Let's get some users in the application. We'll be using the data in `users.js` for this. 

For now, when we load the page, __a random user should be loaded__. We should see their name, and have a way to view their favorite meals and the ones they've chosen to cook.

#### Classes

__User__ class

- A `User` holds on to all of a user's data
- It should have parameters to take in user data and a user's ID
- It should have methods to:
  - Determine a user's data given their ID
  - Favorite recipies (add to / remove from the user's favoriteRecipies)
  - Decide to cook a recipie that week (add to their recipiesToCook)
  - Remove a recipies from their recipiesToCook 
  - Filter their favorite or toCook recpipies by type 
  - Search their recipies by name or ingredient 

### Iteration 3

So far we can view and filter recipies, and our users can favorite / choose to cook recipies. Lets build out the meal planning side of the app. 

Here we'll make a `Pantry`, where users can hold on to the ingredients they've got in the kitchen 

#### Classes

__Pantry__ 

- A `Pantry` holds on to all the ingredients its owner has stocked, and the amount of each ingredient
- It should be associated with its owner
- It should have methods to:
  - Determine whether it has enough ingredients to cook a given meal 
  - Return the amount of ingredients still needed to cook a given meal 
  - Remove the correct amount of its ingredients for a meal, once that meal has been cooked

<section class="note">The classes outlined above are minimal suggestions. You may find it helpful to use others -- feel free if so!</section>
