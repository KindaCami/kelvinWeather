// This is a constant kelvin variable
const kelvin = 283;
// Celsius is 273 degrees less than kelvin
const celsius = kelvin - 273.15;
console.log(`The temperature in celsius is ${celsius}.`);
// This is the ecuation to calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Get a round and not a decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// Ecuation to calculate Newton temperature
 let newton = celcius * (33/100);
 newton = Math.floor(newton);
 console.log(`The temperature in newton is ${newton}`);


// We can make functions, or in this case implement "helper functions" to have the same result than the previous code to converts Celsius to Fahrenheit but more efficienly
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59


