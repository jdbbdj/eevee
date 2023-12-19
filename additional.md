Javascript Algorithms by Codevolution

Course is seperated both data structures and algorithms

# Algorithm

- Algorithm
- Measuring performance
- Time and Space Complexity
- Big O notation
- Sort
- Search
- Misc. algorithms and problem solving

## Author's Take
It seem hard and that is because it is hard
Have a pen and paper and trace the execution code with sample input
Code along with the author and do not rush through the video

# What is an algorithm?

- An algorithm is a set of ***well-defined*** instructions to ***solve*** a particular problem

### Recipe Analogy

<img width="569" alt="image" src="https://github.com/jdbbdj/eevee/assets/75722677/ef0f56e3-acbb-4f96-afb9-e4f4f31e6efe">

<img width="477" alt="image" src="https://github.com/jdbbdj/eevee/assets/75722677/9b43797e-a060-4552-9a50-2c54fd2c83b2">

### Parallelism to programming
<img width="553" alt="image" src="https://github.com/jdbbdj/eevee/assets/75722677/97b30aca-f8ef-4568-aa88-6254fd1f2b6b">

### Characteristics of algorithm
- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent

### Why algorithms?

As a developer, you're going to come across problems that you need to resolve. Learning algorithms translates to learning different techniques to efficiently solve those problems.

One problem can be solved in many ways using different algorithms. Every algorithm comes with its own tradeoffs when it comes to performance.

### Algorithm analysis

There are multiple ways to solve one problem. For example there are multiple algorithms to sort a list of numbers.

How do we analyse which one of them is the most efficient algorithm?

Generally, when we talk about performance, we use an absolute measure.
If I can run 100 meters in 12 seconds, I am faster than someone who takes 15 seconds.

**Absolute running time of an algorithm cannot be predicted, since it depends on a number of factors**

- Programming language used to implement the algorithm
- The computer that runs it
- Other programs running at the same time
- Quality of operating system

### We evaluate the performance of an algorithm ***in terms of its input size***

***Time Complexity*** - Amount of timetaken by an algorithm to run, as a function of input size
***Space Complexity*** - Amount of memory taken by an algorithm to run, as a function of input size

By evaluating aginst the input size, the analysis is not only machine independent but the comparison is also more appropriate.

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.

If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

### How to represent complexity?
Asymptotic notations
- Mathematical tools to represent time and space complexity
  1. ***Big-O Notation - Worst case***
  2. Omega Notation - Best Case
  3. Theta Notation - Average case







