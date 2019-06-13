---
title: Chrome Dev Tools
length: 30
tags: html, developer tools, dev tools, chrome, debugging
---

Debugging your front-end code can be an intimidating part of the development process, but it’s also one of the most powerful skills you can acquire. Developers of all levels spend a significant amount of time troubleshooting code, but the more comfortable you are with debugging tools, the easier it will be to isolate, identify and fix broken code.

The front-end languages (HTML, CSS and JavaScript) are run entirely in the browser, so the technique for troubleshooting broken code can happen in many places. Luckily, modern browsers are aware of this and give us a collection of advanced tools to help us debug.

## Developer Tools

One of the first tools you should familiarize yourself with when doing front-end development are the built-in browser Developer Tools, commonly referred to as "dev tools". To open in Chrome:

* `cmd + opt + i`
* (or) Right click on the browser window and select inspect

### Customizing Your Dev Tools

Chrome allows us to customize the dev tools so they are most helpful for you in a given debugging situation. Three common customizations you might want make:
- toggle between dark and light mode
- pin the dev tools to the bottom or sides, or pull out into a separate window
- drag the dev tools to take up more or less space

### The Elements Panel: Debugging HTML, CSS & DOM Events

Most helpful for:
- debugging layout and styling issues
- monitoring DOM Events

The elements panel lets you view the entire HTML source of the current page you are viewing. From here, you can edit, add or remove content and elements directly on the page. Though your changes won’t be saved (any changes made here will be lost upon refreshing the page), sometimes it’s helpful to make tweaks directly in this panel so you can see what effect the changes will have on your application before you implement them.

## Dev Tools Introduction

Please watch the video below, the complete the exercises to work towards that muscle memory of using the dev tools!

<iframe width="100%" height="560" frameborder="0" scrolling="no" src="https://screencast-o-matic.com/embed?sc=cq1IFdTk0P&v=5&ff=1" allowfullscreen="true"></iframe>

## Dev Tools Practice Exercises

- Open the dev tools on your favorite site
- Move the dock to the right side
- Close the dev tools
- Re-open the dev tools - where is the dock?
- Change to dev tools to dark mode (then back to light mode if you prefer that!)
- Bump up the font 3-4 times
- Click the inspect arrow and click on something in the browser. What HTML is it?
- Click on something else in the browser, something you suspect will be a different HTML element.
- Move the dock to the bottom
- Close the dev tools
- Re-open the dev tools - where is the dock? Are you in light or dark mode?
- Open the same site in another tab - are the dev tools open in that tab?
- Search for a `<nav>` inside the Elements Pane. Also, try `<div>`. If there are more than one, you should be able to press `enter/return` to be taken to the next instance of it.
- How many script tags are in the HTML document you are inspecting? (Hint: they should all be grouped together!)
- Close your dev tools
- Open and close them **one last time** to make sure you're getting that keyboard shortcut down!
