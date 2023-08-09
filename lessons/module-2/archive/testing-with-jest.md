---
title: Testing with Jest
tags: javascript, testing, jest, enzyme, react
module: 2
---

### Learning Goals
* Implement tests in React
* Feel comfortable navigating the jest and enzyme docs

## Vocab (from the TDD lesson)

- `TDD` Test Driven Development / Design
- `Four Phase Test` A test that is organized into the phases [Setup, Execution, Assertion, Teardown]
- `Assertion` An expression containing some testable logic
- `Assertion Library` A package of assertion functionality. Usually distinct from a `Testing Framework`
- `Testing Framework` A library that determines how tests are organized and executed
---

## Jest

Jest is the de facto unit testing framework for ReactJS project. It is provided and used by Facebook, and installed by default when using create-react-app.

**Top features are:**

* Automatically finds tests in your codebase
* Automatically mocks React dependencies
* Runs your tests with a fake DOM implementation


## Why Test? 

The main reason to write tests is to ensure that your app works the way it should. Take five minutes to read [this article](https://daveceddia.com/what-to-test-in-react-app/) on what you should consider testing in your React applications.

## What to Test?

Everything! Just kidding. The goal is to have your app so well tested that you can refactor and feel 100% confident that the desired functionality is covered by tests. This will help you assure that any refactored code is working if your tests pass. 

Some things to consider...

* Make sure the component renders.
* Test the output - does it render the correc thing?
* Test the states
* Test the outputs
* Are props being passed and accepted correctly?
* Does the component manipulate state? 
* Are the correct functions being called? 
* When you add something to the DOM/Virtual DOM, does it show? 
    * When you create another instance of your component, are they rendered correctly? 
    * When you delete an item, is the count updated correctly? 
    
 
The best way to check that we are writing tests correctly is to reference the docs. Let's check out the [expect documentation](https://facebook.github.io/jest/docs/expect.html#content) to take a look at some commons methods you may use for your testing React applications:

## Time to Test Our App component!

---

Let's spend a few minutes walking through the code base to familiarize ourselves with the layout...

Because jest finds our tests automatically, we don't need to import it. We do however need `React` and `Enzyme`. Let's create the first test file and bring those in:

```
touch ./src/App.test.js
```

```js
// App.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
```

We'll also need to import our `App` component:

```js
import App from './App';
```

Now let's create an easy first test to ensure everything is hooked up and working:

```js
describe('App', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

})
```

Now let's look at our app's `render` function, it returns a `Header` and a `ToDontList` component. Let's make sure those exist. We can use the [find](http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html#findselector--shallowwrapper) method to find those components inside of our rendered HTML.

```js
// ./App.js

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

```js
// ./App.test.js

  it('should render the Header and ToDontList component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('ToDontList').length).toEqual(1)
  })
```

But wait, we've now defined wrapper twice so let's pull that out into a `beforeEach`. Our test file should now look like this:

```js
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

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

```js
it('initially should have a state of toDonts set to an empty array', () => {

    expect(wrapper.state()).toEqual({ toDonts: [] })
    expect(wrapper.state().toDonts).toEqual(expect.arrayContaining([]))
})
```

Next up is our `componentDidMount` which means we'll need to use `mount` (from enzyme). If there is data saved in localStorage under the key `'toDonts'`, this method will call our `getFromLocal` method, pull items from localStorage and set them to 'toDonts' in state. Seems easy enough...

```js
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

Because we're not dealing with a browser, `localStorage` isn't something our tests know about. This means we will have to do some extra work to mock localStorage for our tests. We can do this by adding some setup configuration to that same `setupTests.js` file we worked with earlier. Let's create a fake local storage:

We'll store this in a test-helpers folder and assign it to a global property called...localStorage!

```js
// ./src/setupTests.js

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


Our test should now pass!


#### Turn and Code

Now we will continue down the line testing the various methods within our App. Next up is `addToDont` which is the method that updates both state and local storage. Take a crack at writing a test for this with a new partner! Here is some pseudo code to help you out.

```
// set up an 'it' block (obvi)
// our 'beforeEach' has already created the wrapper
// Add some toDonts and set them to state
// write a test to check that the wrapper's state of 'toDonts' has a length of whatever is applicable
// create a toDont...something like { title: 'title', body: 'body', id: 1 }
// call the addToDont() method -- if you run into errors, check out instance() in the shallow docs
// write a test to check that the state of toDonts has increased by 1
// write a test to check that localStorage has the correct count of toDonts

```

Your test should look something like this:

```js

  it('should be able to add a toDont to state', () => {
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

Now that you have the hang of this, let's write two more tests in your pair. First, write a test for the `updateLocalStorage()` method. Don't look ahead or this disappointed puppy will be even MORE dissapointed in you...

![mad pup](http://i.huffpost.com/gen/3245948/thumbs/n-EARL-THE-GRUMPY-DOG-PUPPY-768x768.jpg)

Here is what your test should look like:

```js
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

```js
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
  
#### On Your Own 

  Try this last one on you're own: `deleteCard(card)`
  
  Again, no cheating!
  
  ![angry pup 3](http://www.urdogs.com/wp-content/uploads/2015/03/Came-and-catch-me-if-you-can.jpg)
  
  Here is the test...

  ```js
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

