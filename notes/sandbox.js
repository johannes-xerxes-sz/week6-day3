/*
const solution = (nums) => {
    let count = 0
    let option = 0
    
    for( let i =0; i<nums.length; i++){
        if(count === 0){
            option = nums[i]
        }
        
        count += nums[i] == option ? 1:-1
    }
    
    return option
}
*/

/*
    let obj = [];
    for(let i = 0; i < nums.length; i++){
        const n = nums.length
        if (1 <= n <= 5 * 104 || -109 <= nums[i] <= 109) {
            obj[nums[i]] = obj[nums[i]] + 1 || 1;
            if(obj[nums[i]] > nums.length / 2  )  
            return nums[i];
        }
        else {
            obj[nums[i]] = obj[nums[i]] + 1 || 1;
            if(obj[nums[i]] > nums.length / 2  )  
            return false;
        }

    }
*/


/* const longestSubstringInString = (str) => {
    let length = 0; // initialize a pointers length and start at 0
    let letterCount = {}; // add letter count 
    let start = 0;
    
    for(let i = 0; i < str.length; i++){ // continue if i is still less than
        let letter= str[i] ; // letter as str[i]

        if(letterCount[letter] && letterCount[letter] > start)
        {
            start = letterCount[letter];
        }
        if(i - start + 1 > length)
        {
            length = i - start + 1;
        }

        letterCount[letter] = i + 1;
    }
    return length;
} */