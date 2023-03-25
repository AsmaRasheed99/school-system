

// 5- Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways


const numbers1 = [0, 1, 2, 3, 4, 5];

const numbers2 = numbers1.map(myFunction);


function myFunction(value) {
  return Math.pow(2,value)
}
console.log(numbers2)



// 6- Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string
// "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"israa"]) returns ['odd','even','odd','N/A'].

const array = [0, 1, "Anhar", 2, 3, "Asma"];

const array2 = array.map(myFunction1);

function myFunction1(value) {
    if ((typeof value !== "number")) {
        return "N/A";
    }
else if (value % 2 == 0){
    return "Even";
}
else {
    return "Odd";}
    
}

console.log(array2);


// 7- Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.


let output=[];
const arr = [3, 5, 7, 15, 30, 50, 52];
arr.forEach(fizzbuzz);

function fizzbuzz(value) {
    if (value % 3 == 0 && value % 5 == 0){
        output.push("Fizz Buzz")
    }
    else if (value % 3 == 0){
        output.push("Fizz")
    }
    else if (value % 5 ==0){
        output.push("Buzz")
    }
    else {
        output.push(value)
    }
}
console.log(output);