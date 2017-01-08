---
title: CORS
tags: testing, selenium, aXe
module: 3
---
## What is CORS?

CORS stands for `Cross-Origin Resource Sharing`.

Resources make a **cross-origin HTTP request** when trying to communicate with a different domain than from where the request was sent.  

For example, if my website `www.brenna.com` tries to fetch an image from www.otherdomain.com/image1.jpg, I am making a cross-origin request. Often this type of cross-origin conversation is perfectly fine. It's very common to request resources like CSS files, images, or script files from other servers.  

In certain situations, however, browser restrict cross-origin requests initiated from within scripts. When this happens it is known as the `same-origin policy`.  

What do we mean by "origin"?

## Definition of Origin

The "origin" of a resource is the collection of information representing the protocol, port, and/or host of where a resource is stored. Two pages are said to have the same origin if those details match for both pages.  

Let's say you have a website with a URL of `http://my.company.com`. Check out the following table to look at reasons why communication between your website and the following resources would pass or fail.

```
| URL                                 | OUTCOME | REASON                             |
|-------------------------------------|---------|------------------------------------|
| http://my.company.com/other.html    | SUCCESS |                                    |
| https://my.company.com/other.html   | FAILURE | Different Protocol (http vs https) |
| http://your.company.com             | FAILURE | Different Host                     |
| http://my.company.com:81/other.html | FAILURE | Different Port                     |
```


## Same Origin Policy

The same-origin policy has opinions about how resources from one origin are allowed to communicate with resources from another origin.  

## Resources
[Mozilla Docs on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
[Same Origin Policy Docs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
