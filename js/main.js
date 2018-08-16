$(function() {

    $(document).on('scrollstart', function() {
        console.log('scroll started')
    })
  
    $(document).on('scrollend', function() {
        console.log('scroll ended')
    })
  
})