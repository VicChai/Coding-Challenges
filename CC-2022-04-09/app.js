// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
  let newArr = []
// your code here
 newArr = string.split('')
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === '5'){
      newArr[i] = 'S'
    }else if (newArr[i] === '0'){
      newArr[i] = 'O'
    }else if (newArr[i] === '1'){
      newArr[i] = "I"
    }
  }
  return newArr.join('')
 
  
}