---
title: A First Look at Data Visualization with React
module: 3
---

**Nota Bene**: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```
create-react-app react-visualization
```

## Level One: Implementing a Progress Bar

We'll start with the following vanilla SVG. There is no action step here. Just take a good hard look at it. What do you notice?

```svg
<svg width="600" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect fill="#D0011B" x="0" y="0" width="300" height="40" />
    <rect fill="#50E3C2" x="300" y="0" width="300" height="40" />
  </g>
</svg>
```

Some things to take note of:

- The `viewBox` attribute is used for scaling SVG. It allows you to change the actual width and height of the SVG without having to change all of the values of the child elements.
- SVG looks suspiciously like HTML, but SVG elements technically a different class (`SVGElement` versus `HTMLElement`). Most of the time you can ignore this fact, but sometimes it will bite you. For example, SVGs have special CSS properties (e.g. `fill`) which aren't available for regular HTML nodes. The same is true in reverse.

### Turing It Into a Component

What if we wanted to "React-ify" this SVG in order to use it as a custom component?

```js
const ProgressBar = () => {
  return (
    <svg width="600" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#D0011B" x="0" y="0" width="300" height="40" />
        <rect fill="#50E3C2" x="300" y="0" width="300" height="40" />
      </g>
    </svg>
  );
}
```

Right now, it's pretty static. We can make it a little more dynamic by passing in some properties, I suppose.

```js
const ProgressBar = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#D0011B" x={0} y={0} width={width / 2} height={height} />
        <rect fill="#50E3C2" x={width / 2} y={0} width={width / 2} height={height} />
      </g>
    </svg>
  );
}
```

As it stands, the progress bar only ever shows a 50/50 split. What if we let the whoever was using the component pass in a percentage?

```js
const ProgressBar = ({ width, height, percentage }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#D0011B" x={0} y={0} width={width * (percentage / 100) } height={height} />
        <rect fill="#50E3C2" x={width * (percentage / 100)} y={0} width={width - width * (percentage / 100)} height={height} />
      </g>
    </svg>
  );
}
```

That's a lot of math, but we'll refactor that out in a bit.

What if we made it so that the user could modify the component?

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      height: 40,
      percentage: 50
    };
  }

  render() {
    return (
      <div className="App">
        <ProgressBar {...this.state} />
        <div>
          <input
            type="range"
            min={0}
            max={100}
            value={this.state.percentage}
            onChange={e => this.setState({ percentage: e.target.value })}
          />
          <input
            type="number"
            min={0}
            max={100}
            value={this.state.percentage}
            onChange={e => this.setState({ percentage: e.target.value })}
          />
        </div>
      </div>
    );
  }
}
```

#### Your Turn

Can you make the width and the height of the progress bar adjustable as well?

### Sensible Defaults

If someone omits the width, height, or percentage. It's going to be bad news bears. We could specify that each of these is required.

```js
ProgressBar.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  percentage: React.PropTypes.number.isRequired
};
```

This will also protect us from the user passing in something that is not a number.

In addition, we could specify some defaults as well.

```js
ProgressBar.defaultProps = {
  width: 600,
  height: 40,
  percentage: 50
};
```

#### Your Turn

There is a bug when you adjust the slider or the input field. Can you fix the issue? Why did it happen?

### Refactoring

There is a little bit of room for refactoring here. We have some repeated logic.

```js
const ProgressBar = ({ width, height, percentage }) => {
  const firstHalfWidth = width * (percentage / 100);
  const secondHalfWidth = width - firstHalfWidth;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill="#D0011B" x={0} y={0} width={firstHalfWidth} height={height} />
        <rect fill="#50E3C2" x={firstHalfWidth} y={0} width={secondHalfWidth} height={height} />
      </g>
    </svg>
  );
}
```

### Your Turn: Adding a Range and Overriding Colors

Right now, it takes a `percentage` property. That's cool. But this would be better if we could send in three properties: the minimum value, the current value, and the maximum value.

- The user should be able to use component like this: `<ProgressBar minimumValue={50} maximumValue={200} currentValue={125} />`
- The progress bar should show the current value as a percentage of the way between the minimum value and the maximum value.
- The default values should be 0 for the minimum, 50 for the current value, and 100 for the maximum value.
- The input fields in the `<App />` component should have a `min` and `max` set to whatever you've chosen as your minimum and maximum values. You don't have to get fancy with this.
- The `propTypes` should be set so that everything is a number.
- The developer using the component should be able to optionally send in custom colors. If they choose not to, then the component should use the current defaults.

You may want to take a look at the documentation for [React.PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html#react.proptypes).

## Level Two: Stacked Bars

Your progress bar is pretty good. Nice job. There is a limitation in that it can only divide that bar between two values. It would be cool if we could also render a stacked bar graph. Let's start by making a copy of `<ProgressBar/>`, hollowing it out, and changing the names.

```js
import React from 'react';

