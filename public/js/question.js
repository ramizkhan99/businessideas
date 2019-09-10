let answer

function myFunction(option) {
    console.log(option)
    answer = option
}

const submit = () => {
    $.ajax({
        type: "POST",
        url: "https://us-central1-business-idea-c71fa.cloudfunctions.net/app/",
        data: {
            qno: answer
        },
        crossDomain: true,
        dataType: "json",
        success: function (response) {
            console.log(response)
            document.getElementById("question").innerHTML = response.question
            document.getElementById("question_no").innerHTML = answer
        }
    });
}
function expand(){
    document.querySelector('.question').classList.toggle('expand')
    let state=document.querySelector('#seemore').innerHTML
    if(state=="SEE MORE"){
        document.querySelector('#seemore').innerHTML="SEE LESS" 
    }
    else{
        document.querySelector('#seemore').innerHTML="SEE MORE"
    }
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