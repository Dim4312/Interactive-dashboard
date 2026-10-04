// Convert the value entered in the form.
const converterForm = document.getElementById("converter-form");
const valueInput = document.getElementById("converter-value");
const resultOutput = document.getElementById("conversion-result");

converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = parseFloat(valueInput.value);
    const conversionChoice = parseInt(document.getElementById("conversion-type").value, 10);

    valueInput.removeAttribute("aria-invalid");

    if (!isFinite(inputValue)) {
        resultOutput.textContent = "Please enter a valid number.";
        valueInput.setAttribute("aria-invalid", "true");
        valueInput.focus();
        return;
    }

    let result;
    let sourceUnit;
    let targetUnit;

    if (conversionChoice === 1) {
        result = inputValue * 2.54;
        sourceUnit = "inches";
        targetUnit = "centimeters";
    } else if (conversionChoice === 2) {
        result = inputValue * 30.48;
        sourceUnit = "feet";
        targetUnit = "centimeters";
    } else if (conversionChoice === 3) {
        result = inputValue * 0.9144;
        sourceUnit = "yards";
        targetUnit = "meters";
    } else if (conversionChoice === 4) {
        result = inputValue * 1.609344;
        sourceUnit = "miles";
        targetUnit = "kilometers";
    } else if (conversionChoice === 5) {
        result = inputValue / 2.54;
        sourceUnit = "centimeters";
        targetUnit = "inches";
    } else if (conversionChoice === 6) {
        result = inputValue / 30.48;
        sourceUnit = "centimeters";
        targetUnit = "feet";
    } else if (conversionChoice === 7) {
        result = inputValue / 0.9144;
        sourceUnit = "meters";
        targetUnit = "yards";
    } else if (conversionChoice === 8) {
        result = inputValue / 1.609344;
        sourceUnit = "kilometers";
        targetUnit = "miles";
    } else {
        resultOutput.textContent = "Please select a valid conversion type.";
        return;
    }

    if (!isFinite(result)) {
        resultOutput.textContent = "That number is too large to convert. Please enter a smaller value.";
        return;
    }

    resultOutput.textContent = inputValue + " " + sourceUnit + " is " +
        result.toFixed(2) + " " + targetUnit + ".";
});
