# HTML and Accessbility

## **Vocab:**
* 

## **Introduction**
We talk a lot about writing sematnic HTML, but what does that mean besides using `sections` and `articles`? Let's take a deeper dive into how semantics are interpretted by assistive technology, and how to make the most informed decisions when developing accessible applications.

## **The Accessibilty Tree** 
When the browser loads content, it creates the DOM tree. We can use scripting to interact with what's being displayed through the tree. By leveraging Accessibility APIs, the browser also creates what's know as the Accessibilty Tree. This loads information that's available to assistive technologies, such as screen readers and screen magnifiers.

Let's go over some of the information made available by the Accessibility Tree. 

### **Roles**
A role tells the browser what an element's intended purpose is. Every html element has an *implicit role* that is communicated to assistive technologies through the accessbility tree.

**Ex:** 
- The following has an implicit role of "heading"
<h4>Hello World</h4> 

- The following has an implicit role of "checkbox"
<br>
<input type="checkbox">Check me</input>


### **States**
Information about the current status of an element that is *expected to change frequently*. Very similar to properties.
- Ex: `checked` attribtue of a checkbox.

<input type="checkbox" checked>I've been checked</input>

### **Properties**
Information about an element that is *not generally expected to change*. Some properties may change during the lifetime of an application, but it is less common. Becuase of their similarities, many specs list states and properties together.

## ARIA

- roles
- tabindex
- add event listeners for keyboard controls
- expanded: provides info on the state of the widget
- aria-controls
- aria-hidden


## Testing for Accessilbity
- Talk about different screen readers here

## Lets make a nav bar