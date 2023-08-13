//Ingredients lists
const fruit = [
    ["Apple", 50],
    ["Rhubarb", 20],
    ["Peach and Cinnamon", 15],
    ["Mince Pie", 15],
]

const crumb = [
    ['Crumble', 50],
    ['Oats', 50],
 ]

const topping = [
    ['Custard', 45],
    ['Whipped Cream', 45],
    ['Brandy Sauce', 10],
]


//Runs the crumbleRandomiser function on click of the button
document.querySelector('#randomiseCrumbles').addEventListener('click', randomiserResults)


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

    // Call the randomiser function and assigns to result variables
    let fruitResult = chance(fruit)
    let crumbResult = chance(crumb)
    let toppingResult = chance(topping)

    // Outputs the results to the result ID in the html
    document.querySelector('#result').innerText = `Fruit = ${fruitResult}, Crumb = ${crumbResult}, Topping = ${toppingResult}`
}

//Runs the reset funciton on clikc of the reset button
document.querySelector('#reset').addEventListener('click', reset)


// Reset button fills the results html with nothing
function reset() {
    document.querySelector('#result').innerText = ''
}



// SPINNING WHEEL

function myfunction(){


	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000); //5000 = 5 second
}
