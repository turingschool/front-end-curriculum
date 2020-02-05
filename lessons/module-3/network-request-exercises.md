---
title: Network Request Exercises
length: 180 minutes
tags: javascript, network requests, fetch
---

### Setup

Clone down the [network request exercises](https://github.com/turingschool-examples/network-request-exercises) repo.

**CoWorkers Api**
```
git clone https://github.com/turingschool-examples/network-request-exercises.git
cd network-request-exercises
npm i
npm start
```

### Practicing Our Network Requests

We are going to be focusing on just writing network requests today working with `GET`, `POST`, and `DELETE`.  A great tool for testing network requests is [Postman](https://www.getpostman.com/downloads/).  Instead of spending time trying to write & debug your code, you can test your post requests and see what you are getting back very quickly.  It's a powerful tool to learn about an api very quickly so you know exactly what you need when writing your `fetch` calls later.

### Passing the Options Argument

So far, we have spent the majority of time using `fetch` for `GET` requests. `GET` is the default HTTP verb used in `fetch` and as such, we are not required to pass it any additional information besides the url/endpoint we want to get data from.

However, if we want to perform another type of action with the API we are interacting with (such as `POST` or `DELETE`), we will need to pass `fetch` a second argument - the **options object**!

`fetch` can actually take two arguments:

1. the URL or API endpoint we're trying to hit
2. an optional object of configuration settings for our request. This object may contain what kind of request we're making (e.g. `GET`, `POST`, or `DELETE`) and any data we might need to pass along with it

```javascript
const options = {
  method: 'POST',
  body: JSON.stringify({
    jokeName: 'Another bad joke',
    jokeValue: 'What did the triangle say to the circle? You’re so pointless.'
  }),
  headers: {
    'Content-Type': 'application/json'
  }
};
//Passing the Options argument to fetch
fetch('/api/v1/jokes', options);
```

In this example, we're making a `POST` request that would add a new joke. In the body of our options object, we are passing a stringified version of the data required by the API to post a joke.

One thing to note is that we will still get back a promise when we use `fetch` even if we are using another verb besides `GET`!

When this initial Promise resolves to the Response object, we can often utilize information coming back in the body of the Response object by parsing it out using the `.json()` method.

We would handle this promise with both a `.then()` and `.catch()` just like we would in our standard `GET` requests.


```javascript
const options = {
  method: 'POST',
  body: JSON.stringify({
    jokeName: 'Another bad joke',
    jokeValue: 'What did the triangle say to the circle? You’re so pointless.'
  }),
  headers: {
    'Content-Type': 'application/json'
  }
};

fetch('/api/v1/jokes', options)
  .then(response => response.json())
  .then(joke => renderJoke(joke))
  .catch(error => console.log(error));
```

<section class="call-to-action">
### Practice w/ Postman

Review the API documentation below and work on making `GET`, `POST`, and `DELETE` requests to the various API endpoints listed below. Use Postman to see what the response comes back as!

**NOTE: If using the `raw` option within the Body menu of Postman, be sure to change the data type to `JSON` and wrap your keys in double quotes!**
</section>

#### User Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/users` | GET | not needed | Array of all existing users: `[{ id: 1, name: 'Travis Rollins', status: 'online', interests: 'Music, Software, & Gaming' }]` |
| `http://localhost:3001/api/v1/users` | POST | `{ id: <Number>, name: <String>, status: <String>, interests: <String> }` | New user: `{ id: 1, name: 'Leta', status: 'online', interests: 'Science, Music, & Classic Films' }` |
| `http://localhost:3001/api/v1/users/:id` | DELETE | not needed | Array of all remaining users: `[{ id: 4, name: 'Robbie Jaeger', status: 'online', interests: 'Plants & Woodwork' }]` |

#### Sport Team Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/sport-teams` | GET | not needed | Array of all existing sport teams: `[{ id: 1, name: 'Dallas Cowboys', head_coach: 'Jason Garrett', sport: 'football' }]` |
| `http://localhost:3001/api/v1/sport-teams` | POST | `{ id: <Number>, name: <String>, head_coach: <String>, sport: <String> }` | New sport team: `{ id: 2, name: 'New York Yankees', head_coach: 'Aaron Boone', sport: 'baseball' },` |
| `http://localhost:3001/api/v1/sport-teams/:id` | DELETE | not needed | Array of all remaining sport teams: `[{ id: 3, name: 'Los Angeles Lakers', head_coach: 'Frank Vogel', sport: 'basketball' }]` |

#### Animal Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/animals` | GET | not needed | Array of all existing animals: `[{ id: 3, name: 'orcas', diet: 'birds, squid, octopuses, sea turtles, sharks, rays & fish', fun_fact: 'Orcas, also known as killer whales, are known to prey on other marine mammals, including dolphins and seals.' }]` |
| `http://localhost:3001/api/v1/animals` | POST | `{ id: <Number>, name: <String>, diet: <String>, fun_fact: <String> }` | New animal: `{ id: 4, name: 'tigers', diet: 'chital, sambar, gaur & wild board', fun_fact: 'The main food of tigers are buffalos, antelopes, and rodents.' }` |
| `http://localhost:3001/api/v1/animals/:id` | DELETE | not needed | Array of all remaining animals: `[{ id: 1, name: 'otters', diet: 'urchins, snails, fish & crabs', fun_fact: 'They have the thickest fur of any mammal in the animal kingdom.' }]` |

<section class="call-to-action">
### Next Steps

Now that you are more familiar with your network requests and what data you get back with each endpoint, create a new project using `create-react-app` and practice your fetch requests with either users, sport teams, or animals.  Build out the frontend and incorporate each of the endpoints in an IdeaBox layout.
</section>
