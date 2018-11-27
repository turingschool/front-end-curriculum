---
title: Dog Party JS Edition
---

## Overview

It's a dog party! As a frontend developer, you're going to need to be able to accurately build out the UI (user interface) for websites based on [comps](https://en.wikipedia.org/wiki/Comprehensive_layout) provided by a designer. For your first project, you'll build a 1-page static site to practice writing well structured, semantic HTML with clean, precise CSS, as well as take a first crack at adding some user interaction with Javascript and the DOM.

Similar to what you might be asked to do on the job, we've given you a comp with a set of technical specs to go along with it and your challenge is to build it.

## Learning Goals

- practice accurately building a comp
- write well structured, semantic HTML
- craft clean, DRY CSS
- try out working with Javascript to interact with the DOM

## Steps to Set Up Your Project Files

- Using your terminal, create a directory called `dog-party`
- Inside of your `dog-party` directory, create a sub-directory called `images`
- Also create three files called `index.html`, `styles.css`, and `main.js`
- You will also need to [download the assets](https://drive.google.com/drive/folders/0B_lPnjyMN6-CamRRV0xPRmZNOFU?usp=sharing) and insert them into your `images` directory

**Note: Do not use CSS `flex-box` or `grid` for this project (If you don't know what this is, no worries! You'll learn more about these techniques in the coming weeks!)**

## Basic Project Requirements

#### Step 1

Start by building the HTML and using semantic tags to create a clean structure for your page.

#### Step 2

Style your site using CSS -- aim to get it as visually close to the comp as possible.

#### Step 3

Create a `README.md` file that gives a brief overview of your project (don't forget to make sure to include the comp as well as a screen grab of your finished site!)

## Extensions

We won't cover how to do these in class before this project ends -- challenge yourself and investigate how to tackle these tasks. And remember: it is ok if you're not sure how to do these so take a crack at it and experiment, we'll go over this material together soon!

#### CSS

* Make your Dog Party site mobile.  Experiment using your DevTools and `media queries`
  * How could you handle the links in the nav bar?  Maybe change them into a menu icon?
  * How will you handle the columns? Will they still fit if they are in 3 columns?
* Make the `What Is Dog` buttons horizontally aligned no matter how much text is in each column.

#### Javascript

* Once you have the HTML structure built and styled using CSS, experiment with adding in interaction using Javascript: Build functionality to allow a user to type a dog name in the input field and then, when the user clicks the button, have that dog name replace the text `Some Dogs` in the main `A Site About Some Dogs` header and clear out the input field. For example: if I typed `Fido` into the input, when I click the button the main header of the page should change to read `A Site About Fido`.

## Submission Details

After you have completed your project and are happy with it, push it up to GitHub. You'll learn more about Git & GitHub soon, but essentially, it's a service/website that allows developers(you) to host your code/sites. Pretty cool right!?

#### Add a public key to your github account

In order to push up your work to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/connecting-to-github-with-ssh/). This [video](https://www.youtube.com/watch?v=XsPVWGKK0qI) will walk you through the process and likely save you time.

#### Setting up Repository on GitHub and Pushing up

1. Create a new repository on GitHub by clicking that green button on the home page that says `New Repository`
2. Enter in a relevant name for this project (i.e. `Dog Party`)
3. Do NOT initialize the repository with a README.  You have already created one locally on your computer.
4. Leave it set as `public` because you want to others to see your work and then click `Create Repository`!
5. Follow the steps on the next page and enter each command into your terminal
6. Once you see your code up in your repository, go to Settings and publish your site on GitHub pages!
7. Finally, place your links in the appropriate tab of the [Submission Sheet](https://docs.google.com/spreadsheets/d/1JJ4vf7qcH2SX5qi8uUE8cVvCbcGkf55wA0DpQP5ooWc/edit#gid=0)

#### Example Steps for Part 5

1. `git init` inside of your `dog-party` directory
2. `git add .`
3. `git commit -m "Initial commit"`
4. `git remote add origin git@github.com:Kalikoze/Dog-Party.git`
5. `git push -u origin master`

## Design Comp

# ![Dog Party](/assets/images/dog-party-js-edition.jpg)

## Peer Review (10 min each)

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

### Peer Review
Use [this template](/projects/static-comp-peer-review.html)
