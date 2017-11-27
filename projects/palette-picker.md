---
title: Palette Picker
module: 4
---

## Abstract

There is a website out there called [Coolors](https://coolors.co/495867-577399-bdd5ea-f7f7ff-fe5f55){:target="_blank"} - and others like it are out there. They help you generate color palettes for websites or other design projects.

Your job is to recreate some of this site's functionality with your own backend and database. A user should be able to come to your site, generate a color palette, and save it for their own future projects.

## Wireframe

This is a general guide on what should be included in your site. You can completely change the look of your own website as long as you stay true to the project specifications and features.

Please remember that wireframes are not to be copied exactly as-is. Take liberties and build a UI that *makes sense*, and is intuitive for your users. We highly encourage you to have a non-Turing/non-developer friend try to use your application. Pay attention to when they get confused or struggle trying to use your app, and fix your UX accordingly.

![Palette Picker Wireframe](/assets/images/palette-picker-wireframe.png)

## Design Research

As part of your submission template, we'd like you to do some design research. Pick a single UI element off of [Dribbble](https://dribbble.com) (or any other site you find to be really pretty) that you like and use it to inspire the rest of your design. For example: 

I really like the subtle drop-shadows on these [notifications](https://dribbble.com/shots/1467222-Notifications), and the way the notification icons vary slightly in color by being slightly lighter than the rest of the background. I will incorporate these types of drop-shadows on elements in my project and play with this particular use of color.

## Specifications

Your application should have the following functionality. A user should be able to:

* Generate a palette with **5 distinct colors**
  * You should be able to hold or "freeze" one color and generate a new palette while the frozen color remains the same (similar to the _Lock_ functionality on [Coolors](https://coolors.co/393d3f-fdfdff-c6c5b9-62929e-546a7b))
  * The colors should be randomly generated (do not use predefined lists of color palettes)
* Create a project folder as a place to save palettes
  * You should be able to create multiple folders
  * Folder names must be unique (you should not be able to create two folders with the same name)
  * A folder can hold many saved palettes (a one-to-many relationship)
  * The saved folder should persist in your backend database
* Save a generated palette to a project folder
  * The saved palette should appear in the folder with the name of the palette (specified by the user) and the saved palette colors
  * When you click on the name or colors in the saved palette, the palette generator should show the colors of that saved palette
  * The saved palette should persist in your backend database
* Delete a palette from a project folder, which removes it from the page and database
* Never need to refresh the page to see new information

In addition to the functional requirement, on a separate dedicated git branch, go through each line of the server file and put a comment on each line that explains what that line of code is doing. Be as explicit as you can.

## Tech Stack

**Backend:** build using Express, knex, and PostgreSQL. Server-side testing should be done using mocha, chai, and chai-http. There should be one client-side route (`'/'`), and other endpoints should be API endpoints (`'api/v1/...'`). Each API endpoint should respond with JSON-formatted data.

**Frontend:** build using vanilla JavaScript or **jQuery** (you cannot use React or other libraries for this project - we want to keep the client-side code as simple as possible to reduce complexity and focus on the backend).

**Project File Structure:** Here is how we would like you to structure your project files.

```
palette-picker
|__ .gitignore
|__ server.js
|__ public
|  |__ index.html
|  |__ css
|  |  |__ styles.css
|  |  |__ other-stylesheets.css
|  |__ js
|  |  |__ scripts.js
|  |  |__ other-scripts.js
```

## Extensions

* **15 Points** - Palette generation that isn't random and actually makes sense: If you look at the [HTML Color Codes site](http://htmlcolorcodes.com/color-picker/), they give some explanation about what colors make sense with other colors in a palette. Design your color generator so that the colors aren't picked completely at random, but they make a more cohesive, harmonious color palette.
* **10 Points** - Color modification: In addition to being able to lock a particular color (part of the base functionality), a user should be able to modify one of the colors in the palette (by entering in their own hex code, color name, or some kind of hue slider)

## Timeline

In order to ensure you're on pace for finishing the project successfully and on-time, you should try to be meeting each of these checkpoints:

**EOD Monday:** Express server is set up and serving static assets; front-end is in place (though likely not polished); You have thought about what API endpoints you need and perhaps you've implemented one or two using data from `app.locals`

**EOD Tuesday:** You have solidified what API endpoints you need and have implemented them using data from `app.locals`; You have put more thought into your front-end and design and it is starting to shape up and become more polished

**EOD Wednesday:** You have set up your postgres database and refactored most of your endpoints that were using `app.locals` to communicate with the database instead; You have had someone attempt to use your application and received feedback on UI/UX

**EOD Thursday:** You have finished refactoring your endpoints to communicate with your postgres database; You've setup your test database and written your happy/sad path tests for each of your endpoints; You've polished your front-end

**Noon Friday:** You have successfully deployed your application to Heroku; You have commented out your server file line-by-line; You have filled out your submission template



## Instructor Evaluation Points

The following set of points are distributed at the discretion of the instructor.

### Specification Adherence

* **50 points** - No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use. Data persists on refresh using a knex/postgreSQL database.
* **40 points** - There is one feature missing from the base expectations that makes the application feel incomplete or hard to use.
* **20 points** - There are two features missing from the base expectations that make the application feel incomplete or hard to use.

### User Interface

* **20 points** - User interface is intuitive and the instructor can easily use it on their own without guidance. Styling is consistent and call-to-action elements are obvious. The application provides the user with relevant feedback based on interactions.  
* **15 points** - User interface is mostly intuitive, though the instructor might need some guidance on interactions. Styling is mostly consistent, but could use some clean up. Application may be missing some relevant feedback that would help guide the user. 
* **7 points** - User interface demonstrates some effort, but is not intuitive and the instructor needs help figuring out how to use the application. Styling has several inconsistencies and it's sometimes unclear what elements a user can interact with. Application lacks useful feedback for the user.  
* **0 points** - User interface does not demonstrate effort and is unintuitive. The instructor cannot use the application on their own. Styling is inconsistent and user interactions are unclear. Application lacks useful feedback for the user.

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

* **30 points** - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* **20 points** - Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* **10 points** - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* **5 points** - Your client-side application does not function or the application does not make use of `fetch` for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* **0 points** - There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### Workflow

* **20 points** - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.
* **15 points** - Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.
* **10 points** - Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.
* **5 points**  - Developer(s) make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

## Create one submission file for your project based on [this template](https://github.com/turingschool/front-end-submissions-public/blob/master/1705/mod-4/palette-picker/submission-template.md) by copying it to a new file called YOURNAME.md in the same directory. Submit it as a PR to the front-end-submissions repo.

### Project is worth 150 points with 25 extra points possible

### To get a 3 on this project, you need to score 110 points or higher

### To get a 4 on this project, you need to score 130 points or higher