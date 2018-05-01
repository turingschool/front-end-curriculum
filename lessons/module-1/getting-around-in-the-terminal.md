---
title: Introduction to the Terminal
length: 90
tags: command line, terminal
---

## Vocab

- `Terminal` A program that allows a user to interact with The Command Line
- `A Shell` A low level interface for your computer. Instead of pointing and clicking on things, you type words and run commands
- `The Command Line` The same thing as a shell - often used interchangeably 
- `bash` A particular type of shell found on Unix systems
- `Directory` Same thing as a Folder
- `command` - A set of instructions for the computer to execute - provided via the command line
- `argument` - A piece of information needed to run a certain command ie. `touch sample.txt` where sample.txt is the argument
- `flag` - An optional argument usually prefixed by a `-` or `--` ie. `ls -a` where -a is the flag

### A note on interchangeable terms above

Most people use the terms `terminal`, `shell`, `command line`, and `bash` interchangeably.
That's okay! The problem comes when they're used _incorrectly_.

Here's a few examples of correct usage:
- "Can you increase the font size of **your terminal**?"
- "We need to open up **the command line** here."
- "Let's use **the shell** for this task."
- "I don't like using **bash** - I think fish is better"

Additionally, there's a Mac application just called `Terminal`. That's a specific program that accesses the command line.

## Context

### You're not as fast as you think

You probably grew up around computers, but if you're like most of the non-developer population, you may have never touched the terminal. Why would you need to? Everything you need to do can be done on the desktop or through the Finder, and only super nerds use the terminal anyway. Right?

Well, no...

You might be thinking to yourself "Hey, wait a minute! I'm pretty darn fast when it comes to using my mouse to get around. Why do you think I need to use the terminal?"

### Efficiency and Competency Show

It turns out you actually aren't fast enough. As a developer everything you do should be based on speed and efficiency. When any part of your work flow is lacking you are wasting time. Over the course of a day, every extra second compounds into time you aren't spending doing productive work. Not being a fluent user of your command line is a pain point that may not be terribly noticeable as you first start writing code and you're still gaining momentum, but over time as you work more quickly you (and your pairing partners) will absolutely feel it. In an interview or workplace environment not being able to effectively use your terminal is a red flag. That means it's important to start flexing our command line muscles right away to build understanding and comfort with this tool.

### Some things must be setup in the terminal 

Additionally, some of the tools you will use as a developer can only be used through the terminal and not by clicking in a program. You'll use those tools in the terminal soon enough!

## Moving Forward

The terminal seems scary at first - no graphics, all text, little to no feedback, and you might be worried about deleting everything in your computer.

Don't worry! You aren't going to break your computer. It's easy to fear the unknown and let it keep you from learning how to efficiently use the terminal. But if you push past the first day or two of feeling uncomfortable, you'll become great at using the terminal in no time.

When you're first starting to learn anything coding related, you have to build up your muscle memory. It's totally normal to start slow and improve with focused practice and repetition. You're not going to learn unless you actually get your hands dirty and dive right in!

Let's actually start working on some basic interactions with our files using the terminal. We're going to assume that you're using a Mac for this lesson.

Open your terminal using `command + spacebar`, then type `terminal`, and press `enter`. The mysterious black window appears...

### Side Note - Keyboard Shortcuts for Efficiency

`command + spacebar` will open your spotlight search

`command + tab` will take you to your most recent open application 

## Observe the File Structure: `pwd`, `ls`

When you open up your terminal, you aren't greeted with much. It just says your name and that's about it. Typically when you open up your terminal you are brought to your root directory. Directory is just another word for folder. Your root directory usually contains:

```
|- Applications
|- Documents
|- Desktop
|- Music
|- Pictures
```
(and other directories depending on your computer)

### pwd (print working directory)

We can use our terminal to navigate through our computer's directories.

Let's first get a handle of where we are in our computer's file structure. To see where you are located in the file structure, enter `pwd` in the terminal. This stands for your present working directory. If you are in the root directory, it will most like say `/Users/[your name]`. If you ever forget or are confused about where you are, then use `pwd` to find out!

### ls (list)

