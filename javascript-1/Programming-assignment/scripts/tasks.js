/* Lesson 3 */

/* FUNCTIONS */
function add(number1, number2) {
    return number1 + number2; 
}
const subtract = function(number1, number2) {
    return number1 - number2; 
}
const multiply = (number1, number2) => {
    return number1 * number2; 
}
const divide = (number1, number2) => {
    return number1 / number2; 
}
function addNumbers() {
    const sumField = document.querySelector("#sum"); 
    const addend1 = document.querySelector("#addend1"); 
    const addend2 = document.querySelector("#addend2"); 
    sumField.value = add(Number(addend1.value), Number(addend2.value)); 
}
const subtractNumbers = function() {
    const differenceField = document.querySelector("#difference"); 
    const minuend = document.querySelector("#minuend"); 
    const subtrahend = document.querySelector("#subtrahend"); 
    differenceField.value = subtract(minuend.value, subtrahend.value);
}
const mulitplyNumbers = () => {
    const productField = document.querySelector("#product"); 
    const factor1 = document.querySelector("#factor1");
    const factor2 = document.querySelector("#factor2"); 
    productField.value = multiply(Number(factor1.value), Number(factor2.value));  
}
const divideNumbers = () => {
    const quotientField = document.querySelector("#quotient"); 
    const dividend = document.querySelector("#dividend");
    const divisor = document.querySelector("#divisor");
    quotientField.value = divide(dividend.value, divisor.value); 


}
const addNumbersBtn = document.querySelector("#addNumbers"); 
const subtractNumbersBtn = document.querySelector("#subtractNumbers"); 
const multiplyNumbersBtn = document.querySelector("#multiplyNumbers"); 
const devideNumbersBtn = document.querySelector("#divideNumbers"); 
addNumbersBtn.addEventListener("click", addNumbers); 
subtractNumbersBtn.addEventListener("click", subtractNumbers); 
multiplyNumbersBtn.addEventListener("click", mulitplyNumbers); 
devideNumbersBtn.addEventListener("click", divideNumbers); 


// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

var currentDate = new Date();
var currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

var numbersArray = Array.from({length: 25}, (_, i) => i + 1);
document.getElementById("array").innerText = numbersArray.join(', ');
var oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").innerText = oddNumbers.join(', ');
var evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").innerText = evenNumbers.join(', ');
var sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfArray").innerText = sumOfArray;
var multipliedArray = numbersArray.map(num => num * 2);
document.getElementById("multiplied").innerText = multipliedArray.join(', ');
var sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfMultiplied").innerText = sumOfMultiplied;

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
