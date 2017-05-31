---
title: How The Web Works
length: 180
tags: javascript
module: 2
---

## The Why.

We all use the internet. It's engrained in everything thing that we do. If our career's are going to be centered around the web we might want to have a general understanding of how the web actually works.

As front-end devs our jobs for the most part will be to interact with the requests that are flying through the web. As a developer in your job you will be dealing with servers, requests, routes, and really everything that makes up the web. If we have a stronger understanding of how the web really works then I think that when things break in production or unexpected behavior presents itself you can fix it.

As front-end developers you will notice that a lot of your job is going to be about making sure things are performant. Things are fast (they happen within 30fps) if they aren't then people will most likely stop using your application. Understanding how the web works will only help you in the long run.


## Client Server Model

On June 28th 2006 Senator Ted Stevens described the internet as a 'series of tubes'

```
 "...They want to deliver vast amounts of information over the Internet. And again, the Internet is not something that you just dump something on. It's not a big truck. It's a series of tubes. And if you don't understand, those tubes can be filled and if they are filled, when you put your message in, it gets in line and it's going to be delayed by anyone that puts into that tube enormous amounts of material, enormous amounts of material.""
 ```
Don't let this be you!

Really in a very small and simplistic sense the internet is just a bunch of computers talking to computers. The internet is comprised of servers that hold files and information on them. These servers or server networks are connected by wires either underground or underwater.

Now typically what you will find is that a server typically will provided a service and that the client typically will take advantage of that service. The client will send a request to the server to utilize that service.

In most cases you'll see that a client is software that accesses the services provided by the server. That service is typically a file or application stored on a physical server somewhere. For example if you bank online. Your browser is acting as the client and is communicating to a physical server to grab information about the user's bank account. It uses `requests` to get information / services from the server.

This is where things can get a little tricky. A server/client can be a physical piece of hardware or some software that lets you serve up information. In `game-time` or `idea-box-pivot` you utilized something called a `webpack-dev-server`. When you strip everything down it's really just a `node-server` in the background serving your game / project locally on your machine. In this specific case your computer was a physical server and your laptop was also the client.


### How do Clients and Servers interact?

For the most part what you will be building at your time at Turing will be mainly client-side. Your applications will talk to other back-end services.
When you think about a regular conversation you typically have a request (a question) and a response from the person you're asking. That is how the web works. The client makes requests to the server and the server will always send a response. There is obviously a lot more parts to this interaction and we are going to cover those now.

### What's inside of a request?

So everything typically starts with the `URI` and when I say that I mean the location of the website / server we'd like to use / leverage.
Once we've figured out our destination and hit enter, our client will then send a request to the server we'd like to visit.

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

If you want to see all the type of server responses check out [http status dogs](https://httpstatusdogs.com/)

#### Your Turn

Turn to person next to you and discuss the following things

1) What goes into a `client-request`?
2) What are some examples of:
  * A GET request in slack?
  * A POST request in slack?
  * A PUT/PATCH request in slack?
  * A DELETE request in slack?

Once you're done discussing please visit `idea-box-jhun.herokuapp.com` with your partner and open up your dev tools. Once you're in the dev tools I would like you to go to the network tab. Once you are there please complete the following tasks.

* Refresh the page
  * According to the network tab what verb was used?

* Add an Idea
  * According to the network tab what verb was used?

* Edit an Idea
  * According to the network tab what verb was used?

* Delete an Idea
  * According to the network tab what verb was used?


## DNS

DNS stands for the Domain Name System and this is how our browser is able to find the specific location of the website or file we are looking for on the web. Without this system the internet as we know it would be completely different.

There was a time before cell phones when people had to memorize phone numbers. Then everyone got a cell phone and the cell phone keeps track of that information for you. So when I want to call my mom I don't have to type her phone number into my phone I can just look her up in my contacts and give her a call.

Now if I wanted to find a specific number of a business and I didn't have that number saved into my contacts I have to look it up. I either google search that or check the yellow-pages ( I don't really do this haha). The same goes for the internet.

When you go into your browser and you type into the search bar the name of a website like `www.google.com` what you are really typing is `www.google.com.`

That extra period is super important because thats how your browser is able to find where that website is. Now every device that is connected to the web is given an IP address. Just like in order for you to send mail and receive mail you are going to need an address. Now like our previous example the not all of us can remember everyone phone numbers we know them by name. Now without the DNS if you wanted to visit a website you would actually have to type in the actual IP address

** give it a shot**
type `sudo cat /private/etc/hosts`
this is going to print out the ip address for your localhost server. Pretty neato.

Now because most of don't want to type random numbers into address bar the DNS allows us to type in the domain name. Now when you type in the name of the website you'd like to visit (lets say google.com) the browser and OS are looking into memory to see if they already know the ip address of the address we just typed in.

If the OS and the browser don't have the IP address the OS will then talk to the RNS server (Resolving Name Server). This server is either manually configured or automatically configured by your machine.

Now if the RNS doesn't have the IP for the site you are looking for it will then head to the Root Server. Now if the root server doesn't have the IP address it will then direct the DNS to the Top Level Domain servers or (TLD Servers). In our case it would be the `.com` server.

When the RNS server gets to the TLD server it will ask if it's familiar with website we're looking for. In our case the RNS server will be asking the TLD server if it can get the ip address for `google.com`. If it doesn't have the IP on hand it will direct the RNS server to the Authoritative Name Server or ANS. So in our case the TLD server will send the DNS server to the Google.com server.

The TLD server knows which server to send the RNS to because when each domain is purchased it is registered and once that happens the TLD servers are updated.

Once the RNS gets to the ANS it will receive the IP Address needed to access the website. Once the RNS has that information it stores it in cache and hands it off the OS and then the OS hands it off to your browser.
