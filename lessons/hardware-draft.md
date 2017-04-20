---
title: Computer Science: Enough To Be Dangerous
length: 1 hour
tags: hardware, processes, services, memory
module: 4
---

## Computer Science Concepts: Enough To Be Dangerous

### Processes
Applications consist of at least one process that a system's CPU is in charge of executing. At the base level, a `process` is an instance of a program being executed. At least one `thread` will run within this process.  

A `thread` is a unit of processor time that the OS provides to the process.  

A `job` is a group of `processes` that are managed as a unit. Operations performed on the `job object` affect all associated processes within that object.  

### What is a CPU?  
The CPU is a `Central Processing Unit` of your system, often thought of as the "brains" of your computer. You'll also hear it referred to as the `processor`, or `microprocessor`. It is in charge of running a series of directions, which we like call a `program`. It runs the OS of your system, listening for input, processing data, and displaying that on the screen.  

The CPU contains at least one `processor`, which is a physical electronic chip that performs calculations. You'll hear the term `core` tossed around - as in `dual core processor`, indicating that there are 2 chips in a single CPU. A computer can also have multiple CPUs, each of which will contain one or more processing cores.

#### Show Running Processes

Take a second to run the command `top` in your terminal. What you are seeing is a real-time analysis of all currently running processes within your Linux environment.

[This article](https://www.lifewire.com/linux-top-command-2201163) breaks down each line, but as an overview:  

**Line 1:** Total processes running, stuck, sleeping, and number of threads.  
  - Example: `Processes: 269 total, 4 running, 5 stuck, 260 sleeping, 1437 threads`  

**Line 2:** Current time, and load average(how busy your systems' resources are)  
  - Example: `21:49:23 Load Avg: 1.88, 0.50, 2.06`  

`Load Average`:  
  - Measurement of work the system is performing, displayed as a float. Each process either using or waiting for CPU resources adds 1 to that average.  
  - Each number represents the load average over the last 1, 5, and 15 minutes respectively.  
  - `1.88` indicates that over the last minute, the computer was overloaded by 88% on average. In other words, .88 processes were waiting for the CPU.
  - `0.50` indicates that over the last 5 minutes, the computer was idle for 50% of the time.
  - `2.06` indicates that over the last 15 minutes, the computer was overloaded by 106%, or 1.06 processes were waiting for the CPU.  

  Keep in mind these numbers will stay the same regardless of how many cores your system has. The percentages mentioned above would be accurate if you have a single core.  

**Line 3:**  CPU usage by the user, system, idle processes, etc.  
  - Example: `CPU usage: 20.68% user, 9.48% sys, 69.82% idle`  

Wait, how can processes be `idle`? You'd think that a computer has an endless list of things to do at all times. At any given time, rules of OS behavior govern that `only one task` can and **must** be active on a single CPU at any given time.  

Imagine a room full of sleeping robots, each programmed to wake up under a certain condition. If none of those conditions are met, we need to provide an `idle task` that is scheduled to run when there's no other work to be done to avoid chaos. There's actually a lot to this, which you can read more about [here](http://duartes.org/gustavo/blog/post/what-does-an-idle-cpu-do/).   

Skip ahead to the "Main Table", where you'll see a series of headers. Let's dig into that section.  

///////////// MAIN TABLE DETAILS  

### What Even Is Linux

### How computers handle processes

### Services  

Services are tools used to share computing resources, usually paid for by an organization. These include servers, storage, databases, applications, or workers, to name a few. These services are delivered to a computer through "the cloud", instead of being held locally.

This allows an organization to move powerful, expensive data management outside of a local network into a shared third party network, which is then maintained by the provider of those services. Imagine if a small startup was not only in charge of building the client facing application, but also needed to finance, store, and maintain and infrastructure of servers and databases locally within their office. Most of the time, this isn't an option. Businesses without these resources can use services to pick and choose tools that they need as they grow.  

This type of "cloud computing" works by using large networks of servers onto which applications can spread out data-processing chores so no single server is tied down doing too much of a single job. This drastically increases realiability in terms of how much your organizations application can handle.  

### Common Cloud Service Models
- `SaaS`: Software as a Service
  - Organizations can access business functionality on the fly without having to maintain licensed applications. This means businesses can avoid installation, setup, upkeep, or maintenance of a particular application.

  - Can also refer to Storage as a Service, where users pay to rent storage space from a third party. Data can then be handed to the service provider for things such as data backups, transfers, etc.  

- `PaaS`: Platform as a Service
  - Organizations can use third party hardware/software instead of having to house and manage their own. This usually means handling the deployment of applications, testing, hosting, etc.

- `IaaS`: Infrastructure as a Service
  - Servers or software can be purhcased and billed on usage.  

### What is AWS  

### Types of Queues vs Stacks  

### Memory, RAM, CPU

### Resources

- [How To Use the Linux Top Command by Lifewire](https://www.lifewire.com/linux-top-command-2201163)
