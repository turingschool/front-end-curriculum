---
title: Better Workflow with Git Hooks
length: 2 hours
tags: git, workflow, agile
module: 4
---

### Goals

By the end of this lesson, you will:

* Understand how to create and use git hooks to automate common developer workflow processes

## Automating the Grunt Work
As developers, we're constantly looking for ways to automate tedious tasks. We're essentially trying to put ourselves out of the job by writing scripts that will do it for us. Let's talk about git hooks.

## Git Hooks
[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are custom scripts that you can write to execute particular tasks during certain points of the git workflow process. They can be written in any language understood by the terminal (bash, node, ruby, python, etc.) When used in conjunction with other workflow tools and processes, you can create some really seamless patterns for maintaining any kind of codebase.

Similar to the lifecycle methods in React or other JavaScript frameworks, you'll recognize some lifecycle patterns within the git version control system. For example, every time we make a commit, there are four distinct phases: 

* `pre-commit` - runs before the commit is even attempted, can be used to do a quick QA evaluation on the code that's about to be committed
* `prepare-commit-msg` - runs before the commit message is made but after a default message is created, e.g. merge commits are auto-generated and can be adjusted at this point in the cycle
* `commit-msg` - runs after the commit message has been made, can be used to verify that your message follows a required pattern (e.g. capital first letter, no punctuation, command-style sentence)
* `post-commit` - runs after the entire commit process is completed, can be used to run another script based on information from the most recent commit

Git hooks allow us to effectively 'pause' the commit cycle at each of these four phases. There are additional hooks for facilitating a custom email workflow and manipulating other git actions such as rebasing. These aren't used quite as often as the commit hooks, but it's good to be aware they exist.

### Why?

* **We Don't Have to Wait for a Build Process:** We just saw how CircleCI builds will sometimes fail if we have a failing test or our code doesn't pass the linting rules we've set. Builds can take significant time when we have complex applications, so we want to minimize the chances that we'll start a build that's going to fail. One way we can do that is by running our tests and linting checks before we even commit our code with a `pre-commit` hook.
* **They ensure your commits are flawless:** If you verify the integrity of your code before committing it, you'll never have to go back and add a separate commit that says 'Fix linting errors' or 'Remove console.logs'. These types of commits clutter up the history and make it more difficult to search past versions of the project.
* **They enable you to be a slob:** You can carry-on with your normal workflow and write messy code...and no one will be the wiser. Git will clean it all up for you (or at least remind you to do so) before your teammates see what a mess you've made.

## The .git Directory
Whenever we create a new local git repo, a `.git` directory is included in our project. This is where our git hooks live! The `.git` directory holds all sorts of secrets and goodies related to the version control process for our project. It maintains an immense amount of information, including all the deltas and changesets you've ever made. So even if you delete a commit or think you've lost some important code, never fear -- you can always jump into the depths of the `.git` directory and retrieve it. *(If you've ever committed your `node_modules` directory, you'll notice all of your clones and pulls are incredibly slow because that changeset still exists in the history somewhere, even after you delete it.)*


## Creating a `pre-commit` hook
If we were to `cd` into `.git/hooks` we can actually see a couple of sample hooks that git provides us with by default. You'll notice the filenames all end with `.sample`. This is what's preventing them from actually running. If we want to implement one of these hooks, we could simply remove the `.sample` suffix. 

### Pre-Commit: Testing
Let's rename `pre-commit.sample` to `pre-commit` and open it in your text editor. We're going to create a `pre-commit` hook that prevents us from committing code that doesn't conform to our linting and testing standards. We're not going to use any of the example functionality that was included, so we can remove everything in this file and replace it with the following:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent
```

Now if we have a failing test, our pre-commit hook should catch that and prevent the commit from going through. This hook is super simple right now, because a failing test automatically causes the process to exit with an error.

### Pre-Commit: Linting

If we were to add linting to this hook:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent
npm run lint --silent
```

We could technically still get our commit through as long as our tests are passing. This is because the linting process doesn't actually exit with an error if there are linting problems. In order to exit the process after reporting linting errors, we need to make our pre-commit hook a little more advanced:

```bash
echo "\nLinting...\n"

files=$(git diff --cached --name-only --diff-filter=ACM | grep "\.js$")
if [ "$files" = "" ]; then 
    exit 0 
fi

lintPass=true

for file in ${files}
  do
    ./node_modules/.bin/eslint -c ./.eslintrc.json ${file}
    if [[ "$?" == 0 ]]; then
        echo "\033[32mESLint Passed: ${file}\033[0m"
    else
        echo "\033[31mESLint Failed: ${file}\033[0m"
        lintPass=false
    fi
done

if ! $lintPass; then
    echo "\033[31mCommit Failed:\033[0m Your commit contains files that should pass JSHint but do not. Please fix the JSHint errors and try again.\n"
    exit 1
else
    echo "\033[32mCommit Succeeded\033[0m\n"
fi
```

### Pre-Commit: Console.Logs/Accepting User Input

We might also want to check for `console.logs` or `debugger` statements in our code before committing. Sometimes (though rarely), you might actually want to include an intentional `console.log`. With the following script, we can allow users to choose whether or not to continue with the commit if any logs are detected:

```bash
echo "\nChecking for console.logs()...\n"

exec 1>&2
# enable user input
exec < /dev/tty

consoleregexp='^\+.*console\.log('
debuggerregexp='debugger'

if test $(git diff --cached | grep $consoleregexp | wc -l) != 0
then
  exec git diff --cached | grep -ne $consoleregexp
  read -p "You have added one or more console logs in your modification. Are you sure want to continue? (y/n)" yn
  echo $yn | grep ^[Yy]$
  if [ $? -eq 0 ]
  then
    exit 0; # Let the user continue
  else
    exit 1; # Don't let the user continue
  fi
fi
if test $(git diff --cached | grep $debuggerregexp | wc -l) != 0
then
  exec git diff --cached | grep -ne $debuggerregexp
  read -p "You have added one or more debuggers in your modification. Are you sure want to continue? (y/n)" yn
  echo $yn | grep ^[Yy]$
  if [ $? -eq 0 ]
  then
    exit 0; # Let the user continue
  else
    exit 1; # Don't let the user continue
  fi
fi
```

*Note: In order for a hook file to run, it must be made executeable. You can make a file executeable by running:* 

```bash
chmod +x hooks/filename
```

## Sharing Hooks
By default, git hooks exist in the `.git/hooks` directory of your local repo. You'll notice that this isn't a directory that gets pushed to github, so when new contributors pull down your repo, they won't have the same hooks in place that the rest of the team might be using. There are a couple of ways to get around this.

As of Git 2.9, you can set a git configuration option `core.hooksPath` that will override the default `.git/hooks` directory. This would allow you and your team to put your hooks in an internal, standalone repository that each developer could clone down and reference with the `core.hooksPath` option.

In earlier versions of Git, you could implement this same strategy by creating a symlink from the `.git/hooks` directory to your local repository of your team's git hooks.

## Resources

* [Git Hooks Guide](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
* [Git Hooks Reference](https://git-scm.com/docs/githooks)
* [Github Issues from Command Line](https://github.com/stephencelis/ghi)
* [Node.js pre-commit](https://github.com/observing/pre-commit)
* [Fit Commit](https://github.com/m1foley/fit-commit)
