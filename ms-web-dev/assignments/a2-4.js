//Create a program that lists every 3rd number between 1-20 and prints it to the console.
//initiate the arrays
let start = [];
let solution = [];

//set of functions to perform the task
function randeUpTo(num) {
    result = [];
    validateOneNumber(num);
    for (let i = 1; i < num; i++) {
        result.push(i);
    }
    return result;
}

function everyThird(data) {
    let result = [];
    for (const element of data) {
        if (element % 3 == 0) {
            result.push(element);
        }
    }
    return result;
}

function printArray (data) {
    for (element of data) console.log(element);
}

function validateOneNumber(n) {
    if (!Number.isFinite(n)) {
        throw new TypeError('The input was not a finite number');
    }
}

//run the functions 
start = rangeUpTo(20);
solution = everyThird(start);
printArray(solution);