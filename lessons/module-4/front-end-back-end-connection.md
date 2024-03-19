---
title: Connecting Front-End and Back-End Applications
length: 90 mins
tags: javascript, backend
---

<!-- In introduction, say that learning this architecture will set themselves apart from other bootcamp graduates -->
<!-- Create backend to start out with instead of making it from scratch - have them walk through the app (connect the walkthrough to an interview question) -->
<!-- They were engaged with the CORS section - can they be divided in groups to find out what protocol, host, port is? Have them write it on the board while they are working - can utilize the back whiteboards as well (write down the questions on the boards)-->
<!-- Have them close computers for the diagramming portion - make sure they are taking notes! -->
<!-- Once they have drawn the diagrams and I have corrected what they have on the board, have them reassess their diagrams and force them to correct what they did - drives a deeper level of understanding -->
<!-- For the final summary piece, use ONLY notes that you took, summarize all the steps we took today -->

## Objectives

Create a back-end and front-end application in two separate repositories and allow them to talk to each other - even on production.

# Introduction

A common application architecture is to host a front-end (user-interfacing) application and back-end (data-serving) application separately from each other. The goal is separation of concerns and therefore an increased ease in continuous integration between separate teams. There are some local development and production environment issues that must be addressed for this to happen smoothly.

You might have done this before - an Express server and create-react-app application in one repository. We won't be doing that because it's against the architecture we're looking for.

