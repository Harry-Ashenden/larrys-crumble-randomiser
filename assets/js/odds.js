//Ingredients lists
let fruit = [
  ["Apple and Cinnamon", 50],
  ["Rhubarb", 20],
  ["Peach and Nutmeg", 20],
  ["Mince Pie", 10],
]

let crumb = [
  ['Traditional Crumb', 50],
  ['Granola', 50],
]

let topping = [
  ['Custard', 50],
  ['Whipped Cream', 50],
]

let veganCrumb = [
  ['Granola', 100]
]

let veganTopping = [
  ['Whipped Cream', 100]
]



/////////// Fruit Odds /////////////////
document.querySelector('#fruitSubmit').addEventListener('click', fruitOdds)

// Function which runs on click of the html submit button
function fruitOdds() {

  // checking for default odds tick box, if yes update with default odds, if no update odds with imput 
  if (document.querySelector('#fruitDefault').checked == true) {

    // Updating 2d fruit array and adding to local storage
    fruit = [
      ["Apple and Cinnamon", 25],
      ["Rhubarb", 25],
      ["Peach and Nutmeg", 25],
      ["Mince Pie", 25],
    ]

    // Converting 2d array to JSON for storage
    let fruitStorage = JSON.stringify(fruit)

    // Adding to local storage
    localStorage.setItem("Fruit Odds", fruitStorage)
    
    // Adding success message to confim default odds updated
    document.querySelector('#fruitSuccessMessage').innerText = `Fruit odds updated to default`
  
  } else {
    // Setting inputted odds to the crumb variable
    let appleValue = Number(document.querySelector('#apple').value)
    let rhubarbValue = Number(document.querySelector('#rhubarb').value)
    let peachAndCinnamonValue = Number(document.querySelector('#peachAndCinnamon').value)
    let mincePieValue = Number(document.querySelector('#mincePie').value)

    // Checking for 100 as total
    if (appleValue + rhubarbValue + peachAndCinnamonValue + mincePieValue == 100) {

      // Updating the fruit 2d array to contain inputted odds
      fruit = [
        ["Apple and Cinnamon", appleValue],
        ["Rhubarb", rhubarbValue],
        ["Peach and Nutmeg", peachAndCinnamonValue],
        ["Mince Pie", mincePieValue],
      ]

      // Converting 2d array to JSON for storage
      let fruitStorage = JSON.stringify(fruit)

      // Adding to local storage
      localStorage.setItem("Fruit Odds", fruitStorage)

      // Adding success message if odds add up to 100
      document.querySelector('#fruitSuccessMessage').innerText = `Odds updated Apple and Cinnamon: ${appleValue}, Rhubarb: ${rhubarbValue}, Peach and Nutmeg; ${peachAndCinnamonValue}, Mince Pie: ${mincePieValue}`

      // Error message when odds do not equal 100
    } else {
      document.querySelector('#fruitSuccessMessage').innerText = `Odds not updated as total does not equal 100, MATH IS HARD HAVE ANOTHER GO`
    }
  }
  
}



/////////// Crumb Odds /////////////////
document.querySelector('#crumbSubmit').addEventListener('click', crumbOdds)

// Function which runs on click of the crumb html submit button
function crumbOdds() {

  // checking for default odds tick box, if yes update with default odds, if no update odds with imput 
  if (document.querySelector('#crumbDefault').checked == true) {

    // Updating the crumb 2d array to contain default odds
    let crumb = [
      ['Traditional Crumb', 50],
      ['Granola', 50],
    ]
    
    // Converting 2d array to JSON for storage
    let crumbStorage = JSON.stringify(crumb)

    // Adding to local storage
    localStorage.setItem("Crumb Odds", crumbStorage)
    
    // Adding success message if odds add up to 100
    document.querySelector('#crumbSuccessMessage').innerText = `Crumb odds updated to default`

  } else {

    // Setting inputted odds to the fruit variable
    let tradCrumbleValue = Number(document.querySelector('#tradCrumble').value)
    let granolaValue = Number(document.querySelector('#granola').value)


    // Checking for 100 as total
    if (tradCrumbleValue + granolaValue === 100) {

      // Updating the fruit 2d array to contain inputted odds
      let crumb = [
        ['Traditional Crumb', tradCrumbleValue],
        ['Granola', granolaValue],
      ]

      // Converting 2d array to JSON for storage
      let crumbStorage = JSON.stringify(crumb)

      // Adding to local storage
      localStorage.setItem("Crumb Odds", crumbStorage)

      // Adding success message if odds add up to 100
      document.querySelector('#crumbSuccessMessage').innerText = `Odds updated Traditional Crumb: ${tradCrumbleValue}, Granola: ${granolaValue}`

      // Error message when odds do not equal 100
    } else {
      document.querySelector('#crumbSuccessMessage').innerText = `Odds not updated as total does not equal 100, MATH IS HARD HAVE ANOTHER GO`
    }
  }
}



/////////// Topping Odds /////////////////
document.querySelector('#toppingSubmit').addEventListener('click', toppingOdds)

// Function which runs on click of the topping html submit button
function toppingOdds() {

  // checking for default odds tick box, if yes update with default odds, if no update odds with imput 
  if (document.querySelector('#toppingDefault').checked == true) {

    // Updating the topping 2d array to contain inputted odds
    let topping = [
      ['Custard', 50],
      ['Whipped Cream', 50],
    ]
    
    // Converting 2d array to JSON for storage
    let toppingStorage = JSON.stringify(topping)

    // Adding to local storage
    localStorage.setItem("Topping Odds", toppingStorage)
    
    // Adding success message if odds add up to 100
    document.querySelector('#toppingSuccessMessage').innerText = `Topping odds updated to default`

  } else {

    // Setting inputted odds to the fruit variable
    let custardValue = Number(document.querySelector('#custard').value)
    let whippedCreamValue = Number(document.querySelector('#whippedCream').value)

    // Checking for 100 as total
    if (custardValue + whippedCreamValue === 100) {

      // Updating the fruit 2d array to contain inputted odds
      let topping = [
        ['Custard', custardValue],
        ['Whipped Cream', whippedCreamValue],
      ]

      // Converting 2d array to JSON for storage
      let toppingStorage = JSON.stringify(topping)

      // Adding to local storage
      localStorage.setItem("Topping Odds", toppingStorage)

      // Adding success message if odds add up to 100
      document.querySelector('#toppingSuccessMessage').innerText = `Odds updated Custard: ${custardValue}, Whipped Cream: ${whippedCreamValue}`

      // Error message when odds do not equal 100
    } else {
      document.querySelector('#toppingSuccessMessage').innerText = `Odds not updated as total does not equal 100, MATH IS HARD HAVE ANOTHER GO`
    }
  }
}