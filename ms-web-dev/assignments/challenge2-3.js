//Create a program that is written first with logical operators, 
//and then rewrite it using a ternary expression. What's your preferred syntax?

function isPositive(num) {
    if (num > 0) return true;
    else return false;
}
function ternIsPositive(num) {
    return num > 0 ? true : false;
}

console.log(isPositive(12));
console.log(isPositive(-4));
console.log(ternIsPositive(12));
console.log(ternIsPositive(-4));



//another one for good measure
//this one will fail if the numbers are the same but to get it to work with the ternary example it can't consider
//that case, making this a poor choie for hte ternary operator
function max(num1,num2) {
    if (num1 > num2) return num1;
    else return num2;
}

function ternMax(num1,num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(max(4,5));
console.log(ternMax(4,5));
console.log(max(5,5));
console.log(ternMax(5,5));