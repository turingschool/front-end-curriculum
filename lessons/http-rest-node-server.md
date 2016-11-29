---
title: HTTP, REST and Building a Simple Node Server
length: 3 hours
tags: HTTP, CRUD, REST, node, express, back-end, server, internet
---
### Pre-reqs

* Download Postman from Chrome

### Goals

By the end of this lesson, you will:

* Understand how you might work with back-end developers on your team
* Understand how the client and server relationship works
* Know what a server is and how requests and responses are handled
* Know which appropriate RESTful method to send in a request
* Use Express to create a simple web server that can make and receive HTTP request and responds with JSON and store them in a database


## HTTP, REST and Building a Simple Node Server

### Back-end Primer
Even as a front-end developer, it's important to have a basic understanding of what's going on behind the scenes in the back-end. You'll often be working with back-end developers on your team that will have a huge effect on how your application interacts with its data. The better you understand the back-end, the more prepared you'll be to build an application on top of it.

### How the Interwebs Work
Lots of cats and dogs running around doing adorable things and making everyone happy.
![corgi chillin][corgi-chillin]

[corgi-chillin]: /assets/images/lessons/http-rest-node-server/corgi-chillin.jpg

### The Server
There are many different types of servers, but when we are building web applications, we're most concerned with what's called a **Web Server** or an **HTTP Server**. You'll often hear these two terms used interchangeably, or simply shortened to "server".

