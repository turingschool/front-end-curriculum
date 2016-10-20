---
title: Drag and Drop
length: 1 hour
tags: drag and drop, web API, APIs
---

### Goals

By the end of this lesson, you will:

* Be familiar with the drag and drop API
* Understand the basics of its API and how to work with it
* Recognize how it can be used to enhance user interfaces

## Working with the Drag & Drop API

You've probably seen a number of user interfaces that allow you to grab multiple files off of your computer, and literally drag them onto the website, that would then upload them or process their information in some way. Or you might be familiar with interfaces like [Trello](https://trello.com/), that allow you to [move elements around on the page](https://www.youtube.com/watch?v=xky48zyL9iA&t=2m11s), aligning cards in different lists. It's pretty wild and pretty convenient...for most.

Making drag and drop an intuitive user interaction takes a lot of work. For developers and other tech-savvy people, it usually feels intuitive right away. For others, however, it can be very difficult to discover and understand how to use the feature without explicit explanations or visual cues. In this lesson, we'll go over how to implement drag and drop, and some of the best practices for doing it in a way that makes it as intuitive as possible.

## Drag & Drop Requirements

A standard drag and drop interface will require three things:

* an element that can be dragged
* the data or information we want transferred upon a successful drop
* a drop target

The drop target is another element on the page where a user can let go of the item they are dragging, and your application will know to do something with the data that was transferred. If an item is being dragged and the user lets go of the mouse outside of the drop target, it is assumed they didn't want to complete the operation and any functionality you intended to implement on the drop will not execute.


### Follow Along: Practice Exercise

We're going to implement a Trello-style drag and drop to-do list. Use [this CodePen](https://codepen.io/team/turing/pen/ozQOJw?editors=1010#0) or grab the boilerplate HTML file [here](https://gist.github.com/brittanystoroz/cbfb8639140666812b681c53c5625838), and save it somewhere on your computer. You'll be able to open this file directly in your browser and see the full effect of drag and drop as we implement it.

## Making Items Draggable

Elements on the page can be made draggable simply by adding a `draggable` attribute:

```html
<li draggable="true">Lorem Ipsum Dolor Set Amet</li>
```

Before adding this attribute to the list elements in your to-do list, try dragging one of them as-is. You'll notice that you end up just selecting a bunch of text on the page.

Add the draggable attribute to each `<li>` tag and try again. Now you should see a faintly opaque copy of the dragged element following your mouse around until you let go.

## Working with Drag Events

Now that we have our draggable elements, we need to wire up the drop zone and define the data that we want to transfer upon dropping an element. Both of these require that we hook into several of the built-in [drag events](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent) available to us.

