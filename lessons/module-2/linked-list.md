---
title: Linked List
length: 180 min
module: 2
tags: linked list, javascript, doubly linked list, circular linked list, tdd, data structure
---

## What is a Linked List?

A linked list is a data structure composed of nodes. A node is simply a space in memory that contains some data. This data can be a string, integer, object, etc. In addition to the data that's being stored in the node, each node will contain a pointer, or reference, to the next node.

![singly linked list](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

There are other flavors of linked lists, including [doubly linked lists](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg) (each node points to the following node _and_ the preceding node) and [circular linked lists](https://upload.wikimedia.org/wikipedia/commons/d/df/Circularly-linked-list.svg) (the final node points back to the head node).


## Arrays vs. Linked Lists

Linked lists seem very similar to Arrays, and you might be wondering when or why we would use one over the other. Read through some of the answers on this [stackoverflow](https://stackoverflow.com/questions/393556/when-to-use-a-linked-list-over-an-array-array-list) question to learn about the differences between the two data structures and their pros vs. cons. We'll discuss them together as a class.

TLDR:


| Arrays                           | Linked Lists                     |
| -------------------------------- |:--------------------------------:|
| Built-in to JS by default        | Must be implemented by you       |
| Expensive to add & remove items  | Cheap to add & remove items      |
| Easy to access random items      | Difficult to access random items |





## Code Along

We'll create a linked list and program methods for interacting with it. Think about the operations you can perform on a standard array - adding, removing, manipulating data with methods like `shift`, `unshift`, `pop`, `push`, `find`, etc. We want our linked list to include similar functionality.

Clone down [this repo](https://github.com/turingschool-examples/linked-lists/tree/master) to follow along. We have several test cases written out for us already that will guide us in the right direction - run these in your terminal with `npm run test` and see that they're currently all failing. Take a couple of minutes to read through the tests before we start coding to give yourself some insight into what we're trying to achieve.

### The Node Class

Remember what we mentioned about nodes earlier in the lesson: in a standard linked list, they will contain some data that could be of any data type, as well as a reference to the next node. Because we're going to be creating many Nodes, it makes sense to create a Node class so we can spin up multiple instances of a Node that vary only in their property values.

Let's create a `Node.js` file in the `scripts` directory:

```javascript
export default class Node {
  constructor (data) {
    this.data = data || null;
    this.next = null;
  }
}
```

This allows us to create a new Node that accepts a data parameter and defaults the next node reference to null. (Every time we add a new Node, we'll update the `next` value for the last Node to point to our new one.)

If we re-run our tests, we should see our Node tests passing.

### The Linked List

Next we'll create a `LinkedList` class where we'll implement all the methods we need for interacting with the Nodes it contains.

Our linked list should keep track of two things: its length, and where it begins (its `head`):

```javascript
export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }
```

#### Together: Pushing a Node to the LinkedList

Next let's add some functionality that allows us to add a new Node to the end of our LinkedList, the same way `push` works on Arrays:

```javascript
  push(data) {
    this.length++;

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = new Node(data);
    }
  }
```

Notice a couple of things about this code:

* We're increasing the `length` property of our linked list.
* We're first checking if anything exists at the `head` of our linked list. If it doesn't, it means we're working with a brand new instance that contains no current Nodes, and we need to add this one as the head.
* If there is already a `head`, we're going to loop through each of the Nodes in our list (starting at the head), until we find one that doesn't have a `next` property value. Remember a Node's `next` value will default to null until we add another node. This means that once we find a Node with no `next` property, we know we've reached the end of our list and we can now insert the new Node.
* Inserting the new Node involves setting the `next` property of the last Node in the list to a new instance of a Node containing the data the user passed in as an argument to the method.

#### On Your Own: Popping a Node off the LinkedList

Now try implementing a `pop` method that removes the last Node from the list and returns it to the user. Read through the test cases to guide your thinking. Some things to think about as you start your implementation:

* What should happen if there are no Nodes in the list to `pop` off?
* What should happen if there is only a `head` Node?
* What should happen if there are many Nodes in the list?
* What should be returned to the user after the Node is popped off?
* What changes occur in the instance of our LinkedList?
* Tricky part: what should our `while` loop look like? What condition do we need to look for in order to continue our loop? In our `push` method, we checked for `currNode.next`. Will this work for `pop`? Why or why not?


#### Together: Find

Finding a Node in our linked list structure is a bit more difficult than when we use a standard array. Because we don't necessarily have an "index" for each of our Nodes, we need to find the Node that contains the data we're looking for.

```javascript
  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }

    return foundNode;
  }
```

#### On Your Own: Insert & Remove

* Create an `insert` method that allows you to insert a new Node at any place in the LinkedList.
* Create a `delete` method that allows you to remove any Node in the LinkedList.

Remember to read the tests to see how these methods should behave!



### Extensions

Try implementing a doubly linked list (each node keeps track of the previous node, as well as the next). Create a new file, `DoublyLinkedList.js`, and a new test file, `DoublyLinkedList-test.js`. Start with the tests from `LinkedList-test.js` and alter them to add assertions checking for previous node data.

Try implementing a circular linked list (the last node of the list points back to the head).