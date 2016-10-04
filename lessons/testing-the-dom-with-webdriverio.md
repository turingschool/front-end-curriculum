---
title: Test Driven Development with WebDriver.io
length:
tags: webdriver, webpack, selenium
---
# Test Driven Development with WebDriver.io

## Learning goals
 - Understand the benefits of testing
 - Utilize WebDriver.io to test changes on the dom
 - Utilize Mocha's assertion library to write effective tests.
 - Understand Red, Green, Refactor  


## So Why testing?

Up to this point a lot of us have been writing code and our only real interaction in terms of us testing to make sure things work is by going into the browser and actually testing the functionality ourselves. Although this method gets the job done it isn't necessarily the most efficient and the most verbose.

Testing allows us to see if our application is working the way we want it to work, but it also introduces an element of truth while we are developing. If you're like me a lot of the time I don't know where to start. What testing does for us is it almost provides some sort of road map for our development.

A term you will hear often is "Dream Driven Development". When writing test this should be your mantra and rhythm. When you write your tests you should think  'What do I want to happen". After you write what you're expecting your code should make that test pass.

Now up to this point all of our testing has been unit tests. Meaning that we are never really looking at the dom. We're testing that our functions are taking an input and getting an output. Now unit tests are like the bedrock for our development. It helps guide our development but in terms of checking and seeing if our expectation is actually happening in the dom our unit tests kind of cease.

Enter integration tests.
Integration tests are tests to see if everything works well together. It's taking what we do with unit tests and throwing it into the wild.

If we do our unit tests right then we should see that our integration tests flow pretty seemlessly.


## Let's talk about testing.

What we are going to be talking about today is how to set up webdriver.io and we'll drive our development together inside of node. Once we set up our testing environment we will go straight into writing some tests together to get an idea to post onto the DOM, and also deleting a specific idea.


In order for us to test the DOM we have to have two of our servers running. We need our development server (web-pack-dev-server) and our selenium-server running. Selenium will act like a human and essentially walk through the functionality of our application for us.

## Let's go!

Once you've cloned the repository make sure you `npm install` all our dependencies.

once that's done we need to install a couple more dependencies into our project ( I wanted to give you the practice).

The first is going to be webdriver. This is going to be the framework that we will use to test the dom. What's great about webdriver is that it not only allow us to use something called ```mocha``` which is a assertion library (basically it allows us to test what we want) and it will also leverage ```selenium``` which is the thing that will literally open up your browser and run the tests for you.

So we're going to have to install ``selenium standalone`` and ``webdriverio`` into our dependencies (when i say dependencies it's essentially software that we need to make our project/desired functionality work.).

run these commands on your command line.

```
npm install webdriverio --save-dev
```
```
npm install -g selenium-standalone
```

```
selenium-standalone install
```
* we also install ```selenium-standalone``` into the global namespace so that we can run our tests from the command line. I think for our case this is probably the easiest way to do it.

if you are having trouble loading any of these you can also download selenium and launch the server with the following commands.

#### download selenium
```
curl -O http://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.0.jar
```
#### start server
```
java -jar selenium-server-standalone-2.53.0.jar
```

These two pieces are going to allow us to run our tests locally.  


sweet! We have all of the pieces we need. Now we just need to create a test runner. Whats nice about this is it will allow us to run all of our tests with one command. To set up our runner we simply run this command from the command line

```
./node_modules/.bin/wdio config
```

It's going to ask us a series of questions.

```
Q: Where do you want to execute your tests?
A: On my local machine

Q: Which framework do you want to use?
A: mocha

Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?
A: dot (just press space and enter)

Q: Shall I install the reporter library for you?
A: Yes (just press enter)

Q: Do you want to add a service to your test setup?
A: none (just press enter, let’s skip this for simplicity)

Q: Level of logging verbosity:
A: silent (just press enter)

Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)

Q: What is the base url?
A: http://localhost:3000 (just press enter)

```

Now that we have webdriver configured and ready to go!

lets go ahead and make the folders we need so that our tests can run.

```
mkdir test
mkdir test/specs
touch test/specs/test.js
```

Now we're all set up to finally start writing our tests!

first thing we need to do is require our assertion library that comes with ``mocha``.

```
const assert = require('assert')
```

