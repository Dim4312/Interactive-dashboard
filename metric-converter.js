// Adapted from the prompt-based Metric_Converter_Tool.js from Part 1.
const converterForm = document.getElementById("converter-form");
const valueInput = document.getElementById("converter-value");
const resultOutput = document.getElementById("conversion-result");

// A submit listener handles both the Convert button and the Enter key.
converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = parseFloat(document.getElementById("converter-value").value);
    // Scope the tag lookup to this form so other dashboard selects cannot interfere.
    const conversionSelect = converterForm.getElementsByTagName("select")[0];
    const selectedOption = conversionSelect.getElementsByTagName("option")[conversionSelect.selectedIndex];
    const conversionChoice = selectedOption ? Number(selectedOption.value) : 0;

    valueInput.removeAttribute("aria-invalid");

    if (!Number.isFinite(inputValue)) {
        resultOutput.innerHTML = "Please enter a valid, finite number.";
        valueInput.setAttribute("aria-invalid", "true");
        valueInput.focus();
        return;
    }

    let result;
    let sourceUnit;
    let targetUnit;

    // Use exact factors and their reciprocals; round only when displaying.
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
        resultOutput.innerHTML = "Please select a valid conversion type.";
        return;
    }

    if (!Number.isFinite(result)) {
        resultOutput.innerHTML = "That number is too large to convert. Please enter a smaller value.";
        return;
    }

    // Only parsed numbers and fixed unit labels are inserted into the output.
    resultOutput.innerHTML = inputValue + " " + sourceUnit + " is " +
        result.toFixed(2) + " " + targetUnit + ".";
});
