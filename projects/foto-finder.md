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

------------------------------------------------------------------


## Functional Expectations

|Novice             | Application meets all of the expectations of phase one. |
|Advanced Beginner  | Application meets all of the expectations of phase two. |
|Proficient         | Application meets all of the expectations of phase three. |
|Exceptional        | Application meets all of the expectations of phase three and one or more of the extensions. |

<br>

------------------------------------------------------------------

## HTML

#### Accessibility

|Novice             | Knows what a semantic tag is and leverages the HTML5 structural tags to organize the content of their markup. |
|Advanced Beginner  | Leverages more precise semantic tags when applicable, and employs basic ARIA roles attributes for added clarity in structure, descriptive image alt attributes, title attributes for applicable anchor tags. |
|Proficient         | Employs detailed accessibility practices throughout markup, especially in forms and can speak to decisions made in accessibility choices as it relates to specific accessibility concerns. |
|Exceptional        | Can run markup through a variety of online accessibility tools and score well for content, color, screen readers, etc. |

#### Style

|Novice             | Crafts markup with proper indentation and opening/closing tags. |
|Advanced Beginner  | Crafts markup with proper and logical nesting. |
|Proficient         | Crafts lean, efficient markup that is easy to read and follow across naming conventions, structure, and solid formatting that follows industry best practices. |
|Exceptional        | Crafts lean, efficient markup and can speak directly to choices made to improve performance, including but not limited to, page load times, css/js optimizations, image optimizations. |

<br>

------------------------------------------------------------------

## CSS

#### Structure of Code

|Novice             | Can effectively target DOM elements via tag, class, and/or id and write CSS rules around each element to create the desired style. |
|Advanced Beginner  | Can cleanly and logically organize CSS rules according to similar categories (i.e. typography, layout, components), and then logically organize the remaining CSS rules based on flow of the markup. Organizes properties within rules alphabetically.|
|Proficient         | Leverages cascading styles and CSS specificity rules to create more complex targeting of elements in order to reduce, reuse, share styles across elements. Organizes properties within rules based upon industry standard principles of writing consistent, idiomatic CSS. |
|Exceptional        | Understands the performance implications surrounding cascading/specificity and crafts CSS that is mindful of reducing complexity and increasing performance.|

#### Implementation

|Novice             | Can articulate how the CSS box model works and apply it appropriately in a static layout.|
|Advanced Beginner  | Can articulate the differences between the approaches of absolute/relative positioning, flex-box, floats, and can appropriately apply the approaches to solve a variety of layout problems.|
|Proficient         | Develops layouts that work cross-browser, are responsive, and can logically defend the choices made in implementation approach for layout. |
|Exceptional        | Can articulate rationale for all parts of the CSS implementation (each line of code/CSS rule) specifically in regards to the balance of: structure of code, design integrity, performance.|

<br>

------------------------------------------------------------------

## JAVASCRIPT

#### Data Types

|Novice             | Can articulate the definitions of primitive data types: strings, booleans, numbers, null, and undefined. Can articulate and describe object types: objects, arrays.|
|Advanced Beginner  | Can diagnose when issues of data-type mismatch are present and appropriately redirect their coding and/or research efforts accordingly to solve the problem.|
|Proficient         | Can identify and track data types through any variety of functions, understanding their affect and result on each line of code. Knows which scenarios are better suited for objects vs. arrays and employs them accordingly.|
|Exceptional        | Can assess and implement data type decisions for implementation based on increasing performance, shoring up code to be concise/clean, and composing for future maintainability.|

#### Conditional Logic

|Novice             | Can understand when an expression evaluates to true or false.|
|Advanced Beginner  | Uses if/else statements, but there are multiple levels of nesting, which makes the paths through the code difficult to follow. Understands what is "truthy" and "falsey" in JavaScript.|
|Proficient         | Can use an if/esle statement to effectively handle multiple paths through the code. Writes if/else statements that only have one level of logic (no nesting). Can use logical operators instead of if/else statements where applicable.|
|Exceptional        | Can write conditional logic that is succinct and easy to read. Logic can handle all situations where user gives incorrect/unexpected input.|

#### Functions & Scope

|Novice             | Can write a simple function that takes at least one input argument.|
|Advanced Beginner  | Developer is comfortable using multiple arguments to pass data into functions. Understands how variables are scoped at the function level and global level. Functions are named descriptively. Knows when and why to use return in a function.|
|Proficient         | Functions have single responsibility. The entirety of the function is easy to read what functionality it contains. Function is generally shorter than 8 lines. Uses functions to eliminate repeated code. Comfortable refactoring any piece of code and extracting it to a function.|
|Exceptional        | Comfortable with using callback functions where applicable. Comfortable returning collections from functions (objects, arrays).|

#### DOM Manipulation

