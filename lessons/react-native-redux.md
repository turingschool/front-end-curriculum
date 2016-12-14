---
title: Redux with React Native + ImmutableJS
module: 4
tags: redux, react native, immutable
---

### Goals

By the end of this lesson, you will:

* Know how to implement Redux with React Native
* Understand the value of ImmutableJS
* Know how to implement ImmutableJS data structures within Redux

---

Welcome back my friends to Redux, the state management store you all know and love. We are familiar with how Redux works on the web, but today we are taking it to streetz and in your pockets.

Implementing Redux with React Native has a lot in common with the web. We will have a master data store that is updated with actions, state is then passed to reducers, and finally containers transform data back to props and pass them to your dumb components. Along the way we will see how to pass props to scenes through the navigator and a new way to connect containers to components.

[We are going to follow along with this repo](https://github.com/Alex-Tideman/GitNative). First let's go get our Redux dependencies:

```js
$ npm i --save react-redux redux redux-action
```

Okay where to begin? Let's start with our master container that connects to our Redux store. Our index.android.js and index.ios.js should look like this:

```js

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Main from './app/containers/main';

AppRegistry.registerComponent('GitNative', () => Main);
```

We are registering our app with the Main container. So let's build out that container now. Create a containers directory and add main.js to it.

First order of business is importing our Redux components and creating our store. We will keep it an empty store for now and import our reducers later:

```js
import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();
```

Now let's add the Provider component with our store prop and insert our yet to be built App component. This container now holds our full data store and can pass props to our master App component.

```js
import App from '../components/App';

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
```

I left in all of our React components because the focus of this lesson is on data and managing state, we don't care so much about what we are rendering. Let's take a look the App.js file:

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Search from './Search';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props
    return (
      <Search books={books} />
    )
  }
}
```

In the render you can see we will be expecting a props of books to be passed to us from the Main container. We will build on top of this and add a navigator but for now let's keep it simple. On to the Search component:

```js
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Switch,
  Animated
} from 'react-native'

import Row from './Row'

export default class Search extends Component{
  constructor (props) {
   super(props)
   this.state = {
     searchTerm: null,
     subject: null,
     freeEbook: false,
     orderByNewest: false
   }
 }

