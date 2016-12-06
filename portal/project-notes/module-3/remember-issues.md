---
layout: page
module: 3
---

## Issues given to students for the remEMBER project.

### Issues

#### 1. See All Reminders

When the user visits the root of the application (e.g. the `"/"` URL), they should see a list of all of the reminders on the page.  

  * Each reminder should have a class of `.spec-reminder-item`.
  * There is a failing test set up in `tests/acceptance/reminder-list-test.js`.

**Hot Tip**: If you put "Closes #1" (assuming the issue is marked `#1`) in the pull request, your commit, or anywhere in the body of your PR, it will automatically close this issue when it successfully merged into master.

____
#### 1.5 Adjust Root to Redirect to '/reminders'

When the user visits the root of the application, they should be redirected to `'/reminders'` and should see a list of all reminders on the page.

**Hot Tip**: This will make your previous test fail (if you had it passing). Make the necessary changes in the test.

____
#### 2. See An Individual Reminder

When the user clicks on one of the reminders on the page, they are taken to an individual reminders route (ie: '/reminders/1', if the id of the reminder is `1`). The title of the reminder object should be displayed.

So, what needs to happen here?  

* You'll need a `reminder` route in addition to the `reminders` route.
* It should be nested inside the `reminders` route.
* The user should still see all of the reminders from your previous feature. The specific reminder they are looking at now should be rendered in the outlet of the `reminders.hbs` template.
* There should be some CSS for the `.active` class.  

![](http://g.recordit.co/bWm36UCXsA.gif)

There is a failing test set up in `tests/acceptance/reminder-list-test.js` to get you started - this test needs to be rewritten to reflect the route you are expecting to visit.

____  

#### 3. Create A New note

At the bottom of the `reminders.hbs` template, there should be a button that routes the user to `reminders/new` where users can create a new reminder.  

* The new reminder should have inputs for the title, date, and notes.
* The new reminder should have a button for submitting the new note.
* Pressing the button, should submit reminder to the database and have it shown in the reminders list.

**Hot Tip**: There are no tests set up for this user story. So, you'll have to write an acceptance test.  

____

#### 4. Don't display notes if there are no notes.  

Update reminder component to have a conditional that will only display notes if notes exist.  

____

#### 5. Editing A Note

When viewing an existing reminder, the user can click on an "Edit" button where they can modify the title, notes, or date of the reminder.

* When editing a note, there is a "Save" button that commits the changes to the server.  
* When the user hits the save button, they are returned to the original individual note.

Things to keep in mind:  
* What should your route look like to edit a reminder?  

____

#### 6. Refactor New Reminder Form  

In Issue #3, we introduced a `/reminders/new` route that has a lot of code hard coded into it that looks a lot like our edit form. Let's refactor it into a component that we just call `reminder-form` that we could use for both editing reminders and creating new reminder.

Some research points:  
* [Ember Best Practice: Stop Bubbling and Use Closure Actions](https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions)  
* [Closure Actions in Ember](https://emberway.io/route-closure-actions-in-ember-js-d0a7a37a5d1b#.ko5ueszgy)  

____

#### 7. Revert an Unsaved Reminder

User can revert an unsaved reminder to its previous state mid-edit.  

* When actively editing a reminder, if the reminder has unsaved changes, the user will see a button to rollback unsaved changes.  
* When clicked it will automatically rollback the attributes of the reminder to its original, clean state.  

**Pro tip**: If you're doing something that seems hard, maybe you should check the Ember Data API docs?  

____

#### 8. Visual Cues on Unsaved Reminders

User sees visual cue that reminder has not been saved.

* When a reminder has changes that have not been saved to the database/server, the user should see some kind of visual indication in the sidebar of the application on that particular note.  

____

#### 9. Remove Reminders

User can remove/delete a reminder.

* Users should be able to remove a reminder from both the list of reminders or from an individual reminder's page.
* If they do it from the individual reminder's page, then the application should reroute them back to the `/reminders` route.

____

#### 10. Styling: Master Detail View

Users should see the list of reminders along the left side and the individual new note on the right.

**NOTE:** This is a wireframe, not a comp. You can choose to style it however you'd like. You may choose to prioritize other issues over this one for now.

![remember layout](https://cloud.githubusercontent.com/assets/251000/19357783/547c496e-9130-11e6-9cb2-3c3a71815a5f.jpg)

____

#### 11. Filter Reminders

User can filter reminder by title keyword.  

* At the top of the list of reminders, there should be a search field.
* If the search field is empty, the list should show all of the reminders.
* If the search field has content, then the list should only show the reminders that have a title matching the search term.
* This should be case insensitive and should use the [HTML5 search input](https://css-tricks.com/webkit-html5-search-inputs/).  

____

#### 12. Sort Reminders

User can sort reminders chronologically in either ascending or descending order.

* Sorting happens in the sidebar list of reminders
* This state should be stored in a query param  

____
