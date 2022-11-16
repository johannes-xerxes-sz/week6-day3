// Write a recursive function called reverseString which accepts a string and returns a new string 
// in reverse.
// reverseString('tony') // 'ynot'
// reverseString('baker') // 'rekab'

function reverseString(str){
    if (str.length === 1) return str // base case 
    // console.log(str)
    return reverseString(str.slice(1)) // shrinks the problem space
    + str[0] // smallest unit of work to contribute
     // recursive call 

     /*
        pass: TONY
        reverseString("ony") + t //!since it has not yet completed then it will repeat
        reverseString("ny") + o //! self manage
        reverseString("y") + n //! widdle down to a single string then it return "y" then it will
        ! widdle down to and pop off single string then it return "yn"
        ! pop off return "yno"
        ! pop off return "ynot"
        ! last return "ynot"
     */

}

console.log(reverseString('tony'));
console.log(reverseString('baker'));