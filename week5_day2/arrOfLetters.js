/*
Using the multiple pointers pattern, write a function called, areThereDuplicates which accepts a 
array of letters, 
and checks whether there are any duplicates among the argument passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Please implement with time & space complexity of O(n)

Time complexity - O(n)
Space complexity - O(1)
*/
const areThereDuplicates = (arrOfLetters) => {
    // left start on the beginner of the array
    let left = 0
    // right start at the end of the array
    let right = arrOfLetters.length - 1
  
    // while the left pointer is less than the right pointer
    while (left < right) { // if there's still digits inside array if true then move
    // find the duplicated
      const isDuplicated = arrOfLetters[left] === arrOfLetters[right]
  
      if (isDuplicated) {
        return true
        // if there's a duplicate then return true
// ? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      } else if (left + 1 === right) { // if duplicated then left move one
        // right-- moves the right pointer to the left
        right--
        left = 0
      } else {
        // left++ moves the left pointer to the right
        left++
      }
// ? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    }
    // return false if not true
    return false
  }
//Tests
console.log(areThereDuplicates(['a', 'a', 'c', 'd']) )// true
console.log(areThereDuplicates(['a', 'b', 'c']) )// false

