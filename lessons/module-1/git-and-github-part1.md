---
title: Introduction to Git and GitHub - Part 1
length: 60
tags: git, github
---

### Learning Goals

In this lesson, you will learn how to:

* Use a version control system (in this case, Git)
* Start a project with Git
* Make local version contributions to a project using Git

## Git

### Some Context: What is Git, and why should we use it?

Git is a version control system (VCS). The Git language is a command-line language that you use from the terminal. We use Git to commit changes to our project. These commits serve as snapshots in time (or versions) of the project. A project that uses Git has a complete history of the code changes made throughout its existence, which can be powerful if you want to look at the origin of a bug, or if you want to revert to an old version of a project. Git is used throughout the software development community, not only for web development - it gives developers a robust way to collaborate, share, and maintain code bases.

### What Git is NOT

Git is NOT the same as GitHub.

We will work with GitHub later, but first we need to understand Git by itself. Despite their similar names, Git and GitHub are not the same thing. They work together, but they are their own distinct beasts. Git allows us to save specific versions of our work in a local repository on our computer. GitHub is an online Git project repository hosting service, which means it holds the directories that contain all the files and folders that make up our projects. GitHub also allows teams to work seamlessly together (most of the time) on the same codebase. Everyone on a team can pull down a local version of the repo on GitHub, and then, as work is done, the code is committed and pushed from the developer's local repo and added to the repo on GitHub.

## Git Setup

You already have your text editor up and running and Xcode installed, but if you have any questions about how those are set up, look at the bottom of this lesson.

### Install Homebrew

