---
title: Introduction to Git and GitHub - Part 1
length: 90
tags: git, github
---

### Learning Goals

In this lesson, you will learn how to:

* Use a version control system (in this case, Git)
* Start a project with Git
* Make local version contributions to a project using Git

## Git

### Some Context: What is Git, and why should we use it?

Git is a version control system (VCS). We interact with Git **from the command line**. We use Git to commit changes to our project. These commits serve as snapshots in time (or versions) of the project. A project that uses Git has a complete history of the code changes made throughout its existence, which can be powerful if you want to look at the origin of a bug, or if you want to revert to an old version of a project. Git is used throughout the software development community, not only for web development - it gives developers a robust way to collaborate, share, and maintain code bases.

### What Git is NOT

**Git is NOT the same as GitHub**.

We will work with GitHub later, but first we need to understand Git by itself.  

Despite their similar names, Git and GitHub are **not the same thing**. They work together, but they are their own distinct beasts. Git allows us to save specific versions of our work in a local repository on our computer. GitHub is an online Git project repository hosting service, which means it holds the directories that contain all the files and folders that make up our projects.  

GitHub also allows teams to work seamlessly together (most of the time) on the same codebase. Everyone on a team can pull down a local version of the repo on GitHub, and then, as work is done, the code is committed and pushed from the developer's local repo and added to the repo on GitHub.

## An Example Journey Through Git

#### Create a new directory

In your terminal, change into a directory where you can add Turing related exercises. Once you are in that directory, create a new directory called `git-intro`. Change into that directory.

Just to confirm we are starting from scratch, run the command `ls -la`. This will print out a list of files or directories nested within our current directory. At this time you should only see `./` and `../`.  

#### Initialize git (`git init`)

Once you are in the `git-intro` directory, in the terminal, type `git status`. You should see a line that looks something like this:  

```shell
fatal: Not a git repository (or any of the parent directories): .git
```

By running the command `git status`, you are essentially telling the current directory "hey, go find a file called `.git`, and find out the status of tracking my files through."  

The error we get says that we haven't created a `.git` file, which means the directory we're in is not a git repository, and the terminal can't do what you're trying to ask of it.  

For the terminal to recognize the command `git status` and give you useful information, we must initialize git for this specific directory.  

Type `git init` into the terminal.  

What does the output say?

```shell
Initialized empty Git repository in /Users/username/whatever/directory/.git/
```

Now type `git status` in the terminal, and you should see a different message. Now Git is tracking where you have made changes within this directory. We'll get into the status in a bit.

```shell
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Additionally, if we use `ls -la` to look in the directory, we can see a `.git` hidden directory. The `.git` directory is not something you need to worry about at this time, and you will likely never modify it. It is used by Git to keep track of your change history (commits) - more on that later.

#### Add a file

Let's make this a real project and actually add some content! Add a new HTML file from the terminal using `touch index.html`.

#### Check status (`git status`)

We've added a file, and by doing that we've made changes in our directory. Does Git know about these changes? Let's check by checking the status of our repository using the command `git status`.

Now we see some new information! There is a section of this message that says "Untracked files:" with something that looks familiar - the name of the file we just created.

```shell
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	index.html

nothing added to commit but untracked files present (use "git add" to track)
```

#### Add file to staging area (`git add`)

If in the future we want to add these changes to our repository (and we do), then we need to add this file to the "staging area". To add the file to the staging area, use the command `git add index.html`. This command is saying to add the file named `index.html` to the staging area.

If we wanted to add all of the untracked files or changes, then we could use the command `git add .`. The dot `.` after `add` says add all untracked files in this repository.

Let's check the status of our Git repository again: `git status`. Now we see the same file name under the heading "Changes to be committed:".

```shell
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   index.html
```

#### Commit the file (`git commit`)

Now that we have added the file to the staging area, we are ready to commit the file. Committing the file will "save" these changes to the Git history in this repository. Think of this as a snapshot of our directory (or a snapshot of our project).

Commit the file using the command: `git commit -m "Add new index HTML file"`

The `-m` part of the command says we want to add a message to this commit. ALWAYS add a message. The message is information that you (or other developers) can use at a later time when you want to look back and see what changes were contained in a commit. We will view this history later.

If we check the status of the repository now (`git status`), then it tells us that there is "nothing to commit" because all of the changes we have made in this directory have been committed.

```shell
On branch master
nothing to commit, working directory clean
```

#### Edit the file

Now that we have an empty `index.html` file, let's add some basic markup. Add this HTML to the file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>My New Site!</h1>
  </body>
</html>
```

