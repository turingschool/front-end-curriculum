---
title: Automated Testing with selenium-webdriver
length:
tags: webdriver, webpack, selenium
---


### Context

Testing is an integral part of development. As developers we should really care
about the things we are creating. Ultimately at some point we need to start
making a transition into making our code becoming our craft. You have about 3
more modules left here at your time at turing. As you start thinking about the
time you have left here at Turing I would challenge you to start looking at
what you're doing here as time dedicated to the pursuit of writing good code.
That is not only what I believe to be a noble pursuit but your focus goes from
getting something to pass, or something to work to loving what you're actually
doing. Craft means ' the faculty of executing well what one has devised'. If
that is going to be the end we want to get to the means to that end is going
to be testing.

My father is a pretty amazing dude. Now as you all get to know me you're going
to see that I am actually a pretty laid back guy. My dad is pretty particular
about the way he wants things to be done. The thing I loved most about my dad
was that in anything he was doing he always strived to make sure that
everything he did was done correctly. I remember him telling 16 year old me to
take my time when I was doing anything. That the work you do should always
reflect good on your part. As you can imagine 16 year old Jhun was more
concerned with getting something done as fast as possible. It wasn't until I
realized what I build can have some really positive or negative implications on
people's lives.

I'm going to read an article from a magazine that I love that really challenged
the way I wrote my code.

In this module my hope for you is that you will begin to love testing. Testing
is particularly difficult. I learned a lot about testing from our friend Meeka
who has been doing a lot of this a lot longer than me. Ultimately you're going
to find that testing on the front end of things is really difficult. When you
begin to test it communicates a lot of things.


A) You are past the exploration phase

  - typically as you are starting a project you'll find that you'll be spending most of your time in the exploration phase. Meaning you're spending a lot of that time trying to wrap your mind around the problem. At some point as you are transitioning out of that phase you'll need to move into the testing phase.


B) You understand the stack (technology you're using, and codebase you're in)

  - In order for you to write effective tests you need to have an understanding of that problem. A lot of times esp in the front in part of development you'll notice that you'll be dealing with things that are pretty difficult to test. Things like `localStorage` and a click event. When you start writing tests that accommodate some of this stuff it communicates to your team, and to yourself that you have a grasp of the problem.


C) You write test so you can refactor

  - This typically is pertaining to unit tests. In order for us to refactor our code easily and effectively we need those tests.

 before we move onto our next section I would love it if you took about 5 minutes to talk to the person next to you about:

  - What these 3 steps really mean for you and how they can positively affect your development.
  - How do you test the dom?
  - What was your development process like without `dom` tests?


### Enter Selenium

 Up to this point in our development we've spent most if not all our time in the Unit Test department and we've never really ventured into the `dom`. What Selenium allows us to do is automate our `dom` tests. So instead of us having to go in ourselves and test to see if the functionality is working we can write a test, run our test suite, and then see if the test passes or fails.


##### Somethings To Keep In Mind

As we use this technology you need to remember that this is a pretty large library. With any library in order for us to fully understand it we need to look at the documentation and also use our old friend `trial and error`

The first thing we're going to do in order to get a hang of using Selenium is to use to control it via our terminal. The way you want to look at this is like programming a robot to do our busy work. The goal of the next 15 minutes or so is to get us at a place where we feel a little more comfortable with the syntax involved with using Selenium and then after that we'll look into using it inside of our mocha tests.


##### Something we need before we get started


