---
title: Shoot The Breeze
---

### Wireframes

- Typeface: [Fira Sans](https://fonts.google.com/specimen/Fira+Sans)
- Colors: [Flat UI](https://flatuicolors.com/)

#### Desktop (Logged In)

![Shoot The Breeze UI](http://frontend.turing.io/assets/images/projects/shoot-the-breeze/shoot-the-breeze-desktop-logged-in.jpg)

#### Desktop (Not Logged In)

![Shoot The Breeze UI](http://frontend.turing.io/assets/images/projects/shoot-the-breeze/shoot-the-breeze-desktop-not-logged-in.jpg)

#### Mobile

![Shoot The Breeze UI](http://frontend.turing.io/assets/images/projects/shoot-the-breeze/shoot-the-breeze-mobile.jpg)

## Main Goals

  - App must be broken out into a _minimum_ of 8 components
  - All components must be tested using Enzyme
		- You do not need to test authentication.
  - App must be robustly tested using both integration and unit tests
  - Application must use Firebase to store chats
  - Webpack for build tools

## General Requirements

  - An input field for typing messages
  - Input field has a character count
  - Character count is displayed next to input field
  - Submit and Clear buttons disabled appropriately
	- Submit and Clear are disabled when there is no content in the message input
	- Submit is disabled when the message is over 140 characters
  - List of users contributing to chatroom (based on the current messages being displayed)
  - User can filter by User by selecting user from list
  - User can filter/search for messages
  - User can sort in chronological or reverse chronological order
	- By default, messages are stored in chronological order
  - Chat messages display time stamp, user, and message

## Extensions

- User can set number for how many previous messages to show
- User can delete only their messages
