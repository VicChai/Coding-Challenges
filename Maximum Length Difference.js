// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
    // your code
    if( a1.length <1 || a2.length <1 ){
        return -1
    }
      let a1Length = a1.map(el=> el.length)
      let a2Length = a2.map(el=> el.length)
      let maxA1 = Math.max(...a1Length)
      let minA1 = Math.min(...a1Length)
      let minA2 = Math.min(...a2Length)
      let maxA2 = Math.max(...a2Length)
      return  maxA1 - minA2 > maxA2 - minA1 ? maxA1 - minA2 : maxA2 - minA1
  }  