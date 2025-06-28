//Create a program that lists every 3rd number between 1-20 and prints it to the console.
//initiate the arrays
start = [];
solution = [];

//set of functions to perform the task
function arrayGenerate(num) {
    result = [];
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

//run the functions 
start = arrayGenerate(20);
solution = everyThird(start);
printArray(solution);