// Write a recursive function called palindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.
// palindrome('tony') // false
// palindrome('monkey') // false
// palindrome('tacocat') // true
// palindrome('sos') // true

const palidrome = (str) => {
    //define the base-case / stopping condition
    if (str.length === 1) return true  //! smallest input

    // do some work to shrink the problem space
    if (str.length === 2) return str[0] === str[1]
    if (str[0] === str.slice(-1)) return palidrome(str.slice(1, -1)) // pointer left and right comparing
    //* if they are not the same then it will be false
    // additional base-case to handle non-palindromes
    return false
}

console.log(palidrome('tony'));
console.log(palidrome('monkey'));
console.log(palidrome('tacocat'));
console.log(palidrome('sos'));
