# 2DoBox Pivot

Do you remember that project Ideabox?

We thought they were pretty great, but, I think it's time to pivot those projects over to something we like to call 2DoBox.

You will be inheriting someone's previous IdeaBox and pivoting it over to 2DoBox. Your projects will utilize webpack and it's built in node server. You will also keep accessibility in mind as we will be grading you based on how accessible your application is. You will also implement selenium webdriver to test the DOM.

# Phase 1

### Adding a new ToDo

On the application’s main page, a user should:

See two text boxes for entering the “Title” and “Task” for a new TODO, and a “Save” button for committing that TODO.
When a user clicks “Save”:

A new TODO with the provided title and body should appear in the TODO list.
The text fields should be cleared and ready to accept a new TODO.
The page should not reload.
The TODO should be persisted. It should still be present upon reloading the page


### Deleting an existing TODO

When viewing the TODO list:

Each TODO in the list should have a link or button to “Delete” (or 𝗫).
Upon clicking “Delete”, the appropriate TODO should be removed from the list.
The page should not reload when an idea is deleted.
The TODO should be removed from localStorage. It should not re-appear on next page load.


### Editing an existing TODO

When a user clicks the title or task of a TODO in the list, that text should become an editable text field, pre-populated with the existing  TODO title or task.
The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
If the user reloads the page, their edits will be reflected.


# Phase 2

### Accessibility

Your web application should pass `aXe-core` tests and should be `tab index` accessible.

### Importance

Each  TODO should be given a level of importance. As a user I should be able to change the level of importance by up-voting or down-voting that specific  TODO. Each  TODO should start with a level of `Normal`.

Levels of Importance are as follows

1) Critical

2) High

3) Normal

4) Low

5) None

The change of importance should persist after a page refresh

### Bookmarking

There should be a `bookmark` button for each  TODO. As a user if I click the `bookmark` button I should see a visual change for the specific  TODO I've bookmarked.

If I refresh the page the book mark should persist.

# Phase 3

### Recent TODOs

The application should only show the ten most recent  TODOS.
The application should contain a button labeled “Show more TODO S…” which will load additional messages from the past.

### Filter by Importance

The application should allow users to filter the TODO list based off of importance. Your application should have 5 buttons corresponding to each level of importance (Critical, High, Normal, Low, and None). When one of the filter buttons is clicked the TODO list should only display TODOs with the selected importance.

### Character Counter

The application is able to count the number of characters inside of the input field in real time.

### Submit button disabled

The submit button should be disabled when there is not valid content in both input fields and if the input field character count exceeds 120 characters.


# Instructor Evaluation Points

## Specification Adherence

4 - The application meets all of the requirements listed above and implements one or more of the extensions.
3 - The application consists of one page with all of the major functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.
2 - The application is in a usable state, but is missing 1 or more of the features outline in the specification above.
1 - The application is missing 3 or more smaller features or 1 major feature essential to having a complete application.
0 - The application is unusable.

## User Interface

4 - The application is pleasant, logical, and easy to use. The application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality and the application stands on it own to be used by the instructor without guidance from the developer. The application is accessible and occimidates screen readers and tab indexing.

3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality. The application less than 3 aXe-core violations
2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
1 - The application is confusing or difficult to use.

## HTML Style

4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.
3: Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.
2: Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.
1: Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

## CSS/Sass Style

4: Application has exceptionally well-factored CSS/Sass with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.
3: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS/Sass is doing.
2: Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
1: Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS/Sass is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.

## JavaScript Style

4 - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There zero instances where an instructor would recommend taking a different approach.
3- Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
2 - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
1 - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
0 - Your client-side application does not function or the application does not make use of localStorage for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.

## Testing

4 - Project has a running test suite that exercises the application at multiple levels (feature and unit). The test suite covers almost all aspects of the application.
3 - Project has a running test suite that tests and multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of feature testing.
2 - Project has sporadic use of tests and multiple levels. The application contains numerous holes in testing and/or many features are untested.
1 - There is little or no evidence of testing in this application.

## Workflow

4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
1 - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
0 - The application was not checked into version control.

## Code Sanitation

The output from a code sanitizer (either JSHint or ESLint) shows…

4 - Zero complaints
3 - Five or fewer complaints
2 - Six to ten complaints
1 - More than ten complaints

## Design

4 - The application is visually appealing and shows thoughtful and effective use of typography, color, and layout. The application looks professional, with visuals enhancing the user’s experience. The evaluator has very few recommended changes.
3 - The application has a strong approach to layout and content hierarchy, but typography and color choices are lacking. The evaluator has several recommended changes to improvement.
2 - Layout, content hierarchy, typography, and color choices show effort, but the result is not effective. The evaluator recommends significant changes.
1 - Layout, content hierarchy, typography, and color choices actively detract from the user’s ability to use the application.
