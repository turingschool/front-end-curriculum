---
title: Using the Jekyll Static Site Generator
length:
tags: jekyll, github pages
---

### Introduction to Jeykll

[Jekyll](https://jekyllrb.com/docs/home/) is a static site generator that allows us to quickly build sites that are more robust than a set of HTML and CSS files, and provides us with more options to reuse code and layouts so we don't have to re-write content that we want on every page (things like headers and footers, for example). It's also specifically made for GitHub Pages, and together they are a powerful combination that let us build complex and easy to maintain websites fast. It's a lightweight framework that allows us organize content much more nicely than we could with plain ol' HTML. In short, it's a fantastic tool for building static sites. The site you're on _right now_ is built with Jekyll and GitHub Pages!

### Getting Up and Running

#### Installing Jekyll

You have to do a little set-up before you can start using Jekyll. The easiest way to install Jekyll is through Ruby Gems, so if you've gone through the install process for Ruby already you're good to go. If you haven't, you may be fine since Ruby comes pre-loaded on Macs. If you get stuck, we'll [troubleshoot](https://jekyllrb.com/docs/troubleshooting/). Here's some [additional documentation](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you're having trouble.

Since we're installing Jekyll with Ruby Gems, we'll need to check that we have Ruby 2.0.0 or higher installed on our computers:

```
ruby --version
ruby 2.X.X
```

Then you'll need to install Bundler:

```
gem install bundler
# Installs the Bundler gem
```

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

For our purposes today, we'll just be using the `_includes` and `_layouts` directories, we won't worry about the other directories and files Jekyll gave us for now. If you're curious, there is great [documentation about structure](https://jekyllrb.com/docs/structure/).

### Viewing your site locally

Viewing your Jekyll site locally is a little bit trickier than just viewing a site built with HTML files. Jekyll comes with a built-in development server that will allow you to preview what the generated site will look like in your browser locally.

To do that, open up your terminal, navigate into your Jekyll project's root directory and run this command:

```
jekyll serve
```

This will spin up a server, and if we read the message it displays we'll find the URL to enter into our browser. Give it a try!

### Adding Pages

Like a basic GitHub Pages site that only used HTML and CSS files, Jekyll will use `index.html` in your site's root folder as your homepage by default. You can add additional html pages -- perhaps `about.html` or `projects.html` -- to your root folder as well and then link to those pages to create a multi-page site. Here's an example from the Jekyll documentation of what that file tree and the associated page URLs would look like:

```
.
|-- _config.yml
|-- _includes/
|-- _layouts/
|-- _posts/
|-- _site/
|-- about.html    # => http://example.com/about.html
|-- index.html    # => http://example.com/
|-- other.md      # => http://example.com/other.html
└── contact.html  # => http://example.com/contact.html
```

To read more, check out the [documentation about creating pages](https://jekyllrb.com/docs/pages/).


### Your Turn!

Using Jekyll rather than plain HTML and CSS files for your personal portfolio sites will save you a lot of time and energy. It's well worth taking the time to make the switch, so go for it! Jekyll has lots of well documented and user-friendly. To take a deep dive into it, take a look at the [documentation](https://jekyllrb.com/docs/home/).
