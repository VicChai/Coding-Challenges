// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  // ...
  if (str.length === 0) return 0;
  let consonants = "bcdfghjklmnpqrstvwxyz";
  return str
    .toLowerCase()
    .split("")
    .filter((el) => consonants.includes(el)).length;
}
