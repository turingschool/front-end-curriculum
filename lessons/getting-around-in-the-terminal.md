---
title: Getting Comfortable with the Terminal
length: 180
tags: command line, terminal
---


### Context
If you're anything like me you grew up around technology. I actually worked at an apple store so there is a pretty high chance I might of helped your grandpa or your mom reset their iCloud password and or had to explain to said relative that your home wifi can only be reached from your house and not the store.

What I found to be super interesting was that I was surrounded by some really smart people. A lot of these people knew how to take macs apart and trouble shoot hardware issues. What I found interesting with all of that was that a lot of the these apple techs was that they never ever touched the terminal.

It was almost as if the terminal was this untouchable thing. Like only the super nerds were the only people who could leverage the power of the terminal.

That is simply not the truth.

Now you might be saying to yourself

"Hey i'm pretty fast when it comes to using my mouse to get around. Why do I need to use the terminal?"

Well if I'm being honest you aren't fast enough. As a developer everything you do should be based on speed and efficienty. If any part of that combination is lacking you are wasting time. That time will add up and essentially take away from your time developing.

### Moving forward

When you're first starting to learn anything coding related you have to build up your "muscle" memory. Ultimately everything starts with repetition. You're not going to learn unless you actually get your hands dirty and dive right in.

protip: You're not going to break your computer. I think it's really easy to have the fear of the unknown psych you out of learning how to be efficient in using the terminal. I truly believe that with some time and practice you can become super great at using the terminal.

So let's actually start working on some basic interactions with our files.


### moving through our file structure.

So when you open up your terminal you aren't greeted with much. It just says your name and that about it. Now typically when you open up your terminal you are brought to your root directory.

Now if we use the command ``ls`` it will list for us all the in our current directory. A way to look at this is that every file or folder is like a floor on an elevator. so if I want to change directories or move what we would call ``up`` a directory I would say ``cd [name of the folder]``

Now one thing that you have to keep in mind is that in this process you won't really get a prompt if you did the thing right. Typically if there is no output to the terminal you did the correct thing.

Now you might be thinking to yourself "man I'm doing a lot of typing...and if I type something incorrectly the terminal will go to the wrong place."

With that being said I would encourage you to use ```tab compeletion```. What I mean by that is if you are trying to change directories or ``cd`` anywhere if you start typing the first part of where you want to go and then you hit ``tab`` the terminal will auto complete the rest of the desired location for you.

now what's really cool is if we have something multiple levels deep I can concatenate to different folders.

# Your turn.

type ``ls`` into your terminal
from there ``cd`` into your documents folder
once you're in your documents folder type in ``ls`` again to see what folders and files you have available. If you have another folder available I would like you to ``cd`` into that directory.

once you're done with that try and figure out a way to get back to your ``root`` directory from where you're at.


# Creating files & Making folders.

Now creating a folder/directory is something that you will be doing often. A way to create a new folder is using the ``mkdir [name]`` opporator.
What this will do is create a new folder for us with whatever name you want to give it.

Now one thing to keep in mind is that even though you've created this folder it doesn't mean you are inside of that folder you've just created. We now need to ``cd`` into it.

so go ahead and ``cd`` into that directory. Now that we are inside of this directory what we can do now is create a new file. The command we are going to use to this is the ``touch [name]`` command.


# Your turn

make sure you're in your ``~``  directory. Once you're there I want your to create a folder called ``turing`` and inside of that folder I want your to create a folder called ``mod1`` once you've done that go ahead and touch a file called ``sample.html``. Now if you want to delete that file you can use the command ``rm sample.html``

If you're looking for a little bit of a challenge feel free to ``cd`` into your ``~`` directory and remove the folder you created. Once you've done that Try creating your fo
