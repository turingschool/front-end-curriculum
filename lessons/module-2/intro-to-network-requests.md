---
title: Intro to Network Requests
length: 180 minutes
tags: javascript, network requests, fetch, ajax, promises
---

<!-- Show all the data that we can get (not through docs, but maybe examples of JSON with cool data).
We have access to it out there, but how do we get it?
Introduce the request-response cycle.
HTTP is a structured language - what goes into a request? what comes back in a response?
Why do we still talk about XHR? If we're barely making an effort even for jQuery. They will never see this...it still is technically asynchronous.
In reality, requests take time.
Make an example using setTimeout that shows how a request might work. Make this as simple as possible.
What do we do? Use fetch with promises.
Still glossing over promises?...
Show the network tab for debugging

This could be a different, short-ish lesson (1-2 hours), but maybe something we have them figure out on their own:
Go a little more in-depth with promises.
Show happy and sad path where catch might be used. -->


### Goals


## Data is Everywhere!

Data is everywhere on the internet. Open, free, interesting data is available for you to consume for your application. But how do we get access to the data?

Many servers on the internet ("in the cloud") store data that is freely open to access. That data is accessible only if we learn how to communicate with servers.

[Here are some examples of open data]().

## The Request-Response Cycle

HTTP (Hypertext Transfer Protocol) is the language we need to know to communicate with servers. It's not as boring as it sounds.

There are two components to communicating with servers: the **request** and the **response**.