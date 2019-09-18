---
title: Linked List
---

## Specification

Now it's time to try your hand at building a small application.

In it's simplest form, the application should have the following:

- Two input fields
  - One for the title of the bookmark
  - One for the URL that the bookmark should link to
- One button for creating the bookmark and adding it to the page
- A section for all of the created bookmarks; each bookmark should display:
  - The title of the bookmark
  - The URL of the bookmark (this should be clickable and link to the URL)
  - A button to "Mark as Read"
  - A button to "Remove" the bookmark

### Data Model
- Each card should get its data from an object instance of a `Bookmark` class
- Each Bookmark should have the following properties:
  - id - must be a unique identifier  (take a look into Date.now()!)
  - title
  - url
  - read - this should be a boolean!
- Each Bookmark should have the following methods:
  - toggleRead()
    - This method should be invoked when someone changes whether a Bookmark has been read or not
    - This method should update the `read` property on the Bookmark


### Phase One

- The user should be able to input a title and URL into the appropriate fields
- When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section - it should also instantiate a new instance of the Bookmark class!
  - Think about how you could store/house all of the bookmarks you are creating!
- When the user clicks on the "Mark as Read" button:
  - A class of `.read` should be added to the bookmark
  - If it already has the class of `.read`, it should be removed
  - When the user clicks the "Read" button, it should update that instance of the Bookmark class!
- When the user clicks on the "Delete" button, the link should be removed from the page AND removed from the data model

### Phase Two

- If the user omits the title or the URL, the application should not create the link and should instead display an error.
- The application should be responsive and work equally well on desktop and mobile.
- Implement localStorage!
  - All instances of Bookmarks should be saved to localStorage when a new Bookmark is created
  - If a Bookmark is removed from the page, it should be removed from the data model and removed from localStorage

### Phase Three

- The button for creating links should be disabled if there are no contents in the title or URL fields.
- The application should be able to keep count of the total number of links currently on the page.
- The application should be able to keep count of the total number of read and unread links currently on the page.
- localStorage Part II
  - When the page is reloaded, the DOM should be populated with all bookmarks that are saved in localStorage
    NOTE: When you pull your data out of localStorage, your objects won't be instances of their class anymore! You will need to think about how you can RE-INSTANTIATE each object as a class instance when you pull from storage! 

### Phase Four: The Project Strikes Back

- Add a "Clear Read Bookmarks" button which clears all the read bookmarks when clicked.
- The user should **not** to be able to add a URL that isn't valid.

#### Layout comps

##### Desktop layout:

![Linked List Desktop][desktop-base]

##### Mobile layout:

![Linked List Mobile][mobile-base]

[Download the Linked List Logo here.](https://drive.google.com/file/d/0B_lPnjyMN6-CWjBGME1BUUgxTE0/view?usp=sharing)

##### Color and font spec:

![Design Specs][design-specs]

[desktop-base]: /assets/images/projects/linked-list/linked-list-01.png
[mobile-base]: /assets/images/projects/linked-list/linked-list-02.png
[design-specs]: /assets/images/projects/linked-list/linked-list-03.png  



## Rubric


## Functional Expectations

* Novice: Application meets all of the functional expectations in Phase One.
* Advanced Be: Application meets all of the functional expectations in Phase Two.
* Proficient: Application meets all of the functional expectations in Phase Three.
* Exceptional: You completed Phase Three and did something with Phase Four.


## COMP RECREATION / DESIGN

* Novice  
* Advanced Beginner  
* Proficient  
* Exceptional  


## HTML

* Novice  
* Advanced Beginner  
* Proficient  
* Exceptional  


## CSS

* Novice  
* Advanced Beginner  
* Proficient  
* Exceptional  


## JS/jQuery

* Novice  
* Advanced Beginner  
* Proficient  
* Exceptional


## GIT & GITHUB

* Novice  
* Advanced Beginner  
* Proficient  
* Exceptional  

## Pairing/Collaboration

* Novice  
* Advanced Beginner  
* Proficient  
* Exceptional

## Technical Vocabulary

* Novice
* Advanced Beginner
* Proficient
* Exceptional

## Surprise and Delight (optional category, but reminder: have fun!)

* Unicorn Rainbows  
* Hot Fire  
* Sparkles  
* Magic  
