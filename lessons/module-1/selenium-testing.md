---
title: Introduction to Selenium Testing 
---

# Overview

### Video: [Introduction to Selenium](https://www.youtube.com/watch?v=BL4-_tVx2rE) provides historical overview.

Selenium is a free (open source) automated testing suite for web applications. It is comprised of four components:

* Selenium (IDE) Integrated Development Environment  
* Selenium (RC) Remote Control, aka "Selenium 1"
* WebDriver
* Selenium Grid
* "Selenium 2" = Selenium RC + WebDriver

Why should you care? With Selenium, you can configure a set of scripts that will move through the functionality of your app like a human, testing for correct user flow as well as run automatically across the different browsers. Benefits include:

* Consistency in tests, can run them anytime 24/7
* Reduction in errors because less human intervention
* Scripts are reusable
* Early bug detection
* Testing process is more reliable and the tests more dependable
* Can test in volume - can run thousands of tests across multiple platforms/devices
* Selenium is open source and supports a range of languages including
  Java, Perl, Python, C#, Ruby, Java Script, etc., as well as a range of
  OS like Windows, Mac, Linux, UNIX, etc.
* Testing tools components allow for a fully customizable suite 
* Cross browser & device flexibility

# Setup 
Let's take Selenium for a test drive on our Linked List project. 

### Installation
1. `cd` into an existing Linked List project that you have saved locally, or clone down a new Linked List project from :octocat: and `cd` into the resulting directory.
2. From your Linked List directory, run `npm install selenium-webdriver`. You are installing the framework that will allow you to test with Selenium in a node environment.
3. We still need a few additional components to make selenium work with the respective browsers. Luckily, we can leverage Homebrew to install both the Chrome and Firefox components. From the project directory, run the following commands:
   - `npm install chromedriver`
   - `npm install geckodriver`
4. To get Safari working, run these commands:

### Test File(s)
We need to write some configuration code 

