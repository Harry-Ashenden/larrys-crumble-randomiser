// Progress bar with percentage

// Hiding counter and loading bar on page load
$('.counter, .progressbar').hide()

// On click of either randomise button function runs
$('#veganRandomise, #allRandomise').click(function(){

  // hide buttons and show loading bar
  $('#allRandomise, #veganRandomise').hide()
  $('.progressbar').show()

  var progress = $('.progressbar .progress')

  // runs a loop that increases the counter and therefore the loading section of the prgress bar
  function counterInit( fValue, lValue ) {

    var counter_value = parseInt( $('.counter').text() )
    counter_value++

    if( counter_value >= fValue && counter_value <= lValue ) {

      $('.counter').text( counter_value + '%' )
      progress.css({ 'width': counter_value + '%' })

      // controls the time it takes between loops in ms ie the speed of the loading
      setTimeout( function() {
        counterInit( fValue, lValue )
      }, 10 )

    }
  
    // At the same time the loading bar finishes the bar is hidden and results section is shown
    setTimeout( function() {
      $(".progressbar").hide()
      $('.hidden').show()
    }, 1800)

  }

  counterInit( 0, 100 )

})