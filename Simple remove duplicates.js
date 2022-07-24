// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

function solve(arr) {
    let list = []
    let reverse = arr.reverse()
    for(let i = 0; i<reverse.length;i++){
       if(reverse[i] !== reverse[i+1] && !list.includes(reverse[i])){
         list.push(reverse[i])
       }     
    }    
    return list.reverse()
  }