---
title: Linked Lists
length: 180 min
module: 2
tags: linked list, javascript, doubly linked list, circular linked list, tdd, data structure
---

## Learning Goals

* Students will have a basic familiarity with the idea of abstract data structures
* Students will understand some context of why Linked Lists matter
* Students will have implemented the basic functions of a Linked List in JavaScript

## Materials Needed

* Printed Hash Maps
* 12 post-its, 8 index cards, 8 wikisticks per student

## Structure

* Warmup - 5 minutes
* Context-Building (Lecture) - 50 minutes
* Node Modeling - 25 minutes
* Implementing (Pairs) - 55 minutes
* Review - 25 minutes

## Warmup - 5 minutes

How many data types can you list? Write out the names.

## Context-Building - 45 minutes

* How do our programs actually run?
* Review the idea of an execution stack: hardware, operating system, virtual machine process, your code
* The *virtual machine* is the home for your application. It does jobs like:
  * Keeping track of data (local variables, instance variables, etc)
  * Keeping track of execution (using the stack to know which function called which and where to return to)
  * Coordinating resource requests with the operating system (get more memory, get CPU access, etc)
* The *heap* is where the virtual machine stores your data

### The Heap

* The heap is a collection of available memory
* You could draw it like a collection of binary bits -- draw 32 spaces and break them into four segments of 8 bits, now each is a byte
* Each byte has an address -- add an index 0, 1, 2, 3 to the four bytes
* Store some values into those spots
  * 218 = 11011010
  * 86  = 01010110
  * 144 = 10010000
* Reasoning about this long string of binary digits is hard, so we create abstract models to describe it more easily
* Think of the heap as a vertical stack of rectangles -- draw 4 rectangles with the indexes
* Each spot is a small bit of memory
* Fill the decimal values 218, 86, and 144 into the same slots as used before

Make sense for simple data? Let's do a little exercise:

#### Check Your Understanding

* Draw a head with four boxes
* Each box is going to represent just *4* bits of data
* Insert 15 into slot 3
* Insert 8 into slot 2
* Insert 2 into slot 4
* Insert 5 into slot 0
* Draw the resulting heap as a line of 32 bits
* Extension: if you "flip" (aka change a 1 to a 0 or a 0 to a 1) the value of bits 3, 6, 9, and 13, what would be the resulting four-box heap look like?

Hint: Google will convert decimal to binary for you if you search like "22 in binary". It'll give you an answer like `0b10110` where the `0b` on the front just means it's a binary number. So 22 in binary is `10110`.

### Heaps with Complex Data

* How could we store an array? 
* Our slots only hold a few bits and they make up a single value. 
* An array should have multiple values

#### Fixed-Size Arrays

* Historically programming languages and any modern language that is performance-focused is going to have fixed-size arrays
* When you create the array you specify the size
* Imagine we have this heap with 12 boxes and each is one byte
* We could decide that there's a special character that means "Array Start"
* The space after it could hold a value corresponding to how many slots are in the array
* The virtual machine would allocate N+2 slots when the array is created
* As data gets stored it goes into the empty slots

This approach has some serious limitations:

* The array can't grow because other data likely gets added to the heap after it -- expanding the array would overwrite that data
* The array might end up oversized -- leading to some memory slots being underutilized
* Allocating the array might get difficult -- imagine trying to find 64 consecutive unused slots in a busy heap
* Programmers make mistakes -- like Java's `IndexOutOfBounds` exception
* EXAMPLE: Car recall where there were writes going outside an array, overwriting other data, causing problems

#### Variable-Location and Variable-Length Array

* Fixed-size arrays were very efficient for the machine, difficult for the programmer
* As hardware gets better, bigger, faster, and cheaper, language designers have optimized more for the *human* and less for the *machine*
* If we're willing to spend more slots (aka memory) then we can implement a variable-length array by spreading the values all over the heap (variable-location)

#### Exploring a Variable-Length Array

**[TODO: Build the starter heap to allow for this work]**

* You've been provided the "snapshot" of a heap with 64 addressed slots
* The marker for "Array Start" is 126
* The slot after an "Array Start" is the address of the first value
* The slot after that first value is the address of the second value
* The slot after the second value is the address of the third value, and so on
* The marker for "Array End" is 127

1. Write out the values in this array in normal JavaScript notation
2. Modify your heap by adding a new value, `112`, on to the end of the array. You should only change the values stored in three slots of the heap.
3. Modify your heap by adding a new value, `111`, to the beginning of the array. You should only change the values stored in three slots of the heap.
4. You can `count` the number of elements by following one link after another. How many "jumps" does it take to get from the Array Start to the Array End? How does this compare to the count? What formula would you write to find the number of data elements relative to the number of jumps?
5. *Extension*: Remove the fifth element of the array by only changing the value of one slot. What does this imply about the relationship between variable-length arrays and garbage collection?

## Modeling a Linked List

PREP: Distribute 8 index cards, 8 wikisticks, 12 post-it notes

### Drawing a Linked List

* You've just practiced the way arrays are actually implemented in JavaScript, Ruby, and Python
* Navigating maps of the heap is not very fun as things get complicated.
* Your computer has 8,589,934,592 slots (8.5 Trillion)
* Even a simple web app uses 512mb of RAM aka 536,870,912 slots (1/2 billion)
* We can model at a higher level of abstraction to aid our comprehension

On the board:

* Draw the first four value of the array above
* Box each element and label it "data"
* Draw a second, empty box next to each
* Label them "link"
* Draw an arrow from each link to the next elment in the list
* Add a wrapper box to each data/link set labeled "node"
* Correct the link arrows so they point to the node

### Physical Modeling

You'll practice by creating Linked Lists in the physical space.

* An index card is a node
* A post-it is the data element
* The wikistick is your link connecting one node to the next

#### Warmup

1. Recreate the Linked List we drew on the board
2. Check it with the person next to you

#### Exercise

Got it? Great, now let's get more complicated:

1. Start with a blank array (aka an empty work area with no nodes)
2. `Insert` the value 16 into the first slot in the array
3. `Push` (aka add-to-the-end of the array) the value 21
4. `Push` the values 63, 61, 4 in that order
5. `Pop` (aka remove the last node from the list)
6. What is the `tail` (aka the last) value in your list? 
7. `Insert` the value 42 into the position with index 2 (pushing the later nodes down, nothing is destroyed)
8. `Push` the value 37
9. What is the `index` of the value 63?
10. Does your list `include` the value 61? How about 21?
11. `Replace` the value of the node with index 4 with the value 28
12. `Delete` the node with index 0 from the list
13. What is the value of your `head` (aka the first node in the list)
14. `Push` the value 59 then run a `count` to find how many nodes are in the list
15. What is the `index` of the value 63?

Compare your resulting Linked List model to the person next to you. If there are any discrepancies, walk through it again together.

#### Synthesize

Write your own definition for each of these key Linked List operations:

* `Push`
* `Pop`
* `Head`
* `Tail`
* `Count`
* `Insert`
* `Delete`
* `Include`
* `Index`

## Paired Practice

* Clone the repo at https://github.com/turingschool-examples/linked-lists/
* Work with a new pair to build a linked list that passes the included tests
* You're welcome to add additional tests if they help you

## Review

As a whole group, answer general student questions. Then wrap things up with:

1. What's a heap?
2. Why do Linked Lists matter?
3. Why did older languages use fixed-size arrays?
4. What's the difference between `push` and `pop`?
5. What's the hardest think about Linked Lists?
