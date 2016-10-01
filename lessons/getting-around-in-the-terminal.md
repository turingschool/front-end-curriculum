---
title: Getting Comfortable with the Terminal
length: 180
tags: command line, terminal
---

### Context

You probably grew up around computers, but if you're like most of the non-developer population, you may have never touched the terminal. Why would need to? Everything you need to do can be done on the desktop or through the finder, and only super nerds use the terminal anyway. Right?

Well, no.

You might be thinking to yourself "Hey, wait a minute! I'm pretty darn fast when it comes to using my mouse to get around. Why do you think I need to use the terminal?"

It turns out you actually aren't fast enough. As a developer everything you do should be based on speed and efficiency. When any part of your work flow is lacking you are wasting time. Over the course of a day, every extra second compounds into time you aren't spending doing productive work. Not being a fluent user of your command line is a pain point that may not be terribly noticeable as you first start writing code and you're still gaining momentum, but over time as you work more quickly you (and your pairing partners) will absolutely feel it. In an interview or workplace environment not being able to effectively use your terminal is a red flag. That means it's important to start flexing our command line muscles right away to build understanding and comfort with this tool.

### Moving forward

When you're first starting to learn anything coding related you have to build up your muscle memory. It's totally normal to start slow and improve with focused practice and repetition. You're not going to learn unless you actually get your hands dirty and dive right in!

Don't worry! You aren't going to break your computer. It's easy to fear the unknown keep you from learning how to efficiently use the terminal. But if you push past the first day or two of feeling uncomfortable, you'll become great at using the terminal in no time.

Let's actually start working on some basic interactions with our files.

### moving through our file structure.

When you open up your terminal you aren't greeted with much. It just says your name and that's about it. Typically when you open up your terminal you are brought to your root directory.

When we use the command ``ls`` it will list for us all the in our current directory. A way to look at this is that every file or folder is like a floor on an elevator. so if I want to change directories or move what we would call ``up`` a directory I would say ``cd [name of the folder]``

One thing that you have to keep in mind is that in this process you won't really get a prompt if you did the thing right. Typically if there is no output to the terminal you did the correct thing.

You might be thinking to yourself "man I'm doing a lot of typing...and if I type something incorrectly the terminal will go to the wrong place."

With that being said I would encourage you to use ```tab compeletion```. What I mean by that is if you are trying to change directories or ``cd`` anywhere if you start typing the first part of where you want to go and then you hit ``tab`` the terminal will auto complete the rest of the desired location for you.

What's really cool is if we have something multiple levels deep we can concatenate to different folders.

# Your turn.

type ``ls`` into your terminal
from there ``cd`` into your documents folder
once you're in your documents folder type in ``ls`` again to see what folders and files you have available. If you have another folder available I would like you to ``cd`` into that directory.

once you're done with that try and figure out a way to get back to your ``root`` directory from where you're at.

# Creating files & Making folders.

Creating a folder/directory is something that you will be doing often. A way to create a new folder is using the ``mkdir [name]`` opporator.
What this will do is create a new folder for us with whatever name you want to give it.

Keep in mind that even though you've created this folder, it doesn't mean you are inside of that folder you've just created. To actually go into our new folder, we need to ``cd`` into it.

Go ahead and ``cd`` into that directory. Now that we are inside of this directory what we can do now is create a new file. The command we are going to use to this is the ``touch [name]`` command.

# Your turn

make sure you're in your ``~``  directory. Once you're there I want your to create a folder called ``turing`` and inside of that folder I want your to create a folder called ``mod1`` once you've done that go ahead and touch a file called ``sample.html``. Now if you want to delete that file you can use the command ``rm sample.html``

If you're looking for a little bit of a challenge feel free to ``cd`` into your ``~`` directory and remove the folder you created. Once you've done that Try creating your folders and files again but in a one line command.

# Copying and pasting

It's likely that copy-and-pasting is a big part of your life. You might think that doing something like this is in the terminal could be frustrating. In actuality its not that difficult.

in this case ``pbpaste > [file]`` & ``pbcopy < [file]``
