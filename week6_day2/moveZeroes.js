/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0]
/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function(nums) {
    let j = 0;
    for (let i=0; i<nums.length; i++){
      if(nums[i] !== 0){
        nums[j] = nums[i];
        j++;
      }
    }
    // console.log(nums, j)
    while(j<nums.length){
      nums[j] = 0;
      j++;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]))//[1,3,12,0,0]
console.log(moveZeroes([0]))//[0]
