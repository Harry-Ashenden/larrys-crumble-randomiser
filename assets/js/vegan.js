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
const veganResults = async () => {

  // Gets the current fruits odds from local stoage and converts back into 2d array
  let currentVeganFruitOddsJSON = localStorage.getItem("Fruit Odds")
  let currentVeganFruitOdds = JSON.parse(currentVeganFruitOddsJSON) 
  // Call the randomiser function and assigns to result variables
  let veganFruitResult = chance(currentVeganFruitOdds)
  let veganCrumbResult = chance(veganCrumb)
  let veganToppingResult = chance(veganTopping)
  
  // Outputs the results to the result IDs in the html
  document.querySelector('#veganFruitResult').innerText = `${veganFruitResult}`
  document.querySelector('#veganCrumbResult').innerText = `${veganCrumbResult}`
  document.querySelector('#veganToppingResult').innerText = `${veganToppingResult}`
}  

//Runs the crumbleRandomiser function on click of the button, has timeout to delay function from running until the candy cane laoding bar is complete
document.querySelector('#veganRandomise').addEventListener('click', veganResults)

