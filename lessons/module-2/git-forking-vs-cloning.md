---
title: Git Review - forking vs. cloning
length:
tags: git, tooling, workflow 
---

## Cloning

Cloning allows you to copy down the original repo from github into a local directory. When you clone a repo, the local directory it creates is automatically mapped to the remote github repo. By default, it creates a remote for you called 'origin', and gives you access to any and all of the branches that exist on that remote repository.

If new remote branches have been created since you initially cloned down, or any of the remote branches have been updated, you can update all of those remote branches by running `git fetch`.

While cloning allows you to copy down the original repo, if you are not a collaborator on that repo, and you want to save any local changes you've made to github, you'll have to create a new remote repository to push them to.

Which brings us to...

## Forking

When you don't have collaboration access on a particular remote repository, but you want to contribute to it or save your own version of it, you should fork the repository.

Forking creates a brand new remote repository that is essentially a copy of the original. By default, this will also create a new remote for you called 'origin'. 

When you fork a repo, although it creates a copy of the original, it does not give you access to all the original branches. You still only have one origin remote when you fork, except now that origin points to all the branches on **your** github under **your** username, and not the original repo. In order to gain access to all of those branches, you need to do a couple of things:

**Add a new remote repository for your local one to reference.**

You only have an `origin` remote right now that points to **your** remote repository. If you want access to the original repo, you must add a new remote like so:

`git remote add <remote_name> <repo_url>`

You should then be able to see in your terminal a list of all the remote repositories your local one is linked to by running `git remote -v`

**Fetch all branches from the new remote**

Then you need to fetch all the branches from the remote repository you just created:

`git fetch --all`

This will fetch and create a reference to all the branches from every single one of your remote repositories.

**Checkout a new local branch based on an existing remote**

If you want to create a new local branch, based on an existing remote branch, you can then do:

`git checkout -b <new_branch_name> <remote_name>/<remote_branch_name>`


## Example Workflow

Let's say an instructor has created a repo for a live coding lesson that lives at http://github.com/turing/foo-bar, and there are two branches on that repository: `tutorial-begin`, where everyone should start, and `tutorial-complete`, with the completed solution.

If you clone down this repo, you will have access to both of those branches no problem. But now you can't push your changes up to github because you don't have collaborator access to that repo. If you'd like to be able to show your changes on your github, and keep track of your own version of the repo, a better workflow would be to fork.

Your workflow would involve a couple of steps and look like this:

1. Fork the repo
2. Add the turing repo as a remote: `git remote add turing http://github.com/turing/foo-bar`
3. Fetch all the branches from the newly added remote: `get fetch --all`
4. Create a new local branch based on the turing `tutorial-begin` branch: `git checkout -b tutorial-begin turing/tutorial-begin`