![happy pup](https://i.imgflip.com/o593c.jpg)


## Testing our ToDontList component
---

Now let's go look at testing a scenario where we're adding and removing items from the DOM. Let's test the `ToDontList` component next. Let's get the file set up and create an initial test to ensure everything is hooked up correctly.

```js
// toDontList.test.js

import React from 'react';
import { shallow, mount } from 'enzyme';
import ToDontList from './ToDontList';

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

```js
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

```js
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

```js
const noToDontMessage = wrapper.find('.no-todonts-msg')

console.log(noToDontMessage.debug())
```

```
 <div className="no-todonts-msg">
        Add some Don&#39;ts
      </div>
```

BOOM! JACKPOT! Now let's write a test to check the message:

```js
it('should show message if no toDonts exist', () => {
  const messageDiv = wrapper.find('.no-todonts-msg')

  expect(messageDiv).toBeDefined()
  expect(messageDiv.text()).toEqual("Add some Don'ts")
})
```

#### Turn and Code

Now try to tackle the second bullet with a partner. If we pass through an array with toDonts to the `<ToDontList />` component, we should be able to test that the correct number of `<ToDontCard />` components exist. Give it a shot before you check the answer!

![angry cat 2](http://i.imgur.com/d3BV5DM.jpg)

```js
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

Here are a couple more assertions that you might consider:

```js
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

Oh hells yeah! Component tested!

![cat with gun](https://media2.giphy.com/media/bcqAMUTUHoLDy/200_s.gif)

## But what about functional testing???

Last thing we'll work on is some testing to ensure buttons and other clickable stuff is working the way we expect. Let's set up the new file:

```js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

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

First let's test that our state is updating whenever our input values change:

```js
  it('should update state when input values are changed', () => {
   const titleInput = wrapper.find('input').first()
   const bodyInput = wrapper.find('input').filterWhere(x => x.props().placeholder === 'Body')
   const submitButton = wrapper.find('button')

   titleInput.simulate('change', { target: { value: 'title 1'}})
   bodyInput.simulate('change', { target: { value: 'body 1'}})

   expect(wrapper.state().title).toEqual('title 1')
   expect(wrapper.state().body).toEqual('body 1')
  })
```

Now for the tricky part. Our goal is to test that when the submit button is clicked, it calls the correct function it's supposed to. To do this, we'll need to do a couple things:
* Stub in a [jest.fn()](https://jestjs.io/docs/jest-object#jestfnimplementation) in place of our actual function
* Find the specific button
* Simulate a click event

The test will look something like this...

```js
  it('should call submitIdea when button is clicked', () => {
   wrapper.instance().submitIdea = jest.fn()

   const submitButton = wrapper.find('button')

   submitButton.simulate('click')

   expect(wrapper.instance().submitIdea).toHaveBeenCalled()
   expect(wrapper.instance().submitIdea).toHaveBeenCalledTimes(1)
  })
```

That's a great test, it assures us that our button executes the correct method. But let's take it a step further. 


#### Turn and Talk 

What if we want to dig into the `submitIdea` function and ensure that the props.addToDont gets called within that method? Given the infromation you gained above, take 5 minutes to talk to the person next to you about how you might accomplish this.

![thinking dog](http://dy5jipgyozh6.cloudfront.net/wp-content/uploads/2016/11/03202021/dog-thinking1.jpg)

Here is what it might look like...

```js
  it('should call this.props.addToDont and clear state fields when submitIdea is fired', () => {
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
   expect(wrapper.props().addToDont).toHaveBeenCalledTimes(1)
   expect(wrapper.state().title).toEqual('')
   expect(wrapper.state().body).toEqual('')
  })

```





<!-- 

+++++++++++++++++++++++++++++++++++++++++++++++


## Enzyme

From the [enzyme](https://github.com/airbnb/enzyme) docs:

_Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output._

_Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal._

_Enzyme is unopinionated regarding which test runner or assertion library you use, and should be compatible with all major test runners and assertion libraries out there. The documentation and examples for enzyme use mocha and chai, but you should be able to extrapolate to your framework of choice._

### What Does This Mean for Us?

Enzyme renders our components and turns them into chunks of HTML. We can interact with this HTML using a jQuery like syntax.

### Installation:

```
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

We also need to create a setup file to bootstrap our tests. Create the following file `/src/setupTests.js`:


```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

This will get enzyme up and running for us, and also allow us to do any additional setup or configuration we might need later on.


#### Research

Enzyme comes with a lot of helper methods that will allow us to test our components. In your assigned groups, take 10 minutes to research your assigned method. Be ready to present to the class with examples:

1. find()
2. props()
3. instance()
4. children()
5. text()
6. state()


## Shallow vs Mount

In addition to these methods, there are two important ones we'll be using in order to allow Enzyme to actually render our components: `shallow` and `mount`.

* [shallow](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)
Shallow renders our component's HTML, if our component has child components then it will only render stubs for the child components. It will not render the child components HTML. Because shallow does not render the child components it is much faster and *should be used by default.*

* [mount](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)
Mount renders our component's HTML, if our component has child components then it will render the child components HTML. It also gives us triggers some of the components life cycle methods.

Let's look at what happens when we use shallow or mount. Consider the following components...

```js
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

```js
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

#### Turn and Talk

With your partner, descibe the difference between using `shallow` and `mount` by referencing the examples that we discussed above


















 -->