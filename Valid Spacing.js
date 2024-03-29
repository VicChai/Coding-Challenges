// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true

// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// * ''              => true

function validSpacing(s) {
  // write your code here
  let split = s.split(" ");
  if (s === "") {
    return true;
  } else if (split[0] === "" || split[split.length - 1] === "") {
    return false;
  } else if (s.includes("  ")) {
    return false;
  } else {
    return true;
  }
}
