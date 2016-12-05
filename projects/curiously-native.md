---
title: Curiously Native
module: 4
tags: react native, api
---

## The Project

In this project, we'll be creating an mobile app with React Native that consumes a public API and reimagines a client interface. Your team will get to choose a theme for your interface to follow. For example, as a Minnesota native I could create a Github mobile app that uses canoe paddles to upvote and a river to show the branches in a repo. You can choose any 'native' theme but try to think of a unique interface that takes a very popular client and focuses the experience to a specific set of users. The choice of which API  your team is going to use is due to Steve by 4:00pm today. Below is a list of possible APIs to use. If you want to use something else, come talk to Steve or Alex for approval.

### Pre-Work

You'll be expected to have reviewed the following materials by Monday.

1. Prework 1

## Requirements

You've built apps in React/Redux, you've hit API endpoints, but you haven't used React Native for mobile development. One of the goals of this project is to documenting your successes and struggles with mobile development and authentication. In addition to programming, you'll be writing a a series of blog posts:


1. An introduction to React Native and how mobile development differs from web development. Discuss the pros/cons of using React Native vs. React, what you need to keep in mind when developing for both iOS and Android, and any design choices you made because of mobile development.
2. A particular technical problem that occurred when authenticating users.
3. A post-mortem on what went well and what you would improve upon if you were to continue working on this project or if you started over

## Available APIs

To start, you need to select an API to work with. We’ve selected the following list of applications for their well-documented public APIs, and relatively straightforward UI’s.

For each project, we have included a rough summary list of features to include. As with any development project, you should focus on moving iteratively through the most basic features before starting on more complex ones. During the project, the instructors will meet with you to assess progress and determine what features to focus on next.

### Github

Build a basic version of the Github profile / feed UI. As a user, I should be able to:

* Authenticate with my github account
* View basic information about my account (profile pic, number of starred repos, followers, following)
* View a summary feed of my recent activity (recent commits)
* View a summary feed of recent activity from users whom I follow
* View a list of organizations I’m a member of
* View a list of my repositories

Extensions:

* View a list of open pull requests that I have opened
* View a list of “@mentions” that I was included in
* Create a new repository

### Foursquare/Swarm

Build a basic check-in and venue browser. As a user, I should be able to:

* Authenticate with my Foursquare/Swarm account
* See my basic user information (Name, photo, number of check-ins, social media accounts, and whatever else you want)
* See the score and venue of my most recent check-ins
* Click on a check-in to see a venue “show” page
* Have a page to search for venues by location. Each result should link to the venue show page
* Search for a venue by location AND category
* Venue Show Page
* See Basic info, like name, address/location, category, and hours
* See foursquare stats, like number of check-ins, who is the mayor
* See the last 5 check-ins for this location * See 5 tips for this location

Extensions:

* Mayor or tips on a venue show page links to a profile for that user
* Allow me to add a tip for a venue
* Use the ‘multi’ endpoint to combine all of the venue show page requests into one request


### Reddit

Reddit can be a scary place. Tread lightly.

Build a basic subreddit browser. As a user, I should be able to:

* Authenticate with my Reddit account
* View my basic info (username, karma)
* View a list of my subreddit subscriptions
* View a subreddit, with it’s rules and sidebar content
* View the last 15 posts in a subreddit. Each post should be a link
* View the score for each post
* View the comments for each post. Comment replies should be visually nested.

Extensions:

* Add pagination for a subreddit
* Add upvote and downvote links for each post
* Add upvote and downvote links for each comment
* Be able to view and send private messages
* Create a new subreddit

### Tumblr

Build a basic version of the Tumblr UI. As a user, I should be able to:

* Authenticate with my Tumblr account
* See my basic profile information (username, profile pic)
* View a list of recent posts from my feed
* View embedded photo or video content for the posts
* Favorite a post
* Reblog a post

Extensions:

* Create a post (perhaps starting with just text posts and moving on to more complicated types)
* Generate a permalink for a post
* Follow a user whose post was reblogged into my feed

### Instagram

Instagram sandboxes all new API applications, and you have to ask other users to join your sandbox for their data to show up. This can make it kind of frustrating to get up and running quickly. But if you’d really like to, you can still use Instagram

Build a basic version of the Instagram (web) UI. As a user, I should be able to:

* Authenticate with my Instagram account
* See my basic profile information (username, profile pic)
* View a list of recent posts from my feed
* View photos for each post
* View comments for each post
* View like count for each post

Extensions:

* Infinite Scroll to view more photos
* See trending posts
* Show pictures that match a hashtag
* Search for a user

---------

## Rubric

### Blog Post (45 Points - 15 points per post)

### Authentication (10 Points)

* 15: A user can successfully login and logout using JWTs and Auth0 and can access all functionality relating to that user.
* 10: A user can successfully login and logout but there are issues with authenticating that prevents the user from accessing functionality.
* 5: There are bugs in authenticating and heavily duplication of code
* 0: No authentication.

### JavaScript Style (40 points)

* 40: Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There _zero_ instances where an instructor would recommend taking a different approach.
* 35: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.
* 15: Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 10: Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.
* 5: Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.
* 0: There is little or no client-side code. Developer writes code that is difficult to understand. Application logic shows poor decomposition with too much logic mashed together.

### User Interface (20 points)

* 20: The application is pleasant, logical, and easy to use. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer. The client interface is unique and is in spirit with the selected theme.
* 15: The application has many strong pages/interactions, but a few holes in lesser-used functionality. Some attempt to create a unique client interface and experience.
* 8: The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories. Little to no attempt to create a unique client interface.
* 0: The application is confusing or difficult to use.

### Risk Taking and Creativity (40 points)

Instructor/developers will select one feature in the project to review for this section of the rubric.

- 50: Developers pushed themselves and their team by taking risks which is demonstrated by a delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 40: Developers pushed themselves and their team by taking risks which is demonstrated by an almost delivered feature. Developers explored concepts and technologies outside the scope of the curriculum.
- 30: Developers attempted to implement extensions using technologies not covered in class but it did not result in a delivered feature.
- 10: Developers but did not build any features.

### Workflow (20 Points)

* 20: The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application. There is visible evidence of code review happening in pull requests and discussion around approaches.
* 15: The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base. There is little evidence of code review.
* 5: The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application. There are formatting issues in the code base. (This is important. These issues should not be able to make it past code review.)
* 1: The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.
* 0: The application was not checked into version control.
