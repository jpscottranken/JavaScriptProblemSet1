const MINTEMP = -100
const MAXTEMP = 212
let fTemp = 0
let cTemp = 0

function main() {
  inputFahrenheitTemperature()
  calculateCelsiusTemperature()
  displayResults()
  runAgain()
}

function inputFahrenheitTemperature() {
  do {
    //  Prompt for temperature. Convert to a float.
    fTemp = parseFloat(
      prompt(
        "Enter a Fahrenheit temperature.\nEntry must range from -100 to +212."
      )
    )
  } while (fTemp < MINTEMP || fTemp > MAXTEMP)
}

function calculateCelsiusTemperature() {
  //  Calculate the Celsius temperature.
  //  To convert Fahrenheit to Celsius,
  //  first subtract 32 from the Fahrenheit
  //  temperature. Then, multiply result by 5/9.
  cTemp = ((fTemp - 32) * 5) / 9
}

function displayResults() {
  const html = `<p>${fTemp}
    degrees fahrenheit = ${cTemp.toFixed(1)} degrees Celsius`
  document.write(html)
}

function runAgain() {
  let again = prompt("Run the program again?!? (Y/N)", "Y")
  let firstCharacter = again.toUpperCase().charAt(0)

  if (firstCharacter === "Y") {
    main()
  }
}

main()