 render() {
    return (
      <View style={styles.profile} >
        <TextInput
          style={styles.form}
          placeholder={'Search term'}
          placeholderTextColor={'#1E77E2'}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({searchTerm: text})}
          value={this.state.searchTerm} />
        <TextInput
          style={styles.form}
          placeholder={'Search a subject'}
          placeholderTextColor={'#1E77E2'}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({subject: text})}
          value={this.state.subject} />
        <Switch
          onValueChange={(value) => this.setState({freeEbook: value})}
          style={styles.ebook}
          onTintColor="#74B135"
          thumbTintColor="#1E77E2"
          tintColor="#2b2b2b"
          value={this.state.freeEbook} />
        <Switch
          onValueChange={(value) => this.setState({orderByNewest: value})}
          style={styles.orderByNewest}
          onTintColor="#74B135"
          thumbTintColor="#1E77E2"
          tintColor="#2b2b2b"
          value={this.state.orderByNewest} />
        <Text style={styles.eBookLabel}>Free E-Book</Text>
        <Text style={styles.newestLabel}>Newest</Text>
        <TouchableHighlight
          style={styles.callApiButton}
          underlayColor='#949494'
          disabled={!this.state.searchTerm && !this.state.subject}
          onPress={this._onCallApi.bind(this)}>
          <Text style={styles.apiButtonLabel}>Get Books</Text>
        </TouchableHighlight>
        <ScrollView
          style={styles.scrollView}>
          {[].map(function(book, i) {
            return <Row key={i} book={book} />}
          )}
        </ScrollView>
      </View>
    )
  }

  _onCallApi() {
    const component = this
    const { books, getBooks, dispatch } = this.props
    const {freeEbook, orderByNewest, searchTerm, subject} = this.state
    let searchTerms

    if(subject) {
      searchTerms = `${searchTerm}+subject:${subject}`
    } else {
      searchTerms = `${searchTerm}`
    }

    let API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=20`
    if(freeEbook) {
      API_ENDPOINT = API_ENDPOINT + '&filter=free-ebooks'
    }
    if(orderByNewest) {
      API_ENDPOINT = API_ENDPOINT + '&orderBy=newest'
    }
    fetch(API_ENDPOINT, {
        method: "GET"
        // headers: {
        //   'Authorization': 'Bearer ' + this.props.token.idToken
        // }
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        Alert.alert(
          'Request Successful',
          `We found ${responseJSON.totalItems} books on ${this.state.searchTerm}`,
          [
            {text: 'OK'},
          ]
        )
      })
      .catch((error) => {
        Alert.alert(
          'Request Failed',
          'Please try a different search',
          [
            {text: 'OK'},
          ]
        )
      });
  }
}
```

Lots going on here but really all you need to know is that you can enter search criteria and click get books to make an API call to Google Books. If we fire up the iOS simulator with react-native run-ios and search for something... say 'donkey kong' ... we get ... NOTHING. So useful. This is because the Search component doesn't know about this.props.books yet.

Now the real work begins. Time to set up our actions, reducers and then back to containers. Create actions and reducers directories under the app directory. I like to create a file for all my types of actions:

```js
// In actionTypes.js file under actions directory
export const types = {
  GET_BOOKS: 'GET_BOOKS'
}
```

This is just a handy way to see all of your actions in one place. Now lets create the matching getBooks action function:

```js
// In bookActions.js file under actions directory
import {types} from './actionTypes';

export const actionCreators = {
  getBooks: (data) => {
    return {type: types.GET_BOOKS, data: data}
  }
}
```

This function takes in data (in our case it will be an array) and returns an object with type: 'GET_BOOKS' and data: data. Simple, pure functions at their finest.

Now for the reducer. We will import all of our action types (in our case just the one, but could be lots) and set the initial state of our app with books as an empty array.

For our reducer function, we pass in state (defaulted at initialState if no state is passed in) and an action. Within the reducer we can destructure state to our hearts desire. For now we just care about books. We can also destructure the action to get the type of action and the data passed to the action. From there we check which type of action was called. Based on the type, we can set the new state. In our case our type is 'GET_BOOKS' so we will return the current state (...state) and then set this.state.books equal to the data we passed in. If we don't pass a type or it's a wrong type, we default to just returning the current state. Phewwww...

```js
// In book.js file under reducers directory
import * as types from '../actions/actionTypes';

const initialState = {
  books: []
};

export const reducer = (state = initialState, action) => {
  const { books } = state
  const { type, data } = action

  switch (type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: data
      }
  }

  return state
}
```

To complete the Redux lifecycle, we need a container to turn state into props and pass those props to a component. So let's go ahead and do that. In our containers directory we will add a new file called booksContainer.js. A container is the place to do all of your data manipulation (think Date formatting, calculations based on state, or make your date IMMUTABLE and INVINCIBLE FOREVER... more on this to come). First up in our container we will map our state to props. In our case we simply set the books props to state.books. If you had a container for an individual book you could pass in an id and filter through state.books to find that book. We will also dispatch our getBooks method to allow us to call the getBooks action in our components. Now we can export this container with connect(mapStateToProps, mapDispatchToProps):

```js
import { connect } from 'react-redux'
import { actionCreators } from '../actions/bookActions'

const mapStateToProps = (state) => {
  return { books: state.books }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: (books) => {
       dispatch(actionCreators.getBooks(books))
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
```

You might notice that I'm not importing a component and passing it into connect like so:

```js
import ImportedComponent from '../components/ImportedComponent'

...

/// rest of code ///

export default connect(mapStateToProps, mapDispatchToProps)(ImportedComponent)
```

Why is this? Because I want to share data from this container to multiple components. This frees to you chain together multiple containers to share very specific props set by those containers to any component.

Let's put that container back into our component and add the action to get books.

```js
import booksContainer from '../containers/booksContainer'

// Rest of same code

...


// ScrollView maps over this.props.books instead of []
<ScrollView
  style={styles.scrollView}>
  {this.props.books.map(function(book, i) {
    return <Row key={i} book={book} />}
  )}
</ScrollView>


// Updated _onCallAPI function that dispatches the getBooks action
_onCallApi() {
  const component = this
  const { books, getBooks } = this.props
  const {freeEbook, orderByNewest, searchTerm, subject} = this.state
  let searchTerms

  if(subject) {
    searchTerms = `${searchTerm}+subject:${subject}`
  } else {
    searchTerms = `${searchTerm}`
  }
  let API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=20`
  if(freeEbook) {
    API_ENDPOINT = API_ENDPOINT + '&filter=free-ebooks'
  }
  if(orderByNewest) {
    API_ENDPOINT = API_ENDPOINT + '&orderBy=newest'
  }
  fetch(API_ENDPOINT, {
      method: "GET"
      // headers: {
      //   'Authorization': 'Bearer ' + this.props.token.idToken
      // }
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      getBooks(responseJSON.items)
      Alert.alert(
        'Request Successful',
        `We found ${responseJSON.totalItems} books on ${this.state.searchTerm}`,
        [
          {text: 'OK'},
        ]
      )
    })
    .catch((error) => {
      getBooks([])
      Alert.alert(
        'Request Failed',
        'Please try a different search',
        [
          {text: 'OK'},
        ]
      )
    });
}

