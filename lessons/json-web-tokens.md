---
title: Securing SPAs with JWTs
length: 1 hour
tags: security, oauth, auth0, jwt, json web tokens
---

### Goals

By the end of this lesson, you will:

- have a basic understanding of token-based authentication
- be able to secure a basic node/express app with JWTs

## Token-Based Authentication
Secure authentication is a vital aspect of many applications. While traditional oAuth methods can be difficult to understand, some alternative solutions have made this process easier for developers. In this lesson, we'll learn how to secure our Node and Express applications and APIs with JSON Web Tokens.

## JSON Web Tokens
JSON Web Tokens, JWTs for short, provide us with a compact way to securely transmit data encoded as a JSON object. JSON objects are simple and compact, making them easy to pass along as query strings, headers, and request bodies. Similar to API Keys that help verify access to an API, JSON web tokens need to be passed along with your server requests, and look something like this:

```javascript
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ.
-yIVBD5b73C75osbmwwshQNRC7frWUYrqaTjTpza2y4
```

If you're interested in understanding the breakdown of what goes into creating a JSON Web Token, you can learn more about that [here](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec#.pnimsp9e2). Going in-depth about that information in this lesson isn't completely necessary, thanks to a service that we'll use called [JWT.io](https://jwt.io/).

## Using JWTs with JWT.io
While we can implement JWTs on our own, the native spec and implementation *still* isn't the most user-friendly interface for developers. So, like everything else in the tech world, a simpler service was built on top of them to make it easier for us to use. One popular service created by [Auth0](https://auth0.com/) is [JWT.io](https://jwt.io/). Similar to [Firebase](https://firebase.google.com/), JWT.io provides 3rd-party authentication that allows you to secure your client-side application with logins for Google, Facebook, etc. It also allows you to make secure requests to private API endpoints on a server.

## Getting Started
We're going to create a simple React message board that allows anyone to view messages that have been previously posted, but requires an authenticated user to post a message.

1. Clone this [repo](https://github.com/turingschool-examples/auth0-react.git)
2. Create a free account with Auth0 [here](https://auth0.com/signup), enable Google Authentication, and select Single Page App with React as your framework:

![google auth][google-auth]
![spa react][spa-react]

[google-auth]: /assets/images/lessons/jwts/google-auth.png
[spa-react]: /assets/images/lessons/jwts/spa-react.png

## Configuring an Auth0 Client
At this point, Auth0 has already created a new client (i.e. a new application) for you. You can view the settings of your client [here](https://manage.auth0.com/#/clients). Go ahead and change the name of your application, set the client type to 'Single Page Application' and add a callback URL to `http://localhost:3000/login` like so:

![client-settings][client-settings]

[client-settings]: /assets/images/lessons/jwts/client-settings.png


## Configure Your Application Environment Settings
You'll see a `.env` file in the root of the repo we just cloned. It should look something like this:

```javascript
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_DOMAIN='YOUR_DOMAIN'
AUTH0_SECRET='YOUR_CLIENT_SECRET'
```

You'll want to replace these values with your own settings from the Auth0 client you just set up. You'll be able to see all of these values on the [settings page in Auth0](https://manage.auth0.com/#/clients). You'll have to click to 'reveal' the client secret value. Once you've updated these settings you **do not commit this file to github**. This is secret information (hence the value, 'client secret'). Add the `.env` file to your `.gitignore` before pushing up your code.

## Creating an Authentication Service
Similar to when we used firebase to set up login and logout methods, we'll want to create an auth service that will handle user sign-in through Auth0 and store our session information in localStorage. 

In the `/src/utils` directory, there is a file called `AuthService`. Some of the boilerplate code has already been filled out for you.

The first thing we need to do is utilize the [Auth0Lock]() library to configure what we want to happen when a user clicks the 'login' button. The library has already been imported for you. In the `constructor` of our AuthService class, we'll want to create a new instance of Auth0Lock:

```javascript
  // Configure Auth0
  this.lock = new Auth0Lock(clientId, domain, {
    auth: {
      redirectUrl: `${window.location.origin}/login`,
      responseType: 'token'
    }
  })
```

Whenever we instatiate our AuthService file, we will have access to a new property, `lock`. This code creates a new instance of Auth0Lock, which takes in our clientId and domain that we specified in our `.env` file. The final parameter is where we determine what will happen when a user logs in:

1. We want to redirect the user to a pre-approved URL by setting a `redirectUrl`. Remember in our Auth0 client settings we added `http://localhost:3000/login` as a callback URL. That's what we'll want to use here. *(Note: using `window.location.origin` simply allows us to redirect to `/login` without having to worry about exactly what port we are running our app on)*
2. We want to return the actual JSON Web Token so that we can use it for future requests. We can do this by setting `responseType` to `token`.

Your constructor method should now look like this:

```javascript
  constructor(clientId, domain) {
    super()

    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${window.location.origin}/login`,
        responseType: 'token'
      }
    })

    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.lock.on('authorization_error', this._authorizationError.bind(this))
    this.login = this.login.bind(this)
  }
```

Next we need a `login` method, that will actually display the pop-up that allows us to fill in our Google account information and authenticate:

```javascript
  login() {
    this.lock.show()
  }
```

This is as simple as calling `this.lock.show()`. This is built-in to the Auth0Lock library we just imported and configured, and will display the authentication widget (similar to Firebase).

We'll also want to add a `logout` method to clear out any data when a user logs out. There are some pre-defined methods in our service that set two pieces of data in localStorage: `id_token` and `profile`. When we log out, we want to remove these keys from localStorage:

```javascript
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
```

## Putting the Authentication to Work
We're going to want to work with authentication on every route in our application. In this case, we only have a login and a home route. But if our app were to grow, we'd want to make sure we were checking if a user was logged in no matter what page they landed on or what URL they came to. This means we'll want to instantiate our AuthService in our `routes` file.

In the `/src/views/` directory, open the `routes.js` file, and import our AuthService:

```javascript
import AuthService from 'utils/AuthService'
```

The first thing we want to do is create a new instance of our service and call it `auth`:

```javascript
const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);
```

This is automatically pulling in the client ID and domain that we specified in our `.env` file.

We've already set up a couple of routes, and we want to give each of them access to our new `auth` variable. Add `auth` as a prop on the top-level `Route` component:

```javascript
  <Route path="/" component={Container} auth={auth}>
```

Finally, when we want to protect a route, (e.g. our 'home' route), we want to add a check against our authentication service to see if a user is logged in or not. Add a `requireAuth` helper above the `makeMainRoutes` function:

```javascript
// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}
```

This is using our auth service to check if the user is logged in, and if they are not, will automatically redirect them to the login page. Now to protect our home route, we can add an `onEnter` prop to execute this call:

```javascript
<Route path="home" component={Home} onEnter={requireAuth} />
```

## Creating the Login Button
In `src/views/Login` we have a Login component that isn't doing much right now. We have already passed the instance of our AuthService into the component through the top-level route component, and can access it via `this.props.auth`.

In our render method, we want to make use of our `auth` prop and call the `login` method we created in our service when we click the login button:

```javascript
  render() {
    const { auth } = this.props
    return (
      <div>
        <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
```

Now if we boot up our application and try to navigate to `http://localhost:3000/home` it should automatically redirect us to `http://localhost:3000/login`. When we click our login button, we should see the authentication widget pop up and be able to log in.





## Resources
- [JWT.io](https://jwt.io/)
- [Auth0](https://auth0.com/)