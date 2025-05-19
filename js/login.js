// alert("js")

$(document).ready(function (){
//    $(function(){

// $('.con-btn').on( 'click',function (){
//     $('.log-in').hide();
//      $('.banner').show();
//      $(this).hide();
// })
// })
$('.noErr').hide()
// ph no
$('#phno').on('input',function(){
    let data=$('#phno').val()
    if(data.length<1)
    {
        $('.noErr').show()
        $('.noErr').html("required feild")
    }
    else if(data.length<10)
    {
         $('.noErr').show()
         $('.noErr').html("minimum 10 characters")
    }
    else{
        $('.noErr').hide()
        $('.verificationpage').show()
    }
})
    



})