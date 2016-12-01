---
title: PostCSS and CSS Modules
tags: CSS, JavaScript
module: 3
---

## Alternatives to Vanilla CSS

> The worst things about CSS are the "Cascading" and the "Sheets"
- Jed Schmidt

### What Is PostCSS?

[Github Source Code](https://github.com/postcss/postcss)  
[PostCSS Website](http://postcss.org/)  

PostCSS is a way to transform your stylesheets using JS plugins that do literally anything you can think of related to CSS.

Some examples include linting CSS with helpful error messages, dealing with inline images in user-friendly ways, guarding against future CSS code and reverse-compatability, handling cross-browser issues, etc.  

One of the more common uses of PostCSS is use of [Autoprefixer](https://github.com/postcss/autoprefixer) which translates your CSS to be cross-browser friendly but compiling them into vendor prefixes.

The library currently boasts over 200 plugins that do a plethora of fun things. No joke. Remember that time you were writing CSS and you were like "UGHHHH I WISH CENTERING AN ELEMENT VERTICALLY ON THE PAGE WASN'T A GIANT PAIN IN THE ASS!". Here you go: [postcss-center](https://github.com/jedmao/postcss-center).

Check out the [comprehensive list.](https://github.com/postcss/postcss/blob/master/docs/plugins.md)

Some examples of cool stuff...It's like CSS Christmas.

[implement flex like grid system without flex](https://github.com/andyjansson/postcss-grid)
[throw an instagram filter on your images](https://github.com/azat-io/postcss-instagram)
[add responsiveness to font size](https://github.com/seaneking/postcss-responsive-type)  
[support rebeccapurple](https://github.com/postcss/postcss-color-rebeccapurple)

### Setup

#### Option 1: Webpack  
Add the [postcss-loader](https://github.com/postcss/postcss-loader) and pluging to your Webpack file. Note: `create-react-app` already has this built in for you!

```
npm install postcss-loader --save-dev
```

If you're hand rolling this, make sure to check out the docs for the specific Webpack config details dependent on what version of Webpack you're rolling with.  

#### Option 2: `react-postcss`
Incororating PostCSS styles in React components using[react-postcss](https://www.npmjs.com/package/react-postcss)  

```
npm install react-postcss
```

#### Option 3: npm run/CLI
You can actually run the plugins from your command line using [postcss-cli](https://github.com/postcss/postcss-cli), similarly to how you can compile SASS in the command line.

```
npm install postcss-cli
```

#### Option 4: CSS-in-JS
To run PostCSS with React Inline Styles and/or integrated into your JavaScript use [postcss-js](https://github.com/postcss/postcss-js).

### Implementation

Let's assume we used Option 1 and let Webpack do the work for us. For experimentation we'll look at [postcss-use](https://github.com/postcss/postcss-use) and [postcss-discard-comments](https://github.com/ben-eb/postcss-discard-comments).  

`npm install postcss-discard-comments --save`  

`postcss-use` enables you to apply a PostCSS plugin to one particular file. To install, run `npm install postcss-use --save`.

Then let's say we want to have PostCSS handle removing all of the comments only in one of your CSS files. Prior to bundling for production. At the top of your target css file, add the following:

```
@use postcss-discard-comments(removeAll: true);

```

Voila! Check out your bundle.js file, all comments (that were in this file) are gone, but the rest should still remain.


## CSS Modules & React

As we've been building apps with React, we've been adding styles in various places. One way might be to create an main.css file, still all of your style rules in it, and then import it into your entry point for Webpack to bundle up. With this approach all of your styles are loaded immediately when the first page loads, whether or not they actually apply to that part of your app's life cycle.

Enter CSS Modules.

CSS modules allow you to optimize which styles need to be loaded at what time, which helps maximize performance. What are we talking about? Isn't creating a `main.css` file and importing it into my `index.js` entry point also a module? Yes! Yes it is. But we can break it up into individual pieces that are requested alongside the rendered component, rather than required all at once.

Pull up a repo using React that does NOT use `create-react-app`. At the time of writing this lesson plan, the `create-react-app` boilerplate has the following limitations (among others, always check [the docs](https://github.com/facebookincubator/create-react-app#limitations):  
```
Some features are currently not supported:

Server rendering.
Some experimental syntax extensions (e.g. decorators).
CSS Modules.  <---- THIS MEANS TROUBLE
LESS or Sass.
Hot reloading of components.
```

Pick your favorite component, and create a .css file associated with it. For example, if you have an `About.js` file that renders an `<About />` component, create an `About/` folder, move your component, make any necessary changes to where `About.js` was previously referenced, and then add an `About.css` file in that folder as well.

Creating a tiny `.css` file with styles associated with this component explicitly makes writing CSS extremely flexible.

This allows us to require just that part of CSS at the top of our `App.js` file, which will be loaded as a separate piece of CSS directly into style tags in your HTML. Fire up your server and take a look at the elements tab and dig into the `<head></head>` section to see our style.

Why is this good?

One of the more headache inducing aspects of CSS is the concept of "cascading". Using modular CSS means that class names and other style decisions don't overlap each other and your battle with specificity is greatly reduced.

Our JavaScript file(s) requested their appropriate CSS files and that code was embedded in `<style>` tags within our HTML page. This makes our code incredibly modular and easy to read/maintain. Webpack is doing this behind the scenes with the `style-loader`. Then at build time, webpack automatically generates classnames which are exported as a JS object injected into your code.  

There are also valid arguments for not having your CSS served up as embedded style tags. In order to tell Webpack to chill and let the CSS live in external style sheet, we need to install a plugin, [`extract-text-webpack-plugin`](https://github.com/webpack/extract-text-webpack-plugin).

Example:  

```
/* Contact.css */
.header {
  color: pink;
}

/* Contact.jsx */
import styles from './Contact.css';
render() { return (<img className={styles.image}/>) }

/* Rendered DOM */
<img class="Contact__image___1DXA66"/>

/* Processed Thumbnail.css */
.Contact__image___1DA66 {
  color: pink;
}
```

This also means that you can take advantage of normal JavaScript things in your CSS, like `compose` (which feels kind of like using a SASS mixin).

```
.header {
  color: pink;
  font-family: helvetica;
}

.about-paragraph {
  composes: header;
  background: red;
}
```

You can also use props to make dynamic style choices.

```
<Component bgcolor={'#ff0000'} />

//Component.js

let style = {
  backgroundColor: this.props.bgcolor
}

```

### Using Style Objects in React Components

Another option is to define your styles in the component.js file itself which results in what looks like inline HTML.

```
// components/Destination.js

let textStyle = {
  color: 'red',
  backgroundColor: 'purple'
}

const Destination = (props) => {
  return (
    <div className="Destination">
      <h2 style={textStyle}>Destination Page!</h2>
    </div>
  );
}

export default Destination;

// Computed style in HTML
<h2 style="color: red; background-color: purple;">Destination Page!</h2>
```

### Deliverable

Implement at least 2 of the PostCSS plugins in an old (or current) project. Attach a link to the github repo in the comments of [this gist](https://gist.github.com/martensonbj/15dcf5f1487e008f42f7138f9c044171).

Then implement a few more styles using "Inline CSS" either directly in a `Component.js` file or by importing a modular `.css` file and injecting it into your React components.

### Resources
[Searchable PostCSS Catalog](http://postcss.parts/)
[Do We Even Need CSS Anymore?](https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/)  
[Modular CSS with React](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.p0eiv2tix)
