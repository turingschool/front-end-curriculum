---
title: Git Merge Conflicts
tags: git, github
---

## Learning Goals
- Understand how to prevent and resolve merge conflicts

## Merge Conflicts

Merge conflicts will happen to you at some point, and its important to learn how to resolve them successfully. A merge conflict happens when two branches change code in the same spot of a file and are attempted to be merged. Git doesn't know which of the changes to keep, and needs our help to resolve the conflict.

<section class="checks-for-understanding">
### Partner One

- Make sure you are on your `main` branch
- DONT pull down the changes that have been merged in (NOTE: This is BAD practice, we're only doing it to trigger a merge conflict)
- Make a change to the README
- Add, commit and push those changes to `main` (NOTE: BAD PRACTICE - DONT DO IN REAL LIFE)
- Resolve merge conflict in your text editor

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
