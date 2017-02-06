---
title: Intro to Object Oriented Programming
length: 180
tags: javascript
module: 2
---

# Object Oriented Programming

Javascript is a very flexible language. It has the ability to be functional (partial functions, currying, etc) and it also has the ability to be object oriented.

Objects are all around us. We interact with them every single day. We expect a lot from these particular objects and we often only notice objects when they break for fail on us.

If you drive a car you don't really notice your tires until one pops on you. You don't notice your alternator until your car stops working. The point I'm trying to make is that when it comes to programming our objects kind of work the same way.

## How do objects work?

When you're considering creating an object you should look at the `Law of Demeter`. If you're wondering what that is you should probably check it out [here](http://wiki.c2.com/?LawOfDemeter).

### Objects and Instances.

You want to think of an object like it were a template and an instance of that object is a specific version or type of that original template.


TRY IT: With your pair, brainstorm five types of objects and specific instances of that object that are at Turing. For example:

**Type of object**: Cubby

**Specific instances**:

alter-nate's cubby
Steve's cubby
yung-jhun's cubby

**Type of object**: Refrigerator

**Specific objects**:

Staff refrigerator
Student refrigerator's

In the cases above, what we called "type of object" is called a Class, and what we called "specific objects" are called instances.

### Messages

This is how objects interact with each other. Now having one object just simply isn't enough. Now IRL this process isn't too difficult to understand. If I'm being annoying my wife communicates to me that I am being annoying and that I need to stop. If I'm driving my car and the gas tank light comes on it's pretty apparent that I need to then put gas in the car.

In order for objects to interact with each other they must communicate with messages. Messages are parameters that are essentially passed back and forth from object to object. The messages use parameters to make sure the information is precise. If the receiving object does not have enough information, it will not be able to properly carry out the method

### SRP and Coupling

Now objects have expectations. Sometimes it would almost work best if objects had to know less. The more each object knows essentially the more dependencies are added. That means that there is a higher likely hood that the object will break.

When an object knows too much what you will notice is that it will not function correctly if there it isn't independent. When you are coding with any OOP language you will always create a dependency on something. Objects will interact with each other and you will notice that at some point you will see that objects will begin to depend on each other. As that happens and you begin to lay a dependency you want to place it on an object that is not going to change very much.

The reason why we do this is because as developer we have to accommodate change.  If the dependency has less change then it means we don't have to accomidate that change as much.


### Code Along

We'll hop into some code and figure it out!
