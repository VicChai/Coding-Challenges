// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let arr=[]
    for(let i =0; i < x.length;i++){
      x[i] === 'a' ? arr.push('b') : x[i] === 'b' ? arr.push('a') : arr.push('c')
      }
      return arr.join('')
  }