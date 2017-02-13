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

Cross-Browser compatibility describes the issues and strategies behind making sure your applications work in a consistent manner across as many browsers and platforms as possible. It is mainly an accessibility concern. As we have introduced more devices, operating systems and browsers into the world, attempting to support all of them has become a significant challenge. Spec writers, API developers and platform engineers have learned the importance of standardization as a means to keep this snowballing problem under control, and have put massive effort towards ensuring your apps will behave in a predictable manner when run on the platforms they build. Standardization bodies such as [WhatWG](https://whatwg.org/) and [W3C](https://www.w3.org/) have been delivering well-defined specifications for how common application features should be implemented to help facilitate consistent experiences. 

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

Sometimes browsers implement APIs in different ways. Companies like Google, Mozilla and Microsoft have "Platform Engineering" teams who are responsible for building Chrome, Firefox and Internet Explorer. These engineers are in charge of implementing the features and APIs we use in our web applications -- from HTML tags such as `video` and `audio`, and JavaScript APIs such as `serviceWorkers` and `geolocation`.

As mentioned earlier, there now exist standards bodies such as W3C and WhatWG that provide definitions for how these features should be implemented in browsers. But this wasn't always the case. Years ago, browser vendors deliberately provided custom feature implementations in an attempt to gain a competitive advantage. This made developer's jobs incredibly difficult -- getting a single feature working across multiple browsers often meant writing the functionality multiple times, once for each browser that needed to be supported. Eventually we all made up and agreed we were being silly and began to prioritize standardization. (Also, browser companies began to make money in different ways and no longer needed to rely on their browser for financial stability.)

Though we've all agreed to standardize, feature implementation discrepencies still exist in some contexts. The most bleeding-edge APIs are often changing rapidly as spec writers debate how they should behave. While the specification is in-flux, so is the implementation. Platform engineers will get started on the implementation right away, and they might contain bugs or outdated APIs while the spec is being solidified. This is unavoidable and our best bet in these scenarios is to simply be patient while we wait for a more stable release before using these features in production.

Another reason discrepencies continue to exist is because people are still using old browsers and environments that are no longer being updated. For example, some larger companies that provide all their employees with Windows and a copy of Internet Explorer 8 might not have the resources to upgrade the entire staff to a new environment. Meanwhile, the teams over at Microsoft are busy working on more bleeding-edge versions of Internet Explorer, and trying to keep up with the newer APIs coming out. The support and resources they put into IE8 is minimal, if any, and thus that browser will never come up to par with more modern ones.

Finally, some companies are hesitant to stop supporting older browsers simply for financial reasons. The New York Times makes much more of its money off of online subscriptions and advertisements in recent years. Previously, they continued to support older versions of IE because not doing so could have had drastic effects on their revenue if they happened to lose that portion of their user base. (They eventually dropped support for IE8 in 2014 and IE9 in 2015. When doing so, they put an indicator on the UI for reader's using those browsers to let them know their browser would soon no longer be supported. The response was overwhelmingly positive. A large percentage of users were able to upgrade their browsers and did so.) 

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

* [Progressive Enhancement vs. Graceful Degradation](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)
* [Mozilla Cross-Browser Testing](https://github.com/mdn/crossbrowser-testing-lab/wiki)
* [Sauce Labs](https://saucelabs.com/)
* [Polyfills vs. Shims](http://www.2ality.com/2011/12/shim-vs-polyfill.html)
* [IE Conditional Comments](https://www.sitepoint.com/web-foundations/internet-explorer-conditional-comments/)
* [BrowserStack](https://www.browserstack.com/)