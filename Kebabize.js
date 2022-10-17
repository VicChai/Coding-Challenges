// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    // return; 
    let result = str.split('').filter(el=>!'0123456789'.includes(el)).map(el=> el.toUpperCase() === el ? '-' + el.toLowerCase() : el).join('')
    return result[0] === '-' ? result.slice(1) : result
  }