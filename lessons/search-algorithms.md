---
title: Search Algorithms
tags: search, algorithms
---

### Battleships for Candy
Can you find the battleship? If you're lucky you get candy.

Everyone line up and I'll give you a card with a random number. One lucky contestant will be our guesser and gets four pieces of candy. I will give them a number to find. The guesser must use candy to bribe one person at a time to show their number. If the guesser finds the number, they get whatever candy they have left. If the guesser doesn't find the number, they are candyless and sad.

Now let's do it again, but this time we will sort all of the people in line by number.

### Search algorithms
Searching for data is a vital function of computers. Command+F, Google, auto-fill, elastic search... we want to find what we are looking for. JS uses find to select the first value that matches the condition of find, or you can use filter to return an array of items that match the condition.

```js
function isBigEnough(value) {
  return value > 10;
}

var first = [12, 5, 8, 130, 44, 10].find(isBigEnough)
var all = [12, 5, 8, 130, 44, 10].filter(isBigEnough);
console.log("Using find I get ", first)
console.log("Using filter I get ", all)
```

### Binary Search Tree

A binary search tree is an ordered data structure that allows you to quickly find an element (node) based on a key. Each node also has two distinct sub-trees called left and right.
All nodes to the left of a specific node must have smaller key and all nodes to the right must have a larger key. The leaves (final nodes) of a tree do not have any sub-trees.

All searches using a binary search tree start at the root of the tree and traverse down the tree until it finds the correct key.

![binary search][binary-search]

[binary-search]: /assets/images/lessons/search-algorithms/binary-search.png

[Code from this gist](https://gist.github.com/greim/17ccec50e8ac45a35edf08efec5fe059)

```js
class Tree {
  add(value) {
    if (this.root) this.root.add(value);
    else this.root = new Node(value);
  }
  has(value) {
    if (this.root) return this.root.has(value);
    else return false;
  }
  delete(value) {
    if (this.root) this.root.delete(value, this, 'root');
  }
  *[Symbol.iterator]() {
    if (this.root) yield* this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }
  add(value) {
    if (value < this.value) {
      if (this.left) this.left.add(value);
      else this.left = new Node(value);
    } else if (value > this.value) {
      if (this.right) this.right.add(value);
      else this.right = new Node(value);
    }
  }
  has(value) {
    if (value < this.value) {
      if (this.left) return this.left.has(value);
      else return false;
    } else if (value > this.value) {
      if (this.right) return this.right.has(value);
      else return false;
    } else if (value === this.value) {
      return true;
    }
  }
  delete(value, parent, which) {
    if (value < this.value) {
      if (this.left) this.left.delete(value, this, 'left');
    } else if (value > this.value) {
      if (this.right) this.right.delete(value, this, 'right');
    } else if (value === this.value) {
      if (this.left) {
        let node = this.left;
        while (node.right) node = node.right;
        this.value = node.value;
        this.left.delete(this.value, this, 'left');
      } else if (this.right) {
        let node = this.right;
        while (node.left) node = node.left;
        this.value = node.value;
        this.right.delete(this.value, this, 'right');
      } else {
        delete parent[which];
      }
    }
  }
  *[Symbol.iterator]() {
    if (this.left) yield* this.left;
    yield this.value;
    if (this.right) yield* this.right;
  }
}

var tree = new Tree
tree.add(5)
tree.add(12)
tree.add(3)
tree.add(58)
tree.add(13)
tree.add(1)
tree.add(29)

console.log(tree)
console.log(tree.root.right.right.left)
```

### Extra practice
