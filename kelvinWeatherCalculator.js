// This is a constant kelvin variable
const kelvin = 283;
// Celcius is 273 degrees less than kelvin
const celcius = kelvin - 273.15;
console.log(`The temperature in celcius is ${celcius}.`);
// This is the ecuation to calculate fahrenheit
let fahrenheit = celcius * (9/5) + 32;
// Get a round and not a decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Newton temperature
 let newton = celcius * (33/100);
 newton = Math.floor(newton);
 console.log(`The temperature in newton is ${newton}`);