An **HTTP Server** handles any network requests by providing responses that can be HTML pages, files, or data. For example, when we navigate to [https://www.turing.io/](https://www.turing.io/) in our browser (**Web Client**), we are really making a request to an HTTP server. The server is then responding with all of the HTML needed to render the page. We can even visually see this by looking in the 'Nework' tab of our developer tools:

![network requests][network-requests]

The network tab will list any requests you make to the server. If we search for 'www.turing.io', in the top left of the network panel, we can We see that the type of request we made was for a 'document'. If we click on this request, we can also see information about the request itself, as well as the response we were given. Clicking on the 'Response' tab, you'll see the entire markup of the HTML document we requested:

![network response][network-response]

[network-requests]: /assets/images/lessons/backend-primer/network-requests.png
[network-response]: /assets/images/lessons/backend-primer/network-response.png

#### Making Requests to the Server
Our applications will request HTML documents, CSS files, images, and data. The way each of these requests are made is quite different:

* Typing a URL like `https://www.turing.io` into the browser makes a request for an HTML document
* Including a link tag to request an external stylesheet: `<link href="https://www.turing.io/css/styles.css" />`
* Adding an image element to display a logo: `<img src="https://www.turing.io/images/logo.png" />`.
* Making an AJAX request to fetch data: `$.ajax({ url: "https://www.turing.io/api/v1/curriculum/", method: "GET" })`

While the syntax for each of these requests looks significantly different, they all share one thing in common: *Every request we make to an HTTP Server requires a URL.*

![url pic][url-pic]

[url-pic]: /assets/images/lessons/http-rest-node-server/url-pic.gif

When fetching data, you'll often hear the URL referred to as an "endpoint". These endpoints (e.g. `https://www.turing.io/api/v1/curriculum/`) are created by the back-end developers on a team to help the front-end developers access and interact with the application data. Just like the front-end, there are many frameworks and libraries that back-end developers will use to to set up a proper HTTP Server with all the necessary endpoints. We will look at a few backend choices later, but first let's talk about what they all share in common.

#### Hypertext transfer protocol
The protocol for transmitting documents across the internet. There are a bunch more (SSH, POP,FTP...) but we will focus on HTTP since it's primarily used for communication between web browsers and web servers. Hypertext is just structured text that uses links (hyperlinks) between other nodes of structured text. The key to HTTP is that it is stateless, the server doesn’t save data between requests.

#### RESTful API design
* REST stands for representational state transfer. What this means is that web resources communicate using a set of uniform operations that are stateless (don't persist data between requests)

The six architectural constraints are:

1. Client-server - Separation of GUI and data
2. Stateless - No client context is stored by server, each client request  provides all the information to fulfill the request.
3. Cacheable - Server responses defined as cacheable or not. Speeds up future interacts.
4. Layered system
5. Code on demand (i.e. execute JS script in HTML)
6. Uniform interface

RESTful architecture includes sending HTTP methods to a URL to get back information from a request. Here are the primary methods, which are often called CRUD methods (Create, Read,Update,Destroy)

---
1. GET - Retrieve information identified by the request
2. POST - Create a new resource by the request
3. PUT - Update a specific resource by the request
4. DELETE - Destroy a specific resource by the request

#### The Inner Workings of a Request and a Response
The header of a request or response allow the client and the server to pass
additional information to each other. Think of it as metadata that allows
a client or server to handle the request properly.

A header is simply a hash of key-value pairs:
`{"Content-Type": "text-html"}`

There is a lot of metadata that you can pass in a request. Some of the more common values are
 "Accept" which allows you to set what media types are acceptable and in what quality.
 Example:
 ```
 Accept: audio/*; q=0.2, audio/basic
 SHOULD be interpreted as "I prefer audio/basic, but send me any audio type if it is the best available after an 80% mark-down in quality."
```

Another common value is "Content-Length". This indicates the length in of the body if the request would have been sent in a GET method. It's measured in bytes. Good way to know quickly how big a request is.

If we look at a response in our browser, we can check out the headers:
![network header][network-header]

[network-header]: /assets/images/lessons/http-rest-node-server/network-header.png

There is a lot of information in the header, but most important part is the status code returned to us. This tells us what happened to our request. Check out [https://www.w3.org](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) to see all of the status codes for HTTP 1.1, but the general rule is:

* 200 range means everything is OK
* 300 range means you need to do more to complete the request
* 400 range means you sent a bad request. Do it again, but better
* 500 range means that something is screwed up with the server (thanks
backend...) but my request is OK

#### Misc. other useful concepts

#### IP address
An IP address is the identification of a host or network interface and allows us to find the address of a location of another host or network interface.  The current protocol for IPs is IPv4, which is still in use today using a 32-bit system. But lots of people use the internet and we are running out of IP addresses. Enter IPv6, which is slowly being phased in:

![32 ip][32-ip]
![128 ip][128-ip]

[32-ip]: /assets/images/lessons/http-rest-node-server/32-ip.png
[128-ip]: /assets/images/lessons/http-rest-node-server/128-ip.png


#### Domain Name System
Since humans aren't computers, we need human-readable forms (domains) to remember URLs.
We use a Domain Name System to map IP addresses to domain names. DNS servers contain massive databases of these mappings, and different organizations own the DNS based on the domain. You OS caches domains that you visit, so next time you go to the same URL, it doesn't have to go looking for it in a DNS. DNS servers are often selected by configuration settings sent by your Internet service provider (ISP), WiFi network, modem or router that assigns your computer's network address.

### Back-End Frameworks
Unlike the front-end, where our main language is JavaScript, the back-end can be built in PHP, Python, Ruby, etc. Developers have built frameworks for building back-ends with each of these languages (CakePHP, Django, Ruby on Rails, etc.). So while deciding on a JavaScript framework is more about preference and opinion, your choices for a back-end framework are often limited to the language you choose to write. Whatever language and framework is chosen for the back-end of an application should have little effect on the front-end, as the only interface for communication between the two is requests and responses through URLs.

For the following lessons, we'll focus on using [node](https://nodejs.org/en/) and [express](http://expressjs.com/) for building a back-end. We will use Node today to create a simple HTTP server with several endpoints.

#### NodeJS
What are the benefits/disadvantages of using Node versus other server technologies?

![node server][node-server]

![node event loop][node-event-loop]

[node-server]: /assets/images/lessons/http-rest-node-server/node-server.png
[node-event-loop]: /assets/images/lessons/http-rest-node-server/node-event-loop.png

Awesomeness of Node includes:

* Everything in JS
* Fast, non-blocking code. Wait for your slow operations (file system, database I/O operations)
* Real-time communications with sockets (run on TCP instead of HTTP)
* Not multi-threaded (good for memory)

Disadvantages of Node:

* Lack of libraries (No ORM, image processing)
* Frequent changes to Node API
* Gotta deal with async
* Not multi-threaded (bad for computations)

### Practicing RESTful and adding a DB
[Clone this repo](https://github.com/Alex-Tideman/dino_express)

The first part of this paired practice will be to create a json dinosaur file and get the contents of all the dinosaurs or of a specific dinosaur with all the CRUD methods.

The second part will be adding a MongoDB to store data and using a form and Postman to execute HTTP requests to the API.

After npm i the initial setup has our usual server.js file:

```js
var express = require('express')
var app = express()
var dinosaurs = require('./public/dinosaurs')

app.use('/dinosaurs', dinosaurs)

app.listen(3000, function () {
  console.log('RrrarrrrRrrrr server alive on port 3000')
})
```

One difference is the app.use('/dinosaurs', dinosaurs). This is simply setting a new "root" endpoint that is reached at /dinosaurs and uses the dinosaurs.js file in the public folder.

The public folder has a dinosaurs.js file with the dependencies we will use:

```js
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

module.exports = router
```

The router variable uses the Express Router to handle complex routing. So instead of app.get('/') we use router.get('/'). In this context the path '/' refers to '/dinosaurs'. In our router.get('/') handler we are sending the index.html file in the response. So now we can go in our browser and go to localhost:3000/dinosaurs and view our home page.

Ok that's pretty cool, but it's still a static app with a homepage. Pretty boring. Let's set up some dummy data and then add RESTful routes to the app:

I created a dinosaurs.json file under the public directory to get us a few dinosaurs to start:

```js
{
   "dino1" : {
    "name" : "T-Rex",
	  "size" : "big",
	  "id": 1
   },
   "dino2" : {
    "name" : "Iguanodon",
	  "size" : "medium",
	  "id": 2
   },
   "dino3" : {
    "name" : "Sinornithosaurus",
	  "size" : "small",
	  "id": 3
   }
}
```

Now that we have some data let's grab all the dinosaurs in a new route:

```js
router.get('/list', function (req, res) {
   fs.readFile( __dirname + "/dinos.json", 'utf8', function (err, data) {
       res.send( data );
   });
})
```

Now we have a '/dinosaurs/list' route that will read from our json file and send the data in the response. Go the url and check it out!

Let's get a specific dinosaur with it's id:

```js
router.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "dinos.json", 'utf8', function (err, data) {
    let dinos = JSON.parse( data );
    var dino = dinos["dino" + req.params.id]
    res.end( JSON.stringify(dino));
  });
})
```

Now we could add the POST, PUT and DELETE methods to this app, but it's kind of a pain in the ass dealing with reading and writing files. What we need is a database to help with the pain.

Enter [MongoDB](https://www.mongodb.com/) and [mongoosejs](http://mongoosejs.com/docs/guide.html). MongoDB (huMONGOus) is a free NoSQL database and mongoosejs allows us to set the model schema and do CRUD functionality to our models. Think of NoSQL database as a collection of key-value pairs, with the values being arrays, hashes, strings, ints... MongoDB calls one set of key-value pairs a collection (very similiar to a JSON-like object). They are easy to create, flexible to add and change, 'Javascripty' to query and fast in searching. It provides a more horizontal/flat storage of data that is helpful in large datasets. The shortcomings are if you have a lot of complex relationships that are related it can be difficult to get back what you need, there aren't consistent interfaces and there isn't a low-level query language. Tomorrows lesson on SQL talks about relational databases.

Let's add mongodb and mongoose:

```js
$ brew update
//Get mongo DB
$ brew install mongodb
//Install mongoose
$ npm install mongoose --save
// Fire up the DB. Sudo mongod if mongod doesn't work
$ mongod
```

Now we can create our database name in our server.js file:

```js
var dbName = 'dinosaurDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);
```

Cool we have a DB, how about a model? Let's create a Dinosaur model to store our data in. Create a new directory called models and in it add a dinosaur.js file:

```js
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var dinosaurSchema = new Schema({
  name: String,
  size: String,
  food: String
});

module.exports = mongoose.model('Dinosaur', dinosaurSchema);
```

This sets the schema or design of our database model with the fields in the model and their type. We now have a Dinosaur model with a name, size and food.

Let's head over to our dinosaurs.js file that deals with the dinosaur routes and require our Dinosaur model.

```js
var Dinosaur = require('../models/dinosaur');
```

Now for changing our routes. First the get route for all dinosaurs:

```js
router.get('/dinosaurs', function(req, res) {
    Dinosaur.find(function(err, dinos) {
      if (err) {
        res.send(err)
      }
      // res.render(view, locals)
      res.render('index.ejs', {dinosaurs: dinos})
  })
})
```

There is a few new things here. Dinosaur.find is using mongoose to find all dinosaurs with the Dinosaur model. If there's an error send the error, if not then render our index.ejs template. Let's not worry about the templating yet and focus on our CRUD routes.

```js
router.post('/dinosaurs', function(req, res) {
  var dinosaur = new Dinosaur(req.body);

  dinosaur.save(function(err) {
    if (err) {
      res.send(err)
    }
    Dinosaur.find(function(err, dinos) {
      res.render('index.ejs', {dinosaurs: dinos})
    })
  })
})

router.put('/dinosaurs/:name', function(req,res){
  Dinosaur.findOne({ name: req.params.name }, function(err, dinosaur) {
    if (err) {
     res.send(err)
    }
    // Update the params sent
    for (prop in req.body) {
      dinosaur[prop] = req.body[prop]
    }

    // Save the dinosaur
    dinosaur.save(function(err) {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Dinosaur updated!' });
    })
  })
})

router.get('/dinosaurs/:name', function(req, res) {
  Dinosaur.findOne({ name: req.params.name}, function(err, dinosaur) {
    if (err) {
      res.status(404).send(err)
    }
    res.json(dinosaur)
  })
})

router.delete('/dinosaurs/:name', function(req, res) {
  Dinosaur.remove({name: req.params.name}, function(err, dinosaur) {
    if (err) {
      res.send(err)
    } else if (!dinosaur) {
      res.send('Dino does not exist!')
    }
    res.json({ message: 'Dinosaur deleted' })
  })
})
```

Now we have all of the CRUD database queries. Back to templating.

```js
npm i ejs --save
```

EJS allows use to pass in variables to our html template. To set the view engine add this to your server.js file:

```js
app.set('view engine', 'ejs')
```

Now our app knows to look in a view directory that has a .ejs extension. Go ahead and add that directory with an index.ejs file.

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dino Express</title>
</head>
<body>
  <h1>All the Dinosaurs</h1>
  <form action="/dinosaurs" method="POST">
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="size" name="size">
    <input type="text" placeholder="food" name="food">
    <button type="submit">Submit</button>
  </form>
  <ul class="dinosaurs">
    <% for(var i=0; i<dinosaurs.length; i++) {/\%\>
      <li class="dinosaur">
        <span><%= dinosaurs[i].name %>
                  is <%= dinosaurs[i].size %>
                  and eats <%= dinosaurs[i].food %>
        </span><br />
        <a href="/dinosaurs/<%= dinosaurs[i].name %>">View</a>
      </li>
    <% /\%\} %>
  </ul>
</body>
</html>
```

Now if you look back at our '/dinosaurs' route we can see that we are passing our MongoDB query of Dinosaur.find to the EJS template as the variable dinosaurs. We can then loop through that data and display it and add links to the individual page. We can also add a new dinosaur through the form. Try it!

To update and delete, let's use Postman.

### Slides

* [Link to optional slides]()

### Repository

* [Dino Express](git@github.com:Alex-Tideman/dino_express.git)
