---
title: Dog Party 2.0 (Positioning Is Ruff)
---

## Overview

As a frontend developer, you're going to need to be able to accurately build out the UI (user interface) for websites based on [comps](https://en.wikipedia.org/wiki/Comprehensive_layout) provided by a designer. For your first project, you'll build a 1-page static site to practice writing well structured, semantic HTML with clean, precise CSS, as well as take a first crack at adding some user interaction with Javascript and the DOM.  Something to note is that you will need to style the comp two different ways using two different css stylesheets.  This is based off of the [CSS Zen Garden site](http://www.csszengarden.com/).  **Although you will need to have two stylesheets, the same HTML file and structure will be used for both layouts** (aka even though you'll have two stylesheets, you'll have only one index.html file).  This is to help you focus on what is necessary for your HTML structure so that it can work for multiple layouts.

Similar to what you might be asked to do on the job, we've given you the comps with a set of technical specs to go along with it and your challenge is to build it.

## Learning Goals

- practice accurately building a comp
- write well structured, semantic HTML
- craft clean, DRY CSS
- try out working with Javascript to interact with the DOM

## Steps to Set Up Your Project Files

- Using your terminal, create a directory called `dog-party`
- Inside of your `dog-party` directory, create a sub-directory called `images`
- Also create three files called `index.html`, `styles1.css`, `styles2.css`, and `main.js`
- You will also need to [download the image assets](https://drive.google.com/drive/folders/0B_lPnjyMN6-CamRRV0xPRmZNOFU?usp=sharing) and insert them into your `images` directory

**Note: DO NOT use CSS `flex-box` or `grid` for this project (If you don't know what this is, no worries! You'll learn more about these techniques in the coming weeks!)**

---

## Phase One: Basic Requirements

#### Step 1

Start by building the HTML and using semantic tags to create a clean structure for your page. Work to craft your HTML according to the [Turing HTML Style Guide](https://github.com/turingschool-examples/html)


#### Step 2

Style your site using CSS -- aim to get it as visually close to the comp as possible. Focus on the first comp until it is finished before moving onto the second.  Work to craft your CSS according to the [Turing CSS Style Guide](https://github.com/turingschool-examples/css)

#### Step 3

Create a `README.md` file that gives a brief overview of your project (don't forget to make sure to include the comps as well as the screen grabs of your finished site!)

---

## Phase Two: More Better

We won't cover how to do these in class before this project ends -- challenge yourself and investigate how to tackle these tasks. And remember: it is ok if you're not sure how to do these so take a crack at it and experiment, we'll go over this material together soon!

#### CSS

* Make your Dog Party sites mobile. We haven't given you layouts for mobile, so think about how you'll approach making each layout work best for small screens. Do side-by-side columns on large screens stack when viewed on a phone? What about larger sections of content? Experiment using your DevTools and `media queries`!

#### Javascript

* Once you have the HTML structure built and successfully being styled to work for both layouts using your two CSS files, experiment with adding in interaction using Javascript: Build functionality to allow a user to type a dog name in the input field and then, when the user clicks the button, have that dog name replace the text `Some Dogs` in the main `A Site About Some Dogs` header and clear out the input field. For example: if I typed `Fido` into the input, when I click the button the main header of the page should change to read `A Site About Fido`.
* Work to craft your Javascript according to the [Turing Javascript Style Guide](https://github.com/turingschool-examples/javascript)

---

## Phase Three: Extensions

#### Minimize/Maximize

* Add functionality to each of the buttons in each column.  When the user clicks on the button, it should hide the content in that specific column (still having the picture and button be displayed).  When the user clicks the button again, the text should display once more.  
  * Bonus: add a nice animation to this to give a better transition 

#### Adding ToolTips

* Add a tooltip to each of the elements in the navigation bar.  When a user hovers over one of them, a tool tip should appear giving more information as to what that page is about.

#### Updating Each Column

* Add another input and textarea to the form that can update the text in each column.  The input should either be a dropdown or radio/checkboxes to specify which column's text is being updated.

---

## Design Comp 1

#### Hex Codes:

* Light blue: #75e2e6
* Dark blue: #048eaa
* Background color: #ffffff
* White text: #ffffff
* Body text: #000000
* Font: Open Sans

# ![Dog Party 01](/assets/images/projects/zen-garden/zen-garden-01.jpg)

<!-- ---

## Design Comp 2

#### Hex Codes:

* Light purple: #9A969C
* Dark purple: #3E3544
* Background color: #ffffff
* White text: #ffffff
* Body text: #000000
* Font: Roboto

# ![Dog Party 02](/assets/images/projects/zen-garden/zen-garden-02.jpg) -->

---

## Submission Details

After you have completed your project and are happy with it, push it up to GitHub. You'll learn more about Git & GitHub soon, but essentially, it's a service/website that allows developers(you) to host your code/sites. Pretty cool right!?

#### Add a public key to your github account

In order to push up your work to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/connecting-to-github-with-ssh/). This [video](https://www.youtube.com/watch?v=XsPVWGKK0qI) will walk you through the process and likely save you time.

#### Setting up Repository on GitHub and Pushing up

1. Go to Github and create a new repository, also called a repo, by clicking that green button on the home page that says `New` on the left
2. Enter in a relevant name for this project (i.e. `Dog Party`)
3. Do NOT initialize the repository with a `README`.  You have already created one locally on your computer.
4. Leave the repo set as `public` and then click `Create Repository`
5. In your terminal, follow steps below in order and enter each command into your terminal
  * `git init` inside of your `dog-party` directory (**Side Note:** `git init` creates a *hidden* `.git` directory that's used to track changes. Run `ls -a` in the project directory to ensure your `.git` directory exists. )
  * `git add .`
  * `git commit -m "Initial commit"`
  * `git remote add origin git@github.com:Kalikoze/Dog-Party.git` (but use the origin of your own GitHub repo that you just created rather than `git@github.com:Kalikoze/Dog-Party.git` -- this step makes the connection between your local files and the repo that lives on GitHub)
  * `git push -u origin master` (this step pushes your local code up to your GitHub repo)
6. Once you see your code up in your repository on GitHub, go to `Settings` and publish your site on GitHub Pages, a great way to host static sites directly through GitHub
7. Finally, place the links for both you GitHub repo and the live GitHub Pages site in the appropriate tab of the [Submission Sheet](https://docs.google.com/spreadsheets/d/1IjeLYwVGMm0z6tfRsvoaBIXLATcTtvnmwtzg0d66FWk/edit#gid=0)

---

## Checkins - Peer Review (10 min each)

With your partner, go through the list of questions below.  Take note of the different or similar ways you may have approached the comp focusing on the structure of your HTML and how you implemented your styles.  Taking a moment to reflect can help you strategize what you can improve on and how you can perform even better for your next project.

1. What was your biggest win?  Biggest struggle?
2. What is something you are still working on or struggling with?  Maybe your partner has advice?
3. How did you implement the background image?
4. How did you approach the header?
5. What was your strategy for setting up each column?
6. How did you center the main image?
7. What was your thought process in centering the logos in the footer?
8. What are three tips you would have told yourself a week ago?
9. How did your partner do things similarly/differently from you?  
10. What are some things you would like to continue to work on?

### Journal Writing (5 min)
Take a few minutes and write out an action plan for the next few days.
- This can include restructuring your HTML layout.  
  - Making it cleaner
  - Using more semantic HTML over divs
  - Making sure it follows the styleguide
- How you could refactor your CSS?
  - Making sure classes are named appropriately
  - Organize your styles according to sections
  - Alphabetizing style properties
  - Grouping classes together that share similar styles

### Final Eval Peer Review
Use [this template](/projects/static-comp-peer-review.html)
