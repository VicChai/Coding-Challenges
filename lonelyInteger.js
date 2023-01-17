// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .

function lonelyinteger(a) {
  // Write your code here
  console.log(a);
  let map = {};
  for (const num of a) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  for (const val in map) {
    if (map[val] === 1) {
      return val;
    }
  }
}
