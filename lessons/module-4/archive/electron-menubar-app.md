---
title: Creating a Menubar Electron App
module: 4
status: draft
---

## Getting Set Up

[Pull down my Tide Tracker app](https://github.com/Alex-Tideman/tide_tracker)

## The Case for a Menubar App

So far we have been creating desktop apps that pop up with a window and a menu item the app drawer. Very Slack-ish. These kinds of apps are great for pulling up in a search or clicking on the icon in the drawer, doing a chunk of work that could vary greatly from each session and then exited out.

What if you wanted an app that was always accessible and instantly appeared on a click, highly focused functionality that can be accomplished quickly and frequently, and also had the ability to run background tasks? It sounds like you want a menubar app.

### Group Discussion
Take a look at your current menubar. What apps are in it? What do they all have in common?

### Getting Started

```js
$ npm i --save menubar
```

Menubar provides us with a high-level abstraction of an Electron menu object. You can provide it with default values such as an icon, index.html file, height, width, and always keep on top. You also get a lot of the same event listeners as the app module in Electron like 'ready', 'after-create-window', 'show', and 'after-close'. However with a bit of hacking, you can use all the features of a BrowserWindow with menubar. I will show you an example of how to do that a little later.

First things first, let's require menubar and create an instance of Menubar.

```js
const Menubar = require('menubar')
const menubar = Menubar({
  width: 400,
  height: 500,
  icon: './images/icon.png'
})
```

Here we are creating a menubar with a default width and height and icon. It will automatically position itself directly below it's icon. Let's create a couple of listeners on the 'ready' and 'after-create-window' events. Note that we want to load our index.html file on the 'after-create-window' because our menubar app shouldn't show until we click on the icon to trigger a window creation.

```js
menubar.on('ready', function () {
  console.log('Application is ready!')
})

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
})
```

### Make Firesale A Menubar Application
Take the next 10 minutes to turn Firesale into a menubar app. Does it work like before? What is broken?

### Hacking a Menubar
Unlike Firesale, we can't require remote in our renderer.js and call remote.getCurrentWindow(). Our menubar uses a BrowserWindow under the hood but because it is a high-level abstraction, getCurrentWindow() doesn't find our menubar app. Bummer. But because it's a menubar app, we aren't going to be opening lots of other windows.

We can leverage the BrowserWindow under the hood to do some cool things with this app. When I first started out making this app, I wanted to be able to show different timelines based on the size of the menubar app. I was able to do this with a little bit of hacking.

You can listen on the 'resize' event for the menubar window and send the bounds of the window to the renderer process (along with my history data).

```js
menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
  menubar.window.on('resize', () => {
    menubar.window.webContents.send('resized' ,
      { data: fullHistory, bounds: menubar.window.getBounds() }
    )
  })
});
```

Cool, now let's wire up the renderer and limit the chart to show only certain dates based on the bounds.

```js
ipcRenderer.on('resized', (event, data) => {
  showWeekChart(data.data, data.bounds.width)
})
```

I'm giving the showWeekChart an additional argument, so I need to account for that. I'll default the width to 400 because that's the width of the app when it initially shows the window. If the width is below 600, I want to show only the last five days. If it's great than 600, I want to show the full history.

```js
// charts.js
const $ = require('jquery');
const Chart = require('Chart.js')
const { getChartData } = require('./dataChartObject')

const showWeekChart = exports.showWeekChart = (data, width = 400) => {
  $('.weekly-chart').show()

  let days = data['my_life']
  let labels = days.map((day) => {
    return Object.keys(day)[0]
  })

  if(width < 600) {
    labels = labels.slice(labels.length - 5, labels.length)
  }

  let dayChartData =[]
  days.forEach((day) => {
    let dayData = day[Object.keys(day)[0]]
    for(var key in dayData) {
      dayChartData.push(parseInt(dayData[key]))
    }
  })


  const ctx = $("#weekChart");
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: getChartData(dayChartData, width)
      },
      options: {
          spanGaps: true,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: 'rgba(235, 235, 235, 1)',
              fontSize: 10
            }
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}
```


We also need to pass width to our dataChartObject to limit
the data we give to the chart.

```js
// chartDataObject.js

const greenBar = 'rgba(76, 195, 85, 0.2)'
const blueBar = 'rgba(17, 204, 238, 0.2)'
const yellowBar = 'rgba(255, 187, 17, 0.2)'
const greenBorder = 'rgba(76, 195, 85, 1)'
const blueBorder = 'rgba(17, 204, 238, 1)'
const yellowBorder = 'rgba(255, 187, 17, 1)'

const getChartData = exports.getChartData = (dayChartData, width) => {
  let totalDays
  if(width < 600) {
    totalDays = 5
  }
  if(width > 500) {
    totalDays = dayChartData.length / 15
  }

  const getCategoryData = (n) => {
    const points = []
    for(let i = 0; i < totalDays; i++) {
      points.push({x: (-10 + (i*10)), y: dayChartData[n + i*(15)]})
    }
    return points
  }

  return [
    {
      label: 'Chilling',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(0)
    },
    {
      label: 'Coding',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(1)
    },
    {
      label: 'Dog',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(2)
    },
    {
      label: 'Experiencing',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(3)
    },
    {
      label: 'Friends',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(4)
    },
    {
      label: 'Fruits',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(5)
    },
    {
      label: 'Hike',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(6)
    },
    {
      label: 'Meditating',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(7)
    },
    {
      label: 'Pushups',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(8)
    },
    {
      label: 'Reading',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(9)
    },
    {
      label: 'Running',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(10)
    },
    {
      label: 'Sleep',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(11)
    },
    {
      label: 'Walking',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(12)
    },
    {
      label: 'Veggies',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(13)
    },
    {
      label: 'Watching',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(14)
    }
  ]
}
```


There is a serious bug with my 'resize' listener in the main process. It triggers the webContents.send so many times that my app can't keep up with the rerenders. So let's implement a setTimeout to only trigger the send every 150 ms.


```js
menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
  menubar.window.on('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      menubar.window.webContents.send('resized' , {data: fullHistory, bounds: menubar.window.getBounds()});
    }, 150);
  })
});
```

Awesomeness, now check it out. Expand that window and watch our data grooooow.
