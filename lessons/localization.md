---
title: Localization / Internationalization
length: 1 hour
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

![chrome language preferences][chrome-language-preferences]

We might need this ranked list if a user's top locale isn't supported by our application. Unfortunately, we can't get all of this information from the client-side, so it's often better to do your detection on the server-side.

[chrome-language-preferences]: /assets/images/lessons/localization/chrome-language-preferences.png

### Server-Side Detection
On the server-side, we can gain access to an entire array of acceptable locales that the user has set in their browser preferences. This will allow us to fall back to a secondary locale if we don't support their first choice. (e.g. if their top locale is Chinese, and their second is Spanish, and our app has not been translated to Chinese, we could still serve up a Spanish version)

Let's take a look at how to do this. We'll create a basic node/express app with a single route:

```javascript
app.get('/', function(req, res) {
  let acceptedLocales = req.header('Accept-Language');
  console.log(`Locales: ${acceptedLocales}`);
});
```

If we now try to hit the root of our application, we'll see our terminal has logged a string that includes all of our ranked locales:

`Locales: es,en-US;q=0.8,en;q=0.6,la;q=0.4`

The `;q=0.8` parameter simply denotes the quality/level of acceptance for this particular locale. (e.g. in this string, a user would prefer an en-US over la).

## Design Patterns & Other Considerations

### URLs
You'll often notice localized applications provide you with a locale identifier directly in the URL. For example, on [Fedex.com](http://fedex.com), you can manually select which location you'd like to view the site in. If we select 'Spain' from the drop down menu, we can see that we actually get redirected to https://spain.fedex.com/#/Main?lang=es. By using a query param in our URL to set the language, we can override any autodetection for locale and have more control over how the site content is displayed. So even if my default browser settings say to prefer English, if I decide I want to view the Spanish version of a website, I can still do that so long as the URL has an identifier in place.

### Images
Avoid using images that include text. Sometimes logos are an exception, but prefer using CSS to position text over images if required.

### RTL Locales
Some languages, such as Arabic, are read right-to-left. Another attribute you might notice on the `html` tag is `dir`. This stands for 'direction' and should either be set equal to `ltr` (left-to-right) or `rtl` (right-to-left). There are significant design implications when localizing a web app for an RTL language. You'll notice if you were to view Wikipedia in Arabic, all of the text is aligned on the right, and almost the entire website is mirrored horizontally:

![rtl-design][rtl-design]

This provides a more familiar layout for RTL readers, although it may look incredibly bizarre to us. Facilitating this mirror image layout is simply a matter of having that attribute on the HTML or body tag of each page. While [you can also use CSS](https://css-tricks.com/almanac/properties/d/direction/), it is recommended to use the HTML attribute in case the CSS fails for any reason (e.g. it does not load, someone has styles turned off)

[rtl-design]: /assets/images/lessons/localization/rtl-design.png

### Dates, Numbers and Currencies
Besides translating our text strings, we also need to keep other data points in mind such as dates, numbers and currencies. These are often formatted differently based on locale, and we want to make sure they read in an appropriate manner. 

### Resources
* [Detecting a User's Locale](http://www.mattzabriskie.com/blog/detecting-locale)
* [Creating Localizable Web Apps](https://developer.mozilla.org/en-US/docs/Web_Localizability/Creating_localizable_web_applications)
