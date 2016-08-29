---
title: Setting Up Sass Locally
tags: css, sass, scss, setup
---

Sass will watch for any files with a `.scss` or `.sass` extension and compile them into `.css` files for you.

### You should continue reading if...
  - You have a basic html/css/js structure
  - You have NOT integrated node, webpack, or other fancy package managers (they have their own set uÂp rules)

### Verify That You Have Ruby
  The most common way to install Sass is by using Ruby.  

  If you are on a mac, your computer comes with the Ruby programming language ready to go.  

  You can verify this by typing `ruby -v` in your terminal.  

  You should see an output like `ruby 2.3.0p0`, indicating the version you currently have installed. If you see something else, go find documentation on how to install Ruby.

### Install Sass

  In the terminal, install Sass locally with the command `gem install sass`. (You might need to write `sudo gem install sass`).  
  You should see a bunch of output, with `1 gem installed` somewhere in there.

### Put Sass to Work
  Tell Sass to watch for any changes to `.sass` or `.scss` files in a certain directory with this command:  

  `sass --watch path/to/targe-directory`  

  Example: `sass --watch ~/my_project/lib/styles`. This will watch that directory.

  If there is an existing `.scss` file it will automatically compile it into `.css` for you, and continuously re-compile any time a change is made.

  If there are no existing files, it will wait until you create a `.scss` file and then immediately compile it to `.css`.

  After running the watch command, you'll see an outut similar to this:
```
sass --watch ~/project/lib/styles
>>> Sass is watching for changes. Press Ctrl-C to stop.
```
  If I then create a `.scss` file I will see this:

```
touch test/styles.scss
>>> New template detected: test/styles.scss
    write /Users/brennamartenson/test/styles.css
    write /Users/brennamartenson/test/styles.css.map
```
  Notice how `.css` files are created automatically.

### What if I want to keep the `.scss` files and `.css` files in different directories?
That's cool. Run this version of the watch command:  

`sass --watch ~/scss-temp-folder:~/project/lib/styles`  

This is saying to watch for any changes or creation of `.scss` files in `~/scss-temp-folder`, but compile and save the `.css` files in `~/project/lib/styles` instead.

### To Watch A Specific File
If you only care about a particular file, not an entire directory, simply specify that file in the watch command.  

`sass --watch ~/project/lib/styles/variables.scss`

#### Happy Sassing.











module.exports = {
  accountParser: AccountParser;
  thing: 
}
