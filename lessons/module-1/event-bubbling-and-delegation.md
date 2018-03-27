---
title: Event Bubbling and Delegation
length: 120
tags: javascript, dom, browser, events
---

### Learning Goals

- Understand and describe propagation 
- Understand and apply event delegation
- Utilize the event object

## Vocabulary

- Event handlers
- Event propagation
- Event capturing
- Event targeting
- Event bubbling

## Event Basics

Events are happening all the time in the browser. When the browser has finished loading the page, an event is fired. Every time the user moves their mouse, hovers over an element, clicks or taps, submits a form, presses down on a key or takes their finger off that key — an event is fired. Some of these events are very easy to spot when they occur (e.g. the user clicks on a hyperlink), but many go by completely unnoticed.

It is, however, possible for us to use JavaScript to set up handlers for events that interest us. Our handlers wait patiently on a DOM node until the event they're waiting for is fired. Then, they spring into action, running an appropriate function to respond to the event as required, or whatever else you deem appropriate.

For a review of how to set event handlers, please refer to the [DOM Manipulation with JavaScript Lesson](http://frontend.turing.io/lessons/module-1/js-3-dom-manipulation.html)

### Your Turn 

Take a few minutes with the human next to you to think of a few real life analogies for event listeners. On your own, pick one of the analogies and translate this concept into visual form in your notebook.

## Event Propagation

Event propagation is an important yet misunderstood topic/term when talking about events. Event propagation is an _overarching term_ that includes the three different phases of DOM Events: capturing, targeting, and bubbling. Event propagation is bi-directional (starts at the window... goes to the target... and ends at the window) and is often improperly used as a synonym for event bubbling. Everytime an event occurs, event propagation is occuring behind the scenes. 

![Graphical representation of an event dispatched in a DOM tree using the DOM event flow](/assets/images/eventpropagation.svg)

* Event capture phase - When an event occurs in the DOM, notification of the event is passed starting at the top of the DOM tree and passing down through all parent element nodes all the way to the target node where the event occurred.
* Event target phase - After the capturing phase occurs, the Target phase occurs. The target phase only includes a notification of Node where the event took place.
* Event bubbling phase - This is the final phase to occur, although many people think this is the first phase. In the bubbling phase a notice is passed from the target Node up through all of the parent Nodes all the way back to the top root of the DOM

### Your Turn

Now that you know that you have a handle on event propagation, take a few minutes to update your visual representation of event listeners to show that these event phases are occuring behind the scenes. 

## Event Bubbling

Now we've talked about the very basics of events, let's turn our attention to event bubbling, which refers to the ability of events set on DOM nodes to "bubble up" and also apply to children of those nodes. 

Many people question why more attention isn't paid to the capturing phase. Simply put, it's unlikely that you'll have to use it. IE < 9 uses only event bubbling, whereas IE9+ and all major browsers support both.

Legend has it that back in the day, Netscape Navigator and Internet Explorer had different, incompatible ways of propagating events to multiple handlers; Netscape "captured" while Internet Explorer "bubbled." W3C has very sensibly decided to take a middle position in this dispute. According to the W3C event model, any event taking place is first captured until it reaches the target element... and then bubbles up again.

Let's start with a quick experiment.

### Experiment

In the following code pen, we have three nested HTML elements in `index.html`:

<p data-height="300" data-theme-id="23788" data-slug-hash="ZOvkVo" data-default-tab="html,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/ZOvkVo/">Event Bubbling Example</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Pair Practice

Visit the [this page][codepen] and fork the CodePen.

[codepen]: http://codepen.io/team/turing/pen/ZOvkVo

* Add a click event to the button, that logs the element that was clicked on using `this`.
* Move the event listener to the `.parent` element. What is the result when you click on the button?
* Move the event listener from the first step to the `.grandparent` element.
  * What is the result when you click on the button?
  * What is is the result when you click the `.parent` element?

### Discussion

You may have noticed that the event listeners on a parent element are fired whenever the action occurs on one of its children.

When an event occurs, the browser checks the element to see if there are any event listeners registered. After it checks the element where the event occurred, the browser works its way up the DOM tree to see if any of the parents have a listener registered, then grandparents, and so on. It checks every element all the way up to the root. This process is known as _event bubbling_.

Try out the following code in the example code pen:

```js
  document.querySelector('.grandparent').addEventListener('click', function (event) {
    console.log('Grandparent');
  });

  document.querySelector('.parent').addEventListener('click', function (event) {
    console.log('Parent');
  });

  document.querySelector('#click-me').addEventListener('click', function (event) {
    console.log('Button');
  });
```

If you click on the button, you'll see that the events all bubble up through the `.parent` and `.grandparent` elements — this provides a more explicit proof than the solutions you may come up with for the previous question.

As noted above, we are focusing on the bubbling phase because there are _very_ few instances where you will have to be consiously aware of the event phases. In the event that you DID want to use the capturing phase (so that the parent element's event handler is triggered before the target) you would want to take advantage of the optional `useCapture` parameter that is available to you with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener):

```js
 document.querySelector('#click-me').addEventListener('click', function (event) {
    console.log('Button');
  }, true);

```

### Your Turn

Open your journal and address the following:
* Describe event propagation in your own words
* Pretend you have event handlers on _every_ element in the snippet below because you want to see which ones are working. If you click on the `<p>` element, what is the sequence that the handlers will fire during the capture phase? What about the bubbling phase? 

```html
<form>
  <div>
    <p></p>
  </div>
</form>
```

## The Event Object

Sometimes inside an event handler function, you might see a parameter specified with a name such as `event`, `evt`, or simply `e`. This is called the event object, and it is automatically passed to event handlers to provide extra features and information. In the case of the click event we've been using as an example, this is a `MouseEvent`. You can visit [the MDN page for `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) to explore the full list of supported event types.

Each type of event supports a number of different properties. `MouseEvent`s contain information about the `x` and `y` coordinates where the mouse was clicked. `KeyboardEvent` has information about which key was pressed. The `currentTarget` property on the `Event` object can be useful during the event bubbling phase.

Let's make some changes to the code from earlier. Instead of logging a description of each element where an event was triggered, either by a click or through event bubbling, let's log the `target` of the event.

```js
document.querySelector('.grandparent').addEventListener('click', function (event) {
  console.log(event.target);
});

document.querySelector('.parent').addEventListener('click', function (event) {
  console.log(event.target);
});

document.querySelector('#click-me').addEventListener('click', function (event) {
  console.log(event.target);
});
```

### Pair Practice

Modify the code above to log the event itself (as opposed to the `target` property on the event). What other properties on the event object look particularly useful? What happens when you log `this` in each of the separate elements above?

## Adding and Removing Event Listeners

A common obstacle that many JavaScript developers struggle with is understanding the timing in which they bind event listeners to DOM nodes. When we add event listeners to DOM nodes, we're only adding them to the nodes that are currently on the page. We are _not_ adding listeners to nodes that may be added to the page in the future. 

### Experiment

<p data-height="300" data-theme-id="23788" data-slug-hash="OXzGGR" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/team/turing/pen/OXzGGR/">Events: Adding a New Event Listener</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You should see three buttons labeled "Click me!" as well as a button for adding new buttons to the page.

1. Click each of the "Click me!" buttons and verify that each one fires an `alert` notifying you that the button has in fact been clicked.
2. Add an additional button using the "Add a new button below." button.
3. Click on your new button and observe the results.

What did you notice?

The event listeners are only bound to the buttons that were present when the page code was first loaded. The buttons we added later were not around when we added the listeners.

### Pair Practice

Modify the function that adds new buttons so that it adds an event listener to the element _before_ it appends to the page

## Event Delegation

Setting event listeners on specific newly created DOM nodes is one way to set event listeners. However, if you're not careful, you may end up setting multiple listeners on the same node.

Also, You can cause a [memory leak](http://javascript.crockford.com/memory/leak.html) if an event listeners are not unbound from an element when it is removed from the DOM. See also, [memory management and garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management), and [4 Types of Memory Leaks in Javascript and How to Get Rid of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/).

Rather than manage the addition and removal of event listeners, there is a methodology you can use called ***event delegation***.

In ***event delegation***, we take advantage of the fact that events bubble in the event loops by setting an event listener on one parent. This event listener analyzes bubbled events to find a match in its child elements. Event delegation is one of the most helpful patterns for DOM events. It simplifies things and can save memory since there is no need to add many handlers.


The algorithim:
 1. Put a single handler on a container
 2. In the handler - check the source element using `event.target`
 3. If the event happened inside an element that interests us, then handle the event

```js
document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // do your action on your 'li' or whatever it is you're listening for
  }
});
```
### Your Turn 

What is a real life analogy that you could use to explain how event delegation works? Create a new visual representation of this in your notebook. 

<!-- <p data-height="300" data-theme-id="23788" data-slug-hash="AXVgOj" data-default-tab="js,result" data-user="turing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/team/turing/pen/AXVgOj/">event-delegation</a> by Turing School of Software and Design (<a href="http://codepen.io/turing">@turing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
 -->

## Summary

 Using your journal, take a few minutes to answer the following:

  - What are three things that you learned today?
  - What are two things that you still have a question about?
  - What is one thing you can take from this lesson to apply to your current projects?

### Resources

- Now that you have some jQuery under your belt - you should know that jQuery has an easy way to do event delegation with the 'on' function. [Check out the docs here](http://api.jquery.com/on/)
- A very detailed piece that desribes[event order](https://www.quirksmode.org/js/events_order.html) can be found here