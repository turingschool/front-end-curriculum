---
title: Cross-Browser Compatibility
length: 69
module: 4
tags: cross-browser, compatibility
---

## Goals

By the end of this lesson, you will know/be able to:

* Understand why cross-browser discrepencies occur and know how to resolve them
* Utilize existing tools & strategies to ensure your apps are as consistent as possible across browsers and platforms

## What is Cross-Browser Compatibility

Cross-Browser compatibility describes the issues and strategies behind making sure your applications work in a consistent manner across as many browsers and platforms as possible. It is mainly an accessibility concern. As we have introduced more devices, operating systems and browsers into the world, attempting to support all of them has become a significant challenge. Spec writers, API developers and platform engineers have learned the importance of standardization as a means to keep this snowballing problem under control, and have put massive effort towards ensuring your apps will behave in a predictable manner when run on the platforms they build.

### Prioritizing Functionality

When aiming to serve as large of an audience as possible, we need a clear outline of what pieces of functionality and experience are highest priority. Delivering a completely consistent experience across all platforms isn't necessarily the goal, and is honestly kinda impossible. The real goal is simply to provide an acceptable experience for as many users as possible. This means we need to ask ourselves a few questions about what we're building:

* What does the "minimum viable product" for our application look like?
* What is the most important thing a user will want to do with our application?
* What parts of the user experience can be sacrificed for the sake of supporting another platform, and how important is it that we serve this audience?

### Understanding Your Audience

When asking yourself the above questions, you also need to put thought into what kind of audience you're serving. This will have an affect on how much time, effort and other resources you put behind supporting another platform. For example, if you're building a medical app to be used by clinicians who consistently work on Windows with Internet Explorer, you'd likely need to put significant muscle behind supporting older versions of IE. Conversely, because the clinicians work most often from their offices on desktop computers, you might be able to avoid having to support mobile devices and could put less effort into things like responsiveness and a slimmed-down mobile experience. While you can make some general, educated guesses about the type of audience you're trying to reach, some teams have dedicated resources for researching these types of demographics. 

### The Approaches: Progressive Enhancement vs. Graceful Degradation

At a high-level, there are two popular approaches for tackling the cross-compat problem: progressive enhancement, and graceful degradation.

**Progressive enhancement** is a strategy where you build your application to work at a baseline level, perhaps somewhere in the middle of the road. You establish a basic user experience that all browsers you wish to support will be able to provide. Then you progressively build in more advanced functionality that will be available for platforms that can leverage it.

**Graceful degradation** means that you are building your application with as many of the latest and greatest bells and whistles you'd like to provide from the start. Your default experience is targeted towards the most modern platforms, but then you will degrade it gracefully for older environments - your app will support a lower level of user experience in older browsers.

While these two approaches usually produce similar results, the big difference between them lies in where your initial priorities are targeted. Do you want to start by building the most complex and advanced application possible, then try to "fix" the experience for older platforms? (Graceful Degradation) Or do you want to nail down the basic user experience for lesser, maybe more common environments, and slowly extend and advance it for future platforms? (Progressive Enhancement)

__________________________________________

## Causes of Compatibility Discrepencies

### Standards Bodies

* [W3C](https://www.w3.org/)
* [WhatWG](https://whatwg.org/)

### Different Browsers

### Different Devices

### Assistive Technologies

__________________________________________

## Strategies & Solutions

### Fallbacks

### Feature Detection

### Polyfills & Shims

### CSS Vendor Prefixes

### IE Conditional Comments

__________________________________________

## Cross-Browser Compat Tools

### Normalization Libraries

#### [Modernizr](https://github.com/modernizr/modernizr)

#### [LocalForage](https://github.com/localForage/localForage)

#### [CSS Normalize](https://necolas.github.io/normalize.css/)

### Selenium Testing

### Sauce Labs

### Virtual Machines

### Browser Stack

__________________________________________

## Resources

* [Mozilla Cross-Browser Testing](https://github.com/mdn/crossbrowser-testing-lab/wiki)
* [Sauce Labs](https://saucelabs.com/)
* [Polyfills vs. Shims](http://www.2ality.com/2011/12/shim-vs-polyfill.html)
* [IE Conditional Comments](https://www.sitepoint.com/web-foundations/internet-explorer-conditional-comments/)
* [BrowserStack](https://www.browserstack.com/)