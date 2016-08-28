---
title: Basic Git Workflow
length: 180
tags: version control, git, github
---

### Goals

By the end of this lesson, you will know/be able to:

* Be familiar with common git commands
* Understand how to use those git commands to use git effectively
* Gain comfort using git as a part of their development workflow


### Git Commands for a Basic workflow

As developers, we use git all day every day. It's a lifeline when things go south and we need a past version of our code, and it gives us the freedom to branch and try directions we might not feel confident enough to try on master. Despite all the good things about git, it can be tough to get your head around and even harder to remember all the commands. Let's go through a basic development workflow using git and github to help solidify understanding and practice how to use git effectively.

### Git-ing Started

There are hundreds of different git commands, but for most day-to-day circumstances you'll rely on a handful of them. We will walk through our workflow using these basic commands:

First thing's first! We need a new practice project to work with. Let's make one. Using your terminal, navigate to the directory where you keep all your projects and make a new directory inside of it:

```
mkdir git-workflow-practice
```

Now navigate into that directory:

```
cd git-workflow-practice
```

Next, let's add a README markdown file so we have something we can edit:

```
touch readme.md
```

If we run `ls` we should see our `readme.md` file is happily in our `git-workflow-practice directory`. Ok, great! We have a basic directory set up with an empty markdown file in it. The next thing to do it commit this work so we know our project is saved. The first thing we want to do is check the status of our project to confirm that we're commiting what we think we are (hey, you'd be surprised how things sneak in there sometimes!). Let's try that. From the command line, enter the following:

```
git status
```

Wait, that gave us an error message. that's not what we expected. Let's look at what it says so we understand what's going on:

```
fatal: Not a git repository (or any of the parent directories): .git
```

Ok, this is straightforward. The first part of the error message telling us exactly what is wrong:  `Not a git repository`. All we need to do is make initialize it as a git repository! Here's the command:

```
git init
```

Now we should see a different, happier sounding message:

```
Initialized empty Git repository in /Users/yournamehere/turing/projects/git-workflow-practice/.git/
```

Now if we run `git status` again, we should see:

```
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	readme.md

nothing added to commit but untracked files present (use "git add" to track)
```

Let's run through what all that means:
* `On branch master` indicates that we are on the master branch
* `Initial commit` indicates that we have yet to make our first commit
* `Untracked files` shows a list of files that have not been staged yet, currently that's just our readme.md file. "Untracked" means git isn't keeping a record of them for us yet.
* `Nothing added to commit but untracked files present` means that git doesn't have anything that could be added to the commit other than the untracked file listed above.







Let's go over a few of the commands you'll be using often:

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


### Resources

* [git docs](https://git-scm.com/docs)
* [git docs](https://git-scm.com/docs)
* [git docs](https://git-scm.com/docs)
