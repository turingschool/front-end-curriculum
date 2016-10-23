---
title: Testing React: Stubs/Spies/Mocks
length: 180 minutes
module: 2
tags: react, testing, enzyme, stub, spy, mock
---

# Testing React: Stubs & Spies

## Repository

[Lesson Repository](https://github.com/turingschool-examples/react-testing-with-stubs)

## Goals

By the end of this lesson, you will know/be able to:

* Understand where stubbing & spying fit into your tech stack in React
* Understand where Sinon can help us write simple tests
* Understand how breaking down components can help us avoid using Sinon

## RoadMap

##### Hard Things About Testing React
  - Lecture: 5 mins
  - Your Turn: 10 mins

#### Alphabet Soup: Why Is It So Hard to Google React Testing?
  - Intro: 5 mins
  - Jasmine vs. Mocha vs. Jest vs. Enzyme: 10 mins
  - Our Testing Stack: 5 mins
  - Your Turn: 15 mins

#### Basic Usage: Sinon Tests
  - Code Lecture: 10 mins
  - Your Turn: 10 mins

#### Let's Get More Complicated, Quickly: Hitting an External API
  - Code Lecture: 10 mins
  - Testing Approaches: The 'Easy' Way
    - Code Along: 20 mins
    - Your Turn: 10 mins
  - Testing Approaches: The 'Hard' Way
    - Code Along: 10 mins
    - Your Turn: 10 mins

#### TakeAways
  - Short Discussion: 5 mins
  - (Optional) Code Along with Application.js

# Hard Things About Testing React

There are times that we do complicated things with React. For example:

- Write to localStorage
- Hit an external API
- Post to Firebase
- Respond differently based on time of day

Testing a React component that does any of these things is in direct conflict with these rules of testing.

- A test suite should be able to run without an internet connection
- A test suite should run as quickly as possible so that you can run it frequently during your development process
- A test suite should NEVER hit or share the same storage resources as your production users
- A test suite should have the same outcome no matter what time of day, or number of times you run it (i.e. no intermittant failures)

We can solve these tricky problems in React (and in other libraries/languages) by using concepts called ***mocking***, ***stubbing*** and ***spying***

For the rest of this lesson - we'll focus on how to implement these solutions in React. Check out the additional resources to learn about mocking, stubbing and spying in JavaScript testing in general.

### Additional Resources: 

[Testing JavaScript in General with Mocks, Stubs and Spies](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/testing_javascript-mocks_and_stubs.markdown)

### Your Turn

- Take the next ***10 minutes*** and re-read the JavaScript Testing Lesson above.
  - Don't code along with the examples, just read the overview. We'll work through examples in React later on today.
- (Try to) answer the following questions
  - What is the difference between a mock, stub and spy?
  - When have you used these techniques already?

# Alphabet Soup: Why Is It So Hard to Google React Testing?

How many times have you been looking up example repositories and blog posts to try and figure out how to do something in JavaScript?

Let's say you google 'testing localStorage in React'

You find some stackoverflow answers, some blog posts, a few npm packages.

The first example you click looks great, until you get to '...and we're testing this using Karma, Jest and Istanbul'

Everything else about the scenario is correct, they're using React, they're storing info in localStorage... but you have no idea what Karma, Jest and Istanbul are, other than names of Power Ranger villains. It's hard to use the blog post to help yourself understand the concept because the tech stack seems wildly different.

One of the most difficult parts of learning how to test in JavaScript is the fact that there are 14 different ways to do basically anything.

So let's spend some time talking about the tech stack we will use in this lesson - and what the other options are....

## Jasmine vs. Mocha vs. Jest vs. Enzyme

If you've done an [exercism exercise](http://exercism.io/languages/javascript/installing), you've used a spec framework called [Jasmine](http://github.com/pivotal/jasmine) (or actually more specifically [jasmine-node](https://github.com/mhevery/jasmine-node)). Jasmine included a test runner (the thing that finds your test files and runs them) AND an assertion library (the thing that lets you say things like `expect(something)to.eq(somethingElse)`) AND some other bells and whistles.

When you wrote tests for [GameTime](http://frontend.turing.io/projects/game-time.html), or for our [data structures sessions](https://github.com/turingschool/data_structures_and_algorithms/blob/master/linked_lists/javascript/linkedList_test.js) you used a test runner called [MochaJS](https://mochajs.org/) and an assertion library called [ChaiJS](http://chaijs.com/).

The problems you were solving were relatively simple. Well not the problems, but the set up. You had vanilla JS, maybe some jQuery, a little bit of putting things on the DOM... 

The main difficulty in testing front-end applications is the nature of some of the advanced things that frameworks and libraries do for us. For example, React has a virtual DOM. Components have state, receive props, they have an entire life cycle. It's complicated stuff, and we want to try and make our tests simple.

So it's not enough to just use Mocha + Chai or Jasmine

** We Want a Specialized Testing Tool for React **

The two major React testing tools right now are [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest).

[Jest](https://facebook.github.io/jest) is created by Facebook and is actively in development. Anecdotally, it sort of sucked for a while and now is really wonderful. It also has a lot of features. For that reason, it is great to use but NOT great to learn with. We teach Mocha instead of Jasmine because mocha is light weight... and we'll teach Enzyme instead of Jest for the same reason.

[Enzyme](https://github.com/airbnb/enzyme) is created by AirBnB. It is a `JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.`

The lessons you learn in using Enzyme will translate to Jest - of if you started working in Angular and used their Angular testing tool called [Protractor](https://angular.github.io/protractor) and when someone creates a new framework called American Black Bear... and etc etc etc... 

Enzyme is lightweight, so we will use some of our familiar testing tools in this lesson - we'll use Mocha to run things and Chai to make our assertions.

Finally, we want to bring in a library to help us create mocks/stubs and spies easily. From the earlier reading, we know that Sinon can help us with that. So we'll bring that in as well.

## Our Testing Stack

- Webpack: To manage the entire process
- Babel: To translate our ES6 to ES5
- Mocha: To run our tests
- Chai: To give us an assertion syntax
- Enzyme: To give us special React testing ammenities
- Sinon: To give us stubbing/spying/mocking ammenities

You will see many different tech stacks as you google things - but this is our tech stack, and I happen to like it very much. 

### Additional Resources: 

- [Testing React with Enzyme](http://frontend.turing.io/lessons/testing-react.html)
- [Jest](https://facebook.github.io/jest)

### Your Turn

- Take the next ***10 minutes*** and review the Additional Resources list above: JavaScript Testing with Enzyme Lesson and the front page of the Jest website.
  - ***Don't code along with the examples***, just read the overview. We'll work through examples in React later on today.
- (Try to) answer the following questions
  - What does it seem like the difference is between Jest and Enzyme for you?
  - Does anything in the Enzyme lesson make more sense, or less sense, since the last time you read it?

# Basic Usage: Sinon Tests

We are actually introduced to sinon in the very first example in the [Enzyme Docs](https://github.com/airbnb/enzyme#shallow-rendering)

They demonstrate basic usage of `shallow rendering` using the following example:

```javascript
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyComponent from './MyComponent';
import Foo from './Foo';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
```

It's the last test that we want to focus on. 

- `const onButtonClick = sinon.spy();` 
  - Here we create a spy, using sinon, to represent our callback function
- `const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);`
  - We set up our Foo component with shallow rendering
  - We pass an onButtonClick prop to the Foo component, with our spy as the callback function
- `wrapper.find('button').simulate('click');`
  - We find the button in our Foo component, and simulate a click action
- `expect(onButtonClick).to.have.property('callCount', 1);`
  - We assert that if we ask our spy callback function if it was called, it will have been called once

This represents a very standard use case for how we can use a `Spy`.

In the documentation for [Enzyme's API on Mount](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md) we see another use case for using Sinon.

```javascript
  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
```

- `sinon.spy(Foo.prototype, 'componentDidMount');` 
  - Here we create a spy, using sinon, but unlike the last example
    - We spy on the Foo.prototype (not Foo itself)
    - We spy specifically on the 'componentDidMount' function
- `const wrapper = mount(<Foo />);`
  - We mount our Foo component
  - Notice that we don't pass any props in this instance
- `expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);`
  - We assert that if we ask our spy on Foo.prototype if componentDidMount was called once, it will be true

### Your Turn

- Take the next ***10 minutes*** to read over the code and think about the following questions
  - How else could we accomplish the goal of the first test, 'it simulates click events', without sinon?
  - Why would it be important that the callback function `onButtonClick` was passed to the prop?
  - Why would one use shallow instead of mount? 
    - Hint: Read the [first section](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md) of the shallow anzyme docs for a clue as to why.


# Let's Get More Complicated, Quickly: Hitting an External API

Let's say we have a component called `Org.jsx`

That component hits Github's API and it asks Github for information about the `turingschool` organization.

Then, it loads the name and a link to each public repo in the `turingschool` account.

Let's look at the code here:

```javascript
// Org.jsx

import React, { Component } from 'react'
const $ = require('jquery');

import RepoCard from './RepoCard'

export default class Org extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'turingschool',
      source: 'https://api.github.com/orgs/turingschool/repos',
      data: []
    }
  }

  componentDidMount() {
    this.serverRequest = $.get(this.state.source, function(result){
      this.setState({data: result})
    }.bind(this))
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        Repos owned by {this.state.name}
        {this.state.data
          .map((repo, index) => (
            <RepoCard key={index} {...repo} />
          ))
        }
      </div>
    )
  }
}
```

Walking through the code quickly:

In the constructor, we set data to an empty array

```javascript
  this.state = {
    name: 'turingschool',
    source: 'https://api.github.com/orgs/turingschool/repos',
    data: []
  }
```

So that in the render function, when we call `this.state.data.map` - we simply won't render any repo cards until the ajax call is completed.

When the component did mount:

```javascript
  componentDidMount() {
    this.serverRequest = $.get(this.state.source, function(result){
      this.setState({data: result})
    }.bind(this))
  }
```

We make an ajax call to our source link (hardcoded right now) and we overwrite the data array in state to be the payload from the ajax call.

When we use `this.setState` - it triggers the components 'render' function

Which means that we map through each piece of data from the API to render a component representing a repo

```javascript
  render() {
    return (
      <div>
        Repos owned by {this.state.name}
        {this.state.data
          .map((repo, index) => (
            <RepoCard key={index} {...repo} />
          ))
        }
      </div>
    )
  }
```

The api endpoint is [here](https://api.github.com/orgs/turingschool/repos)

And it is an array of objects - so when we call `<RepoCard key={index} {...repo} />` - what we are doing is saying:

- Create a React component
- Set the key prop to the index
- And then make props for each key in the repo object - so we can use 'em all

## Testing Approaches

In order to test this component - we have to struggle with the fact that it has an API call.

We can handle the API call in the tests the easy way or the hard way.

1. We can allow the component to take in test data
2. We can hijack ajax itself to return test data

## The 'Easy' Way

In my opinion, this is the best way to test this component. This is just my opinion.

** We can change our code to use stub data OR fire an ajax call **

In this version of the `componentDidMount()` - we check to see if a prop called orgData was included when the component was created.

```javascript
  componentDidMount() {
    if(!this.props.orgData) {
      this.serverRequest = $.get(this.state.source, function(result){
        this.setState({data: result})
      }.bind(this))
    } else {
      this.setState({data: this.props.orgData})
    }
  }
```

If no prop of orgData was submitted, we do our ajax call

Otherwise, we use that prop.

This code is a little messy - we could refactor it in a few ways

```javascript
  componentDidMount() {
    if (this.props.orgData) { return this.setState({data: this.props.orgData}) }
    this.serverRequest = $.get(this.state.source, function(result){
      this.setState({data: result})
    }.bind(this))
  }
```

In this implementation - if we find an orgData prop - we use a `return` to exiting the function before we run the ajax call

We could go even further by splitting out the ajax call

```javascript
  componentDidMount() {
    if (this.props.orgData) { return this.setState({data: this.props.orgData}) }
    this.getOrgData()
  }

  getOrgData(){
    this.serverRequest = $.get(this.state.source, function(result){
      this.setState({data: result})
    }.bind(this))
  }
```

Now we can set up a test using fake data.

In our test folder - we can create a file called `Org.spec.js`

```javascript
import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import Org from '../lib/components/Org'
import RepoCard from '../lib/components/RepoCard'

describe('<Org />', () => {
  it('should render the org name', () => {
    const wrapper = shallow(<Org />)
    expect(wrapper.contains('turingschool')).to.be.true
  })

  context('testing ajax calls - the easy way', () => {
    it('should repoCard components for organizational data', () => {
      let orgData = [{name: 'curriculum', html_url: 'www.google.com'}, {name: 'fred', html_url: 'www.fred.com'}]
      const wrapper = mount(<Org orgData={orgData} />)
      expect(wrapper.find(RepoCard).length).to.equal(2)
    }) 
  })
})

```

Walking through this test code - we have one simple test - just checking to see if basic information shows up on the page without the API.

Then we have a longer test.

`let orgData = [{name: 'curriculum', html_url: 'www.google.com'}, {name: 'fred', html_url: 'www.fred.com'}]`

Here we create some fake api data

`const wrapper = mount(<Org orgData={orgData} />)`

Here we `mount` a component (remember that our juicy code happens in the componentDidMount section - so we need `mount` and not `shallow`)

We then pass a prop called `orgData`

`expect(wrapper.find(RepoCard).length).to.equal(2)`

Here we check to make sure that we have two RepoCard components displayed (the same number as objects in our fake data)

### Your Turn

- Take the next ***10 minutes*** to read over the code and the tests. 
  - If a line of code is confusing
    - try commenting it out and breaking it
    - or using locus to put a debugger in that section of the code (instructions on using locus in the project README if you need them)

## The 'Hard' Way

If we don't want to change our code - we have another option. We can use Sinon to create a fake server that will jump in the way of the ajax call and give our fake data away.

Pros: We don't have to change our Org.js code
Cons: We have to configure Sinon correctly to make this work with jsdom - which is scary

Let's start with our test file - let's add a test that uses Sinon's FakeServer abilities.

Add the following code to the `Org.spec.js` file, below the last context you created

```javascript
  context('testing ajax calls - the hard way', () => {
    let server;
    
    before(() => {
      let orgData = [{name: 'curriculum', html_url: 'www.google.com'}, {name: 'fred', html_url: 'www.fred.com'}]
      server = sinon.fakeServer.create()
      var response = [200, {'Content-type': 'application/json'}, JSON.stringify(orgData)];
      server.respondWith('GET', 'https://api.github.com/orgs/turingschool/repos', response)
    })

    after(() => {
      server.restore();
    });

    it('should successfully make an ajax call when component mounts', () => {
      const wrapper = mount(<Org />)
      server.respond()
      expect(wrapper.find(RepoCard).length).to.equal(2)
    })
  })

```

Walking through this code:

`let server;`

In the context, we set aside a variable for server

```javascript
    before(() => {
      // ...
    })
```

This block will run before every test

```javascript
    before(() => {
      let orgData = [{name: 'curriculum', html_url: 'www.google.com'}, {name: 'fred', html_url: 'www.fred.com'}]
      server = sinon.fakeServer.create()
      var response = [200, {'Content-type': 'application/json'}, JSON.stringify(orgData)];
      server.respondWith('GET', 'https://api.github.com/orgs/turingschool/repos', response)
    })
```

We use sinon to create a fake server.

Then we create a fake response - with a 200 status code, a type of `application/json` and finally, a JSON response with ur stubbed data in it

Then we tell our server to respond to any GET request that looks like our hardcoded api call with our response

```javascript
    after(() => {
      server.restore();
    });
```

After every test, we clean up our Sinon

```javascript
    it('should successfully make an ajax call when component mounts', () => {
      const wrapper = mount(<Org />)
      server.respond()
      expect(wrapper.find(RepoCard).length).to.equal(2)
    })
```

Then we mount the component - tell the server to respond - and write our original assertion from the 'easy way' test

Whew...

Now if you run this test, you'll get an error about the tests not knowing what sinon is.

If this were a normal testing situation, you would simply add an import statement to the file to bring Sinon in.

But - that won't work here.

The reason is complicated(ish) but basically this ** in order to create a fake server that puts itself in the way of an ajax call - we need to add it jsdom on test set up **

So to make this test work, we need to add the following lines to our `test/helpers/setup.js` file
```

global.XMLHttpRequest = global.window.XMLHttpRequest;

global.sinon = require('sinon');
global.sinon.useFakeXMLHttpRequest();

global.window.XMLHttpRequest = global.XMLHttpRequest;
global.$ = require('jquery')(global.window);
```

If you want to read more about it - [check out this issue](https://github.com/sinonjs/sinon/issues/657)

If you add those lines, the tests should just magically run.

### Your Turn

- Take the next ***10 minutes*** to read over the code and the tests. 
  - If you have errors popping up - try to check out the completed branch of the repo
  - Think about the two different approaches to testing - is the 'hard' way inherently harder or just harder to configure?
  - Which approach would you be more likely to use?

# Takeaways

- Sinon (or any other mocking/stubbing/spying library) is not magic, it's just code
- Using Sinon is hardly ever the only solution to testing something
- Seperating into smaller components and being able to control component inputs makes testing easier
  - By proxy, it usually makes life a little easier

## Small Code Along (time permitting)

- Let's take a look at Application.js and see what we can do to refactor it!

## Additional Resources

- Blog: [Testing React Components with Enzyme and Mocha](https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha)