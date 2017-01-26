---
title: Introduction to Sass
length: 120;
tags: css, sass, scss
module: 2
---

### Goals For This Lesson:
  1. Get a general understanding of Sass and SCSS
  2. Understand:
    - Variables
    - Nesting
    - Color Functions
    - Math Functions

### Things You Need
  1. Your Brain
  2. Some *sass*...bahahaha.

### Relevant Intermission Assignments

- [Why Sass?](http://alistapart.com/article/why-sass)
- [A Complete Beginner’s Guide to Learning Sass in a Weekend](http://skillcrush.com/2014/07/29/jargon-begone-common-sass-terminology-beginners/)
- [How to Structure a Sass Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)

## Understanding Sass

### What is Sass?
  Sass stands for Syntactically Awesome StyleSheets.

  *Interesting Note: Sass is never in uppercase. SCSS is always uppercase. There's even a website about it:*  [SassnotSASS.com](SassnotSASS.com)

  Think of it Sass just like CSS but with a grab back of extra weapons like variables, functions, and organizational wizardry.

  As an general definition, Sass is a *preprocessor* written in Ruby that compiles SCSS into CSS3.

  Originally it was part of another preprocessor called `Haml`. It used no curly braces or semi-colons, and the syntax adhered to strict spacing and indentation rules.

  Here's an example of old-school Sass:

```
!primary-color= hotpink

.my-css-class
    color= !primary-color
    width= 100%
    overflow= hidden
```

  With this version, variables were assigned using `!` and CSS styles were defined with `=`. Pretty different from the CSS you're used to using now.

  Developers wanted a syntax that was more familiar to and compatible with vanilla `CSS`. Which brings us to...

###  SCSS
  SCSS stands for Sassy CSS (...seriously).

  In May, 2010 `SCSS` was introduced with more recognizable syntax.

```
$primary-color: hotpink;

.my-element {
    color: $primary-color;
    width: 100%;
    overflow: hidden;
}
```

  Even if you've never worked with SCSS before, this syntax is a little bit easier to understand since it is so much closer to the languages that we use every day. Variables look like jQuery variables, things are nested in these guys: `{}`, wrong indentation won't break your code, and assignments happen using `:` just like in normal CSS.

  Although both Sass and SCSS are both still viable languages to use, movement has shifted significantly toward SCSS for many reasons.

  1. All modern CSS is valid SCSS. That means that you can rename an entire `.css` file `.scss` and nothing will yell at you. Such is not the case for Sass.
  2. There are no strict rules about indentation. There are still best practices, and if your indentation is all over the place you'll make Jhun cry, BUT through the tears your stylesheet will still function properly.

### What do we mean by "Sass is a Preprocessor"?
At the most basic level, a preprocessor is a computer program that takes one type of data and converts it to another type of data.

As developers we are lucky to have some amazing modern tools that help make writing code easier. Unfortunately, computers are still big dumb animals that need very specific instructions.

Sass makes CSS awesome, but we need a processor to do some middle work for us and translate it into the normal CSS that the browser can understand.

### Why use Sass in the first place?
  CSS in large apps can get crazy. Making changes to these large apps is tedious and extremely error prone. Sass makes it easier to change colors, fonts, and other properties by keeping your code DRY.

  Some of the cool tricks include defining variables that can be peppered across multiple CSS files, nesting elements to visibly reflect the HTML element relationships, using math equations to adjust sizes and values, adjusting colors using more intuitive language like "darken" and "lighten", and bundling groups of styles together to easily reference throughout your CSS...to name a few.

## Variables
One of the most obvious and immediately useful features of Sass is the ability to define variables.

As developers we strive to write DRY, clean code, and storing values for CSS styles as variables contributes to that. This means we can make color changes in one place, and the change will be reflected anywhere that the variable is referenced.

Variables are defined by a `$` immediately preceding the name of the variable (like jQuery), and a colon separating the name of the variable from the value.
```
$favorite-text-color: chartreuse;
```

They can then be used anywhere in your stylesheet in place of that style.
```
p {
  color: $favorite-text-color;
}
```

It's also nice to avoid typing long, specific styles more than once. Instead we can reference a semantically logical variable.

```
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

Variables are easiest to change if they're all located in the same stylesheet. Let's say you create a file called `variables.scss` that houses all of your variables. Then you simply need to require said file in your other stylesheets using the syntax `@import "variables"`

```
// variables.scss

// Colors
$favorite-text-color: chartreuse;
$gray-link: #aaa;

// Fonts
$frilly-font: "Fantasy", cursive;
$main-font: "Arial", "Helvetica", "Copperplate", sans-serif;

// Transitions
$button-slide-transition: width 2s, height 2s, background-color 2s, transform 2s;
```

```
// home-page.scss
@import "variables";

body {
  color: $favorite-text-color;
}

```

## Nesting

Nesting makes representing relationships between elements in HTML possible in CSS.

For example, if you want to target an anchor tag within a navigation element within a particular header tag, you can wrap the elements inside each other as you would in HTML.

##### Sass

```
$main-text-dark: #000;
$red: #FF0000;
$link-light: #fff;

header {
  color: $main-text-dark;
  nav: {
    background-color: $dark-red;
    a { color: $link-light; }
  }
}
```

##### CSS Output

```
header { color: #000; }
header nav { background-color: #ff0000; }
header nav a { color: white; }
```

*IMPORTANT NOTE* Notice how the CSS output contains very specific CSS style rules. Although nesting can make writing CSS easier, it can also make targeting future elements more difficult when you need to make changes. Try to avoid excessive levels of nesting unless absolutely necessary.

#### Nesting & Psuedo-Selectors

A common scenario when nesting is a good option is when dealing with psuedo selectors. This makes it very transparent which element's behavior is being targeted on a particular action.

To target a parent element and apply a psuedo selector, use `&:psuedo-selector`, as in the following syntax:
 ```
a {
  &:hover { color: pink; }
}
 ```

##### Practice

  Write SCSS for the following HTML using nesting & variables, following the following criteria:

  1. Link text font family should be Arial, Tahoma, or sans-serif.
  1. On hover, make the link text red, and the button text white.
  2. On hover, make the button have a box shadow of some kind.
  3. For practice, define all styles as variables.

```
  <nav class="nested-magic">
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><button type="button" name="button">Log In</button></li>
    </ul>
  </nav>
```

(Possible solution is at the bottom of the file)

Let's say that your client wants everything thats red to be teal.  Pretend that your CSS file is huge. Isn't is awesome that you only have to change the CSS in one tiny little place?


## Color Functions

Color functions in Sass let you adjust defined color values with ease.

Let's take a second to go back over the different ways to define a color in CSS.

##### RGBA

Stands For: Red, Green, Blue, Alpha(Opacity)
Syntax: `rgba(0-255, 0-255, 0-255, 0-1)` or `rgba(0-100%, 0-100%, 0-100%, 0-1 )`
Example: `rgba(255, 0, 0, 1)` or `rgba(100%, 0, 0, 1)` (red)

Each value takes either a integer from 0-255 or a percentage from 0-100% representing the saturation of red, blue and green respectively, and blends them together.

##### Hexadecimal Code

Stands For: A form of RGB notation written as pairs of hexadecimal values.
Syntax: `#rrggbb` or `#rgb`.
Example: `#f00` or `#ff0000` (red)

*ProTip:* Shorthand comes from duplicating each character. So `#f00` (red) expands into `#ff0000`, or `#fb0` (yellow) expands to `#ffbb00`;)


##### HSLA

Stands For: Hue, Saturation, Lightness, Alpha(Opacity)
Syntax: `hsla(0-360, 0-100%, 0-100%, 0-1)`
Example: `hsla(0, 100%, 50%, 1)` (red)

**Hue:** A value from 0 to 360 indicating the value of RGB on a color wheel.

Think of the letters RGB distributed equally clockwise around a circle. (R)ed is at 0 or 360, (G)reen is at 120, (B)lue is at 240.

[Color Wheel](https://uwdigipub.files.wordpress.com/2014/11/hsl-color-wheel-pagespeed-ce-if6-exzipy.png)

**Saturation:** A percentage of the grayscale from 0% (no color) to 100% (full color).

**Lightness:** A percentage of white value from 0% (completely dark) to 100% (completely light); Standard colors default to 50%.

**Alpha:** A decimal value indicating transparency from 0 (invisible) to 1 (completely opaque).

#### complement(color)

Returns the complement (aka the color that is 180 degrees from the value on the color wheel).
Identical function to `adjust-hue(color, 180deg)`

Take a peek at the [Color Wheel](https://uwdigipub.files.wordpress.com/2014/11/hsl-color-wheel-pagespeed-ce-if6-exzipy.png) again for clarity.

```
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
```
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

```
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

```
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

## Math

Another cool trick in Sass is using Math to handle simple changes to numerical values.

For example, you can define the width of your window using a variable like `$windowWidth` and then make a div that has a width of `windowWidth/3`.  Let's see this in action.

##### SCSS

```
$content-width: 900px;

.innerContent {
  width: $contentWidth/3;
}
```

##### CSS

```
.innerContent {
  width: 300px;
}
```

This is super useful for mentally organizing what you are trying to calculate. Take the following example as a demonstration of how using math and clear variable names can help clarify your stylesheets.

##### SCSS

```
$width-content: 900px;
$padding-narrow-container: 25px;

.main-section {
  padding: $padding-narrow-container;
  width: $width-content - $padding-narrow-container*2
}
```

##### CSS

```
.main-section{
  padding: 20px;
  width: 850px;
}
```

We can combine our color super-powers and math to do some awesome stuff too!

Lets generate random colors with Sass.

In Sass, there's a random function `random()` which unlike JavaScript starts its random number value range at 1.

See if you can set a text color and background-color to the following div using random colors.

```
.random-color-element {
  //INSERT CODE HERE


}

//SOLUTION:

  $red: random(256)-1;
  $green: random(256)-1;
  $blue: random(256)-1;

  .main-content {
    color: rgba($red, $green, $blue, 1);
    background-color: rgba($red, $green, $blue, 1);
  }

```


### SOLUTIONS

#### Nesting Practice Solution:

##### SCSS

```
$color-text-light: #fff;
$color-text-bold:   #f00;
$color-text-default: black;
$font-link-default: Arial, Tahoma, sans-serif;
$box-shadow-default: 1px 1px 30px #000;

.nested-magic {
  a {
    color: $color-text-default;
    font-family: $font-link-default;
;
    &:hover { color: $color-text-bold }
  }
  button {
    &:hover {
      color: $color-text-light;
      box-shadow: $box-shadow-default;
    }
  }
}
```
## Resources
  - [Color Functions Documentation](http://sass-lang.com/documentation/Sass/Script/Functions.html)
  - [Sass to CSS Translator](http://www.sassmeister.com/)
  - [SASS Syntax Highlighting for Atom](https://atom.io/packages/atom-syntax-highlighting-for-sass)
  - [ATOM package for showing CSS colors in your editor](https://atom.io/packages/pigments)
