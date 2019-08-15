---
title: Git Review
length: 60
tags: git, workflow
---

## Solo Workflow

- `git init`
- `git add <filename>` ♻️
- `git commit -m "Message here"` ♻️
- `git push origin master`
- `git pull origin master`

## Cloning a Repo

When we clone a repository from GitHub, we are copying it down to our machine exactly as is. Why might we clone?
- When working on a team. Only one teammate can start the project on GitHub; all other partners will be added as collaborators and will have to clone it down to contribute
- Often times in class, instructors will make a start repo that we will ask you to clone down and work off of
- Open Source/Learning. Down the road, you may take interest in certain problems and want to look at the code, whether because you plan to contribute or just because you want to learn! Any public repo on GitHub can be cloned down.

### FAQs

- If I make a type in a commit message, how can I change it? [Resource](https://help.github.com/en/articles/changing-a-commit-message)
- I hear people talk about `git blame` - what even is it and why would we use it? [Resource](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-blame)

## Solo Practice

Follow the steps below to get some practice. By next week, you should be to the point where this workflow feels pretty natural; until it does, it is recommended that you work through this 1-2 times each day.
  - create a directory called `git-101`, inside of it create `index.html` and `styles.css` files
  - add the skeleton of an HTML document to the HTML file.
  - `init` your repo
  - add and commit your work
  - add an H1 to your HTML, write a CSS rule to add a color to that H1
  - add and commit your work
  - add a paragraph under the H1, write a CSS rule to add a border to that paragraph
  - add and commit your work
  - check your git log
  - add a button under your paragraph, write a CSS rule to add some padding to that button
  - check your work - does it meet the criteria for the HTML and CSS Style Guides? If so, move on, if not, fix it.
  - add and commit your work
  - go to GitHub and create a repo
  - add the remote repo to your local repo and push up
  - verify that all your code is now on the GitHub repo
  - look at your commit history
  - add a README file, just give it a title
  - in your terminal, pull down the repo
  - check Atom - you should see the README
  - make an update to the README
  - add and commit your work
  - push it back up to GitHub
  - check that GitHub reflects the most recent change
