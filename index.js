
/*
! Problem 1: In 3-4 sentences, please explain what Big O Notation is.
Its basically a way on analyzing the run Time for the algorithm to execute as the Input Size 
of the algorithm and finding an asymptotic upper bound. 
As it the input grows or it scales this brings a measure into two (2) parts of efficiency in which the 
Time Complexity and Space Complexity. 
Time complexity is a measure on how long does the function goes to run in computational steps.
Space complexity has to do with the amount of memory used by the function.
Big O doesnt say in which  the best case scenario of a test was presented but the worse case on performing

*/

/*
! Problem 2: For each of the time complexities shown below:

- Name the complexity
- Rank from 1-5 (1 being the best, 5 being the worst) 
- Describe in 1-2 sentences of the complexity
- Provide a code example of how the complexity works
*/

/*
Name: O(1) - Constant time complexity
Rank: 1
Describe:  Constant Time Complexity take a constant amount of time to run, independently of the size of n.
When there is no dependence on the input size n, an algorithm is said to have a constant time of order
Sample: 
const twoSum = (num1, num2) => {
    return num1 + num2
*/

/*
Name: O(log n) - Logarithmic time complexity
Rank: 2
Describe: complexity is often related to divide and conquer algorithms when it needs to find a number or create divisions. 
Also common in recursive and binary search since it divides iteration to describe on a binary tree in which size n is divided 
into sub-problem of size n/2 until we reach a problem of size 1
Sample:
    let numberOfLoops = 0;
    for (let i = 1; i<arr1.length; i*=2) {
        numberOfLoops++
    }
    return numberOfLoops
}
*/

/*
Name: O(n) - Linear time complexity
Rank: 3
Describe: Time complexity grows in direct proportion to the size of the input. 
Or when there is no dependence on the input size n, an algorithm is said to have a constant time of order
Sample:
for(let i = 0; i < arr1.length; i++) {
    console.log(arr[i])

}
*/
 
/*
Name: O(n^2) Quadratic time complexity
Rank: 4
Describe: Time complexity grows in direct proportion to the size of the input. 
It can be descrive as a matrix since it computes an area of the program
Sample:
n = 4
for (let i = 0; i < n; i++){
    for (let j = 1; i < n; j++){
        console.log(i,j)
    }
}
}
*/

/*
Name: O(n!) Factorial Time Complexity
Rank: 5
Describe: When the size of the input data decreases in each step by a certain factor, an algorithm will have logarithmic time complexity.
This means as the input size grows, the number of operations that need to be executed grows comparatively much slower.
Sample:
const factorial = (n) => {
    let num = n; // num = 5 (sample)
    if (n === 0) return 1;
    for (let i = 0; i < n; i++) {
        num = n * factorial(n -1); // num = 5 * 4 * 3 ...
    }
    return num;
}
console.log(factorial(5))
}
*/

/*
! Problem 3: Name 3 reasons why we care about Big O and we care about code performance. 
    - Code Optimze when accessing and processing the code that even with a lot of features it wont be affected.
    - Easier on the maintenance that adding and deleting features wont be a problem.
    - Save and Earn a lot of money since faster sites gets more tractions.
*/

/*
! Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines.
    In measuring using perforamace.now() will be a problem if tried on a bigger scale since 
    every computer is different in systems, hardwares, operating systems, and more.
    this may result in which the program seem faster on your end while on slower hardwares will seem noticable.
*/

/*
! Problem 5: Given the following piece of code: 
const someFunction = (arr1) => { //? O(1)
 arr1.push(1).pop()
 
 for (let i = 0; i < arr1.length; i++) { //? O(n)
 console.log('do something 2')
 }
 
 for (let i = 0; i < arr1.length; i++) { //? O(n)
 console.log('do something 3')
 }
 
 for (let i = 0; i < arr1.length; i++) { //? O(n^2)
 for (let i = 0; i < arr1.length; i++) {
 console.log('do something 3')
 }
 }
}

? - Explain what the TOTAL time complexity is 
In the start we can see that the arr1 opo is a constant
after that the for function will be a linear both on do something 2 and 3 then 
the qudratic time on the last since do something 4 will be do until the length will be done
and loop, it would be: 1 + n + n + n^2
? - Explain what the CONSOLIDATED time complexity is
after adding the worse performing in the loop, it would condense to: n^2

*/

