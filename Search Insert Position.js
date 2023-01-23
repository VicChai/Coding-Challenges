// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) return i;
//   }
//   return nums.length;
// };

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length -1
  let idx = -1

  while(left <= right){
      let mid = left + Math.floor((right - left)/2)
      if(nums[mid] === target) return mid
      if(nums[mid] < target){
          left = mid + 1
          idx = mid
      }else {
          right = mid -1
      }
  }
  return idx+1