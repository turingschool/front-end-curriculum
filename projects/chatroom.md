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

You will have _two_ evaluations for this project. The first is the good, old-fashioned technical evaluation. You'll also have an evaluation with on the UI

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
