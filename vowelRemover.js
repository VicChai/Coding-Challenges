// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    let vowels = ['a','e','i','o','u']
    let arr = string.split('')
    return arr.filter(word => !vowels.includes(word)).join('')  
   }
   