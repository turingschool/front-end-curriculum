---
title: Introduction To Ember
layout: presentation
module: 3
---

<section>
  <h1>Introduction To Ember</h1>
</section>

<section>
  <section>
    <h1>Ember CLI</h1>
  </section>
  <section>
    <pre><code>npm install -g ember-cli@2.11</code></pre>
    <pre><code>ember --help</code></pre>
    <pre><code>ember new project-name</code></pre>
  </section>

  <section>
    <p>Out of the box, you will get:</p>
    <ul>
      <li>A dev server</li>
      <li>Templates</li>
      <li>JS and CSS Minification (think Webpack)</li>
      <li>ES6 with Babel Presets</li>
    </ul>
  </section>

  <section>
    <h2>Ember Dev Server</h2>
      <pre><code>
        ember server
        ember serve
        ember s
      </code></pre>
  </section>
</section>

<section>
  <section>
    <h1>Folder Structure</h1>
  </section>
  <section>
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
</section>

<section>
  <h1>Ember Data Flow</h1>
  <a href="https://guides.emberjs.com/v2.11.0/images/ember-core-concepts/ember-core-concepts.png">Ember Core Concepts</a>
</section>

<section>
  <section>
    <h1>Testing</h1>
  </section>
  <section>
    <p>Ember's built-in testing framework allows for TDD using Acceptance Tests</p>
    <pre><code>ember g acceptance-test test-name</code></pre>
    <p>This will generate a test file in <code>tests/acceptance/test-name-test.js</code></p>
    <p>Let's check it out.</p>
    <code>ember test --server</code>
  </section>
</section>

<section>
  <section>
    <h1>Routes</h1>
  </section>
  <section>
    <p>Ember applications are organized and run by "Routes".</p>
    <ol>
      <li>User navigates to a route. Example: `'/'`.</li>
      <li>Ember Router maps the URL to a particular `Route Handler`</li>
      <li>The Route Handler renders the template associated with said route.</li>
      <li>The Route Handler hands the template the Model the template needs to know about.</li>
    </ol>
  </section>
</section>

<section>
  <pre><code>ember g route route-name</code></pre>
  <p>Generates:</p>
  <ul>
    <li>A route file: <pre><code> app/routes/about.js </code></pre></li>
    <li>A template: <pre><code> app/templates/about.hbs </code></pre></li>
    <li>A test: <pre><code> tests/unit/routes/about-test.js </code></pre></li>
    <li>Updates the `router.js` <pre><code> updating router: add route about </code></pre></li>
  </ul>
</section>

<section>
  <section>
    <h1>Model Hook</h1>
  </section>
  <section>
    <pre><code>
      // app/routes/modelName.js
      model() {
        return modelName;
      }
    </code></pre>
    <p>Ember calls for this `model hook` at various times throughout the lifecycle of the app.</p>
    <p>One example would be when a user enters the `rentals` route.</p>
    <p>`model hook` returns the array of models and passes it to the template</p>
  </section>
</section>

<section>
  <section>
    <h1>Models</h1>
    <p>Objects that represent data that your application presents to the user</p>
  </section>
  <section>
    <p>An app might have a `User Model` with properties like "firstName" or "lastName"</p>
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
  </section>
</section>

<section>
  <section>
    <h1>Ember Store</h1>
  </section>
  <section>
    <p>Provided by `Ember Data`</p>
    <p>Central repository of models in your app</p>
    <p>Components and Routes can ask the store for models to then send to the templates</p>
    <p>`this.get('store').findRecord('user', params.user_id)`</p>
    <p>PRO-TIP: Store is available by default in Routes, and Controllers. NOT Components.</p>
  </section>
</section>

<section>
  <section>
    <h1>Controllers</h1>
    <ul>
      <li>Rendered by the router when entering a Route</li>
      <li>Receives the `model` (whatever the Route's `model hook` returns)</li>
      <li>The first place actions bubble up to find rules about behavior</li>
    </ul>
  </section>
  <section>
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
    </code></pre>
  </section>
  <section>
    <p>"Controller are still an integral part of Ember architecture"</p>
  </section>
</section>

<section>
  <h1>Components</h1>
  <section>
    <p>Components allow different parts of your app to share functionality.</p>
    <p><strong>ProTip</strong>: Dashes are REQUIRED in every component name.</p>
  </section>
  <section>
    Components have two parts:
    <ol>
      <li>A template `app/templates/components/my-component.hbs`</li>
      <li>A JS source file `app/components/my-component.js`</li>
    </ol>
  </section>
  <section>
    <p>To invoke a component in a template file:</p>
      <pre><code>
        {{#each model as |item|}}
          {{my-component item=itemUnit}}
        {{/each}}
      </code></pre>
    <p>Notice the name of the component matches the name of the my-component.js file.</p>
    <p>Then we assign each "unit" we are iterating over as the whatever we designate within the pipes.</p>
  </section>
</section>

<section>
  <section>
    <h1>Templates</h1>
    <p>Templates are the "view" layer of an Ember application.</p>
  </section>
  <section>
    <p>For the most part, they look like any other fragment of HTML.</p>
    <pre><code>&lt;div&gt;This is an example DIV in an Ember Template&lt;/div&gt;</code></pre>
    <pre><code>{{Handlebars}}</code></pre>
    <pre><code>&lt;div&gt;Hi {{name}}, this is a valid Ember template!&lt;/div&gt;</code></pre>
    <p>If an application template exists, anything it in will be displayed on every page.</p>
  </section>
</section>

<section>
  <section>
    <h1>FAQ</h1>
  </section>
  <section>
    <h3>Controller vs Component</h3>
    <p>First of all: controllers are getting ditched shortly.</p>
    <p><a href="https://i.imgur.com/TgmUDac.png">Proof.</a></p>
    <p>Components have everything controllers have, plus stuff the views have</p>
  </section>
  <section>
    <h2>Controllers:</h2>
    <ol>
      <li>Can hold onto short term state</li>
      <li>Actions and stuff sent to your view (ie `<p>{{someText}}</p>`) check the controller for info first before bubbling up to the route</li>
    </ol>
  </section>
</section>

<section>
  <h2>ProTips</h2>
  <ul>
    <li>Check documentation DATE</li>
    <li>Use `return false` or `return true` to your advantage to either stop or continue bubbling up the event chain.</li>
  </ul>
</section>
