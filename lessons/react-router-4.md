---
title: React Router 4
module: 3
tags: react react-router javascript create-react-app
---

By the end of today's lesson, you should have a better idea of what React Router is, why it's useful, and how to implement it into a React app.  

The lesson stems from the understanding that you have (most likely) tinkered with React Router in the past and are familiar with React and ES6 modules.  

We will be working off of this [react-router practice repo](https://github.com/martensonbj/react-router-revisited), and talking about the newest version of React Router 4.

### What Is A Router?

From a user's perspective, routing is how you tell your browser what webpage you would like to visit and the path designates what you should see once you arrive. Like a road map. Each framework we work with handles routing in different ways, but ultimately they all share the same goal. Based on that road map, what view do you expect your user to see and what information does it contain?

Let's take a look at an example url:   
`localhost:3000/ideas/1`  

What is this telling us about where we are in our app?  

### What is React Router?  

React Router is the go-to routing library for building React apps built by Michael Jackson (hah) and Ryan Florence. They wanted a way to load routes as they needed them, to fetch data as needed, to incorporate routing with redux and hot module reloading, and they wanted to improve on the mess that was React Router <v4 that apparently nobody (including the React team) liked all that much.   

[Dan Abramov Has Thoughts](https://twitter.com/dan_abramov/status/776096318351634433)  

In React Router 4, the team essentially removed the Routes and the complicated behind the scenes logic, and moved the emphasis to be on React itself. This turns the routing language you're working with into actual React components that behave like...React Components.  

The building blocks you'll be playing with are `components`, `location`, `<Match>`, and `<Link>` with additional tools baked in. As with the rest of React, everything is a component. This might sound obvious, but that's not how things worked before version 4.0. It's worth mentioning once again that React Router is not PART of React, although it was designed to work seamlessly with this particular framework.  

React router in essence simply shows or hides components based on what page your user has visited.  

Location within react-router is where your user is trying to go. If you take a second on any webpage and type `window.location` into the console, this is where the concept of a router is manipulating.  

Take a moment to type `window.location` in the console of any browser page.  

### Why not just hand roll a route?  

From [the docs](https://github.com/ReactTraining/react-router/blob/master/docs/Introduction.md), here is an example of building a router without help.

```js
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

Yuck mouth. It's doable, but not super fun. React Router makes your job easier.

### Implementing React-Router

Let's look at a few examples of code snippets.  

At the top of the file where you define your router component you'll need at least a few components to help you build out a Router element.

```js
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return (
    <BrowserRouter>
      <Match exactly pattern="/" component={App}/>
    </BrowserRouter>
  )
}
```

For those of you familiar with older versions of React Router, this looks similar to the following:  

```js
import { Router, Route, hashHistory } from 'react-router'

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  )
}

