# Basic API Requests using AJAX

---

### [Git Repo](https://github.com/letakeane/ajax-practice);

---

### By the end of this lesson you should...

* Understand the difference between synchronous and asynchronous operations
* Be familiar with AJAX and XMLHttpRequest objects
* Know what a `GET` request does and how to use it

---

### What is this asynchronous thing all about?

Let's say we're at a Red Robin for a night out on the town...Here's how the experience would go in each scenario:

* **Synchronous:** I order my food, everyone in the restaurant has to wait until I get my food before the next person can order

* **Asynchronous:** Like, a normal restaurant experience where you'd tip the server at least 20%


#### Example: `setTimeout()`

```
console.log("Legen...");

setTimeout(() => {
  console.log("DARY!");
}, 2000);

console.log("Wait for it...");
```

setTimeout is actually an asynchronous function, which executes its callback after waiting for the allotted time to expire.

#### Example 2:

* **Synchronous:**

```
|<----A---->||<-----B--------->||<----C-------------->|
```

* **Asynchronous:**
```
|<-----------------A---------------------------->|
     |<------------B---------------------------------->|
             |<----C-------------->|

```


#### Questions:

* Why are async operations necessary?
* Have you run into a situation on past projects where you needed async operations to accomplish it?


---

### What is AJAX?

[**A**synchronous **J**avaScript **A**nd **X**ML](https://developer.mozilla.org/en-US/docs/AJAX)

Cool, but really, what is it?

_“the method of exchanging data with a server, and updating parts of a web page – without reloading the entire page.”_

##### The two main benefits of AJAX are:

1. Make requests to the server without reloading the entire page
2. Receive and work with data from the server

### How?

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

Using the `XMLHttpRequest` object, developers can `GET` information to/from remote servers (among other tasks you'll learn more about in future mods). Depending on how the information is transmitted, the server should respond back with a [status code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). Here is a high-level summary of the status code ranges:

_the XHR or `XMLHttpRequest` is a tool specific to the browser_

```
1XX status codes have informational purposes
2XX indicates success
3XX is for redirection
4XX represent client-side errors
5XX indicate problems on the server side
```  


##### Here are a few of the popular players:

* **200 - OK**
	* Typically the response you're hoping for when trying to get information from an API
* **400 - Bad Request**
   * The server did not comprehend the request
* **404 - Not Found**
	* The server did not match any of the parameters you requested
* **500 - Internal Server Error**
	* It's the server's fault

![google 500 error](https://i0.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2016/11/29074529/500-internal-server-error.png?fit=604%2C237&ssl=1)

---

### Practice Time!
Open up your console and walk through these steps:

First create a new instance of an XMLHttpRequest Object:

```
var xhttp = new XMLHttpRequest();
```

Next let's initialize the request using the [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) method.

We will hit this funny but super innapropriate [Chuck Norris API](http://www.icndb.com/api/). We'll need to use the `GET` method, define our endpoint, and provide a 3rd argument of `TRUE` which tells the request to be asynchronous:

```
xhttp.open("GET", "https://api.icndb.com/jokes/476", true);
```

Now let's send the request:

```
xhttp.send()
```

If it worked, you should be able to type `xhttp` and see the results in your XMLHttpRequest object with a status of `200` as well as some responseText containing the specific joke returned.

---

### Isn't There an Easier Way???

Like basically all things in Javascript, we can sprinkle a little syntactic suga (intentional misspelling) to make our lives easier.

### $.get()

jQuery has incorporated AJAX functionality into its library to allow us to perform asynchronous tasks in a more readable fashion. Here is a sample request matching what we did above:

```
$.get("https://api.icndb.com/jokes/476")
```

Of course there is more to it in order to use the data returned by the server, but this is all it takes to ping those endpoints and request the data.

If we want to do something with the data, we can set a `callback` as a second argument that handles the data returned:

```
$.get("https://api.icndb.com/jokes/476", (data) => {
  //do something with the data
})
```

But what about if we request something that doesn't exist or the server is busted, how can we account for that? Great question! Because jQuery returns a jqXHR (or just an XMLHttpRequest object), we get with it a variety of tools for how to deal with the response. Here's one example:

```
$.get("https://api.icndb.com/jokes/476")
  .then(data => //do something if data is returned)
  .catch(error => //do something if an error is returned)
```

Some additional information on the specifc methods can be found [here](https://api.jquery.com/jquery.get/)

### fetch()

Another great tool to help with network requests is the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

From the docs:

_The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a promise that resolves to the Response to that request, whether it is successful or not._

We can nearly mimic the syntax above to perform the same network request, with a few minor tweaks. First we need to pass in the path we want to fetch from:

```
fetch("https://api.icndb.com/jokes/476")
```

Next we see that fetch returns a promise that resolves to the response of of our request. We haven't talked about promises yet, but all you need to know for now is that we can call `.then(callback)` which will execute our callback as soon as the response comes in...or in other words...it will wait until we have ALL of the data (or an error) back, `THEN` it will execute whatever we say to do next with that data.

```
fetch("https://api.icndb.com/jokes/476")
  .then(data => console.log(data))
```

If you plug the code above into your console, you should see the Response object come back. There's one problem however, we can't seem to get the data we want from the Response.body. There's one more step to parse the data (much like you do when pulling things from localStorage). We'll need to use the **`Body.json()`** method that comes with fetch to parse it and call another `.then()`.

From the docs, the `.json()` method returns "A promise that resolves with the result of parsing the body text as JSON. This could be anything that can be represented by JSON — an object, an array, a string, a number..."

In short, it gives us access to the data!

```
fetch("https://api.icndb.com/jokes/476")
  .then(data => data.json())
  .then(data => console.log(data))
```

Lastly, we can add in a `.catch()` to account for any errors we may run into.

```
fetch("https://api.icndb.com/jokes/476")
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => //do something else)
```
---

## Practice Time!

### Step One:

Clone down **THIS** repo
* `cd ajax-practice`
* `npm install`
* `npm start`

Visit `http://localhost:8080/public/`

### Step Two:

Working in the `Main.jsx` file, see if you can _`GET`_ data from this endpoint displaying in your console and then set it to the `jokes` array in state.

```
http://api.icndb.com/jokes/random/10?exclude=[explicit]
```

_HINT_: You'll probably want to ensure your component is fully rendered (*cough* Mounted *cough*) before grabbing the data.

### Step Three:

Once you successfully have the jokes set in state, see if you can add some code to the `JokeList.jsx` file that will append the data to the DOM.

_HINT:_ Look how the `jokes` array in state of the `Main` component is being passed down to the child components. Also, think grocery list...

### Step Four:

You should now have 10 jokes displaying to the page on load. Now can you add some code so that when a user enters a new quantity in the input and presses `Get Jokes`, a new set of jokes matching that quantity appears?

_HINT(S):_

* Take a look at the `Controls` component, some actions are already passed up for you
* You may have to move your `GET` request out of your `componentDidMount` method
* What could that `qty` property in state possibly be for?...

##### Further Reading:

* [The Evolution of Asyncronous Javascript](https://blog.risingstack.com/asynchronous-javascript/)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
