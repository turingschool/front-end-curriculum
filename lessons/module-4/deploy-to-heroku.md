---
title: Deploying a Node app to Heroku
length: 60 mins
tags: deploy, heroku, node
---

# Deploy to the Cloud

## Goals

By the end of this lesson, you will:

* Know how to deploy a Node app to Heroku


## Step 1 - Install the Heroku CLI

We need to install the Heroku command-line tools to be able to run commands that communicate with our deployed application. Run this command to install the Heroku CLI:

```bash
brew install heroku/brew/heroku
```


## Step 2 - Sign Up with Heroku
Once you have a username/password, you can login on your terminal:

```bash
$ heroku login
```


## Step 3 - Add Procfile
Add a [Procfile](https://devcenter.heroku.com/articles/procfile) at the root of your folder with the following:

```js
web: node server.js
```

(*Note: If you've named your server file anything other than server.js, replace that line with the correct name. e.g. if your server is named `index.js` your procfile should say `web: node index.js`)*

A Procfile contains a number of process type declarations, each on a new line. Each process type is a declaration of a command that is executed when a [dyno](https://devcenter.heroku.com/articles/dynos) of that process type is started.

For example, if a web process type is declared, then when a dyno of this type is started, the command associated with the web process type, will be executed. This could mean starting a web server, for example. The `web: node server.js` will override the default `npm start` command that Heroku tries to run. (This is helpful because your start script might be using nodemon instead of just node.)

## Step 4 - Create Heroku app

```bash
$ heroku create app_name
```

If you go back to Heroku in your browser, you should now see that you have an app listed under your [personal apps](https://dashboard.heroku.com/apps) that corresponds to the one you just created from the terminal. This command also added a new remote repository to our application. You can see all of your remote git details by running the following command:

```bash
$ git remote -v
```

## Step 5 - Push to Heroku & Open Your App

```bash
$ git push heroku master
$ heroku open
```

The open command will open your deployed application in your web browser. And you probably have a super unhelpful 'Application Error' page at the moment. You will inevitably have issues in production, so it's important to learn how to read the Heroku error logs.

## Step 6 - Read the error logs

```bash
//Gets you all the logs
$ heroku logs

//Gets you the latest log
$ heroku logs --tail
```

## Step 7 - Configure Your Environment

We've previously only worked with our applications in a `development` environment. Now we need to set them up to work in a `production` environment. This involves a couple of steps:

### Step 7a - Install Postgres Addon

Heroku allows you to install addons for your different projects. Under the resources tab for your project, you should see a section that allows you to search for an addon. Search for 'Heroku Postgres' and add the addon to your project.

This addon will create an environment variable for us to connect to our production database. Navigate to the settings page for your application and click on 'Reveal Config Variables'.

You'll see one has be created for us called `DATABASE_URL`. We don't need or want the actual value for this variable, we're just going to want to reference it in our database configuration.

### Step 7b - Configure Knex for Production

In your `knexfile.js`, add a production environment. You can copy directly from your `development` environment and then make a handful of changes:

```js
production: {
  client: 'pg',
  connection: process.env.DATABASE_URL + `?ssl=true`,
  migrations: {
    directory: './db/migrations'
  },
  useNullAsDefault: true
}
```

Notice here we are using that `DATABASE_URL` variable that was created for us. This configuration will now tell Heroku to connect to postgres through the addon we installed. *Note: we've appended `?ssl=true` to the end of our connection string because the [Heroku Postgres addon requires it](https://devcenter.heroku.com/articles/heroku-postgresql#heroku-postgres-ssl).

### Step 7c - Update Your Server Environment

We now need to tell our server to detect it's environment based on the process variables. Previously in our `server.js` files, we simply set:

```js
const environment = 'development';
```

We actually want this to be detected automatically so that it can vary based on where our application is running:

```js
const environment = process.env.NODE_ENV || 'development';
```

Now when our application is running in Heroku, it will recognize that it's in a `production` environment and use all of the appropriate configurations. Learn more about [environment variables](https://devcenter.heroku.com/articles/config-vars) and [process.env](https://nodejs.org/api/process.html#process_process_env).

### Step 67 - Commit & Push

Commit the changes you've made to your `knexfile.js` and your `server.js`. Push them up to your origin remote and then push them to heroku:

```bash
$ git push origin master
$ git push heroku master
```

### Step 7e - Migrate Your Production Database

The final step here is to migrate our production database so it has the appropriate schema. We can run `knex` commands through Heroku with:

```bash
heroku run 'knex migrate:latest'
```