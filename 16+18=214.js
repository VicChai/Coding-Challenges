// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples
// 16+1821426+39515122+811103\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad \large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array} 
// +
// ​
  
// 1
// 1
// 2
// ​
  
// 6
// 8
// 14
// ​
 
// ​
  
// +
// ​
  
// 2
// 3
// 5
// ​
  
// 6
// 9
// 15
// ​
 
// ​
  
// +
// ​
  
// 1
// 1
// ​
  
// 2
// 8
// 10
// ​
  
// 2
// 1
// 3

function add(num1, num2) {
    let arr = []
    let num1Split = num1.toString().split('').reverse()
    let num2Split = num2.toString().split('').reverse()
    let longer = num1Split.length > num2Split.length ? num1Split.length : num2Split.length
    for(let i = 0; i< longer;i++){
        arr.push( (+num1Split[i] || 0)  + (+num2Split[i] || 0))   
    }
    return +arr.reverse().join('')
  }