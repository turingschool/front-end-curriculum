---
title: Ember Routing
module: 3
---
Ember router translates the URL into a series of *nested templates* that define navigable pages in your app.

Based on the URL, a particular model is handed to a given template to be rendered on a page.

Let's say you have a url that looks like this:  

```js
localhost:3000/items/1
```

The path your router will see is  

```js
/items/:item_id
```  

let's say this path exists in the Item Route, which would look something like this:  

```js
Router.map(function() {
  this.route('item', { path: '/items/:item_id' });
});
```

The route would then pass the `item` model data down to components and templates. This may sound similar to React in that the philosophy is "data down, actions up".

### Routing Through the URL

Using the CLI tool, run `ember g route about`. You'll see output that looks something like this:  

```js
$ ember g route about
installing route
  create app/routes/about.js
  create app/templates/about.hbs
updating router
  add route about
installing route-test
  create tests/unit/routes/about-test.js
```

Three new files were created. The `route handler` in `app/routes/about` - because it's the file that will *handle* the *about route*. The next two files are the handlebars template that will be rendered by default, and a test file. The `router.js` file was also updated for you which should now display the following:  

```js
// ...

Router.map(function() {
  this.route('about');
});

// ...
```

By default, this route will automatically load the associated `about.hbs` template so nothing needs to be changed in this `router.js` file.  

Throw some HTML into the `about.hbs` template file, run `ember s` then visit `localhost:4200/about` to see your page in action.

### Routing Through Links
Ember, like most structurally opinionated frameworks, provides you with helper methods that do the hard work behind the scenes. One of these helper methods specific to routing is `{{link-to}}`.  

Example:  

```js
{{#link-to 'about' class='button'}}
  About Page
{{/link-to}}
```

The `#` indicates an opening tag, meaning you must also have a `/` to close said tag (similar to HTML syntax). The opening tag takes an argument with the name of the route you're trying to link to. Here, we are linking to `'about'`, which matches what exists in `router.js`.

```js
Router.map(function() {
  this.route('about');
});
```

If you boot up your server and inspect element, you'll see something like this:  

```html
<a id="ember360" href="/about" class="button ember-view">
 About
</a>
```

### Creating our Index Route

The routes we've built so far help navigate to pages within our app, but we need to specify the route that users will reach when they first visit `'/'`.

`ember g route index`

This route is special in that we are not required to update the  `router.js` file in any way. Ember's default action is to display the `index` route if no other route is being triggered.

### Routing Through a Redirect

But let's say we don't need a landing page. What if you want users to be immediately redirected to a different page? We simply need to tell our router that if a certain url is visited, send the user somewhere else.

We can modify the `index` route's path by modifying `routes/index.js` to replace the route argument before the model hook is called.

```js
// routes/index.js

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.replaceWith('newTargetRoute')
  }
});
```

### Loading Model Data through Routes

Ember route handlers are how we load model data into our app. In a routes file, our route handler returns a `model hook` that structures the data that we will need for each of our models.

`app/routes/users.js`

```js
import Ember from 'ember'

let users = [
    {
      first-name: 'Brenna',
      last-name: 'Martenson',
      email: 'brenna@email.com',
      password: 'password'
    },
    {
      first-name: 'Elvis',
      last-name: 'Presley',
      email: 'elvis@email.com',
      password: 'password'
    }
]

export default Ember.Route.extend({
  model() {
    return users
  }
});
```

Realistically, this information will come from a data store or database, but the point is that the route returns the information your templates need to render in the `model hook`.

A 'hook' is a function that gets called multiple times during the lifecycle of an app - for instance, the `users model hook` will be called any time a user enters the `users` route. The array of users returned form this function will be passed to our `users template` as the `model` property.  

Once you have access to Ember Data you won't need to hard code in your model information and can instead make a call to the data store, your model hook at that point will look something like this:  

```js
// app/routes/users.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('user')
  }
});
```

```js
// app/templates/users.js

{{#each model as |user|}}
  <section class="user-information">
    <h1>Name: {{user.first-name}} {{user.last-name}}</h1>
    <p>Email: {{user.email}}</p>
  </section>
{{/each}}

```  

Like props in React, our template now has access to the information necessary to iterate over data and display relevant information to the user.  

Two ways to redirect routes:  

* **replaceWith**
  Replaces the current URL in the browser history.

* **transitionTo**
  Adds a new route to the browser history.

### outlet

As you've been generating files, you've probably noticed a line saying `{{`outlet`}}` that we've been ignoring. This small chunk of handlebars code is replaced by markup for the current route.

### yield

Similar to `{{`outlet`}}` in that it servers as a placeholder for additional markeup. `{{`yield`}}` generally lives in a component and is replaced with HTML.


## Ember Mirage

[Mirage](http://www.ember-cli-mirage.com/) is a stubbing library that mocks out requests and hands back responses as if you were hitting an external database or API. This allows you to build out the front end of an application without a back end.  

Installation:  
`ember i ember-cli-mirage`  

This will create a `mirage/` directory with a config file. The config file returns a particular JSON object whenever Ember Data makes a specified HTTP request.

Example:  

```js
export default function() {
  this.namespace = '/api';

  this.get('/users', function() {
    return {
      data: [
        {
          first-name: 'Brenna',
          last-name: 'Martenson',
          email: 'brenna@email.com',
          password: 'password'
        },
        {
          first-name: 'Elvis',
          last-name: 'Presley',
          email: 'elvis@email.com',
          password: 'password'
        }
      ]
    };
  });
}    
```

The namespace here is important so that navigating to `/users` would conflict with our mocked out data store. In order to make this work, we need to install something called an `adapter` to help our app know what to do. The adapter will extend the JSONAPIAdapter base class from Ember Data. [More on the jsonAPI](http://jsonapi.org/), more on [JSONAPIAdapter](http://emberjs.com/api/data/classes/DS.JSONAPIAdapter.html).

### Routing with Ember Data

This means we can now get rid of the hard coded user information and update our model hook to look like our example from earlier in the lesson.

```js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('user')
  }
});
```

The statement within the model hook tells Ember Data to make a `GET` request to `/users`. With Mirage installed, this request will trigger a particular JSON response based on what we have provided in our config file.


### Resources
[Adapters and Serializers](https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/)  
[5 Ember Concepts](https://emberigniter.com/5-essential-ember-concepts/)
