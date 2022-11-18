// Using the iterative binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2. 
const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20];

const iterativeBinarySearch = (arr, target) => {
    let arr1 = 0
    let arr2 = arr.length - 1
  
    while (arr1 <= arr2) {
      let middleIndex = Math.floor((arr1 + arr2) / 2)
  
      if (arr[middleIndex] < target) {
        arr1 = middleIndex + 1
      } else if (arr[middleIndex] > target) {
        arr2 = middleIndex - 1
      } else {
        return arr[middleIndex]
      }
    }
  
    return -1
}
console.log(iterativeBinarySearch(arr2,12))
