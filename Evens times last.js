// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    // Good luck
    return numbers.filter((el,idx)=>idx % 2 === 0).reduce((acc,c)=>acc+c,0)*numbers[numbers.length -1] || 0
  }