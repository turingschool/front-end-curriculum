---
title: Git Merge Conflicts
tags: git, github
---

## Learning Goals
- Resolve Merge Conflicts
- Identify ways to prevent Merge Conflicts

## Merge Conflicts

Merge conflicts will happen to you at some point, and its important to learn how to resolve them successfully. A merge conflict happens when two branches change code in the same spot of a file and are attempted to be merged. Git doesn't know which of the changes to keep, and needs our help to resolve the conflict.

<section class="checks-for-understanding">

### Instructions To Create a Merge Conflict

##### Your goal is to create a pull request that says "Can't Automatically Merge when making the PR", if you get that error, proceed to the 'Resolving Merge Conflicts' section. 

##### You may also see an error that says something like "error: failed to push some refs to github" when you try to push code. This is another situation where branches have gotten out of sync! Proceed to the 'Resolving Merge Conflicts' section. 

* Partner A makes a new repository on GitHub, select the option to Add a README file so that your repository is initialized with a README.md file.
* Partner A adds Partner B as collaborator on GitHub
* Partner A clones that repo down
* Partner B clones the repo, doesn't do anything else
* Partner A adds a sentence on line 1 of the README
* Partner A adds, commits, and pushes the changes to GitHub while on the main branch (Bad practice - we are doing this to trigger a merge conflict)
* Partner B does NOT pull down the latest changes (Bad practice - we are doing this to trigger a merge conflict)
* Partner B creates a new branch and checks it out
* Partner B makes changes to line 1 of the README.md on their new branch
* Partner B adds, commits, and pushes their changes to GitHub
* Partner B creates a Pull Request on GitHub from their branch to main. You should see the warning "Can't Automatically Merge when making the PR. After making the PR, it should say "This branch has conflicts that must be resolved."
* Partner B should share their screen with Partner A. Follow the steps below to resolve this conflict!
* If you have time, swap tasks as partners so that each partner can experience creating a conflict and resolving it. 

</section>

#### Resolving Merge conflicts
- If you encounter a merge conflict when pushing your code up to GitHub, you can follow these steps to resolve.

* Checkout the `main` branch  
* Run `git pull origin main` to pull down the latest updates to your local main branch from the remote repo's main branch   
* Checkout your feature branch     
* Run `git merge main` to bring the updates from the main branch into your feature branch  
  * You will likely run into the merge conflict at this point  
  * In your text editor, select exactly which lines of code you want to keep  
  * After resolving the conflict, stage and commit the file(s)  
* Run `git push origin yourFeatureBranchName` to push up the updated/conflict resolved files  


- You also have the option to resolve merge conflict in the GitHub GUI directly.  We highly recommend resolving conflicts in your terminal.  This is an important process to be familiar with as a developer.  
- GitHub offers instructions on the GUI for how to resolve a merge conflict through the command line.  Test out these instructions when you encounter a merge conflict.  


#### Discussion Questions:
- What are some steps you can do as a team to avoid merge conflicts? (Hint: review the steps we took earlier to create a merge conflict)