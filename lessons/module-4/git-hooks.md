---
title: Advanced Git Workflow
length: 2 hours
tags: git, workflow, agile
module: 4
---

### Goals

By the end of this lesson, you will:

* understand how to create and use git hooks to automate common developer workflow processes
* know how to amend commits and squash others through interactive rebase
* be able to stage changes in patches rather than all at once
* understand when it's ok to rewrite history and the potential downfalls that occur when others are relying on your code

## Git Hooks

As developers, we're constantly looking for ways to automate tedious tasks. We're essentially trying to put ourselves out of the job by writing scripts that will do it for us. Let's talk about git hooks.

[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are custom scripts that you can write to execute particular tasks during certain points of the git workflow process. They let you interrupt the flow of a git event -- such as a commit -- to do things like verify that the code you're committing is linted and tested. They can be written in any language understood by the terminal (bash, node, ruby, python, etc.) When used in conjunction with other workflow tools and processes, you can create some really seamless patterns for maintaining any kind of codebase.

Similar to the lifecycle methods in React or other JavaScript frameworks, you'll recognize some lifecycle patterns within the git version control system. For example, every time we make a commit, there are four distinct phases: 

* `pre-commit` - runs before the commit is even attempted, can be used to do a quick QA evaluation on the code that's about to be committed
* `prepare-commit-msg` - runs before the commit message is made but after a default message is created, e.g. merge commits are auto-generated and can be adjusted at this point in the cycle
* `commit-msg` - runs after the commit message has been made, can be used to verify that your message follows a required pattern (e.g. capital first letter, no punctuation, command-style sentence)
* `post-commit` - runs after the entire commit process is completed, can be used to run another script based on information from the most recent commit

Git hooks allow us to effectively 'pause' the commit cycle at each of these four phases. There are additional hooks for facilitating a custom email workflow and manipulating other git actions such as rebasing. These aren't used quite as often as the commit hooks, but it's good to be aware they exist.

### Why?

* **We Don't Have to Wait for a Build Process:** We just saw how CircleCI builds will sometimes fail if we have a failing test or our code doesn't pass the linting rules we've set. Builds can take significant time when we have complex applications, so we want to minimize the chances that we'll start a build that's going to fail. One way we can do that is by running our tests and linting checks before we even commit our code with a `pre-commit` hook.
* **They ensure your commits are flawless:** If you verify the integrity of your code before committing it, you'll never have to go back and add a separate commit that says 'Fix linting errors' or 'Remove console.logs'. These types of commits clutter up the history and make it more difficult to search past versions of the project.
* **They enable you to be a slob:** You can carry-on with your normal workflow and write messy code...and no one will be the wiser. Git will clean it all up for you (or at least remind you to do so) before your teammates see what a mess you've made.

## The .git Directory
Whenever we create a new local git repo, a `.git` directory is included in our project. This is where our git hooks live! The `.git` directory holds all sorts of secrets and goodies related to the version control process for our project. It maintains an immense amount of information, including all the deltas and changesets you've ever made. So even if you delete a commit or think you've lost some important code, never fear -- you can always jump into the depths of the `.git` directory and retrieve it. *(If you've ever committed your `node_modules` directory, you'll notice all of your clones and pulls are incredibly slow because that changeset still exists in the history somewhere, even after you delete it.)*


## Creating a `pre-commit` hook
If we were to `cd` into `.git/hooks` we can actually see a couple of sample hooks that git provides us with by default. You'll notice the filenames all end with `.sample`. This is what's preventing them from actually running. If we want to implement one of these hooks, we could simply remove the `.sample` suffix. 

### Pre-Commit: Testing
Let's rename `pre-commit.sample` to `pre-commit` and open it in your text editor. We're going to create a `pre-commit` hook that prevents us from committing code that doesn't conform to our linting and testing standards. We're not going to use any of the example functionality that was included, so we can remove everything in this file and replace it with the following:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent
```

Now if we have a failing test, our pre-commit hook should catch that and prevent the commit from going through. This hook is super simple right now, because a failing test automatically causes the process to exit with an error.

### Pre-Commit: Linting

If we were to add linting to this hook:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent
npm run lint --silent
```

### Pre-Commit: Console.Logs/Accepting User Input

We might also want to check for `console.logs` or `debugger` statements in our code before committing. Sometimes (though rarely), you might actually want to include an intentional `console.log`. With the following script, we can allow users to choose whether or not to continue with the commit if any logs are detected:

```bash
echo "\nChecking for console.logs()...\n"

exec 1>&2
# enable user input
exec < /dev/tty

consoleregexp='^\+.*console\.log('
debuggerregexp='debugger'

if test $(git diff --cached | grep $consoleregexp | wc -l) != 0
then
  exec git diff --cached | grep -ne $consoleregexp
  read -p "You have added one or more console logs in your modification. Are you sure want to continue? (y/n)" yn
  echo $yn | grep ^[Yy]$
  if [ $? -eq 0 ]
  then
    exit 0; # Let the user continue
  else
    exit 1; # Don't let the user continue
  fi
fi
if test $(git diff --cached | grep $debuggerregexp | wc -l) != 0
then
  exec git diff --cached | grep -ne $debuggerregexp
  read -p "You have added one or more debuggers in your modification. Are you sure want to continue? (y/n)" yn
  echo $yn | grep ^[Yy]$
  if [ $? -eq 0 ]
  then
    exit 0; # Let the user continue
  else
    exit 1; # Don't let the user continue
  fi
fi
```

*Note: In order for a hook file to run, it must be made executeable. You can make a file executeable by running:* 

```bash
chmod +x hooks/filename
```

## Sharing Hooks
By default, git hooks exist in the `.git/hooks` directory of your local repo. You'll notice that this isn't a directory that gets pushed to github, so when new contributors pull down your repo, they won't have the same hooks in place that the rest of the team might be using. There are a couple of ways to get around this.

As of Git 2.9, you can set a git configuration option `core.hooksPath` that will override the default `.git/hooks` directory. This would allow you and your team to put your hooks in an internal, standalone repository that each developer could clone down and reference with the `core.hooksPath` option.

In earlier versions of Git, you could implement this same strategy by creating a symlink from the `.git/hooks` directory to your local repository of your team's git hooks.

Both of these strategies can be facilitated by a library like [git-validate](https://github.com/nlf/git-validate). With git-validate, you can create a separate repository to hold things like a common linting configuration and rules for your pre-commit hooks.

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
* [Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)
* [Git Hooks Guide](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
* [Git Hooks Reference](https://git-scm.com/docs/githooks)
* [GitHub Issues from Command Line](https://github.com/stephencelis/ghi)
* [Node.js pre-commit](https://github.com/observing/pre-commit)
* [Fit Commit](https://github.com/m1foley/fit-commit)




[add-patch]: /assets/images/lessons/advanced-git/add-patch.gif
[interactive-rebase]: /assets/images/lessons/advanced-git/interactive-rebase.png
[squashing]: /assets/images/lessons/advanced-git/squash.png


