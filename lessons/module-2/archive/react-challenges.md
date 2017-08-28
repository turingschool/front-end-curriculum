---
title: React Challenges
length: 90
module: 2
tags: React, challenge
---

# React Challenges

## What to Build On

- [Our Template React Starter Kit](https://github.com/turingschool-examples/react-starter-kit)
- [The create-react-app module](https://github.com/facebookincubator/create-react-app)
  - [Walkthrough here](http://frontend.turing.io/lessons/unit-testing-react.html)
- [Codepen Playground](http://codepen.io/chriscoyier/pen/BGFhn)

# Challenge 1: DnD Die

- As a user on the first page of your app
  - I will see a 20 sided die
    - If I click that die, I will see a die rolling animation
      - and when the die animation roll is complete, I will see a random number between 1 - 20
        - and if the number is a 1
          - I will see 'Critical Fail'
        - and if the number is a 2
          - I will see 'Critical Hit'
  - I will also be able to change my die to other side quantities (6 sided, 12 sided, etc)
    - the die animation and critical hit, fail behavior will be adjusted accordingly

# Challenge 2: Create a Shop

- As a user on the first page of your app
  - I will see a series of images for items I can order
    - Each item component will have
      - An image
      - An image description
      - A price
      - A button to purchase
  - I will see a shopping cart icon at the top right
    - When I have not ordered anything, the icon will show `$0`
  - and if I click the buy button on an order
    - then the item I have clicked will be removed from the page
    - and the total shown beside my shopping cart will be incremented by the price of the item clicked

# Challenge 3: Weathrly+

- As a user on the first page of my app
  - I will see a block representing the 7 day forecast for Denver
    - each block element will contain
      - A color background that relates to the high temp for the day (if 70, orange, if 75, a slightly darker orange, if 90, red, if 30, blue, etc)
    - centered text containing the high and low for the day
    - an image that represents what level of clothing you should wear for the forecast
      - a sweater for a cool fall day
      - an umbrella for a rainy day
      - a bathingsuit for 90 and above, etc

- For this challenge, you can play with using a real api: https://www.wunderground.com/weather/api/
- OR make a js file that populates a bunch of fake data that you can use instead

# Challenge 4: Convert Your Personal Site to use React

# Challenge 5: Practice Testing with Mount

If you'd rather not fight getting enzyme set up - feel free to use the [react-testing-with-stubs](https://github.com/turingschool-examples/react-testing-with-stubs) repo and add more test files and more random components

Write silly components that will allow you to use the following enzyme API methods.

### [mount](http://airbnb.io/enzyme/docs/api/mount.html)

- [debug()](http://airbnb.io/enzyme/docs/api/ReactWrapper/debug.html)
  - this is not something you'd write a test with, but practice debugging elements if you haven't already
- [.hasClass()](http://airbnb.io/enzyme/docs/api/ReactWrapper/hasClass.html)
- [.html()](http://airbnb.io/enzyme/docs/api/ReactWrapper/html.html)
- [.props()](http://airbnb.io/enzyme/docs/api/ReactWrapper/props.html)
- [.state()](http://airbnb.io/enzyme/docs/api/ReactWrapper/state.html)
- [.contains()](http://airbnb.io/enzyme/docs/api/ReactWrapper/contains.html)
- [.setState()](http://airbnb.io/enzyme/docs/api/ReactWrapper/setState.html)
- [.simulate()](http://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html)
- [.filter()](http://airbnb.io/enzyme/docs/api/ReactWrapper/filter.html)
 