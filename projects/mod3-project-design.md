---
title: Mod3 Project Design
module: 3
tags: ux, ui, css
---

## Project Designs for Mod 3

"Dude, suckin' at something is the first step to being sorta good at something." - Jake, "Adventure Time"

^ It's mod 3. It's time to make things pretty. If you think you're not good at design then just suck it up and work on it. ^

"Design is not just what it looks like and feels like, design is how it works." - Steve Jobs

^ A website should be designed to be simple and easy to use. I should be able to go on any website with zero context and understand what it's purpose is. So always consider the context. ^

### Review

Module 3 tends to be a lot of new material, which adds a lot of work. That being said, some of these projects you'll end up putting on your resume which means each one should reflect some thought of design. After all we are frontend developers!

First lets talk about the different between UI/UX.

An article discussing design thought of a clever analogy to describe the difference:

"If you imagine a product as the human body, the bones represent the code which give it structure. The organs represent the UX design: measuring and optimizing against input for supporting life functions. And UI design represents the cosmetics of the body–its presentation, its senses and reactions."

#### UI(User Interface):

UI is what attracts the eye. Good UI should help a user better understand the purpose of your website. It's the look and feel, the presentation and interactivity of your site. Here are a couple things to consider while thinking about UI:

`Typeface`
  * Typeface:
    * A collection of one or more fonts.
    * The collection usually has similarities.
    * Shouldn't have more then 3 fonts on one page.
    * Structure of letterforms, font size, weight, letter spacing.
    * Line length is something to think about. Ideal length is between 45 - 75 characters.
    * Fonts are a specific variation within a typeface.

`Colors`

"We are so attracted to color and so repelled by it that even if the coolest design were presented to us, if we didn't like the color, we wouldn't like it at all" - Joanne Change, from Hack Design's "Building color Confidence"

I highly recommend this [article](https://www.thinkful.com/learn/color-theory-basics/#Getting-Started). I'd suggest you read through start your color exploration to get a better idea of why color choices are so important.
If you're going to use a multiple colors make sure they compliment each other. Check out [Paletton](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) to help pick colors that work well together.


`Gestalt Principles`
  * Law of Figure
  * Law of Closure
  * Law of Continuity
  * Law of Similarity
  * Law of Proximity
  * Law of Simplicity

I suggest if you don't know what any of these laws are that you learn more. Try googling them :D

#### UX (User Experience):

UI/UX will be a big part of your future job. UX is where a lot of logic will take place. This is where you, the designer, will enhance your website to improve the users experience. This could be as simple as improving the us

`Human-centered design`
  * Where the user is the primary focus.
  * Always consider how a human is going to use this. If you've become a robot these last 14 weeks maybe ask someone else who has no context to what this site should be doing.

`Micro-Interactions & Animations`
  A good animation/micro-interaction can:
  * Communicate status of the site
  * Enhance the sense of direct manipulation
  * Help people visualize the results of their actions

Micro-interactions and animations are meaningful feedback to the user so they can understand something has happened or is still happening. Users expect some kind of visual confirmation when performing some input. There are many ways to provide users with some feedback that their input is being processed. Animations are a great way to visually appeal to the users input. That being said, once something is processed it might be nice to confirm to the user that their input has finished. Think about these things while creating websites. For example: When a user signs in, the user might get a flash message that says 'Welcome back'. It's also a good idea to have loaders for when we're waiting for a outgoing request to resolve. These things all enhance and improve a users experience.

Here are two articles to give you ideas on how to improve your UX:

 * [article](https://www.webdesignerdepot.com/2015/07/7-secrets-for-enhancing-ux-with-micro-interactions/)
 * [article](https://uxplanet.org/functional-animation-in-ux-design-what-makes-a-good-transition-d6e7b4344e5e)


 UI/UX is complicated because they mesh together. The more you know the better your prepared to spot 'poop' designs. It's good to start thinking about how a user might use this website. Hopefully this was enough review to jump start your design mojo while in Mod 3. Below you'll find requirements for each project. While looking at the requirements, think about how a user is going to interact and how you can make these requirements useful.

## Design Requirements:

### HeadCount2.0
* Requirements:
  * Responsiveness
  * Should use `flex-box`
  * At least 2 transitions. Look [here](https://github.com/turingschool-examples/intro-to-CSS-transitions) if you need help.

Consider the UI/UX of this project.

  * What coloring makes sense to describe the different percentages?
  * What does each number represent? Can you make that readable to the user?
  * What should happen if a user clicks a card, which is then displayed at the top, then is clicked again? What if the user clicks the one at the top?

  What else could you do to help the user? Here's an example:
  ![HeadCount2 by Juan & JC](http://g.recordit.co/tIFaj5S8wm.gif)
  *This group decided to display the information in a graph form. One critique that you might notice is that the graphs don't clearly tell you which stats represent which district.*

  The important thing is to think about how a user is going to use this.

### SWAPIbox
* Requirements:
  * Responsiveness
  * Use `grid` or `flex-box`
  * Must have some sort of loading page.
  * At least 3 transitions.
  * Should have a fixed or floating nav bar. The buttons on the nav bar should have an active class to indicate what page the user is on.

Consider the UI/UX of this project.

  * First off, it's fun to see the scrolling text fade away like it does in the movies.
  * Can you make the cards unique based off certain features? The example below shows planets that are different colors based on the planets terrain.
  * What sort of welcome page should you have? You shouldn't have people/planets/vehicles default to display. Make a fun welcome page that invites people to explore your site!
  * If a user favorites something how should the card displayed that it has been favorited? Consider the example below; When 'favorited' the box has a yellow border. However the text still displays 'save'. This should probably be changed to 'Unfavorite'. The word 'save' should probably be replaced by 'favorite' or maybe just a star icon.
  * A user should be able to unfavorite things anywhere. Directly after favoring it or even on the favorites page.

  Example:
  ![SWAPIbox example by Juan & Joe](http://recordit.co/db5PrEfGTQ/gif/notify)



### MovieTracker
  * Requirements:
    * Responsiveness
    * `grid` for the movie layout.
    * Some animation (get creative).
    * At least 2 transitions.

Lets consider the UI/UX of this project.

  * If a user signs up they should be also logged in.
  * A user that is logged in should not be able to go to the `/sign-in` page.
  * On the `/login` page there should be an option to sign up.
  * How will a user know when they are signing up that the email has already been used?
  * How does the user know the password doesn't match? Should you really tell them that the password for the email was incorrect? Either way you still want to indicate that the login was invalid.
  * Do the cards show the entire bio of the movie? Maybe the cards are clickable and forward the user to a bio page on that specific movie. ( What happens if the user refreshes on that bio page? )
  * If a user is not signed in but tries to favorite something should they be redirected to sign in? Should the user even be able to see the favorite buttons / page?

### Personal Project

  The personal project is yours to design. That being said you should consider how a user will interact with your project. How will they navigate through the website? There's a reason why so many companies have adopted an agile methodology. As the designer and creator of this project you have complete understanding of how the website works. That doesn't mean a user will. Through this project you should have someone click through your project without you saying a word. Watch how they navigate and consider their suggestions afterwards.

  We'll also have a show and tell day to discuss your design with peers! :D
