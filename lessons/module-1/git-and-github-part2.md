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

### Some Context: What is GitHub, and why do we use it?

We learned how to use Git from the terminal in the last lesson to control the versions of our projects (repositories) - that work was all done locally. It was hard to share your code with anyone else on another computer. Today, we'll learn how to push your code up to the cloud! We can use an website called GitHub to store your code and make it much easier to share code and collaborate with others.

Again, Git is NOT the same thing as GitHub! Git is the local command-line language for version control, and GitHub is a website to share your code.

## Setup

In order to push up to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/generating-an-ssh-key/).

Additional links if you need to further configure: [repeated requests for passwords](https://stackoverflow.com/questions/21095054/ssh-key-still-asking-for-password-and-passphrase) - [adding a new SSH key](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

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

### Push up initial files (`git push`)
Finally, we need to push up our initial code from our local repository (aka your computer), to the remote repository (aka GitHub.com).  

First, let's add a couple boilerplate files for an initial setup.

`touch index.html index.js`  

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
    <title></title>
  </head>
  <body>
    <h1 class="text-to-change">Change this!</h1>

    <button id="text-button">Change the h1</button>

    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
```

```javascript
// index.js

var textToChange = document.querySelector('.text-to-change')
var buttonForText = document.querySelector('#text-button');
```

So basically what we have is a button that in the future will change the text of the h1, but the functionality has not all been written yet.

### Commit files (`git add`, `git commit`)

Just like we did before, let's add these changes to the staging area and commit the changes:

`git add .`

`git commit -m "Add HTML and JS file structure"`

### Push up the master branch to GitHub (to the remote repository) (`git push`)

The goal here is to take the new code that we have added locally and push it up to the online, remote repository (GitHub).

To get our code into the remote repository, we need to "push" it up there. The command is: `git push [remote-name] [branch-name-to-push-to-remote]`

So in our case, we want to push the code from our master branch to the remote repository called "origin". The exact command in this case is: `git push origin master`

Now if we look at the GitHub repository, we see our new code, and updated commit messages!

### Checkout a feature branch (`git branch`, `git checkout`)

Let's keep it going and use our preferred feature branch workflow. Let's checkout a feature branch to add an event listener to the button. To make the new branch, enter `git branch add-event-listener`. Then checkout the branch using `git checkout add-event-listener`.

(Note: you can actually do these two steps in one command using `git checkout -b add-event-listener`)

In the `index.js` file, add the lines of code:

```javascript
buttonForText.addEventListener('click', function(){
  textToChange.innerText = "You've Changed!";
})
```

### Commit feature work (`git add`, `git commit`)

Add the changes to the staging area, and commit the changes, just as before:

`git add index.js`

`git commit -m "Add button event listener to change the text"`

### Push the branch up to GitHub (`git push`)

We're satisfied with the work done on this branch. Now we can push this branch up to GitHub and merge it to master there. To push this branch, we use the same `git push` command as before, but with a slight change:

Enter the command: `git push origin add-event-listener`

With that command, we pushed the `add-event-lister` branch up to the remote repository named `origin`. If we look on GitHub, the code on the master branch has not changed, but we do see a notification of a new branch.

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

### Your Turn

Practice by pushing up your Dog Party or Number Guesser project to GitHub.

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

## Additional Resources

### More GitHub

  * [GitHub Tutorials](https://guides.github.com/)

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
