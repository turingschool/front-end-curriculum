---
title: Testing React
length:
module: 2
tags: enzyme, jsdom, react
---
## Testing is hard.

Up to this point the extent of testing has been unit tests with `mocha` and feature style testing with `selenium-webdriver`. We use our unit tests to make sure that our objects can take in an input and shoot out an output. We used `selenium-webdriver` to 'hook into' our `mocha` testing framework to check and see if our features are working as planned. We dispatch `selenium` it opens up a browser, goes into our application, and checks to see if something is on the dom.

Historically testing UI has been extremely difficult. There are so many different variables to consider when you are on the front-end of development. Since we care about the code we are writing then we should also consider testing our UI. Testing code is crucial for the maintainability of a complex code base.

I get that those reasons may not be enough to persuade you to actually want to start testing. In an article written by the Next Web entitled `11 Ways to screen your front-end developer Candidate` Reason 10 was Testing.

```
10. Have Them Write Unit Tests

Most developers don’t write unit tests, but we insist on them at Hubstaff for all development work. It’s a best practice that’s integral to saving time overall, as it reduces the amount of time we spend fixing issues after doing functional testings.

Since we want our developers to know how to take new features for a test drive, we ask them to show us how well they write front–end tests. It’s an intellectual challenge to write effective tests for front–end behavior, which means that that developers who can do this well understand both the purpose of testing and the relevant behaviors to test.
– Jared Brown, Hubstaff

```

In module 1 we were introduced to the bed rock of all of our testing: `unit-tests`. `unit-test` allowed us the ability to not only use these tests to check our constructors, but it also allowed us the opportunity to refactor our code. Unit-test are extremely foundational and important for us as developers if we are wanting to write good, clean, and refactored code.


## Learning Goals

- Understand what to test in a react application
- Build an understanding of Enzyme’s three testing modes
- Interactions with a user story.
- Introduce developers to server side debugging with locus

### Turn and Talk

Before we move on it might be beneficial for all of us to be on the same page about testing. Discuss the following points with the person sitting next to you in regards to testing. Once you're done we'll reconvene.

- What Unit Tests have you done?
- What was it like to write feature tests with `selenium-webdriver` ?
- Did you hit any snags?
- What were the cons came along with testing the dom with `selenium-webdriver`
- Consider your current application. What kind of tests do you expect to write?

### What about Selenium?

Up to this point we've spent some time utilizing `selenium-webdriver` to test the dom. There are some great things that come along with all of this. Some of the cons that come along with utilizing this technology is that

 - It's memory intensive meaning it takes a long time to run our tests
 - It's not headless meaning we have to utilize an actual instance of the browser in order get an instance of the dom
 - Asynchronous Javascript

### Testing React with Enzyme

