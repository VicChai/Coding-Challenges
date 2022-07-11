// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    let num = '1234567890'
    return +s.split('').filter(el=>num.includes(el)).join('') 
  }