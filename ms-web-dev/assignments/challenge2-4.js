// we're going to create some looping functions with the below mixed dataset
// the point is to use less well known (by me) looping strategies, i.e  forEach, for-of, and map. 
// some ideas are to print the loop, some to create an array with just numbers
// one to create another array with only strings

const dataset = [1,43,12,'A', 'x', 23, 't', 'g',22];
let numbers = [];
let letters = [];

function printArray(data) {
    for (const index of data) {
        console.log(index);
    }
}

function printForEach(data) {
    data.forEach(element => {
        console.log(element);
    });
}

function numberArray(data) {
    let result = [];
    let j = 0;
    for (const element of data) {
        if (typeof(element) == 'number') {
            result[j] = element;
            j++;
        }
    }
    return result;
}
function stringArray (data) {
    let result = [];
    let j = 0;
    for (const element of data) {
        if (typeof(element) == "string") {
            result[j] = element;
            j++;
        }
    }
    return result;
}


// printArray(dataset);
numbers = numberArray(dataset);
// printForEach(numbers);
letters = stringArray(dataset);
// printArray(letters);


// Map Practice

// Write a function that takes an array of numbers and returns a new array with each number doubled.
function doubleArray(data) {
    return data.map((x) => x * 2); 
}
let doubled = [];
doubled = doubleArray(numbers);
printForEach(doubled);
// Write a function that takes an array of strings and returns a new array with each string in uppercase.
// Write a function that takes an array of numbers and returns a new array with each number squared.
// Write a function that takes an array of names and returns a new array with "Hello, " prepended to each name.
// Write a function that takes an array of words and returns a new array with the length of each word.
// Write a function that takes an array of numbers and returns a new array of strings, where each string says "Even" or "Odd" based on the number.
// Write a function that takes an array of objects with a `name` property and returns an array of just the names.
// Write a function that takes an array of dates (as strings) and returns an array of Date objects.
// Write a function that takes an array of numbers and returns an array of booleans indicating if each number is greater than 10.
// Write a function that takes an array of strings and returns an array with the first letter of each string capitalized.