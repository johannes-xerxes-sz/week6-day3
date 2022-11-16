/* 
Using multiple pointers pattern, write a function called avgPair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in 
the array 
where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
Please implement with time complexity of O(n) and space O(1)
Time complexity - O(n)
Space complexity - O(1)
*/
const avgPair = (arr, avgTarget) => {    // 2 pointer pattern
    // left pointer starts at the beginning of the array
    let left = 0;
    // right pointer starts at the end of the array
    let right = arr.length - 1;

    // while the left pointer is less than the right pointer
    while (left < right) {
        // find the average
        let average = (arr[left] + arr[right]) / 2;
        // if the average is equal to the avgTarget average, return true
        if (average === avgTarget) {
            return true;
// ? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
            // avgTarget greater then move the right pointer to the left
        } else if (average > avgTarget) {
            // right-- moves the right pointer to the left
            right--;
            // else move the left pointer to the right
        } else {
            // left++ moves the left pointer to the right
            left++;
        }
// ? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    }
    // return false if not true
    return false;
}
// Test Cases: 
console.log(avgPair([1,2,3],2.5)) // true
console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(avgPair([-1,0,3,4,5,6], 4.1)) // false
console.log(avgPair([],4)) // false