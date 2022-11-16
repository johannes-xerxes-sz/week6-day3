// sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.
// Please write in time complexity of O(log n)
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

const binaryIterativeSearch = (nums, target) => {
  // initialize the left, right, and middle pointers
  let left = 0;
  let right = nums.length - 1; 
  let mid = Math.floor((left + right) / 2);
  // loop through array while middle isn't the target and start <= end
  while (nums[mid] !== target && left <= right) {
    // if target is less than value at middle, move right pointer back
    if (target < nums[mid]) right = mid - 1;
    else
      // else move left pointer forward
      left = mid + 1;
    // set new middle of searching window 
    mid = Math.floor((left + right) / 2);
  }
  // return target value if found or -1 if not found
  return nums[mid] === target ? mid : -1;
}

console.log(binaryIterativeSearch([-1,0,3,5,9,12],9))
console.log(binaryIterativeSearch([-1,0,3,5,9,12],2))
console.log(binaryIterativeSearch([-1,0,3,5,9,12],3))


