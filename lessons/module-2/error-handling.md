---
title: Error Handling with Fetch
tags: javascript, fetch
module: 2
---

## Preface

As front end developers, we should always be concerned about giving our users the best experience possible. One way to that is to make sure that we provide the user with some feedback in case an interaction goes wrong. In this lesson, y'all are going to focus on improving the ui of a form, by providing error messages to our end user.
<section class="call-to-action">
## Warm Up
  Let's review from the [Network request GET lesson](https://frontend.turing.edu/lessons/module-2/network-requests-gets.html) & [Network request POST lesson](https://frontend.turing.edu/lessons/module-2/network-requests-posts.html)

In groups, add some stickies to [this Jamboard](https://jamboard.google.com/d/1wyTnk8ev8-GNlS3wpObhzBSSjNvKkgQTbMqP8wFL0PE)
  - What do you remember from request/response cycle?
  - what are the response status code when error happens?

</section>
### The challenge

Visit [this repo](https://github.com/turingschool-examples/Error-handling-js) and ***follow the directions in the readme carefully*** to get some practice in gracefully handling errors and presenting them to the end user.


## Key takeaways

Common sad paths we want to handle, if possible are:
1. Empty states: If there are no items to display. We should let the user know, and maybe give them a CTA button.
2. Form submissions:
  1. Help the user, by not allowing them to pass bad or empty data.
  2. Make sure that if something goes wrong, ie. a 422 comes back from the server, we let the user know that **in a way they can understand**
3. It's likely a good idea to have something place in case the server is down as well. This is a great scenario for that `.catch` you've likely put at the end of a fetch.
