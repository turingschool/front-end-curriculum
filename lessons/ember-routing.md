---
title: Ember Routing
module: 3
---


FOLLOW UP:
  {{outlet}} vs {{yield}}

Ember routes define navigable pages in your app. You can access a route in your app either through the URL directly (visiting `localhost:4200/about`), by clicking on a link that takes you to a new page, or via a scripted redirect. Let's start with looking at how Ember navigates to routes via the URL.

### Routing Through the URL

Using the CLI tool, run `ember g route <about>`. You'll see an output that looks something like this:  

```
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
```
{[#link-to 'about' class='button']}
  About Page
{{/link-to}}
```

The `#` indicates an opening tag, meaning you must also have a `/` to close said tag (similar to HTML syntax). The opening tag takes an argument with the name of the route you're trying to link to. Here, we are linking to `'about'`, which matches what exists in `router.js`.

```
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

The routes we've built so far help navigate to pages within our app, but we need to specify the route that users will reach when the visit `'/'`.

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

Two ways to redirect routes:
**replaceWith**
  Replaces the current URL in the browser history.

**transitionTo**
  Adds a new route to the browser history.
