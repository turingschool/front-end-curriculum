```js
const denver = {
   elevation: 5280,
   mayor: "Michael Hancock",
   neighborhoods: [
     "LoDo",
     "Five Points",
     "Cap Hill",
     "East Colfax",
     "RiNo",
     "Wash Park",
     "Uptown",
     "City Park",
     "Speer",
     "Highlands",
     "Globeville",
     "Congress Park",
     "Golden Triangle",
     "Berkeley"
   ],
   buildings: {
    commercial: [
      { name: "707 17th Street", floors: 42, completed: 1981, height: 552 },
      { name: "1125 17th Street", floors: 25, completed: 1980, height: 363 },
      { name: "1600 Glenarm Place", floors: 32, completed: 1967, height: 352 }
    ],
    historical: [
      { name: "Avoca Lodge", floors: 2, completed: 1897, height: 24 },
      { name: "Brown Palace Hotel", floors: 9, completed: 1892, height: 100 },
      { name: "Denver Public Library", floors: 6, completed: 1995, height: 12 }
    ],
    athletic: [
      { name: "Coors Field", floors: 4, completed: 1995, height: 64 },
      { name: "Sports Authority Field at Mile High", floors: 8, completed: 2011, height: 112 },
      { name: "Pepsi Center", floors: 5, completed: 1999, height: 68 }
    ],
    entertainment: [
      { name: "Cherry Creek Shopping Center", floors: 2, completed: 1953, height: 30 },
      { name: "Casa Bonita", floors: 2, completed: 1974, height: 44 },
      { name: "Denver Museum of Nature and Science", floors: 5, completed: 1900, height: 54 }
    ],
    medical: [
      { name: "Saint Joseph Hospital", floors: 12, completed: 1873, height: 120, beds: 365 },
      { name: "Denver Health Medical Center", floors: 9, completed: 1860, height: 100, beds: 477 },
      { name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368 }
    ]  
  },
  restaurants: [
    { name: "Fruition Restaurant", type: "Fine Dining", number_of_reviews: 788 },
    { name: "Sushi Den", type: "Fine Dining", number_of_reviews: 479 },
    { name: "Sam's No. 3", type: "Cheap Eats", number_of_reviews: 1870 },
    { name: "Pete's Kitchen", type: "Cheap Eats", number_of_reviews: 236 },
    { name: "Root Down", type: "Lunch", number_of_reviews: 972 },
    { name: "The Capital Grille", type: "Lunch", number_of_reviews: 531 },
    { name: "Acorn", type: "Dinner", number_of_reviews: 309 },
    { name: "Panzano", type: "Dinner", number_of_reviews: 1316}
  ],
  breweries: [
    { name: "Little Machine Brwe", neighborhood: "Highlands", number_of_beers: 20 },
    { name: "Alpine Dog Brewing Company", neighborhood: "East Colfax", number_of_beers: 12 },
    { name: "Spangalang Brewery", neighborhood: "Five Points", number_of_beers: 8 },
    { name: "Great Divide", neighborhood: "RiNo", number_of_beers: 24 },
    { name: "10 Barrel Brewery", neighborhood: "RiNo", number_of_beers: 30 },
    { name: "LowDown Brewery", neighborhood: "Cap Hill", number_of_beers: 14 },
    { name: "Call to Arms", neighborhood: "Highlands", number_of_beers: 7 },
    { name: "Denver Beer Co.", neighborhood: "LoDo", number_of_beers: 22 },
    { name: "Black Shirt Brewing", neighborhood: "Five Points", number_of_beers: 8 },
    { name: "Bull and Bush", neighborhood: "Speer", number_of_beers: 18 }
  ]
}
```

## Calculations
* Calculate the total height of all Denver buildings completed between 1900 and 1990
* Calculate the frequency of every letter used to spelling all of the Denver neighborhoods
* Is the number of beds in Denver medical buildings summed with five times the total number of floors of all buildings greater or less than the elevation of Denver?
* Calculate the average number of reviews for each type of restaurant in Denver
* Calculate the number of beers per each Denver neighborhood
