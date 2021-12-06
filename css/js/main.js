
// (function ($) {
//     "use strict";


//     /*==================================================================
//     [ Focus input ]*/
//     $('.input100').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })    
//     })
  
  
//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    
//     /*==================================================================
//     [ Show pass ]*/
//     var showPass = 0;
//     $('.btn-show-pass').on('click', function(){
//         if(showPass == 0) {
//             $(this).next('input').attr('type','text');
//             $(this).addClass('active');
//             showPass = 1;
//         }
//         else {
//             $(this).next('input').attr('type','password');
//             $(this).removeClass('active');
//             showPass = 0;
//         }
        
//     });


// })(jQuery);

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
console.log(username, password);
if ( username == "student" && password == "123"){
    alert ("Login successfully");
    window.open("student/dist/index.html");
    console.log(username, password); // Redirecting to other page.
}
else if(username == "messworker" && password == "123"){
    alert("Login successfully");
    window.open("mess-worker/dist/index.html");
}
else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
    $("username").disabled = true;
    $("password").disabled = true;
    $("submit").disabled = true;
    }
}
}