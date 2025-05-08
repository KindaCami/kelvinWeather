# Temperature Converter

A simple JavaScript script to perform conversions between different temperature scales: Kelvin, Celsius, Fahrenheit, and Newton. The script takes an initial value in Kelvin and calculates the other scales.

## How to Use

1.  **Set Initial Temperature:**
    Modify the `kelvin` constant at the beginning of the script with the temperature value you want to convert.
    ```javascript
    const kelvin = 283; // Change this value
    ```

2.  **Run the Script:**
    Execute the file in a JavaScript environment (such as a web browser's console or using Node.js).
    ```bash
    # If using Node.js:
    node your_script_file.js
    ```

3.  **View Results:**
    The converted temperatures for Celsius, Fahrenheit (rounded down), and Newton (rounded down) will be displayed in the console.

## Conversions Performed

The script performs the following conversions:

* **Kelvin to Celsius:**
    `Celsius = Kelvin - 273.15`
* **Celsius to Fahrenheit:**
    `Fahrenheit = Math.floor(Celsius * (9/5) + 32)`
* **Celsius to Newton:**
    `Newton = Math.floor(Celsius * (33/100))`
    *(Note: Ensure you are using the `celsius` variable correctly in your Newton calculation in the actual code.)*

## Refactoring with Functions

The code also includes a demonstration of how the conversion logic (specifically Celsius to Fahrenheit) can be refactored into helper functions to improve modularity and reusability.

**Example Function (Celsius to Fahrenheit):**
```javascript
function multiplyByNineFifths(number) {
  return number * (9/5);
}

function getFahrenheit(celsius) {
  // To match the main logic, rounding would be done here or when using the function
  let fahrenheitTemp = multiplyByNineFifths(celsius) + 32;
  return Math.floor(fahrenheitTemp);
}

// Example usage:
// const tempCelsius = 15;
// console.log(`Fahrenheit: ${getFahrenheit(tempCelsius)}`); // Output: Fahrenheit: 59