once that is required we can now look at writing our first tests. Now if this is your first time doing this it might seem a little confusing. A test is comprised of two sections. One is a ```describe``` block and then inside of that block there is an ```it``` block.


```
const assert =  require('assert')

describe('welcome page', function(){
  it('should be able to grab the page title', function(){

  });
});
```

so now that we have the structure for our tests lets talk about the components and pieces we need to make this work.

We need something launch the browser to grab the title of our website. Once we have the browser to go to it's desired location we'll tell it to grab the title of the website.

luckly for us ```webdriver``` gives us access to the browser and we can leverage that to do what we want.

```
const assert =  require('assert')

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
  	var title = browser.getTitle()
  	assert.equal(title, 'hello world');
  });
});
```

so what's super powerful about all of this is if we look into the ```wdio.conf.js``` it gives us access to configuring our runner file. Now if we open that up there are a couple of pieces I would love for us to take a look at.

the first is ```sync: true,``` This is significant because if this was moved to false we would be writting our tests with promises because javascript is async. This allows us to declare variables and have them accessable to our tests when we need them to be.

also check out ```baseUrl: 'http://localhost:8080',```
the nice part about this is we can declare what our root is. In our case we've defined it to be ```localhost:8080```.

Now back to our tests. We've explicitly defined the root to be ```localhost``` so we can tell the browser to go to the root.
Now that we have our browser in the desired location we can tell the browser to now grab the title of our webpage. If we save that to a variable we can test it and as you can see we are expecting that title should be equal to ```'hello world'```.

Great! How do we run our tests? great questions! So if we are going to run our tests we're going to have to run this command. Every. Single. Time. ```./node_modules/.bin/wdio wdio.conf.js```
Now as developer our goal is to be as lazy as we possibly can. What's nice is inside of our ```package.json``` there is a section called ```scripts```. Inside of ```scripts``` we can explicitly define shortcuts that we use often. Let's go ahead and add ```wdio wdio.conf.js``` to the ```scripts``` protion of our ```package.json```.


```
  "scripts": {
    "sel": "java -jar selenium-server-standalone-2.53.0.jar",
    "feature": "wdio wdio.conf.js",  
  }
```

In order for us to run our test we're going to have to have 2 of our servers running. One to launch our local server and the other server to run selenium.

To fire up both servers we're going to need 2 terminal windows.
In one window you'll need to run `npm start` and in the other `npm run sel`

Once we fire up both of those servers we can run ```npm run feature``` and we should see our tests pass.

Now that we have things working correctly lets go ahead and take a pom and come back to this.

