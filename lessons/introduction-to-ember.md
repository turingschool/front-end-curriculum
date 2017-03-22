---
title: Introduction To Ember
module: 3
---

## Ember CLI

```shell
npm install -g ember-cli@2.11
ember --help
ember new project-name
```

Out of the box, you will get:  
* A dev server  
* Templates  
* JS and CSS Minification (think Webpack)  
* ES6 with Babel Presets  

## Ember Dev Server

```shell
ember server
ember serve
ember s
```

## Folder Structure

```shell
  app/
  config/
  public/
  node_modules/
  tests/
  vendor/

  bower.json
  ember-cli-build.js
  package.json
  README.md
  testem.js
```

## Ember Data Flow
[Ember Core Concepts](https://guides.emberjs.com/v2.11.0/images/ember-core-concepts/ember-core-concepts.png)

## Testing
Ember's built-in testing framework allows for TDD using Acceptance Tests.  

```shell
ember g acceptance-test test-name
```

This will generate a test file:  

```shell
tests/acceptance/test-name-test.js
```

Let's check it out:
```shell
ember test --server
```  

## Routes  

Ember applications are organized and run by "Routes".  
* User navigates to a route. Example: `'/'`.  
* Ember Router maps the URL to a particular `Route Handler`  
* The Route Handler renders the template associated with said route.  
* The Route Handler hands the template the Model the template needs to know about.  

```shell
ember g route route-name
```

This Generates:
* A route file: `app/routes/about.js`  
* A template: `app/templates/about.hbs`  
* A test: `tests/unit/routes/about-test`  
* Updates the `router.js` file.   

## Model Hook

```js
// app/routes/modelName.js

  model() {
    return modelName;
  }
```

Ember calls for this `model hook` at various times throughout the lifecycle of the app.  

One example would be when a user enters the `rentals` route.  

The model hook returns the array of models and passes it to the template.  

## Models
Objects that represent data that your application presents to the user.  

An app might have a `User Model` with properties like `firstName` or `lastName`.  

```js
// app/models/user.js

import DS from 'ember-data';

export default DS.Model.extend({
    firstName:  DS.attr('string'),
    lastName:   DS.attr('string'),
    isExpanded: true,

    fullName:   Ember.computed('firstName', 'lastName', () => {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    });
  })
```

## Ember Store  
* Provided by `Ember Data`  
* Central repository of models in your app  
* Components and Routes can ask the store for models to then send to the templates.
* `this.get('store').findRecord('user', params.user_id)`  
* **PRO-TIP**: The store is available by default in Routes, and Controllers. NOT Components.  

## Controllers
Rendered by the router when entering a Route.  

Receives the `model` (whatever the Route's `model hook` returns).   

Controllers are the first place actions bubble up to find rules about behavior.  

(see markdown file)

```hbs
{{!-- In template --}}

{{#if isExpanded}}
  <button {{action "toggleBody"}}>Hide Body</button>
    <div class="body">
      {{ model.body }}
    </div>
{{else}}
  <button {{action "toggleBody"}}>Show Body</button>
{{/if}}
```

```js
// In controller
export default Ember.Controller.extend({
  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});
```

> "Controller are still an integral part of Ember architecture"

## Components
Components allow different parts of your app to share functionality.  
**ProTip**: Dashes are *REQUIRED* in every component name.  

Components have two parts:  
* A template: `app/templates/components/my-component.hbs`  
* A JS source file: `app/components/my-component.js`  

To invoke a component in a template file:  

(see markdown file)  

```hbs
{{#each model as |item|}}  
  {{my-component item=itemUnit}}  
{{/each}}  
```

Notice the name of the component matches the name of the my-component.js file.  

Then we assign each "unit" we are iterating over as the whatever we designate within the pipes...

## Templates  
Templates are the "view" layer of an Ember application.  

For the most part, they look like any other fragment of HTML.  

```html
<div>This is an example DIV in an Ember Template</div>
```  

## Handlebars  

(see markdown file)  

```hbs
<div>Hi {{name}}, this is a valid Ember template!</div>
```  

## Application Template
If an application template exists, anything it in will be displayed on every page.

## FAQ  

#### Q: Controller vs Component  
A: First of all: controllers are getting ditched shortly. [Proof](https://i.imgur.com/TgmUDac.png).  
Components have everything controllers have, plus stuff the views have.

#### Q: So...then what's a controller?
Can hold onto short term state.  
Actions get sent to the controller first.  
For example, if you send a variable to your view (ie `<p>{{someText}}</p>`), your app will check the controller for info first before bubbling up to the route.  

## ProTips
* Check documentation **DATE**.  
* Use `return false` or `return true` to your advantage to either stop or continue bubbling up the event chain.  
