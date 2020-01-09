---
title: Intro to UI/UX
module: 2
---

## Learning goals:
**By the end of the lesson, you will:**
- Have an understanding of basic user experience (UX) principles
- Be able to articulate why usable, empathetic design is necessary
- Be able to recognize bad UX design
- Have an understanding of the tools you can use to create good UX design

## Vocab

- `UI` User interface
- `UX` User experience
- `UXD` User experience design
- `Usability` How easy your design is to understand and use

## User Experience Design

This might be an opinion at the moment, but time will reveal it to be a **HARD FACT**:

You can't be a _good_ front-end developer without understanding the fundamental concepts of user experience design.

You don't need to be an artist or graphic designer. You don't have to create beautiful designs out of thin air. But you DO need to understand who will be using your app, how they're using it, and what they want to accomplish while using it.

**Vocab**:
- **UI**: user interface; what the user actually sees and interacts with in an app
- **UX**: user experience; the overall experience of using an app - what it's like to use an app in pursuit of a goal (buying something, getting information, etc)
- **UXD**: user experience design: the art and science of creating apps that seamlessly meet user needs and create a painless experience 

### What even is it?

User experience design is simple and also very complex. It's the act of making your app **usable** and **painless** for the end user.

**Turn and talk!**

What are some examples of apps that you use (think about the sites you use for social media, looking up info, booking travel, etc). What apps are easy to use? What apps are really fun to use? What apps are the worst? Think of times when you had a very frustrating experience with a website (making a payment, filling out a form, etc).

WHY were those experiences frustrating? What would have made them better? What makes an app enjoyable to use?

### Why does User Experience Design matter?

Even if your app offers a great service, it won't matter if no one can figure out how to use it. And maybe you offer a service that people have to use, but they hate the process (health care websites, banking sites, etc).

### The Bad

We know it when we see it. Let's figure out what exactly makes a design **bad**.

Consider this form:
![terrible user interface form](https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Screen-Shot-2015-09-29-at-14.46.33.png)

There's a lot that makes this a huge pain in the neck:
- The input fields are very close together; difficult to use on a touchscreen interface
- It's very long
- The colors are alarming; we're used to red being reserved for error messages
- Some of the fields are not going to be used by everyone
- It doesn't look very trustworthy
- etc

Okay, that was fun and infuriating. How many of our concerns were PURELY aesthetic? How many were based on usability (aka how much was bad because it made it harder to use this form)?

So now what can we do to improve it? Brainstorm some ways to make the form more pleasant and intuitive to use.

### The Good

It turns out, most of what makes a design "good" is how usable it is, rather than how pretty it is.

When people talk about design, a lot of times they're picturing fluff - the finishing touches that make something look nice.

But as developers, when you hear "design", you should be thinking "functionality". Good design is pleasant to look at, yes, but more importantly it's pleasant to use.

**Good design anticipates users' needs.**

## Paired Activity
[Website 1](https://gist.github.com/hannahhch/44391a45d30b7d084d14e26d56659807)
[Website 2](https://gist.github.com/hannahhch/48e6a8b421c4351ca3c1413c7be25f97)

## Usability Considerations & Processes

![usability tools](https://blog.therestaurantzone.com/wp-content/uploads/2017/01/restaurant-recruiting-tools.jpg)

- Audience Research
- Content Analysis
- User Testing



### Audience Research

Empathy is crucial and vital to UXD. Empathy in User Experience Design means understanding and serving the needs, motivations, difficulties, and goals of your end user.

In order to develop this, we need to do audience research. We might want to know the following about our users and how they interact with our application:

Consider your user:
- Their familiarity with technology
- Their familiarity with this app
- How often they use the app
- When/why they use the app
- What they want to accomplish
- How many other ways can they get what they need, other than your app?
- What accessibility needs do they have?
- etc

User experience designers use a number of tools to help them keep the end user in mind:
- Personas (imaginary end users)
- User stories (detailed road maps of a user's journey through an app while attempting to reach a goal; every button they click, every page they visit)
- Consider voice/tone
- Forgiving (what happens if a user makes a mistake? Can they go back and fix it? Do they feel chastised or supported?)
- Intuitive (does an app work the way a user expects based on previous experience?)
- Consistent (layout, interactions, functionality should be consistent from one page to the next)
- Seamless learning curve (the onboarding process should be painless and intuitive)

![university website comic](https://imgs.xkcd.com/comics/university_website.png)

### Content Analysis - Context

Your app should give the user what they need, when they need it.

A great real world example of this principle is [TurboTax](https://www.appcues.com/blog/how-turbotax-makes-a-dreadful-user-experience-a-delightful-one/
). (And actually the TurboTax site is a great example of UXD in general.)

![turbotax has great UXD](https://blog.appcues.com/hs-fs/hubfs/Blog/turbotax-refund.gif?t=1511982576695&width=1280&name=turbotax-refund.gif)

**Why TurboTax works:**
- Doesn't swamp the user with all the info at once
- Breaks it down into digestible, manageable bits without being condescending
- Is reassuring and conversational
- Is goal-oriented (basically no one uses TurboTax because they thrill at the act of filing taxes - they do it because it's mandatory, and to get a refund)

It's important to anticipate what a user needs to know. It's poor UXD to withhold necessary information (instructions, etc), and it's also poor UXD to slam them with everything they might need ever, because humans are notoriously poor at sifting carefully and thoughtfully through a pile of data, especially when most of it is irrelevant to what we're trying to accomplish.

**Contextual Design**

When designing an app, keep in mind the user's context:
- Metadata (time of day, location, language, etc)
- Explicit interaction (the user actively and consciously changes the design of the app)
    - Changes the color in the settings
    - Sets the location or time of day
    - etc
- Implicit interaction (the app changes its design without the user consciously making the change)
    - Detecting the time of day and showing the nighttime mode
    - Remembering the user's last search and showing that info
    - Detecting the location and updating displayed info
    - etc
- Give the information a user needs when they need it
    - Microinteractions to improve the onboarding experience
    - Real-time feedback through error-messaging
    - etc


### User Testing

![users will always find ways to misunderstand how to use your app, so do user testing!](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436502693image00.gif)

_Users will always find new and creative ways to misunderstand how to use your app ... so do user testing!_

Earlier we said that empathy is one part of creating a great user experience. User testing is the other half of the equation. It's what reveals the actual weak points in your app, the places that need to be tweaked, the functionality that users are expecting.

User testing helps account for any biases we might have as developers. We can't assume that we know all the pain points our users might run into, and we also can't assume that we know the right questions to ask!

[Steve Krug](https://www.sensible.com/dmmt.html)'s excellent book on usability and user testing, [Don't Make Me Think](http://www.uxbooth.com/articles/10-usability-lessons-from-steve-krugs-dont-make-me-think/) is worth reading if you're interested in making your apps more usable. Hint: everyone should be interested in making their apps more usable.

No matter how empathetic and diligent you are, you can't assume you know everything about your users, or that you've closed all the gaps in your own assumptions.
