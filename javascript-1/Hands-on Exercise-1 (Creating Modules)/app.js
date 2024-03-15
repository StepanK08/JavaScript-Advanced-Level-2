import {calculateCircumference} from './circleCalculator.js';

// can't use onclick on the button because modules create their own scope
document.querySelector('#submitButton').onclick = submitFunction;

function submitFunction() {
    let radius = parseFloat(document.getElementById("radius").value);
    let circumference = calculateCircumference(radius)
    document.getElementById("output").innerHTML = `The circumference is ${circumference}!`;
}

