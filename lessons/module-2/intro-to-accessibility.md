---
title: Intro to Accessibility
length: 120
tags: html, ARIA, accessibility
---

### Learning Goals

* Define accessibility and explain why it's important to us as developers
* Identify different user groups we should be developing for
* Gain some insight into how others might interact with the web that's different than the way we do

## Vocab

- `Accessibility` Broadly, creating an experience that is available to anyone and everyone
- `VoiceOver` A screen reader that is built into apple computers

##  What is accessibility?

Accessibility on the web is all about creating a user experience that is available to anyone and everyone. We want to enable as many people as possible to use our applications, even when those users may be limited in some way.

The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.

<section class="note">
### What does this mean?

This means that any new specifications or enhancements that come to the web are BY DEFAULT designed to be fully accessible to a complete audience.
</section>

Unfortunately, developers often use the tools we're given in the wrong ways, unknowingly (or uncaringly) effecting the accessibility of their site in a negative way.

A quick example: not using semantic HTML tags. If you were to use a `div` instead of an `article` to wrap text for a news article, that means infinitely less to someone relying on a screen reader.

But for some reason we do it anyway!! So the good few souls out there that are really pushing for accessibility have even added additional attributes and APIs you can use to allow you to write your code the way you want, and still make it accessible.

e.g. if you really wanted to use your `div` tag instead of an `article` tag, you could do something like `<div role="article">` and this would provide that same accessibility feedback as if you had used an article tag.

So we have all the tools to make our applications very accessible. While we won't learn about all of them just yet, we will learn about what types of accessibility concerns actually exist, and gain some understanding of how others might be interacting with the web.

## Types of Accessibility Concerns



<section class="call-to-action">
### Shout Em Out!

What are some types of limitations our users might have when using the web?  How might you categorize them?

* Describe how this limits the user.  What kind of web content or devices might they have difficulty interacting with?
* How might you adjust your web content to alleviate that issue?
</section>

<section class="answer">
### Potential Categories  

1. Auditory - This might relate to someone who is deaf / has a hearing loss.  Imagine trying to watch content such as YouTube without captions!
2. Visual - This revolves around those that are blind and unable to interact with tech visually.  Color blindness is also very common in trying to distinguish the difference between colors such as greens and reds, blues and yellows, as well as complete color blindness.
3. Cognitive - This can include any learning disability including dyslexia.
4. Mobility - This can relate to dexterity issues such as the difficulty of typing on a phone, the placement of icons and navigation elements, etc.  
</section>

## Station One

<section class="call-to-action">
### Using a Screen Reader

* Watch the following [video to see how a screen reader understands a page](https://youtu.be/qdB8SRhqvFc?t=417){:target='blank'} from **6:57 to the 9:40** mark.

Using the built-in screen reader on your machine, VoiceOver, close your eyes and navigate through the following two codepens, one at a time:

* [Non-Semantic HTML Form](https://codepen.io/damwhit/full/JZmeqQ){:target='blank'}
* [Semantic HTML Form](https://codepen.io/damwhit/full/WyaMaQ){:target='blank'}

Here are some helpful VoiceOver commands:

* **Starting/Stopping VoiceOver:** command + F5 (if you do not have an F5 key, you can navigate to  > System Preferences > Accessibility > VoiceOver > Enable VoiceOver)
* **Moving your VoiceOver cursor:** control + option + arrow key (ie. control + option + right arrow)
* **Moving your VoiceOver cursor into your web page’s content:** control + option + shift + down arrow
* **Moving your VoiceOver cursor out of your web page’s content:** control + option + shift + up arrow

*Note: use your screen reader very slowly, and really listen to what it's telling you. It will remind you of the commands to enter/navigate a particular piece of content.*

**Questions:**
* What effect does the way we write our HTML have on a screen reader?
* What was difficult about using a screen reader?
* Did you cheat and open your eyes?
</section>

## Station Two


<section class="call-to-action">
### Color Blindness
 
Install a colorblind simulator for Chrome. Try one (or both) of the following:

* [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa/related?hl=en){:target='blank'}
* [Colorblind](https://chrome.google.com/webstore/detail/colorblind-dalton-for-goo/afcafnelafcgjinkaeohkalmfececool/related?hl=en){:target='blank'}

Navigate to some of your most visited sites -- especially those that have some sort of notifications that you would expect to be red (error), yellow (info/warning), green (success). (You can also look at design sites like [Dribbble](https://www.dribbble.com){:target='blank'})

**Questions:**
* What would be difficult about navigating the web while color blind?
* What might you do to help the color blind more clearly interact with your applications?
</section>



----------------------------------------------



## Station Three

<section class="call-to-action">
### Tabbing

Watch the following [video](https://youtu.be/hKIQkgPVXH4?t=307){:target='blank'} from **5:07 - 9:50**.

**Questions:**
* What are some key takeaways from this video snippet?
* What can you do to make sure your page is accessible just through the keyboard?

Go to a site you're less familiar with, and try to accomplish a specific task just by tabbing through. Some ideas:

* go to the United Airlines website and try to book a flight outta here
* go to USPS and try to calculate the price of a package shipping
* go to Facebook and try to comment on a post)

No use of the trackpad is allowed!

**Questions:**
* What was your experience like? Was anything frustrating or confusing about the process? What could you do to solve the frustrations you encountered?
* How was the focus on your current selection? Did you tab into the drop down menus for selecting a car make and model?
</section>

## Station Four

<section class="call-to-action">
### Accessible Text

Check out the following [site](http://geon.github.io/programming/2016/03/03/dsxyliea){:target='blank'} that replicates what it *could* be like to read text with Dyslexia. 

Read the following article on our good font friend, [Comic Sans!](https://www.thecut.com/2017/03/the-reason-comic-sans-is-a-public-good.html){:target='blank'}

Read the following [article on strategies for making text more accessible]( https://www.makeuseof.com/tag/reading-web-dyslexia-heres-make-easier/).

**Questions:**
* What strategies for accessible text could you implement?
* How might you accommodate those with dyslexia while maintaining the original experience for those without?
</section>




----------------------------------------------


<section class="call-to-action">
### Audits 

Browser vendors are beginning to work some accessibility checks directly into our good friend, dev tools. Let's see what we can learn from them! 

**Lighthouse**
* Open up your dev tools panel on the current lesson plan.
* Click on the 'Lightouse' panel of dev tools
* Select the following [settings](https://imgur.com/QMMFc0R) to run an accessibility check on the page
* Click 'Generate Report' (your dev tools may disappear for a while, or your screen may go blank, just wait it out)

**WAVE Evaluation Tool**
* Download the [Chrome Extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US)

Read through the passing, failing, non-applicable and manual audits for this page:
* What accessibility concerns have come to light? WHY are they accessibility concerns?
* What strategies may you have learned based on the failing audits? Passing audits?
* Run the audit on your paired project, and take note of what issues you might need to resolve
</section>

<section class="checks-for-understanding">
### Exit Ticket

In your project groups, file issues for all accessibility concerns that need to be fixed 
</section>