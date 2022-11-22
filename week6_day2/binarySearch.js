// Using any binary search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1. 
const arr1 = [1, 34, 5, 2, 23, 9, 12, 17, 12, 10, 25];

const binarySearch = (arr, target) => {
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
console.log(binarySearch(arr1,12))

// ! =-=-=-=-=-=-=-=-=- NOTES =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/* const binarySearchLinear = (arr, target) => {
    let arr1 = 0;
    let arr2 = arr.length -1;

    for (let i = 0; i < arr.length; i++)   {
        let middleIndex = (arr2 - arr1)/2;
        if (arr[i] == target)  {
            return arr[i];
        }
        else if (arr[middleIndex] > target)  {
            arr2 = middleIndex - 1;
        }
        else    {
            arr1 = middleIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearchLinear(arr1,12)) */
// ! =-=-=-=-=-=-=-=-=- NOTES =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-