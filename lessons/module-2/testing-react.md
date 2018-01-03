This lesson goes with [this repo](https://github.com/turingschool-examples/testing-react)

# Testing React

Install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080` to run your application.

To build the static files:

```
npm run build
```

To run tests in Node:

```
npm test
```

---

## By the end of this lesson you should...
* Understand how to navigate the jest docs
* Understand how to navigate the enzyme docs
* Have a good idea of why we test
* Have a good idea of what to test
* Have some understanding of how to test it
* Be super pumped to go test every component in your app

---

## Jest

_Jest is the de facto unit testing framework for ReactJS project. It is provided and used by Facebook._

**Top features are:**

* Automatically finds tests
* Automatically mocks dependencies
* Runs your tests with a fake DOM implementation
* Runs tests in parallel processes

### Installation: 

```
npm install --save-dev jest
```

Just like `chai`, jest uses the `expect` keyword, only with some slight differences. One syntactical difference you'll want to make note of is the simple check that something equals and expected result...

###### Chai:
`expect(something).to.equal(true)`

###### Jest: 
`expect(something).toEqual(true)`

<!-- #### Work time!

check out the [expect documentation](https://facebook.github.io/jest/docs/expect.html#content). Count off 1 thru 6, find your team and spend 10 mins reading up on your assigned method:

1. toBeDefined()
2. toHaveBeenCalled()
3. toHaveLength(number)
4. toEqual()
5. toBe()
6. toBeTruthy() && toBeFalsy() 
 -->
## Enzyme

From the [enzyme](https://github.com/airbnb/enzyme) docs:

_Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output._

_Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal._

_Enzyme is unopinionated regarding which test runner or assertion library you use, and should be compatible with all major test runners and assertion libraries out there. The documentation and examples for enzyme use mocha and chai, but you should be able to extrapolate to your framework of choice._

### What Does This Mean for Us?

Enzyme renders our components and turns them into chunks of HTML. We can interact with this HTML using a jQuery like syntax.

### Installation:

```
npm i --save-dev enzyme
```

###### There are two methods we'll use from enzyme to render our component HTML.

* [shallow](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)
Shallow renders our component's HTML, if our component has child components then it will only render stubs for the child components. It will not render the child components HTML. Because shallow does not render the child components it is much faster and should be used by default.

* [mount](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)
Mount renders our component's HTML, if our component has child components then it will render the child components HTML. It also gives us triggers some of the child components life cycle methods.

For a more detailed look at the differences, check out [this breakdown](https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913)

Let's look at what happens when we use shallow or mount. Consider the following components...

```jsx
// List stateless component
function List (props) {
  return (
    <ul>
      props.data.map( (item) => {
        return <li> item </li>
      } );
    </ul>
  )
}

// App stateful component
class App extends React.Component {
  constructor () {
    super(); 

    this.state = {
      list: [ 'vampire', 'werewolf', 'ghost' ]
    }
  }

  render () {
    return (
      <div>
        <h1>App Title</h1>

        <List data={this.state.list} />
      </div>
    )
  }
}
```

Now let's shallow the App component.

```
// App-test.js
import App from '../lib/App';

describe('App', () => {
  it('should shallow', () => {
    let component = shallow(<App />);

    console.log( component.debug() );
  });

  it('should mount', () => {
    let component = mount(<App />);

    console.log( component.debug() );
  });
});
```

The debug function is a super powerful, useful tool. It shows us the HTML our component renders.

The shallow output of our App component will be the following.

```
// shallow output
<div>
  <h1>App Title</h1>

  <List data={this.state.list} />
</div>
```

The mount output of our App component will be the following. Notice that our List component has been fully rendered inside of our App component.

```
// mounted output
<div>
  <h1>App Title</h1>

  <List data={this.state.list}>
    <ul>
      <li> vampire </li>
      <li> werewolf </li>
      <li> ghost </li>
    </ul>
  </List>
</div>
```


#### Work time!

Enzyme also comes with some methods of its own. Let's spend another 10 minutes researching your assigned method (same groups as before):

1. find()
2. props()
3. instance()
4. children()
5. text()
6. state()

## Why Test? 

If we haven't done a good job of explaining the benefits of testing your code already...maybe [this article](https://daveceddia.com/what-to-test-in-react-app/) will help!

## What to Test?

Everything! Ok, maybe not everything but the goal is to have your app so well tested that you can refactor and feel 100% confident that the desired functionality is covered by tests. This will help you assure that any refactored code is working if your tests pass. 

Some things to consider...

* Does your component render?
* Are props being passed and accepted correctly?
* Does the component manipulate state? 
* Are the correct functions being called? 
* When you add something to the DOM/Virtual DOM, does it show? 
    * When you create another instance of your component, are they rendered correctly? 
    * When you delete an item, is the count updated correctly? 
    
    
## Time to Test!

We will use [this repo](https://github.com/turingschool-examples/testing-react) to work through some tests. This app _should_ look familiar. 

* Clone this repo and `cd` into it
* `git checkout in-class`
* run `npm i`
* open up your text editor and lets work through some tests!

---

Let's spend a few minutes walking through the code base to familiarize ourselves with the layout...

Because jest finds our tests automatically, we don't need to import it. We do however need `React` and `Enzyme`. Let's create the first test file and bring those in:

```
touch app.test.js
```

```
// app.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
```

We'll also need to import our `App` component:

```
import App from '../lib/components/App';
```

Now let's create an easy first test to ensure everything is hooked up and working:

```
describe('App', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

})
```

Now let's look at our app's `render` function, it returns a `Header` and a `ToDontList` component. Let's make sure those exist. We can use the [find](http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html#findselector--shallowwrapper) method to find those components inside of our rendered HTML.

```
// lib/components/App.js

  render() {
    const { toDonts } = this.state;

    return (
      <div>
        <Header toDonts={ toDonts } addToDont={this.addToDont.bind(this)} />

        <ToDontList 
          toDonts={ toDonts }
          updateCard={(card) => this.updateCard(card)}
          deleteCard={(card) => this.deleteCard(card)}
        />

      </div>
    )
  }