|Novice             | Can articulate what the DOM is and can effectively target elements in vanilla JavaScript via class, id, or tag.|
|Advanced Beginner  | Can add event listeners and create small functions that execute on events, can leverage the event object appropriately, and can articulate the what/why/how of jQuery.|
|Proficient         | Able to extract information, modify attributes, or append/prepend data in the DOM easily regardless of whether they are employing vanilla JavaScript or jQuery. Understands how to harness event bubbling.|
|Exceptional        | Understands the potential performance impact imposed by leveraging vanilla JavaScript vs. jQuery in their implementation and will make choices accordingly based on the problem to solve.|

#### Style

|Novice             | Can explain the choices made in the overall codebase and is able to articulate what every line of code is doing. Code is neatly formatted and easy to read with correct indentation.|
|Advanced Beginner  | Code shows strong effort toward organization, but suffers from long functions, unnecessary or poorly named variables, and requires significant refactoring. Application may have some duplication and minor bugs. |
|Proficient         | Code is logically organized, such that reader can easily follow the progression of the app because variable and function names are descriptive and follow a single responsibility approach. There are no major bugs and minimal duplication.|
|Exceptional        | Application demonstrates excellent knowledge of JavaScript syntax, style, and refactoring. Application has exceptionally well-factored code with little or no duplication. |

<br>

------------------------------------------------------------------

## GIT & GITHUB

#### Git 

|Novice             | Can use commits and can articulate what a commit is and why we use them. Makes large, infrequent commits directly to master branch. |
|Advanced Beginner  | Can create branches and willingly attempts to incorporate branches into their workflow. Commits, while infrequent, are increased in volume and show improvements in description. |
|Proficient         | Commits changes frequently with detailed commit messages. Uses feature branches to keep master branch free of incomplete features or bugs.|
|Exceptional        | Knows how to reset to previous commits, rebase large sets of small commits, if applicable, and other advanced Git maneuvers. |

#### Github

|Novice             | Can articulate what GitHub is, how it is different from Git, and why it is important. Can comfortably push and/or pull changes from master.|
|Advanced Beginner  | Can execute basic pull requests with context about changes in description. Can keep local and GitHub repositories in sync.|
|Proficient         | Is comfortable with resolving merge conflicts. Asks for review/merge of their pull requests from teammates. Is comfortable editing code based on review feedback from a pull request and resubmitting the branch code.|
|Exceptional        | Uses issues as resource for project management. There are comments on specific lines of pull requests with discussion about the implementation.|

<br>

------------------------------------------------------------------

## DESIGN

#### Comp Recreation

|Novice             | Can establish a complementary color palette, integrate font(s), and execute a handful of the large comp details. |
|Advanced Beginner  | Can accomplish about 50-75% of the large and small design details and can logically rework them on at least 1 breakpoint. |
|Proficient         | Developer captures the spirit and design intent of the comp. Some small details need polish to achieve a pixel-perfect match to the comp, but developer is clearly mindful of details and has made a conscious and careful effort to match the comp. Any design decisions left open to interpretation are handled thoughtfully and are well executed, but are more noticable and/or unintuative than they would be if the designer had provided the solution, or may not be totally seamless during screen-size transitions.|
|Exceptional        | Developer skillfully captures the spirit and design intent of all comp details. Execution is pixel-perfect and any design decisions left open to interpretation are solved intentionally, are as seamless as if the designer had provided the solution, are handled gracefully, and enhance the overall design.|

#### Design Concepts

|Novice             | Can integrate typography, color choices, and layout in ways that do not detract from legibility.  |
|Advanced Beginner  | Can apply fundamental design concepts with increased sensitivity that result in clear legibility but likely break in areas of responsiveness, layout, "noise". |
|Proficient         | Can apply fundamental design concepts in a comp that demonstrates a thoughtful, purposeful, cohesive strategy that does not detract from legibility or overall design integrity.  |
|Exceptional        | Typography, color choices, and layout decisions are thoughtful and appropriate, and strongly enhance the layout and legibility of the design.|

<br>

------------------------------------------------------------------

## PAIRING

#### Collaboration

|Novice             | Can communicate needs, expectations, scheduling constraints through a DTR, effectively creating a working plan with partner.|
|Advanced Beginner  | Can identify deltas in skill level and collaborate on methods whereby both pairs can share equitably in the workload. Can revisit the DTR to address changes that arise, and/or simply to keep one another reminded of the working plan.|
|Proficient         | Can diplomatically handle issues that arise between the pair through respectful, focused, targeted feedback and implement changes to positively adapt the working relationship and keep the project on track. Can effectively implement tactics to support their partner's learning and project goals, while also honoring their own personal learning and project goals, should the two be different or at different levels due to skill delta. |
|Exceptional        | Pair collaboration and communication is exceptional, with the distibution of work being equal and balanced, and both partners experiencing a good working flow, able to handle stress, deadlines, issues with calm and focused demeanor.|

<br>
