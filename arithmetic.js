console.log("Auto-graded Task 1");
console.log("");

let findSum = (num1, num2, num3) => num1 + num2 + num3;
let subtractNumbers = (num1, num2) => num2 - num1;
let multiplyNumbers = (num1, num2) => num1 * num2;
function divideNumbers(num1, num2) {
    // To handle division by zero, introduce a condition to check if num2 is zero.
    if (num2 === 0) {
        return "Division by zero not allowed";
    }
    // Assuming the array is in increasing order, toFixed(1) rounds off to one decimail place.
    return parseFloat(num1/num2).toFixed(1);
}

// Define an array to story to store selected integers.
let myArray = [10, 15, 25];

console.log(findSum(myArray[0], myArray[1], myArray[2]));
console.log(subtractNumbers(myArray[0], myArray[1]));
console.log(multiplyNumbers(myArray[0], myArray[2]));
console.log(divideNumbers(findSum(myArray[0], myArray[1], myArray[2]), myArray[2]));
console.log();
console.log("End of Code");