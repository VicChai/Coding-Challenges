function palindromeChecker(text) {
    // Code goes here
  return text === text.toLowerCase().split('').reverse().join('') 
}

function palindromeChecker(text) {
    // Code goes here
  let charArray = text.toLowerCase().split('')
  let result = charArray.every((letter, index)=>{
    return letter === charArray[charArray.length - index - 1]
  })
  
  return result
}

function palindromeChecker(text) {
    // Code goes here
  for(let i = 0;i < text.length/2; i++){
    if(text[i] !== text[text.length-1-i]){
      return false 
      }
  }
  return true
}  

console.log(palindromeChecker('racecar'))