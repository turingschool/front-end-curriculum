---
title: Git and GitHub
length:
tags: version control, git, github
---

# Falling In Love with Git in Six Acts
This is a little git love reference, which we expect to grow over time. It's not all encompassing. Some things, you must explore on your own. This love story assumes you've been introduced to git and have a github account.

*(This love story inspired by [Nike's 1993 Vanity Fair Ad](http://www.rogerhorberry.com/falling-in-love-in-six-acts-courtesy-of-nike/))*

***

#Act One. LUST 😍
Here it is, the big “Wow!” the big “Gee!” the big “YesYesYes!” you’ve been waiting for...**YOU HAVE A NEW PROJECT ASSIGNMENT**. Lust isn’t a sin, it’s a necessity, for with lust as our guide we think: I have no need of food, I have no need of sleep, I have no needs other than occasionally chewing a breath mint. I AM GOING TO CODE MY FACE OFF. And so it begins...

*There are two paths to the start of this journey. You must be comfortable in both.*

## Path-A :: I create my project on the big Github :octocat: in the sky first:

- I visit my profile on GH and I create a new repo, following these [steps](https://help.github.com/articles/creating-a-new-repository/).
- Yay! I will now clone this very shiny new, empty repository onto my machine. And the lovely GH provides the [steps](https://help.github.com/articles/cloning-a-repository/) to do so.
- I do not have to ```git init``` in ```<my-awesome-project-name>``` on my local machine. I cloned from the big :octocat: in the sky, so I am all initialized with an empty .git repository. I am special. :tulip:
- And just to be sure all is well, I will double check the project on my machine is in fact connected to the big :octocat: in the sky.
```
cd <my-awesome-project-name>
git remote -v
```
Eeeeeeeee!!!! :clap: Life is so good, because this:

```
# origin	git@github.com:you/my-awesome-project-name.git (fetch)
# origin	git@github.com:you/my-awesome-project-name.git (push)
```
I have the correct remotes in place for my local machine to both push and fetch from the big :octocat: in the sky. :thumbsup:

## Path-B :: I create my project locally first: 
```
mkdir <my-awesome-project-name>
cd <my-awesome-project-name>
git init
```
Boom. :boom: ```#Initialized empty Git repository in /Users/you/my-awesome-project-name/.git```

I want to share the love with everyone!!! How do I do this? OH RIGHT! I push my project up :arrow_up: to the big Github :octocat: in the sky. I will go there now and follow these [steps](https://help.github.com/articles/creating-a-new-repository/) to create a new repository.

:speech_balloon: BUT WAIT! Can they talk to one another? Is the project on my machine connected to my github repo? :confused: I get that for free when I clone from Github (like in Path-A), but because I chose Path-B, I must create the connection between the two entities. **I will do it**. :muscle:
```
cd <my-awesome-project-name>
git remote -v
(# see that it is empty, nothing happens)

git remote add origin git@github.com:you/my-awesome-project-name.git
(# copy paste the GH url of your project and assign it to the label of 'origin')
(# side note, you could label it 'cupcake' if you wanted, although not recommended)
(# typical remote labels include things like 'staging', 'production', 'heroku')
(# use 'origin' for your project's corresponding github repo, because...convention)

git remote -v
(# check that you have the remotes in place)
```
You are ready to Rock and Roll. :microphone: :guitar:

***

#Act Two. EUPHORIA :lollipop:
You feel funny inside. You feel funny outside. You feel you could do anything and no one would dare laugh at you. This git and github, you will treasure. You will commit. And commit often. You will make your first commit like no other. Because you are **SOLO**. This is your repo, your project, your *one-person-in-charge-of-every-last-commit-domain*.

### You are making changes and coding things:
```
git status
(# prints the status of your current situation.)
(# expect git to tell you what you branch you are on)
(# expect git to tell you which files are "untracked", meaning changes were made)

git add .
(# this command will add ALL the changes you just made)
(# this command will add all those changed files to staging) 
(# files on staging are ready to be committed)

git add <path/filename>
(# this command will add changes based upon the file you specify)
(# this command forces you to think about each file before atomically adding all)

git status
(# run this command after EVERY git command)
(# read git's output messages)
(# do this until you know what you are doing)

```
### You are ready to commit:
```
git status
(# doublecheck the changed file names that are "staged" and ready for commit)

git commit -m "My awesome commit message"
(# you are happy with your staged changes then unapologetically commit)

git status
(# at this juncture, you might see "nothing to commit, working tree clean")
```
### You want to share your masterpiece with the world (aka "push to Github" :octocat:):
```
git push origin master
(# you are pushing your local commits up to the big github in the sky)
(# you are the master of your local commits and in charge of the master gh repo)
(# you care not about branches, nor collaborators - that comes in the next phase...)

```
But even though you are the master of your own domain, what if your :octocat: is mistaken about this? What if you are DENIED? Never fear. The FORCE is with you:
```
git push -f origin master
(# you will now overwrite the entire repo on the big github in the sky with your local copy)
(# it is good. it is powerful. it is necessary. it is also dangerous. think before you push)
```

***

#Act Three. FEAR :see_no_evil:
Now you must collaborate with a **TEAM**. More than one person all up in your git and github. This is where the doubt begins, where the mind comes back from shopping, yells at the heart -- This is where you become afraid to commit, to push, to share anything with that damn :octocat:.

###Invite your team to collaborate on the big :octocat: in the sky:
- Follow these [steps](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/) and make sure you understand "collaborator access" - you are no longer the sole key holder of your kingdom.
- Make sure you understand [Git Flow](https://guides.github.com/introduction/flow/)
- Communicate with your team, and establish your team's workflow. Maybe something like this:
  - Anything in the master branch is deployable
  - To work on something new, create a descriptively named branch off of master, preceded by your initials (ie: gertrude zachary's' branch would be named: "gt-css-refactor")
  - Commit to that branch locally and regularly push your work to the same named branch on the gh :octocat:
  - When you need feedback or help, or you think the branch is ready for merging, open a pull request
  - After someone else has reviewed and signed off on the feature, you can merge it into master
  - Once it is merged and pushed to ‘master’, you can and should deploy immediately

###A day in the life workflow when working with other humans, sharing a REPO :octocat::
```
git coffee
(# just kidding. this won't work. but it would be a lot cooler if it did...)

git co master
(# to ensure you are on master)

git pull origin master
(# pull down the latest changes from master on the big github in the sky)
(# these are commits that your team merged into master in your absence)

git co -b gt-my-new-feature
(# gt references initials of "gertrude zachary" from above workflow example)
(# you are creating and naming a new branch (off master) with this command)
(# write some codes)

git status
(# see what's up)

git add <some file paths/names here>
(# add your magnificent code changes)

git commit -m "My magnificent code changes"
(# commit to staging)

git push origin gt-my-new-feature
(# push your BRANCH that is saved locally to the big github in the sky)
```
Now visit the big :octocat: and do any number/combination of these things:
- Create a pull request (PR).
- Chat with some of your team on the code in that PR.
- If the branch is passing and okay to merge with master, do it.
- Create an issue list for your team, and use PRs to address/close out those issues.

***

#Act Four. DISGUST :poop:
Now comes that unavoidable time when you say to anyone who will listen: I got myself up git creek without a paddle! You have merge conflicts and find yourself desperately seeking a git blame. You've lost your teammates in a sea of git branching that has you feeling out of sync and off the reservation. You hate git. You hate collaborating. You pulled when you should of merged and then pushed. You force pushed and sunk the canoes of your teammates. You are a mess.

### Some helpful Oh :poop: commands once you find yourself up git creek: 
```
git commit --amend
(# you made a goof in your last commit and want to amend it)
(# you can change the message)
(# you can add additional staged changes to the content of the amended commit)

git revert <SHA>
(# creates a new commit)
(# Git's safest "undo" mechanism. it doesn't alter history)
(# it creates a new 'inverse' commit that you've edited for correctness)
(# it figures out the differences and amends a new commit)
(# it undoes a single commit, it does NOT revert back to a previous state)

git reset <last good SHA>
(# rewinds your history back to the specified SHA)
(# it's like those commits never happened)
(# it preserves the working directory. commits = gone. contents = still on disk)

git reset --hard <last good SHA>
(# when you want to undo BOTH commits and the changes in one karate chop)
(# a 100% do-over)

```
***

#Act Five. TRUTH :raised_hands:
Git is not the enemy. If they didn’t tell you before, we will tell you now. Git is forgiving. Git is your friend. Anything you git, you can un-git. Git loves you. Git is easy, or at least it will be soon. Just don't git up. Git with it. And most importantly, this is only the beginning of git. It is enough to git you going, but there is so much more to learn. Go forth and explore, confident in your ability to navigate the git creek.

### Some helpful commands and tools to show you the way:
```
git log
(# git outputs commits made in reverse chrono order)
(# uses the default formatting)
(# use Space to scroll and q to exit)

git log --oneline
(# condenses the output of your commit history into one-liners)

git log --stat
(# git log + which files changed and # of lines added/deleted)

git log -p
(# most detailed view of your history)
```
### GUI Tools if you aren't :neckbeard: enough to stay in terminal outputs:
- [Github Desktop](https://desktop.github.com/)
- [Gitx](http://gitx.frim.nl/) (*don't forget to enable terminal usage with this one*)

***

#Act Six. FINALE :sparkling_heart:
So this is git, as demanding and nourishing and difficult as it can be, and as strong and wise as it makes you become. There is something to be gained from commitment. And so you let git come perch upon your shoulder. And you do not turn it away. You do the tango. You just git it.

###When all else fails, ask git for help:
```
git help <command>
(# if I want git to tell me about 'rebase', I type git help rebase)
(# git provides description, options, and sometimes pictures in your terminal)
```

###From novice to Git Greatness, these things will git you there:
- [Try Git](https://try.github.io/levels/1/challenges/1)
- [Github On Demand](https://github.github.io/on-demand/)
- [Pro Git](https://progit.org/)
- [Atlassian Advanced Git](https://www.atlassian.com/git/tutorials/advanced-overview/)
- [Git Docs](https://git-scm.com/docs)
- [Undo Almost Anything with Git](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)

