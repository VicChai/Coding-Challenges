// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let number = x.filter(el=>typeof(el) === "number").reduce((acc,c)=>acc+c,0)
    let str = x.filter(el=>typeof(el) === "string").reduce((acc,c)=>+acc+ +c,0)
    return number - str
  }