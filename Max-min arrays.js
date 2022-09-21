// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

function solve(arr){
    //..
  let newArr = []
  let mid = Math.ceil(arr.sort((a,b)=>b-a).length/2)
  let max = arr.slice(0,mid)
  let min = arr.slice(mid).reverse()
  for(let i = 0; i < max.length;i++){
    newArr.push(max[i])
    newArr.push(min[i])
  }
  return max.length !== min.length ? newArr.slice(0,newArr.length-1) : newArr
};