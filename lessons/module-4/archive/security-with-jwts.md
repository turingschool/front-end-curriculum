---
title: Securing SPAs with JWTs
length: 1 hour
tags: security, oauth, jwt, json web tokens
---

### Goals

By the end of this lesson, you will:

- Have a basic understanding of token-based authentication
- Recognize the underlying structure of a JWT
- Be able to implement a protected route and API endpoint by verifying a JWT

## Authenticating SPAs with JSON Web Tokens
Authenticating your single page applications means that any application data being transmitted must be done so in a verifiable, and trusted manner. This includes scenarios such as user logins and API requests to send and retrieve application data. Despite how important it is to keep these issues in mind while building applications, many launch without any precautions in place. While security is a much bigger problem than we're aiming to solve here, there are some standards we can take advantage of to boost the integrity of our applications.

## Introducing JSON Web Tokens
JSON Web Tokens, JWTs for short, provide us with a compact way to securely transmit data as an encoded JSON object. JSON objects are simple and compact, making them easy to pass along as query strings, headers, and request bodies. Similar to API Keys that help verify access to an API, JSON web tokens can be passed along to your server requests, and look something like this:

```javascript
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

This might look familiar to the API Tokens you may have used when interacting with public APIs or third-party services such as Firebase.

A JSON Web Token allows you to identify/authenticate a user in your application by passing a verified string (like the above example) through the header, URL, or body of a request which proves the user is trustworthy and allowed to access the desired content. (This content could be on an admin dashboard page or received through a GET request for an array of data.)

Though it's nice that the JWT is so compact and we can simply pass this string of numbers and letters around in a number of ways, it's tough to understand what it actually represents. Let's break down the anatomy of a JWT.

## Structure of a JWT
JWTs are made up of three distinct parts:

* Header
* Payload
* Signature

Each of these sections are separated by a `.` in the final format of the JWT, which is represented as a simple string (as shown above).

### Header
The header usually consists of two pieces of information: the type of token (a JWT, in our case) and the hashing algorithm being used. A hashing algorithm is a way to transform a string of characters into a shorter key that represents the original string. (Think back to the the URL shortening you did!) Hashes are easier and faster to lookup than the original value. For example, the header portion of a JWT might represent a JSON object like this:

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

This JSON object is then [Base64Url](https://brockallen.com/2014/10/17/base64url-encoding/) encoded to form the first part of the JWT, which might look something like this:

```javascript
eyJhbGci0iJIUzI1NiIsInR5cCI6IkpXVCJ9
```

Encoding is the process of converting data into a format that allows for efficient data transmission and storage, among other things. Base64 encoding is a convenient way to manage data in a simple, readable text format rather than as binary data. Base64Url encoding is similar to Base64, although it avoids using common reserved URL characters (such as the / and -).

JWTs are intended to be as flexible as possible. The Base64Url encoding is one characteristic that allows them to be passed along as query strings, headers, and request bodies.

### Payload
The second part of the JWT is made up of claims. JWT claims are represented again as a JSON Object that contains security information about the message you're transmitting. The properties on this object ensure the authenticity of the claim, and contain information such as the issuer (identifies the application making the call), issued-at time (when was this token issued?, expiration (when will this token expire/no longer be valid?), and any additional contextual information. For example, we might want to make a claim that a user is authenticated as an admin, which our app will allow special privileges to:

```json
{
  "iss": "github:1314039",
  "iat": 1300819370,
  "exp": 1300819380,
  "context": {
      "user": {
          "userKey": "bStoroz",
          "username": "bStoroz",
          "displayName": "Brittany Storoz",
          "admin": true
      }
  }
}
```

This will grant admin privileges to our user assuming the current time falls somewhere between the issued-at value and the expiration value, and the application requesting the permissions matches the one specified by our `iss` property.

### Signature
The signature portion of a JWT is used to verify the sender of the token and that the message hasn't been changed anywhere along the way. The signature uses the hashing algorithm specified in the header and hashes a combination of information:

```javascript
HMACSHA256(
  `${base64UrlEncode(header)}.
   ${base64UrlEncode(payload)}`,
   secret)
