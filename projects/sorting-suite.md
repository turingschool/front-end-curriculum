---
title: Sorting Suite
---

# Sorting Suite

Sorting algorithms are one of the common domains for studying Computer Science data structures and algorithms. They give us an opportunity to focus on algorithms of various complexity all solving a relatively simple problem.

In this project, you are challenged to implement *four*
fundamental sorting algorithms. Your final submission should include at least these eight files:

* `bubbleSort.js`
* `bubbleSort-test.js`
* `insertionSort.js`
* `insertionSort-test.js`
* `mergeSort.js`
* `mergeSort-test.js`
* `quickSort.js`
* `quickSort-test.js`

For your testing start with testing small arrays of numbers and/or letters.
For more advanced testing you will need to generate arrays of numbers to see how large of an array your different
sorting algorithms can sort.

You will use this [repo](https://github.com/turingschool-examples/tdd).

## 1. Bubble Sort

### Big Picture

Bubble Sort is often one of the first algorithms of any kind that programmers attempt. There are very few steps which make it not too difficult to implement. But it takes many instructions to actually execute -- so the performance is typically quite bad.

### The Algorithm

You can see a [graphical run of the algorithm here](https://vimeo.com/channels/sortalgorithms/15558527).

For a high level understanding check out the [wikipedia article](https://en.wikipedia.org/wiki/Bubble_sort).

Bubble sort works by moving through an array of data and iteratively moving the largest number to the end of the array.

Our goal is always to move the largest number to the end of the array. We can accomplish this by starting at the beginning of the array and checking the first two elements to see if the first element is larger than the second element

```
|  |
v  v
5  0  1  3  4  2
```

Since 5 is larger than 0 the numbers would be swapped.

```
|  |
v  v
0  5  1  3  4  2
```

Now the next two numbers can be compared

```
   |  |
   v  v
0  5  1  3  4  2
```

As we move down the array the `5` bubbles up until it is at the end of the array.

```
0  5  1  3  4  2
0  1  5  3  4  2
0  1  3  5  4  2
0  1  3  4  5  2
0  1  3  4  2  5
```

#### Richer Example

Let's look at the sequence for a more out-of-order sequence:

Each iteration the largest number bubbles to the top


[ **5**, 4, 3, 2, 1 ]  
[ 4, **5**, 3, 2, 1 ]  
[ 4, 3, **5**, 2, 1 ]  
[ 4, 3, 2, **5**, 1 ]  
[ 4, 3, 2, 1, **5** ]  

[ **4**, 3, 2, 1, 5 ]  
[ 3, **4**, 2, 1, 5 ]  
[ 3, 2, **4**, 1, 5 ]  
[ 3, 2, 1, **4**, 5 ]  
[ 3, 2, 1, 4, 5 ]  

[ **3**, 2, 1, 4, 5 ]  
[ 2, **3**, 1, 4, 5 ]  
[ 2, 1, **3**, 4, 5 ]  
[ 2, 1, 3, 4, 5 ]  
[ 2, 1, 3, 4, 5 ]  

[ **2**, 1, 3, 4, 5 ]  
[ 1, **2**, 3, 4, 5 ]  
[ 1, 2, 3, 4, 5 ]   

## 2. Insertion Sort

### Big Picture

Insertion sort is a next step up from Bubble Sort.

Insertion sort uses slightly more complex logic but the algorithm is generally much higher performing than Bubble.

### The Algorithm

You can [see a visualization of the algorithm here](https://vimeo.com/channels/sortalgorithms/15558983).

For a high level understanding check out the [wikipedia article](https://en.wikipedia.org/wiki/insertion_sort).

Insertion sort works by adding items to a sorted array. Typically sorting is done in place inside the array which needs sorting. The first element in the array becomes the sorted array. We iterate through the set to be sorted, pulling one element at a time, then inserting it into its correct position in the sorted section of the array.

Let's start with this array of numbers: `[ 1, 0, 4, 3, 2 ]`

#### Pass 1

A list with only one item is always sorted, so we start our sorted list with the first element in our array:

```
original array: [ 1, 0, 4, 3, 2 ]

                [ sorted        | unsorted   ]
original array: [ 1,            | 0, 4, 3, 2 ]
```

#### Pass 2

We pull the first unsorted element, the `0`, and compare it to the last element of the sorted set, `1`. Since `0` is less than `1`, we swap it with the `1`:

```
unsorted:      [0, 4, 3, 2]
to insert:     0

                [ sorted        | unsorted   ]
before insert:  [ 1,            | 0, 4, 3, 2 ]

                [ sorted        | unsorted   ]
after insert:   [ 0, 1,         | 4, 3, 2    ]

```

#### Pass 3

We pull the first unsorted element, the `4`, and compare it to the last element of the sorted set, `1`. Since `4` is greater than `1`, we add the `4` to the end of the sorted array.

```
unsorted:      [4, 3, 2]
to insert:     4

                [ sorted        | unsorted   ]
before insert:  [ 0, 1,         | 4, 3, 2    ]

                [ sorted        | unsorted   ]
after insert:   [ 0, 1, 4,      | 3, 2       ]
```

#### Pass 4

We pull the first unsorted element, the `3`, and compare it to the last element of the sorted set, `4`. Since `3` is less than `4`, we swap the `3` and `4`. We then compare the `3` with the previous position of the sorted set, `1`. Since `3` is greater than `1` we have the `3` in the correct position.

```
unsorted:      [3, 2]
to insert:     3

                [ sorted        | unsorted   ]
before insert:  [ 0, 1, 4,      | 3, 2       ]

                [ sorted        | unsorted   ]
after insert:   [ 0, 1, 3, 4,   | 2          ]
```

#### Pass 5

We pull the first unsorted element, the `2`, and compare it to the last element of the sorted set, `4`. Since `2` is less than `4` we swap the `2` and `4`. We then compare the `2` with the previous position of the sorted set, `3`. Since `2` is less than `3`, we swap the `2` and `3`. Then we look at the previous position of the sorted set, `1`. Since `2` is greater than `1` we have the `2` in the correct position.

```
unsorted:      [2]
to insert:     2

                [ sorted        | unsorted   ]
before insert:  [ 0, 1, 3, 4,   | 2          ]

                [ sorted        | unsorted   ]
after insert:   [ 0, 1, 2, 3, 4 |            ]
```

Since we have no more elements in the unsorted section of our array, we are done with the algorithm.


## 3. Merge Sort

Merge sort is much faster than bubble and insertion sort. It typically has two parts
1: a merge function which takes two sorted arrays and merges them into one sorted array
2: a mergeSort function which splits an unsorted array into pieces so that they can be sorted. 

It can be solved elegantly with a recursive solution.

### Theory

[Sorting Algorithms Video](https://vimeo.com/channels/sortalgorithms/15559012)

[Merge Sort Chart](http://3.bp.blogspot.com/-WmOzCucMWaI/UxzUCnQslTI/AAAAAAAACLI/fjOMo-bUEbE/s1600/Merge+sort+algorithm+diagram.png).

For a high level understanding check out the [wikipedia article](https://en.wikipedia.org/wiki/merge_sort).

For a sweet line dancing example, [see this](https://www.youtube.com/watch?v=XaqR3G_NVoo)

Merge sort can be thought of as splitting an array into two arrays and sorting the halves by also splitting them in half and sorting those halves by splitting them in half... and so on.

The goal of the splitting is to get down to an array with only one item in it. Arrays with one item are sorted and can be merged with other sorted arrays to create larger sorted arrays.

For a brief example let's look at a simple array. The first step would be to
split the array into smaller arrays.

#### Split the arrays

```
original_array:  [2, 0, 1, 3]
first_split:     [2, 0]
remaining_split: [1, 3]
```

We then proceed to split one of those arrays further until we are left with just numbers to compare.

#### Split again

```
first_split: [2, 0]
first_num:   2
second_num:  0
```

We then compare those numbers and put them back into an array together. 2 and 0 will swap, creating a sorted split array.

#### Sort the doubly split array

```
sorted_first_split: [0, 2]
remaining_split:    [1, 3]
```

We do the same operation on the remaining split, but we it's already sorted so there will be no change. We then merge these two sorted halves together to create a final sorted array. This is accomplished by comparing the each element in the first split to those in the remaining split.

#### Merge the split and sorted arrays

```
first_split_candidates:     0, 2
remaining_split_candidates: 1, 3
first_combination:          0, 1
second_combination:         0, 1, 2
third_combination:          0, 1, 2, 3
merged_array:               [0, 1, 2, 3]
```

## 4. Quick Sort
With quick sort we take an array and choose one of the indexes as a pivot.
We then want to move all the elements larger than the pivot to the right of the pivot and all the items smaller than the pivot to the left.

After moving all the elements to either side of the pivot our pivot will be in the correct spot. Now all the larger elements can be quick sorted and all the smaller elements can be quick sorted.

Each time you call quick sort it will return a sorted array that will need to be recombined with any previous pivots.

Example of one iteration.
```
                     p
[ 9, 8, 5, 2, 1, 6, (3) ]  


// Move larger elements to the right of the pivot
// Move smaller elements to the left of the pivot
               
         p
[ 2, 1, (3), 9, 8, 5, 6 ]
```
Our pivot is in its final location.

We can now use a recursive solution to quick sort all the numbers on each side of our pivot.

something like...
```
quickSort([2, 1]);
    
    p
[2, 1]

// move larger and smaller elements
    p
[1, 2]

// quickSort([1]) 
// since an array of one item is already sorted, return array

quickSort([9, 8, 5, 6])

          p
[9, 8, 5, 6]

// move larger and smaller elements
    p
[5, 6, 8, 9]

// quicksort([5])
// quicksort([8, 9])
```

### Extension
Use your favorite sorting algorithm to reimplement the functionality of [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Evaluation

The evaluation will be pass/fail.

You will be need to be able to explain any of the four sorting algorithms using numbered cards.

You will need to be able to write either quick sort or merge sort after explaining how it works.

### Testing Requirements

To stress test your sorting algorithms you will need to sort large arrays of random numbers. You will need to create a function to generate large arrays of random numbers.

In your tests see how large of an array you can consistently sort before the test times out.

We will look at your tests to determine if they are sufficient.