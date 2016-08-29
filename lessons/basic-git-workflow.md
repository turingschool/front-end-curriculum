---
title: Basic Git Workflow
length: 180
tags: version control, git, github
---

### Goals

By the end of this lesson, you will know/be able to:

* Be familiar with common git commands
* Understand how to use those git commands to use git effectively
* Gain comfort using git as a part of your development workflow


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

If we run `ls` we should see our `readme.md` file is happily in our `git-workflow-practice directory`. Ok, great! We have a basic directory set up with an empty markdown file in it. The next thing to do it commit this work so we know our project is saved. The first thing we want to do is check the status of our project to confirm that we're committing what we think we are (hey, you'd be surprised how things sneak in there sometimes!). Let's try that. From the command line, enter the following:

```
git status
```

Wait, that gave us an error message. that's not what we expected. Let's look at what it says so we understand what's going on:

```
fatal: Not a git repository (or any of the parent directories): .git
```

Ok, this is straightforward. The first part of the error message telling us exactly what is wrong:  `Not a git repository`. All we need to do is initialize it as a git repository! Here's the command:

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
  - `On branch master` indicates that we are on the master branch
  - `Initial commit` indicates that we have yet to make our first commit
  - `Untracked files` shows a list of files that have not been staged yet, currently that's just our readme.md file. "Untracked" means git isn't keeping a record of them for us yet.
  - `Nothing added to commit but untracked files present` means that git doesn't have anything that could be added to the commit other than the untracked file listed above.

Now that we've initialized our directory as a git repository, we can make our first commit. Our first step is to add all untracked files, then make the commit itself. We can add our untracked file individually with `git add readme.md`, or we can add all untracked files as once with `git add .` (the dot indicates "all"). Since we only have one file, our readme.md, let's go ahead and add it individually. In your command line enter:

```
git add readme.md
```

Run that, and it should be pretty uneventful. But if we `git status`, we'll see that some things have changed. Let's take a look:

```
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md
```

Great! We see that we're still on our master branch, and that we still  haven't made our initial commit, but we see that readme.md is staged as a new file. That means it's ready to be committed. Let's do that now with:

```
git commit -m "Initial commit"
```

A quick note on commits: the `-m` means "message". It's best practice to leave a concise, clear commit message to describe to yourself and any other developers who may work with your codebase what each commit consisted of. Keep these short and to the point. "Initial commit" is very common as the first commit message when initializing a new git repo, as this is typically done straight away before any significant work is done. After that, it's important to use commit messages to explain to others (and future you) what each commit is for. An example of a good commit message is "Add navigation links to sidebar". An example of a bad commit message is "Add stuff" or the infamous "Final commit".

Once we run our commit, we'll see the following:

TEST GIT STASH

```
[master (root-commit) 5f2b8fb] Initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.md
```

This is telling us we've made our root commit on the master branch, providing the SHA that is unique to this commit, and that we've changed one file (our readme.md). Great! Now if we run `git status` again (if you haven't guessed it already, we'll be checking our status a lot -- it helps you keep track of where you are with your work), we'll see that we don't have anything to commit and we're all up to date:

```
On branch master
nothing to commit, working directory clean
```

Success! We've initialized our repo and made our first commit!

### Branching

One of the central ideas of git is the concept of branches. Branches allows us to deviate away from our main codebase (the Master branch) at a specific point and work on a feature without running the risk of introducing bugs to our existing code. We can fully build our feature in a branch while pulling in any new code from our master branch so we are up to date with the work being done elsewhere. To see how it works, let's try it out. First, we'll add some text to our readme.md in our Master branch (remember, this is a [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) file):

```
# Hello

I'm trying out branching!
```

Before we do anything else let's run, you guessed it, `git status` and see what we have. It should show that we've modified our readme.md file. Let's go ahead and `add` and `commit` this change. Remember to write a good commit message!

Now we have two commits, let's remind ourselves what they were. There's a handy command that will show you all the commits on a project from all the contributors. Enter this:

```
git log
```

It returns a list of all our commits, the author, when they were made, and the commit message:

