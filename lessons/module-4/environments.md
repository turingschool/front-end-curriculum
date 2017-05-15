---
title: Environments & Their Variables
length: 60
tags: environments, environment variables
---

Environments in software development refer to a configured setup of tools, platforms and data management for your application. Each environment typically corresponds with a specific stage of the release process. 

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

### Stage 3: Four Environments
#### (Testing, Development, Staging, Production)

### Stage 4: Five Environments
#### (Testing, Development, CI, Staging, Production)

## Modern Environments

So the most common environments you'll see are:

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

Environments can differ from each other in many ways. For example:

* You might want the mocked-out data in your test seeds to be more predictable/rigid than the data seeds you work with in development
* Your database connection strings will change between environments because you can't and don't want to use the same database in production that you'll be using in development
* The configuration for automatic deployments will vary based on where your staging vs. production applications live
* The port your application runs on might be 3000 in development, but 8080 in production depending on the tech stack and where it's hosted.
* You likely want to use unminified versions of libraries and packages in development & testing for debugging purposes, but always want minified versions in production for performance reasons.
