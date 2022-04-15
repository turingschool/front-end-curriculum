# Front End Curriculum

This is a small static Jekyll site that contains the front end program's lessons and projects.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Getting Started

### Prerequisites

In order to get this repo up and running you will need to have Ruby 2.4.7 installed and active. 

Install Homebrew if you don't already have it:  

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow prompts if necessary (you may need to enter your computer password, as well as run a few scripts prompted in the terminal output).

Install Ruby Version Manager:  

```shell
\curl -sSL https://get.rvm.io | bash -s stable
```

Install Ruby version 2.7.4 using RVM:  

```shell
rvm install 2.7.4
```

You will also need the `bundler` and `jekyll` gems installed.

```shell
gem install bundler
gem install jekyll
```

### Installing

Once you have Ruby, Bundler, and Jekyll installed, you can install dependencies by running:

```shell
bundle
```

And after all dependencies are installed, you can run the following to start your local server on port 4000:

```shell
bundle exec jekyll serve
```


### Styling Your Lesson Plans

You can add styled boxes to your lesson plans for different areas of content.

#### Standard Box:

```html
<section class="call-to-action">
### In Your Notebook

What would you expect to be logged when we get to line 10? Why?
</section>
```

Will result in the following styled box:

![styled-box](https://user-images.githubusercontent.com/17582916/60548262-e75fd180-9cde-11e9-8964-03c4ee6152d9.png)

#### Answer/Solution Box:

The heading in the answer box *must be an h3*. You can include any text within the section after that

```html
<section class="answer">
### The Answer  

Here is an answer to the On Your Own section...
</section>
```

Will result in the following styled box:

![collapsed answer](https://user-images.githubusercontent.com/17582916/72355972-a725d680-36a5-11ea-8755-077ebf0d34dc.png)

![expanded answer](https://user-images.githubusercontent.com/17582916/72356019-be64c400-36a5-11ea-87e6-a5a7310db2bc.png)

#### Note Box:

```html
<section class="note">
### Note

This hoisting behavior adds some complexity to the JavaScript language, and is important to understand thoroughly in order to anticipate the values of your variables at any given time.
</section>
```

![note-box](https://user-images.githubusercontent.com/17582916/60548280-f2b2fd00-9cde-11e9-848c-6d58f4b6ebde.png)

#### CFU/Exit Ticket Box:

```html
<section class="checks-for-understanding">
### Exit Ticket

What are 3 easy and actionable accessibility steps you can take in all of your projects from here on out?
</section>
```

![cfu-box](https://user-images.githubusercontent.com/17582916/60548305-ff375580-9cde-11e9-9e06-739244d68973.png)

**DO NOT INDENT YOUR MARKDOWN** within the section tag, or else it will not work.


### Algolia Search

The site uses [Algolia](https://www.algolia.com/dashboard) for search indexing. To re-index the search when new lessons are added or lessons are removed, run this 
command in your terminal at the root of the curriculum directory:

```shell
ALGOLIA_API_KEY=admin_api_key jekyll algolia push
```

Where `admin_api_key` is replaced with the actual admin API key found in the Algolia account dashboard.
