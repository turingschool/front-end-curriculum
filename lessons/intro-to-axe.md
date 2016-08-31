---
title: Introduction to aXe
length: 120
tags: testing, selenium, aXe
---
#Context

I grew up in a large filipino family. One thing I loved about growing up with this loud group of people was that we didn't really care who you were when you showed up to our family party. The only thing we really cared about was you leaving with a belly full of food.

This idea of inclusion really kind of affected me. This idea that if you found yourself by my house and you were hungry we would feed you. We didn't really care about your socio-economic background, sexual-orientation, religious affiliation, you showed up and thats all that mattered. Come sit and eat. In tagalog we would say ``kain na! `` which mean lets eat.

Now the internet is a very special place for all of us. We have memories and our 2livelihood on the web. The net has literally imbedded itself into our lives.

So why can't we share all of the amazing things about the internet with everyone else?


#The Need

There are 3 billion (and counting) people using the internet.

In America alone there are 57 million Americans with a disability (2012)

consider the following statistics from the [Census Bureau's survey taken on July 25, 2012](http://www.interactiveaccessibility.com/accessibility-statistics)

19.9 Million (8.2%) have difficulty lifting or grasping. This could, for example impact their use of a mouse or keyboard.

15.2 Million (6.3%) have a cognitive, mental, or emotional impairment.

8.1 Million (3.3%) have a vision impairment. These people might rely on a screen magnifier or a screen reader, or might have a form of color blindness.

7.6 Million (3.1%) have a hearing impairment.  They might rely on transcripts and / or captions for audio and video media.


According to the [Pew Internet Project Survey conducted by Princeton Survey Research Associates International](http://www.practicalecommerce.com/articles/1417-Accessibility-How-Many-Disabled-Web-Users-Are-There-)  54% of adults living with a disability go online.

So it's about time we start creating web applications that will accommodate for these people. As people who are soon going to be moving into the development field You have the ability to be the change needed in our community.

The internet is a free service that should be accessible to everyone regardless of skin color, socio economic background, and on top of that physical ability.

We all have become developers for the greater good of those around us. We entered this field because we will have the skill set to solve problems most people can't even begin to understand. I think one of the easiest and best places to start is going to be making sure we can make the internet accessible to our fellow brother and sister.

I believe that we need to not view these people like they were an edge case but instead we begin to advocate for their experience. If the internet was meant for everyone then we should make it for everyone.


Tim Berners-Lee the creator of HTTP/HTML tweeted in front of 90million people during the London Olympics
'this is for everyone'

The computer will always do exactly what you tell it to.
Maybe its time we start telling them to do the right thing.


#Prereqs

- an understanding of testing
- a small understanding of async javascript
- patience
- selenium


# before we begin...

We will be talking about two things during our lesson today. One is going to be writing our selenium test the promise driven way. ``Webdriver.io`` is an amazing piece of technology that allows us to almost forget about the async parts of javascript. I know of a lot of us this might make us feel uncomfortable but I believe our best learning is done when things are just out of reach.

So we are going to write some tests with this concept to help drive it into our souls.

Second we are going to talk about the ``axe-core`` tool and how this integrates into our tests. It's a tool that is pretty easy to implement.


#Goals

- develop a level of empethy for people with accessibility needs
- solidify async ideas
- Utilize axe-core tests.



#Introducing promise driven testing

Up to this point we have done a pretty good job of hiding async javascript from you. At some point the training wheels need to come off and we need to continue to push you towards feeling comfortable writing these tests.


So for this specific implementation we are going to be using ``selenium-webdriver`` in conjunction with ``axe-webdriverjs``.

Selenium will allow us to dispatch our ``browser`` to whatever location we would like.

Now you might be asking why can't we run these tests inside of webdriver? Well, because webdriver is running everything in sync. The issue we run into is that there is some difficulty implementing ``axe-webdriverjs`` into webdriver. So instead what we are going to do is we are going to install the required dependencies and then run the tests we write.

If you're following along you're going to need to download this repository

`` git clone https://github.com/joshuajhun/axe-testing.git ``

and then run ``npm install``

Now really all this has given us is a package.json file. Some css, and index, a server, and a testing folder.

So as we know in order for us to run these integration tests we have to create a server. The server will server our html file so that we can actually run it in development.

If we go into that file its pretty empty. So lets go ahead and add some of the required things needed to get this server off the ground.

```
const http      = require('http')

const ecstatic  = require('ecstatic')


http.createServer(
  ecstatic({root: __dirname})
).listen(8080)

console.log('listening on:8080')
```

Ok so before you freak out. All this is doing is serving up our static files. In our case all we really want is our html file. So what ecstatic is doing (typically you'll see something like ``express`` here) is acting as a [middleware](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=middleware) and is serving up our assets for us.


Sweet! Now we have the stuffs we need! So lets go ahead and dive into our test file and write up some axe-integration tests.

So we need 3 major pieces required in our test file.
We're going to need `mocha`, `axe`, and `selenium`. So since we know that we're going to need that lets go ahead and require those major pieces

``
var selenium   = require('selenium-webdriver')
    AxeBuilder = require('axe-webdriverjs')\
    assert     = require('assert')
``

We place these things in the global namespace so that we can call on them and use them.


Now there are a couple of things we need to cover before we can really start writing tests.

It would be nice if that instead having to set up our browser every single time we could write a before action that would go ahead and take care initializing itself and then going to the webpage we'd like to go to. Lets build it!

```
var selenium   = require('selenium-webdriver')
var AxeBuilder = require('axe-webdriver.js')
var assert     = require('assert')

describe('Accessibility testing', function(){
 var browser  beforeEach(function(done){
    browser = new selenium.Builder()
    .forBrowser('chrome')  
    .build()

    browser.get('http://localhost:8080')
      .then(function(){
       done()
      })
  }) })

```

okay lets kind of talk about whats actually going on here.  We're saying hey `selenium` build me a new browser and I want to use chrome. I want you to take that browser and go to this specific location and when you've reached the location I've asked you to go to. Then and only then do I want you to end the function.

If you're confused about the ``done`` portion. What we've done is pass that as an argument through our function. Without calling done what will happen is that our function will just run straight through. The issue with all of this is that getting to ``localhost:8080`` takes some time. What we are telling the javascript compiler to do is to wait before ending this function and only end the function when the browser gets to the correct location.


Cool! We have a really strong before action.
Now what we need is a ``teardown`` function. Meaning a way so that our browser is being launched after every single test. It wouldn't be super great if we ran our tests all in the same window. So lets create a ``teardown`` method (really all we're going to be using is ``afterEach``.

```
afterEach(function (done){
	browser.quit().then(function(){
		done()
	})
})		
```


# but how does aXe actually work?

So some of you might be wondering how this actually works. ``AxeBuilder`` will take the instance of our browser and analyze it for any accessibility problems. The benefit of all of this is that instead of having to check every single issue that is going on in our project we can run the test and see what is failing and how we can fix it. I'm also going to show you the chrome extension for aXe as well.

Now lets actually write our first test. I know for a fact a big issue within our application is that there is no language set on our html. So let's go ahead and write a test for this.

``Disclaimer: I read the docs to help me out with this. You should do the same :D``

```
  it('should detect html-language', function (done) {
		AxeBuilder(browser)
			.withRules('html-has-lang')
			.analyze(function (results) {
        if (results.violations.length > 0) {
            console.log(results);
        }
				assert.equal(results.violations.length, 0);
				assert.equal(results.violations[0].id, 'html-has-lang');
				assert.equal(results.passes.length, 1);
				done();
			});
	});
```

Now lets kind of break this apart. The `results` portion of our function is going to return a `json` object. Based on this object we can assert a bunch of different things.

in fact if you run the test you should should see this in the terminal

```
{ passes: [],
  timestamp: '2016-08-31T06:53:07.845Z',
  url: 'http://localhost:8080/',
  violations:
   [ { description: 'Ensures every HTML document has a lang attribute',
       help: '<html> element must have a lang attribute',
       helpUrl: 'https://dequeuniversity.com/rules/axe/2.0/html-has-lang?application=axeAPI',
       id: 'html-has-lang',
       impact: 'serious',
       nodes: [Object],
       tags: [Object] } ] }

```
Now if you get a ``timeout`` error all you have to do is add ``this.timeout(10000)`` at the top of the describe block so that your browser can load. Mocha is interesting because it gets mad at you if you don't get a response in 2 seconds.

 So as you can see it gives us a helpUrl that will show us how to solve this issue. really all we have to do is add
 ``<html lang="en">`` to our index file.

 Now that passes we can basically change our test so that the only assertion is that it's giving us the correct number of passing tests.

Now for the most part what you'll most likely be running is a test that just checks the whole page for errors. our test will most likely look like this

```
  xit('should analyze the page with aXe', function (done) {
     AxeBuilder(browser)
       .analyze(function(results) {
            console.log('Accessibility Violations: ', results.violations.length);
            if (results.violations.length > 0) {
                console.log(results.violations);
            }
            assert.equal(results.violations.length, 0);
            done();
        })
  });
```
This takes the state of the browser and it analyzes it right there and then. So if we run this test we should get these errors.

```
[ { description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
    help: 'Elements must have sufficient color contrast',
    helpUrl: 'https://dequeuniversity.com/rules/axe/2.0/color-contrast?application=axeAPI',
    id: 'color-contrast',
    impact: 'critical',
    nodes: [ [Object], [Object] ],
    tags: [ 'wcag2aa', 'wcag143' ] },
  { description: 'Ensures every form element has a label',
    help: 'Form elements must have labels',
    helpUrl: 'https://dequeuniversity.com/rules/axe/2.0/label?application=axeAPI',
    id: 'label',
    impact: 'critical',
    nodes: [ [Object], [Object] ],
    tags: [ 'wcag2a', 'wcag332', 'wcag131', 'section508', 'section508.22.n' ] } ]

```

So whats super great about aXe is that it comes with a chrome extension. Now whats super awesome about this chrome extension is that I can open up my developer tools and make those edits in real time.

# Your Turn

1) Fix the rest of the errors to this version of idea-box

2) Implement this into your portfolio website!

3) Brownie points if you implement this into your pomodoro app :D

# Adding axe and ecstatic to your personal site

- first things first go to the directory of your portfolio site

- once you've done that run `npm init -y`

- now that you have a `package json` you'll need to install some dependencies

- run `npm install selenium-webdriver axe-core axe-webdriverjs ecstatic mocha --save-dev` in your terminal

- once thats installed you'll need to touch a server file
`touch server.js`

- also make some testings files
 `mkdir tests && touch tests/axe-test.js`

- you are now off of the ground. You should create your server file and your tests.
