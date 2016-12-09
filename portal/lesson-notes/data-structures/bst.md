---
layout: page
---

# Notes from 1610

## Talking with Melanie 10 to 10:30

## Linked List Review

- Getting the lastNode (show traversal)
- Delete (reconnecting the nodes)

## Binary Search

A Binary Tree

For each node:
  - value of each node in the left subtree is lesser or equal
  - value of each node on the right subtree is greater or equal

#### Organizing an Ordered Array

- Pick one person to hang out with you
- Get about 10 people to stand up
- Alright 10 people, order yourselves alphabetically by first name in a line
  - Everyone else, observe the process
  - Time it.
  
#### Picking By Simple Search

Okay friend, I have secretly selected one person in the group. Your job is to guess who I picked.

First strategy - let them just pick people until they find the person.

Okay, cool - so this is a Simple Search. You go through a list or randomly and pick until you get a match.

#### Picking By Binary Search

Alright - I've picked someone else.

This time when you guess someone - if they aren't the person, I'm going to tell you if my pick was higher or lower in the alphabet

*** Do the thing ***

That was binary search - like Guess Who. 

Binary Search - to cut your group into pieces to decrease search time.

### Making Binary Search Sad

Grab 5 people and make them add themselves to the array.

Grab another 5 people and make them add themselves to the array

Do the search again.

Conclude: Search is still fast - but as the array grows, it becomes a huge pain to add new parts to it. 
And remember how long it took to organize the original group. 

### A Solution

Shuffle the array

Remove half the array and replace it.

Line them up.

Now we're going to create a structure called a Binary Search Tree. 

Starting at first person - You will be the root node. 

Draw Node on Board - with first name.

Next person - ask the root what their first name is.

You will go to your left (the root node's right) if your first name is higher in the alphabet.

Draw on the board

Continue till we get through the list

*** Way Faster and More Organized than the Array Ordering ***

*** Way Easier to do a Binary Search ***

### Why Did We Shuffle Earlier?

If the list had stayed alphabetical, instead of a tree structure, we would have had one big linked list. 

So a binary search tree must always strive to be balanced or it will be inefficient.

## Binary Search Work Time

Take attendance.

Generate pairs.

Draw on Board:

For the first pomodoro - I want you to meet up with your pair and choose of these working options

### 1. Watch and Learn BST

Watch the Following Video: [Explanation and Implementation of BST in C/C++](https://www.youtube.com/watch?v=COZK7NATh4k) (18 mins)

Pair with your partner on implementing BST in JavaScript

Pros: 

- You'll see an implementation which will help you understand but not 'give' you the answers

- You'll get a window into what programming is like in a 'lower level' language

Cons:

- Not a lot of straight coding time

- erhehgerd C/C++.

### 2. Pair and Learn BST

Meet with your pair and dive directly into the codebase

Pros: 

- You'll get more coding and pairing time

- You'll stay in JS land

Cons:

- You will likely only get exposed to a few functions of Binary Search Trees and may want to review the rest later

## Review

[Watch This Video on Insert and Delete](https://www.youtube.com/watch?v=wcIRPqTR3Kc)

--------------------

# Notes from 1608

# Binary Search Tree Lesson

## Binary vs Simple Search

#### Organizing an Ordered Array

- Pick one person to hang out with you
- Get about 10 people to stand up
- Alright 10 people, order yourselves alphabetically by first name in a line
  - Everyone else, observe the process
  - Time it.
  
#### Picking By Simple Search

Okay friend, I have secretly selected one person in the group. Your job is to guess who I picked.

First strategy - let them just pick people until they find the person.

Okay, cool - so this is a Simple Search. You go through a list or randomly and pick until you get a match.

#### Picking By Binary Search

Alright - I've picked someone else.

This time when you guess someone - if they aren't the person, I'm going to tell you if my pick was higher or lower in the alphabet

*** Do the thing ***

That was binary search - like Guess Who. 

Binary Search - to cut your group into pieces to decrease search time.

### Making Binary Search Sad

Grab 5 people and make them add themselves to the array.

Grab another 5 people and make them add themselves to the array

Do the search again.

Conclude: Search is still fast - but as the array grows, it becomes a huge pain to add new parts to it. 
And remember how long it took to organize the original group. 

### A Solution

Shuffle the array

Remove half the array and replace it.

Line them up.

Now we're going to create a structure called a Binary Search Tree. 

Starting at first person - You will be the root node. 

Draw Node on Board - with first name.

Next person - ask the root what their first name is.

You will go to your left (the root node's right) if your first name is higher in the alphabet.

Draw on the board

Continue till we get through the list

*** Way Faster and More Organized than the Array Ordering ***

*** Way Easier to do a Binary Search ***

### Why Did We Shuffle Earlier?

If the list had stayed alphabetical, instead of a tree structure, we would have had one big linked list. 

So a binary search tree must always strive to be balanced or it will be inefficient.

### POMO

Let's a pomo and sit back down

### Werk

Drop Link in slack

Take attendance.

Generate pairs.

Draw on Board

- 25 minutes - Work Solo
  - Work from your previously cloned repo or clone again
  - Check out a branch 
  - Play around and try to get tests passing, code silly things, break everything, ignore everything and google Binary Search Tree. Do the exercise in Ruby for the hell of it. I don't care. However you like to work, do it.

Did you all check out a branch? Did you? Do it.

I'll let you know what to do after that.

Rest of Time:

- On your branch - commit everything right now
- Go back to master 
- Check out a new branch
- If you were working on master by accident - git stash - I'm sorry.

NO CODE THAT YOU WROTE BEFORE CAN BE PRESENT.

- Drop pairs in Slack
- Find your person
- Pick a style to code in - ping pong, driver/conductor, working side by side and just shouting things at one another (not ideal)
- Starting Fresh - begin coding together. DO NOT ASK YOUR PAIR HOW FAR THEY GOT OR WHAT THEY WORKED ON. Assume everyone just read LinkedIn articles during the last 25 minutes.

Go!