All we did here is create a basic HTML skeleton, adding an `<h1>` to the body of our page.  

Let's check the status of our repository again (`git status`). Git saw our changes! We know this because it says under "changes not staged for commit" that the `index.html` was modified.

Running `git status` tells us what file has been modified but does not give us anything more. If we want to see exactly what changes occurred we can invoke the command `git diff` to see what they were.

Since we want to add these changes to our project (and the version history of the project), we need to add them to the staging area: `git add index.html`

Now that the changes are in the staging area, if we use `git status` to check the status of the repository again, there are now "changes to be committed".

Commit the changes. For this commit, we added content to our `index.html` file, so the commit command (with message!) is: `git commit -m "Add HTML structure and h1 title"`

### Turn and Share

Now that we have worked on the basic editing workflow, turn to someone you're sitting next to and explain what we just did and why each step is necessary.

### Another Turn and Share: Look at your commit history (`git log`)

Type `git log` in the terminal. What do you see? Discuss with you partner what you think is being displayed in the terminal.  

Checkout a condensed version of that report by running `git log --oneline`. What information gets left out compared to the `git log` command?  

#### The master branch

When we type `git status`, part of the message we get back is "On branch master". Let's discuss the what git means by a "branch", and what is "master"?

In Git, there is this concept of branches. They represent a line of development. The master branch is typically the branch where the code works without known bugs.  

Ideally, we want to keep the master branch "clean" of bugs. So if we want to write new code, then we can branch off of master.

When you branch off of the master branch, that new branch can serve as a `sandbox` for development where you can make changes or experiment with a `research spike` without affecting the master branch.

