---
title: Testing React
length:
tags: enzyme, jsdom
---
# Testing the difficult.

## context

One of my favorite magazines to read is a mag called ``offscreen``. The more I think about it this was the magazine that actually got me into really considering a career as a software developer. With that being said this magazine basically interviews developers and it walks you through some of the cool things these people are doing. As I began to read through some of these developer's stories I came across one that really put things into perspective for me. I want to read that for you now.  It's from Greg Knauss apprently he went to school in `san diego` to which I say `carne asada bro!`

``Experience has taught me to see my software as a writthing Achilles' heels, a horrific Shoggoth, every line a code of potential disaster. And so I wrap each in a thick, protective layer of negative assumptions, so that when things do go wrong --and they will -- the program can (best case) recover quickly or (worst case) not actually kill anyone.``

So you might be asking why do I test? Well the answer should be because you care. People are going to hire you to do somethings most people can not do. You will be paid money to figure things out and solve problems to most seem impossible.

More importantly program is and will be your craft. Like anyone who is crafting something you should take extreme pride in your work because your name is going on it. So to insure that our work is good, and give ourselves the opportunity to write better code.


## Learning Goals

- Introduce Developers to enzyme and it's 3 major properties.
- Introduce Developers to server side debugging with ``locus``



## Testing is hard.

We are learning so much. Up to this point all we've ever really done is manipulate the dom. We haven't done much with interacting with Server Side code. It seems like everything escalated super quickly. Up to this point we've used frame works like `webdriverio` and `selenium-webdriver` to write feature tests. These feature tests would send selenium to actually go into the dom and and perform commands for us.

In module 1 we were introduced to the bed rock of all of our testing: `unit-tests`. `unit-test` allowed us the ability to not only use these tests to check our constructors, but it also allowed us the opportunity to refactor our code.

### your turn
- take the next 5 minutes discussing the differences between all the testing we've done
- consider your current application. What things do you think need to be tested?

In our case there are so many things we could test. We have our server side interactions with firebase. We have things like Auth(), we things like a database. Coming from the server side world I am used to writing all this functionality. Now if you write functionality there should be a test for that functionality.

Now if we look at `firebase` it's giving us all these things for free. So we could write some feature test to test that out but if we do that it won't be doing to much for us.

One drawback to using selenium in this case is that it is very memory intensive and time intensive. One way we can combat this is to actually look at testing our `react` components.

The code we are actually writing is `react` therefore there is going to be a higher chance of error in something like this. So I propose that we test our props and our components.


## Testing react with Enzyme

Now I know what you're thinking. `How can I test a react component without the dom?`. Well thankful with the help of `mocha, chai, and enzyme` we can actually do this. Our goals for today are to write some unit tests for our react `components` and our `props`. Now this is going to be stretching you a little bit. Before we move on lets talk about what we need to happen for this to work.

#### needs

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
require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom(
  "<head> <meta charset='UTF-8'><title>React In Theory</title></head><body><div id='application'></div>"
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

# Shallow

Shallow basically does the bare minimum. So if we look at what's actually happening all Shallow does is return the base ``HTML`` of the given ``prop``. If there is a ``component`` lying inside of the given ``prop`` it will only return a ``stub`` of the ``prop``.

Now I know what you're thinking. What is a `stub`?

`A stub is a controllable replacement for an Existing Dependency (or collaborator) in the system. By using a stub, you can test your code without dealing with the dependency directly.`

So it'll acknowledge that the thing is there but you can't do much with it. Like you can't ``click`` it or really do anything other than acknowledge it's existence.

# Mount

This is most likely going to be your bread and butter. You'll be using this because it's a ``headless`` browser. When we used ``webdriverio`` and ``selenium`` we were actually launching a browser teseting the functionality of our app.

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


# Render

`Render` feels a lot like `mount` it just takes it a step further. It uses a thing called `cheerio` in the background.

```
Enzyme's render function is used to render react components to static HTML and analyze the resulting HTML structure.

render returns a wrapper very similar to the other renderers in enzyme, mount and shallow; however, render uses a third party HTML parsing and traversal library Cheerio. We believe that Cheerio handles parsing and traversing HTML extremely well, and duplicating this functionality ourselves would be a disservice.

For the purposes of this documentation, we will refer to Cheerio's constructor as CheerioWrapper, which is to say that it is analogous to our ReactWrapper and ShallowWrapper constructors.
```

If anything this will be the closest implementation to the browser.

### Your turn

- Turn to your partner and recap everything we just talked about (whats need for testing and the 3 different flavors of ``enzyme``)
- If you're still a little confused it might be beneficial for you to look at the docs together to see what's going on.

the docs can be found [here](http://airbnb.io/enzyme/docs/api/index.html)


### Code along

If you get lost checkout ``yung-tests`` to get to the completed testing implementation of our project.

so the first thing I want to test is the ``<App/>`` on a base level. And really if we look at ``app`` it's really just rendering the ``likesCounter``


before we do this we have to change a couple things in our code to target the correct buttons. make these changes!

in action button

```
const React = require('react')
const ReactDOM = require('react-dom')

class ActionButton extends React.Component {
  render () {
    return (
      <button className="ActionButton" id={this.props.id} onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}

module.exports = ActionButton
```

inside of likes counter

```
const React = require('react')
const ReactDOM = require('react-dom')
const ActionButton = require('./ActionButton')

class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  addToLikesCount (num) {
debugger
    this.setState( {count: this.state.count += num } )
  }

  render () {
    return (
      <div className="LikesCounter">
        <h3>Likes: {this.state.count}</h3>
        <div className="ActionButtons">
          <ActionButton id="like" text="Like! (+1)" handleClick={this.addToLikesCount.bind(this, 1)} />
          <ActionButton id="dislike" text="Dislike! (-1)" handleClick={this.addToLikesCount.bind(this, -1)} />
        </div>
      </div>
    )
  }
}

module.exports = LikesCounter

```

So now lets actually write some tests!

```
describe('app.jsx renders the likes counter',function(){
  it('should render the application',function(){

    const wrapper = shallow(<App/>)

    expect(wrapper.contains(<LikesCounter initialCount={0} />)).to.be.true
    expect(wrapper.props()).to.deep.equal({ initialCount: 0 })
  })


  it('should have the button text rendered onto the page', function(){
    const wrapper = render(<App/>)
    expect(wrapper.text()).to.contain('Likes: 0Like! (+1)Dislike! (-1)')
  })
})
```

So lets kind of talk about whats going on here. We've written two tests and we're using two different wrappers. In our first test we are using the shallow wrapper. The benefit of doing something like this is that it allows us the ability to stick to one of components without having to be testing our props.

We also see our render wrapper. Render is running our code and is.

Pro tip try running `console.log(wrapper.debug())`


last tests.

```
describe('likes counter',function(){
  it('should have 2 action button props', function(){
    const wrapper = render(<LikesCounter/>)
    expect(wrapper.find('.ActionButton')).to.have.length(2)
  })

  it('should allow me to click the action button', function(){
    const wrapper = mount(<LikesCounter/>)
    wrapper.state().count = 0 // we must do this because this value isn't set initially
    var button = wrapper.find('#like').simulate('click')

    expect(wrapper.state().count).to.equal(1)
  })
})

```
