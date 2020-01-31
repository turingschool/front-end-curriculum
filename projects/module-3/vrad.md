---
title: VRAD - Vacation Rentals Around Denver
module: 3
tags: react, javascript, api
---

## Introduction

For this project, we are going to work on developing some muscle memory building out React components. At this point you've built at least one basic React app in the past. Now is the time to leverage that and add some complexity.  

For this project, we will be utilizing an [external API](https://github.com/turingschool/VRAD-API) that houses data about different areas of Denver and associated rentals available in the those areas.

## Learning Goals

1. Write **squeaky clean**, well refactored code using ES6 syntax.  
2. Make informed design decisions to create a user-friendly application.  
3. Keep state based components to a minimum and leverage more functional components.  
4. Use a modular architecture for your application file structure.  
5. Think deeply about React Lifecycle Methods.
6. Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
7. Become familiar with routing and how to handle dynamic routes.
8. Use `propTypes` for every component receiving props.  
9. Write tests for React components and some asynchronous functionality.

## Prep Work

You will be expected to use a modular structure for this application. Before you begin coding, read [this article](https://kentcdodds.com/blog/colocation) which discusses why modular architecture is a good idea.   

Using a "Modular Structure" means that all of the files associated with a given component should be nested within the same folder.  

For example:  
```
src/
  components/
    Login/
      Login.js
      Login.scss
      Login.test.js
    Card/
      Card.js
      Card.scss
      Card.test.js
```
<section class="note">
### Notes  

- Although there are many resources out there for making API calls, you are asked to exclusively use the native [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API for this project.
- For this project, you will need to clone down the [VRAD API](https://github.com/turingschool/VRAD-API) and run it locally on your machine. More detailed instructions can be found in the README.
</section>

<section class="call-to-action">
### Resources for Project
- [VRAD Listings API](https://github.com/turingschool/VRAD-API)
- [Images for Listings](https://github.com/turingschool/VRAD-Assets)
</section>

## Specifications
<section class="answer">
### Iteration O: Wireframing

- Utilize a wireframing tool of your choice to plan the design of your application before you start building.
  * Sketch
  * Draw.io
  * Balsamiq
  * Adobe XD CC
  * InVision

#### Deliverables
Please DM your instructors the following by the end of the first day:
  * Wireframes
  * DTR between you & project partner
  * Project management tool (GH Projects, trello, etc.)
</section>

<section class="answer">
### Iteration 1: Landing Page

- When the app starts up on the root route, `/`, the user should be introduced to a welcome form asking for the user's name, their email, and a purpose/goal for using this listing app.  You can list the options however you'd like, but there should be at least three categories for  `business`, `vacation`, & `other`.
- An error message should appear if one of the inputs has not been filled out.
- All inputs must be filled in order for the user to sign in.
- NOTE: The users name/email don't need to match anything, this is basically a "fake" login but will give you practice making modular components!
</section>

<section class="answer">
### Iteration 2: The Areas

- Upon signing in, the user should be redirected to `/areas` where they should see a breakdown of the various areas of Denver.
- Each area should have all pertinent information listed, including:
  * shortname of the area (ex. `RiNo`)
  * name of the area (ex. `River North`)
  * a description of the area
- There should a button on each card to view `listings` for a specific area
  - NOTE: This button doesn't need to have any functionality in this iteration. Details on what the button does will be outlined in future iterations!
- The user's profile data should be displayed with their name, a short greeting dependent on their purpose for using the listing app
- A `Sign Out` button should also be available, logging the user out and redirecting them back to the root route, `/`.
</section>

<section class="answer">
### Iteration 3: The Listings

- When a user clicks on the `View Listings`, the user should then be redirected to `/areas/:area_id/listings/`.
  - NOTE: Be careful on how to structure this route. The parts of the route that include are dynamic (ex: `/:area_id`) should not actually include a colon - it is simply to show that this part of the route should change. An example of what a completed route would look like could be: `/areas/66`

- From this route, the users should see a list of cards for each listing.

- The data for each card should include:
  - Name
  - A single picture for the listing
  - A button that, when clicked, shows more details for the listing at a new route

- When a user clicks a specific listing, they should be redirected to `/areas/:area_id/listings/:listing_id` and get a more detailed breakdown of a specific listing. This card/view should include:
  - Address
  - Number of Bedrooms
  - Number of Bathrooms
  - Cost per Night
  - All pictures of the listing
  - Unique features of the listing
  - A button to "Favorite" the listing

- **Note:** User should still see their profile info and be able to log out.
</section>

<section class="answer">
### Iteration 4: User's Favorites
- There should be a button on each card to save it to Favorites.  
- There should also be a button that when clicked, links the user to the `/favorites` route and displays only the favorited cards.
- This button should also show the count of favorited items in the button text.
- Users should be able to unfavorite a card both on the relevant route (`/areas/:area_id/:listing_id`) as well as the `/favorites` route.  
- If there are no favorites, there should be a message indicating that there are no favorites.
</section>

<section class="answer">
### Extensions

1. Incorporate an interactive map into your app!
- Implement a map that shows where all of the listings are located when a user goes to the `/areas/:area_id` route for a specific listing area.
- When a user clicks on a listing marker on the map, you should display an info box that includes:
  - An image of the listing
  - A link to the specific listing pages
2. Have your user and favorites data persist in `localStorage`. Think about when you want to store it and when it should be removed.
</section>

----------------------------------------------------------

## Rubric

### Specification Adherence

* 4 - The application completes all iterations above and implements one or more of the extensions.  The evaluator has no recommendations for design changes.
* 3 - The application completes all iterations above without error. Evaluator has minimal recommendations for design changes.
* 2 - The application is in a usable state, but is missing part of one or more of the features outlined above. There are one or more major bugs and the evaluator has multiple recommendations for design changes.
* 1 - The application is missing multiple features outlined above and in it's current state is non-functioning. Developer did minimal to no CSS for this project.

### Project Professionalism

* 4 - Codebase has zero linter errors/warnings and README is well documented with images of different pages, setup, purpose of application, and group members. Project team uses a rebase workflow, taking advantage of GitHub issues to track work.
* 3 - The codebase has less than 5 linter errors and README has been updated with all group members. Project utilized wireframes from the outset and updated them as changes were made. A project management tool was continuously used from the beginning of the project.  All git commits are atomic, made first to branches, and use descriptive and concise commit messages.
* 2 -  README has been updated but is missing group members, setup, tech used, application images, or etc.  Wireframes are included and a project management tool was started, but are not utilized throughout the entire project. Project has more than 5 linter errors. Project team makes large infrequent git commits.
* 1 - Either the README is incomplete, wireframes are not used, no project management system was utilized, or more than 10 linter errors are present. Git history does not show evolution of project with many large and inconsistent commits.


### React Architecture

* 4 - Functions including fetch calls have been refactored to be reusable for multiple queries.  Frontend data always matches the backend data.  Data fetched from API is run through a cleaning function (which lives in a separate file).  Implements excellent error handling if server is down or fetch fails.  This includes loading images as well as error messages on the frontend.
* 3 - React architecture is clean and organized.  Logic is kept out of return statements.  There are some issues with the asynchronous JS where the frontend is not matching with the backend.  There are multiple functions (including fetch calls) that are doing similar pieces of functionality that could continue to be refactored. Data fetched from API is not cleaned before being set to state.
* 2 - PropType functionality is complete.  There are no unnecessary props being passed down to child components.  However, there are still methods that are being created inside of functional components instead of being passed down through props from a class component.  File structure is modular but API calls have not been broken out into a separate file.  
* 1 - PropTypes are substantially unused. Project shows little understanding of React and significant refactoring is required including but not limited to component structure, knowing when to use class vs functional components, mutation of props, or etc.  Unnecessary data is being passed down to child components through props. File structure is not modular.


### Routing

* 4 - React Router components have been refactored for developer empathy and code quality is clean.  Application accounts for undefined routes. UX is excellent and set up well to have links to all routes on all pages.
* 3 - Application uses React Router to display appropriate components based on URL.  UX is clear and set up well so that user has access to previous routes.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.  There are one or more issues with the UX and access to routes is either unclear or not full implemented on some pages.
* 1 - Application uses React Router, but does not render/use all routes according to spec. Application does not utilize built in React Router components and manipulates history instead.  UX is challenging and frustrating where multiple pages on the application are missing links to routes.


### Testing

* 4 - All async functionality is tested, tests are passing and run efficiently (using mount only when appropriate).  Unit tests for snapshots and methods cover not only happy paths but also sad paths.  Evaluator has no recommendations for testing.
* 3 - Includes testing from levels 1 and 2, and a valid attempt to test asynchronous functionality has been made.  Asynchronous tests cover happy paths as well as multiple sad paths.
* 2 - Nearly all unit tests are in place. Components are well tested with a diverse set of tests including but not limited to snapshot tests, event simulation tests, and tests on class methods (including `componentDidMount`).  No attempt to test async functionality was made.
* 1 - There is little or no evidence of testing in the application.  There are some UI tests including snapshot tests, but major gaps in unit testing functionality.
