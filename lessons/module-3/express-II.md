---
title: "Express II"
tags: node, express, back-end, server, http, API
---

## Learning Goals

* Gain experience setting up a express server with CRUD methods
* Create an API that you can use on future projects
* Peek behind that backend curtain to gain some full stack experience
* Share your hard work with your peers in a show and tell session!

## Setting the Stage

Your last project in Module 3 will be entirely designed by you - the styling, the idea, and the API you work with will be your choice. Finding an API that serves up data you find interesting can be difficult! Even after you find one you're interested in, it might be poorly maintained, or have limits that don't work for your needs.

To get more practice with express, and to save our future selves some headaches, we're going to design and build an express server with data that we can use for our final project!

## Requirements
- Your express server should have endpoints for each of the CRUD methods (Get, Post, Put/Patch, Delete)
- Should contain at least 30 pieces of complex data (30 objects, for example)
- Should store that data in `app.locals` - no need for a database.
- Should contain data that does not exist in a public API already.
- The data should be helpful in solving a problem.
- Should have helpful error messages for developer empathy

## Where will I get this data?
Great question! The data can come from anywhere.
- You could hand roll the data yourself (i.e. manually type it out yourself - no shortcuts).
- You could learn how to [scrape the web](https://frontend.turing.edu/lessons/module-4/web-scraping-workshop).
- You could use websites like [data.world](https://data.world/search?q=) to search for datasets in the `.csv` format, and do some research about how to convert that `.csv` file into JSON.

## What type of data should I use?
Keeping your future project in mind will help guide you - maybe take some time to read over the [Showcase project spec sheet](https://frontend.turing.edu/projects/module-3/showcase.html).

Ultimately, you want to choose data that is
- Interesting/exciting to you
- contains enough keys and values to be useful
- helps solve some sort of problem.

Maybe you want to create an app that will be used to help users find [UFO sighting locations](https://data.world/khturner/national-ufo-reporting-center-reports) near them.

Maybe you want to create a server that will function as a mobile database for [pokemon go](https://data.world/ljvmiranda921/pokemon-go-dataset).

Or maybe you want to create an application to help users identify exactly which insects are [screaming outside of their windows at night](https://data.world/us-usda-gov/7139e8c7-d0d4-4207-816e-a3c71fee8f63).

The possibilities are only limited by your imagination - don't forget you can hand roll your own data too!
