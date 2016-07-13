---
title: CSS Gradients
length:
tags: css, gradients
---

### Goals

By the end of this lesson, you will know/be able to:

* Understand how to make gradients with CSS
* Know the different types of gradients and how to control them


#### CSS Gradients

Gradients can add depth and visual interest, but they tend to get a bad rap. Overusing these can result in something that, well, doesn't look very nice. It's not uncommon to see inexperienced designers slap drop shadows or gradients on their projects as a way to make it better or to compensate for an otherwise weak layout, but more often than not it simply detracts from the work. But used in moderation, they can be a positive addition to your site

Generally, it's a good idea to use these effects with a light hand. Less is often more, and understanding how they work gives you greater control which, in turn, lets you have better results.

#### Gradients with CSS

Just like we can apply solid color as a background, we can also apply a gradient as a background. Building a gradient with CSS lets us control every aspect of how the colors blend together.

As solid colors use the `background-color` property, gradients use the  `background-image` property. For both solid colors and gradients we can also use the shorthand `background` property.

Here's an example from [Chris Coyier](https://css-tricks.com/) of what that looks like:

```CSS
.gradient {

  /* can be treated like a fallback, better safe than sorry */
  background-color: magenta;

  /* will be used, if browser supports it without requiring prefixes */
  background-image: linear-gradient(magenta, aqua);

  /* these will reset other properties, like background-position, but it will do the thing */
  background: magenta;
  background: linear-gradient(magenta, aqua);

}
```

#### Gradient Types

There are two types of gradients: **linear** and **radial**. Linear gradients are most common, and go from left-to-right, top-to-bottom, or at an angle. Radial gradients originate from a central point and go outwards, giving the impressions of a circle or sunburst.

##### Linear Gradients

The default "look" for linear gradients is top to bottom. We can use as many comma-separate color values as we like (remember, with great power comes great responsibility). We can use hex values, named colors, rgba, etc. Here's an example:

```CSS
.linear {
  background-image: linear-gradient(magenta, aqua);
}
```


If we want the gradient to be left-to-right, we write it like this:

```CSS
.linear {
  background-image: linear-gradient(to right, magenta, aqua);
}
```

We can even make it originate from corners. The example below starts in the bottom left corner and goes up to the top right corner:

```CSS
.linear {
  background-image: linear-gradient(to top right, magenta, aqua);
}
```

We can also specify angles if we want to be precise:

```CSS
.linear {
  background-image: linear-gradient(45deg, magenta, aqua);
}
```

And if we wanted to try out more than two colors:

```CSS
.linear {
  background-image: linear-gradient(10deg, magenta, aqua, limegreen, yellow);
}
```

We can also specify where we want a color to start using `color-stops`. These let us dictate what percentage of the gradient each color will take up. By default, each color takes up equal space. In this example, we want magenta to take up most of the space, but we still want a smidge of aqua at the end (I mean, who doesn't):

```CSS
.linear {
  background-image: linear-gradient(magenta 80%, aqua);
}
```

We can also use `color-stops` to make hard edges between our colors. This can be used to create patterns and textures, or to create a full-height background that simulates columns:

```CSS
.linear {
  background-image: linear-gradient(magenta 80%, aqua 20%);
}
```

For a more in-depth dive into linear gradients, take a look at the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient).

##### Radial Gradient

Radial gradients are often used to simulate a light source, something that a linear gradient isn't always suited for.

By default, the first color you list is at (center, center) of the element and it fades at an equal rate into the next color towards the edges of it's container.

```css
.radial {
  background-image: radial-gradient(magenta, aqua);
}
```

The gradient will fill the shape it is being applied as the background of, so if that shape is a square the gradient will appear circular. If the shape is rectangular, the gradient will be an ellipse. We can also force the shape to be a circle:

```css
.radial {
  background-image: radial-gradient(circle, magenta, aqua);
}
```

If we want to force the gradient to be a circle *and* to fit completely within the shape, we can write:

```css
.radial {
  background-image: radial-gradient(circle closest-side, magenta, aqua);
}
```

Along with `closest-side`, we have access to `closest-corner`, `closest-side`, `farthest-corner`, and `farthest-side`. Take a minute to try these out and see how they behave.

We an also dictate where the gradient starts if we don't want it centered:

```css
.radial {
  background-image: radial-gradient(circle at top right, magenta, aqua);
}
```

For a more in-depth dive into linear gradients, take a look at the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient).

#### Repeating Gradients

We can also create patterns using repeating linear-gradients and some precise color-stops. It's slightly less supported and can take some fussing with the implement, but the results are pretty fun:

```css
.repeat {
  background-image:
    repeating-linear-gradient(
      45deg,
      aqua,
      aqua 25px,
      magenta 25px,
      magenta 50px
    );
}
```

You can also create [`repeating-radial-gradients`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient).

#### Browser Support and prefixes

Gradients are notorious for needing vendor prefixes and being a hassle to write to accommodate the various versions on syntax that browsers has supported over time. Modern browsers have good support for the **new syntax we just used**, so it's a good idea to test, test, test in many browsers to make sure your gradients are holding up.

For example, if you wanted deep browser support, you'd end up with something like this linear gradient example from [Chris Coyier](https://css-tricks.com/):

```CSS
.gradient {

  /* Fallback (could use .jpg/.png alternatively) */
  background-color: red;

  /* SVG fallback for IE 9 (could be data URI, or could use filter) */
  background-image: url(fallback-gradient.svg);

  /* Safari 4, Chrome 1-9, iOS 3.2-4.3, Android 2.1-3.0 */
  background-image:
    -webkit-gradient(linear, left top, right top, from(red), to(#f06d06));

  /* Safari 5.1, iOS 5.0-6.1, Chrome 10-25, Android 4.0-4.3 */
  background-image:
    -webkit-linear-gradient(left, red, #f06d06);

  /* Firefox 3.6 - 15 */
  background-image:
    -moz-linear-gradient(left, red, #f06d06);

  /* Opera 11.1 - 12 */
  background-image:
    -o-linear-gradient(left, red, #f06d06);

  /* Opera 15+, Chrome 25+, IE 10+, Firefox 16+, Safari 6.1+, iOS 7+, Android 4.4+ */
  background-image:
    linear-gradient(to right, red, #f06d06);

}
```

Radial gradients are for the most part treated the same but they can be a little bit more complicated. Here is [Chris's](https://css-tricks.com/) example of syntax changes for radial gradients:

```css
/* Example of Old */
background-image:
  -webkit-gradient(radial, center center, 0, center center, 141, from(black), to(white), color-stop(25%, blue), color-stop(40%, green), color-stop(60%, red), color-stop(80%, purple));

/* Example of Tweener */
background-image:
  -webkit-radial-gradient(45px 45px, farthest-corner, #F00 0%, #00F 100%) repeat scroll 0% 0% rgba(0, 0, 0, 0);

/* Example of New */
background-image:
  radial-gradient(circle farthest-side at right, #00F, #FFF);
```

For more information about working with gradients, check out the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients).

#### Your Turn

Time for Ultimate Gradient Extreme Garbage Challenge! Get all that gradient mayhem out of your system. Go nuts!
