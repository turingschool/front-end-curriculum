---
title: Continuous Integration with CircleCI
length: 1 hour
tags: continuous integration, circleCI
module: 4
---

### Goals

By the end of this lesson, you will:

* Understand what continuous integration is and why it's important
* Be familiar with a typical deployment flow for agile teams
* Be able to implement CircleCI for continuous integration and deployments

## What is Continuous Integration
Continuous Integration is a jargony buzzword that means "releasing changes fast and often". The goal of CI is to ensure stability by releasing smaller changesets at a time that are each fully tested. Many projects these days will rely on some sort of automated service to handle testing these changesets and facilitating frequent releases.

The two most common CI services you'll hear about are [TravisCI](https://travis-ci.org/) and [CircleCI](https://circleci.com/). Travis has been around much longer than Circle, but the jury is still out on which is better. Today we'll focus on integrating CircleCI to perform a full build of an application, test it, and deploy it to Heroku.

## Why Use a CI Tool?
Being able to run and test a full build of your application before you release it to production is important. Think of how easy it was to deploy new changes to your production apps on Heroku. You would make a commit, and it would immediately be reflected on production after running `git push heroku master`. What if that commit introduced breaking changes? There is no safeguard or filter against pushing up bad code. With a CI tool like CircleCI, we can still take advantage of automatic deployments, but we also get an extra layer of assurance that our app is in good condition before any changes are pushed live.

CircleCI will also help you catch errors that you might not find locally. By more closley mimicking a production environment, we can recognize any differences that might be causing inconsistent behavior between environments. For example, if I am developing an app locally and I did an `npm install` months ago, and I did not explicitly lock down the version numbers for each of my dependencies in my `package.json`, I might not notice that my production environment received more updated packages during the `npm install` phase. Some of these packages may have included breaking changes that would only be exposed in production, and impossible to reproduce locally until another `npm install` was run.