// Finally, we wrap the container around the component
export default booksContainer(Search);
```

Magic! If we had more containers and wanted to give Search more props, we could simply wrap those containers around Search like so:

```js
export default booksContainer(
                userContainer(Search)
              )
```

You can now reuse the containers on any component throughout your app to give them exactly what props they need and none that they don't. You also give them access to the actions to update state.

Let's create that userContainer with matching actions and reducers...

```js
// First we add our action type in actions/actionTypes.js
export const types = {
  GET_BOOKS: 'GET_BOOKS',
  GET_USER: 'GET_USER'
}

// Next up is the action. This is in the userActions.js file. It's just like our books action.
import {types} from './actionTypes';

export const actionCreators = {
  getUser: (data) => {
    return {type: types.GET_USER, data: data}
  }
}

// Reducer in reducers/user.js
import * as types from '../actions/actionTypes';

const initialState = {
  user: {}
};

const user = (state = initialState, action) => {
  const { user } = state
  const { type, data } = action

  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        user: data
      }
  }

  return state
}

export default user

// Container is containers/userContainer.js
import { connect } from 'react-redux'
import { actionCreators } from '../actions/userActions'

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
       dispatch(actionCreators.getUser(user))
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
```
Now that we have multiple reducers, we need to combine them before we pass them to our store. I created an index.js file in reducers that does just that:

```js
import { combineReducers } from 'redux'
import books from './book'
import user from './user'

const reducers = combineReducers({
  books,
  user
})

export default reducers
```

Now we can import reducers in our containers/main.js file where we create the store:

```js
import reducers from '../reducers/index'

const store = createStore(reducers);
```

Now we can use our getUser action when we successfully login with auth0 to set our user information in state.

Once we are logged in, we can use our userContainer on any component to grab the user info. An example of this is in the Search component for the search placeholder.

## Immutable data

[![immutable talk](http://img.youtube.com/vi/I7IdS-PbEgI/0.jpg)](http://www.youtube.com/watch?v=I7IdS-PbEgI "Lee Byron's React.js Conf 2015")


To add immutable to your project:

```js
$ npm i immutable --save
```

You can use immutable data structures in your reducer to set state. Then you pass the immutable to your container and components and can transform it back to plain old JS with .toJS():

```js
// Import the whole library
import Immutable from 'immutable'
// Or import just what you need.
// Map === JS Object and List === JS Array
import { Map, List } from 'immutable'
import * as types from '../actions/actionTypes';

const initialState = {
  books: []
};

const books = (state = initialState, action) => {
  const { books } = state
  const { type, data } = action

  switch (type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: Immutable.Lit(data)
      }
  }
  return state
}

export default books

/// In our component

render() {
  this.props.books.toJS() // back to array
}
```
