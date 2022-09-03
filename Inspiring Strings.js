// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

function longestWord(stringOfWords){
    //Give me back the longest word!
    let arr = stringOfWords.split(' ')
    let maxLength = Math.max(...arr.map(el=>el.length))
    let filtered = arr.filter(el=> el.length===maxLength)
    return filtered[filtered.length-1]
  }