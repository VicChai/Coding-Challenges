// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    string = string.split('').map(el=> el === el.toUpperCase() ? el = ' ' + el : el)
    return string.join('')
  }  