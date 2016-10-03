---
title: Unit Testing Redux
tags: React, Redux, Testing
---

### FOLLOW UP
Webpack configuration
Testing components
Rewire??

### Unit Testing Redux

Unit tests, as always, aim to modularly test individual pieces of code as thoroughly as possible. In React apps, these targeted chunks of code include classes, functions, components, helper files...etc. Things that you refactor and split up. Unit testing makes your life as a developer easier and makes refactoring possible.  

The goal of unit testing is for each function, after giving your test the expected arguments, do you get back what you expected?

An interesting comment I read in [this blog post](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking) referred to unit testing as "tests written for developers", whereas integration (or acceptance) tests are written for those who can't code.  

In order to test Redux, there are a few things you need to mentally organize. Like with any app, you need a testing framework (like Mocha) as well as an assertion library (like Chai).  

Tests in Redux include Action tests, Reducer tests, Component tests, and any other middleware or additional libraries you may have included (like `ImmutableJS`).

And lastly, but certainly equally important, tell Webpack to stop messing with your shit.

### Big Picture Redux Testing

What kind of things need to be tested in Redux? Let's look at an example in English.

I want to make sure that my `likesReducer` returns an incremented `count` value in my state after receiving the INCREMENT_LIKE event.  

This differs from an integration test which alternatively would make sure that "As a user, when I'm on the home page, and I see `Likes: 0`, and I press the `Like (+1)` button, then I see `Likes: 1`."  

### Action Tests

Actions in Redux are functions that simply return an action object.

Take for example our simple likes actions file.  

```
import { CHANGE_LIKES } from '../constants/likes.js'

export function changeLikes = (num) => {
  return {
    [CHANGE_LIKES]: {
      data: num
    }
  }
}
```

So we know that we want to test our likes action creator, specfically the function `changeLike`. Given a number (let's say positive 1), we expect it to return an object with a key of `CHANGE_LIKES` and data containing the value passed in, `1`.  

Let's set up our test.  
`spec/actions/likes.test.js`  

```
import { CHANGE_LIKES } from '../constants/likes.js'

import * as actionCreator from 'actions/likes'

describe('Action::Like', function(){
  describe('#changeLikes()', function() {
    it('returns action CHANGE_LIKES', function() {
      let action = actionCreator.changeLikes(1)

      expect(action[CHANGE_LIKES]).to.deep.equal({
        data: 1
      })
    })
  })
})

```

### Reducer Tests

Recall that Reducers connect actions to state, returning an updated state based on a given action.

In other words, a reducer receives an action and decides how to change the state based on the behavior defined in the action.

Let's take our Likes reducer.

```
  import * as ActionType from 'actions/likes'

  function likesReducer (state = initialState, action) {
    switch(action.type) {
      case ActionType.CHANGE_LIKES:
        return (...state, state.count + action.data)
      default:
        return state
    }
  }

  export default likesReducer
```

So obviously we are looking to test this `likes reducer`. The behavior that needs to be tested is when our `likes reducer` receives the CHANGE_LIKES action, it will change the state from it's current value, to current value + 1. If it is met with an action type it doesn't know about, it will return the default or existing state.  

Time to set up the test.

```
import likesReducer from 'reducers/likes'
import * as ActionType from 'actions/likes'

describe('Reducer::Likes', function() {
  it('returns 0 as default state', function(){
    let action = { type: 'sandwich '}

    let newState = likesReducer(undefined, {type: 'sandwich'})

    expect(newState).to.deep.equal(0)
  })
})

describe('on CHANGE_LIKES', function() {
  it('returns state + 1 when provided an argument of 1', function() {
    let action = {
      type: ActionType.CHANGE_LIKES,
      data: 1
    }

    let newState = likesReducer(undefined, action)

    expect(newState).to.deep.equal(action.data)
  })
})
```

### Component Tests ????????????

With Redux, it's important to separate your components into two camps: smart and dumb.  

To review, a smart/stateful/container component refers to one that is connected to redux and is aware of/cares about state. A dumb/stateless/presentationsl component is one who's only job is to render stuff which is dictated by incoming props.  

Dumb component testing generally involves mocking and stubbing, and can be thrown into the "Testing React" bucket. For this lesson, we will focus mostly on Smart components that involve the redux `connect` method.

Connect allows components to receive props directly from the redux `store`, rather than having to pass them through parent components. Said props are accessed using the method `mapStateToProps`. Connect is also a beast to try to test, and even [Official Redux Testing Documentation](http://redux.js.org/docs/recipes/WritingTests.html) suggests somewhat ignoring connect and testing the component itself.  

Lets take our LikesCounter component.  
???????




### WEBPACK ISSUES?

???

### Resources

[Comprehensive Blog Post about Unit Testing Redux](https://www.codementor.io/reactjs/tutorial/redux-unit-test-mocha-mocking)  
