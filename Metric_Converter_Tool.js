// Metric Converter Tool
alert("Metric Converter");
var value = prompt("Enter a numeric value:");
value = Number(value);
alert("Select a conversion:\n1. Inch to Centimeter\n2. Foot to Centimeter\n3. Yard to Meter\n4. Mile to Kilometer\n5. Centimeter to Inch\n6. Centimeter to Foot\n7. Meter to Yard\n8. Kilometer to Mile");
var conversionChoice = prompt("Enter the number of your conversion choice:");
conversionChoice = Number(conversionChoice);
var result;
if (conversionChoice === 1) {
    result = value * 2.54;
    alert(value + " inches = " + result + " centimeters");
} else if (conversionChoice === 2) {
    result = value * 30.48;
    alert(value + " feet = " + result + " centimeters");
} else if (conversionChoice === 3) {
    result = value * 0.91;
    alert(value + " yards = " + result + " meters");
} else if (conversionChoice === 4) {
    result = value * 1.61;
    alert(value + " miles = " + result + " kilometers");
} else if (conversionChoice === 5) {
    result = value * 0.39;
    alert(value + " centimeters = " + result + " inches");
} else if (conversionChoice === 6) {
    result = value * 0.0328;
    alert(value + " centimeters = " + result + " feet");
} else if (conversionChoice === 7) {
    result = value * 1.09;
    alert(value + " meters = " + result + " yards");
} else if (conversionChoice === 8) {
    result = value * 0.62;
    alert(value + " kilometers = " + result + " miles");
} else {
    alert("Invalid conversion selection.");
}
