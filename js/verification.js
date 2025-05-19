// alert("js")
$(document).ready(function (){
//    $(function(){

// $('.con-btn').on( 'click',function (){
//     $('.log-in').hide();
//      $('.banner').show();
//      $(this).hide();
// })
// })
$('.pdErr').hide()
// ph no
$('#pwd').on('input',function(){
    let data1=$('#pwd').val()
    if(data1.length<4)
    {
        $('.pdErr').show()
        $('.pdErr').html("time 00.30")
    }

    else if(data1.length<5)
    {
         $('.pdErr').show()
         $('.pdErr').html("Resend OTP...")
    }

    else{
        $('.pdErr').hide()
    }
})
    



})
