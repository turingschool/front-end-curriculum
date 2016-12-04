---
title: Sass Deep Dive
length: 90 minutes
module: 2
tags: regular expressions, regex
---

## Goals
1. Know how to import partials to keep your Sass files well organized and modular.
2. Understand mixins and functions and when to use them.
3. Understand extending to reduce unnecessary classes in your HTML.
4. Understand the four different control directives and when you would want to leverage them.


## Why Deeply Learning Sass (SCSS) is Worth Your Time 
Let's face it, writing a lot of CSS is not very enjoyable. I love the instant gratification of seeing something beautiful come to life on the screen but it can get very frustrating inspecting elements and adding new classes for hours to get there. But never fear, Sass is here! Let's see how Sass can make writing CSS fun again.

Sass makes you structure important front end choices in a functional way. Being able to quickly find, read and change your Sass is a very important skill on the job. If you can do this, you can get quick feedback from designers and move on the next feature. Otherwise, prepare for long days of wiping tears streaking down your face as you refresh the page for the 87th time and your navbar still doesn't have the correct box shadow. 

In addition to saving your sanity, Sass is now making complex visual components possible. Leave the Javascript for state/actions and keep the cool looks and feels in Sass. With control directives, not only are these visuals possible, but they also reinforce fundamental coding principles. I understand for and while loops better because of Sass.

Let's look at the possibilities...

