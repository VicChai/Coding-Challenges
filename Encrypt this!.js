// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    // Implement me! :)
    return text.split(' ').map(el=> el.length === 1 ? el[0].charCodeAt() : el.length === 2 ? el[0].charCodeAt() + el.slice(-1) : el[0].charCodeAt() + el.slice(-1) + el.slice(2,-1) +el.slice(1,2)  ).join(' ')
    
  }