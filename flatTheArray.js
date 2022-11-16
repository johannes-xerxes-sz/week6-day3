// Write a recursive function called flatTheArray which accepts an array of arrays 
// and returns a new array with all values flattened.
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatTheArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr = newArr.concat(flatTheArray(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}

console.log(flatTheArray([1, 2, 3, [4, 5] ]));
console.log(flatTheArray([1, [2, [3, 4], [[5]]]]));
console.log(flatTheArray([[1],[2],[3]]));
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