```

We include the encoded header and payload, as well as a secret. (Think of the secret as the API Secret Key you get when using a tool like Firebase.)

Take some time to play around with the structure of a JWT in the browser with the [JWT.io debugger](https://jwt.io/). We'll get to implementing our own in a bit.

### Stop and Read
Still feeling a bit confused? Hopefully things will clear up after the following sections where you'll actually be implementing a JWT. Before you get started, read through this quick blog post: [5 Easy Steps to Understanding JSON Web Tokens (JWT)](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec#.xp9snye3h) to help clear up any lingering fuzziness.

To sum up some of the things we just learned:

* **What is a JWT:** a JSON object encoded as a string
* **What does it do:** allows us to verify data is coming from an authentic source
* **How can we use it:** to secure an API endpoint of application data, or to require user authentication when navigating to a route in an SPA
* **Where do we put it:** in the headers or body of a `fetch` request, OR in a query param (e.g. `/api/v1/foo?token=sigh942tydiufhg9e4th.sov98h403`)

## Implementing JWTs
Implementing JWT authentication is fairly simple with the help of an npm library or two. In the real world, your team may prefer to use a third-party service such as [Auth0](https://auth0.com/) or [Firebase](https://firebase.google.com/), which both provide you with authentication options for many popular services like Google, Facebook, Twitter, etc. In order to truly understand what's going on behind the scenes with JWTs, we'll bypass using these services and implement them on our own.


## Getting Started

We're going to create a simple transportation application for the Big Metro City Choo-Choo Train Authority:

![home component][home-component]

We're going to build it in React, with Express and Node on the back-end. The root of the application will display the current status for each train line and will not require any JWT authentication. We will add a 'login' option so that a user can log in as an administrator and be taken to a dashboard where they will be able to update the status of any given train line:

![admin component][admin-component]


The application will have three React Routes:

* '/' - Home, **public**, displays the current status of every train line
* '/login' - Login, **public**, allows an administrator to login and update the status of each train
* '/admin' - Admin, **private**, requires authentication with JWT, otherwise it will redirect to the Login route

It will also have three back-end API endpoints:

* '/authenticate' - [POST] **public**, user will login with a username/password
* '/api/v1/trains' - [GET] **public**, fetch all trains from server
* '/api/v1/trains/:id' - [PATCH] **private**, admin can update train status, requires authentication with JWT

Clone the [jwt-tutorial repo](https://github.com/turingschool-examples/jwt-tutorial) and run `npm install`. Before starting up our application, we'll need to configure a couple of things.

[home-component]: /assets/images/lessons/jwts/home-component.png
[admin-component]: /assets/images/lessons/jwts/admin-component.png

## Environment Variables
You'll see a `.env.example` file in the root of the project repo. It should look something like this:

```javascript
CLIENT_SECRET = 'SuperSecretKey'
USERNAME = 'foo'
PASSWORD = 'bar'
```

Copy this file and create a new one that is just titled `.env`. You can replace these values with whatever you'd like, or leave them as-is. The `CLIENT_SECRET` is the value we'll use to help generate our JWT, and the `USERNAME` and `PASSWORD` will be the valid credentials a user can enter when logging in. In a real application, these values would be highly sensitive and we'd want to make sure that this file wasn't committed to github. Because we're just practicing locally, we don't have much to worry about.

We'll use these values momentarily, when we set up our server.


--------------------------------------------------------------



## Protecting Server-Side Endpoints

We'll first take a look at how JWTs work on the back-end. If you open the `server.js` file at the root of your application, you'll see we already have some generic setup for a back-end:

* Our imports and required libraries
* Some train data saved to app.locals
* Configuration for CORS and JSON parsing
* Starting up the server on port 3001

### Importing Helpers

The first step in implementing JWTs is, of course, pulling in an npm library. We're going to use the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) library. This will help us generate, verify, and decode the JWTs we work with. Please read the documentation before continuing, so you have a better idea of how it will be used. It's ok if it doesn't all make sense right away, just recognize the types of things you can do with the library.

We'll also install a helper library for parsing the `.env` file we just created:

```bash
npm install --save jsonwebtoken
npm install --save dotenv
```

Import these libraries into your `server.js`.

### Configuration

We know we're going to need access to each of the variables we declared in our `.env` file, so let's be good citizens and throw an error in our server if any of them are missing. Read the [dotenv](https://www.npmjs.com/package/dotenv) documentation to learn how you can parse your environment variables and access them through a `config` object. Once you have access to each of the three variables (CLIENT_SECRET, USERNAME, PASSWORD) through `config[variableName]` which makes it easy for us to check for them. Beneath the `app.use(cors());` line, add the following check:

```javascript
if (!config.CLIENT_SECRET || !config.USERNAME || !config.PASSWORD) {
  throw 'Make sure you have a CLIENT_SECRET, USERNAME, and PASSWORD in your .env file'
}
```

Finally, we're going to want access to our `config.CLIENT_SECRET` in multiple places, so let's save it to a variable to make our lives easier. Beneath the check that we just added, set the following variable:

```javascript
app.set('secretKey', config.CLIENT_SECRET);
```

### Creating Endpoints

Now for the fun part: creating our endpoints. Open up Postman to test your endpoints as you create them. We already mentioned our app will have 3 API endpoints.

#### [POST] /authentication (public)

We want anyone to be able to POST to this endpoint and provide a username and password to authenticate against. We'll want to check the provided credentials against `config.USERNAME` and `config.PASSWORD` to see if they match. If they don't, we'll send an error back to the client. If they do, we'll generate a new JWT and send that back to the client instead.

```javascript
  // Authentication/Login Endpoint
  app.post('/authenticate', (request, response) => {
    const user = request.body;

    // If the user enters credentials that don't match our hard-coded
    // credentials in our .env configuration file, send a JSON error
    if (user.username !== config.USERNAME || user.password !== config.PASSWORD) {
      response.status(403).send({
        success: false,
        message: 'Invalid Credentials'
      });
    }

    // If the credentials are accurate, create a token and send it back
    else {
      let token = jwt.sign(user, app.get('secretKey'), {
        expiresIn: 172800 // expires in 48 hours
      });

      response.json({
        success: true,
        username: user.username,
        token: token
      });
    }
  });
