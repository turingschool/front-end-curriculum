# HTML and Accessbility

## **Vocab:**
- **Accessibility** - Making your applications and webpages usable by anyone
- **ARIA** - Accessibile rich interneet applications
- **Role** - The function an element serves on the page
- **State** - Information about how an element is currently represented
- **Property** - Additional information about an element

## **Game plan**
- Understand how semantics are interpretted
- Learn about ARIA
- Understand how to test applications for accessibility 

## **Introduction**
We talk a lot about writing sematnic HTML, but what does that mean besides using `sections` and `articles`? Let's take a deeper dive into how semantics are interpretted by assistive technology, and how to make the most informed decisions when developing accessible applications.

## **The Accessibilty Tree** 
When the browser loads content, it creates the DOM tree. We can use scripting to interact with what's being displayed through the tree. By leveraging Accessibility APIs, the browser also creates what's know as the Accessibilty Tree. This loads information that's available to assistive technologies, such as screen readers and screen magnifiers.

Writing clean, semantic HTML communicates information about the web page to the assistive technologies, but things can get tricky when creating custom widgets or more complex applications. Using a `div` to create a dropdown menu midget doesn't explain how a sightless user is meant to interact with it. This is where ARIA comes in.

## **ARIA**
**Accessibile Rich Internet Applications**

ARIA is a set of rules and standards developed by W3C to make web applications more accessible. By utilitizing various ARIA attributes in your markup, you can send more meaningful information to the Accessibility Tree, allowing assisted users a more vomplete experience with your applications. Outside of accessiblity, ARIA allows you to make your code more semantically menaingful. This helps clarify why you wrote what you wrote to other developers, and your future self.

ARIA provides a ton of tools to enhance the meaning of your markup. Today we'll look at three main aspects of ARIA: roles, state and properties.

### **Roles**
A role tells the browser what an element's intended purpose is. Every html element has an *implicit role* that is communicated to assistive technologies through the accessbility tree.

```html
<!-- The following markup has an implicit role of "heading" -->
<h4>Hello World</h4> 

<!-- The following markup has an implicit role of "checkbox" -->
<input type="checkbox">Check me</input>
```

Using ARIA, we can give an element an *explicit role* as well.
```html
<!-- The following markup has been given an explicit role of button-->
<div role="button">Click Me</div>

<!-- The following markup has been explicitly defined as a banner for the page. It could contain an image, slogan or other informative general content -->
<div role="banner">...</div>
```
A list of all ARIA roles can be found <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles" target="_blank">here</a>.

**Avoid Redudancy**
Like we said earlier, all elements have an implicit role. If there is native HTML that will express the role you need, use that and *don't add another role*. 
```html
<h1 role="heading">This has a pointless role</h1>

<!-- The above markup already has a clear implicit role. Defining its role explicitly only complicates what the browser has to do -->

```

### **State**
Information about the current status of an element that is *expected to change frequently*. Very similar to properties.
```html
<input type="checkbox" checked>I've been checked</input>

<!-- The "checked" attribute provides information about the input's current state -->
```
Let's say we have a button that toggles more information about something. 

```html
<button>See More</button>
```
A sighted user will be able to see what state the button is in based on how it's styled. Someone using a screen reader will know they can interact with the button, but won't be able to tell what state it's in.

```html
<button aria-expanded="true">See More</button>
```
The `aria-expanded` attribute lets us specify the state of our button for a screen reader.


### **Properties**
Extra information about an element that is *not generally expected to change*. Some properties may change during the lifetime of an application, but it is less common. Becuase of their similarities, many specs list states and properties together.

What if we had multiple toggle buttons with the same role for displaying extra content in various places? We could use the `aria-controls` attribute to link together elements semantically.

```html
<button aria-controls="bonus-info-1">Learn More</button>

<article id="bonus-info-1">
    <!-- Extra information -->
</article>
```

Properties allow us to define relationships between elements, as well as define aspects about how the element should function.

The `aria-label` element works like an alt-tag for accessibilty. The screen reader will replace the default text of the element with the `aria-label` value.
```html
<button aria-controls="bonus-info-1" aria-label="See more information">Learn More</button>

<article id="bonus-info-1">
    <!-- Extra information -->
</article>
```
After the button is pressed, you can use Javascript to change the `aria-label` to "See less information".

There are many more properties within ARIA that can help clarify your markup. A few useful ones are listed bleow:

"What Am I"

* `aria-label` - Described above. Provides additional information about an element.
* `aria-required` - Tells a user if they need to provide input on an element before a form is submitted.

"Who am I Related To?"

* `aria-controls` - Seen above. References an element that is controlled by the current element.
* `aria-labelledby` - Sister to `aria-label`, references the ID of another element, which is a short title for the element.
* `aria-describedby` - is just like aria-labelledby – but is meant for longer descriptions instead of short titles. This is read after the field-type is stated

Links to more comprehensive lists of properties are in the Resources at the end of this lesson.

## Testing for Accessilbity

There are a variety of resources available to developers for accessibilty testing.

<a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd" target="_blank">axe Chrome Plugin</a>

- This plugin will test your webpage for any accessibility defects. It can be good for finding big issues you want to address 

<a href="https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn" target="_blank">ChromeVox Extenstion</a>

- This plugin is a screenreader you can install in Chrome. It makes manual testing easy, and is used by Google's own devlopers.

Mac VoiceOver
- This is the native screen reader for OSX. It can be strange with Chrome, but is good for testing accessbility in Safari, oer any desktop applications you may develop down the line

## Resources
<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles" target="_blank">MDN Docs for ARIA Roles, States and Properties</a>

<a href="https://www.w3.org/WAI/PF/aria-1.1/" target="_blank">W3C Spec for ARIA</a>

<a href="https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-label" target="_blank">W3C List of supported States and Properties</a>