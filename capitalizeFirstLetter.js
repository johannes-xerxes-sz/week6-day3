// Write a recursive function called capitalizeTheFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirstLetter(['tony', 'truck']); // ['Tony', 'Truck']

const capitalizeFirstLetter = (array) => {
    if (array.length === 1) { //! BASE CASE IF THE ONE LAST ARRAY REMAINS
      //! THIS IS FOR THE FIRST ARRAY
        return [array[0][0].toUpperCase() + array[0].substring(1)] // tries to capitalized everything
      } // creates 2 dimensional array
      // ['TONY'] ['tony'] //* ONE UPPER CASE, OTHER WASNT
      // Get 0 first index array on the UpperCase + (ADD) second index which is 1 and rest of the word

      //! RECURSIVE CALL  IF MORE THAN 1 ARRAY IS PRESENTED
      const result = capitalizeFirstLetter(array.slice(0, -1))
      // console.log(`The array is ${[array]}`)
      // -1 to process all of the arrays
      const capWord =
      array.slice(array.length - 1)[0][0].toUpperCase()  
      // console.log(`The array is ${[array]}`)
      + // ['TRUCK'] get the T
      array.slice(array.length - 1)[0].substring(1) // subtring 1 small T to change capital T
      // ['truck']
 
      result.push(capWord)
      return result
    }


// console.log(capitalizeFirstLetter(['tony']));
console.log(capitalizeFirstLetter(['tony', 'truck']));
// console.log(capitalizeFirstLetter(['tony', 'truck', 'monkey', 'apple', 'Sample']));
