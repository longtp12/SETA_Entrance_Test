
# SETA - ReactJS Entrance Test

## Most Common Length Strings

### Problem Statement
Given an array of strings, find the strings' length that appears most frequently in the array.

### Solution

1. Counting Lengths:

- Iterate through the input array (arr).
- For each string in the array, calculate its length and maintain a count of strings for each length using a JavaScript Map.
2. Finding Maximum Count:

- Find the maximum count of strings for a particular length using the Math.max function.
- This involves spreading the values of the Map inside Math.max.
3. Filtering Strings:

- Filter out all the strings that have the maximum count for their length.
4. Result:
- Return the array of strings that have the most common length.

## Sum of Top Two Integers

### Problem Statement
Given an array of integers, find the sum of the top two integers in the array.

### Solution

1. Sorting:

- Sort the input array of integers in descending order.
2. Sum of Top Two:

- Retrieve the top two integers from the sorted array.
- Calculate and return the sum of the top two integers.