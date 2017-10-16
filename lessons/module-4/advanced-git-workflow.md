---
title: Advanced git Workflow
length: 60
tags: git, tooling, workflow
---

## Advanced Git Workflow

### Goals

By the end of this lesson, students should:

* know how to amend commits and squash others through interactive rebase
* be able to stage changes in patches rather than all at once
* understand when it's ok to rewrite history and the potential downfalls that occur when others are relying on your code


## Amending Commits

After making a commit, if you realize you want to add another change to that commit or have some code changes that you want to modify, you can stage your new changes and instead of creating a new commit for them, you can edit the previous commit with `git commit --amend`

This will add any staged changes to the previous commit, and open up the commit message for an opportunity to modify that as well. It's important to note that this feature **rewrites history**. Because you'll be amending a pre-existing commit, it will change the unique SHA (identifier) of that commit. If anyone else has based work off of the original commit, they'll get into a bad state where git doesn't know how to resolve the changes. Amending commits is useful for when you are working locally and/or individually, and nobody else is relying on your work. 

## Staging in Patches

One way to avoid making mistakes in your commits (either by adding too much to a single commit, or including debugger statements), is by staging your changes in patches. Often times, you'll get carried away working on a particular feature that includes a lot of code changes. Instead of having to stop and commit regularly, you can allow yourself to continue working through the entire feature - then break up your changes into smaller, more accurate commits when you're done.

This can be accomplished by staging your changes in patches. Instead of doing a `git add .`, which stages all of your changes, you can run `git add --patch`. 

This will walk you through each chunk of your changesets and ask you if you want to stage them or not. This is a good way to review your code before committing it, and make sure you keep all changes relevant to each commit.

![add patch][add-patch]

Git will automatically determine how to separate your changes into "chunks" so that they're readable and manageable when looking at them in the terminal. With each chunk, you will get a prompt that looks like this '`Stage this hunk [y,n,a,d,/,j,J,g,e,?]? ?` Each letter corresponds to an option you can select to perform an action on that particular hunk:

* y - stage this hunk
* n - do not stage this hunk
* a - stage this and all the remaining hunks in the file
* d - do not stage this hunk nor any of the remaining hunks in the file
* g - select a hunk to go to
* / - search for a hunk matching the given regex
* j - leave this hunk undecided, see next undecided hunk
* J - leave this hunk undecided, see next hunk
* k - leave this hunk undecided, see previous undecided hunk
* K - leave this hunk undecided, see previous hunk
* s - split the current hunk into smaller hunks
* e - manually edit the current hunk

## Interactive Rebasing & Squashing

In the effort to be committing tiny changesets very frequently, sometimes we can commit *too* much, and we want to go back and fixup our messages and history before we submit a pull request. For example, maybe you are making changes to your README file, and you keep going back and noticing more typos and formatting issues that need to be fixed. Every time you notice one, you make a new commit called something like 'Update README' - but now you have 10 different commits that are all related to fixing up the documentation. Wouldn't it be nice if we had caught all those errors at once and we could have just made them all in a single commit? That's what squashing allows you to do!

Many maintainers will ask you to go back and clean up the history by **squashing** your commits. Squashing commits means combining all the changesets into a single commit with a relevant message. We can accomplish this by doing an **interactive rebase**:

```bash
git rebase --interactive HEAD~4
```

This command would take the 4 most recent commits in the branch you're currently on (in reverse order), and open up a dialog to allow you to choose which commits you want to squash and/or edit:

![interactive rebase][interactive-rebase]


From here, you can update the text next to each commit that says 'pick', to tell git what you want it to do with that commit. The most common things you'll do are:

* **edit** -- allows you to amend that particular commit
* **squash** -- merge this commit into the previous one

If you want to do nothing with a particular commit, just leave the text alone as 'pick'. So, for example, in the rebase above, let's say we want to squash the 'stub' commits and the 'update' commits. We would update this prompt like so:

![squashing][squashing]

And git would run through the rebase process, stopping along the way to allow us to update the commit messages for the commits that we're squashing.


## Resources

* [Git Stashing](https://git-scm.com/docs/git-stash)
* [Git Rebase](https://git-scm.com/docs/git-rebase)



[add-patch]: /assets/images/lessons/advanced-git/add-patch.png
[interactive-rebase]: /assets/images/lessons/advanced-git/interactive-rebase.png
[squashing]: /assets/images/lessons/advanced-git/squashing.png
