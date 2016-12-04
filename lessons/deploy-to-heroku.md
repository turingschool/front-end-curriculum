---
title: Deploying a Node app to Heroku
length: 60 mins
tags: deploy, heroku, node
---

# Deploy to the Cloud

## Goals

By the end of this lesson, you will:

* Know how to deploy a Node app to Heroku

## Step 1 - Sign Up with Heroku
Once you have a username/password, you can login on your terminal:

```js
$ heroku login
```


## Step 2 - Add Procfile
Add a Procfile at the root of your folder with the following:

```js
web: node server.js
```

A Procfile contains a number of process type declarations, each on a new line. Each process type is a declaration of a command that is executed when a dyno of that process type is started.

For example, if a web process type is declared, then when a dyno of this type is started, the command associated with the web process type, will be executed. This could mean starting a web server, for example.

## Step 3 - Create Heroku app

```js
$ heroku create app_name
```

## Step 4 - Push to Heroku and configure

```js
$ git push heroku master
```

If you have a MongoDB setup, you need to set the production environment variable:

```js
$ heroku config:set MONGOLAB_URI="mongodb://username:password@ds013414.mlab.com:13414/app_name"
```

## Step 5 - Done

## ... Maybe not
You will inevitably have issues in production. To check the logs of Heroku:

```js
//Gets you all the logs
$ heroku logs
//Gets you the last log
$ heroku logs --tail
```
