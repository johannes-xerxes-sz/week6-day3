/* Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
majority element always exists in the array.
Please solve using a linear time complexity and using the frequency counter pattern
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
/**
* @param {number[]} nums
* @return {number}
*/

const solution = (nums) => {
    let obj = [];
    for(let i = 0; i < nums.length; i++){
            obj[nums[i]] = obj[nums[i]] + 1 || 1;
            if(obj[nums[i]] > nums.length / 2  )  
            return nums[i];
        }
    }

console.log(solution([3,2,3]))
console.log(solution([2,2,1,1,1,2,2]))
console.log(solution([110,110,110,230,240]))

// *=-=-=-=-=-=-=-=-=-=-=-=-=-=- WITH CONDITIONS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-* //

const solutionCons = (nums) => {
    const n = nums.length;
    if (n < 1 || n > 5* 104) return -1 // check if like above
    let obj = []; 
    for(let num of nums){
    for(let i = 0; i < nums.length; i++){
        if(num <-109 || num >109) return -1
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        return nums[i];
        }
    }
    for(let key in obj){
        if(obj[nums[i]] > nums.length / 2  ) {
            return key
        }
    }
}
console.log(solutionCons([3,2,3]))
console.log(solutionCons([2,2,1,1,1,2,2]))
console.log(solutionCons([109,109,109,23,24])) // 109
console.log(solutionCons([110,110,110,230,240])) //-1
console.log(solutionCons([-110,-110,-110,-230,-240])) //-1