```

Check it out! So we are creating a `<BrowserRender>` *component* that has within it a `<Match />` component. `<Match>` is saying "Hey, if the user visits a pathname that matches the following pattern EXACTLY, here's the component I want you to render". In this case, if our user visits the root directory, `'/'`, it will render the `<App />` component.  

Look at the following example of a small router component and let's briefly talk about the pieces. We will dive into these more in depth after a quick code along.   

```js
const Root = () => {
  return (
    <BrowserRouter>
      <div className="router">
        <Match exactly pattern="/" component={App} />
        <Match pattern="/about/:name" component={DynamicAboutPage} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}
```

**Pro Tip:** Like all components in React, `<BrowserRouter>` can only "return" one element, which is why in the example above it's necessary to wrap our React Router componets in a neat little `<div>` tag.

#### BrowserRouter

One of the cool parts about this setup is that once we wrap our components in our `<BrowserRouter>` tag, it becomes the parent of everything within it (similar to `<Provider>` in Redux.), and it can pass down routing information to child components. In other words, we can access React Router and all of its magic through any component that is a child of this element.    

This guy also keeps your app in sync with the browser history for free - no more of that `history={history}` hooplah.  

Let's go through the pieces you'll see most often with React Router 4.0.  

#### Match  

Renders a particular chunk of code when a given pattern matches the location in your URL. Behind the scenes, it uses the [`path-to-regexp`](https://www.npmjs.com/package/path-to-regexp) module.  

```js
<Match pattern="/" exactly component={App} />
```

Note the `exactly` boolean. In this case, the pattern will only be matched if it EXACTLY matches the given string. You don't always want a perfect match, like in the following example.  

```js
<Match pattern="/about/:userId" component={DynamicAboutPageAboutUser} />
```

This will match any route that includes `/about` followed by something else...anything else. This allows us to also pass in a dynamic argument that will be handed down to our component, like a user_id etc.  

We will look at further magic sent to components after our code-along.  

#### Miss

When there is no match for the provided location or pattern, `<Miss />` will render. Simply specify what component (or jsx) you wish to render.  

```js
const App = () => (
  <Router>
    <Match pattern="/" component={Welcome}/>
    <Match pattern="/users" component={AllUsers}/>
    <Miss component={NoMatch}/>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>Nothing matched {location.pathname}.</div>
)

```

#### Link

Needless to say, your user won't be navigating around your app exclusively via the browser URL bar. We need to handle where a user gets sent when a link is clicked within the app. This is where `<Link />` comes in. It renders as an `<a></a>` tag and provides a relative `href` to the `to=` parameter.

```js
<Link to="/about" activeClassName="active">
  About
</Link>
```

Notice that (like Ember) you get an activeClassName for free as well that will automatically applied to active links.  

#### Redirect

Rendering a `Redirect` component will navigate to a new location while putting the previous location in browser history. Check out the option of putting JSX directly into your render function here.   

```js
<Match exactly pattern="/"
  render={() => (
    loggedIn ? (
      <Redirect to="/dashboard"/>
    ) : (
      <PublicHomePage/>
    )
  )}
/>
```

### MemoryRouter  

Keeps the history of your url in memory as if you were on a browser - helpful for when you're working on an app that doesn't have a browser (like with React-Native).


### Code Along

Let's put together a quick example of how this would work in context. If you haven't already, clone down [this example repo](https://github.com/martensonbj/react-router-revisited). It is already set up from the `create-react-app` boilerplate, run `npm install` and `npm start`. For best practice purposes, **create a new branch to mess around with**.  

#### Install Dependencies  

Our repo comes with everything set up for React out of the box. But remember that react-router isn't necessary to build an app in React, it's a completely third-party entity that happens to make routing really nice.  We need to install those dependencies now.  

`npm i -S react-router@next`  

We are installing the newest version of React-Router 4, but as of now it has not been released as the default version so as of writing this lesson the version you will get is `react-router@4.0.0-alpha.6`.

Take a moment to dig into the react dev tools and see what your app gives you out of the box before we start rewiring our components.  

Right now we only have an App component that renders the line "React Router Revisited" along with the rest of the React boilerplate code and some questionable style choices.  The code we will start digging into is located in `src/index.js`. It starts out looking like this:  

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

```

We need to do some rewiring to tell our components to behave according to our new Router dependencies. Update your file to look like this:  

```js
import React from 'react';
import { render } from 'react-dom'

import App from './App';
import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))
```

Let's break down what we changed. The second line reduces what we are pulling from `react-dom` to just be the `{render}` method. This is cool because we don't need the entire `react-dom` library right now.  

Then skip down a couple lines to where we are pulling in our `react-redux` dependencies. You'll recognize these terms from earlier in the lesson. This gives us access to the components that will do all of our `react-router` magic. Previous versions of `react-router` had slightly different dependencies that worked the same way: `{ Router, Route, Link }`.  

Next we redefine our component to be functional component called Root. It returns a `<BrowserRouter />` component. This component will listen to any url changes and make the location available to other components.  

Let's add a few more `<Match />` components that render different stuff based on the url, make sure to also include the appropriate `import` lines at the top as well.  

```js
...
import About from './About'
import Contact from './Contact'
...
<BrowserRouter>
  <div>
    <Match exactly pattern="/" component={App} />
    <Match pattern="/about" component={About} />
    <Match pattern="/contact" component={Contact} />
  </div>
</BrowserRouter>
...
```

These components don't exist yet, so create some files and rock some copy paste action to fill them in (if you don't feel comfortable writing React components yet I recommend you code these out by hand).

`About.js`  

```js
import React from 'react';

const About = () => {
  return (
    <div className="About">
      <h2>About This App</h2>
    </div>
  );
}

export default About;
```

