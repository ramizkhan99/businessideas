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
       // headers: {
       //     'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgzYWU2Yjk5YTcxMjE3NTA3ZmQ5ZGYiLCJpYXQiOjE1Njg5MTA5NTV9.maw4OHue7G5tvd-nArJRxXH40HAaITDHG83CMGtdSUk"
       // },
       data: JSON.stringify({
           "email": emailId,
           "password": passwd
       }),
       crossDomain: true,
       dataType: "json",
       contentType: "application/json",
       success: function (response) {
           // console.log(response)
           token = response.token
           console.log(token)
           // alert('success')
           // return response
           localStorage.setItem('user', JSON.stringify(response))
           // localStorag.setItem('')
           location.href='/companies'
       }
   });
    
            
    
 }
