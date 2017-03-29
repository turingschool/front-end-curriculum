---
layout: page
module: 3
---
## Issues given to students for the remEMBER project.

### Issues
#### 1. See all reminders

When the user visits the root of the application (e.g. the `"/"` URL), they should see a title of your app with your group number (ie: remEMBER-1), and list of all of the reminders on the page.  

Hints:  
* Run the command `ember g route reminders`, which will generate a route in your `router.js`. Adjust this line so the path is the root directory  `'/'`.
* To pass the model to the template, add a model hook in `routes/index.js` that returns the reminders.
* Mirage will generate 5 "reminder" models for you.

* There is a failing test set up in `tests/acceptance/reminder-list-test.js`, you will need to add a unit test for the model. The ember CLI will also generate additional unit tests with boilerplate code. Make sure you are updating the unit tests with intentional assertions or removing unused files.  

**Hot Tip**: If you put "Closes #1" (assuming the issue is marked `#1`) in the pull request, your commit, or anywhere in the body of your PR, it will automatically close this issue when it successfully merged into master.

____
#### 2. Adjust root to redirect to '/reminders'

Client has changed their mind.  

When the user visits the root of the application, they should be redirected to `'/reminders'` and should see a list of all reminders on the page.  

Hints:
* Dig into the docs for notes on `beforeModel()`  
* Maybe look [here](https://guides.emberjs.com/v2.12.0/routing/redirection/)  
* Your model hook should no longer live in `routes/index.js`, and your `router.js` will need adjustments.  
* Keep in mind that the structure of your `router.js` represents the file structure of the entire app.

**Hot Tip**: This will make your previous test fail. Make the necessary changes in the test(s).

____
#### 3. See an individual reminder

The list of reminders should only display Titles.

When a user clicks on one of the existing titles, they are taken to an individual reminders route (ie: `'/reminders/1'`).  

Hints:
* Ember convention uses `:model_id` as the dynamic path, ie: `'/reminders/:reminder_id'`.
* You can find help [here](https://guides.emberjs.com/v2.12.0/routing/specifying-a-routes-model/#toc_dynamic-models)  
* Run `ember g route reminders/reminder`  
* The user should still see all of the reminders from your previous feature. The specific reminder they are looking at now should be rendered in the outlet of the `reminders.hbs` template.
* There should be some CSS for the `.active` class.  

**Hot Tip:** There is an existing acceptance test for this feature.

#### 4. Create a new reminder

At the bottom of the `reminders.hbs` template, there should be a button that routes the user to `reminders/new` where users can create a new reminder.  

* Start looking for help [here](https://guides.emberjs.com/v2.12.0/models/defining-models/)  
* The new reminder should have inputs for the title, date, and reminders.
* The new reminder should have a button for submitting the new reminder.
* Pressing the button should submit reminder to the database and have it display in the reminders list.
* You are not allowed to use a component for this issue.

**Hot Tip**: There are no tests set up for this user story, you are required to add an acceptance test and any additional tests you need before this PR will be merged in.  


____

#### 5. Display a message if there are no reminders  

Update reminders component to have a conditional that will only display reminders if reminders exist. If there are no reminders, users should see a message to add a new note with a link to the new note route.  

____

#### 6. Editing a reminder

When viewing an existing reminder, the user can click on an "Edit" button where they can modify the title, notes, or date of the reminder, with a "Save" button.  

In a previous issue you created a form to add a new reminder. This issue will require duplicating a lot of that code. Instead, refactor how your app is structured to use a `reminder-form` component to both add and edit a reminder.  

You will need to move some logic around to handle where your actions are fired, and how the form gets information if the fields need to be pre-populated.

Hints:
* Ember logic bubbles from the controller to the route.  
* Use `ember g component reminder-form` to generate your component.  
* You might need to adjust your file structure.  
* When the user hits the save button, they should be returned to that reminder's route.  

**Hot Tip** To edit a reminder you need to know which reminder you are talking about. Think about this when you are structuring your `router.js` file.  

* [Ember Best Practice: Stop Bubbling and Use Closure Actions](https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions)  
* [Closure Actions in Ember](https://emberway.io/route-closure-actions-in-ember-js-d0a7a37a5d1b#.ko5ueszgy)  

____

#### 7. Revert an Unsaved Reminder

User can revert an unsaved reminder to its previous state mid-edit.  

When actively editing a reminder, **if** the reminder has unsaved changes, the user will see a button to rollback unsaved changes.  

When clicked it will automatically rollback the attributes of the reminder to its original, clean state.  

Hints:
* Major Key: Look into `hasDirtyAttributes`.
* Ember dev tools are helpful here.  

____

#### 8. Visual cues on unsaved reminders

User sees visual cue that reminder has not been saved.

* When a reminder has changes that have not been saved to the database/server, the user should see some kind of visual indication in the sidebar of the application on that particular note.  

____

#### 9. Delete a reminder

User can remove/delete a reminder.

* Users should be able to remove a reminder from both the list of reminders or from an individual reminder's page.  
* If they do it from the individual reminder's page, then the application should reroute them back to the `/reminders` route.  

**Bonus** Implement a notification message that tells the user which reminder was deleted


#### 10. Extension: Filter reminders

User can filter reminder by title keyword.  

* At the top of the list of reminders, there should be an input field.  
* If the search field is empty, the list should show all of the reminders.  
* If the search field has content, then the list should only show the reminders that have a title that includes the search term(s).  
* This should be case insensitive and should use the [HTML5 search input](https://css-tricks.com/webkit-html5-search-inputs/).  

____

#### 11. Sort Reminders

User can sort reminders chronologically in either ascending or descending order by date or alphabet.

* Sorting happens in the sidebar list of reminders  
* This state should be stored in a query param  

____