[More info on branching.](https://www.atlassian.com/git/tutorials/using-branches/git-branch)

The general workflow is:

  * Make a new branch based on a feature you want to add
  * Checkout the branch
  * Make changes, add and commit the changes
  * Checkout master
  * Merge your branch into master

Let's practice this.

#### Creating A Branch   
(`git branch` and `git checkout`)  

Before we make a new branch, let's check what branch we are currently on.

Command to identify current branch: `git branch`  
This command lists all of the branches you have made and also tells us what branch we are on.

```shell
* master
```

We only have the default branch master right now, so it lists only `master`. The `*` denotes what branch we are currently on. In this case: `master`.

Let's make a new branch! The command to make a new branch is `git branch [branch name]`.

Type `git branch add-body-content` in the terminal. Now check `git branch` again. What do we see? We see our new branch name! However, the `*` is still next to the master branch.  

```shell
add-body-content
* master
```

To change to our new branch, we need to "checkout" the branch.  

Let's checkout the new branch using the command `git checkout add-body-content`. To checkout any branch, the command is `git checkout [branch name]`. Now if we enter `git branch`, the asterisk shows we are on the new branch we just created.

```shell
* add-body-content
  master
```

Pro Tip: We can use the command `git checkout -b [branch name]` to both create and change to the `branch name` specified.

#### Make changes on the new branch

Now that we've checked out the new feature branch, we can start making changes on the branch. Let's add a CSS file and some more content to the body.

To add the CSS file, `touch styles.css`. In the CSS file, add a simple rule:

```CSS
body {
  background-color: lightgray;
}
```

Link the stylesheet in the `<head>` of the `index.html` file.

Add the file to staging, and commit the changes: `git add styles.css` and then `git commit -m "Add CSS file with background color"`.

Now let's add some content to the body (like our feature branch name said we were going to do) - just a chunk of paragraph text. So the HTML so far looks like:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>My New Site!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </body>
</html>
```

Go ahead and add this change to the staging area and commit the change.

#### Revert to old versions/snapshots (`git reset`)

You know, I don't like the changes we made to add text to the body. I wish there was a way we could go back to code we had before. Well, there is! This is the advantage of making small commits - we can revert our project back to one of these commits that served as a snapshot in time.

Type `git log` in the terminal to see a history of our commits. For each commit, there is a special string of characters that uniquely identify each commit that is called a "hash", or a "sha". So there is the title of each commit, and then something like `commit 2951dd271a636583b394e19802c9703c260f45ac`. That giant string of numbers/letters is the "sha" or "hash" (those words are frequently used interchangeably).

We want to go back to the commit where we added the CSS file. To revert back to a commit, we have to use the hash to identify the unique commit. If we had 100 commits, and two of them had the same hash, then that would cause issues. So the hash is calculated to be a unique string.

In my case, the commit hash for the snapshot I want to go back to looks like this:

```shell
commit 2951dd271a636583b394e19802c9703c260f45ac
```

Your exact commit hash WILL BE DIFFERENT from the one above.

The command to revert to a previous commit is `git reset [commit hash]`. So in this case, the command would be `git reset 2951dd271a636583b394e19802c9703c260f45ac`

Note - this will keep all changes since the previous commit as unstaged changes.

To reset to a previous commit and erase all changes since that commit, you can add the `--hard` flag, which is something to be careful with. Doing so will make the whole command look like this instead: `git reset --hard [commit hash]`.

Lets go ahead and run `git reset --hard [commit hash]`

Now if we look at `git log`, the commit we reverted back to is the most recent and the commit with the paragraph content is no longer there.  

We reverted back to a state where we didn't have paragraph content, which seems trivial. We could have just deleted the paragraph! Imagine if you have multiple files with many changes. In that case, resetting to a previous commit makes grouping all of those changes much easier.

#### Merge feature work to master branch (`git merge`)

Let's add some content to the body again, something simple, and commit it:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>My New Site!</h1>

    <p>
      Finalized content!
    </p>
  </body>
</html>
```

Now that we are satisfied with the content on our `index.html` page, we are ready to put this code on the master branch. Let's first checkout the master branch with `git checkout master`. If we take a look at the `index.html` page, our changes aren't there! It's ok, the changes are still on the feature branch `add-body-content`. Our goal is to take the changes from the feature branch and merge them into the master branch.

To merge changes locally between branches, you should first move to the branch you want to update. Then run the command `git merge [branch you want to merge changes from]`. In our case, let's checkout master, which we can do by running `git checkout master`.

Now run `git merge add-body-content`. Our changes are now in master! We have now successfully made changes on a feature branch, kept master clean of unwanted code, and merge our finalized changes into master.

### Typical Git Workflow

From the example we worked through above, we can come up with a common workflow when we are only using Git locally (without worrying about GitHub yet).

1. Make a new project directory
2. Initialize the directory (`git init`)
3. Make and checkout a feature branch (`git branch` and `git checkout`)
4. Make changes to the code, add to staging area, and then commit the changes (`git add`, `git commit`)
5. Checkout the master branch and merge changes into master from the feature branch (`git merge`)
6. Repeat with more feature branches!

## Additional Resources

  * [git docs](https://git-scm.com/docs)
  * [Awesome Git Tutorial](https://githowto.com/)
  * [Rules of Git Commit Messages](http://chris.beams.io/posts/git-commit/)
  * [Visual Documentation and Examples for Git and GitHub](https://www.atlassian.com/git/tutorials/)
