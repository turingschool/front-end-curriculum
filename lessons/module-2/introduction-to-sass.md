---
title: Introduction to Sass
length: 120
tags: css, sass, scss
module: 2
---

<style type="text/css">
.discuss{padding:20px !important;font-size:13px !important;background-color:#fefefe;border:1px solid #eee !important}
.discuss h4{margin:0 !important}
body,html{background-color:#fff;height:100%;margin:0;font-family:'Open Sans',sans-serif, color: #555;}.content a:link, .content a:visited{border-bottom:0px !important;text-decoration:none;color:#05c2d1}.content p { color: #555 !important; }
hr{width:100%;height:1px;background-color:#eee;border:0;margin:50px 0}
</style>

### Learning Goals
* Understand that Sass has two syntaxes: SASS and SCSS
* Understand and apply the basics of Sass to follow the principles of DRY and KISS
* Speak to the pros and cons of using a CSS Preprocessor

## Vocab

- `CSS Preprocessor` A tool that processes some CSS-like language and turns it into CSS

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

Sass stands for Syntactically Awesome StyleSheets. Sass allows you to add more advanced syntax - like variables and functions - to your stylesheets. It is a CSS preprocessor that converts SCSS (Sassy CSS) into vanilla CSS.

A pre-processor is a tool that will process your code and compile it to a new format that adheres to the requirements of your environment. Think babel - this compiles our fancy ES6 syntax back down to ES5 so that it can be supported in older browsers.

### Sass

Sass was originally part of another preprocessor called Haml. It used no curly braces or semi-colons, and the syntax adhered to strict spacing and indentation rules. Like so:

<img width="50%" src="../../assets/images/lessons/sass/sass-syntax.png" />

With this version, variables were assigned using `!` and CSS styles were defined with `=`. Pretty different from the CSS you're used to using now. Developers liked the additional control we had over writing our stylesheets, but wanted a syntax more similar to vanilla CSS. This is where SCSS comes in.

### SCSS

SCSS stands for Sassy CSS (...seriously). In May, 2010 `SCSS` was introduced with more recognizable syntax.

<div class="discuss">
  <h4>Practice</h4>
  <p>Take a look at the SCSS in <a href="https://codepen.io/the_ruther4d/pen/ormbi">this codepen</a>. Write down any syntactical similarities and differences you notice between SCSS and the plain CSS you're familiar with.</p>
</div>

Even if you've never worked with SCSS before, this syntax is a little bit easier to understand since it is so much closer to the languages that we use every day. Variables look like jQuery variables, things are nested in these guys: `{}`, wrong indentation won't break your code, and assignments happen using `:` just like in normal CSS.

Although both Sass and SCSS are both still viable languages to use, movement has shifted significantly toward SCSS for several reasons:

1. All modern CSS is valid SCSS. That means that you can rename an entire `.css` file `.scss` and nothing will yell at you. This not the case for pure Sass with the `.sass` file extension.
2. There are no strict rules about indentation. There are still best practices, and if your indentation is all over the place you'll make your teachers cry, BUT through the tears, your stylesheet will still function properly.

_Note: For our purposes here, be aware that we will be working strictly with the SCSS syntax when we are working with Sass._

#### Turn and Talk

- What is the difference between the SASS and SCSS syntax?
- How would you explain what a preprocessor is to a five year old?

### Why would we use Sass?

CSS in large apps can get crazy. Making changes to these large apps is tedious and extremely error prone. Sass makes it easier to change colors, fonts, and other properties by keeping your code DRY. This is the one of the key principles of Sass - *DO NOT REPEAT YOURSELF* .

Some of the cool tricks include defining variables that can be peppered across multiple CSS files, nesting elements to visibly reflect the HTML element relationships, using math equations to adjust sizes and values, adjusting colors using more intuitive language like "darken" and "lighten", and bundling groups of styles together to easily reference throughout your CSS...to name a few.

<hr />

## Variables

One of the most obvious and immediately useful features of Sass is the ability to define variables.

As developers we strive to write DRY, clean code, and storing values for CSS styles as variables contributes to that. This means we can make color changes in one place, and the change will be reflected anywhere that the variable is referenced.

Similar to JavaScript, variables can hold a variety of data types: numbers, colors, strings, booleans, lists (array like objects), and maps (data structures that are key/value pairs).

#### Variable Syntax

Variables are defined by a `$` immediately preceding the name of the variable (like jQuery), and a colon separating the name of the variable from the value.

```
$favorite-text-color: lime;
```

They can then be used anywhere in your stylesheet in place of that style. If I wanted all of my paragraph tags to have this color, my selector would look like this: 

```css
p {
  color: $favorite-text-color;
}
```

It's also nice to avoid typing long, specific styles more than once. Instead we can reference a semantically logical variable.

```css
$frilly-font: "Fantasy", cursive;
$main-font: "Arial", "Helvetica", "Copperplate", sans-serif;

$button-slide-transition: width 2s, height 2s, background-color 2s, transform 2s;

.main-content {
  font-family: $main-font;
  button {
    transition: $button-slide-transition;
  }
}
```

Note: As some of you may already know, CSS can now support variables _without_ the use of a preprocessor. In fact, there are a lot of compelling arguments out there regarding the fact that native variables in CSS are more powerful and flexible than the variables that you get with Sass. However, it's important to note that if you are _only_ using a preprocesser like Sass for the variables, you're not using it right.

<hr />

## Nesting

Nesting makes representing relationships between elements in HTML possible in CSS.

For example, if you were writing pure CSS and wanted to target an anchor tag that was within a navigation element that was within a particular header tag, you can wrap the elements inside of each other to show the same visual hierarchy that you are used to seeing in your HTML:

##### Sass

```css
$main-text-dark: #000;
$dark-red: #FF0000;
$link-light: #fff;

header {
  color: $main-text-dark;
  nav {
    background-color: $dark-red;
    a { color: $link-light; }
  }
}
```

##### CSS Output

```css
header { color: #000; }
header nav { background-color: #ff0000; }
header nav a { color: white; }
```

*IMPORTANT NOTE* Be aware that having _too_ much nesting can be a problem - resulting in hard to maintain CSS that is overly specific. Try to avoid excessive levels of nesting unless absolutely necessary.


#### Nesting & Psuedo-Selectors

A common scenario, when nesting is a good option, is when dealing with psuedo selectors. This makes it very transparent which element's behavior is being targeted on a particular action.

To target a parent element and apply a psuedo selector, use `&:psuedo-selector`, as in the following syntax:

```
a {
  &:hover { color: pink; }
}
```

It is common to use the parent selector for situations where a secondary class changes a style.

#### Turn and Code

<div class="discuss">
<h4>Practice</h4>
<p>Write SCSS for the following HTML using nesting & variables, following the following criteria:</p>
<ul>
  <li>Link text font family should be Arial, Tahoma, or sans-serif.</li>
  <li>On hover, make the link text red, and the button text white.</li>
  <li>On hover, make the button have a box shadow of some kind.</li>
  <li>For practice, define all styles as variables.</li>
</ul>
</div>

```html
  <nav class="nested-magic">
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><button type="button" name="button">Log In</button></li>
    </ul>
  </nav>
```

Let's say that your client wants everything thats red to be teal.  Pretend that your CSS file is huge. Isn't it awesome that you only have to change the CSS in one tiny little place?

<hr />

## Partials and Importing

One of the main benefits of Sass is having the ability to split your codebase across several CSS files without impacting **PERFORMANCE** - which brings us to the use of `@import` with Sass.

You may remember the [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) CSS at-rule that can be used to import style rules from other style sheets when you were working with CSS in Mod 1. However, it's okay if you don't - as the use of this at-rule is typically a code smell/bad practice since it blocks parallel downloads of CSS files (each time you use `@import` it creates another HTTP request.

In the world of Sass, the `@import` directive works differently - which is important to know. Although `@import` is still used to require/import other stylesheets into other files, Sass will simply combine imported sheets into one final CSS file that is served to the browser, making it so multiple HTTP requests aren't made.

Generally, your structure will have the following:

* Partial files that have an underscore prefix
* A main file where you will be importing these partial files

```css
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

```css
// main.scss
@import "reset";
@import "variables";
@import "buttons";
...
...

```

#### Turn and Talk
* How does `@import` work in Sass? How is it different from the `@import` at-rule used in CSS?
* With your partner, find two different ways to set up your file structure with Sass

<hr />

## Mixins

A mixin allows you to define a set of styles that you want to reuse throughout your codebase. It also gives you the option to pass in values that make your mixin more flexible.

To use:

1. You name them with @mixin name(arguments) { style }.
2. To include them you use @include name.

##### SCSS
```css
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

```css
.box {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  border-radius: 50px;
}
```

_Note: Just like variables, common convention is to place your mixins in a partial file that is separate from other styles_
    
#### Turn and Code

In a CodePen, build the following chunk of html and SASS using `mixins`
  1. Create a mixin called `level-one-header` that has a font size of 32px, a
     font weight of 800, and a font family of Helvetica.  
  2. Create a second mixin called `level-two-header` that specifies a font size of 24px, a font
     weight of 300, and a font family of Arial.   
  3. Create another mixin called `body-copy` that has a font size of 16px, a font weight of 100,  and a font family of Times New Roman.   
  4. Using these mixins, create a small chunk of html. The HTML should have the following: 
    - One h1 element using the appropriate mixin.
    - Two divs, each with an h2 and a paragraph tag.
    - For the two h2 elements, one should have a class of "pink", which should have pink font, and one
      with a class of "subheader" that is grey, underlined, and all caps.
    - Each of the paragraphs should have a max width of 980px, but the one associated with the subheader should also be in italics. Refactor this CSS into SCSS using a mixin that takes in the two colors you need in your gradient. Apply the mixin to a div to give it a background gradient.

## Extend

Another way to keep your code reuseable and simple is to make use of the `@extend` feature of Sass. Extend allows you to inherit properties from other selectors. Think of as parent styles -- short, green eyes, big feet. Their children and grandchildren have the same base styles but with new age flair and coolness of their own.

```
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

```  
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

#### Research and Talk

In pairs, take 10 minutes to read two articles around this debate. Come together to discuss what you found. Bonus points if you also look into `placeholder`. 

<hr />


## Colors

Sass offers build in color functions that allow you to adjust defined color values with ease. Most of the color functions operate by manipulating a single color value - while others can be used to combine colors in different ways.

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


#### Jigsaw

In groups of four, research your assigned built-in color function. Reference the descriptions below, the [Sass documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html) on color functions, and the examples you are given. Make sure to play around with the code in a codepen - are there differences in using hex, rgba, and hsla? Why is this function relevant?
  
  * complement()
  * mix()
  * lighten/darken()
  * desaturate/saturate()

## Color Functions

#### complement(color)

Returns the complement (aka the color that is 180 degrees from the value on the color wheel).
Identical function to `adjust-hue(color, 180deg)`

Take a peek at the [Color Wheel](https://uwdigipub.files.wordpress.com/2014/11/hsl-color-wheel-pagespeed-ce-if6-exzipy.png) again for clarity.

```css
$color1: hsla(240, 100%, 50%, 1);
complement(hsla(240, 100%, 50%, 1));
=> hsla(60, 100%, 50%, 1);

.complement-background {
  background: complement($color1)
}
```

#### mix(color1, color2, weight)

Mixes two given colors based on the weight percentage provided.

`$weight` in this function is relative to the two defined colors. Closer to `100%` gives more weight to `$color1`, closer to `0%` gives more weight to `$color2`.

```css
$color1: hsla(0, 100%, 50%, 1);
$color2: hsla(240, 100%, 50%, 1);
mix(hsla(0, 100%, 50%, 1), hsla(240, 100%, 50%, 1), 75%);
mix(hsla(0, 100%, 50%, 1), hsla(240, 100%, 50%, 1), 35%);

.redder-background {
  background: mix($color1, $color2, 75%);
}

.bluer-background {
  background: mix($color1, $color2, 35%);
}
```

#### lighten/darken(color, amount)

Takes a color and a percentage value, returning a color with a lightness increased or decreased by given amount.

```css
$color1: hsla(240, 100%, 50%, 1);
lighten(hsla(240, 100%, 50%, 1), 30%);
darken(hsla(240, 100%, 50%, 1), 30%);

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

```css
$full-color: hsla(240, 100%, 50%, 1);
$duller-color: hsla(240, 50%, 50%, 1);
saturate(hsla(240, 50%, 50%, 1), 10%);
desaturate(hsla(240, 100%, 50%, 1), 80%);

.vibrant-background {
  background: saturate($duller-color, 30%);
}

.dull-background {
  background: desaturate($full-color, 80%);
}
```

<!-- <hr /> -->

<!-- [Check it out](https://codepen.io/atideman/pen/QKJmaO) -->

<!-- 
## Control directives

### @if

The if directive returns any styles if the directive does not result in false or null.

```
// For debugging    
@mixin debug-text($true) {
  @if $true {
    color: red;
  }
}

body {
  @include debug-text(true)
}
  
// Useful mixin using if and else statement
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
```


### @each

The each directive loops through a list or map of variables. This is handy in creating accurate class names with specific values:

```    
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
```

### @for

Output styles in a loop. Uses a variable name to track the loop. You can use from x through y to include the ending number or from x to y to not include it. You can loop backwards by making the first number larger than the second. 

```
@for $i from 1 through 12 {
  .col-#{$i} { width: 100/12 * $i;}
}
```

### @while

Output styles until the desired condition returns false.

```
$z:1;

@while $z < 9 {
    .text-col-#{$z} { 
      font-weight: 100 * $z;
    }
    $z: $z + 1;
};
```
 -->

<!-- <hr /> -->

<!-- ## Operators

One last cool trick that we wanted to cover: Sass allows you to use Math to handle simple changes to numerical values.

For example, you can define the width of your window using a variable like `$windowWidth` and then make a div that has a width of `windowWidth/3`.  Let's see this in action.

##### SCSS

```css
$content-width: 900px;

.innerContent {
  width: $contentWidth/3;
}
```

##### CSS

```css
.innerContent {
  width: 300px;
}
```
 -->
<hr />

## Summary

We've talked about a lot of the strengths/advantages of using Sass without acknowledging that there are downsides. Given what you know, make a case for possible _disadvantages_ of using Sass

## Resources

- Follow [Facebook's README](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) to add Sass to your `create-react-app` project
- [A Complete Beginner’s Guide to Learning Sass in a Weekend](http://skillcrush.com/2014/07/29/jargon-begone-common-sass-terminology-beginners/)
- [Why Sass?](http://alistapart.com/article/why-sass)
- [Cooler things you can do with Sass](https://gist.github.com/jareware/4738651)
- [Downsides of using a CSS preprocessor](https://adamsilver.io/articles/the-disadvantages-of-css-preprocessors/)
- [How to Structure a Sass Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)
- [Color Functions Documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html)
- [Sass to CSS Translator](http://www.sassmeister.com/)

### Instructor Resources

- [Practice Solutions](https://github.com/turingschool/front-end-keys/blob/master/module-4/lesson-plans/intro-to-sass.md)
