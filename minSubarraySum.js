/*
Given an array of integers and a number, write a function called minSubarraySum,
which finds the min sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is
not.
Please write this with time complexity of O(n) and space o(1)
Time complexity - O(n)
Space complexity - O(1)
*/
const minSubarraySum = (arr, n) => {
    // make max & temp as 0
    let minSum = 0;
    let tempSum = 0;
    // minimun function
    for (let i = 0; i < n; i++) {
        minSum += arr[i];
    }
    tempSum = minSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        minSum = Math.min(minSum, tempSum)
    }
    return minSum
}
// Test Cases:
console.log(minSubarraySum([100,200,300,400], 2))
console.log(minSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(minSubarraySum([-3,4,0,-2,6,-1], 2))
console.log(minSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
console.log(minSubarraySum([2,3], 3)) // null