$(document).ready(function() {

    $('.submit').click(function(event) {
        event.preventDefault()
        console.log("button clicked")
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()
        if (email.length > 5 && email.includes('0') && email.includes('.')) {
            status.append('Email is valid')
        } else {
            status.append('Email is not valid')
        }
    })

})