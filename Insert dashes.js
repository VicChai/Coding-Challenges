// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    //code me
  num = num.toString().split('')
   for(let i = 0;i < num.length;i++){
     num[i] % 2  && num[i+1] % 2 ? num[i] = num[i] + '-' : num[i]
     }
   return num.join('')
 }