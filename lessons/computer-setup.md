---
title: Computer Setup
length: 60
tags: node, setup, tools
---

Before we can do much programming, we need to make sure our machines are properly configured with a functional Development environment. Let's walk through this process now to make sure we have what we need.

Here are the basics we're going to go over:

- A text editor. Developers need to work with text in a different way than your average MS Word user. We'll want a text editor designed for software development.
  - [Atom](http://atom.io)
  - [Visual Studio Code](https://code.visualstudio.com/)
- A system _Terminal_ for interacting with our machine from the command line. Fortunately macOS already ships with one.
- macOS "Command Line Tools" -- these are some system dependencies needed for some of the tools we will use.
- **Homebrew**: This is a "package manager" for installing other developer-related programs. You can think of it as the "App Store for nerds."
- Git (An application for handling "version control" of our software projects)
- The Ruby programming language -- version 2.2 in particular -- as well as a Ruby "Version Manager" to allow
us to install other versions as needed

### Xcode & Command Line Tools

Xcode is a huge suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. But even if we aren't working in this ecosystem, Xcode provides some system dependencies that we'll want to have available.

You'll want to install it before attempting to install anything else.

Open `terminal` and run `xcode-select --install`, enter your user password

Now you should have the underlying tools we need to move forward.

### Homebrew

[Homebrew](http://brew.sh) is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

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

### Modifying your PATH

If you got a warning from Homebrew about your path, do the following:

```shell
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

Now run `brew doctor` again and the warning should be gone.

#### Aside: `PATH`

Your `PATH` is a system configuration
property which tells your computer which places to look for underlying programs
when you want to run a command.

For example, when we type `ruby` at the command line to run a ruby program, our `PATH`
will help the system know where on the system to find ruby. By adding this directory
to our `PATH`, we're telling the system how to find the various applications we will
install using Homebrew

#### Aside: `~/.bash_profile`

When we use our terminal, we're actually using a program called a "Shell" to interact
with the underlying Operating System. Specifically, we're using a shell called [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

The file `~/.bash_profile` contains settings and commands to help us configure the shell,
so when we have a bit of configuration code such as setting our `PATH`, it often goes
in our `~/.bash_profile`.

### Git

[Git](http://git-scm.com/) is the version control system of choice in the Ruby community.
Xcode installed an older version of Git for you, but let's update it.

```shell
brew install git
==> Downloading http://git-core.googlecode.com/files/git-1.8.3.4.tar.gz
########################################################### 100.0%
```

#### Configuring Git

If you haven't used git before (don't worry, we'll be covering its usage in future classes), we'll want to configure it with some basic information about us.

We can tell git to configure itself using the `git config` command from our terminal.

Additionally, we're setting "global" configurations for git, so we'll use the `--global` flag
when we provide it with a new piece of configuration.

Tell git your name and email address by using the following commands, substituting your own name and email:

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### Install the Atom command line tools

  - Open Atom (`Command-Space` for spotlight, type `Atom`, and hit enter).
  - Click the `Atom` menu in the top left corner
  - Click `Install Shell Commands`
  - Return to your terminal and enter `which atom`. You should get back `/usr/local/bin/atom`
  - Enter `atom .` to open your user directory in Atom.
  - Experiment with creating a file in Atom and using `ls` in the terminal to see it. Try creating a file in the terminal with `touch` and see if it shows up in Atom.

#### _Optional_: Install Visual Studio Code command line tools

- _Alternatively_, install the Visual Studio Code command line tools:
  - Launch VS Code. Now open the Command Palette (`⇧⌘P`) and type shell command to find the Shell Command: Install 'code' command in PATH command.
- Open up the _Terminal_ application by going to _Applications_ and then _Utilities_.
    - Drag this to the dock so that you have easy access to it later.

### Install [Node.js](http://nodejs.org) using `nvm`

- `touch ~/.bash_profile`
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash`
- Close and reopen the Terminal window
- `nvm ls-remote`
- Install the last, most-recent version in the list.
    - Right now, that's `nvm install 6.7.0`

### Setup [Exercisms](http://exercism.io)
We introduce exercisms later in the module. For now, we're just getting things setup.

- Visit [exercism.io](http://exercism.io/). In the top right corner, click "Log in with Github" and follow the authentication steps.
- In your terminal, install jasmine-node (a javascript testing suite): ```npm install jasmine-node -g```
- In your terminal, using brew, install the exercism CLI: ```brew install exercism```
- Verify that it was installed properly by running: ```exercism --version``` (If there was a problem you will get an error message saying command not found.)
- Go back to your exercism account online, under your profile, in "API Key", you will find a configuration command that you need to type into your terminal. Copy that command and paste it into your terminal.
- In your terminal, navigate to the exercism directory: ```cd exercism```
- Now type ```exercism fetch javascript```
- Now type ```cd javascript```
- Now type ```cd hello-world```
- Now type ```jasmine-node .```
- Success looks like this in your terminal:

```
F

Failures:

  1) Hello World says hello world with no name
   Message:
     Expected undefined to equal 'Hello, World!'.
   Stacktrace:
     Error: Expected undefined to equal 'Hello, World!'.
    at .<anonymous> (/Users/breethomas/exercism/javascript/hello-world/hello-world.spec.js:7:34)

Finished in 0.01 seconds
1 test, 1 assertion, 1 failure, 0 skipped
```
- If you get anything else, let an instructor know and we'll come trouble-shoot.
- If you are successful, cd back to your root directory: ```cd ~```