```

Notice how we are checking the `username` and `password` values that were sent with the request against the values we've set in our configuration. If either of the values doesn't match, we return with a 403 (Forbidden) status code with an error message:

![authenticate error][authentication-error]

If we are successful, however, we generate a new jwt with a little help from the npm library by calling `jwt.sign()`. This method takes three arguments:

* The user data that we want to store
* Our secret key (config.CLIENT_SECRET)
* An object of configuration options such as expiration (we set ours to 48 hours)

After that token is generated, we respond to the client with a successful message containing our username (so we can render it to the DOM) and the token (which we'll use to authenticate routes and requests).


![authenticate success][authentication-success]


[authentication-error]: /assets/images/lessons/jwts/authentication-error.png
[authentication-success]: /assets/images/lessons/jwts/authentication-success.png


#### [GET] /api/v1/trains (public)

Let's also create a simple GET endpoint to `/api/v1/trains` that will return the trains in our `app.locals`:

```javascript
app.get('/api/v1/trains', (request, response) => {
  response.send(app.locals.trains);
});
```

Remember this is a public endpoint, anyone should be able to retrieve the train data and it will not require any sort of authentication.

#### [PATCH] /api/v1/trains/:id (private)

Finally, we want to create a `PATCH` endpoint so that administrators can update the train status. As a public endpoint, our code would look something like this, which is mostly fine:

```javascript
app.patch('/api/v1/trains/:id', (request, response) => {
  const { train } = request.body;
  const { id } = request.params;
  const index = app.locals.trains.findIndex((m) => m.id == id);

  if (index === -1) { return response.sendStatus(404); }

  const originalTrain = app.locals.trains[index];
  app.locals.trains[index] = Object.assign(originalTrain, train);

  return response.json(app.locals.trains);
});
```

Let's test that this works in Postman:


![patch-noAuth-success][patch-noAuth-success]

[patch-noAuth-success]: /assets/images/lessons/jwts/patch-noAuth-success.png


This is great, but we actually need to verify that a user is authenticated before allowing any of the functionality in this route to be process. Luckily, Express lets us add as many intermediary steps as we'd like when we hit a particular endpoint. We can create a `checkAuth` function that will verify the JWT before handling this `PATCH` request.

Let's first tell our `PATCH` request to run a `checkAuth` function. We can do this by simply adding `checkAuth` as the second argument in our route:

```javascript
app.patch('/api/v1/trains/:id', checkAuth, (request, response) => {
  // keep all original logic provided earlier
});
```

Now let's create our `checkAuth` function. We first want it to try to find a token to verify. Remember earlier we said JWTs can be passed along as part of the request body, as a header, or as a query param. Let's catch all three of those possibilities in our search:

```javascript
const checkAuth = (request, response, next) => {

  // Check headers/POST body/URL params for an authorization token
  const token = request.body.token ||
                request.param('token') ||
                request.headers['authorization'];

  if (token) {
    // do a lot of fancy things
  }

  else {
    return response.status(403).send({
      success: false,
      message: 'You must be authorized to hit this endpoint'
    });
  }
};
```

So first we're trying to find a JWT anywhere possible, and then we want to respond differently based on whether or not we find one. We'll get to the good part in a minute, but let's first take a look at that `else` block we wrote. If no token is found, it means the request was not authorized. We immediately return a 403 (Forbidden) status code with an error message. By using a `return` statement here, we can ensure that the rest of the functionality in our `PATCH` request will be short-circuited and we'll return the error response right away.

Now let's think about what needs to be done if we **do** find a token. Remember we set the JWT to expire after 48 hours. And there is some potential for a JWT to become invalid or corrupt along the way, so if we find a token, now we have to **verify** that token before allowing the request to continue. Our JWT library provides us with a nice helper method to do this. Within the `if (token)` block, let's add:

```javascript
  jwt.verify(token, app.get('secretKey'), (error, decoded) => {

    // If the token is invalid or expired, respond with an error      
    if (error) {
      return response.status(403).send({
        success: false,
        message: 'Invalid authorization token.'
      });    
    }

    // If the token is valid, save the decoded version to the
    // request for use in other routes & continue on with next()
    else {
      request.decoded = decoded;  
      next();
    }
  });
