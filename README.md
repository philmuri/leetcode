# LeetCode Solutions
Here, I save *some* of my submissions to various problems from LeetCode. These are organized by problem number and number below along with a (rough) categorization into programming topics. Note that any helper functions omitted by leetcode are not included in my solutions. Most if not all solutions here are my last submissions, or submissions that I thought to be the most elegant out of my submissions. In some cases previous commits can contain other submissions. Sometimes if multiple categories fit a problem depending on the approach, I include it under the category that I personally consider the problem fits best.

I have also labeled some problems with additional flags: 
- `*` means this problem is particularly **well-known** or appears often in interviews. 
- `!` means I personally found the problem **difficult**, or more difficult than Leetcode difficulty rating claims.
- `n` means a **note exists** in my leetcode submission with further details and analysis of my solution(s).
- `a` means I have included **multiple approaches** here on github for that problem.

(I cannot assure that all these flags have been placed properly!)

## Table of Contents
- [LeetCode Solutions](#leetcode-solutions)
  - [Table of Contents](#table-of-contents)
  - [Solutions - General](#solutions---general)
    - [Array \& Matrix](#array--matrix)
    - [Hashmap \& Hashset](#hashmap--hashset)
    - [String](#string)
    - [Linked List](#linked-list)
    - [Binary Tree](#binary-tree)
    - [Dynamic Programming / Recursion](#dynamic-programming--recursion)
      - [Backtracking](#backtracking)
    - [Bit Manipulation](#bit-manipulation)
    - [Graph](#graph)
    - [Special Techniques](#special-techniques)
  - [Solutions - Pandas](#solutions---pandas)
    - [Inspection, Selection, Cleaning](#inspection-selection-cleaning)
    - [Concatenation, Pivoting, Melting](#concatenation-pivoting-melting)
  - [Solutions - SQL](#solutions---sql)
    - [JOINs (incl. CROSS \& SELF), CTEs, Subqueries](#joins-incl-cross--self-ctes-subqueries)

## Solutions - General

### Array & Matrix
- [1. Two Sum](./easy/1.py) `*`
- [1480. Running Sum of 1d Array](./easy/1480.py)
- [1672. Richest Customer Wealth](./easy/1672.py)

### Hashmap & Hashset
- [383. Ransom Note](./easy/383.py)

### String
- [412. Fizz Buzz](./easy/412.py)

### Linked List
- [876. Middle of the Linked List](./easy/876.py)

### Binary Tree
- [2236. Root Equals Sum of Children](./easy/2236.py)

### Dynamic Programming / Recursion
#### Backtracking
- [2597. The Number of Beautiful Subsets](./medium/2597.py)
- [1255. Maximum Score Words Formed by Letters](./hard/1255.py)
- [131. Palindrome Partitioning](./medium/131.py)

### Bit Manipulation
- [1342. Number of Steps to Reduce a Number to Zero](./easy/1342.py)
- [2351. First Letter to Appear Twice](./easy/2351.py) `* n a`

### Graph
-

### Special Techniques
- [1004. Max Consecutive Ones III](./medium/1004.py) (Sliding Window) `* n`


## Solutions - Pandas
Includes solutions to "Introduction to Pandas" study plan and "30 Days of Pandas" study plan. I have categorized the problems roughly into the same categorization as in the study plans.

### Inspection, Selection, Cleaning
- [2877. Create a DataFrame from List](./easy/2877.py)
- [2878. Get the Size of a DataFrame](./easy/2878.py)
- [2879. Display the First Three Rows](.easy/2879.py)
- [2880. Select Data](./easy/2880.py)
- [2881. Create a New Column](./easy/2881.py)
- [2882. Drop Duplicate Rows](./easy/2882.py)
- [2883. Drop Missing Data](./easy/2883.py)
- [2884. Modify Columns](./easy/2884.py)
- [2885. Rename Columns](./easy/2885.py)
- [2886. Change Data Type](./easy/2886.py)
- [2887. Fill Missing Data](./easy/2887.py)
- [2891. Method Chaining](./easy/2888.py)
- [595. Big Countries](./easy/595.py)

### Concatenation, Pivoting, Melting
- [2888. Reshape Data: Concatenate](./easy/2889.py)
- [2889. Reshape Data: Pivot](./easy/2890.py)
- [2890. Reshape Data: Melt](./easy/2891.py)

## Solutions - SQL
Includes solutions to "SQL 50" using MySQL database system. I have categorized the problems in roughly the same way as in the study plan. The solutions contained in each file are combinations of approaches I found most suited for learning and expanding my knowledge in SQL - other submissions being available on my Leetcode account.
### JOINs (incl. CROSS & SELF), CTEs, Subqueries
- [1378. Replace Employee ID With The Unique Identifier](./easy/1378.sql)
- [1068. Product Sales Analysis I](./easy/1068.sql) `a`
- [1581. Customer Who Visited but Did Not Make Any Transactions](./easy/1581.sql) `a`
- [197. Rising Temperature](./easy/197.sql) `a`
- [1661. Average Time of Process per Machine](./easy/1661.sql) `a`
- 