`Contact.js`  

```js
import React from 'react';

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Page</h2>
    </div>
  );
}

export default Contact;
```

While we're at it, let's update our `App.js` to be a functional component as well.

`App.js`  

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Router Revisited</h2>
        </div>

      </div>
    );
}

export default App;
```

Visit `/about` or `/contact` and see what happens.  

What about if you visit `/sandwich`? What component are we MISSing in our router?  

Let's create a default component that will render if a user reaches a page that doesn't match any of our expected routes. Add the following line into your `<BrowserRouter>` component in `index.js`.  

```js
<Miss component={NotFound} />
```

What are we missing? Make the necessary component (make sure you add `className="NotFound"`), put whatever you want in its render function, and don't forget to import the component into `index.js`.  

#### Navigation

So this is all great if your user only visits new pages through the URL, but that's unrealistic. We need a way to transition between pages using the navigation links and href.  This is where the `<Link />` component comes in.  

Start by updating your `index.js` file then create a `Navigation.js` file.

```js
// src/index.js
...
import Navigation from './Navigation'
...
<BrowserRouter>
  <div>
    <Navigation />
    <Match exactly pattern="/" component={App} />
    <Match exactly pattern="/about" component={About} />
    <Match exactly pattern="/contact" component={Contact} />
    <Miss component={NoMatch} />
  </div>
</BrowserRouter>
...
```

`Navigation.js`  

```js
import React from 'react';

