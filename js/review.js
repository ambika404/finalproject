$(document).ready(function (){
$('.nameErr').hide()
$('.nameErr').hide()
// for name
$('#nametext').on('input',function(){
            let data=$('#nametext').val();
            if(data.lenght<1)
            {
                $('.nameErr').show()
                $('.nameErr').html("required feild")
            }
            else if(data.length<10)
            {
                $('.nameErr').show()
                $('.nameErr').html("minimum 8 characters")
            }
            else{
                $('.nameErr').hide()
            }
        })
        // for review
        $('#review2').on('input',function(){
            let data=$('#review2').val();
            if(data.lenght<1)
            {
                $('.revErr').show()
                $('.revErr').html("required feild")
            }
            else if(data.length<10)
            {
                $('.revErr').show()
                $('.revErr').html("enter your review here")
            }
            else{
                $('.revErr').hide()
            }
        })

})
