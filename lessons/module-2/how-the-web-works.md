---
title: How The Web Works
length: 90
tags: javascript
module: 2
---

## Learning Goals
- Understand the HTTP request/response cycle
- Answer the question what happens when I type in "www.google.com" in my web browser

## Vocab

- `Client` A computer that is consuming data (and is a client of a server)
- `Server` A computer that is providing (serving) data
- `URI` Uniform Resource Identifier
- `URL` Uniform Resource Locator
- `HTTP` Hyper Text Transfer Protocol
- `DNS` Domain Name System
- `IP Address` Internet Protocol Address

## The Why.
<section class="call-to-action">
 Journal for 3 minutes,answer the following. <br>
 
    Why is learning how the web works important for you as a computer programmer.
 
 </section>

## Client Server Model


Really in a very small and simplistic sense the internet is just a bunch of computers talking to computers. The internet is comprised of Servers that hold files and information on them. These servers or server networks are connected by wires either underground or underwater.

Now typically what you will find is that a Server typically will provided a service and that the client typically will take advantage of that service. The client will send a request to the server to utilize that service.

In most cases you'll see that a client is software that accesses the data provided by the server. That service is typically a file or application stored on a physical server somewhere. For example if you bank online. Your browser is acting as the client and is communicating to a physical server to grab information about the user's bank account. It uses `requests` to get information / services from the server.

This is where things can get a little tricky. A server/client can be a physical piece of hardware or some software that lets you serve up information. In `group project` you utilized something called a `webpack-dev-server`. When you strip everything down it's really just a `node-server` in the background serving your game / project locally on your machine. In this specific case your computer was a physical server and your laptop was also the client.


### How do Clients and Servers interact?

For the most part what you will be building at your time at turing will be mainly client-side. Your applications will talk to other back-end services.
When you think about a regular conversation you typically have a request (a questions) and a response from the person you're asking. That is how the web works. The client makes requests to the server and the server will always send a response. There is obviously a lot more parts to this interaction and we are going to cover those now.



### What's inside of a request?

Check out [this page](https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html#:~:text=A%20request%20message%20from%20a,the%20protocol%20version%20in%20use.) on requests to find out more about an HTTP request.
Write down everything you can and then if you want to find out more, click on the dropdown link below.

<section class="answer">
### Request
So everything typically starts with the `URL` and when I say that I mean the location of the website / server we'd like to user / leverage.
Once we've figured out our destination and hit enter our client will then send a request to the server we'd like to visit.

The request is comprised of 2 parts. We have the `header` and we also have the `body`. These two parts make up the whole of a server request.

#### The Header

The first part the client is going to send is going to be the request header. The header contains important information pertaining to the user and more importantly how the client is going to process the information given it.
It will have information like the `user-agent`. This communicates to the server what kind of os / software the user is using to interact with the server. The headers also contain information like the `referer` which typically holds the address of the previous page and `cache-control` that signify how long the information is stored in memory for.

#### The Body

This part of the request is really important because this is where the interaction between the server and the client really begins.
Within the body the client will send over an http verb. The verb that is sent over is very important because it defines the interaction that will happen between client and server.

The verbs that are used are
  * GET
  * POST
  * PUT / PATCH
  * DELETE

</section>

## What about a response?

So just like any sort of conversation there needs to be some sort of response from the server. Once a request is received by the server it issues an appropriate response. That response is sent back to the client.

The response will hold 3 parts.
 * Meta Data: Content type / Content Length (size in bytes)
 * Status Code: 200, 400, 404, 302, 500
 * Body: css, json, html etc

Now the response codes that you'll typically run into are
 * 200 (Ok)
 * 400 (Bad Request)
 * 404 (Not Found)
 * 302 (Found)
 * 500 (Internal Server Error)

If you want to see all the type of server responses check out [http status dogs](https://http.dog/) and [http.dev](https://http.dev/status). If you want to live test HTTP responses, check out [http.app](https://http.app/) 


<section class="call-to-action ">

#### Your Turn

Turn to person next to you and discuss the following things

1) What goes into a `client-request`?
2) What are some examples of:
  * A GET request in slack?
  * A POST request in slack?
  * A PUT/PATCH request in slack?
  * A DELETE request in slack?

## DNS

DNS also known as domain name system is used to map domain names to IP addresses. A domain name is the same as the url you would type into your web browser. www.google.com for example. Now this name has a corresponding IP address. The IP address meaning internet protocol address, which is a unique string of numbers separated by periods.

A common analogy used is to think of DNS like a phone book, each person’s name is mapped to a phone number, similar to how a domain name is mapped to a IP address. IP address numbers needing to be unique so there is not namespace collision.

[This video](https://www.youtube.com/watch?v=72snZctFFtA) explains DNS!

If you are curious on what how to find the IP address of a domain name, you can use the `nslookup` command in your terminal, it stands for namespace lookup.  Type it in the terminal with the domain you are interested in finding the IP address. You can always type `nslookup man`
to see further instructions on how to use the `nslookup` tool.
