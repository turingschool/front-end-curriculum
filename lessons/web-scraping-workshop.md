---
title: Web Scraping Workshop
module: 4
---

# (PreWork or Warmup) Promises Warmup

[Lesson Plan Here](http://frontend.turing.io/lessons/promises-warmup.html)

# Intro to Browser Automation and Scraping 

[Excellent StackOverflow Breakdown of Technology Available](http://stackoverflow.com/questions/18539491/headless-browser-and-scraping-solutions)

[Selenium](http://seleniumhq.org/) - polyglot flagship in browser automation, bindings for Python, Ruby, JavaScript, C#, Haskell and more, IDE for Firefox (as an extension) for faster test deployment. Can act as a Server and has tons of features.

# Web Scraping Workshop

## Instructor Demo

Code for live implementation

*Important Note*: if we all hit the same website with an automated script from the same internet provider, we risk the very real possibility that this website will block requests from that internet provider. For that reason, maybe don't all follow along for this specific part. 

```js
var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true }); // this opens a browser. Normally we don't want that to happen, as it slows things down

nightmare
  .goto('https://www.turing.io')
  .click('a.btn-lg.btn-primary.btn[href=\'/why-hire-grad\']') // These long selectors came from a selector extension
  .click('a.btn-lg.btn-primary.btn[href=\'/alumni-portfolios\']')  // Notice where I had to escape a \'
  .wait('div.views-field.views-field-field-picture')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('h3.thin.field-content')
    var list = [].slice.call(nameNodes); // Why did I have to do this?
    return list.map(function(node){ 
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
```

Minimum needed code is:

```js
var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true });

nightmare
  .goto('WEBSITE ADDRESS')
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
```

## Planning Phase

Before you start writing code, don't.

For a number of reasons, debugging browser automation is kind of painful. 

1. It takes a long time
2. There could be a lot of things going wrong, but if it's a misspelled selector, you're going to get mad at yourself
3. If you are running a script over and over and over on a website, you risk the website detecting that behavior as a bot (it kind of is) and blocking you from using the site.

So when you plan out browser automation, you want to start with psuedo-code.

Get an idea in your head, like, I'm going to order Panera for myself at lunch.

Open your browser, make sure you're logged out and the cookies/cache/etc is cleared.

And walk through the process with psuedo code and by finding the selectors.

```js

// I visit www.panera.com
// I click on the button #order-button
// I wait until the form is present
// I fill in my username in the field with selector '#username'
// ...

```

The two resources below are a lifesaver for this process.

### How Do Query Selectors Work Again?

[Vanilla JS Cheatsheet](https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86)

[CSS Selector Helper for Chrome](https://chrome.google.com/webstore/detail/css-selector-helper-for-c/gddgceinofapfodcekopkjjelkbjodin?utm_source=gmail)

### You Do

Spend the next pomodoro working by yourself to come up with an idea for something to scrape or some activity to automate, and outlining the steps needed to accomplish this automation.

If you finish early, come up with another idea or study up more of vanilla DOM manipulation.

Don't write any actual code though. Just psuedo code.

Follow the following steps to get started:

#### Create a folder for your experiments

```
  mkdir webscraping-workshop
  cd webscraping-workshop
```

#### Run `npm init`

#### Run `git init`

#### Create a `.gitignore` and ignore, at minimum, `node_modules`

#### Create a `README.md`

As you work, put your script files in this folder. Link to helpful blog posts/tutorials.docs that helped you along your way in the README. It may also be a good idea to put your 'roadmap' of psuedocode in that README as well.

#### Run `npm i nightmare --save`

#### Create a script file... something like `node script.js`

#### Run your code using Node! So in the terminal `node scrape.js`

#### Some ideas for things to code:

- A script that orders pizza for your board game night and splits the check for you
- A test suite for your personal project
  - [Yes you can use Nightmare to create feature tests](https://gist.github.com/MikaelSoderstrom/4842a97ec399aae1e024)
- An automated tool to log you into craiglist and post a missed connection for you
- Remember how heroku goes to sleep? Write a script to wake your app up for you every morning.
- Pull some data from some site that doesn't give you an API and makes you log in
  - Write that data to a CSV file. You can read those into Node projects pretty easily :D

Really, though, the internet is your oyster.

## Implementation Phase

In groups of two, we can now begin the process of automation.

You and your pair should both have an idea for an automation script. That's good. There are decent odds that one of your ideas won't work.

The web is made by other people. And some of those people don't want to let scripts use their nice, people friendly websites. Also, I don't know if you know this, but front-end development is super hard. Some sites are straightforward to scrape. Others are super hard, and sometimes even impossible.

Either pick one scraper idea to start working on, or work on your separate ideas while supporting one another with questions and cheers of glory and excitement or despair and defeat.

Whatever you do, though, try to make sure you're not hitting the site so many times that you get our IP blocked, okay? (So 30 times an hour, okay, 30000 times maybe not okay). One big red flag that websites look for is time between clicks and typing. If a human couldn't navigate as fast as your script does, that's a red flag. Consider adding some wait statements.

You can install nightmare in a project like so:

```
  npm install -g nightmare
  npm install nightmare --save
```

[Review the documentation for NightmareJS](https://github.com/segmentio/nightmare)

### Wait for Things!

`.wait()` is a powerful tool in Nightmare. You can pass it a selector for it to wait for.. or you can pass it an amount of time. You may need to wait for things between clicks. If your script isn't behaving as expected, try waiting.

### `.end()` and `.then()`

You need these little fellers for your script to work correctly. Don't forget them.

Like, if you go to a site and it doesn't do anything... you probably forgot them....

### Promises

We spent some time going over promises this morning, so check out this promises implementation 

[Promise example here](https://github.com/rosshinkley/nightmare-examples/blob/master/docs/beginner/promises.md)

### Final Thoughts

(from Neight the Greight)

- The web is made by other people, and they don't know something magic that you don't know

- Scraping can be dirty. Pages change. Consider the scope of your project. Does your scraper need to be robust or does it need to work once?

- Programming has uses other than applications. You can make computers do your bidding. You have a superpower now. You can use it for good or evil.