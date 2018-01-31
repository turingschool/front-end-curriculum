---
title: Promises & Event Loop
tags: promises, event loop, heap, task queue, single-threaded, non-blocking, call stack, asynchronous, Promise.all()
module: 3
---

## Promises Practice Repos

This repo was created using `create-react-app`

Clone this repo and the [promises-api](https://github.com/turingschool-examples/promises-api) repo down.
Clone this repo and the [promises-practice](https://github.com/turingschool-examples/promises-practice) repo down.

For both:

`npm install`

`npm start`


### Learning Goals
Understanding of:
* Why promises over callbacks
* How to implement a promise
* How to use Promise.all()

Brief Understanding of:
* single-threaded JS
* asynchronous JS
* non-blocking
* call stack
* task queue
* event loop
* heap


### Quick Review

Javascript, `a single-threaded non-blocking asynchronous concurrent language`. Whoa well that's a mouth full. Okay, that also seems a little confusing. Lets go ahead and break this thing off into little sections.

#### Single-threaded

As we know javascript has a single-threaded `call stack` that has stack frames. As our code is run, each stack frame is pushed and popped from the top of the call stack, the top being the currently executing code.

*Quick plug to Philip Roberts for having an amazing talk, which you can find [here](https://www.youtube.com/watch?v=8aGhZQkoFbQ)*

So consider the javascript:

```javascript
function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7));

```

So what we have is a function `foo(b)` that returns `10 + b + 11`.
Then there is `bar(x)` that returns `foo(x * y)`.
Our console.log ends up calling bar(7)

Lets watch the call stack:

![call-stack](http://g.recordit.co/Hov4MmHhX2.gif)

As we see the stack starts by pushing `console.log(bar(7))` because it was the first executed code we have. Which then calls `bar(7)` to execute `foo(x * y)`
to execute the inner operation `x * y`. So far we have just been pushing things to the stack. Until after `x * y` has finished executing then it gets popped off!

Now we continue on with `foo(x * y)` which pushes `a + b + 11` to the top of the stack to immediately get popped off leaving `a + b` to be pushed to the top. Then finishes off by popping all the rest of the stack. This will finish by returning `42` to the console.

Well that was a lot. So I suggest you go use the tool above and create something a little simpler!

Three things to note about our JS call stack
* `Single threaded:` Threads are basic units of CPU utilization.
* `Synchronous:` JavaScript call stack carries out tasks to completion instead of task switching and the same holds for events.
* `Non-blocking:` Blocking occurs when the application state is suspended as a thread runs.


#### Non-blocking

'A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query to return or an XHR request to return, it can still process other things like user input.'[*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Never_blocking)

Heres a great example:

[Example](https://codepen.io/anon/pen/QwXbLy?editors=1011) -->  When Big Loop handler runs the browser appears frozen. We know JavaScript’s call stack is synchronous soBig Loop executes on the call stack until completion. It’s also non-blocking where Do Stuff clicks are still received even if they didn’t execute immediately.


#### Asynchronous

Still confused? Yup; you, me and everyone else. It's hard but it's a good thing to keep in the back of your head. So lets continue on with asynchronous. Clearly with non-blocking we can have a user click a button and continue on with I/O without making them wait.

So why is that? Well for a long time the web has used `callbacks` to help solve this issue. Allowing code to be executed once its finished. For example the `browser` has web api's that take callbacks as an argument, like: `XHR`, `SetTimeout`, `DOM` events. These things have their own `callback queues`/`task queues` which run an `event loop`.


Here's an example:
![example](http://recordit.co/XF9fvyv04x/gif/notify)
[try it yourself](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
When your code first executes, it loads events and saves them in [`heap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Heap) , but for now lets reference it by the web api box. So the call stack starts running through our code and `setTimeout(function timeout{...})`(line 9) gets put on the call stack. Which sends it over to the web api box for storage until it's ready to execute the callback after 5 seconds! Once the wait is done, it will send the callback to the `callback queue / task queue` while the `event loop` waits for a good time to throw it on the stack / till the stack is cleared. ( event loop is the orange loop in this example )

Now we also saw that the `DOM event listener`, when put on the call stack(line 1) is pushed to the web apis storage and waits/listens for its time to be called. You'll notice that once I trigger the event by clicking the 'Click me!' button, that callback is pushed to the `callback queue / task queue`. Once the stack has cleared the `event loop` will trigger the next callback.

So what does this mean? So yes, your JS code is running on a single call stack (single-threaded) but under your JS, the browser code is running multiple threads to capture events and trigger handlers, when they capture any new event, they push it on an event queue and then that event loop, in which your code is running gets triggered and it handles the request.

Talk about a quick review! How about we do some codez?

### Lets dive into fetch!

Hokay. So. lets build a Front-end Turing staff website. What we have so far is an api that serves up a collection of members [here](https://github.com/turingschool-examples/promises-api). We also have our client side code located on this [repo](https://github.com/turingschool-examples/promises-practice).

What we want to do first is make a `request` which we now know is writing asynchronous code. Earlier we talked about the request call being put into the `heap` which stores that information until it is ready to run it's callback. Then it's transferred into the `task queue` till the `event loop` says it's ready to be put on the `call stack`

So the API given to us doesn't give us all the info needed to display the staff members.

The endpoints given to us are:
* http://localhost:3001/api/frontend-staff - this returns an array of objects that contain the name of each staff memeber and another endpoint to grab their bio.
* http://localhost:3001//api/bio/:id - this is the endpoint given from each obj inside the array from the endpoint `frontend-staff`

So once we make our call we will need to iterate over the array and make more requests for additional info.

#### Fetch

So if you don't know how to use `fetch` yet I suggest taking a five minutes to review the docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Fetch returns a promise, which will either `resolve` or `reject` depending on the status code. You might want to take a look on when fetch actually catches errors [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful). The api can actually be set up in a way that can help fix this, but this is a major reason why some people dislike `fetch`.

So if `fetch` returns a promise, right? Then it makes sense that you can chain `.then()` or `.catch()`

So when we make a request and have a response come back in json, the typical move for fetch looks like:

``` javascript
  fetch('someapi.com')
  .then((res) => res.json())
  .then((body) => 'the response coming in as an object.')
  // we could also write this like:

  fetch('someapi.com')
  .then((res) => res.json().then((body) => 'the response coming in as an object.'))

  // notice that we are chaining to the res.json()
```

This is not the preferred way of doing things, but why can we do this? Take a look [here](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)

#### Promise.all()

So Promise.all() takes an array of promises, and will `resolve` only if all the promises `resolve` otherwise it will `reject`.

How can we use this to our advantage? So when we make our request to 'api/frontend-staff' we receive an `array` of staff members containing info to make more `fetch calls`.

``` javascript
fetch('http://localhost:3001/api/frontend-staff')
.then((res) => res.json())
// this returns =>
{ bio: [
        { info: "http://localhost:3001/api/bio/1",
          name: "Romeeka Gayhart"
        },
        {...},
        {...}
       ]
 }

```

So we're probably going to have to iterate through this array to make a fetch call for all the bios. If promise.all() expects an array of promises and fetch returns an promise, how can we use this to our advantage?

If you thought to yourself use a .map! Then you're correct!
``` javascript
fetch('http://localhost:3001/api/frontend-staff')
.then((res) => res.json())
.then((info) => {
  const promises = info.bio.map((i) => // iterates through array and map returns anything given to it, which we're given it promises.
  fetch(i.info).then((res) => res.json()))

  //Now we're going to wait for all the promises to resolve
  return Promise.all(promises).then((members) => members.map((person, i) => Object.assign(info.bio[i], person)))

  // and assign them to the original object. To add the additional info.

  // we returned the promise.all to the original fetch promise so we can:
  .then((people) => this.setState({ staff: people }))
  .catch((error) => console.log(error))
})
```

There we go! That was it, seems like a little bit more code but we can guarantee a better user experience!

So there was a lot of info today!

Feel free to look through resources:

#### Resources
* I used a lot of MDN docs which I tried to link to throughout the walkthrough [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
* [Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D), by Philip Roberts, was used for examples.
* [DAN MARTENSEN](https://danmartensen.svbtle.com/events-concurrency-and-javascript) wrote this article that I referenced his code pen from.
