const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20];
// Using the recursive binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2. 
const recursiveBinarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    let min = 0;
    let max = arr.length -1; 
    let middleIndex = Math.floor((start + end) /2);

    if (!arr.includes(target)) return -1

    if (min > max) retun -1
    // edge case
    // find middle index
    // if the middle element is the target, if so, return the targer index
    if (arr[middleIndex] === target) return arr[middleIndex] // base condition

    // if the middle element is small than target, move the start index to middle +1 else end index
    if (arr[middleIndex] < target) {
        return recursiveBinarySearch(arr, target, middleIndex + 1, max)
    } else {
        return recursiveBinarySearch(arr, target, min, middleIndex -1)
    }
}
console.log(recursiveBinarySearch(arr2,12)) //12
console.log(recursiveBinarySearch(arr2,0)) //-1
console.log(recursiveBinarySearch(arr2,19)) //-1
console.log(recursiveBinarySearch(arr2,13)) //13