const StackedBarGraph = ({ width, height }) => {

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <p>You're amazing graph goes here.</p>
      </g>
    </svg>
  );
}

StackedBarGraph.defaultProps = {
  width: 600,
  height: 40,
};

StackedBarGraph.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};

export default StackedBarGraph;
```

### Using Components as Data Points

One of the things that differentiates our `<StackedBarGraph/>` from `<ProgressBar/>` is that it will have an unknown number of elements. We'll use a component for representing our data points. Unsurprisingly, it will be called `<DataPoint/>`.

```js
import React from 'react';

const DataPoint = () => {};

DataPoint.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.number.isRequired
};

export default DataPoint;
```

It seems pretty simple for now, but we'll be able to take advantage of `PropTypes` and default values in a bit.

(It may seem a little silly to do this now, but in the future we could allow `<DataPoint/>` components to be rendered on the page instead of the `<input>`s we've been using thus far.)

### Setting Up the Application Component

```js
import React, { Component } from 'react';
import Immutable from 'immutable'; // This is for later…
import StackedBarGraph from './StackedBarGraph';
import DataPoint from './DataPoint';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Immutable.List.of(23, 87, 52, 46)
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <StackedBarGraph>
          <DataPoint value={43} />
          <DataPoint value={87} />
          <DataPoint value={29} />
        </StackedBarGraph>
        </div>
      </div>
    );
  }
}

export default App;
```

### Calculating Size

### Your Turn (Already)

Inside of our component, we're going to need a few different numbers. In pairs, let's see if you can figure out how to define the following constants.

- `values`: Should be the result of mapping through all of the children and pulling out `value` from their `props`.
- `sum`: The result of adding together all of the values from the above step.
- `widths`: This should be the width of each segment.
- `startingPoints`: Based on the widths of all of the previous elements, this is where the next segment should start. So, let's say you're on the third element and the previous two have a width of 25 and 30 respectively. The third segment should start at 55. I recommend keeping this to an array of numbers for your own sanity.

### Displaying the Bar Graph

[It's a secret to everyone](https://gist.github.com/stevekinney/b6467eebfd47df100315b8d3e471f2c5).

### A Dynamic Bar graph

We'll use the excellent [Immutable][] by our friends at Facebook (the makers of React in case you forgot), to save ourselves the hassle of jumping through hoops to not accidently mutate objects. You can read more about it [here][auth0imm].

[Immutable]: https://facebook.github.io/immutable-js/
[auth0imm]: https://auth0.com/blog/intro-to-immutable-js/

```js
import React, { Component } from 'react';
import Immutable from 'immutable';
import StackedBarGraph from './StackedBarGraph';
import DataPoint from './DataPoint';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Immutable.List.of(23, 87, 52, 46)
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <StackedBarGraph>
          { data.toArray().map((d, i) => <DataPoint value={d} key={i} />) }
        </StackedBarGraph>
        <div className="inputs">
          { data.toArray().map((d, i) => (
            <input
              type="number"
              value={d}
              key={i}
              onChange={e => this.setState({ data: data.set(i, +e.target.value) })}
            />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
```

### Level Three: Regular Bar Graph

![Interactive Bar Graph](http://g.recordit.co/8Kk2T3HIiS.gif)

Some tips:

- Be okay with it rendered upside down at first.
- You should _barely_ need to change the `<App/>` component. The only real change is swapping out the name of the component.
- It's simpler than the stacked bar graph. You can use the previous example as a template.
