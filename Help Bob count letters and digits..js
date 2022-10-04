// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
    return input.split('').filter(el=>el.charCodeAt() > 47 && el.charCodeAt() < 58 || el.charCodeAt() > 64 && el.charCodeAt() < 91 || el.charCodeAt() > 96 && el.charCodeAt() < 123 ).length
    
  }