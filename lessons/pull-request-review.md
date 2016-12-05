---
title: Pull Request Deep Dive
module: 3
---

### Stuff You (should) Already Know

Pull requests are used to promote and facilitate app development within groups. It is important as a dev team to create small, modular branches that encapsulate the code you are working on for a particular feature. This includes writing helpful, descriptive commit messages that create a record of the development of your code.  

### Commit Message Structure
There are lots of good resources and examples via the google but here are a few to keep on hand:
* [5 Useful Tips from Thoughtbot](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message)
* [Note About Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

```
First line of commit message, capitalized with a 50 character limit

Body of commit message which can be any length. Not required, but useful to explain what exactly your commit does and any context behind the code. Convention is to use "present imperitive" tense, for example you should say "fix bug" not "fixes bug" or "fixed bug". General rule of thumb is your message should finish the sentence "If this commit is merged in, it will...".

- Bullets are OK in a commit body
- So are emojis :sparkles:
```

### What a PR Should Contain

* A clear, descriptive title.
  - The title should not say "Issue #2", because unless you are currently aware of what issues exist in a project, this provides zero information about the PR is aiming to accomplish. A better title would be "View Individual Reminder"

* A detailed description of what the pull request contains and why it was important to submit it.

* A screenshot or gif if the change is visual, including a before/after comparison if applicable.

* A line to automatically close a particular issue, ie: `closes #12` (#12 being the ID of the issue)

### Automatically Close PR/Issues

Technically you can close an issue within both the commit message and the PR. Simply add the line `closes #12` in the body of a commit message. Best practice is to avoid doing this in the commit message as it updates the issue multiple times if the commit is touched in a rebase or moved around.  

Instead, put this line in the description of your PR. Once the PR has been successfully merged into master, the issue will be automatically closed.  

You can use multiple buzzwords to accomplish the same task. Adding `closes #45` will automatically close issue 45. You could also say `Fixes #45`, `Resolve 45`, and others. [Check out the list here](https://help.github.com/articles/closing-issues-via-commit-messages/). (Note that the link refers to closing issues in a commit message but the same syntax applies to the description in a PR.)

You can also close multiple at once. Adding the sentence `This PR closes #45, closes #33, and closes #12` would close all of the listed issues.


### Common Mistakes

* Continuing to commit to a PR branch after making the initial PR request.
  - When those commits are pushed up to github, they will become part of the initial request causing confusion and a boatload of extra code not related to the original PR.
  - Each PR should have code relating to a single feature. Additional code for a second or separate feature should be committed on a separate branch, therefore through a separate PR.
  - Exception: When a PR is used as a "WIP PR" that is used to initiate an on-going conversation - you'll usually see `WIP` in the title of the PR, which stands for "Work In Progress".

* Keep an eye on the destination branch. `git push origin master` is not the same as `git push origin feature-a`


### A PR Love Story

Let's say you're working on a feature, we'll call it "Feature A".

* While working on Feature A, create a new branch called `feature-a`
* When ready to merge to master, submit a PR for Feature A
* The ONLY CODE in said PR should BE RELEVANT to Feature A
* Feature A gets merged into master, `feature-a` branch can be deleted.
* Everyone pulls down fresh copy of master.
* Repeat.

Often, you'll be waiting for the `feature-a` branch to be merged into master but you'll want to get started on Feature B while you wait. The process for that looks like this:  

* Feature B depends on the work you did for Feature A.
* The PR for `feature-a` branch has not been merged in, but you want to continue to make progress
* Create a new branch `wip-feature-b`, **branched from the `feature-a` branch**.
* Work on Feature B on the `wip-feature-b` branch.
* Wait for `feature-a` to be merged into master
* Upon successful merge, pull down a fresh copy of master that now contains Feature A.
* Create a new branch called `feature-b` **from master**.
* The `feature-b` branch will now have Feature A's code since it was merged into master.
* Use `git cherry-pick <commitSHA>` ([docs](https://git-scm.com/docs/git-cherry-pick)) to pull in **ONLY** the commits you made in `wip-feature-b` that apply to the feature B situation
* Submit a PR for feature B with the `feature-b` branch

### Cleaning Up Commit History
 Often when you're ready to merge, there will be multiple commits that are not important to the workflow history of the branch being merged in. For example, nobody needs to see the time you ran `git commit -m "F U WEBPACK"`, or how many times your commit message read `fix merge conflict`.  

 This is where rebasing, and squashing come in.  

#### Rebasing Commits
[Documentation](https://git-scm.com/docs/git-rebase)  

Running the command `git rebase -i HEAD~5` (where `5` is the number of commits you want to adjust) your editor will open up with the last 5 commits listed. This allows you to reorder, "squash", and reword the commit messages as you see fit.

Why use rebase?  

Let's say you committed some code and made a mistake in your first commit, then fix said mistake in a later commit. When someone else is reviewing your code, they will read commits chronologically and see that first mistake without knowing that later it has already been addressed. Rebasing allows your to compress your commits to avoid this situation, among others.

#### Squashing Commits
[Squashing Commits with Rebase](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)  

**WORD OF CAUTION** only squash commits that haven't been pushed to an external repository. IE if you're already merged into master, it's too late. Only rebase and squash commits that don't affect anyone else's potential code base.

When you merge a feature branch into master, all of your commits are retained. Sometimes you'll have a few in there that aren't needed..like `oops forgot to delete that comment`. Although the history is helpful as you're working on the feature, certain commits aren't useful to other developers walking through the more pivotal changes in your app.  

* Step 1: `git rebase -i HEAD~5`
  - Git will now know that you want to make changes to the last 5 commits made to your branch, and pop open an editor. You'll see something like this:

```
pick 01d1124 This is the commit I care about
pick 6340aaa Some other commit I made that isn't important
pick ebfd367 Dont care other stuff blah
pick 30e0ccb Crap forgot to delete a comment somewhere

# Rebase 60709da..30e0ccb onto 60709da
#
# Commands:
#  p, pick = use commit
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

* Step 2: Assuming I want to squash all of the commits into that first one, I would adjust the top of the file to look like this:

```
pick 01d1124 This is the commit I care about
squash 6340aaa Some other commit I made that isn't important
squash ebfd367 Dont care other stuff blah
squash 30e0ccb Crap forgot to delete a comment somewhere
```

Save the file, and another window should pop up with more information. At this time you can make changes to the first commit message that is a more accurate description of what's going on. Save, and close the file. Run `git log`. Your commits have been squashed!

#### Amending Commits

`git commit --amend` allows you to edit the most recent commit message without affecting any of the code that was written/modified.  

It's useful to make small changes - like forgetting to format a message correctly or add additional details to the message.   

Note that using this command replaces the message completely - to git, this will look like a brand new commit with no record of the previous commit.  

### Example PRs
[They Dont Have to Be Boring](https://github.com/bitly/dablooms/pull/19)
