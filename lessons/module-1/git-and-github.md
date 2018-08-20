---
title: Introduction to Git and GitHub
length: 120
tags: git, github
---

### Prework Setup: 

#### Add a public key to your github account

In order to push up to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/connecting-to-github-with-ssh/). This [video](https://www.youtube.com/watch?v=XsPVWGKK0qI) will walk you through the process and likely save you time.

#### Git

The first time you start using Git and GitHub, understanding how it all works can be a lot to take in.  Luckily, CodeCademy has a great walkthrough for Git on how the entire process works and some of the commands you'll commonly use.  Please complete [Section 1: Basic Git Workflow](https://www.codecademy.com/learn/learn-git), before the lesson.

### Learning Goals

In this lesson, you will learn how to:

* Use a version control system (in this case, Git)
* Start a project with Git
* Make local version contributions to a project using Git
* Use a version control system (Git) in conjunction with an online/remote repository (GitHub)

## Vocab

- `SSH Key` Similar to a password, except it's really long and complex, and you don't have to remember it. Does the same thing as a password, but is used differently
- `Version Control System (VCS)` A tool that keeps track of the differences in code bases at different points in time
- `Git` The most commonly used VCS
- `GitHub` A service/website that allows people to host git repositories online
- `Repository` A collection of code managed by git. Tends to be the folder your source files are in
- `Untracked Files` Files that are not managed by Git
- `Working Area` Where unstaged files live. Untracked files are not in the working area
- `Staging Area` Where staged files live
- `Commit` A snapshot of what your code looked like at a particular time
- `Remote` Remote, as in, a remote repository. As in, not a local repository. A remote is a repository that's stored somewhere that's not your local machine
- `Feature Branch` A branch created to hold a new feature while it's in development, as opposed to committing parts of an unfinished feature on master
- `Pull Request` A request to merge a branch into the default branch (usually master). Allows for control of the merge process as well as providing a place to review changes

## Git

### Some Context: What is Git, and why should we use it?

Git is a version control system (VCS). VCSs keep track of the differences in file systems at different points in time. We interact with Git **from the command line**. We use Git to commit changes to our project. These commits serve as snapshots in time (or versions) of the project. A project that uses Git has a complete history of the code changes made throughout its existence, which can be powerful if you want to look at the origin of a bug, or if you want to revert to an old version of a project. Git is used throughout the software development community, not only for web development - it gives developers a robust way to collaborate, share, and maintain code bases.

### What Git is NOT

**Git is NOT the same as GitHub**.

Despite their similar names, Git and GitHub are **not the same thing**. They work together, but they are their own distinct beasts. Git allows us to save specific versions of our work in a local repository on our computer. GitHub is an online Git project repository hosting service, which means it holds the directories that contain all the files and folders that make up our projects.  

GitHub also allows teams to work seamlessly together (most of the time) on the same codebase. Everyone on a team can pull down a local version of the repo on GitHub, and then, as work is done, the code is committed and pushed from the developer's local repo and added to the repo on GitHub.

## An Example Journey Through Git

#### Create a new directory

In your terminal, change into a directory where you can add Turing related exercises. Once you are in that directory, create a new directory called `git-and-github-intro`. Change into that directory.

Just to confirm we are starting from scratch, run the command `ls -a`. This will print out a list of files or directories nested within our current directory. At this time you should only see `./` and `../`.  

#### Initialize git locally (`git init`)

Once you are in the `git-and-github-intro` directory, in the terminal, type `git status`. You should see a line that looks something like this:  

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

Additionally, if we use `ls -a` to look in the directory, we can see a `.git` hidden directory. The `.git` directory is not something you need to worry about at this time, and you will likely never modify it. It is used by Git to keep track of your change history (commits) - more on that later.

### Three areas where code lives (within git)

# ![Git Areas](/assets/images/lessons/git/github-diagrams.001.jpeg)

1. Working Area
  * Where **unstaged files** live
2. Staging Area
  * Where files that are going to be a part of the next commit live
3. The Repository
  * The files git knows about!
  * Contains all of your commits

#### Add a file

Let's make this a real project and actually add some content! Add a new text file from the terminal using `touch pizza.txt`.

#### Check status (`git status`)

We've added a file, and by doing that we've made changes in our directory. Does Git know about these changes? Let's check by checking the status of our repository using the command `git status`.

Now we see some new information! There is a section of this message that says "Untracked files:" with something that looks familiar - the name of the file we just created.

```shell
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	pizza.txt

nothing added to commit but untracked files present (use "git add" to track)
```

#### Add file to staging area (`git add`)

If in the future we want to add these changes to our repository (and we do), then we need to add this file to the "staging area". To add the file to the staging area, use the command `git add pizza.txt`. This command is saying to add the file named `pizza.txt` to the staging area.

If we wanted to add all of the untracked files or changes, then we could use the command `git add .`. The dot `.` after `add` says add all untracked files in this repository.

Let's check the status of our Git repository again: `git status`. Now we see the same file name under the heading "Changes to be committed:".

```shell
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   pizza.txt
```

#### Commit the file (`git commit`)

Now that we have added the file to the staging area, we are ready to commit the file. Committing the file will "save" these changes to the Git history in this repository. Think of this as a snapshot of our directory (or a snapshot of our project).

Commit the file using the command: `git commit -m "Initial commit"`

The `-m` part of the command says we want to add a message to this commit. ALWAYS add a message. The message is information that you (or other developers) can use at a later time when you want to look back and see what changes were contained in a commit. We will view this history later.

The commit message above, `Initial commit` is a very common first commit message, used by developers everywhere when a project is first created. Best practice is to set up your github repository as soon as possible so you can start tracking changes, so this typically happens when you have your very basic file tree ready to start adding code.

##### A note on commit messages

A git commit message is the best way to communicate *context* about a change to other developers and your future self.

Basic rules of a decent commit message:
* Capitalize the subject line
* Do not end the subject line with a period
* Use the imperative mood in the subject line
* Explain what and why vs. how

Please read [Rules of Git Commit Messages](http://chris.beams.io/posts/git-commit/) for homework as it goes into more detail on what makes a great commit message.

If we check the status of the repository now (`git status`), then it tells us that there is "nothing to commit" because all of the changes we have made in this directory have been committed.

### Turn and Share

Now that we have worked through the basic git workflow, turn to someone you're sitting next to and explain what we just did and why each step is necessary.

### Turn and Share: Look at your commit history (`git log`)

Type `git log` in the terminal. What do you see? Discuss with you partner what you think is being displayed in the terminal.  

Checkout a condensed version of that report by running `git log --oneline`. What information gets left out compared to the `git log` command?  

## Incorporating GitHub

### Create repository on GitHub

Now let's create a repository on GitHub. This repository will sync with your local repository - the code you develop locally will be synced with this online repository so you can share code and collaborate.

Go to your GitHub profile. Click the green button called **New Repository**.

Under "Repository name", let's give this the same name as the directory we made locally. The convention is to keep these names the same to avoid any confusion.

### Add remote (origin) to local repository (`git remote`)

Now that we have an online (remote) repository, we have to connect it to our local repository. Git has a concept of a "remote". The remote is a place where we can push our code externally (like the cloud - GitHub).

The command to add a remote is, surprise, `git remote`. To add the remote, the generalized command is `git remote add [name-of-remote] [address-of-repository]`. Now we have to fill in these fields.

The name of the remote, by convention, is typically `origin`. If we go to the repository on GitHub, then the address is also given to us. For instance, my repository address is `git@github.com:damwhit/git-and-github-intro.git`.

So all together, enter the command `git remote add origin git@github.com:damwhit/git-and-github-intro.git` into the terminal.  

The local and remote repositories are now linked! (we can confirm that is the case by running `git remote -v`)

![Git Areas](/assets/images/lessons/git/github-diagrams.002.jpeg)

### Push up initial files (`git push`)
Finally, we need to push up our initial code from our local repository (aka your computer), to the remote repository (aka GitHub.com).  

`git push -u origin master`

Go back and visit the repository on github.com and refresh the page. If all went well you should see your files.  

```shell
On branch master
nothing to commit, working directory clean
```

#### Edit the file

Let's add some basic markup to our `pizza.txt` file. In that file file, type `html` and then hit tab to spit out a basic html skeleton, and add an appropriate title like "Git & GitHub Introduction"

Also, add an h1 title to the page of your choosing

Let's check the status of our repository again (`git status`). Git saw our changes! We know this because it says under "changes not staged for commit" that the `pizza.txt` was modified.

Running `git status` tells us what file has been modified but does not give us anything more. If we want to see exactly what changes occurred we can invoke the command `git diff` to see what they were.

Since we want to add these changes to our project (and the version history of the project), we need to add them to the staging area: `git add pizza.txt`

Now that the changes are in the staging area, if we use `git status` to check the status of the repository again, there are now "changes to be committed".

Commit the changes. For this commit, we added content to our `pizza.txt` file, so the commit command (with message!) is: `git commit -m "Add HTML structure and h1 title"`
Push your changes to the master branch by running: `git push origin master`

#### The master branch

When we type `git status`, part of the message we get back is "On branch master". Let's discuss the what git means by a "branch", and what is "master"?

In Git, there is this concept of branches. They represent a line of development. The master branch is typically the branch where the code works without known bugs.  

Ideally, we want to keep the master branch "clean" of bugs. So if we want to write new code, then we can branch off of master.

When you branch off of the master branch, that new branch can serve as a `sandbox` for development where you can make changes or experiment with a `research spike` without affecting the master branch.

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

**Pro Tip:** We can use the command `git checkout -b [branch name]` to both create and change to the `branch name` specified.

#### Make changes on the new branch

Now that we've checked out the new feature branch, we can start making changes on the branch. Let's add another text file to log toppings 

To add the CSS file, `touch toppings.txt`. In the CSS file, add a simple rule:

```
pepperoni
```

Link the stylesheet in the `<head>` of the `pizza.txt` file.

Add the file to staging, and commit the changes: `git add toppings.txt` and then `git commit -m "Add CSS file with background color"`.
Now push your changes to the remote `git push origin add-body-content`

Now let's add some content to the body (like our feature branch name said we were going to do) - just a chunk of paragraph text. So the HTML so far looks like:

```

```

Add and commit your changes - **Do not push yet**

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

No add some finalized content to the paragraph instead. It should look like this:

```html
```

Add, commit, and push your changes!

### Two ways to merge

Merging a branch means that you are updating one branch with another branch's changes.

#### Merge feature work to master branch (`git merge`)

To merge changes locally between branches, you should first move to the branch you want to update. Then run the command `git merge [branch you want to merge changes from]`. In our case, we want to make sure that we have all of the latest changes from master. 

Therefore we can run `git merge master`. Since our master branch has not been updated while we've been working on our feature branch, it will return:

```bash
Already up to date.
```

This step is most important when working on a team. We will want to make sure that our feature branch has merged master locally before we create a pull request.

**Note** Ideally you are only merging the changes from master into features branches locally and merging changes from feature branches into master via pull requests

#### Create a pull request on GitHub (PR)

On the GitHub repository page, there is now a notification of a recently pushed branch. On the right side of the notification, click **Compare & pull request**.

Now we can create a pull request (PR). A pull request is a formal way of merging code from one branch to another with the idea that someone can come in and review the code before it is merged. Often this is an opportunity for a "code review".

Edit the title of the pull request, if necessary, and add some more content in the description box about what you changed and why. When you are done describing the changes, click **Create pull request**.

### Merge pull request (PR)

Normally at this point, a coworker or project partner would view the pull request, make comments on the changes, and say if it should be merged or not. Since we are working by ourselves for this, our code is perfect! Let's merge the code into the master branch.

On the pull request page, make a comment that the PR was reviewed, and then click **Comment**.

Now that it has been reviewed, click **Merge pull request** and then **Confirm merge**. Merged!

Our changes from our branch that we pushed up to GitHub are now merged to the master branch **on GitHub**.

### What is going on locally?

Back in your local repository, checkout the master branch and notice the changes that were merged on GitHub are NOT on our local machine. We need to get those code changes from the remote repository so our local code is in sync.

### Pull remote master into our local version

If you haven't already, checkout the master branch: `git checkout master`

To get the changes from the master branch on GitHub to our local master branch, we need to "pull" down those changes. The general command is: `git pull [remote-name] [branch-of-remote-to-pull-down]`

In this case, enter the command: `git pull origin master`

Our changes are now completely synced. The master branch locally is the same as the master branch on GitHub. We can make more feature branches, add more features, and repeat the same process!

### Your turn

Your instructor has started a thread in slack. Please take a few minutes to ask any questions that have come up in going through this workflow.

### Fetching 

Let's say that one of your co-worker's is working on a feature branch, and is having trouble finding a bug. As long as your co-worker has pushed up their feature branch to GitHub, we can use the `git fetch` command to pull that branch, and all other remote branches to our local machine.

### Merge Conflicts

You might be wondering what happens if you're working on a project with a partner and you both make changes to the same line of code. This is called a merge conflict.

Merge conflicts happen when two different commits can't be automatically merged and they need to be resolved. Conflicts can occur when you pull down from origin or when you are creating a pull request to merge to master on GitHub.

In the event that this happens, you might get a message like this:

```
CONFLICT(content): Merge conflict in boots-and-pants.js
Automatic merge failed. Fix conflicts and commit the results.
```
This happens because GitHub doesn't know what code to believe.

Below is an example of what a conflict might look like upon inspection of the flagged file:

```javascript
// boots-and-pants.js

var a = 1;
<<<<<<<<<HEAD
var b = 2;
=========
var b = 0;
>>>>>>>>>39457094865893724234798326445
var d = 5;
var e = 3;
var r = 18;

```

The lines of code between HEAD and the set of equals signs (so in this case, var b = 2) are all of the changes you made that are in conflict. These are change that you have made on your computer.

Everything between the set of equals signs and the greater than signs followed by the conflicting commit number (var b = 0) are all of the changes from GitHub that you’re trying to pull down that are conflicting.

To resolve conflicts, you have to decide which of the two conflicting lines you want to keep and then remove the HEAD, the set of equals, and the conflicting commit line.

### A Typical Workflow

To summarize the example above, a typical workflow for a new project with Git and GitHub includes:

1. Initialize a new Git repository (repo) and make initial file structure
2. Create a new repository on GitHub
3. Link your local and GitHub repository (add remote)
4. Push structure to remote repository (on the master branch)
5. Check out a feature branch
6. Make changes to files
7. Add files to staging area
8. Commit changes
9. Push up the feature branch and make a PR
10. Go on GitHub, view the PR, and merge the PR
11. Locally, pull down master to your local master branch (to sync the remote with your local repository)

[Here is an excellent team workflow](http://frontend.turing.io/lessons/module-1/git-team-workflow.html)

## High Level Concepts

### Cloning 

# ![Git Clone Diagram](/assets/images/lessons/git/github-diagrams.003.jpeg)

In order to move a remote repository to your local machine (a process known as cloning), you can use the `git clone [remote url]` command. GitHub makes this easy for us by providing a big green button that says 'Clone or Download' on all repository pages. 

Let's clone the repo you just created in a new directory. Go to a new directory on your local machine that does not contain the `github-and-github-intro` directory. Go to the `github-and-github-intro` repository page on GitHub. Click on the 'Clone or Download' button, and copy the expanded url to your clipboard.

Now, from your terminal run `git clone [copied url]`. This will copy the github repo into a directory of the same name on your local machine.

### Forking

# ![Fork Diagram](/assets/images/lessons/git/github-diagrams.004.jpeg)

There are certain times where you will need to work on a codebase that you do not have `push` access rights to. This is the case when you need to update `turingschool/portfolios` repo. In situations like this we can `fork` the remote repo, which will create another remote repo of the same name under your own username, which in this case would be `damwhit/portfolios`. Now I have `push` access rights to the 'forked' repo and can create pull requests on the original repo.

### Your Turn

Practice by pushing up your Dog Party or Number Guesser project to GitHub.

To get even more practice, try completing the rest of the exercises under Basic Git Workflow at [CodeCademy](https://www.codecademy.com/learn/learn-git).  Specifically, do the exercises Manhattan Zoo and SnapFit Robots, Inc.  It is highly recommended that you also complete the quiz to solidify your understanding!

## Additional Resources

  * [git docs](https://git-scm.com/docs)
  * [Awesome Git Tutorial](https://githowto.com/)
  * [Rules of Git Commit Messages](http://chris.beams.io/posts/git-commit/)
  * [Visual Documentation and Examples for Git and GitHub](https://www.atlassian.com/git/tutorials/)
  * [GitHub Tutorials](https://guides.github.com/)
  * [Common git commands and a link to a giant cheetsheet](http://frontend.turing.io/lessons/module-1/git-commands.html)
