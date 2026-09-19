# Interactive Productivity Dashboard for WEB-115

A web-based productivity dashboard created for **WEB-115**. This project demonstrates interactive JavaScript features.

## Technologies Used

- HTML
- CSS
- JavaScript

## Imperial/Metric Converter

This app converts between inch, foot, yard, mile, centimeter, meter, and kilometer. Enter a number, select the conversion type, and click Convert to see the result.

### Logic and Pseudocode

This is my pseudocode from Part 1. The JavaScript uses more accurate conversion factors and rounds the result to two decimal places.

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

### How to Use

Open `index.html` in a browser or use the live link below. For example, entering 10 and choosing Inch to Centimeter gives 25.40 centimeters. An empty field shows an error message.

### Submission Links

- [GitHub repository](https://github.com/Dim4312/Interactive-dashboard)
- [Live GitHub Pages dashboard](https://dim4312.github.io/Interactive-dashboard/)

## Author

Created by Dmitro Vizir for WEB-115.
