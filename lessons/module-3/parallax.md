---
title: Parallax
tags: HTML, CSS, Parallax
module: 3
---

Plan Of Attack:  
* What is Parallax?  
* Examples  
* Build a basic fixed parallax site with CSS  
* Add some JS to create a dynamic parallax site  
* Build a dynamic parallax site without JavaScript  
* Background Videos  
* Starter Repo Located [here](https://github.com/martensonbj/parallax)  

### What is Parallax?

Parallax scrolling is a hip feature where background images of a website scroll at different speeds, creating the illusion of depth and movement. It can also refer to animation effects that create movement as a user scrolls or interacts with a page in general.  

[Example](http://free.matthieu.com/jquery.parallax-scroll/demo.html)  

There are countless libraries and plugins that help make this easier, but today we're going to focus on hand rolling these effects to demonstrate what's happening behind the scenes.

[Video](https://www.shutterstock.com/video/clip-3984934-stock-footage-window-view-from-a-car-bus-train-traveling-hd-videos-no.html?src=search/viE62cjRbfE1fbNM7cEzMA:1:15/gg)

What do you notice about the speed of the foreground vs the background?  

Ultimately the effect is created by targeting elements on the page to move in different directions, at different speeds, as the user scrolls.  

There are many different ways to implement this affect. The two most obvious that we will be focusing on today are using back ground images that are either fixed, or those that scroll at a slower speed than the foreground image, and different ways to implement these effects.

### Some Sweet Examples
[List of parallax examples](http://www.awwwards.com/websites/parallax/).  
(Also if you don't have the Awwwards website on your radar it's a great place for design inspiration.)

#### My Favorite Examples  

[Scrolling Adventure](http://www.webdesigncrowd.com/websites-unique-scrolling-adventure/)

[Scene](http://discoveroutpost.com/)  

[O'Run](https://romainpsd.com/orun-app)  

[Magic Words](https://www.hpmagicwords.com.br/)

[Gang Des Confettis](https://romainpsd.com/le-gang-des-confettis)  

[Firewatch](http://www.firewatchgame.com/)  

[Lempens Design](http://lempens-design.com/)

[Simple Stars](http://free.matthieu.com/jquery.parallax-scroll/stars.html)


### Round 1: Fixed Background Parallax  

The first kind of parallax we'll look at is a fixed-speed scroll effect.

Ultimately the only thing happening here is forcing the top content to behave as usual (ie scroll) while the background image(s) remains fixed. This can be done using only CSS, but it's important to keep in mind that today a website is nothing if it isn't responsive.  


#### HTML Skeleton

If you break down what sections are needed in the markup, you'll see we have an alternating situation of a background image, then some content, etc. So let's create an `index.html` page to reflect this, with a few sections of content and few sections that will eventually have a background image.  

In the body of your html page, insert alternating sections with specific classes to define whether the section is meant to be a parallax background image, or a static container.

```html
index.html
```

```html
<body>
  ...
  <section class="container parallax parallax-1">
    <div class="content">
      <h1>I Will Have a Background Image</h1>
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

Add as many as you'd like here, but be sure to change the number in the class associated with the div. (Ie the second parallax section will have a class of `parallax-2`). (*Pro Tip* I included 4 generic background images...in case you want 4 sections...)  

Also note that within each section we have a div that holds the actual content of our sections - this will be important for allowing the visible content to be dynamic as our browser size changes.

#### CSS Magic

A few other things to note before we add the CSS.  

- We want each of the parallax sections to have a background image that a foreground can slide over.
- When choosing a background image, it's helpful to define a consistent size so that the size of the html container element can match the same height
- It's also important to plan for the largest reasonable image size needed - although be sure to optimize any images used.  
- The size of a user's browser window will always be different. Setting the background-size property to `cover` will help make sure the image is always filling the space available.  
- Giving it a specific [`background-position`](http://www.w3schools.com/cssref/playit.asp?filename=playcss_background-position&preval=50%25%2050%25) will help it scale attractively.  

```css
/* main.css */
```

```
/* Add some space in the static content sections */  

section.container.static {
  padding: 40px 0;
}

/* Check out the universal background specifications in this style rule. Here we are saying that our images are big enough to not repeat, we want them to take up as much space as they're given, to stay put (fixed), and to position the image in the middle of the content provided */  

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

```

At this point if you look at your html file in a browser it looks like nothing fancy is happening at all. This is because we need to give our parallax sections content that the foreground can appear to slide over. Right now everything is white so there is no context to see movement. Add some background image specifications to your css. Feel free to choose your own here, or use the files I've included in the repo.

```css
main.css
```

```css
section.container.parallax-1 {
  background-image: url('./images/bg_1.jpeg')
}

section.container.parallax-2 {
  background-image: url('./images/bg_2.jpeg')
}

section.container.parallax-3 {
  background-image: url('./images/bg_3.jpeg')
}

section.container.parallax-4 {
  background-image: url('./images/bg_4.jpeg')
}
```

Reload `index.html` and see what happened. I did not include a `reset.css` file so a lot of the default padding and margins are creating some less than ideal affects. We won't spend time fixing those here but an example finished repo is included below.    

[Completed Repo](https://github.com/martensonbj/parallax/tree/fixed-complete)  

### Round 2: Dynamic Parallax Effect

Our first example broke down how a simple parallax effect can be implemented with very little code. The interesting part about Parallax is how much depth it gives to webpages, which comes from more than simply applying `fixed` to a background image.  To do this we need to get the background to scroll along with the foreground, but at a slower speed.  

The cool part is that we can use exactly the same HTML markup as our previous example. Let's check out a new branch and go from there.

The CSS can also remain *nearly* the same. The two sections that change are listed below, with the original styles commented out for comparison.  

Most significantly, we don't want our background-images to remain fixed, so we add a bunch of padding (instead of an explicit height), and we tell the image to start in the top left corner to allow for as much space for scrolling as possible. Finally we no longer want this to be fixed, so we get rid of all of that.  

The `h1` at this point no longer has a fixed height to match to a line-height, so we set it to `1` to match the containing element. Everything else can stay the same for now.

```css
/* main.css */

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

```

At this point everything scrolls like a normal web page, with no fun parallax effects at all. We need to call in our super friend JavaScript to give us some extra tools to get fancy.  

Ultimately, every time we reach a parallax section within our viewport, we want JavaScript to grab it and alter the scroll speed to be slower than what it would be by default.  

In other words, if we scrolled down the entire webpage by 100px, we want the parallax background image to only be 50px from where it started  effectively reducing the "speed" by 50%. Create a js file and pop in the following code.

```js
parallax.js
```

```js
(function() {
  var parallax = document.querySelectorAll('.parallax')
  var speed = 0.5;

  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i){
      var windowYOffset = window.pageYOffset
      var setBackgroundPos = '50% ' + (windowYOffset * speed) + 'px';

      el.style.backgroundPosition = setBackgroundPos
    });
  }
})(); // <-- Remember this guy??
```

Ok. Wtf just happened, and what's up with the funky empty array/slice/call business?  

First, we target all of the elements with a class of `.parallax`, which are the elements with the background images that we want to slow down.  

Then we set the speed to a decimal between 0 and 1, in our case we want to move 50% as fast so we use `0.5`. So far, so good.  

Then we use the `window` API and target the `.onScroll` method.  

That next weird bit with `[].slice.call(parallax)` is a pretty cool way of saying `Array.prototype.slice.call(parallax)`. We're using it because our current array (`var parallax = document.querySelectorAll('.parallax')`) is not technically an Array, but an "Array-like" object of html node elements which don't behave the same way.

Using this fancy method, we have access to all of the prototype methods on the `Array` object that our "array like object" wouldn't normally have access to, like `slice`. So `.slice()`, if given no argument, returns the original reference (which here is an empty array). We then hand our array of DOM nodes to the `.call()` function, which allows us to then iterate over it. Nbd.  

When the user scrolls, we want to loop over all of our `.parallax` sections and find the `y-position` of where the window is currently located. Ultimately we want to say "Hey window, at any given point when a user scrolls, give me the location of the tops of all parallax sections (aka the yOffset values)".  

After getting that value (`window.pageYOffset`) we overwrite the background position to be the new fraction we saved in our speed variable (`0.5`).   

Magic.  

[Completed Dynamic Repo](https://github.com/martensonbj/parallax/tree/dynamic-complete)  

#### Troubleshooting

As you're looking at the result, you've probably noticed some weird quirks. What are your thoughts for what is causing this and what are some ideas for how to fix it?  

### Round 3: Without JavaScript

As you noticed with our previous example, JavaScript is one way to implement parallax. That being said, it's not always the smoothest or best way to create these cool effects. The stuttering is a result of the multiple repaints required as our event listeners re-fire information back and forth from the browser. There are, of course, tons of ways to use JS to create parallax, but let's look at an approach that avoids JS altogether.  

Let's go back to some basic HTML markup and talk about what we need to accomplish. Check out a new branch from master and start fresh.  

```html
index.html
```  

```html
<div class="parallax-container">
  <div class="parallax background-layer">
    Background Layer
  </div>
  <div class="parallax foreground-layer">
    Layer 1
  </div>
</div>
```

```css
main.css
```

```css
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.parallax {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.background-layer {
  transform: translateZ(-1px);
  background-color: rgba(0,0,255,0.5);
}

.foreground-layer {
  transform: translateZ(0);
  background-color: rgba(0,255,0,0.5);
}
```

Our `.parallax-container` class is what begins to control the effect here. The `height` and `perspective` css properties keep this section centered, similar to a focal point of a 3d image ([details on the css perspective property here](https://css-tricks.com/almanac/properties/p/perspective/)). Setting `overflow-y` property to `auto` allows everything within our container to scroll as usual, but all child elements have to be rendered relative to our defined perspective.  

The `parallax` class will be the layer of content that the parallax effect will be applied to. The element is pulled out of normal flow and we redefine its behavior.  

The last two style rules effect `foreground-layer` and `background-layer`. These will help us independently control their respective speeds by moving the element closer to or farther from the Z axis.  

You'll notice, however, that because of our translation on the Z index, the foreground appears larger than the background, which isn't what we want.  To counteract this, we need to use `scale()` to bring it back down.  

What appears to be scrolling speed, then, is controlled by a combination of perspective, and Z translation. Negative Z values will appear to scroll slower than positive Z values. Additionally, the farther a value is from 0, the more obvious the parallax effect will be. Just like from the video we looked at earlier, the farther away an object is, the slower it appears to move.  

Let's put this into practice.  

```html
index.html
```  

```html
<div class="parallax-container">
  <div class="parallax-all">
    <div class="parallax background-layer">
      Background Layer
    </div>

    <div class="parallax foreground-layer">
      Layer 1
    </div>
  </div><!--parallax all-->
</div><!--parallax contaienr-->
```

```css
main.css
```

```css
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.parallax {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.background-layer {
  transform: translateZ(-1px) scale(2);
  background-color: rgba(0,0,255,0.5);
  text-align: center;
}

.foreground-layer {
  transform: translateZ(0);
  background-color: rgba(0,255,0,0.5);
}

.parallax-all {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
  background-color: rgba(255, 0, 0, 0.5);
}
```

The last style we added, `.parallax-all` allows our other layers to behave relative to the group element, which we effectively move out of the way using the `translate3d` business. [Documentation here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d)  

[Completed No-Js Repo] (https://github.com/martensonbj/parallax/tree/no-javascript)  

### Implementing Video Backgrounds with HTML5

Another hip UX feature on webpages these days is the [live video background image](https://www.flyfrontier.com/). Let's walk through a quick implementation of how to make this happen.  

HTML5 videos are now supported in all modern browsers (besides IE<8...no surprise there). There are a ton of ways you can optimize and customize the video being played in your webpage, but for today we will just be looking at a brief "how-to".  

Ultimately there are three main formats that you need to support: `MP4`, `Ogg`, and `WebM`. At the bare minimum, `MP4` should get you up and running.  

Next step is simply to pop in our HTML5 `<video>` tags with the necessary details, and BAM.  

```html
<video width="1600" height="300">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogv" type="video/ogg" />
  <source src="video.webm" type="video/webm" />
  Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to the video</video>
```

It's important to also include a backup link in the event a browser fails to display the media.  

One of the trickier parts of implementing video UX is making it play nicely with CSS. Currently CSS doesn't work within the video tag itself, so you'll need to work some magic to align any overlay over/around a video tag if you're looking for additional text. Let's wire up a basic landing page with a background video.  

Check out a new branch, and find a cool video [here](http://www.coverr.co/). Then update your `index.html` and `main.css` files to match the following:  

```html
index.html
```

```html
<body>
    <nav>
      <h2>
        Turing School Home Page
      </h2>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>News</li>
      </ul>
    </nav>


    <div class="content">
      <h1>
        Turing School
      </h1>
    </div>

    <video id="my-video" class="video" autoplay="autoplay" loop="loop" muted="" width="100%">
      <source src="./images/Busy.mp4" type="video/mp4" />
      <source src="./images/Busy.ogv" type="video/ogg" />
      <source src="./images/Busy.webm" type="video/webm" />
      Your browser doesn't support HTML5 video. Here's a <a href="#">link</a> to the video
    </video>
  </body>
```

(Replace the `src` tags with whatever path you're working with).  

```css
main.css
```

```css
.content {
  position: relative;
  top: 30%;
  z-index: 2;
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
}

.video {
  position: fixed;
  top: 60%; left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

h1 {
    color: rgba(0, 0, 0, 0.56);
    font-size: 96px;
    font-family: helvetica;
    letter-spacing: 3px;
    box-shadow: 0 0 30px #fff;
}
```

The interesting part of this CSS is in the content and video sections. The `z-index` allows our video to sit behind any content (here it's just an `h1`) while `fixed` and `transform` glue it into place and shift it to be centered within the space allowed.  

Spend some time playing around with these settings to see what changes. The rest of the CSS, just for fun-sies, is as follows:  

```css
html,
body,
div,
h1,
p,
a,
video {
  margin: 0;
  padding: 0;
}


html,
body {
  height: 100%;
}

.content {
  position: relative;
  top: 30%;
  z-index: 2;
  margin: 0 auto;
  max-width: 720px;
  text-align: center;
}

.video {
  position: fixed;
  top: 60%; left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

h1 {
    color: rgba(0, 0, 0, 0.56);
    font-size: 96px;
    font-family: helvetica;
    letter-spacing: 3px;
    box-shadow: 0 0 30px #fff;
}

h2 {
  text-align: center;
  font-family: sans-serif;
}

nav {
  background-color: black;
  padding: 8px;
  color: white;
}

ul {
  position: absolute;
  top: 10px;
  right: 20px;
}

li {
    list-style-type: none;
    display: inline;
    margin: 20px;
}

```

[Completed Video Repo](https://github.com/martensonbj/parallax/tree/background-video)  

A few last comments. This lesson in it's entirety was designed to be a top level overview of parallax options and video implementation. For further instruction and better/other ways to implement cross-browser compatibility there are countless resources to help. Make sure to do your research before pushing to production!  

### Resources

[Intro to Parallax Tutorials](http://callmenick.com/post/simple-parallax-scrolling-effect)  
[CSS Only Tutorial](http://keithclark.co.uk/articles/pure-css-parallax-websites/)  