```

```
// tests/app.test.js

  it('should render the Header and ToDontList component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('ToDontList').length).toEqual(1)
  })
```

But wait, we've now defined wrapper twice so let's pull that out into a `beforeEach`. Our test file should now look like this:

```
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    
    expect(wrapper).toBeDefined()
  })

  it('should render the Header and ToDontList component', () => {

    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('ToDontList').length).toEqual(1)
  })
})
```

Now that we've tested the basic rendering of our App, let's look into some of the methods of our class. The first called is the `constructor()`, so let's make sure when we first mount our component (and localStorage is empty) that it has a state of `toDonts` set to an empty array. There are a couple tests we could write to accomplish this:

```
it('initially should have a state of toDonts set to an empty array', () => {

    expect(wrapper.state()).toEqual({ toDonts: [] })
    expect(wrapper.state().toDonts).toEqual(expect.arrayContaining([]))
})
```

Next up is our `componentDidMount` which means we'll need to use `mount` (from enzyme). If there is data saved in localStorage under the key `'toDonts'`, this method will call our `getFromLocal` method, pull items from localStorage and set them to 'toDonts' in state. Seems easy enough...

```
it('should retrieve data from local storage on mount', () => {
    const toDonts = [
      {title: 'title', body: 'body', id: 1}, 
      {title: 'title', body: 'body', id: 2}
    ]
    
    localStorage.setItem('toDonts', JSON.stringify(toDonts))

    wrapper = mount(<App />)
    expect(wrapper.state().toDonts).toEqual(toDonts)
 })
```

Ah snap! What's this all about?

``` 
ReferenceError: localStorage is not defined
```

Because we're not dealing with a browser, `localStorage` isn't something our tests know about. This means we will have to do some extra work to mock localStorage for our tests. Jest makes this _somewhat_ easy for us by allowing us to set up some [configurations](http://facebook.github.io/jest/docs/en/configuration.html#content) in our `package.json` before each test. But first, we need to create a fake local storage. Give it a shot!

We'll store this in a test-helpers folder and assign it to a global property called...localStorage!

```
// __test-helpers__/storageMock.js

class LocalStorage {
  constructor() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, string) {
    this.store[key] = string
  }

  clear() {
    this.store = {}
  }
}