Our file structure is made up of files and directories. Just as you would see visually in Finder or the Windows File Explorer, files and directories can live inside other directories, which you can picture as:

```
|- first-level-dir
  |-- second-level-dir
  |-- another-dir
    |--- third-level-dir (that is under/within `another-dir`)
```

In the terminal, we don't have Finder to visually tell us what is contained within a directory or nested directories, but we do have commands to tell us.

We can use the command `ls` to list the content in our current directory. You can see directories and files in the current directory, but you cannot see directories and files that are inside other directories.

### Your Turn

* Open your terminal and enter the command `pwd`. What do you see? Can you find this same location using Finder?

* Enter the command `ls`. What directories and files do you see?

* Enter `ls -la`. How does this list change? Do you see the same files and directories when you use Finder?

For a more detailed list of content, type `ls -la` - note the space between the characters. The addition of `-la` gives more information about when that file or directory was last modified, permissions, and also lists [hidden files/directories](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory).

## Make Folders & Create/Remove Files: `mkdir`, `touch`, `rm`

### mkdir (make directory)

Creating a folder/directory is something that you will be doing often. A way to create a new folder is using the `mkdir [dir name]` command. What this will do is create a new folder for us with whatever name you want to give it.

Note: A common way to document how to use a command is the command name, `mkdir`, and then something within square brackets, `[dir name]`. The first part, `mkdir`, is the text that the terminal recognizes as a command. The second part, `[dir name]`, is the part where you will specify the new directory's name. The square brackets mean that this is a place for you to fill in your own information, but you do not include the square brackets.

For example, let's create a new directory called `pizza`. Enter `mkdir pizza` in the terminal.

One thing that you have to keep in mind is that in this process you won't really get a prompt if you did the thing right. Typically if there is no output to the terminal when you do the correct thing.

How do we check that the directory was made? Use `ls` to check that it is listed.

Keep in mind that even though you've created this folder, it doesn't mean you are inside of that folder you've just created. To actually go into our new folder, you need to change into that new directory, but we will talk about this in the next section.

### touch (create file)

Similar to directories, we also need to be able to create new files. The command we are going to use to do this is the `touch [file name]` command.

Let's make a new, blank text file using `touch toppings.txt`. If we open the file, there is nothing in it, but we expect that because we only told the terminal to create a new file.

### rm (remove)

So we can make directories and new files, but we want to be able to remove them. That is where the `rm` command comes in. If we're not happy with our `toppings.txt` file, then we can delete it.

Enter `rm toppings.txt` into the terminal, and poof, it's gone! As you can see there was no warning like, "Are you sure you want to delete this file?..." Be careful with this command because you can't undo it.

### Your Turn

* Open a new terminal window. Create five different directories (with different names). Double check that all of the directories are listed in your current directory. Delete all the directories.

* Create ten new files with different file names. Double check that all the files are listed in your current directory. Delete all the files you just created.

## Move Through the File Structure: `cd`

### cd (change directory)

If we are in our root directory, and we want to see what files are within the Pictures directory, we currently don't have a way to do that. For instance, if we are in the root directory, and we enter `ls` in the terminal, it will just list the files and directories in the root directory, but we cannot see what is inside Pictures by only using `ls`.

To see what is in other directories, we can move around and navigate through our file structure. We want to change into the Pictures directory to see what is inside it.

To change our current directory, we use the command `cd [directory name]`. We can move through directories in two directions: up or down - to a previous directory or to a nested directory. Let's see this visually with sample directories.

```
|- turing
  |-- notes
```

From the example above, if your current directory is `turing` and you want to move to `notes`, then you would enter `cd notes` into the terminal. We our changing our current directory to the `notes` directory. Usually, you would say that you are going down into the notes directory.

If you want to go back to the `turing` directory, then simply use two periods: `cd ..` to go back up one level. With the previous example where you are currently in the notes directory, you would type `cd ..` to get to the `turing` directory.

You might be thinking to yourself, "Wow, I'm doing a lot of typing...and if I type something incorrectly in the terminal, then I'll go to the wrong place or nowhere at all."

