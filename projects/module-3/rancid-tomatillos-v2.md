---
title: Rancid Tomatillos
module: 3
tags: react, redux, testing, javascript, api
---

Have you ever watched a movie and said to yourself, "Ugh, I wish I could throw a rancid tomatillo at the screen!" Or maybe you loved the movie and you could really go for a nice, fresh tomatillo salsa to enjoy the moment. Well it's your lucky day. In this project, you'll build a movie rating site where a user can login and rate the movies they loved or hated.

## Learning Goals

| Phase One | Phase Two|
|-------|-----|
| - Create their first react app          | - Write an endpoint to a server          |
| - Write asynchronous  JS to interact with a server           | - Use React Router to create a multi-page user experience         |
| - Test the application by testing UI, spying on prop methods, and waiting for asynchrnously-rendered UI           |          |
| - Set up routes to dynamic content (click a button, url changes)          |          |

* Reinforce React fundamentals
* Reinforce using React Router to create a multi-page user experience
* Reinforce component and asynchronous JS testing
* Work with and navigate a shared, persistent API using GET, POST, and DELETE requests
* Implement Redux as the app's place to store shared state
* Test Redux functions

## Iterations

### Iteration 0 - Day-1 Deliverables

Create a group Slack channel and include your instructors in the channel:
  * Layouts/Wireframes sketches of your user interface
  * Group DTR
  * Project management tool (GitHub Projects, Trello, etc.) - be sure this is public so your instructors can view it
  * PR template your group agrees to follow for every PR submitted ([here are some instructions from GitHub on how to create this](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository))

After you send us this information, we'll give you your user's name, email, and password.

### Iteration 1 - User Info, API Intro, and Movies

You will be assigned a user for your pair. Each user has a name, email, and password that you will use throughout the project. This is your team's user!

At this point, get your head around the API's endpoints via the documentation below. Try them out in Postman - you don't need an API key for this! See what you can get from all the endpoints available.

For your app, create a homepage where the visitor can see all of the movies in the database with their average ratings. When on this page, the url's path will be `/` (ex: in development, the url will look something like: `http://localhost:3000/`).

### Iteration 2 - User Login

Create a separate login page where your user can login. When a user navigates to this page, the URL's path should be `/login` (ex: in development, the url will be `http://localhost:3000/login`).

Ultimately, you'll need to obtain the user's unique ID value to make requests later. Logging in the user using the POST `/login` route documented below will give you that ID value.

It probably seems weird to POST to `/login` to login a user, and this endpoint isn't even creating anything! Using a POST verb for logging in is a common convention because we need to send sensitive information like passwords in the body of the login request, and a POST lets us do that. Again, nothing is created in the DB for logging in - you are doing this to retrieve user information (the ID) to use while the user is logged in.

After logging in, the user knows they are logged in and they are taken back to the homepage.

A user should be able to logout, and they are taken to the homepage. The app should show that no one is logged in.

At this point, you should have your testing suite up and going. Get tests running, and test your Login workflow as it stands now. Yes, your tests might change, but that's ok and expected.

<section class="note">
We've mentioned url paths a few times so far. Applications typically handle keeping the url and UI in sync via some sort of [Router](https://frontend.turing.io/lessons/module-3/react-router-v5.html). We will implement more formal routing down the line, and you're welcome to look into it now if you'd like; but if not, think of how you can update the app's url and conditionally render the content you need to. 

