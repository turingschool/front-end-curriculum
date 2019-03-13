---
title: Server-Side Testing With A DB
tags: express, testing, server, node, postgres
---

## Overview

Previously, we've learned about server side testing, focusing primarily on
making sure that we get the correct response codes back from our endpoints.
That's a great way to start, but generally, we'll be interacting with a database
of some kind. In this lesson, we'll review how to test the endpoints of our
express applications, layering on how to test their database interactions.
