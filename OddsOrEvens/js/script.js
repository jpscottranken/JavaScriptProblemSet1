"use strict"

function main() {
  //  Ask user to enter a number
  let number = parseInt(prompt("Enter a Number", 25))

  //  Verify that the user entered a number
  while (isNaN(number)) {
    number = parseInt(prompt("Please Enter a Number", 25))
  }

  //  A number was inputted. Check to see if that number was 0
  if (number === 0) {
    alert("The number 0 is neither odd nor even")
  }
  //  Divide number by 2. Check remainder. If 0, number is even
  else if (number % 2 === 0) {
    alert("The number " + number + " is even")
  }
  //  Divide number by 2. Check remainder. If 0, number is even
  else {
    alert("The number " + number + " is odd")
  }

  runAgain()
}

main()

function runAgain() {
  let again = prompt("Run the program again?!? (Y/N)", "Y")
  let firstCharacter = again.toUpperCase().charAt(0)

  if (firstCharacter === "Y") {
    main()
  }
}
