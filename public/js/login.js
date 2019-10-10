// var database = firebase.database();

$(document).ready(function() {
    function disablePrev() { window.history.forward() }
    window.onload = disablePrev();
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
 });
 const submit = ()=>{
    let emailId = document.getElementById('email').value
    let passwd = document.getElementById('password').value
    let token
   //  console.log(emailId, passwd)
   $.ajax({
       type: "POST",
       url: "https://business-ideas-users-api.herokuapp.com/users/login",
       data: JSON.stringify({
           "email": emailId,
           "password": passwd
       }),
       crossDomain: true,
       dataType: "json",
       contentType: "application/json",
       success: function (response) {
           
           token = response.token
           console.log(token)
          
           localStorage.setItem('user', JSON.stringify(response))
           document.cookie=token
           console.log
           if(response.user.quizDone){
               location.href='/question'
           }
           else{
            location.href='/quiz'
           }
           
       }
   });
    
            
    
 }
 window.addEventListener("keydown",function (e) {
    if (e.keyCode === 13 ) { 
        submit()
    }
})