[Homebrew](http://brew.sh) is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

Open the Terminal and run the homebrew installation script:

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will ask you for your password. This is the password to log in to your account on the computer. It needs this because it installs its packages in a place that all users of this computer can access.

#### Verify Homebrew

When it has completed the installation run `brew doctor` and it should tell you that everything is fine:

```shell
brew doctor
Your system is ready to brew.
```

#### Modifying your PATH (if necessary)

If you got a warning from Homebrew about your path, do the following:

```shell
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

Now run `brew doctor` again and the warning should be gone.

### Install Git

[Git](http://git-scm.com/) is the version control system of choice in the JavaScript community and many others. XCode installed an older version of Git for you, but let's update it.

```shell
brew install git
==> Downloading http://git-core.googlecode.com/files/git-1.8.3.4.tar.gz
########################################################### 100.0%
```

### Configuring Git

If you haven't used Git before, then we need to configure it with some basic information about us. You might have done this during Computer Setup. If so, then you can skip this section.

We can tell git to configure itself using the `git config` command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the `--global` flag when we provide it with a new piece of configuration.

Tell git your name and email address by using the following commands, substituting your own name and email:

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Now we're ready to go!

## An Example Journey Through Git

#### Create a new directory

In your terminal, change into a directory where you can add Turing related projects. Once you are in that directory, create a new directory called `git-intro`. Change into that directory.

#### Initialize git (`git init`)

Once you are in the `git-intro` directory, in the terminal, type `git status`. What do you see? An error?

```shell
fatal: Not a git repository (or any of the parent directories): .git
```

This error says that this directory is not a git repository, and the terminal can't do what you're trying to ask of it.

For this command to recognize that command and give you useful information, we must initialize git for this specific directory. Type `git init` into the terminal.

Now type `git status` in the terminal, and you should see a different message. Now Git is tracking where you have made changes within this directory. We'll get into the status in a bit.

```shell
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```

Additionally, if we use `ls -la` to look in the directory, we can see a `.git` hidden directory. The `.git` directory is not something you need to worry about, and you will likely never modify it. It is used by Git to keep track of your change history (commits) - more on that later.

#### Add a file

Let's make this a real project and actually add some content! Add a new HTML file from the terminal using `touch index.html`.

#### Check status (`git status`)

We've added a file, and by doing that we've made changes in our directory. Does Git know about these changes? Let's check by checking the status of our repository using the command `git status`.

Now we see some new information! There is a section of this message that says "Untracked files:" with something that looks familiar - the name of the file we just created.

```shell
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	index.html

nothing added to commit but untracked files present (use "git add" to track)
```

#### Add file to staging area (`git add`)

If in the future we want to add these changes to our repository (and we do), then we need to add this file to the "staging area". To add the file to the staging area, use the command `git add index.html`. This command is saying to add the file named `index.html` to the staging area.

If we wanted to add all of the untracked files or changes, then we could use the command `git add .`. The dot `.` after `add` says add everything.

Let's check the status of our Git repository again: `git status`. Now we see the same file name under the heading "Changes to be committed:".

```shell
On branch master

Initial commit

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

We've basically added the basic HTML skeleton and an h1 in the body - no big deal.

Let's check the status of our repository again (`git status`). Git saw our changes! We know this because it says under "changes not staged for commit" that the `index.html` was modified.

Since we want to add these changes to our project (and the version history of the project), we need to add them to the staging area: `git add index.html`

Now that the changes are in the staging area, if we use `git status` to check the status of the repository again, there are now "changes to be committed".

Commit the changes - we should know this by now. For this commit, we added content to our `index.html` file, so the commit command (with message!) is: `git commit -m "Add HTML structure and h1 title"`

### Turn and Share

Now that we have worked on the basic editing workflow, turn to someone you're sitting next to and explain what we just did and why each step is necessary.

### Another Turn and Share: Look at your commit history (`git log`)

Type `git log` in the terminal. What do you see? Discuss with you partner what you think is being displayed in the terminal.

#### The master branch

When we type `git status`, part of the message we get back is "On branch master". What is a branch, and what is master??

In Git, there is a concept of branches. They represent a line of development. The master branch is typically the branch where the code works without known bugs. Ideally, we want to keep the master branch "clean" of bugs. So if we want to write new code, then we can branch off of master.

When you branch off of the master branch, that new branch can serve as a "sandbox" for development where you can make changes or experiment with a research spike without affecting the master branch.

[More info on branching.](https://www.atlassian.com/git/tutorials/using-branches/git-branch)

The general workflow is:

  * Make a new branch based on a feature you want to add
  * Checkout the branch
  * Make changes, add and commit the changes
  * Checkout master
  * Merge your branch into master

We'll practice this now!

#### Make a branch (`git branch` and `git checkout`)

Before we make a new branch, let's check what branch we are currently on. Type `git branch` in your terminal. This command lists all of the branches you have made and also tells us what branch we are on.

```shell
* master
```

We only have the default branch master right now, so it lists only `master`. The `*` denotes what branch we are currently on: master.

Let's make a new branch! The command to make a new branch is `git branch [branch name]`.

Type `git branch add-body-content` in the terminal. Now check `git branch` again. What do we see? We see our new branch name! However, the `*` is still next to the master branch. To change to our new branch, we need to "checkout" the branch.

```shell
add-body-content
* master
```

Let's checkout the new branch using the command `git checkout add-body-content`. To checkout any branch, the command is `git checkout [branch name]`. Now if we enter `git branch`, the asterisk shows we are on the new branch we just created.

```shell
* add-body-content
  master
```

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

You know, I don't like the changes we made to add text to the body. I wish there was a way we could go back to code we had before. Well there is! This is the advantage of making small commits - we can revert our project back to one of these commits that served as a snapshot in time.

Type `git log` in the terminal to see a history of our commits. For each commit, there is a special string of characters that uniquely identify each commit that is called a "hash". So there is the title of each commit, and then something like `commit 2951dd271a636583b394e19802c9703c260f45ac`, the hash.

We want to go back to the commit where we added the CSS file. To revert back to a commit, we have to use the hash to identify the unique commit. If we had 100 commits, and two of them had the same hash, then that would cause issues. So the hash is calculated to be a unique string.

In my case, the commit hash for the snapshot I want to go back to looks like this:

```shell
commit 2951dd271a636583b394e19802c9703c260f45ac
```

Your exact commit hash WILL BE DIFFERENT from the one above.

The command to revert to a previous commit is `git reset --hard [commit hash]`. So in this case, the command would be `git reset --hard 2951dd271a636583b394e19802c9703c260f45ac`

Now if we look at `git log`, the commit we reverted back to is the most recent and the commit with the paragraph content is no longer there. Reset `hard` reverts to the commit and removes any commits after that, which is something to be careful with.

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

To merge changes locally between branches, the command is `git merge [branch you want to merge changes from]`. You want to checkout the branch to merge changes into, then run the merge command. In our case, let's checkout master, which we have already done with `git checkout master`.

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

#### Aside: `PATH`

Your `PATH` is a system configuration property which tells your computer where to look for underlying programs when you want to run a command. By adding this directory to our `PATH`, we're telling the system how to find the various applications we will install using Homebrew

#### Aside: `~/.bash_profile`

When we use our terminal, we're actually using a program called a *shell* to interact with the underlying operating system. Specifically, we're using a shell called [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

The file `~/.bash_profile` contains settings and commands to help us configure the shell, so when we have a bit of configuration code such as setting our `PATH`, it often goes in our `~/.bash_profile`.

#### Text Editor and XCode

If you don't already have a favorite text editor, we recommend using [Atom](https://atom.io/). Also, make sure you have XCode installed (using the Apple App Store). To verify that you have XCode command line tools installed, enter the command `gcc -v` into your terminal.

The output should include something like `Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/c++/4.2.1`.

#### Setting Up Terminal Access for Atom

One of the things you'll do frequently is open an entire folder (like when working on a project) in your text editor. Let's get that setup:

1. Open Atom (`command-spacebar` for spotlight, type `Atom`, and hit enter).
2. Click the `Atom` menu in the top left corner
3. Click `Install Shell Commands`
4. Return to your terminal and enter `which atom`. You should get back `/usr/local/bin/atom`
5. Enter `atom .` to open your user directory in Atom.
6. Experiment with creating a file in Atom and using `ls` in the terminal to see it. Try creating a file in the terminal with `touch` and see if it shows up in Atom.

#### Setting Up XCode & Command Line Tools

XCode is a huge suite of development tools published by Apple. If we wanted to develop
software for the Apple Ecosystem (iPhone apps, Mac OS Apps, etc), we would use XCode as our editor.
But even if we aren't working in this ecosystem, XCode provides some system dependencies that we'll
want to have available.

You'll want to install it before attempting to install anything else.

1. Install XCode from the Apple App Store
2. Open the application after installing and agree to the SLA terms
3. Open `terminal` and run `xcode-select --install`, enter your user password
