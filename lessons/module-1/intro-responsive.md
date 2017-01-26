---
title: Intro to Responsive Design
---

# Overview & Docs

We can't control how our users interact with our products, but we *can* make sure that our work looks good and functions correctly on all screen sizes. Your product lives online, it's important to make sure that no matter how a user accesses it they are able to use it successfully and without frustration.

A general understanding of responsive website design and how to use media queries and when to add breakpoints so your page layout resizes nicely is a critical skill to have in your toolbelt.

In this session, we'll be diving into responsive page layouts and using media queries to control your page content at all screen sizes. This lesson assumes you are familiar with HTML and CSS fundamentals.

There are four primary page layout types:

**Static Page Layout**
A static layout is fixed width and sits in the center of the screen -- it is the traditional web layout. It works on one screen size and one screen size only. It will fail on screens any amount smaller or larger than the original design.

**Liquid Page Layout**
A liquid (also called 'fluid') page layout uses relative units instead of fixed units (think percentages instead of pixels).

Liquid layouts fill the whole page, regardless of the screen or browser width. It's an approach that doesn't take as much thought and planning as other techniques, making it quick and easy to implement. However, this ease of implementation comes with major disadvantages. These layouts fail at screen sizes significantly larger or smaller than the original design.

**Adaptive Page Layout**
An adaptive layout uses CSS media queries to detect the width of the browser and make layout adjustments accordingly. Unlike liquid layouts, adaptive layouts use fixed units like pixels to define widths. They behave like a series of static layouts defined by specific media queries.

Because adaptive layouts typically take less time to build than true responsive layouts, they are a great option for quickly updating an existing static layout to make it compatible with mobile devices.

The primary drawback to this strategy is that screen widths that fall between the set breakpoints can feel awkward, with contents looking either too crowded or with far too much space.

**Responsive Page Layout**
At first glance, a response site looks a lot like an adaptive site. But start resizing your screen, and you'll see why it's the best solution. A true responsive page layout combines the best parts of a liquid layout and an adaptive layout to create the best experience for your users as they move between devices and screen sizes. By using both relative units and media queries, a responsive site allows us to transition through screen sizes seamlessly and effortlessly.

## Docs

