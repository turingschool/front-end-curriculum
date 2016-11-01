---
title: Parallax
tags: HTML, CSS, Parallax
---

Plan Of Attack:  
  - What is Parallax?
  - Examples
  - Build a hand-rolled parallax site like [this](http://callmenick.com/_development/advanced-parallax-effect/)

### What is Parallax?

Parallax scrolling is a hip feature where background images of a website scroll at different speeds, creating an illusion of depth and movement.  

[Video](https://www.shutterstock.com/video/clip-3984934-stock-footage-window-view-from-a-car-bus-train-traveling-hd-videos-no.html?src=search/viE62cjRbfE1fbNM7cEzMA:1:15/gg)

The effects of parallax can target creating a dynamic user experience in general, not simply oriented towards depth or landscapes.  

Ultimately the effect is created by targeting elements on the page to move in different directions, at different speeds, as the user scrolls.  

There are many different ways to implement this affect. The two most obvious that we will be focusing on today are using back ground images that are either fixed, or that scroll at a slower speed than the foreground image.

[Fixed]()  
[Dynamic]()

### Some Sweet Examples
[Check out these examples](http://www.awwwards.com/websites/parallax/). Also if you don't have the Awwwards website on your radar it's a great place for design inspiration.

[Scrolling Adventure](http://www.webdesigncrowd.com/websites-unique-scrolling-adventure/)

[Scene](http://discoveroutpost.com/)  

[O'Run](https://romainpsd.com/orun-app)  

[Magic Words](https://www.hpmagicwords.com.br/)

[Gang Des Confettis](https://romainpsd.com/le-gang-des-confettis)  


### Fixed Background Parallax

Ultimately the only thing happening here is forcing the top content to behave as usual (ie scroll) while the background image(s) remains fixed. This can be done using only CSS, but it's important to keep in mind that today a website is nothing if it isn't responsive.  

Let's build this:

#### HTML Skeleton

If you break down what sections are needed in the markup, you'll see we have an alternating situation of a background image, then some content, etc. So let's create an `index.html` page to reflect this, with a few sections of content and few sections that will eventually have a background image.  

```
// index.html
```

```
<body>
  ...
  <section class="container parallax parallax-1">
    <div class="content">
      <h1>Hello</h1>
    </div>
  </section>

  <section class="container static">
    <div class="content">
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    </div>
  </section>
  ...
</body>
```

In the body of your html page, insert alternating sections with specific classes to define whether the section is meant to be a parallax background image, or a static container. Add as many as you'd like here. Note that within each section we have a div that holds the actual content of our sections - this will be important for allowing the visible content to be dynamic as our browser size changes.

#### CSS Magic

A few things to note before we start coding. It's helpful to define a consistent size for your background images so that the size of the parallax sections can match the same height, and it's also important to plan for the largest reasonable image size needed. Additionally, the size of a user's browser window will always be different. Setting the background-size property to `cover` will help make sure the image is always filling the space available, and giving it a specific `background-position` will help it scale attractively. [Background Position Example](http://www.w3schools.com/cssref/playit.asp?filename=playcss_background-position&preval=50%25%2050%25)

```
// main.css
```

```
  ...

/* Add some space in the static content sections */
section.container.static {
  padding: 40px 0;
}

/* Check out the background specifications. Here we are saying that our images are big enough to not repeat, we want them to take up as much space as they're given, but to stay put (fixed). */
section.container.parallax {
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
}

/* Style the h1 so that is covers the entire parallax image - note the line height */
section.container.parallax h1 {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  line-height: 600px;
  color: rgba(255,255,255,0.8);
  font-family: sans-serif;
  text-shadow: 0 0 10px rgba(0,0,0,0.2);
}
  ...
```

### Dynamic Parallax Effect

Our first example broke down how a simple parallax effect can be implemented with very little code. The interesting part about Parallax is how much depth it gives to webpages, which comes from more than simply applying `fixed` to a background image.  To do this we need to get the background to scroll along with the foreground, but at a slower speed.  

The cool part is that we can use exactly the same HTML markup as our previous example. Let's check out a new branch and go from there.


The CSS can also remain *nearly* the same. The two sections that change are listed below, with the original styles commented out for comparison.  

Most significantly, we don't want our background-images to remain fixed, so we add a bunch of padding (instead of an explicit height), and tell the image to start in the top left corner to allow for as much space for scrolling as possible. Finally we no longer want this to be fixed, so we get rid of all of that.  

The `h1` at this point no longer has a fixed height to match to a line-height, so we set it to `1` to match the containing element. Everything else can stay the same for now.


```
// main.css
```

```
 ...

 section.container.parallax {
  padding: 240px 0;
  background-position: 0, 0;

  /* height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;*/
}

section.container.parallax h1 {
  line-height: 1;
  /*line-height: 600px;*/

  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
  font-family: sans-serif;
  text-shadow: 0 0 10px rgba(0,0,0,0.2);
}

  ...
```

At this point everything scrolls like a normal web page, with no fun parallax effects at all. We need to call in our super friend JavaScript to give us some extra tools to get fancy.

Ultimately, every time we reach a parallax section within our viewport, we want JavaScript to grab it and alter the scroll spee to be slower than the default.  

In other words, if we scrolled down the entire webpage by 100px, we want the parallax background image to only be 50px form where it started instead (effectively reducing the "speed" by 50%).

```
// parallax.js
```

```
(function() {
  var parallax = document.querySelectorAll('.parallax'),
      speed = 0.5;

  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i){

      var windowYOffset = window.pageYOffset,
          setBackgroundPos = '50% ' + (windowYOffset * speed) + 'px';

          el.style.backgroundPosition = setBackgroundPos

    });
  }
})(); // <-- Remember this guy??
```

Ok. Wtf just happened, and what's up with the funky empty array/slice/call business?

First, we target all of the elements with a class of `.parallax`, which are the elements we want to slow down.  

Then we set the speed to a decimal between 0 and 1, in our case we want to move 50% as fast so we use `0.5`. So far, so good.  

Then we use the `window` API and target the `.onScroll` method.  

That next weird bit with `[].slice.call(parallax)` is a pretty cool way of saying `Array.prototype.slice.call(...)`. It gives us access to all of the prototype methods on the `Array` object, with far less syntax. `.slice()` then expects to grab a particular "slice" from the array, which we bind to be the array of `.parallax` elements we saved as our variable `parallax`. We hand this to the `.call()` function, which allows us to then iterate over it.   

When the user scrolls, we want to loop over all of our `.parallax` sections and find the `y-position` of where the window is currently located. Ultimately we want to say "Hey window, at any given point when a user scrolls, give me the location of the tops of all parallax sections (aka the y values)".  

After getting that value (`window.pageYOffset`) we reset the background position to be the fraction we saved in our speed variable (`0.5`).   

Magic.

### Troubleshooting

As you're looking at the result, you've probably noticed some weird quirks. What are your thoughts for what is causing this and what are some ideas for how to fix it?  

### More Pizazz

Using [this webpage](https://www.hpmagicwords.com.br/) as inspiration, can you implement horizontal parallax with another image?  

### Implementing Video Backgrounds

Another hip UX feature on webpages these days is the [live video background image](https://www.flyfrontier.com/). Let's walk through a quick implementation of how to make this happen.
