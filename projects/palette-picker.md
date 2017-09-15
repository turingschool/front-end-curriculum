---
title: Palette Picker
module: 4
---

## Abstract

There is a website out there called [Coolers](https://coolors.co/495867-577399-bdd5ea-f7f7ff-fe5f55){:target="_blank"} - and others like it are out there. They help you generate color palettes for websites or other design projects.

Your job is to recreate some of this site's functionality with your own backend and database. A user should be able to come to your site, generate a color palette, and save it for their own future projects.

## Wireframe

This is a general guide on what should be included in your site. You can completely change the look of your own website as long as you stay true to the project specifications and features.

![Palette Picker Wireframe](/assets/images/palette-picker-wireframe.png)


## Specifications

Your application should have the following functionality. A user should be able to:

* Generate a palette with **5 distinct colors**
  * You should be able to hold or "freeze" one color and generate a new palette while the frozen color remains the same (similar to the _Lock_ functionality on [Coolers](https://coolors.co/393d3f-fdfdff-c6c5b9-62929e-546a7b))
  * The colors should be randomly generated (do not use predefined lists of color palettes)
* Create a project folder as a place to save palettes
  * You should be able to create multiple folders
  * Folder names must be unique (you should not be able to create two folders with the same name)
  * A folder can hold many saved palettes (a one-to-many relationship)
  * The saved folder should persist in your backend database
* Save a generated palette to a project folder
  * The saved palette should appear in the folder as a link - when you click the link, the colors in the palette generator change to show the saved palette colors
  * The saved palette should persist in your backend database
* Delete a palette from a project folder, which removes it from the page and database
* Never need to refresh the page to see new information

In addition to the functional requirement, on a separate dedicated git branch, go through each line of the server file and put a comment on each line that explains what that line of code is doing. Be as explicit as you can.

## Tech Stack

**Backend:** build using Express, knex, and PostgreSQL. Server-side testing should be done using mocha, chai, and chai-http. There should be one client-side route (`'/'`), and other endpoints should be API endpoints (`'api/v1/...'`). Each API endpoint should respond with JSON-formatted data.

**Frontend:** build using vanilla JavaScript or **jQuery** (you cannot use React or other libraries for this project - we want to keep the client-side code as simple as possible to reduce complexity and focus on the backend).

## Extensions

* **15 Points** - Palette generation that isn't random and actually makes sense: If you look at the [HTML Color Codes site](http://htmlcolorcodes.com/color-picker/), they give some explanation about what colors make sense with other colors in a palette. Design your color generator so that the colors aren't picked completely at random, but they make a more cohesive, harmonious color palette.

* **10 Points** - Color modification: In addition to being able to lock a particular color (part of the base functionality), a user should be able to modify one of the colors in the palette (by entering in their own hex code, color name, or some kind of hue slider)


## Instructor Evaluation Points

The following set of points are distributed at the discretion of the instructor.

### Specification Adherence

* **50 points**: No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.
* **40 points**: There is one feature missing from the base expectations that makes the application feel incomplete or hard to use.
* **20 points**: There are two features missing from the base expectations that make the application feel incomplete or hard to use.

### User Interface

* **20 points** - The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* **15 points** - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* **7 points** - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* **0 points** - The application is confusing or difficult to use.

### Data Persistence with SQL Database

* **20 points** - The application persists data in a SQL database but with correct relationships between folders and URLs.
* **10 points** - The application persists data in a SQL database but with some incorrect relationships between folders and URLs.
* **0 points** - The application does not persist data in a SQL database.

### Testing

* **20 points** - Project has a running test suite that tests every server-side endpoint with many happy and sad path cases.
* **15 points** - Project has a running test suite that tests every server-side endpoint, but only has a couple sad path cases.
* **7 points** - Project has sporadic testing of some server-side endpoints. There are happy path tests, but there are is one or zero sad path cases.
* **0 points** - There is little or no evidence of testing in this application. Most or all of the tests in the test suite are failing.

### Commented Server File

* **10 points** - Each line of the server file (on a separate branch) is commented and explains the code using precise, correct terminology and specificity
* **5 points** - Most lines of the server file (on a separate branch) are commented, but the explanation of code does not display understanding of the underlying code
* **0 points** - Lines are sparsely commented in the server file (on a separate branch) and understanding of the code is clearly lacking

### JavaScript Style

* **20 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **15 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **10 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **5 points** - Your client-side application does not function or the application does not make use of `fetch` for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points** - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* **20 points** - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
* **15 points** - *Node modules have been committed to the repo*, which you don't want. The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* **5 points** - The developer makes a few, large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* **0 points** - The application was not checked into version control.

## Create one submission file for your project based on [this template](https://github.com/turingschool/front-end-submissions-public/blob/master/1705/mod-4/jet-fuel/submission-template.md) by copying it to a new file called YOURNAME-PARTNERSNAME.md in the same directory. Submit it as a PR to the front-end-submissions repo.

### Project is worth 160 points with 25 extra points possible

### To get a 3 on this project, you need to score 120 points or higher

### To get a 4 on this project, you need to score 140 points or higher