```
commit 62e1cd3cd05fff6aa05fc720b91da9616b3a7251
Author: You <example@email.com>
Date:   Sun Aug 28 18:22:08 2016 -0600

    update readme

commit 5f2b8fbee22f4eae1c26ad7c9d3b61308af88707
Author: You <example@email.com>
Date:   Sun Aug 28 17:49:59 2016 -0600

    Initial commit
```

We're in good shape on our master branch, let's go ahead and make a branch called "new-text" and do some new work there. The command to make a new branch and switch to the new branch is:

```
git checkout -b new-text
```

When we run that, we should see a message of `Switched to a new branch 'new-text'`. If we want to see a list of all our branches we can use:

```
git branch
```

This will return a list of all our branches, with an asterisk next to the branch we are currently on. It looks like this:

```
master
* new-text
```

Now that we're on our branch, let's make some changes to our readme text so it says:

```
# Hello

I'm trying out branching!

This is text I'm adding on my branch called new-text.
```

Check the status again, and we'll see that the message tells us that we're on the new-text branch and that we've modified our readme. You know the drill! Let's add and commit those changes!

Once you've commited your recent changes, run `git log` again. You should see that you have three commits. That's what we expect! Now, let's hop back over to our master branch.  

*Note: it's important to remember to commit any changes in your branch before to switch to a different branch. If you don't, your unstaged changes will follow you around from branch to branch and potentially cause you problems and confusion.*  

So, play it safe and commit any unstaged work before you switch to a different branch! The command to switch to an existing branch, in this case `master`, is:

```
git checkout master
```

You should see a message that says `Switched to branch 'master'`. You successfully navigated back to your master branch! Now, go take a look at your readme.md file. Hey! The text we just added is gone! No need to worry, our new text isn't there because it currently only exists in our new-text branch. For further proof, run `git log` and you'll see the last commit you made on the new-text branch isn't shown either.

This is why branching is so useful -- we have a good, working master branch, and we're making all our changes on our new-text branch. We aren't in danger of introducing bugs to master, because git is smart enough to keep them totally separated until we decide we want to merge them.

For our current work, we can be sure that our new-text branch is bug-free and ready to merge back into master. Let's do it! From the master branch, enter this command:

```
git merge new-text
```

You should see the following message:

```
Updating 62e1cd3..ae1d85b
Fast-forward
 readme.md | 2 ++
 1 file changed, 2 insertions(+)
```

Now, still in master, run `git log` again and see what you get.

All your commits are there again! We've successfully merged the code from our branch back into master. Now that master is up to date, we don't really need the new-text branch anymore. Let's go ahead and delete it. First confirm that you're on the branch you think you are (in this case, master) with `git branch` and then run:

```
git branch -d new-text
```

You should see a message of `Deleted branch new-text (was ae1d85b).` Now if you run `git branch` again, you'll see that your only branch is master.

### Stashing

There are times when you find yourself working along, only to realize you no longer want or need to code you've been working on, or you want to quickly pause mid-stream to hop to another branch and check something out without doing an in-process commit of your current work. A quick way to do this is `git stash`. Stashing saves away all work back to your last commit, and allows you to get it back again. Be careful with this -- if you bring back code you stashed several days ago, it's very likely that you'll get conflicts and bugs!

Let's try stashing something. But first we need something to stash! On master, add some text to your readme:

```
# Hello

I'm trying out branching!

This is text I'm adding on my branch called new-text.

I'm about to get stashed!
```

Now run `git status` and we'll see that we have unstaged changes. To stash these changes, run:

```
git stash
```

You should see the following message:

```
Saved working directory and index state WIP on master: ae1d85b add text in new-text branch
HEAD is now at ae1d85b add text in new-text branch
```

This is saying that the working directory has been saved in a WIP (work in progress) state, and our last commit is now at HEAD (i.e. the current working code has been reverted back to the most recent commit).

We don't have to specify what we're stashing, git will by default grab everything we've changed and stash it for us. Now run `git status` again. You should see that we're back to the message `nothing to commit, working directory clean`.

If we decide we want our stashed code back, there's an easy way to get it back. Just run:

```
git stash pop
```

