---
title: Working with geolocation
length: 1 hour
tags: geolocation, web API, APIs
---

### Goals

By the end of this lesson, you will:

* Be familiar with the geolocation API
* Understand the basics of its API and how to work with it

## Working with geolocation

The [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) allows your application to access a user's current geographical location. This can be useful for apps that want to provide useful information based on a user's location. For example:

* weather apps that want to show the forecast for a user's current neighborhood.
* recommendation engines may decide nearby/local restaurants are going to be more relevant and place them higher in search results
* an app may want to 'geo-tag' some user-created content, e.g. when you upload a photo to an application it may prompt you to add where it was taken, providing you with suggestions based on your current location

The API is relatively new, so browser support is still limited. Before using it, you might want to do a feature-detection test to see if the API is available. The API lives under the `navigation.geolocation` object, so you can check for it like so:

```javascript
if (navigator.geolocation) {
  console.log('Geolocation supported');
  // do all the geolocation things your app wants to do
}
else {
  console.log('Geolocation not supported ');
  // don't do anything fun with geolocation
}
```

When using geolocation, users browsers will prompt them to allow access to their location information. This is in place so that you can't be stalked by an application without your knowledge or consent.

### Getting a user's current location
After a user gives permission for your application to access their location data, you can call `navigator.geolocation.getCurrentPosition()` to retrieve their position:

```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords); // object of latitude and longitude coordinates
});
```

You'll notice the method takes a callback that will execute once the coordinates are determined. You can pass in an additional callback that will fire if an error occurs. (i.e this API is callback-based rather than promise-based)

*NOTE: When you call `getCurrentPosition`, the request might take a while to return the coordinates and fire your callback. If you are relying on the location data to render a portion of your application, it's a good idea to display an intermediary message that indicates that the information is on it's way. (e.g. "Fetching current location...")*

### Accuracy
Despite the call taking a bit of time, behind the scenes it's actually trying to return as fast as possible, sacrificing accuracy for speed. While you might be in Denver, the coordinates returned might place you in Erie.

If you've got some time and would rather prioritize the location accuracy, you can pass in an options object to `getCurrentPosition` that will force the call to try to return a closer match:

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
  enableHighAccuracy: true
});
```

### Additional Options
Other properties you can pass into this options object are `maximumAge` (how old can the data be before it is no longer valid?) and `timeout` (how long are you willing to wait for the response to come back before it should give up?) The values for both of these properties should be specified in milliseconds, like so:

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
  enableHighAccuracy: true,
  maximumAge: 45000,
  timeout: 10000
});
```

### Tracking the current location
You can also keep tabs on a user's position with the `watchPosition` method. If the position data changes, you can specify a callback function that will be called with the updated position data. The method takes the same parameters as `getCurrentPosition`:

```javascript
navigator.geolocation.watchPosition(successCallback, errorCallback, options);
```

The successCallback will be fired every time there is new location data, allowing you to keep track of how the user's position has changed over time.

#### Clearing a watcher
Every call to `watchPosition` will return with a unique ID number that will allow you to reference that particular watcher. This is useful when you'd like to stop tracking the location data by making a call to `clearWatch`:

```javascript
navigator.geolocation.clearWatch(watchId);
```

## Practice
Let's practice using the geolocation API to pin ourselves on a map.

##### Step 1: Get an API Key
We'll use the [Google Maps API](https://developers.google.com/maps/) to generate our map and display our marker. You'll first need to get an API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key#key). Accept the terms and conditions and provide them with an arbitrary name for your application.

##### Step 2: Create an HTML file
Create an HTML file and save it anywhere on your computer. You'll be able to open this file in a browser and still see the full effect without having to set up an entire application. We will be bad programmers and use internal style tags and scripts for our CSS and JavaScript.

##### Step 3: Add a map element
In your HTML, add a `div` tag with an ID so that you can access it later in your JavaScript with `document.getElementByID(id)`. This is where we will insert our map.

##### Step 4: Load the Google Maps API
At the end of the body section, add a script tag to access the google maps API. The tag should have both an `async` and a `defer` property. (See documentation [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)). The source attribute should be:

`https://maps.googleapis.com/maps/api/js?key=<your API key>&callback=createMap`

Notice the parameter portion of the source URL that specifies `callback=createMap`. This tells us that once the API is fully loaded and ready to use, we want to call the function `createMap`. 

##### Step 5: Add a `createMap` function
Let's add another script tag to our HTML (directly above our Google Maps script tag) file with a `createMap` function:

```html
<script>
  function createMap() {
    /* Function should:
     * 1. Create a new google map, initially centered at an arbitrary lat/lng
     * 2. Check for geolocation
     * 3. Get the user's current position
     * 4. Recenter the map to the new position
     * 5. Add a marker/pin at the new position
     */
  }
</script>
```

##### Step 6: Use the Google Maps API Reference
To fill out the `createMap` function, you'll want to use what you've learned about geolocation and check out the [Google Maps API Reference](https://developers.google.com/maps/documentation/javascript/3.exp/reference) to learn how to create a new google [map](https://developers.google.com/maps/documentation/javascript/maptypes), re-center it, and add a [marker](https://developers.google.com/maps/documentation/javascript/markers).

When you've completed the exercise, you can compare your work against the solution found [here](https://gist.github.com/brittanystoroz/46c6741b20678caa0d6c69cdc931893c).

## Resources

* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
* [Google Maps API Reference](https://developers.google.com/maps/documentation/javascript/3.exp/reference)