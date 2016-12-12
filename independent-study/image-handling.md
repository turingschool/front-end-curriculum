---
title: Image Handling
tags: images, css, performance
---
64% of the weight of the web is images. :open_mouth: Regardless of whether you are building for 1 image or 1 million - how you handle serving and sizing that image has impact. As a Front End Engineer, you are expected to serve gorgeous images at any size, while achieving optimal site/app performance. We've outlined the brilliant basics for you below. It is important to note that things evolve rapidly, and responsive image handling is a hot topic in the community. Consider this a solid foundation to get you started. Implement these current best practices into your workflow.


## Image File Types
Before we dive into image handling, let's level set around image type. It's important to understand the prominent image file types leveraged in web design, and that for which they are best suited.

JPG/JPEG

- common format for digital photos and other digital graphics
- use "lossy" compression, meaning image quality is lost as file size decreases
- extensions = .jpg or .jpeg
- best uses are photos and images w/ complex coloring

PNG

- "Portable Network Graphics" were created as an improved, non-patented replacement for "Graphics Interchange Format" (GIF)
- "lossless" image compression, which means there is no data loss
- two formats: PNG-8 (similar to GIF, 256 colors, 1-bit transparency) and PNG-24 (24-bit color, similar to JPEG, over 16 million colors)
- transparency can be set between opaque and completely transparent
- best uses include web images, logos, text images, complex images like photos if file size is not an issue

GIF

- format commonly used on the web and as sprites in software programs
- "lossless" compression, but each image is capped at 256 colors, so their file size starts smaller than jpg's
- GIF animation is simple, creating a series of GIF frames to make up the moving image
- best uses include simple images like line drawings, color borders, simple illustrations, tiny icons, web graphics with not many colors, and of course - animations

SVG

- scaleable vector graphic, lossless compression, scales without losing clarity
- looks great on retina displays
- design control like interactivity and filters
- can be used as an image ```<img src='some-image.svg' alt='some image'```
- can be used inline with html, and then controlled with css
- best suited for when you need to manipulate an image via css, primarily used for icons, logos, and illustrations.
- ```<svg ...><path class="icon" .../></svg>```

WEBP (keep your eye on this one, not currently supported in all browsers)

- lossless compression
- like png, but much smaller
- supports transparency
- it's a [google thing](https://developers.google.com/speed/webp/)


**Often, you will need to experiment with file types/approaches to find what works best for your particular project needs.**

## Image Crushing - Just Do It. :facepunch:
If you do nothing else, crush your images. Crushing images is an immediate and significant savings. You could spend an hour refactoring javascript or CSS to shave a handful of kilobytes off your app, or run your images through a crusher, and save megabytes in seconds. One more time -- IF YOU DO NOTHING ELSE, AT LEAST CRUSH YOUR IMAGES. 

