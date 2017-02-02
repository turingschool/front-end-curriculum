---
title: Localization / Globalization
length: 2 hours
tags: language, accessibility, localization, globalization, l10n, l18n
module: 4
---

### Goals

By the end of this lesson, you will:

* know the difference between localization and internationalization
* be able to accurately detect a user's locale and serve up an appropriate translation
* understand the strategies and patterns that make an app easily localizable

## What is Localization/Internationalization?
Localization is the process of adapting an existing website to local language and culture. Internationalization describes the patterns, strategies and conventions an application should use in order to facilitate easier localization in the future. While not every app you build will need to be localized, it's important to keep internationalization strategies in mind when building an app that may need to reach wider audiences in the future.

Many people mistakenly believe localization simply refers to rendering the page text in multiple languages. In reality, it's a bit more involved than that.

You'll often hear of these terms alongside their library counterparts: l10n and i18n. l10n is a localization library, where the name represents the 10 letters in between 'l' and 'n' in the word. i18n is an internationalization library, named in the same fashion. There are many of these libraries out there and have been known to be difficult.

https://github.com/mozilla/i18n-abide
https://github.com/eligrey/l10n.js


## Detecting a User's Locale
If we want to localize our application, the first thing we need to do is detect what locale your user prefers. A locale denotes a bit more than just language -- it also signifies cultural preferences in how the language should be expressed.

Locales are formatted as `language[-region]`. So for example, `en` represents the English language, while `en-US` represents English in the United States, and `en-GB` represents English in Great Britain. Differences you'd notice per region in this example might be that words like 'favorite' would be spelled 'favourite' if you are in the `en-GB` locale.

### Client-Side Detection
We can detect the user's language preference on the client-side, though we have to be aware of differences among browsers. For example:

```javascript
// IE
if (navigator.browserLanguage) {
    console.log(navigator.browserLanguage);
}
// All other vendors
else if (navigator.language) {
    console.log(navigator.language);[]
}
```

If you log `navigator.language` in your browser console, you'll likely get a string back that says 'en-US'. This locale value is what we'd like to reference when trying to determine what language to display our application in.

Besides having to account for differences among browsers, detecting the locale on the client-side only gives us a single locale. In reality, most browsers support ranking multiple languages in your preference settings:

[chrome settings image]

We might need this ranked list if a user's top locale isn't supported by our application. Unfortunately, we can't get all of this information from the client-side, so it's often better to do your detection on the server-side.

### Server-Side Detection

## Design Patterns & Other Considerations
### RTL Locales
### Dates, Numbers and Currencies

### Resources
* [Detecting a User's Locale](http://www.mattzabriskie.com/blog/detecting-locale)
* [Creating Localizable Web Apps](https://developer.mozilla.org/en-US/docs/Web_Localizability/Creating_localizable_web_applications)
