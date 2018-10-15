---
title: Connecting Front-End and Back-End Applications
length: 90 mins
tags: javascript, backend
---

## Objectives

Create a back-end and front-end application in two separate repositories and allow them to talk to each other - even on production.

## Introduction

A common application architecture is to host a front-end (user-interfacing) application and back-end (data-serving) application separately from each other. The goal is separation of concerns and therefore an increased ease in continuous integration between separate teams. There are some local development and production environment issues that must be addressed for this to happen smoothly.

You might have done this before - an Express server and create-react-app application in one repository. We won't be doing that because it's against the architecture we're looking for.

We're also not going to deal with proxies today, and we certainly won't be using any Chrome extensions for CORS.

## Create a Back-End

Create an Express application that has one endpoint (a root-level endpoint, `/`, is adequate) and serves a JSON object of arbitrary data. Don't forget your `.gitignore`.

Test the endpoint using Postman.

## Create a Front-End

If you have not done so recently, update your create-react-app npm package using the command: `npm i -g create-react-app`. Create a new create-react-app React front-end application - name it whatever you'd like.

Once your app is done being created, start your back-end application and your front-end application. What happened?

<!-- They should see that the FE and BE app are trying to run on the same port - change the BE development to be something like 3010 -->

Now that that's fixed, create a `fetch` call in the application to fetch data from your back-end application:

* State should hold the data from the fetch call
* There should be some default state of the fetched data (the default state should be rendered on the page)
* Once the fetch is complete, the state should be updated and rendered on the page

If it's not working, check out the console of your React app...

<!-- They should see a CORS error -->

### CORS! - Some Group Work

You've heard of it before - Cross-Origin Resource Sharing. What even is an origin? And why is it bad that we want to share resource?

With a partner, look through [this MDN page](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) about what an origin is. See if you can describe an origin for our use cases in 1 or 2 sentences.

---

Now that we know what an origin is, what is Cross-Origin Resource Sharing, and why won't it let us talk to our back-end application.

Read through [this MDN page]() about CORS - specifically the "Introduction", "What requests use CORS?", "Functional Overview", the **Simple requests** portion of "Examples of access control scenarios", and "The HTTP response headers".

Now in each group at your tables on a piece of chart paper:

* Diagram the "conversation" between the client and server that caused the CORS issue in the first place
* Then diagram a new conversation where the client is able to request a resource from another origin (what needs to change?)

---

Let's fix the CORS issue.

<!-- They need to add the "cors" express package and use the default app.use(cors()); in their server file -->

Now that the CORS situation is fixed, and even though it works, note that you _should not use the default CORS settings_ to allow all origins. In your back-end application, you need to change the default settings in the server to allow only specific origins that apply to your application (for development and production).

### Do Not Hard-Code Host Names...

Localhost won't work when we get to our production application. How can we make the URL dynamic?

Go to `create-react-app` docs for the section on [environment variables](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

Take a few minutes to read through that section. Find out how to add a custom environment variable and any caveats about them?

<!-- Need to add them in some kind of .env file, in our case .env.development -->
<!-- Need to have prefix REACT_APP_ -->
<!-- NODE_ENV environment variable is available by default -->
<!-- The environment variables are embedded during the build time, not run time -->

Let's add an environment variable for the `BACKEND_URL` in a `.env.development` file. Replace the hard-coded URL in your App fetch call with the environment variable, and see if it works!

### Deploy

So we're set up locally, and everything seems to be working correctly! So far we've taken care of our development environment. What about production and deploying our application?

Let's deploy the back-end application to Heroku first. Go ahead!

Test it with Postman to make sure the API is working.

---

Next we need to deploy the front-end. This is a little different from deploying the back-end. To deploy something to Heroku, we need a server. Our React app has a development server (this is what is used when you say `npm start` in your terminal), but we can't use it in production.

We have to use what is called a buildpack. It essentially wraps our React app in a server (like an Express server) for us, which Heroku can use to serve our front-end application.

[This is a buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack) that is suggested. To set it up and create a Heroku application, run the command: `heroku create your-app-name --buildpack mars/create-react-app`

Push up your FE app and watch it build. Does it run? Does the fetch call go through successfully? What happened?

<!-- The fetch call will not go through because the BACKEND_URL has not been set for production through Heroku -->

Read [this Heroku doc page](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard) for what you might need to add.

Did it fix the issue?

## Summarize What We Have Done

<!--  -->
