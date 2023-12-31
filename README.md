
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

## React - Redux App

### Overview

This React-Redux app fetches and displays posts from the JSONPlaceholder API. It also features a PostForm component that allows users to add new posts.

### Project Structure
The project is organized into the following structure:

- redux/apiCalls.js: Contains functions to interact with the JSONPlaceholder API.
- redux/postsSlice.js: Redux slice for handling posts state and fetching posts from the API.
- redux/store.js: Redux store configuration.
- components/PostList.jsx: React component to display posts.
- components/PostForm.jsx: React component to add a new post.
### Run Locally  
Clone the project  

~~~bash  
  git clone https://github.com/longtp12/SETA_Entrance_Test.git
~~~

Go to the project directory  

~~~bash  
  cd SETA_Entrance_Test
  cd React
~~~

Install dependencies  

~~~bash  
npm install
~~~

Start the server  

~~~bash  
npm run dev
~~~  

### Features  
#### Displaying Posts
The PostList component fetches posts from the JSONPlaceholder API and displays them on the page.

#### Adding New Posts
The PostForm component allows users to submit a new post. It interacts with the JSONPlaceholder API to add the post.

### Technologies Used

- React
- Redux
- Axios (handling API requests)
- Ant Design (UI components library)