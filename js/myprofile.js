// alert("js")
$(document).ready(function (){
    $('.nameErr').hide()
     $('.noErr').hide()
      $('.mailErr').hide()
       $('.pwdErr').hide()
        $('.nameErr').hide()
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
                $('.nameErr').hide()
            }
        })

        // ph no
        $('#no').on('input',function(){
            let data1=$('#no').val();
            if(data1.length<1)
            {
                $('.noErr').show()
                $('.noErr').html("please enter a valid ph no")
            }
            else if(data1.length<10)
            {
                $('.noErr').show()
                $('.noErr').html("no should be 10 digit")
            }
            else{
                $('.noErr').hide()
            }
        })

        // email
        $('#emailid').on('input',function(){
            let data2=$('#emailid').val();
            if(data2.length<10)
            {
                $('.mailErr').show()
                $('.mailErr').html("input a valid email id")
            }
            else if(data1.length<10){
                $('.mailErr').show()
                $('.mailErr').html("email is okay")
            }
            else{
                $('.mailErr').hide()
            }
        })
        // password
         $('#pwd').on('input',function(){
            let data3=$('#pwd').val();
            if(data3.length<10)
            {
                $('.pwdErr').show()
                $('.pwdErr').html("please enter atleast 8 digit")
            }
            else{
                $('.pwdErr').hide()
            }
        })
        // confirm password match
         $('#cpwd').on('input',function(){
            let data4=$('#cpwd').val();
            let data3=$('#pwd').val();
            if(data3==data4)
            {
                $('.cpwdErr').show()
                $('.cpwdErr').html("password is match")
            }
            else{
                $('.cpwdErr').show()
                $('.cpwdErr').html("not match")
            }
        })

         $('#location').on('input',function(){
            let data5=$('#location').val();
            if(data5.length<8)
            {
                $('.locErr').show()
                $('.locErr').html("Enter Your Current location")
            }
            else{
                $('.locErr').hide()
            }
        })
})