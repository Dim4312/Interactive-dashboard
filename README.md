# Interactive Productivity Dashboard for WEB-115

A web-based productivity dashboard created for **WEB-115**. This project demonstrates interactive JavaScript features.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap 5.3 (CSS and JavaScript from the jsDelivr CDN)

## TODO

- [x] Add weekly task goal calculator

## Weekly Task Goals

Enter a name, a daily task goal, and any bonus tasks, then click **Calculate weekly goal**. The calculator multiplies the daily goal by five workdays and adds the bonus tasks. For example, a daily goal of 5 and 2 bonus tasks gives a total weekly goal of 27.

The form requires a name and whole task counts of zero or more. You can change the inputs and calculate again for another person. The reusable `weeklyGoal(userName, dailyGoal, bonusTasks)` function calculates the total and displays it in `goal-message` using `innerHTML`. The name is inserted with `textContent` so it is displayed as text. This component uses `js/weekly-goals.js` and appears alongside the converter and Magic Eight Ball in Bootstrap columns, which stack on small screens.

## Imperial/Metric Converter

This app converts between inch, foot, yard, mile, centimeter, meter, and kilometer. Enter a number, select the conversion type, and click Convert to see the result. The converter code is in `js/metric-converter.js`.

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

## Magic Eight Ball

Type a yes/no question and click the ball to get one random answer. An empty question shows an alert. After an answer, more clicks do nothing and the question stays locked. Click **Ask another question** to clear the question, hide the answer, and allow a new question. Pressing Enter in the form does not give another answer.

The game uses an `answers` array, `Math.random()`, and event listeners. The image and shake animation came from the assignment starter files. The **Add a response** button lets you add an answer and logs it and the number of answers to the console. Added responses last until the page is refreshed.

This feature was made and tested on the `development` branch before merging into `main`.

## Submission Links

- [GitHub repository](https://github.com/Dim4312/Interactive-dashboard)
- [Live GitHub Pages dashboard](https://dim4312.github.io/Interactive-dashboard/)

## Author

Created by Dmytro Vizir for WEB-115.
