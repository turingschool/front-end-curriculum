# Basic API Requests using AJAX

---

### By the end of this lesson you should...

* Understand the difference between synchronous and asynchronous operations
* Be familiar with AJAX and XMLHttpRequest objects
* Know what a `GET` request does and how to use it

---

### What is this asynchronous thing all about?

* **Synchronous:** Waiting in line at chipotle

* **Asynchronous:** Eating at a sit-down restaurant


#### Example: `setTimeout()`

```
console.log("Legen..."); 

setTimeout(() => { 
  console.log("DARY!"); 
}, 2000); 

console.log("Wait for it...");
```

setTimeout is actually an asynchronous function, which executes its callback after waiting for the allotted time to expire.


#### Questions:

* Why are async operations necessary?
* Have you run into a situation on past projects where you needed async operations to accomplish it?


---

### What is AJAX?

**A**synchronous **J**avaScript **A**nd **X**ML

Cool, but really, what is it? 

_“the method of exchanging data with a server, and updating parts of a web page – without reloading the entire page.”_

##### The two main benefits of AJAX are:

1. Make requests to the server without reloading the page
2. Receive and work with data from the server

### How? 

Using the `XMLHttpRequest` object, developers can `GET` information to/from remote servers (among other tasks you'll learn more about in future mods). Depending on how the information is transmitted, the server should respond back with a [status code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). Here is a high-level summary of the status code ranges:


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

Next let's hit this funny but super innapropriate [Chuck Norris API](http://www.icndb.com/api/). We'll need to use the `GET` method, define our endpoint, and provide a 3rd argument of `TRUE` which tells the request to be asynchronous:

```
xhttp.open("GET", "http://api.icndb.com/jokes/15", true);
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
$.get("http://api.icndb.com/jokes/15")
```

Of course there is more to it in order to use the data returned by the server, but this is all it takes to ping those endpoints and request the data. 

If we want to do something with the data, we can set a `callback` as a second argument that handles the data returned:

```
$.get("http://api.icndb.com/jokes/15", (data) => {
  //do something with the data
})
```

But what about if we request something that doesn't exist or the server is busted, how can we account for that? Great question! Because jQuery returns a jqXHR (or just an XMLHttpRequest object), we get with it a variety of tools for how to deal with the response. Here's one example:

```
$.get("http://api.icndb.com/jokes/15")
  .then(data => //do something if data is returned)
  .catch(error => //do something if an error is returned)
```

Some additional information on the specifc methods can be found [here](https://api.jquery.com/jquery.get/)

---

### Practice Time!

#### Step One:

Clone down [this repo](https://github.com/mlimberg/ajax-practice)

* `npm install`
* `npm start`

Visit `http://localhost:8080/public/`

#### Step Two:

Working in the `Main.jsx` file, see if you `GET` data from this endpoint displaying in your console and then set it to the `jokes` array in state. 

```
http://api.icndb.com/jokes/random/10?exclude=[explicit]
```

_HINT_: You'll probably want to ensure your component is fully rendered (*cough* Mounted *cough*) before grabbing the data.

#### Step Three:

Once you successfully have the jokes set in state, see if you can add some code to the `JokeList.jsx` file that will append the data to the DOM.

_HINT:_ Look how the `jokes` array in state of the `Main` component is being passed down to the child components. Also, think grocery list...

#### Step Four:

You should now have 10 jokes displaying to the page on load. Now can you add some code so that when a user enters a new quantity in the input and presses `Get Jokes`, a new set of jokes matching that quantity appears? 

_HINT(S):_

* Take a look at the `Controls` component, some actions are already passed up for you
* You may have to move your `GET` request out of your `componentDidMount` method
* What could that `qty` property in state possibly be for?...
