let submit
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
    
}
$(document).ready(function() {
    function disablePrev() { window.history.forward() }
    window.onload = disablePrev();
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
 });