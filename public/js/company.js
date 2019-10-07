let submit


const selected = (company,e)=>{
    
    let name = "company"+e
    submit=company
    
     
     document.querySelector('#submit button').classList.remove('disabled')

     for (let index = 1; index < 6; index++) {
         const element = document.getElementById('company' + index) 
         element.classList.remove('light-green')
        element.classList.remove('lighten-4')
     }
     document.getElementById(name).classList.add('light-green')
     document.getElementById(name).classList.add('lighten-4')
}
const submitSend = ()=>{
    if(!document.cookie){
        
        location.href='/login'
    }
    else{
    var url = '/info?id=' + submit;
    
    console.log("submitted company  "+submit)
    
    // PATCH request not working
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
            console.log(response)
            alert('success')
            location.href = url
            // return response
            
            
        }
        
    });}
    
}
$(document).ready(function() {
    function disablePrev() { window.history.forward() }
    window.onload = ()=>{
        disablePrev()
        alert("nope")
        if(!document.cookie){
            
            location.href='/login'
        }
        let user =  JSON.parse(localStorage.getItem('user'))
        console.log(user.user.company)
        if(user.user.company){
            console.log("I have a company")
            location.href = '/question?id='+user.user.company    
        }
     }
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
 });
//  $(document).bind("contextmenu",function(e){
//     e.preventDefault();
//     console.log(e.pageX + "," + e.pageY);
//     $("#cntnr").css("left",e.pageX);
//     $("#cntnr").css("top",e.pageY);
//    // $("#cntnr").hide(100);        
//     $("#cntnr").fadeIn(200,startFocusOut());      
//   });
  
//   function startFocusOut(){
//     $(document).on("click",function(){
//     $("#cntnr").hide();        
//     $(document).off("click");
//     });
//   }
  
//   $("#items > li").click(function(){
//   $("#op").text("You have selected "+$(this).text());
//   });
