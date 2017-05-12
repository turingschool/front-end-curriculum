---
title: Linked List
---

## Specification

With a little jQuery under your belt, it's time to try your hand at building a small application.

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

### Phase One

- The user should be able to input a title and URL into the appropriate fields
- When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
- When the user clicks on the "Mark as Read" button:
  - A class of `.read` should be added to the bookmark
  - If it already has the class of `.read`, it should be removed
- When the user clicks on the "Remove" button, the link should be removed from the page

### Phase Two

- If the user omits the title or the URL, the application should not create the link and should instead display an error.
- The application should be responsive and work equally well on desktop and mobile. (Flexbox is your friend here.)

### Phase Three

- The button for creating links should be disabled if there are no contents in the title or URL fields.
- The application should be able to keep count of the total number of links currently on the page.
- The application should be able to keep count of the total number of read and unread links currently on the page.

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

### Functional Expectations

|Novice             | Application meets all of the functional expectations in Phase One. |
|Advanced Beginner  | Application meets all of the functional expectations in Phase Two. |
|Proficient         | Application meets all of the functional expectations in Phase Three. |

<br>

------------------------------------------------------------------
