---
title: React Router v5
length: 3 hours
tags: React, Router
module: 3
---

## Learning Goals:
* Understand and articulate the need for routing 
* Be able to confidently implement React Router in a project
* Utilize URL params to build dynamic routes 
* Understand how to test components with using React Router 

## Vocab
* `BrowserRouter` A \<Router\> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL
* `Router` The class that \<BrowserRouter\> is extended from
* `Route` Its most basic responsibility is to render some UI when a location matches the route’s path
* `Link` Links provide declarative, accessible navigation around your application
* `NavLink` A special version of the \<Link\> that will add styling attributes to the rendered element when it matches the current URL.
* `Redirect` Rendering a \<Redirect\> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
* `Switch` Renders the first child \<Route\> or \<Redirect\> that matches the location. \<Switch\> is unique in that it renders a route exclusively (only one route wins).
* `match` A match object contains information about how a \<Route path\> matched the URL.

<section class="checks-for-understanding">
## Prework
Before the lesson, complete the [prework](https://gist.github.com/khalidwilliams/aedcaedddc30f598ae14ff86be633360)
</section>
 
## React Router

### Review 
<section class="call-to-action">
### Prework Review
In small groups, discuss the following questions:
1. Why use Router?
2. Describe the high-level process of setting up Router in a project (packages to install, basic component needed)
3. Describe the following components:
- Route
- Redirect
- Link 
- NavLink
- Switch
</section>


### Why Routing?

**Routing** refers to keeping a webpage up to date with the current url, and vice-versa.

Most of the apps you've written so far have been single-page applications. One HTML page whose content is updated through user interactions and JS. These DO NOT use routing.They work fine, but put some limits on the user experience of our applications. 

<section class="answer">
### What are some advantages routing can provide?
- Users can use urls to bookmark pages
- Users can use the back or forward button
- Users can easily share content from a page in the app
</section>

<section class="note">
If you have written a multi-page application, you may have wrestled with Webpack configs in order to get all your pages built successfully. 
</section>

Fortunately, routing with React is easy! We just need to use a library called <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">React Router</a>.

> React Router allows us to conditionally render components based on the current url

### The Code

Rather than tell you about how Router works, we'll work through a series of exercises and examples. 

We'll be using <a href="https://github.com/turingschool-examples/react-router-v5" target="_blank">this repo</a> to solve a series of challenges listed below.

**Installation Instructions**
```bash
git clone https://github.com/turingschool-examples/react-router-v5
cd react-router-v5
npm i
npm start

# open your text editor
```

<section class="note">
### Code Sand Box Template
You're also welcome to use the code sand box template, found <a href="https://codesandbox.io/s/github/turingschool-examples/react-router-v5?file=/src/App/App.js" target="_blank">here</a>.
</section>

The App is not fully put together. It has a series of components that will serve as building blocks of the final component. You won't be building out new components, but you will be editting existing ones. 

### Setting up Router

Before we break out into groups, we'll review how to set up Router as a class. 

<section class="call-to-action">
### Look through the codebase
Get oriented with the application. Check out all the components, try and write a short summary of what each is doing. 
</section>

The `<Home />` component is rendering a welcome message. Right now, nothing but a nav bar is being rendered by the App. Let's use router to render the `<Home />` component as a landing page. 

Remember that React Router conditionally renders components based on the current url. So our goal is to **render the <Home /> component when the user is at the base url**.

<section class="call-to-action"> 
### Setting up Router

To use React Router, we need to wrap any components that will use a React Router-provided-component in some kind of [Router component](https://reacttraining.com/react-router/web/guides/primary-components/routers).

We'll use a [Browser Router](https://reacttraining.com/react-router/web/api/BrowserRouter), since our app will be used in the browser. This Router provides access to the [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). But we won't worry abou those details just yet.

<section class="note">
### Hint
We'll come back to this later in the lesson...
</section>

<section class="answer">
### The first step is importing react router:
```bash
npm install react-router-dom
``` 
</section>

<section class="answer">
### Once you have React Router installed, import your chosen Router.

```javascript
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));
```
</section>

<section class="answer">
### Finally, add a Route for the `Home`  component into your `App`

```javascript
import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import CreatureDetails from '../Creatures/CreatureDetails';
import { Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <a href="/puppies" className="nav">Puppies</a>
          <a href="/sharks" className="nav">Sharks</a>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" render={ Home }/>
      </main>
    );
  }
}
```
We picked `/` for the path in the route becuase it designates that there won't be anything after the URL's domain name. This represents the base url.  

</section>

</section>

---
## Exercise # 1: Render Puppies

Your goal is click on the word Puppies and see a grid of 9 puppies on the DOM. The page should look something like the picture on the lesson plan. ***While you may change components*** as needed, you shouldn't outright delete content from the page to achieve this.

<section class="call-to-action">
### Take 10 minutes in pairs to get the puppies rendering
</section>

<section class="note">
### Hints:
- Use the Creatures component. Formatting and styling is handled for you.
- What additional react-router components should you use? Do any current components need to change?
- How do you pass props into a component rendered by a `<Route />` ?
</section>

<section class="answer">
### Solution
```jsx
/ App.js 

import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Route, NavLink } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" render={() => <Home />}/>
        <Route path="/puppies" render={() => <Creatures name="puppies" data={puppies} />} />
      </main>
    );
  }
}
```
</section>


### Render `exact` matches

Check out what happens when you take the [`exact`](https://reacttraining.com/react-router/web/api/Route/exact-bool) prop out of one of your Routes. Why do you think everything is rendering at `/puppies`?

The `exact` prop can be used to make sure that partial matches of a URL don\'t trigger a render. 

### Render Methods

According to the [docs](https://reacttraining.com/react-router/web/api/Route/route-render-methods), Routes have three possible methods for rendering a component on match:
- `component`
- `render`
- `children`

We recommend to use `render` or `children` -- they work more efficiently when re-rendering components. We'll take a look at some more benefits they provide after the next exercise.

Here's an example of their syntax:
**Component**

```jsx
<Route path='/unicorns' component={ Unicorns } />
```

**Render**

```jsx
<Route path='/unicorns' render={ () => <Unicorns /> }
```
This also allows you to define and pass specific properties to a component dynamically. For example:

```jsx
<Route path='/ideas/:id' render={({ match }) => {
  const idea = ideas.find(idea => idea.id === parseInt(match.params.id));

  if (!idea) {
    return (<div>This idea does not exist! </div>);  
  }
  return <ListItem match={match} {...idea} />

}} />
```

**Children**

```jsx
<Route path='/other-unicorns' children={ () => <Unicorns /> } />
```


---
## Exercise # 2: Rendering Sharks

Get the sharks link working as well! 


<section class="answer">
### Solution
```jsx
// App.js
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import { Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" render={ Home }/>
        <Route path="/puppies" render={() => <Creatures name="puppies" data={puppies} />} />
        <Route path="/sharks" render={() => <Creatures name="sharks" data={sharks} />} />
      </main>
    );
  }
}
```
</section>
---

### Route Props

Let's take a close look at what happens when a Route renders. 

[Route render methods](https://reacttraining.com/react-router/web/api/Route/route-render-methods) all provide access to [route props](https://reacttraining.com/react-router/web/api/Route/route-props), either automatically to the component they render, or via the callback function that the methods take. 

These props include:
- [`history`](https://reacttraining.com/react-router/web/api/history)
- [`location`](https://reacttraining.com/react-router/web/api/location)
- [`match`](https://reacttraining.com/react-router/web/api/match)

```jsx
<Route path='/unicorns' render={ ({ history, location, match }) => <Unicorns /> }
```

history and location are worth looking into on your own, but today we'll focus on `match`.

The `match` gives us information about how and why the application matched. And it allows us to do some pretty cool stuff. 

#### `match.params`
The `params` property of the match prop gives us an object with key value pairs of dynamic url parameters, and any strings that match them. 

For instance, but changing our Puppies Route to this:
```jsx
<Route
          path="/:animal"
          render={({match}) => <Creatures {...match} name="puppies" data={puppies} />}
        />
```

and then navigating to `/puppies`, we can see that the `<Creatures />` component is recieving a `params` props with a value of `{animal: puppies}`

**`params` allows us to define shapes of a url that will cause a match, then access the data from that url in our components**.

This is great for dynamically rendering content based on things in the url, like an id. Let's do that 

## Exercise #3: Dynamic Routing
---

Take a look at the CreatureDetails Component. It takes in all data for a given creature, and displays it on the page. 

**Your Task is to make a route that will dynamically render a CreatureDetails component for a puppy based on its ID**

<section class="note">
Hints:
- Use the CreatureDetails component
- For example the URL `/puppies/1` should render a view just for the puppy with an ID of 1 in the dataset 
- How can you find a one puppy's data in an array based on its id?
</section>

<section class="answer">
### Solution

The new route could look something like this:
```jsx
// App.js
        <Route
          path="/puppies/:id"
          exact
          render={({match}) => {
            const { id } = match.params;
            const creatureToRender = puppies.find(creature => creature.id === parseInt(id));   
            return <CreatureDetails {...creatureToRender} />
          }}
        />
```
</section>

---
## Exercise #4: Unit Testing the App

Uncomment the code blocks inside of the Unit Test portion of `App.test.js`

<section class="call-to-action">
### Take 10 minutes and figure out why the tests are failing. Using the docs, try and make them pass

</section>
<section class="note">
### Hint:
- Think about which libraries this problem deals with. Google carefully... 
</section>

<section class="answer">
### Solution

We need to wrap the App inside of a Router! In the browser, this is handled at the entry point (index.js), but in the tests we're rendering the App on its own. 
Just wrap the App in a router, and you're good to go:

```jsx
// App.test.js
import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  describe("Unit Tests", () => {
    it("Should render the heading", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const heading = getByRole("heading", { name: "Puppies or Sharks" });

      expect(heading).toBeInTheDocument();
    });

    it("Should render a nav", () => {
      const { getByRole } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const navigation = getByRole("navigation");

      expect(navigation).toBeInTheDocument();
    });
  });
});
```
</section>

---

## Exercise #5: Integration Testing the App

Uncomment the code in the Integration Test portion of `App.test.js` 

<section class="call-to-action">
### Take 10 minutes and answer the following:
- What are the tests trying to do?
- Why is one test failing, while the other passes?
- Try and get to the bottom of the error

</section>
<section class="note">
### Hint:
- Once again, flex those Googling muscles. What issue are you seeing? Which library's docs might be helpful?
</section>

<section class="answer">
### Solution
The Router's history is getting out of sync from jest-dom's history. 

We can do one of two things:
1. Create a custom history object and pass it to a Router (NOT a BrowserRouter)
2. Use a [Memory Router](https://reacttraining.com/react-router/web/api/MemoryRouter)

Let's look at both of these solutions.


<section class="answer">
### Option 1: Creating a new history object

For this solution, we have to look into the [history package](https://github.com/ReactTraining/history) from React Training. 

Routers use this package to manage their session history. BrowserRouter creates a history object under the hood, which gets its current location from the browser ([jsdom](https://www.npmjs.com/package/jsdom) in the case of jest's testing environment), and updates the browser history via a few methods that you can [read more about if you're interested](https://github.com/ReactTraining/history/blob/master/docs/Navigation.md).

We can also [create our own history object](https://github.com/ReactTraining/history/blob/master/docs/GettingStarted.md).

However, BrowserRouter CANNOT receive a custom history object, so if we want to make an manipulate our own history, we'll have to wrap our component in a [Router](https://reacttraining.com/react-router/web/api/Router). So we can use that history object to overwrite the Router's default history. This allows us to instantiate a new Router at a specific location (url) of our choosing.

```jsx
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Make a new blank history object
const customHistory = createMemoryHistory();

// Overwrite the history of the Router:
const routerWithCustomHistory = <Router history={customHistory}></Router>
```

So our final solution to the Integration Test could look like this:

```jsx
import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('App', () => {
  describe('Integration Tests', () => {
    it('Should render 9 puppies on click', () => {
      const history = createMemoryHistory();
      const { getByRole, getAllByRole } = render(
        <Router history={history}>
          <App />
        </Router>
      );
      const puppiesLink = getByRole('link', { name: 'Puppies'});
      const welcomeMessage = getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});

      expect(welcomeMessage).toBeInTheDocument();

      fireEvent.click(puppiesLink);

      expect(welcomeMessage).not.toBeInTheDocument();

      const images = getAllByRole('img');

      expect(images).toHaveLength(9);

    });

    it('Should render 9 sharks on click', () => {
      const history = createMemoryHistory();
      const { getByRole, getAllByRole } = render(
        <Router history={history}>
          <App />
        </Router>
      );
      const sharksLink = getByRole('link', { name: 'Sharks'});
      const welcomeMessage = getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});

      expect(welcomeMessage).toBeInTheDocument();

      fireEvent.click(sharksLink);

      expect(welcomeMessage).not.toBeInTheDocument();

      const images = getAllByRole('img');

      expect(images).toHaveLength(9);

    });

  });
});
```

**Note** This techniques comes from [React Testing Library](https://testing-library.com/docs/example-react-router)

</section>

<section class="answer">
### Option 2: Using a MemoryRouter

Alternatively, we can use a different kind of Router that doesn't get information about history from the DOM. 

[MemoryRouter](https://reacttraining.com/react-router/web/api/MemoryRouter) doesn't read or write to the address bar. As such, it's useful for tests and non-browser environments like React Native.

**MemoryRouter WILL NOT WORK IN YOUR BROWSER CODE**

```jsx
import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  describe('Integration Tests', () => {
    it('Should render 9 puppies on click', () => {
      const { getByRole, getAllByRole } = render(<MemoryRouter><App /></MemoryRouter>);
      const puppiesLink = getByRole('link', { name: 'Puppies'});
      const welcomeMessage = getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});

      expect(welcomeMessage).toBeInTheDocument();

      fireEvent.click(puppiesLink);

      expect(welcomeMessage).not.toBeInTheDocument();

      const images = getAllByRole('img');

      expect(images).toHaveLength(9);

    });

    it('Should render 9 sharks on click', () => {
      const { getByRole, getAllByRole } = render(<MemoryRouter><App /></MemoryRouter>);
      const sharksLink = getByRole('link', { name: 'Sharks'});
      const welcomeMessage = getByRole('heading', {name: 'Welcome! Click on the links above to see a variety of creatures'});

      expect(welcomeMessage).toBeInTheDocument();

      fireEvent.click(sharksLink);

      expect(welcomeMessage).not.toBeInTheDocument();

      const images = getAllByRole('img');

      expect(images).toHaveLength(9);

    });

  });
});
```

</section>
</section>

--- 

## Extra Resources:

### Tutorials / Guides:

- [React Training's 13 minute overview of React Router](https://www.youtube.com/watch?v=Mf0Fy8iHp8k&feature=youtu.be)
- [The Hitchhiker's Guide to React Router - learn Router in 20 minutes](https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-a957c6a5aa18/)
- [The Hitchhiker's Guide to React Router - match, location, history](https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-4b12e369d10/)

### Helpful Articles / Docs:

- [Routing and Form Submission](https://tylermcginnis.com/react-router-programmatically-navigate/)
- [Old lesson plan](https://frontend.turing.io/lessons/module-3/react-router-v4.html)
- [React Router Testing Recipe from RTL](https://testing-library.com/docs/example-react-router)
- [Memory Router docs](https://reacttraining.com/react-router/web/api/MemoryRouter)
- [history package docs](https://github.com/ReactTraining/history)

<section class="call-to-action">
### Check out this additional information on some Router Components:

<section class="answer">
### Link

_Provides declarative, accessible navigation around your application._

**Things to know:**

* Link can contain an open and closing tag or be a self-closing tag
* Link takes a `to` attribute as well as an optional `replace` attribute
* `to` tells the app which path to redirect to. This can be a string or an object
* `replace` is a boolean that when `true` will replace the current entry in the history stack instead of adding a new one

```jsx
<Link to='/unicorns' />

<Link to='/unicorns'> Unicorns </Link>
```
</section>
<section class="answer">
### NavLink

_A special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current URL._

It can take the following attributes:

* **activeClassName: string** - defaults to `active`
* activeStyle: object
* exact: bool
* strict: bool
* isActive: func
* location: object

**Read about each of these [here](https://reacttraining.com/react-router/web/api/NavLink)**

```jsx
<NavLink to='/about'>About</NavLink>
```
</section>
<section class="answer">
### Redirect

_Rendering a `<Redirect>` will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do._
More of a nice to know for now. This is something that can be used if the user does something wrong. ie. went to a route they don't have permissions to access.

It can take the following attributes:

* **to: string**
* to: object
* push: bool
* from: string

```jsx
<Redirect to='/not/unicorns' />
```
</section>
<section class="answer">
### Switch

_Renders the **first** child `<Route>` or `<Redirect>` that matches the location. `<Switch>` is unique in that it renders a route **exclusively** (only one route wins). In contrast, every `<Route>` that matches the location renders **inclusively** (more than one route can match and render at a time)_

```jsx
<Switch>
  <Route exact path='/' component={Home} />
  <Route path='/users/add' component={UserAddPage} />
  <Route path='/users' component={UsersPage} />
  <Redirect to='/' />
</Switch>
```

The [docs](https://reacttraining.com/react-router/web/api/Switch) do a great job of quickly showing what Switch is all about.
</section>
</section>

