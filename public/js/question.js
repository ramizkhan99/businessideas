let answer = 1
let resp


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam)
let companychoice = myParam

function myFunction(option) {
    console.log(option)
    answer = option
}
window.onload=()=>{
    if(!document.cookie){
        
        location.href='/login'
    }
    submit()
    
}
window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        e.preventDefault();
    }
})
window.addEventListener("keydown",function (e) {
    if ( e.ctrlKey && e.keyCode === 67) { 
        e.preventDefault();
    }
})


const submit = () => {
    
    changecolor()
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
    instance.close(1);
    instance.close(2);
    instance.close(3);
    
    //resp[answer].impact
    
    if(!resp){
        answer=1
    }
    else{
        
        Swal.fire({
            type: 'success',
            title: 'Submitted',
            text: resp[answer].impact
            //footer: '<a href>Why do I have this issue?</a>'
          })
       
        answer=resp[answer].nextid

    }
    $.ajax({
        type: "POST",
        url: "https://us-central1-business-idea-c71fa.cloudfunctions.net/app/",
        data: {
            qno: answer,
            company:"company/"+companychoice

        },
        crossDomain: true,
        dataType: "json",
        success: function (response) {
            console.log(response)
            resp = response
            document.getElementById("question").innerHTML = response.question
            //document.getElementById("question_no").innerHTML = answer
            document.getElementById("option1").innerHTML = response[0].content
            document.getElementById("option2").innerHTML = response[1].content
            document.getElementById("option3").innerHTML = response[2].content
            document.getElementById("option4").innerHTML = response[3].content
            
            //console.log(response[0].nextid)
        }
    });
    
}
function expand(){
    document.querySelector('.question').classList.toggle('expand')

}
$(document).bind("contextmenu",function(e){
    e.preventDefault();
    console.log(e.pageX + "," + e.pageY);
    $("#cntnr").css("left",e.pageX);
    $("#cntnr").css("top",e.pageY);
   // $("#cntnr").hide(100);        
    $("#cntnr").fadeIn(200,startFocusOut());      
  });
  
  function startFocusOut(){
    $(document).on("click",function(){
    $("#cntnr").hide();        
    $(document).off("click");
    });
  }
  
  $("#items > li").click(function(){
  $("#op").text("You have selected "+$(this).text());
  });
const changecolor=()=>{
    const colors=['#0288d1','#388e3c','#f57c00','#e53935','#00897b','#303f9f']
    let i = Math.floor(6*Math.random())
    
    document.querySelector('.question').style.backgroundColor=colors[i];
    document.querySelector('#submit').style.backgroundColor=colors[i];
    document.querySelector('#expand-sym').style.backgroundColor=colors[i];
    //document.querySelector('#cntnr').style.backgroundColor=colors[i];
}

const Signout = ()=>{
    console.log("tried to signout")
    document.cookie=''
    localStorage.clear()
    location.href='/login'
}
const score = ()=>{
    Swal.fire({
        type: 'info',
        title: 'Score!',
        text: 156
        //footer: '<a href>Why do I have this issue?</a>'
      })
}









