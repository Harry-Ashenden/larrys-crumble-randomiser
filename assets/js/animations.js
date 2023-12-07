// Regular progress bar with percentage

$('.counter, .progressbar').hide()

$('#veganRandomise, #allRandomise').click(function(){

  $('#allRandomise, #veganRandomise').hide()
  $('.progressbar').show()

  var progress = $('.progressbar .progress')

  function counterInit( fValue, lValue ) {

    var counter_value = parseInt( $('.counter').text() )
    counter_value++

    if( counter_value >= fValue && counter_value <= lValue ) {

      $('.counter').text( counter_value + '%' )
      progress.css({ 'width': counter_value + '%' })

      setTimeout( function() {
        counterInit( fValue, lValue )
      }, 10 )

    }
  
    setTimeout( function() {
      $(".progressbar").hide()
      $('.hidden').show()
    }, 1800)

  }

  counterInit( 0, 100 )

})

// Candy Cane loading bar

// $("#veganRandomise").click(function() {
//   $('body').toggleClass('bodyAnimate');
//   $('.candy').toggleClass('candyAnimate');
//   $('.candyLoader').toggleClass('candyLoaderAnimate');
// }); 

// $("#allRandomise").click(function() {
//   $('body').toggleClass('bodyAnimate');
//   $('.candy').toggleClass('candyAnimate');
//   $('.candyLoader').toggleClass('candyLoaderAnimate');
// }); 