# Professional Skills Repo

## How this works

Whenever you edit content in this repo, it will be copied to the `professional_development` folders for the repositories that drive frontend.turing.io and backend.turing.io. This means you should make all your edits here, and not in those repositories.

The automatic copying is a new thing, and may break. If you make changes here and you don't see them on either site in 30 seconds or so, reach out to nate@turing.io.

## Some handy tips for editing/creating content

### Headers in your markdown files

Put something like this at the top of all your markdown files:

```yaml
---
title: Name of lesson
subheading: lesson is about stuff
layout: page
---
```

- `subheading` is optional
- `layout` is basically always going to be `page`
- You cant use `:`'s in this header. It confuses things. I've been using a `-` instead

### Index.md instead of Readme.md

The system we're using to translate from github to backend.turing.io uses index files instead of readme files. Where you would have created a file called `readme.md`, just use `index.md` instead. This also means that when viewing a folder, you won't automatically see the Readme file, and you'll have to click on `index.md` to see the index of that folder.

### Links and Paths

When linking to a markdown file, drop the `.md` in your link. Instead of linking to `learning_to_pair.md`, just use `learning_to_pair`. Other files, like PDFs and PNGs, keep the original extension.

#### Absolute vs Relative paths

Since you're editing on github, and viewing at backend.turing.io, you'll probably want to use *relative* links instead of *absolute* links. I found a primer on the difference. It's in the context of HTML instead of Markdown, but should basically explain the concept: http://www.boogiejack.com/server_paths.html

### Your markdown will behave differently

Github uses a slightly different system for translating from Markdown than the engine we use for backend.turing.io. Here's some things that I had to change to get things to look right on the site, even if it looks right on Github.

- Put a space after your `#`'s in headers
- Put a blank line between your headers and any content below
- Replace any `|` with `\|` unless you're really trying to do a table

## Technical documentation of automagic copying

Nate is lazy, and this documentation is bad. Reach out to him if you have more questions.

- [A webhook is set up on this repo](https://github.com/turingschool/professional_skills/settings/hooks/10982648). Whenever code is pushed to this repo, Github notifies a server running on a Digital Ocean droplet.
- I'm using [jthoober](https://github.com/ceejbot/jthoober) to listen for webhooks
- When a push event is received by the server, it:
  - pulls the changes for this repo, the frontend repo, and the backend repo
  - copies files from here to a `professional_development` folder in the frontend and backend folders
  - commits and pushes those changes to the [frontend](https://github.com/turingschool/front-end-curriculum) and [backend](https://github.com/turingschool/backend-curriculum-site) repositories
  - Logs all of this to a logfile on the server

If something goes wrong, you can get details by viewing the GitHub Pages settings for the frontend and backend repos:

- [Backend Settings](https://github.com/turingschool/backend-curriculum-site/settings)
- [Frontend Settings](https://github.com/turingschool/front-end-curriculum/settings)
