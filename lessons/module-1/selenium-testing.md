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

### Wait, what was all that ^^ again?
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

### Test File(s)
Let's create a sample test file that will both help us see our Selenium in action, as well as walk us through some of the config requirements.

```javascript

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var driver_saf = new webdriver.Builder()
    .forBrowser('safari')
    .build();

searchTest(driver_fx);
searchTest(driver_chr);
searchTest(driver_saf);

function searchTest(driver) {
  driver.get('http://www.google.com');
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.name('btnG')).click();

  driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'webdriver - Google Search') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
    });
  });

  driver.quit();
}
```

### Testing Golden Rules

1. Use good locator strategies: When you are Interacting with the document, make sure that you use locators and page objects that are unlikely to change — if you have a testable element that you want to perform a test on, make sure that it has a stable ID, or position on the page that can be selected using a CSS selector, which isn't going to just change with the next site iteration. You want to make your tests as non-brittle as possible, i.e. they won't just break when something changes.
2. Write atomic tests: Each test should test one thing only, making it easy to keep track of what test file is testing which criterion. As an example, the google_test.js test we looked at above is pretty good, as it just tests a single thing — whether the title of a search results page is set correctly. We could work on giving it a better name so it is easier to work out what it does if we add more google tests. Perhaps results_page_title_set_correctly.js would be slightly better?
3. Write autonomous tests: Each test should work on it's own, and not depend on other tests to work.

