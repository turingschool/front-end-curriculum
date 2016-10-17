---
title: Working with getUserMedia
length: 1 hour
tags: getUserMedia, web API, APIs
---

### Goals

By the end of this lesson, you will:

* Be familiar with the getUserMedia API
* Understand what the API is for and how to work with it

## Working with the getUserMedia API

The `getUserMedia` API is a built-in browser API that allows applications to access a video and/or audio input device such as a webcam or microphone. This is how applications like Google Hangouts enable video communication where you can see and hear each member in the hangout.

You'll often hear it used as part of the [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API#Protocols) (Web Real-Time Communications). The WebRTC API is a collection of standards and protocols that allow browsers to directly exchange data (like audio and video) in real time. We won't get into detail about WebRTC in this lesson, just know that `getUserMedia` is often used in applications that leverage WebRTC functionality.

### The Syntax

We can use the API by making a call to `navigator.mediaDevices.getUserMedia()`. This is a promised-based API, meaning the function call will return a promise that will either resolve or reject. 

```javascript
navigator.mediaDevices.getUserMedia(options)
  .then(mediaStream => { ... })
  .catch(error => { ... });
```

The call immediately sends a prompt to the browser for the user to give the application permission to access their audio/video inputs. This is in place so that people can't build applications that automatically record us without our knowledge and consent. That would be creepy. If a user rejects the permissions prompt, the promise will reject and the application will not be able to access any of the media devices.

#### Setting constraints
The options object passed into `getUserMedia` is required and should specify what exactly your application needs access to. At the bare minimum, you'll want either an `audio` or `video` property to be true:

```javascript
{ audio: true, video: true }
```

You can get more specific with the constraints by specifying details like the video resolution dimensions:

```javascript
{
  audio: true,
  video: { width: 1280, height: 720 }
}
```

#### Practice
Let's clone the [get-user-media](https://github.com/turingschool-examples/get-user-media) repository and follow the instructions in the README to install dependencies and start the server. In our `public` directory, let's open the `script.js` file and add a call to `getUserMedia`. For now, let's only pass in `{ video: true }` as options (if we use audio without headphones, there will be horrific, eternal feedback that will sound cool at first, like you're screaming into an endless empty cave, but then soon turn into an ear-piercing beep that eventually only dogs will be able to hear).

We should log a success or error message to the console depending on what happens. When we grant permission to access our device, we should see our green webcam light turn on.

### The MediaStream Object
Assuming you have made the API call correctly and the user grants permission to access their media devices, the promise returned from `getUserMedia()` will resolve with a [MediaStream Object](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream).

The MediaStream object gives you access to any audio or video tracks that are being monitored, and allows you to act on them in various ways.

#### Practice
Log the MediaStream object to the console in the success handler of your `getUserMedia` call. Inspect the object in your console, making sure to check out the methods available in its prototype (`__proto__`). 

## Using the MediaStream with an HTML Media Element
The MediaStream object offers us plenty of methods to inspect and interact with it, but it isn't super useful on its own. When combined with an [HTML Media Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement), however, we can interface with it just like a video or audio recording. The two HTML elements that are considered "media" elements are the `<video>` and `<audio>` tags. These elements come with a special API that gives us the ability to play, pause, or seek any media attached to them. 

#### Practice
Let's add a `video` element to our HTML file. Set a height and width as attributes.

```html
<video id="video-stream" height="320" width="480"></video>
```

In the success handler of our `getUserMedia` call, let's select that video element and attach our media stream object to it:

```javascript
let video = document.querySelector('video'); 

// create a "url" for our media object to
// use as the source of our video element
video.src = window.URL.createObjectURL(mediaStream);
video.onloadedmetadata = (event) => {
  video.play();
};
```

The syntax for this isn't the friendliest, and API developers are working on simplifying it. But taken line-by-line, we can break down what's being done here:

```javascript
video.src = window.URL.createObjectURL(mediaStream);
```

There is an attribute called `src` on video elements (just like `script` tags), that allows you to set the source of your video. Because we have an object (`mediaStream`), and not a URL, we need to create a URL from our media stream. The `window.URL.createObjectURL` method allows you to pass in an object or file that you'd like to create a URL for.

Let's look at the next lines:

