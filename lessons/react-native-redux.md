---
title: Redux with React Native + ImmutableJS
module: 4
status: draft
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
