/*
Write a function called subsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string 
appear somewhere in the second string, without their order changing.
Write your solution with time complexity O(n) and space O(1)
*/
const subsequence = (str1, str2) => {
    let str = 0; // initialize a pointers str and seq at 0
    let seq = 0;
    while (str < str2.length && seq < str1.length) { 

        // while str is less than str1.length and while seq less than str1.length
      if (str2[str] === str1[seq]) { // check if seq === str1.length
        str++;  // if so increment both pointers up
        seq++;  // if not only increment the string pointer to check the next character
    // if so return true
      } else { // else check if str2[str] === str1[seq]
        str++; // if so increment both pointers up
      }
    }
    return seq === str1.length;
}

// Test Cases:
console.log(subsequence('hello', 'hello world')) //true
console.log(subsequence('sing', 'sting')) //true
console.log(subsequence('abc', 'abracadabra')) //true
console.log(subsequence('abc', 'acb')) //false
console.log(subsequence('abca', 'acbc')) //true