```

The `jwt.verify()` method takes three arguments:

* The token we want to verify
* Our secret key (config.CLIENT_SECRET) that will allow it to be decoded
* A callback with the results of the verification process

If it turns out the token was faulty, we'll again respond with an error message to alert the user they were not logged in.

If the verification is successful, however, we'll store a reference to the decoded JWT (try console logging that value and see what you get!), and call `next()`, which will allow us to move onto the next part of our `PATCH` request. (The part that actually does the patching!)

Now that we've protected this endpoint, let's try that PATCH request in Postman again, without sending through a JWT. It should fail the way we expect it to:

![patch-error][patch-error]

[patch-error]: /assets/images/lessons/jwts/patch-error.png


Great! Now let's try passing a JWT through with the request body. Make another Postman request to your `/authenticate` endpoint and copy the token value that it responds with. Then let's make another PATCH request with the token value in the body:

![patch-success-body][patch-success-body]

[patch-success-body]: /assets/images/lessons/jwts/patch-success-body.png


We can see we successfully updated the status of one of our trains! Remember we can also pass JWTs through as request headers. Let's remove the `token` from the body of this request and instead pass it in as an 'Authorization' header:

![patch-success-header][patch-success-header]

[patch-success-header]: /assets/images/lessons/jwts/patch-success-header.png


This is how we'll want to write our PATCH request on the client-side when we allow an admin to edit the train status. But for now, hurray! Our server is all set up to handle JWTs when and where we need them! Let's move onto the client-side.


## Protecting a Client-Side Route

Take a moment to familiarize yourself with what exists for you on the client-side. In `/src` we have high-level `app.css` and `app.js` files that style common elements and setup our routes, respectively.

Within the `src/components` directory, we have several components that we'll work with to implement authentication and protected routes:

* `App.js` - high-level container component that will hold our authentication state and train data
* `Home.js` - component to match on the Home route (our index)
* `Admin.js` - dashboard for administrators to edit the train status, matches against our Admin route, we'll make this one private!
* `Login.js` - matches against the Login route, provides a form for users to log in
* `Auth.js` - a small reusable component that will display the current logged-in status and a conditional login or logout button
* `Train.js` - reusable component that display details for a particular train. If a user is authenticated, we'll also display a select menu to edit the train status.

### Step 1: Saving authStatus to state

We need to add some authentication state to keep track of whether or not we have a logged in user. We'll store this in the top-level `App.js` component so that we can easily pass it down to multiple components. In `App.js`:

```javascript
constructor(props) {
  super(props);
  this.state = {
    authStatus: {
      loggedIn: false,
      username: '',
      token: ''
    },
    trains: []
  };
};
```

We'll add an object called `authStatus` that contains three properties:

* `loggedIn` - a boolean value, whether or not the user is loggedin
* `username` - the username of the currently logged in user, for displaying in the `Auth.js` component
* `token` - our JWT token that we'll want to pass along to our protected `PATCH` request to edit train statuses

### Updating the Auth Status

Next let's add a method to our `App.js` component for updating the `authStatus` in state. The `authStatus` will only be updated in one of two ways:

* A user logs in, which will only be possible from the `/login` route
* A user logs out by clicking on a 'Logout' button.

In both of these scenarios, we'll not only want to update the `authStatus` state, but we'll want to redirect the user to a particular route. (`/admin` if they are logging in, `/login` if they've just logged out).

So our method should look something like this:

```javascript
updateAuthStatus(authStatus, redirect) {
  this.setState({authStatus}, browserHistory.push(`/${redirect}/`));
}
```

It will take two arguments:

* `authStatus` - the updated authentication object that we want to use in state
* `redirect` - a string that tells the browser where to navigate to after we've set our state

Let's not forget to `bind` our method within the constructor of our App component:

```javascript
this.updateAuthStatus = this.updateAuthStatus.bind(this);
```

Finally, let's pass both of these down to our child components. From within the `render` method, we can add data to each of our child components like so:

```javascript
{React.cloneElement(
  this.props.children,
  {
    authStatus,
    updateAuthStatus: this.updateAuthStatus,
    trains,
    updateTrains: this.updateTrains
  }
)}
```

(Don't forget to deconstruct the `authStatus` value from state at the top of your render method. )

### Step 2: Updating the Login Component

We've already got a nice form setup to facilitate the login process, but we need to wire up our login button to actually do something onClick. Let's add a click handler that will log a user in:

```jsx
<button id="submit"
  onClick={event => this.login(event)}>Login