const Navigation = () => {
    return (
      <div className="Navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}

export default Navigation;
```

As of right now our nav component renders a bunch of `<li>` elements. Hook up our `{ Link }` component from `react-router` and specify the routes we want to link to.  

```js
import React from 'react';
import { Link } from 'react-router'

const Navigation = () => {
    return (
      <div className="Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
}

export default Navigation;
```

### URL Parameters

So far wiring up routes and components seems relatively straightforward, but there is a lot of magic behind the scenes that we can take advantage of. Because of our `<BrowserRouter />` parent component, our nested components get a set of props for free that we can use to our advantage. Let's take a look.  

Visit `/about` and pop open your React dev tools. You should see a few interesting things. As of now, we have not explicitly given this component any immediate props, however we can see through the dev tools that we are set up with quite a few. What do these mean? Let's revisit some of the tools we get from our Router module.

### BrowserRouter

The parent component of your Router. We can pass router information down through components because of this component. We will look into how to use `context` to do this shortly.  

Note that you can set the `basename` of your app here. For example, if your app is served from the `/lessons` directory, you can set the `basename` within this element to eliminate having to specify that path in every href.

```js
<BrowserRouter basename="/lessons" />

<Link to="/react-router" />
// This will now route to "/lessons/react-router"
```

#### Match

Recall that Match checks out the current URL and matches it to the route specified in the component, like this:   

`<Match exactly pattern="/about" component={About} />`  

The `component` parameter provides a particular component to render when the location is a match, and sends through some props for free.  
- `pattern`: string - the part that matched the pattern (ie `/ideas/1`)  
- `pathname`: string - the part that matched the pathname  
- `isExact`: boolean - whether or not it was required to match exactly  
- `location`: the location pulled from the url  
- `params`: the additional information given by the URL (like the particular idea's id)  

Change one of your `<Match>` components to take in a dynamic second path. For example, `<Match pattern="/about/:id" component={About} />`. Now visit `/about/sandwich`. What do you see in `props.params`? What about `pathname` vs `pattern`?

There are additional params you can send through with `<Match />` that do some cool stuff, like [animation or fade-in/fade-out](https://react-router.now.sh/animated-transitions) behavior.  

#### Miss

Note that unlike all the props components get through `Match`, the only info passed into this component will be `location`.  

#### Link

Let's go back to our `<Link />` component.  

```js
<Link to="/">Home</Link>
```

The HTML rendered with this markup will look like your expected `<a href... /></a>` business, but because we're working with React we get some fun bonus powers out of the box. Dig into your dev tools to compare notes.  

```js
<Link
  to="/about"
  style={{ color: 'blue', background: 'black' }}
  activeStyle={{ color: 'red' }}
>
  About
</Link>
```  

One of the things we can do with Links is add some default style or classes to indicate if the link is active.

The code snippet above specifies that the link by default will always be blue with a gray background, but when the path matches it's `to` parameter, it will know to switch to it's `activeStyle` rules with a text color of red.  Try this out on one of the navigation links.

Similarly, we can specify which class gets applied to a link when it's set to active.  

```js
<Link
  to="/about"
  className="ideas-link"
  activeClassName="active"
>
  About
</Link>
```

Check out [the docs](https://react-router.now.sh/Link) to dig into how you can make your life easier with this API.  

#### Context  

Let's say we're on a specific page, and there's an input that says "enter next page here". Then when we submit the form, we want to be taken to the page we entered into the input field.  

In order to access our Router functions in other files, we need to "surface" the router. Like we mentioned earlier, because we have our components wrapped in the `<BrowserRouter />` tag, we have this information ready to go behind the scenes.  

In React, we are familiar with the concepts of `props` and `state`, but there is this third level of information called `context` that acts as a middle ground. This middle man has access to certain pieces of what the parent component knows about without having to explicitly pass down that information.  

It's like a secret backdoor.  

**[STOP AND READ THIS](https://facebook.github.io/react/docs/context.html#why-not-to-use-context)**  

*Ok...But...YOLO*

Let's go back to our example and set up a component to demonstrate. Remove the dynamic pathname we added to the   `<Match>` component that sends a user to `About` (this line of code is located in `index.js`. Then, jump back into your `About.js` component and replace the code with the following:

```js
// src/About.js

import React from 'react';

export default class About extends React.Component {

  goToDestination(e) {
    // Code goes here to transition to a given page.
  }

  render () {
    return (
      <div className="About">
        <h2>About Page</h2>

        <form>
          <input  type="text"
                  placeholder="Destination"
          />
          <button onClick={(e) => this.goToDestination(e)}>
            Transition To Destination
          </button>
        </form>
      </div>
    )
  }
}
```

We've made the component back into a React class, and added a bit of functionality. Take a look at what your component can see as props at this time...nothing shocking there.  

Now let's access our fancy middleman `context`. Add this below your component:  

```js
About.contextTypes = {
  router: React.PropTypes.object
}
```

Look back at the dev tools. Now we have access to our secret backdoor, which because of the `<BrowserRouter />` parent component we have this thing called `router`. It has access to the methods `react-router` gives us, like `transitionTo`, which seems logical to move to a given page. Make sure you've selected the `<About>` component and try out `$r.context` in the console.

What happens if you type `$r.context.router.transitionTo('/')` ?

So let's use this to our advantage and pull in the information from our form to redirect our page. Notice we're adding code to both the `goToDestination` function as well as the `input` field.

```js
goToDestination(e) {
  e.preventDefault()
  const destination = this.formInput.value.toLowerCase()
  console.log("stored input value: " + destination)
  this.context.router.transitionTo(`/about/${destination}`)
}

render () {
  return (
    <div className="About">
      <p>About Page</p>

      <form>
        <input  type="text"
                placeholder="Destination"
                ref={(input) => { this.formInput = input }}
        />
        <button onClick={(e) => this.goToDestination(e)}>
          Transition To Destination
        </button>
      </form>
    </div>
  )
}
}
```

Add a destination and check out the URL! Notice that we're still technically seeing the `<About>` component - this is because we don't tell the `<Match>` component to be exact. Make that change and see what happens.  

YOUR TURN!  

Wire up a new `<Match />` component in `index.js` that takes in a dynamic parameter and displays whatever that new parameter is on the page. (Hint: If you give the component `className="Destination"` there is some CSS wired up for you. )

### Resources
- [Read The Conversation At The End Of This NPM Article](https://www.npmjs.com/package/react-router4)  
- [Watch This Video](https://www.youtube.com/watch?v=Vur2dAFZ4GE)  
- [React Router 4 Docs](https://react-router.now.sh)  
- [React Router 4 Examples](https://github.com/ReactTraining/react-router/tree/master/examples)
- [Using Context and React Router](https://facebook.github.io/react/docs/context.html#parent-child-coupling)  
- [Upgrading to React Router 4](http://rants.broonix.ca/upgrading-to-react-router-v4/)
