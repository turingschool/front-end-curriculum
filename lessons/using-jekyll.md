---
title: Using the Jekyll Static Site Generator
length:
tags: jekyll, github pages
---

### Introduction to Jeykll

[Jekyll](https://jekyllrb.com/docs/home/) is a static site generator that allows us to quickly build sites that are more robust than a set of HTML and CSS files, and provides us with more options to reuse code and layouts so we don't have to re-write content that we want on every page (things like headers and footers, for example). It's also specifically made for GitHub Pages, and together they are a powerful combination that let us build complex and easy to maintain websites fast. It's a lightweight framework that allows us organize content much more nicely than we could with plain ol' HTML. In short, it's a fantastic tool for building static sites. The site you're on _right now_ is built with Jekyll and GitHub Pages!

### Getting Up and Running

#### Installing Jekyll

Since Jekyll is a you have to do a little set-up before you can start using it. The easiest way to install Jekyll is through Ruby Gems, so if you've gone through the install process for Ruby already you're good to go. If you haven't, you may be fine since Ruby comes pre-loaded on Macs. If you get stuck, we'll [troubleshoot](https://jekyllrb.com/docs/troubleshooting/).

Enter this in the command line:

```
gem install jekyll
```

If all's well, you'll see something like this:

```
Successfully installed jekyll-3.1.6
Parsing documentation for jekyll-3.1.6
Done installing documentation for jekyll after 1 seconds
1 gem installed
```

If you didn't get any errors, you should be ready to go!

#### Setting Up a New Project

Jekyll gives you a ready-to-roll directory structure when you set up a new project. All you have to do is run this in your command line:

```
jekyll new mysite
```

This is a pretty standard type of command to run when you're making a new project using a framework. Let's break it down: `jekyll` is specifying what gem or tool we're using, `new` is saying we'd like to make a new project, and `mysite` is the name of our new project directory. That's straightforward!

Go ahead and navigate into your new project directory and take a look around. You'll see a directory structure that looks something like this example from the [Jekyll docs](https://jekyllrb.com/docs/structure/):

```
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
├── .jekyll-metadata
└── index.html
```

For our purposes today, we'll just be using the `_includes` and `_layouts` directories, we won't worry about the other directories and files Jekyll gave us for now. If you're curious, they have great [documentation about structure](https://jekyllrb.com/docs/structure/).


### Learning to Fish

Jekyll has lots of well documented and user-friendly. To take a deep dive into it, take a look at the [documentation](https://jekyllrb.com/docs/home/), and here is a [beginner-friendly tutorial](https://css-tricks.com/building-a-jekyll-site-part-1-of-3/) from CSS Tricks.
