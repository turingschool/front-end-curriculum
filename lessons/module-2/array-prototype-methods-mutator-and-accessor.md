---
title: "Array Prototype Methods: Mutator & Accessor"
length: 180
tags: prototype methods
---

## Learning Goals

* Gain familiarity with other prototype methods (not necessarily JUST array prototypes, some string methods too!)
* Understand why it's important to note if a method is a mutator or accessor


## Structure

In your breakout groups, you’ll be assigned to one or two prototype methods to research and create a short (5 minutes or less) presentation on:

* **Group 1:** sort
* **Group 2:** split and join
* **Group 3:** includes
* **Group 4:** concat
* **Group 5:** shift and unshift

You will make a presentation for your assigned prototype method (or two presentations, if you are assigned two methods). You are encouraged to be creative when choosing your presentation medium, but if you aren't sure, these might be good choices:
* Google Slides
* Google Docs

Presentations should include the following information:
* Name of the method
* Short sentence on what it does or why you would use it
* Does it mutate the original array? Yes or no
* What does it take in?
* What does it return?

**Each group will present to the class.**

In _addition_ to making a presentation, your group should code up at least **2 examples** of using the method. (You may find that creating more than 2 examples and exercises is helpful):

* **First repl:** One person from your group will share their screen, and walk the class through how the method is being used and what it’s doing. 
* **Second repl:** Send your second repl to the class in your public slack channel - this repl should not contain solutions, but simply practice exercises/prompts for the class to work on for a couple of minutes individually.



<!-- Instructor Notes:

	* March 25, 2020 REMOTE VERSION - Language has been changed a little bit to reflect that students will be creating online presentations instead of these posters and sharing their screens. Once we aren't remote - update the wording. 

	* Find the large post-it note style poster paper in the staff area and markers. (If you grab the wrong poster paper you'll have to tape the posters to the walls and then the tape will rip the paint off the walls. So find the post-it note paper.) Markers are usually in Ellen Mary's office and you should send her a message that you've taken them for the morning and BE SURE TO GIVE THEM BACK WHEN YOURE DONE
	* Count off students to assign them to groups 1-5 and give them time to work on their posters and their practice exercises. Students are free to take POMs as they need during the lesson. Have them put their posters on the wall as they finish up so that you can get a sense for timing/when to come back together as a class.
	* Have 1 person from each group present their poster, another person walk through the first repl of example use-cases, and another person send out the 2nd repl of exercises for the class.
	* Give the students a couple of minutes to work on the practice exercises and then popsicle stick someone to connect to the TV and share their solutions.
	* Present any additional context about the prototype method that will be helpful for students to write down (notes below)
	* Allow time for any questions on the prototype method before moving onto the next group.


	EMPHASIS NOTES FOR EACH PROTOTYPE METHOD:
	* Sort:
		* easy to forget if a - b vs. b - a is descending or ascending. It's ok to just try it out and then switch it if you get the opposite sort order you're expecting
		* remember that it IS a mutator and will permanently sort your original array, which might not be what you want
		* help them identify what that callback is returning, but don't worry about it being fuzzy for them (it returns -1 0 or 1 to determine if elements should be swapped or not, but all they need to remember is that they should be doing some sort of subraction between the two callback parameters, a and b)
	* Split:
		* this is actually a string prototype method but is important for them to know
		* people ALWAYS forget what the argument is for split. they only ever see examples like .split(' ') and think thats all you can do with it. Yell at them to remember this argument and how it works!
	* Join:
		* similar to split, students forget this argument and what it represents. Yell at them again to remember this
	* Includes:
		* can be used on arrays AND strings! Point this out and show them an example if they don't do it in their repls (or tell this group ahead of time that they should think about that and add it into their examples while they're working)
	* Concat:
		* people forget that this one is not a mutator and they must do a reassignment
	* Shift & Unshift:
		* the way to remember the difference between the two: shift is a shorter word, so it makes your array shorter. unshift is a longer word, so it makes your array longer!
-->