/*
! Problem 6: Given the following piece of code: 
const someFunction1 = (arr1) => { //? O(1)
 let sum = arr1[1] + arr[2]
 
 while (condition) { //? O(n)
 sum = arr[5] + arr[7]
 }
 
 for (let i = 0; i < arr1.length; i++) {  //? O(n^3)
 for (let i = 0; i < arr1.length; i++) {
 for (let i = 0; i < arr1.length; i++) {
 console.log('do something 3')
 }
 }
 }
}
? - Explain what the TOTAL time complexity is 
In the start we can see that the arr1+arr2 opo is a constant
after that the for while condition will be a linear both on the sum then 
the cubic time on the last since do something 3 will be do until the length will be done
and loop, it would be: 1 + n + n^3
? - Explain what the CONSOLIDATED time complexity is
after adding the worse performing in the loop, it would condense to: n^3

*/
/*

! Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities. 
Constant will be negligible as the actual growth impact comes from the Big O, When calculating the time complexities is 
at which the data will grow and having a constant on there will be irrelevant when there will be a large input presented. 
It is the "heavy" or worse time complexity in which we need to find which is the slowest run time and see
the biggest impact which the code runs at.

*/
/*

! Problem 8: In 2-3 sentences, please explain what space complexity is and why we care. 
Measures the specific memory usage of a specific program such as Booleans, numbers, undefined and null that 
needed this constant space. Everytime a program a new program or a function was created 
when the time complexity is created the input within the fuction the amount of time to run related to the input. 
It is the working space or storage that is required by any algorithm

*/
/*
! Problem 9: Given the following data TYPES, label what the space complexity is for each one:

* Boolean 
? Constant Space Complexity

* Undefined
? Constant Space Complexity

* Null
? Constant Space Complexity

* Numbers
? Constant Space Complexity

* String 
? Linear Space Complexity

* Array 
? Linear Space Complexity

* Object
? Linear Space Complexity

*/

