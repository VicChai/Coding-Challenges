// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    let ans=[]
    let newArr = (s1+s2).split('')
    let sorted = newArr.sort()
    for(let i = 0; i<= sorted.length -1;i++){
      if(sorted[i] !== sorted[i +1]){
        ans.push(sorted[i])  
      }
    }
    return ans.join('')
  }
  