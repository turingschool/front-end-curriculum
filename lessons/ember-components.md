---
title: Ember Components & A Little Bit About Mirage
module: 3
---

## Setup:

* Clone the [Ember Groceries](https://github.com/turingschool-examples/ember-groceries) repo.  
* `bower install` & `npm install`   
* Check out a new branch.  

## Explore.

Let's take a minute to explore what this app does and look at the different Ember concepts.  

```
ember s
```
Components allow you to create reusable sections of code that maintain their own behavior.  

What pieces of this app seem like reusable chunks of code?  

Let's start by digging into what our template structure looks like.  

## Templates

Open up `app/templates`.  

Looks like we only have 2 templates that AREN'T associated with components:
* `application.hbs`  --> Contains all of the HTML that we want to exist on ALL PAGES.  
* `groceries.hbs` --> Contains two references to components, some filter buttons, and the grocery list.  

Note that first line in `groceries.hbs` that references a component named `add-grocery`. Let's find that template in `app/templates/components/`.  

Looks like a form with some extra handlebars syntax. Split your text editor so you're looking at `app/templates/components/add-grocery.hbs` on one side, and `app/components/add-grocery.js` on the other. What do you notice about the interpolated information from the template compared to the syntax in the component?  

Change one of the default `''` values in the component and check out the page in a browser.  

Next, take a moment to look through what is happening on the `createGrocery` action.  

## Generate A Component  

For demo purposes, let's create a component from scratch to check out how these get wired up.

```
ember g controller double-clickable
```

This command will generate our `.hbs` file, a `.js` file, and a test. We want to create a section of code that when double clicked will do a thing. Let's call this component `double-clickable`.

Somewhere in your `application.hbs` or `groceries.hbs` files, make a reference to the component:

```
double-clickable
```

Then, in `app/templates/components/double-clickable.hbs`, add the following:

```html
 <!-- app/templates/components/double-clickable.hbs -->

<div style="background-color:black; color: white; padding: 20px;">
  This is a double clickable area!
</div>

```

In the browser you should now see a black div with white text.  

In `app/components/double-clickable.js` adjust the file to have our doubleClick method.

```js
// app/components/double-clickable.js

import Ember from 'ember';

export default Ember.Component.extend({
  doubleClick() {
    alert("DoubleClickableComponent was clicked!");
  }
});
```

Double click on your black box in the browser. BAM!  

## A Bit About Mirage
[Ember CLI Mirage](http://www.ember-cli-mirage.com/)  

As you've experienced in the past, most of the apps you build will interact with some sort of external API. In the event your back end isn't up and running yet, it's ideal to have some sort of replica to work with that you don't have to manually build out yourself.

This is where Mirage comes in.

Mirage is a fake server that runs locally and can be used in both testing and development.  

`ember install ember-cli-mirage`  

This will create a directory that looks like this:

```
mirage/
  scenarios/
    - default.js
  serializers/
    - application.js
  config.js
```

The config file is where you define your mocked out 'route handlers' to respond to Ember app requests. For example:

```js
// mirage/config.js

export default function() {
  this.namespace = 'api';

  this.get('/users', () => {
    return {
      users: [
        {id: 1, name: 'Harry'},
        {id: 2, name: 'Ron'},
        {id: 3, name: 'Hermione'},
      ]
    };
  });

}
```

You can also use generator commands to make your life easier. Like `ember g mirage-model todo`.  

In your project's starter repo, take a minute to look into the Mirage directory.  
