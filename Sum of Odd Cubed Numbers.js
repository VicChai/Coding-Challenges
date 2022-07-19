// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {

    // insert code here >.<  
      let number = arr.every(el=>typeof el === 'number')
      let cubed = arr.map(el => el**3)
      let odds = cubed.filter(el=>el%2!==0)
      return number ? odds.reduce((acc,c)=>acc+c,0) : undefined
    }