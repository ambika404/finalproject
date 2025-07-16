// alert("js")
$(document).ready(function (){
    $('.nameErr').hide()
    $('.mailErr').hide()
    $('.pwdErr').hide()
    // for name
    $('#name').on('input',function(){
        let data=$('#name').val();
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
                $('.nameErr').show()
                $('.nameErr').html("name is okay")
            }
    })
    // email
     $('#mailid').on('input',function(){
        let data1=$('#mailid').val();
        if(data1.lenght<1)
            {
                $('.mailErr').show()
                $('.mailErr').html("required feild")
            }
            else if(data1.length<10)
            {
                $('.mailErr').show()
                $('.mailErr').html("minimum 8 characters")
            }
            else{
                $('.mailErr').show()
                $('.mailErr').html("name is okay")
            }
    })
    // password
     $('#pwd').on('input',function(){
        let data2=$('#pwd').val();
        if(data2.lenght<1)
            {
                $('.pwdErr').show()
                $('.pwdErr').html("required feild")
            }
            else if(data2.length<10)
            {
                $('.pwdErr').show()
                $('.pwdErr').html("minimum 8 characters")
            }
            else{
                $('.pwdErr').show()
                $('.pwdErr').html("name is okay")
            }
    })
})