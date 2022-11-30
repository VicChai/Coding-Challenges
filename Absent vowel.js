// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

function absentVowel(x) {
  x = x.toLowerCase().split("");
  return x.indexOf("a") === -1
    ? 0
    : x.indexOf("e") === -1
    ? 1
    : x.indexOf("i") === -1
    ? 2
    : x.indexOf("o") === -1
    ? 3
    : 4;
}