- Java SE Development Kit

  - Unfortunately for any of this to work we are going to need to install some dependencies. Selenium is reliant upon Java's SDK so we're going to have to download and install that into our computer. Download [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

- Chrome driver

 - If you want to utilize chrome as your browser of choice you're going to need to install this as a dependency

 - In your terminal go ahead and type in this command `npm install -g chromedriver`

- Install WebdriverJs

  - WebdriverJs is Selenium. As you're going to see we're going to be using this a lot in this lesson and in your next project.
  `npm install -g webdriverjs`

- Nodejs

  - The last thing we're going to be using today is the `Node REPL`. One way to see if you already have this installed is to type `node` inside of your terminal and you should be put into a REPL session.

Awesome! Once you have this installed let's go ahead and hop into our terminal and type

`node`

Now just like any file we need to require some of the dependencies we've installed. So the first thing we're going to require is going to be `selenium-webdriver`

go ahead and type `var webdriver = require('selenium-webdriver')` inside of our terminal. It should return undefined.

Once we've done that we need to build our browser. What do you mean by that? Well we need Selenium to communicate with the browser we'd like to use. Once that communication is set, we can tell selenium what we'd like for it to do and it will execute those commands inside of our browser of choice. I want you to think of this as you programming a robot to do specific things for you inside of your browser.

Go ahead and run `var driver = new  webdriver.Builder().forBrowser('chrome').build();` inside of your browser.
Now some of you might be wondering what the heck do some of these functions do for you. Just so you know there isn't going to be any sort of quiz or test on what these commands do. The `Builder()` api is a part of  `selenium-webdriver`. What this function allows us to do is set specific settings on the browser we would like to use. This becomes really powerful when you want to customize how you want to use your specific browser. For instance you can say something along the lines of `webdriver.Builder().forBrowser('chrome').usingServer('http://socalbros:8080')`

so whenever you call upon your browser instance you will always be on your local server. In our case the only default setting that we're actually using is going to be that we want to use  `chrome`. If you want you can use `firefox` or if you want to live on the edge `safari`.


So once you've executed that command you should see that a new chrome browser should have opened. Now that it's opened we can sort of manipulate the browser's actions with specific commands. An easy one to start with would be

`driver.get('http://google.com')`

Once you've done that the browser should take you to google's webpage.

Now what if I wanted to actually input some sort of search query? I mean that would be super rad. If we open our dev tools we'll see that the search bar has a tag of `name` and it's intuitively named `q`. Well what can do is we can target that input bar and then send it the characters we'd like for it to take.

`driver.findElement(webdriver.By.name('q')).sendKeys('hello world')`

So if you run that command it will actually send those keys over to the input field we've found.

Now if you're like me you're probably looking at this query and you're like 'That is a lot to type...'. You're totally right.
Luckily selenium allows us to use the `By.hash` which is a part of the `By` api to write the same query shorthanded. `driver.findElement({name: 'q'}).sendKeys('hello world')`
This feels a lot like destructuring inside of es6.

Now that `webdriver.By` is essentially a class that has `prototype` functions built into it. before we move on take the next 5 minutes to look at the documentation and check out what you can do with this `By` class [here](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html).

#### Discussion

Turn to the person next to you and discuss the following things

1) What static functions can I use to traverse the `dom`

2) What's the main difference between the `{}` syntax and the `By.[function-name]`

3) Any concerns or confusion

#### Your Turn

Take Selenium for a spin!

from your terminal see if you can do the following

#### Phase 0

1. Go to http://google.com
2. Search for 'Ash Ketchum'
3. Click on one of the search results

#### Phase 1

1. Go to http://idea-box-jhun.herokuapp.com/
2. Add an idea title
3. Add an idea description
4. Click the submit button
5. Add multiple ideas to the page


#### Phase 2

1. Up-Vote and idea
2. Downvote an idea
3. Delete an idea
4. Search for an idea


#### Phase 3

1. Create a new driver instance
2. See if you can tell the driver to go to http://idea-box-jhun.herokuapp.com/ and add a new idea to the dom in 1 query


#### Writing tests.


Let's go ahead and start writing our first test! It'll be kind of a warm up test so we can start getting the hang of the syntax.
Let's see if we can write a tests that checks if we can add text into the input fields and lets assert that we are in fact adding the values into the correct space.

so the first thing we need to do is require our assert library and also selenium

so inside of `test/sample.js` we need to add our requirements.

```
const assert    = require('assert');
const webdriver = require('selenium-webdriver');

```

now that we have that let's start building out the start of our test.


```
describe('testing ideabox', function() {
  it('should allow me to add a title and a description', () =>{
    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:3000');

    const title = driver.findElement({name: 'title'})
    const description = driver.findElement({name: 'description'})
    title.sendKeys('this is a title').then(()=>{
      return title.getAttribute('value')
    }).then((value)=>{
      assert.equal(value, 'this is a title')
    })

    description.sendKeys('this is a description').then(()=>{
      return description.getAttribute('value')
    }).then((value)=>{
      assert.equal(value, 'this is a description')
    })
  })
})

```

if we run this test we'll see that the browser doesn't even get built. So what's actually going on? Well we're dealing with the async environment that javascript lives in. There are ton of ways to deal with but I found that the easiest way to deal with it is by utilizing selenium's built in Promise manage. All we have to do is require that part of the selenium into our file.

```
const assert    = require('assert');
const webdriver = require('selenium-webdriver');
const test      = require('selenium-webdriver/testing')


test.describe('testing ideabox', function() {
  test.it('should allow me to add a title and a description', () => {
    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:3000');

    const title = driver.findElement({name: 'title'})
    const description = driver.findElement({name: 'description'})
    title.sendKeys('this is a title').then(()=>{
      return title.getAttribute('value')
    }).then((value)=>{
      assert.equal(value, 'this is a title')
    })

    description.sendKeys('this is a description').then(()=>{
      return description.getAttribute('value')
    }).then((value)=>{
      assert.equal(value, 'this is a description')
    })
  })  
})
```
So if we run this test we're going to see some selenium begin to build our browser but then all of a sudden it stops. and we get this error.
` Error: timeout of 2000ms exceeded.
     Ensure the done() callback is being called in this test.`


