// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    //coding and coding..
    let arr=[]
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0;i <str.length;i++){
      if( alpha.split('').includes(str[i])){
        arr.push(str[i])
      }
    }
    return arr.reverse().join('')
    
  }