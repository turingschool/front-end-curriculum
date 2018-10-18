### Fetching 

Let's say that one of your co-worker's is working on a feature branch, and is having trouble finding a bug. As long as your co-worker has pushed up their feature branch to GitHub, we can use the `git fetch` command to pull that branch, and all other remote branches to our local machine.

### Merge Conflicts

You might be wondering what happens if you're working on a project with a partner and you both make changes to the same line of code. This is called a merge conflict.

Merge conflicts happen when two different commits can't be automatically merged and they need to be resolved. Conflicts can occur when you pull down from origin or when you are creating a pull request to merge to master on GitHub.

In the event that this happens, you might get a message like this:

```
CONFLICT(content): Merge conflict in boots-and-pants.js
Automatic merge failed. Fix conflicts and commit the results.
```
This happens because GitHub doesn't know what code to believe.

Below is an example of what a conflict might look like upon inspection of the flagged file:

```javascript
// boots-and-pants.js

var a = 1;
<<<<<<<<<HEAD
var b = 2;
=========
var b = 0;
>>>>>>>>>39457094865893724234798326445
var d = 5;
var e = 3;
var r = 18;

```

The lines of code between HEAD and the set of equals signs (so in this case, var b = 2) are all of the changes you made that are in conflict. These are change that you have made on your computer.

Everything between the set of equals signs and the greater than signs followed by the conflicting commit number (var b = 0) are all of the changes from GitHub that you’re trying to pull down that are conflicting.

To resolve conflicts, you have to decide which of the two conflicting lines you want to keep and then remove the HEAD, the set of equals, and the conflicting commit line.

## High Level Concepts

### Cloning 

# ![Git Clone Diagram](/assets/images/lessons/git/github-diagrams.003.jpeg)

In order to move a remote repository to your local machine (a process known as cloning), you can use the `git clone [remote url]` command. GitHub makes this easy for us by providing a big green button that says 'Clone or Download' on all repository pages. 

Let's clone the repo you just created in a new directory. Go to a new directory on your local machine that does not contain the `github-and-github-intro` directory. Go to the `github-and-github-intro` repository page on GitHub. Click on the 'Clone or Download' button, and copy the expanded url to your clipboard.

Now, from your terminal run `git clone [copied url]`. This will copy the github repo into a directory of the same name on your local machine.

### Forking

# ![Fork Diagram](/assets/images/lessons/git/github-diagrams.004.jpeg)

There are certain times where you will need to work on a codebase that you do not have `push` access rights to. This is the case when you need to update `turingschool/portfolios` repo. In situations like this we can `fork` the remote repo, which will create another remote repo of the same name under your own username, which in this case would be `damwhit/portfolios`. Now I have `push` access rights to the 'forked' repo and can create pull requests on the original repo.
