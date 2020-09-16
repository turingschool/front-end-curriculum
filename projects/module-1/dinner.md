---
title: What's For Dinner?
---

## Overview

What's for dinner? The ultimate question. You will be building an app that helps users choose a recipe and put together meals. 

This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum. Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but any other code base should not be referenced. Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

<img class="medium-large" src="./assets/dinner/dinner_0.png" alt="iteration 0 comp">

## Learning Goals

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events

## Setup

- Fork [this project](https://github.com/turingschool-examples/whats-for-dinner) to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Read this README thoroughly, then begin working!

## Workflow
Make sure you're utilizing git best practices and commiting frequently. 

### Iteration 0: Build Out Comp
- Images are below
- An assets directory is provided in the repo, and colors are provided in the CSS file.

<img class="medium-large" src="./assets/dinner/dinner_0.png" alt="iteration 0 comp">
<hr/>

### Iteration 1: Add Random Side, Main and Dessert Functionality

- When a user selects a dish option (don't worry about "Entire Meal" yet) and then clicks the "Let's Cook!" button, the user sees a random dish from the list of possible dishes for that category
- When the dish name appears, the cookpot icon disappears

<img class="medium-large" src="./assets/dinner/dinner_1.png" alt="iteration 1 comp">
<hr/>


### Iteration 2: Entire Meal Funcitonality

- When the user selects the "Entire Meal" option and then clicks the "Let's Cook!" button, the user sees a message with a side, main and dessert option from the lists of possible dishes for all categories
- When the meal items appear, the cookpot icon disappears

<img class="medium-large" src="./assets/dinner/dinner_2.png" alt="iteration 2 and 3 comp">
<hr/>


### Iteration 3: Error Handling and Clear Button

- The user can click a clear button, which clears the page of any message. User should only be able to click the clear button if a food is visible. When the clear button is clicked and the food is removed, the image of the cookpot should re-appear.
- User should not be able to click the "Let's Cook" button for a recipe unless they have selected an option.

_Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!_

<img class="medium-large" src="./assets/dinner/dinner_2.png" alt="iteration 2 and 3 comp">
<hr/>


### Iteration 4: Adding a Recipe

- The user can click an "Add a Recipe" button, which will display a form to add a new recipe at the bottom of the page
- The user can add a type and a name, click the "Add New" recipe and that recipe will be added to the appropriate list
- When a new recipe is added, that recipe should automatically display instead of the cookpot icon

_NOTE: None of this needs to persist on page refresh_

<img class="medium-large" src="./assets/dinner/dinner_4.png" alt="iteration 4 comp">
<hr/>

### Iteration 5: BONUS ROUND (Ideas for Extensions)

_NOTE: This round is not required, and you should absolutely not be working on this unless your UI is solid and you are 100% sure that all of Iterations 1-4 are fully functional and bug free._

- Add a loading animation when a user clicks the "Let's Cook" button to simulate searching for a recipe. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this.
- When a user tries to add to a recipe type that does not exist, we see an error message, OR the new category gets added!
- Add the ability to delete a recipe (ie: when a recipe shows up, show a button that says "I don't like this recipe" (or something similar), and remove it from the array so that it will not show up any more (does not need to persist on page load). Make sure to alert the user in some way that the recipe has been removed. 
- Make sure that the same recipe (single item or entire meal) won't be generated more than once. Make sure to add error handling for when a user "runs out of recipes." (does not need to persist on page load)
- Additional functionality for entire meal -> add the ability to swap out meal items. Note: Make sure your design for this matches the theme
- CYOA Extension! Make sure you run your idea by instructors
<hr/>

### Food Lists (Feel free to use your own instead!)

#### Sides

Miso Glazed Carrots  
Coleslaw  
Garden Salad  
Crispy Potatoes  
Sweet Potato Tots  
Coconut Rice  
Caeser Salad  
Shrimp Summer Rolls  
Garlic Butter Mushrooms  
Hush Puppies  

#### Mains
Spaghetti and Meatballs  
Pineapple Chicken  
Shakshuka  
Thai Yellow Curry  
Bibimbap  
Chicken Parmesean  
Butternut Squash Soup  
BBQ Chicken Burgers  
Ramen  
Empanadas  
Chicken Fried Rice  
Sheet Pan Fajitas  
Margarita Pizza  

#### Desserts
Apple Pie  
Lemon Meringue Pie  
Black Forest Cake  
Banana Bread  
Peach Cobbler  
Cheesecake  
Funfetti Cake  
Baklava  
Flan  
Macarons  
Macaroons  
Chocolate Cupcakes  
Pavlova  
Pumpkin Pie  
Key Lime Pie  
Tart Tatin  
Croissants  
Eclairs  

