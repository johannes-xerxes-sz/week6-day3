const arr1 = [1, 34, 5, 2, 23, 9, 12, 17, 12, 10, 25];
// Using any linear search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1. 
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr [i] === target) {
            return arr[i]
            // return i

        }
    }
    return -1;
}
// console.log(linearSearch((arr1),12));
console.log(linearSearch((arr1),12)); 



