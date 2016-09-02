---
title: Idiomatic CSS
tags: css, cheat-sheet
---
# CSS Sense and Sensibility. 

Your guide to CSS etiquette and maintaining a degree of sanity whilst writing large volumes of CSS. **Thanks and credit to [Nicolas Gallagher](http://nicolasgallagher.com/) who defined and championed consistent and idiomatic CSS organization in the community.**

***

> "Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec." - Idan Gazit

***

# Thou shalt:

#### Generally...

- Establish a consistent style for the code-base and reinforce it on the team. Any code-base should look like a single-person typed it, even when there are multiple contributers.
- Choose existing, common style patterns first, employing deviations only when necessary and for good reason.

#### Whitespace...
- Use whitespace to improve readability.
- Choose between soft indents (spaces) or real tabs. Stick to your choice without fail. (Preference: spaces)
- Choose the number of characters used per indentation level. (Preference: 2 spaces)
- Configure your editor to "show invisibles" or to automatically remove end-of-line whitespace.

#### Format...

- Choose a code format that is easy to read; easy to clearly comment; minimizes the chance of accidentally introducing errors; and results in useful diffs and blames.
- Use one discrete selector per line in multi-selector rulesets.
- Include a single space before the opening brace of a ruleset.
- Include one declaration per line in a declaration block.
- Use one level of indentation for each declaration.
- Include a single space after the colon of a declaration.
- Use lowercase and shorthand hex values, e.g., ```#aaa```.
- Use single or double quotes consistently. Preference is for double quotes, e.g., ```content: ""```.
- Quote attribute values in selectors, e.g., ```input[type="checkbox"]```.
- Where allowed, avoid specifying units for zero-values, e.g., ```margin: 0```.
- Include a space after each comma in comma-separated property or function values.
- Include a semi-colon at the end of the last declaration in a declaration block.
- Place the closing brace of a ruleset in the same column as the first character of the ruleset.
- Separate each ruleset by a blank line.

```
.selector-1,
.selector-2,
.selector-3[type="text"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    font-family: helvetica, arial, sans-serif;
    color: #333;
    background: #fff;
    background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
}

.selector-a,
.selector-b {
    padding: 10px;
}
```

#### Declaration Order

- Order declarations in accordance with a single, simple principle.
- Examples include: order alphabetically, and/or cluster related properties (e.g. positioning and box-model) 
- Bree :sparkling_heart: the below example, where positioning comes first, then box-model (so layout and structure), comes before the aesthetic properties, which can then be ordered alphabetically.

```
.selector {
    /* Positioning */
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Display & Box Model */
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid #333;
    margin: 10px;

    /* Other */
    background: #000;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    text-align: right;
}
```
#### Declaration Order

*Different CSS preprocessors have different features, functionality, and syntax. Your conventions should be extended to accommodate the particularities of any preprocessor in use. The following guidelines are in reference to Sass.*

- Limit nesting to 1 level deep. Reassess any nesting more than 2 levels deep. This prevents overly-specific CSS selectors.
- Avoid large numbers of nested rules. Break them up when readability starts to be affected. Preference to avoid nesting that spreads over more than 20 lines.
- Always place @extend statements on the first lines of a declaration block.
- Where possible, group @include statements at the top of a declaration block, after any @extend statements.
- Consider prefixing custom functions with x- or another namespace. This helps to avoid any potential to confuse your function with a native CSS function, or to clash with functions from libraries.

```
.selector-1 {
    @extend .other-rule;
    @include clearfix();
    @include box-sizing(border-box);
    width: x-grid-unit(1);
    // other declarations
}
```

#### Comments...

- Create a comment style that is simple and consistent. 
- Place comments on a new line above their subject.
- Use "sentence case" comments and consistent text indentation.
- Use comments when needed, not as a crutch to explain everything you are doing. Your code should largely speak for itself.

# Thou shalt NOT:

- Prematurely optimize your code; keep it readable and understandable.
- Mix spaces and tabs for indentation.
- Make a novel out of comments.
