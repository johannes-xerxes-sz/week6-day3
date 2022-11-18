// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.
// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

const capitalizeAllLetters = (array) => {
    if (array.length === 1) {
        return [array[0].toUpperCase()]
      }
      let result = capitalizeAllLetters(array.slice(0, -1))
      result.push(array.slice(array.length - 1)[0].toUpperCase())
      return result 
}
console.log(capitalizeAllLetters(['tony', 'truck']));