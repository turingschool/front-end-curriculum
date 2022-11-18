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

- `UI` User interface; what the user actually sees and interacts with in an app
- `UX` User experience; the overall experience of using an app - what it's like to use an app in pursuit of a goal (buying something, getting information, etc)
- `UXD` User experience design: the art and science of creating apps that seamlessly meet user needs and create a painless experience
- `Usability` How easy your design is to understand and use

## User Experience Design

This might be an opinion at the moment, but time will reveal it to be a **HARD FACT**:

You can't be a _good_ front-end developer without understanding the fundamental concepts of user experience design.

You don't need to be an artist or graphic designer. You don't have to create beautiful designs out of thin air. But you DO need to understand who will be using your app, how they're using it, and what they want to accomplish while using it.

### What even is it?

User experience design is simple and also very complex. It's the act of making your app **usable** and **painless** for the end user.

<section class="call-to-action">

### Turn and Talk

What are some examples of apps that you use (think about the sites you use for social media, looking up info, booking travel, etc).

* What apps are easy to use? What apps are really fun to use?

* What apps are the worst? Think of times when you had a very frustrating experience with a website (making a payment, filling out a form, etc).

WHY were those experiences frustrating? What would have made them better? What makes an app enjoyable to use?

</section>


### Why does User Experience Design matter?

Even if your app offers a great service, it won't matter if no one can figure out how to use it. And maybe you offer a service that people have to use, but they hate the process (health care websites, banking sites, etc).

### The Bad

We know it when we see it. Let's figure out what exactly makes a design **"bad"**. Consider this form:  

![terrible user interface form](https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Screen-Shot-2015-09-29-at-14.46.33.png)



<!-- There's a lot that makes this a huge pain in the neck:
- The input fields are very close together; difficult to use on a touchscreen interface
- It's very long
- The colors are alarming; we're used to red being reserved for error messages
- Some of the fields are not going to be used by everyone
- It doesn't look very trustworthy
- etc -->

What do we see here that might be frustrating to deal with as a user? What could we do to improve the experience?

Okay, that was fun and infuriating. How many of our concerns were PURELY aesthetic? How many were based on usability (aka how much was bad because it made it harder to use this form)?

So now what can we do to improve it? Brainstorm some ways to make the form more pleasant and intuitive to use.

### The Good

It turns out, most of what makes a design "good" is how usable it is, rather than how pretty it is.

When people talk about design, a lot of times they're picturing fluff - the finishing touches that make something look nice.

But as developers, when you hear "design", you should be thinking "functionality". Good design is pleasant to look at, yes, but more importantly it's pleasant to use.

![side by side form example bad and good](https://miro.medium.com/max/2000/1*duSgTJVJm493nlejCoVcIg.jpeg)

**Good design anticipates users' needs. That's it!**


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

<section class="call-to-action">
Imagine you were doing audience research for your Fitlit or What's Cookin' apps. What sort of questions would you ask to determine which new features to add?

</section>

### Content Analysis - Context

Your app should give the user what they need, when they need it.

A great real world example of this principle is [TurboTax](https://www.appcues.com/blog/how-turbotax-makes-a-dreadful-user-experience-a-delightful-one/
). (And actually the _old_ TurboTax site is a great example of UXD in general.)

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
    - Example: food delivery apps notifying a user that a particular restaurant is closed at that time
- Explicit interaction (the user actively and consciously changes the design of the app)
    - Changes the color in the settings
    - Sets the location or time of day
- Implicit interaction (the app changes its design without the user consciously making the change)
    - Detecting the time of day and showing the nighttime mode
    - Remembering the user's last search and showing that info
    - Detecting the location and updating displayed info
- Give the information a user needs when they need it
    - Microinteractions to improve the onboarding experience
    - Real-time feedback through error-messaging


### User Testing

![users will always find ways to misunderstand how to use your app, so do user testing!](https://miro.medium.com/max/600/1*c4v8RrKa6nwZ0aKOvQHwwA.png)

_Users will always find new and creative ways to misunderstand how to use your app ... so do user testing!_

Earlier we said that empathy is one part of creating a great user experience. User testing is the other half of the equation. It's what reveals the actual weak points in your app, the places that need to be tweaked, the functionality that users are expecting.

User testing helps account for any biases we might have as developers. We can't assume that we know all the pain points our users might run into, and we also can't assume that we know the right questions to ask!

Steve Krug's excellent book on usability and user testing, [Don't Make Me Think](http://www.uxbooth.com/articles/10-usability-lessons-from-steve-krugs-dont-make-me-think/) is worth reading if you're interested in making your apps more usable. Hint: everyone should be interested in making their apps more usable.

No matter how empathetic and diligent you are, you can't assume you know everything about your users, or that you've closed all the gaps in your own assumptions.

<section class="call-to-action">

## Paired Activity
Let's get some practice with user testing! You and a partner will be assigned a website to test out. Make sure you read the instructions so you know what your tasks are.


* [Website A](https://github.com/turingschool-examples/user-experience-activities/blob/master/website-a.md)
* [Website B](https://github.com/turingschool-examples/user-experience-activities/blob/master/website-b.md)

</section>


## Additional Resources

* [7 Practical Tips for Cheating at Design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)
* [Intro to Personas](https://frontend.turing.edu/lessons/module-2/ux-ui-intro-to-personas.html)
* [A Worst-Practice UI Experiment](https://userinyerface.com/)
* [Type Scale](https://type-scale.com/) - tool for visualizing font size balance
* [Baymard Institute Page Designs](https://baymard.com/ecommerce-design-examples) - page examples with UX annotations
* [Color Patterns from MailChimp](https://ux.mailchimp.com/patterns/color)
* [Ultimate Guide to User Flow Diagrams](https://creately.com/blog/diagrams/user-flow-diagram/)
* [Invision Design Process](https://www.invisionapp.com/inside-design/category/design/process/)
