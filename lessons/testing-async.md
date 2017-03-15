---
title: Testing Async JavaScript & API Calls
module: 3
---

## Goals

By the end of this lesson, you will:

* Know how to test React components that contain methods with async JavaScript 
* Understand how and what to test when making API calls with fetch

## Async JavaScript

## Testing API Calls
When our application makes a request to an API endpoint, we typically want to test our app's **reaction** to the response it receives from that request. We don't really care about what goes on in the back-end, we just want to know that we can handle the response appropriately. This makes API calls a good scenario for using mocks. However, we're usually placing our fetch requests within other functions or methods, and we might not want to override the functionality of the entire method with a mock. Consider the following example:

```javascript
tktktk
```

If we would like to test this method, containing a fetch request, we're going to run into some issues when it executes. Mainly, `fetch` won't be available when running our tests in the console and we wouldn't have access to the API endpoint. Lucky for us, there are a bunch of libraries out there we can use to mock out our fetch requests. One of the first you'll come across is [nock](https://github.com/node-nock/nock). I've historically had an impossible time working with this, I don't know why, and I don't know how it's the most popular library out there, but the one I'm most comfortable with is [fetch-mock](https://www.npmjs.com/package/fetch-mock).

Fetch-mock allows us to intercept any fetch requests we make and explicitly set a response to send back. This helps us to A) avoid issues where fetch is not available through the test runner B) test if our application reacts to a particular response in the appropriate manner.

