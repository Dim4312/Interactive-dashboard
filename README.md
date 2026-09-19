# Interactive Productivity Dashboard for WEB-115

A web-based productivity dashboard created for **WEB-115**. This project demonstrates interactive JavaScript features.

## Technologies Used

- HTML
- CSS
- JavaScript

## Imperial/Metric Converter

The Imperial/Metric Converter converts length and distance between imperial and metric units: inch, foot, yard, mile, centimeter, meter, and kilometer. Enter a numeric value, choose one of eight conversion types, and click **Convert** (or press Enter) to see the result on the dashboard without reloading the page.

### Logic and Pseudocode

The following is the original M5 Assignment Part 1 pseudocode. Its approximate factors are preserved here as the planning record. The working implementation in `metric-converter.js` uses precise factors (2.54, 30.48, 0.9144, and 1.609344) and divides by those same factors for reverse conversions. Only the displayed result is rounded to two decimal places.

```text
BEGIN

    DISPLAY "Metric Converter"
    DISPLAY "Enter a numeric value:"
    INPUT value

    DISPLAY "Select a conversion:"
    DISPLAY "1. Inch to Centimeter"
    DISPLAY "2. Foot to Centimeter"
    DISPLAY "3. Yard to Meter"
    DISPLAY "4. Mile to Kilometer"
    DISPLAY "5. Centimeter to Inch"
    DISPLAY "6. Centimeter to Foot"
    DISPLAY "7. Meter to Yard"
    DISPLAY "8. Kilometer to Mile"

    INPUT conversionChoice

    IF conversionChoice = 1 THEN
        SET result = value * 2.54
        OUTPUT value, " inches = ", result, " centimeters"

    ELSE IF conversionChoice = 2 THEN
        SET result = value * 30.48
        OUTPUT value, " feet = ", result, " centimeters"

    ELSE IF conversionChoice = 3 THEN
        SET result = value * 0.91
        OUTPUT value, " yards = ", result, " meters"

    ELSE IF conversionChoice = 4 THEN
        SET result = value * 1.61
        OUTPUT value, " miles = ", result, " kilometers"

    ELSE IF conversionChoice = 5 THEN
        SET result = value * 0.39
        OUTPUT value, " centimeters = ", result, " inches"

    ELSE IF conversionChoice = 6 THEN
        SET result = value * 0.0328
        OUTPUT value, " centimeters = ", result, " feet"

    ELSE IF conversionChoice = 7 THEN
        SET result = value * 1.09
        OUTPUT value, " meters = ", result, " yards"

    ELSE IF conversionChoice = 8 THEN
        SET result = value * 0.62
        OUTPUT value, " kilometers = ", result, " miles"

    ELSE
        OUTPUT "Invalid conversion selection."
    END IF

END
```

### Browser Implementation

1. Listen for the form's `submit` event, triggered by the Convert button or Enter, and call `preventDefault()`.
2. Read the number field with `document.getElementById()` and convert it with `parseFloat()`.
3. Find the form's select and option elements with `getElementsByTagName()`, then use `selectedIndex` to read the chosen option's value.
4. Reject empty or non-finite input, select the matching conversion, and calculate the result. Zero, decimal, and signed values are supported.
5. Reject invalid choices and results that overflow JavaScript's numeric range.
6. Write the result into the live output area with `innerHTML`, using only parsed numbers and fixed unit labels.

The form and its deferred script are inside `<div class="col" id="metric-converter">` in the dashboard row. Responsive styling is in `css/styles.css`. `Metric_Converter_Tool.js` is retained as the original Part 1 prompt-based version; the dashboard loads `metric-converter.js`.

### Run and Test

Open `index.html` in a browser, or visit the live dashboard below. No build step is required. Open Chrome DevTools Console to check for JavaScript errors while trying these conversions:

| Conversion | Input | Expected result |
| --- | ---: | ---: |
| Inch to Centimeter | 10 | 25.40 centimeters |
| Foot to Centimeter | 10 | 304.80 centimeters |
| Yard to Meter | 10 | 9.14 meters |
| Mile to Kilometer | 10 | 16.09 kilometers |
| Centimeter to Inch | 10 | 3.94 inches |
| Centimeter to Foot | 10 | 0.33 feet |
| Meter to Yard | 10 | 10.94 yards |
| Kilometer to Mile | 10 | 6.21 miles |

Also check zero, decimals, negative values, an empty field, and an excessively large value. Confirm that clicking Convert and pressing Enter both update the result without reloading the page, and that the form fits a narrow mobile screen.

### Submission Links

- [GitHub repository](https://github.com/Dim4312/Interactive-dashboard)
- [Live GitHub Pages dashboard](https://dim4312.github.io/Interactive-dashboard/)

## Author

Created by Dmitro Vizir for WEB-115.
