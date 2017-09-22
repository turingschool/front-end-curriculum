This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React Router (v.4)

### By the end of this lesson you should...
* Understand what routing is
* Be able to implement React Router
* Know what each of these things are:
    * BrowserRouter
    * Route
    * Link / NavLink
    
### Why Routing?

Up until now you've been creating single page applications that conditionally render based on a boolean in state. Something along the lines of...

```
class SomeComponent extends Component {
  constructor() {
     super()
     this.state = {
         showWelcome: false
     }
  }
  
  render() {
     return (
         { this.state.showWelcome && <Welcome /> }
     )
  }
}
```

This works...but as our applications grow larger and we seek to render more components, these conditinal toggles can become difficult to manage. 

Enter [React Router](https://reacttraining.com/react-router/web/guides/philosophy)

**From the Docs**

React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering

**In a nutshell...**

React Router allows us to:

* Define which component(s) are rendering based on the URL pathname.
* Bookmark specific page/view within our application
* Utilize the `back` and `forward` buttons in our browser

### Router

There are many high-level routers that come with the `react-router-dom` module:

* `<BrowserRouter>`
* `<HashRouter>`
* `<MemoryRouter>`
* `<NativeRouter>`
* `<StaticRouter>`

We will be focusing on **`BrowserRouter`** which is _A Router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL._

Ultimately it will allow our users to bookmark specific paths and utilize their forward/back buttons. 

There are a few more tools we get with React Router that are important to know about:

### Route
The Route component is a key piece of React Router. Its most basic responsibility is to render some UI when a location matches the route’s path.
 
There are 3 ways to render something with a Route:
* `<Route component>`
* `<Route render>`
* `<Route children>`

Let's say we have a `Unicorns` component, here is what it would look like in each of these instances:

**Component**

```
<Route path='/unicorns' component={ Unicorns } />
```

**Render**

```
<Route path='/unicorns' render={ () => <Unicorns /> }
```
This also allows you to define and pass specific properties to a component dynamically. For example:

```
<Route path='/ideas/:id' render={({ match }) => {
  const idea = ideas.find(idea => idea.id === parseInt(match.params.id));
  
  if (idea) {
    return <ListItem match={match} {...idea} />;
  }
  
  return (<div>This idea does not exist! </div>);
}} />
```

Render differs slightly from Component, let's check out the [docs](https://reacttraining.com/react-router/web/api/Route/component) to see what they say about it.

**Children**

```
<Route path='/other-unicorns children={ () => <Unicorns /> } />
```
It works exactly like render except that it gets called whether there is a match or not.

**Component > Render > Children**

`Component` supercedes `Render` which supercedes `Children` so be sure to only include one within a route.

### Route Props

All three of these are rendered with [route props](https://reacttraining.com/react-router/web/api/Route/Route-props), which include: 

* [match](https://reacttraining.com/react-router/web/api/match)
* [location](https://reacttraining.com/react-router/web/api/location)
* [history](https://reacttraining.com/react-router/web/api/history)

**Take 10 minutes to read about these**

---

### Link

_Provides declarative, accessible navigation around your application._

**Things to know:**

* Link can contain an open and closing tag or be a self-closing tag
* Link takes a `to` attribute as well as an optional `replace` attribute
* `to` tells the app which path to redirect to. This can be a string or an object
* `replace` is a boolean that when `true` will replace the current entry in the history stack instead of adding a new one

```
<Link to='/unicorns' />

<Link to='/unicorns'> Unicorns </Link>
```

---

### NavLink

_A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL._

It can take the following attributes:

* activeClassName: string
* activeStyle: object
* exact: bool
* strict: bool
* isActive: func
* location: object

**Read about each of these [here](https://reacttraining.com/react-router/web/api/NavLink)**

```
<NavLink to="/about">About</NavLink>
```

---

### Redirect

_Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do._

It can take the following attributes:

* to: string
* to: object
* push: bool
* from: string

```
<Redirect to="/not/unicorns"/>
```

---

### Switch

_Renders the **first** child <Route> or <Redirect> that matches the location. `<Switch>` is unique in that it renders a route **exclusively**. In contrast, every <Route> that matches the location renders **inclusively**_

```
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```

The [docs](https://reacttraining.com/react-router/web/api/Switch) do a great job of quickly showing what Switch is all about.

---

# Time to Code!

Enough talk, let's implement React Router!

* Clone this repo and `cd` into it
* checkout the `in-class` branch
* npm i
* open your text editor

---

This application will provide us with a `Main` landing page as well as 3 routes to pages containing:
* Unicorns
* Puppies
* Sharks

Additionally we will add a dynamic route to dig deeper into a specific creatures cards.

First let's install `react-router-dom`

```
npm i -S react-router-dom
```

Next let's go import it and wrap it around our main entry point `App`:

```
//index.js

import { BrowserRouter } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

```

Next we will go to our `App.js` file and begin constructing the routes for our application. We'll need to import some additional pieces from the library.

```
//App.js

import { Route, NavLink, Link } from 'react-router-dom'
```

Now let's build a header to persist on all views. We will use `NavLink` so we can take advantage of the `activeClassName` attribute. 

_**It comes with a default class of `.active` so we can either use that without defining it, or define a new name.**_

```
export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className='header-section'>
          <header>
            <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
            <NavLink to='/puppies' className='nav'> Puppies </NavLink>
            <NavLink to='/sharks' className='nav'> Sharks </NavLink>
          </header>
        </div>
      </div>
    );
  }
}
```

If you click on these links now, you should see the URL change to the routes we told each NavLink to route `to`. 

Next we need to define a `Home` route for when users first arrive to the app (or when the `path='/'`). For now we'll just do a basic welcome message:

```
//Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h4>Click on the links above to see a variety of creatures</h4>
    </div>
  )
}

export default Home;
```

Now let's define the route:

```
//App.js

<Route path='/' component={Home} />
```

### Your Turn!

Next we need to define those routes and tell it which components to render. Take 10 mintues and see if you can get the `/unicorns` Route working by displaying `<h1> Unicorns! </h1>`.

_hint: You'll probably need to create a new component to render when on the `/unicorns` route_

![unicorn](http://www.chickensmoothie.com/oekaki/image/image.php?id=410567&size=large&format=auto&rev=1302806499)

Here's how we can do it using the `component` render method on a `Route`:

```
//App.js

<Route path='/unicorns' component={Unicorns} />
```

At this point clicking a header link (NavLink) should change the URL and render the component associated with that Route...however, we're still seeing the `Home` component above, what's with that?

This is where we need to use the `exact` attribute on a `Route`

```
//App.js

<Route exact path='/' component={Home} />
```

What we're saying by adding this attribute is that only when the path is **EXACT**ly `'/'` do we want to render the `Home` component.

Now that we have routes defined, and a template of a component, let's get something more fun displaying. Go to your `Unicorns` component and replace what you have with this code:

```
//Unicorns.js

import React from 'react';
import './image-display.css';
import unicornData from './data/unicorn-data'

const Unicorns = () => {

  const displayUnicorns = unicornData.map((unicorn, i) => <img src={unicorn.image} className='app-img' key={unicorn.type + i}/>)

  return (
    <div className='image-display'>
      <h1>Unicorns!</h1>
      {displayUnicorns}
    </div>
  )
}

export default Unicorns;
```

We should now be able to see a bunch of unicorns displaying on the page!

### Your Turn!

Take some time to mimic these steps for `Puppies` and `Sharks` so that each respective route shows images of their respective creatures.

**A few things to keep in mind:**

* Each component will share classNames and need the `image-display.css` file
* Each component will need their respective data:
	* `unicorn-data.js`
	* `puppy-data.js`
	* `shark-data.js`

![whaaaat?!](https://i.imgflip.com/160nr0.jpg)

**Let's recap where we're at:**

* We have defined four Routes:
	* `/` 
	* `/unicorns`
	* `/puppies`
	* `/sharks`
* Each route renders a different component
* The `Home` route requires an `exact` attribute because all of the routes contain `/`

Hopefully this seems pretty straight forward so far, but what if we want to go a level deeper? When a user clicks on an image, we want to send them to a new view where they can see information specific to _that_ creature only. This is where we get into **dynamic routing**.

### Dynamic Routing

Currently we have 9 creatures per component and we want to be able to link to a specific view for **each creature**. One way we could do this is to create a route for each creature...something like:

```
<Route to='/unicorns/1' />
<Route to='/unicorns/2' />
<Route to='/unicorns/3' />
<Route to='/unicorns/4' />
...
```

This would be incredibly inefficient. Instead, we can use the `render` attribute within our `Route` to dynamically match the id of the URL with the matching ID within our data. 

To signify a dynamic route, you simply add a colon in front of the parameter you're dynamically changing. 

```
path='/unicorns/:id'
```

Let's focus just on unicorns for now. Here are the steps we're working through:

1. A user clicks a specific image
2. We `Link` to a dynamic route where the end of the URL matches the ID of that specific unicorn
3. Based on the ID in the URL, we pass through data specific to that matching unicorn

So, if our first unicorn's data looks like this:
	
```
{ 
  id: 1, 
  name: 'Chuck', 
  image: img1, 
  type: 'unicorns', 
  bio: bio1 
}
``` 
	
We want to redirect to `/unicorns/1`

Then, we want to define a `Route` that looks at the parameter in the URL and passes the specific matching data into something we can render.

Let's poke the bear a little bit. Paste this route into your `App.js` file:

```
//App.js

<Route path='/unicorns/:id' render={({ match }) => {
	console.log(match)
	      
	return (
		<div>
			New Unicorn Route!
		</div>
	)
}} />
```

Now visit this URL and open up your console:

```
http://localhost:3000/unicorns/1
```

First thing we should see is that all of our unicorns are still showing, why do you think this is? 

It's because we didn't specify the `exact` attribute in our `/unicorns` route, so that route sees the URL is `/unicorns/1`, considers it a match and renders any components that match. Let's fix this for all three components:

```App.js
<Route exact path='/unicorns' component={Unicorns} />
<Route exact path='/sharks' component={Sharks} />
<Route exact path='/puppies' component={Puppies} />
```

Ok back to business!

We passed through the `match` prop and console logged it, let's take a look. Notice that the `params` property contains an object with our defined paramter `id`, and it is equal to the ID we linked to in the URL!

Now all we have to do is modify our route to render the correct data.

### Your Turn!

See if you can write some codes to render the correct data based on the ID in the URL. Focus just on unicorns for now.

**_Hints:_**

* You will need to bring in the data from the `unicorn-data.js` file
* You may want to use the `CreatureDetails` component already set up for you
* Focus first on seeing the data when you type in the URL manually, we'll set up the click next

![rambo on unicorn](http://pleatedjeans.files.wordpress.com/2010/08/10-28-rambounicorn1.jpg)

Here's the code:

```
<Route path='/unicorns/:id' render={({ match }) => {
	const { id } = match.params
	const creature = unicornData.find(uni => uni.id === parseInt(id))
	      
	if (creature) {
	  return <CreatureDetails {...creature} />
	}
}} />
```

Now if we visit `http://localhost:3000/unicorns/1` we should see a view specifically for Unicorn 1!

### Your Turn!

See if you can modify your `Unicorn` component so that each image can be clicked and `Link` to the correct Route / path / URL.

![tunacorn](http://www.nataliedee.com/081905/tuna-plus-unicorn.jpg)

Here's a simple addition to `Unicorn.js`.

First we `import { Link } from 'react-router-dom'`

Then we just wrap what we returned before with a `<Link>` as such:

```
const displayUnicorns = unicornData.map((unicorn, i) => {
	return (
	  <Link to={`/unicorns/${unicorn.id}`} key={unicorn.type + i}>
	    <img src={unicorn.image} className='app-img' />
	  </Link>
	)
})
```

If we really wanted to be efficent, we could turn this into a separate component since our `Puppies` and `Sharks` components are likely to operate the same way. So instead we can just render the component and pass through all of the data as such:

```
// Unicorn.js

import React from 'react';
import './image-display.css';
import unicornData from './data/unicorn-data.js';
import ImageCard from './ImageCard';

const Unicorns = () => {

	const displayUnicorns = unicornData.map((unicorn, i) => 
		<ImageCard {...unicorn} key={unicorn.name + i} className='app-img'/>
	)

	return (
		<div className='image-display'>
		  <h1>Unicorns!</h1>
		  {displayUnicorns}
		</div>
	)
}

export default Unicorns;
```

```
// ImageCard.js

import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const ImageCard = ({ name, bio, image, id, type }) => {

  return (
      <Link to={`${type}/${id}`}>
        <img src={image} className='app-img' />
      </Link>
  )
}

export default ImageCard;
```

And that's it! Go ahead and work on setting up dynamic routes for the other two components!


#### Resources:

* [React Router Training](https://reacttraining.com/react-router/web/guides/philosophy)
