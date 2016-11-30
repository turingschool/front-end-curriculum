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
While we can implement JWTs on our own, the native spec and implementation *still* isn't the most user-friendly interface for developers. So, like everything else in the tech world, a simpler service was built on top of them to make it easier for us to use. One popular service created by [Auth0](https://auth0.com/) is [JWT.io](https://jwt.io/). Similar to [Firebase](https://firebase.google.com/), JWT.io provides 3rd-party authentication that allows you to secure your client-side application with logins for Google, Facebook, etc. It also allows you to make secure requests to private API endpoints on a server. Let's create a simple React application that allows users to login, and contains a protected endpoint that requires authentication.

## Getting Started

1. Clone this [repo](https://github.com/turingschool-examples/auth0-react.git)
2. Create a free account with Auth0 [here](https://auth0.com/signup), enable Google Authentication, and select Single Page App with React as your framework:

![google auth][google-auth]
![spa react][spa-react]

[google-auth]: /assets/images/lessons/jwts/google-auth.png
[spa-react]: /assets/images/lessons/jwts/spa-react.png

## Configuring an Auth0 Client
At this point, Auth0 has already created a new client (i.e. a new application) for you. You can view the settings of your client [here](https://manage.auth0.com/#/clients). Go ahead and change the name of your application, set the client type to 'Single Page Application' and add a callback URL like so:

![client-settings][client-settings]

[client-settings]: /assets/images/lessons/jwts/client-settings.png


### Configure Your Application Environment Settings
You'll see a `.env` file in the root of the repo we just cloned. It should look something like this:

```javascript
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_DOMAIN='YOUR_DOMAIN'
AUTH0_SECRET='YOUR_CLIENT_SECRET'
```

You'll want to replace these values with your own settings from the Auth0 client you just set up. You'll be able to see all of these values on the [settings page in Auth0](https://manage.auth0.com/#/clients). You'll have to click to 'reveal' the client secret value. Once you've updated these settings you **do not commit this file to github**. This is secret information (hence the value, 'client secret'). Add the `.env` file to your `.gitignore` before pushing up your code.




## Resources
- [JWT.io](https://jwt.io/)
- [Auth0](https://auth0.com/)