
---
title: Pushing to Heroku
length: 2 hours
module: 3
tags: heroku, node, express
---

# Pushing MovieTracker to Heroku


## Step 1 - Sign Up with Heroku

Once you have a username/password, you can login on your terminal:

```bash
$ heroku login
```

What is Heroku? "Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches." - [Heroku](https://www.heroku.com/home)

"Heroku is a platform as a service, you push your code to us and we figure out what it takes to make it run online.
Then we give you a URL :)" - Jonan Scheffler

## Step 2 - Discuss the setup of the server.js file

``` javascript
const path = require('path');
// The path module provides utilities for working with file and directory paths.


const express = require('express');
//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.



const cors = require('express-cors');
//Cors: Cross-origin resource sharing

//A resource makes a cross-origin HTTP request when it requests a resource from a domain or port which is different from the one which the first resource itself serves. For example, an HTML page served from http://domain-a.com makes an <img> src request for http://domain-b.com/image.jpg. Many pages on the web today load resources like CSS stylesheets, images and scripts from separate domains.

//For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.

const bodyParser = require('body-parser')
//The bodyParser object exposes various factories to create middleware. All middlewares will populate the req.body property with the parsed body when the Content-Type request header matches the type option, or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.


const port = (process.env.PORT || 3000);
// port bitch

const app = express();
// initializing express

const users = require('./routes/usersApi');
```

## Step 3 - Discuss cors() & bodyParser()

``` javascript
app.use(cors());
// Enable All CORS Requests

app.use(bodyParser.urlencoded({ extended: true }));
//the extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.

app.use(bodyParser.json());
//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflateencodings.
```

## Step 3 - Discuss development and why we want webpack


``` javascript
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}
```


## Step 4 - Discuss this shit



``` javascript
app.use(express.static('app'));
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')) });
//path.join(): method joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path.
// __dirname:  The directory name of the current module

app.use('/api', users);
// talk about this in the next area.

app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')) });

app.listen(port);
```

## Step 5 - Discuss usersApi()
``` javascript
var express = require('express');
var router = express.Router();
///Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
```

## Step 6 - Discuss queries.js
Blah blah blah. PG promises  blah blah blah promises and things

##

## Step 2 - Add Procfile
Add a [Procfile](https://devcenter.heroku.com/articles/procfile) at the root of your folder with the following:

```js
web: node server.js
```

(*Note: If you've named your server file anything other than server.js, replace that line with the correct name. e.g. if your server is named `index.js` your procfile should say `web: node index.js`)*

A Procfile contains a number of process type declarations, each on a new line. Each process type is a declaration of a command that is executed when a [dyno](https://devcenter.heroku.com/articles/dynos) of that process type is started.

For example, if a web process type is declared, then when a dyno of this type is started, the command associated with the web process type, will be executed. This could mean starting a web server, for example. The `web: node server.js` will override the default `npm start` command that Heroku tries to run. (This is helpful because your start script might be using nodemon instead of just node.)

## Step 3 - Create Heroku app

```bash
$ heroku create app_name
```

If you go back to Heroku in your browser, you should now see that you have an app listed under your [personal apps](https://dashboard.heroku.com/apps) that corresponds to the one you just created from the terminal. This command also added a new remote repository to our application. You can see all of your remote git details by running the following command:

```bash
$ git remote -v
```

## Step 4 - Push to Heroku & Open Your App

```bash
$ git push heroku master
$ heroku open
```

The open command will open your deployed application in your web browser. And you probably have a super unhelpful 'Application Error' page at the moment. You will inevitably have issues in production, so it's important to learn how to read the Heroku error logs.

## Step 5 - Read the error logs

```bash
//Gets you all the logs
$ heroku logs

//Gets you the latest log
$ heroku logs --tail
```

## Step 6 - Configure Your Environment

We've previously only worked with our applications in a `development` environment. Now we need to set them up to work in a `production` environment. This involves a couple of steps:

### Step 6a - Install Postgres Addon

Heroku allows you to install addons for your different projects. Under the resources tab for your project, you should see a section that allows you to search for an addon. Search for 'Heroku Postgres' and add the addon to your project.

This addon will create an environment variable for us to connect to our production database. Navigate to the settings page for your application and click on 'Reveal Config Variables'.

You'll see one has be created for us called `DATABASE_URL`. We don't need or want the actual value for this variable, we're just going to want to reference it in our database configuration.

### Step 6b - Configure Knex for Production

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

### Step 6c - Update Your Server Environment

We now need to tell our server to detect it's environment based on the process variables. Previously in our `server.js` files, we simply set:

```js
const environment = 'development';
```

We actually want this to be detected automatically so that it can vary based on where our application is running:

```js
const environment = process.env.NODE_ENV || 'development';
```

Now when our application is running in Heroku, it will recognize that it's in a `production` environment and use all of the appropriate configurations. Learn more about [environment variables](https://devcenter.heroku.com/articles/config-vars) and [process.env](https://nodejs.org/api/process.html#process_process_env).

### Step 6d - Commit & Push

Commit the changes you've made to your `knexfile.js` and your `server.js`. Push them up to your origin remote and then push them to heroku:

```bash
$ git push origin master
$ git push heroku master
```

### Step 6e - Migrate Your Production Database

The final step here is to migrate our production database so it has the appropriate schema. We can run `knex` commands through Heroku with:

```bash
heroku run 'knex migrate:latest'
```
