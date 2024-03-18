---
title: Rancid Tomatillos
module: 3
tags: react,  testing, javascript, api
---

Have you ever watched a movie and said to yourself, "Ugh, I wish I could throw a rancid tomatillo at the screen!" Or maybe you loved the movie and you could really go for a nice, fresh tomatillo salsa to enjoy the moment. Well it's your lucky day. In this project, you'll build a movie rating site where a user can login and rate the movies they loved or hated.

## Learning Goals

* Solidify React fundamentals
* Solidify using React Router to create a multi-page user experience
* Solidify component and asynchronous JS testing
* Work with and navigate a shared, persistent API using GET, POST, and DELETE requests

## Iterations

<section class="note">

### Note
You are expected to test the functionality you write in each iteration. Don't save testing for the last minute!

</section>

### Iteration 0 - Day-1 Deliverables

Create a group Slack channel and include your instructors in the channel:
  * Layouts/Wireframes sketches of your user interface
  * Group DTR
  * Project management tool (GitHub Projects, Trello, etc.) - be sure this is public so your instructors can view it
  * PR template your group agrees to follow for every PR submitted ([here are some instructions from GitHub on how to create this](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository))

After you send us this information, we'll give you your user's name, email, and password.

### Iteration 1 - User Info, API Intro, and Movies

You will be assigned a user for your pair. Each user has a name, email, and password that you will use throughout the project. This is your team's user!

At this point, get your head around the API's endpoints via the documentation below. Try them out in [Postman](https://www.postman.com/) - you don't need an API key for this! See what you can get from all the endpoints available.

For your app, create a homepage where the visitor can see all of the movies in the database with their average ratings.

Make sure to add in error handling for any bad requests (non-2xx-level responses) that the server may give _throughout_ this project.

### Iteration 2 - User Login

Create a separate login page where your user can login. 

Ultimately, you'll need to obtain the user's unique ID value to make requests later. Logging in the user using the POST `/login` route documented below will give you that ID value. Don't forget about error handling! 

It probably seems weird to POST to `/login` to login a user, and this endpoint isn't even creating anything! Using a POST verb for logging in is a common convention because we need to send sensitive information like passwords in the body of the login request, and a POST lets us do that. Again, nothing is created in the DB for logging in - you are doing this to retrieve user information (the ID) to use while the user is logged in.

After logging in, the user knows they are logged in and they are taken back to the homepage.

A user should be able to logout, and they are taken to the homepage. The app should show that no one is logged in.

At this point, you should have your testing suite up and going. Get tests running, and test your Login workflow as it stands now. Yes, your tests might change, but that's ok and expected.


### Iteration 3 - Movie Show Page

Create a dynamic route for a "show page" for each movie. A show page is a app page that shows only one particular item. In this case, the show page is for a particular movie. This page should show all information available about the movie.

Don't forget to account for handling non-2xx-level responses from the server.

<!-- Week 2: -->

<section class="note">
### Weekend Deliverable

By Sunday evening at 5pm, please tag your instructors in one PR demonstrating at least one of the following:
- A new feature being added
- Tests being written

Do not wait on code review from us to merge these PRs in. We will get everyone code review by the start of next week. 
*Our GH usernames can be found in our slack profiles*

</section>

### Iteration 4 - Show and Add Ratings

A user should be able to see their own movie ratings only when they are _logged in_ to the app. Otherwise, they should only see only the movie's average rating. Everywhere a movie is shown, including the movie's show page, the app should display the movie's average rating and also the user's rating for each movie that they have rated if they are logged in.

A user should be able to submit a rating for a movie. The rating must be an integer (whole number) between 1 and 10.

A user is limited to one rating per movie.

Again, revisit where you are with testing your application. Do you have multiple user pathways through the code and edge cases tested? Do not move forward with the next iteration until you have good coverage of existing features.

### Iteration 5 - Remove Ratings

The only way to change a rating is to delete the old rating and submit a new rating. Include functionality for the user to remove an existing rating they submitted and then be able to submit a new rating (effectively the user is editing their rating).

Don't forget to account for handling non-2xx-level responses from the server.

### Iteration 6 - Router 

