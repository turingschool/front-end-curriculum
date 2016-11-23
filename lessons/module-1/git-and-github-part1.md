---
title: Introduction to Git and GitHub - Part 1
length: 60
tags: git, github
---

### Learning Goals

In this lesson, you will learn how to:

* Use a version control system (in this case, Git)
* Start a project with Git
* Make local version contributions to a project using Git

## Git

### Some Context: What is Git?

### Why Do We Use Git?

### What Git is NOT

Git is NOT the same as GitHub.

We will work with GitHub later, but first we need to understand Git by itself. Despite their similar names, Git and GitHub are not the same thing. They work together, but they are their own distinct beasts. Git allows us to save specific versions of our work in a local repository on our computer. GitHub is an online Git project repository hosting service, which means it holds the directories that contain all the files and folders that make up our projects. GitHub also allows teams to work seamlessly together (most of the time) on the same codebase. Everyone on a team can pull down a local version of the repo on GitHub, and then, as work is done, the code is committed and pushed from the developer's local repo and added to the repo on GitHub.

## Git Setup

You already have your text editor up and running and Xcode installed, but if you have any questions about how those are set up, look at the bottom of this lesson.

### Install Homebrew

[Homebrew](http://brew.sh) is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

Open the Terminal and run the homebrew installation script:

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will ask you for your password. This is the password to log in to your account on the computer. It needs this because it installs its packages in a place that all users of this computer can access.

#### Verify Homebrew

When it has completed the installation run `brew doctor` and it should tell you that everything is fine:

```shell
brew doctor
Your system is ready to brew.
```

#### Modifying your PATH (if necessary)

If you got a warning from Homebrew about your path, do the following:

```shell
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

Now run `brew doctor` again and the warning should be gone.

### Install Git

[Git](http://git-scm.com/) is the version control system of choice in the JavaScript community. XCode installed an older version of Git for you, but let's update it.

```shell
brew install git
==> Downloading http://git-core.googlecode.com/files/git-1.8.3.4.tar.gz
########################################################### 100.0%
```

### Configuring Git

If you haven't used Git before, then we need to configure it with some basic information about us.

We can tell git to configure itself using the `git config` command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the `--global` flag when we provide it with a new piece of configuration.

Tell git your name and email address by using the following commands, substituting your own name and email:

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Now we're ready to go!

## Working Example...

* Create a new directory
* Initialize git repo
* Check branch and talk about master branch (typical workflow keeping master clean)
* Make a branch?
* Add a file
* Check status
* Add HTML file to staging
* Commit the file
* Edit file (adding content)
* Check status again
* Commit changes
* Look at commit log
* Make more changes
* Commit changes
* Didn't like changes and want to go back to previous commit?...need to talk about head and detached head state?
* Reset hard and continue from there
* Satisfied with work on branch, ready to merge to master
* Checkout master (notice the changes are gone, maybe go back and forth to see changes on each branch)
* Merge branch into master

### Typical Git Workflow

From the example we worked through above, we can come up with a common workflow when we are only using Git locally (without worrying about GitHub yet).

1. akjshdkhjsa
2. asjdakjlalskdj

## Additional Resources

The [next part]() of this lesson works on using Git with GitHub.

#### Aside: `PATH`

Your `PATH` is a system configuration property which tells your computer where to look for underlying programs when you want to run a command. By adding this directory to our `PATH`, we're telling the system how to find the various applications we will install using Homebrew

#### Aside: `~/.bash_profile`

When we use our terminal, we're actually using a program called a *shell* to interact with the underlying operating system. Specifically, we're using a shell called [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

The file `~/.bash_profile` contains settings and commands to help us configure the shell, so when we have a bit of configuration code such as setting our `PATH`, it often goes in our `~/.bash_profile`.

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
