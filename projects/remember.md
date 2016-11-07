---
title: remEMBER
tags: ember, localStorage, javascript
---

### Project Goals

Create a notepad-like app in Ember with full CRUD functionality.  

Developers will not have commit rights to the master branch. All changes must be made through pull requests that will be reviewed by instructors and merged into master when approved.

### Requirements to Merge PR

One of the primary goals of this project is to master work flow using small, concise pull requests. Each PR should follow the following guidelines.

* While working on feature A, create a new branch called `feature-a`
* When ready to merge to master, submit a PR for feature A
* There should be no excessive code NOT related to feature A in said PR.  
* Feature A will be merged into master
* Start a branch `feature-b` from master to continue working on the next issue.

Often, you'll be waiting for feature-A to be merged in but will want to continue working on feature-B. The process for that looks like this:  

* Feature B depends on the work you did for feature A.
* The PR for feature A has not been merged in, but you want to continue to make progress
* Create a new branch `wip-feature-b`, **branched from `feature-a`**.
* Work on feature B
* Wait for feature A to be merged into master
* Upon successful merge, create a new branch called `feature-b` **branched from master**.
* The `feature-b` branch will now have feature A's code since it was merged into master.
* Use `git cherry-pick <commitSHA>` ([docs](https://git-scm.com/docs/git-cherry-pick)) to pull in **ONLY** the commits you made in `wip-feature-b` that apply to the feature B situation
* Submit a PR fr feature B with the `feature-b` branch


### PR Template
(**Note**: This will generate automatically when you open a new PR )

```
## Purpose

_Describe the problem or feature in addition to a link to the issues. Delete any content that doesn't apply._

## Approach

_How does this change address the problem?_

### Learning

_Describe the research stage._

_Links to blog posts, patterns, libraries or add-ons used to solve this problem._

#### Blog Posts

### Open Questions and Pre-Merge TODOs

- [ ] Use Github checklists. When solved, check the box and explain the answer.

### Test coverage

_Briefly describe what tests you have written and why._

### Merge Dependencies and Related Work

_Link to merge dependency issues or PRs._

### Follow-up tasks

- [Issue #2 (Example)](https://github.com/flexyford/pull-request/issues)

### Screenshots

#### Before

#### After
```




### Issues

#### 1. See All Reminders

When the user visits the root of the application (e.g. the `"/"` URL), they should see a list of all of the reminders on the page.  

  * Each reminder should have a class of `.spec-reminder-item`.
  * There is a failing test set up in `tests/acceptance/reminder-list-test.js`.

**Hot Tip**: If you put "Closes #1" (assuming the issue is marked `#1`) in the pull request, your commit, or anywhere in the body of your PR, it will automatically close this issue when it successfully merged into master.

____

#### 2. See An Individual Reminder

When the user clicks on one of the reminders on the page, they are taken to a `Reminder` route (e.g. `"/1"`, if the id of the reminder is `1`). The title of the reminder object should be displayed.

So, what needs to happen here?  
* You'll need a `Reminder` route in addition to the `Reminders` route.
* It should be nested under the `Reminders` route.
* The user should still see all of the reminders from your previous feature. The specific reminder they are looking at now should be rendered in the outlet of the `reminders.hbs` template.
* There should be some CSS for the `.active` class.

![](http://g.recordit.co/bWm36UCXsA.gif)

There is a failing test set up in `tests/acceptance/reminder-list-test.js`.

____

#### 3. Create a New note

At the bottom of the `reminders.hbs` template, there is a button that routes the user to `/new` where users can create a new reminder.  

* The new reminder should have inputs for the title, date, and notes.
* The new reminder should have a button for submitting the new note.
* Pressing the button, should submit reminder to the database and have it shown in the Reminders list.

**Hot Tip**: There are no tests set up for this user story. So, you'll have to write an acceptance test.  

____

#### 4. Don't display notes if there are no notes.  

Update reminder component to have a conditional that will only display notes if notes exist.  

____

#### 5. Editing A Note

When viewing an existing reminder. The user can click on an "Edit" button where they can modify the title, notes, or date of the reminder.

* When editing a note, there is a "Save" button that commits the changes to the server.  
* When the user hits the save button, they are returned to the original individual note.

____

#### 6. Refactor New Reminder Form  

In Issue #3, we introduced a `new-reminder-form` component that has a lot of code hard coded into it. Let's refactor it into a component that we just call `reminder-form` that we could use for both editing reminders and creating new reminder.

Some research points:  
* [Ember Best Practice: Stop Bubbling and Use Closure Actions](https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions)
* [Closure Actions in Ember](https://emberway.io/route-closure-actions-in-ember-js-d0a7a37a5d1b#.ko5ueszgy)  

____

#### 7. Revert an Unsaved Reminder

User can revert an unsaved reminder to its previous state mid-edit.  

* When actively editing a reminder, if the reminder has unsaved changes, the user will see a "Revert" button.
* When clicked it will automatically rollback the attributes of the reminder to its original, clean state.

**Pro tip**: If you're doing something that seems hard, maybe you should check the Ember Data API docs?

____

#### 8. Visual Cues on Unsaved Reminders

User sees visual cue that reminder has not been saved.

* When a reminder has changes that have not been saved to the database/server, the user should see some kind of visual indication in the sidebar of the application.  

____

#### 9. Remove Reminders

User can remove/delete a reminder.

* Users should be able to remove a reminder from either the list of reminders or from an individual reminder's page.
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

* Sorting happens in the sidebare list of reminders
* This state should be stored in a query param  

____


### Rubric/Evaluation

Project success will be based primarily on pull-request quality, and secondarily on the level of project completion.

##### Pull Request Quality  

**4** - All pull requests are thoroughly written. All sections of each pull request have been consciously documented, and the amount of code being reviewed in each pull request is explicitly related to the given issue.   
**3** - Most pull requests are thoroughly written. Some sections are missing valuable information, and more than 1 pull request has changes to the code that do not apply to the given issue.   
**2** - Few pull requests have the necessary information to determine what is being reviewed. Submitted code is inconsistent with the target issue, student struggles to separate concerns.   
**1** - No to little effort made to create effective pull requests.   
**0** - What are pull requests.

##### Project Completion

**4** - All issues were successfully closed  
**3** - 10+ Issues were successfully closed  
**2** - 5-10 Issues were successfully closed  
**1** - 5 or fewer issues were closed  
**0** - No attempt was made to complete this project.   
