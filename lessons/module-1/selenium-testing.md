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

#### AND FYI: "Selenium 2" = Selenium RC + WebDriver

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

### Wait, what was that ^^ again?
Up to this point in our development we’ve spent most, if not all our time, in the Unit Testing department and we’ve never really ventured into testing the dom. What Selenium allows us to do is automate our dom tests. So instead of us having to go in ourselves and test(click all the buttons, reload the page) to see if the functionality is working we can write a Selenium test, run our test suite, and then see if the test passes or fails. :heart_eyes:

# Setup 
Let's take Selenium for a test drive on our Linked List project. 

### Installation
1. `cd` into an existing Linked List project that you have saved locally, or clone down a new Linked List project from :octocat: and `cd` into the resulting directory.
2. From your Linked List directory, run `npm install selenium-webdriver`. You are installing the framework that will allow you to test with Selenium in a node environment.
3. We still need a few additional components to make selenium work with the respective browsers. Luckily, we can leverage Homebrew to install both the Chrome and Firefox components. From the project directory, run the following commands:
   - `npm install chromedriver`
   - `npm install geckodriver`
4. Apple's `safaridriver` is shipped with Safari 10 for OS X El Capitan and macOS Sierra. You will need to enable Remote Automation in the Develop menu of Safari 10 before testing. To turn on WebDriver support, follow these steps:
   - Ensure that the Develop menu is available. It can be turned on by opening Safari preferences (_Safari > Preferences_ in the menu bar), going to the Advanced tab, and ensuring that the Show Develop menu in menu bar checkbox is checked.
   - Enable Remote Automation in the Develop menu. This is toggled via _Develop > Allow Remote Automation_ in the menu bar.
   - Authorize safaridriver to launch the webdriverd service which hosts the local web server. To permit this, run `/usr/bin/safaridriver` once manually and complete the authentication prompt.

### Test File(s)
We need to write some configuration code 

