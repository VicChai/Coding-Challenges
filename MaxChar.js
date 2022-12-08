// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

const MaxCharacter = (str) => {
  let count = {};
  for (let letter of str) {
    count[letter] ? count[letter]++ : (count[letter] = 1);
  }
  //   return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
  // }

  // const chars = {a: 1, b: 2, undefined: 1}

  //set maximum value to 0 and maxKey to an empty string
  let max = 0;
  let maxKey = "";

  for (let char in count) {
    if (count[char] > max) {
      max = count[char];
      maxKey = char;
    }
  }

  console.log(maxKey);
};
console.log(MaxCharacter("Hello world"));
