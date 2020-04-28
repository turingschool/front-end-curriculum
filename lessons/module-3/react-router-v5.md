---
title: React Router v5
length: 3 hours
tags: React, Router
module: 3
---

## Learning Goals:
* Understand and articulate the need for routing 
* Be able to confidently implement React Router in a project
* Utilize URL params to build dynamic routes 
* Understand how to test components with using React Router 

## Vocab
* `BrowserRouter` A \<Router\> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL
* `Route` Its most basic responsibility is to render some UI when a location matches the route’s path
* `Link` Links provide declarative, accessible navigation around your application
* `NavLink` A special version of the \<Link\> that will add styling attributes to the rendered element when it matches the current URL.
* `Redirect` Rendering a \<Redirect\> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
* `Switch` Renders the first child \<Route\> or \<Redirect\> that matches the location. \<Switch\> is unique in that it renders a route exclusively (only one route wins).
* `match` A match object contains information about how a \<Route path\> matched the URL.
 
## React Router

### Why Routing?

**Routing** refers to keeping a webpage up to date with the current url, and vice-versa.

Most of the apps you've written so far have been single-page applications. One HTML page whose content is updated through user interactions and JS. These DO NOT use routing.They work fine, but put some limits on the user experience of our applications. 

<section class="answer">
### What are some disadvantages of single page apps?
- Users can't use urls to bookmark pages
- Users can't use the back or forward button
- Users can't easily share content from a page in the app
</section>

<section class="note">
If you have written a multi-page application, you may have wrestled with Webpack configs in order to get all your pages built successfully. 
</section>

Fortunately, routing with React is easy! We just need to use a library called <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">React Router</a>.


