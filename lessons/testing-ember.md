---
title: Testing Ember
length:
tags: ember, testing, javascript
---

### Setup

1. If you already have it, `git pull` and `git fetch` to get the latest branches on the [ember-groceries](https://github.com/turingschool-examples/ember-groceries/tree/testing-adventure) repo, or clone down a new copy.

2. **CHECKOUT BRANCH:** `testing-adventure`  

3. `npm install && bower install`  

### Setting Up Testing

The Ember CLI is a powerhouse for helping you set up the files necessary to build and test your Ember app. Let's start with acceptance tests. To create an acceptance test, simply execute the following command in your terminal (Note: this has already been done for you in the practice repo):

```
ember generate acceptance-test home-page
```

Which generates a file like this:  

```
import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting /home-page', function(assert) {
  visit('/home-page');

  andThen(function() {
    assert.equal(currentURL(), '/home-page');
  });
});

```

*Note:* The test will automatically fill in the route for you with the test name. You'll need to change any line that tries to visit `./home-page` to actually represent the route you're aiming for.  

```
import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

```

This boilerplate test is simply to make sure your app is wired up and the environment is ready to go. Here is where you can write out a skeleton of what features you might want to be testing.

```
import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('should see a form to submit a new idea', function (assert) {
})

test('should see a welcome message in the top nav bar', function (assert) {
})

test('should link to ember documentation', function (assert) {
})

test('should show new idea on submit', function (assert) {
})

```

### Running Tests

Use the command `ember test --server` from the command line to run your test suite. You'll see a report output in the terminal as well as an independent Chrome instance with detailed information.  


**Important Note**: Make sure as you peruse documentation that you are looking at v2.0.0 or greater.

### Unit Tests  
As always, Unit Tests test small chunks of code to ensure the functionality is being implemented as expected. They are independent from the application as a whole.

To create a unit test, simply create an instance of the Ember.Object in question, pass it any required information, and assert you get back what you expect.  

Unit tests are where methods within your app are tested. For instance, if you have a model that looks something like this:

```
import Ember from 'ember';

export default Ember.Object.extend({
  count: 0,
  calc() {
    this.incrementProperty('count');
    let count = this.get('count');
    return `count: ${count}`;
  }
});
```  

Your test would look like this:  

```
test('should return incremented count on calc', function(assert) {
  const someThing = this.subject();
  assert.equal(someThing.calc(), 'count: 1');
  assert.equal(someThing.calc(), 'count: 2');
});
```

As with all unit tests, you are extracting tiny pieces of logic from your app and making sure what you expect to get back makes sense.  

Unit tests include testing Models, Controllers, and Routes in your application. We'll start with Models.  

#### Testing Models
[Testing Models Docs](https://guides.emberjs.com/v2.8.0/testing/testing-models/)

*Note: `DS.Model` extends `Ember.Object`*

Let's look at an example. Below we have the `grocery` model from the `ember-groceries` repo:  

`// app/models/grocery.js`

```
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('string'),
  notes: DS.attr('string'),
  starred: DS.attr('boolean', { defaultValue: false }),
  purchased: DS.attr('boolean', { defaultValue: false }),

  unpurchased: Ember.computed('purchased', function() {
    return !this.get('purchased');
  })
});
```

To test this model, we will use the `moduleForModel` helper method.  

```
import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('grocery', 'Unit | Model | grocery', {
  needs: []
});

test('should return default values for starred and purchased', function(assert) {
  // create an alias for the record
  const grocery = this.subject({
    name: 'grocery-name',
    quantity: 'one bunch',
    notes: ''
  });

  // assert that the default values for 'purchased' and 'starred' are both false.
  assert.equal(grocery.get('purchased'), false, 'grocery defaults to purchased: false');
  assert.equal(grocery.get('starred'), false, 'grocery defaults to starred: false');
});
```

Our `moduleFor` test-helper provides us with the method `this.subject` that handles figuring out what model or object we are talking about and instantiating an instance of it.  

**YOUR TURN**  
Implement the skipped tests.  
`test/unit/models/groceries-test.js`

#### Testing Controllers
[Testing Controllers Docs](https://guides.emberjs.com/v2.8.0/testing/testing-controllers/)  


Controllers are Ember objects that contain properties, methods, and actions.  

An example controller:  

```
import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter', 'search'],

  filter: null,
  search: null,

  filterIsAll: Ember.computed.not('filter'),
  filterIsStarred: Ember.computed.equal('filter', 'starred'),
  filterIsPurchased: Ember.computed.equal('filter', 'purchased'),
  filterIsUnpurchased: Ember.computed.equal('filter', 'unpurchased'),

  actions: {
  setFilter(filter) {
    this.set('filter', filter);
  },
  updateSearch(search) {
    this.set('search', search && search.toLowerCase());
  }
}
});
```

Tests are designed to make sure that those properties are what you expect before and after actions are called on them.

`// tests/unit/controllers/groceries-test.js`  

```
test('should update filter property on appropriate actions', function(assert) {

  // create a new instance of your controller
  const ctrl = this.subject()

  // make sure the default values are what you expect
  assert.equal(ctrl.get('filter'), null, 'filter defaults to null')

  // call appropriate action
  ctrl.send('setFilter', 'starred')

  // check if said property is now updated
  assert.equal(ctrl.get('filter'), 'starred', 'filter updated')
})
```  

*Note: `Ember.Controller` extends `Ember.Object`*  

**YOUR TURN**  
Implement the skipped tests.  
`test/unit/controllers/groceries-test.js`

#### Testing Routes

*Note: `Ember.Route` extends `Ember.Object`*  

Routes are typically tested through either acceptance or unit tests. Acceptances tests (covered later in this lesson) walk through actions that cause redirection and affirmation of current paths.

That being said, sometimes it's important to unit test routes specifically, for example if you have functionality that lives in multiple routes (like an alert). In this case you would need to explicitly create an Application route to then test, because by default a user can't interact on ONLY the application route itself.  

For more information on explicitly testing Routes, check out [the docs](https://guides.emberjs.com/v2.8.0/testing/testing-routes/).

### Acceptance Tests
[Acceptance Test Docs](https://guides.emberjs.com/v2.8.0/testing/acceptance/)  

These tests are crucial for walking through the code as a user would interact with your app. Automating this functionality allows you as a developer to avoid having to click through each feature of your app to ensure everything works as expected.

To mentally structure what you need to test, your acceptance tests should follow a pattern of visiting a particular route, interacting with the page using helper methods, and checking for any expected changes to the DOM.

Sometimes it's helpful to map out what you are testing in the form of a "User Story".  For example:  

```
As a user,
When I visit the home page,
And I enter values for Name, Quantity, Notes,
And I hit the Submit button,
Then I see a Grocery item with those values.
```

Execution of this test would something like this:  

```
$ ember g acceptance-test add-grocery
installing acceptance-test
  create tests/acceptance/add-grocery.js
```

`// tests/acceptance/add-grocery.js`  

Note that the test will automatically make the name of the test the path in the default boilerplate. Change that to the route you expect (here it's `'/'` because we are testing our root path)

```
import { test } from 'qunit';
import moduleForAcceptance from 'ember-groceries/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add grocery');

test('should add a grocery on submit with valid input', function(assert) {
  visit('/');
  fillIn('.spec-input-name', 'Banana')
  fillIn('.spec-input-quantity', 'One Bunch')
  fillIn('.spec-textarea-notes', 'Only extra green ones')
  click('.add-grocery--submit')

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.grocery-item').length, 1, 'should show 1 grocery')
  });
});
```  


#### Asynchronous Test Helpers
[Asynchronous Helper Docs](https://guides.emberjs.com/v2.8.0/testing/acceptance/#toc_asynchronous-helpers)

These types of helpers are aware of asynchronous behavior in your app. Because of this, they will fire off in the order that you call them, but will wait until the previous helper has completed before executing any following orders.  

Each of these asynchronous helpers returns a Promise.  

Some examples of asynchronous helpers:
  - **`click(selector)`**: Clicks on an element, returns a promise.  
    - Ex: `click('a:contains("About")')`
  - **`fillIn(selector, value)`**: Fills in an input element with text.
    - Ex: `fillIn('#name', 'Brenna')`
  - **`keyEvent(selector, type, keyCode)`**: Simulates a key event (ie: keypress, keyup, takes an optional keyCode argument)  
    - Ex: `keyEvent('.name-input', 'keypress', 13)`
  - **`triggerEvent(selector, type, options)`**: Triggers a DOM event like `blur`.
    - Ex: `trigger('.name-input', 'blur')`
  - **`visit(url)`**: Visits a particular route
    - Ex: `visit('/')`

#### Synchronous Test Helpers
[Synchronous Helper Docs](https://guides.emberjs.com/v2.8.0/testing/acceptance/#toc_synchronous-helpers)

These helpers are performed immediately when called, they will not wait for any other action to be completed first.  

Some examples of synchronous helpers:  
  - **`currentPath()`**: Returns the current path
  - **`currentRouteName()`**: Returns currently active route name
  - **`currentURL()`**: Returns current URL
  - **`find(selector, context)`**: Finds an element within the app's root element. Context is optional.
    - Ex: `find('.my-element')`  

#### Wait Helper aka `andThen()`
[Wait Helper Docs](https://guides.emberjs.com/v2.8.0/testing/acceptance/#toc_wait-helpers)

```
andThen(() => assert.equal(.....))
```
Waits for all previous asynchronous helpers to complete before executing the next function. It takes a single argument of the function that needs to be executed. For example, the actual assertion statement.  

Example:  

```
test('should visit the about page', function(assert) {
  visit('/')
  click('.about-link')
  andThen(() => assert.equal(currentURL(), '/about'))
})
```

**YOUR TURN**  
Fill in the skipped tests.  
`test/acceptance/add-grocery.js`  

### Integration (Component) Tests  
[Integration Test Docs](https://guides.emberjs.com/v2.8.0/testing/testing-components/)  

In integration tests, the goal is to assert that the component is rendered as expected both from the component side and also within the template.  

Like most generator commands in Ember, when you create a component with `ember g component <component-name>` a test file is automatically generated for you.  

```
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-name', 'Integration | Component | component name', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{component-name}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#component-name}}
      template block text
    {{/component-name}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
```

The `moduleForComponent` helper will find the correct component and its template, if it exists. `integration: true` is required to enable the test to do it's job correctly. This allows each test to have access to the `render()` function, which lets us create an instance of our component (similar to `this.subject`) but in template syntax.

For example, on page load, the `add-grocery` component should render with an h1 with the title "Grocery List", three fields with labels Name, Quantity, and Notes, and a Submit button that starts as disabled.

Lets start with testing the component itself.

`// components/add-grocery.js`  

```
import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['add-grocery'],

  name: '',
  quantity: '',
  notes: '',

  actions: {
    createGrocery() {
      const grocery = this.getProperties('name', 'quantity', 'notes');
      this.get('store').createRecord('grocery', grocery).save().then(() => {
        this.setProperties({ name: '', quantity: '', notes: '' });
      });
    }
  }
});
```

For the component, let's test that it has the properties we expect.

`// tests/integration/components/add-grocery-test.js`

```
test('it renders with an updated name value when provided',
function(assert){

  this.set('name', 'hello world')

  this.render(hbs`{{add-grocery name=name}}`)

  assert.equal(this.$('.spec-input-name').val(), 'hello world', 'updates with provided value')
})
```



### `ember-cli-mirage`  
[Mirage Docs](http://www.ember-cli-mirage.com/)  

This is used (among other things) to stub in HTTP requests and serve up fake data, often used in acceptance tests.  

`ember install ember-cli-mirage`  

This command will give you the addon and Bower dependencies, plus a `/mirage` directory where your fake data will live.  

With Mirage, you are ultimately faking out an API call and returning fake data. In your config file, you redefine a `route handler` to stub in exactly what data you want to see.  

Example:  

`// mirage/config.js`  

```
export default function() {  
  this.get('/groceries', () => {
    return {
      groceries: [
        {id: 1, name: 'Bananas'},
        {id: 2, name: 'Apples'},
        {id: 3, name: 'Pork Ribs'},
      ]
    };
  });
}
```

Check out the docs for more in depth instructions on how to configure your Mirage "database".  

### Your Turn

We will be using the [ember-groceries](https://github.com/turingschool-examples/ember-groceries) repository, checkout the branch `testing-adventure`.  

You will probably also need [the docs](https://guides.emberjs.com/v2.8.0/testing/).

Replace `skip` with `test` in your test files and fill in the content to get the test to pass.

### Additional Informative Notes

#### `{{outlet}}`
The magic ember syntax `{{outlet}}` defers to the router, which will insert the template for the current route at that location.

#### `hook`
A function that Ember will call at various times in our app. For instance, if you define a `model(){}` hook in a routes handler, it will be called whenever a user hits that path.

#### Route Handlers & Models
Route handlers (the stuff inside `export default Ember.Route.extend({})`) are in charge of loading model data. What is returned within our `model hook` will be passed to the respective template as the `model` property.

### Terminal Commands
`ember serve` --> Boot up your server  
`ember test --server` --> Set up automatic test watching  
`ember g route <name>` --> Generates routes/route.js templates/route.hbs test/routes/route.test  
`ember g template <name>` --> Generates  templates/template.js  
`ember g model rental` --> Generates models/model.js, and test/models/model-test.js  
`ember g component rental-listing` --> Generates components/component.js, templates/components/component.hbs, and tests/integration/component-test.js  
`ember g acceptance-test adds-grocery` --> Generates an acceptance test.
