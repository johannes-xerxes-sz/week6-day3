/* Write a function called getRange to get the integers in range (x, y).
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

const getRange = (startRange, endRange) => {
    if (startRange === endRange -1) return []
    return [startRange + 1].concat(getRange(startRange + 1, endRange))
}
console.log(getRange(2, 9)) // [3, 4, 5, 6, 7, 8]
