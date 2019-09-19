let submit
window.onload=()=>{
    alert("nope")
    if(!document.cookie){
        alert("working")
        location.href='/login'
    }
}

const selected = (company,e)=>{
    
    let name = "company"+e
    submit=company
    
     
     document.querySelector('#submit button').classList.remove('disabled')

     for (let index = 1; index < 6; index++) {
         const element = document.getElementById('company' + index) 
         element.classList.remove('green')
        element.classList.remove('lighten-1')
     }
     document.getElementById(name).classList.add('green')
     document.getElementById(name).classList.add('lighten-1')
}
const submitSend = ()=>{
    var url = '/question?id=' + submit;
    location.href = url
    console.log("submitted company  "+submit)
    $.ajax({
        type: "PATCH",
        url: "https://business-ideas-users-api.herokuapp.com/users/me",
        headers: {
            'Authorization': `Bearer ${document.cookie}`
        },
        data: JSON.stringify({
            "company": submit
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
            console.log(response)
            // localStorag.setItem('')
            location.href='/companies'
        }
    });
    
}
$(document).ready(function() {
    function disablePrev() { window.history.forward() }
    window.onload = disablePrev();
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
 });