So the trouble with getting test like this to pass is making sure we can direct the browser to find the things that we want. If we look [here](http://webdriver.io/guide/usage/selectors.html) we can see a ton of different selectors that we can leverage to get our desired outcome.

Now if we're getting down to test driving our development. Now if we are truly driving our development it would be super great if we could write a test that would guide us to make a form that we can use to enter our ideas into.

Now one thing to consider is that there is a certain rhythm that goes into testing. It's called ```red, green, refactor```
this is HUGE!
A lot of us have goals in here and that is to refactor our code and to e good at refactoring our code. I personally think that if we want to get good at stuff like that we need tests to help us. When the test are there we are going to make sure we make an effort to refactor those tests.

So after ever test we write I am going to ask if we can refactor the code that we write so that we are doing our best to not only learn how to test our code but also refactor our code.


Let's go ahead and dream up some of that code in our tests.

### Writing our first test.

Now somethings we should keep in mind about testing. Our tests should cascade in complexity. We should see very small tests at first and then we should have the errors in our tests guide us into creating our application. Obviously when it comes to real world applications it doesn't always work out that way mainly because you're dealing with time. I want you to know from the jump heavily based on your test. Why? Because your tests will communicate to me how you understood the problem. Not only are tests super great for your source of truth but as you've seen tests allow us to refactor. Without tests it will be really difficult to have something to check if your implementation is working correctly.

Now we lets write some tests to drive our development.
What I want to test is that there are in fact forms on the page that I can add values to and grab the values from.


```
describe('attributes on our application',function(){
  it('has input forms and I can set values in those forms', function(){
    browser.url('/')
    var ideaTitle = browser.element("#idea-title")
    var ideaDescription = browser.element("#idea-description")

    ideaTitle.setValue('great title')
    ideaDescription.setValue('great description')

    assert.equal(ideaTitle.getValue(), 'great title')
    assert.equal(ideaDescription.getValue(), 'great description')
  })
})
```

So if we look at our test we are grabbing specific elements of our form and we are setting their values to some arbitrary values.
All we are doing is checking that if I do set these values in the form I can actually grab this information

if we run this test we should expect it to actually fail. The reason that it will fail is because we don't know have any of that html written down in our test. so lets go make this test pass.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input id="idea-title">
    <input id="idea-description">
  </body>
</html>

```

if we run our tests it should actually pass!
awesome.

Now let's ramp up the complexity of our tests.

I'm going to give you a user story. Based on that user story lets write tests to accommodate each expectation.

Some of you might be wondering what a user story is. A user story is expectations / guidelines that a user has for your application. In the wild you will typically receives these as your spec. Typically your user story is actually your integration tests. The only difference is that it's meant for a human to read and not a computer. So lets take a normal user story and lets turn that into a test.


```
As a user,
when I go to the root of your application.
I should see two input fields.
One for an idea title and one for an idea description.
When I fill out both fields and click the submit button .
I expect my idea to be posted onto the page.

```

our test should look a little like this.

```
  it('should be able to add my ideas to the page',function(){

    browser.url('/')
    var ideaTitle = browser.element("#idea-title")
    var ideaDescription = browser.element("#idea-description")

    ideaTitle.setValue('great title')
    ideaDescription.setValue('great description')

    assert.equal(ideaTitle.getValue(), 'great title')
    assert.equal(ideaDescription.getValue(), 'great description')

    browser.click('#submit-button')

    var allIdeas = browser.getText('li')
    assert.equal(allIdeas.replace(/\n/g, ", "), 'great title, great description')

})

```

because we have no javascript written this test is going to fail. When we click the button nothing will in fact be added to our document. So let's look at what it looks like to program some of this stuff.

Our goal now is to get the idea title and idea description onto the dom.

so lets write some code to accomplish some of that.

```

$(document).ready(function(){
  $('#submit-button').on('click', formatIdeas);
});

function formatIdeas(){
 // have a variable set to the return value of a function that formats idea formatted for us
 // have a variable set to the return value of a function that returns a separate delete button
}

```

pro tip. When you're driving your development with tests it is super easy to want to overthink our development. I would say that you want to make your current test pass first.

We would call this our first iteration. We know that typically we would store what we have in local storage. Right now lets get base functionality in terms of the idea being added to the dom.

this is what I came up with.

```

$(document).ready(function(){
  $('#submit-button').on('click', formatIdeas);
});

function formatIdeas(){
  var idea = createIdea()
  var button = createButton()
  $('#all-ideas').append(idea,button);
}

function createIdea(){
  return $(
        "<li>"
        + $('#idea-title').val()
        +"<br>"
        + $('#idea-description').val()
        +"</li>"
      )
}

function createButton(number) {
  return $('<button class="delete-idea"></button>').text('delete idea');
}

```

Now if we run this test it should pass.

now that we are out of the red (test failing) we are in the green(test passing) we should look and see if there is anything we can do to refactor.

There is a little bit of refactoring we could do, but to give you the full effect of how valuable testing is I am going to punt on some of that until this method is really large and then we can spend sometime refactoring.

Sweet. Lets look at our next user story and try to implement that together!

```
As a user,
When I submit a new idea
The input fields should clear
```

So lets go ahead and write that test.

```
it('should clear the input fields', function(){
	   browser.url('/')
    var ideaTitle = browser.element("#idea-title")
    var ideaDescription = browser.element("#idea-description")

    ideaTitle.setValue('great title')
    ideaDescription.setValue('great description')
    browser.click('#submit-button')


    assert.equal(ideaTitle.getValue(), "")
    assert.equal(ideaDescription.getValue(), "")

  })
```

sweet so we are now about to enter the red when we run this test and we should see it blow up.

our error should read this
```
'great title' == ''
```

so if want this to pass all we have to do is

```
function formatIdeas(){
  var idea = createIdea()
  var button = createButton()
  $('#all-ideas').append(idea,button);
  $('#idea-title').val("")
}
```

we run the test we get

```
'great description' == ""
```

still in the red!
Now we can get this to pass by essentially doing the same thing

```
function formatIdeas(){
  var idea = createIdea()
  var button = createButton()
  $('#all-ideas').append(idea,button);
  $('#idea-title').val("")
  $('#idea-title').val("")
}
```

we run the test and we are green!
Now as you can see we are method is pretty chunky.
Not only is it chuncky this is going to be really difficult to debugg as our application begins to grow.

The name of our function is formatIdeas() but it's doing more than just formatting the ideas. All of the logic is nested in this function. Ideally it would be nice to extract this logic into other functions.

Ideally if we can take the logic out of this stack we can deligate the responsibility to other pieces and parts.

When a function has too many responsibilities the code becomes brittle. The image I want you to think of is a bunch of tangled wires.

So if we look at our code what we should do is take the act of adding things to dom and move them into actual functions.


I came up with this.

```
function formatIdeas(){
  var idea = createIdea()
  var button = createButton()
  appendIdeas(idea,button)
  clearField()
}

function appendIdeas(idea,button){
	$('#all-ideas').append(idea,button)
}

function clearField(){
  $('#idea-title').val("")
  $('#idea-description').val("")
}
```
So now we have one function that essentially calls the rest of the functions for us based on the click event. I find that now instead of having to debugging within the lines of code to find out whats going on I can just look at the functions that clearly communicate the logic behind everything.


### Your Turn!

Now lets take a look at our next user story.

```
As a user,
when I go to the root of your application
and I add a new idea to the page,
there should be a delete button attached to the idea.
When I click the delete idea button
I expect the idea to be taken off of the page.
```

I would like you to implement a test testing this works
and I would like you to implement the javascript to make this test pass.

I'll give you about 15 minutes to do that and we will go from there.

This is what I got.

```
it('allows me to delete a single idea from the page', function(){
  browser.url('/');
  var formTitleInput  = browser.element('#idea-title');
  formTitleInput.setValue('greatTitle');

  var formDescriptionInput = browser.element('#idea-description');
  formDescriptionInput.setValue('great description');

  assert.equal(formTitleInput.getValue(), 'greatTitle');
  assert.equal(formDescriptionInput.getValue(), 'great description');

  browser.click('#submit-button');

  browser.click('.delete-idea')

  assert.equal(browser.isExisting('li'), false );
})

it('allows me to submit multiple ideas and delete one idea', function(){

 var formTitleInput       = browser.element('#idea-title');
 formTitleInput.setValue('greatTitle');
 var formDescriptionInput = browser.element('#idea-description');
  formDescriptionInput.setValue('great description');


 assert.equal(formTitleInput.getValue(), 'greatTitle');
 assert.equal(formDescriptionInput.getValue(), 'great description');

 browser.click('#submit-button');

 formTitleInput.setValue('another great Title');
 formDescriptionInput.setValue('another great description');

 assert.equal(formTitleInput.getValue(), 'another great Title');
 assert.equal(formDescriptionInput.getValue(), 'another great description');

 browser.click('#submit-button');

 formTitleInput.setValue('suh');
 formDescriptionInput.setValue('dude');

 browser.click('#submit-button');

 var allIdeas = browser.elements("li").getText()

 assert.equal(allIdeas.length, 3 )

 browser.click('.delete-idea')

 var allIdeas = browser.elements("li").getText()

 assert.equal(allIdeas.length, 2)

})
```

```

$(document).ready(function(){
  $('#submit-button').on('click', formatIdeas);
});

function formatIdeas(){
  var idea = createIdea()
  var button = createButton()
  appendIdeas(idea,button)
  deleteIdea(button,idea)
}

function appendIdeas(idea, button){
  $('.all-ideas').append(idea,button);
}

function deleteIdea(button, idea){
  button.on('click',function(){
    idea.remove();
    this.remove();
  });
}

function createIdea(){
  return $(
        "<li>" + $('#idea-title').val() + "</li>"
        +"<li>" + $('#idea-description').val() + "<br>"

      )
}

function createButton(number) {
  return $('<button class="delete-idea"></button>').text('delete idea');
}

```

Now that we have a delete button lets talk about some of the code we just wrote and why it's kind of important.

closures are an important because what they do is essentially save a variable in memory. As we learned in the past memory is the best place to store something.

What a closure does is it essentially takes what we had set as variables and because they are all stored in memory they are autonomous units. So when I remove an idea from the dom it's able to differentiate itself.
