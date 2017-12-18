---
title: Linked List
length: 180 min
module: 2
tags: linked list, javascript, doubly linked list, circular linked list, tdd
---

## Live Linked List Demo

To follow along with the demo, run this command in your terminal:
`git clone https://github.com/turingschool-examples/tdd.git linked-list && cd linked-list && git checkout linked-list && npm install`

(The above command does these things: clone the TDD repo; rename it to linked-list; cd into the repo; check out the linked-list branch; install dependencies.)

There are tests in that file; use them for TDD (test driven development).

### Extensions

Try implementing a doubly linked list (each node keeps track of the previous node, as well as the next). Create a new file, `DoublyLinkedList.js`, and a new test file, `DoublyLinkedList-test.js`. Start with the tests from `LinkedList-test.js` and alter them to add assertions checking for previous node data.

Try implementing a circular linked list (the last node of the list points back to the head).

