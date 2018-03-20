---
title: Introduction to Git and GitHub - Part 2
length: 90
tags: git, github
---

### Learning Goals

In this lesson, you will learn how to:

* Use a version control system (Git) in conjunction with an online/remote repository (GitHub)
* Start a project locally and synchronize your changes with the remote repository

## GitHub

### Prework Setup: 

#### Add a public key to your github account

In order to push up to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/ articles/generating-an-ssh-key/).

### Some Context: What is GitHub, and why do we use it?

We learned how to use Git from the terminal in the last lesson to control the versions of our projects (repositories) - that work was all done locally. It was hard to share your code with anyone else on another computer. Today, we'll learn how to push your code up to the cloud! We can use an website called GitHub to store your code and make it much easier to share code and collaborate with others.

Again, Git is NOT the same thing as GitHub! Git is the local command-line tool for version control, and GitHub is a website to share your code.

## An Example Journey Using GitHub (and Git)

Some of this is review from the Git introductory lesson, but there are all of the new GitHub workflow concepts in this example. We use Git in conjunction with GitHub, even though they are separate entities.

For this example, we'll create a basic HTML page with a simple JavaScript file for DOM manipulation.

### Create a new directory and initialize Git (`git init`)

To start, create a new directory for this project. `mkdir github-intro` and then `cd` into that directory (`cd github-intro`).

Once we are in the new directory, initialize the repository using `git init`. Now we can start tracking our changes using Git (locally).

### Create repository on GitHub

Now let's create a repository on GitHub. This repository will sync with your local repository - the code you develop locally will be synced with this online repository so you can share code and collaborate.

Go to your GitHub profile. Click the green button called **New Repository**.

Under "Repository name", let's give this the same name as the directory we made locally. The convention is to keep these names the same to avoid any confusion.

### Add remote (origin) to local repository (`git remote`)

Now that we have an online (remote) repository, we have to connect it to our local repository. Git has a concept of a "remote". The remote is a place where we can push our code externally (like the cloud - GitHub).

The command to add a remote is, surprise, `git remote`. To add the remote, the generalized command is `git remote add [name-of-remote] [address-of-repository]`. Now we have to fill in these fields.

The name of the remote, by convention, is typically `origin`. If we go to the repository on GitHub, then the address is also given to us. For instance, my repository address is `git@github.com:robbiejaeger/github-intro.git`.

So all together, enter the command `git remote add origin git@github.com:robbiejaeger/github-intro.git` into the terminal.  

The local and remote repositories are now linked!

![Git Areas](/assets/images/lessons/git/github-diagrams.002.jpeg)

### Push up initial files (`git push`)
Finally, we need to push up our initial code from our local repository (aka your computer), to the remote repository (aka GitHub.com).  

First, let's add a couple boilerplate files for an initial setup.

`touch index.html styles.css`  

Then, in the `index.html` file, type `html` and hit enter to spit out the basic skeleton of our file, and add an appropriate title like "GitHub Introduction". This is enough to push our files on up to the remote repository that we've created.

All together now!  

`git add .`  
`git commit -m "Initial commit"`

`git push -u origin master`

The commit message above, `Initial commit` is a very common first commit message, used by developers everywhere when a project is first created. Best practice is to set up your github repository as soon as possible so you can start tracking changes, so this typically happens when you have your very basic file tree ready to start adding code.  

Go back and visit the repository on github.com and refresh the page. If all went well you should see your files.  

### Add some code

For this first part, let's work off of the master branch. In the files we've created, put the code:

```html
<!--index.html-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Beautiful Web Page</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1> Wow, Git and GitHub are pretty neat</h1>
  </body>
</html>
```

```css
/* styles.css */

body {
  background-color: chartreuse;
}
```

### Commit files (`git add`, `git commit`)

Just like we did before, let's add these changes to the staging area and commit the changes:

`git add .`

`git commit -m "Add HTML and CSS file structure"`

### Push up the master branch to GitHub (to the remote repository) (`git push`)

The goal here is to take the new code that we have added locally and push it up to the online, remote repository (GitHub).

To get our code into the remote repository, we need to "push" it up there. The command is: `git push [remote-name] [branch-name-to-push-to-remote]`

So in our case, we want to push the code from our master branch to the remote repository called "origin". The exact command in this case is: `git push origin master`

Now if we look at the GitHub repository, we see our new code, and updated commit messages!

### Checkout to a feature branch (`git checkout -b`)

Let's keep it going and use our preferred feature branch workflow. Let's create and checkout to a feature branch using `git checkout -b add-heading-styles`.

In the `styles.css` file, add the lines of code:

```css
h1 {
  background-color: magenta;
  color: chartreuse;
}
```

### Commit feature work (`git add`, `git commit`)

Add the changes to the staging area, and commit the changes, just as before:

`git add styles.css`

`git commit -m "Add styles to h1"`

### Push the branch up to GitHub (`git push`)

We're satisfied with the work done on this branch. Now we can push this branch up to GitHub and merge it to master there. To push this branch, we use the same `git push` command as before, but with a slight change:

Enter the command: `git push origin add-heading-styles`

With that command, we pushed the `add-heading-styles` branch up to the remote repository named `origin`. If we look on GitHub, the code on the master branch has not changed, but we do see a notification of a new branch.

### Create a pull request on GitHub (PR)

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

### Fetching 

Let's say that one of your co-worker's is working on a feature branch, and is having trouble finding a bug. As long as your co-worker has pushed up their feature branch to GitHub, we can use the `git fetch` command to pull that branch, and all other remote branches to our local machine.

## Merge Conflicts

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

## A Typical Workflow

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

## Cloning 

# ![Git Clone Diagram](/assets/images/lessons/git/github-diagrams.003.jpeg)

In order to move a remote repository to your local machine (a process known as cloning), you can use the `git clone [remote url]` command. GitHub makes this easy for us by providing a big green button that says 'Clone or Download' on all repository pages. 

Let's clone the repo you just created in a new directory. Go to a new directory on your local machine that does not contain the `github-intro` directory. Go to the `github-intro` repository page on GitHub. Click on the 'Clone or Download' button, and copy the expanded url to your clipboard.

Now, from your terminal run `git clone [copied url]`. This will copy the github repo into a directory of the same name on your local machine.

## Forking

# ![Fork Diagram](/assets/images/lessons/git/github-diagrams.004.jpeg)

There are certain times where you will need to work on a codebase that you do not have `push` access rights to. This is the case when you need to update `turingschool/portfolios` repo. In situations like this we can `fork` the remote repo, which will create another remote repo of the same name under your own username, which in this case would be `damwhit/portfolios`. Now I have `push` access rights to the 'forked' repo and can create pull requests on the original repo.

### Your Turn

Practice by pushing up your Dog Party or Number Guesser project to GitHub.

## Additional Resources

### More GitHub

  * [GitHub Tutorials](https://guides.github.com/)
  * [Common git commands and a link to a giant cheetsheet](http://frontend.turing.io/lessons/module-1/git-commands.html)
