---
title: Foto Finder
---

## Specification

Now that you've got the main foundations down to build out a frontend application, it's time to prove to yourself that you own those skills! You're going to be building a photo album application called Foto Finder!

Note: If you have started to learn some es6, feel free to implement all of those new es6 features (arrow functions, block scoped variables, etc.).  However, if es5 syntax is still more comfortable for you, then stick with what you know.  You'll get a lot more practice and instruction with modern Javascript features next mod!

## Learning Goals

* Solidify and demonstrate your use of:
  * semantic HTML
  * clean & organized CSS styles
  * DRY JavaScript
  * localStorage to persist data
* Iterate through/filter dom elements using for loops/array prototype methods
* Understands the difference between the data model and how the data is displayed on the DOM
* Ability to match/recreate a UI and create a great UX

### Architecture

Your entire application will consist of one HTML page or template.
You will have two javascript files:

1. A `photo.js` file that contains a `Photo` class.
  * `Photo` methods must include, but are not limited to:
    1. `constructor`
    2. `saveToStorage`
    3. `deleteFromStorage`
    4. `updatePhoto`
2. A `main.js` file that contains all dom related javascript.

### Data Model
* An photo has an _id_, _title_, _caption_, _file_, and a _favorite_ property.
  * The _id_ should be a unique identifier.
  * _title_ and _caption_ are strings.
  * _file_ is a URL string.
    * Use this [method](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) in order to convert a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object into a URL.
  * _favorite_ will be a boolean.

Each photo should be created as an instance of the `Photo` class.

### Phase One: Building out the UI

This phase is all about setting up the user inputs and general structure of the page. The page will not be very interactive in this phase.

- One input field at the top in order to search through photos
- Two input fields for the `title` and `caption` of the photo
- One input field to upload the photo (hint: look at the different HTML input element type attributes and how you can use one of them to select a file from your computer)
  - [This article](https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/) can help you with styling the file upload button
- One "Add to Album" button for adding the photo to the album so you see it on the page
- One `View Favorites` button to view all of your favorite photos.
- A section for all of the photos in the album to live

### Phase Two: Implementing The Functionality

- When a user fills in the Title, Caption, selects an image file, and then clicks the "Add to Album" button, the photo should be added to the photo album.
- Each photo, when added to the album, is placed in a "card", and each photo card should display:
  - The photo
  - The title of the photo
  - The caption of the photo
  - A button to mark the photo as a "Favorite" (counter on "View Favorites" button should reflect how many photos have been favorited)
  - A button to "Remove" the photo from the album
- Each photo card should persist (in `localStorage`) and should be present upon reloading the page.
  - The photo should be added to `localStorage` using the `saveToStorage` method defined in the `Photo` class.
- When a user clicks the title or caption of a photo in the list, that text should become an editable text field, pre-populated with the existing photo title or caption.
- The user should be able to "commit" their changes by pressing "Enter/Return" or by clicking outside of the text field.
  - This change should be saved in localStorage using the `updatePhoto` method defined in the `Photo` class.
  - Bonus: If the user clicks on the image, the user should be able to update the photo using the `updatePhoto` method.
- When the user clicks on the "Favorite" button, the button should stay in the active (pink) state.  
  - This favorited state should also persist after a page refresh using the `updatePhoto` method defined in the `Photo` class
- When the user clicks on the "Trash" button, the photo should be removed from the page
  - The photo should be removed from localStorage using the `deleteFromStorage` method defined in the `Photo` class.
- The application should be responsive and work equally well on desktop and mobile

### Phase Three

Let's improve the user experience in this phase.

- If the user does not have text in the Title **or** Caption input elements, **or** they have not selected a photo from the `photos` directory, then the "Add to Album" button should be disabled.
- If there are no photos in the album yet, then there should be an indication to the user to add photos, displayed in the empty photo section.
- The file selector should only allow image file types

#### Filtering and Searching by Text
We want the user to be able to search through all of their photos easily.

- At the top of the page, include a text field labeled "Search".
- As a user types in the search box, the list of photos should filter in real time to only display photos whose title or caption include the user's text. The page _should not_ reload.
- Clearing the search box should restore all the photos to the list.
  - Do not need to persist changes in between sessions.

#### Recent Photos

The application should only show the ten most recent Photos on page load.

* The application should contain a button labeled `Show more...`.
* When a user clicks on the `Show more...` button, the list should load all of the remaining photos.
* Once the remaining photos are loaded, the `Show more...` button should switch to a `Show less...` button.
* When a user clicks on the  `Show less...` button, the list should switch back to being the first 10 photos only.
  * This functionality should toggle back and forth based on that button click.
  * Do not need to persist changes in between sessions.

