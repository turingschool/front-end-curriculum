---
title: Introduction To Ember
layout: presentation
module: 3
---

<section>
  <h1>Introduction To Ember</h1>
</section>

<section>
  <h2>Ember CLI</h2>
  <ul>
    <li><pre><code>npm install -g ember-cli@2.11</code></pre></li>
    <li><pre><code>ember --help</code></pre></li>
    <li>
      <pre><code>ember new project-name</code></pre>
      Out of the box, you will get:
      <ul>
        <li>A dev server</li>
        <li>Templates</li>
        <li>JS and CSS Minification (think Webpack)</li>
        <li>ES6 with Babel Presets</li>
      </ul>
    </li>
    <li>
      <pre>
        <code>
          ember server
          ember serve
          ember s
        </code>
      </pre>
    </li>
  </ul>
</section>

<section>
  <h1>Folder Structure</h1>
  <div>
    <pre><code>
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
    </code></pre>
</section>

<section>
  <h1>Ember Data Flow</h1>
  <ul>
    <li><a href="https://guides.emberjs.com/v2.11.0/images/ember-core-concepts/ember-core-concepts.png">Ember Core Concepts</a></li>
  </ul>
</section>

<section>
  <h2>Testing</h2>
  <ul>
    <li>Ember's built-in testing framework allows for TDD using Acceptance Tests</li>
    <li>
      <pre><code>ember g acceptance-test test-name</code></pre>
      <p>This will generate a test file in <code>tests/acceptance/test-name-test.js</code></p>
      <p>Let's check it out.</p>
    </li>
    <li>
      <code>ember test --server</code>
    </li>
  </ul>
</section>

<section>
  <h2>Routes</h2>
  <ul>
    <li>Ember applications are organized and run by "Routes".</li>
    <ol>
      <li>User navigates to a route. Example: `'/'`.</li>
      <li>Ember Router maps the URL to a particular `Route Handler`</li>
      <li>The Route Handler renders the template associated with said route.</li>
      <li>The Route Handler hands the template the Model the template needs to know about.</li>
    </ol>
  </ul>
</section>

<section>
  <ul>
    <li><code>ember g route route-name</code></li>
    <li>Generates:<br/>
      A route file: <pre><code> app/routes/about.js </code></pre>
      A template: <pre><code> app/templates/about.hbs </code></pre>
      A test: <pre><code> tests/unit/routes/about-test.js </code></pre>
      Updates the router.js <pre><code> updating router: add route about </code></pre>
    </li>
  </ul>
</section>

<section>
  <h2>Model Hook</h2>
  <ul>  
    <li><pre><code>
    // app/routes/modelName.js
      model() {
        return modelName;
      }
      </code></pre></li>
      <li>Ember calls for this `model hook` at various times throughout the lifecycle of the app.<br/>
      One example would be when a user enters the `rentals` route.</li>
      <li>`model hook` returns the array of models and passes it to the template</li>
  </ul>
</section>

<section>
  <h2>Models</h2>
  <p>Objects that represent data that your application presents to the user</p>
  <ul>
    <li>Ie: an app might have a `User Model` with properties like "firstName" or "lastName"</li>
    <li>
      <pre><code>
        // app/models/user.js

        import DS from 'ember-data';

        export default DS.Model.extend({
            firstName: DS.attr('string'),
            lastName: DS.attr('string'),

            fullName: Ember.computed('firstName', 'lastName', () => {
              return `${this.get('firstName')} ${this.get('lastName')}`;
            });
          })
      </code></pre>
    </li>
  </ul>
</section>

<section>
  <h2>Ember Store</h2>
  <p>Provided by `Ember Data`</p>
  <p>Central repository of models in your app</p>
  <p>Components and Routes can ask the store for models to then send to the templates</p>
  <p>`this.get('store').findRecord('user', params.user_id)`</p>
  <p>PRO-TIP: Store is available by default in Routes, and Controllers. NOT Components.</p>
</section>

<section>
  <h2>Controllers</h2>
  <ul>
    <li>Rendered by the router when entering a Route</li>
    <li>Receives the `model` (whatever the Route's `model hook` returns)</li>
    <li>The first place actions bubble up to find their behavior</li>
    <li>
      <pre><code>
      // In template
      {{#if isExpanded}}
        &lt;button {{action "toggleBody"}}&gt;Hide Body&lt;/button&gt;
          &lt;div class="body"&gt;
            {{model.body}}
          &lt;/div&gt;
      {{else}}
        &lt;button {{action "toggleBody"}}&gt;Show Body&lt;/button&gt;
      {{/if}}

      // In controller
      export default Ember.Controller.extend({
        actions: {
          toggleBody() {
            this.toggleProperty('isExpanded');
          }
        }
      });
    </li>
    <li>"Controller are still an integral part of Ember architecture"</li>
  </ul>
</section>

<section>
  <h2>Components</h2>
  <ul>
    <li>Components allow different parts of your app to share functionality.</li>
    <li>ProTip: Dashes are REQUIRED in every component name.</li>
    <li>Components have two parts: <br/>
      1. A template `app/templates/components/my-component.hbs`<br/>
      2. A JS source file `app/components/my-component.js`
    </li>
    <li>To invoke a component:
      <code><pre>
      {{#each model as |item|}}
        {{my-component item=itemUnit}}
      {{/each}}
      </pre></code>
      Notice the name of the component matches the name of the my-compnent.js file. Then we assign each "unit" we are iterating over as the whatever we designate within the pipes.
    </li>
  </ul>
</section>

<section>
  <h2>Templates</h2>
  <ul>  
    <li>Templates are the "view" layer of an Ember application.</li>
    <li>For the most part, they look like any other fragment of HTML.
      <pre>
        <code>&lt;div&gt;This is an example DIV in an Ember Template&lt;/div&gt;</code>
      </pre>
    </li>
    <li><pre><code>
      {{Handlebars}}
      // templates.hbs
      </code></pre>
    </li>
    <li>&lt;div&gt;Hi {{name}}, this is a valid Ember template!&lt;/div&gt;</li>
    <li><code>application.hbs</code>: If an application template exists, anything it in will be displayed on every page.</li>
  </ul>
</section>


<section>
  <h2>FAQ</h2>
  <ul>
    <li>
      <h3>Controller vs Component</h3>
      <p>First of all: controllers are getting ditched shortly.</p>
      <p><a href="https://i.imgur.com/TgmUDac.png">Proof.</a></p>
      <p>Components have everything controllers have, plus stuff the views have</p>
      <p>Controllers:</p>
      <ol>
        <li>Can hold onto short term state</li>
        <li>Actions and stuff sent to your view (ie `<p>{{someText}}</p>`) check the controller for info first before bubbling up to the route</li>
      </ol>
    </li>
  </ul>
</section>

<section>
  <h2>ProTips</h2>
  <ul>
    <li>Check documentation DATE</li>
    <li>Use `return false` or `return true` to your advantage to either stop or continue bubbling up the event chain.</li>
  </ul>
</section>