We're also not going to deal with proxies today, and we certainly won't be using any Chrome extensions for CORS (if it's on now, turn it off).

## Step 1: Create a Back-End (10 minutes)

To start, you will create a basic Express application. Your application should:

  1. Utilize `app.locals` to serve A JSON object of arbitrary data (perhaps an array of objects)
  2. Include 1 GET: should return all the resources
  3. Include gitignore file

  *Test your endpoint with Postman*

Questions: 
 * What is gitignore and why would we want this in such a basic application?

<!--
  * Should ignore node modules - they don't want this pushed to GitHub. Keeps git history clean and repo size small (no committing of dev dependencies) 
-->

---

## Step 2: Create a Front-End (10 minutes)

Now that our backend endpoint is working, we are going to build a small frontend application in React.

If you have not done so recently, update your create-react-app npm package using the command: `npm i -g create-react-app`. Create a new create-react-app React front-end application - name it whatever you'd like.

Your frontend should:
  1. Be initialized with create-react-app. Name it whatever you would like
  2. Fetch all of the resources from your backend application. Note:  
    - State should hold the data from the fetch call  
    - There should be some default state of the fetched data (the default state should be rendered on the page)  
    - Once the fetch is complete, the state should be updated and rendered on the page.  

Questions:
* What port does `create-react-app` define for us automatically?
* Can you run your BE and FE on the same port? 
* Why isn't your fetch working?

<!-- 
* create-react-app uses 3000
* They will get an error in their FE app if they do not update their apps to utilize different ports for BE/FE
* Fetch will not work due to CORS error. This will show in their console:

`"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"`  -->

---

## Step 3: Research CORS

You've heard of it before - Cross-Origin Resource Sharing. What even is an origin? And why do we want to share resources?

On your own, look through [this MDN page](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) about what an origin is. 

Turn and Talk:
* What is an origin?
* What is Cross Origin Resource Sharing?
* Why can't our frontend and backend applications talk to each other?

<!-- 
* An origin consists of the protocol (HTTP vs HTTPS), port (if specified), and host
* CORS allows resources to be shared between origins that are specified
* Our FE and BE apps can't talk to each other since they are running on different ports
 -->

Read through [this MDN page](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) about CORS - specifically:
  1. "Introduction"
  2. "What requests use CORS?"
  3. "Functional Overview", 
  4. **Simple requests** portion of "Examples of access control scenarios"
  5. "The HTTP response headers"

Now in each group at your tables on a piece of chart paper:

* Diagram the "conversation" between the back-end and front-end that caused the CORS issue in the first place
* What is the protocol? Port? Host? Draw it out.
* How do you fix the CORS issues? What needs to change? Diagram a new conversation where the frontend is able to request a resource from the backend, which has a different origin.

---

## Step 4: Implement CORS

Let's fix the CORS issue.

<!-- They need to add the "cors" express package and use the default app.use(cors()); in their server file -->

For this, we can install a node package that allows us to enable CORS with various options. 

Using the docs found [here](https://www.npmjs.com/package/cors), let's install an extension designed to address enable CORS with Express apps:

1. Install this package as a dependency by using `--save`
2. Using the documentation as a guide, require the CORS package and utilize the simple usage to enable _all_ CORS requests

Now that the CORS situation is fixed, and even though it works, note that you _SHOULD NOT use the default CORS settings_ to allow all origins! In your back-end application, you need to change the default settings in the server to allow only specific origins that apply to your application (for development and production).

You can read up on how to configure the CORS middleware in the [documentation here](https://expressjs.com/en/resources/middleware/cors.html#configuring-cors).

---

## Step 5: Environmental Variables

In the fetch call of our FE application, we hardcoded the URL we are querying. But `localhost` won't work when we get to our production application. How can we make the URL dynamic?

Go to `create-react-app` docs for the section on [environment variables](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#docsNav).

Take a few minutes to read through that section. 

From here, let's update the following in our application:
  ```js
   <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
  ```
  1. Add this code block (shown above) within the return of the render in your frontend app
  2. In the root of your react app, create a dot-prefixed env file called `.env.development` (This will be used to store variables that are utilized when we are `development`)
  3. Declare a custom React environment variable to store our backed URL for the fetch call. This variable should be save in the  `.env.development` file you created. Now, replace the hard-coded URL in your App fetch call with the environment variable, and see if it works!

<!-- ```
// .env.development

REACT_APP_BACKEND_URL=http://localhost:3001
``` -->

Now, in our FE application, let's update the hardcoded URL in our fetch to use the new environment variable.

```js
fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/[YOUR ENDPOINT HERE]')
```

_*NOTE:*_ You will have to kill your FE server and restart it. This is because, as you read in the documentation, environment variables are embedded into the code during the BUILD of the app, not during the run time. So now that we've added a new variable for our development environment, we must start a new build. In the development environment, a new build is run every time we run `$ npm start`, so let's do that now. Make sure your BE server is already running.

Check your React app in the browser. Hopefully we will still be successfully making our fetch call using the environment variable!

Questions:
* How do you add a custom environment variable to a create-react-app?
* Are there any caveats to know about them?
* What is NODE_ENV and what should we know about it?

<!-- Need to add them in some kind of .env file, in our case .env.development -->
<!-- Need to have prefix REACT_APP_ -->
<!-- NODE_ENV environment variable is available by default -->
<!-- The environment variables are embedded during the build time, not run time -->

---

## Step 6: Deployment

### Backend

So we're set up locally, and everything seems to be working correctly! So far we've taken care of our development environment. What about production and deploying our application? Let's deploy the back-end application to Heroku first. Go ahead! (Reference the [lesson](https://frontend.turing.edu/lessons/module-4/deploy-to-heroku.html) we've already had about deploying a back-end app to Heroku.)

Test it with Postman to make sure the API is working.

### Frontend

Next we need to deploy the front-end. This is a little different from deploying the back-end. To deploy something to Heroku, we need a server. Our React app has a development server (this is what is used when you say `npm start` in your terminal), but we can't use it in production.

We have to use what is called a buildpack. It essentially wraps our React app in a server (like an Express server) for us, which Heroku can use to serve our front-end application.[This is a buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack) that is suggested. 

To set it up and create a Heroku application, run the command: `heroku create your-app-name --buildpack mars/create-react-app` Push up your FE app and watch it build. Does it run? Does the fetch call go through successfully? What happened?

<!-- The fetch call will not go through because the BACKEND_URL has not been set for production through Heroku -->

You will probably see your default state information being rendered, but nothing from your fetch call. Why?

<!-- We only defined a backend url for our *development* environment, but on Heroku, we're in a *production* environment! -->

Read [this Heroku doc page](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard) for what you might need to add.

In the settings, under 'CONFIG VARIABLES', add your `REACT_APP_BACKEND_URL` variable with a value of your deployed BE's URL.

Did it fix the issue?

Probably not! According to the docs, when are environment variables embedded? What will you have to do to get the newly created production environment variable into your codebase?

## Summarize What We Have Done

Take a few minutes now to write down, in your own words, exactly the steps you had to take to get your BE and FE to talk to one another. What caused bugs? How did you address those bugs?

Write down what remaining questions you have. Use those question as starting places for digging into the documentation.
