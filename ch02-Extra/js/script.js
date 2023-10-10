//  Prompt for temperature. Convert to a float.
//let fahr = prompt("Enter a temperature", 100)
//let fTemp = parseFloat(fahr)
let fTemp = parseFloat(prompt("Enter a temperature", 100))

//  Calculate the Celsius temperature.
//  To convert Fahrenheit to Celsius,
//  first subtract 32 from the Fahrenheit
//  temperature. Then, multiply result by 5/9.
const cel = ((fTemp - 32) * 5) / 9

const html = `<p>${fTemp}
  degrees fahrenheit = ${cel.toFixed(1)} degrees Celsius`
document.write(html)
