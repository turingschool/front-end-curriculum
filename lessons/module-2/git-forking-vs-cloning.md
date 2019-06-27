---
title: Git Review - remotes/locals and forking/cloning
length:
tags: git, tooling, workflow
---

### Vocab

- `Git` A distributed version control system
- `Cloning` Copying a remote repo to your local machine
- `Forking` Creating your own copy of somebody else's repo
- `Remote Repo` A repository on the web that allows others to view and contribute to your code
- `Local Repo` A repository on your machine that allows you to version control a directory

### Goals

By the end of this lesson, you will be able to:

* articulate the difference between your remote and local repos
* articulate the difference between forking and cloning
* choose the appropriate method for copying a repo
* link remotes to your local repositories


## Remote vs. Local Repo

When we're working with git and GitHub, we usually have 2 repos that represent the same codebase:

* **our local repo** - which lives on our machine, where we make our changes and do our development. We `cd` into a project directory and edit our code files, we run `git add` and `git commit` on them, etc.
* **our remote repo** - which lives on GitHub, where anyone can view our files and clone or fork their own local copy

### Local Repos

Local repos live on our machines and allow us the full benefit of git's version control.

In your terminal, create a new directory and `cd` into it. Now run `git init` -- you've just created a local git repository!

We have no remote repository associated with this local git repository just yet, it simply lives on our machine and gives us all the version control features of `git`. So if you were to add files to this directory, we would be able to track any future changes to them.

Add a file to your directory, then run a `git status`. You should see that you have a single **untracked** file. This means that git can tell there's a file in your current working directory, but it's not keeping an eye on it yet. We haven't told git that it's important. 

![git-init](/assets/images/lessons/git/git-init.gif)

If we follow the instructions here and we do a `git add`, we see that file is now highlighted in green instead of red, and git is now aware of it as something that can be committed. This phase right here is called your **staging area**. It holds onto any file changes that you are considering committing to your local git repo. Notice if you do a `git log`, you still don't have any commits to you local repo, so your local repo is still considered empty right now. If we were to try to push this up to GitHub somewhere, nothing would appear.

Given the workflow we just walked through, we can identify 3 separate environments or phases of working locally:

![local-repos](/assets/images/lessons/git/local-repos.png)

* **the working directory:** this has any files you've created that git is not yet aware of
* **the staging area:** any files or changes to those files that you've made git aware of by running `git add`
* **the local repo:** any files that you've actually committed to your local repo by running `git commit`

So the important thing to remember here is that your files aren't actually considered to be a part of your local repo until you've committed them.


### Remote Repos

Now this is great, I have my local repo all set up and I have the full git experience with commits/branches/merges/etc. with just a local repository. BUT, there are still some limitations to local repos:

* it's hard to dig into your past commits and really see the history of your app so that you can make use of the version control - if I wanted to go back to a particular state of my application, it would be a little trickier for me to navigate there from my terminal when I can't really see what the codebase looks like at each one of my previous commits
* if my computer gets hit by a bus, the whole app is gone
* only you can work on your local code

So, we often link our local repos to a remote repo! Remote repos:

* usually live somewhere (like GitHub) that has a nicer interface for us to navigate the app at different points in history
* provide us with a backup copy in case our laptop gets hit by a bus
* allows us to publish our code to the world and allow them to read or write it (imagine if you had a group project with no remote repo and you had to keep passing the laptop around for everyone to contribute)

So let's say I want to back up this local repo I just created, or I want to be able to share it with Robbie so he can make his own copy of it, I need to create a remote repository that I can link it to. [ create a remote repo on github ]

So this is where I am going to push my local repo to. But first I have to tell my local repository that this remote one exists. I can do this by going to my local repo and running:

`git remote add origin <remoteRepoUrl>`

And that's how we get this command that we've been running all this time, `git push origin master` -- origin is the name of our remote repo, and master is the name of the branch we're pushing to.

The word origin is just used generally as a default remote name, but we could have named this remote anything we wanted, we could have said `git remote add turing <remoteRepoUrl>` and now instead of `git push origin master` I would say `git push turing master`.

So far we've pretty much been working with one local repo linked to one remote repo, but we can actually have as many remote repos as we want, they just all have to have their own unique names. So for example let's say I wanted to give Turing an official copy of this repo, I could create another remote under the Turing GitHub organization and add this to my local repo with `git remote add turing <remoteRepoUrl>` and now I can push to this remote repo as well!

You won't come across a *ton* of scenarios where you're going to be pushing and pulling from multiple remotes, but it's important to remember that it doesn't have to be a strict 1-1 relationship between a local and remote repo. I'll show you an example later this morning where you will definitely need 2 remotes for one local repo.


## Forking vs. Cloning

Speaking of remotes, let's talk about the two ways we can get a copy of a remote repository: cloning and forking. These work in slightly different ways.

* **Cloning:** a remote repository will make a local copy on your machine with a single remote (`origin`). This creates a 1-1 relationship between that remote and your local copy. You can only push and pull to that remote
* **Forking:** a remote repository creates another remote repository, but not a local one. So in order to create a local one for ourselves, we'd have to clone our forked remote

![forking-vs-cloning](/assets/images/lessons/git/forking-vs-cloning.png)

So that's the process for each of these two different copying methods. Now let's get into **why** you would do one over the other:

* **Cloning:** is great when you are copying a remote repository that you have full access to -- you're going to be pushing and pulling changes to this repo and you're in charge of it. On your group projects, you're all going to be making each other collaborators on your remote repos, so in a scenario like that you might just clone
* **Forking:** is great when you **don't** have full permissions for the remote repository you are copying. For example, a lot of the turing repos here you are not collaborators on -- you aren't allowed to willy nilly push your changes to the Turing staff repos. So if you wanted to save and push your changes that you've made to a repo (like the `our-first-tests`) repo, you'd need to have your own forked version that you could push to

Let's go ahead and do that. Navigate back to the `our-first-tests` repo on GitHub, and make a fork of it. Now use that remote repo URL and add it as a remote to your local copy. (I usually use my name or github handle as my remote name):

`git remote add bstoroz <>`

Now do a `git push bstoroz master` and you should see your saved changes on your forked version. Notice if you tried to do a `git push origin master`, you'd get a permissions error. Now let's say I updated this testing repo with some changes to our master branch. You'd want to be able to pull these changes down into your local copy. So you can do a `git pull origin master` and get the most up-to-date copy of this testing repo.

So a lot of times when you have more than one remote for a local repository, it's because you're *pulling* from one, and *pushing* to another, rather than pulling/pushing to both.






















<!-- 

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
4. Create a new local branch based on the turing `tutorial-begin` branch: `git checkout -b tutorial-begin turing/tutorial-begin` -->