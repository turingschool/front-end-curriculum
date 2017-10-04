---
title: Git Workflow - Merge vs. Rebase
length: 60
tags: git, workflow, rebase
---

## Goals

* Understand the difference between merge and rebase workflows
* Know when and when not to rebase
* Identify pros and cons of each method


# Git Workflows - Merging & Rebasing

So far we've been introduced to the merging workflow for git, which allows us to integrate changes from one branch into another. While this works just fine, there are some disadvantages that have made it more popular to adopt a different type of workflow: rebasing.

Rebasing serves the same purpose, integrating changes from one branch into another, but it does so in a more streamlined fashion. You will more commonly see teams using the rebase workflow, so it's important to be familiar with it when collaborating on open source projects or joining new teams.


## Merging

Imagine the following scenario: you are working on a project with 5 other people and you've all divvied up the responsibilities to add features and functionality. You're in charge of adding database integration which is going to take you a significant amount of time to finish - about 2 weeks. You create a new feature branch based off of master and begin your work. In the meantime, your teammates are working on smaller issues that they've been completing and merging into master every day.

[ whiteboard ]

By the time you're finished with your database functionality, there have been 50 commits pushed into master and you need to integrate them into your branch. With the merge workflow, we would **merge** the **master** branch **into** our **feature** branch:

```bash
repo-name:feature-branch $ git merge master
```


### How Merging Works

After running this command, git will pull any changes from master into your feature branch and prompt you to resolve any merge conflicts. Once you resolve all the merge conflicts between the two branches, git will automatically create a new "Merge Commit" in the feature branch that ties the two histories together. These merge commits simply reflect the manual conflict resolutions that you made, and make the project history more difficult to read. Let's take a look at the history this generates:

![merge-vs-rebase][merge-vs-rebase]

[merge-vs-rebase]: /assets/images/lessons/debugging-with-devtools/devtools-window.gif

You'll notice we also get these automatic merge commits when we merge a pull request into master from one of our teammates. These commits are more useful because they link to and document the pull request they came from, which helps you identify when and where certain changes were incorporated into the default branch.

So while we don't care what has been merged into our **feature** branches, we **do** care what is being merged into our **master** branch.

### Advantages
* Non-destructive, existing branches are not changed in any way, you just have another new commit 

### Disadvantages
* Pollutes the history of your repo, makes it hard to understand the evolution


## Rebasing

One of the main disadvantages of merging is that every time you merge, you automatically have a new merge commit that pollutes your project history and makes it difficult to follow the evolution of the application. 

To avoid this auto-generated commit, instead of merging, we can **rebase** our **feature** branch **on top of** our **master** branch:

```bash
repo-name:feature-branch $ git pull --rebase origin master
```

This makes it so that all the new work you've done on your feature branch will be placed **on top** of all the commits on master. It's kind of like telling git, "pretend I didn't take 2 weeks to finish my database integration feature - pretend I started it today and finished it all in a couple of minutes".

### How Rebasing Works

One thing that makes this process tricky is that git will have to step through every single commit you've made on your **feature** branch, one at a time, and see if it's possible to apply it on top of the **master** branch.

[ whiteboard ]

This means that you may be resolving merge conflicts in every single commit you've made on your branch. Don't get tripped up by this! Git will give you instructions on how to continue with the rebase after every merge conflict you resolve. Note that you may have to resolve the same merge conflict multiple times if you haven't been rebasing frequently enough.


#### Rewriting History

Because you'll be resolving merge conflicts in each commit, and because you'll be moving your commits to the tip of the branch (despite their timestamps), you'll essentially be changing the work that was done in that commit. This is called **rewriting history**, and it means that your commit will get a brand new SHA identifier.

This is important, and where rebasing gets tricky. Any time you rewrite history there is potential for collaboration to get thrown off track. If anyone has based any work off of your commits with their original SHAs, and then you rewrite history, git won't be able to successfully combine those changes any more.

[ demo ]


### Advantages
* Much cleaner project history
* Linear project history - you can follow the tip of your feature branch all the way to the beginning of the project without any forks

### Disadvantages
* Easy to do it wrong, rewrites history


## To Rebase or Not to Rebase?

As a general rule, it works best to rebase regularly while you are working on a feature branch locally and individually. If anyone else is looking at or using your branch to base their work off of, rebasing is dangerous because it will rewrite the commit history. Avoiding complicated rebases means rebasing almost as frequently as you are committing.


## Resources

* [Git Book: Merge vs Rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
* [Atlassian: Merge vs Rebase](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)