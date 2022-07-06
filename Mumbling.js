// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {

    let arr = s.toLowerCase().split('')
    let newArr = []
    arr.map((letter,index)=>{
      for(let i = 0; i <= index; i++){
        i === 0 ? newArr.push("-"+arr[index].toUpperCase()) : newArr.push(arr[index]) 
      }
    })
     newArr.splice(0,1,arr[0].toUpperCase())
    return newArr.join('')
  }