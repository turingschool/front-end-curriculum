---
title: CORS
tags: security, http
module: 3
---

## Learning Goals

* Student understands why CORS was created
* Student can explain why CORS is not very secure
* Student can determine whether two URLs have a matching origin
* Student can set `Access-Control-Allow-Origin` in a NodeJS app

## Lesson

### The Problem

Your web application serves up several kinds of content:

* HTML
* Images
* JavaScript

Over the last decade server CPU time has become cheap, disk space is near free, but the *data you transfer* still costs a good bit of money.

So, to save $$$, I have my website loading jQuery fetching jQuery off your server. I'm also using some images that you host. Thanks for the free bandwidth!

### SECURITY! THERE'S BEEN A BANDWIDTH ROBBERY!

Because HTTP is a *stateless protocol*, there's no (easy) way to know if the asset being requested is requested by a user of our website or some other website. For example, in a normal scenario:

1. User A requests the HTML from *Wonderful Wanda's* site
2. User A's browser reads the HTML and requests the images and JavaScripts from *Wonderful Wanda*
3. User A's browser displays the HTML, injects the images, and executes the JavaScript

But in Step 2 the server doesn't know that User A is the same person who previously requested the HTML. That means this could happen:

1. User B requests the HTML from *Evil Eve's* website
2. User B's browser reads Eve's HTML, but it tells the browser to fetch the images and JavaScripts from *Wanda's* website
3. User B's browser gets the assets and displays them, all the while using up *Wanda's* bandwidth

This could potentially cause extra load on Wanda's website, cost her extra money to pay for the bandwidth, or other problems.

### Fake Security with CORS

Up-to-date browsers implement a technique to hinder the above stealing called CORS: `Cross-Origin Resource Sharing`.

How does it work? The `headers` in a typical HTTP response might look like this:

```
GET /v1/data HTTP/1.1
Host: api.example.com
Origin: http://www.example.com

HTTP/1.1 200 Ok
Content-Type: application/json
Content-Length: 4365
```

Following the CORS standard means adding one additional line like this:

```
GET /v1/data HTTP/1.1
Host: api.example.com
Origin: http://www.example.com

HTTP/1.1 200 Ok
Content-Type: application/json
Content-Length: 4365
Access-Control-Allow-Origin: http://www.example.com
```

#### Adding It...To What?

This HTTP header, `Access-Control-Allow-Origin`, can be added when serving up any file/asset on the server. Let's return to the original scenario:

1. User A requests the HTML from *Wonderful Wanda's* site
2. User A's browser reads the HTML and requests the images and JavaScripts from *Wanda*
3. The images and JavaScripts are served with `Access-Control-Allow-Origin` set to the domain of *Wanda's* website
4. User A's browser displays the HTML, sees that the `ACAO` address matches the origin of the original HTML, then injects the images, and executes the JavaScript

Everything works out as expected. But when User B hit's up Evil Eve...

1. User B requests the HTML from *Evil Eve's* website
2. User B's browser reads Eve's HTML, but it tells the browser to fetch the images and JavaScripts from *Wanda's* website
3. The images and JavaScripts are served with `Access-Control-Allow-Origin` set to the domain of *Wanda's* website
4. User B's browser gets the assets, see's there's a mismatch between the origin of *Eve's* HTML and *Wanda's* assets' `ACAO`, and it refuses to embed the images or execute the JavaScript

This is only achieving the *slightest bit of "security*" because it's up to User B's browser to decide, in step 4, whether or not to respect the CORS conflict and cause problems.

In fact, if *User B* is in on the plan, they could just [disable CORS on their browser with a Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en).

#### What does it all mean?

More than likely, CORS will be a pain in your development and never really save you any money or bandwidth. Sorry.

#### Are you serious? All this is about a technology I don't care about?

Yes, and no, and yes. Yes you don't want to care. But you'll have to because you'll run into problems like this:

* You are running your own front-end code on `http://localhost:3000/index.html`
* You are running your own API on `http://localhost:3001/api/v1/cookies`

Your browser rendering the `index.html` will freak out about loading data from the API because they have different *"origins"*.

#### What is an Origin?

The "origin" of a resource is the protocol, port, and host of where a resource is stored. Two pages are said to have the same origin if those details match for both pages.  

When your HTML loads from `http://localhost:3000/index.html` the following other requests could happen:

| URL                                 | ORIGIN MATCH | REASON                             |
|-------------------------------------|---------|------------------------------------|
| http://localhost:3000/other.html    | YES |                                    |
| https://localhost:3000/other.html   | NO | Different Protocol (`http` vs `https`) |
| http://example.com                  | NO | Different Host                     |
| http://localhost:3001/other.html    | NO | Different Port                     |

So `http://localhost:3000/index.html` and `http://localhost:3001/api/v1/cookies` would mismatch because of the different port.

### TELL ME WHAT TO DO, MAN!

On the API side, let's say you're running an ExpressJS application. You want to set the headers so that the data from that API is allowed to be fetched/displayed from any origin. You'd add this code to your app:

```js
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

The data/assets served by that API will have `Access-Control-Allow-Origin: *` set so even CORS-enabled browsers will let them be displayed on any page.

## Addendum

* [Enable CORS](https://enable-cors.org)
* [Mozilla Docs on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)  
* [Same Origin Policy Docs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)  
* [XMLHttpRequest Docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [An ExpressJS walkthrough video](https://www.youtube.com/watch?v=cUWcZ4FzgmI)