If you want to try implementing a router, [React Router](https://reacttraining.com/react-router/web/api/BrowserRouter) is a good choice. 

Check out this [article](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#Deeper_dive) to learn more about URL anatomy. 

</section>

<!-- 
  Is it worth having them mess with URLs at all so far, or only implement Router for the solo iterations?
-->

### Iteration 3 - Movie Show Page

Create a dynamic route for a "show page" for each movie (the show page for a movie with an id of 5 would be at a url path of `/movies/5`, for instance). A show page is a app page that shows only one particular item. In this case, the show page is for a particular movie. This page should show all information available about the movie.

### Iteration 4 - Show and Add Ratings

A user should be able to see their own movie ratings only when they are _logged in_ to the app. Otherwise, they should only see only the movie's average rating. Everywhere a movie is shown, including the movie's show page, the app should display the movie's average rating and also the user's rating for each movie that they have rated if they are logged in.

A user should be able to submit a rating for a movie. The rating must be an integer (whole number) between 1 and 10.

A user is limited to one rating per movie.

Again, revisit where you are with testing your application. Do you have multiple user pathways through the code and edge cases tested? Do not move forward with the next iteration until you have good coverage of existing features.

### Iteration 5 - Remove Ratings

The only way to change a rating is to delete the old rating and submit a new rating. Include functionality for the user to remove an existing rating they submitted and then be able to submit a new rating (effectively the user is editing their rating).

<!-- Part 2: -->

## Functionality to Add:
- Router
- Add two express routes:
  - favorites
  - comments
- Add extra functionality to filter by favorites and genres 
- Add extra functionality to comment on movies, and see the number of comments on the main page. 

## Part 2: Divide and Conquer

For the next part of the project, you'll continue working on the same codebase, but will be dividing and conquering a few separate features. All the following iterations are required, but not all are expected to be completed individually. Again, you'll be contrubuting to the same codebase, so your workflow will be especially important here. 

### Iteration 6 - Router (complete together)

If you haven't already, it's time to add in Router! Wrap the App in a `<BrowserRouter>` component. Use `<Route>` components to dynamically render the appropriate UI based on the current URL. 

Don't forget to replace all your `<a>` tags with [\<Link> components](https://reacttraining.com/react-router/web/api/Link).

Adding in Router is likely to break your tests. Make sure to update those to keep everything passing.

### Iteration 7 - Fork the Server (complete together)

You're going to be delivering some new features to your users, which will require updating the server's endpoints. To do this, you'll be making your own local development version of the API. 

Fork and clone down the [Rancid Tomatillos API](https://github.com/turingschool-examples/rancid-tomatillos-api). Only one group member should make the fork. Whoever makes it will add the other partner as a contributor. 

Update your React project so that it queries your new local copy of the API. 

### Iteration 8 - Divide and Conquer

Our users want more interactive features in the application, and we're going to give it to them. Each group member will take a different feature here:

#### Iteration 8a - Commenting

Users have been requesting the ability to comment on movies. The server is not currently set up to store and return comments, so we'll be modifying both sides of the application for this feature. 

**Front End**:
- Update the show page views for each movie. When a user goes to a movie's show page, they should see all comments that have been made on the movie, in addition to the information already viewable. Each comment should at least include the comment itself, as well as who posted it. 

- **If they are logged in**, they should be able to fill out a form and add a comment to the movie. Comments should be sent to the server, and therefore persist across page reloads. 

**Back End**:
- Add a new POST route to the server (`POST /movies/:movieId/comment`) that creates a new comment and adds it to `app.locals`. Each comment needs to have _at least_ an `id`, `author` and `comment` property. If the request is unsucessful (ie the client sends a malformed request), send back an appropriate and helpful error (ex: if a request is made without an `author` property, send back a 422 level response with a message like "Unable to process request: missing `author` property"). 

- Add a new GET route to the server (`GET /movies/:movieId/comments`) that GETs all existing comments for a given movie.  

### Iteration 8b - Favoriting and Filtering

Users have been wanting to keep track of their favorite movies. The server is not currently set up to store and return favorites, so we'll be modifying both sides of the application for this feature. 

**Front End**:
- Update the homepage so that users can favorite or unfavorite a movie by clicking an icon.

- Update the movie show page view so that users can favorite or unfavorite a movie by clicking an icon.

- Add a way to view only favorited movies from the homepage. When viewing favorites, the user should be taken to a new page (`/favorites`). If no movies are currently favorited, there should be some indication for the user to add favorites (dont just render an empty page!). 

**Back End**
- Add a new POST route to update a collection of favorited movies in `app.locals`. A valid POST request should _at least_ have an `id` property for the movie that's being favorited/unfavorited. If the request is unsuccessful (ie, if a malformed request is sent), send back a helpful response to the user. 

- Add a new GET route to get all currently favorited movies (these will be stored in app.locals).

### Extensions

* Once logged in, sort the user's movies by the date they rated the movie (the `created_at` info for a rating might help with this...)
* Whether or not a user is logged in, give the ability to sort the movies by release date and genre

Think of some others!

## The API

### Setup


There is no setup! You are not going to run an API locally for this project. The API was created by your instructors and it lives on Heroku. The API you'll be working with lets you make GET, POST, and DELETE requests.

### API Documentation

All API endpoints (also known as "routes") are prefixed with `https://rancid-tomatillos.herokuapp.com/api/v1`. Also, wherever you see a `:user_id` or `:rating_id` in the endpoint documentation, that would be replaced by the ID _value_ in your request, like `5`, for instance. Here are the endpoints available:

| Purpose | URL | Verb | Request Body | Sample Response (Happy Path) |
|---------|-----|------|--------------|------------------------------|
| Get all movies | `/movies` | GET | N/A | All movies in database with average rating: `{"movies": [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }, ...]}` |
| Get a single movie | `/movies/:movie_id` | GET | N/A | The movie corresponding to the id sent in the URL: `{"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }}` |
| Login a user | `/login` | POST | `{email: <String>, password: <String>}` | A user's login session information: `{user: {id: 1, name: "Alan", email: "alan@turing.io"}}` |
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

### Redux Architecture

* 1 - Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of class vs. functional.
* 2 - At least one component is not connected with Redux appropriately. Application state is mutated by more than just Redux. The Redux store is missing application data that it should be handling.
* 3 - Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary application data. All state changes are handled through Redux actions and reducers.
* 4 - All requirements from 3 met, and no duplication of data exists in the store. Data in the store remains flat (not nested).

### Testing

* 1 - A valid attempt to test this application was made, but there are obvious gaps with missing unit tests for Redux and React.  
* 2 - Nearly all unit tests are in place. React components are well tested with a diverse set of tests including but not limited to unit testing display of the component, event simulation tests, and unit tests for functions passed as props. There are tests in place for actions and reducers. No attempt to test async functionality was made.
* 3 - All Redux functionality is tested (actions and reducers), all components are unit tested in units and integration, and a valid attempt was made to mock async functionality.
* 4 - All async functionality is mocked. Asynchronous tests cover happy paths as well as multiple sad paths. All pieces of functionality have been tested and are passing and run efficiently. Evaluator has no recommendations for testing.

### Routing

* 1 - Application uses React Router, but does not render/use all routes according to spec. Application does not utilize built in React Router components and manipulates history instead.  UX is challenging and frustrating where multiple pages on the application are missing links to routes.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.  There are one or more issues with the UX and access to routes is either unclear or not full implemented on some pages.
* 3 - Application uses React Router to display appropriate components based on URL.  UX is clear and set up well so that user has access to previous routes.
* 4 - React Router components have been refactored for developer empathy and code quality is clean.  Application accounts for undefined routes. UX is excellent and set up well to have links to all routes on all pages.
