---
title: Sorting Algorithms
length:
tags: sorting, algorithms
---

### Short to Tall
Everyone line up. Let's see how we can sort you all by height.

### Sorting algorithms
Sorting is something that happens all the time in the real world. Sorting by first name, sorting by number of items, sorting by how many times you login or at what time. Luckily there are built-in functions for sorting.

```js
let array = [1,2,9,49,5,24,6,6,33,15]
ar.sort((a,b) => a - b)
= [1, 2, 5, 6, 6, 9, 15, 24, 33, 49]
```

Woot woot thanks JS, sorting is so easy. But when you are trying to get a job, tech interviews looove to ask you to whiteboard sorting algorithms. I was asked to write a merge sort in JS in my tech interview. Which is super annoying since you will really never write your own sorting algorithm on the job, but they want to see if you know fundamental coding principles (data structures, recursion, loops, conditionals). So what's the best way to prepare for sorting? Practice, practice, practice.

I'll start you off with a freebie, which is the good old trusty bubble sort. A bubble sort goes through an array,  compares two elements and swaps them based on a condition (larger or smaller):

```js
bubbleSort = (arr) => {
  if(arr.length < 2) return arr

   var len = arr.length
   for (var i = 0; i <= len-1; i++){
     // Number of loops
     for(var j = 0; j < len-1; j++){
       // Comparing items (big to small)
       if(arr[j] > arr[j-1]){
           var temp = arr[j-1]
           arr[j-1] = arr[j]
           arr[j] = temp
        }
     }
   }
   return arr;
}

var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(bubbleSort(array))
```

 Here is a good visualization tool to see how this works:

### [Visualize sorting](https://visualgo.net/sorting)

## Big-O

![big-O][big-O]

[big-O]: /assets/images/lessons/sorting-algorithms/big-O.png

Big-O is a common term tossed around in interviews that involves lots of math. In basic terms, Big-O refers to the worst-case scenario of the time or resources used (memory or space on disk) to compute an algorithm. Big-O notation is often written as O(n) or O(n^2) or O(n log n). Our friend bubble sort is an O(n^2) algorithm. If our array was perfectly unsorted, it would take n^2 loops (i * j) to sort the array. This isn't a problem for a small set of elements, but once you get to thousands or millions, it's a huge issue. You don't need to know the Big-O of every sorting algorithm, but it's good to be able to speak to the efficiency of algorithms and why different sorting algorithms are better than others.

### Your turn

Implement the insert sort. An insert sort loops through an array, checks if the current element is (larger,smaller) than the previous element. If it is, move to the next previous element and compare again. Once the current element meets the condition, insert it into that position.

### Extra practice

Implement a radix sort, one of the most efficent algorithms.

![radix][radix]

[radix]: /assets/images/lessons/sorting-algorithms/radix-sort.png
