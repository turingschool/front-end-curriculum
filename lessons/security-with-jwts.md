---
title: Securing SPAs with JWTs
length: 1 hour
tags: security, oauth, auth0, jwt, json web tokens
---

### Goals

By the end of this lesson, you will:

- have a basic understanding of token-based security
- recognize the underlying structure of a JWT
- be able to implement a protected route and API endpoint by verifying a JWT

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

## Environment Variables
 

## Protecting Server-Side Endpoints


## Protecting a Client-Side Route


## Resources
- [JWT.io](https://jwt.io/)
- [Auth0](https://auth0.com/)
- [Atlassian JWT Structure](https://developer.atlassian.com/static/connect/docs/latest/concepts/understanding-jwt.html#token-structure-claims)