* The site [Liquidapsive](http://www.liquidapsive.com/) is a great resource showing simple examples of all the layout types in action.
* [MDN's Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [MDN's Responsive Design Overview](https://developer.mozilla.org/en-US/Apps/Progressive/Responsive)
* [MDN's Explanation Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)
* Brad Frost's [This is Responsive](http://bradfrost.github.io/this-is-responsive/), patterns and resources for creating responsive websites.

# Practice

#### Using Media Queries

We know we want to build a site that works well on a variety of screen sizes, but we keep talking about "media queries" and "setting breakpoints". What does that mean?

**Media queries** are a Boolean chunk of logic that lives in your CSS, and when you write a series of media queries you are creating a very basic algorithm. They control at what screen size specific styles will be applied.

There are [several different media types](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) (`all`, `screen`, `print`, `speech`), but for our purposes we'll primarily use ``screen``. This indicates that the media query is intended for computer screens.

**Break points** are the pixel widths the media queries reference. When the media query is true (i.e. when the screen size matches what is specified by the break point), the styles specified in that media query will be applied.

#### Let's Get Started

Let's try this out! We'll build a one-page site made up of layout elements that don't play all that nicely on all screen sizes. We'll have to consider how we want them to look on small, medium, and large screens and add the appropriate media queries and breakpoints so the layout adjusts appropriately.

To get started, we'll set up our HTML skeleton so we have a roadmap of where we're heading with the page before we start adding styles.

```html
<!doctype html>
<html>
<head>
    <title></title>
</head>
<body>

</body>
</html>
```

Now that we have our basic HTML page structure written, we can think about how we want to structure the contents. We know we want to have nav, main content, some secondary content in a sidebar on the right side of the screen, and a footer so we'll go ahead and add the appropriate tags for those chunks of content.

Working in ``index.html``, let's start at the top and work our way down the page. For our primary navigation, we'll use the semantic ``header`` tag to wrap a ``nav`` tag that contains the unordered list that will become our navigation links.

```html
<body>
    <header>
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>
    </header>
</body>
```

Next, we'll add an ``article`` tag to hold the main content, an ``aside`` tag to hold our secondary sidebar content, and the ``footer`` tag. We have a basic roadmap of how we want to structure our content.

```html
<body>
    <header>
        <nav>
            <ul>
                <li></li>
            </ul>
        </nav>
    </header>
    <article></article>
    <aside></aside>
    <footer></footer>
</body>
```

Now we can easily see, thanks to the semantic tags we're using, what the intended hierarchy of the page is. Building our HTML page in deliberate, small steps helps us think through our layout which will help us keep our styles clean and organized.

Let's add a little bit of clarifying content to these sections. Add a title to your page, fill in the navigation, and include content in your ``article`` and ``aside``. Let's also wrap our article and aside in a ``section`` with a class of ``.container``. This will let us control where those elements go as a unit.

We'll keep this content simple for now so we can focus on getting the HTML elements to behave as we want.

```html
<!doctype html>
<html>
<head>
    <title>Responsive Site Example</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li>A Link Here</li>
            </ul>
        </nav>
    </header>
    <section class="container">
        <article class="main-content">
            <h1>Main Content</h1>
        </article>
        <aside class="secondary-content">
            <h2>Secondary Content</h2>
        </aside>
    </section>
    <footer>
        <h3>Footer Content</h3>
    </footer>
</body>
</html>
```

For the sake of our sanity, let's pull in a reset file for our CSS. Browsers all have default styles they apply to HTML. Since these default styles are not consistent from browser to browser, it's a good idea to wipe out the default styles before you start writing your own. That's exactly what a reset file does: it resets the default styles! While you can write you own, we'll be using [this one](http://meyerweb.com/eric/tools/css/reset/) from Eric Meyer. Simply copy and paste it into a new file called ``reset.css`` and add it in the ``<head>`` tag of ``index.html``.

Let's start writing our styles. Make a ``styles.css`` and add it to your ``index.html``. Pro-tip: Make sure you add it on the line **below** your ``reset.css``, or the reset file will override all the styles you write.

Let's start at the top and work our way down the page.

```css
body, html {
  font-family: sans-serif;
}

header {
  background: grey;
  height: 50px;
  margin-bottom: 25px;
  text-align: center;
}

nav {
  padding-top: 15px;
}

nav:hover {
  color: white;
}
```

Let's talk through what we've done here. First, we make sans-serif the default font family to be used through out the site. Sans-serif is generally easier to read on screens, but feel free to use a different font family.

For the header tag, we've done the following things:
- set the background color to gray
- set the height to 50px
- added a 25px margin to the bottom so the contents of our page don't crowd our nav bar
- centered all the content.

Since our ``header`` tag wraps our ``nav`` tag, we don't have to write as many styles here. We've added top padding to vertically center the link, and added a ``:hover`` pseudo element that changes the text color to white so our users can tell when they move their cursor over it that it's clickable. And with that, our header navigation is good to go!

On to our body content!

```css
.container {
  height: 400px;
  margin: 0 auto;
}

.main-content {
  background-color: aquamarine;
  float: left;
  height: 400px;
  width: 75%;
}

.secondary-content {
  background-color: cadetblue;
  float: right;
  height: 400px;
  width: 25%;
}
```

This is fairly straightforward, but let's walk through it.

For our wrapping ``.container``, we set the height to match the heights set on ``.main-content`` and ``.secondary-content``. That's all we'll need to do with it at this point!

We've set different background colors on both the main content and secondary content to help us clearly see how they're behaving as we adjust our screen size.

We set ``float: left`` on the primary content and ``float: right`` on the secondary content to make them sit next to each other rather than stacked on top of each other, and we gave them widths of 75% and 25%, respectively, so together they fill the whole screen and have clear hierarchy of importance.

Now all that's left is out footer. We'll give it the same treatment as the header, but instead of ``margin-bottom``, we use ``margin-top``.

```css
footer {
  background: grey;
  height: 50px;
  margin-top: 25px;
  text-align: center;
}
```
Boom! We have a simple site! Now, try making your browser window big and then make it small. This layout doesn't look awesome on small and large screens, does it? That's because we've made a liquid page layout, which is a great starting point but needs a little fine tuning to become responsive. That means it's time for media queries!

If we open our developer tools, we'll be able to see the pixel width of the screen as we change the width. Let's figure out at what point it starts to look bad at large and small sizes.

Our site looks pretty good at medium screen sizes, but the ``main-content`` and ``secondary-content`` sections start looking too wide beyond 900px. On smaller screens, our ``secondary-content `` starts looking a too crowded below 550px. Great! We'll use 900px as our breakpoint for larger screens and 550px as our breakpoint for smaller screens. This is a very simple site, so those should be sufficient for now.

Now, you may be thinking that this seems like a pretty imprecise way to identify your breakpoints. The fact is that we are at the mercy of our content and we must make breakpoint decisions based on what works best for each specific project rather than the screen sizes and resolutions of a particular device. There are so many devices and so many ways to view a website that it's safer to make sure your site just works right at any size. If you want to take a look at a list of device-specific media queries (which can be helpful to get an idea of what you're up against or if you're wrangling a specific issue), CSS-Tricks has a [great post](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/) for you.

Before we write any queries, let's add a viewport meta tag in the ``head`` of our ``index.html``. This will make sure that our site works on devices. It can be a frustrating surprise to find that your responsive site works on your computer, and in device simulators, only to try it out on your phone and find out it looks terrible. The viewport meta tag gives the browser instructions on how to control the pages dimensions and sets the width of the page based on the screen width of the device it is being viewed on. Magic! If you want to learn more, Mozilla has an [article](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) that's full of good information.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Let's start with our media query for large screens. We know we want our breakpoint to be 900px. Let's add a loud background color to our ``body`` just to make sure it's hooked up.

```css
@media screen and (min-width: 900px) {
    body {
        background: yellow;
    }
}
```

Once we've established that our query is working, we can update the styles we want to change on larger screens. We have a pretty simple layout, so let's just set set a width on the ``.container`` that wraps our page's body content. This will give the content a little breathing room around the left and right edges of the screen since we don't need all that space on big screens.

```css
@media screen and (min-width: 900px) {
    .container {
        margin: 0 auto;
        width: 90%;
    }
}
```

Now let's dig into our media query for smaller screens. We can see that our aside is way too narrow to be legible on small screens, and it's also crowding out main content. So what do we do? Let's think about the problems we want to solve: everything is getting too crowded and we're going to end up with a crummy experience for users because it will be hard to read and interact with. A straightforward solution is to simply drop the ``secondary-content`` down below the ``main-content`` on screens below 550px. That will allow us to maximize the screen width we have available, and still maintain the hierarchy of content we've established with our current layout.

```css
@media screen and (max-width: 550px) {
  .container {
    height: 100%;
  }

  .main-content {
    float: none;
    height: 400px;
    width: 100%;
  }

  .secondary-content {
    float: none;
    height: 200px;
    width: 100%;
  }
}
```
Let's talk through what we changed here. The primary adjustment is that we've removed the floats from ``main-content`` and ``secondary-content`` and set the widths of both to 100%. Since floats take elements out of the normal page flow, on larger screens we needed to have the ``.container`` element's height set to the same pixel height of our content. Now that we've removed the floats on small screens, we can set the height of the ``.container``  element to 100% since our content is back in the normal back flow as block-level elements.

Congratulations! You've built a responsive site!

# Your Turn

Complete the [Responsive Layout Challenge](https://github.com/turingschool-examples/responsive-layout-challenges)
