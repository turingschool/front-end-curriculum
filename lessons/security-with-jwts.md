---
title: Securing SPAs with JWTs
length: 1 hour
tags: security, oauth, auth0, jwt, json web tokens
---

### Goals

By the end of this lesson, you will:

- have a basic understanding of token-based security
- recognize the underlying structure of a JWT
- be able to implement a JWT through Auth0

## Application Security with JSON Web Tokens
Securing your single page applications means that any application data being transmitted must be done so in a verifiable and trusted manner. This includes scenarios such as user authentication and API requests to send and retrieve application data. Without these features, applications can't really do much. Despite how important it is to keep security issues in mind while building applications, many launch without any precautions in place. While security is a difficult problem to solve, there are some standards we can take advantage of to help make our apps more secure.


## Introducing JSON Web Tokens
JSON Web Tokens, JWTs for short, provide us with a compact way to securely transmit data encoded as a JSON object. JSON objects are simple and compact, making them easy to pass along as query strings, headers, and request bodies. Similar to API Keys that help verify access to an API, JSON web tokens can be passed along to your server requests, and look something like this:

```javascript
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

This might look familiar to the API Tokens you may have used when interacting with public APIs or third-party services such as Firebase. But what does it actually mean?

JWTs are made up of three distinct parts:

* Header
* Payload
* Signature

Each of these sections are separated by a `.` in the final format of the JWT, which is represented as a simple string.

### Header
The header usually consists of two pieces of information: the type of token (a JWT, in our case) and the hashing algorithm being used. A hashing algorithm is a way to transform a string of characters into a shorter key that represents the original string. (Think back to the the URL shortening you did!) Hashes are easier and faster to lookup than the original value. For example, the header portion of a JWT might represent a JSON object like this:

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

This JSON object is then Base64Url encoded to form the first part of the JWT, which might look something like this:

```javascript
eyJhbGci0iJIUzI1NiIsInR5cCI6IkpXVCJ9
```

Encoding is the process of converting data into a format that allows for efficient data transmission and storage, among other things. Base64 encoding is a convenient way to manage data in a simple, readable text format rather than as binary data. [Base64Url](https://brockallen.com/2014/10/17/base64url-encoding/) encoding is similar to Base64, although it avoids using common reserved URL characters (such as the / and -).

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

## Using JWTs with JWT.io
While we can implement JWTs on our own, the native spec and implementation still isn't the most user-friendly interface for developers. So, like everything else in the tech world, a simpler service was built on top of them to make it easier for us to use. One popular service created by [Auth0](https://auth0.com/) is [JWT.io](https://jwt.io/). Similar to [Firebase](https://firebase.google.com/), JWT.io provides 3rd-party authentication that allows you to secure your client-side application with logins for Google, Facebook, etc. It also allows you to make secure requests to private API endpoints on a server.


## Getting Started
We're going to create a simple React message board that allows logged in users to view messages that have been previously posted, and requires a JSON Web Token to allow a user to post a message.

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
You'll see a `.env.example` file in the root of the repo we just cloned. It should look something like this:

```javascript
AUTH0_CLIENT_ID='Auth Client ID'
AUTH0_DOMAIN='Auth0 Domain'
AUTH0_SECRET='Auth0 Secret'
```

You'll want to copy this file and create a new one that is just titled `.env`. Replace these values with your own settings from the Auth0 client you just set up. You'll be able to see all of these values on the [settings page in Auth0](https://manage.auth0.com/#/clients). You'll have to click to 'reveal' the client secret value. Once you've updated these settings you **do not commit this file to github**. This is secret information (hence the value, 'client secret'). Double check that the `.env` file is in your `.gitignore` before pushing up your code.

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

In the `/src/views/Main` directory, open the `routes.js` file, and import our AuthService:

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

## Wiring up the Login
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

## Protecting an Endpoint
Now that we're logged in, we can see a form that should allow us to submit a new message to the board. If we try this as-is, we see we're getting an authorization error:

![unauthorized][unauthorized]

[unauthorized]: /assets/images/lessons/jwts/unauthorized.png

Let's take a look at the POST request we're currently making in the `PostNewMessage` component within the `/src/components/` directory:

```javascript
  sendMessage(event) {
    const { auth } = this.props

    fetch('/api/v1/messages',
      { 
        method: 'POST',
        body: JSON.stringify({ 
          message: {
            content: this.state.messageText,
            username: auth.getProfile().name
          }
        })
      }
    )
    .then(response => auth.checkStatus(response))
    .then(response => window.location.reload())
    .catch(error => console.log('Error submitting new message: ', error));
  }
```

We're using the fetch API to `POST` to the `/api/v1/messages` endpoint. We're passing in a `username` which we grab from our auth service for the currently logged in user, and a `content` property which contains the text of the message.

When the request first hits, we again use our auth service to check the authenticity of the request with `auth.checkStatus()`. Even though we know we are logged in, because we've hit the home URL of our application, this particular API endpoint doesn't necessarily know where the request is coming from, and wants to be 100% certain that it's being performed by an authenticated user.

Remember earlier we said that JSON Web Tokens are just encoded JSON objects that can be passed in as query params or headers. POSTing to `/api/v1/messages` is a protected endpoint that requires a signed JSON Web Token in order to return successfully. If you take a look at the `server.js` file, you can see how the request handler takes a parameter called `authenticate` to verify the request:

```javascript
var authenticate = jwt({
  secret: new Buffer(process.env.AUTH0_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT_ID
});

app.post('/api/v1/messages', authenticate, (request, response) => {
  const { message } = request.body;

  message.id = message.id || Date.now();
  app.locals.messages.push(message);
  response.json({ message });
});
```

In order to authorize this particular request, we can pass in our authentication token as a header. Headers are a way to configure the request so that the server has everything it needs to process it. Let's add some headers to our request:

```javascript
  fetch('/api/v1/messages',
    { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth.getToken()
      },
      body: JSON.stringify({ 
        message: {
          content: this.state.messageText,
          username: auth.getProfile().name
        }
      })
    }
  )
```

The key header here that we want to pay attention to is the `Authorization` header. We are setting this equal to 'Bearer <your token>'. The token we are retrieving from our auth service, which we've stored in localStorage.

If we refresh and try to make the request again, we should see the POST request goes through successfull and our new message is rendered in the UI.

## Resources
- [JWT.io](https://jwt.io/)
- [Auth0](https://auth0.com/)
- [Atlassian JWT Structure](https://developer.atlassian.com/static/connect/docs/latest/concepts/understanding-jwt.html#token-structure-claims)