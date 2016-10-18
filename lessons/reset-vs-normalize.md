---
title: CSS Reset vs Normalize
length: 30 mins
tags: CSS, reset, normalize
---


### CSS Reset vs Normalize

Browsers give plain ol' HTML a set of default styles, but these styling choices aren't necessarily consistent across all browsers. These default styles can also interfere with our layout in unexpected ways as we write our own styles. It's common practice to clear out the default styles and start with a blank slate before you start working on your CSS.

If you're interested in the default CSS styles that are applied in your browser, you can view these links:

* [Chrome](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
* [Firefox](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css)
* [Internet Explorer](http://www.iecss.com/)

There are two approaches used to reconstruct our styles: **reseting** the default styles and **normalizing** the default styles.

Both of these techniques aim to accomplish the same thing -- getting the default styles out of our way as we work -- but they go about doing that in slightly different ways.

Check out this [CodePen example](http://codepen.io/nategreen/pen/MwxRvP?editors=110) to see the difference between reset and normalize in action.

#### Reset

A reset file is a set of CSS rules that resets the styling of all HTML elements to a consistent baseline. It is a 'slash and burn' approach that wipes out all the default styles and lets you start from scratch. If you want to truly start from scratch, a reset file will let you do that.

For more information on the thinking behind reset files, check out this [article](http://meyerweb.com/eric/thoughts/2007/04/18/reset-reasoning/).

A great base for a reset file is Eric Meyer's [Reset CSS](http://meyerweb.com/eric/tools/css/reset/).

#### Normalize

A normalize file is a less extreme way to make the browser defaults consistent. It provides cross-browser consistency without completely losing the default styles and working with modern CSS standards.

A great base normalize file is Nicolas Gallagher's [Normalize.css](https://necolas.github.io/normalize.css/).

For more information on normalize.css and how it works, check out this [article](http://nicolasgallagher.com/about-normalize-css/).