</button>
```

And let's create our `login` method on the component. In this method, we'll want to make a `fetch` request to the `/authenticate` endpoint we created earlier. If the request is successful, we want to do two things:

* Store the username and JWT in localStorage for persistence
* Call the `updateAuthStatus` method we just created with the new auth data

Let's try it out:

```javascript
login(event) {
  const { updateAuthStatus } = this.props;

  fetch('http://localhost:3001/authenticate', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  })
  .then(({ username, token }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    updateAuthStatus({
      loggedIn: true,
      username,
      token
    }, 'admin');
  })
  .catch(error => {
    console.log('Error: ', error);
  });
}
```

Now try navigating to the `/login` route of your appliation and see if you can successfully login with the username/password combination you specified in your `.env` file.

Notice how we stored the token and username to localStorage. This will allow us to check localStorage when the app starts up to check if a user has previously logged in. If a user logs in, closes the browser, then navigates back to the application, they shouldn't have to log in again. We need to do this localStorage check as soon as possible so that our components render appropriately. Let's add this check within the `componentDidMount` of our top-level `App.js` component:

```javascript
componentDidMount() {
  let token = localStorage.getItem('token');
  let username = localStorage.getItem('username');

  if (token && username) {
    this.setState({
      authStatus: {
        loggedIn: true,
        username,
        token
      }
    })
  }

  this.fetchTrains();
}
```

Now when a user first loads our app, we'll check for a user in localStorage, and update the `authStatus` accordingly. Note that we do not use our `updateAuthStatus` method here, we're simply setting the `authStatus` object in state. This is because we wouldn't want to immediately redirect anyone to a different route if they've just opened the app.

### Step 3: Adding the Auth Component

We already have an `Auth` component partially setup in `src/components`, but we're not actually using it anywhere. This component renders either a login or logout button depending on whether or not there is a currently authenticated user. Let's include it in our top-level `App.js` component so that it's persistently displayed on every route. I put it right beneath my header:

```jsx
<h1>Big Metro City Choo-Choo Train Authority</h1>
<Auth
  username={authStatus.username}
  updateAuthStatus={this.updateAuthStatus}