global.localStorage = new LocalStorage;
```
Next we need to set up our jest configurations using the [setupFiles](http://facebook.github.io/jest/docs/en/configuration.html#setupfiles-array) option. This will run any code we want before each test.

```
// package.json

"jest": {
    "setupFiles": [
      "./__test-helpers__/storageMock.js"
    ]
  },
```

Our test should now pass!

Now we will continue down the line testing the various methods within our App. Next up is `addToDont` which is the method that updates both state and local storage. Take a crack at writing a test for this! Here is some pseudo code to help you out.

```
// set up an 'it' block (obvi)
// our 'beforeEach' has already created the wrapper
// write a test to check that the wrapper's state of 'toDonts' has a length of 0 
   (or add some and test whatever length is applicable)
// create a toDont...something like { title: 'title', body: 'body', id: 1 }
// call the addToDont() method -- if you run into errors, check out instance() in the shallow docs
// write a test to check that the state of toDonts has increased by 1
// write a test to check that localStorage has the correct count of toDonts

```

Your test should looks something like this:

```

  it('should be able to add a toDont to state', () => {
    expect(wrapper.state().toDonts.length).toEqual(0)

    const toDonts = [
      { title: 'title1', body: 'body1', id: 1 },
      { title: 'title2', body: 'body2', id: 2 }
    ]

    wrapper.setState({ toDonts })

    expect(wrapper.state().toDonts.length).toEqual(2)

    const newToDont = { title: 'title3', body: 'body3', id: 3 }

    wrapper.instance().addToDont(newToDont)

    const itemsInStorage = JSON.parse(localStorage.getItem('toDonts')).length

    expect(wrapper.state().toDonts.length).toEqual(3)
    expect(wrapper.state().toDonts[0]).toEqual(newToDont)
    expect(itemsInStorage).toEqual(3)
  })

```

Now try to write a test for the `updateLocalStorage()` method. Don't look ahead or this disappointed puppy will be even MORE dissapointed in you...

![mad pup](http://i.huffpost.com/gen/3245948/thumbs/n-EARL-THE-GRUMPY-DOG-PUPPY-768x768.jpg)

Here is what your test should look like:

```
it('should update local storage', () => {
    const toDonts = [
      { title: 'title1', body: 'body1', id: 1 },
      { title: 'title2', body: 'body2', id: 2 }
    ]

    wrapper.setState({ toDonts })

    wrapper.instance().updateLocalStorage()

    const itemsInStorage = JSON.parse(localStorage.getItem('toDonts')).length

    expect(itemsInStorage).toEqual(2)
  })
```

Next: `updateCard(card)`

Again...don't upset the puppy!

![angry pup 2](http://doglers.com/wp-content/gallery/cavalier-king-charles-spaniel-1/Angry-puppy-face-cavalier-king-charles-spaniel.jpg)

```
  it('should be able to update a specific card', () => {

    const toDonts = [
      { title: 'title1', body: 'body1', id: 1 },
      { title: 'title2', body: 'body2', id: 2 }
    ]

    wrapper.setState({ toDonts })

    const updatedCard = { title: 'newTitle', body: 'newBody', id: 1}

    wrapper.instance().updateCard(updatedCard)

    expect(wrapper.state().toDonts[0]).toEqual(updatedCard)
  })
  ```
  
  Last one: `deleteCard(card)`
  
  Again, no cheating!
  
  ![angry pup 3](http://www.urdogs.com/wp-content/uploads/2015/03/Came-and-catch-me-if-you-can.jpg)
  
  Here is the test...
  
  ```
  it('should be able to delete a specific card', () => {
    const card1 = { title: 'title1', body: 'body1', id: 1 }
    const card2 = { title: 'title2', body: 'body2', id: 2 }

    const toDonts = [
      card1,
      card2
    ]

    wrapper.setState({ toDonts })

    wrapper.instance().deleteCard(card1)

    let itemsInStorage = JSON.parse(localStorage.getItem('toDonts')).length

    expect(wrapper.state().toDonts[0]).toEqual(card2)
    expect(wrapper.state().toDonts.length).toEqual(1)
    expect(itemsInStorage).toEqual(1)

  })
  ```

We've now tested that App component! 

![happy pup](http://justcuteanimals.com/wp-content/uploads/2016/02/french-bulldog-puppy-cute-dogs-pictures.jpg)

Now let's go look at testing a scenario where we're adding and removing items from the DOM. Let's test the `ToDontList` component next. Let's get the file set up and create an initial test to ensure everything is hooked up correctly.

```
// toDontList.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
import ToDontList from '../lib/components/ToDontList';