/*
! Problem 10: Give two reasons when you should use a array and when you should use a object. 
array
- fast access to elements
- need order
object
- no need for ordering
- no need for fast access

*/
/*
! Problem 11: Given the following object methods, label what the TIME complexity is for each one: 

const obj = { 
 name: 'tony'
}
//inserting
obj.age = 44;  //? O(1)
//removing 
delete obj.age;  //? O(1)
//searching 1
obj.hasOwnProperty['name']  //? O(n)
//searching 2
for (const prop in obj) {  //? O(n)
 console.log(obj[prop])  
}
//accessing
obj.age //44  //? O(1)
//retrieving keys
Object.keys(obj)  //? O(1)
//retrieving values
Object.values(obj)  //? O(1)


! Problem 12: Given the following array methods, label what the TIME complexity is for each one: 

const arr2 = [1, 2, 3, 4, 5, 6, 7]; 
//inserting 1
arr2.push(8) //? O(1)
//inserting 2
arr2.unshift(0) //? O(n)
//removing 1
arr2.pop() //? O(1)
//removing 2
arr2.shift() //? O(n)
//searching 1
const findNumber = arr2.find(num => num === 2) //? O(n)
//searching 2
for (let i = 0; i < arr2.length; i++) { //? O(n) 
 if (arr2[i] === 2) {
 return arr2[i]
 }
}
//retrieving 
const getNumber = arr2[3] //? O(1)
//method 1 
const double = arr2.map(num => num * 2) //? O(n) 
//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5)  //? O(n)
//method 3
const getSum = arr2.reduce((total, num) => total + num, 0)  //? O(n)
//method 4
for (const num of nums) { //! O(n)
 console.log(num * 2)
}
//method 5
const convertToString = arr2.join(' ') //! O(n)
//method 6
const reversed = arr2.reverse(); //! O(n) 


*/
/*
! Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is.

? Problem 1:

function findFirstIndexOfNumber(number, array) { 
 for (let i = 0; i < array.length; i++) { //? Time complexity - O(n)  SC -  4n
 if (array[i] === number) { //? Time complexity O(1)  // SC -  2
 return i;   //? SC -  1
 }
 }
 return -1 
 }

Time complexity: n + 1
Space complexity: 4 + 2 + 1 
Explaination: Because there's a linear time of order which is the for loop.
Containing the number or the boolean
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 2:

function findEachIndexOfNumber(number,array) {
 let arrayOfIndexes = []; 
 array.forEach(function(element, index) { //? Time complexity - O(1n) 
 if (element === number) { //? Time complexity - O(1) 
 arrayOfIndexes.push(index);  //? Time complexity - O(1)
 }
 });
 return arrayOfIndexes;
 }

Time complexity: n
Space complexity: O(n) 
Explaination: Because there's a linear time of order which is the foreach loop.
Returning an array of indexes

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 3:

const array = [36, 14, 1, 7, 21];
function higherOrLower(array) {
 if (array[array.length -1 ] > array[0]) {  //? Time complexity - O(1) 
 return "Higher";
 else if (array[array.length -1 ] < array[0]) { //? Time complexity - O(1) 
 return "Lower";
 } else {  //? Time complexity - O(1)  
 return "Neither";
 }
}

Time complexity: O(1) + O(1) + O(1)
Space complexity: O(1) 
Explaination: Retrieving elements of the array.
Because the program only returning a string which 
doesn’t contain any loops, recursive functions or call to any other functions that affects the data.

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 4:

const array = [1,2,3,4,5,6,7,8]; //? Time complexity - O(1) 
function determineSumOfSequentialArray(array) {
 let sum = 0;
 for (let i = 0; i < array.length; i++) {   //? Time complexity - O(n) 
 sum += array[i];    //? Time complexity - O(1) 
 }
 return sum;

Time complexity: 1 + n + 1
Space complexity: O(1) 
Explaination: repeating an array access
Only returning a number and no data sets added 

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 5:

const array = [1,2,3,4,5,6,7,8];
function determineSumOfSequentialArray(array) { //? Time complexity - O(1)  
 return array.length * (array.length + 1)/2;  //? Time complexity - O(1)  
}

Time complexity: 1 + 1
Space complexity: O(1) 
Explaination: Total number of array math equation
returning a quotient on the length

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 6:

function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) { //? Time complexity - O(n) 
    let middleIndex = Math.floor((beginIndex + endIndex)/2);  
    if (array[middleIndex] === number) { //? Time complexity - O(n) 
 return middleIndex; 
 } else if (beginIndex >= endIndex) { //? Time complexity - O(2 n) 
 return -1;
 } else if (array[middleIndex] < number) { //? Time complexity - O(2 n)  
 beginIndex = middleIndex + 1;
 return recursiveBinarySearch(number, array, beginIndex, endIndex);   
 } else if (array[middleIndex] > number) { //? Time complexity - O(2 n) 
 endIndex = middleIndex - 1;
 return recursiveBinarySearch(number, array, beginIndex, endIndex);   //? Time complexity - O(1) 
 }
 }

Time complexity: O(log n) 
Space complexity: O(1) 
Explaination: Binary search
And just returning a number
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 7:

const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
function compareArrays(array1, array2) {
 let arrayOfPairs = [];
 array1.forEach(function(e, i) { 
 array2.forEach(function(e2, i2) { //? Time complexity - O(n^2) 
 if (e === e2) {  
 arrayOfPairs.push([i, i2]); 
 }
 });
 });
 return arrayOfPairs;
 }

Time complexity: O(n^2) 
Space complexity: O(n) 
Explaination: Inserting and array access
Becuase the program is inserting to a new array and variable changes

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 8:

function sortByValue(array){
 function swap(array, index1, index2){
 let temporaryValue = array[index1];
 array[index1] = array[index2];
 array[index2] = temporaryValue;
 }
 let count = 1;
 while (count < array.length) { //? TC - 2n
 let swapCount = 0;
 for (let i=0; i<array.length-count; i++) { 
 if (array[i] > array[i+1]) { 
 swap(array, i, i+1);
 swapCount++;
 }
 }
 count++;
 }
 return array;
 }

Time complexity: O(n + n ^ 2 + 1 + n + n)
Space complexity: O(1) 
Explaination: doing a swap function while function in progress while is on going Sort
Containing temporary data space

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 9:

function returnDupes(array, array2) {
 let dupeArray = [];
 array.forEach(function(element) {
 if (array2.includes(element)) {
 dupeArray.push(element);
 }
 });
 return dupeArray;
 }

Time complexity: O(1 + n^2)
Space complexity: O(n)
Explaination: forEach then includes the array2 
push to new duplicate arrays element on a new arry and data was looping

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? Problem 10:

function sumFilteredData(array) {  
 return array.filter(function(element) { //? SC 1  TC - n
 return ((element > 5) && (element < 20)) 
 }).reduce(function(valueToAdd, currentValue) { //? SC 1 TC - n
 return valueToAdd + currentValue; //? SC 1
 }, 0);
 }

Time complexity:  O(n + n)
Space complexity: O(1)
Explaination: reduce. 
Only returning the sum of the value number

* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

*/