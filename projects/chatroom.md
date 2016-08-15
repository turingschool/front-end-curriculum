---
title: Chatroom Adventures
---

## Project Introduction

Along with day-glow clothes, grunge rock, and fanny packs, chatrooms were a staple of the 90's. We'll be getting back to our internet roots by building our very own chat applications.

At the end of the day, let's be really honest, this isn't that much different than Idea Box or Linked List, right? Yea, that's fair. But, this time around we are going to up the ante a little bit.

- Test-driven (Feature tests as well as unit tests)
- Using build tools (like you did with Game Time)
- Students design it (like you didn't do with Idea Box)
- Mobile first (like you've never done)

### Evaluation Criteria

You will have _two_ evaluations for this project. The first is the good, old-fashioned technical evaluation. You'll also have an evaluation on the UI -- you will be on your own to wireframe and design this project.

You're application should:

- Work on all screen devices
- Should take a mobile-first approach
- Be thoughtfully designed. (This is a good opportunity to practice with Sketch)

### Quick Notes on the "Other Chatters"

In this first phase, you're chat application will be a fairly lonely place. There isn't really a way to have anyone send messages back to you. There are a number of ways you could handle this for now:

1. Set up a timer that sends a message on a regular interval.
2. Have the application send a message back to the user whenever he or she sends a message.

In future iterations, we'll implement the collaborative aspect of the application, which will eliminate the need for the above options.

### Phase One

- The application should have an input field for typing messages.
- The "Send" button should not be enabled if there is no text in the message input.
- The message input should be cleared whenever a new message has been sent.
- The application should have a section for displaying chat messages.
- Chat messages should be displayed in reverse chronological order.
- Messages from the current user should be visually different from messages from other users.

### Phase Two

- Users should be able to delete their own messages.
- Users should not be able to delete messages from other users.
- Users should be able to edit their own messages.
- Users should not be able to edit other people's messages.
- The message input field should show a live count of the number of characters.
- Messages should persist in local storage. They should be loaded when the application loads.

### Phase Three

- The application should only show the ten most recent messages.
- The application should contain a button labeled "Show more messages…" which will load additional messages from the past.

## Instructor Evaluation Points

### User Interface

* 4 - The application is pleasant, logical, and easy to use. The application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality and the application stands on it own to be used by the instructor _without_ guidance from the developer.
* 3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality.
* 2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.
* 1 - The application is confusing or difficult to use.

### Design

* 4 - The application is visually appealing and shows thoughtful and effective use of typography, color, and layout. The application looks professional, with visuals enhancing the user's experience. The evaluator has very few recommended changes.
* 3 - The application has a strong approach to layout and content hierarchy, but typography and color choices are lacking. The evaluator has several recommended changes to improvement.
* 2 - Layout, content hierarchy, typography, and color choices show effort, but the result is not effective. The evaluator recommends significant changes.
* 1 - Layout, content hierarchy, typography, and color choices and actively detract from the user's ability to use the application. The evaluator recommends significant changes.
