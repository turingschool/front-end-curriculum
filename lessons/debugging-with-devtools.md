---
title: Debugging with DevTools
length: TBD
tags: debugging, javascript, dom, browser, devtools
---

### Goals

By the end of this lesson, you will:

* Understand how and when to use specific debugging tools
* Be able to debug errors in HTML, CSS and JavaScript
* Know where to look for and how to isolate JavaScript errors

## Debugging the Front-End with DevTools

Debugging your front-end code can be an intimidating part of the development process, but it's also one of the most powerful skills you can acquire. Developers of all levels spend a significant amount of time troubleshooting code, but the more comfortable you are with debugging tools, the easier it will be to isolate, identify and fix broken code.

The front-end languages (HTML, CSS and JavaScript) are run entirely in the browser, so the technique for troubleshooting broken code can happen in many places. Luckily, modern browsers are aware of this and give us a collection of advanced tools to help us debug.

### Developer Tools
One of the first tools you should familiarize yourself with when doing front-end development are the built-in browser [DevTools](https://developer.chrome.com/devtools). Though you can explore the browser DevTools on any webpage, we'll be using a simple expense tracking application to demonstrate how to use the DevTools. You can clone the application [here](https://github.com/brittanystoroz/example-expense-app), and follow the installation instructions in the README to get set up. The application has some pre-made bugs for us to solve as we go through the lesson.

#### Accessing DevTools
To open developer tools in Chrome:
  - Mac: `Cmd` + `Opt` + `i`
  - (or) Right click on the browser window and select `inspect`
  - (or) Select `View` in the navbar, then `Developer`, then `Developer Tools`

Personally I find that pinning the dev tools to the upper right is the most convenient. (You can also expand them into their own window.)

![devtools window][devtools-window]

#### The Panels
Once you have your DevTools window open, you'll notice a toolbar across the top with several different tabs. Clicking on these tabs will bring you to different debugging panels, each built to help troubleshoot specific areas of your front-end code.

As mentioned earlier, there are a lot of places on the front-end where code can go wrong. This means the first and most important step in solving a bug is **isolating the problem**. DevTools has already done some of this step for us by categorizing the most commmon areas where developers run into problems, and providing us with specific debugging panels for each.

![devtools toolbar][devtools-toolbar]

For now, we're only going to focus on the first four panels: Elements, Console, Sources and Network. These are the primary panels you'll be working with most often.

*More information about the other panels can be found in [Code School's Discover-DevTools Tutorial.](http://discover-devtools.codeschool.com/)*

[devtools-window]: /assets/images/lessons/debugging-with-devtools/devtools-window.gif
[devtools-toolbar]: /assets/images/lessons/debugging-with-devtools/devtools-toolbar.png

---------------------------------------

### The Elements Panel: Debugging HTML, CSS & DOM Events

##### HELPFUL FOR:
* debugging layout and styling issues
* checking DOM events

The elements panel lets you view the entire HTML source of the current page you are viewing. From here, you can edit, add or remove content and elements directly on the page. Though your changes won't be saved (any changes made here will be lost upon refreshing the page), sometimes it's helpful to make tweaks directly in this panel so you can see what effect the changes will have on your application before you implement them.

![Elements Panel][elements-panel]

#### Selecting Elements to work with
You'll notice hovering over an HTML element in the devtools panel will also highlight that element on the page. This makes it easier to find and select the content you'd like to work with.

You can also select elements directly on the page by clicking the ![Square Arrow](http://i.imgur.com/ODylyUu.png) icon in the toolbar, then hovering over the element on the page. This will automatically bring you to the corresponding code for that element in the devtools panel.

If you're having trouble finding the element you'd like to work with, you can search through the entire HTML with `Cmd + F`. You'll notice a searchbar appear at the bottom of the panel where you can enter any string to find a match. This is useful if you'd like to search for an element by a known ID or class.

![Find in HTML][find-in-html]

#### Editing Elements and Content
Directly from the elements panel, we can edit the HTML and see the changes reflected immediately. (Again, these changes won't be saved to your codebase, but sometimes it helps to see the tweaks as you make them before committing to them.)

Let's say we want to edit the title of the application from 'expenseTracker' to 'expenseLog'. We can find that heading in the elements panel, double-click on it, and edit the text:

![Editing Text][editing-text]

Now let's say we want to make just the word 'Log' in the title bold. If we wrap a `<b>` tag around 'Log', and hit the `enter` key to save the change, look what happens:

![Cant Parse HTML][cant-parse-html]

The browser didn't recognize that we wanted the `<b>` tag to be considered HTML, and it rendered it as plain text. In order to edit in HTML-mode, we must right-click on the element and select 'Edit as HTML'. Now we can wrap the word in `<b>` tags and it will render it bold:

![Edit as HTML][edit-as-html]

There are a lot of other options in the menu that appears when you right-click on an element. Play around with each of the options to see what else can be done.

#### Editing CSS
To the right of the HTML pane, there's a small sidebar that gives us styling information for the currently selected element. Similar to the HTML pane, we can add or remove styles and adjust CSS property values from this pane. You can click on any style property associated with the selected element and change its value. You can also use the blue checkbox to toggle the style on or off.

![Editing CSS][editing-css]

#### Inspecting DOM Events
Also in this sidebar is a tab labeled 'Event Listeners'. This is an important one for debugging user interactions on your application. In our expense tracker application, we've set up an event listener on our form for submitting a new expense:

```javascript
$('#submit-expense').on('submit', (e) => {
  e.preventDefault();
  console.log('Submitting a new expense...');
});
```

We can verify that this event listener has been attached to its corresponding DOM node by selecting the `form` in the elements panel, and navigating to the 'Event Listeners' tab in the sidebar:

![Event Listeners][event-listeners]


[elements-panel]: /assets/images/lessons/debugging-with-devtools/elements-panel.png
[find-in-html]: /assets/images/lessons/debugging-with-devtools/find-in-html.gif
[editing-text]: /assets/images/lessons/debugging-with-devtools/editing-text.gif
[cant-parse-html]: /assets/images/lessons/debugging-with-devtools/cant-parse-html.gif
[edit-as-html]: /assets/images/lessons/debugging-with-devtools/edit-as-html.gif
[editing-css]: /assets/images/lessons/debugging-with-devtools/editing-css.png
[event-listeners]: /assets/images/lessons/debugging-with-devtools/event-listeners.gif

---------------------------------------

### The Console: Examining JavaScript Errors & Logging Information
Many of the front-end bugs you encounter will be caused by the JavaScript in your application rather than your HTML or CSS. Tracking down these kinds of bugs can be tricky, but we can get a lot of information about the nature of a JavaScript error by using the console panel.

##### HELPFUL FOR:
* finding additional context about a JavaScript error
* tracing a JavaScript error to the exact line that caused it
* logging information about your code as it runs


#### Exploring JavaScript Errors in the console
By default, the console panel will log any errors or warnings that it detects in your application. Warnings will be highlighted in yellow, and errors will be red. If you're following along with the expense tracker application, you'll notice we already have some errors in our console:

![Console Error][console-error]

Each error in the console will provide you with the following information:

**A description of the error**  
We seem to have a Reference Error to an undefined variable called `loadExpenses`

**The file name and line number where the error occurred**  
On the right-hand side of the panel, it tells us the error is coming from a file called 'jquery-3.1.0.min.js' on line 2. But that doesn't seem right, because we didn't write that code and jQuery never has bugs! This is where the **stack trace** comes in.

**The stack trace allows you to follow the bug directly to where it originated**  
If you click the little triangle arrow next to the error in the console, you'll see some additional information expand. This is the line-by-line path of the bug that caused the code to throw an error. It's now much easier to see that the bug originated in our `script.js` file, on line 51.

We can quickly fix this error by looking through our code for a `loadExpenses` function. We don't seem to have one, which is why the console is telling us it's undefined. We do have a `getExpenses` function though. Let's call `getExpenses()` on line 51 instead of `loadExpenses()`.


#### Logging values with `console.log()`
Occassionally, you may want want to log custom information about the state of your code to the console. The console panel comes with a built-in `log` method that allows you to print any values you might be interested in seeing. You can think of the `console.log()` method as the equivalent of `puts` in Ruby.

Now that we've fixed the first JavaScript error we encountered, we can actually see one of our custom logging messages in in the console. Logging this success message was just a single line of code in our `getExpenses` function:

```javascript
const getExpenses = () => {
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: '/expenses',
    success: function (data) {
      console.log('Expenses returned successfully!');
    },
    error: function (error) {
      console.error('There was some kind of error.');
    }
  });
};
```

It's nice to know that we have made a successful ajax call, but what if we want to log the data from our ajax response? Let's include the `data` argument from our success callback into our `console.log()`: 

```javascript
console.log('Expenses returned successfully: ', data);
```

You should now see the success message along with the array of expenses that were returned from that ajax request. This is a common way for developers to confirm the value of a variable or clarify what is being returned from a function. However, there are a couple of downsides to this method:

* **it encourages debugging by 'trial-and-error'** - you have to guess where in your code you should put the logging, and what values you need to log
* **logged data is stale** - your code continues to run even after the values have been logged, so you can't actually *do* anything with them
* **we tend to forget about them** - they'll sit around in our codebase and eventually get pushed to production

Luckily, there are alternative debugging strategies we can use that are a bit more powerful and efficient. We'll explore these further in the next section.

---------------------------------------

### The Sources Panel: Live-Debugging of JavaScript Errors
The sources panel gives us an overview of all the files we have loaded into our application. We can examine our entire front-end codebase simply by clicking through the files in the left-hand sidebar. Being able to see our code line-by-line will help us isolate JavaScript errors and pinpoint exactly where our code is broken.

##### HELPFUL FOR:
* examining the files loaded into your application
* live-debugging JavaScript errors

#### Pausing Code Execution with `debugger`
Similar to the `console.log()` method we just learned about, we can also use `debugger` statements in our code to get feedback about our application's JavaScript.

The `debugger` statement is a bit more robust than `console.log()` because it will stop your app in its tracks whenever the browser reaches the line you placed it on. For example, you can place a `debugger` within a function to pause the browser from running the script when it hits that portion of your code. This gives you time to explore your code in the console, giving you access to any information your program has at that point in time.

*NOTE - The console must be open for debugger to catch, otherwise the app will look normal and you won't get any error messages - if you get stuck, refresh your page while the console is open and go from there.*

Let's put a `debugger` statement in our expenseTracker application. Now that we've successfully retrieved our expenses with an ajax call, we want to render them in the UI. We have a function called `renderExpenses` to handle this for us. It loops through each expense and appends it to the table body. Though we don't have a bug in this code, we can easily demonstrate how `debugger` statements pause our code execution by putting one in the loop:

```javascript
const renderExpenses = (expenses) => {
  const tableBody = $('#expenses-data tbody');
  expenses.forEach(expense => {
    debugger;
    const tableRow = document.createElement('tr');
    $(tableRow).addClass(expense.category);
    $(tableRow).append(`<td>${expense.category}</td>`);
    $(tableRow).append(`<td>${expense.description}</td>`);
    $(tableRow).append(`<td>${expense.cost}</td>`);
    tableBody.append(tableRow);
  });
};
```

After putting the `debugger` in your loop, refresh the page and you should see the code pausing on each loop. Every time you resume the code execution (by clicking the blue arrow at the top of the browser window), you should see a new expense rendered to the table.

![debugger-pause][debugger-pause]

Pay special attention to the sidebar on the right of the devtool panel. Underneath the 'scope' section, you can explore all the variables that exist within your scope at the time of this pause. You'll notice the variable called `expense` will change as we iterate through each loop, because we are appending a new expense object to the DOM every time we pause our code.


#### Setting Breakpoints
As mentioned, the `debugger` strategy has some advantages over using `console.log()`. The only setback with using `debugger` statements is that we have to continually toggle between our codebase and the browser, adding and removing debuggers from our code. The sources panel actually provides a way for us to streamline this debugging process a little bit.

When we want to set a `debugger` statement in a particular JavaScript file, we can simply open that file in the source panel by clicking on its name in the left-sidebar. Once we're viewing the code, we can set 'breakpoints' (essentially, these are debugger statements) by clicking on the line numbers where we want to pause code execution. This makes it easy and fast for us to add and remove as many breakpoints as we want.

Let's remove the `debugger` statement we adding in our codebase, and use a breakpoint from the sources panel instead. From the sources panel, click on `script.js` in the sidebar on the left. Then click on the line number corresponding to our first line in the loop function (`const tableRow = document.createElement('tr');`). If you've set the breakpoint correctly, the line number should turn blue. Refresh the page to see how breakpoints work in the same fashion as `debugger` statements:

![breakpoint-pause][breakpoint-pause]



[console-error]: /assets/images/lessons/debugging-with-devtools/console-error.png
[debugger-pause]: /assets/images/lessons/debugging-with-devtools/debugger-pause.png
[breakpoint-pause]: /assets/images/lessons/debugging-with-devtools/breakpoint-pause.png

---------------------------------------

### The Network Panel: Debugging Communication with APIs

##### HELPFUL FOR:
* examining network requests and responses
* debugging issues with sending or receiving API data

The network tab shows you information about all the server requests that were made when loading or interacting with your application. Specifically, you can view the response and status code of each request and how long it took to make the trip to the server and back. This panel is most helpful when you are debugging data that is being sent to and received from an API.

![Network Panel][network-panel]

[network-panel]: /assets/images/lessons/debugging-with-devtools/network-panel.png

---------------------------------------

### Practice

Let's put this information into practice by trying to solve a couple of bugs in our expense application.
Read through the first buggy scenario [here](https://github.com/turingschool-examples/debugging-with-devtools/tree/category-highlighting) and checkout the `category-highlighting` branch to get started fixing
that code.

---------------------------------------

For more details and information about other ways to dig into your js, checkout the [Chrome Documentation](https://developer.chrome.com/devtools/docs/javascript-debugging).