```javascript
video.onloadedmetadata = (event) => {
  video.play();
};
```

Remember we said the `video` element was a special HTML Media Element. This is where we are going to use that special API to leverage the events and methods on our video. In this code, we are setting an event handler for the `onloadedmetadata` event of our video. This event will fire whenever our video metadata (e.g. the source) is ready. When it's ready, we use another special method on the video element called `play` to play our stream. Take a look at the [HTML Media Element API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) to see additional events and methods that are available to us with video and audio elements.

This syntax can be made even simpler by adding the [autoplay](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) attribute to the video element in our HTML. When specifying that attribute, we can simplify our javascript to:

```javascript
let video = document.querySelector('video'); 
video.src = window.URL.createObjectURL(mediaStream);
```

### Media Element Controls
Media Elements (`video` and `audio` tags) can take an optional attribute `controls`. If we add this attribute to our video element:

```html
<video id="video-stream" height="320" width="480" controls></video>
```

We'll see the default set of controls that the element comes with when we re-render the page. You'll notice you can pause and play the video, and you'll see a timeline with a progress bar for the duration of the video. Because this is a live stream, there is no start and end point, so the progress bar isn't very useful in our case. We'll be able to make more use of this when we get into recording our video rather than just displaying it.

## Recording With the MediaRecorder API
In order to capture and save the audio or video we are streaming, we need to leverage the [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder).

Creating a new instance of a MediaRecorder returns an object that contains methods that allow you to start and stop a recording:

```javascript
let recorder = new MediaRecorder(mediaStream);
```

It takes a single argument that must be a mediaStream object. (This is the object that would be returned from a call to `getUserMedia`.) It also has several events you can hook into in order to extract the recording data.

For example, while you are recording, the MediaRecorder will continuously generate little bits of information in chunks or [blobs](https://developer.mozilla.org/en-US/docs/Web/API/Blob). Each of these blobs represents a small portion of the total recording - immutable, raw data.

This pattern of generating many tiny little blobs of data is the essence of streaming. When you're streaming a tv show or movie online, you're not watching a piece of data that's two hours long (that would be huge and slow and bulky). Instead, you're constantly having tiny new portions of the entire video delivered to you. This is why when your internet connection is weak and a video times out, it can pick up right where it left off. It doesn't have to trash the whole video and make you start from the beginning.

In order to access these blobs, we could hook into the MediaRecorder's [ondataavailable](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable) event. Within this event, we can access each of the current blobs through `event.data`:

```javascript
recorder.ondataavailable = (event) => {
  console.log(event.data); // logs an array of the most recently generated blobs
}
```

By themselves, we can't do much with these tiny blobs. But we might want to store them somewhere safe so that we can reconstruct the entire recording at a later time. For example, we might want to push each of them into a pre-existing array, that we can then use to create a new blob that represents the entire recording:

```javascript
let babyBlobs = [];

recorder.ondataavailable = (event) => {
  babyBlobs.push(event.data);
};

let fullRecording = new Blob(babyBlobs);
```

We could now set the source of a new video element using our `fullRecording` blob and play our recorded video.


#### Practice: On Your Own
Let's try recording the livestream from our webcam. Stash or commit any changes you've made to the example codebase so far and pull down the [recording branch](https://github.com/turingschool-examples/get-user-media/tree/recording) from the practice repo. Switch to this branch and you'll see some boilerplate code set up for you to enable video recording. You'll want to be wearing headphones for this exercise.

**Requirements:**

* We want two video elements on our page: one that shows your live stream from the webcam, and another that will display and loop the recorded version when it's ready
* Beneath the live stream video, we want two buttons: one that will toggle between 'Start Recording' and 'Stop Recording', and one that will 'Display the Recording' in the second video element
* The 'Display Recording' button can only be clicked after a recording has been made (i.e. a user clicks 'start recording' then 'stop recording'). When the 'Display Recording' button is clicked, it will update the recorded video element with the recorded video.
* The recorded video element should have controls that allow you to pause/play the recording

When you've completed the exercise, you can compare your work against the solution in the `working` branch of the repo.

## Resources 

* [getUserMedia API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
* [HTML Media Element API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
* [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
* [WebRTC Demos with getUserMedia](https://webrtc.github.io/samples/)