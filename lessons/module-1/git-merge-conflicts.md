---
title: Git Merge Conflicts
tags: git, github
---

## Learning Goals
- Understand what a merge conflict is
- Be exposed to resolution steps
- Identify ways to prevent merge conflicts

## Merge Conflicts

### What are they and how do they happen?  
Merge conflicts will happen to you at some point, and its important to learn how to resolve them successfully. A merge conflict happens when two branches change code in the same spot of a file and are attempted to be merged. Git isn't sure how to cleanly merge them, and needs our help to resolve the conflict.  

Merge conflicts don't necessarily mean someone 'messed up'.  Sometimes two devs are working on code that has some overlap.  Thats ok!  Running into a merge conflict means you get to take the reins and be explicit about exactly what changes you want to keep.  This is a good safety net to have!  

###When do they happen and what does it look like?
You will usually run into a merge conflict when you push up a branch and create the PR on GitHub.

# Resolving Merge Conflicts
Merge conflicts can be resolved in the GitHub GUI (there on the GitHub web interface) or in your text editor.  Either option is fine.  However, as a developer, you might find it valuable to know how to resolve merge conflicts in your text editor.  When you get a job, who knows if your company will use GitHub, BitBucket or some other tool.  If you only know how to resolve merge conflicts on the GitHub GUI, that might be problematic.  For that reason, we encourage you to resolve merge conflicts in your text editor right from the start.

## Steps to resolve using your text editor
When you run into the merge conflict on GitHub, go ahead and create the PR, then follow these steps in your text editor:
1) Checkout the `main` branch using `git checkout main`
2) Pull down the most up-to-date code from the remote repo's main branch (your "source of truth") using `git pull origin main`
3) Checkout your feature branch using `git checkout yourFeatureBranchName`
4) Bring the updated code from the main branch into your feature branch using `git merge main`
  * You will likely run into the merge conflict at this point  
5) In your text editor, select exactly which lines of code you want to keep  
6) After resolving the conflict, stage and commit the file(s)  
7) Push up the updated/conflict-resolved files using `git push origin yourFeatureBranchName`.  Those changes will go into the already-open PR which should then be able to be merged.

- GitHub offers instructions on the GUI for how to resolve a merge conflict through the command line.  They are essentially the same steps as outlined above.  Test out these instructions when you encounter a merge conflict.  

- To

# Best practices to avoid merge conflicts



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



#### Discussion Questions:
- What are some steps you can do as a team to avoid merge conflicts? (Hint: review the steps we took earlier to create a merge conflict)
