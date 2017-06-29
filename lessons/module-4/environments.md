---
title: Environments & Their Variables
length: 60
tags: environments, environment variables
---

Environments in software development refer to the place where your code runs. The "where" in this definition is less of a physical location, and refers more to a configured setup of tools, platforms, hardware and software. Each environment typically corresponds with a specific phase of the release process. 

## A Brief History

### Stage 0: One Environment
#### Production

![We'll Do It Live](https://media.giphy.com/media/A34x7CEKUkCyc/giphy.gif)

In the beginning, we developed our applications directly in production. This was problematic for a number of reasons. Mainly, you had to deploy your code in order to see feedback. Think of how many times you write some functionality incorrectly. Every time you push broken code to production, it's breaking the user experience for people who are currently on your application.

### Stage 1: Two Environments
#### (Development, Production)

To alleviate this issue, we created development environments. Development environments are intended to:

* shorten the feedback loop (you can see if your code is working much more quickly without having to wait for a build or deployments)
* give us a low-risk place to write our code and try it out

Development environments typically live on your laptop and allow you to configure the application in a way that makes it easiest for you to actually develop. (e.g. you might use unminified versions of libraries and packages to make debugging easier)

While the development environment provided us with some answers to the problems with a single production environment, it also introduced some new ones:

* Just because it works on your machine, does not mean it will work on others (e.g. you might have a node module installed locally that is a lower version of one that gets installed in production if you haven't locked down your package versions)
* Although rare, hardware can sometimes change how software behaves. So the system that is running your application might not be exactly the same as the one running it in production.

### Stage 2: Three Environments
#### (Development, Staging, Production)

So, we created another environment that we call staging. This environment is meant to execute our code in an environment as close as possible to production, without actually disrupting production. The staging environment will often be accessible only internally so that employees and team members can do a round of quality assurance before deploying to production.

### Stage 3: Four Environments
#### (Testing, Development, Staging, Production)

As we began to focus on automation, we developed more advanced test suites that would do their own round of quality assurance on our code before even showing it to team members. We've created testing environments to run our automated test suites that verify the integrity of our code. 

### Stage 4: Five Environments
#### (Testing, Development, CI, Staging, Production)

There is yet another environment that is common on modern development teams: Continuous Integration. It exists to run our tests, report back with success or failure, and in some cases, take additional action.

We all know to run our tests before we push, or after we merge, or before we deploy, but a continuous integration environment ensures that tests are run. We can’t forget. You can even add CI tools to your production deployment process, such that any commit that doesn’t pass its tests will be rejected.

## Modern Environments

So based on that history, we ended up with the modern environments we have today. The most common ones you'll see are:

* **Development:** 
  * the application is actively being developed
  * should contain software that's *similar* to that found in staging and production
  * likely does not have similar hardware as staging and production
* **Testing:**
  * the application is actively being tested, likely by an automated test suite
  * uses pre-defined, rigid data for testing purposes
* **CI:**
  * the application is running a complete build to ensure everything is working as expected under a given setup
  * should have the same software as your production environment
  * is usually connected to your version control system
  * often connected to staging and production for automatic deployments
  * needs access to the exact data you're using in your test environment
* **Staging:**
  * a pre-release phase of the release process where internal team members may do a round of quality assurance
  * should be hardware and software identical to production
  * uses production-like data (often times you'll grab a data dump from production to seed staging)
  * has to consider privacy (is usually only intended to be accessible internally within the company or organization)
* **Production:** 
  * the live, released version of the application
  * defines the standard/expected hardware and software for the application

## Configuration

Environments can differ from each other in many ways. For example:

* You might want the mocked-out data in your test seeds to be more predictable/rigid than the data seeds you work with in development
* Your database connection strings will change between environments because you can't and don't want to use the same database in production that you'll be using in development
* The configuration for automatic deployments will vary based on where your staging vs. production applications live
* The hostname for your different URLs will vary
* The port your application runs on might be 3000 in development, but 8080 in production depending on the tech stack and where it's hosted.
* You likely want to use unminified versions of libraries and packages in development & testing for debugging purposes, but always want minified versions in production for performance reasons.

### Environment Variables

To handle these differences, we use environment configurations and variables. Environment variables represent values that differ between environments. They’re used across languages and platforms to set configuration options. They allow the same logic and code to interact with different sources. They are most often found in configuration files for server-side logic or build tools, and sometimes contain sensitive or private data such as API keys and database connections.

We might already familiar with several environment variables from our past projects:

```js
// the port our node/express server runs on
app.set('port', process.env.PORT || 3000)
```

```js
// our database connection string for postgres
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
```

```js
// even your environment is stored in an environment variable!
const environment = process.env.NODE_ENV || 'development';
```

### Getting and Setting Environment Variables

In node applications, our environment variables are always prefixed with `process.env`. The `process` is a global object available to us that provides information about and access to the current [node process](https://nodejs.org/api/process.html). This object is useful for identifying information about the runtime environment of your node application (node version, arguments passed to the executable, etc.). If you log the process object to your console, it should look something like this:

```js
// ultra-abridged version of a process object
{
  title: 'node',
  version: 'v6.4.0',
  arch: 'x64',
  platform: 'darwin',
  release: 
   { name: 'node',
     sourceUrl: 'https://nodejs.org/download/release/v6.4.0/node-v6.4.0.tar.gz',
     headersUrl: 'https://nodejs.org/download/release/v6.4.0/node-v6.4.0-headers.tar.gz' },
  argv: 
   [ '/usr/local/bin/node',
     '/Users/bstoroz/github/foo/server.js' ],
  execPath: '/usr/local/bin/node'
}
```

The `env` property on our process returns another object that contains details about the current environment. This is where we store and read our environment variables. You can create and set your own environment variables in a couple different ways:

```bash
export FOO=bar
npm start
```

Or...

```bash
FOO=bar node server.js
```

Or directly in your codebase:

```bash
process.env.FOO = 'bar';
```

Now anywhere in my application that node handles, I can access `process.env.FOO` and should receive `bar` as its value.

## Resources

* [Understanding the node process object](https://egghead.io/lessons/node-js-understand-the-node-js-process-object)