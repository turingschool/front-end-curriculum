# Refactor Tractor - FitLit

### Functionality

You must complete all of the User Stories outlined in the [FitLit Spec](https://frontend.turing.io/projects/fitlit.html){:target='blank'} that your project has yet to finish. Make sure you spend some time reviewing the spec to take note of features that might be unfinished.

### Fetch
  
You will no longer be receiving your data from a hardcoded data file, but rather implementing the fetch API for accessing the data from a [local server](https://github.com/turingschool-examples/fitlit-api){:target='blank'}.  You will need to clone this down and have it running in a separate tab in your terminal each time you run your client.  Here are the endpoints setup for this project:

#### Retrieve all data from an endpoint (GET)

| Data Type | Verb | URL |  
|---|---|---|  
| User Data |GET | http://localhost:3001/api/v1/users |  
| Sleep Data | GET | http://localhost:3001/api/v1/sleep |  
| Activity Data | GET | http://localhost:3001/api/v1/activity |  
| Hydration Data | GET | http://localhost:3001/api/v1/hydration |  

#### Add new sleep, activity, and hydration data (POST)

For the currently displayed user, you must be able to add a new sleep, hydration and activity data entry for that user.

| Data Type | Verb | URL | Required Body |  
|---|---|---|---|  
| Sleep Data | POST | http://localhost:3001/api/v1/sleep | `{"userID": integer, "date": string, "hoursSlept": integer, "sleepQuality": integer}` |  
| Activity Data | POST | http://localhost:3001/api/v1/activity | `{"userID": integer, "date": string, "numSteps": integer, "minutesActive": integer, "flightsOfStairs": integer}` |  
| Hydration Data | POST | http://localhost:3001/api/v1/hydration | `{"userID": integer, "date": string, "numOunces": integer}` |

<section class="note">
### Error Handling

Do proper error handling for your users to ensure that they are getting data and are submitting their POST requests successfully.  An example is handling the case where they submit their data and an error message returns from the request.  Also validate the input fields on the client-side.
</section>

---

### Inheritance & Refactoring

* Identify redundant code in your classes and opportunities for DRYing it up
* Refactor **within** your classes to create dynamic methods that use arguments/parameters for changing their behavior
* Refactor **across** your classes to create a parent class that others inherit methods from as appropriate **OR** be able to defend your choice for *not* using inheritance.

---

### DOM Manipulation 

* DOM manipulation should be organized into its own `domUpdates.js` file. The file should look something like this:

```js
// domUpdates.js

let domUpdates = {
  updateDomMethod1(){...},
  updateDomMethod2(){...},
  ...
};

export default  domUpdates;
```

Any DOM updating functionality will then be imported into your `scripts.js` file to be called along with your other class methods.  This helps to create an even more modular structure.

---

### Sass

Refactor the existing CSS into Sass. You should break your Sass out into separate files. At a minimum, you will want an `index.scss` file that imports your partials, and a `variables.scss` file that contains any of your Sass variables or function definitions.  You should also include a [normalize or reset](https://frontend.turing.io/lessons/module-1/reset-vs-normalize.html){:target='blank'} file to help with cross browser compatibility.  Identify common/re-used elements on your page to determine the remaining partials you might want.

Your Sass should be making use of:

* variables for colors, fonts, etc.
* nesting, when/where appropriate
* at least **two** mixins or extends

Your app should be **fully responsive** from mobile devices - tablets - laptops

---

### Accessibility

* You must be able to tab through your app and use it without a mouse
* Your app must still be viewable when tested with a colorblind extension
* You must score as close to 100% as possible with the "Lighthouse Accessibility Audit". Be prepared to explain any accessibility audits your application is failing.
* Your HTML must be written semantically and ARIA tags should be used (*ONLY if needed / appropriate*)

### Testing
In addition to your refactoring, you also want to make sure the application is fully tested. This means:

- Initial values of class properties need tests
- Class methods need tests for all expected outcomes
- Any methods that modify class properties should be test
- **You are not required to test your fetch calls**

<section class="note">
## Strategies for Success
* Make sure you are reviewing the original ["FitLit" spec](https://frontend.turing.io/projects/fitlit.html) so you have a good idea for what the project and its requirements are.
* Since this project is not separated out into iterations or user stories, make sure that you spending a good amount of time breaking apart tasks and using that project board wisely. Make sure to send over your project board to your PM as well.
* Every group member must fully understand and be able to speak to all of the code changes that have been made.
</section>

---

### Extensions
* Instead of displaying a random user when the app starts, implement a login, or a way to select which user to view.
* Create a video of your team navigating through your app via a keyboard and screen reader. 
* Implement an animation using CSS and Sass.
* Create and implement a new feature for your application (run this by instructors first). 

---

