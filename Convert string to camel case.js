// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if(str === "") return ''
    if( str.includes('-') && str[0].toUpperCase() === str[0]) {
      return str.split('-').map(el=>el.slice(0,1).toUpperCase()+el.slice(1)).join('') 
    }  
    if( str.includes('_') && str[0].toUpperCase() === str[0]) {
      return str.split('_').map(el=>el.slice(0,1).toUpperCase()+el.slice(1)).join('')
    }
     if( str.includes('_') && str[0].toLowerCase() === str[0]) {
      let string =  str.split('_').map(el=>el.slice(0,1).toUpperCase()+el.slice(1)).join('')
      return string[0].toLowerCase()+string.slice(1)
    }
    if( str.includes('-') && str[0].toLowerCase() === str[0]) {
      let stringz =  str.split('-').map(el=>el.slice(0,1).toUpperCase()+el.slice(1)).join('')
      return stringz[0].toLowerCase()+stringz.slice(1)
    }
  }  