---
title: Introduction to the Terminal
length: 90
tags: command line, terminal
---

### Context

You probably grew up around computers, but if you're like most of the non-developer population, you may have never touched the terminal. Why would need to? Everything you need to do can be done on the desktop or through the finder, and only super nerds use the terminal anyway. Right?

Well, no.

You might be thinking to yourself "Hey, wait a minute! I'm pretty darn fast when it comes to using my mouse to get around. Why do you think I need to use the terminal?"

It turns out you actually aren't fast enough. As a developer everything you do should be based on speed and efficiency. When any part of your work flow is lacking you are wasting time. Over the course of a day, every extra second compounds into time you aren't spending doing productive work. Not being a fluent user of your command line is a pain point that may not be terribly noticeable as you first start writing code and you're still gaining momentum, but over time as you work more quickly you (and your pairing partners) will absolutely feel it. In an interview or workplace environment not being able to effectively use your terminal is a red flag. That means it's important to start flexing our command line muscles right away to build understanding and comfort with this tool.

### Moving Forward

When you're first starting to learn anything coding related you have to build up your muscle memory. It's totally normal to start slow and improve with focused practice and repetition. You're not going to learn unless you actually get your hands dirty and dive right in!

Don't worry! You aren't going to break your computer. It's easy to fear the unknown and let it keep you from learning how to efficiently use the terminal. But if you push past the first day or two of feeling uncomfortable, you'll become great at using the terminal in no time.

Let's actually start working on some basic interactions with our files.

### Moving Through Our File Structure: ``pwd``, ``ls``, ``cd``

When you open up your terminal you aren't greeted with much. It just says your name and that's about it. Typically when you open up your terminal you are brought to your root directory. Directory is just another word for folder.

#### pwd

Let's first get a handle of where we are in our computer's file structure. To see where you are located in the file structure, enter ``pwd`` in the terminal. This stands for present working directory. If you are in the root directory, it will most like say ``/Users/[your name]``. If you're ever confused about where you are, then use ``pwd`` to find out!

#### ls

Our file structure is made up of files and directories. Just as you would see in Finder or the Windows File Explorer, files and directories can live inside other directories, which you can visualize in a tree-level structure.

```
|- first-level-dir
  |-- second-level-dir
  |-- another-dir
    |--- third-level-dir (that is under/within another-dir)
```

When we use the command ``ls`` it will list for us all the content in our current directory at a single level. You can see directories and files in the current directory, but you cannot see directories and files that are inside these directories.

For a more detailed list of content, type ``ls -la``.

#### cd

To change our current directory, we use the command ``cd``. To move from the current directory into another directory, you use ``cd [name of the folder]``. For example, if your current directory is named ``turing``, and you want to move to ``notes``, then...

```
|- turing
  |-- notes
```

You would enter ``cd notes`` into the terminal. Usually, you would say that you are going down into the notes directory.

If you want to go back, then simply use two periods: ``cd ..`` to go back up one level. With the previous example where you are currently in the notes directory, you would type ``cd ..`` to get to the ``turing`` directory.

One thing that you have to keep in mind is that in this process you won't really get a prompt if you did the thing right. Typically if there is no output to the terminal when you do the correct thing.

You might be thinking to yourself, "Wow, I'm doing a lot of typing...and if I type something incorrectly in the terminal, then I'll go to the wrong place or nowhere at all."

Tab completion is your friend when you don't want to type an entire directory name or you don't quite remember how something is spelled. What I mean by that is if you're trying to change directories or ``cd`` anywhere, if you start typing the first part of where you want to go and then you hit ``tab``, then the terminal will autocomplete the rest of the desired directory for you.

For example, in the directory structure:

```
|- turing
  |-- notes
```

If you are currently in the ``turing`` directory and you want to go to notes, then just type ``cd n`` and hit ``tab``. The terminal will autocomplete for you and your command will become ``cd notes``. Then hit ``Enter`` to finish the directory change.

What if you want to change to a directory that is inside another directory? You can imagine that using ``cd`` multiple times would get tiring and slow. What's really cool is if we have something multiple levels deep we can keep adding directories to our ``cd`` command. Say we have:

```
|- turing
  |-- notes
    |--- first-lesson
```

If we're in ``turing`` and we want to get to ``first-lesson`` quickly, then we can do this with one command: ``cd notes/first-lesson``

Note that each directory is separated with a slash, ``/``. If you wanted to add another directory, then it would be something like: ``cd notes/first-lesson/section-one``