describe('toDontList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToDontList />)
  })

  it('should be a thing', () => {
    expect(wrapper).toBeDefined()
  })

})
```

Well butter my buns and call me a buscuit! That didn't work.

```
 TypeError: Cannot read property 'length' of undefined
```

Looks like our component is expecting some props to be passed through, let's give the component what it wants. For now we can just pass an empty array.

```
beforeEach(() => {
  wrapper = shallow(<ToDontList toDonts={ [] } />)
})

```

Sweet Pete's soccer cleats! Passing test. 

Now let's write some tests to ensure that:
* The "add ToDonts" message displays when there are 0 toDonts
* The correct number of `<ToDontCard />` components are on the DOM when they exist in state

Give the first scenario a try and DON'T PISS OFF THE CATS!

![angry cat 1](http://uploads.neatorama.com/images/posts/328/88/88328/1455494723-0.jpg)


The first thing we need to do is find the `<div>` with the message in it. Let's use **.debug()** to look at what we've got.

```
const noToDontMessage = wrapper.find('div')

console.log(noToDontMessage.debug())
```

Here is what our console log shows:

```
<div className="toDont-list">
        <div className="no-todonts-msg">
          Add some Don&#39;ts
        </div>
      </div>
      
      
      <div className="no-todonts-msg">
        Add some Don&#39;ts
      </div>
```

That's awesome that we can take a peak into what we're getting from the wrapper, but we will have a hard time separating between the two divs. Let's be more specific. We could use a different HTML tag...or we could simply look for the class we want:

```
const noToDontMessage = wrapper.find('.no-todonts-msg')

console.log(noToDontMessage.debug())
```

```
 <div className="no-todonts-msg">
        Add some Don&#39;ts
      </div>
```

BOOM! JACKPOT! Now let's write a test to check the message:

```
it('should show message if no toDonts exist', () => {
  const messageDiv = wrapper.find('.no-todonts-msg')

  expect(messageDiv).toBeDefined()
  expect(messageDiv.text()).toEqual("Add some Don'ts")
})
```

Let's try to tackle the second bullet. If we pass through an array with toDonts to the `<ToDontList />` component, we should be able to test that the correct number of `<ToDontCard />` components exist. Give it a shot before you check the answer!

![angry cat 2](http://i.imgur.com/d3BV5DM.jpg)

```
it('should append the correct number of ToDontCard\'s to the DOM', () => {
  const toDonts = [
    {title: 'title1', body: 'body1', id: 1},
    {title: 'title2', body: 'body2', id: 2}
  ]

  wrapper = shallow(<ToDontList toDonts={toDonts}/>)

  expect(wrapper.find('ToDontCard').length).toEqual(2)
})
```

Cool, what are some other tests we could add to really test that this is working? Talk with the person next to you for 5 mins and come up with a couple. Don't read ahead, the cats are watching...

![watching cat](http://www.coverbash.com/wp-content/covers/black-cat.jpg)

Here are a couple I came up with:

```
it('should append the correct number of ToDontCard\'s to the DOM', () => {
    const toDonts = [
      {title: 'title1', body: 'body1', id: 1},
      {title: 'title2', body: 'body2', id: 2}
    ]

    wrapper = shallow(<ToDontList toDonts={toDonts}/>)

    const firstCard = wrapper.find('ToDontCard').first()
    const lastCard = wrapper.find('ToDontCard').last()

    expect(wrapper.find('ToDontCard').length).toEqual(2)
    expect(firstCard.props().toDont.title).toEqual('title1')
    expect(firstCard.props().toDont.body).toEqual('body1')
    expect(lastCard.props().toDont.title).toEqual('title2')
    expect(lastCard.props().toDont.body).toEqual('body2')
  })
