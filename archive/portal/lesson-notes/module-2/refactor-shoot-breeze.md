---
layout: page
---

## Notes from 1608

## General Directions:

[Rules](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/js_refactor_tractor.md#homework)

- Your refactoring buddy will be your teammate(s)
  - You don't have to work together, but you're welcome to
- Minimum 1 PR per project
- Tag another group to review your PR
  - (Alex Pilewski & Nick Chambers) | (Lacey Knaff & Matthew Kaufman & Andrew Crist)
  - (Chelsea Skovgaard & Dale Hendrickson) | (Ian Lancaster & Ryan Westlake)
  - (Christine Gamble & Hilary Lewis) | (Graham Nessler & Gabrielle Procell)
  - (Kristen Burgess & Maia Stone) | (Mike Ziccardi & Kinan Whyte)

## What to Work On

- Refactor something from your Shoot the Breeze project
- You're welcome to work on anything that you're interested in or that was brought up in your eval
  - Note: New features do NOT count as refactoring
  
## Don't Know What to Refactor?

Here's a suggestion from Taylor!

Try breaking repetative pieces like button into one smaller component and making it dynamic.

If you had a submit and a clear button, could you instead have a dynamic 'action' button component?

For example

```
// Application.js

render(){
  return(
  <div>
    <button className='submit' onClick={someFunction}>Submit</button>
    <button className='clear' onClick={someOtherFunction}>Clear</button>
  </div>
  )
}
```

```
// ActionButton.js
  <button className={this.props.className} onClick={this.props.action}>{this.props.buttonText}</button>
```