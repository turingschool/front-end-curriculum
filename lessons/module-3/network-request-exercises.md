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



#### User Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/users` | GET | not needed | Array of all existing users: `[{ id: 1, name: 'Travis Rollins', status: 'online', interests: 'Music, Software, & Gaming' }]` |
| `http://localhost:3001/api/v1/users` | POST | `{ id: <Number>, name: <String>, status: <String>, interests: <String> }` | New reservation: `{ id: 1, name: 'Leta', status: 'online', interests: 'Science, Music, & Classic Films' }` |
| `http://localhost:3001/api/v1/users/:id` | DELETE | not needed | Array of all remaining reservations: `[{ id: 4, name: 'Robbie Jaeger', status: 'online', interests: 'Plants & Woodwork' }]` |

#### Sport Team Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/sport-teams` | GET | not needed | Array of all existing sport teams: `[{ id: 1, name: 'Dallas Cowboys', head_coach: 'Jason Garrett', sport: 'football' }]` |
| `http://localhost:3001/api/v1/sport-teams` | POST | `{ id: <Number>, name: <String>, head_coach: <String>, sport: <String> }` | New reservation: `{ id: 2, name: 'New York Yankees', head_coach: 'Aaron Boone', sport: 'baseball' },` |
| `http://localhost:3001/api/v1/sport-teams/:id` | DELETE | not needed | Array of all remaining sport teams: `[{ id: 3, name: 'Los Angeles Lakers', head_coach: 'Frank Vogel', sport: 'basketball' }]` |

#### Animal Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/animals` | GET | not needed | Array of all existing animals: `[{ id: 3, name: 'orcas', diet: 'birds, squid, octopuses, sea turtles, sharks, rays & fish', fun_fact: 'Orcas, also known as killer whales, are known to prey on other marine mammals, including dolphins and seals.' }]` |
| `http://localhost:3001/api/v1/animals` | POST | `{ id: <Number>, name: <String>, diet: <String>, fun_fact: <String> }` | New reservation: `{ id: 4, name: 'tigers', diet: 'chital, sambar, gaur & wild board', fun_fact: 'The main food of tigers are buffalos, antelopes, and rodents.' }` |
| `http://localhost:3001/api/v1/animals/:id` | DELETE | not needed | Array of all remaining animals: `[{ id: 1, name: 'otters', diet: 'urchins, snails, fish & crabs', fun_fact: 'They have the thickest fur of any mammal in the animal kingdom.' }]` |