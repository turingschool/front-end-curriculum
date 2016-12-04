---
layout: page
---

## Notes from 1610

[Lesson Plan](http://frontend.turing.io/lessons/introduction-to-sass.html)

And here are the [slides](http://frontend.turing.io/lessons/introduction-to-sass-slides.html)

And here is a [repo with Sass, Ideabox and Webpack](https://github.com/rrgayhart/intro-sass-ideabox) that we'll look at

---------

Small Codepen to play with Sass: http://codepen.io/the_ruther4d/pen/ormbi

http://alistapart.com/article/mixing-color-for-the-web-with-sass

http://colorhunt.co/

https://color.adobe.com/create/color-wheel/

http://www.colorhexa.com/323232

----------

RANDOM NOTE:

Before we get started - I wanted to talk to everyone about something COMPLETELY DIFFERENT

How to handle spec changes professionally


1

There are a few embedded practice lessons in here - so make sure you have the slides up on your end so you can find them


2

Intro - will have a more advanced lesson - want to just start to think about it

This is an _extension_ in your project, but we'll want to see it in later projects.

3

I had a very strong lisp when I was a kid - also a Kentucky accent - you'll be hearing a lot of at least one of those things throughout this lesson.

4

A preprocessor takes some code(Sass) and converts it to something else (CSS) so it can be understood by whatever is running the code (the browser)

`pre` because it touches the code before the browser does

5

So Sass is a CSS pre-processor

It has two syntaxes

Sass, when it was first created, the first syntax (also called Sass) was inspired by a templating language called haml - which depended on spacing. 

6

7

So they created the second syntax SCSS 'Sassy Css' SCSS - which doesn't depend on spacing

8

It looks like this

9

You can use either syntax - just call it Sass

10

11

It does more - but we want to talk today about the following tricks

12

Variables are probably the easiest thing to understnd right off the bat.

13

If you give a thing a name, you can understand what it's supposed to do

You can also keep things DRY

If you've spent all night correcting AXE violations and the next morning, you partner comes in with a bunch of whack colors introduced in the project - you can be like, yo, I made variables of good colors - use them plz.

Not just colors - but pixel widths, transition times, etc

14

Pro Tip - put your variables into one file so you can find them easily

15

Looks like this.

Does anyone know what the `@import` does

16 

Really short little practice - in this example codepen, convert to using variables

17

NAMING CONVENTIONS

`Regarding variables, functions and mixins, we stick to something very CSS-y: lowercase hyphen-delimited, and above all meaningful.`

Avoid conflicts this way

https://sass-guidelin.es/#naming-conventions

18 Nesting

After nesting practice - talk about how it can be bad

Make them read this: http://cssguidelin.es/#naming-conventions

Read until `Architectural Principles`

21 COLOR FUNCTIONS


22

Allows you to programatically adjust your colors. Some of the features available to us are...

22

Let's look at a color: http://www.colorhexa.com/323232

23 RGBA

Stands for `red green blue alpha`

alpha is basically the transparency

r, g, and b can be described with numbers 0 through 255 or with a percentage. Alpha is a decimal.

24 Hexadecimal

A shorter way of writing rgb - basically - converting Hexadecimal and Decimal. We'll have an entire data structures class on this.

25 HSLA

Hue, Saturation, Lightness (and alpha)

Read?

https://css-tricks.com/yay-for-hsla/

29? YOUR TURN

Read All: http://alistapart.com/article/mixing-color-for-the-web-with-sass

Work on this Your Turn section


END SLIDES


Walk through how to use the Intro Sass Ideabox repo

Talk about advanced features