It's time to add in Router! So far the application has worked like a single page application. We have different views that are conditionally rendered, but we have to control the logic for when to render certain things. Furthermore, the URL never changes. We're going to be using [React Router](https://reacttraining.com/react-router/web/api/BrowserRouter) to conditionally render our views based on the URL's location. 

This iteration is all about refactoring. Use the table below to add in appropriate routes.

| View | URL Path  |
|:-----|:---------|
| Homepage, logged in or not (from iteration 1) | `/` |
| Login form (from iteration 2) | `/login` | 
| Movie show page (from iteration 3) | `/movies/:movieId`, where `movieId` is the `id` of the movie being displayed |


Adding in Router is likely to break your tests. Make sure to update those to keep everything passing.

<section class="note">

Check out this [article](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#Deeper_dive) to learn more about URL anatomy. 

</section>

## Part 2: New Features

For the next part of the project, you'll continue working on the same codebase, but will be each tackling a separate feature! YOU ARE STILL PARTNERS, though! All the following iterations are required, but not all are expected to be completed individually. Again, you'll be contributing to the same codebase, so your workflow will be especially important here. 

<section class="note">
If you're not through iteration 6 yet, that's fine. We would like everyone to take at least the last 2 days of the project (Monday and Tuesday of Week 3) to work on the solo iterations. 

After Sunday night, the solo iterations should be your priority regardless of how far your team is. Remember, the goal here is YOUR learning; we just want to make sure that everyone's getting some individual reps in.
</section>

### Iteration 7 - Make a microservice (complete together)

You'll be delivering some new features to your user. However, the current API is not set up to support them. So you're going to make a new one! 

You and your partner should set up a new express app to function as a [microservice](https://en.wikipedia.org/wiki/Microservices), or small application used as part of a bigger product. 

For this iteration, get a basic express app set up and pushed up to GitHub. Make sure each partner has push rights to repo. 

### Iteration 7 - Divvying up the user stories


Our users want more interactive features in the application, and we're going to give it to them. Each group member will take a different feature here.

To make each of these features, you'll utilize a microservice that you'll run locally. The server, along with its documentation, can be found [here](https://github.com/turingschool-examples/rancid-tomatillos-microservice)

#### Iteration 7a - Commenting

Users have been requesting the ability to comment on movies. The server is not currently set up to store and return comments, so we'll be modifying both sides of the application for this feature. 

**Front End**:
- Update the show page views for each movie. When a user goes to a movie's show page, they should see all comments that have been made on the movie, in addition to the information already viewable. Each comment should at least include the comment itself, as well as who posted it. 

- **If they are logged in**, they should be able to fill out a form and add a comment to the movie. Comments should be sent to the server, and therefore persist across page reloads. 

**Back End**:
- Add a new POST route to your new server that creates a new comment and adds it to `app.locals`. Each comment needs to have _at least_ an `id`, `author` and `comment` property. If the request is unsuccessful (ie the client sends a malformed request), send back an appropriate and helpful error (ex: if a request is made without an `author` property, send back a 422 level response with a message like "Unable to process request: missing `author` property"). 

- Add a new GET route to your new server that GETs all existing comments for a given movie.  

### Iteration 7b - Favoriting and Filtering

Users have been wanting to keep track of their favorite movies. The server is not currently set up to store and return favorites, so we'll be modifying both sides of the application for this feature. 

**Front End**:
- Update the homepage so that users can favorite or unfavorite a movie by clicking an icon.

- Update the movie show page view so that users can favorite or unfavorite a movie by clicking an icon.

- Add a way to view only favorited movies from the homepage. When viewing favorites, the user should be taken to a new page (`/favorites`). If no movies are currently favorited, there should be some indication for the user to add favorites (don't just render an empty page!). 

**Back End**
- Add a new POST route to update a collection of favorited movies in `app.locals`. A valid POST request should _at least_ have an `id` property for the movie that's being favorited/unfavorited. If the request is unsuccessful (ie, if a malformed request is sent), send back a helpful response to the user. 

- Add a new GET route to get all currently favorited movies (these will be stored in app.locals).

<!--
### Iteration 8c - Watch Again

Users have been wanting to keep track of the movies they've already seen. The server is not currently set up to store and return this information, so we'll be modifying both sides of the application for this feature. 

**Front End**:
- Update the homepage so that users can mark if they've watched a movie already by clicking an icon. They should be able to unmark the movie as watched if they clicked it by accident.

- Update the movie show page view so that users can mark a movie watched or unwatched a movie by clicking an icon.

- Add a way to view only already-watched movies from the homepage. When viewing watched movies, the user should be taken to a new page (`/watch-again`). If no movies have been marked as watched, there should be a message stating that the user hasn't marked any movies as watched (don't just render an empty page!). 

**Back End**
- Add a new POST route to update a collection of watched movies in `app.locals`. A valid POST request should _at least_ have an `id` property for the movie that's being marked watched/unwatched. If the request is unsuccessful (ie, if a malformed request is sent), send back a helpful response to the user. 

- Add a new GET route to get all currently watched movies (these will be stored in app.locals).

-->
### Extensions

* Once logged in, sort the user's movies by the date they rated the movie (the `created_at` info for a rating might help with this...)
* Whether or not a user is logged in, give the ability to sort the movies by release date and genre
* Add the ability to view a movie's trailer(s) from the movie's show page (check out the `/movies/:movie_id/videos` endpoint)

* [Deploy your app](https://blog.heroku.com/deploying-react-with-zero-configuration) to [Heroku](https://devcenter.heroku.com/categories/deployment)

Think of some others!

## The API

### Setup

There is no setup! You are not going to run an API locally to start this project. The API was created by your instructors and it lives on Heroku. The API you'll be working with lets you make GET, POST, and DELETE requests.

### API Documentation

All API endpoints (also known as "routes") are prefixed with `https://rancid-tomatillos.herokuapp.com/api/v2`. Also, wherever you see a `:user_id` or `:rating_id` in the endpoint documentation, that would be replaced by the ID _value_ in your request, like `5`, for instance. Here are the endpoints available:


| Purpose | URL | Verb | Request Body | Sample Response (Happy Path) |
|---------|-----|------|--------------|------------------------------|
| Get all movies | `/movies` | GET | N/A | All movies in database with average rating: `{"movies": [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }, ...]}` |
| Get a single movie | `/movies/:movie_id` | GET | N/A | The movie corresponding to the id sent in the URL: `{"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "Movie Tagline" }}` |
| Get a single movie's videos | `/movies/:movie_id/videos` | GET | N/A | An array of available videos corresponding to the movie whose id is in the URL; this may be an empty array: `[]` or `[id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]` |
| Login a user | `/login` | POST | `{email: <String>, password: <String>}` | A user's login session information: `{user: {id: 1, name: "Alan", email: "alan@turing.edu"}}` |
| Get all the ratings a user has submitted | `/users/:user_id/ratings` | GET | N/A | A user's ratings for all movies: `{"ratings": [{id: 1, user_id: 1, movie_id: 1, rating: 6, created_at: "someDate", updated_at: "someDate"},...]}` |
| Submit a new movie rating for a user | `/users/:user_id/ratings` | POST | `{ movie_id: <Integer>, rating: <Integer between 1 and 10> }` | The rating that was successfully created: `{rating: {user_id: 2, movie_id: 19, rating: 5}}` |
| Delete an existing user's rating for a movie | `/users/:user_id/ratings/:rating_id` | DELETE | N/A | 204 status code (NO CONTENT in response body) |

All resources are given a unique ID in the database. For instance, every user has an `id` property, like `1` or `5`. Similarly, every movie has a unique ID called `id`, and every rating has a unique ID called `id`. The IDs are used to reference each item (user, movie, or rating) uniquely. If you need to delete a rating, then you need to know which rating to delete, which is identified by its unique `id` value.

If you are sending information in the body of a request, you will need to set the request header of `Content-Type` to `application/json`.

<section class="note">
#### Note

The API might need to be reset a couple times throughout the project for various reasons, thereby destroying information your group might have saved to the database. Keep in mind your user's name, email, and password will remain the same, but their unique ID might change. Your user's saved reviews might be deleted from the API throughout the week, but it's ok!
</section>

<section class="note">
#### Related Note

Since the API might reset at anytime, this does not guarantee that any unique IDs for users, movies, or ratings will be the same over the lifetime of your project. So _do not hard code ID values into your application_. Just because you have one user and your user's unique ID is `id: 4` today, it could change to `id: 6` tomorrow. Just be sure to keep your app flexible to be able to handle any user.
</section>

----------------------------------------------------------

## Rubric

### Specification Adherence

* 1 - The application is missing multiple features outlined above and in its current state is non-functioning. Developer did minimal to no CSS for this project.
* 2 - The application is in a usable state, but is missing part of one or more of the features outlined above. There are one or more major bugs and the evaluator has multiple recommendations for design changes.
* 3 - The application completes all iterations above without error. Evaluator has minimal recommendations for design changes.
* 4 - The application completes all iterations above and implements one or more of the extensions.  The evaluator has no recommendations for design changes.

### Project Professionalism

* 1 - Either the README is incomplete, wireframes are not used, no project management system was utilized, or more than 10 linter errors are present. Git history does not show evolution of project with many large and inconsistent commits.
* 2 -  README has been updated but is missing group members, setup, tech used, application images, or etc.  Wireframes are included and a project management tool was started, but are not utilized throughout the entire project. Project has more than 5 linter errors. Project team makes large infrequent git commits.
* 3 - The codebase has less than 5 linter errors and README has been updated with all group members. Project utilized wireframes from the outset and updated them as changes were made. A project management tool was continuously used from the beginning of the project.  All git commits are atomic, made first to branches, and use descriptive and concise commit messages.
* 4 - Codebase has zero linter errors/warnings and README is well documented with images of different pages, setup, purpose of application, and group members. Project team uses a rebase workflow, taking advantage of GitHub issues to track work.

### React Architecture

* 1 - PropTypes are substantially unused. Project shows little understanding of React and significant refactoring is required including but not limited to component structure, knowing when to use class vs functional components, mutation of props, or etc.  Unnecessary data is being passed down to child components through props. File structure is not modular.
* 2 - PropType functionality is complete.  There are no unnecessary props being passed down to child components.  However, there are still methods that are being created inside of functional components instead of being passed down through props from a class component.  File structure is modular but API calls have not been broken out into a separate file.  
* 3 - React architecture is clean and organized.  Logic is kept out of return statements.  There are some issues with the asynchronous JS where the frontend is not matching with the backend.  There are multiple functions (including fetch calls) that are doing similar pieces of functionality that could continue to be refactored. Data fetched from API is not cleaned before being set to state.
* 4 - Functions including fetch calls have been refactored to be reusable for multiple queries.  Frontend data always matches the backend data.  Data fetched from API is run through a cleaning function (which lives in a separate file).  Implements excellent error handling if server is down or fetch fails.  This includes loading images as well as error messages on the frontend.

### Testing

* 1 - A valid attempt to test this application was made, but there are obvious gaps with missing unit tests for React.  
* 2 - Nearly all unit tests are in place. React components are well tested with a diverse set of tests including but not limited to unit testing display of the component, event simulation tests, and unit tests for functions passed as props. There are tests in place for actions and reducers. No attempt to test async functionality was made.
* 3 - All components are unit tested in units and integration, and a valid attempt was made to mock async functionality.
* 4 - All async functionality is mocked. Asynchronous tests cover happy paths as well as multiple sad paths. All pieces of functionality have been tested and are passing and run efficiently. Evaluator has no recommendations for testing.

### Routing

* 1 - Application uses React Router, but does not render/use all routes according to spec. Application does not utilize built in React Router components and manipulates history instead.  UX is challenging and frustrating where multiple pages on the application are missing links to routes.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.  There are one or more issues with the UX and access to routes is either unclear or not full implemented on some pages.
* 3 - Application uses React Router to display appropriate components based on URL.  UX is clear and set up well so that user has access to previous routes.
* 4 - React Router components have been refactored for developer empathy and code quality is clean.  Application accounts for undefined routes. UX is excellent and set up well to have links to all routes on all pages.


<!--
### Express

* 1 - No new routes are added to the locally hosted API. No data is being saved on the server.
* 2 - New routes are added, but no error handling is present (ex: hitting a route always returns a 200, even if the request is malformed). 
* 3 - New routes are added, and only return successful responses when the request is correctly formatted. Routes are structured in a proper RESTful fashion.
* 4 - New routes are added, and there is dynamic and meaningful error handling present.
-->
