---
title: React Router 4 ThoughtBox
module: 3
tags: react react-router javascript create-react-app
---

## React Router

  Today we will be working off this [repo](https://github.com/turingschool-examples/react-router4). This repo was created using `create-react-app`.

  Clone it down and `npm install`

  Start your server by using `npm start`

### Goals

By the end of this lesson, you should be able to implement:

* React Router 4
  * BrowserRouter
  * Route
  * Link / NavLink

### Structure
By the end of today’s lesson, you should have a better idea of what React Router is, why it’s useful, and how to implement it into a React app.


  * Today we will start by going over the main React Router components and how to implement them in our small React App.

  * Then you will complete the application with a partner.

  * Last but not least you will show off what you did!

  <!-- After we have completed the application we will checkout a new branch called `redux-router`

  We will then work together to set up `Redux's Provider` with `Router` -->


### Why Routing?

First lets ask ourselves why do we want routing? If we've been making kick-butt SPA(Single-Page-Applications), why would we need a route?

A simple answer is that we want to have a road map for our users. There's two major things a user can't do in our apps so far.

* A user can't bookmark a specific part/view of our applications.
* A user can't utilize the back and forward buttons on the browser.

So those are two major UX flaws! Great news! We're here to fix them by learning React Router... but is there any other option?

There is!.. If you hate yourself you could hand roll everything! It would look something like this:

```javascript
import React from 'react'
import { render } from 'react-dom'

const About = React.createClass({/*...*/})
const Inbox = React.createClass({/*...*/})
const Home = React.createClass({/*...*/})

const App = React.createClass({
  getInitialState() {
    return {
      route: window.location.pathname.substr(1)
    }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.pathname.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
})

render(<App />, document.body)
```

Yikes! How about instead we learn React Router!


### React Router

So, React Router creates a road map for users to navigate. The URL path designates what you should see once you arrive. Based on that road map, what view/components do you expect your user to see and what information does it contain?

NutShell: React Router helps keep the UI in sync with the URL by having components associated with routes (at any nested level)


#### Router
There are multiple different types of Routers you can use. Keep in mind that each routes have these two things in common:
* The `Router` will contain all `Routes` inside.
* A single JSX element must be returned from it.

The most common one you will use is `<BrowserRouter>`. Things to know about `BrowserRouter`:
* BrowserRouter uses HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.



```javascript
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          Yay
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

```
This will allow `Router` to be available to the rest of the components. Note that `BrowserRouter` has attributes you can utilize. Take a look for yourself to see if you'd need them. [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)

Lets go ahead and throw this in our Idea & Thought Box application.

#### Route

`Route` is what you'll use the most. The `Route` component will match it's path with the URL and display the correct component.

`Route`'s attributes:

* `path` attribute takes a string and will render it's component when any valid URL is given to it. ex: `<Route path='/home' />`
* `exact` attribute receives a boolean that will only render the component if the pathway matches exactly.
* `component` attribute will render a single component given to it. ex: `<Route path='/home' component={Home} />`
* `render` attribute takes a callback and must return a single JSX element.

``` javascript
  render() {
    return(
      <BrowserRouter>
        <div className='app'>

          <Router path='/home' render={({match}) => {
            return (
              <div>
                {match.path.split('/')[1]}
                Home Page!
              </div>
            );
          }}

        </div>
      </BrowserRouter>
    );
  }

```

Without some sort of flux or redux we will still need to pass down props to our child components. The `render` attribute allows us to do just that.

In our application we need a submitForm to be passed down to `<CreateIdea submitForm={...}/>`
Here's how we're going to do it:
```javascript
return (
  <Router>
    <div className='App'>
      <div className='App-header'>
        <div className='App-title'>Idea & Thought Box</div>
        <NavBar />
      </div>
      <Route path='/' component={Home} />

      // we create the path
      <Route path='/create-idea' render={({ match }) =>
      // call render which takes a callback and return our component
      // with any props we'll need.
        <CreateItem submitForm={this.submitIdea.bind(this)}/>
      } />


    </div>
  </Router>
);
```
This allows us to pass props down just like we would to any other child component.

Note: there are a couple more `route` attributes you might want to know about. You can read more about them [here](https://reacttraining.com/react-router/web/api/Route).

Now that we can create an idea lets go ahead and display them using `render`:

```javascript
<Route exact path='/ideas' render={({ match }) =>
  <div className='list'>
    {this.state.ideas.map((idea) => <ListItem key={idea.id} match={match} {...idea}/>)}
  </div>
} />
```

This is great! We've displayed all of the things.. When we are on the correct route. So lets make a `<Navbar/>` component that will link us to each page.

#### Link & NavLink
`Link` & `NavLink` is pretty simple to implement. Things to know:
* Open and closing tags ex: `<Link>Home</Link>`
* `to` attribute takes a string or an object and references the `route` path you'd like to go to,  ex: `<Link to='/home'>`

The main difference is that `NavLink` has attributes for being active: `activeClassName` & `activeStyle`.
* `activeClassName` takes a string that references a CSS class name. This will add styling to the link when the URL matches the `to` path.

Considering this is a `NavBar` lets go ahead and use `NavLink`.


```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/create-idea' activeClassName='selected'>Create Idea</NavLink>
      <NavLink to='/ideas' activeClassName='selected'>All Ideas</NavLink>
    </div>
  );
}

```

Now what if we want each Idea to have it's own link? Currently we would need to know each Idea's ID and create a `route` for each one! That sounds expensive. So lets talk about dynamic routing.

Consider this example:
* `<Route path='/ideas/1'>`
This ideally will take us to the idea with an ID of 1

Similarly,

* `<Route path='/ideas/2'>`
Takes us to the idea with an ID of 2

So dynamic routing for this route will look like this:
* `<Route path='/ideas/:id'>`
This will take in anything after 'ideas' and accept it as a route. So we might want to validate that it's correct.

Here's what that might look like:

```javascript
<Route path='/ideas/:id' render={({ match }) => {
  const idea = ideas.find((idea) => idea.id === parseInt(match.params.id));
  if (idea) {
    return <ListItem match={match} {...idea} />;
  }
  return (<div>This idea does not exist! </div>);
  // note that React Router also has a <Redirect> component.
  //Read more here: https://reacttraining.com/react-router/web/api/Redirect
}} />

```
Notice we used match.params.id to grab the id from the URL.
match.params[whatever] will always reference the dynamic name: `path='/ideas/:id'`

The Links to get here would look something like this:
```javascript
<Link to={`/ideas/${id}`}><h1>{title}</h1></Link>
```

So now we should have finished the Idea portion of the Idea & Thought Box application.

#### Your turn!

Find a partner and implement ThoughtBox Portion.

Things to implement:

* Route for creating thoughts
* Route for displaying thoughts
* Route for individual thought
* Link to creating thoughts (NavBar)
* Link to displaying thoughts
* Link for individual thought page

#### Show and tell time!
  This is the part that you show us what you did!

#### Review
  * Why do we want routing for our application?
  * When do you use BrowserRouter?
  * What is Route?
    * What main attributes does Route have?
  * What is the difference between Link and NavLink?
  * What are NavLinks main attributes?


### Slides

* [Link to slides](https://docs.google.com/presentation/d/1JlPtY66qDYEuDrzyWyThgldeUdh7s8e9uJlwk4waURk/edit?usp=sharing)