Stash saves all stashed code in a stash list, and `git stash pop` pops the last item in the list off and unstashes it for you. There are more [stash-related commands](https://git-scm.com/docs/git-stash) that can come in handy in certain edge cases, but most of the time `git stash` and `git stash pop` get you what you need. Run `git status` again, and you should see that you're back to the `Changes not staged for commit` message you had before we stashed!

### Blaming

There will be times when you hit a patch of code that doesn't make sense or you need some clarification on. On big teams, it's often fastest to try to find the person who wrote the code and ask them questions directly. But how do you figure out who wrote what? Git to the rescue! This is a pretty common need, and git has the solution with the appropriately named `git blame` command.

From your master branch, run this command:

```
git blame readme.md
```

And you should see something like this:

```
62e1cd3c (Your Name 2016-08-28 18:22:08 -0600 1) # Hello
62e1cd3c (Your Name 2016-08-28 18:22:08 -0600 2)
62e1cd3c (Your Name 2016-08-28 18:22:08 -0600 3) I'm trying out branching!
ae1d85be (Your Name 2016-08-28 18:56:13 -0600 4)
ae1d85be (Your Name 2016-08-28 18:56:13 -0600 5) This is text I'm adding on my branch called new-text.
```

We can see the unique SHA of the commit that generated each line, the developer who wrote it, the date, and the line number in our working file. That's a lot of important information! It lets us chase down specific commits, figure out who wrote what, and when the changes happened. It also, on occasion, will point out that the anonymous developer you've been mad at all afternoon about a hacky chunk of code is, in fact, you.


### List of Common Commands

Now that you've taken a walk through of the common git commands and workflow you'll be using, you're ready to dive into using git in your project repos confidently! And to help you along, here's a list of the commands we covered above. If you want more information or a deeper dive (or hit a git issue that we didn't cover here), check out the [great git docs](https://git-scm.com/docs).

##### `git init`
initializes your local directory as a new git repository. You must run this before you can commit any of your work.

##### `git status`
shows the current status of your repo. It will show you if you have any work that is unstaged, what branch you are on, how many commits you are ahead of the master remote on github, and other useful things.

##### `git add .`
takes all unstaged work and stages it, making it ready to be committed. You can also specify a particular file to stage with `git add file-path/name-of-file`

#####  `git commit -m "write commit message here"`
commits all staged work. It's important to write a brief, clear commit message so you know what each commit is for. "Final commit" is not the commit message you're looking for exactly 100% of the time.

##### `git branch`
shows you all your local branches and indicates which branch you are currently on.

##### `git checkout -b name-of-new-branch`
makes a new branch and switches to that branch.

##### `git checkout name-of-existing-branch`
switches to an existing branch.

##### `git merge name-of-branch`
will merge the specified branch into the branch you are currently on.

##### `git branch -d name-of-branch-to-delete`
deletes the specified branch

##### `git log`
will show you the full list of commits and authors for your repo

##### `git diff`
shows you the changes in your unstaged code.

##### `history`
will show you your past git commands

##### `git stash`
stashes any unstaged changes in your repository. They will not be present in your codebase, but they are not deleted.

##### `git stash pop`
gives you back the last staged changes you stashed

##### `git blame file-path/name-of-file`
shows you line-by-line who wrote the code in the specified file. Useful when you have a question about how something works and want to figure out who to ask, and also great source of shame when you realize you wrote the chunk of code you've been swearing at for the last hour.

#### Working with Github

##### `git remote -v`
shows you all the remotes for your repo. The `v` stands for verbose, which shows you the URL of the repository on github, if any, that your local repository is pointing to rather than just the name of the remote repo. If none are shown, that means your remote isn't pointing to a remote repository on Github.

##### `git pull`
once you've committed all your local work and running `git status` shows that you have nothing to commit, you pull down any changes from your remote. By default, this will pull from the `origin` remote's `master` branch. To be specific about which remote and branch to pull from, you can use: `git pull name-of-remote name-of-branch`

##### `git push`
pushes your local changes up to your remote. By default, this will push to the `origin` remote's `master` branch. Like pull, you can push to a specific remote and branch with: `git push name-of-remote name-of-branch`. This is useful if you are using [branches](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) and [pull requests](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project#The-GitHub-Flow). If you get an error message, it's probably because you haven't pushed your local branch up to github yet. Try `git push -u name-of-remote name-of-branch`.


### Resources

  * [git docs](https://git-scm.com/docs)
  * [Awesome Git Tutorial](https://githowto.com/)
