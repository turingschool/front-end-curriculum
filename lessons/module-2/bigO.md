## Big-O

##### What is Big-O?

Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

#### Factors in determining complexity

- Number of comparisons
- Amount of space used in memory

### Big-O Cheatsheet
![Big-O Complexity](http://img.blog.csdn.net/20160808182540759)

```
        | 0( log n )  | 0( n ) |	0( n^2 )   | 0( 2^n )
------------------------------------------------------------
100     |     2	      |    100 |	    10,000 | 1.27E+30
------------------------------------------------------------
1000	|     3	      |  1,000 |     1,000,000 | 1.07E+301
------------------------------------------------------------
10000	|     4	      | 10,000 |	  1.00E+08 | 1.07E+3010
------------------------------------------------------------
```
### Big-O Examples

#### O(1)

```
var randomNumbers = [ 10, 2, 9, 15, 22 ];

function isFirstElementNumber(array) {
  return typeof array[0] === 'number';
}

isFirstElementNumber(randomNumbers);
```

#### O(n)

```
var randomNumbers = [ 10, 2, 9, 15, 22 ];

function doesNumberExist (array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }
  return false;
}

doesNumberExist(randomNumbers, 27);
```

#### O(n^2)
```
var randomNumbers = [ 10, 2, 9, 15, 22 ];

function containsDuplicates (array, number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}
containsDuplicates(randomNumbers, 27);
```

#### O(2^n)

```
var randomNumbers = [ 10, 2, 9, 15, 22 ];

function fibonacci(number) {
  if (number <= 1) {
    return number;
  }

  return fibonacci(number - 2) + fibonacci(number - 1);
}

fibonacci(20)
```


#### Resources
- [Big-O Cheat Sheet](http://bigocheatsheet.com/)
- [Beginners Guide to Big-O](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [Big-O Misconceptions](http://ssp.impulsetrain.com/big-o.html)
- [Algorithmic Complexity](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html)
