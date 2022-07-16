// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    if(litres >= 2 && litres < 4){
      return +(litres * pricePerLitre -((.05 * litres))).toFixed(2)
    }else if(litres >= 4 && litres < 6){
      return +(litres * pricePerLitre -((.10 * litres))).toFixed(2)
    }else if(litres >= 6 && litres < 8){
      return +(litres * pricePerLitre -((.15 * litres))).toFixed(2)
    }else if(litres >= 8 && litres < 10){
      return +(litres * pricePerLitre -((.20 * litres))).toFixed(2) 
    }else {
      return +(litres * pricePerLitre -((.25 * litres))).toFixed(2) 
    }  
  }