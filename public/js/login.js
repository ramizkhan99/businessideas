





$(document).ready(function() {
    function disablePrev() { window.history.forward() }
    window.onload = disablePrev();
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
 });
 const submit = ()=>{
     let emailid=document.getElementById('email').value
    let passwordp=document.getElementById('password').value
    console.log(emailid,passwordp)
     firebase.auth().signInWithEmailAndPassword(emailid, passwordp).then(()=>{
         
         location.href='/companies'
         console.log(firebase.auth().currentUser.uid)
     }).catch(function(error) {
        alert("UserId or Password Incorrect")
      });
            
    
 }
