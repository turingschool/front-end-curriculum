---
title: Advanced git Workflow
length: 60
tags: git, tooling, workflow
---


## Amending Commits

After making a commit, if you realize you want to add another change to that commit or have some code changes that you want to modify, you can stage your new changes and instead of creating a new commit for them, you can edit the previous commit with `git commit --amend`

This will add any staged changes to the previous commit, and open up the commit message for an opportunity to modify that as well. It's important to note that this feature **rewrites history**. Because you'll be amending a pre-existing commit, it will change the unique SHA (identifier) of that commit. If anyone else has based work off of the original commit, they'll get into a bad state where git doesn't know how to resolve the changes. Ammending commits is useful for when you are working locally and/or individually, and nobody else is relying on your work.

## Staging in Patches

One way to avoid making mistakes in your commits (either by adding too much to a single commit, or including debugger statements), is by staging your changes in patches. Often times, you'll get carried away working on a particular feature that includes a lot of code changes. Instead of having to stop and commit regularly, you can allow yourself to continue working through the entire feature - then break up your changes into smaller, more accurate commits when you're done.

This can be accomplished by staging your changes in patches. Instead of doing a `git add .`, which stages all of your changes, you can run `git add --patch`. 

This will walk you through each chunk of your changesets and ask you if you want to stage them or not. This is a good way to review your code before committing it, and make sure you keep all changes relevant to each commit.

## Interactive Rebasing & Squashing

In the effort to be committing tiny changesets very frequently, sometimes we can commit *too* much, and we want to go back and fixup our messages and history before we submit a pull request. For example, maybe you are making changes to your README file, and you keep going back and noticing more typos and formatting issues that need to be fixed. Every time you notice one, you make a new commit called something like 'Update README' - but now you have 10 different commits that are all related to fixing up the documentation.

Many maintainers will ask you to go back and clean up the history by **squashing** your commits. Squashing commits means combining all the changesets into a single commit with a relevant message. We can accomplish this by doing an **interactive rebase**:

```bash
git rebase --interactive HEAD~5
```

This command would take the 5 most recent commits in the branch you're currently on, and open up a dialog to allow you to choose which commits you want to squash and/or edit:

PICTURE OF DIALOG THAT OPENS UP


From here, you can update the text next to each commit to tell git what you want it to do:

* **edit** -- allows you to amend that particular commit
* **squash** -- merge this commit into the previous one




## Resources

* [Git Stashing](https://git-scm.com/docs/git-stash)
* [Git Rebase](https://git-scm.com/docs/git-rebase)