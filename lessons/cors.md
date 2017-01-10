---
title: CORS
tags: testing, selenium, aXe
module: 3
---
## What is CORS?

CORS stands for `Cross-Origin Resource Sharing`.

Resources make a **cross-origin HTTP request** when trying to communicate with a different domain than from where the request was sent.  

For example, if my website `www.brenna.com` tries to fetch an image from `www.otherdomain.com/image1.jpg`, I am making a cross-origin request. Often this type of cross-origin conversation is perfectly fine. It's very common to request resources like CSS files, images, or script files from other servers.  

In certain situations, however, browser restrict cross-origin requests initiated from within scripts. When this happens it is known as the `same-origin policy`.  

What do we mean by "origin"?

## Definition of Origin

The "origin" of a resource is the collection of information representing the protocol, port, and/or host of where a resource is stored. Two pages are said to have the same origin if those details match for both pages.  

The first time you make a request to load any webpage, that request defines the origin of where that intial `index.html` page comes from. Any request after that is checked against this original source.

Let's say you have a website with a URL of `http://my.company.com`. Check out the following table to look at reasons why communication between your website and the following resources would pass or fail.


| URL                                 | OUTCOME | REASON                             |
|-------------------------------------|---------|------------------------------------|
| http://my.company.com/other.html    | SUCCESS |                                    |
| https://my.company.com/other.html   | FAILURE | Different Protocol (`http` vs `https`) |
| http://your.company.com             | FAILURE | Different Host                     |
| http://my.company.com:81/other.html | FAILURE | Different Port                     |



## Same Origin Policy

The `same-origin policy` has opinions about how resources from one origin are allowed to communicate with resources from another origin.  

Requests made to the same origin for local resources are always allowed. This may seem like an obvious statement, but it's worth mentally taking note that any time your webpage needs to load an image that is stored locally, it is making a `same-origin request`.  


#### CORS

Cross-Origin Resource Sharing standard give servers access to other domains based on configuration specifications. Most modern browsers use an API to establish CORS - many of which you are familiar with, like `Fetch`, and `XMLHttpRequest` (which is what `AJAX` uses to update pages without refresh, long story short).  

It works by adding specific `HTTP headers` that add extra directions - these manually set headers can be allowed or rejected by the receiving host based on what type of request has been made.  

#### Ok but for real...WTF is a 'HTTP Request Header'

Great question! At the end of the day, HTTP headers give the server additional information to respond as quickly as possible to what the user is expecting to get back.  

Let's spy on a browser request to see what is being sent in this magical package of headers.  Take a second to do the following:   

* In Chrome, visit your favorite go-to website and open the dev tools.
* Select the `Network` tab.
* Reload the page, and select the first item on the list  
  * Ideally this is the initial request to get the `html` document you're looking at.
* Click on the tab on the right that says `headers`.  
  * All of the HTTP headers will be displayed on the right panel.  


In this context, the headers we care about most are `accept` and `cookie`. `Accept` tells the responding server what it expects the response format to be. 



#### Visual: HTTP Request & Server Response  








## Resources
[Mozilla Docs on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)  
[Same Origin Policy Docs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)  
[XMLHttpRequest Docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
