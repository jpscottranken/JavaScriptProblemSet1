//  Input 5 test scores.
//  Each score must be numeric and between 0 and 100.
//  Figure out the total.
//  Figure out the average.
//  Display the average.

function main() {
  let test1 = parseInt(prompt("Enter test score 1 (0 - 100)", 75))
  while (isNaN(test1)) {
    test1 = parseInt(prompt("Please enter test score 1 (0 - 100)", 75))
  }

  let test2 = parseInt(prompt("Enter test score 2 (0 - 100)", 75))
  while (isNaN(test2)) {
    test2 = parseInt(prompt("Please enter test score 2 (0 - 100)", 75))
  }

  let test3 = parseInt(prompt("Enter test score 3 (0 - 100)", 75))
  while (isNaN(test3)) {
    test3 = parseInt(prompt("Please enter test score 3 (0 - 100)", 75))
  }

  let test4 = parseInt(prompt("Enter test score 4 (0 - 100)", 75))
  while (isNaN(test4)) {
    test4 = parseInt(prompt("Please enter test score 4 (0 - 100)", 75))
  }

  let test5 = parseInt(prompt("Enter test score 5 (0 - 100)", 75))
  while (isNaN(test5)) {
    test5 = parseInt(prompt("Please enter test score  5 (0 - 100)", 75))
  }

  const total = test1 + test2 + test3 + test4 + test5
  const avg = total / 5

  alert("Your average test score was: " + avg.toFixed(2))
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
