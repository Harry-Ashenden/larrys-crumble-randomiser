$('.counter, .progressbar').hide()

$('#veganRandomise, #allRandomise').click(function(){

  $('.counter, .progressbar').show()
  var progress = $('.progressbar .progress')

  function counterInit( fValue, lValue ) {

    var counter_value = parseInt( $('.counter').text() )
    counter_value++

    if( counter_value >= fValue && counter_value <= lValue ) {

      $('.counter').text( counter_value + '%' )
      progress.css({ 'width': counter_value + '%' })

      setTimeout( function() {
        counterInit( fValue, lValue )
      }, 50 )


    }

  }

  counterInit( 0, 100 )
})