#### Viewing Favorites

Finally, let's let our user be able to view only their favorites.

- The user should only see their favorites when they click on the `View Favorites` button. (consequently, the text on the button should then say `View All Photos`)
- Clicking on the `View All Photos` button, the user should be able to see all of their photo cards.
- When viewing favorites, search field should only search through the favorited photos.
  - Do not need to persist changes in between sessions.

### Extensions

Work through these **in order**:

- When the user clicks on the image, the user should be able to update the photo using the `updatePhoto` method.
- Include at least 3 different animations. Example: one for when a card gets created/deleted.

### Layout Comps

[Download the Foto Finder assets here.](https://drive.google.com/drive/folders/0B_lPnjyMN6-CSEFYTXBBbHNybFE?usp=sharing)

#### Desktop layout:

![Foto Finder Desktop][desktop-base]


#### Mobile layout:

![Foto Finder Mobile][mobile-base]


#### Color and font spec:

![Design Specs][design-specs]

[desktop-base]: /assets/images/projects/foto-finder/fotofinder2-1.png
[mobile-base]: /assets/images/projects/foto-finder/fotofinder2-2.png
[design-specs]: /assets/images/projects/foto-finder/fotofinder-5.png

------------------------------------------------------------------

## Rubric

### Functional Expectations

* [ ]  Novice - Application meets all of the basic functional expectations of create, edit, delete, and those changes persist in `localStorage`
* [ ]  Advanced Beginner - Application adds 'Favoriting a Photo' and enables 'Filtering and Searching by Text' as defined in the spec
* [ ]  Proficient - Applications adds 'Recent Photos' and 'Viewing Favorites' as outlined in the spec
* [ ]  Exceptional - Application adds all of the extensions

------------------------------------------------------------------

### Comp Recreation

* [ ]  Novice - Application implements all major comp details accurately and correctly on desktop only (colors, fonts, icons, spacing, alignment, etc.)
* [ ]  Advanced Beginner - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.). Transitions between screen sizes may not be smooth.
* [ ]  Proficient - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements added generally match the visuals established in the comps, but may be slightly awkward.
* [ ]  Exceptional - Application implements all major comp details accurately and correctly on desktop and mobile (colors, fonts, icons, spacing, alignment,  etc.) with smooth transitions between screen sizes. Additional elements that have been added match the visuals established in the comps.

------------------------------------------------------------------

### HTML - Style and Implementation

* [ ]  Novice - Crafts markup according to the [turing html style guide](https://github.com/turingschool-examples/html)
* [ ]  Advanced Beginner - Application adds to the above by using `data-*` attributes for all data related things
* [ ]  Proficient - Applications adds to the above with markup that is easy to read and follow across naming conventions
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes
    * [ ]  Implements html that is accessible for folks with visual disabilities. Reference [this lesson plan](http://frontend.turing.io/lessons/floating/web-accessibility.html)

------------------------------------------------------------------

### CSS - Style and Implementation

* [ ]  Novice - Crafts CSS according to the [turing css style guide](https://github.com/turingschool-examples/css)
* [ ]  Advanced Beginner - Application adds organization for the whole stylesheet and within rules
* [ ]  Proficient - Applications adds to the above by removing repetitive rules and blocks of code according to the DRY principle
* [ ]  Exceptional - Application adds to the above by using [BEM](http://getbem.com/), [SMACCS](https://smacss.com/), or another set of naming conventions for classes

------------------------------------------------------------------

### JAVASCRIPT - Style and Implementation

* [ ]  Novice - Crafts JS according to the [turing js style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)
* [ ]  Advanced Beginner - Application correctly implements data model for the `Photo` class including all required methods
* [ ]  Proficient - Application adds readability by incorporating both DRY and SRP practices and students can speak to implementation decisions and:
  * [ ]  Uses event delegation correctly on dynamic elements for deleting, favoriting, and editing a photo (clicking outside of the text field)
  * [ ]  All functions are less than 10 lines
  * [ ]  There are no global variables aside from query selectors, an array for your photos, and your instantiation of a [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
  * [ ]  There are no nested if/else statements
* [ ] Exceptional - Application adds to code quality by refactoring all for loops into the proper array prototype iteration methods and:
  * [ ] Uses logical operators instead of if/else statements where applicable
  * [ ] Uses arrow functions, block scoped variables, and destructuring correctly.
  * [ ] Application stores all photos in one array in local storage, instead of individually
  * [ ] When 'Filtering and Searching by Text' and 'Viewing Photos', photos that do not need to be shown on the dom should be completely removed from the dom, instead of only being hidden from view
