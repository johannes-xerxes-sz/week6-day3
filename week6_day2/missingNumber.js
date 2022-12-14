/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in
the range that is missing from the array.
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the 
missing number in the range since it does not appear in nums.
Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the 
missing number in the range since it does not appear in nums.
Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the 
missing number in the range since it does not appear in nums.
Constraints:
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
/**
* @param {number[]} nums
* @return {number}
*/
var missingNumber = function(nums) {

    let set = new Set(nums)
    for(let i=0;i<=nums.length;i++){
        if(!set.has(i)) return i
    }
};


console.log(missingNumber([0,1]))//2
console.log(missingNumber([3, 1, 0]))//2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))//8

// ! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var missingNumberCondition = function(nums) {
    
    const n = nums.length;
    if (n < 1 || n > 104) return -1
    let set = new Set(nums)
    for(let i=0;i<=nums.length;i++){
        if(nums[i] < 0 || n < nums[i] ) return -1
            if(!set.has(i)) return i
            } 
        
};

console.log(missingNumberCondition([0,1]))//2
console.log(missingNumberCondition([3, 1, 0]))//2
console.log(missingNumberCondition([9,6,4,2,3,5,7,0,1]))//8
console.log(missingNumberCondition([-1,0,1]))//2
console.log(missingNumberCondition([10,11,12,13,14,9,6,4,2,3,5,7,0,1]))//8