If all we really care about is state in our application then the meat of our tests (the more important tests) should really only check to see if our states changed if any sort of event has occurred. Enzyme allows us to hook into our  test runner (in our case that's `mocha`) so it's something that we're pretty familiar with. On top of that if we are looking to get any sort of Dom elements or events we can emulate those events inside of the test framework. Behind the scenes we'll be using `js-dom` which creates an instance of the `dom` for us. What's great is that we can now run our tests pretty quickly.

Whats really interesting is that Enzyme gives us 3 different modes to help us test our React application. You want to look at these as gears on a bike. Just how each gear on a bike has a specific job, purpose, and excels in different circumstance the same applies for each mode provided.

Technically I could ride my bike in the highest gear at all times. I wouldn't have the best time in the world, but it would get the job done. The same could be said about writing tests in enzyme. There might be somethings that would work a lot better in a `shallow` test vs using a `render` function.

With that lets look into the 3 different 'modes' that enzyme offers us. Off the bat it gives us a shallow rendering option, a full dom rendering, and a static rendering option.

# Shallow

Shallow basically does the bare minimum. So if we look at what's actually happening all Shallow does is return the base ``HTML`` of the given ``prop``. If there is a ``component`` lying inside of the given ``prop`` it will only return a ``stub`` of the ``prop``.

Now I know what you're thinking. What is a `stub`?

`A stub is a controllable replacement for an Existing Dependency (or collaborator) in the system. By using a stub, you can test your code without dealing with the dependency directly.`

One thing that is amazing about shallow is it's ability to allow the developer the ability to stick to a single component. If all we really care about is state Shallow offers us the ability to test our functions with little effort.

### Your turn

Look into the following [Shallow methods](http://airbnb.io/enzyme/docs/api/ShallowWrapper/)  `find`, `at`, `simulate`, `contains`, and `state`

Once you've looked at those methods discuss with the person next to you

  - Do the tests look different?
  - What function stuck out to you?
  - Do I foresee myself using a particular function

# Mount

What ``mount`` does is it basically uses ``jsdom`` to render a testable version of the ``dom``
heres the definition from the docs.

``
Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs, or may require the full lifecycle in order to fully test the component (i.e., componentDidMount etc.)

Full DOM rendering requires that a full DOM API be available at the global scope. This means that it must be run in an environment that at least "looks like" a browser environment. If you do not want to run your tests inside of a browser, the recommended approach to using mount is to depend on a library called jsdom which is essentially a headless browser implemented completely in JS.

``

So what's super awesome about this is we can write tests and it kinda feels like we're writing ``jquery``
here's a great example of how you can use ``mount``

```
it('simulates click events', () => {
  const onButtonClick = spy();
  const wrapper = mount(
    <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
    });

```

### Your turn
  - look into the following [mount functions](http://airbnb.io/enzyme/docs/api/mount.html) `get`, `children`,`simulate`
  - Once you've spent time reading the docs discuss with the person next to you
    - What is the difference between Mount and Shallow?
    - was there big difference in syntax?

# Render

`Render` feels a lot like `mount` it just takes it a step further. It uses a thing called `cheerio` in the background.

```
Enzyme's render function is used to render react components to static HTML and analyze the resulting HTML structure.

render returns a wrapper very similar to the other renderers in enzyme, mount and shallow; however, render uses a third party HTML parsing and traversal library Cheerio. We believe that Cheerio handles parsing and traversing HTML extremely well, and duplicating this functionality ourselves would be a disservice.

For the purposes of this documentation, we will refer to Cheerio's constructor as CheerioWrapper, which is to say that it is analogous to our ReactWrapper and ShallowWrapper constructors.
```
If anything this will be the closest implementation to the browser.


#### Needs

- we need a simulated `dom` and `window`
- we need our react components
- we need a test runner and assertion library


## to the codez

we're going to need some stuffs so lets go ahead and install some things into our project.
``npm install --save-dev babel-polyfill``

``npm -i -D react-addons-test-utils``

``npm -i -D mocha``

``npm -i -D chai``

``npm -i -D enzyme``

Now that we have all of this good stuff installed we are going to need to start making some test directories.

so `mocha` is going to explicitly look for a test directory, but more importantly it's going to look for `test` singular. so lets go ahead and make that for us.

Inside of that directory lets make another folder called `helpers`.

Now inside of `helpers` we are going to create a `setup.js` file. Now the stuff that goes inside of this file is strictly to setup our fake `dom` and fake `window`.

I repeat you do not need to know what what every single line in this code is doing. I just need you to be aware of whats actually happening. The moment you focus on this you loose the whole point of the lesson.

```
require('babel-register')({
  presets: ["react", "es2015"]
});
require('babel-polyfill')

global.document = require('jsdom').jsdom(
  "<head><meta charset='UTF-8'><div class='application'></div></head>"
) // the virtual dom this is where our application is rendered.

global.window = document.defaultView // if we have to go to the window (Event bubbling, referencing the window)
global.navigator = window.navigator // if something is paginated this allows us to go from page to page

//global is the window in node
// using globals are pretty bad and thats why you typically don't see this used.

```

Now that we have that set up we need to make sure that whenever we run our tests we are actually running this setup file first. The reason why we need this to be done is because we need to make sure the virtual `dom` is available for us. Ultimately it gives our application a place to mount itself.

they way we do that is.

``mocha --require test/helpers/setup.js``

Now from this point we need to start writing our tests.

so lets going ahead and touch called ``app-test.js`` for our test files.

```
var expect = require('chai').expect
const React  = require('react')
const App =  require('../app/components/App')
const LikesCounter = require('../app/components/LikesCounter')
const ActionButton = require('../app/components/ActionButton')
import { shallow, mount, render } from 'enzyme'

```

Now you might be wondering what the heck those 3 things next to import do. They are essentially the 3 parts of enzyme. For the most part you'll really only be using one of them but if you wanted to you could learn how to use all 3.
You really want to look at those 3 things being imported from ``enzyme`` as gears on a bike.

### Your turn

- Turn to your partner and recap everything we just talked about (whats need for testing and the 3 different flavors of ``enzyme``)

- If you're still a little confused it might be beneficial for you to look at the docs together to see what's going on.

the docs can be found [here](http://airbnb.io/enzyme/docs/api/index.html)


### Code along

It might be beneficial for you to follow along as we write tests. If you would like to see the finish product checkout `enzyme-finished`
