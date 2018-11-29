---
title: Introduction to Progressive Web Apps and the Manifest
length: 90
tags: progressive web app, pwa, mobile
---

Learning Goals:

* Define what a Progressive Web App (PWA) is and how it compares to a native app
* Interact with some existing PWAs
* Explore the components of a manifest file

## What To Expect

What do we expect from native applications? What do we want from our progressive web applications?

If you haven't looked at the differences between native applications on your phone and regular websites, do that now. Some things we expect from native apps:

* Push notifications
* Works offline
* Home screen icon
* Loading page
* Fits in the viewport of your phone (built for mobile viewing)
* Fast loading on slow network speeds (pages don't seem to depend on network requests loading)
* Can use storage on your device
* Access to sensor data
* Fast, UI transitions and interactions should be near instant

## Difference Between PWA and Native App

Ideally the difference is all underneath. The user does not know if they are using a native app or a PWA. Then what is the difference?

A native app is installed to the user's device. A native app is also written in native code like Java (for Android) or Objective-C/Swift (for iOS). 
You can use a tool like React Native to write JavaScript with a React-like library, which then compiles to Java/Objective-C in the background.

A progressive web app is just that, a web application that is progressive. It is an app written in HTML, CSS, and JavaScript that can adapt to behave like a native app.

Google says that a PWA should be "reliable, fast, and engaging". What should be done to make a normal web app into a PWA?

The application should adapt and progress to enhance the user experience. For instance, a PWA should be able to be loaded offline for increased reliability. 
In order to do that, the PWA should detect if a `serviceWorker` is available in that version of the browser. If it is, then cache static assets to be able to use those 
assets offline. In other words, the app has used browser feature detection to know if the app can use more advanced features to enhance the user experience.

Some features we can focus on including in a PWA to match what is expected of a native app:

* Responsive design
* Performant on slower network speeds
* Installable and launchable from the home screen (manifest)
* All content served over HTTPS
* Provides some form of offline experience (service worker caching assets)

## Issues for PWAs

The main issue surrounding PWA development right now is feature availability across browsers. For instance, if we look at the compatibility for the manifest file 
across browsers currently, [we see this](https://caniuse.com/#search=manifest).

Chrome, Edge, and iOS Safari support the manifest feature, but there are many browsers that do not have support. This can be seen for other features in the PWA landscape 
like service workers, push notifications, background sync, and others.

## Let's Look at Some PWAs

Gather around someone who has an Android phone. The best PWA experience is still seen by using Android (iOS is catching up).

Go to [pwa.rocks](https://pwa.rocks/), and choose a site that sounds interesting to you. Do you see a request to add that app to your homescreen? Do it! 
Then go to your homescreen and load the app from the homescreen icon. What do you notice about the app?

Did you notice the splash screen? Does this PWA feel more like a native app? Why?

### Auditing a PWA

There is an app called [Lighthouse](https://developers.google.com/web/tools/lighthouse/) that is now integrated into the Chrome developer tools. It is a tool that can 
check your application to see if it abides by the recommendations that Google has set forth for progressive web apps.

You can run an audit of a progressive web app by going in your developer tools, selecting the `Audits` tab, then select `Progressive Web App` from the Audits list. 
Click `Run Audits`, and you can see where the app meets/fails expectations for progressive web apps.

## Manifest File - Structure

So you want to make a progressive web app. PWA development usually begins with adding what is called an "app manifest".

The manifest file is a `json` file that contains an object with key-value pairs.

Here is a sample manifest file:

```json
{
  "name": "Palette Picker",
  "short_name": "Palette Picker",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#2196F3",
  "description": "A palette generation app.",
  "icons": [{
    "src": "https://placebear.com/128/128",
    "type": "image/png",
    "sizes": "128x128"
  }, {
    "src": "https://placebear.com/152/152",
    "type": "image/png",
    "sizes": "152x152"
  }, {
    "src": "https://placebear.com/144/144",
    "type": "image/png",
    "sizes": "144x144"
  }, {
    "src": "https://placebear.com/192/192",
    "type": "image/png",
    "sizes": "192x192"
  }]
}
```

Once you create the manifest file, you need to link the file in your top-level HTML file. Here is an example of that link:

```html
<link rel="manifest" href="manifest.webmanifest">
```

To check if your manifest is valid and loaded, load up your app in the browser and open the developer tools. Select the `Application` tab, and click the 
`Manifest` pane on the left. If the manifest has loaded, then you should see details about the app's manifest in the right pane. Otherwise, you might see 
something like "No manifest detected".

### Key-Value Pairs

What are all of these keys in the manifest file?

Here are some that are important to know:

* name
* short_name
* start_url
* icons
* background_color
* theme_color
* display

Break up into small groups. Each group should take one of these keys to research and find out what it means and what it does for the PWA.

<!-- 
name - for use in the Web App Install banner
short_name - for use as the text on the user's home screen
start_url - where it should be launched when the user clicks on the launch icon, relative path (relative to location of manifest file)
icons - when a user adds your site to their home screen, you can define a set of icons for the browser to use. Also the splash screen image is drawn from the icons array
background_color - Chrome uses this color on the splash screen the instant the web app is launched and the color remains on the screen until the web app's first render
theme_color - sets the color of the toolbar (the top bar showing your battery level and other apps running, and the tint of the URL bar if you're using it)
display - control the display type and page orientation - standalone hides the browser's UI (URL bar)
 -->

## HTTPS

If you create a PWA, then on production the application must be served over HTTPS (e.g. `https://www.google.com` vs. `http://www.google.com`).

If someone tries to go to your website using `http` instead of `https` in the URL, then your application should redirect the client to the `https` version of your application.

You can add code to your backend server to redirect a client to the `https` version of your website. An example of this code for Express is a middleware function like this:

```javascript
const requireHTTPS = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
    next();
};

if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }
```

Note that this function `requireHTTPS` is used only in the production environment.


### Additional Resources

* [Progressive Web Apps at a high level](https://developers.google.com/web/progressive-web-apps/)
* [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
* [Manifest File - Google Developers](https://developers.google.com/web/fundamentals/web-app-manifest/)
* [Manifest File - MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest)
* [Installation Banner](https://developers.google.com/web/fundamentals/app-install-banners/)