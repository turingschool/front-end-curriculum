---
title: Responsive Image Handling
length: 
tags: images, css, performance
---
Whether you intend to use only a few images, or build something the size and scale of Pinterest, understanding the impact of your image handling choices is critical. How an image appears across various device sizes is only one part of the puzzle. Equally as important, is the affect your image handling choice has on performance. 64% of the weight of the web is images.

### Learning Goals

By the end of this lesson, you will know/be able to:

* Roll your own sprite from scratch
* Crush images
* Leverage different approaches in image handling and understand their impact on site performance

#### Image File Types
It's important to understand the prominent image file types leveraged in web design, and when to use them.

- JPG/JPEG
	- common format for digital photos and other digital graphics
	- use "lossy" compression, meaning image quality is lost as file size decreases
	- extensions = .jpg or .jpeg
	- best uses are photos and images w/ complex coloring

- PNG
	- "Portable Network Graphics" were created as an improved, non-patented replacement for "Graphics Interchange Format" (GIF)
	- "lossless" image compression, which means there is no data loss
	- two formats: PNG-8 (similar to GIF, 256 colors, 1-bit transparency) and PNG-24 (24-bit color, similar to JPEG, over 16 million colors)
	- transparency can be set between opaque and completely transparent
	- best uses include web images, logos, text images, complex images like photos if file size is not an issue

- GIF
  - format commonly used on the web and as sprites in software programs
  - "lossless" compression, but each image is capped at 256 colors, so their file size starts smaller than jpg's
  - GIF animation is simple, creating a series of GIF frames to make up the moving image
  - best uses include simple images like line drawings, color borders, simple illustrations, tiny icons, web graphics with not many colors, and of course - animations

- SVG
	- scaleable vector graphic, lossless compression, scales without losing clarity
	- looks great on retina displays
	- design control like interactivity and filters
	- can be used as an image ```<img src='some-image.svg' alt='some image'```
	- can be used inline with html, and then controlled with css

- WebP (google thing. future forward, not all browswers support)
	- like png, but much smaller

* often need to experiment with file types/approaches for what will work best

#### Image Crushing
Collection of other image optimizers. It runs a file through different programs to minimize file size. Removing meta data in the image mostly. Biggest gains in pngs, then jpgs, then gif.
https://imageoptim.com/mac
svgo gui - crushing for when your svg is utilized as image
** can save megabytes immediately

#### Sprites
Why ask the server for multiple images, when you could just use one? 


#### Icon Fonts
<do I even bother?>
Maybe, but probably almost never...
When we couldn't use svg's (IE 8), we'd make it a font.
Was a stop-gap solution

#### Responsive Image Handling
- Art Direction Problem
- Resolution Switching Problem

http://fluidity.sexy/

web is 100% responsive by default. just set 100% width on your image.
srcset and picture element

CHROME: prioritizes calls across the wire first.

scrset 
- could go crazy.
- use for most all of your images (maybe not avatars, and certainly not background images)
- set your range - like smallest will be 800px for instance and I am okay serving that on 400 screen. Because could get crazy. Work w/ design on resolution range setting. So if gets too blurry at 2400 screen, then bump up the range of size/pixel dimension
- can use analytics to determine which image sizes are most popular
- how big could the image ever get


https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

http://cloudinary.com/blog/responsive_images_with_srcset_sizes_and_cloudinary?utm_source=taboola&utm_medium=paid_traffic&utm_campaign=Retargeting-ImageHostingLP

** Future forward, need to investigate the "Client Hints" movement, whereby client sends info to server and server handles all the image choosing. Will be cool if it happens. Managing on client side hurts. (markup ugly)

None are "great"

#### Background images
Former way of controlling image calls from server
Had to have markup just right, with parent element. Because client was actually pulling down ALL the images across breakpoints if the markup wasn't right.
Not great for accessibility, no alt attr, no fallback. Just design on a box. (* ```object-fit``` is gaining traction, which will replace this in applicable instances.)

#### 

#### Opening: 1-2 min

* What is this lesson about? 
* What will students know or be able to do by the end of the class? What are the goals?

#### Introduction to New Material (I do)

* instructor explains, shows, or demonstrates
* Examples: lecture, slides, code demonstration

#### Guided Practice (We do)

* instructor and students both "doing"
* Examples: code-along, hot seat, discussion, question/answer, students telling instructor what to write, students pairing with close guidance from instructor

#### Independent/Pair Practice (You do)

* students "doing", instructor available as lifeline
* Examples: questions in a Gist, implementing feature, creating diagram

#### The Closing: ~5 min

* Check for understanding
* Discuss any clarifications or student misconceptions
* Review goals, further resources, and next steps

### Possible questions and/or misunderstandings

* What questions might students ask during class, and how will you respond? 
* What concepts might students misunderstand, and why? 


### Video

* [Link to optional video]()

### Repository

* [Link to optional repo]()

### Outside Resources / Further Reading

* [Link to first outside resource]()