/>
```

We'll pass in two props to our Auth component:

* The username to display if someone is logged in
* The `updateAuthStatus` method to facilitate logging out

In a similar fashion to how we updated the `Login` component, we need to handle logging out with a click handler placed on the Logout link. Our logout function needs to do two things:

* Remove the token and username from localStorage
* Update the authStatus to the default state

Add a click handler to the logout link within the render method, and create a logout function for yourself. Because this is a stateless component, we don't need to worry about binding a `this` context - we can simply create a function called `logOut`:

```javascript
const logOut = (e) => {
  e.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  updateAuthStatus({
    loggedIn: false,
    username: '',
    token: ''
  }, 'login');
}
```

*Note: this needs to be *within* the `Auth` declaration so that you'll have access to the `updateAuthStatus` function. Don't forget to add `updateAuthStatus` to the deconstructed arguments in your Auth declaration!*

### Step 4: Protecting the /admin Route

Remember early on in this workshop we said we wanted the `/admin` route to require authentication. This means that if a user attempts to view the route and they are not logged in, it should automatically redirect them to the `/login` route rather than displaying the editing interface. We can do this fairly easily by leveraging some pre-existing [Route hooks](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md#enter-and-leave-hooks).

In our scenario, we'll want to leverage the `onEnter` hook, which will allow us to run some code when a user first enters the route, but before the route components actually load.

In `src/app.js`, where we defined our route structure, add the hook to the `/admin` route like so:

```jsx
<Route path="admin" component={Admin} onEnter={requireAuth} />
```

This will attempt to run a function called `requireAuth` before loading the dashboard. But we have to write `requireAuth` ourselves! All we want to do in this function is check localStorage for a JWT. If none is found, we'll redirect them to the login route. Otherwise, the code will continue to execute normally. In the same file, beneath your imports, add your `requireAuth` function:

```javascript
const requireAuth = (nextState, replace) => {
  let token = localStorage.getItem('token');
  if (!token) {
    replace({ pathname: '/login' })
  }
}
```

Now if you log out of your application and try to manually navigate to the `admin` route, you should notice that you're automatically redirected to the login page. Hurray!


### Step 5: Sending a JWT with a PATCH Request

Remember earlier we protected the `PATCH` endpoint to update the status of a train. This means it requires an authorization token in order to proceed. Even if we are logged in, and viewing the admin dashboard, you'll notice that changing the value of that select menu gives us a 403 Forbidden Error when we try to update the status. (Open the network tab of devtools and then try changing a select menu -- you'll see a red request appear in the list. Click on it to inspect the response data we're currently getting back!)

The logic for this request exists in our stateless `Train.js` component. Let's take a look at the `PATCH` request we're making:

```javascript
fetch(`/api/v1/trains/${trainId}`, {
  method: 'PATCH',
  body: JSON.stringify({
    train: { status: value }
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response.json();
})
.then(updatedTrains => {
  updateTrains(updatedTrains);
})
.catch(error => console.log('Error: ', error));
```

If you inspected the response in devtools, you'll notice the error message said "You must be authorized to hit this endpoint". This means that we're not passing in a token at all. Remember that we can pass JWTs as request headers or bodies, or query params in the URL. Let's first try passing it in with the request body.

First we need to give the `Train` component our token. From `Admin.js`:

```jsx
<Train
  key={train.id}
  {...train}
  updateTrains={updateTrains}
  canEdit={true}
  token={authStatus.token}
/>
```

(Don't forget to deconstruct `authStatus` from your props at the top of the render method!)

And let's make sure we add it to the arguments of our `Train` component:

```jsx
const Train = ({ token, id, line, status, canEdit, updateTrains })
```

Finally, within the body of our fetch request, let's add the token:

```javascript
body: JSON.stringify({
  train: { status: value },
  token
}),
```

Now try changing a select menu to update a train status and you'll see that it succeeds!

### Step 6: Extra Practice

* Try passing that JWT through as a request header
* Try passing that JWT through as a query parameter


## Fin

Good job! You've successfully protected an API endpoint that manipulates data, and secured a route on a Single-Page Application with JSON Web Tokens. You are great.


## Resources & Further Reading
- [Atlassian JWT Structure](https://developer.atlassian.com/static/connect/docs/latest/concepts/understanding-jwt.html#token-structure-claims)
- [Anatomy of a JWT](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token)
- [Understanding JWTs](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec#.xp9snye3h)
- [JWT.io Debugger](https://jwt.io/)
