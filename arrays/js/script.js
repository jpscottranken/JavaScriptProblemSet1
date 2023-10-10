//  Input 5 test scores.
//  Each score must be numeric and between 0 and 100.
//  Figure out the total.
//  Figure out the average.
//  Display the average.

function main() {
  let testScores = []
  let total = 0

  //  66, 73, 88, 91, 100
  for (let lcv = 0; lcv < 5; ++lcv) {
    testScores[lcv] = parseInt(prompt("Enter test score (0 - 100)", 75))
    while (isNaN(testScores[lcv])) {
      testScores[lcv] = parseInt(
        prompt("Please enter test score (0 - 100)", 75)
      )
    }
  }

  for (let lcv = 0; lcv < 5; ++lcv) {
    total += testScores[lcv]
  }

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
