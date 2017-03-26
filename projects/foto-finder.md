---
title: Foto Finder
---

## Specification

With some jQuery lessons under your belt, it's time to try your hand at building a small application: a photo album called Foto Finder!

In it's simplest form, the application should have the following:

### Setup: File Structure

Before you start writing code for this project, set up your project directory as follows:

- Your project directory (called `foto-finder`)
- An HTML file called `index.html`, which will contain all of your HTML code.
- A CSS file called `styles.css`, which will contain all of your CSS including media queries.
- A JavaScript file called `scripts.js`, which will contain all of your JavaScript code.
- A directory called `photos` that will contain the image files that the user can save to the photo album page

Here is a visual representation of the file structure:

```
|-- foto-finder
   |-- index.html
   |-- styles.css
   |-- scripts.js
   |-- photos
      |-- photo1.jpg
      |-- photo2.jpg
      |-- photo3.jpg
```

It is up to you to gather images to put into your `photos` directory. These assets are not provided for you. In the example above, `photo1.jpq` is just a placeholder name to show you that your image files go inside the `photos` directory. The names of the image files can be whatever you want.

### Phase One

This phase is all about setting up the user inputs and general structure of the page. The page will not be very interactive in this phase.

- Two input fields for new photos to put in the album
  - One for the title of the photo
  - One for the caption of the photo
- One input field to upload the photo (hint: look at the different HTML input element type attributes and how you can use on of them to select a file from your computer)
- One "Add to Album" button for adding the photo to the album so you see it on the page
- A section for all of the photos in the album to live

### Phase Two

This phase builds on Phase 1 and gives some functionality to the page.

- When a user fills in the Title, Caption, selects an image file from the `photos` directory, and then clicks the "Add to Album", the photo should be added to the photo album.
- Each photo, when added to the album, is placed in a "card", and each photo card should display:
  - The photo
  - The title of the photo
  - The caption of the photo
  - A button to mark the photo as a "Favorite"
  - A button to "Remove" the photo from the album
- The application should be responsive and work equally well on desktop and mobile
- When the user clicks on the "Favorite" button, the photo card background turns (a different color), and the button text color changes
- When the user clicks on the "Remove" button, the photo should be removed from the page

Note: If you refresh the page, the photos disappear! This is OK. You do not need to worry about photo persistence on page refresh (we'll handle that in later projects).

### Phase Three

Let's improve the user experience in this phase.

- If the user does not have text in the Title **or** Caption input elements, **or** they have not selected a photo from the `photos` directory, then the "Add to Album" button should be disabled.
- If there are no photos in the album yet, then there should be an indication to the user to add photos, displayed in the empty photo section.
- The file selector should only allow image file types

### Extensions

**Sorting:** If a user marks a photo as a "Favorite", then that photo (an all other photos marked as favorites) should show at the top of the page before any other photos.

**Image Analysis:** Mathematically determine the most prominent color of the photos in the album, and change the background of the album section to that prominent color. The background color should be calculated every time a new photo is added to the album.

**Animations:** When a user removes a photo, the photos in the album shift almost instantly, which is a sharp, hard transition. Add a soft, brief animation that lets the remaining photos move smoothly.

**Zoom View:** When a user clicks on an image card, the application should pop up a large view of the image overlaid on the rest of the album. Once in zoom view, the user should be able to click something on the image (like an "X") to exit out of the zoom view and see all of the images in the album as before.

### Layout Comps

[Download the Foto Finder assets here.](https://drive.google.com/drive/folders/0B_lPnjyMN6-CSEFYTXBBbHNybFE?usp=sharing)

#### Desktop layout:

![Foto Finder Desktop][desktop-base]


#### Mobile layout:

![Foto Finder Mobile][mobile-base]


#### Desktop and Mobile Full View

![Foto Finder Mobile Expanded][mobile-expanded]

![Foto Finder Desktop Expanded][desktop-expanded]


#### Color and font spec:

![Design Specs][design-specs]

[desktop-base]: /assets/images/projects/foto-finder/fotofinder-1.png
[mobile-base]: /assets/images/projects/foto-finder/fotofinder-2.png
[desktop-expanded]: /assets/images/projects/foto-finder/fotofinder-3.png
[mobile-expanded]: /assets/images/projects/foto-finder/fotofinder-4.png
[design-specs]: /assets/images/projects/foto-finder/fotofinder-5.png

## Rubric

### Functional Expectations

- 4: Application meets all of the functional expectations in all phases and at least one extension.
- 3: Application meets all of the functional expectations in all phases.
- 2: Application meets all of the functional expectations in the first two phases, but missing phase three features or contains multiple feature bugs.
- 1: Application does not meet the requirements of two or more phases.

### Fundamental JavaScript Style

- 4: Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring.
- 3: Application shows strong effort towards organization, content, and refactoring.
- 2: Application runs but the code has long functions, unnecessary or poorly named variables, and needs significant refactoring.
- 1: Application generates syntax errors or crashes during execution.

### Workflow

- 4: The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.
- 3: The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
- 2: The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
- 1: The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
- 0: The application was not checked into version control.

### HTML Style

- 4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.
- 3:  Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.
- 2:  Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.
- 1:  Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

### CSS Style

- 4: Application has exceptionally well-factored CSS with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.
- 3:  Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS is doing.
- 2:  Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
- 1:  Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.