Likewise, we can also go back up multiple directories using one command. If you are in the ``first-lesson`` directory and you want to go back to the ``turing`` directory, then you can use the double dots as before with the slash separator: ``cd ../..``

### Your Turn

Type ``ls`` into your terminal.

From there, ``cd`` into your documents folder.

Once you're in your documents folder type in ``ls`` again to see what folders and files you have available. If you have another folder available, I would like you to ``cd`` into that directory.

When you're done with, that try and figure out a way to get back to your ``root`` directory from where you're at.

### Making Folders & Creating/Removing Files: ``mkdir``, ``touch``, ``rm``

#### mkdir

Creating a folder/directory is something that you will be doing often. A way to create a new folder is using the ``mkdir [dir name]`` operator. What this will do is create a new folder for us with whatever name you want to give it.

Let's create a new directory called ``pizza``. Enter ``mkdir pizza`` in the terminal.

Keep in mind that even though you've created this folder, it doesn't mean you are inside of that folder you've just created. To actually go into our new folder, you need to ``cd`` into it. Go ahead and ``cd`` into the ``pizza`` directory.

#### touch

Now that we are inside of this directory what we can do now is create a new file. The command we are going to use to do this is the ``touch [file name]`` command.

Let's make a new, blank text file using ``touch toppings.txt``.

#### rm

So we can make directories and new files, but we want to be able to remove them. That is where the ``rm`` command comes in. If we're not happy with our ``toppings.txt`` file, then we can delete it.

Enter ``rm toppings.txt`` into the terminal, and poof, it's gone! As you can see there was no warning like, "Are you sure you want to delete this file?..." Be careful with this command because you can't undo it.

### Your Turn

Make sure you're in your ``~`` directory. Once you're there, I want your to create a directory called ``turing`` and inside of that directory I want your to create a directory called ``mod1``. Once you've done, then go ahead and touch a file called ``sample.html``. Now if you want to delete that file you can use the command ``rm sample.html``.

If you're looking for a little bit of a challenge, feel free to ``cd`` into your ``~`` directory and remove the folder you created. Once you've done that, try creating your folders and files again but in a one-line command.

### Copying and Moving: ``cp``, ``mv``

So now that we can create and remove files, let's add to our toolbox by being able to copy or move files. At a high level, ``cp`` keeps the source file and copies the file to a new location. ``mv`` takes the source file and moves it to a new location.

#### cp

The copy command, ``cp``, has two options you need to enter: ``cp [the thing you want to copy] [where you want to copy it to]``, or more simply ``cp [source] [destination]``.

If we have a file named ``sample.txt`` in this ``turing`` directory, and we want to copy it inside the notes directory, then we can use this series of terminal commands.

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

If we are in the ``turing`` directory, then this is how we move the file:

```
cp sample.txt notes/
```

#### mv

Similarly, if we want to move a file, then we use the ``mv`` command with ``mv [source] [destination]``. It's almost the same as copy, but as you can guess, the file is moved instead of copied.

Like in the example before, if we want to move the file instead of copy it into the notes directory, then we could say ``mv sample.txt notes/`` to end up with:

```
|- turing
  |-- notes
    |--- sample.txt
```

### Your Turn

Make a few nested directories with blank files in them, and move files around from directory to directory.

Can you figure out how to rename a file using the ``mv`` command? How about ``cp``?

### Copy Paste for File Contents: ``pbcopy``, ``pbpaste``

It's likely that copy-and-pasting is a big part of your life. You might think that doing something like this is in the terminal could be frustrating. In actuality it's not that difficult.

In this case ``pbcopy < [file]`` & ``pbpaste > [file]`` copies the context of one file and pastes the contents into another file.

For example, let's say we have a file ``hello.txt`` with the content ``Hello World!`` written inside of it, and we want to copy that text into a file named ``aloha.txt``.

Start by copying the contents from ``hello.txt``: ``pbcopy < hello.txt``

And paste it into the ``aloha.txt`` file: ``pbpaste > aloha.txt``

Now the ``aloha.txt`` file has the contents ``Hello World!``.

## Additional Resources

If you want some more command line repetition and practice, then you can use this short course: [Learn the Command Line from Code Academy](https://www.codecademy.com/learn/learn-the-command-line)

The documentation for each command in the terminal is available if you type ``man [command]``. For instance, ``man cd``. Once you're done viewing the manual page, enter ``q`` to exit.
