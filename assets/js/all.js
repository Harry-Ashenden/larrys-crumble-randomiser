//Runs the crumbleRandomiser function on click of the button
document.querySelector('#allRandomise').addEventListener('click', setTimeout(randomiserResults, 5200))


//Random percent generator 1-100%
function percentGenerator(num) {
  return Math.round(Math.ceil(Math.random() * num + (num > 0 ? 1 : 0)) - 1)
  }


//Rigged randomiser function
function chance(arr) {
    // Checks for percentages to add up to 100 in array
    const total = arr.reduce((acc, curr) => acc + curr[1], 0)
    if (total !== 100) throw new Error("Sum of percentages must equal 100")

    //Sorts arrays in low to high percent order
    const sorted = arr.sort((a, b) => a[1] - b[1])

    //Calls a random percent 1-100% and sets sum as 0
    const percent = percentGenerator(100)
    let sum = 0

    //Loops through sum, if sum < percent it loops until sum >= percent it returns array
    for (let i = 0; i < sorted.length; i++) {
      sum += sorted[i][1]
      if (sum >= percent) {
        return sorted[i][0]
      }
    }
  }


// Runs the randomiser 3 times for each different component and outputs the result HTML
function randomiserResults() {

  // Gets the current odds from local stoage and converts back into 2d array
  let currentFruitOddsJSON = localStorage.getItem("Fruit Odds")
  let currentFruitOdds = JSON.parse(currentFruitOddsJSON) 

  let currentCrumbOddsJSON = localStorage.getItem("Crumb Odds")
  let currentCrumbtOdds = JSON.parse(currentCrumbOddsJSON)

  let currentToppingOddsJSON = localStorage.getItem("Topping Odds")
  let currentToppingOdds = JSON.parse(currentToppingOddsJSON)

  // Call the randomiser function and assigns to result variables
  let fruitResult = chance(currentFruitOdds)
  let crumbResult = chance(currentCrumbtOdds)
  let toppingResult = chance(currentToppingOdds)
  
  // Outputs the results to the result ID in the html
  document.querySelector('#result').innerText = `Fruit = ${fruitResult}, Crumb = ${crumbResult}, Topping = ${toppingResult}`
}
