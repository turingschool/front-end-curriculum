---
title: Using the Jekyll Static Site Generator
length:
tags: jekyll, github pages
---

### Introduction to Jeykll

[Jekyll](https://jekyllrb.com/docs/home/) is a static site generator that allows us to quickly build sites that are more robust than a set of HTML and CSS files, and provides us with more options to reuse code and layouts so we don't have to re-write content that we want on every page (things like headers and footers, for example). It's also specifically made for GitHub Pages, and together they are a powerful combination that let us build complex and easy to maintain websites fast. It's a lightweight framework that allows us organize content much more nicely than we could with plain ol' HTML. In short, it's a fantastic tool for building static sites. The site you're on _right now_ is built with Jekyll and GitHub Pages!

### Getting Up and Running

#### Installing Jekyll

Since Jekyll is a you have to do a little set-up before you can start using it. The easiest way to install Jekyll is through Ruby Gems, so if you've gone through the install process for Ruby already you're good to go. If you haven't, you may be fine since Ruby comes pre-loaded on Macs. If you have trouble, we'll [troubleshoot](https://jekyllrb.com/docs/troubleshooting/)!

Enter this in the command line:

`gem install jekyll`

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

`jekyll new mysite`

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

####`_includes`

The `_includes` directory holds _partials_ that can be reused on many pages throughout your site. A partial is a piece of code which is pulled out of you main page into it's own file to be reused in your site. Basically, we take a piece of code that we know we'll want in multiple places and we put it on one place so we can reference it over and over without having to rewrite it each time. Header, footers, and even `<head>` tags are great candidates to be made into partials. They're all elements we need on every HTML page, and they'd all be pain to have to write and maintain across all the pages of a big website.

We would go to our HTML file, copy the code we want to put into a partial, go to our `_includes` directory, make a new file and give it an appropriate name (for example, if we were making a partial for our header, we'd name it `header.html`), and then we paste the code in our new file. Boom! You just made a partial.

####`_layouts`

Ok, so we made a partial. But it's not doing anything. Huh. It's not very useful to just have them sitting in there, all organized and tidy.

This where the files in our `_layouts` directory come in! `_layouts` contains the base templates that we will be rendering our partials into. If you look inside this directory, you should see three files that Jekyll auto-generates for us when we ran the `jekyll new` command:

`default.html`

`page.html`

`post.html`

_Note: Jekyll gives us some pre-populated content when we spin up a new site, so there will be HTML in these files. You'll clean up/remove this freebie content and code up when you actually use Jekyll on a project_

Basically, these are the templates that wrap posts, or content (since Jekyll was made with blogging in mind, many things are post-centric and can be adapted to other purposes).

In these template files you'll see code that looks a little funky. Let's talk about what's going on:

`{% include file_name.ext %}` is called a liquid tag, and it tells our template which partial from the `_includes` directory we want to use.

`{{ content }}` is a liquid tag that is used to inject content that isn't in the form of a partial into the page. This would be where the body content from our `index.html` would get rendered.

In the pages of content that we render into our `default.html` layout,  you'll notice that at the top of the page there is what looks like a block of text that's separated from the regular HTML tags by a row of dashes. That's [YAML Front Matter](https://jekyllrb.com/docs/frontmatter/), and it provides important page information and must be included on your pages of content. We can tell the content which page layout we want it to use, and pass it a title, tags, and other types of data specific to a page. In this example, we're using the default layout and giving our page the title of 'Making a Jekyll Page;:

```
---
layout: default
title: Making a Jekyll Page
---
```

### Learning on Your own

Jekyll has lots of good documentation and is pretty darn user friendly. If you want a deep dive into it, take a look at the [documentation](https://jekyllrb.com/docs/home/), and here is a [beginner-friendly tutorial](https://css-tricks.com/building-a-jekyll-site-part-1-of-3/) from CSS Tricks.