So mocha is super impatient and if your test suite takes more than 2 seconds to run you'll notice that it will actually fail. A simple solution is to cause the test to time out.


```
const assert    = require('assert');
const webdriver = require('selenium-webdriver');
const test      = require('selenium-webdriver/testing')

test.describe('testing ideabox',function(){
  this.timeout(10000)
  test.it('should allow me to add a title and a description', ()=>{
    const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:3000');

    const title = driver.findElement({name: 'title'})
    const description = driver.findElement({name: 'description'})
    title.sendKeys('this is a title').then(()=>{
      return title.getAttribute('value')
    }).then((value)=>{
      assert.equal(value, 'this is a title')
    })

    description.sendKeys('this is a description').then(()=>{
      return description.getAttribute('value')
    }).then((value)=>{
      assert.equal(value, 'this is a description')
    })
    driver.quit()
  })  
})

```

As you can see the only thing that I added was a `this.timeout()`. Now if we run our tests we should see our tests pass.

Let's go ahead and write a test and see if we can add an idea to the dom.


```
test.it('should allow me to add a title and a description', ()=>{
  const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  driver.get('http://localhost:3000');

  const title = driver.findElement({name: 'title'})
  const description = driver.findElement({name: 'description'})
  const submitButton = driver.findElement({name: 'button'})

  title.sendKeys('this is a title')

  description.sendKeys('this is a description')

  submitButton.click();

  let idea = driver.findElement({tagName: 'li'})


  idea.getText().((text)=> {
    assert.equal(text, 'this is a title\nthis is a description')
  })
})  

```

As you can see the more complicated part of this whole thing is trying to extract the data from the dom. One thing we have to keep in mind is that selenium-webdriver is promise based. In our case when we use `findElement` it returns the element to us. When we use the promise `then()`it takes the return value of the previous function and passes it to another function.
Once we have the element we're looking for we can call the `getText()` function which will return to us another promise. Once we have the resolve of that promise we can use that inside of our assertion.

#### Your turn

This is going to be a little stretch for some of you, but that is okay!

#### Phase 0

I want you to try and see if you can write a test that submits 2 ideas to the page and checks to see if there are in fact 2 of them present.

hint: look into `findElements()`

```
test.it('can add multiple ideas', ()=>{


  const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  driver.get('http://localhost:3000');

  const title = driver.findElement({name:'title'})
  title.sendKeys('this is a title')

  const description = driver.findElement({name:'description'})
  description.sendKeys('this is a description')

  const submit = driver.findElement({name: 'button'})
  submit.click()

  title.sendKeys('this is a title 2')

  description.sendKeys('this is a description 2')

  submit.click()

  driver.findElements({tagName:'li'}).then((li) =>{
    assert.equal(li.length, 2)
  })
  driver.quit()
})
```

#### Phase 1

Now I want you to write a test where a user adds 2 ideas to the dom, deletes one idea, and you assert that there is one idea on the dom.

```
test.it('can add multiple ideas', ()=>{

  const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  driver.get('http://localhost:3000');

  const title = driver.findElement({name:'title'})
  title.sendKeys('this is a title')

  const description = driver.findElement({name:'description'})
  description.sendKeys('this is a description')

  const submit = driver.findElement({name: 'button'})
  submit.click()

  title.sendKeys('this is a title 2')

  description.sendKeys('this is a description 2')

  submit.click()

  driver.findElements({tagName:'li'}).then((li) =>{
    assert.equal(li.length, 2) // checking to see that multiple ideas are on the dom
  })

  driver.findElement({className: 'delete-idea'}).click() // clicks delete button

  driver.findElements({tagName: 'li'}).then((li)=>{
    assert.equal(li.length, 1)
  })
  driver.quit()
})
```

### Refactor


One thing you might have noticed is that our testing suite is not very dry. One thing that I notice is that there are multiple places where we are creating a new instance of our browser and then quitting it after every test. What we can do is move those two things into a before and after action.


```
test.describe('testing idea box', ()=>{
  const driver


  test.beforeEach(()=>{
    this.timeout(10000);
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    driver.get('http://localhost:3000')
  })

  test.afterEach(()=>{
    driver.quit()
  })

  test.it('...',()=>{
    ...
  })
})
```
Now that we have that working for us we can move all of the instances in our test that repeat this code out.

### In Closing

Selenium is a mainstay when it comes to feature testing. This is your first interaction with this technology. Ultimately this is going to be a primer for us as we move into this feature testing space.