The events that make drag and drop possible are similar to your standard [mouse events](https://developer.mozilla.org/en-US/docs/Web/Events) that you might already be familiar with. (e.g. 'click', 'mouseover', etc.) Drag events build on top of this and offer us a very detailed lifecycle to work with. Here are the various events fired as you perform a drag with your mouse:

* `dragstart`: User clicks down the mouse button and holds
* `drag`: User has their mouse button held down, and is moving the mouse
* `dragenter`: User drags an element into a valid drop target
* `dragover`: User is moving their mouse while dragging an item within a valid drop target. This event is fired every few hundred milliseconds.
* `dragleave`: User drags an element outside a valid drop target
* `dragend` and `drop`: User releases their mouse button, effectively "letting go" of whatever they were dragging. If they do this while hovering over a valid drop target, the `drop` event will fire as well.

These events are important not only for implementing the functionality, but also for providing user feedback at each phase of performing a drag-and-drop.

## Creating a Drop Zone

The events we'll need to work with when creating a drop zone are `dragenter`, `dragleave`, `dragover`, and `drop`.

### Drop

We want to target the completed `ul` element as our drop zone. In order to do this, we'll attach a listener to this element for the `drop` event:

```javascript
$('#completed').on('drop', function(event) {
  console.log('Dropped!');
});
```

Upon refreshing the page, we might expect to see 'Dropped!' in the console after dropping one of your list items into the zone, but we don't. Why?

Normally, elements on a page are not valid places to drop data. Therefore, **the default behavior for these events is to not allow a drop**. And how do we override the default behavior of an event? We add `event.preventDefault()`.

Not only must we prevent the default behavior in our `drop` event, but we also must cancel any other drag events that are occurring at the same time. Remember we said that the `dragover` event could be fired every hundred milliseconds. If we do not cancel this event, it will continue to block our ability to fire the drop event. Let's add `event.preventDefault()` to our `drop` event, and also handle the `dragover` event:

```javascript
$('#completed')
  .on('drop', function(event) {
    event.preventDefault();
    console.log('Dropped!');
  })
  .on('dragover', function(event) {
    event.preventDefault();
  });
```

We should now see our 'Dropped!' message logged to the console when we try dragging a list element into the zone.

### Drag Enter & Drag Leave

Remember we said that drag and drop functionality isn't always intuitive for all users. Therefore, we must be very generous with the user feedback we provide throughout the drag-and-drop lifecycle. First, we'll want to indicate to a user when they have successfully positioned their mouse over the drop zone by giving them some sort of visual cue. Let's add a class to our CSS called `drop-zone-activated` and set `border-color: #000`.

We can hook into the `dragenter` and `dragleave` events to toggle this class depending on if a user's mouse is positioned within the drop zone:

```javascript
$('#completed')
  .on('dragenter', function(event) {
    $(this).addClass('drop-zone-activated');
  })
  .on('dragleave', function(event) {
    $(this).removeClass('drop-zone-activated');
  });
```

Now, you should see the border color changing each time your mouse enters and leaves the drop zone. This behaves similarly to the `hover` effect in CSS, but we only want this class applied during a drag and drop operation. If we implemented this behavior with CSS `hover`, we'd notice the highlighted border every time our mouse entered the drop zone, regardless of whether or not we were holding an element to drop.

You'll notice when you actually perform the drop event, the class remains activated. We'll want to remove it after a drop event as well:

```javascript
$('#completed').on('drop', function(event) {
  event.preventDefault();
  console.log('Dropped!');
  $(this).removeClass('drop-zone-activated');
}) ;
```

## Transferring Data

We now have our draggable list items and a drop zone to place them in, but we aren't doing anything useful yet. The core functionality of drag and drop is the transfer of data from one element to another.

We want to physically **move** the list item into our drop zone, removing it from the to do list. Again, we're going to make use of some drag events to define how this should be handled.

### Defining Data

A good time to define the data we want to transfer is in the very beginning of the process, on the `dragstart` event. Because `dragstart` is fired as soon as we grab our draggable element, we need to attach a listener to our draggable elements to handle it:

```javascript
$('#not-completed li').on('dragstart', function(e) {
  e.originalEvent.dataTransfer.setData("listItem", $(this).index());
});
```

*NOTE: Because we are using jQuery, we are recieving a jQuery event object when we run our event handlers. This object is slightly different than the native event you get when using vanilla JavaScript. The jQuery event object does not have a `dataTransfer` property. Because of this, we have to call `setData()` on `e.originalEvent.dataTransfer` rather than just `e.dataTransfer`.*

Drag events give you access to an object called `dataTransfer`, that provides you with several methods for handling the data you want to work with. In this scenario, we want to call `setData` to define the information we want to transfer.

`setData` takes two arguments. The first is a string that identifies the type of data we are transferring. There are some preset types such as "text/plain", "text/html", etc. But you can also define an arbitrary string that more closely describes your data. In our case, we passed in "listItem" as our data type. We will use this string in our drop event to access our data.

The second argument is the actual data you are transferring. In our example, we're actually only going to transfer the `index` value of the list item we've selected. So if we select the third item in the list, our data is going to be 2.

### Retrieving Data on Drop

When the `drop` event fires, we want to access the data we prepared for transfer with `getData()`:

```javascript
let data = e.originalEvent.dataTransfer.getData("listItem");
```

The `getData` method takes a single argument - the descriptive string you used as your data type when you called `setData` in the `dragstart` event. This will return the data that matches that descriptor.

Now, in our drop event, we can use that index value we receive from `getData`, and select the list item to append to our completed list:

```javascript
$('#completed')
  .on('drop', function(e) {
    e.preventDefault();
    $(this).removeClass('drop-zone-activated');

    let listItemIndex = e.originalEvent.dataTransfer.getData("listItem");
    $(this).append($('#not-completed li').eq(listItemIndex)); // select element by index
  });
```

If we refresh our page, we should now be able to move to do list items into the completed box. This is a super basic example of implementing drag and drop. Interfaces can get much more complicated than this, and it's important to keep your users in mind when you use this API.


## Best Practices for Implementing a User-Friendly Drag-n-Drop

### Offer Alternative Methods

The first and most important step in creating a user-friendly interface with drag and drop is to always offer another way to perform the same interaction. That's right. Drag and drop is an **enhancement** for most users, not necessarily a solution. Many users with motor challenges might have a difficult time with the drag and drop method. (I, for one, have a terrible time dragging and dropping when simply using a trackpad on a laptop rather than a mouse.)

In the example we just built, an alternative interaction to drag and drop might be an arrow button placed in between the two unordered lists. Clicking this button would manually move one of the list items to the completed column.

If you are using drag and drop for uploading files, you might want to include the standard file upload input as an alternative interaction.

### Provide Event Feedback

Giving user consistent visual cues as to what's happening is crucial to making drag and drop an effective interaction. We already added a highlighted border to our drop zone when we enter and leave the zone, but we can go even further in several ways:

* Explicitly state somewhere on the page "Drag to-do items into the completed list when finished"
* Change the cursor when hovering over a draggable element to indicate it can be picked up (CSS: `cursor: grab`)
* Add a hover effect to draggable elements to clearly indicate when your mouse is positioned over one
* Change the cursor when in the process of dragging an element (CSS: `cursor: 'grabbing'`)

### Probably just use jQuery UI

The native drag and drop API has been criticized for being buggy and somewhat difficult to work with. In order to ensure better cross-browser compatibility and a seamless user experience, you might want to use [jQuery UI](https://jqueryui.com/). They offer a drag and drop interface that is easier to work with and includes built-in animations and effects that provide nicer user feedback.

## Resources

* [Drag and Drop MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
* [jQuery UI](https://jqueryui.com/)
