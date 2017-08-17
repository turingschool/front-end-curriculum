---
title: Ember Overview
---

## Ember App Buzz Words

### Ember CLI

### Templates  

Templates organize the views in your application and are a collection of chunks of HTML.  

Out of the box, Ember uses a templating language called [Handlebars](http://handlebarsjs.com/). This allows for dynamic information to be passed to the views from the context of each template. The context is where that information will come from - either a route, or a component. You can think of Handlebars as a similar approach to writing JSX in your React apps.

Example:  
```
<div>Hello {{name}}. Welcome to Ember.</div>
```

### Components

Components are in charge of dictating how your UI behaves. There are two parts to components - a Template (written in Handlebars), and a JavaScript file that controls the components behavior.  

They can be thought of like bundles of code that contain the HTML, JS, and any contextual information needed (like routes or models).

**Note:** Components are in the process of replacing what used to be handled in an  `Ember Controller` (details below).  

### Models
Models hold on to any state your app needs to care about. For example, if your app has a `User`, the `User` model would might contain information like a `first-name`, `last-name`, `username`, or  `password`.

Models can be configured to save data anywhere you need them to. [Ember Data](https://guides.emberjs.com/v2.9.0/tutorial/ember-data/) is a common way to store...Ember data...as well as using resources like `Local Storage`, `Firebase` etc.

### Routing

Routing(https://guides.emberjs.com/v2.9.0/routing/) needs to be able to dynamically address questions about the app's current state. What page is the user currently viewing, and how did they get there?

A user can set the URL of an app multiple ways:
* Initial app load (what page does a user land on when the app is fired up for the first time? )
* Manually entering a URL (either through editing the address bar or hitting `back` in the browser)
* Clicking on a link within the app
* Other app-driven events (redirects, etc)

Regardless of how this route is set, the Ember Router needs to map that URL to a `route handler` that will render a particular template, and load the model necessary for that template to have all the information it needs.  

#### Route Handlers

To generate a new route, run the command `ember g route route-name`. This will create file in `app/routes/route-name.js`, as well as a template for the route in `app/templates/route-name.hbs`, and a test-file in the `test/unit/routes` directory. For free, it also adds your new route to the router.

An exmample `router.js` file might look something like this:  
```
app/router.js
```

```
Router.map(() => {
  this.route('ideas', { path: '/ideas' });
  this.route('ideas/:ideaId', { path: '/ideas/:ideaId' })  
})
```


###
