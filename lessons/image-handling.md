---
title: Responsive Image Handling & Performance Monitoring
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


#### Image Crushing

https://imageoptim.com/mac

#### Sprites

#### Icon Fonts

#### Cloudinary


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

### Slides

* [Link to optional slides]()

### Video

* [Link to optional video]()

### Repository

* [Link to optional repo]()

### Outside Resources / Further Reading

* [Link to first outside resource]()
