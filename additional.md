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

- An algorithm is a set of **_well-defined_** instructions to **_solve_** a particular problem

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

### We evaluate the performance of an algorithm **_in terms of its input size_**

ig O Notation is a metric for determining an algorithm's efficiency. Put simply, it gives an estimate of how long it takes your code to run on different sets of inputs. You can also see it as a way to measure how effectively your code scales as your input size increases. This Big O Notation cheat sheet is here to make these concepts easier for you.

Now, time complexity and space complexity are two specific techniques to measure efficiency.

A function's time complexity measures how long it takes to execute in terms of computational steps. The space complexity of a function measures the amount of memory your code uses.

**_Time Complexity_** - Amount of timetaken by an algorithm to run, as a function of input size
**_Space Complexity_** - Amount of memory taken by an algorithm to run, as a function of input size

By evaluating aginst the input size, the analysis is not only machine independent but the comparison is also more appropriate.

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.

If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

### How to represent complexity?

Asymptotic notations

- Mathematical tools to represent time and space complexity
  1. **_Big-O Notation - Worst case_**
  2. Omega Notation - Best Case
  3. Theta Notation - Average case

### BIG O Notation

function summation (n){
let sum = 0;
for (let i=1; i<= n; i++>){
sum += i;
}
return sum;
}

Example:

summation(4) = 10

1+2+3+4 = 10

Count the number of times a statement executes based on the input size.

LINE 88 -> executes only once
LINE 90 -> executes 4 times
LINE 92 -> executes 1

then this is O(n+2) for the middle part of the code will be the one that will
change based on the input

This is called as **_TIME COMPLEXITY_** which is determined by its input.

### Big O

- Focuses on the bigger picture without getting caught up in the minute details
  Time Complexity O(n) - **_Linear_**

### Big-O Calculation

function summation(n){
return (n\*(n+1))/2
}

this **_loop_** could be still considered as O(n)

function multiply(n){
for(i=1;i<=n;i++>){
for(j=1;j<=i;j++>){
//some code
}
}
}

Time Complexity(n^2) - Quadratic

- For this item is mainly depends on the loop inside the loop, before the first loop finishes
  it needs to reiterate it depending on the code inside the second loop
- This is very avoidable situation when coding, unless it is necessary and the input is very low in count

### Object

An object is a collection of key value pairs

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)

const person = {
firstName: 'Bruce',
lastName: 'Wayne
}

### Array

An array is an ordered collection of values
const odd = [1,3,5,7,9]

Insert/Remove at end - O(1)
Insert/Remove at beginning - O(n)
Access - O(1)
Search - O(n)
Push/Pop - O(1)
Shift/Unshift/Concat/Slice/Splice - O(n)
forEach/map/filter/reduce - O(n)
