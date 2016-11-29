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

[Git](http://git-scm.com/) is the version control system of choice in the JavaScript community and many others. XCode installed an older version of Git for you, but let's update it.

```shell
brew install git
==> Downloading http://git-core.googlecode.com/files/git-1.8.3.4.tar.gz
########################################################### 100.0%
```

### Configuring Git

If you haven't used Git before, then we need to configure it with some basic information about us. You might have done this during Computer Setup. If so, then you can skip this section.

We can tell git to configure itself using the `git config` command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the `--global` flag when we provide it with a new piece of configuration.

Tell git your name and email address by using the following commands, substituting your own name and email:

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Now we're ready to go!

## An Example Journey Through Git

#### Create a new directory

In your terminal, change into a directory where you can add Turing related projects. Once you are in that directory, create a new directory called `git-intro`. Change into that directory.

#### Initialize git (`git init`)

Once you are in the `git-intro` directory, in the terminal, type `git status`. What do you see? An error? This error says that this directory is not a git repository, and the terminal can't do what you're trying to ask of it.

For this command to recognize that command and give you useful information, we must initialize git for this specific directory. Type `git init` into the terminal.

Now type `git status` in the terminal, and you should see a different message. Now Git is tracking where you have made changes within this directory. We'll get into the status in a bit.

Additionally, if we use `ls -la` to look in the directory, we can see a `.git` hidden directory. The `.git` directory is not something you need to worry about, and you will likely never modify it. It is used by Git to keep track of your change history (commits) - more on that later.

#### Add a file

Let's make this a real project and actually add some content! Add a new HTML file from the terminal using `touch index.html`.

#### Check status (`git status`)

We've added a file, and by doing that we've made changes in our directory. Does Git know about these changes? Let's check by checking the status of our repository using the command `git status`.

Now we see some new information! There is a section of this message that says "Untracked files:" with something that looks familiar - the name of the file we just created.

#### Add file to staging area (`git add`)

If in the future we want to add these changes to our repository (and we do), then we need to add this file to the "staging area". To add the file to the staging area, use the command `git add index.html`. This command is saying to add the file named `index.html` to the staging area.

If we wanted to add all of the untracked files or changes, then we could use the command `git add .`. The dot `.` after `add` says add everything.

Let's check the status of our Git repository again: `git status`. Now we see the same file name under the heading "Changes to be committed:".

#### Commit the file (`git commit`)

Now that we have added the file to the staging area, we are ready to commit the file. Committing the file will "save" these changes to the Git history in this repository. Think of this as a snapshot of our directory (or a snapshot of our project).

Commit the file using the command: `git commit -m "Add new index HTML file"`

The `-m` part of the command says we want to add a message to this commit. ALWAYS add a message. The message is information that you (or other developers) can use at a later time when you want to look back and see what changes were contained in a commit. We will view this history later.

#### Edit the file



10. Check status again
11. Commit changes (this is like V2 of this file)
12. Look at commit log and see the "versions"

#### The master branch

When we type `git status`, part of the message we get back is "On branch master". What is a branch, and what is master?

In Git, there is a concept of branches.

[More info on branching.](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

#### Make a branch (`git branch` and `git checkout`)

13. Make more changes
14. Commit changes
15. Didn't like changes and want to go back to previous commit?...need to talk about head and detached head state?
16. Reset hard and continue from there
17. Satisfied with work on branch, ready to merge to master
18. Checkout master (notice the changes are gone, maybe go back and forth to see changes on each branch)
19. Merge branch into master

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
