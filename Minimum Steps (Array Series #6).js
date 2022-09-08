// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

function minimumSteps(numbers, value){
    //your code here
    let sorted = numbers.sort((a,b)=>a-b)
    let count = 0
    for(let i = 1; i < numbers.length;i++) {
      if(sorted.slice(0,i).reduce((acc,c)=>acc+c) < value){
        count = i 
      }
    }
    return count
  }