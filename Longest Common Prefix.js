// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    if (!strs.every((word) => word[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};
