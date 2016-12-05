---
title: Introduction to Git and GitHub - Part 2
length: 60
tags: git, github
---

### Learning Goals

In this lesson, you will learn how to:

* Use a version control system (Git) in conjunction with an online/remote repository (GitHub)
* Start a project locally and synchronize your changes with the remote repository

## GitHub

### Some Context: What is GitHub, and why do we use it?



Again, Git is NOT the same thing as GitHub!

## Setup

In order to push up to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/generating-an-ssh-key/).

## Working Example...

* Create directory (new directory from previous lesson)
* Initialize git
* Create repository on GitHub (naming convention: these names should be the same to avoid confusion)
* Add remote (origin) to local repository - we are now linked!
* Checkout branch
* Add HTML file
* Add content
* Commit changes
* Add more content (just for commit repetition)
* Commit new content, at this point happy to merge with master

This is where things differ greatly.

* Push the branch up to GitHub (go to GitHub and view the branch and changes)
* Create a pull request (PR)
* View changes and merge (into master - view master to see the changes are on master)
* Back to the local repository, checkout master and notice the changes that were merged on GitHub are NOT on our local machine
* Pull remote master into our local version
* Checkout new branch and repeat the process...

## A Typical Workflow

To summarize the example above, a typical workflow for a new project with Git and GitHub includes:

1. Initialize a new Git repository (repo)
2. Add files to Git staging area
3. Commit files and directories
4. Check the status of the working directory and staging area and interpret the output
5. View previous commits
6. Create and checkout a new branch
7. Switch between branches
8. Merge local branches to local master

This workflow is great when you are working alone, but we will go over how to use Git and GitHub in groups in a later lesson.

## Additional Resources

### Git Commands - A Summary

There are hundreds of different Git commands, but to get started you only need to remember a handful of them. Here is a summary of the commands you'll use most often:

* `git init` initializes your local directory as a new git repository. You must run this before you can commit any of your work.
* `git status` shows the current status of your repo. It will show you if you have any work that is unstaged, what branch you are on, how many commits you are ahead of the master remote on github, and other useful things.
* `git diff` shows you the changes in your unstaged code.
* `git remote -v` shows you all the remotes for your repo. The `v` stands for verbose, which shows you the URL of the repository on github, if any, that your local repository is pointing to rather than just the name of the remote repo.
* `git add .` takes all unstaged work and stages it, making it ready to be committed. You can also specify a particular file to stage with `git add file-path/name-of-file`
*  `git commit -m "write commit message here"` commits all staged work. It's important to write a brief, clear commit message so you know what each commit is for. "Final commit" is not the commit message you're looking for exactly 100% of the time.
* `git pull` once you've committed all your local work and running `git status` shows that you have nothing to commit, you pull down any changes from your remote. By default, this will pull from the `origin` remote's `master` branch. To be specific about which remote and branch to pull from, you can use: `git pull name-of-remote name-of-branch`
* `git push` pushes your local changes up to your remote. By default, this will push to the `origin` remote's `master` branch. Like pull, you can push to a specific remote and branch with: `git push name-of-remote name-of-branch`. This is useful if you are using [branches](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) and [pull requests](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project#The-GitHub-Flow). If you get an error message, it's probably because you haven't pushed your local branch up to github yet. Try `git push -u name-of-remote name-of-branch`.
* `git branch` shows you all your local branches and indicates which branch you are currently on.
* `git checkout -b name-of-new-branch` makes a new branch and switches to that branch.
* `git merge name-of-branch` will merge the specified branch into the branch you are currently on.
* `git branch -d name-of-branch-to-delete` deletes the specified branch
* `git log` will show you the full list of commits and authors for your repo
* `history` will show you your past git commands
* `git stash` stashes any unstaged changes in your repository. They will not be present in your codebase, but they are not deleted.
* `git stash pop` gives you back the last staged changes you stashed
* `git blame file-path/name-of-file` shows you line-by-line who wrote the code in the specified file. Useful when you have a question about how something works and want to figure out who to ask, and also great source of shame when you realize you wrote the chunk of code you've been swearing at for the last hour.
