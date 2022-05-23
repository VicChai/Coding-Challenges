// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
    //Solution
    let newArr = []
    let arrOne = one.split('')
    let arrTwo = two.split('')
    let arrThree = three.split('')
    
    for(let i = 0; i< arrOne.length; i++){
      newArr.push(arrOne[i])
      newArr.push(arrTwo[i])
      newArr.push(arrThree[i])
    }
    return newArr.join('')
   }
  
  