---
title: Introduction to Sass
length: 120
tags: css, sass, scss
module: 2
---

### Learning Goals
* Understand that Sass has two syntaxes: SASS and SCSS
* Understand and apply the basics of Sass to follow the principles of DRY
* Speak to the pros and cons of using a CSS Preprocessor

## Vocab

- `CSS Preprocessor` a program that lets you generate CSS from the preprocessor's own unique syntax. It extends the default capabilities of CSS. Examples include: Sass, LESS, Stylus and more. 
- `Compiler` converts our preprocessed code into css code so that the browser can understand it.

<!-- ### Warm Up

* In past projects, how have you refactored your CSS to follow the DRY principle?
* In past projects, how have you organized your CSS?
* Check Sublime to make sure that you have the color scheme for Sass installed by following these steps:
  1. Type `cmd + shift + p`
  2. Search for `Package Control: List Packages` and search for `Sass`
  3. If the `Sass` package is not installed, follow Step 1 again and search/select `Package Control: Install Package`. Install `Sass` from here.
  4. Scroll down to the very bottom and start reading through the additional resources in the last section, starting with `A Complete Beginner’s Guide to Learning Sass in a Weekend`
 -->

## Intro to Sass

<a target="_blank" href="https://sass-lang.com/">Sass</a> stands for Syntactically Awesome StyleSheets. Sass allows you to add more advanced syntax - like variables and functions - to your stylesheets. 

### Sass

Sass was originally part of another preprocessor called Haml. It used no curly braces or semi-colons, and the syntax adhered to strict spacing and indentation rules. Like so:

<img width="50%" src="../../assets/images/lessons/sass/sass-syntax.png" />

With this version, variables were assigned using `!` and CSS styles were defined with `=`. Pretty different from the CSS you're used to using now. Developers liked the additional control we had over writing our stylesheets, but wanted a syntax more similar to vanilla CSS. This is where SCSS comes in.