### Tab Autocomplete & Nested Directories
 
Tab completion is your friend when you don't want to type an entire directory name or you don't quite remember how something is spelled. What I mean by that is if you're trying to change directories or `cd` anywhere, if you start typing the first part of where you want to go and then you hit `tab`, then the terminal will autocomplete the rest of the desired directory for you.

For example, in the directory structure:

```
|- turing
  |-- notes
```

If you are currently in the `turing` directory and you want to go to notes, then just type `cd n` and hit `tab`. The terminal will autocomplete for you and your command will become `cd notes`. Then hit `enter` to run the directory change.

What if you want to change to a directory that is inside another directory? You can imagine that using `cd` multiple times would get tiring and slow. What's really cool is if we have something multiple levels deep we can keep adding directories to our `cd` command. Say we have:

```
|- turing
  |-- notes
    |--- first-lesson
```

If we're in `turing` and we want to get to `first-lesson` quickly, then we can do this with one command: `cd notes/first-lesson`

Note that each directory is separated with a slash, `/`. If you wanted to add another directory, then it would be something like: `cd notes/first-lesson/section-one`

Likewise, we can also go back up multiple directories using one command. If you are in the `first-lesson` directory and you want to go back to the `turing` directory, then you can use the double dots as before with the slash separator: `cd ../..`

### Your Turn

* In your terminal, change to your root directory. Your root directory is noted as a `~` symbol. So the change directory command would be `cd ~`. From there, `cd` into your Documents folder.

* Once you're in your Documents directory, list the contents of the Documents directory.

* In your Documents directory, make a new directory of your choosing. Change into that directory, and make another new directory. Repeat this five times. When you are done, delete the directories you just made, one directory at a time.

## Commands From Your Present Working Directory

Using `cd`, you can move around directories and add files in the directories where we need them. However, moving around to other directories can get tedious and time consuming.

From our present working directory, you can add files or directories anywhere in our file system by adding our "directory path" in our terminal commands.

### Create Files

Going back to `mkdir` and `touch`, you can chain on directories if you want to add files inside other directories. Say you have these directories:

```
|- turing (your present working directory)
  |-- mod1
```

If your present working directory is `turing`, then you can create a new file inside `mod1` using one command: `touch mod1/new-file.txt`. This command includes the directory and then the new file you want to create. You don't have to `cd` into `mod1`. With this command, you end up with:

```
|- turing
  |-- mod1
    |--- new-file.txt
```

## Create Directories

The same can be done with making new directories. With our current running example, let's add a directory inside the `mod1` directory. Again, if your present working directory is `turing`, then you can do this with one command: `mkdir mod1/new-directory`. We end up with:

```
|- turing
  |-- mod1
    |--- new-directory
    |--- new-file.txt
```

### Your Turn

* Change to your root directory if you are not there already. How do we do this? With these next tasks, do not change into other directories. Keep your root directory as your present working directory.

* Make three nested directories.

* In each nested directory, create a file.

* Remove all of the directories and files that you just created - one directory at a time.

## Copy and Move Files/Directories: `cp`, `mv`

So now that we can create and remove files, let's add to our toolbox the ability to copy or move files. At a high level, `cp` keeps the source file and copies the file to a new location. `mv` takes the source file and moves it to a new location.

### cp (copy)

The copy command, `cp`, has two options you need to enter: `cp [the thing you want to copy] [where you want to copy it to]`, or more simply `cp [source] [destination]`.

If we have a file named `sample.txt` in this `turing` directory, and we want to copy it inside the notes directory, then we can use this series of terminal commands.

Current state:

```
|- turing
  |-- sample.txt
  |-- notes
```

Goal:

```
|- turing
  |-- sample.txt
  |-- notes
    |--- sample.txt
```

If we are in the `turing` directory, then this is how we move the file:

```
cp sample.txt notes/
```

### mv (move)

Similarly, if we want to move a file, then we use the `mv` command with `mv [source] [destination]`. It's almost the same as copy, but as you can guess, the file is moved instead of copied.

Like in the example before, if we want to move the file instead of copy it into the notes directory, then we could say `mv sample.txt notes/` to end up with:

```
|- turing
  |-- notes
    |--- sample.txt
```

### Your Turn

Make a few nested directories with blank files in them, and move files around from directory to directory.

Can you figure out how to rename a file using the `mv` command? How about `cp`?

## Copy Paste for File Contents: `pbcopy`, `pbpaste`

It's likely that copy-and-pasting is a big part of your life. You might think that doing something like this is in the terminal could be frustrating. In actuality it's not that difficult.

In this case `pbcopy < [file]` & `pbpaste > [file]` copies the context of one file and pastes the contents into another file.

For example, let's say we have a file `hello.txt` with the content `Hello World!` written inside of it, and we want to copy that text into a file named `aloha.txt`.

Start by copying the contents from `hello.txt`: `pbcopy < hello.txt`

And paste it into the `aloha.txt` file: `pbpaste > aloha.txt`

Now the `aloha.txt` file has the contents `Hello World!`.

# Wrap Up

From this point forward, you should not be using the Finder. Challenge yourself to use the terminal for navigation. It will be painful at first, but you can't get fast without starting slow.

Being fast in the terminal will help you in your evaluations at Turing.

Take some time to review this [cheatsheet of commands](https://gist.github.com/poopsplat/7195274)

You don't need all of the commands, or even most of them - but try out a few that seem interesting to you.

The documentation for each command in the terminal is available if you type `man [command]`. For instance, `man cd`. Once you're done viewing the manual page, enter `q` to exit.

## If You Are Feeling Like You Need More Practice

Use this short course to practice: [Learn the Command Line from Code Academy](https://www.codecademy.com/learn/learn-the-command-line)

## If You Are Feeling Pretty Comfortable

Continue on and complete the Advanced Topics section of this lesson below

# Advanced Topics (Optional)

## Customizing Your Terminal

A little bit of increased efficiency in your use of the Unix environment and your editor can pay significant dividends over time. Let's experiment with customizing and adding to your terminal and editor.

* You can check out dotfiles on GitHub to see how serious people get: [http://dotfiles.github.com/](http://dotfiles.github.com/)

## The Essentials

* `export` to set environment variables
* `alias` for shorthand commands, like I define `e` to launch my editor
* `source` to run scripts of bash commands

## Using Export

Snippets from Jeff's `.bash_profile` are below.
The top three lines setup a yellow lightning bolt as my prompt because, well, it's awesome.

```bash
export PS1="\W \[\033[0;33m\]⚡\[\033[0;39m\] "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
```

### Your Turn

Check out this [ezprompt generator](http://ezprompt.net/) and try to create a prompt for yourself

Can you add emoticons? Yes. Yes [you can](http://osxdaily.com/2013/04/08/add-emoji-command-line-bash-prompt/)

## Persisting Your Changes

* Open `~/.bash_profile` in a text editor (ex: `sublime ~/.bash_profile`)

Anything that you type into your terminal will only persist for the lifetime of the terminal session. If you want to save your bash prompt, you'll do so by adding the commands you put in your terminal to your .bash_profile file.

### Your Turn

Try adding your bash prompt to the to the `~/.bash_profile`

Close your terminal and reopen, see if it still works!

## Using `alias`

A shortcut for getting back to our "Module 1" directory

alias m1="cd ~/turing/1module"

Test it out by typing `m1` into your terminal

### Your Turn

Create a shortcut to the file path that you actually use to store your coursework!

Note: Make sure you get a specific alias that isn't already being used for something else. You can find out if it's already used by just typing it into your terminal and making sure you get a `command not found` back!

## Using `source` 

Enable git's tab-completion library

`source /usr/local/etc/bash_completion.d/git-completion.bash`

You can also create aliases for git if you are so inclined

Example shortcuts for git:

```bash
alias ga="git add"
alias gb="git branch"
alias gd="git diff --patience --ignore-space-change"
alias gh="git log --pretty=format:\"%Cgreen%h%Creset %Cblue%ad%Creset %s%C(yellow)%d%Creset %Cblue[%an]%Creset\" --graph --date=short"
alias gc="git checkout"
alias gs="git status"
```
