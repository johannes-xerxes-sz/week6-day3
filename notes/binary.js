
const binaryIterativeSearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1; 
    let mid = Math.floor((left + right) / 2);
    while (nums[mid] !== target && left <= right) {
      if (target < nums[mid]) right = mid - 1;
      else
        left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    return nums[mid] === target ? mid : -1;
  }
  
  console.log(binaryIterativeSearch([-1,0,3,5,9,12],9))
  console.log(binaryIterativeSearch([-1,0,3,5,9,12],2))
  console.log(binaryIterativeSearch([-1,0,3,5,9,12],3))
  
  
  