Now, this version of Sass looks a little different. Let's compare the same code written in Sass and SCSS syntax.  
* [Sass Codepen Example](https://codepen.io/hannahhch/pen/eYmdpLj)
* [SCSS Codepen Example](https://codepen.io/hannahhch/pen/MWYjKWP)

You _may_ see the Sass syntax in the wild, but we will focus on the newer SCSS syntax.

### SCSS

SCSS stands for Sassy CSS (...seriously). In May, 2010 `SCSS` was introduced with more recognizable syntax.

<section class="call-to-action">
#### Practice

Take a look at the SCSS in [this codepen](https://codepen.io/the_ruther4d/pen/ormbi){:target="_blank"}. Write down any syntactical similarities and differences you notice between SCSS and the plain CSS you're familiar with.
</section>

Even if you've never worked with SCSS before, this syntax is a little bit easier to understand since it is so much closer to the languages that we use every day. Variables look like jQuery variables, things are nested in these guys: `{}`, wrong indentation won't break your code, and assignments happen using `:` just like in normal CSS.

Although both Sass and SCSS are both still viable languages to use, movement has shifted significantly toward SCSS for several reasons:

1. All modern CSS is valid SCSS. That means that you can rename an entire `.css` file `.scss` and nothing will yell at you. This not the case for pure Sass with the `.sass` file extension.
2. There are no strict rules about indentation. There are still best practices, and if your indentation is all over the place you'll make your teachers cry, BUT through our tears, your stylesheet will still function properly.

_Note: For our purposes here, be aware that we will be working strictly with the SCSS syntax when we are working with Sass, AND when most people say "SASS" they are talking about SCSS._

<section class="call-to-action">
#### Turn and Talk

- What is the difference between the SASS and SCSS syntax?
- How would you explain what a preprocessor is to a five year old?
</section>

### Sass in Action

Our browsers *do not* understand Sass, or any of the css preprocessors! In order to be able to use Sass in our code, we need something to turn our Sass code into CSS code so that the browser can understand it. One tool that _compiles_ our Sass (among other things) for us is Webpack!

### Why would we use Sass?

CSS in large apps can get crazy. Making changes to these large apps is tedious and extremely error prone. Sass makes it easier to change colors, fonts, and other properties by keeping your code DRY. This is the one of the key principles of Sass (and in most programming) - *DO NOT REPEAT YOURSELF* .

Some of the cool tricks include:
* defining variables that can be peppered across multiple CSS files
* nesting elements to visibly reflect the HTML element relationships
* using math equations to adjust sizes and values
* adjusting colors using more intuitive language like "darken" and "lighten" 
* bundling groups of styles together to easily reference throughout your CSS...to name a few.

<hr />

## Variables

One of the most obvious and immediately useful features of Sass is the ability to define variables.

As developers we strive to write DRY, clean code, and storing values for CSS styles as variables contributes to that. This means we can make color changes in one place, and the change will be reflected anywhere that the variable is referenced.

Similar to JavaScript, variables can hold a variety of data types: numbers, colors, strings, booleans, lists (array like objects), and maps (data structures that are key/value pairs).

#### Variable Syntax

Variables are defined by a `$` immediately preceding the name of the variable (like jQuery), and a colon separating the name of the variable from the value.

```scss
$primary-color: lime;
```

They can then be used anywhere in your stylesheet in place of that style. If I wanted all of my paragraph tags to have this color and my buttons to have it as a background color, my selector would look like this:

```scss
p {
  color: $primary-color;
}

button {
  background-color: $primary-color;
}
```

It's also nice to avoid typing long, specific styles more than once. Instead we can reference a semantically logical variable.

```scss
$frilly-font: "Fantasy", cursive;
$main-font: "Open Sans", sans-serif;

$button-slide-transition: width 2s, height 2s, background-color 2s, transform 2s;

.main-content {
  font-family: $main-font;

  button {
    transition: $button-slide-transition;
  }
}
```

Note: CSS can now support variables _without_ the use of a preprocessor. In fact, there are a lot of compelling arguments out there regarding the fact that native variables in CSS are more powerful and flexible than the variables that you get with Sass. However, it's important to note that if you are _only_ using a preprocesser like Sass for the variables, you're not using it right. Here is a [good article](https://css-tricks.com/difference-between-types-of-css-variables/) to read more about the differences between CSS and Sass variables.

<section class="call-to-action">
#### Paired Practice

* Fork a copy of [this codepen sandbox page](https://codepen.io/hannahhch/pen/bGVJvJz)
* Take note of which styles get reused, and work with a partner to add in some variables.
* Don't forget, you'll need to add Sass to your codepen! 

</section>

<hr />

## Nesting

Nesting makes representing relationships between elements in HTML possible in CSS.

For example, if you were writing pure CSS and wanted to target an anchor tag that was within a navigation element that was within a particular header tag, you can wrap the elements inside of each other to show the same visual hierarchy that you are used to seeing in your HTML:

##### Sass

```scss
$grey-dark: #2f3640;
$grey-light: #dcdde1;
$red-dark: #FF0000;

header {
  color: $grey-dark;

  nav {
    background-color: $red-dark;

    a { 
      color: $grey-light; 
    }
  }
}
```

##### CSS Output

```scss
header { 
  color: #2f3640; 
}

header nav { 
  background-color: #ff0000; 
}

header nav a { 
  color: #dcdde1; 
}
```

<section class="note">
### Use nesting with CAUTION

Be aware that having _too_ much nesting can be a problem - resulting in hard to maintain CSS that is overly specific (remember specificity?). Try to avoid excessive levels of nesting unless absolutely necessary. 
</section>

#### Nesting & Psuedo-Selectors

A common scenario, when nesting is a good option, is when dealing with psuedo selectors. This makes it very transparent which element's behavior is being targeted on a particular action.

To target a parent element and apply a psuedo selector, use `&:psuedo-selector`, as in the following syntax:

```scss
a {
  color: black;

  &:hover { 
    color: pink; 
  }
}
```

<!-- It is common to use the parent selector for situations where a secondary class changes a style. -->

<section class="call-to-action">
#### Paired Practice

* Revisit your Sass Sandbox Codepen and add in some nesting
* What other situations can you think of where nesting could be beneficial? 

<!-- Write SCSS for the following HTML using nesting & variables, following the following criteria:

* Link text font family should be Arial, Tahoma, or sans-serif.
* On hover, make the link text red, and the button text white.
* On hover, make the button have a box shadow of some kind.
* For practice, define all styles as variables.

```html
  <nav class="nested-magic">
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><button type="button" name="button">Log In</button></li>
    </ul>
  </nav>
``` -->
</section>

Let's say that your client wants everything thats red to be teal. Pretend that your CSS file is huge. Isn't it awesome that you only have to change the CSS in one tiny little place?

<hr />

## Partials and Importing

One of the main benefits of Sass is having the ability to split your codebase across several CSS files without impacting **PERFORMANCE** - which brings us to the use of `@import` with Sass.

You may remember the [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) CSS at-rule that can be used to import style rules from other style sheets when you were working with CSS in Mod 1. However, it's okay if you don't - as the use of this at-rule is typically a code smell/bad practice since it blocks parallel downloads of CSS files (each time you use `@import` it creates another HTTP request).

In the world of Sass, the [`@import`](https://sass-lang.com/documentation/at-rules/import) directive works differently - which is important to know. Although `@import` is still used to require/import other stylesheets into other files, Sass will simply combine imported sheets into one final CSS file that is served to the browser, making it so multiple HTTP requests aren't made.

* Note: Adding an `@import` for the same file more than once will still cause performance issues.

<section class="note">
*2019 Update:* SASS is starting to switch to `@use` instead of `@import`. This fixes some issues, and gives us new, exciting features. With `@use`, the files are only imported once by default, no matter how many times you add it with `@use`. We get *namespaces* that help us to know where our imports are coming from. Here is a [helpful article](https://css-tricks.com/introducing-sass-modules/) with more information on the features `@use` brings.

**However**, as of writing this, only Dart-Sass supports the use of `@use`. So keep an eye out for continued support of this feature!

</section>

Generally, your structure will have the following:

* [Partial](https://sass-lang.com/documentation/at-rules/import#partials) files that have an underscore prefix
* A main file where you will be importing these partial files

```scss
// _variables.scss

// Colors
$favorite-text-color: chartreuse;
$gray-link: #aaa;

// Fonts
$frilly-font: "Fantasy", cursive;
$main-font: "Arial", "Helvetica", "Copperplate", sans-serif;

// Transitions
$button-slide-transition: width 2s, height 2s, background-color 2s, transform 2s;
```

```scss
// index.scss
@import 'reset';
@import 'variables';

@import 'Header';
@import 'Button';
@import 'Author';
@import 'Story';
@import 'Stories';
/*...*/
/*...*/

```

### Media Queries

But what about media queries? There are a lot of [different approaches](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32) that you can take. Here's a [good blog post](https://medium.com/front-end-developers/the-solution-to-media-queries-in-sass-5493ebe16844) that walks through setting up responsive mixins for each component.

One thing to note is that we can nest our media queries and use variables.  


<section class="call-to-action">
#### Paired Practice

* How does `@import` work in Sass? How is it different from the `@import` at-rule used in CSS? 
* In your Sassy Sandbox, find two different ways to set up your file structure with Sass. Separate this code out with comments. 
* What other files might make sense to have in a project?
</section>

<hr />

## Mixins

A mixin allows you to define a set of styles that you want to reuse throughout your codebase. It also gives you the option to pass in values that make your mixin more flexible.

To use:

1. You name them with `@mixin name(arguments) { style }`.
1. To include them you use `@include` name.

##### SCSS

```scss
/ Example
@mixin rounded-corners($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box {
  @include rounded-corners(50px);
}
```

##### CSS Output

```scss
.box {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  border-radius: 50px;
}
```

_Note: Just like variables, common convention is to place your mixins in a partial file that is separate from other styles_

<section class="call-to-action">
#### Turn and Code

In your Sassy Sandbox, build of the following chunk of html and SASS using `mixins`
  1. Create a mixin called `level-one-header` that has a font size of 32px, a
     font weight of 800, and a color of your choice.
  1. Create a second mixin called `level-two-header` that specifies a font size of 24px, a font
     weight of 300, and a color of your choice.
  1. Create another mixin on your own 
</section>

## Extend

Another way to keep your code reuseable and simple is to make use of the `@extend` feature of Sass. Extend allows you to inherit properties from other selectors. Think of as parent styles -- short, green eyes, big feet. Their children and grandchildren have the same base styles but with new age flair and coolness of their own.

```scss
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
```

Compiles to:

```scss
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
```

You may have noticed that `@extend` and `@mixin` can be seen as accomplishing the same thing in a different way since they are both geared towards reusing styles across your project. A common question developers have with Sass is when you should choose to use one over the other, and why.

<section class="call-to-action">
#### Paired Practice

* Add an `extend` or two to your sandbox, and compare it to your mixin. Do you have a preference?

</section>

<hr />


## Colors

Sass offers built-in color functions that allow you to adjust defined color values with ease. Most of the color functions operate by manipulating a single color value - while others can be used to combine colors in different ways.

Color is one of the most powerful components available to us in art and design; yet, it is something that is often underutilized by many programmers. Chances are that you've defined most (if not all) of the colors in your project using the predefined color names from the browsers, hex codes, or RGBA. This is all well and good; however, it fails to give you the same control over your colors as when you use HSLA.

### Defining Colors

Let's take a second to go back over the different ways to define a color in CSS.

#### RGBA

Stands For: Red, Green, Blue, Alpha(Opacity)
Syntax: `rgba(0-255, 0-255, 0-255, 0-1)` or `rgba(0-100%, 0-100%, 0-100%, 0-1 )`
Example: `rgba(255, 0, 0, 1)` or `rgba(100%, 0, 0, 1)` (red)

Each value takes either a integer from 0-255 or a percentage from 0-100% representing the saturation/intensity of red, blue and green respectively, and blends them together.

#### Hexadecimal Code

A form of RGB notation written as pairs of hexadecimal values.
Syntax: `#rrggbb` or `#rgb`.
Example: `#f00` or `#ff0000` (red)

*ProTip:* Shorthand comes from duplicating each character. So `#f00` (red) expands into `#ff0000`, or `#fb0` (yellow) expands to `#ffbb00`;)

#### HSLA

Stands For: Hue, Saturation, Lightness, Alpha(Opacity)
Syntax: `hsla(0-360, 0-100%, 0-100%, 0-1)`
Example: `hsla(0, 100%, 50%, 1)` (red)

**Hue:** A value from 0 to 360 indicating the value of RGB on a color wheel.

Think of the letters RGB distributed equally clockwise around a circle. (R)ed is at 0 or 360, (G)reen is at 120, (B)lue is at 240.

![Color Wheel](https://uwdigipub.files.wordpress.com/2014/11/hsl-color-wheel-pagespeed-ce-if6-exzipy.png)

**Saturation:** A percentage of the grayscale from 0% (no color) to 100% (full color).

**Lightness:** A percentage of white value from 0% (completely dark) to 100% (completely light); Standard colors default to 50%.

**Alpha:** A decimal value indicating transparency from 0 (invisible) to 1 (completely opaque).

---
Using RGBA to try to adjust lightness or saturation can be impractical and frustrating. In order to do this, you would need to shift each of the color channels - which would likely change the original color (hue). This matters most when you are looking to make color variations (fading, gradients, etc) from the same color. Using HSLA is a lot more predictable than RGBA, as seen in this [demo tool](https://css-tricks.com/examples/HSLaExplorer/)

[Light](https://www.claude-monet.com/haystacks.jsp) is an important piece of the design puzzle when it comes to working with color - something that is true for all mediums of [art](https://www.newyorker.com/humor/daily-shouts/a-few-thoughts-from-monet-on-those-stacks-of-wheat) and design, including the digital mediums we use as FE developers.


<section class="call-to-action">
### Group Practice

In small groups, research your assigned built-in color function. Reference the descriptions below, the [Sass documentation](https://sass-lang.com/documentation/modules/color) on color functions, and the examples you are given. Make sure to play around with the code in a codepen - are there differences in using hex, rgba, and hsla? Why is this function relevant?

  * complement()
  * mix()
  * lighten/darken()
  * desaturate/saturate()

Be prepared to show us:
* What the function does
* What it takes in 
* The function in action!
</section>



<!-- 
This is what students will be researching

## Color Functions

#### complement(color)

Returns the complement (aka the color that is 180 degrees from the value on the color wheel).
Identical function to `adjust-hue(color, 180deg)`

Take a peek at the [Color Wheel](https://uwdigipub.files.wordpress.com/2014/11/hsl-color-wheel-pagespeed-ce-if6-exzipy.png) again for clarity.

```scss
$color1: hsla(240, 100%, 50%, 1);
// complement(hsla(240, 100%, 50%, 1)); ==> hsla(60, 100%, 50%, 1);

.complement-background {
  background: complement($color1)
}
```

#### mix(color1, color2, weight)

Mixes two given colors based on the weight percentage provided.

`$weight` in this function is relative to the two defined colors. Closer to `100%` gives more weight to `$color1`, closer to `0%` gives more weight to `$color2`.

```scss
$color1: hsla(0, 100%, 50%, 1);
$color2: hsla(240, 100%, 50%, 1);
// mix(hsla(0, 100%, 50%, 1), hsla(240, 100%, 50%, 1), 75%);
// mix(hsla(0, 100%, 50%, 1), hsla(240, 100%, 50%, 1), 35%);

.redder-background {
  background: mix($color1, $color2, 75%);
}

.bluer-background {
  background: mix($color1, $color2, 35%);
}
```

#### lighten/darken(color, amount)

Takes a color and a percentage value, returning a color with a lightness increased or decreased by given amount.

```scss
$color1: hsla(240, 100%, 50%, 1);
// lighten(hsla(240, 100%, 50%, 1), 30%);
// darken(hsla(240, 100%, 50%, 1), 30%);

.lighter-background {
  background: lighten($color1, 30%);
}

.darker-background {
  background: darken($color1, 30%);
}
```

#### desaturate/saturate(color, amount)
Remember that saturation is a colors representation on a gray scale.

`desaturate()` Will reduce a color's saturation by that percentage.
`saturate()` Will increase a color's saturation by that percentage.

```scss
$full-color: hsla(240, 100%, 50%, 1);
$duller-color: hsla(240, 50%, 50%, 1);
// saturate(hsla(240, 50%, 50%, 1), 10%);
// desaturate(hsla(240, 100%, 50%, 1), 80%);

.vibrant-background {
  background: saturate($duller-color, 30%);
}

.dull-background {
  background: desaturate($full-color, 80%);
} -->


## Summary

We've talked about a lot of the strengths/advantages of using Sass without acknowledging that there are downsides. Given what you know, make a case for possible _disadvantages_ of using Sass

## Resources

- Follow [Facebook's guidelines](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet) to add Sass to your `create-react-app` project
- [A Complete Beginner’s Guide to Learning Sass in a Weekend](http://skillcrush.com/2014/07/29/jargon-begone-common-sass-terminology-beginners/)
- [Why Sass?](http://alistapart.com/article/why-sass)
- [Cooler things you can do with Sass](https://gist.github.com/jareware/4738651)
- [Downsides of using a CSS preprocessor](https://adamsilver.io/articles/the-disadvantages-of-css-preprocessors/)
- [How to Structure a Sass Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)
- [Color Functions Documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html)
- [Sass to CSS Translator](http://www.sassmeister.com/)

### Instructor Resources

- [Practice Solutions](https://github.com/turingschool/front-end-keys/blob/master/module-4/sass/intro-to-sass.md)
