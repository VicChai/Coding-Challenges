// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

function distanceBetweenPoints(a, b) {
    // your code here
    let arr = Object.values(a)
    let arr2 = Object.values(b)
    let result = (arr[0]-arr2[0])**2 + (arr[1] - arr2[1])**2
    return Math.sqrt(result)
  }  