---
title: Git Workflow
tags: git, github
---

## Learning Goals
- [Be able to use git and GitHub to collaborate on code with another developer](https://frontend.turing.io/lessons/module-1/dev-skills-git-team-workflow.html)
- Be able to submit and respond to a pull request
- Understand the importance of code review

## Creating a New Repo

Oftentimes, we start a project by forking or cloning a pre-existing repository from GitHub. Today we are going to start from scratch and build our own! You'll be working with a partner to run through the process of creating a new repo, adding some code, submitting pull requests, resolving merge conflicts and more!

<section class="checks-for-understanding">
### Partner One

Pick one person to create the repo. The other person should be watching and advising!

**Command Line**
- Use the command line to make a new directory called "git-collaboration-practice"
- Add a `README.md` file to your directory 
- Open up your directory in your text editor and add some text to that README

**GitHub Time!!**
- Click the plus to create a New Repository
- Run the steps of "…or create a new repository on the command line" starting with `git init` on the command line
- Invite your partner to collaborate (find this on the repo page under settings, manage access, invite a collaborator)
</section>

<section class="answer">
### Git Commands 
- **Make a new directory** 
  - `mkdir name-of-directory`
- **Change directories** 
  - `cd name-of-directory`
- **Create a new file** 
  - `touch` README.md
  - `touch` main.js`
  - //etc.
</section>

<section class="note">
### Replacing `master` with `main` 

Historically, the default branch on GitHub has been named `master`. This is something you most likely will still come across, but we (and others) have switched to `main` to promote more inclusivity in tech. 

Read more about this important change [here](https://dev.to/afrodevgirl/replacing-master-with-main-in-github-2fjf)!

To make your local machine’s git default to branch main, you’ll first need to update to the latest version of git. [Follow these steps to do that](https://www.michaelcrump.net/step-by-step-how-to-update-git/).

Then you have to tell git what the default branch should be. You can run this command in your teminal to do that:

`git config --global init.defaultBranch main`
</section>



## Cloning the Repo
<section class="checks-for-understanding">
### Partner Two

**Getting Started**
- Get the link to your partner's repo
- Accept the collaborator invitation (you'll probably get an email)
- Clone it down to your machine

**Working on the App**
- Create a new branch (what name makes the most sense here?)
- Open up the repo in your text editor and add some text to that README
- Add, commit and push that code to your branch

**GitHub**
- Create a pull request to merge your branch into `main` (DONT MERGE IT YET)
- Add your partner as a reviewer

</section>

<section class="answer">
### Git Commands 
- **Clone a repo** 
  - `git clone git@github.com:username/repo-name.git`
  - This link is found on the repo page under the green "Code" button
- **Create a new branch** 
  - `git checkout -b feature/name-of-feature-branch`
- **Add a file to staging** 
  - `git add README.md`
- **Commit a file (with a message)** 
  - `git commit -m "description of work here"`
- **Push changes** 
  - `git push`
</section>

## Code Review
<section class="checks-for-understanding">
### Partner One

**GitHub**
- Check out your partner's pull request on GitHub. Spend some time looking through the interface together. What information can you see about your partner's code? How can you leave comments or request changes?
- Why do you think its important to be able to review someone else's code in this format?

**Reviewing Code Locally**
- Checkout your partner's branch
- Look at their code in your text editor
  - In a real application, you might be opening it up in the browser, checking for errors, running tests, etc.

**GitHub**
- Merge that pull request!
- Why do you think developers shouldn't merge their own pull requests? 
</section>

<section class="answer">
### Git Commands 
- **Fetch all remote branches** 
  - `git fetch`
- **Checkout a branch** 
  - `git checkout feature/name-of-partner branch`
</section>

## Continuing Work
<section class="checks-for-understanding">
### Partner Two

- Switch to your `main` branch
- Pull down the changes that have been merged in
- Why do you think its important to pull down changes before starting the workflow process again?
</section>

## Common Questions
**Can I work on the same branch as my partner?**  
Yes! As long as a branch is pushed up to GitHub, _anyone_ can pull it down and work on it. This is a common place for conflicts to arise though, so make sure you are communicating well and often. Sticking to different parts of the codebase is better practice to avoid merge conflicts for now.

**When should I commit?**
- Early and often! 
- When you've completed one task or fix 
- You're done for the day or reached a stopping point.
- If you have code you want someone else to see

**What is an atomic commit?**
- An “atomic” change revolves around one task or one fix.
- Atomic means it could not be smaller 

**When should I submit a pull request?**
- When you've created a new, fully functional feature
- When you have successfully solved a bug or fixed something broken