```

Oh hells yea! Component tested!

![cat with gun](https://media2.giphy.com/media/bcqAMUTUHoLDy/200_s.gif)

Last thing we'll work on is some functional testing to ensure buttons and other clickable stuff works the way we expect. Let's set up the new file:

```
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/components/Header';

describe('header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should be a thing', () => {
    expect(wrapper).toBeDefined()
  })

})
```

Now for the tricky part. Our goal is to test that when the submit button is clicked, it calls the correct function it's supposed to. To do this, we'll need to do a couple things:
* Stub in a [jest.fn()](http://facebook.github.io/jest/docs/jest-object.html#jestfnimplementation) in place of our actual function
* Find the specific button
* Simulate a click event

The test will look something like this...

```
it('should call submitIdea when button is clicked', () => {
 wrapper.instance().submitIdea = jest.fn()

 const submitButton = wrapper.find('button')

 submitButton.simulate('click')

 expect(wrapper.instance().submitIdea).toHaveBeenCalledTimes(1)
})
```

That's a great test, it assures us that our button executes the correct method. But let's take it a step further. Take a few minutes to review this test and then talk to the person next to you about what is happening.

```
it('should call submitIdea and update state when button is clicked', () => {
 wrapper.instance().submitIdea = jest.fn()

 const titleInput = wrapper.find('input').first()
 const bodyInput = wrapper.find('input').filterWhere(x => x.props().placeholder === 'Body')
 const submitButton = wrapper.find('button')

 titleInput.simulate('change', { target: { value: 'title 1'}})
 bodyInput.simulate('change', { target: { value: 'body 1'}})

 submitButton.simulate('click')

 expect(wrapper.instance().submitIdea).toHaveBeenCalled()
 expect(wrapper.instance().submitIdea).toHaveBeenCalledTimes(1)
})
```

What if we want to dig into the `submitIdea` function and ensure that the props.addToDont gets called within that method...given the infromation you gained above, take 5 minutes to talk to the person next to you about how you might accomplish this.

![thinking dog](http://dy5jipgyozh6.cloudfront.net/wp-content/uploads/2016/11/03202021/dog-thinking1.jpg)

Here is what it might look like...

```
it('should call this.props.toDont and clear state fields', () => {
 const mockFn = jest.fn()
 wrapper = mount(<Header addToDont={ mockFn }/>)

 const titleInput = wrapper.find('input').first()
 const bodyInput = wrapper.find('input').filterWhere(x => x.props().placeholder === 'Body')
 const submitButton = wrapper.find('button')

 titleInput.simulate('change', { target: { value: 'title 1'}})
 bodyInput.simulate('change', { target: { value: 'body 1'}})

 expect(wrapper.state().title).toEqual('title 1')
 expect(wrapper.state().body).toEqual('body 1')

 submitButton.simulate('click')

 expect(wrapper.props().addToDont).toHaveBeenCalled()
 expect(wrapper.state().title).toEqual('')
 expect(wrapper.state().body).toEqual('')
})
```

WOOF, That's it! 

![exhausted animal](https://img.buzzfeed.com/buzzfeed-static/static/2014-11/11/17/enhanced/webdr11/longform-original-32167-1415746043-14.jpg?downsize=715:*&output-format=auto&output-quality=auto)

##### If You Get Errors, Some Things to Think About...
* Do I need to be using `mount` instead of `shallow`?
* Do I need to call something or reference something from the `wrapper.instance()` vs. just the `wrapper`
* Use `console.log(thing.debug())` to see if you're looking at what you intend to
* Is my wrapper/component modified from my last test (make sure you are controlling scope where necessary)
* Do you need to mock a browser-specific method/object (like localStorage)?
* Do you need to mock a function with `jest.fn()`

##### Resources:
* [Jest docs](https://facebook.github.io/jest/)
* [Enzyme docs](https://github.com/airbnb/enzyme)
  * [Shallow docs](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)
  * [Mount docs](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)
* [Difference between Shallow, Mount & Render](https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913)
* [Worthwhile Testing by Dave Ceddia](https://daveceddia.com/what-to-test-in-react-app/)

