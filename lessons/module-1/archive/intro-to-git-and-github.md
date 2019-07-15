---
title: Git and GitHub
length:
tags: version control, git, github
---

### What is Git?

Git is a version control system that allows us to record changes we make to our files over time -- it lets us *control the versions* of our files. With Git we can reference specific versions of our work as we need to. This means we can access a specific change we made days ago, or we can look back and see what changes others have made throughout the life of the project. It keeps track of every version of our files and allows us to revert back to a specific change, roll an entire project back to a previous state, compare changes over time or see who made specific changes. Git is an incredibly powerful tool that can make troubleshooting much easier when we screw things up or lose files. It makes it much, much easier to recover when things go wrong.

A typical workflow with Git includes:

* initialize a new Git repository (repo)
* add files to Git staging area
* commit files and directories
* check the status of the working directory and staging area and interpret the output
* view previous commits
* create and checkout a new branch
* switch between branches
* merge local branches to local master

### Git !== GitHub

Despite their similar names, Git and GitHub are not the same thing. They work together, but they are their own distinct beasts. Git allows us to save specific versions of our work in a local repository on our computer. GitHub is an online Git project repository hosting service, which means it holds the directories that contain all the files and folders that make up our projects. GitHub also allows teams to work seamlessly together (most of the time) on the same codebase. Everyone on a team can pull down a local version of the repo on GitHub, and then, as work is done, the code is committed and pushed from the developer's local repo and added to the repo on GitHub.

With GitHub we can:

* clone an existing repository from Github
* create a new remote on Github
* push a local repository to Github from the command line

Read more about the workflow we use with GitHub [here on the GitHub Guides](https://guides.github.com/introduction/flow/).

## Getting Set Up

You already have your text editor up and running and Xcode installed, but if you have any questions about how those are set up, look at the bottom of this lesson.

## Setting up Git

### Homebrew

[Homebrew](http://brew.sh) is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

Open the Terminal and run the homebrew installation script:

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will ask you for your password. This is the password to log in to your account on the computer. It needs this because it installs its packages in a place that all users of this computer can access.

#### Verifying Homebrew

When it has completed the installation run `brew doctor` and it should tell you that everything is fine:

```shell
brew doctor
Your system is ready to brew.
```

#### Modifying your PATH

If you got a warning from Homebrew about your path, do the following:

```shell
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

Now run `brew doctor` again and the warning should be gone.

##### Aside: `PATH`

Your `PATH` is a system configuration property which tells your computer where to look for underlying programs when you want to run a command. By adding this directory to our `PATH`, we're telling the system how to find the various applications we will install using Homebrew

##### Aside: `~/.bash_profile`

When we use our terminal, we're actually using a program called a *shell* to interact with the underlying operating system. Specifically, we're using a shell called [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

The file `~/.bash_profile` contains settings and commands to help us configure the shell, so when we have a bit of configuration code such as setting our `PATH`, it often goes in our `~/.bash_profile`.

### Git

[Git](http://git-scm.com/) is the version control system of choice in the JavaScript community. XCode installed an older version of Git for you, but let's update it.

```shell
brew install git
==> Downloading http://git-core.googlecode.com/files/git-1.8.3.4.tar.gz
########################################################### 100.0%
```

#### Configuring Git

If you haven't used git before (don't worry, we'll continuing covering how to use it in future classes), we'll want to configure it with some basic information about us.

We can tell git to configure itself using the `git config` command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the `--global` flag when we provide it with a new piece of configuration.

Tell git your name and email address by using the following commands, substituting your own name and email:

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

In order to push up to GitHub, you'll also need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/generating-an-ssh-key/).

#### Downloading GitHub Desktop

[GitHub Desktop](https://desktop.github.com/) is a graphical interface that allows you to work with Git and GitHub outside of the command line. If you need some help setting it up, take a look at the step by step [docs from GitHub](https://help.github.com/desktop/guides/getting-started/setting-up-github-desktop/) or find more information [here](https://help.github.com/desktop/guides/getting-started/).

### Git Commands for a Basic workflow

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

### Additional Resources

#### Text Editor and XCode

If you don't already have a favorite text editor, we recommend using [Atom](https://atom.io/). Also, make sure you have XCode installed (using the Apple App Store). To verify that you have XCode command line tools installed, enter the command `gcc -v` into your terminal.

The output should include something like `Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/c++/4.2.1`.

#### Setting Up Terminal Access for Atom

One of the things you'll do frequently is open an entire folder (like when working on a project) in your text editor. Let's get that setup:

1. Open Atom (`command-spacebar` for spotlight, type `Atom`, and hit enter).
2. Click the `Atom` menu in the top left corner
3. Click `Install Shell Commands`
4. Return to your terminal and enter `which atom`. You should get back `/usr/local/bin/atom`
5. Enter `atom .` to open your user directory in Atom.
6. Experiment with creating a file in Atom and using `ls` in the terminal to see it. Try creating a file in the terminal with `touch` and see if it shows up in Atom.

#### Setting Up XCode & Command Line Tools

XCode is a huge suite of development tools published by Apple. If we wanted to develop
software for the Apple Ecosystem (iPhone apps, Mac OS Apps, etc), we would use XCode as our editor.
But even if we aren't working in this ecosystem, XCode provides some system dependencies that we'll
want to have available.

You'll want to install it before attempting to install anything else.

1. Install XCode from the Apple App Store
2. Open the application after installing and agree to the SLA terms
3. Open `terminal` and run `xcode-select --install`, enter your user password
