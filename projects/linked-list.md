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
- The application should be responsive and work equally well on desktop and mobile.

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
|Exceptional        | You completed Phase Three and did something with Phase Four. |

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

#### Conditional Logic

|Novice             | Can understand when an expression evaluates to true or false.|
|Advanced Beginner  | Uses if/else statements, but there are multiple levels of nesting, which makes the paths through the code difficult to follow. Understands what is "truthy" and "falsey" in JavaScript.|
|Proficient         | Can use an if/else statement to effectively handle multiple paths through the code. Writes if/else statements that only have one level of logic (no nesting). Can use logical operators instead of if/else statements where applicable.|
|Exceptional        | Can write conditional logic that is succinct and easy to read. Logic can handle all situations where user gives incorrect/unexpected input.|

#### Conditional Logic

|Novice             | Can understand when an expression evaluates to true or false.|
|Advanced Beginner  | Uses if/else statements, but there are multiple levels of nesting, which makes the paths through the code difficult to follow. Understands what is "truthy" and "falsey" in JavaScript.|
|Proficient         | Can use an if/else statement to effectively handle multiple paths through the code. Writes if/else statements that only have one level of logic (no nesting). Can use logical operators instead of if/else statements where applicable.|
|Exceptional        | Can write conditional logic that is succinct and easy to read. Logic can handle all situations where user gives incorrect/unexpected input.|

#### Functions & Scope

|Novice             | Can write a simple function that takes at least one input argument.|
|Advanced Beginner  | Developer is comfortable using multiple arguments to pass data into functions. Understands how variables are scoped at the function level and global level. Functions are named descriptively. Knows when and why to use return in a function.|
|Proficient         | Functions have single responsibility. The entirety of the function is easy to read what functionality it contains. Function is generally shorter than 8 lines. Uses functions to eliminate repeated code. Comfortable refactoring any piece of code and extracting it to a function.|
|Exceptional        | Comfortable with using callback functions where applicable. Comfortable returning collections from functions (objects, arrays).|

<br>

------------------------------------------------------------------

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

<br>

------------------------------------------------------------------

## PAIRING

#### Collaboration

|Novice             | Can communicate needs, expectations, scheduling constraints through a DTR, effectively creating a working plan with partner.|
|Advanced Beginner  | Can identify deltas in skill level and collaborate on methods whereby both pairs can share equitably in the workload. Can revisit the DTR to address changes that arise, and/or simply to keep one another reminded of the working plan.|
|Proficient         | Can diplomatically handle issues that arise between the pair through respectful, focused, targeted feedback and implement changes to positively adapt the working relationship and keep the project on track. Can effectively implement tactics to support their partner's learning and project goals, while also honoring their own personal learning and project goals, should the two be different or at different levels due to skill delta. |
|Exceptional        | Pair collaboration and communication is exceptional, with the distribution of work being equal and balanced, and both partners experiencing a good working flow, able to handle stress, deadlines, issues with calm and focused demeanor.|

<br>
