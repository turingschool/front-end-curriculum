---
title: Response Playground
length: 60
module: 3
tags: request, response, http
---

For a given network request, we can never guarantee what the server is going to throw back at us. Let's explore various ways to handle responses based on their status codes or error messages!

<section class="call-to-action">
### Review Request-Response Cycle

In your notebook, draw a diagram in as much detail as possible explaining the request response cycle.
</section>

Unfortunately, requesting data from a server is not always sunshine and rainbows. Some weird things can happen, and our applications need to be prepared to handle those scenarios.

For instance, we might think data is available from a server at a certain URL, like `someURL.com/myData/5`, but then it gives us back a 404 status code - NOT FOUND. If we write our application to assume that we will get a successful status code back (like 200) and then we get a 404 and do not have the data we expect, then our application will at best not display the data expected or at worst completely break and we will lose a valuable customer.

Our goal as developers should be to handle responses and errors gracefully when they happen because they will. In order to handle those errors gracefully, we need to be able to detect the errors as they come in. For that, let's dive into the tools we have available to look at the Response object.

## Your Tasks

The server you'll be working with is hosted at: https://response-playground.herokuapp.com/

Here is the documentation associated with the API:

**Note:** If you are sending information in the request body, then you need to supply the request header: `Content-Type: application/json`

When you see `:id` in the URL parameter, this can be any positive integer value (1,2,3,75,etc.).

| URL | Verb | Request Body | Response |
|-----|------|--------------|----------|
| `/` | GET | none | 200 response with data in body |
| `/responses` | POST | `{name: "String"}` | 201 status code with data in body |
| `/responses` | POST | none | 400-level status code with error message in body |
| `/responses/:id` | DELETE | none | 204 status code with no data in body |
| `/someNotFound/:id` | GET | none | 200 status code or 404 status code depending on the "id" requested |
| `/serverError` | GET | none | 500-level status code with error message in body |

1. Start out with `/`. Setup a `fetch` call to this endpoint and `console.log` the data you get back from the response.
2. Make a request to `/responses` with a name in the request body, and `console.log` the data you get back from the response.
3. Make a request to `/responses` **without** a name in the request body, and `console.log` the data you get back from the response.
4. Make a request to `/responses/:id` - what is the status code of the response, and what is sent back in the response body?
5. Use the endpoint `/someNotFound/:id` where `:id` is any positive integer between 1 and 100 to find all of the `id` values that give a 404 status code as the response. What are the values? You might have to do some iterating - no brute force guessing - write some code to find the answers.
6. Make a request to `/serverError` - what is the status code and what is the error?
7. What property of the response object can tell us if a response's status code is 200-level or not? Adjust your logic in the `/someNotFound/:id` endpoint to include looking at this property.
