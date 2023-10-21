//Ingredients lists
let fruit = [
  ["Apple", 50],
  ["Rhubarb", 20],
  ["Peach and Cinnamon", 20],
  ["Mince Pie", 10],
]

let crumb = [
  ['Crumble', 50],
  ['Oats', 50],
]

let topping = [
  ['Custard', 45],
  ['Whipped Cream', 45],
  ['Brandy Sauce', 10], 
]

let veganCrumb = [
  ['Oats', 100]
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
      ["Apple", 50],
      ["Rhubarb", 20],
      ["Peach and Cinnamon", 20],
      ["Mince Pie", 10],
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
        ["Apple", appleValue],
        ["Rhubarb", rhubarbValue],
        ["Peach and Cinnamon", peachAndCinnamonValue],
        ["Mince Pie", mincePieValue],
      ]

      // Converting 2d array to JSON for storage
      let fruitStorage = JSON.stringify(fruit)

      // Adding to local storage
      localStorage.setItem("Fruit Odds", fruitStorage)

      // Adding success message if odds add up to 100
      document.querySelector('#fruitSuccessMessage').innerText = `Odds updated Apple: ${appleValue}, Rhubarb: ${rhubarbValue}, Peach and Cinnamon; ${peachAndCinnamonValue}, Mince Pie: ${mincePieValue}`

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
      ['Crumble', 50],
      ['Oats', 50],
    ]
    
    // Converting 2d array to JSON for storage
    let crumbStorage = JSON.stringify(crumb)

    // Adding to local storage
    localStorage.setItem("Crumb Odds", crumbStorage)
    
    // Adding success message if odds add up to 100
    document.querySelector('#crumbSuccessMessage').innerText = `Crumb odds updated to default`

  } else {

    // Setting inputted odds to the fruit variable
    let crumbleValue = Number(document.querySelector('#crumble').value)
    let oatsValue = Number(document.querySelector('#oats').value)


    // Checking for 100 as total
    if (crumbleValue + oatsValue === 100) {

      // Updating the fruit 2d array to contain inputted odds
      let crumb = [
        ['Crumble', crumbleValue],
        ['Oats', oatsValue],
      ]

      // Converting 2d array to JSON for storage
      let crumbStorage = JSON.stringify(crumb)

      // Adding to local storage
      localStorage.setItem("Crumb Odds", crumbStorage)

      // Adding success message if odds add up to 100
      document.querySelector('#crumbSuccessMessage').innerText = `Odds updated Crumble: ${crumbleValue}, Oats: ${oatsValue}`

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
      ['Custard', 40],
      ['Whipped Cream', 40],
      ['Brandy Sauce', 20], 
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
    let brandySauceValue = Number(document.querySelector('#brandySauce').value)


    // Checking for 100 as total
    if (custardValue + whippedCreamValue + brandySauceValue === 100) {

      // Updating the fruit 2d array to contain inputted odds
      let topping = [
        ['Custard', custardValue],
        ['Whipped Cream', whippedCreamValue],
        ['Brandy Sauce', brandySauceValue], 
      ]

      // Converting 2d array to JSON for storage
      let toppingStorage = JSON.stringify(topping)

      // Adding to local storage
      localStorage.setItem("Topping Odds", toppingStorage)

      // Adding success message if odds add up to 100
      document.querySelector('#toppingSuccessMessage').innerText = `Odds updated Custard: ${custardValue}, Whipped Cream: ${whippedCreamValue}, Brandy Sauce ${brandySauceValue}`

      // Error message when odds do not equal 100
    } else {
      document.querySelector('#toppingSuccessMessage').innerText = `Odds not updated as total does not equal 100, MATH IS HARD HAVE ANOTHER GO`
    }
  }
}





// potentially need a fallback option in which the randomisers still runs without manually inputted odds