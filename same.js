/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value cubed in 
the second array. 
The frequency of values must be the same.
*/

const same = (arr1, arr2) => {
    if (!arr1 || !arr2) return false;
    if (arr1.length !== arr2.length) return false;

    let freq1 = {}
    let freq2 = {}

    for (let num of arr1) {
        freq1[num] = (freq1[num] || 0) + 1
    }
    for (let num of arr2) {
        freq2[num] = (freq2[num] || 0) + 1
    }
    for (let key in freq1) {
        if(!(key ** 3 in freq2)) { 
            return false;
        }
        if (freq2[key ** 3 ] !== freq1[key]) {
            return false;
        }
    }
    return true; 
}
console.log(same([1,2,3], [8,1,27])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [8,8,1])) // false (must be same frequency)