[Awesomeness in Sass](http://thesassway.com/advanced/inverse-trigonometric-functions-with-sass)

[Fifty Shades of Grey](http://www.sassmeister.com/gist/a7c097629b60c41fb259)

[Fibonacci and Bubble Sort](https://codepen.io/atideman/pen/QKJmaO)



## Variables - Covered
## Nesting - Covered
## Operators - Covered

## 1. Partials and Import
Partails keep your Sass code organized and won't generate partials it's own CSS file. You must import them into your main Sass file.

The config directory is where you store Sass code that doesn't output to CSS. This would be global variables for colors, mixins and functions. Things you want to scatter alongst all of your other Sass partials.

The partials directory stores most of your Sass code. You can break up the files into general components such as header, footer, main content, aside ... etc. Or you can get more grainular and have partials for specific features such as buttons, grids, typography, inputs, search. I prefer the latter because you can easily find and change a specific feature very quickly.

The vendor directory is for 3rd party Sass files. Example would be using Bootstrap, Materialize, jQuery UI or Colorpicker.

  
    stylesheets/
    |
    |-- config/
    | |-- _all.scss
    | |-- _colors.scss
    | |-- _utility.scss
    |
    |-- partials/
    | |-- _base.scss
    | |-- _buttons.scss
    | |-- _figures.scss
    | |-- _grids.scss
    | |-- _typography.scss
    | |-- _reset.scss
    |
    |-- vendor/
    | |-- _colorpicker.scss
    | |-- _jquery.ui.core.scss
    |
    -- main.scss   # Main file

Use @import to include a partial.
    
    // _reset.scss
      
    html,
    body,
    ul,
    ol {
       margin: 0;
      padding: 0;
    }
    
    // main.scss file
    
    @import './partials/reset';
    
    body {
      font: 100% Helvetica, sans-serif;
      background-color: #efefef;
    }
    
**Individually**

Pull down the add-sass-magic branch from the intro-sass-ideabox repo. Add the stylesheets, config, partials and vendor folders and create a _colors.scss, _reset.scss, _buttons.scss, _input.scss, _typography.scss partials using the exisiting Sass code. Import those partials into the main.scss (or style.scss) file in your Ideabox.

## 2. Mixins and Functions
A mixin allows you to define a set of styles along with the option to pass in arguments that you can include in HTML elements, classes or IDs. Mixins are great for reducing repetitive styles in your CSS.

To use:

1. You name them with @mixin name(arguments) { style }.
2. To include them you use @include name.


    / Example
    @mixin border-radius($radius) {
      -webkit-border-radius: $radius;
         -moz-border-radius: $radius;
          -ms-border-radius: $radius;
              border-radius: $radius;
    }
    
    .box { 
      @include border-radius(10px); 
    }
    

**Individually**

Write a mixin called crazy-box that takes in three arguments and include it in the search-input class of Ideabox.

---

A similar feature is a Sass function, with the difference being that a function returns a single value. These are very useful in doing logic in your styles. You are already using some of the built in Sass functions such as rgba(200,0,100,.5) or darken(#500, %10). You name them with @function and set the return value with @return.

    @function make-pinker($value) {
      @return $value + rgb(100,0,0);
    }
    
    p {
        background: make-pinker(gray);
    }

**Together**

Let's make a function that returns the correct width based on our target size and it's container:

    @function find-percent($target, $container) {
      @return ($target / $container) * 100%;
    }
    
    div {
      width: find-percent(760px, 1000px);
    }
    
**Individually**

Write a function called marg-it that takes in multiple arguments and sets the margins for a div.

[Solution](https://codepen.io/atideman/pen/QKJmaO)

## 3. Extend
Extend allows you to inherit properties from other classes and IDs. Think of as parent styles -- short, green eyes, big feet. Their children and grandchildren have the same base styles but with new age flair and coolness of their own.

**Code together**

    .message {
      border: 1px solid #ccc;
      padding: 10px;
      color: #333;
    }
    
    .success {
      @extend .message;
      border-color: green;
    }
    
    .error {
      @extend .message;
      border-color: red;
    }
    
    .warning {
      @extend .message;
      border-color: yellow;
    }
Compiles to:
  
    .message, .success, .error, .warning {
      border: 1px solid #cccccc;
      padding: 10px;
      color: #333;
    }
    
    .success {
      border-color: green;
    }
    
    .error {
      border-color: red;
    }
    
    .warning {
      border-color: yellow;
    }
  
[Check it out](https://codepen.io/atideman/pen/QKJmaO)

**Pair Practice**

Use mixins to create a gecko class that is extended by a reptile class that is extended by an animal class. 

What happens if you have some SCSS (like the animal class) but you never actual apply that class in your HTML??? Well Sass has a fancy little tool called a placedholder. Just use %animal instead of .animal and it works the same without actaully compiling the placeholder with it's features. Try it!

Real world example of how this is useful is creating a bunch of add-in features using placeholders so that they are readily available by extending them, but if they aren't those extra features don't clutter the CSS.

## 4. Control directives

### @if

The if directive returns any styles if the directive doesn't not result in false or null.


  // For debugging    
  @mixin debug-text($true) {
    @if $true {
      color: red;
    }
  }
  
  body {
    @include debug-text(true)
  }
    
  // Useful mixin using If and else statement
  @mixin top-or-bottom($tb) {
    position: absolute;
  
    // Declare top or bottom
    @if $tb == top {
      top: 20px;
    }
  
    @else if $tb == bottom {
      bottom: 20px;
    }
  }
  
  .lower-text {
    @include top-or-bottom(bottom);
  }



### @each

The each directive loops through a list or map of variables. This is handy in creating accurate class names with specific values:
    
  @each $cohort in 1505, 1511, 1610, 1612 {
     .#{$cohort}-avatar {
         background-image: url('/img/#{$cohort}.png');
     }
  }
  
  $align-list: center, left, right;
  
  @each $align in $align-list {
    .txt-#{$align} {
      text-align: $align;
    }
  }


### @for

Output styles in a loop. Uses a variable name to track the loop. You can use from x through y to include the ending number or from x to y to not include it. You can loop backwards by making the first number larger than the second. 

  @for $i from 1 through 12 {
    .col-#{$i} { width: 100/12 * $i;}
  }

### @while

Output styles until the desired condition returns false.

  $z:1;
  
  @while $z < 9 {
      .text-col-#{$z} { 
        font-weight: 100 * $z;
      }
      $z: $z + 1;
  };


## Closing
So what did we learn today?

1. CSS doesn't need to be painful, it's fun with Sass!
2. Using partials and imports keeps your Sass well organized and easy to change.
3. Mixins and functions reduce repetitive styles and logic.
4. Control directives allows for complex styles with very little Sass. 


## Possible Questions
1. When should I use mixins instead of extending?
2. Where should I import partials?
3. When should I use @each vs. @for vs. @while?


## Answers
1. Mixins should be used for a specific style that will be used repetitively. Extending should be used for building upon a generic or parent class.
2. You should import partials in your main scss file. If there are lots of partials in each directory you can use an _all.scss file to import the partials and then import all of the _all.scss partials.
3. Use @each for a set list of variables, @for to loop through a known number of loops, and @while for a specific stop case.


## Project Work Time
Use partials, mixins, functions and control directives (at least one of each @if, @each, @for, @while) in your Ideabox to add a four column grid to the idea list. Each column should have it's own unique style.

    
## Resources
[Sass-Lang](http://sass-lang.com/guide)

[Sass Basic Operators](https://www.sitepoint.com/sass-basics-operators/)

[The Sass Way](http://thesassway.com/beginner/how-to-structure-a-sass-project)

[Compass](http://compass-style.org/)