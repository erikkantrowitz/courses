//Fun With Functions

// Write a function called `add` that takes two numbers as arguments and returns their sum.
function add(num1, num2) {
    return num1 + num2;
}
// Write a function called `subtract` that takes two numbers as arguments and returns their difference.
function subtract(num1, num2) {
    return num1 - num2;
}
// Write a function called `multiply` that takes two numbers as arguments and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}
// Write a function called `divide` that takes two numbers as arguments and returns their quotient.
function divide(num1, num2) {
    return num1 / num2;
}

//still not sure the best use cases of => functions
const isEven = n => n % 2 === 0;


//print functions
function printAdd(a,b){
    console.log(add(a,b));
}

function printSubtract(a,b){
    console.log(subtract(a,b));
}

function printMultiply(a,b) {
    console.log(multiply(a,b));
}

function printDivide(a,b) {
    console.log(divide(a,b));
}

//testing out the functions
printAdd(3,4);
printSubtract(5,4);
printDivide(2,4);
printMultiply(3,3);
console.log(isEven(5));

//Write a function called square that takes one number as an argument and returns its square.
function square(num) {
    return num*num;
}
//Write a function called isPositive that takes one number as an argument and returns true if it is positive, false otherwise.
function isPositive(num) {
    if (num < 0) return false;
    else return true;
}
//test for isPositive
console.log(isPositive(-4));
console.log(isPositive(4));
//Write a function called max that takes two numbers as arguments and returns the larger one.
function max(num1,num2) {
    if (num1 > num2) return num1;
    else if (num2 > num1) return num2;
    else {
        console.log("both numbers are the same");
        return null;
    }
}
// test for max
console.log(max(3,4));
console.log(max(16,4));
console.log(max(3,3));

//Write a function called minOfThree that takes three numbers as arguments and returns the smallest one.
function minOfThree(num1, num2, num3) {
    let min = num1;
    if (num2 < min) min = num2;
    if (num3 < min) min = num3;
    return min;
}
//tests
console.log(minOfThree(1,23,-4));
console.log(minOfThree(100,-423,-4));
console.log(minOfThree(-1,-23,-4));
console.log(minOfThree(1,23,4));

//Write a function called repeatString that takes a string and a number as arguments and returns the string repeated that many times.
function repeatString(string, num) {
    let repeatedWord = '';
    for (let i = 0; i < num; i++) {
        repeatedWord += string;
    }
    return repeatedWord;
}

console.log(repeatString("Howdy", 12));

//Write a function called reverseArray that takes an array as an argument and returns a new array with the elements in reverse order.
//Write a function called sumArray that takes an array of numbers as an argument and returns the sum of all the numbers.
//Write a function called countVowels that takes a string as an argument and returns the number of vowels in the string.
//Write a function called isPalindrome that takes a string as an argument and returns true if it is a palindrome, false otherwise.
//Write a function called findIndex that takes an array and a value as arguments and returns the index of the value in the array, or -1 if not found.