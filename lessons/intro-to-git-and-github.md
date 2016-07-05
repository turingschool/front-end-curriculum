---
title: Git and GitHub
length:
tags: version control, git, github
---

### What is Git?

Git is a version control system, which means it allows us to record changes we make to our files over time -- it lets us *control the versions* of our files. With Git we can reference specific versions of our work as we need to. This means we can access a specific change we made days ago, or we can look back and see what changes have been made over time. It allows us to keep every version of our files, and gives us the ability to revert back to past versions of files, revert an entire project back to a previous state, compare changes over time, see who made specific changes, and all manner of useful things that can help us troubleshoot if (or when) we screw things up and or lose files. It makes it much, much easier to recover when things go wrong.

A typical workflow with Git includes:

* initialize a new git repository
* add files to git staging area
* commit files and directories
* check the status of the working directory and staging area and interpret the output
* view previous commits
* create and checkout a new branch
* switch between branches
* merge local branches to local master

### Git != GitHub

Despite their similar names, Git and GitHub are not the same thing. They work together, but they are their own distinct beasts. Git allows us to save specific versions of our work in a local repository on our computer. GitHub is an online Git project repository hosting service, which means it holds the directories that contain all the files and folders that make up our projects. GitHub also allows teams to work seamlessly together (most of the time) on the same codebase. Everyone on a team can pull down a local repo from the remote origin repo on GitHub, and then as work is done, the code is committed and pushed from the developers local repo and added to the remote origin repo on GitHub. The work of other developers is pulled down and merged into

With GitHub we can:

* clone an existing repository from Github
* create a new remote on Github
* push a local repository to Github from the command line

Read more about the workflow we use with GitHub [here](https://guides.github.com/introduction/flow/).

#### Getting Set Up

You already have your text editor up and running and Xcode installed, but if you have any questions about how those are set up here are the steps:

### Text Editor

If you don't already have a favorite text editor, we recommend using [Atom](https://atom.io/).

#### Setting Up Terminal Access for Atom

One of the things you'll do frequently is open an entire folder (like when working on a project) in your text editor. Let's get that setup:

* Open Atom (`command-spacebar` for spotlight, type `Atom`, and hit enter).
* Click the `Atom` menu in the top left corner
* Click `Install Shell Commands`
* Return to your terminal and enter `which atom`. You should get back `/usr/local/bin/atom`
* Enter `atom .` to open your user directory in Atom.
* Experiment with creating a file in Atom and using `ls` in the terminal to see it. Try creating a file in the terminal with `touch` and see if it shows up in Atom.

### XCode & Command Line Tools

XCode is a huge suite of development tools published by Apple. If we wanted to develop
software for the Apple Ecosystem (iPhone apps, Mac OS Apps, etc), we would use XCode as our editor.
But even if we aren't working in this ecosystem, XCode provides some system dependencies that we'll
want to have available.

You'll want to install it before attempting to install anything else.

1. Install XCode from the Apple App Store
2. Open the application after installing and agree to the SLA terms
3. Open `terminal` and run `xcode-select --install`, enter your user password

Now you should have the underlying tools we need to move forward.


#### Setting up Git

### Homebrew

[Homebrew](http://brew.sh) is a package management system that makes it easy
to install hundreds of open source projects and compile them from source
for maximum performance on your machine.

Open the Terminal then run the homebrew installation script:

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will ask you for your password. This is the password to log in to your account on the computer.
It needs this because it installs its packages in a place that all users of this computer can access.

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

__Aside: `PATH`:__

Your `PATH` is a system configuration property which tells your computer which places to look for underlying programs
when you want to run a command. By adding this directory to our `PATH`, we're telling the system how to find the various applications we will
install using Homebrew

__Aside: `~/.bash_profile`__

When we use our terminal, we're actually using a program called a "Shell" to interact
with the underlying Operating System. Specifically, we're using a shell called [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

The file `~/.bash_profile` contains settings and commands to help us configure the shell,
so when we have a bit of configuration code such as setting our `PATH`, it often goes
in our `~/.bash_profile`.

### Git

[Git](http://git-scm.com/) is the version control system of choice in the JavaScript community.
XCode installed an older version of Git for you, but let's update it.

```shell
brew install git
==> Downloading http://git-core.googlecode.com/files/git-1.8.3.4.tar.gz
########################################################### 100.0%
```

#### Configuring Git

If you haven't used git before (don't worry, we'll be covering its usage in future classes),
we'll want to configure it with some basic information about us.

We can tell git to configure itself using the `git config` command from our terminal.
Additionally, we're setting "global" configurations for git, so we'll use the `--global` flag
when we provide it with a new piece of configuration.

Tell git your Name and Email address by using the following commands, substituting your
own name and email:

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

You'll also need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/generating-an-ssh-key/).

#### Downloading GitHub Desktop

[GitHub Desktop](https://desktop.github.com/) is a graphical interface that allows you to work with Git and GitHub outside of the command line. If you need some help setting it up, take a look at the step by step [docs from GitHub](https://help.github.com/desktop/guides/getting-started/setting-up-github-desktop/) or find more information [here](https://help.github.com/desktop/guides/getting-started/).
