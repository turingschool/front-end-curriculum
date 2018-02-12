---
title: Linked List
length: 180 min
module: 2
tags: linked list, javascript, doubly linked list, circular linked list, tdd, data structure
---

## Linked List

A linked list is a data structure composed of nodes. Each node contains data, and a pointer to the next node.

![singly linked list](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

When data is added to the linked list, you have to iterate through the whole linked list to find the last node.

There are other flavors of linked lists, including [doubly linked lists](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg) (each node points to the following node _and_ the preceding node) and [circular linked lists](https://upload.wikimedia.org/wikipedia/commons/d/df/Circularly-linked-list.svg) (the final node points back to the head node).

In this live coding demo, we'll create a linked list and program methods for manipulating and getting information out of that linked list (methods such as `shift`, `unshift`, `pop`, `push`, `find`, etc).

## Live Linked List Demo

To follow along with the demo, run this command in your terminal:
`git clone https://github.com/turingschool-examples/tdd.git linked-list && cd linked-list && git checkout linked-list && npm install`

(The above command does these things: clone the TDD repo; rename it to linked-list; cd into the repo; check out the linked-list branch; install dependencies.)

This repo contains pre-written tests; use them for TDD (test driven development) to create a linked list.

### Extensions

Try implementing a doubly linked list (each node keeps track of the previous node, as well as the next). Create a new file, `DoublyLinkedList.js`, and a new test file, `DoublyLinkedList-test.js`. Start with the tests from `LinkedList-test.js` and alter them to add assertions checking for previous node data.

Try implementing a circular linked list (the last node of the list points back to the head).

