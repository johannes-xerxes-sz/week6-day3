/* 
Write a function called longestSubstringInString, which accepts a string and 
returns the length of the longest substring with all distinct characters.
Please write in time complexity of O(n)
*/
const longestSubstringInString = (str) => {
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        } // index - beginning of substring + 1 , include current in count
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double the count
        seen[char] = i + 1;
    }
    
    return longest;
}
// Test Cases: 
console.log(longestSubstringInString('')) // 0
console.log(longestSubstringInString('rithmschool')) // 7
console.log(longestSubstringInString('thisisawesome')) //6
console.log(longestSubstringInString('thecatinthehat')) //7
console.log(longestSubstringInString('bbbbbb')) //1
console.log(longestSubstringInString('longestsubstring')) //8
console.log(longestSubstringInString('thisishowwedoit')) //6