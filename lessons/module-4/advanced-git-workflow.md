---
title: Advanced git Workflow
length: 60
tags: git, tooling, workflow
---


## Amending Commits

After making a commit, if you realize you want to add another change to that commit or have some code changes that you want to modify, you can stage your new changes and instead of creating a new commit for them, you can edit the previous commit with `git commit --amend`

This will add any staged changes to the previous commit, and open up the commit message for an opportunity to modify that as well.

## Staging in Patches

One way to avoid making mistakes in your commits (either by adding too much to a single commit, or including debugger statements), is by staging your changes in patches. Often times, you'll get carried away working on a particular feature that includes a lot of code changes. Instead of having to stop and commit regularly, you can allow yourself to continue working through the entire feature - then break up your changes into smaller, more accurate commits when you're done.

This can be accomplished by staging your changes in patches. Instead of doing a `git add .`, which stages all of your changes, you can run `git add --patch`. 

This will walk you through each chunk of your changesets and ask you if you want to stage them or not. This is a good way to review your code before committing it, and make sure you keep all changes relevant to each commit.

## Interactive Rebasing & Squashing

## Stashing


## Resources

* [Git Stashing](https://git-scm.com/docs/git-stash)
* [Git Rebase](https://git-scm.com/docs/git-rebase)