[ImageOptim](https://imageoptim.com/mac)
- This app is a actually a collection of other image optimizers for the different image file types. 
- It runs a file through each optimizer to minimize overall file size. 
- For the most part, it's removing a metric ton of crufty meta data hiding in your images.
- You'll realize the biggest gains in pngs first, then jpgs, then gif.

[SVGO GUI](https://github.com/svg/svgo-gui)
- For use when you save an image out as ```.svg``` and you are in fact using it as an image, 
- NOT for inline svg code
- Works a lot like ImageOptim

## Sprites :sparkles:
Why ask the server for multiple images, when you can use just one? Create a sprite, which is a single image file that contains several smaller graphics in a tiled grid arrangement, and make only one http call instead of multiple. Better for performance! :raised_hands: Think of the sprite like a film strip. You create a container element "viewing box", and then "roll" your sprite through it. This approach leverages the sprite as a background property on the container. The sprite moves in/out of visibility via the ```background-position``` property.
- Used in areas where there are multiple images grouped together
- Used to represent multiple image *states*

Many a tutorial exist on generating sprites. Choose your own adventure:
- [MDN Implementing Sprites in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- [W3Schools Sprites](http://www.w3schools.com/css/css_image_sprites.asp)
- [CSS Tricks Sprites](https://css-tricks.com/css-sprites/)

## Responsive Image Handling :pray:
Well, first thing first. The web is *almost* 100% responsive by DEFAULT. 
Yep, that's right. Simply set the width of your images to 100%, and boom :boom:. 
Need more proof? Check this site + the minimal accompanying *responsive css*: [fluidity.sexy](http://fluidity.sexy/)

But of course, it is never just that easy...

{% include dun_dun_dun.html %}

_Art Direction Problem:_  :raising_hand:
But what if I don't want my picture to squish quite like that (fluidity example above)? Or for that matter, get so HUGE on a bigger screen? What if I want to serve some specific cropped versions based on screen size?

_Resolution Switching Problem:_ :raising_hand:
But if my picture is giant, like say 4000px wide, and I serve that image to mobile devices that are only 320px - 480px wide, and I let the browser squish that 4000px image down, aren't those just "wasted" pixels? Seems like a lot to ask the cellular network to download a ginormous image when it really only needs a tiny little version.

_Short answer:_ :point_right: Yes and Yes :point_left:. 
So how do we deal with the issues above?
We leverage two newish attributes of the `img` tag in HTML.
`srcset` and `sizes` provide several additional source images along with hints to help the browser pick the right one. 

```
<img srcset="puppy-320w.jpg 320w,
             puppy-480w.jpg 480w,
             puppy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="puppy-800w.jpg" alt="Adorable puppy picture">
```
The srcset and sizes attributes look complicated, but they're not that bad to understand if you format them as shown above, with a different part of the attribute value on each line. Each value contains a comma-separated list. Each part of the lists are made up of three sub-parts. 

```srcset``` defines the set of images we will allow the browser to choose between, and what size each image is. Before each comma, we write:

1. An image filename (puppy-480w.jpg.)
2. A space.
3. The image's inherent width in pixels (480w) — note that this uses the **w** unit, not **px** as you might expect. This is the image's **real size**, which can be found by inspecting the image file on your computer (for example on a Mac you can select the image in Finder, and press ```Cmd + I``` to bring up the info screen.)

```sizes``` defines a set of media conditions (e.g. screen widths) and indicates what image size would be best to choose, when certain media conditions are true — these are the hints we talked about earlier. In this case, before each comma we write:
1. a media condition ((max-width:480px)) - In this case, we are saying "when the viewport width is 480 pixels or less".
2. A space.
3. The width of the slot the image will fill when the media condition is true (440px.)

#### So, with these attributes in place, the browser will:

1. Look at its device width.
2. Work out which media condition in the sizes list is the first one to be true.
3. Look at the slot size given to that media query.
4. Load the image referenced in the srcset list that most closely matches the chosen slot size.

#### Pro-Tips:
- Use for most of your images, but of course, NOT for background images, and in some cases like avatars, it is probably overkill and not really needed.
- You could go crazy w/ image sizes, but don't. Set your range - like maybe your smallest image size will be 800px, and you and the team agree you have no qualms serving that on a 400 screen. Work w/ your designers on resolution range setting. If it gets too blurry at 2400 screen, then bump up the range of size/pixel dimension serving that you've set.
- Evaluate analytics to determine which image sizes are most popular, and make some optimization choices based on those insights.

** Future forward, keep your eye out on the "Client Hints" movement, whereby client sends info to server and server handles all the image choosing. Managing this crap on client side hurts. 

--- 

## Further reading and things to keep your :eyes: on:
- [SVGs and Accessibility](https://css-tricks.com/accessible-svgs/)
- [Cloudinary: Client Hints](http://cloudinary.com/blog/automatic_responsive_images_with_client_hints)
- [Cloudinary: srcset and sizes Tutorial](http://cloudinary.com/blog/responsive_images_with_srcset_sizes_and_cloudinary?utm_source=taboola&utm_medium=paid_traffic&utm_campaign=Retargeting-ImageHostingLP)
- [CSS Tricks: object-fit](https://css-tricks.com/on-object-fit-and-object-position/)
- [Responsive Breakpoints Generator](http://www.responsivebreakpoints.com/)

***

## In the Old Days...Just FYI...

#### Icon Fonts :thumbsdown:
Back in the old days of IE8, we couldn't use SVGs. So we made our icons into fonts. It was a stop-gap solution, with a sometimes-okay-result-sometimes-decent-but-never-great. [Seriously, Don't Use Icon Fonts](https://cloudfour.com/thinks/seriously-dont-use-icon-fonts/)

#### Background Images Approach :weary:
Our go-to image control approach from the server was a combination of using html elements (boxes) with background css property (design on the box) to set the image, and media queries for displaying/hiding our various boxes based on what image we wanted to serve at a specific screen size. And this was "okay". Downsides:

- Had to have the markup *just right*, with a parent element containing a child element that had the background image property. Some developers didn't realize this, and would consequently *believe* they were only pulling down the images they needed at specific breakpoints, but in reality, the client was pulling down ALL the images across breakpoints because the markup wasn't structured correctly. And also, extra markup = :rage:
- Not great for accessibility, because this approach essentially just applies an image to an existing, regular old html element. There is no alt attribute like on an ```img``` tag, and no fallback. If the image didn't load from server, the user's experience was broken.
- ```object-fit``` is gaining traction, which is the right solution to this janky approach, but it's not yet supported on all browsers.