## Getting Started with CircleCI
1. Sign up for a CircleCI account [here](https://circleci.com/) and login with your github account.

2. On the dashboard, navigate to 'Add Projects' and you'll see a list of all the organizations you belong to (including your own). Click on your account and select a repository that you'd like to start automating with CircleCI. *Note: You can still build and push to a fork of a repository. So if you want to work with a forked repository, select it here and push changes directly to your fork rather than the origin repo.*

![Add New Project][add-new-project]

3. Click on 'build project' and CircleCI will start creating a new build of the master branch of your application. This means it's going to automatically install any dependencies and run any tests to make sure everything is in working order.

That's it!! Easy, right? Any time you push new commits to your remote repository, CircleCI will automatically kick off a new build so you can keep an eye on the overall health and stability of your application.

### Configuring CircleCI
CircleCI automatically infers a lot of information about your application. This allows it to work straight out of the box for us when we first start following a new repo. However, as our applications get more complex, we're likely going to want to configure certain build settings to ensure a correct representation of our application's stability.

As you may have noticed, front-end repos are made up of 90% config files and 10% actual code. In order to configure CircleCI, we're going to add a `circle.yml` file to the root of our repository. Any time CircleCI runs a build, it will look for this file and follow any instructions we provide.

## Phases of the Build Process
The yml file can define settings for various phases of the build process. The phases of a build process are:

* **machine:** adjust the behavior of the virtual machine (VM)
* **checkout:** checkout and clone code from a repository
* **dependencies:** install your project’s language-specific dependencies
* **database:** prepare a database for tests
* **compile:** compile your project
* **test:** run your tests
* **deployment:** deploy your code to your web servers

An example of how a `circle.yml` file might configure these build phases can be found in the documentation [here](https://circleci.com/docs/config-sample/).

### Machine

Let's create our circle.yml file and set some configuration options for our virtual machine. At the very least, you should pin down a timezone and the version of node you're running:

```js
machine:
  timezone:
    America/Denver
  node:
    version: 7.10.0
```

### Test

By default, in our node projects the CircleCI test section will simply try to run `npm test`. If you don't currently have a command in here for your test script in your `package.json` file, I would update it to reflect the command you've been using to run your tests. That might look something like this:

```js
"scripts": {
  "test": "./node_modules/.bin/mocha",
  "start": "node server.js"
}
```

Without changing our `package.json`, we could also override CircleCI's default test section (or any section for that matter) with:

```js
test:
  override:
    - `./node_modules/.bin/mocha`
```

This is useful for changing the commands you want to run during the test phase and adding additional ones. (e.g. if we had an eslint configuration in our project, we might also want to make sure our linter is passing in the test section as well.)

### Database

Finally, we need to set up and configure a database specifically for our CircleCI builds. We can think of CircleCI as another environment, similar to how we have a development, test, and production environment. While we don't need to create an entire new environment to run these builds, we do need to do some additional setup to work with a database.

CircleCI includes a lot of popular services by default - postgres being one of them. They actually already have a postgres connection set up that we can hook into so we don't have to create our own. We can access this by setting an environment variable called `DATABASE_URL`. This might be familiar from when we installed the postgres addon to our production applications in Heroku and grabbed that variable for our production connection.

The CircleCI postgres connection is: `postgresql://ubuntu:@127.0.0.1:5432/circle_test`

We can set this as an environment variable in our `circle.yml` file under the `machine` section, in a subsection called `environment`:

```js
machine:
  timezone:
    America/Denver
  node:
    version: 7.10.0

  environment:
    DATABASE_URL: postgresql://ubuntu:@127.0.0.1:5432/circle_test
```

*Note: be careful of your indentations and syntax. If there is an error in your `circle.yml` file, or something isn't nested properly, you will not be able to kick off a new build.*

Now we need to update our `knexfile` to use this `DATABASE_URL` in our test environment:

```js
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/jetfueltest',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/test/seeds'
    }
  }
```

Commit these changes and run a new build. You should see all of your tests running properly connected to a database.


## Automatic Deployments
CircleCI provides deployment integration with other popular services such as Heroku. Upon a successful build, we can configure CircleCI to deploy our changes. This takes a bit more work, but the seamless automation makes it all worthwhile. 

In order to have CircleCI take control over our deployments, we need to configure Heroku’s default ‘automatic deployments’. In Heroku, go to your application's deployment settings and select ‘Configure Automatic Deploys…’.

![Wait for CI][wait-for-ci]

### CircleCI - Add Deploy User
In your project settings in CircleCI, you'll see an option for 'Heroku Deployments' under the 'Continuous Integration' label. Click on that and add yourself as the deploy user. You'll need to add your Heroku API key which you can find on your [Account Settings Page](https://dashboard.heroku.com/account) in Heroku. Once your API key is in place, you should be able to automatically add yourself as the deploy user.

![Heroku Deployments][heroku-deployments]

### Circle.yml - Configuring Deployments
The final step to linking up automatic deployments is adding an extra configuration phase to the `circle.yml` file in your repo. To set up deployments, you'll need to specify a branch and a heroku appname like so:

```yml
deployment:
  production:
    branch: master
    heroku:
      appname: your-production-app-name
```

Now whenever we push to our master branch, CircleCI will automatically run a build for us and deploy only if and when the buid succeeds.

## Adding Status Badges
You'll often see build status icons on the README files of popular open source libraries and frameworks. This is a quick and easy way to reassure users that the code is reliable. CircleCI provides a markdown snippet that we can paste directly into our README. In CircleCI, under your project settings, you'll see a 'Status Badges' link under the 'Notifications' heading in the sidebar. Copy and paste the markdown snippet provided for you and add it to your project's README.

![Status Badge][status-badges]

[add-new-project]: /assets/images/lessons/git-hooks/add-new-project.png
[heroku-deployments]: /assets/images/lessons/git-hooks/heroku-deployments.png
[configure-deploys]: /assets/images/lessons/git-hooks/configure-deploys.png
[wait-for-ci]: /assets/images/lessons/git-hooks/wait-for-ci.png
[status-badges]: /assets/images/lessons/git-hooks/status-badges.png

## Resources

* [CircleCI Documentation](https://circleci.com/docs/)
