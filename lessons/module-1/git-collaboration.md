---
title: Git Workflow
tags: git, github
---

## Learning Goals
- [Be able to use git and GitHub to collaborate on code with another developer](https://frontend.turing.edu/lessons/module-1/dev-skills-git-team-workflow.html)
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
- Initialize git by running `git init`
- Stage your README by running `git add README.md`
- Make your first commit by running `git commit -m "Initial Commit"`

**GitHub Time!!**
- Click the plus to create a New Repository. Add Repository name (should match your local directory name). Click Create Repository.  
- Run the steps of "…or push an existing repository from the command line"
- Invite your partner to collaborate (find this on the repo page under settings, manage access, invite a collaborator)
</section>

<section class="answer">
### Git Commands
- **Make a new directory**
  - `mkdir [name-of-directory]`
- **Change directories**
  - `cd [name-of-directory]`
- **Create a new file**
  - `touch README.md`
  - `touch main.js`
  - //etc.
</section>

<section class="note">
### Replacing `master` with `main`

Historically, the default branch on GitHub has been named `master`. This is something you most likely will still come across, but we (and others) have switched to `main` to promote more inclusivity in tech.

Read more about this important change [here](https://dev.to/afrodevgirl/replacing-master-with-main-in-github-2fjf)!

To make your local machine’s git default to branch main, you’ll first need to update to the latest version of git. [Follow these steps to do that](https://www.michaelcrump.net/step-by-step-how-to-update-git/).

Then you have to tell git what the default branch should be. You can run this command in your terminal to do that:

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
  - `git push origin feature/name-of-feature-branch`
</section>

<section class="note">
### How to Write a Good Commit Message

Begin the commit message with the **type** of the commit followed by a : and brief description.

Types of commits include:
* **fix** - use if committed code is fixing a bug(broken code).
* **feat** - stands for feature. This will likely be your most common type that you use. It should be used for any new functionality that is committed.
* **test** - use if committed code is adding test functionality.
* **refactor** - use if updating and/or removing existing code.
* **docs** - use if updating your readme.

Examples of good commit messages:

* `fix: Broken calculation for percent high ranking cards`
* `feat: Add shuffle to deck`
* `test: Add test for shuffle`
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
  - `git checkout name-of-branch`
</section>

<section class="note">
### Note about checking remote branches

After fetching branches, note that `git branch` will still not display remote branches. In order to see remote branches, you have to run` git branch -r`. To see both local and remote branches, you must run `git branch -a`.
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

<section class="answer">
### Merge Conflict? Read here!

- [This video](https://www.youtube.com/watch?v=j0MW7jSc25I) walks you through a merge conflict
- You can also reference [this lesson](https://frontend.turing.edu/lessons/module-1/git-merge-conflicts.html)
</section>

<section class="answer">
### Other Git Tips & Infos 
 
- `git branch`  
  - DOES nothing   
  - SHOWS you what branches you have, and which branch you are currently on   
  
- `git branch feature/new-branch`
  - creates a new branch with the specified name (feature/new-branch) but does not open that branch

- `git checkout feature/sample-branch` OR `git checkout main`  
  - Takes you to the branch, checkouts that branch, puts you on that branch, now you are working on whatever branch you typed   

- `git checkout -b feature/sample-branch`  
  - The command above is a MASHUP of `git branch feature/new-branch` and `git checkout feature/new-branch`  
  - CREATING a new branch with whatever name you chose AND going into that branch    

- `git push origin feature/even-better-branch`  
  - This is the how you will take your code/work that you did locally on the 'feature/even-better-branch' and push it up to the remote repo on Git Hub.   
    - Its not going to mess with main, its going to let you create a PR.   
    - Then you can do a thorough code review, _then_ you decided if/when to merge it to main branch.  

- `git add -p`  
  - same as `git add patch` - basically combines git diff and git add  
  - shows you the changes you made hunk by hunk and lets you say if you want to stage each hunk  
  - Helpful because you get to review all your changes for errors  
  - Helpful because you get to review all your changes which helps you remember what all you did so that you can come up with a accurate commit message  
  - _"Git add -p is the best thing that's ever happened to me"_ - Heather Faerber   

- Commit messages should start with uppercase, present tense verb. Should fill in the statement "This commit will _________________".  

- Branch Naming  
  - Conventionally starts with prefix of `feature/` or `refactor/` or `fix/`  
  - Do not use the word 'iteration' - instead describe what work is being tackled in that iteration  
  - Should be able to see a high level view of your approach to the project  
</section>
