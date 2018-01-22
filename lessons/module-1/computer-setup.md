---
title: Computer Setup
length: 60
tags: node, setup, tools
---

Before we can do much programming, we need to make sure our machines are properly configured with a functional Development environment. Let's walk through this process now to make sure we have what we need.

Here are the basics we're going to go over:

- A text editor. Developers need to work with text in a different way than your average MS Word user. We'll want a text editor designed for software development.
  - [Sublime](https://www.sublimetext.com/)
- A system _Terminal_ for interacting with our machine from the command line. Fortunately macOS already ships with one.
- macOS "Command Line Tools" -- these are some system dependencies needed for some of the tools we will use.
- Homebrew -- This is a "package manager" for installing other developer-related programs. You can think of it as the "App Store for nerds."
- Git (An application for handling "version control" of our software projects)

### Xcode & Command Line Tools

Xcode is a huge suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. But even if we aren't working in this ecosystem, Xcode provides some system dependencies that we'll want to have available.

You'll want to install it before attempting to install anything else.

Download and install from the Apple App Store - this will probably take a little while.

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

[Git](http://git-scm.com/) is the version control system of choice in the web development community.
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

### Install Google Chrome Canary
[Chrome Canary](https://www.google.com/chrome/browser/canary.html)

Google Chrome Canary is a bleeding edge, experimental version of Chrome, with the latest features. This web browser is great for general internet perusing, but web developers like it because it has very useful developer tools (the console), which you will use in the prework and extensively during class.

### Install the Sublime command line tools

  - Make sure you download [Sublime](https://www.sublimetext.com/) 
  - Open your finder (Command-Space for spotlight, type Finder, and hit enter) 
  - Move Sublime from your downloads to your Applications folder.
  - Open your terminal (Command-Space for spotlight, type Sublime, and hit enter).
  - First up, check your own $PATH by typing the following in your terminal line:
  `echo $PATH`
    This is what mine returns:
      `/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin`

    As you can see the /usr/local/bin path is included by default on OS X.

  - Now, copy and paste the following line to put in your terminal:
  `ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime`
  - Open a new terminal window (Command-T) and type `sublime .`
  - Experiment with creating a file in Sublime and using `ls` in the terminal to see it. Try creating a file in the terminal with `touch` and see if it shows up in Sublime.
 
 (Full instructions can be found [here](http://olivierlacan.com/posts/launch-sublime-text-3-from-the-command-line//))

### Add config setting to set tab size

  - While sublime is open, Press command-comma to open your config file
  - Add the following lines of code within the curly braces:

```
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
```

  - This will set tabs to be two spaces and make tabs compile down to spaces 

### Install Node.js using `nvm`

- `touch ~/.bash_profile`
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash`
- Close and reopen the Terminal window
- `nvm ls-remote`
- Install the latest, **most-stable** version in the list.
    - As of cohort 1801 the latest stable version was `9.4.0.` Run the command `nvm install 9.4.0` (or whatever version shows up as the latest version on that list at this time).

### Add a public key to your github account

In order to push up to GitHub, you'll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this [tutorial from GitHub](https://help.github.com/articles/generating-an-ssh-key/).

Additional links if you need to further configure: [repeated requests for passwords](https://stackoverflow.com/questions/21095054/ssh-key-still-asking-for-password-and-passphrase) - [adding a new SSH key](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

## Additional Resources

### More things to setup if you so choose

  * [Excercisms](http://frontend.turing.io/independent-study/exercism-setup.html)
