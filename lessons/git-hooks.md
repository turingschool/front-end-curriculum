---
title: Continuous Integration with CircleCI & Automation with Git Hooks
length: 2 hours
tags: git, workflow, agile, continuous integration, circleCI
module: 4
---

### Goals

By the end of this lesson, you will:

* Be able to implement CircleCI for continuous integration and deployments
* Understand how to create and use git hooks to automate common developer workflow processes

## Automating the Grunt Work
As developers, we're constantly looking for ways to automate tedious tasks. We're essentially trying to put ourselves out of the job by writing scripts that will do it for us.

## Continuous Integration
Continuous Integration is a jargony buzzword that means "releasing changes fast and often". The goal of CI is to ensure stability by releasing smaller changesets at a time that are each fully tested. Many projects these days will rely on some sort of automated service to handle testing these changesets and facilitating frequent releases. 

The two most common CI services you'll hear about are [TravisCI](https://travis-ci.org/) and [CircleCI](https://circleci.com/). Travis has been around much longer than Circle, but the jury is still out on which is better. Today we'll focus on integrating CircleCI to perform a full build of an application, test it, and deploy it to Heroku.

### Getting Started with CircleCI
1. Sign up for a CircleCI account [here](https://circleci.com/) and login with your github account.

2. On the dashboard, navigate to 'Add Projects' and you'll see a list of all the organizations you belong to (including your own). Click on your account and select a repository that you'd like to start automating with CircleCI. *(If possible, you'll want to select an application that you've deployed to Heroku, as we'll go over automating deployments later in this lesson.)*

![Add New Project][add-new-project]

3. Click on 'build project' and CircleCI will start creating a new build of the master branch of your application. This means it's going to automatically install any dependencies and run any tests to make sure everything is in working order.

That's it!! Easy, right? Any time you push new commits to your remote repository, CircleCI will automatically kick off a new build so you can keep an eye on the overall health and stability of your application.

### Configuring CircleCI
CircleCI automatically infers a lot of information about your application. This allows it to work straight out of the box for us when we first start following a new repo. However, as our applications get more complex, we're likely going to want to configure certain build settings to ensure a correct representation of our application's stability.

As you may have noticed, front-end repos are made up of 90% config files and 10% actual code. In order to configure CircleCI, we're going to add a `circle.yml` file to the root of our repository. Any time CircleCI runs a build, it will look for this file and follow any instructions we provide.

#### Phases of the Build Process
The yml file can define settings for various phases of the build process. The phases of a build process are:

* **machine:** adjust the behavior of the virtual machine (VM)
* **checkout:** checkout and clone code from a repository
* **dependencies:** install your project’s language-specific dependencies
* **database:** prepare a database for tests
* **compile:** compile your project
* **test:** run your tests
* **deployment:** deploy your code to your web servers

An example of how a `circle.yml` file might configure these build phases can be found in the documentation [here](https://circleci.com/docs/config-sample/).

### Setting up Automatic Deployments
CircleCI provides deployment integration with other popular services such as Heroku. Upon a successful build, we can configure CircleCI to deploy our changes to specified environments. This takes a bit more work, but the seamless automation makes it all worthwhile. 

When working with git, it's common to have a master or default branch represent your pristine production environment. We also want a staging environment where we can test out new changes and review the state of the code before it gets merged into master and sent to production. In order to maintain this staging environment, you'll want to create a 'staging' branch in your git repo. Go ahead and do that now if you don't already have one.

#### Heroku - Pipeline Setup
In Heroku, you'll want to create two different applications. A staging app and a production app. Once you've created these and configured them as needed, create a new pipeline and add them to their respective pipeline phases.

Now that we're going to integrate CircleCI, we want to configure Heroku's default 'automatic deployments'. From the pipeline, click on each application and select 'Configure Automatic Deploys...'. 

![Configure Deploys][configure-deploys]

Then select the appropriate branch to deploy from for that application (e.g. master or staging), and check the 'Wait for CI to pass' box. This will ensure that we don't deploy code that is potentially broken.

![Wait for CI][wait-for-ci]

#### CircleCI - Add Deploy User
In your project settings in CircleCI, you'll see an option for 'Heroku Deployments' under the 'Continuous Integration' label. Click on that and add yourself as the deploy user. You'll need to add your Heroku API key which you can find on your [Account Settings Page](https://dashboard.heroku.com/account) in Heroku. Once your API key is in place, you should be able to automatically add yourself as the deploy user.

![Heroku Deployments][heroku-deployments]

#### Circle.yml - Configuring Deployments
The final step to linking up automatic deployments is adding an extra configuration phase to the `circle.yml` file in your repo. To set up deployments for both staging and production environments, you'll need to specify a branch and a heroku appname like so:

```yml
deployment:
  staging:
    branch: staging
    heroku:
      appname: race-to-1k-staging

  production:
    branch: master
    heroku:
      appname: race-to-1k-production
```

Now whenever we push to our staging or master branches, CircleCI will automatically run a build for us, and if it passes, it will deploy our app to the appropriate location.

### Adding Status Badges
You'll often see build status icons on the README files of popular open source libraries and frameworks. This is a quick and easy way to reassure users that the code is reliable. CircleCI provides a markdown snippet that we can paste directly into our README. In CircleCI, under your project settings, you'll see a 'Status Badges' link under the 'Notifications' heading in the sidebar. Copy and paste the markdown snippet provided for you and add it to your project's README.

![Status Badge][status-badges]

[add-new-project]: /assets/images/lessons/git-hooks/add-new-project.png
[heroku-deployments]: /assets/images/lessons/git-hooks/heroku-deployments.png
[configure-deploys]: /assets/images/lessons/git-hooks/configure-deploys.png
[wait-for-ci]: /assets/images/lessons/git-hooks/wait-for-ci.png
[status-badges]: /assets/images/lessons/git-hooks/status-badges.png

## Git Hooks
Another tool we can leverage that works nicely with CI are [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). Git hooks are custom scripts that you can write to execute particular tasks during certain points of the git workflow process. Similar to the lifecycle methods in React or other JavaScript frameworks, you'll recognize some lifecycle patterns within the git version control system. For example, every time we make a commit, there are four distinct phases: 

* `pre-commit` - runs before the commit is even attempted, can be used to do a quick QA evaluation on the code that's about to be committed
* `prepare-commit-msg` - runs before the commit message is made but after a default message is created, e.g. merge commits are auto-generated and can be adjusted at this point in the cycle
* `commit-msg` - runs after the commit message has been made, can be used to verify that your message follows a required pattern (e.g. capital first letter, no punctuation, command-style sentence)
* `post-commit` - runs after the entire commit process is completed, can be used to run another script based on information from the most recent commit

Git allows us to effectively 'pause' the commit cycle at each of these four phases through the use of hooks. We just saw how CircleCI builds will sometimes fail if we have a failing test or our code doesn't pass the linting rules we've set. Builds can take significant time when we have complex applications, so we want to minimize the chances that we'll start up a build that's going to fail. One way we can do that is by creating a `pre-commit` hook that prevents us from committing code that doesn't conform to our linting and testing standards.

### Creating a `pre-commit` hook
Whenever we create a new local git repo, a `.git` directory is included in our project. If we were to `cd` into `.git/hooks` we can actually see a couple of sample hooks that git provides us with by default. You'll notice the filenames all end with `.sample`. This is what's preventing them from actually running. If we want to implement one of these hooks, we could simply remove the `.sample` suffix. 

Let's rename `pre-commit.sample` to `pre-commit` and open it in your text editor. We're not going to use any of the example functionality that was included, so we can remove everything in this file and replace it with the following:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent
```

Now if we have a failing test, our pre-commit hook should catch that and prevent the commit from going through. This hook is super simple right now, because a failing test automatically causes the process to exit with an error. If we were to add linting to this hook:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent
npm run lint --silent
```

We could technically still get our commit through as long as our tests are passing. This is because the linting process doesn't actually exit with an error if there are linting problems. In order to exit the process after reporting linting errors, we need to make our pre-commit hook a little more advanced:

```bash
#!/bin/sh

echo "\Running tests:\n"

npm run test --silent

files=$(git diff --cached --name-only --diff-filter=ACM | grep "\.js$")
if [ "$files" = "" ]; then 
    exit 0 
fi

lintPass=true

echo "\nValidating JavaScript:\n"

for file in ${files}; do
    result=$(npm run lint ${file} --silent | grep "${file} is OK")
    if [ "$result" != "" ]; then
        echo "\t\033[32mJSHint Passed: ${file}\033[0m"
    else
        echo "\t\033[31mJSHint Failed: ${file}\033[0m"
        lintPass=false
    fi
done

echo "\nJavaScript validation complete\n"

if ! $lintPass; then
    echo "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass JSHint but do not. Please fix the JSHint errors and try again.\n"
    exit 1
else
    echo "\033[42mCOMMIT SUCCEEDED\033[0m\n"
fi
```

*Note: In order for a hook file to run, it must be made executeable. You can make a file executeable by running:* 

```bash
chmod +x hooks/filename
```

### More Hooks
There are additional hooks for facilitating a custom email workflow and manipulating other git actions such as rebasing. These aren't used quite as often as the commit hooks, but it's good to be aware they exist.

### Sharing Hooks
By default, git hooks exist in the `.git/hooks` directory of your local repo. You'll notice that this isn't a directory that gets pushed to github, so when new contributors pull down your repo, they won't have the same hooks in place that the rest of the team might be using. 

## Resources

* [Git Hooks Guide](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
* [Git Hooks Reference](https://git-scm.com/docs/githooks)
* [CircleCI Documentation](https://circleci.com/docs/)
