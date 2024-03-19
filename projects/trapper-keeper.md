# Trapper Keeper

We need a way to keep track of all of the projects that we're working on. What better way to do so then using a
Trapper Keeper?! For this project you'll be building a simplified version of [Google Keep](https://keep.google.com).

The project will require you to put together a complex ui using react, redux, and react router. That frontend 
application will ping an api that you build using node and express.

![Trapper keeper with puppies on it](/assets/images/trapper-keeper-puppies.jpg)

## Learning Goals

* Continue to improve on building client-side applications using react, redux, and react router
* Understand how to build a dynamic form ui
* Understand how to build your own api using node and express

## Project Requirements

You will have full creative freedom on this project as long as your implementation meets the requirements listed below.

If you want to try to mimic Google's Material Design, you can find inspiration, color schemes, and download icons [here](https://material.io/) 

### Frontend

The frontend will be built using react, redux, and react router.

  * When a user visits `/`. They should see a list of all of their notes.
  * When a user visits `/new-note` They should be taken to a page with a dynamic form.
  * Inside of this note form:
    * The user can add a title to the note.
    * The user can dynamically add an indefinite number of list items for that note.
    * The user can dynamically remove any or all of those list items (one at a time).
    * The user can delete the note (similar to the archiving in the gif below), and when they delete the note, they should be returned back to the home page.
    * The user can mark list items as completed. When they do so, the completed list item should move to the bottom of the form.
  * When a user visits `/notes/:id` it should take you to a note form for the note with the id in the params.
    * The note form should prepopulate with all of the information from that note.
    * ie. If that note has 5 list items, those 5 list items should be populated in the form.
    * The user can edit the note exactly as specified above under `/new-note`.
  * A form should be saved when the user clicks the save button.

This workflow should look similar to this recording from Google Keep:

![Google Keep Workflow](/assets/images/google-keep.gif)

Note that you don't need all of the bells and whistles from the recording. *Only*, the features specified above.

### Backend

The backend will be built using node and express. It'll use jest and supertest for testing.

Your should have the following endpoints:

  * `get /notes` - Responds with all of the notes stored on the server.
  * `post /notes` - Used for both creating new notes. Responds with the newly created note.
  * `put/patch /notes/:id` - Used to update the note that has the id provided via the params. 
    * Responds with the successfully updated note.
  * `get /notes/:id` - Responds with the note that has the id provided via the params.
  * `delete /notes/:id` - Deletes the note that has the id provided via the params.
    * Responds with a status code and message that the note was successfully deleted.

#### Extensions
  * Add a button to the card which will change the card's color. [Google Keep](https://keep.google.com) also has that functionality.
  * Add drag and drop functionality that allows you to change the order of notes on the page.
  * Nix the save button
    * Instead, a note should be saved on both keypress and blur of the form.
    * This is similar to how both [Google Forms](https://docs.google.com/forms) and [Google Keep](https://keep.google.com) save forms/notes.
    * hint: You won't want to make a request every time a user presses a key, so you may need to implement a queue based on a timer.

## Rubric

### Specification Adherence

* 4 - All requirements from 3 are met. The application completes all requirements above and implements one or
  more of the extensions. And the evaluator has no recommendations for design changes.
* 3 - The application completes all requirements above without error. Evaluator has minimal
  recommendations for design changes.
* 2 - The application is in a usable state, but is missing part of one or more of the 
  features outlined above. Evaluator has multiple recommendations for design
  changes.
* 1 - The application is missing multiple features outlined above. Developer did
  minimal to no CSS for this project.
  
  [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)

### Project Professionalism

* 4 - All requirements from 3 met, codebase has zero linter errors/warnings and
  readme contains screenshots of application. Project team uses a rebase
  workflow, taking advantage of github issues to track work. Project shows a
  complete mastery of React architecture.
* 3 - PropType functionality is complete, the codebase has less than 5 linter
  errors, README has been updated with all group members. Project utilized
  wireframes from the outset. All git commits are atomic, made first to
  branches, and use descriptive and concise commit messages. Project
  demonstrates a fundamental understanding of React architecture.
* 2 - Project is missing PropTypes, README updates, wireframes, or has more
  than 5 linter errors. Project team makes large infrequent git commits.
  Project shows a basic understanding of React.
* 1 - PropTypes are substantially unused, README is incomplete, wireframes were
  not used, or more than 10 linter errors are present. Git history does not show
  evolution of project, with many large and inconsistent commits. Project shows
  little understanding of React and significant refactoring is required.

### Testing

* 4 - All requirements from 3 met, all async functionality is tested, tests are
  passing and run efficiently (using mount only when appropriate).
* 3 - All Redux functionality is tested (actions, reducers, mapStateToProps, mapDispatchToProps), all
  components are unit tested, and a valid attempt was made to test any async
  functionality.
* 2 - Nearly all unit tests for Redux and React are in place. No attempt to test
  async functionality was made.
* 1 - A valid attempt to test this application was made, but there are obvious
  gaps, with missing unit tests for Redux and React.

### Redux Architecture

* 4 - All requirements from 3 met, and no duplication of data exists in the
  store. Data in the store remains flat (not nested).
* 3 - Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary application data. All state changes are handled through Redux actions and reducers.
* 2 - At least one component is not connected with Redux appropriately. Application state is mutated by more than just Redux. The Redux store is missing application data that it should be handling.
* 1 - Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of stateful vs. statelessness.

### Routing

* 4 - All requirements from 3 met, and always chooses the correct component for
  rendering, as well as the correct Route API. Application should account for
  undefined routes.
* 3 - Application uses React Router to display appropriate components based on URL.
* 2 - Application uses React Router, but does not display the appropriate components upon navigating.
* 1 - Application uses React Router, but does not render/use all routes.

### Server side

* 4 - All requirements from 3 met, and all endpoints are tested (both happy and sad paths).
* 3 - Application hosts all required endpoints, and an effort has been made to test them.
* 2 - Application hosts all required endpoints, but none are tested.
* 1 - Application does not host all required endpoints.
