# Front End Curriculum

This is a small static Jekyll site that contains the front end program's lessons and projects.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Getting Started

### Prerequisites

In order to get this repo up and running you will need to have Ruby 2.4.1 installed and active. You will also need the `bundler` and `jekyll` gems installed.

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

### Algolia Search

The site uses [Algolia](https://www.algolia.com/dashboard) for search indexing. To re-index the search when new lessons are added or lessons are removed, run this 
command in your terminal at the root of the curriculum directory:

```shell
ALGOLIA_API_KEY=admin_api_key jekyll algolia push
```

Where `admin_api_key` is replaced with the actual admin API key found in the Algolia account dashboard.
