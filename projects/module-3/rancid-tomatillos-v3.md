---
title: Rancid Tomatillos
module: 3
tags: react,  testing, javascript, api, cypress
---

This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor is it IMDB. It's R A N C I D  T O M A T I L L O S. Very different!

## Learning Goals

* Gain competency with React fundamentals
* Test React components & asynchronous JS
* Practice refactoring
* Create a multi-page UX using Router

## Iterations

We've broken this project down into iterations. Please be sure to read them closely with your project partner!

### Iteration 0 - Initial Deliverables

**Turn in all deliverables via [this google sheet](https://docs.google.com/spreadsheets/d/1YDI4TAFdkOhpcFatdGONR7QtlDZVOpsvJVimtX77M6I/edit?usp=sharing).**

By the end of the day, Day 1:
* The link to your repo (hint: use [Create-React-App](https://frontend.turing.edu/lessons/module-3/react-2-the-how.html) to start your project!)
* The link to your DTR
* The link to your Project Board with at least a few user stories entered  

By the end of the day, Day 2:
* A link to 2-3 pieces of design inspiration that you will aim to mimic
* A wireframe of your app - this can include sketches of your user interface, or a link to your Canva, InVision, etc.
* An initial plan for your component architecture. You should answer the following questions:
  - What components do you envision needing?
  - Where will data be stored?
  - How will information be passed around?  

---

### Iteration 1 - Displaying movies

For this first iteration, we will use mock data to display the movies (we will later refactor our project to consume an API). The purpose of using mock data instead of querying the actual API is to allow us to focus purely on React for now.

In your project repo, create a new file in the src folder. Copy in the data found in [this gist](https://gist.github.com/letakeane/d11a3c3c9f3fbcaf105c0b214f5fb754).

For now, you will import this information into your `App.js` file and use this as your source of information!  
```js
import movieData from 'put your filepath here'
```

**User Story**  
- As a user, when I visit the app, all movies should be displayed

**Suggested completion date**  
- End of Day 2

---

### Iteration 2 - Displaying an individual movie

For the second iteration, we'll use [`conditional rendering`](https://react.dev/learn/conditional-rendering) to show a single movie's details.

In the future, when we use the actual API to get individual movie details, the information will change. For now, you can use some default "dummy" data, and know that it will eventually change and be dynamic:

```js
{"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}
```

**OR:** You can also simply use the existing movie data that you already have access to ("id", "title", "poster_path", "backdrop_path", "release_date"), knowing that eventually you will add more information ("overview", "genres", "budget", "revenue", "runtime", and "tagline").

**User Story**  
- As a user, I can click a movie, and see that movie's details
- When a movie's details are displayed, none of the other movies will be visible; it should just be that movie's details (header/footer/etc can still be visible, of course!)
- When a movie's details are displayed, the user should have a way to return to the main view of all movies

**Suggested completion date**  
- End of Week 1

---

### Iteration 3 - Network Requests & Async JS

For the third iteration, we'll refactor our application to use actual data from the database (information is below) instead of our mocked `movieData` file. 

We'll also add some type checking with [PropTypes](https://frontend.turing.edu/lessons/module-3/proptypes.html)

Also, please complete the First Weekend Deliverables (found below)

<section class="note">
### API setup and documentation

There is no setup! You are not going to run an API locally to start this project. The API was created by your instructors and it lives on Heroku. The API you'll be working with lets you make GET, POST, and DELETE requests.

#### API Documentation

All API endpoints (also known as "routes") are prefixed with `https://rancid-tomatillos.herokuapp.com/api/v2`. Also, wherever you see a `:user_id` or `:rating_id` in the endpoint documentation, that would be replaced by the ID _value_ in your request, like `5`, for instance. Here are the endpoints available:


| Purpose | URL | Verb | Request Body | Sample Response (Happy Path) |
|---------|-----|------|--------------|------------------------------|
| Get all movies | `/movies` | GET | N/A | All movies in database with average rating: `{"movies": [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", average_rating: 6 }, ...]}` |
| Get a single movie | `/movies/:movie_id` | GET | N/A | The movie corresponding to the id sent in the URL: `{"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "Movie Tagline" }}` |
| Get a single movie's videos | `/movies/:movie_id/videos` | GET | N/A | An array of available videos corresponding to the movie whose id is in the URL; this may be an empty array: `[]` or `[id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]` |
| Login a user | `/login` | POST | `{email: <String>, password: <String>}` | A user's login session information: `{user: {id: 1, name: "Alan", email: "alan@turing.edu"}}` |
| Get all the ratings a user has submitted | `/users/:user_id/ratings` | GET | N/A | A user's ratings for all movies: `{"ratings": [{id: 1, user_id: 1, movie_id: 1, rating: 6, created_at: "someDate", updated_at: "someDate"},...]}` |
| Submit a new movie rating for a user | `/users/:user_id/ratings` | POST | `{ movie_id: <Integer>, rating: <Integer between 1 and 10> }` | The rating that was successfully created: `{rating: {user_id: 2, movie_id: 19, rating: 5}}` |
| Delete an existing user's rating for a movie | `/users/:user_id/ratings/:rating_id` | DELETE | N/A | 204 status code (NO CONTENT in response body) |

All resources are given a unique ID in the database. For instance, every user has an `id` property, like `1` or `5`. Similarly, every movie has a unique ID called `id`, and every rating has a unique ID called `id`. The IDs are used to reference each item (user, movie, or rating) uniquely. If you need to delete a rating, then you need to know which rating to delete, which is identified by its unique `id` value.

If you are sending information in the body of a request, you will need to set the request header of `Content-Type` to `application/json`.

Please note: the server occasionally returns a 500 error. You will need to build in FE functionality to handle this possibility.

Also note: there are some endpoints here that you will not be using! Read the documentation carefully to find out which routes are useful to you.
</section>

**User Story**  
- When the server returns a 500 error, the user will see proper error handling
- No other new features required
- We're mostly refactoring in this iteration!

**Suggested completion date**  
- End of first weekend

**Suggested testing progress by end of iteration**  
- Project board has been updated so functionality is described as user stories
- Each user story includes thorough acceptance criteria
- All components with that receive props utilize type checking with PropTypes

---

### FIRST WEEKEND DELIVERABLES

By the time class begins in Week 2, these items should be completed:  
1. Iterations 0-3
2. Project board has been updated so functionality is described as user stories
3. Each user story includes thorough acceptance criteria
4. Instructors have been DM'd a link to one PR (see below)

<section class="call-to-action">
### PR review

By Sunday evening at 5pm, please send a PR link to your instructors demonstrating at least one of the following:
- A feature being refactored
- Tests being written
- React Fundamentals

DO NOT wait on code review from us to merge these PRs in. We will conduct code reviews in the first few days of Week 2.

**Our GH usernames can be found in our Slack profiles**

The point of these code reviews is to get you familiar with common code review practices, and to model the level of detail with which we expect you to be reviewing each others' PRs!
</section>

---

### Iteration 4 - Refactoring with Router, Testing with Cypress

In the fourth iteration, we will be testing with Cypress, and refactoring our application to use [Router](https://reactrouter.com/en/main) instead of conditional rendering to change the view!

For Cypress, add the following tests to start:

- As a user, when I load the application, I can see the title of the application
- As a user, when I load the application, I can see a collection of movies.
- As a user, when I click on a movie, I'm shown additional details about that movie
- Any other user stories you might have already should also be tested.

So far the application has worked like a single page application. We have different views that are conditionally rendered, but we have to control the logic for when to render certain things. Furthermore, the URL never changes.

To crete a better UX, we're going to be using [React Router](https://reactrouter.com/en/main) to conditionally render our views based on the URL.

This iteration is all about refactoring. Use the table below to add in appropriate routes.

| View | URL Path  |
|:-----|:---------|
| Homepage, logged in or not (from iteration 1) | `/` |
| Movie show page (from iteration 3) | `/:movieId`, where `movieId` is the `id` of the movie being displayed |

As you refactor, continue to rely on your test suite to ensure that no functionality is being lost/destroyed as you add in Router!

Look into the [Cypress assertions](https://docs.cypress.io/api/commands/location.html#Syntax) which allow us to view our current URL pathname and add those into your tests!

<section class="note">

Check out this [article](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#Deeper_dive) to learn more about URL anatomy.

</section>

**User Story**  
- When a user clicks on a movie and the details page is rendered, the URL updates to reflect that movie's unique ID as well
- The user can click the browser forward & back arrows to navigate

**Suggested completion date**  
- End of Thursday in Week 2

**Suggested testing progress by end of iteration**  
- Application views and user flows are fully tested
- Asynchronous functions are stubbed

---

### Iteration 5 - Choose your own adventure

The final days (last weekend and beginning of Week 3) of this project are designed to give you agency over your learning goals! As a team, consider your learning goals:  
* What will best serve your team- and individual- learning goals?
* What areas/concepts are still unclear?
* What areas/concepts fit in with your professional goals?

Here is a list of concepts (including some push-yourself learning goals):  
- React
- Router
- Asynchronous JS
- Testing
  - Ensure that every view is tested (including all possible renders when dealing with conditional rendering)
  - Ensure that all possible user flows are tested (happy and sad paths)
  - Ensure all asynchronous JS is properly stubbed
- Express (server-side JavaScript)
- Deployment

Decide as a team what to focus on. Also, please complete the Week 2 Deliverables (found below)


<section class="note">
### A word of warning!

Be realistic. Exercise compassion. Create the safety to be vulnerable with each other!

If one partner wants to push ahead to new shiny fancy concepts, but another partner is still feeling shaky with React fundamentals, it is more important and better for everyone involved to use the remaining project time to solidify those React fundamentals!

**BEWARE THE LURE OF SHINY NEW THINGS!**

It is _far_ more important to be very, very solid on the project stated learning goals (React, testing).
</section>

Once you have decided on the area to continue learning, decide on a new feature or refactor.

<section class="call-to-action">
### WEEK 2 DELIVERABLES
On Friday of Week 2, send a specific outline of features/work/goals to your instructors in the group DM. Please include user stories, too. Do not begin work until you get the go-ahead from an instructor. (We may help you make your goal more specific or achievable.)

Here are some ideas:
* **More React and/or Router practice:**
  - Add a search/filtering functionality for movies
* **More testing practice:**
  - Supplement your Cypress tests with a non-trivial amount of unit tests and integration tests by using the React Testing Library 
  - Implement 2-3 new concepts from the Cypress library that have not been covered in lessons (ie Command)
* **Push yourself** (extra learning if every member of the team feels SUPER CONFIDENT in everything React, Router, and testing)**:**
  - Create your own Express microservice to store user ratings for movies; build FE functionality to use and display that service
  - Create your own Express microservice to store user favorites; build FE functionality to use and display that service
  - Create your own Express microservice to store which movies the user has watched; build FE functionality to use and display that service

You are welcome to come up with your own ideas, too.
</section>

**Suggested completion date**  
- All code for the project should be completed by end of Sunday of Week 3 (so you can leave Monday for polishing the project and finishing the README, not building out features!)

---

### PROJECT DUE DATE: 9pm Monday of Week 3

If you have created a back-end repo and/or deployed your front-end, then add links to the deployed app or additional repos in your front-end README.

<section class="note">
### Project Evals

In Mod 3, instructors grade your projects asynchronously, providing thorough notes and feedback, which you will receive before our project evals. During project evals, you will begin building skills of talking about your code and answering technical interview questions through the context of the project.
</section>

---

## Rubric

For the rubric sections below, you will be scored as **Wow, Yes or Not Yet** depending on whether you have demonstrated competency in that area. Each section lists examples of what types of things we may be looking for as demonstrations of competency. Just as there are many ways to approach code, there are many many ways to demonstrate competency. These are just some examples.

### React Architecture

On track can look like:
  - A consistent, modular file structure is used
  - Create reusable and modular functional components by incorporating props and considering component composition
  - hooks are implemented to manage and update state
  - Pass functions as props to effectively organize the application
  - `return` statements are as readable as possible, only communicating what will be displayed
  - Frontend state matches the backend data
  - Props are protected via Proptypes or type-checking
  - Only necessary data is passed as props
  - state is pure and immutable
  - Code is DRY, reusable, and empathetic 

WOW can look like:
  - Deploy your React app (to GitHub Pages or similar service)
  - Application handles errors if the server is down or if a fetch call fails and displays information to the user
  - Application shows loading state
  - Only necessary data is used in the application when retrieving data from a server

### Testing

On track can look like:
  - All application views are tested
  - All user flows are tested
  - Happy path async functionality is stubbed and tested

Wow Option: Sad path async functionality is tested

### Routing

On track can look like:
  - Application uses Router to display appropriate components based on URL
  - The user has access to previous routes via the back button
  - A 404 page handles unknown routes

Wow option: Code was refactored to remove unnecessary or old code artifacts


### Project Professionalism
You will not receive a score for professionalism, but you should be meeting these expectations:
* Each group member contributes equitably to the project. Failure to participate can result in an individual failing the project, even if the project is otherwise passing
* README concisely communicates the team's individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability
* README links to all user GitHub profiles and any applicable repos/deployed sites
* README includes a gif of the application
* Git commits are atomic, with concise and precise descriptions of the change made
* PRs have full, consistent descriptions and are formatted using a PR template
* Team members do consistent, thorough, meaningful code reviews of PRs, which prompt updates and changes made to that PR before merging
* Evolution of the project (decisions made, etc) are fully and clearly documented in the git history and PRs
* When the project is run locally, the terminal shows no errors or warnings
