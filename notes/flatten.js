function flatten (arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) { Array.isArray(arr[i]) ? flattened = flattened.concat(flatten(arr[i])) : flattened.push(arr[i]);}
    return flattened;
}
console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));